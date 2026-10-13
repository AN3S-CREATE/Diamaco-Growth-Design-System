import React from 'react';
import { Logo } from './Logo.jsx';
import { Icon } from '../core/Icon.jsx';

function cx(...a) { return a.filter(Boolean).join(' '); }

export const SOCIAL_FORMATS = {
  landscape: [1200, 630],  // share image (Open Graph / LinkedIn link), blog cover
  square: [1080, 1080],    // LinkedIn / Instagram / Facebook feed
  portrait: [1080, 1350],  // Instagram feed 4:5
  story: [1080, 1920],     // Instagram / WhatsApp / LinkedIn stories
};

// Fixed-size social artboard in the brand system: black ground with red radial light, the 80px grid and grain, a red
// slash echoing the logo's D, logo top-left, URL bottom. Sizes scale with --u (short side / 1080).
// variant: headline | stat | service | blog. `scale` shrinks the whole artboard for previews (export at scale 1).
export function SocialPost({
  format = 'square', variant = 'headline', eyebrow, title, body, stat, items, icon, tag, meta, cta, num,
  url = 'diamacogrowth.co.za', scale = 1, className, style, ...rest
}) {
  const [w, h] = SOCIAL_FORMATS[format] || SOCIAL_FORMATS.square;
  const u = Math.min(w, h) / 1080;
  const wide = format === 'landscape';
  const showSlash = variant !== 'blog' && variant !== 'service';
  const ctaEl = cta && <span className="dg-post__cta">{cta}<Icon name="arrow-right" /></span>;
  const visual = icon && (
    <div className="dg-post__visual" aria-hidden="true"><Icon name={icon} strokeWidth={1} /></div>
  );

  let main;
  if (variant === 'stat') {
    main = (
      <>
        {eyebrow && <p className="dg-post__eyebrow">{eyebrow}</p>}
        {stat && <div className="dg-post__stat">{stat.value}{stat.accent && <span>{stat.accent}</span>}</div>}
        {stat && stat.label && <div className="dg-post__stat-label">{stat.label}</div>}
        {title && <h2 className="dg-post__title dg-post__title--sm">{title}</h2>}
        {body && <p className="dg-post__body">{body}</p>}
        {ctaEl}
      </>
    );
  } else if (variant === 'service') {
    main = (
      <>
        {num && <div className="dg-post__num">{num}</div>}
        {eyebrow && <p className="dg-post__eyebrow">{eyebrow}</p>}
        <h2 className="dg-post__title dg-post__title--md">{title}</h2>
        {body && <p className="dg-post__body">{body}</p>}
        {items && <ul className="dg-post__list">{items.map((it, i) => <li key={i}>{it}</li>)}</ul>}
        {ctaEl}
      </>
    );
  } else if (variant === 'blog') {
    main = (
      <div className="dg-post__blog">
        <div>
          {tag && <p className="dg-post__eyebrow">{tag}</p>}
          <h2 className="dg-post__title dg-post__title--blog">{title}</h2>
          {meta && <p className="dg-post__meta">{meta}</p>}
        </div>
        {visual}
      </div>
    );
  } else {
    main = (
      <>
        {eyebrow && <p className="dg-post__eyebrow">{eyebrow}</p>}
        <h2 className="dg-post__title">{title}</h2>
        {body && <p className="dg-post__body">{body}</p>}
        {ctaEl}
      </>
    );
  }

  return (
    <div {...rest} className={cx('dg-post-frame', className)} style={{ width: w * scale, height: h * scale, ...style }}>
      <div className={cx('dg-post', 'dg-post--' + format, 'dg-post--' + variant)} style={{ width: w, height: h, '--u': u, transform: scale !== 1 ? 'scale(' + scale + ')' : undefined }}>
        <div className="dg-post__bg" aria-hidden="true" />
        <div className="dg-post__grid" aria-hidden="true" />
        <div className="dg-post__grain" aria-hidden="true" />
        {showSlash && <div className="dg-post__slash" aria-hidden="true" />}
        {variant === 'service' && visual}
        <div className="dg-post__head">
          <Logo height={(wide ? 64 : 76) * u} />
          {!wide && <span className="dg-post__url">{url}</span>}
        </div>
        <div className="dg-post__main">{main}</div>
        <div className="dg-post__foot">
          <span>{wide ? url : 'Business growth partners · South Africa'}</span>
          <Logo variant="mark" height={34 * u} />
        </div>
      </div>
    </div>
  );
}
