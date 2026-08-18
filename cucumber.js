export default {
  default: {
    paths: ["features/*.feature"],

    import: [
      "src/world/CustomWorld.ts",
      "src/hooks/hooks.ts",
      "src/steps/login.steps.ts"
    ],
    format:["progress",
        "html:reports/cucumber-report.html",]
  }
};