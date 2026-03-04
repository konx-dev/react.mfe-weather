import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mfe_weather',
      filename: 'remoteEntry.js',
      exposes: {
        './Widget': './src/Widget.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 3001,
    strictPort: true,
    cors: true
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  preview: {
    port: 3001,
    strictPort: true,
  },
});