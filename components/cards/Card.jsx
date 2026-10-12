import React from 'react';
import { IconTile } from '../core/IconTile.jsx';

function cx(...a) { return a.filter(Boolean).join(' '); }

// The site's .card: #141414, 1px #1e1e1e, radius 8px, 40px padding. On hover it lifts 4px, the border turns 30% red,
// a 135° red sheen fades in and a deep black shadow drops underneath.
export function Card({ interactive = true, compact = false, icon, emoji, title, as: Tag = 'div', className, children, ...rest }) {
  return (
    <Tag {...rest} className={cx('dg-card', interactive && 'dg-card--interactive', compact && 'dg-card--compact', className)}>
      {(icon || emoji) && <div className="dg-card__icon"><IconTile icon={icon} emoji={emoji} size="lg" /></div>}
      {title && <h3 className="dg-card__title">{title}</h3>}
      {typeof children === 'string' ? <p className="dg-card__text">{children}</p> : children}
    </Tag>
  );
}
