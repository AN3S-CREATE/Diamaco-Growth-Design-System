import type * as React from 'react';
/**
 * Floating WhatsApp chat button (green #25d366) with pulse and tooltip.
 */
export interface WhatsAppButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** wa.me link. The default number is a placeholder — set the business number. */
  href?: string;
  /** Tooltip to the left of the button. Default "Chat with us". Pass null to hide. */
  tooltip?: React.ReactNode;
  /** Render in flow instead of fixed bottom-right. */
  inline?: boolean;
  /** Pulsing ring. Default true. */
  pulse?: boolean;
  /** Raise to bottom 96px while the StickyCtaBar is showing. */
  lifted?: boolean;
}
export declare function WhatsAppButton(props: WhatsAppButtonProps): React.ReactElement;
