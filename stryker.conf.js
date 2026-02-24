/** @type {import('@stryker-mutator/api/core').StrykerOptions} */
module.exports = {
  mutate: [
    "App.tsx",
    "src/**/*.tsx",
    "!**/__tests__/**/*.tsx",
    "!**/*.test.ts",
    "!**/*.test.tsx",
    "!node_modules/**/*.tsx"
  ],
  testRunner: "jest",
  reporters: ["clear-text", "progress", "html"],
  coverageAnalysis: "off",
  concurrency: 2, // safer for React Native
  jest: {
    projectType: "custom",
    configFile: "jest.config.js"
  }
};
