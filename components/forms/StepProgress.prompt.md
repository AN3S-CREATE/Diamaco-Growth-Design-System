Header strip for multi-step forms (the AI audit): "STEP 01 OF 03", step title, glowing progress bar.
```jsx
<StepProgress step={1} total={3} title="Company Profile & Sector" />
```
- Sits flush at the top of a radius-16 card (`--shadow-float`), above 36px-padded step content.
- Keep forms to three steps or fewer; the last step asks for contact details only after showing value.
