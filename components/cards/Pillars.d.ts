import type * as React from 'react';
/**
 * One value strip: red dot, bold title, one muted sentence.
 */
export interface PillarProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode;
  /** The supporting sentence. */
  children?: React.ReactNode;
}
export declare function Pillar(props: PillarProps): React.ReactElement;
/**
 * A 16px-gap stack of Pillars.
 */
export interface PillarsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Array<{ title: React.ReactNode; text?: React.ReactNode }>;
}
export declare function Pillars(props: PillarsProps): React.ReactElement;
