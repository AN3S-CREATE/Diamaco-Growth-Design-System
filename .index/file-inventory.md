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
| `components/navigation/*` | SiteNav (+NAV_LINKS), SiteFooter (+FOOTER_BLURB), WhatsAppButton (`lifted`), StickyCtaBar, Breadcrumb; `navigation/footer.card.html` | — | Active |
| `components/brand/Logo.jsx` | Inline vector logo; **generated** from `assets/logos/*.svg` by `tools/brand-assets/gen_logo_jsx.py` | `LOGO_ART`, `MARK_ART`, `Logo` | Generated |
| `tools/brand-assets/*` | Generators: glyph extraction (glyphs.html + save_server.py), glyphmatch, build_logo + dmark, gen_logo_jsx, export_icons, to_jpg; README. Git only | — | Active (tooling) |
| `components/brand/SocialPost.jsx` + `brand.card.html` | Social/blog artboards (4 formats × 4 variants); Logo specimen card | `SOCIAL_FORMATS` | Active |
| `components/feedback/*` | Alert, Toast, Modal + `feedback.card.html` (added 2026-10-13) | — | Active |
| `components/content/*` | Accordion (+FAQS), TestimonialCard + `faq.card.html` (added 2026-10-13) | `FAQS` | Active |
| `ui_kits/social/*` | `index.html` gallery, `render.html` export page, `posts.jsx` (POSTS), `SocialGallery.jsx`, `kit-loader.js`, README | `POSTS`, `SocialRender` | Active |
| `assets/icons/*.svg` | 45 line icons exported from `Icon.jsx` (`export_icons.js`, scratchpad) | — | Generated |
| `assets/social/*.jpg` | 8 exported artboards (share image, 3 blog covers, 2 square, 1 portrait, 1 story) | — | Generated |
| `assets/logos/*.svg` + README | Vector logo (full / mono-white / mono-black) and D-mark (tile / red); method + usage | — | Active |
| `components/sections/*` | SectionHeading, Hero, PageHero, Marquee (+MARQUEE_ITEMS), ProcessSteps (+PROCESS), CtaBanner, ServiceDetail; `hero/sections/pages.card.html` | — | Active |
| `guidelines/*.html` | 17 foundation cards: brand-logo/mark/voice/imagery/icons, colors-blacks/red/text/status, type-display/ui/numerals, spacing-scale, radii, effects-depth/backgrounds, motion | `@dsCard` markers | Active |
| `ui_kits/website/*` | Click-through site: `index.html`, `kit-loader.js`, `WebsiteApp`, `HomeScreen`, `ServicesScreen`, `AuditScreen`, `AuditTool`, `ContactScreen`, README | `window.DS` | Active |
| `assets/logos/*.png` | Site downloads (`diamaco-growth-logo.png`, `diamaco-mark-512.png`) + owner-supplied rasters (`Diamaco_Growth_Master.png`, `Diamaco_Growth_Transparent_Full.png` = duplicate of the site logo, `07_Diamaco_Iconic_D_Supersampled_1080x1080.png`) | — | Active (sources) |
| `assets/imagery/*` | `about-partner.jpg`, `og-image.jpg` — downloaded from the site 2026-10-12 | — | Active |
| `index.html` | Client showcase (GitHub Pages home): cover + sections 01–08 embedding live cards (scaled iframes), icon grid, social JPGs, website kit iframe + captures | — | Active |
| `brandbook.html` | 23 × 1600×900 slides; JS fits cards/bodies; `?p=N` = single slide for export | — | Active |
| `exports/Diamaco-Growth-Brand-Book.pdf` | Brand-book PDF (slides at 1.5×, assembled with PIL) | — | Generated |
| `assets/showcase/*.jpg` | Website-kit full-page captures, sliced (home ×4, services ×4, audit, contact) | — | Generated |
| `.nojekyll` | GitHub Pages: serve underscore files (`_ds_bundle.js`) | — | Active |
| `.preview/pdf-pages.html` | Local harness: renders a PDF's pages with pdf.js for checking | — | Local-only |
| `_ds_bundle.js` | Local preview shim: sync-loads component JSX via Babel into `window.DIAMACOGROWTH_83a452` | — | Local-only |
| `.claude/launch.json` | `ds-preview` static server (python http.server :8765); git-ignored (absolute path) | — | Local-only |
| `.gitignore` | Ignores `.claude/` and OS/editor noise | — | Active |
| `.preview/kit-full.html` | Screenshot harness: UI kit in a tall iframe with hero pinned to 800px | — | Local-only |
| `.index/*` | This map | — | Local-only |
