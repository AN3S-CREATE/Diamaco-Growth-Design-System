Inline status message — dark card, 3px status-colour edge, line icon.
```jsx
<Alert tone="success" title="Thanks — your message is on its way.">We'll reply by email.</Alert>
<Alert tone="warning">Please select your industry, team size, and revenue tier to proceed</Alert>
<Alert tone="error" onClose={() => setErr(null)}>Please enter a valid email address</Alert>
<Alert tone="info">In person across Mpumalanga &amp; Gauteng; digitally in every other province.</Alert>
```
- Status colours exist only here and in `Toast` — never as fills, buttons or decoration. Red stays the brand accent; `error` uses `--danger` (bright red).
- One short sentence. Say what happened and what to do; no exclamation marks.
