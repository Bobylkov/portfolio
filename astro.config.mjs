import { defineConfig } from 'astro/config';

export default defineConfig({
  // Когда появится домен, впишите его сюда: от него строятся canonical и og:url.
  // site: 'https://bobylkov.ru',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
