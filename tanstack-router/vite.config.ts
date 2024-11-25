import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { routeConfig } from "./src/route-config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      virtualRouteConfig: routeConfig,
      generatedRouteTree: "./src/route-tree.gen.ts",
    }),
    react(),
  ],
});
