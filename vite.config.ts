import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { resolve } from "path";

export default defineConfig({
	test: {
		deps: {
		  inline: [
			"@stacks/connect",
			"stacks_connect"
		  ]
		},
		//environment: 'jsdom',
		//globals: true,
		threads: false,
		watch: false,
		//include: ['**/__tests__/*.{js,tsx,ts}'],
		setupFiles: './tests/utils/setup.ts'
	},
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$lib: resolve("src/lib"),
			$components: resolve("src/lib/components"),
			$stores: resolve("src/stores"),
			$types: resolve("src/types"),
		}
	},
	build: {
		minify: false,
		rollupOptions: {
			//input: {
			//  main: resolve(__dirname, 'index.html'),
			//},
			plugins: [
				// Enable rollup polyfills plugin
				// used during production bundling
				//rollupNodePolyFill()
			]
		}
	}
});
