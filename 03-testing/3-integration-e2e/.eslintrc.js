module.exports = {
	root: true,
	extends: ["react-app", "eslint-config-codely/typescript"],
	plugins: ["hexagonal-architecture"],
	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		},
	},
	overrides: [
		{
			files: ["**/*.ts", "**/*.tsx"],
			parserOptions: {
				tsconfigRootDir: __dirname,
				project: ["./tsconfig.json"],
			},
			rules: {
				"@typescript-eslint/no-floating-promises": "warn",
			},
		},
		{
			files: ["**/tests/sections/**/*.spec.tsx"],
			plugins: ["react-app/jest"],
		},
		{
			files: ["**/tests/e2e-integration/**/*.spec.ts"],
			rules: {
				"testing-library/await-async-query": 0,
				"@typescript-eslint/no-unsafe-argument": 0,
				"@typescript-eslint/no-unsafe-member-access": 0,
				"@typescript-eslint/no-unsafe-call": 0,
				"@typescript-eslint/no-unsafe-return": 0,
				"@typescript-eslint/no-unused-expressions": 0,
				"testing-library/prefer-screen-queries": 0,
			},
		},
		{
			files: ["**/modules/**/*.ts"],
			rules: {
				"hexagonal-architecture/enforce": ["error"],
			},
		},
	],
};
