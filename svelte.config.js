// import adapter from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
// const dev = process.argv.includes('dev') || process.argv.includes('build-stag');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/variables.scss" as *;',
      },
    }),
  ],
  kit: {
    adapter: adapter({ fallback: "index.html" }),
    prerender: { entries: [] },
		paths: {
      base: process.env.VITE_BASE_URL,
			//base: '',
			//base: dev ? '' : '/sbtc-bridge',
		},
		// If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
		// For example, instead of '_app', use 'app_', 'internal', etc.
		//appDir: 'internal',
  }
};

export default config;
