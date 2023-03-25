import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
//import polyfillNode from 'rollup-plugin-polyfill-node';
//import inject from '@rollup/plugin-inject';
import { resolve } from "path";
import wasm from "vite-plugin-wasm";

// See https://medium.com/@ftaioli/using-node-js-builtin-modules-with-vite-6194737c2cd2
// yarn add --dev @esbuild-plugins/node-globals-polyfill
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
// yarn add --dev @esbuild-plugins/node-modules-polyfill
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
// You don't need to add this to deps, it's included by @esbuild-plugins/node-modules-polyfill
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'


export default defineConfig({
  test: {
    deps: {
      inline: [
        "@stacks/connect"
      ]
    },
    //environment: 'jsdom',
    globals: true,
    threads: false,
    watch: false,
    //include: ['**/__tests__/*.{js,tsx,ts}'],
    setupFiles: './tests/utils/setup.ts'
  },
  plugins: [
    sveltekit(),
  ],
	resolve: {
		alias: {
			//$lib: resolve("src/lib"),
			$stores: resolve("src/stores"),
			$types: resolve("src/types"),
		}
	},

  optimizeDeps: {
    esbuildOptions: {
        plugins: [
          NodeGlobalsPolyfillPlugin({
              process: false,
              buffer: false
          }),
          NodeModulesPolyfillPlugin()
      ]
  }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/variables.scss" as *;',
      },
    },
  },

  build: {
    minify: false
  }
});
