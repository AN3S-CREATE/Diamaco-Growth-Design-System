import React from 'react';

function cx(...a) { return a.filter(Boolean).join(' '); }

export const PROCESS = [
  { title: 'Discovery Call', text: 'We understand your business, challenges, goals, and existing systems — no assumptions, just clarity.' },
  { title: 'Strategy Design', text: 'We craft a customised growth roadmap identifying high-impact opportunities and prioritising quick wins.' },
  { title: 'Execution & Build', text: 'Our team builds systems, automations, digital assets, and campaigns with precision and speed.' },
  { title: 'Measure & Optimise', text: 'We track performance, report transparently, and continuously optimise — so results compound over time.' },
];

// "How we work": four columns joined by a red-centred gradient line through 56px numbered circles.
// Circle fills red on hover. Two columns (no line) under ~860px, one under ~480px — measured on the component itself.
export function ProcessSteps({ steps = PROCESS, className, ...rest }) {
  return (
    <div {...rest} className={cx('dg-process', className)}>
      <ol className="dg-process__steps" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {steps.map((s, i) => (
          <li className="dg-step" key={i}>
            <div className="dg-step__num">{String(i + 1).padStart(2, '0')}</div>
            <h3 className="dg-step__title">{s.title}</h3>
            <p className="dg-step__text">{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
