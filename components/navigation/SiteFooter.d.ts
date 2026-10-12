import type * as React from 'react';
import type { IconName } from '../core/Icon';
/** The site's footer brand paragraph, verbatim. */
export declare const FOOTER_BLURB: string;
/**
 * Four-column footer on #080808 with square social buttons and a hairline copyright bar.
 */
export interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Path to the logo PNG (88px tall). */
  logoSrc?: string;
  /** Brand paragraph. Default FOOTER_BLURB. */
  blurb?: React.ReactNode;
  /** Link columns: [label, href] pairs. Defaults to Navigation / Services / Contact (phone is a placeholder). */
  columns?: Array<{ title: string; links: Array<[string, string]> }>;
  /** Square social buttons. Default LinkedIn, Instagram, WhatsApp (WhatsApp number is a placeholder). */
  social?: Array<{ icon: IconName; label: string; href: string }>;
  /** Copyright year. Default current year. */
  year?: number;
  /** Right-hand line of the bottom bar. Pass null to hide. */
  credit?: React.ReactNode;
}
export declare function SiteFooter(props: SiteFooterProps): React.ReactElement;
