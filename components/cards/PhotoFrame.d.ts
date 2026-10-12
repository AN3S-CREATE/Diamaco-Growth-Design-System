import type * as React from 'react';
/**
 * Framed photo with red offset accent and an optional stat badge.
 */
export interface PhotoFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image URL. Without it a dark placeholder shows. */
  src?: string;
  alt?: string;
  /** Floating badge on the right edge: red numeral over a caps label. */
  badge?: { value: React.ReactNode; label: React.ReactNode };
  /** Red 160px square behind the lower-right corner. Default true. */
  accent?: boolean;
  /** CSS aspect-ratio. Default '4 / 5'. */
  ratio?: string;
}
export declare function PhotoFrame(props: PhotoFrameProps): React.ReactElement;
