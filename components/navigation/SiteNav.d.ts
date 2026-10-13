import type * as React from 'react';
export interface NavLink { label: string; href: string }
/** The site's six top-level links in order. */
export declare const NAV_LINKS: NavLink[];
/**
 * Top navigation bar: logo, caps links with a red draw-in underline, small red CTA. Links collapse to a burger under 900px.
 */
export interface SiteNavProps extends React.HTMLAttributes<HTMLElement> {
  /** Optional image path (use assets/logos/diamaco-growth-logo.svg). Without it the inline vector <Logo /> is used. */
  logoSrc?: string;
  /** Default NAV_LINKS. */
  links?: NavLink[];
  /** href or label of the current page (gets the white text + full underline). */
  active?: string;
  /** Right-hand CTA. Default { label: 'Start a project', href: '/contact' }. Pass null to hide. */
  cta?: { label: string; href: string } | null;
  /** position: fixed to the top of the viewport (the live site). Default false. */
  fixed?: boolean;
  /** Scrolled state: 92% black background + bottom hairline. Default false (transparent). */
  solid?: boolean;
  /** 80px bar with a 64px logo, for dense layouts and previews. */
  compact?: boolean;
  /** Intercept clicks (client-side routing); receives the href. */
  onNavigate?: (href: string) => void;
}
export declare function SiteNav(props: SiteNavProps): React.ReactElement;
