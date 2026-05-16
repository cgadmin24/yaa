import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/hireable/",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "../hireable",
    emptyOutDir: true
  }
});
