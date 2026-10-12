Opens every section: red label, Playfair title with one red-italic payoff, muted subtitle.
```jsx
<SectionHeading label="What we do" title={<>Services Built for <em>Real Growth</em></>}
  subtitle="Ten integrated services designed to transform every dimension of your business — from the ground up." />
<SectionHeading align="center" label="How we work" title={<>A Process Built for <em>Results</em></>} />
<SectionHeading label="Insights" title="Fresh from the Blog" action={<Button variant="ghost" arrow>All articles</Button>} />
```
- Titles are Title Case, 3–6 words. Exactly one `<em>` phrase, usually the last word.
- Centre only short headings over symmetric content (process, CTA-like moments); left-align otherwise.
