import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      outDir: "dist",
    }),
  ],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@types": path.resolve(__dirname, "src/types"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },
});
