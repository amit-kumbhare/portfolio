import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: change "portfolio" below to match your GitHub repo name
// e.g. if your repo is github.com/amit-kumbhare/portfolio, base stays "/portfolio/"
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
});
