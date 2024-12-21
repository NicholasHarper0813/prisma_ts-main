module.exports = 
{
  preset: 'ts-jest',
  coverageReporters: ['clover'],
  coverageDirectory: 'src/__tests__/coverage',
  collectCoverageFrom: ['src/**/*.ts', '!**/__tests__/**/*'],
  collectCoverage: process.env.CI ? true : false,
  testEnvironment: 'node',
  testMatch: ['**/src/__tests__/**/*.test.ts'],
}
