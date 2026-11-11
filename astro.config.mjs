// Webflow Cloud sets `base` and `build.assetsPrefix` automatically at build time,
// so don't add them here.
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [react()],
  adapter: cloudflare(),
});
