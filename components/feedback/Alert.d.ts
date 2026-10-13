import type * as React from 'react';
/**
 * Inline status message (success / warning / info / error).
 */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Default 'info'. error/warning get role="alert", the others role="status". */
  tone?: 'success' | 'warning' | 'info' | 'error';
  /** Bold first line. */
  title?: React.ReactNode;
  /** Shows a dismiss (×) button. */
  onClose?: () => void;
}
export declare function Alert(props: AlertProps): React.ReactElement;
