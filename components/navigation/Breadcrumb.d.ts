import type * as React from 'react';
/**
 * Small grey breadcrumb trail; the last item is the current page.
 */
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: Array<{ label: React.ReactNode; href?: string }>;
}
export declare function Breadcrumb(props: BreadcrumbProps): React.ReactElement;
