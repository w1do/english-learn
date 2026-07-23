// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import llms from 'astro-llms-md';
import { serializeSitemapItem } from './src/utils/sitemap.js';

import node from '@astrojs/node';

// https://astro.build/config
const MINIO_URL = process.env.MINIO || 'https://cloud.w1do.ru/english';

export default defineConfig({
  server: {
    host: "0.0.0.0"
  },

  output: 'server',
  integrations: [react()],

  adapter: node({
    mode: 'standalone',
  }),

  vite: {
    server: {
      proxy: {
        '/uploads': {
          target: MINIO_URL,
          changeOrigin: true,
        }
      }
    }
  }
});
