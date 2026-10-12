Page layout primitives: `Container` (1200px column) and `Section` (120px vertical rhythm, optional band).
```jsx
<Section>
  <SectionHeading label="What we do" title={<>Services Built for <em>Real Growth</em></>} />
  <ServiceGrid />
</Section>
<Section tone="raised"><ProcessSteps /></Section>
<Section tone="sunken" size="sm">…</Section>
```
- Alternate page black with at most one `raised` or `sunken` band between plain sections; never stack two bands.
- Full-bleed pieces (`Marquee`, `StatsBar`, `CtaBanner`) sit outside a Section.
