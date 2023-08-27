/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ["<rootDir>/.setEnvVars.js"],
  coveragePathIgnorePatterns: ['./jest.config.js', './dist', './node_modules'],
  testPathIgnorePatterns: ['./jest.config.js', './dist', './node_modules'],
  collectCoverageFrom: ['src/**/*.ts'],
};
