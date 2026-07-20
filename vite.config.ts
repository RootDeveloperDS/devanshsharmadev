import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import Sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    // Add this allowedHosts option
    allowedHosts: ["canopener-myth-unquote.ngrok-free.dev"],
  },
  plugins: [
    react(),
    Sitemap({
      hostname: "https://devanshsharma.vercel.app",
      dynamicRoutes: ["/", "/about", "/projects", "/contact"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
