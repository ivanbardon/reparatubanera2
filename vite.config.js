import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const base = command === 'serve' ? '/' : '/reparatubanera2/'
  return {
    base,
    plugins: [
      react(),
      tailwindcss()
    ],
  }
})
