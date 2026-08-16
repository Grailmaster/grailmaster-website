# Grailmaster

Unified professional ecosystem for Dr. Axel Schumacher — merging the science
(genetics, longevity, biotech) and the human (dating coaching, SCV framework,
podcast, book, Amoro) under one brand: **grailmaster.com**.

Built with **Astro + Tailwind CSS v4**, deployed to **Cloudflare Pages** (free tier).

## The design system: one skeleton, two skins

A single deep-charcoal foundation, shared type scale and components, with two
swappable accent worlds driven by a `data-theme` attribute:

| Theme          | Used for                                   | Accent            | Display font   |
| -------------- | ------------------------------------------ | ----------------- | -------------- |
| `lab`          | biotech, SCV, longevity, about, legal      | emerald + indigo  | Space Grotesk  |
| `connection`   | dating coaching, podcast, book, amoro      | warm gold + clay  | Fraunces       |

Set it per page in the layout: `<Layout theme="connection" ...>`.
Tokens live in `src/styles/global.css`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
```

Build a production bundle:

```bash
npm run build      # outputs to ./dist
npm run preview    # preview the built site
```

## Project structure

```
src/
  layouts/Layout.astro        # SEO meta, fonts, theme switch, nav + footer
  components/                  # Navbar, Footer, FeatureCard
  content/podcast/*.mdx        # podcast episodes (add a file to publish)
  content.config.ts           # podcast frontmatter schema
  pages/                       # one file per route
  styles/global.css           # the dual-theme design system
public/                        # favicon, robots.txt, images, /downloads
```

## Add a podcast episode

Drop a new `.mdx` file in `src/content/podcast/` with frontmatter
(`title`, `episode`, `pubDate`, `description`, `youtubeId`, `downloadLink`, …).
It appears automatically on `/inside-the-dating-mind`, newest first.

## Wire up the free widgets

Search the code for these comments and paste your embed codes:

- `Brevo / MailerLite embed` — newsletter + book launch list
- `Cal.com embed` — discovery-call booking on `/dating-coaching`
- `Tally.so form embed` — worksheet + contact + waitlist forms

## Deploy to Cloudflare Pages

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Add custom domain `grailmaster.com` (Cloudflare handles DNS + SSL).
5. In Cloudflare **Bulk Redirects**, 301 the old domains:
   - `parallel-space.eu/*` → `grailmaster.com/dating-coaching`
   - `draxelschumacher.com/*` → `grailmaster.com/about`
   - `amoro.app/*` → `grailmaster.com/amoro`

Before launch: fill in `/imprint` (Impressum) and `/privacy` (DSGVO) with real details.
