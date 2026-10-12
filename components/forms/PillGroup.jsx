import React from 'react';

function cx(...a) { return a.filter(Boolean).join(' '); }

// Short-answer option button (audit team size / revenue tier). Selected: solid red with a red drop glow.
export function Pill({ active = false, className, children, ...rest }) {
  return (
    <button type="button" role="radio" aria-checked={active} {...rest} className={cx('dg-pill', active && 'is-active', className)}>
      {children}
    </button>
  );
}

// Wrapping row of Pills with single selection.
export function PillGroup({ options = [], value, onChange, label, className, ...rest }) {
  return (
    <div {...rest} role="radiogroup" aria-label={label} className={cx('dg-pills', className)}>
      {options.map((o) => {
        const v = typeof o === 'string' ? o : o.value;
        const l = typeof o === 'string' ? o : o.label;
        return <Pill key={v} active={value === v} onClick={() => onChange && onChange(v)}>{l}</Pill>;
      })}
    </div>
  );
}
