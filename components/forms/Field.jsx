import React from 'react';

function cx(...a) { return a.filter(Boolean).join(' '); }

let uid = 0;
function useId(id) { const ref = React.useRef(id); if (!ref.current) ref.current = 'dg-f-' + (++uid); return ref.current; }

// The site's form controls: #141414 fill, 1px #1e1e1e, radius 4px, 14px 18px padding, 0.9rem Inter.
// Focus: red border + 3px 10%-red ring. Placeholder #888.
export function Input({ className, invalid, ...rest }) {
  return <input type="text" {...rest} aria-invalid={invalid || undefined} className={cx('dg-input', className)} />;
}
export function Textarea({ className, invalid, ...rest }) {
  return <textarea {...rest} aria-invalid={invalid || undefined} className={cx('dg-input', className)} />;
}
export function Select({ options = [], placeholder, className, invalid, children, ...rest }) {
  return (
    <select {...rest} aria-invalid={invalid || undefined} className={cx('dg-input', className)}>
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((o) => (typeof o === 'string' ? <option key={o} value={o}>{o}</option> : <option key={o.value} value={o.value}>{o.label}</option>))}
      {children}
    </select>
  );
}

// Label (0.72rem caps, #888, 8px above) + one control. Pass the control as children, or use `type` for a quick input.
export function Field({ label, id, error, type = 'text', className, children, ...inputProps }) {
  const fid = useId(id);
  const control = children
    ? React.cloneElement(React.Children.only(children), { id: fid, invalid: !!error })
    : (type === 'textarea' ? <Textarea id={fid} invalid={!!error} {...inputProps} /> : <Input id={fid} type={type} invalid={!!error} {...inputProps} />);
  return (
    <div className={cx('dg-field', className)}>
      {label && <label className="dg-field__label" htmlFor={fid}>{label}</label>}
      {control}
      {error && <p className="dg-field__error" role="alert">{error}</p>}
    </div>
  );
}

// Two (or more) fields side by side, wrapping to one column under ~500px.
export function FormRow({ className, children, ...rest }) {
  return <div {...rest} className={cx('dg-form-row', className)}>{children}</div>;
}
