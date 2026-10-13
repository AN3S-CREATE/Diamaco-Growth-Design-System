import React from 'react';
import { SocialPost, SOCIAL_FORMATS } from '../../components/brand/SocialPost.jsx';
import { POSTS } from './posts.jsx';

// Gallery: every example artboard, scaled to a common row height, with its name and the exported file.
export function SocialGallery({ rowHeight = 300 }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, padding: 32 }}>
      {POSTS.map(({ id, name, ...p }) => {
        const [w, h] = SOCIAL_FORMATS[p.format];
        const scale = rowHeight / h * (p.format === 'story' ? 1.6 : p.format === 'portrait' ? 1.1 : 1);
        return (
          <figure key={id} style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <SocialPost {...p} scale={scale} style={{ borderRadius: 6, boxShadow: '0 0 0 1px var(--black-border)' }} />
            <figcaption style={{ fontSize: '.75rem', color: 'var(--white-faint)' }}>
              <b style={{ color: 'var(--white)', fontWeight: 600 }}>{name}</b><br />assets/social/{id}.jpg
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}

// One artboard at full size (used by render.html to export JPGs).
export function SocialRender({ id }) {
  const item = POSTS.find((p) => p.id === id) || POSTS[0];
  const { name, ...p } = item;
  return <SocialPost {...p} />;
}
