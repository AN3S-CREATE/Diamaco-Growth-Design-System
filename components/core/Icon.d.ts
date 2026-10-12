import type * as React from 'react';
export type IconName =
  | 'arrow-right' | 'chevron-down' | 'layers' | 'users' | 'monitor' | 'message-square' | 'activity' | 'bar-chart'
  | 'search' | 'eye' | 'file' | 'home' | 'linkedin' | 'instagram' | 'whatsapp' | 'mail' | 'phone' | 'menu' | 'x' | 'check';
/** Shape table: icon name → list of [svg element, attributes]. */
export declare const ICONS: Record<IconName, Array<[string, Record<string, string | number>]>>;
export declare const ICON_NAMES: IconName[];
/**
 * Stroke line icon that inherits colour from its parent (currentColor).
 */
export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'name'> {
  name: IconName;
  /** Pixel size (width and height). Default 24. CSS on buttons/tiles may override it. */
  size?: number;
  /** 1.5 for UI (site default); 1 for the large 72px service visuals. Default 1.5. */
  strokeWidth?: number;
  /** Accessible label. Without it the icon is aria-hidden (decorative). */
  title?: string;
}
export declare function Icon(props: IconProps): React.ReactElement | null;
