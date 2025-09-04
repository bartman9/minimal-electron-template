import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import ts from "typescript-eslint";
import svelte from "eslint-plugin-svelte";
import prettier from "eslint-config-prettier/flat";
import globals from "globals";

export default defineConfig([
  prettier,
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      }
    }
  },
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: [".svelte"],
        parser: ts.parser
      }
    },
    rules: {
      "svelte/no-at-html-tags": "error",
      "svelte/valid-compile": "error",
      "svelte/no-dom-manipulating": "warn",
      "svelte/require-each-key": "error",
      "svelte/valid-each-key": "error",
      "svelte/require-store-reactive-access": "error",
      "svelte/no-immutable-reactive-statements": "warn",
      "svelte/no-reactive-literals": "warn",
      "svelte/no-reactive-functions": "warn",
      "svelte/prefer-destructured-store-props": "warn",
      "svelte/no-unused-props": "warn",
      "svelte/button-has-type": "warn",
      "svelte/no-target-blank": "warn"
    }
  },
  {
    rules: {
      "func-style": ["error", "expression"],
      "prefer-arrow-callback": ["error", { allowNamedFunctions: false, allowUnboundThis: true }],
      "no-restricted-syntax": [
        "error",
        {
          selector: "FunctionDeclaration",
          message: "Use an arrow function assigned to a const for consistency."
        }
      ]
    }
  }
]);
