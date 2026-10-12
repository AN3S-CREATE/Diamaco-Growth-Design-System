import type * as React from 'react';
import type { IconName } from '../core/Icon';
/**
 * Insight/article card linking to a post.
 */
export interface BlogCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Category, red caps ("Automation"). */
  tag?: string;
  title: React.ReactNode;
  /** Clamped to 2 lines. */
  excerpt?: React.ReactNode;
  /** "Sep 2025". */
  date?: string;
  /** "6 min read". */
  readTime?: string;
  /** Cover image URL; without it the slot shows a dark gradient and `icon`. */
  image?: string;
  /** Placeholder glyph when there's no image. Default 'file'. */
  icon?: IconName;
  /** Right-hand meta link text. Default "Read →". */
  readLabel?: string;
}
export declare function BlogCard(props: BlogCardProps): React.ReactElement;
