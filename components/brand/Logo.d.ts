import type * as React from 'react';
/** Raw artwork (generated from assets/logos/*.svg). */
export declare const LOGO_ART: { viewBox: string; rule: { x: number; y: number; width: number; height: number }; white: string; red: string };
export declare const MARK_ART: { viewBox: string; d: string };
/**
 * The Diamaco Growth logo as inline SVG (no image path needed).
 */
export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  /** 'full' (white + logo red, default) · 'white' · 'black' · 'mark' (red D) · 'mark-tile' (red D on black). */
  variant?: 'full' | 'white' | 'black' | 'mark' | 'mark-tile';
  /** Height in px (default 48). Width follows the artwork's ratio unless `width` is given instead. */
  height?: number;
  width?: number;
  /** Accessible name. Default "Diamaco Growth". */
  title?: string;
}
export declare function Logo(props: LogoProps): React.ReactElement;
