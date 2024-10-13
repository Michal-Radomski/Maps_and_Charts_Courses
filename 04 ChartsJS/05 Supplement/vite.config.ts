import { defineConfig } from "vite";

export default defineConfig({
  ssr: {
    noExternal: ["chart.js"],
  },
});
