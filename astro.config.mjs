import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://williamjarvis1996-netizen.github.io',
  base: '/Test-1',
});
