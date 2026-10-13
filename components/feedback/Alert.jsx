import React from 'react';
import { Icon } from '../core/Icon.jsx';

function cx(...a) { return a.filter(Boolean).join(' '); }

const ICONS = { success: 'check-circle', warning: 'alert-triangle', info: 'info', error: 'alert-circle' };

// Inline message: dark card with a 3px left edge and a faint wash in the status colour, line icon, optional title + dismiss.
// Status colours are small-dose only (added 2026-10-13; the live site has none).
export function Alert({ tone = 'info', title, onClose, className, children, ...rest }) {
  const t = ICONS[tone] ? tone : 'info';
  return (
    <div role={t === 'error' || t === 'warning' ? 'alert' : 'status'} {...rest} className={cx('dg-alert', 'dg-alert--' + t, className)}>
      <Icon name={ICONS[t]} className="dg-alert__icon" />
      <div className="dg-alert__body">
        {title && <p className="dg-alert__title">{title}</p>}
        {children && <div className="dg-alert__text">{children}</div>}
      </div>
      {onClose && <button type="button" className="dg-alert__close" aria-label="Dismiss" onClick={onClose}><Icon name="x" /></button>}
    </div>
  );
}
