/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@taagat/eslint-config/react.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};

