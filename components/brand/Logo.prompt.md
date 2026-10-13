The vector logo as inline SVG — crisp at any size, no asset path. Generated from `assets/logos/*.svg`.
```jsx
<Logo height={96} />                 {/* nav size on black */}
<Logo variant="white" height={56} /> {/* over photos or the red band */}
<Logo variant="mark" height={34} />  {/* small brand mark */}
<Logo variant="black" width={240} /> {/* documents only — not marketing */}
```
- Full colour only on black / `#141414`. Never recolour, stretch, outline or add effects; never re-set "DIAMACO" in a font.
- The logo keeps its own red (`--logo-red` #ef212d), slightly brighter than the UI red. Don't swap it for `--red`.
- Clear space: at least the GROWTH letter height all round (proposed). Minimum 120px wide on screen.
