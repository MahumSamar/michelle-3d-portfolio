import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [viteSingleFile()],
  build: {
    outDir: 'standalone',
    emptyOutDir: true,
    assetsInlineLimit: 100000000,
  },
});
