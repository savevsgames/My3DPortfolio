import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { analyzer } from "vite-bundle-analyzer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    analyzer({
      // Set the
      analyzerMode: "static", // analyzer mode: 'server', 'static', or 'json' - STATIC - Generates a static HTML file
      openAnalyzer: true, // Automatically opens the report in your browser
      fileName: "bundle-report.html", // Output file name
      defaultSizes: "stat", // Options: 'stat', 'parsed', or 'gzip'
    }),
  ],
});
