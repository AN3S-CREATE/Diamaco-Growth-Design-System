import React from 'react';
import { Icon } from '../core/Icon.jsx';

function cx(...a) { return a.filter(Boolean).join(' '); }

const ICONS = { success: 'check-circle', warning: 'alert-triangle', info: 'info', error: 'alert-circle' };

// Transient confirmation, bottom-centre (the WhatsApp button owns bottom-right). Auto-hides after `duration` ms when onClose is given.
export function Toast({ tone = 'success', children, action, onClose, duration = 5000, inline = false, className, ...rest }) {
  React.useEffect(() => {
    if (!onClose || !duration) return undefined;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [onClose, duration]);
  const t = ICONS[tone] ? tone : 'success';
  return (
    <div role="status" aria-live="polite" {...rest} className={cx('dg-toast', 'dg-toast--' + t, inline && 'dg-toast--inline', className)}>
      <Icon name={ICONS[t]} className="dg-toast__icon" />
      <span className="dg-toast__text">{children}</span>
      {action}
      {onClose && <button type="button" className="dg-toast__close" aria-label="Dismiss" onClick={onClose}><Icon name="x" /></button>}
    </div>
  );
}
