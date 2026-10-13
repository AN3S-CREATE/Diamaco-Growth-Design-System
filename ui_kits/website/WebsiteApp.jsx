import React from 'react';
import { SiteNav } from '../../components/navigation/SiteNav.jsx';
import { SiteFooter } from '../../components/navigation/SiteFooter.jsx';
import { WhatsAppButton } from '../../components/navigation/WhatsAppButton.jsx';
import { StickyCtaBar } from '../../components/navigation/StickyCtaBar.jsx';
import { Modal } from '../../components/feedback/Modal.jsx';
import { Field } from '../../components/forms/Field.jsx';
import { Button } from '../../components/core/Button.jsx';
import { Toast } from '../../components/feedback/Toast.jsx';
import { HomeScreen } from './HomeScreen.jsx';
import { ServicesScreen } from './ServicesScreen.jsx';
import { AuditScreen } from './AuditScreen.jsx';
import { ContactScreen } from './ContactScreen.jsx';

const ROUTES = { '/': 'home', '/about': 'home', '/services': 'services', '/audit': 'audit', '/blog': 'home', '/contact': 'contact' };
const HREFS = { home: '/', services: '/services', audit: '/audit', contact: '/contact' };

// Hash-routed shell: fixed nav (solid after 50px), the current screen, footer, floating WhatsApp, the sticky CTA bar
// (after 600px, dismissible; lifts the WhatsApp button) and the "Book a strategy call" modal.
export function WebsiteApp({ logoSrc, photoSrc }) {
  const read = () => (window.location.hash || '#home').slice(1);
  const [page, setPage] = React.useState(read);
  const [scrollY, setScrollY] = React.useState(0);
  const [barClosed, setBarClosed] = React.useState(false);
  const [booking, setBooking] = React.useState(false);
  const [booked, setBooked] = React.useState(false);
  React.useEffect(() => {
    const onHash = () => { setPage(read()); window.scrollTo(0, 0); };
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('hashchange', onHash);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('hashchange', onHash); window.removeEventListener('scroll', onScroll); };
  }, []);
  const go = (p) => { window.location.hash = p === 'about' ? 'home' : p; };
  const openBooking = () => setBooking(true);
  const screen = page === 'services' ? <ServicesScreen /> : page === 'audit' ? <AuditScreen go={go} /> : page === 'contact' ? <ContactScreen /> : <HomeScreen photoSrc={photoSrc} go={go} onBook={openBooking} />;
  const barUp = scrollY > 600 && !barClosed;
  // Keep site-relative links ("/services") inside the kit instead of leaving the page.
  const capture = (e) => {
    const a = e.target.closest && e.target.closest('a[href^="/"]');
    if (a) { e.preventDefault(); go(ROUTES[a.getAttribute('href')] || 'home'); }
  };
  return (
    <div onClickCapture={capture}>
      <SiteNav logoSrc={logoSrc} fixed solid={scrollY > 50 || page !== 'home'} active={HREFS[page] || '/'} />
      <main>{screen}</main>
      <SiteFooter logoSrc={logoSrc} />
      <WhatsAppButton lifted={barUp} />
      <StickyCtaBar visible={barUp} onDismiss={() => setBarClosed(true)} />
      <Modal open={booking} onClose={() => setBooking(false)} eyebrow="No pressure. No pitch deck." title={<>Book a <em>Strategy Call</em></>}
        footer={<><Button variant="ghost" onClick={() => setBooking(false)}>Cancel</Button><Button arrow type="submit" form="dg-book">Request a call</Button></>}>
        <form id="dg-book" onSubmit={(e) => { e.preventDefault(); setBooking(false); setBooked(true); }}>
          <Field label="Full name" placeholder="Your name" required />
          <Field label="Email" type="email" placeholder="you@company.co.za" required />
        </form>
      </Modal>
      {booked && <Toast onClose={() => setBooked(false)}>Request received — we'll contact you to confirm a time.</Toast>}
    </div>
  );
}
