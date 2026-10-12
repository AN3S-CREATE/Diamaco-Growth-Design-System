import React from 'react';

function cx(...a) { return a.filter(Boolean).join(' '); }

export const MARQUEE_ITEMS = [
  'Workflow Automation', 'CRM Setup & Training', 'Website Development', 'WhatsApp Business Automation', 'Lead Generation & Outreach',
  'Digital Marketing & Content', 'SEO & Local Search', 'Business Development Strategy', 'Tender Readiness & Compliance',
  'Commercial Setup Guidance — CIPC · SARS · B-BBEE',
];

// Full-bleed red band of white caps scrolling right-to-left (30s loop); items separated by a 50%-white dot.
// The list is rendered twice so the loop is seamless. Pauses on hover; stops under prefers-reduced-motion.
export function Marquee({ items = MARQUEE_ITEMS, duration = 30, className, ...rest }) {
  const row = items.map((t, i) => <span className="dg-marquee__item" key={i}>{t}<span className="dg-marquee__dot" /></span>);
  return (
    <div {...rest} className={cx('dg-marquee', className)} aria-label={items.join(', ')} role="marquee">
      <div className="dg-marquee__inner" style={{ animationDuration: duration + 's' }} aria-hidden="true">
        {row}
        {items.map((t, i) => <span className="dg-marquee__item" key={'b' + i}>{t}<span className="dg-marquee__dot" /></span>)}
      </div>
    </div>
  );
}
