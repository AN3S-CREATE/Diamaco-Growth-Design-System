import React from 'react';
import { IconTile } from '../core/IconTile.jsx';

function cx(...a) { return a.filter(Boolean).join(' '); }

// Audit-tool option tile: icon tile, title + one-line description, radio dot on the right.
// Selected: 8% red fill, red border, soft red glow, the radio fills red and the icon tile tints.
export function ChoiceCard({ icon, emoji, title, desc, active = false, className, ...rest }) {
  return (
    <button type="button" role="radio" aria-checked={active} {...rest} className={cx('dg-choice', active && 'is-active', className)}>
      {(icon || emoji) && <IconTile icon={icon} emoji={emoji} />}
      <span className="dg-choice__content">
        <span className="dg-choice__title">{title}</span>
        {desc && <span className="dg-choice__desc">{desc}</span>}
      </span>
      <span className="dg-radio" aria-hidden="true" />
    </button>
  );
}

// Auto-filling grid of ChoiceCards (min 250px columns, 12px gap) with single selection.
export function ChoiceGrid({ options = [], value, onChange, label, className, ...rest }) {
  return (
    <div {...rest} role="radiogroup" aria-label={label} className={cx('dg-choices', className)}>
      {options.map((o) => (
        <ChoiceCard key={o.value} icon={o.icon} emoji={o.emoji} title={o.title} desc={o.desc} active={value === o.value} onClick={() => onChange && onChange(o.value)} />
      ))}
    </div>
  );
}
