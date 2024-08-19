import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Adjust the size (in KB)
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://sellingcarsapi.onrender.com',
        changeOrigin: true,
      },
    },
  },
})
