import React from 'react';
import { Icon } from '../core/Icon.jsx';

function cx(...a) { return a.filter(Boolean).join(' '); }

// "Fresh from the Blog" card: 180px image slot, red caps tag, 3-line title, 2-line excerpt, hairline meta row.
// Lifts 4px on hover and the title turns red.
export function BlogCard({ tag, title, excerpt, date, readTime, href = '#', image, icon = 'file', readLabel = 'Read →', className, ...rest }) {
  return (
    <a {...rest} href={href} className={cx('dg-blog', className)}>
      <div className="dg-blog__img">{image ? <img src={image} alt="" /> : <Icon name={icon} strokeWidth={1} />}</div>
      <div className="dg-blog__body">
        {tag && <span className="dg-tag dg-blog__tag">{tag}</span>}
        <h3 className="dg-blog__title">{title}</h3>
        {excerpt && <p className="dg-blog__excerpt">{excerpt}</p>}
        <div className="dg-blog__meta">
          <span>{[date, readTime].filter(Boolean).join(' · ')}</span>
          <span className="dg-blog__read">{readLabel}</span>
        </div>
      </div>
    </a>
  );
}
