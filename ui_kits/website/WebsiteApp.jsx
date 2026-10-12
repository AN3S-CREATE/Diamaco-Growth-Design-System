import React from 'react';
import { SiteNav } from '../../components/navigation/SiteNav.jsx';
import { SiteFooter } from '../../components/navigation/SiteFooter.jsx';
import { WhatsAppButton } from '../../components/navigation/WhatsAppButton.jsx';
import { HomeScreen } from './HomeScreen.jsx';
import { ServicesScreen } from './ServicesScreen.jsx';
import { AuditScreen } from './AuditScreen.jsx';
import { ContactScreen } from './ContactScreen.jsx';

const ROUTES = { '/': 'home', '/about': 'home', '/services': 'services', '/audit': 'audit', '/blog': 'home', '/contact': 'contact' };
const HREFS = { home: '/', services: '/services', audit: '/audit', contact: '/contact' };

// Hash-routed shell: fixed nav (turns solid after 50px of scroll), the current screen, footer, floating WhatsApp.
export function WebsiteApp({ logoSrc, photoSrc }) {
  const read = () => (window.location.hash || '#home').slice(1);
  const [page, setPage] = React.useState(read);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onHash = () => { setPage(read()); window.scrollTo(0, 0); };
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('hashchange', onHash);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('hashchange', onHash); window.removeEventListener('scroll', onScroll); };
  }, []);
  const go = (p) => { window.location.hash = p === 'about' ? 'home' : p; };
  const screen = page === 'services' ? <ServicesScreen /> : page === 'audit' ? <AuditScreen go={go} /> : page === 'contact' ? <ContactScreen /> : <HomeScreen photoSrc={photoSrc} go={go} />;
  // Keep site-relative links ("/services") inside the kit instead of leaving the page.
  const capture = (e) => {
    const a = e.target.closest && e.target.closest('a[href^="/"]');
    if (a) { e.preventDefault(); go(ROUTES[a.getAttribute('href')] || 'home'); }
  };
  return (
    <div onClickCapture={capture}>
      <SiteNav logoSrc={logoSrc} fixed solid={scrolled || page !== 'home'} active={HREFS[page] || '/'} />
      <main>{screen}</main>
      <SiteFooter logoSrc={logoSrc} />
      <WhatsAppButton />
    </div>
  );
}
