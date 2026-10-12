import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { SectionLabel } from '../core/SectionLabel.jsx';

function cx(...a) { return a.filter(Boolean).join(' '); }

// /services row: a 4:3 radius-16 visual (red radial spot + 72px thin red icon) beside the meta column — ghost "01"
// numeral, red category label, Playfair title, paragraph and red-dot feature list. `reverse` swaps sides; rows are
// separated by hairlines. Single column when the component is narrower than ~820px.
export function ServiceDetail({ service, num, category, title, description, features, icon, reverse = false, className, ...rest }) {
  const s = service || {};
  const n = num || s.num;
  const cat = category || s.category;
  const t = title || s.title;
  const d = description || s.description;
  const f = features || s.features || [];
  const ic = icon || s.icon || 'layers';
  return (
    <div {...rest} className={cx('dg-detail-wrap', className)} id={n ? 'service-' + n : undefined}>
      <div className={cx('dg-detail', reverse && 'dg-detail--reverse')}>
        <div className="dg-detail__visual" aria-hidden="true"><Icon name={ic} size={72} strokeWidth={1} /></div>
        <div className="dg-detail__meta">
          {n && <div className="dg-ghost-num dg-detail__num">{n}</div>}
          {cat && <SectionLabel>{cat}</SectionLabel>}
          <h2 className="dg-detail-title">{t}</h2>
          {d && <p className="dg-detail__desc">{d}</p>}
          {f.length > 0 && <ul className="dg-features">{f.map((x, i) => <li key={i}>{x}</li>)}</ul>}
        </div>
      </div>
    </div>
  );
}
