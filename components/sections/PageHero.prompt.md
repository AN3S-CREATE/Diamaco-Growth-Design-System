Header for every inner page (About, Services, Audit, Insights, Contact).
```jsx
<PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]} label="What we offer"
  title={<>Ten Services.<br />One <em>Growth Partner</em>.</>}
  subtitle="From your first CIPC registration to automated lead generation — every service is designed to compound and work together for exponential business growth." />
```
- Same two-beat headline pattern as the home hero, smaller. Use `compact` when the nav isn't fixed above it.
