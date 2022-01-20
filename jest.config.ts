module.exports = {
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  collectCoverageFrom: ['**/src/**/*.ts', '!**/src/main/**'],
  preset: '@shelf/jest-mongodb'
}
