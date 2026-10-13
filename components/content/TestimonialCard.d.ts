import type * as React from 'react';
/**
 * Client quote card. Real quotes only.
 */
export interface TestimonialCardProps extends React.HTMLAttributes<HTMLElement> {
  quote: React.ReactNode;
  /** Client name (or "Client name" while drafting). */
  name: React.ReactNode;
  /** "Role, Company". */
  role?: React.ReactNode;
  /** 1–5 red stars; omit to hide. */
  rating?: number;
  /** Avatar letters; defaults to the name's initials. */
  initials?: string;
}
export declare function TestimonialCard(props: TestimonialCardProps): React.ReactElement;
