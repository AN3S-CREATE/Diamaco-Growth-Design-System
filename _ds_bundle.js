// LOCAL PREVIEW SHIM — not uploaded. claude.ai/design compiles the real _ds_bundle.js from components/** on its own.
// Loads every component source synchronously, rewrites import/export onto one namespace object, transpiles the JSX with the
// Babel standalone that each card loads first, and exposes the result as window.DIAMACOGROWTH_83a452 (same name the app uses).
(function () {
  var NS = 'DIAMACOGROWTH_83a452';
  var base = document.currentScript.src.replace(/[^/]*$/, '') + 'components/';
  var FILES = [
    'core/Icon', 'core/Button', 'core/SectionLabel', 'core/LiveBadge', 'core/Container', 'core/Divider', 'core/IconTile',
    'cards/Card', 'cards/Pillars', 'cards/ServiceGrid', 'cards/StatsBar', 'cards/BlogCard', 'cards/MetricCard', 'cards/PhotoFrame',
    'forms/Field', 'forms/ChoiceCard', 'forms/PillGroup', 'forms/StepProgress',
    'navigation/Breadcrumb', 'navigation/SiteNav', 'navigation/SiteFooter', 'navigation/WhatsAppButton',
    'sections/SectionHeading', 'sections/Hero', 'sections/PageHero', 'sections/Marquee', 'sections/ProcessSteps', 'sections/CtaBanner', 'sections/ServiceDetail',
  ];
  var DS = (window[NS] = window[NS] || {});
  FILES.forEach(function (f) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', base + f + '.jsx', false);
    xhr.send();
    if (xhr.status !== 200) throw new Error('_ds_bundle shim: ' + xhr.status + ' ' + f);
    var names = [];
    var src = xhr.responseText
      .replace(/^import\s+React\s*,?\s*(\{[^}]*\})?\s*from\s*['"]react['"];?[ \t]*$/mg, function (m, named) { return named ? 'const ' + named + ' = React;' : ''; })
      .replace(/^import\s*(\{[^}]*\})\s*from\s*['"][^'"]+['"];?[ \t]*$/mg, function (m, named) { return 'const ' + named + ' = DS;'; })
      .replace(/^export\s+(const|let|var|function|class)\s+([A-Za-z_$][\w$]*)/mg, function (m, kw, name) { names.push(name); return kw + ' ' + name; });
    var code = Babel.transform(src, { presets: ['react'], filename: f + '.jsx' }).code;
    new Function('React', 'DS', code + '\nObject.assign(DS, {' + names.join(',') + '});')(window.React, DS);
  });
})();
