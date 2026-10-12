import React from 'react';
import { Icon } from '../core/Icon.jsx';

function cx(...a) { return a.filter(Boolean).join(' '); }

export const FOOTER_BLURB = "South Africa's premier business growth partner. We systematise, scale, and sustain the businesses of tomorrow — today. Serving businesses nationwide: in person across Mpumalanga & Gauteng, and digitally in every other province.";

const DEFAULT_COLUMNS = [
  { title: 'Navigation', links: [['Home', '/'], ['About Us', '/about'], ['Services', '/services'], ['AI Growth Audit', '/audit'], ['Insights', '/blog'], ['Contact', '/contact']] },
  { title: 'Services', links: [['Workflow Automation', '/services'], ['CRM Setup', '/services'], ['Website Development', '/services'], ['Lead Generation', '/services'], ['Tender Readiness', '/services']] },
  { title: 'Contact', links: [['info@diamacogrowth.co.za', 'mailto:info@diamacogrowth.co.za'], ['+27 (0) XX XXX XXXX', 'tel:+27000000000']] },
];
const DEFAULT_SOCIAL = [
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/diamaco-growth' },
  { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/diamaco_growth/' },
  { icon: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/27000000000' },
];

// #080808 footer: brand column (88px logo, blurb, square social buttons) + three link columns, then a hairline bottom bar.
export function SiteFooter({ logoSrc, blurb = FOOTER_BLURB, columns = DEFAULT_COLUMNS, social = DEFAULT_SOCIAL, year = new Date().getFullYear(), credit = 'Designed & Built with ♥ in South Africa', className, ...rest }) {
  return (
    <footer {...rest} className={cx('dg-footer', className)}>
      <div className="dg-container">
        <div className="dg-footer__top">
          <div>
            {logoSrc && <img className="dg-footer__logo" src={logoSrc} alt="Diamaco Growth" />}
            <p className="dg-footer__text">{blurb}</p>
            <div className="dg-footer__social">
              {social.map((s) => <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"><Icon name={s.icon} /></a>)}
            </div>
          </div>
          {columns.map((c) => (
            <div className="dg-footer__col" key={c.title}>
              <h4>{c.title}</h4>
              <ul>{c.links.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul>
            </div>
          ))}
        </div>
      </div>
      <div className="dg-footer__bottom">
        <div className="dg-container">
          <span>© {year} Diamaco Growth. All rights reserved.</span>
          {credit && <span>{credit}</span>}
        </div>
      </div>
    </footer>
  );
}
