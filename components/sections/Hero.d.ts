import type * as React from 'react';
/**
 * Home-page hero with grid, red orbs, Playfair 900 headline, lead, actions, stats and scroll cue.
 */
export interface HeroProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** Hero eyebrow (32px rule). "Business growth partners · South Africa". */
  eyebrow?: React.ReactNode;
  /** Headline; put the red-italic beat in <em> and break lines with <br />. */
  title: React.ReactNode;
  /** Inter 300 lead, max 560px. */
  lead?: React.ReactNode;
  /** Usually <Button arrow /> + <Button variant="ghost" />. */
  actions?: React.ReactNode;
  /** Bottom-right stats (hidden under 768px). */
  stats?: Array<{ value: React.ReactNode; label: React.ReactNode }>;
  /** Bottom-left "Scroll" cue. Default true. */
  scrollCue?: boolean;
  /** min-height 100vh. Set false for previews and embedded use. Default true. */
  fullHeight?: boolean;
}
export declare function Hero(props: HeroProps): React.ReactElement;
