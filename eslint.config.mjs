import js from '@eslint/js'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import babelParser from '@babel/eslint-parser'
import globals from 'globals'

export default [
  // ESLint's own recommended rules.
  js.configs.recommended,
  // Runs Prettier as an ESLint rule and turns off conflicting style rules.
  prettierRecommended,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // fixable - errors
      'one-var': ['error', { const: 'never', let: 'never' }],
      'dot-notation': 'error',
      'no-else-return': ['error', { allowElseIf: false }],
      'capitalized-comments': 'error',
      'multiline-comment-style': 'error',
      'no-lonely-if': 'error',
      'operator-assignment': 'error',
      'arrow-body-style': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-const': 'error',
      'prefer-numeric-literals': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'sort-imports': 'error',

      // non-fixable - warnings
      'no-await-in-loop': 'warn',
      'array-callback-return': 'warn',
      'block-scoped-var': 'warn',
      complexity: 'warn',
      'consistent-return': 'warn',
      'default-case': 'warn',
      'guard-for-in': 'warn',
      'no-alert': 'warn',
      'no-eq-null': 'warn',
      'no-implicit-globals': 'warn',
      'no-invalid-this': 'warn',
      'no-loop-func': 'warn',
      'no-param-reassign': 'warn',
      'no-script-url': 'warn',
      'no-useless-concat': 'warn',
      'no-void': 'warn',
      'no-warning-comments': 'warn',
      radix: 'warn',
      'require-await': 'warn',
      'init-declarations': 'warn',
      'no-shadow': 'warn',
      'no-undefined': 'warn',
      'consistent-this': 'warn',
      'func-name-matching': 'warn',
      'func-names': 'warn',
      'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],
      'line-comment-position': 'warn',
      'max-depth': 'warn',
      'max-nested-callbacks': 'warn',
      'no-bitwise': 'warn',
      'no-continue': 'warn',
      'no-inline-comments': 'warn',
      'no-multi-assign': 'warn',
      'no-negated-condition': 'warn',
      'no-nested-ternary': 'warn',
      'no-plusplus': 'warn',
      'no-underscore-dangle': 'warn',
      'prefer-destructuring': 'warn',
      'prefer-rest-params': 'warn',
    },
  },
]
