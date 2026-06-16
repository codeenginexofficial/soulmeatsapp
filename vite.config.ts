import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  vite: {
    plugins: [TanStackRouterVite()],
  },

  tanstackStart: {
    server: { entry: "server" },
  },
});