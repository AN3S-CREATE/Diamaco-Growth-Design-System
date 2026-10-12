import React from 'react';

function cx(...a) { return a.filter(Boolean).join(' '); }

// About-section pillar: #141414 strip, radius 4px, 8px red dot, bold title, one muted line. Border turns red on hover.
export function Pillar({ title, className, children, ...rest }) {
  return (
    <div {...rest} className={cx('dg-pillar', className)}>
      <span className="dg-pillar__dot" aria-hidden="true" />
      <div>
        <h4 className="dg-pillar__title">{title}</h4>
        {children && <p className="dg-pillar__text">{children}</p>}
      </div>
    </div>
  );
}

// Vertical stack of pillars, 16px apart.
export function Pillars({ items = [], className, ...rest }) {
  return (
    <div {...rest} className={cx('dg-pillars', className)}>
      {items.map((it, i) => <Pillar key={i} title={it.title}>{it.text}</Pillar>)}
    </div>
  );
}
