Top bar: logo left, six caps links, small red "Start a project" CTA right.
```jsx
<SiteNav active="/services" fixed solid={scrolled} />          {/* inline vector logo */}
<SiteNav logoSrc="assets/logos/diamaco-growth-logo.svg" compact solid cta={null} />
```
- Transparent over the hero; switch to `solid` once the page scrolls (the site does this at ~50px).
- Keep the six links and their order: Home · About · Services · AI Audit · Insights · Contact.
