import React from 'react';
import { IconTile } from '../core/IconTile.jsx';

function cx(...a) { return a.filter(Boolean).join(' '); }

// Full-width strip of cells separated by 1px hairlines. A cell is either a numeral (Inter 900, 3rem, part of it red)
// over a caps label, or an icon/emoji over a white caps title and a short line (the home "Fast implementation" strip).
export function StatsBar({ items = [], className, ...rest }) {
  return (
    <div {...rest} className={cx('dg-stats', className)}>
      {items.map((it, i) => (
        <div className="dg-stat" key={i}>
          {(it.icon || it.emoji) && <IconTile className="dg-stat__icon" icon={it.icon} emoji={it.emoji} size="lg" />}
          {it.value != null && <div className="dg-stat__num">{it.value}{it.accent && <span>{it.accent}</span>}</div>}
          <div className={cx('dg-stat__label', it.text && 'dg-stat__label--strong')}>{it.label}</div>
          {it.text && <p className="dg-stat__text">{it.text}</p>}
        </div>
      ))}
    </div>
  );
}
