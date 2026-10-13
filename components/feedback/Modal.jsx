import React from 'react';
import { Icon } from '../core/Icon.jsx';

function cx(...a) { return a.filter(Boolean).join(' '); }

let seq = 0;

// Dialog on a 72% black, blurred overlay: radius-16 #141414 panel with the audit card's float shadow, red eyebrow,
// Playfair title, body, hairline footer for actions. Escape and overlay click close it; focus moves in and returns on close.
export function Modal({ open, onClose, eyebrow, title, children, footer, width = 560, inline = false, className, ...rest }) {
  const ref = React.useRef(null);
  const id = React.useRef('dg-modal-' + (++seq)).current;
  React.useEffect(() => {
    if (!open || inline) return undefined;
    const prev = document.activeElement;
    if (ref.current) ref.current.focus();
    const onKey = (e) => { if (e.key === 'Escape' && onClose) onClose(); };
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
      if (prev && prev.focus) prev.focus();
    };
  }, [open, inline, onClose]);
  if (!open) return null;
  const dialog = (
    <div {...rest} ref={ref} tabIndex={-1} role="dialog" aria-modal={inline ? undefined : true} aria-labelledby={id + '-t'} className={cx('dg-modal', className)} style={{ maxWidth: width }}>
      <div className="dg-modal__head">
        <div>
          {eyebrow && <p className="dg-label">{eyebrow}</p>}
          <h2 className="dg-modal__title" id={id + '-t'}>{title}</h2>
        </div>
        {onClose && <button type="button" className="dg-modal__close" aria-label="Close" onClick={onClose}><Icon name="x" /></button>}
      </div>
      <div className="dg-modal__body">{children}</div>
      {footer && <div className="dg-modal__foot">{footer}</div>}
    </div>
  );
  if (inline) return <div className="dg-overlay dg-overlay--inline">{dialog}</div>;
  return <div className="dg-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}>{dialog}</div>;
}
