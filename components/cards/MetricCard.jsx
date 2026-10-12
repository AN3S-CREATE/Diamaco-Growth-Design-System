import React from 'react';
import { IconTile } from '../core/IconTile.jsx';

function cx(...a) { return a.filter(Boolean).join(' '); }

// Audit-results metric: soft top-to-bottom gradient, radius 12px, caps label, Inter 900 tabular value with a grey unit,
// and a hairline-topped footnote pinned to the bottom.
export function MetricCard({ label, value, unit, desc, icon, emoji, className, ...rest }) {
  return (
    <div {...rest} className={cx('dg-metric', className)}>
      <div className="dg-metric__head">
        {(icon || emoji) && <IconTile icon={icon} emoji={emoji} />}
        <span className="dg-metric__label">{label}</span>
      </div>
      <div className="dg-metric__value">{value}{unit && <span className="dg-metric__unit">{unit}</span>}</div>
      {desc && <p className="dg-metric__desc">{desc}</p>}
    </div>
  );
}
