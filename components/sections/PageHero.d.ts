import type * as React from 'react';
/**
 * Inner-page header: breadcrumb, label, h1, subtitle over a soft red top glow.
 */
export interface PageHeroProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** Breadcrumb items; last one is the current page. */
  crumbs?: Array<{ label: React.ReactNode; href?: string }>;
  label?: React.ReactNode;
  /** h1; wrap the payoff in <em>. */
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** 96px / 72px padding instead of 220px / 100px (no fixed nav above). */
  compact?: boolean;
}
export declare function PageHero(props: PageHeroProps): React.ReactElement;
