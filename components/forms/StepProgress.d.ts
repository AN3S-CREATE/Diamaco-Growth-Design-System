import type * as React from 'react';
/**
 * Multi-step form header: step counter, step title, glowing red progress bar.
 */
export interface StepProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current step, 1-based. Default 1. */
  step?: number;
  /** Total steps. Default 3. */
  total?: number;
  /** Title of the current step ("Company Profile & Sector"). */
  title?: React.ReactNode;
}
export declare function StepProgress(props: StepProgressProps): React.ReactElement;
