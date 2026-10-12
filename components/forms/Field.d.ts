import type * as React from 'react';
/** Dark text input (radius 4, red focus ring). */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Red border + aria-invalid. */
  invalid?: boolean;
}
export declare function Input(props: InputProps): React.ReactElement;
/** Dark multi-line input, min-height 140px, vertical resize. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}
export declare function Textarea(props: TextareaProps): React.ReactElement;
/** Native select styled like Input, with the site's grey chevron. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: Array<string | { value: string; label: string }>;
  /** First, empty option ("Select a service"). */
  placeholder?: string;
  invalid?: boolean;
}
export declare function Select(props: SelectProps): React.ReactElement;
/**
 * Caps label + control + optional error line. Pass a control as the only child, or let Field render an Input/Textarea via `type`.
 */
export interface FieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  /** Error message under the control (bright red, role=alert). Also marks the control invalid. */
  error?: React.ReactNode;
  /** When there are no children: 'text' | 'email' | 'tel' | 'textarea'. Default 'text'. */
  type?: 'text' | 'email' | 'tel' | 'textarea';
  children?: React.ReactElement;
}
export declare function Field(props: FieldProps): React.ReactElement;
/** Fields side by side, 20px gap, wrapping to one column on narrow screens. */
export interface FormRowProps extends React.HTMLAttributes<HTMLDivElement> {}
export declare function FormRow(props: FormRowProps): React.ReactElement;
