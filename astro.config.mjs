// @ts-check
import { defineConfig } from 'astro/config';
import { siteConfig } from '@site.config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import { sitemapFilter } from '@core/sitemap';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.baseUrl,
  adapter: cloudflare({ imageService: 'compile' }),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      filter: sitemapFilter,
    }),
  ],
});
