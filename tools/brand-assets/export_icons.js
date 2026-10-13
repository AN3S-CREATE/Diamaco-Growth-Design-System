// Export ICONS from components/core/Icon.jsx to assets/icons/<name>.svg and write an icon sheet (icons.html) for review.
// usage: node export_icons.js <repoRoot> <sheetOut>
const fs = require('fs');
const path = require('path');
const [root, sheetOut] = process.argv.slice(2);
const src = fs.readFileSync(path.join(root, 'components/core/Icon.jsx'), 'utf8');
const m = src.match(/export const ICONS = (\{[\s\S]*?\n\});/);
if (!m) throw new Error('ICONS block not found');
const ICONS = Function('"use strict"; return (' + m[1] + ');')();
const outDir = path.join(root, 'assets/icons');
fs.mkdirSync(outDir, { recursive: true });
const attr = (o) => Object.entries(o).map(([k, v]) => `${k}="${v}"`).join(' ');
const names = Object.keys(ICONS);
for (const name of names) {
  const body = ICONS[name].map(([tag, props]) => `<${tag} ${attr(props)}/>`).join('');
  fs.writeFileSync(path.join(outDir, name + '.svg'),
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${body}</svg>\n`);
}
const cells = names.map((n) => `<div class="c"><img src="file:///${outDir.replace(/\\/g, '/')}/${n}.svg"><span>${n}</span></div>`).join('');
fs.writeFileSync(sheetOut, `<!doctype html><html><head><style>body{margin:0;padding:16px;background:#fff;font:11px sans-serif;color:#333}.g{display:grid;grid-template-columns:repeat(9,1fr);gap:10px}.c{display:flex;flex-direction:column;align-items:center;gap:6px;padding:10px;border:1px solid #ddd}.c img{width:48px;height:48px}</style></head><body><div class="g">${cells}</div></body></html>`);
console.log('exported', names.length, 'icons to', outDir);
