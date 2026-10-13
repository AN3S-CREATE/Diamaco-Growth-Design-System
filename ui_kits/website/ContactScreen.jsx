import React from 'react';
import { PageHero } from '../../components/sections/PageHero.jsx';
import { Container } from '../../components/core/Container.jsx';
import { Field, FormRow, Select } from '../../components/forms/Field.jsx';
import { Button } from '../../components/core/Button.jsx';
import { Card } from '../../components/cards/Card.jsx';
import { Icon } from '../../components/core/Icon.jsx';
import { SERVICES } from '../../components/cards/ServiceGrid.jsx';
import { Toast } from '../../components/feedback/Toast.jsx';

// /contact: form on the left, contact details card on the right. Phone/WhatsApp are placeholders (confirm before use).
export function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const row = (icon, label, value) => (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '16px 0', borderTop: '1px solid var(--black-border)' }}>
      <span style={{ color: 'var(--red-bright)', marginTop: 2 }}><Icon name={icon} size={18} /></span>
      <div><div className="dg-caps" style={{ marginBottom: 4 }}>{label}</div><div style={{ fontSize: '.92rem', color: 'var(--white)' }}>{value}</div></div>
    </div>
  );
  return (
    <>
      <PageHero crumbs={[{ label: 'Home', href: '#home' }, { label: 'Contact' }]} label="Let's talk"
        title={<>Start a <em>Conversation</em></>}
        subtitle="No pressure. No pitch deck. Just a genuine conversation about your business." />
      <section style={{ padding: '0 0 120px' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 48, alignItems: 'start' }}>
            <form style={{ gridColumn: 'span 1' }} onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <FormRow><Field label="Full name" placeholder="Your name" required /><Field label="Company" placeholder="Business name" /></FormRow>
              <FormRow><Field label="Email" type="email" placeholder="you@company.co.za" required /><Field label="Phone" type="tel" placeholder="+27 (0) 82 000 0000" /></FormRow>
              <Field label="Service of interest"><Select placeholder="Select a service" options={SERVICES.map((s) => s.title)} /></Field>
              <Field label="Message" type="textarea" placeholder="Tell us about your business and goals" />
              <Button type="submit" block arrow>Send message</Button>
              {sent && <Toast onClose={() => setSent(false)}>Message sent — we'll be in touch.</Toast>}
            </form>
            <Card interactive={false} title="Contact details">
              <p className="dg-card__text" style={{ marginBottom: 12 }}>In person across Mpumalanga &amp; Gauteng; digitally in every other province.</p>
              {row('mail', 'Email', 'info@diamacogrowth.co.za')}
              {row('phone', 'Phone', '+27 (0) XX XXX XXXX — confirm number')}
              {row('whatsapp', 'WhatsApp', 'Chat with us')}
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
