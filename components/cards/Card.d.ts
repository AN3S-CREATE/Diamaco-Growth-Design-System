import type * as React from 'react';
import type { IconName } from '../core/Icon';
/**
 * Dark hairline card (radius 8, padding 40) with the red-sheen hover lift.
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Hover lift + red border + sheen. Default true (every card on the site hovers). */
  interactive?: boolean;
  /** 28px padding instead of 40px. */
  compact?: boolean;
  /** Line icon shown in a 56px IconTile above the title. */
  icon?: IconName;
  /** Or an emoji (rendered greyscale) in the same tile. */
  emoji?: string;
  /** Inter 700 title. */
  title?: React.ReactNode;
  /** A string becomes the muted body paragraph; anything else renders as-is. */
  children?: React.ReactNode;
  as?: 'div' | 'article' | 'li' | 'a' | 'section';
}
export declare function Card(props: CardProps): React.ReactElement;
