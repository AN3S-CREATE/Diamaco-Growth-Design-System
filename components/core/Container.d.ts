import type * as React from 'react';
/**
 * 1200px centred column with the responsive 40 / 24 / 20px gutter.
 */
export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'nav';
}
export declare function Container(props: ContainerProps): React.ReactElement;
/**
 * Vertical section rhythm (120px, or 80px for 'sm'; 72px under 768px) with an optional tinted band.
 */
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Default 'default' (120px). */
  size?: 'default' | 'sm';
  /** 'sunken' #080808 or 'raised' #141414 band with top/bottom hairlines. Default 'default' (page black). */
  tone?: 'default' | 'sunken' | 'raised';
  /** Wrap children in a Container. Default true. */
  contained?: boolean;
  as?: 'section' | 'div' | 'article' | 'aside';
}
export declare function Section(props: SectionProps): React.ReactElement;
