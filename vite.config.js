import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: false, // we use separate manifest files in /public
      registerType: "autoUpdate",
      workbox: {
        cleanupOutdatedCaches: true
      }
    })
  ]
});
