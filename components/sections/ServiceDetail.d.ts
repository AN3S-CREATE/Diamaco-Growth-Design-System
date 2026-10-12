import type * as React from 'react';
import type { IconName } from '../core/Icon';
import type { Service } from '../cards/ServiceGrid';
/**
 * Alternating service row: icon visual + numbered, labelled description with feature bullets.
 */
export interface ServiceDetailProps extends React.HTMLAttributes<HTMLDivElement> {
  /** A SERVICES entry; individual props below override its fields. */
  service?: Service;
  num?: string;
  category?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  features?: React.ReactNode[];
  icon?: IconName;
  /** Visual on the right instead of the left (alternate every other row). */
  reverse?: boolean;
}
export declare function ServiceDetail(props: ServiceDetailProps): React.ReactElement;
