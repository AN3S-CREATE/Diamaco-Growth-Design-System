The home "What we do" grid: tiles separated by 1px hairlines, red number, title, one line. `SERVICES` holds all ten services with the site's wording.
```jsx
<ServiceGrid />                          {/* first 9, as on the home page */}
<ServiceGrid limit={6} />
<ServiceGrid services={SERVICES.map(s => ({ ...s, href: '/services#' + s.num }))} limit={0} />
```
- Keep the grid a full rectangle (3, 6 or 9 tiles at 3-up); end with `<Button variant="ghost" arrow>View all services</Button>`.
- Use `SERVICES` instead of rewriting service names. Titles use "&", not "and".
