import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sitemap from "vite-plugin-sitemap";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://kunalchandradas.tech", // Replace with your site’s URL
      outDir: "./dist", // Output directory for the sitemap
      dynamicRoutes: ["/", "projects", "/about", "/contact", "/tech-article"], // Optional: manually specify routes if needed
    }),
  ],
  build: {
    sourcemap: true, // Enable sourcemaps for production build
  },
});
