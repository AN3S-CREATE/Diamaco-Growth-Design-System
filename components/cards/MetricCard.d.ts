import type * as React from 'react';
import type { IconName } from '../core/Icon';
/**
 * Result metric from the AI growth audit (hours recovered, cost, score).
 */
export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Caps label ("Recoverable hours"). */
  label: React.ReactNode;
  /** The figure, e.g. "18–26" or "R14k". Tabular numerals. */
  value: React.ReactNode;
  /** Small grey unit after the value ("hrs / week"). */
  unit?: React.ReactNode;
  /** Footnote under a hairline. */
  desc?: React.ReactNode;
  icon?: IconName;
  emoji?: string;
}
export declare function MetricCard(props: MetricCardProps): React.ReactElement;
