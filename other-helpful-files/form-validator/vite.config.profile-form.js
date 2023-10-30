import { defineConfig } from "vite";

export default defineConfig({
	plugins: [],
	build: {
		minify: false, // 'esbuild' | 'terser' | boolean 
		target: "modules", // 'modules' |  'es6' | 'es2020' | 'esnext' 
		commonjsOptions: {
			sourceMap: false
		},

		rollupOptions: {
			input: "src/swpm.profile-form-validator.ts",
			output: [
				// output bundle files to test folder
				{
					format: 'es',
					entryFileNames: "[name].js"
				},

				// output bundle files to plugin's folder
				{
					format: 'es',
					entryFileNames: "dist/../../../../simple-membership/js/[name].js",
				},
			]
		},
	}
});