import { defineConfig } from 'astro/config';

export default defineConfig({
  // Адрес сайта: от него строятся canonical и og:url
  site: 'https://bobylkov.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
