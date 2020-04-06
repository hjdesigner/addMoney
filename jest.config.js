module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: ["**/*.vue", "**/*.spec.js", "!**/node_modules/**"]
};
