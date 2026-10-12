# Website UI kit — diamacogrowth.co.za

Click-through recreation of the marketing site, built only from the design-system components. Open `index.html`.

| Screen | File | What it shows |
|---|---|---|
| Home | `HomeScreen.jsx` | Hero, service marquee, feature strip, About split (PhotoFrame + Pillars), 3×3 ServiceGrid, the AI audit, process on the raised band, "Why work with us" cards, red CTA band, blog cards — in the live order with the live copy |
| Services | `ServicesScreen.jsx` | PageHero, marquee, all ten `ServiceDetail` rows alternating sides, CTA band |
| AI Audit | `AuditScreen.jsx` + `AuditTool.jsx` | Three-step diagnostic: industry (ChoiceGrid), team size and revenue (PillGroup), a bottleneck, then example MetricCards |
| Contact | `ContactScreen.jsx` | PageHero, contact form (Field / Select / Textarea), contact-details card |
| Shell | `WebsiteApp.jsx` | Hash routing, fixed nav that turns solid after 50px, footer, floating WhatsApp button |

- `kit-loader.js` fetches the component sources and the screens, rewrites their imports onto `window.DS`, transpiles with
  Babel standalone and dispatches `kit-ready` — no build step and no dependency on `_ds_bundle.js`.
- About and Insights links route to Home; those pages weren't captured.
- Stand-ins, labelled in the UI: audit step 2 options, the example audit results, the phone/WhatsApp number.
