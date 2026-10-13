import type * as React from 'react';
import type { IconName } from '../core/Icon';
/** Artboard sizes in px: landscape 1200×630, square 1080×1080, portrait 1080×1350, story 1080×1920. */
export declare const SOCIAL_FORMATS: Record<'landscape' | 'square' | 'portrait' | 'story', [number, number]>;
/**
 * Fixed-size branded social / blog artboard.
 */
export interface SocialPostProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Default 'square'. */
  format?: 'landscape' | 'square' | 'portrait' | 'story';
  /** 'headline' (default) · 'stat' (big numeral) · 'service' (number, features, icon) · 'blog' (cover: tag, title, meta, icon). */
  variant?: 'headline' | 'stat' | 'service' | 'blog';
  /** Red caps label above the title. */
  eyebrow?: React.ReactNode;
  /** Playfair title; <em> = red italic payoff, <br/> to break lines. */
  title?: React.ReactNode;
  body?: React.ReactNode;
  /** variant 'stat': { value: '10', accent?: '+', label: 'Core services' }. */
  stat?: { value: React.ReactNode; accent?: React.ReactNode; label?: React.ReactNode };
  /** variant 'service': up to 3 bullet points. */
  items?: React.ReactNode[];
  /** Line icon for the red spot (service, blog). */
  icon?: IconName;
  /** variant 'blog': category tag and "Mon YYYY · N min read". */
  tag?: React.ReactNode;
  meta?: React.ReactNode;
  /** variant 'service': ghost number "04". */
  num?: string;
  /** Red button-style call to action (not interactive — it's an image). */
  cta?: React.ReactNode;
  /** Default 'diamacogrowth.co.za'. */
  url?: string;
  /** Preview scale; export at 1. */
  scale?: number;
}
export declare function SocialPost(props: SocialPostProps): React.ReactElement;
