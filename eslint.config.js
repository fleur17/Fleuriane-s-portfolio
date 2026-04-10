import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist", ".next", "node_modules", "out"]),

  {
    files: ["**/*.{ts,tsx}"],

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettierConfig,
    ],

    plugins: {
      prettier: prettierPlugin,
      "simple-import-sort": simpleImportSort,
      import: importPlugin,
    },

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    settings: {
      "import/resolver": {
        typescript: true,
      },
    },

    rules: {
      "prettier/prettier": "error",
      "react-refresh/only-export-components": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/order": "off",
      "import/no-unresolved": "error",
    },
  },
]);
