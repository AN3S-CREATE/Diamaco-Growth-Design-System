"""Rebuild the Diamaco Growth logo as clean vectors.
- IAMACO: Montserrat Bold outlines; GROWTH: Montserrat ExtraBold outlines (OFL), placed on the original letters' positions.
- Rule: exact rectangle measured from the PNG's coverage.
- Slashed D: traced from the 512px mark (higher resolution), fitted to the logo's D box.
usage: python -I build_logo.py <logo.png> <mark512.png> <glyphs.json> <outdir>"""
import sys, os, json, re
import numpy as np
import cv2

SC = 4
TOK = re.compile(r'[MLQCZ]|-?\d*\.?\d+')


def masks(img):
    if img.shape[2] == 4:
        b, g, r, a = [img[..., i].astype(np.float32) for i in range(4)]
        a = a / 255.0
    else:
        b, g, r = [img[..., i].astype(np.float32) for i in range(3)]
        a = np.maximum(r, np.maximum(g, b)) / 255.0
    isr = (g / np.maximum(r, 1)) < 0.55
    return np.where(isr, a, 0.0), np.where(~isr, a, 0.0), (r, g, b, a, isr)


def components(mask):
    n, lab, st, _ = cv2.connectedComponentsWithStats((mask > 0.5).astype(np.uint8), 8)
    out = [dict(x=int(st[i][0]), y=int(st[i][1]), w=int(st[i][2]), h=int(st[i][3]), lab=(lab == i)) for i in range(1, n) if st[i][4] >= 30]
    return sorted(out, key=lambda c: (c['y'] // 60, c['x']))


def subpix_box(mask, c):
    """Sub-pixel bbox of a component from its soft coverage (sum of coverage across rows/cols)."""
    pad = 3
    m = mask[c['y'] - pad:c['y'] + c['h'] + pad, c['x'] - pad:c['x'] + c['w'] + pad] * c['lab'][c['y'] - pad:c['y'] + c['h'] + pad, c['x'] - pad:c['x'] + c['w'] + pad].astype(np.float32).clip(0, 1)
    m = mask[c['y'] - pad:c['y'] + c['h'] + pad, c['x'] - pad:c['x'] + c['w'] + pad]
    return m


# ---------- glyph paths ----------
def glyph_cmds(d):
    toks = TOK.findall(d)
    out, i, cmd = [], 0, None
    while i < len(toks):
        if toks[i] in 'MLQCZ':
            cmd = toks[i]; i += 1
            if cmd == 'Z':
                out.append(('Z', [])); continue
        n = {'M': 2, 'L': 2, 'Q': 4, 'C': 6}[cmd]
        out.append((cmd, [float(v) for v in toks[i:i + n]])); i += n
    return out


def transform_cmds(cmds, s, ox, oy):
    res = []
    for c, v in cmds:
        res.append((c, [(v[k] * s + ox) if k % 2 == 0 else (v[k] * s + oy) for k in range(len(v))]))
    return res


def cmds_to_d(cmds, dx, dy):
    parts = []
    for c, v in cmds:
        if c == 'Z':
            parts.append('Z'); continue
        vv = [(v[k] - dx) if k % 2 == 0 else (v[k] - dy) for k in range(len(v))]
        parts.append(c + ' '.join(('%.2f' % x).rstrip('0').rstrip('.') for x in vv))
    return ''.join(parts)


def flatten(cmds):
    polys, cur, pos = [], [], np.zeros(2)
    for c, v in cmds:
        if c == 'M':
            if cur: polys.append(np.array(cur))
            pos = np.array(v[:2]); cur = [pos]
        elif c == 'L':
            pos = np.array(v[:2]); cur.append(pos)
        elif c == 'Q':
            c1, p = np.array(v[:2]), np.array(v[2:4])
            for t in np.linspace(0, 1, 9)[1:]:
                cur.append((1 - t) ** 2 * pos + 2 * (1 - t) * t * c1 + t ** 2 * p)
            pos = p
        elif c == 'C':
            c1, c2, p = np.array(v[:2]), np.array(v[2:4]), np.array(v[4:6])
            for t in np.linspace(0, 1, 11)[1:]:
                mt = 1 - t
                cur.append(mt ** 3 * pos + 3 * mt ** 2 * t * c1 + 3 * mt * t ** 2 * c2 + t ** 3 * p)
            pos = p
        elif c == 'Z':
            if cur: polys.append(np.array(cur)); cur = []
    if cur: polys.append(np.array(cur))
    return polys


def place_row(comps, chars, glyphs, flat_chars):
    """Uniform scale from flat (non-overshoot) letters; baseline from their bottoms; x from each component's centre."""
    ratios = [c['h'] / (glyphs[ch]['bbox']['y2'] - glyphs[ch]['bbox']['y1']) for c, ch in zip(comps, chars) if ch in flat_chars]
    s = float(np.median(ratios))
    base = float(np.median([c['y'] + c['h'] for c, ch in zip(comps, chars) if ch in flat_chars]))
    out = []
    for c, ch in zip(comps, chars):
        bb = glyphs[ch]['bbox']
        cx = c['x'] + c['w'] / 2
        ox = cx - (bb['x1'] + bb['x2']) / 2 * s
        oy = base  # glyph baseline is y=0 (y-down coordinates, so the cap top is negative)
        out.append(transform_cmds(glyph_cmds(glyphs[ch]['d']), s, ox, oy))
    return out, s, base


# ---------- D-mark trace (polygon, high-res source) ----------
def trace_poly(mask, scale=4, eps=1.0):
    h, w = mask.shape
    up = cv2.resize(mask, (w * scale, h * scale), interpolation=cv2.INTER_CUBIC)
    up = cv2.GaussianBlur(up, (0, 0), scale * 0.4)
    cs, _ = cv2.findContours((up > 0.5).astype(np.uint8), cv2.RETR_CCOMP, cv2.CHAIN_APPROX_NONE)
    out = []
    for c in cs:
        if cv2.contourArea(c) < (scale * 3) ** 2:
            continue
        ap = cv2.approxPolyDP(c, eps, True).reshape(-1, 2).astype(np.float64)
        out.append((ap + 0.5) / scale - 0.5)
    return out


def poly_d(polys, dx, dy):
    return ''.join('M' + ' L'.join(('%.2f %.2f' % (x - dx, y - dy)) for x, y in p) + 'Z' for p in polys)


def raster(polys, shape, off, scale):
    canvas = np.zeros(shape, np.uint8)
    for p in polys:
        tmp = np.zeros_like(canvas)
        cv2.fillPoly(tmp, [np.round((p - off + 0.5) * scale - 0.5).astype(np.int32)], 1)
        canvas ^= tmp
    return canvas.astype(bool)


def iou_layer(polys, mask, scale=4):
    h, w = mask.shape
    got = raster(polys, (h * scale, w * scale), np.zeros(2), scale)
    ref = cv2.resize(mask, (w * scale, h * scale), interpolation=cv2.INTER_CUBIC) > 0.5
    return (ref & got).sum() / max(1, (ref | got).sum())


def svg(w, h, body, title='Diamaco Growth'):
    f = lambda v: ('%.2f' % v).rstrip('0').rstrip('.')
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %s %s" role="img" aria-label="%s">\n<title>%s</title>\n%s\n</svg>\n' % (f(w), f(h), title, title, body)


def main(logo, mark, gjson, outdir):
    os.makedirs(outdir, exist_ok=True)
    G = json.load(open(gjson, encoding='utf-8-sig'))
    bold, xbold = G['700']['glyphs'], G['800']['glyphs']
    img = cv2.imread(logo, cv2.IMREAD_UNCHANGED)
    red, white, (r, g, b, a, isr) = masks(img)
    RED = '#%02x%02x%02x' % tuple(int(np.median(c[isr & (a > 0.98)])) for c in (r, g, b))
    wc, rc = components(white), components(red)
    rule = max(wc, key=lambda c: c['w'] / max(1, c['h']))
    top = [c for c in wc if c is not rule]
    bottom = [c for c in rc if c['y'] > rule['y']]
    dparts = [c for c in rc if c['y'] <= rule['y']]

    top_cmds, s1, b1 = place_row(top, 'IAMACO', bold, 'IAMA')
    bot_cmds, s2, b2 = place_row(bottom, 'GROWTH', xbold, 'RWTH')

    # rule: exact edges from coverage (rows/cols summed over the rule's interior)
    ry0, ry1 = rule['y'] - 2, rule['y'] + rule['h'] + 2
    rx0, rx1 = rule['x'] - 2, rule['x'] + rule['w'] + 2
    col = white[ry0:ry1, rule['x'] + 20:rule['x'] + rule['w'] - 20].mean(1)
    thick = col.sum()
    centre = ry0 + (np.arange(len(col)) + 0.5) @ col / thick
    row = white[rule['y'] + 3:rule['y'] + rule['h'] - 3, rx0:rx1].mean(0)
    width = row.sum()
    cx_ = rx0 + (np.arange(len(row)) + 0.5) @ row / width
    rule_rect = (cx_ - width / 2, centre - thick / 2, width, thick)

    # D-mark from the 512 mark, fitted into the logo's D box (height-based scale, left/top aligned)
    m = cv2.imread(mark, cv2.IMREAD_UNCHANGED)[..., :3]
    mred, _, _ = masks(m)
    mpolys = trace_poly(mred, 4, 1.0)
    mp = np.vstack(mpolys)
    mx0, my0 = mp.min(0); mx1, my1 = mp.max(0)
    dlx0 = min(c['x'] for c in dparts); dly0 = min(c['y'] for c in dparts)
    dlx1 = max(c['x'] + c['w'] for c in dparts); dly1 = max(c['y'] + c['h'] for c in dparts)
    # sub-pixel D box in the logo from the soft red coverage
    sub = red[dly0 - 3:dly1 + 3, dlx0 - 3:dlx1 + 3]
    cols = np.where(sub.max(0) > 0.5)[0]; rows = np.where(sub.max(1) > 0.5)[0]
    LX0, LX1 = dlx0 - 3 + cols[0], dlx0 - 3 + cols[-1] + 1
    LY0, LY1 = dly0 - 3 + rows[0], dly0 - 3 + rows[-1] + 1
    sD = (LY1 - LY0) / (my1 - my0)
    aspect_err = ((mx1 - mx0) * sD) / (LX1 - LX0) - 1
    # Clean D from the 512 mark (lines + Beziers), fitted into the logo's D box. Try uniform and box-fit scaling; keep the better.
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import dmark
    if m.shape[0] >= 1000:  # 1080 master D: features ~2.1x larger than the 512 icon
        dmark.P.update(SCALE=4, BLUR=0.6, SPACING=1.0, CORNER_K=5, CORNER_DEG=28, LINE_TOL=0.8, MIN_LINE=60.0, CURVE_TOL=0.7)
    dvec = dmark.vectorize(dmark.red_mask(m))
    (vx0, vy0), (vx1, vy1) = dmark.bbox(dvec)
    dmask = np.zeros_like(red)
    for c in dparts:
        dmask = np.maximum(dmask, red * cv2.dilate(c['lab'].astype(np.uint8), np.ones((5, 5), np.uint8)))
    best = None
    for mode in ('uniform', 'boxfit'):
        sy = (LY1 - LY0) / (vy1 - vy0)
        sx = sy if mode == 'uniform' else (LX1 - LX0) / (vx1 - vx0)
        cand = dmark.transform(dvec, sx, sy, LX0 - vx0 * sx, LY0 - vy0 * sy)
        sc = iou_layer(dmark.flatten(cand), dmask)
        print('D fit %-7s IoU %.4f' % (mode, sc))
        if best is None or sc > best[0]:
            best = (sc, cand, mode)
    # The two D drawings differ, so also vectorise the logo's own D (params scaled to its smaller size) and keep the best.
    saved = dict(dmark.P)
    dmark.P.update(SCALE=12, BLUR=0.55, SPACING=0.45, CORNER_K=5, CORNER_DEG=26, LINE_TOL=0.45, MIN_LINE=19.0, CURVE_TOL=0.5)
    own = dmark.vectorize(dmask)
    dmark.P.update(saved)
    sc = iou_layer(dmark.flatten(own), dmask)
    print('D fit own     IoU %.4f' % sc)
    if sc > best[0]:
        best = (sc, own, 'own')
    dvec_logo = best[1]
    print('D source used:', best[2])
    dpolys = dmark.flatten(dvec_logo)

    # quality report (rasterised overlap with the PNG layers)
    white_polys = [pp for cm in top_cmds for pp in flatten(cm)] + [np.array([[rule_rect[0], rule_rect[1]], [rule_rect[0] + rule_rect[2], rule_rect[1]], [rule_rect[0] + rule_rect[2], rule_rect[1] + rule_rect[3]], [rule_rect[0], rule_rect[1] + rule_rect[3]]])]
    red_polys = [pp for cm in bot_cmds for pp in flatten(cm)] + dpolys
    print('scale top %.4f base %.2f | bottom %.4f base %.2f | D aspect err %+.3f | red %s' % (s1, b1, s2, b2, aspect_err, RED))
    print('IoU white %.4f  red %.4f  (traced-only versions were 0.994 / 0.993)' % (iou_layer(white_polys, white), iou_layer(red_polys, red)))
    # diff image: grey = both, green = PNG only, magenta = SVG only (x2)
    k = 2
    hh, ww = white.shape
    for name, polys, msk in (('white', white_polys, white), ('red', red_polys, red)):
        got = raster(polys, (hh * k, ww * k), np.zeros(2), k)
        ref = cv2.resize(msk, (ww * k, hh * k), interpolation=cv2.INTER_CUBIC) > 0.5
        vis = np.zeros((hh * k, ww * k, 3), np.uint8)
        vis[ref & got] = (90, 90, 90)
        vis[ref & ~got] = (0, 220, 0)
        vis[~ref & got] = (230, 0, 230)
        cv2.imwrite(os.path.join(outdir, 'diff-%s.png' % name), vis[150 * k:600 * k, 140 * k:1240 * k])

    # bbox + output
    allp = np.vstack(white_polys + red_polys)
    x0, y0 = allp.min(0); x1, y1 = allp.max(0)
    pad = round(0.06 * (y1 - y0))
    dx, dy = x0 - pad, y0 - pad
    W, H = x1 - x0 + 2 * pad, y1 - y0 + 2 * pad
    rect = '<rect x="%.2f" y="%.2f" width="%.2f" height="%.2f"/>' % (rule_rect[0] - dx, rule_rect[1] - dy, rule_rect[2], rule_rect[3])
    d_white = ''.join(cmds_to_d(cm, dx, dy) for cm in top_cmds)
    d_red = ''.join(cmds_to_d(cm, dx, dy) for cm in bot_cmds) + dmark.to_d(dmark.transform(dvec_logo, 1, 1, -dx, -dy))
    def body(cw, cr):
        return '<g fill="%s">%s<path d="%s"/></g>\n<path fill="%s" fill-rule="evenodd" d="%s"/>' % (cw, rect, d_white, cr, d_red)
    open(os.path.join(outdir, 'diamaco-growth-logo.svg'), 'w', encoding='utf-8').write(svg(W, H, body('#ffffff', RED)))
    open(os.path.join(outdir, 'diamaco-growth-logo-mono-white.svg'), 'w', encoding='utf-8').write(svg(W, H, body('#ffffff', '#ffffff')))
    open(os.path.join(outdir, 'diamaco-growth-logo-mono-black.svg'), 'w', encoding='utf-8').write(svg(W, H, body('#0a0a0a', '#0a0a0a')))

    # D-mark files (from the 512 trace directly)
    S = m.shape[1]
    MRED = RED
    open(os.path.join(outdir, 'diamaco-mark.svg'), 'w', encoding='utf-8').write(svg(S, S, '<rect width="%d" height="%d" fill="#000000"/>\n<path fill="%s" fill-rule="evenodd" d="%s"/>' % (S, S, MRED, dmark.to_d(dvec))))
    p2 = round(0.04 * (vy1 - vy0))
    open(os.path.join(outdir, 'diamaco-mark-red.svg'), 'w', encoding='utf-8').write(svg(vx1 - vx0 + 2 * p2, vy1 - vy0 + 2 * p2, '<path fill="%s" fill-rule="evenodd" d="%s"/>' % (MRED, dmark.to_d(dmark.transform(dvec, 1, 1, -(vx0 - p2), -(vy0 - p2))))))
    print('mark IoU %.4f (clean D vs 512 source)' % iou_layer(dmark.flatten(dvec), mred))
    print('viewBox %.1f x %.1f' % (W, H))
    for f in sorted(os.listdir(outdir)):
        if f.endswith('.svg'):
            print(f, os.path.getsize(os.path.join(outdir, f)), 'bytes')


if __name__ == '__main__':
    main(*sys.argv[1:5])
