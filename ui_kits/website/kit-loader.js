// Loader for the website UI kit: fetches the design-system component sources and the kit screens in dependency order,
// rewrites their import/export lines onto one registry (window.DS), transpiles the JSX with Babel standalone and evaluates
// each file in its own scope. Runs straight from the folder — no build step, no dependency on _ds_bundle.js.
(async function () {
  const C = '../../components/';
  const FILES = [
    'core/Icon', 'core/Button', 'core/SectionLabel', 'core/LiveBadge', 'core/Container', 'core/Divider', 'core/IconTile',
    'brand/Logo',
    'cards/Card', 'cards/Pillars', 'cards/ServiceGrid', 'cards/StatsBar', 'cards/BlogCard', 'cards/MetricCard', 'cards/PhotoFrame',
    'forms/Field', 'forms/ChoiceCard', 'forms/PillGroup', 'forms/StepProgress',
    'feedback/Alert', 'feedback/Toast', 'feedback/Modal', 'content/Accordion', 'content/TestimonialCard',
    'navigation/Breadcrumb', 'navigation/SiteNav', 'navigation/SiteFooter', 'navigation/WhatsAppButton', 'navigation/StickyCtaBar',
    'sections/SectionHeading', 'sections/Hero', 'sections/PageHero', 'sections/Marquee', 'sections/ProcessSteps', 'sections/CtaBanner', 'sections/ServiceDetail',
  ].map((f) => C + f + '.jsx').concat(['AuditTool', 'HomeScreen', 'ServicesScreen', 'AuditScreen', 'ContactScreen', 'WebsiteApp'].map((f) => f + '.jsx'));
  const DS = (window.DS = window.DS || {});
  const texts = await Promise.all(FILES.map((u) => fetch(u).then((r) => { if (!r.ok) throw new Error('kit-loader: ' + r.status + ' ' + u); return r.text(); })));
  FILES.forEach((url, i) => {
    const names = [];
    const src = texts[i]
      .replace(/^import\s+React\s*,?\s*(\{[^}]*\})?\s*from\s*['"]react['"];?[ \t]*$/mg, (m, named) => (named ? 'const ' + named + ' = React;' : ''))
      .replace(/^import\s*(\{[^}]*\})\s*from\s*['"][^'"]+['"];?[ \t]*$/mg, (m, named) => 'const ' + named + ' = DS;')
      .replace(/^export\s+(const|let|var|function|class)\s+([A-Za-z_$][\w$]*)/mg, (m, kw, name) => { names.push(name); return kw + ' ' + name; });
    const code = Babel.transform(src, { presets: ['react'], filename: url, sourceMaps: false }).code;
    try {
      new Function('React', 'DS', code + '\nObject.assign(DS, {' + names.join(',') + '});')(window.React, DS);
    } catch (err) { console.error('kit-loader: failed in ' + url, err); throw err; }
  });
  window.dispatchEvent(new Event('kit-ready'));
})();
