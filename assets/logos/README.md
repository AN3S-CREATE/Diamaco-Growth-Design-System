# Logo files

| File | What it is | Use |
|---|---|---|
| `diamaco-growth-logo.svg` | **Vector master.** White DIAMACO + rule, red (#ef212d) slashed D + GROWTH. Transparent, tight viewBox (1104×371) | Default everywhere on black / `#141414` |
| `diamaco-growth-logo-mono-white.svg` | Same artwork, all white | Over photography, on the red CTA band, one-colour print |
| `diamaco-growth-logo-mono-black.svg` | Same artwork, all `#0a0a0a` | Only where a dark ground is impossible: documents, forms, stamps, embroidery. Not for marketing (owner sign-off pending) |
| `diamaco-mark.svg` | Vector D-mark, red on a black square (1080 viewBox) | Favicon, app icon, social avatar |
| `diamaco-mark-red.svg` | Vector D-mark, red, transparent, tight viewBox | Small brand mark on dark grounds |
| `diamaco-growth-logo.png` | Original transparent PNG from the website (1376×768, padded) | Reference / fallback |
| `diamaco-mark-512.png` | Original favicon PNG from the website | Reference / fallback |
| `Diamaco_Growth_Master.png`, `Diamaco_Growth_Transparent_Full.png`, `07_Diamaco_Iconic_D_Supersampled_1080x1080.png` | Owner-supplied rasters (the transparent one is identical to `diamaco-growth-logo.png`) | Source material |

## How the vectors were made (2026-10-13)

- **DIAMACO** and **GROWTH** are rebuilt from the typeface itself: Montserrat Bold (DIAMACO) and Montserrat ExtraBold
  (GROWTH), SIL Open Font License. Each letter was matched against the PNG (94% / 92% overlap by weight test) and placed on
  the original letter's position, so the letters are mathematically clean at any size.
- The **rule** is an exact rectangle measured from the PNG's coverage.
- The **slashed D** is custom artwork. In the logo it's vectorised from the logo PNG (98.4% overlap); in the stand-alone mark
  it's vectorised from the 1080 px master (99.3% overlap). The two D drawings differ slightly (slash position), so each file
  keeps its own source's D.
- Logo red is **#ef212d** (sampled), brighter than the UI red `--red` #cc2222. Keep the logo's own red; don't recolour it to the
  UI token.

## Caveats

- The wordmark's D is traced from a ~157 px-tall raster. It is clean at normal and large screen sizes; for very large print
  (signage, vehicle wraps) have a designer check it against the original artwork if that exists.
- Proposed defaults (no brand book exists yet; confirm with the owner): clear space of at least the GROWTH letter height on
  every side; minimum width 120 px on screen, 30 mm in print.
- Never recolour, outline, stretch, add effects, or re-set the wordmark in a font.
