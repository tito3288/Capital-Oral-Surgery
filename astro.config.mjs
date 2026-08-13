// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/referring-doctors': {
      status: 301,
      destination: '/refer-a-patient/'
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx()]
});
