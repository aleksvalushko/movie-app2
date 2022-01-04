// eslint-disable-next-line import/no-unused-modules
module.exports = {
  root: true,
  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    'plugin:sonarjs/recommended',
    'plugin:vue/recommended'
  ],
  plugins: [
    'vue',
    'eslint-plugin-import-helpers',
    'sonarjs'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    project: './jsconfig.json',
    // 'parser': '@typescript-eslint/parser',
    ecmaVersion: 2021, // 11
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
      modules: true
    },
    sourceType: 'module',
    extraFileExtensions: ['.vue']
  },
  rules: {
    semi: 'warn',
    'vue/order-in-components': 'off',
    'import-helpers/order-imports': ['error', {
      newlinesBetween: 'always',
      groups: ['module', '/^~//', '/^@//'],
      alphabetize: { order: 'asc', ignoreCase: false }
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/comment-directive': ['warn'],
    'max-len': 'off', // vue/max-len check same
    'vue/max-len': ['error', { code: 160, template: 160, comments: 160 }],
    'multiline-comment-style': 'off',
    'vue-a11y/click-events-have-key-events': 'off',
    'vue/require-component-is': ['error'],
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/no-static-inline-styles': 'off', // TODO: [2021-12-01] fix

    'promise/prefer-await-to-callbacks': 'off', // TODO: [2021-12-01] https://github.com/xjamundx/eslint-plugin-promise/issues/118

    'no-lonely-if': 'off',

    'id-length': ['error', {
      min: 2,
      exceptions: ['$']
    }],

    'import/max-dependencies': ['error', {
      max: 25
    }],

    'max-lines-per-function': ['error', {
      max: 50,
      skipBlankLines: true,
      skipComments: true
    }],

    'multiline-ternary': ['error', 'always-multiline'],

    'sonarjs/no-collapsible-if': 'off',

    'max-statements': ['error', 30],
    complexity: ['error', 15],
    'sonarjs/cognitive-complexity': ['error', 20],

    'space-before-function-paren': 'off',

    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }],

    'no-underscore-dangle': ['error', {
      allow: []
    }],

    'import/no-unused-modules': ['error', { missingExports: true, unusedExports: true }],

    'no-extra-parens': 'off',

    'unicorn/no-null': 'off', // TODO: [2021-12-01] remove and enable when migrate to Vue3
    'unicorn/no-useless-undefined': 'off', // TODO: [2021-12-01] fix, conflict with consistent-return

    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-shadow': 'off' // TODO: [2021-12-01] remove and enable, dont work with enum now
  }
}
