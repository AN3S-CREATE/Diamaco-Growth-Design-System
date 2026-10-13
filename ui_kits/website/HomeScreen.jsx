import React from 'react';
import { Hero } from '../../components/sections/Hero.jsx';
import { Marquee } from '../../components/sections/Marquee.jsx';
import { StatsBar } from '../../components/cards/StatsBar.jsx';
import { Section } from '../../components/core/Container.jsx';
import { SectionLabel } from '../../components/core/SectionLabel.jsx';
import { LiveBadge } from '../../components/core/LiveBadge.jsx';
import { Button } from '../../components/core/Button.jsx';
import { PhotoFrame } from '../../components/cards/PhotoFrame.jsx';
import { Pillars } from '../../components/cards/Pillars.jsx';
import { SectionHeading } from '../../components/sections/SectionHeading.jsx';
import { ServiceGrid } from '../../components/cards/ServiceGrid.jsx';
import { ProcessSteps } from '../../components/sections/ProcessSteps.jsx';
import { Card } from '../../components/cards/Card.jsx';
import { CtaBanner } from '../../components/sections/CtaBanner.jsx';
import { BlogCard } from '../../components/cards/BlogCard.jsx';
import { AuditTool } from './AuditTool.jsx';

// The live home page, top to bottom, with the site's own copy.
export function HomeScreen({ photoSrc, go, onBook }) {
  return (
    <>
      <Hero
        eyebrow="Business growth partners · South Africa"
        title={<>Systems. Strategy.<br /><em>Serious Growth.</em></>}
        lead="Diamaco Growth helps South African businesses automate operations, build a powerful digital presence, and win more clients — with the hunger and focus that only a new company can bring."
        actions={<><Button arrow onClick={() => go('audit')}>Free AI growth audit</Button><Button variant="ghost" onClick={onBook}>Book a strategy call</Button></>}
        stats={[{ value: '10', label: 'Core services' }, { value: 'SA', label: 'Based & focused' }, { value: '∞', label: 'Growth potential' }]}
      />
      <Marquee />
      <StatsBar items={[
        { icon: 'zap', label: 'Fast implementation', text: 'We move quickly so you see results sooner' },
        { icon: 'target', label: 'Results-focused', text: 'Every action is tied to a measurable outcome' },
        { icon: 'map-pin', label: 'SA-market experts', text: 'Built for the South African business landscape' },
        { icon: 'unlock', label: 'No lock-in contracts', text: 'Earn your trust every month — no lock-ins' },
      ]} />

      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 80, alignItems: 'center' }}>
          <div style={{ paddingRight: 24 }}><PhotoFrame src={photoSrc} alt="Diamaco Growth strategic partner at work" badge={{ value: '10', label: 'Core services' }} /></div>
          <div>
            <SectionLabel>Who we are</SectionLabel>
            <h2 className="dg-section-title">Your Strategic <em>Growth</em> Partner</h2>
            <p className="dg-subtitle" style={{ marginBottom: 40 }}>Diamaco Growth is a business built to solve a real problem: quality growth support has always been out of reach for most South African SMEs. We’re changing that — with full-service capability at a fair price.</p>
            <Pillars items={[
              { title: 'Results-Driven Execution', text: "We don't just advise — we implement. Every engagement is tied to measurable outcomes that move your business forward." },
              { title: 'Tailored Strategies', text: 'No cookie-cutter solutions. Every business is unique, and we build strategies that fit your specific context and goals.' },
              { title: 'End-to-End Support', text: "From commercial registration to digital marketing — we're with you at every stage of your growth journey." },
            ]} />
            <div style={{ marginTop: 48 }}><Button variant="ghost" arrow onClick={() => go('about')}>Learn more about us</Button></div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading label="What we do" title={<>Services Built for <em>Real Growth</em></>} subtitle="Ten integrated services designed to transform every dimension of your business — from the ground up." />
        <ServiceGrid />
        <div style={{ marginTop: 48, textAlign: 'center' }}><Button variant="ghost" arrow onClick={() => go('services')}>View all services</Button></div>
      </Section>

      <Section tone="sunken">
        <div style={{ textAlign: 'center' }}>
          <LiveBadge>Interactive diagnostic engine</LiveBadge>
          <h2 className="dg-section-title">AI Business Growth &amp;<br /><em>Automation Audit</em></h2>
          <p className="dg-subtitle" style={{ margin: '0 auto' }}>Diagnose operational friction, calculate recoverable team hours, and unlock a custom-tailored automation roadmap with a free strategy call.</p>
        </div>
        <AuditTool onBook={() => go('contact')} />
      </Section>

      <Section tone="raised">
        <SectionHeading align="center" label="How we work" title={<>A Process Built for <em>Results</em></>} />
        <ProcessSteps />
      </Section>

      <Section>
        <SectionHeading label="Why work with us" title={<>New to the Market.<br /><em>Not New to the Work.</em></>} subtitle="We’re breaking into the industry with something established firms rarely have anymore: genuine hunger. Every client gets our absolute best, every single time. No shortcuts, no junior handoffs, no coasting." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: 24 }}>
          <Card icon="flame" title="Hungry to Prove Ourselves">Established agencies coast on reputation. We can't afford to. Every project we take on is a chance to earn our name.</Card>
          <Card icon="target" title="Your Results Are Our Reputation">We don't have a long client list to fall back on. Your success is the only portfolio we're building right now.</Card>
          <Card icon="message-circle" title="Radical Transparency, Always">No jargon, no smoke and mirrors. You'll always know exactly what we're building, why, and what it's costing.</Card>
          <Card icon="tool" title="Execution Over Advice">We're not consultants who hand you a 40-page report and disappear. We roll up our sleeves and build — alongside you.</Card>
        </div>
        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <Button arrow onClick={() => go('contact')}>Start a conversation</Button>
          <p style={{ marginTop: 16, fontSize: '.8rem', color: 'var(--white-faint)' }}>No pressure. No pitch deck. Just a genuine conversation about your business.</p>
        </div>
      </Section>

      <CtaBanner action={{ label: 'Book a free consultation', href: '#contact' }} />

      <Section>
        <SectionHeading label="Insights" title="Fresh from the Blog" action={<Button variant="ghost" arrow>All articles</Button>} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          <BlogCard tag="Automation" icon="layers" title="5 Workflows Every South African Business Should Automate in 2025" excerpt="Discover the highest-impact processes to automate first — no technical expertise required." date="Sep 2025" readTime="6 min read" />
          <BlogCard tag="Lead Generation" icon="activity" title="How to Build a Consistent Lead Pipeline Without Paid Ads" excerpt="Organic strategies that work for SMEs with modest budgets and ambitious growth targets." date="Aug 2025" readTime="8 min read" />
          <BlogCard tag="Compliance" icon="file" title="The Complete Checklist for Winning Your First Government Tender" excerpt="From compliance documents to proposal strategy — everything you need to compete and win." date="Jul 2025" readTime="10 min read" />
        </div>
      </Section>
    </>
  );
}
