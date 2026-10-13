import React from 'react';
import { Icon } from '../core/Icon.jsx';

function cx(...a) { return a.filter(Boolean).join(' '); }

// FAQ answers composed only from statements on diamacogrowth.co.za (home, services, audit, footer).
export const FAQS = [
  { q: 'Do you only work with businesses in Mpumalanga and Gauteng?', a: 'No. We serve businesses nationwide: in person across Mpumalanga & Gauteng, and digitally in every other province.' },
  { q: 'Are there lock-in contracts?', a: 'No. We earn your trust every month — no lock-ins.' },
  { q: 'What does the free AI growth audit include?', a: 'It diagnoses operational friction, calculates recoverable team hours, and unlocks a custom-tailored automation roadmap with a free strategy call.' },
  { q: 'Which automation and CRM tools do you work with?', a: 'We build automations in Zapier, Make, and n8n, and set up CRMs such as HubSpot, Zoho, and Pipedrive — then train your team to use them from day one.' },
  { q: 'Can you help us register a company and prepare for tenders?', a: 'Yes. We guide you through CIPC, SARS, and B-BBEE setup, and help you prepare compliant documentation to compete for government and corporate tenders.' },
];

let seq = 0;

// Hairline-separated questions; the +/− circle turns solid red when open. One open at a time unless `multiple`.
export function Accordion({ items = FAQS, multiple = false, defaultOpen = 0, className, ...rest }) {
  const [open, setOpen] = React.useState(defaultOpen == null ? [] : [defaultOpen]);
  const base = React.useRef('dg-acc-' + (++seq)).current;
  const toggle = (i) => setOpen((o) => (o.includes(i) ? o.filter((x) => x !== i) : multiple ? o.concat(i) : [i]));
  return (
    <div {...rest} className={cx('dg-accordion', className)}>
      {items.map((it, i) => {
        const isOpen = open.includes(i);
        return (
          <div className={cx('dg-acc', isOpen && 'is-open')} key={i}>
            <h3 className="dg-acc__h">
              <button type="button" className="dg-acc__btn" id={base + '-b' + i} aria-expanded={isOpen} aria-controls={base + '-p' + i} onClick={() => toggle(i)}>
                <span>{it.q}</span>
                <span className="dg-acc__icon" aria-hidden="true"><Icon name={isOpen ? 'minus' : 'plus'} /></span>
              </button>
            </h3>
            <div className="dg-acc__panel" id={base + '-p' + i} role="region" aria-labelledby={base + '-b' + i} hidden={!isOpen}>
              <div className="dg-acc__a">{it.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
