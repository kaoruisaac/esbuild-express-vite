import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  resolve: {
    alias: {
      client: path.resolve(__dirname, 'src/client'),
    },
  },
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    outDir: 'dist/public',
    minify: false,
    rollupOptions: {
      output: {
        entryFileNames: 'app.js',
      },
    },
  },
})
