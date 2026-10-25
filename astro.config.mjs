import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [mdx(), sitemap({
    filter: (page) => !page.includes('/atlas'),
    serialize: (item) => {
      item.lastmod = new Date().toISOString().split('T')[0];
      if (item.url === 'https://willjarvis.co/' || item.url === 'https://willjarvis.co/work/') {
        item.changefreq = 'weekly';
        item.priority = 1.0;
      } else if (item.url.includes('/work/') && item.url !== 'https://willjarvis.co/work/') {
        item.changefreq = 'monthly';
        item.priority = 0.8;
      } else {
        item.changefreq = 'monthly';
        item.priority = 0.7;
      }
      return item;
    },
  })],
  site: 'https://willjarvis.co',
});
