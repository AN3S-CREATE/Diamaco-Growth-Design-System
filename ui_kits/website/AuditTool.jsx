import React from 'react';
import { StepProgress } from '../../components/forms/StepProgress.jsx';
import { ChoiceGrid } from '../../components/forms/ChoiceCard.jsx';
import { PillGroup } from '../../components/forms/PillGroup.jsx';
import { MetricCard } from '../../components/cards/MetricCard.jsx';
import { Button } from '../../components/core/Button.jsx';

export const INDUSTRIES = [
  { value: 'pro', icon: 'briefcase', title: 'Professional & Advisory', desc: 'Accounting, Legal, Consulting, Finance' },
  { value: 'logistics', icon: 'truck', title: 'Logistics & Fleet', desc: 'Transport, Courier, Supply Chain, Warehousing' },
  { value: 'construction', icon: 'hard-hat', title: 'Construction & Mining', desc: 'Contractors, Engineering, Industrial Supply' },
  { value: 'retail', icon: 'shopping-bag', title: 'Retail & E-Commerce', desc: 'Wholesale, B2C/B2B Storefronts, Merchandising' },
  { value: 'health', icon: 'heart', title: 'Healthcare & Wellness', desc: 'Medical Practices, Clinics, Allied Health' },
  { value: 'agency', icon: 'pen-tool', title: 'Creative & Tech Agency', desc: 'Marketing, Software, Design, Media' },
  { value: 'manufacturing', icon: 'factory', title: 'Manufacturing & Industrial', desc: 'Production, Fabricators, Heavy Machinery' },
  { value: 'other', icon: 'building', title: 'Other Growing SME', desc: 'Commercial Services & Emerging Ventures' },
];
const TEAM = ['1 (Solo Founder)', '2 – 5 Staff', '6 – 15 Staff', '16 – 50 Staff', '50+ Enterprise'];
const REVENUE = ['Under R100k / mo', 'R100k – R350k / mo', 'R350k – R1M / mo', 'R1M – R3M / mo', 'R3M+ / mo'];
// Step 2 is a kit stand-in (the live tool asks about bottlenecks and current software; its exact options weren't captured).
const BOTTLENECKS = [
  { value: 'followup', icon: 'phone', title: 'Lead follow-up', desc: 'Enquiries go cold before anyone replies' },
  { value: 'admin', icon: 'file', title: 'Quotes & invoicing', desc: 'Manual documents, re-typed data' },
  { value: 'whatsapp', icon: 'message-circle', title: 'WhatsApp overload', desc: 'Same questions answered all day' },
  { value: 'reporting', icon: 'bar-chart', title: 'Reporting', desc: 'Numbers pulled together by hand' },
];

function Q({ n, children }) {
  return <span style={{ display: 'block', margin: '0 0 16px', fontSize: '.95rem', fontWeight: 600, color: '#eee' }}><b style={{ color: 'var(--red-bright)', marginRight: 6 }}>{n}</b>{children}</span>;
}

// The home/audit page diagnostic: a radius-16 floating card with the stepper header, three steps and an example result.
export function AuditTool({ onBook }) {
  const [step, setStep] = React.useState(1);
  const [industry, setIndustry] = React.useState('');
  const [team, setTeam] = React.useState('');
  const [revenue, setRevenue] = React.useState('');
  const [pain, setPain] = React.useState('');
  const titles = { 1: 'Company Profile & Sector', 2: 'Operational Friction', 3: 'Your Growth Snapshot' };
  const ready = step === 1 ? industry && team && revenue : step === 2 ? pain : true;
  return (
    <div style={{ position: 'relative', zIndex: 1, marginTop: 40, overflow: 'hidden', background: 'rgba(18,18,18,.75)', border: '1px solid #242424', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-float)', textAlign: 'left' }}>
      <StepProgress step={step} total={3} title={titles[step]} />
      <div style={{ padding: '32px 36px' }}>
        {step === 1 && (
          <>
            <Q n="1.1">Which industry best describes your business?</Q>
            <ChoiceGrid label="Industry" options={INDUSTRIES} value={industry} onChange={setIndustry} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28, marginTop: 32 }}>
              <div><Q n="1.2">Team size</Q><PillGroup label="Team size" options={TEAM} value={team} onChange={setTeam} /></div>
              <div><Q n="1.3">Estimated monthly revenue</Q><PillGroup label="Monthly revenue" options={REVENUE} value={revenue} onChange={setRevenue} /></div>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <Q n="2.1">Where does your team lose the most time?</Q>
            <ChoiceGrid label="Main bottleneck" options={BOTTLENECKS} value={pain} onChange={setPain} />
          </>
        )}
        {step === 3 && (
          <>
            <span className="dg-label">Example output · illustrative figures</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
              <MetricCard icon="clock" label="Recoverable hours" value="18–26" unit="hrs / week" desc="Estimated from team size and the bottleneck you chose." />
              <MetricCard icon="refresh-cw" label="Automatable tasks" value="6" unit="workflows" desc="Processes that fit Zapier, Make or n8n builds." />
              <MetricCard icon="activity" label="Readiness score" value="62" unit="/ 100" desc="Higher = quicker wins from automation." />
            </div>
          </>
        )}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 16, marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--black-border)' }}>
          <span style={{ fontSize: '.8rem', color: 'var(--white-faint)' }}>
            {step === 1 && !ready ? 'Please select your industry, team size, and revenue tier to proceed' : step === 3 ? 'Book a free strategy call to get your full roadmap.' : ''}
          </span>
          <div style={{ display: 'flex', gap: 12 }}>
            {step > 1 && <Button variant="ghost" onClick={() => setStep(step - 1)}>Back</Button>}
            {step < 3
              ? <Button arrow disabled={!ready} onClick={() => setStep(step + 1)}>Continue to step {step + 1}</Button>
              : <Button arrow onClick={onBook}>Book my strategy call</Button>}
          </div>
        </div>
      </div>
    </div>
  );
}
