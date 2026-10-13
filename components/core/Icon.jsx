import React from 'react';

// Line icons in the site's own style: 24-unit grid, stroke = currentColor, round caps. The service glyphs, social glyphs and
// the arrow are copied from diamacogrowth.co.za markup; the rest are feather/lucide shapes (MIT/ISC) at the same weight —
// UI basics, emoji replacements (see EMOJI_ICONS), industry and status glyphs. Standalone SVGs live in assets/icons/.
export const ICONS = {
  'arrow-right': [['path', { d: 'M4 12h16M12 4l8 8-8 8' }]],
  'chevron-down': [['path', { d: 'm6 9 6 6 6-6' }]],
  layers: [['path', { d: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' }]],
  users: [['path', { d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }], ['circle', { cx: 9, cy: 7, r: 4 }], ['path', { d: 'M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' }]],
  monitor: [['rect', { x: 2, y: 3, width: 20, height: 14, rx: 2 }], ['path', { d: 'M8 21h8M12 17v4' }]],
  'message-square': [['path', { d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' }]],
  activity: [['path', { d: 'M22 12h-4l-3 9L9 3l-3 9H2' }]],
  'bar-chart': [['path', { d: 'M18 20V10M12 20V4M6 20v-6' }]],
  search: [['circle', { cx: 11, cy: 11, r: 8 }], ['path', { d: 'm21 21-4.35-4.35' }]],
  eye: [['path', { d: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' }], ['circle', { cx: 12, cy: 12, r: 3 }]],
  file: [['path', { d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }], ['path', { d: 'M14 2v6h6' }]],
  home: [['path', { d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }], ['path', { d: 'M9 22V12h6v10' }]],
  linkedin: [['path', { d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' }], ['rect', { x: 2, y: 9, width: 4, height: 12 }], ['circle', { cx: 4, cy: 4, r: 2 }]],
  instagram: [['rect', { x: 2, y: 2, width: 20, height: 20, rx: 5, ry: 5 }], ['path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' }], ['path', { d: 'M17.5 6.5h.01' }]],
  whatsapp: [['path', { d: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z' }]],
  mail: [['rect', { x: 2, y: 4, width: 20, height: 16, rx: 2 }], ['path', { d: 'm22 6-10 7L2 6' }]],
  phone: [['path', { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' }]],
  menu: [['path', { d: 'M3 6h18M3 12h18M3 18h18' }]],
  x: [['path', { d: 'M18 6 6 18M6 6l12 12' }]],
  check: [['path', { d: 'M20 6 9 17l-5-5' }]],
  plus: [['path', { d: 'M12 5v14M5 12h14' }]],
  minus: [['path', { d: 'M5 12h14' }]],

  // Feature / "why us" glyphs — line replacements for the site's emoji (feather / lucide shapes, same weight)
  zap: [['path', { d: 'M13 2 3 14h9l-1 8 10-12h-9l1-8z' }]],
  target: [['circle', { cx: 12, cy: 12, r: 10 }], ['circle', { cx: 12, cy: 12, r: 6 }], ['circle', { cx: 12, cy: 12, r: 2 }]],
  'map-pin': [['path', { d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' }], ['circle', { cx: 12, cy: 10, r: 3 }]],
  unlock: [['rect', { x: 3, y: 11, width: 18, height: 11, rx: 2 }], ['path', { d: 'M7 11V7a5 5 0 0 1 9.9-1' }]],
  lock: [['rect', { x: 3, y: 11, width: 18, height: 11, rx: 2 }], ['path', { d: 'M7 11V7a5 5 0 0 1 10 0v4' }]],
  flame: [['path', { d: 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z' }]],
  'message-circle': [['path', { d: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z' }]],
  tool: [['path', { d: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z' }]],
  'trending-up': [['path', { d: 'M23 6l-9.5 9.5-5-5L1 18' }], ['path', { d: 'M17 6h6v6' }]],
  clock: [['circle', { cx: 12, cy: 12, r: 10 }], ['path', { d: 'M12 6v6l4 2' }]],
  'refresh-cw': [['path', { d: 'M23 4v6h-6M1 20v-6h6' }], ['path', { d: 'M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15' }]],

  // Industry glyphs (AI audit, step 1)
  briefcase: [['rect', { x: 2, y: 7, width: 20, height: 14, rx: 2 }], ['path', { d: 'M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' }]],
  truck: [['rect', { x: 1, y: 3, width: 15, height: 13 }], ['path', { d: 'M16 8h4l3 3v5h-7V8z' }], ['circle', { cx: 5.5, cy: 18.5, r: 2.5 }], ['circle', { cx: 18.5, cy: 18.5, r: 2.5 }]],
  'hard-hat': [['path', { d: 'M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5' }], ['path', { d: 'M14 6a6 6 0 0 1 6 6v3' }], ['path', { d: 'M4 15v-3a6 6 0 0 1 6-6' }], ['rect', { x: 2, y: 15, width: 20, height: 4, rx: 1 }]],
  'shopping-bag': [['path', { d: 'M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z' }], ['path', { d: 'M3 6h18' }], ['path', { d: 'M16 10a4 4 0 0 1-8 0' }]],
  heart: [['path', { d: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' }]],
  'pen-tool': [['path', { d: 'M12 19l7-7 3 3-7 7-3-3z' }], ['path', { d: 'M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z' }], ['path', { d: 'M2 2l7.586 7.586' }], ['circle', { cx: 11, cy: 11, r: 2 }]],
  factory: [['path', { d: 'M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z' }], ['path', { d: 'M17 18h1M12 18h1M7 18h1' }]],
  building: [['rect', { x: 4, y: 2, width: 16, height: 20, rx: 2 }], ['path', { d: 'M9 22v-4h6v4' }], ['path', { d: 'M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01' }]],

  // Status glyphs (Alert, Toast)
  'check-circle': [['path', { d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14' }], ['path', { d: 'M22 4 12 14.01l-3-3' }]],
  'alert-triangle': [['path', { d: 'M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' }], ['path', { d: 'M12 9v4M12 17h.01' }]],
  info: [['circle', { cx: 12, cy: 12, r: 10 }], ['path', { d: 'M12 16v-4M12 8h.01' }]],
  'alert-circle': [['circle', { cx: 12, cy: 12, r: 10 }], ['path', { d: 'M12 8v4M12 16h.01' }]],
};
export const ICON_NAMES = Object.keys(ICONS);

// The site leads features and audit options with emoji. Each maps to a line icon here; prefer the icon in new work.
export const EMOJI_ICONS = {
  '⚡': 'zap', '🎯': 'target', '🇿🇦': 'map-pin', '🔒': 'unlock', '🔥': 'flame', '💬': 'message-circle', '🔧': 'tool',
  '💼': 'briefcase', '🚚': 'truck', '🏗️': 'hard-hat', '🛍️': 'shopping-bag', '🏥': 'heart', '🏭': 'factory', '🏢': 'building',
  '⏱️': 'clock', '⚙️': 'refresh-cw', '📈': 'trending-up',
};

export function Icon({ name, size = 24, strokeWidth = 1.5, title, className, style, ...rest }) {
  const shapes = ICONS[name];
  if (!shapes) return null;
  return (
    <svg
      viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" className={className} style={style}
      role={title ? 'img' : undefined} aria-label={title} aria-hidden={title ? undefined : true} {...rest}
    >
      {shapes.map(([Tag, props], i) => React.createElement(Tag, { key: i, ...props }))}
    </svg>
  );
}
