import React from 'react';
import { SectionLabel } from '../core/SectionLabel.jsx';

function cx(...a) { return a.filter(Boolean).join(' '); }

// Home hero: full-viewport black with two faint red radial washes, an 80px grid masked to the centre and two slowly
// drifting red orbs. Content: hero eyebrow, Playfair 900 headline (last line red italic via <em>), light lead, actions.
// Bottom corners: a red "Scroll" cue on the left, right-aligned stats on the right.
export function Hero({ eyebrow, title, lead, actions, stats, scrollCue = true, fullHeight = true, className, ...rest }) {
  return (
    <section {...rest} className={cx('dg-hero', !fullHeight && 'dg-hero--auto', className)}>
      <div className="dg-hero__bg" aria-hidden="true" />
      <div className="dg-hero__grid" aria-hidden="true" />
      <div className="dg-hero__orb dg-hero__orb--1" aria-hidden="true" />
      <div className="dg-hero__orb dg-hero__orb--2" aria-hidden="true" />
      <div className="dg-container">
        <div className="dg-hero__content">
          {eyebrow && <SectionLabel variant="hero">{eyebrow}</SectionLabel>}
          <h1 className="dg-hero-title">{title}</h1>
          {lead && <p className="dg-lead dg-hero__lead">{lead}</p>}
          {actions && <div className="dg-hero__actions">{actions}</div>}
        </div>
      </div>
      {scrollCue && <div className="dg-hero__scroll" aria-hidden="true"><i />Scroll</div>}
      {stats && stats.length > 0 && (
        <div className="dg-hero__stats">
          {stats.map((s, i) => <div className="dg-hero__stat" key={i}><b>{s.value}</b><span>{s.label}</span></div>)}
        </div>
      )}
    </section>
  );
}
