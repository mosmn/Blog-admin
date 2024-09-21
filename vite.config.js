import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import Dotenv from "dotenv";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    new Dotenv({
      systemvars: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
