# Social & blog graphics kit

`index.html` shows every example artboard; `render.html?id=<id>` renders one at full size so it can be screenshotted
(headless Chrome `--window-size` = the format size). Exports live in `assets/social/<id>.jpg`.

| id | Format | Variant | Copy source |
|---|---|---|---|
| `share-image` | 1200×630 | headline | Home hero + meta description |
| `blog-automation`, `blog-lead-generation`, `blog-compliance` | 1200×630 | blog | The three live blog posts (title, date, read time) |
| `post-why-us` | 1080×1080 | headline | "Why work with us" section |
| `post-services` | 1080×1080 | stat | Services page hero |
| `post-whatsapp` | 1080×1350 | service | Service 04 (WhatsApp Business Automation) |
| `story-audit` | 1080×1920 | headline | AI audit section |

To add one: append to `POSTS` in `posts.jsx` (formats and variants in `components/brand/SocialPost.d.ts`), check it in the
gallery, then export it with `render.html?id=…`. Keep copy true to the business — no invented results or testimonials.
