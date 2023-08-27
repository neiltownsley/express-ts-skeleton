/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ["<rootDir>/.setEnvVars.js"],
  coveragePathIgnorePatterns: ['./jest.config.js', './dist', './node_modules', 'server.ts'],
  testPathIgnorePatterns: ['./jest.config.js', './dist', './node_modules', 'server.ts'],
  collectCoverageFrom: ['src/**/*.ts'],
  fakeTimers: {'enableGlobally': true},
  globals: {
    randomNumberRetrieval: true
  }
};
