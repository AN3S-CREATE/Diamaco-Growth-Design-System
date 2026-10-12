import type * as React from 'react';
/**
 * Red uppercase eyebrow with a leading hairline ("— WHAT WE DO"). Sits above every section title.
 */
export interface SectionLabelProps extends React.HTMLAttributes<HTMLElement> {
  /** 'section' (0.7rem, 24px rule) or 'hero' (0.72rem, 32px rule, 32px gap below). Default 'section'. */
  variant?: 'section' | 'hero';
  /** Show the leading hairline. Default true. */
  rule?: boolean;
  /** 'center' for centred section headers. Default 'start'. */
  align?: 'start' | 'center';
  /** Element to render. Default 'p'. */
  as?: 'p' | 'span' | 'div' | 'h2' | 'h3';
}
export declare function SectionLabel(props: SectionLabelProps): React.ReactElement;
/**
 * Red caps micro-tag (0.65rem, 700, 0.15em) without a rule — card categories ("AUTOMATION").
 */
export interface TagProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'span' | 'p' | 'div';
}
export declare function Tag(props: TagProps): React.ReactElement;
