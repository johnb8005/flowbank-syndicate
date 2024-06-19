import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// this the default/base configuration
const baseConfig = {
  plugins: [react()],
  test: {
    // ...
  },
  server: {},
};

// https://vitejs.dev/config/
// conditional config: https://vitejs.dev/config/#conditional-config
export default defineConfig(({ command, mode }) => {
  return baseConfig;
});
