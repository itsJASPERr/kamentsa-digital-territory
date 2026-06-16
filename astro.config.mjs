// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/kamentsa-digital-territory/',
  site: 'https://itsjasperr.github.io/kamentsa-digital-territory/',
  vite: {
    plugins: [tailwindcss()]
  }
});