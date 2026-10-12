import React from 'react';

function cx(...a) { return a.filter(Boolean).join(' '); }

// The site's .divider: a #1e1e1e hairline whose first 80px are red. A div (not <hr>) so the red ::after renders everywhere.
export function Divider({ className, ...rest }) {
  return <div role="separator" {...rest} className={cx('dg-divider', className)} />;
}
