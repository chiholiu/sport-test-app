module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
  rules: {
    semi: [1, "always"],
    "no-mixed-spaces-and-tabs": 0,
    "no-useless-escape": 0,
    "react/react-in-jsx-scope": "off"
  },
  plugins: ["react"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },
  settings: {
    react: {
      pragma: "React",
      fragment: "Fragment",
      version: "detect"
    }
  },
  env: {
    browser: true,
    es6: true,
    jest: true, // test is not defined
    node: true // module is not defined
  }
};
