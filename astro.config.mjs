// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://grailmaster.com',
  // YouTube thumbnails are copied into the site at build time (src/lib/ytThumb.ts)
  image: { domains: ['i.ytimg.com'] },
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/courses') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
