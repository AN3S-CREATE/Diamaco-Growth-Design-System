import React from 'react';
import { PageHero } from '../../components/sections/PageHero.jsx';
import { Marquee } from '../../components/sections/Marquee.jsx';
import { Container, Section } from '../../components/core/Container.jsx';
import { ServiceDetail } from '../../components/sections/ServiceDetail.jsx';
import { SERVICES } from '../../components/cards/ServiceGrid.jsx';
import { SectionHeading } from '../../components/sections/SectionHeading.jsx';
import { Accordion } from '../../components/content/Accordion.jsx';
import { CtaBanner } from '../../components/sections/CtaBanner.jsx';

// /services: page hero, marquee, all ten service rows alternating sides, FAQ, CTA band.
export function ServicesScreen() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Home', href: '#home' }, { label: 'Services' }]} label="What we offer"
        title={<>Ten Services.<br />One <em>Growth Partner</em>.</>}
        subtitle="From your first CIPC registration to automated lead generation — every service is designed to compound and work together for exponential business growth." />
      <Marquee />
      <section style={{ padding: '56px 0 80px' }}>
        <Container>
          {SERVICES.map((s, i) => <ServiceDetail key={s.num} service={s} reverse={i % 2 === 1} />)}
        </Container>
      </section>
      <Section tone="raised">
        <SectionHeading align="center" label="FAQ" title={<>Questions, <em>Answered</em></>} />
        <div style={{ maxWidth: 820, margin: '0 auto' }}><Accordion /></div>
      </Section>
      <CtaBanner action={{ label: 'Book a free consultation', href: '#contact' }} />
    </>
  );
}
