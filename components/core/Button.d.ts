import type * as React from 'react';
/**
 * Uppercase, letter-spaced action button (Inter 600, 0.8rem, tracking 0.1em, radius 4px).
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 'primary': red fill, bright-red sweep on hover — the main action. 'ghost': white hairline — the second action.
   *  'white': white fill for the red CTA band only. Default 'primary'. */
  variant?: 'primary' | 'ghost' | 'white';
  /** 'sm' is the nav-bar CTA (10px 24px, 0.78rem). Default 'default' (16px 36px). */
  size?: 'default' | 'sm';
  /** Adds the trailing arrow that nudges 4px right on hover. */
  arrow?: boolean;
  /** Full-width (form submit). */
  block?: boolean;
  /** Renders an <a> styled as the button. */
  href?: string;
}
export declare function Button(props: ButtonProps): React.ReactElement;
