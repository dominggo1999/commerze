import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "process.env": process.env,
  },
  envPrefix: ["VITE_"],
  publicDir: "public",
  server: {
    port: 61000,
    open: false,
  },
});
