// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import { siteConfig } from '@site.config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import { sitemapFilter } from '@core/sitemap';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.baseUrl,
  adapter: cloudflare({ imageService: 'compile' }),
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Noto Sans JP',
      cssVariable: '--font-noto-sans-jp',
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: sitemapFilter,
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
        resolveUrl(url, location, type) {
          if (type === 'script' && url.href === 'https://scripts.simpleanalyticscdn.com/latest.js') {
            return new URL('/api/partytown-proxy/latest.js', location.origin);
          }
          return url;
        },
      },
    }),
  ],
});
