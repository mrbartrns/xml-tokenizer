/** @type {import('jest').Config} */

module.exports = {
  verbose: true,
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '\\.(j|t)sx?$': 'babel-jest',
  },
};
