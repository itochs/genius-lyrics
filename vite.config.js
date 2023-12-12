import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://api.genius.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/html": {
        target: "https://genius.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/html/, ""),
      },
    },
  },
  plugins: [react()],
});
