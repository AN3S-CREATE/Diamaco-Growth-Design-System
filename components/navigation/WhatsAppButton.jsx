import React from 'react';
import { Icon } from '../core/Icon.jsx';

function cx(...a) { return a.filter(Boolean).join(' '); }

// Floating WhatsApp-green circle (60px, bottom-right 32px) with a soft pulse ring and an optional "Chat with us" tooltip.
// The only non-red colour on the site. `inline` drops the fixed positioning for previews.
export function WhatsAppButton({ href = 'https://wa.me/27000000000', tooltip = 'Chat with us', inline = false, pulse = true, lifted = false, className, ...rest }) {
  return (
    <a {...rest} href={href} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" className={cx('dg-wa', inline && 'dg-wa--inline', lifted && 'dg-wa--lifted', className)}>
      {pulse && <span className="dg-wa__pulse" aria-hidden="true" />}
      <Icon name="whatsapp" className="dg-wa__icon" strokeWidth={2} />
      {tooltip && <span className="dg-wa__tip">{tooltip}</span>}
    </a>
  );
}
