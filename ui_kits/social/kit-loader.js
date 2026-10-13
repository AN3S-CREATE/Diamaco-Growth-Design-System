// Loader for the social kit (same approach as ui_kits/website/kit-loader.js): fetch sources, rewrite imports onto window.DS,
// transpile with Babel standalone, then dispatch `kit-ready`.
(async function () {
  const C = '../../components/';
  const FILES = ['core/Icon', 'brand/Logo', 'brand/SocialPost'].map((f) => C + f + '.jsx').concat(['posts.jsx', 'SocialGallery.jsx']);
  const DS = (window.DS = window.DS || {});
  const texts = await Promise.all(FILES.map((u) => fetch(u).then((r) => { if (!r.ok) throw new Error('kit-loader: ' + r.status + ' ' + u); return r.text(); })));
  FILES.forEach((url, i) => {
    const names = [];
    const src = texts[i]
      .replace(/^import\s+React\s*,?\s*(\{[^}]*\})?\s*from\s*['"]react['"];?[ \t]*$/mg, (m, named) => (named ? 'const ' + named + ' = React;' : ''))
      .replace(/^import\s*(\{[^}]*\})\s*from\s*['"][^'"]+['"];?[ \t]*$/mg, (m, named) => 'const ' + named + ' = DS;')
      .replace(/^export\s+(const|let|var|function|class)\s+([A-Za-z_$][\w$]*)/mg, (m, kw, name) => { names.push(name); return kw + ' ' + name; });
    const code = Babel.transform(src, { presets: ['react'], filename: url, sourceMaps: false }).code;
    new Function('React', 'DS', code + '\nObject.assign(DS, {' + names.join(',') + '});')(window.React, DS);
  });
  window.dispatchEvent(new Event('kit-ready'));
})();
