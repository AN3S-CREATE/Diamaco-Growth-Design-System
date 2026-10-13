import React from 'react';

function cx(...a) { return a.filter(Boolean).join(' '); }

// The site's (unused) testimonial card styles: #141414 card, red stars, italic muted quote, red-tinted initials avatar.
// Publish real quotes only, with the client's permission.
export function TestimonialCard({ quote, name, role, rating, initials, className, ...rest }) {
  const ini = initials || String(name || '').split(/\s+/).filter(Boolean).map((s) => s[0]).join('').slice(0, 2).toUpperCase();
  return (
    <figure {...rest} className={cx('dg-testimonial', className)}>
      {rating ? <div className="dg-testimonial__stars" role="img" aria-label={rating + ' out of 5'}>{'★'.repeat(Math.max(0, Math.min(5, rating)))}</div> : null}
      <blockquote className="dg-testimonial__quote">{quote}</blockquote>
      <figcaption className="dg-testimonial__author">
        <span className="dg-testimonial__avatar" aria-hidden="true">{ini}</span>
        <span><b>{name}</b>{role && <span>{role}</span>}</span>
      </figcaption>
    </figure>
  );
}
