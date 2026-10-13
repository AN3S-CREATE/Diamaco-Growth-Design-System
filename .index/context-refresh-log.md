# Context refresh log

- [2026-10-12] Index created after the initial build (tokens, 30 components, 10 component cards, 15 guideline cards,
  website UI kit, assets, README/SKILL). All component and guideline cards rendered and checked with headless Chrome.
- [2026-10-12] Pushed 137 files to claude.ai/design project DIAMACO GROWTH (83a45216-…) under plan
  plan_83a4521624474a7d_5a74ebf39eee. `_ds_bundle.js` / `_ds_manifest.json` not yet generated at push time — they appear
  after the app's self-check; then confirm `namespace` = `DIAMACOGROWTH_83a452` (cards depend on it).
- [2026-10-12] Initialised git on top of the GitHub repo's initial commit; added `.gitignore`; committed the full system.
  Note: three owner-supplied PNGs in `assets/logos/` were included in that commit unreviewed (reported to the user).
- [2026-10-13] Branch `feat/missing-assets`: vector logo + D-mark, 25 new icons + SVG exports, Logo/SocialPost, social kit +
  8 JPG exports, Alert/Toast/Modal/Accordion/TestimonialCard/StickyCtaBar, status colours, 3 new guideline cards; kit and
  specimens moved from emoji/PNG to icons/vector. All new/changed cards rendered in headless Chrome.
- [2026-10-13] Fix: `components/brand/Logo.jsx` held a cp1252 em dash (byte 0x97, invalid UTF-8) because the generator wrote
  without an encoding on Windows; flagged by the claude.ai/design migration check. Re-encoded to UTF-8; all text I/O in
  `tools/brand-assets/*.py` now sets `encoding='utf-8'`. Full repo scan: 0 invalid UTF-8 files.
