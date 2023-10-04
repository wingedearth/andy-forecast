module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard", "prettier"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "comma-dangle": ["error", "never"],
    indent: ["error", 4],
    semi: 0,
    "n/exports-style": ["error", "module.exports"],
  },
};
