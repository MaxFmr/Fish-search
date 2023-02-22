import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import sass from "sass";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      sass: {
        implementation: sass,
        additionalData: `@import "@/assets/scss/_variables.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
