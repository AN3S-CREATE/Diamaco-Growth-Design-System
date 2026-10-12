import React from 'react';

function cx(...a) { return a.filter(Boolean).join(' '); }

// The audit tool's "INTERACTIVE DIAGNOSTIC ENGINE" pill: 12% red fill, 35% red border, bright-red caps, blinking dot.
export function LiveBadge({ dot = true, className, children, ...rest }) {
  return (
    <span {...rest} className={cx('dg-live', className)}>
      {dot && <span className="dg-live__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
