"""Vectorise the slashed D from the 512px mark into lines + cubic Beziers (structured segments).
Imported by build_logo.py; can also run standalone: python -I dmark.py <mark512.png> <out.svg>"""
import sys
import numpy as np
import cv2

P = dict(SCALE=8, BLUR=0.45, SPACING=0.6, CORNER_K=5, CORNER_DEG=28, LINE_TOL=0.5, MIN_LINE=30.0, CURVE_TOL=0.45)


def red_mask(img):
    b, g, r = [img[..., i].astype(np.float32) for i in range(3)]
    a = np.maximum(r, np.maximum(g, b)) / 255.0
    return np.where((g / np.maximum(r, 1)) < 0.55, a, 0.0)


def contours_of(mask):
    S = P['SCALE']
    h, w = mask.shape
    up = cv2.GaussianBlur(cv2.resize(mask, (w * S, h * S), interpolation=cv2.INTER_CUBIC), (0, 0), S * P['BLUR'])
    cs, _ = cv2.findContours((up > 0.5).astype(np.uint8), cv2.RETR_CCOMP, cv2.CHAIN_APPROX_NONE)
    return [(c.reshape(-1, 2).astype(np.float64) + 0.5) / S - 0.5 for c in cs if cv2.contourArea(c) > (S * 4) ** 2]


def resample(p, step):
    q = np.vstack([p, p[:1]])
    s = np.concatenate([[0], np.cumsum(np.linalg.norm(np.diff(q, axis=0), axis=1))])
    t = np.linspace(0, s[-1], max(8, int(s[-1] / step)), endpoint=False)
    return np.column_stack([np.interp(t, s, q[:, 0]), np.interp(t, s, q[:, 1])])


def corners(p):
    n, k = len(p), P['CORNER_K']
    a = p - np.roll(p, k, axis=0)
    b = np.roll(p, -k, axis=0) - p
    ang = np.degrees(np.abs(np.arctan2(a[:, 0] * b[:, 1] - a[:, 1] * b[:, 0], (a * b).sum(1))))
    keep = []
    for i in range(n):
        if ang[i] > P['CORNER_DEG'] and ang[i] >= max(ang[(i + d) % n] for d in range(-k, k + 1)):
            if not keep or (i - keep[-1]) % n > k:
                keep.append(i)
    return keep


def bez(c, t):
    t = t[:, None]; mt = 1 - t
    return mt ** 3 * c[0] + 3 * mt ** 2 * t * c[1] + 3 * mt * t ** 2 * c[2] + t ** 3 * c[3]


def d1(c, t):
    t = t[:, None]; mt = 1 - t
    return 3 * mt ** 2 * (c[1] - c[0]) + 6 * mt * t * (c[2] - c[1]) + 3 * t ** 2 * (c[3] - c[2])


def d2(c, t):
    t = t[:, None]
    return 6 * (1 - t) * (c[2] - 2 * c[1] + c[0]) + 6 * t * (c[3] - 2 * c[2] + c[1])


def unit(v):
    n = np.linalg.norm(v)
    return v / n if n > 1e-12 else v


def gen(pts, u, t1, t2):
    p0, p3 = pts[0], pts[-1]
    A1 = t1[None] * (3 * (1 - u) ** 2 * u)[:, None]
    A2 = t2[None] * (3 * (1 - u) * u ** 2)[:, None]
    C = np.array([[(A1 * A1).sum(), (A1 * A2).sum()], [(A1 * A2).sum(), (A2 * A2).sum()]])
    tmp = pts - bez(np.array([p0, p0, p3, p3]), u)
    X = np.array([(A1 * tmp).sum(), (A2 * tmp).sum()])
    seg = np.linalg.norm(p3 - p0)
    try:
        a1, a2 = np.linalg.solve(C, X)
    except np.linalg.LinAlgError:
        a1 = a2 = seg / 3
    if a1 < 1e-6 * seg or a2 < 1e-6 * seg:
        a1 = a2 = seg / 3
    return np.array([p0, p0 + t1 * a1, p3 + t2 * a2, p3])


def fit(pts, t1, t2, tol, depth=0):
    if len(pts) <= 2:
        dd = np.linalg.norm(pts[-1] - pts[0]) / 3
        return [np.array([pts[0], pts[0] + t1 * dd, pts[-1] + t2 * dd, pts[-1]])]
    d = np.concatenate([[0], np.cumsum(np.linalg.norm(np.diff(pts, axis=0), axis=1))])
    u = d / d[-1]
    c = gen(pts, u, t1, t2)
    err = np.linalg.norm(bez(c, u) - pts, axis=1)
    if err.max() < tol:
        return [c]
    if err.max() < 4 * tol:
        for _ in range(8):
            q, q1, q2 = bez(c, u), d1(c, u), d2(c, u)
            num = ((q - pts) * q1).sum(1); den = (q1 * q1).sum(1) + ((q - pts) * q2).sum(1)
            u = np.clip(np.where(np.abs(den) > 1e-12, u - num / np.where(den == 0, 1, den), u), 0, 1)
            c = gen(pts, u, t1, t2)
            err = np.linalg.norm(bez(c, u) - pts, axis=1)
            if err.max() < tol:
                return [c]
    if depth > 10:
        return [c]
    i = min(max(int(np.argmax(err)), 1), len(pts) - 2)
    tc = unit(pts[i - 1] - pts[i + 1])
    return fit(pts[:i + 1], t1, tc, tol, depth + 1) + fit(pts[i:], -tc, t2, tol, depth + 1)


def chord_dev(pts):
    a, b = pts[0], pts[-1]
    ab = b - a; L = np.linalg.norm(ab)
    return 0.0 if L < 1e-9 else np.abs(ab[0] * (pts[:, 1] - a[1]) - ab[1] * (pts[:, 0] - a[0])).max() / L


def split_run(run):
    """Split a corner-to-corner run into maximal straight pieces (>= MIN_LINE long, within LINE_TOL) and curve pieces."""
    tol, minlen = P['LINE_TOL'], P.get('MIN_LINE', 6.0)
    n = len(run)
    pieces, i, buf = [], 0, 0
    while i < n - 1:
        j = i + 1
        while j + 1 < n and chord_dev(run[i:j + 2]) <= tol:
            j += 1
        if np.linalg.norm(run[j] - run[i]) >= minlen:
            if i > buf:
                pieces.append(('C', buf, i))
            pieces.append(('L', i, j))
            i = buf = j
        else:
            i += 1
    if buf < n - 1:
        pieces.append(('C', buf, n - 1))
    return pieces


def vectorize(mask):
    """-> list of closed contours; each is a list of segments: ('L', p0, p1) or ('C', p0, c1, c2, p1)."""
    out = []
    for c in contours_of(mask):
        p = resample(c, P['SPACING'])
        n = len(p)
        cs = corners(p)
        smooth = not cs
        cs = cs or [0, n // 4, n // 2, 3 * n // 4]
        segs = []
        for j in range(len(cs)):
            a, b = cs[j], cs[(j + 1) % len(cs)]
            run = np.array([p[(a + k) % n] for k in range(((b - a) % n) + 1)])
            if len(run) < 2:
                continue
            pieces = [('C', 0, len(run) - 1)] if smooth else split_run(run)
            for k, (kind, s, e) in enumerate(pieces):
                sub = run[s:e + 1]
                if kind == 'L':
                    segs.append(('L', sub[0], sub[-1]))
                    continue
                # tangents: continue an adjacent straight piece (G1 join); otherwise estimate locally
                prev_l = k > 0 and pieces[k - 1][0] == 'L'
                next_l = k + 1 < len(pieces) and pieces[k + 1][0] == 'L'
                if smooth:
                    t1 = unit(p[(a + 1) % n] - p[(a - 1) % n]); t2 = -unit(p[(b + 1) % n] - p[(b - 1) % n])
                else:
                    t1 = unit(run[pieces[k - 1][2]] - run[pieces[k - 1][1]]) if prev_l else unit(sub[min(4, len(sub) - 1)] - sub[0])
                    t2 = -unit(run[pieces[k + 1][2]] - run[pieces[k + 1][1]]) if next_l else unit(sub[max(-5, -len(sub))] - sub[-1])
                for cc in fit(sub, t1, t2, P['CURVE_TOL']):
                    segs.append(('C', cc[0], cc[1], cc[2], cc[3]))
        out.append(segs)
    return out


def transform(contours, sx, sy, ox, oy):
    f = lambda q: np.array([q[0] * sx + ox, q[1] * sy + oy])
    return [[(s[0],) + tuple(f(q) for q in s[1:]) for s in segs] for segs in contours]


def to_d(contours):
    fm = lambda v: ('%.2f' % v).rstrip('0').rstrip('.')
    pt = lambda q: fm(q[0]) + ' ' + fm(q[1])
    out = ''
    for segs in contours:
        out += 'M' + pt(segs[0][1])
        for s in segs:
            out += ('L' + pt(s[2])) if s[0] == 'L' else ('C' + ' '.join(pt(q) for q in s[2:5]))
        out += 'Z'
    return out


def flatten(contours):
    polys = []
    for segs in contours:
        pts = []
        for s in segs:
            pts.extend([s[1], s[2]] if s[0] == 'L' else list(bez(np.array(s[1:5]), np.linspace(0, 1, 12))))
        polys.append(np.array(pts))
    return polys


def bbox(contours):
    a = np.vstack(flatten(contours))
    return a.min(0), a.max(0)


if __name__ == '__main__':
    img = cv2.imread(sys.argv[1])[..., :3]
    v = vectorize(red_mask(img))
    open(sys.argv[2], 'w', encoding='utf-8').write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512"/><path fill="#ef212d" fill-rule="evenodd" d="%s"/></svg>' % to_d(v))
    print('contours', len(v), 'segments', sum(len(s) for s in v))
