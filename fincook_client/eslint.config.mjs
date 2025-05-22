import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.browser },
    rules: {
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@next/next/no-img-element': 'off',
    }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
