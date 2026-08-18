import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  timeout: 30000,

  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure"
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    }
  ]
});