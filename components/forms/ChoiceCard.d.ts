import type * as React from 'react';
import type { IconName } from '../core/Icon';
/**
 * Large single-choice option tile (radio semantics).
 */
export interface ChoiceCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconName;
  /** Emoji shown greyscale in the icon tile (the site's audit uses these). */
  emoji?: string;
  title: React.ReactNode;
  /** One short line of examples ("Accounting, Legal, Consulting, Finance"). */
  desc?: React.ReactNode;
  /** Selected state. */
  active?: boolean;
}
export declare function ChoiceCard(props: ChoiceCardProps): React.ReactElement;
export interface ChoiceOption {
  value: string;
  title: React.ReactNode;
  desc?: React.ReactNode;
  icon?: IconName;
  emoji?: string;
}
/**
 * Radiogroup grid of ChoiceCards.
 */
export interface ChoiceGridProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: ChoiceOption[];
  /** Selected option value. */
  value?: string;
  onChange?: (value: string) => void;
  /** Accessible group name (the question). */
  label?: string;
}
export declare function ChoiceGrid(props: ChoiceGridProps): React.ReactElement;
