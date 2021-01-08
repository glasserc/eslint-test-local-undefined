module.exports = {
  plugins: ['react'],
  extends: [],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },

  rules: {
    "react/no-typos": "error",
  },
}
