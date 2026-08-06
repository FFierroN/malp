import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "node:path";

// NOTA: base "/malp/" es para GitHub Pages (felipe.github.io/malp).
// Si mas adelante usamos dominio propio o Cloudflare Pages, cambiar a "/".
export default defineConfig({
  base: "/malp/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Manos a la Planta",
        short_name: "MALP",
        description:
          "Organiza tu coleccion de plantas y accede al Club de Descuentos Manos a la Planta.",
        theme_color: "#1F6B3A",
        background_color: "#F8F7F2",
        display: "standalone",
        start_url: "/malp/",
        scope: "/malp/",
        icons: [
          {
            src: "icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
