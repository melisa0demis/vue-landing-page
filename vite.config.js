import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vue-landing-page/",
  plugins: [vue()],
  server: {
    port: 3000, // Veya kullanmak istediğiniz başka bir port
  },
});
