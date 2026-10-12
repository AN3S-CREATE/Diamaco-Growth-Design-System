import type * as React from 'react';
/** The site's four-step process, verbatim. */
export declare const PROCESS: Array<{ title: string; text: string }>;
/**
 * Numbered process row with a red gradient connector.
 */
export interface ProcessStepsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Default PROCESS. Four reads best; the connector line assumes one row. */
  steps?: Array<{ title: React.ReactNode; text: React.ReactNode }>;
}
export declare function ProcessSteps(props: ProcessStepsProps): React.ReactElement;
