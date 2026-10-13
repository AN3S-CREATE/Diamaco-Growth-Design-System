# Brand-asset generators

Scripts that produced the vector logo, `components/brand/Logo.jsx`, `assets/icons/*.svg` and `assets/social/*.jpg`
(2026-10-13). Not part of the claude.ai/design project. Needs Python 3 with `numpy` + `opencv-python`, Node, and Chrome.

| Step | Command (from the repo root) | Output |
|---|---|---|
| 1. Montserrat outlines (OFL) | `python -I tools/brand-assets/save_server.py tools/brand-assets 8766`, then open `http://127.0.0.1:8766/glyphs.html` in (headless) Chrome — it POSTs `glyphs.json` next to the page | `tools/brand-assets/glyphs.json` (git-ignored) |
| 2. Letter check (optional) | `python -I tools/brand-assets/glyphmatch.py assets/logos/diamaco-growth-logo.png tools/brand-assets/glyphs.json` | Per-letter overlap by weight |
| 3. Vector logo + mark | `python -I tools/brand-assets/build_logo.py assets/logos/diamaco-growth-logo.png assets/logos/07_Diamaco_Iconic_D_Supersampled_1080x1080.png tools/brand-assets/glyphs.json <outdir>` | `diamaco-growth-logo*.svg`, `diamaco-mark*.svg` (copy into `assets/logos/`) |
| 4. Logo component | `python -I tools/brand-assets/gen_logo_jsx.py .` | `components/brand/Logo.jsx` |
| 5. Icon SVGs | `node tools/brand-assets/export_icons.js . <sheet.html>` | `assets/icons/*.svg` + a review sheet |
| 6. Social JPGs | Serve the repo (`python -m http.server 8765`), screenshot `ui_kits/social/render.html?id=<id>` at the format size with headless Chrome into `<dir>/s-<id>.png`, then `python -I tools/brand-assets/to_jpg.py <dir> assets/social <id> …` | `assets/social/<id>.jpg` |

`build_logo.py` imports `dmark.py` from its own folder. Tuning constants (`dmark.P`) are set for the 512/1080 marks and the
1376×768 logo; re-check the overlap report and a zoomed render after any change.
