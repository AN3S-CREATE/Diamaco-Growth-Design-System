import type * as React from 'react';
/**
 * Compact option button (radius 8, min-height 40); solid red when selected.
 */
export interface PillProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}
export declare function Pill(props: PillProps): React.ReactElement;
/**
 * Single-select row of Pills (radiogroup).
 */
export interface PillGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: Array<string | { value: string; label: React.ReactNode }>;
  value?: string;
  onChange?: (value: string) => void;
  /** Accessible group name. */
  label?: string;
}
export declare function PillGroup(props: PillGroupProps): React.ReactElement;
