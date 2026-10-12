import React from 'react';

function cx(...a) { return a.filter(Boolean).join(' '); }

// About-section photo: 4:5 frame (radius 8, hairline, deep shadow) with a bottom scrim, a solid red square offset behind
// the lower-right corner and a floating stat badge on the upper-right edge. The photo zooms to 1.04 on hover.
export function PhotoFrame({ src, alt = '', badge, accent = true, ratio = '4 / 5', className, style, ...rest }) {
  return (
    <div {...rest} className={cx('dg-frame', className)} style={style}>
      <div className="dg-frame__main" style={{ aspectRatio: ratio }}>
        {src ? <img src={src} alt={alt} /> : <div className="dg-frame__empty">Photo</div>}
      </div>
      {accent && <div className="dg-frame__accent" aria-hidden="true" />}
      {badge && (
        <div className="dg-frame__badge">
          <b>{badge.value}</b>
          <span>{badge.label}</span>
        </div>
      )}
    </div>
  );
}
