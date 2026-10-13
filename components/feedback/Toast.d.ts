import type * as React from 'react';
/**
 * Short-lived confirmation fixed at the bottom centre.
 */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Default 'success'. */
  tone?: 'success' | 'warning' | 'info' | 'error';
  /** Optional trailing element, e.g. a small text link. */
  action?: React.ReactNode;
  /** Dismiss handler; also called automatically after `duration`. */
  onClose?: () => void;
  /** Auto-hide delay in ms (with onClose). Default 5000. 0 = stay. */
  duration?: number;
  /** Render in flow (previews) instead of fixed. */
  inline?: boolean;
}
export declare function Toast(props: ToastProps): React.ReactElement;
