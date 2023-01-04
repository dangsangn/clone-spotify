import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [react()],
  server: {
    host: true,
    open: false,
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
