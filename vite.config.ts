/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    include: ["./src/**/*.test.{ts,tsx}"],
    coverage: {
      provider: "c8",
      reporter: ["lcov", "text"],
      all: true,
      src: ["src"],
      exclude: [
        "**/*.test.ts",
        "**/types.ts",
        "**/*.d.ts",
        "src/main.tsx",
        "**/App.tsx",
        "src/routers/appRouter.tsx",
        "src/mocks/factories/**/*.ts",
      ],
    },
  },
});
