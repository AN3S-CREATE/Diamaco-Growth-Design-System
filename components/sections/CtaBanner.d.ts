import type * as React from 'react';
/**
 * Full-bleed red call-to-action band with a white button.
 */
export interface CtaBannerProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** Playfair 700 title. Default "Ready to Grow Your Business?". */
  title?: React.ReactNode;
  /** One supporting line at 85% white. */
  sub?: React.ReactNode;
  /** White button. Default { label: 'Book a free consultation', href: '/contact' }. */
  action?: { label: string; href: string } | null;
  /** Replaces the default button. */
  children?: React.ReactNode;
}
export declare function CtaBanner(props: CtaBannerProps): React.ReactElement;
