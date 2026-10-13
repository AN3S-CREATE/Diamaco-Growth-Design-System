"""Match the logo's letters against Montserrat glyph outlines.
usage: python -I glyphmatch.py <logo.png> <glyphs.json>"""
import sys, json, re
import numpy as np
import cv2

S = 4


def masks(img):
    b, g, r, a = [img[..., i].astype(np.float32) for i in range(4)]
    a = a / 255.0
    isr = (g / np.maximum(r, 1)) < 0.55
    return np.where(isr, a, 0.0), np.where(~isr, a, 0.0)


def components(mask):
    binm = (mask > 0.5).astype(np.uint8)
    n, lab, st, _ = cv2.connectedComponentsWithStats(binm, 8)
    out = []
    for i in range(1, n):
        x, y, w, h, area = st[i]
        if area < 30:
            continue
        out.append(dict(x=int(x), y=int(y), w=int(w), h=int(h), area=int(area), mask=(lab == i)))
    return sorted(out, key=lambda c: (c['y'] // 60, c['x']))


TOK = re.compile(r'[MLQCZ]|-?\d*\.?\d+')


def parse(d):
    """opentype path data -> list of polygons (flattened)."""
    toks = TOK.findall(d)
    polys, cur, i, cmd, pos = [], [], 0, None, np.zeros(2)
    def num():
        nonlocal i
        v = float(toks[i]); i += 1
        return v
    while i < len(toks):
        t = toks[i]
        if t in 'MLQCZ':
            cmd = t; i += 1
            if cmd == 'Z':
                if cur: polys.append(np.array(cur)); cur = []
                continue
        if cmd == 'M':
            if cur: polys.append(np.array(cur))
            pos = np.array([num(), num()]); cur = [pos]
        elif cmd == 'L':
            pos = np.array([num(), num()]); cur.append(pos)
        elif cmd == 'Q':
            c1 = np.array([num(), num()]); p = np.array([num(), num()])
            for t_ in np.linspace(0, 1, 9)[1:]:
                cur.append((1 - t_) ** 2 * pos + 2 * (1 - t_) * t_ * c1 + t_ ** 2 * p)
            pos = p
        elif cmd == 'C':
            c1 = np.array([num(), num()]); c2 = np.array([num(), num()]); p = np.array([num(), num()])
            for t_ in np.linspace(0, 1, 11)[1:]:
                mt = 1 - t_
                cur.append(mt ** 3 * pos + 3 * mt ** 2 * t_ * c1 + 3 * mt * t_ ** 2 * c2 + t_ ** 3 * p)
            pos = p
    if cur: polys.append(np.array(cur))
    return polys


def raster(polys, shape):
    canvas = np.zeros(shape, np.uint8)
    for p in polys:
        tmp = np.zeros_like(canvas)
        cv2.fillPoly(tmp, [np.round(p).astype(np.int32)], 1)
        canvas ^= tmp
    return canvas.astype(bool)


def fit_glyph(comp, glyph, src_mask):
    bb = glyph['bbox']
    gw, gh = bb['x2'] - bb['x1'], bb['y2'] - bb['y1']
    s = comp['h'] / gh
    cx = comp['x'] + comp['w'] / 2
    ox = cx - (bb['x1'] + gw / 2) * s
    oy = comp['y'] - bb['y1'] * s
    polys = [np.column_stack([(p[:, 0] * s + ox), (p[:, 1] * s + oy)]) for p in parse(glyph['d'])]
    pad = 6
    X0, Y0 = comp['x'] - pad, comp['y'] - pad
    W, H = comp['w'] + 2 * pad, comp['h'] + 2 * pad
    got = raster([(p - [X0, Y0] + 0.5) * S - 0.5 for p in polys], (H * S, W * S))
    crop = src_mask[Y0:Y0 + H, X0:X0 + W]
    ref = cv2.resize(crop.astype(np.float32), (W * S, H * S), interpolation=cv2.INTER_CUBIC) > 0.5
    iou = (ref & got).sum() / max(1, (ref | got).sum())
    return iou, gw * s / comp['w'], s


def main(logo, gjson):
    img = cv2.imread(logo, cv2.IMREAD_UNCHANGED)
    red, white = masks(img)
    G = json.load(open(gjson, encoding='utf-8-sig'))
    wc, rc = components(white), components(red)
    print('white comps:', [(c['x'], c['y'], c['w'], c['h']) for c in wc])
    print('red comps:', [(c['x'], c['y'], c['w'], c['h']) for c in rc])
    rule = max(wc, key=lambda c: c['w'] / max(1, c['h']))
    letters_w = [c for c in wc if c is not rule]
    top_y = min(c['y'] for c in letters_w)
    red_bottom = [c for c in rc if c['y'] > rule['y']]
    red_top = [c for c in rc if c['y'] <= rule['y']]
    print('rule', rule['x'], rule['y'], rule['w'], rule['h'], '| red top pieces', [(c['x'], c['y'], c['w'], c['h']) for c in red_top])
    for row, chars, comps, msk in (('top', 'IAMACO', letters_w, white), ('bottom', 'GROWTH', red_bottom, red)):
        if len(comps) != len(chars):
            print(row, 'component count mismatch', len(comps), len(chars)); continue
        for wgt in sorted(G):
            res = [fit_glyph(c, G[wgt]['glyphs'][ch], msk) for c, ch in zip(comps, chars)]
            print('%s w%s IoU %s | mean %.4f | width ratio %s' % (row, wgt, ' '.join('%s%.3f' % (ch, r[0]) for ch, r in zip(chars, res)), np.mean([r[0] for r in res]), ' '.join('%.2f' % r[1] for r in res)))
    # D: compare the red-top union against Montserrat D (to see if the mark is a cut D)
    if red_top:
        x0 = min(c['x'] for c in red_top); y0 = min(c['y'] for c in red_top)
        x1 = max(c['x'] + c['w'] for c in red_top); y1 = max(c['y'] + c['h'] for c in red_top)
        print('D-mark bbox', x0, y0, x1 - x0, y1 - y0, '| top-row letter cap height', np.median([c['h'] for c in letters_w]))


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
