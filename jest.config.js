const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['@testing-library/jest-dom', './jest.setup.ts'],
  // jest-environment-jsdom package is installed since jsdom is not longer bundled with jest from version 28.x
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
};

const jestConfig = async () => {
  const nextJestConfig = await createJestConfig(customJestConfig)();
  return {
    ...nextJestConfig,
    moduleNameMapper: {
      // Workaround to put our SVG stub first
      '\\.svg$': '<rootDir>/src/utils/test/__mocks__/svgMock.tsx',
      ...nextJestConfig.moduleNameMapper,
    },
  };
};

module.exports = jestConfig;