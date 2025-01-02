const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const simpleImportSort = require('eslint-plugin-simple-import-sort');

module.exports = [
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2018,
            sourceType: 'module'
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            'simple-import-sort': simpleImportSort
        },
        rules: {
            'semi': ['error', 'always'],
            '@typescript-eslint/no-unused-vars': ['warn'],
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error"
        }
    }
];
