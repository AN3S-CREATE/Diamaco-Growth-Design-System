import React from 'react';

function cx(...a) { return a.filter(Boolean).join(' '); }

// The site's .section-label: red, 0.7rem, 600, 0.2em tracking, uppercase, led by a 24px red hairline.
// variant="hero" is the home-hero eyebrow (0.72rem, 32px rule, 32px below).
export function SectionLabel({ variant = 'section', rule = true, align = 'start', as: Tag = 'p', className, children, ...rest }) {
  return (
    <Tag
      {...rest}
      className={cx('dg-label', variant === 'hero' && 'dg-label--hero', !rule && 'dg-label--bare', align === 'center' && 'dg-label--center', className)}
    >
      {children}
    </Tag>
  );
}

// Small red caps tag without a rule — blog categories, service categories inside cards.
export function Tag({ as: El = 'span', className, children, ...rest }) {
  return <El {...rest} className={cx('dg-tag', className)}>{children}</El>;
}
