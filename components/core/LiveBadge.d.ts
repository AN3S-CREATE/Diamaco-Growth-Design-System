import type * as React from 'react';
/**
 * Rounded red pill with a blinking dot — marks something live or interactive (the AI audit).
 */
export interface LiveBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Show the blinking dot. Default true. */
  dot?: boolean;
}
export declare function LiveBadge(props: LiveBadgeProps): React.ReactElement;
