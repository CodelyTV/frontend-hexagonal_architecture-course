import { defineConfig } from "cypress";

export default defineConfig({
	video: false,
	e2e: {
		baseUrl: "http://localhost:3000",
		specPattern: "tests/e2e-integration/tests/**/*.spec.{js,jsx,ts,tsx}",
		screenshotOnRunFailure: false,
		video: false,
		viewportWidth: 1920,
		viewportHeight: 1080,
		supportFile: "tests/e2e-integration/support/e2e.ts",
	},
});
