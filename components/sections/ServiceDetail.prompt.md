The /services page row. Alternate `reverse` down the page; rows are divided by hairlines.
```jsx
{SERVICES.map((s, i) => <ServiceDetail key={s.num} service={s} reverse={i % 2 === 1} />)}
<ServiceDetail num="11" category="Training" title="Team AI Enablement" icon="users" description="…" features={['…']} />
```
- Five features per service, sentence case, no full stops. The ghost "01" numeral is decorative (#1e1e1e on black).
