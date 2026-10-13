import type * as React from 'react';
/**
 * Modal dialog with overlay, Escape/overlay-click close and focus return.
 */
export interface ModalProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Renders nothing when false. */
  open: boolean;
  onClose?: () => void;
  /** Red section label above the title. */
  eyebrow?: React.ReactNode;
  /** Playfair title; wrap a word in <em> for red italic. */
  title: React.ReactNode;
  /** Actions row under a hairline (buttons, right-aligned). */
  footer?: React.ReactNode;
  /** Max width in px. Default 560. */
  width?: number;
  /** Render in flow (previews) instead of a fixed overlay. */
  inline?: boolean;
}
export declare function Modal(props: ModalProps): React.ReactElement | null;
