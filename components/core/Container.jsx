import React from 'react';

function cx(...a) { return a.filter(Boolean).join(' '); }

// The site's .container: max 1200px, 40px side padding (24px ≤1024, 20px ≤768).
export function Container({ as: Tag = 'div', className, children, ...rest }) {
  return <Tag {...rest} className={cx('dg-container', className)}>{children}</Tag>;
}

// The site's .section rhythm: 120px top/bottom (72px on mobile); 'sm' is 80px.
// tone 'sunken' = #080808 band (audit), 'raised' = #141414 band (process). Both get hairlines top and bottom.
export function Section({ size = 'default', tone = 'default', contained = true, as: Tag = 'section', className, children, ...rest }) {
  const cls = cx('dg-section', size === 'sm' && 'dg-section--sm', tone === 'sunken' && 'dg-section--sunken', tone === 'raised' && 'dg-section--raised', className);
  return <Tag {...rest} className={cls}>{contained ? <div className="dg-container">{children}</div> : children}</Tag>;
}
