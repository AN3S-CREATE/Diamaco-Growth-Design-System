Brief confirmation after an action (form sent, audit saved). Bottom-centre, auto-hides after 5s.
```jsx
{sent && <Toast onClose={() => setSent(false)}>Message sent — we'll be in touch.</Toast>}
<Toast tone="error" duration={0} onClose={close}>Couldn't send. Please try WhatsApp instead.</Toast>
```
- One at a time. Don't use a toast for anything the user must act on — use `Alert` or `Modal`.
