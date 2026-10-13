import type * as React from 'react';
/**
 * Fixed bottom call-to-action strip from the live site.
 */
export interface StickyCtaBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** One line. Default the site's "Ready to grow your business? Let's talk — no pitch, just a real conversation." */
  text?: React.ReactNode;
  /** Small red CTA. Default { label: 'Book a free call', href: '/contact' }. null hides it. */
  cta?: { label: string; href: string } | null;
  /** Slide-in state. Default true. */
  visible?: boolean;
  /** Shows the round × button. */
  onDismiss?: () => void;
  /** Render in flow (previews) instead of fixed. */
  inline?: boolean;
}
export declare function StickyCtaBar(props: StickyCtaBarProps): React.ReactElement;
