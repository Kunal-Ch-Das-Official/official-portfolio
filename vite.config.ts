import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sitemap from "vite-plugin-sitemap";
import { writeFileSync } from "fs";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://kunalchandradas.tech", // Your site's URL
      outDir: "./dist", // Output directory for the sitemap
      dynamicRoutes: ["/", "projects", "/about", "/contact", "/tech-article"], // Specify routes manually
    }),
    {
      name: "vite-plugin-create-robots-txt",
      closeBundle: () => {
        // Custom hook to create robots.txt during build
        const robotsContent = `
          User-agent: *
          Allow: /
          Disallow: /private/
          Sitemap: https://kunalchandradas.tech/sitemap.xml
        `.trim();
        writeFileSync("./dist/robots.txt", robotsContent);
      },
    },
  ],
  build: {
    sourcemap: true, // Enable sourcemaps for production build
  },
});
