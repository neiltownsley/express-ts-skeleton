import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  coveragePathIgnorePatterns: [
    './jest.config.js',
    './dist',
    './node_modules',
    'server.ts',
  ],
  testPathIgnorePatterns: [
    './jest.config.js',
    './dist',
    './node_modules',
    'server.ts',
  ],
  collectCoverageFrom: ['src/**/*.ts'],
  fakeTimers: { enableGlobally: true },
  globals: {
    randomNumberRetrieval: true,
  },
};

export default config;
