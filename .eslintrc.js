module.exports = {
  root: true,
  globals: { fetch: false },
  env: {
    'react-native/react-native': true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-native/all',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-native', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    // eslint rules
    'arrow-body-style': ['error', 'as-needed'],
    'no-unused-expressions': 'warn',
    'no-underscore-dangle': 'warn',
    'global-require': 'off',
    'no-empty-function': 'error',
    'no-useless-constructor': 'error',
    'no-param-reassign': ['error', { props: false }],
    'no-prototype-builtins': 'warn',
    'no-nested-ternary': 'error',
    'no-eq-null': 'warn',
    camelcase: 'error',
    'no-shadow': 'off', // overridden by @typescript-eslint
    'no-use-before-define': 'off', // overridden by @typescript-eslint

    // @typescript-eslint rules
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/member-ordering': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/prefer-literal-enum-member': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'no-public',
          methods: 'explicit',
          properties: 'explicit',
          parameterProperties: 'explicit',
        },
      },
    ],

    // eslint-import-resolver-typescript rules
    'import/no-unresolved': 'error',

    // eslint-plugin-import rules
    'import/extensions': 'off',
    'import/no-cycle': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'features/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'main/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'shared/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'assets/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],

    // eslint-plugin-react rules
    'react/require-default-props': 'off',
    'react/jsx-curly-newline': 'warn',
    'react/jsx-wrap-multilines': ['warn', { declaration: false, assignment: false }],
    'react/prefer-stateless-function': 'warn',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'warn',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-one-expression-per-line': 'warn',
    'react/sort-comp': 'warn',

    // eslint-plugin-react-hooks rules
    'react-hooks/exhaustive-deps': 'warn',

    // eslint-plugin-react-native rules
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'off',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'off',
    'react-native/no-raw-text': 'off',
    'react-native/sort-styles': ['error', 'asc', { ignoreClassNames: true }],

    // eslint-plugin-prettier rules
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 100,
        tabWidth: 2,
        endOfLine: 'auto',
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
  overrides: [
    {
      files: ['*test.ts', '*test.tsx', '*spec.ts'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
