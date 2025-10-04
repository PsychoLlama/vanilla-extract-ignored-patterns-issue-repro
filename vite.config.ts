import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [vanillaExtractPlugin()],
  server: {
    watch: {
      ignored: ['**/.direnv/**'], // Not respected by vanilla extract.
    },
  },
});
