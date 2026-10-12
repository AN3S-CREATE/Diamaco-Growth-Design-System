Thin line icon (stroke = currentColor). Ten service glyphs, three socials, arrow, plus UI basics.
```jsx
<Icon name="layers" size={72} strokeWidth={1} />   {/* service visual */}
<Icon name="linkedin" size={15} />                  {/* footer social square */}
<Icon name="arrow-right" title="Next" />
```
- Service → icon: automation `layers` · CRM `users` · website `monitor` · WhatsApp `message-square` · leads `activity` · marketing `bar-chart` · SEO `search` · strategy `eye` · tenders `file` · setup `home`.
- Colour comes from the parent: muted white in UI, `rgba(204,34,34,.7)` inside service visuals. Never fill an icon.
- Need another glyph? Take it from lucide at the same stroke weight; don't mix icon sets.
