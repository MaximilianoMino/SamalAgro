import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      services: path.resolve(__dirname, "./src/services"),
      components: path.resolve(__dirname, "./src/components"),
      config: path.resolve(__dirname, "./src/config"),
    },
  },
  server: {
    port: 4321,
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
  build: { outDir: "build" },
});
