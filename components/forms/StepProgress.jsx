import React from 'react';

function cx(...a) { return a.filter(Boolean).join(' '); }

// Stepper header from the audit card: "STEP 01 OF 03" in red caps (tabular), the step title, and a 4px glowing progress bar.
export function StepProgress({ step = 1, total = 3, title, className, ...rest }) {
  const pad = (n) => String(n).padStart(2, '0');
  const pct = Math.max(0, Math.min(100, (step / total) * 100));
  return (
    <div {...rest} className={cx('dg-stepper', className)}>
      <div className="dg-stepper__info">
        <span className="dg-stepper__count">Step {pad(step)} of {pad(total)}</span>
        {title && <span className="dg-stepper__title">{title}</span>}
      </div>
      <div className="dg-progress" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={step}>
        <div className="dg-progress__bar" style={{ width: pct + '%' }} />
      </div>
    </div>
  );
}
