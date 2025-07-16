import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  plugins: [],
  server: {
    port: 5173,
    host: "localhost",
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
