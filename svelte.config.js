import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	server: {
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['..']
		}
	},
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter({ fallback: 'index.html' }),
		prerender: { entries: [] },
		paths: {
			base: process.env.VITE_BASE_URL
		}
		// If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
		// For example, instead of '_app', use 'app_', 'internal', etc.
		//appDir: 'internal',
	}
};

export default config;
