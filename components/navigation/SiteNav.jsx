import React from 'react';
import { Button } from '../core/Button.jsx';
import { Logo } from '../brand/Logo.jsx';

function cx(...a) { return a.filter(Boolean).join(' '); }

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'AI Audit', href: '/audit' },
  { label: 'Insights', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

// The site's fixed top bar: 120px tall, vector logo (inline unless logoSrc is given), caps links with a red underline that draws in from the left,
// small red CTA on the right. Transparent over the hero; `solid` is the scrolled state (92% black + hairline).
export function SiteNav({ logoSrc, links = NAV_LINKS, active, cta = { label: 'Start a project', href: '/contact' }, fixed = false, solid = false, compact = false, onNavigate, className, ...rest }) {
  const go = (href) => (e) => { if (onNavigate) { e.preventDefault(); onNavigate(href); } };
  return (
    <nav {...rest} className={cx('dg-nav', fixed && 'dg-nav--fixed', solid && 'dg-nav--solid', compact && 'dg-nav--compact', className)} aria-label="Main">
      <div className="dg-nav__inner">
        <a className="dg-nav__logo" href="/" onClick={go('/')}>
          {logoSrc ? <img src={logoSrc} alt="Diamaco Growth" /> : <Logo />}
        </a>
        <ul className="dg-nav__links">
          {links.map((l) => {
            const isActive = active === l.href || active === l.label;
            return (
              <li key={l.href}>
                <a className={cx('dg-nav__link', isActive && 'is-active')} href={l.href} aria-current={isActive ? 'page' : undefined} onClick={go(l.href)}>{l.label}</a>
              </li>
            );
          })}
        </ul>
        {cta && <Button className="dg-nav__cta" size="sm" href={cta.href} arrow onClick={go(cta.href)}>{cta.label}</Button>}
        <button className="dg-nav__burger" type="button" aria-label="Toggle menu"><span /><span /><span /></button>
      </div>
    </nav>
  );
}
