module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    "standard"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    indent: [ "error", "tab" ],
    "linebreak-style": [ "error", "unix" ],
    quotes: [ "error", "double" ],
    semi: [ "error", "always" ],
    "array-bracket-spacing": [ "error", "always" ],
    "object-curly-spacing": [ "error", "always" ],
    "space-in-parens": [ "error", "always" ],
    "max-len": [
      "error",
      {
        code: 120,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true
      }
    ]
  }
};
