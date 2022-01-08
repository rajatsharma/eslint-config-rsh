export = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: ".",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "eslint-config-prettier",
  ],
  plugins: ["prettier", "@typescript-eslint", "import"],
  env: {
    es6: true,
    node: true,
  },
};
