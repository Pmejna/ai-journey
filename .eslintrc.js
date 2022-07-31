const sharedRules = {
  // Enforce console.warn instead .log
  'no-console': 'warn',
  // Gives a freedom to place variables as we prefer
  'no-use-before-define': 'off',
  // spread props with typescript is safe
  'react/jsx-props-no-spreading': 'off',
  // using object default values instead
  'react/require-default-props': 'off',
  // no need to import react since React 17
  'react/react-in-jsx-scope': 'off',
  // no needed as we use TS
  'react/react-prop-types': 'off',
  // disable react display name enforcement
  'react/display-name': 'off',
  // makes sure we don't miss the test
  'jest/no-disabled-tests': 'error',
  // makes sure we describe tests properly and don't confuse them
  'jest/no-identical-title': 'error',
  // we use import orders to keep consistency
  'import/first': 'error',
  // the order of the imports
  'import/order': [
    'error',
    {
      'newlines-between': 'always-and-inside-groups',
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
      ],
      pathGroups: [
        {
          pattern: 'components/**',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: 'containers/**',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: 'hooks/**',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: 'utils/**',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: 'lib/**',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: 'assets/**',
          group: 'internal',
          position: 'before',
        }
      ]
    }
  ],
};
const tsOnlyRules = {

  "@typescript-eslint/consistent-type-imports": "error",

  "@typescript-eslint/no-use-before-define": "off",

  "@typescript-eslint/no-non-null-assertion": "off",  
};
const tsConfig = {
  files: ['**/*.ts?(x)'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      project: ['./tsconfig.json'],
  },
  extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:import/typescript',
      'prettier'
  ],
  plugins: ['@typescript-eslint', 'react'],
  rules: {...sharedRules, ...tsOnlyRules
  }
};



module.exports = {
  ignorePatterns: ['node_modules', 'dist', 'public'],
  extends: [
    'next/core-web-vitals',
    'plugin:import/errors',
    'plugin:import/warnings',
    'eslint:recommended',
    'prettier',
  ],
  plugins: ['@emotion/eslint-plugin', 'jest'],
  rules: sharedRules,
  overrides: [
    {...tsConfig},
  
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceTypes: 'module'
  },
  env: {
    'es6': true
  }
}