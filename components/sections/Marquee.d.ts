import type * as React from 'react';
/** The site's marquee list: all ten service names. */
export declare const MARQUEE_ITEMS: string[];
/**
 * Red full-bleed band of scrolling caps.
 */
export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Default MARQUEE_ITEMS. */
  items?: string[];
  /** Seconds per loop. Default 30. */
  duration?: number;
}
export declare function Marquee(props: MarqueeProps): React.ReactElement;
