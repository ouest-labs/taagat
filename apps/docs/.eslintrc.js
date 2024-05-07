/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@taagat/eslint-config/storybook.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};
