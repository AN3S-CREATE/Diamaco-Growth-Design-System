import React from 'react';
import { PageHero } from '../../components/sections/PageHero.jsx';
import { Container } from '../../components/core/Container.jsx';
import { AuditTool } from './AuditTool.jsx';

// /audit: the diagnostic on its own page.
export function AuditScreen({ go }) {
  return (
    <>
      <PageHero crumbs={[{ label: 'Home', href: '#home' }, { label: 'AI Audit' }]} label="Free · 3 steps"
        title={<>AI Business Growth &amp;<br /><em>Automation Audit</em></>}
        subtitle="Diagnose operational friction, calculate recoverable team hours, and unlock a custom-tailored automation roadmap with a free strategy call." />
      <section style={{ padding: '0 0 120px' }}>
        <Container><AuditTool onBook={() => go('contact')} /></Container>
      </section>
    </>
  );
}
