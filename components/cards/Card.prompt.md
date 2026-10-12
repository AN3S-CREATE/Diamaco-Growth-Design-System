The base dark card with the red-sheen hover lift. Use it for "why us" reasons, feature blocks and anything boxed.
```jsx
<Card emoji="🔥" title="Hungry to Prove Ourselves">Established agencies coast on reputation. We can't afford to.</Card>
<Card icon="layers" title="Execution Over Advice" compact>We roll up our sleeves and build — alongside you.</Card>
<Card interactive={false}><YourContent /></Card>
```
- Lay cards out 2-up (gap 24px) for reasons, 3-up for blog-style content. Title Case titles, one or two sentences of body.
- Don't nest cards in cards; inside a card divide with a 1px `--black-border` rule.
