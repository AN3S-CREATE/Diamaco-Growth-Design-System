import React from 'react';
import { Icon } from './Icon.jsx';

function cx(...a) { return a.filter(Boolean).join(' '); }

// Uppercase, tracked action. primary: red with a bright-red fill sweeping in from the left + 2px lift + red glow.
// ghost: white 20% hairline. white: for use on the red CTA band (inverts to outline on hover).
export function Button({ variant = 'primary', size = 'default', arrow = false, block = false, href, type, className, children, ...rest }) {
  const v = variant === 'ghost' || variant === 'white' ? variant : 'primary';
  const cls = cx('dg-btn', 'dg-btn--' + v, size === 'sm' && 'dg-btn--sm', block && 'dg-btn--block', className);
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <Icon name="arrow-right" className="dg-btn__arrow" />}
    </>
  );
  if (href) return <a {...rest} href={href} className={cls}>{inner}</a>;
  return <button {...rest} type={type || 'button'} className={cls}>{inner}</button>;
}
