import React from 'react';

function cx(...a) { return a.filter(Boolean).join(' '); }

// Inner-page trail above the page-hero label: 0.72rem grey, links turn red on hover, "/" separators.
export function Breadcrumb({ items = [], className, ...rest }) {
  return (
    <nav {...rest} aria-label="Breadcrumb" className={cx('dg-crumbs', className)}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            {last || !it.href ? <span aria-current={last ? 'page' : undefined}>{it.label}</span> : <a href={it.href}>{it.label}</a>}
            {!last && <span className="dg-crumbs__sep" aria-hidden="true">/</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
