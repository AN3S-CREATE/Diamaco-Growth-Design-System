Uppercase, tracked action button. One `primary` per view, `ghost` beside it, `white` only on the red `CtaBanner`.
```jsx
<Button arrow>Free AI growth audit</Button>
<Button variant="ghost">Book a strategy call</Button>
<Button size="sm" href="/contact" arrow>Start a project</Button>
<Button variant="white">Book a free consultation</Button>
```
- Write labels in sentence case; CSS uppercases them. Verb first: "Book…", "Start…", "View…".
- Hover: primary sweeps bright red in from the left, lifts 2px and glows; ghost fills 5% white; arrow nudges 4px.
- Disabled: 40% opacity, no lift. Focus: 2px bright-red outline, 2px offset.
