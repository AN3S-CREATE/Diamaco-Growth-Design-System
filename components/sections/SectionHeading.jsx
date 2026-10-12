import React from 'react';
import { SectionLabel } from '../core/SectionLabel.jsx';

function cx(...a) { return a.filter(Boolean).join(' '); }

// The site's .section-header: red label → Playfair 700 title (wrap the payoff word in <em> to turn it red italic)
// → muted subtitle (max 560px). 72px below. `action` puts a link/button on the right (blog header).
export function SectionHeading({ label, title, subtitle, align = 'start', as: Tag = 'h2', action, className, ...rest }) {
  const center = align === 'center';
  const head = (
    <div>
      {label && <SectionLabel align={center ? 'center' : 'start'}>{label}</SectionLabel>}
      <Tag className="dg-section-title">{title}</Tag>
      {subtitle && <p className="dg-subtitle">{subtitle}</p>}
    </div>
  );
  return (
    <header {...rest} className={cx('dg-section-header', center && 'dg-section-header--center', action && 'dg-section-header--split', className)}>
      {head}
      {action}
    </header>
  );
}
