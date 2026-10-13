import React from 'react';
import { Icon } from '../core/Icon.jsx';

function cx(...a) { return a.filter(Boolean).join(' '); }

// The site's bottom bar: 96% black strip with a hairline top, green "online" dot, one line of copy, small red CTA and a
// round dismiss. Slides up after the visitor scrolls; lift the WhatsApp button (`lifted`) while it shows.
export function StickyCtaBar({
  text = "Ready to grow your business? Let's talk — no pitch, just a real conversation.",
  cta = { label: 'Book a free call', href: '/contact' },
  visible = true, onDismiss, inline = false, className, ...rest
}) {
  return (
    <div {...rest} className={cx('dg-ctabar', visible && 'is-visible', inline && 'dg-ctabar--inline', className)} role="region" aria-label="Contact prompt">
      <p className="dg-ctabar__text"><span className="dg-ctabar__dot" aria-hidden="true" />{text}</p>
      <div className="dg-ctabar__actions">
        {cta && <a className="dg-ctabar__cta" href={cta.href}>{cta.label}</a>}
        {onDismiss && <button type="button" className="dg-ctabar__dismiss" aria-label="Dismiss" onClick={onDismiss}><Icon name="x" /></button>}
      </div>
    </div>
  );
}
