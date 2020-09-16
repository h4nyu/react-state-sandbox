module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    "plugin:@typescript-eslint/eslint-recommended",
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
