The home hero. Three-beat headline in Playfair 900, the last beat red italic.
```jsx
<Hero
  eyebrow="Business growth partners · South Africa"
  title={<>Systems. Strategy.<br /><em>Serious Growth.</em></>}
  lead="Diamaco Growth helps South African businesses automate operations, build a powerful digital presence, and win more clients — with the hunger and focus that only a new company can bring."
  actions={<><Button arrow>Free AI growth audit</Button><Button variant="ghost">Book a strategy call</Button></>}
  stats={[{ value: '10', label: 'Core services' }, { value: 'SA', label: 'Based & focused' }, { value: '∞', label: 'Growth potential' }]}
/>
```
- One per site, on the home page; inner pages use `PageHero`. Headline beats end with full stops.
- Follow it directly with a `Marquee` of service names.
