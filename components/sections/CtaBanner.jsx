import React from 'react';
import { Button } from '../core/Button.jsx';

function cx(...a) { return a.filter(Boolean).join(' '); }

// The one full-red field: #cc2222 band, two soft circles (white 5% top-right, black 8% bottom-left),
// Playfair title + one line on the left, a white button on the right. Stacks and centres when narrow.
export function CtaBanner({
  title = 'Ready to Grow Your Business?',
  sub = "Let's have a no-obligation discovery call and map out your growth strategy.",
  action = { label: 'Book a free consultation', href: '/contact' },
  className, children, ...rest
}) {
  return (
    <section {...rest} className={cx('dg-cta', className)}>
      <div className="dg-container">
        <div className="dg-cta__inner">
          <div>
            <h2 className="dg-cta-title">{title}</h2>
            {sub && <p className="dg-cta__sub">{sub}</p>}
          </div>
          {children || (action && <Button variant="white" href={action.href}>{action.label}</Button>)}
        </div>
      </div>
    </section>
  );
}
