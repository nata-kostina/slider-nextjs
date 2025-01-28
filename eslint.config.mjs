import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import importNewLinesPlugin from "eslint-plugin-import-newlines";
import stylisticTs from "@stylistic/eslint-plugin-ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        plugins: {
            "react-hooks": reactHooksPlugin,
            "import-newlines": importNewLinesPlugin,
            "@stylistic/ts": stylisticTs
        },
        rules: {
            "no-console": "warn",
            "react/jsx-indent": [2, 4],
            "react/jsx-indent-props": [2, 4],
            "quotes": ["error", "double"],
            "jsx-quotes": [2, "prefer-double"],
            "comma-dangle": ["error", "never"],
            "import/no-unresolved": "off",
            "import/prefer-default-export": "off",
            "import-newlines/enforce": [
                "error",
                {
                    items: Infinity,
                    "max-len": 150,
                    semi: true,
                    forceSingleLine: true
                }
            ],
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    "argsIgnorePattern": "^_",
                    "varsIgnorePattern": "^_",
                    "caughtErrorsIgnorePattern": "^_"
                }
            ],
            "react/require-default-props": "off",
            "react/react-in-jsx-scope": "off",
            "react/jsx-props-no-spreading": "off",
            "react/function-component-definition": "off",
            "no-shadow": "off",
            "import/extensions": "off",
            "import/no-extraneous-dependencies": "off",
            "no-underscore-dangle": "off",
            "react/jsx-wrap-multilines": [
                "error",
                {
                    "declaration": "parens-new-line",
                    "assignment": "parens-new-line",
                    "return": "parens-new-line",
                    "arrow": "parens-new-line",
                    "condition": "parens-new-line",
                    "logical": "parens-new-line",
                    "prop": "parens-new-line"
                }
            ],
            "max-len": ["error", { ignoreComments: true, code: 150 }],
            "jsx-a11y/no-static-element-interactions": "off",
            "jsx-a11y/click-events-have-key-events": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "error",
            "no-param-reassign": "off",
            "no-undef": "off",
            "object-curly-newline": ["error", { "consistent": true }],
            "react/jsx-max-props-per-line": [
                "error",
                {
                    "maximum": 1,
                    "when": "multiline"
                }
            ],
            "react/jsx-props-no-multi-spaces": "error",
            "react/jsx-tag-spacing": [
                "error",
                {
                    "beforeSelfClosing": "always",
                    "afterOpening": "never",
                    "beforeClosing": "proportional-always",
                    "closingSlash": "never"
                }
            ],
            "react/no-array-index-key": "warn",
            "@typescript-eslint/ban-ts-comment": "off",
            "@stylistic/ts/semi": ["error", "always"],
            "@stylistic/ts/member-delimiter-style": ["error"],
            "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 0, "maxEOF": 0 }],
            "react/jsx-newline": [2, { "prevent": true, "allowMultilines": false }]
        }
    }
];

export default eslintConfig;
