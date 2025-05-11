import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures relative paths for Netlify
  build: {
    outDir: "dist",        // Output directory
    emptyOutDir: true,     // Clean dist before each build
  },
});
