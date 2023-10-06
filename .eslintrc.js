module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      modules: true,
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['import', 'prettier', 'react'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'n/exports-style': ['error', 'module.exports'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'none'
      }
    ],
    semi: 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
