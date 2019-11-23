module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parser: "babel-eslint",
  plugins: ["react", "prettier" "react-redux"],
  parserOptions: {
    version: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended", "prettier/react", "plugin:react-redux/recommended"],
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": [0],
    "react-redux/connect-prefer-named-arguments": 2
  },
  globals: {
    window: true,
    document: true,
    navigator: true,
    fetch: true,
  },
};
