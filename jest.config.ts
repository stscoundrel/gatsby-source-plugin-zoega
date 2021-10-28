module.exports = {
  collectCoverageFrom: [
    'src/**',
    '!src/models',
  ],
  testEnvironment: 'node',
  verbose: false,
  setupFiles: [
    '<rootDir>/setupTests.ts',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.stryker-tmp/', '<rootDir>/node_modules/',
  ],
};
