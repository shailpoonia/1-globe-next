import js from "@eslint/js";

export default [
  {
    ignores: [".next/**", "node_modules/**", "eslint.config.mjs", "postcss.config.js", "tailwind.config.ts", "compress.js"]
  },
  js.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
    }
  }
];
