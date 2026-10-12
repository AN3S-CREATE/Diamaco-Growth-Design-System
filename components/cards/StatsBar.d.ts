import type * as React from 'react';
import type { IconName } from '../core/Icon';
export interface StatItem {
  /** Big numeral or short token ("10", "SA", "∞"). */
  value?: React.ReactNode;
  /** Suffix rendered in red right after the value ("+", "%", "hrs"). */
  accent?: React.ReactNode;
  /** Line icon in a tile above (feature-strip cells). */
  icon?: IconName;
  /** Or an emoji (greyscaled) in the tile. */
  emoji?: string;
  /** Caps label under the value, or the caps title of a feature cell. */
  label: React.ReactNode;
  /** One short line under the label; turns the label white and bold. */
  text?: React.ReactNode;
}
/**
 * Hairline-gapped strip of stat or feature cells, full bleed between sections.
 */
export interface StatsBarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: StatItem[];
}
export declare function StatsBar(props: StatsBarProps): React.ReactElement;
