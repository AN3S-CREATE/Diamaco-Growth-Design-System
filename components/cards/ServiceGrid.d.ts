import type * as React from 'react';
import type { IconName } from '../core/Icon';
export interface Service {
  /** Two-digit order number, "01"–"10". */
  num: string;
  /** Category label shown above the title on /services ("Automation"). */
  category: string;
  title: string;
  icon: IconName;
  /** One-line description used on the home grid. */
  short: string;
  /** Paragraph used on /services. */
  description: string;
  /** Five deliverables used on /services. */
  features: string[];
}
/** The ten Diamaco Growth services, worded as on the live site. */
export declare const SERVICES: Service[];
/**
 * One service tile: red number, title, description, red underline on hover.
 */
export interface ServiceTileProps extends React.HTMLAttributes<HTMLElement> {
  num?: string;
  title: React.ReactNode;
  desc?: React.ReactNode;
  /** Makes the whole tile a link. */
  href?: string;
}
export declare function ServiceTile(props: ServiceTileProps): React.ReactElement;
/**
 * Hairline-gapped service grid, 3 columns at full width.
 */
export interface ServiceGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Defaults to SERVICES. Items need num, title and short (or desc). */
  services?: Array<Partial<Service> & { title: string; desc?: string; href?: string }>;
  /** How many to show. Default 9 (the home grid: a full 3×3, then "View all services"). 0 = all. */
  limit?: number;
}
export declare function ServiceGrid(props: ServiceGridProps): React.ReactElement;
