import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base:'/innovation_media_art/',
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    watch: {
      usePolling: true, // Forzar a Vite a monitorear cambios de archivos en WSL
    },
  },
});
  