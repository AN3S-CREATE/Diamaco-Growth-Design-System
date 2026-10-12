import type * as React from 'react';
/**
 * Label + Playfair title + subtitle block that opens every section.
 */
export interface SectionHeadingProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** Red eyebrow ("What we do"). */
  label?: React.ReactNode;
  /** Title; wrap the key word(s) in <em> for red italic. */
  title: React.ReactNode;
  /** Muted paragraph, max 560px. */
  subtitle?: React.ReactNode;
  /** Default 'start'. */
  align?: 'start' | 'center';
  /** Heading level. Default 'h2'. */
  as?: 'h1' | 'h2' | 'h3';
  /** Right-aligned element on the same row (e.g. <Button variant="ghost">All articles</Button>). */
  action?: React.ReactNode;
}
export declare function SectionHeading(props: SectionHeadingProps): React.ReactElement;
