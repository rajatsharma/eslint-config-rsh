export = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: ".",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "eslint-config-prettier",
    "prettier",
  ],
  plugins: ["prettier", "@typescript-eslint", "react", "react-hooks", "import"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/order": [
      "error",
      {
        groups: [
          "external",
          "builtin",
          "internal",
          "index",
          "sibling",
          "parent",
        ]
      }
    ]
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
