module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // enables eslint-config-prettier + displays Prettier errors as ESLint errors
  ],
  rules: {
    // Prettier integration
    'prettier/prettier': ['error'],

    // TypeScript-specific
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',

    // Console logging – allowed in dev, warning in prod
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
