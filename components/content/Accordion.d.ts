import type * as React from 'react';
/** Five FAQs whose answers are composed only from statements on the live site. */
export declare const FAQS: Array<{ q: string; a: string }>;
/**
 * FAQ accordion with hairline rows and a red +/− toggle.
 */
export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Default FAQS. */
  items?: Array<{ q: React.ReactNode; a: React.ReactNode }>;
  /** Allow several open at once. Default false. */
  multiple?: boolean;
  /** Index open on first render; null for all closed. Default 0. */
  defaultOpen?: number | null;
}
export declare function Accordion(props: AccordionProps): React.ReactElement;
