"""Generate components/brand/Logo.jsx from assets/logos/*.svg (single source of truth for the artwork).
usage: python -I gen_logo_jsx.py <repoRoot>"""
import sys, os, re

root = sys.argv[1]
full = open(os.path.join(root, 'assets/logos/diamaco-growth-logo.svg'), encoding='utf-8').read()
mark = open(os.path.join(root, 'assets/logos/diamaco-mark-red.svg'), encoding='utf-8').read()
vb = re.search(r'viewBox="([^"]+)"', full).group(1)
rect = re.search(r'<rect x="([^"]+)" y="([^"]+)" width="([^"]+)" height="([^"]+)"/>', full).groups()
paths = re.findall(r'<path[^>]*d="([^"]+)"', full)
white_d, red_d = paths[0], paths[1]
mvb = re.search(r'viewBox="([^"]+)"', mark).group(1)
mark_d = re.search(r'<path[^>]*d="([^"]+)"', mark).group(1)

jsx = '''import React from 'react';

// GENERATED from assets/logos/diamaco-growth-logo.svg and diamaco-mark-red.svg — regenerate rather than hand-edit.
// Letters are Montserrat Bold / ExtraBold outlines; the slashed D is vectorised from the owner's rasters (see assets/logos/README.md).
export const LOGO_ART = {
  viewBox: '%s',
  rule: { x: %s, y: %s, width: %s, height: %s },
  white: '%s',
  red: '%s',
};
export const MARK_ART = {
  viewBox: '%s',
  d: '%s',
};

const FILLS = {
  full: ['var(--white)', 'var(--logo-red)'],
  white: ['var(--white)', 'var(--white)'],
  black: ['var(--black)', 'var(--black)'],
};

// The Diamaco Growth logo as inline SVG. variant: full (white + logo red) | white | black | mark (red D) | mark-tile (red D on black square).
// Size by height (default 48) or width; the other side follows the artwork's aspect ratio.
export function Logo({ variant = 'full', height, width, title = 'Diamaco Growth', className, style, ...rest }) {
  const isMark = variant === 'mark' || variant === 'mark-tile';
  const vb = (isMark ? MARK_ART.viewBox : LOGO_ART.viewBox).split(' ').map(Number);
  const ratio = vb[2] / vb[3];
  const h = height || (width ? width / ratio : 48);
  const w = width || h * ratio;
  const common = { role: 'img', 'aria-label': title, width: w, height: h, className, style, ...rest };
  if (isMark) {
    return (
      <svg viewBox={MARK_ART.viewBox} {...common}>
        {variant === 'mark-tile' && <rect x={-vb[2] * 0.25} y={-vb[3] * 0.2} width={vb[2] * 1.5} height={vb[3] * 1.4} style={{ fill: 'var(--black)' }} />}
        <path d={MARK_ART.d} fillRule="evenodd" style={{ fill: 'var(--logo-red)' }} />
      </svg>
    );
  }
  const [cw, cr] = FILLS[variant] || FILLS.full;
  const r = LOGO_ART.rule;
  return (
    <svg viewBox={LOGO_ART.viewBox} {...common}>
      <rect x={r.x} y={r.y} width={r.width} height={r.height} style={{ fill: cw }} />
      <path d={LOGO_ART.white} style={{ fill: cw }} />
      <path d={LOGO_ART.red} fillRule="evenodd" style={{ fill: cr }} />
    </svg>
  );
}
''' % (vb, rect[0], rect[1], rect[2], rect[3], white_d, red_d, mvb, mark_d)
os.makedirs(os.path.join(root, 'components/brand'), exist_ok=True)
open(os.path.join(root, 'components/brand/Logo.jsx'), 'w', encoding='utf-8', newline='\n').write(jsx)
print('Logo.jsx written', len(jsx), 'bytes; viewBox', vb, '| mark', mvb)
