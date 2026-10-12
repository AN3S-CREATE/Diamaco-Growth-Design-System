Row of short-answer pills with one selected (solid red).
```jsx
const [size, setSize] = React.useState('2 – 5 Staff');
<PillGroup label="Team size" value={size} onChange={setSize}
  options={['1 (Solo Founder)', '2 – 5 Staff', '6 – 15 Staff', '16 – 50 Staff', '50+ Enterprise']} />
```
- Ranges use spaced en dashes ("2 – 5"); rand amounts "R100k – R350k / mo".
- These are choices, not filters or tags; there is no multi-select pill on the site.
