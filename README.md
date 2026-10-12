# DIAMACO GROWTH — Design System

**Diamaco Growth** is a South African business growth partner for SMEs: workflow automation, CRM, websites, WhatsApp
automation, lead generation, digital marketing, SEO, business development strategy, tender readiness and commercial setup
(CIPC · SARS · B-BBEE). It works in person across Mpumalanga & Gauteng and digitally in every other province. It is a new
company and says so: *"New to the Market. Not New to the Work."*

The one product represented is the marketing website **diamacogrowth.co.za** (Home, About, Services, AI Audit, Insights,
Contact). It is a black, single-accent site: page `#0a0a0a`, cards `#141414`, hairlines `#1e1e1e`, signal red `#cc2222`,
Playfair Display headlines whose last beat turns red and italic, Inter for everything else, and an interactive "AI Business
Growth & Automation Audit" as the main lead magnet.

## Sources

- **Live site:** https://www.diamacogrowth.co.za — read on **2026-10-12**. Colour, radius and motion tokens are the site's own
  `:root` (names kept: `--black`, `--black-card`, `--black-border`, `--white-muted`, `--white-faint`, `--red`,
  `--red-bright`, `--red-glow`, `--red-glow-sm`, `--radius-sm/md/lg`, `--transition`). Component values were read from the
  built stylesheet (`assets/index-*.css`: `.btn`, `.card`, `.section-label`, `.stats-bar`, `.cta-banner`, the nav, hero,
  services grid, process, blog and audit modules). All copy quoted here and in `SERVICES`, `PROCESS`, `MARQUEE_ITEMS` and
  `FOOTER_BLURB` is verbatim from the Home and Services pages.
- **Assets** were downloaded from the site with the user's go-ahead: `logo.png`, `favicon.svg`, `favicon-512.png`,
  `og-image.jpg`, `about-partner.jpg`. No GitHub repository or brand book exists for this system.

## Index

| Path | What it is |
|---|---|
| `styles.css` | Entry point — `@import`s every file below. Link this one file |
| `tokens/fonts.css` | The site's Google Fonts request (Inter 300–900, Playfair Display 700/900/700i) |
| `tokens/colors.css` | Site `:root` colours verbatim, hard-coded site values tokenised, semantic aliases |
| `tokens/typography.css` | Families, size scale, leading, tracking, and the text-style classes (`.dg-hero-title`, `.dg-section-title`, `.dg-cta-title`, `.dg-detail-title`, `.dg-lead`, `.dg-subtitle`, `.dg-body`, `.dg-card-title`, `.dg-caps`, `.dg-numeral`, `.dg-ghost-num`) |
| `tokens/spacing.css` | Spacing steps, container/gutter/section rhythm, nav/logo sizes, radii |
| `tokens/effects.css` | Easing/durations, shadows, red glows, focus, gradients, grid lines, film grain |
| `tokens/base.css` | Page base, `.dg-grain`, `.dg-reveal`, reduced-motion handling |
| `components/components.css` | All component classes (`dg-` prefix) — hover sweeps and lifts need pseudo-elements |
| `components/core/` | Button, Icon (+ `ICONS`, `ICON_NAMES`), SectionLabel (+ Tag), LiveBadge, Container (+ Section), Divider, IconTile |
| `components/cards/` | Card, Pillars (+ Pillar), ServiceGrid (+ ServiceTile, `SERVICES`), StatsBar, BlogCard, MetricCard, PhotoFrame |
| `components/forms/` | Field (+ Input, Select, Textarea, FormRow), ChoiceCard (+ ChoiceGrid), PillGroup (+ Pill), StepProgress |
| `components/navigation/` | SiteNav (+ `NAV_LINKS`), SiteFooter (+ `FOOTER_BLURB`), WhatsAppButton, Breadcrumb |
| `components/sections/` | Hero, PageHero, SectionHeading, Marquee (+ `MARQUEE_ITEMS`), ProcessSteps (+ `PROCESS`), CtaBanner, ServiceDetail |
| `ui_kits/website/` | Click-through recreation: Home, Services, AI Audit (interactive), Contact — `index.html`, one JSX file per screen, README |
| `guidelines/` | 15 foundation specimen cards (Brand, Colors, Type, Spacing, Effects) |
| `assets/logos/` | `diamaco-growth-logo.png` (1376×768, transparent), `diamaco-mark.svg` (raster wrapped in SVG), `diamaco-mark-512.png` |
| `assets/imagery/` | `about-partner.jpg` (896×1200), `og-image.jpg` (1200×630) |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent-skill entry point |

Each component has `<Name>.jsx`, `<Name>.d.ts` (props contract) and `<Name>.prompt.md` (usage); each folder has specimen
`*.card.html` files. In cards and the compiled bundle the namespace is `window.DIAMACOGROWTH_83a452`.

### Components

Core: **Button** (primary / ghost / white; default / sm; `arrow`), **Icon** (20 glyphs), **SectionLabel** (section / hero),
**Tag**, **LiveBadge**, **IconTile**, **Container**, **Section** (default / sunken / raised), **Divider**.
Cards: **Card**, **Pillar(s)**, **ServiceGrid**, **ServiceTile**, **StatsBar**, **BlogCard**, **MetricCard**, **PhotoFrame**.
Forms: **Field**, **Input**, **Select**, **Textarea**, **FormRow**, **ChoiceCard**, **ChoiceGrid**, **Pill**, **PillGroup**, **StepProgress**.
Navigation: **SiteNav**, **SiteFooter**, **WhatsAppButton**, **Breadcrumb**.
Sections: **Hero**, **PageHero**, **SectionHeading**, **Marquee**, **ProcessSteps**, **CtaBanner**, **ServiceDetail**.

**Intentional additions / changes** (say so if asked):
- `Icon` gathers the inline SVGs the site uses; chevron, menu, x, check, mail and phone are lucide stand-ins at the same weight.
- `IconTile` generalises the audit tool's grey emoji tile; `Container`/`Section`, `SectionHeading` and the data exports turn
  repeated site markup into components.
- `Field` adds an error line (bright red, `role="alert"`) — the site has no visible error state outside the audit form.
- Small red text (blog "Read →", step counters, step-circle numerals, breadcrumb hover) uses `--red-bright` (4.6:1) instead
  of `--red` (3.6:1) to pass AA. Primary and ghost buttons share 16px vertical padding (the site's ghost is 15px).
- Grids use auto-fill/auto-fit and container queries instead of the site's viewport breakpoints, so components hold up inside cards.

**Not built** because the site doesn't have them: light theme, modals, tabs, accordion, tables, toasts, tooltips beyond the
WhatsApp one, pagination, checkboxes/switches, status colours. The site's CSS also styles testimonial cards, but no
testimonials are published, so none are designed here — don't invent them.

## Content fundamentals

**Who speaks.** First-person plural, straight to the reader: "We don't just advise — we implement.", "Your Results Are Our
Reputation". Warm, direct, a little scrappy. No exclamation marks.

**Positioning is honesty about being new.** "New to the Market. Not New to the Work." · "We're building our credibility from
the ground up" · "Hungry to Prove Ourselves". Never fake scale: no invented client counts, testimonials, logos, awards or
percentages. Stats on the site are "10 core services", "SA — based & focused", "∞ growth potential".

**Headlines** are Title Case in Playfair, built from short beats ending in full stops, with the payoff in red italic:
"Systems. Strategy. *Serious Growth.*" · "Ten Services. One *Growth Partner*." · "Services Built for *Real Growth*" ·
"A Process Built for *Results*". One `<em>` per headline.

**Risk removers** close every ask: "No pressure. No pitch deck. Just a genuine conversation about your business." ·
"no-obligation discovery call" · "No lock-in contracts" · "Earn your trust every month".

**CTAs** are verb-first, written in sentence case and uppercased by CSS, often with an arrow: "Free AI growth audit",
"Book a strategy call", "Start a project", "Book a free consultation", "View all services", "Learn more about us",
"Start a conversation". Text links: "Read →".

**Labels** (red eyebrows) are 2–5 words, sentence case in source: "What we do", "How we work", "Why work with us",
"Business growth partners · South Africa", "Interactive diagnostic engine".

**South African specifics.** UK/SA spelling (optimise, organisation, programme), rand as "R100k – R350k / mo", spaced en
dashes in ranges ("2 – 5 Staff"), spaced em dashes in prose, middots as separators, "SMEs", "CIPC · SARS · B-BBEE",
"Mpumalanga & Gauteng". Service names use "&" ("CRM Setup & Training"); take them from `SERVICES`.

**Contact details.** Generic: `info@diamacogrowth.co.za`, LinkedIn `/company/diamaco-growth`, Instagram `@diamaco_growth`.
The site also publishes a phone/WhatsApp number; it is **left as a placeholder** in this system (POPIA minimisation) —
confirm the number with the business before shipping.

## Visual foundations

**Colour.** One dark theme; there is no light mode. Page `#0a0a0a`, sunken bands/footer `#080808`, cards and raised bands
`#141414`, hairlines `#1e1e1e`, audit tiles `#222` borders. Text: white for titles, `#ccc` body, `#888` meta. **Red is a
signal, not a field**: `#cc2222` for primary buttons, eyebrows, numbers, dots, active states, underlines and the one
full-red CTA band (plus the marquee); `#e63030` for hover sweeps, focus and small red text. Red tints (8–35%) for washes,
borders and glows. WhatsApp green `#25d366` is reserved for the floating chat button. No other hues, no gradients between hues.

**Type.** Playfair Display (700, 900, 700 italic) only for display headings; Inter (300–900) for everything else. The brand
move is contrast: a heavy serif headline with a red italic payoff, framed by tiny Inter caps at 0.1–0.2em tracking
(eyebrows, buttons, nav, stat labels). Body copy is muted grey at 1.7–1.8 line-height; hero lead is Inter 300. Numerals are
Inter 900 with tight tracking and tabular figures, sometimes with a red suffix. Ghost numerals ("01") sit in `#1e1e1e`.

**Layout.** 1200px container, 40px gutters (24 ≤1024px, 20 ≤768px). Sections 120px top/bottom (80 small, 72 mobile), 72px
from section header to content. Fixed 120px nav with a 96px logo. Grids: 3-up hairline service grid, 2-up reason cards,
3-up blog cards (gap 24), 4-step process, 1fr/1fr about split with an 80px gap, 1fr/1.4fr service rows.

**Backgrounds.** Flat black with faint red radial light: two washes plus an 80px white-2.4% grid masked to the centre and two
slowly drifting red orbs in the home hero; a top-centre red glow on inner page heroes; an 18% red spot behind service icons.
A 2.5% film-grain noise sits over the whole page (`body.dg-grain`). No illustrations, no patterns beyond the grid.

**Borders, shadows, depth.** 1px hairlines everywhere (`#1e1e1e`); hover turns them 25–30% red. Grids are drawn with 1px
gaps over a `#1e1e1e` backing rather than borders. Shadows are black and deep (`0 24px 48px rgba(0,0,0,.4)` on lifted
cards, `0 20px 40px rgba(0,0,0,.6)` on photos); emphasis comes from red glow (`0 0 40px` 18% red on primary hover, soft glows
on selected tiles, the progress bar and the pill). Translucency only in the scrolled nav (92% black) and the audit card (75%).

**Corner radii.** Tight: 4px buttons, inputs, pillars, social squares; 8px cards, grids, photo frames; 10–12px audit tiles
and metric cards; 16px service visuals and the audit card; full round for the live badge, dots and step circles.

**Cards.** `#141414` + 1px hairline + radius 8 + 40px padding. Hover: lift 4px, border 30% red, a 135° red sheen fades in,
deep black shadow. Service tiles instead grow a 2px red underline from the left. Blog cards lift and turn the title red.

**Hover, press, focus.** Primary buttons: bright red sweeps in from the left (`translateX(-101%) → 0`), lift 2px, red glow.
Ghost: 5% white fill, border to solid white. Nav links: grey → white with a red underline that draws in from the left.
Arrows nudge 4px. Press: pills scale to .98; nothing else. Focus: 2px `#e63030` outline offset 2px; inputs get a red border
and a 3px 10%-red ring. Disabled: 40% opacity, no lift.

**Motion.** One easing — `cubic-bezier(.25,.46,.45,.94)` at .35s — for lifts, fills, borders and underlines; .18s for colour;
scroll reveal is a 28px rise + fade over .7s, staggered .1s. Ambient loops: orb drift (12s/16s), marquee (30s linear), live
dot blink (1.8s), WhatsApp pulse (2.5s). Everything stops under `prefers-reduced-motion` (`tokens/base.css`; the site itself
doesn't handle it).

**Imagery.** Real, warm-lit photography of people at work — dark interiors, lamp light, a city at dusk through glass — in a
hairline frame with a bottom scrim, with a solid red square behind one corner and a floating stat badge. Social share image:
the logo on black.

## Iconography

Thin line icons drawn inline as SVG: 24-unit viewBox, `stroke="currentColor"`, stroke 1.5 in UI (nav arrow, social squares)
and 1 for the large 72px service visuals, which sit in 70% red. One icon per service (layers, users, monitor,
message-square, activity, bar-chart, search, eye, file, home — the lucide/feather set). `components/core/Icon.jsx` holds
them all. The site also uses **emoji** as feature icons (⚡ 🎯 🇿🇦 🔒 🔥 💬 🔧) and in the audit tool, where they're greyscaled
inside a dark tile — `IconTile` reproduces that; prefer line icons for anything new. No icon font, no filled icons.

## Logo

White **DIAMACO** wordmark with a red slashed **D**, a white rule, and red tracked **GROWTH** beneath. Use
`assets/logos/diamaco-growth-logo.png` (transparent, 1376×768 including generous padding — display at 88–96px tall in UI) on
black or `#141414` only; never on light grounds, never recoloured or re-set in a font. The red **D-mark** alone
(`diamaco-mark-512.png`, on black) is for favicons, avatars and app icons. There is **no vector logo** — `favicon.svg` only
wraps the PNG — so a vector master is the top missing asset.

## Caveats

- Fonts load from Google Fonts, as on the site; no font files are shipped.
- The phone/WhatsApp number is a placeholder everywhere (`wa.me/27000000000`); the email and social links are real.
- The UI kit's audit step 2 options and the example result figures are stand-ins (labelled "illustrative"); the live tool's
  later steps weren't captured. The About, Insights and Contact page bodies were not captured either; the kit's Contact
  screen is composed from site copy and components.
- `about-partner.jpg` is the site's own photo; confirm image rights before using it outside Diamaco Growth's channels.
