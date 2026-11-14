// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://highbeautycare.gr',
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: 'el',
    locales: ['el', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [sitemap({ i18n: { defaultLocale: 'el', locales: { el: 'el', en: 'en' } } })]
});
