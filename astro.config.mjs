// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import llms from 'astro-llms-md';
import { serializeSitemapItem } from './src/utils/sitemap.js';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  server: {
    host: "0.0.0.0"
  },

  output: 'static',
  integrations: [react()],

  adapter: node({
    mode: 'standalone',
  }),

  vite: {
    server: {
      proxy: {
        '/uploads': {
          target: 'https://cloud.w1do.ru/english/uploads',
          changeOrigin: true,
        }
      }
    }
  }
});