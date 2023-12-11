import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://api.genius.com",
      "/.netlify/functions": "http://localhost:9999/"
    }
  },
  plugins: [react()],
})
