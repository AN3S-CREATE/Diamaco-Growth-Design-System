The live site's bottom prompt bar ("Ready to grow your business? …" + "Book a free call").
```jsx
<StickyCtaBar visible={scrolled && !dismissed} onDismiss={() => setDismissed(true)} />
<WhatsAppButton lifted={scrolled && !dismissed} />
```
- Show after the visitor has scrolled past the hero; remember the dismissal for the session. Lift the WhatsApp button 96px while the bar is up.
- The green dot means "we're online" — the only other place WhatsApp green appears.
