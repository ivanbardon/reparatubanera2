import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/reparatubanera2/',
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        trabajos: resolve(__dirname, 'trabajos.html'),
        servicios: resolve(__dirname, 'servicios.html'),
        contacto: resolve(__dirname, 'contacto.html'),
      },
    },
  },
});
