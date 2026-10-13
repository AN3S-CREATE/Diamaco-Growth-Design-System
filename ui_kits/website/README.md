# Website UI kit — diamacogrowth.co.za

Click-through recreation of the marketing site, built only from the design-system components. Open `index.html`.

| Screen | File | What it shows |
|---|---|---|
| Home | `HomeScreen.jsx` | Hero ("Book a strategy call" opens the booking modal), service marquee, feature strip (line icons), About split (PhotoFrame + Pillars), 3×3 ServiceGrid, the AI audit, process on the raised band, "Why work with us" cards, red CTA band, blog cards — in the live order with the live copy |
| Services | `ServicesScreen.jsx` | PageHero, marquee, all ten `ServiceDetail` rows alternating sides, FAQ (`Accordion`), CTA band |
| AI Audit | `AuditScreen.jsx` + `AuditTool.jsx` | Three-step diagnostic: industry (ChoiceGrid with line icons), team size and revenue (PillGroup), a bottleneck, then example MetricCards |
| Contact | `ContactScreen.jsx` | PageHero, contact form (Field / Select / Textarea) with a success `Toast`, contact-details card |
| Shell | `WebsiteApp.jsx` | Hash routing, fixed nav with the inline vector logo (solid after 50px), footer, floating WhatsApp button, sticky CTA bar after 600px (dismissible, lifts the WhatsApp button), booking `Modal` + confirmation `Toast` |

- `kit-loader.js` fetches the component sources and the screens, rewrites their imports onto `window.DS`, transpiles with
  Babel standalone and dispatches `kit-ready` — no build step and no dependency on `_ds_bundle.js`.
- About and Insights links route to Home; those pages weren't captured.
- Stand-ins, labelled in the UI: audit step 2 options, the example audit results, the phone/WhatsApp number.
