import React from 'react';

// Example artboards, worded from diamacogrowth.co.za. `id` is also the exported file name in assets/social/.
export const POSTS = [
  { id: 'share-image', name: 'Share image · 1200×630', format: 'landscape', variant: 'headline',
    eyebrow: 'Business growth partners · South Africa', title: <>Systems. Strategy.<br /><em>Serious Growth.</em></>,
    body: 'Business automation, CRM, websites and lead generation for SMEs nationwide.', cta: 'Free AI growth audit' },
  { id: 'blog-automation', name: 'Blog cover · Automation', format: 'landscape', variant: 'blog', icon: 'layers',
    tag: 'Automation', title: '5 Workflows Every South African Business Should Automate in 2025', meta: 'Sep 2025 · 6 min read' },
  { id: 'blog-lead-generation', name: 'Blog cover · Lead generation', format: 'landscape', variant: 'blog', icon: 'activity',
    tag: 'Lead Generation', title: 'How to Build a Consistent Lead Pipeline Without Paid Ads', meta: 'Aug 2025 · 8 min read' },
  { id: 'blog-compliance', name: 'Blog cover · Compliance', format: 'landscape', variant: 'blog', icon: 'file',
    tag: 'Compliance', title: 'The Complete Checklist for Winning Your First Government Tender', meta: 'Jul 2025 · 10 min read' },
  { id: 'post-why-us', name: 'Feed post · 1080×1080 · headline', format: 'square', variant: 'headline',
    eyebrow: 'Why work with us', title: <>New to the Market.<br /><em>Not New to the Work.</em></>,
    body: 'Every client gets our absolute best, every single time. No shortcuts, no junior handoffs, no coasting.', cta: 'Start a conversation' },
  { id: 'post-services', name: 'Feed post · 1080×1080 · stat', format: 'square', variant: 'stat',
    eyebrow: 'What we do', stat: { value: '10', label: 'Core services' }, title: <>Ten Services. One <em>Growth Partner</em>.</>,
    body: 'From your first CIPC registration to automated lead generation.' },
  { id: 'post-whatsapp', name: 'Feed post · 1080×1350 · service', format: 'portrait', variant: 'service', num: '04', icon: 'message-square',
    eyebrow: 'Messaging', title: 'WhatsApp Business Automation', body: 'South Africans live on WhatsApp.',
    items: ['Automated welcome and qualification flows', 'FAQ and catalogue broadcasting', 'CRM integration for lead tracking'], cta: 'Book a strategy call' },
  { id: 'story-audit', name: 'Story · 1080×1920 · headline', format: 'story', variant: 'headline',
    eyebrow: 'Interactive diagnostic engine', title: <>AI Business Growth &amp;<br /><em>Automation Audit</em></>,
    body: 'Diagnose operational friction, calculate recoverable team hours, and unlock a custom-tailored automation roadmap with a free strategy call.', cta: 'Take the free audit' },
];
