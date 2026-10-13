Focused task without leaving the page — e.g. "Book a strategy call" from the hero.
```jsx
<Modal open={open} onClose={() => setOpen(false)} eyebrow="No pressure. No pitch deck." title={<>Book a <em>Strategy Call</em></>}
  footer={<><Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button><Button arrow type="submit" form="book">Request a call</Button></>}>
  <form id="book"><Field label="Full name" /><Field label="Email" type="email" /></form>
</Modal>
```
- One primary action in the footer, ghost "Cancel" left of it. Keep forms to 2–4 fields; longer flows belong on a page.
