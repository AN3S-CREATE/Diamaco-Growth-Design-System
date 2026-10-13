# Key decisions

| Date | Decision | Rationale |
|---|---|---|
| 2026-10-12 | Build from the live site; push to a new claude.ai/design project "DIAMACO GROWTH" | User's choice (build from scratch, new project) |
| 2026-10-12 | Keep the site's `:root` token names verbatim; add tokens only for values the site hard-codes | Traceability to the source |
| 2026-10-12 | Class-based styling (`components.css`) instead of inline styles | Sweeps, sheens and underline draws need pseudo-elements |
| 2026-10-12 | Small red text uses `--red-bright` (4.6:1) not `--red` (3.6:1) | WCAG AA for small text; documented in README |
| 2026-10-12 | Grids use auto-fill/auto-fit + container queries | Components stay correct inside narrow specimen cards |
| 2026-10-12 | Phone/WhatsApp numbers left as placeholders | POPIA minimisation; follows the 360 Vision Events precedent |
| 2026-10-12 | No testimonial component | Site styles exist but no testimonials are published — avoid invented proof |
| 2026-10-12 | Don't upload `_ds_bundle.js`; let claude.ai/design compile it | Matches existing projects; local shim is preview-only |
| 2026-10-13 | Vector logo: rebuild letters from Montserrat Bold (DIAMACO) / ExtraBold (GROWTH) outlines placed on the PNG letters; vectorise the slashed D (logo from logo PNG, mark from 1080 master) | Weight test 94% / 92% overlap; tracing alone kept the PNG's soft wobble. The two D drawings differ, so each keeps its own source |
| 2026-10-13 | Logo keeps its own red `--logo-red` #ef212d | Sampled from the artwork; differs from UI red #cc2222 |
| 2026-10-13 | Replace emoji with line icons (feather/lucide shapes) via `EMOJI_ICONS`; IconTile greyscale applies to emoji only | Consistent icon language; fixes active-tile tint being greyed |
| 2026-10-13 | Add status colours (success/warning/info; danger = red-bright) for Alert/Toast only | Site has none; needed for real forms; kept out of decoration |
| 2026-10-13 | `--logo-nav`/`--logo-footer` → 46/42px (vector, tight viewBox) | Same visual size as the site's padded 96/88px PNG |
| 2026-10-13 | Social graphics as `SocialPost` artboards + JPG exports; copy only from site statements | Reusable templates; no invented claims |
| 2026-10-12 | Git: source of truth at github.com/AN3S-CREATE/Diamaco-Growth-Design-System (`main`). Commit the preview shim, `.preview/` and `.index/`; ignore `.claude/` | Clones can preview locally; `.index/` is shared context (CONTEXT-INDEX-001); launch.json has a machine path |
