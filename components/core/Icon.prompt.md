Thin line icon (stroke = currentColor), 45 glyphs: services, socials, UI, feature, industry and status sets.
```jsx
<Icon name="layers" size={72} strokeWidth={1} />   {/* service visual */}
<Icon name="linkedin" size={15} />                  {/* footer social square */}
<IconTile icon="zap" />                              {/* instead of the site's ⚡ emoji */}
<Icon name={EMOJI_ICONS['🚚']} />                    {/* 'truck' */}
```
- Service → icon: automation `layers` · CRM `users` · website `monitor` · WhatsApp `message-square` · leads `activity` · marketing `bar-chart` · SEO `search` · strategy `eye` · tenders `file` · setup `home`.
- Features (replace emoji): fast `zap` · results `target` · SA-market `map-pin` · no lock-in `unlock` · hungry `flame` · transparency `message-circle` · execution `tool` · growth `trending-up`.
- Industries: `briefcase` `truck` `hard-hat` `shopping-bag` `heart` `pen-tool` `factory` `building`. Status: `check-circle` `alert-triangle` `info` `alert-circle`.
- Colour comes from the parent: muted white in UI, `rgba(204,34,34,.7)` inside service visuals. Never fill an icon. Standalone SVGs: `assets/icons/<name>.svg`.
