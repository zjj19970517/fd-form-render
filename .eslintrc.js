module.exports = {
  parser: 'vue-eslint-parser',
  plugins: ['@typescript-eslint', 'vue', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single'],
    semi: 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': [
      'off',
      {
        varsIgnorePattern: '^(Vue|VueConstructor)$',
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
      },
    ],
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/default': 0,
    'import/named': "off"
  },
  settings: {
    'import/extensions': ['.js', '.d.ts', '.ts', '.vue', '.tsx', '.jsx'],
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.d.ts', '.ts', '.vue', '.tsx', '.jsx'],
      },
    },
  },
};
