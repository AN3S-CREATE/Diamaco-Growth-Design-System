# File inventory

Status: Active · Generated · Local-only (not uploaded to claude.ai/design).

| Path | Purpose | Key symbols | Status |
|---|---|---|---|
| `README.md` | Brand + system documentation (sources, index, content, visual foundations, iconography, logo, caveats) | — | Active |
| `SKILL.md` | Agent-skill wrapper (`diamaco-growth-design`) | — | Active |
| `styles.css` | Entry point; imports tokens + components.css | — | Active |
| `thumbnail.html` | 1280×854 project tile (logo on hero background + colour stripes) | — | Active |
| `tokens/fonts.css` | Google Fonts import: Inter 300–900, Playfair Display 700/900/700i | — | Active |
| `tokens/colors.css` | Site `:root` colours verbatim + tokenised hard-coded values + semantic aliases | `--black`, `--red`, `--red-bright`, `--surface-*`, `--text-*` | Active |
| `tokens/typography.css` | Families, sizes, leading, tracking; text-style classes | `.dg-hero-title`, `.dg-section-title`, `.dg-cta-title`, `.dg-detail-title`, `.dg-lead`, `.dg-subtitle`, `.dg-body`, `.dg-card-title`, `.dg-caps`, `.dg-numeral`, `.dg-ghost-num` | Active |
| `tokens/spacing.css` | Spacing steps, layout (container/gutter/section/nav), radii; responsive gutter overrides | `--space-1..14`, `--container`, `--gutter`, `--radius-*` | Active |
| `tokens/effects.css` | Easing, durations, shadows, glows, focus, gradients, grid, noise | `--transition`, `--shadow-lift`, `--glow-red`, `--gradient-*`, `--noise` | Active |
| `tokens/base.css` | Page base, `.dg-grain`, `.dg-reveal`, reduced-motion | — | Active |
| `components/components.css` | All component classes (`dg-` prefix) | `.dg-btn`, `.dg-card`, `.dg-services`, `.dg-hero`, `.dg-cta`, … | Active |
| `components/core/*` | Icon (+ICONS, ICON_NAMES), Button, SectionLabel (+Tag), LiveBadge, Container (+Section), Divider, IconTile — each `.jsx/.d.ts/.prompt.md`; `core.card.html` | — | Active |
| `components/cards/*` | Card, Pillars (+Pillar), ServiceGrid (+ServiceTile, SERVICES), StatsBar, BlogCard, MetricCard, PhotoFrame; `cards/services/content.card.html` | `SERVICES` (10 services, site copy) | Active |
| `components/forms/*` | Field (+Input, Select, Textarea, FormRow), ChoiceCard (+ChoiceGrid), PillGroup (+Pill), StepProgress; `forms.card.html` | — | Active |
| `components/navigation/*` | SiteNav (+NAV_LINKS), SiteFooter (+FOOTER_BLURB), WhatsAppButton, Breadcrumb; `navigation/footer.card.html` | — | Active |
| `components/sections/*` | SectionHeading, Hero, PageHero, Marquee (+MARQUEE_ITEMS), ProcessSteps (+PROCESS), CtaBanner, ServiceDetail; `hero/sections/pages.card.html` | — | Active |
| `guidelines/*.html` | 15 foundation cards: brand-logo/mark/voice/imagery, colors-blacks/red/text, type-display/ui/numerals, spacing-scale, radii, effects-depth/backgrounds, motion | `@dsCard` markers | Active |
| `ui_kits/website/*` | Click-through site: `index.html`, `kit-loader.js`, `WebsiteApp`, `HomeScreen`, `ServicesScreen`, `AuditScreen`, `AuditTool`, `ContactScreen`, README | `window.DS` | Active |
| `assets/logos/*` | `diamaco-growth-logo.png`, `diamaco-mark.svg` (raster in SVG), `diamaco-mark-512.png` — downloaded from the site 2026-10-12 | — | Active |
| `assets/imagery/*` | `about-partner.jpg`, `og-image.jpg` — downloaded from the site 2026-10-12 | — | Active |
| `_ds_bundle.js` | Local preview shim: sync-loads component JSX via Babel into `window.DIAMACOGROWTH_83a452` | — | Local-only |
| `.claude/launch.json` | `ds-preview` static server (python http.server :8765); git-ignored (absolute path) | — | Local-only |
| `.gitignore` | Ignores `.claude/` and OS/editor noise | — | Active |
| `.preview/kit-full.html` | Screenshot harness: UI kit in a tall iframe with hero pinned to 800px | — | Local-only |
| `.index/*` | This map | — | Local-only |
