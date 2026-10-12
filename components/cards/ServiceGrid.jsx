import React from 'react';

function cx(...a) { return a.filter(Boolean).join(' '); }

// The ten services, worded exactly as on diamacogrowth.co.za (home grid for `short`, /services for the rest).
export const SERVICES = [
  { num: '01', category: 'Automation', title: 'Workflow Automation', icon: 'layers',
    short: 'Eliminate manual bottlenecks and build automated systems that run 24/7, saving time and reducing errors at scale.',
    description: 'Stop doing manually what machines can do better. We analyse your business processes, identify bottlenecks, and build automated workflows that run 24/7 — saving you time, reducing errors, and freeing your team for high-value work.',
    features: ['Process mapping and bottleneck identification', 'Zapier, Make, and n8n automation builds', 'Email, invoice, and reporting automation', 'Onboarding and follow-up workflow systems', 'Ongoing monitoring and optimisation'] },
  { num: '02', category: 'Customer Relations', title: 'CRM Setup & Training', icon: 'users',
    short: 'Implement and optimise a CRM that powers your sales pipeline, customer relationships, and follow-up processes.',
    description: "Your customer data is one of your most powerful assets — but only if it's organised and actionable. We implement and configure the right CRM for your business and train your team to use it effectively from day one.",
    features: ['CRM selection and setup (HubSpot, Zoho, Pipedrive)', 'Sales pipeline design and configuration', 'Team training and adoption support', 'Contact and lead import and organisation', 'Reporting dashboards and KPI setup'] },
  { num: '03', category: 'Digital Presence', title: 'Business Website Development', icon: 'monitor',
    short: 'Professional, conversion-optimised websites that represent your brand and drive client enquiries around the clock.',
    description: 'Your website is your most powerful salesperson — working around the clock, seven days a week. We design and build professional, fast, conversion-optimised websites that generate enquiries and build trust.',
    features: ['Custom design aligned with your brand identity', 'Mobile-first, fast-loading development', 'SEO-ready structure and on-page optimisation', 'Contact forms, booking systems, and chatbots', 'Hosting setup and domain configuration'] },
  { num: '04', category: 'Messaging', title: 'WhatsApp Business Automation', icon: 'message-square',
    short: 'Set up intelligent WhatsApp flows that engage leads, answer FAQs, and qualify prospects — 24/7, automatically.',
    description: 'South Africans live on WhatsApp. We set up intelligent automated flows that greet leads, qualify prospects, answer FAQs, send quotes, and follow up — entirely automatically.',
    features: ['WhatsApp Business API setup and integration', 'Automated welcome and qualification flows', 'FAQ and catalogue broadcasting', 'CRM integration for lead tracking', 'Campaign and re-engagement broadcasts'] },
  { num: '05', category: 'Sales Growth', title: 'Lead Generation & Outreach', icon: 'activity',
    short: 'Targeted campaigns that consistently fill your pipeline with qualified, ready-to-buy prospects.',
    description: 'A business without a steady stream of leads is a business at risk. We build and run targeted outreach campaigns that identify, attract, and qualify your ideal clients.',
    features: ['Ideal client profile (ICP) development', 'Email and LinkedIn outreach campaigns', 'Lead magnet design and landing page creation', 'Follow-up sequences and nurture campaigns', 'Lead qualification and handoff to sales'] },
  { num: '06', category: 'Marketing', title: 'Digital Marketing & Content', icon: 'bar-chart',
    short: 'Strategic content and paid campaigns that grow your audience and convert attention into revenue.',
    description: "Brand visibility isn't optional in a digital-first world. We create and execute strategies that build your audience, establish your authority, and convert followers into paying clients.",
    features: ['Social media strategy and management', 'Content creation: graphics, video, and copywriting', 'Paid advertising (Meta Ads, Google Ads)', 'Email marketing and newsletter campaigns', 'Performance reporting and strategy adjustment'] },
  { num: '07', category: 'Visibility', title: 'SEO & Local Search', icon: 'search',
    short: 'Dominate local and national search results so clients find you at the exact moment they need your services.',
    description: 'When potential clients search for what you offer, you need to appear first. We implement SEO strategies that improve your rankings, drive qualified traffic, and build long-term organic visibility.',
    features: ['Keyword research and competitive analysis', 'On-page SEO optimisation', 'Google Business Profile setup and optimisation', 'Local citation building and review strategy', 'Monthly SEO reporting and content guidance'] },
  { num: '08', category: 'Strategy', title: 'Business Development Strategy', icon: 'eye',
    short: 'Structured plans that identify new markets, partnerships, and revenue streams aligned with your long-term vision.',
    description: 'Growth without direction is just movement. We work with you to define where your business should be in 12, 24, and 36 months — and map a clear, actionable path to get there.',
    features: ['Business and market analysis', 'Revenue diversification planning', 'Partnership and channel development', 'Quarterly strategic review sessions', 'Competitive positioning and pricing strategy'] },
  { num: '09', category: 'Government & Corporate', title: 'Tender Readiness & Compliance', icon: 'file',
    short: 'Prepare to compete for and win government and corporate tenders with compliant documentation and strategy.',
    description: 'Government and corporate contracts represent some of the most lucrative opportunities available to South African businesses. We guide you through the preparation process so you enter every tender organised, informed, and competitive.',
    features: ['Tender opportunity identification and research', 'Compliance checklist guidance and document organisation', 'Proposal structure, writing, and review support', 'Guidance on CSD registration and portal navigation', 'Briefing on what evaluators look for and how scoring works'] },
  { num: '10', category: 'Foundation', title: 'Commercial Setup Guidance (CIPC · SARS · B-BBEE)', icon: 'home',
    short: 'Getting your business legally and commercially structured from the start sets the foundation for everything that follows.',
    description: 'Getting your business legally and commercially structured from the start sets the foundation for everything that follows. We guide you step-by-step through the registration and compliance processes — so nothing gets missed and you know exactly where to go.',
    features: ['CIPC company registration guidance (Pty Ltd, NPC, CC)', 'SARS registration process walkthrough and referral support', 'B-BBEE level advisory and verification agency referrals', 'Business banking account setup guidance', "Compliance roadmap so you always know what's due and when"] },
];

// One tile: red tracked number, Inter 700 title, muted description; a 2px red underline grows on hover.
export function ServiceTile({ num, title, desc, href, className, ...rest }) {
  const Tag = href ? 'a' : 'div';
  return (
    <Tag {...rest} href={href} className={cx('dg-service', className)}>
      {num && <div className="dg-service__num">{num}</div>}
      <h3 className="dg-service__title">{title}</h3>
      {desc && <p className="dg-service__desc">{desc}</p>}
    </Tag>
  );
}

// Hairline-gapped grid (1px #1e1e1e gaps, radius 8px outer). Three columns at full width, fewer as space shrinks.
export function ServiceGrid({ services = SERVICES, limit = 9, className, ...rest }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <div {...rest} className={cx('dg-services', className)}>
      {list.map((s) => <ServiceTile key={s.num || s.title} num={s.num} title={s.title} desc={s.short || s.desc} href={s.href} />)}
    </div>
  );
}
