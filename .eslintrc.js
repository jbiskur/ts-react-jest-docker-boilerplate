module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    indent: "off",
    "@typescript-eslint/indent": ["error", 2, { SwitchCase: 1 }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
