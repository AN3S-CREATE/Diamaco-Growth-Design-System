import type * as React from 'react';
import type { IconName } from './Icon';
/**
 * Dark rounded square (radius 10px) holding one icon or one greyscaled emoji.
 */
export interface IconTileProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Line icon to show. Takes precedence over `emoji`. */
  icon?: IconName;
  /** A single emoji, rendered greyscale (the site's feature and audit tiles use emoji this way). */
  emoji?: string;
  /** 'default' 40px, 'lg' 56px. */
  size?: 'default' | 'lg';
  /** Red-tinted fill and border, for the selected option. */
  active?: boolean;
  /** Accessible name; omit when the tile sits next to a visible title. */
  label?: string;
}
export declare function IconTile(props: IconTileProps): React.ReactElement;
