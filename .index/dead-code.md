# Dead / local-only code

| Path | Evidence | Risk | Action |
|---|---|---|---|
| `_ds_bundle.js` | Local preview shim; the real bundle is compiled by claude.ai/design | Uploading it could shadow the app's bundle | Keep local; exclude from pushes |
| `.preview/kit-full.html` | Screenshot harness only | None | Keep local; exclude from pushes |
| `assets/logos/Diamaco_Growth_Transparent_Full.png` | Byte-identical (md5) to `diamaco-growth-logo.png` | Duplicate weight (384 KB) | Owner-supplied; keep unless the owner agrees to remove |
