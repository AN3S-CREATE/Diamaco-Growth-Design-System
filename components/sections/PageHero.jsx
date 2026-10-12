import React from 'react';
import { SectionLabel } from '../core/SectionLabel.jsx';
import { Breadcrumb } from '../navigation/Breadcrumb.jsx';

function cx(...a) { return a.filter(Boolean).join(' '); }

// Inner-page hero: 220px top padding (clears the fixed 120px nav), a red radial glow from the top centre,
// breadcrumb → label → Playfair title (same scale as section titles, used as h1) → subtitle.
export function PageHero({ crumbs, label, title, subtitle, compact = false, className, children, ...rest }) {
  return (
    <section {...rest} className={cx('dg-page-hero', compact && 'dg-page-hero--compact', className)}>
      <div className="dg-page-hero__bg" aria-hidden="true" />
      <div className="dg-container">
        {crumbs && <Breadcrumb items={crumbs} />}
        {label && <SectionLabel>{label}</SectionLabel>}
        <h1 className="dg-section-title">{title}</h1>
        {subtitle && <p className="dg-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
