import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/no-unknown-property": [
        "error",
        {
          ignore: [
            "object",
            "position",
            "position-x",
            "position-y",
            "position-z",
            "rotation",
            "rotation-x",
            "rotation-y",
            "rotation-z",
            "scale",
            "scale-x",
            "scale-y",
            "scale-z",
            "args",
            "radius",
            "font",
            "fontSize",
            "height",
            "size",
            "bevelEnabled",
            "bevelSegments",
            "visible",
            "attach",
            "map",
            "side",
            "toneMapped",
            "intensity",
            "center",
            "distanceFactor",
            "transform",
          ],
        },
      ],
      "react/prop-types": ["warning", { skipUndeclared: true }],
    },
  },
];
