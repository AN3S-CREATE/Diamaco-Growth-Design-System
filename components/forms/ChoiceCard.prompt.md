Big single-choice tiles from the AI audit ("Which industry best describes your business?").
```jsx
const [industry, setIndustry] = React.useState('pro');
<ChoiceGrid label="Industry" value={industry} onChange={setIndustry} options={[
  { value: 'pro', emoji: '💼', title: 'Professional & Advisory', desc: 'Accounting, Legal, Consulting, Finance' },
  { value: 'logistics', emoji: '🚚', title: 'Logistics & Fleet', desc: 'Transport, Courier, Supply Chain, Warehousing' },
]} />
```
- Use for 4–8 options that need a description; for short answers (team size, revenue tier) use `PillGroup`.
- Precede with a numbered question label: red "1.1" then the question in white 600.
