import React from 'react';
import { Icon } from './Icon.jsx';

function cx(...a) { return a.filter(Boolean).join(' '); }

// 40px (or 56px) dark square holding an Icon or an emoji. Emoji are greyscaled, as in the site's audit tool,
// so the only colour on the page stays red. Active: red-tinted fill and border.
export function IconTile({ icon, emoji, size = 'default', active = false, label, className, ...rest }) {
  return (
    <span
      {...rest}
      className={cx('dg-icon-tile', size === 'lg' && 'dg-icon-tile--lg', active && 'is-active', className)}
      role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}
    >
      {icon ? <Icon name={icon} /> : <span className="dg-icon-tile__emoji">{emoji}</span>}
    </span>
  );
}
