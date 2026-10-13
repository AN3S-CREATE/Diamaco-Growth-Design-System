Branded social and blog artboards at platform sizes. Render at `scale={1}` and screenshot to export; `ui_kits/social/render.html?id=…` does this.
```jsx
<SocialPost format="landscape" variant="blog" tag="Automation" icon="layers"
  title="5 Workflows Every South African Business Should Automate in 2025" meta="Sep 2025 · 6 min read" />
<SocialPost format="square" eyebrow="Why work with us" title={<>New to the Market.<br /><em>Not New to the Work.</em></>} cta="Start a conversation" />
<SocialPost format="square" variant="stat" stat={{ value: '10', label: 'Core services' }} title={<>Ten Services. One <em>Growth Partner</em>.</>} />
<SocialPost format="portrait" variant="service" num="04" icon="message-square" eyebrow="Messaging" title="WhatsApp Business Automation" items={[…]} />
```
- Formats: `landscape` 1200×630 (share image, blog cover) · `square` 1080 · `portrait` 1080×1350 · `story` 1080×1920.
- Same copy rules as the site: Playfair title with one red-italic payoff, 1–2 sentences of body, verb-first CTA. Numbers must be true (no invented results).
- Ready exports live in `assets/social/*.jpg`.
