module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: [
    '!**/images/*.svg',
    '!***.config.js',
    '!.next/**',
    '!**/*.stories.js',
    '!.storybook/**',
    '!stories/**',
    '!storybook-static/**',
    '!coverage/**',
    '!**/*.json',
    '!**/.eslintrc.js',
    '!**/.prettierrc.js',
  ],
  transform: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(js?)$': 'babel-jest',
  },
};
