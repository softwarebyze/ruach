import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/zack-ebenfeld-12-11-2023/",
  plugins: [react()],
});
