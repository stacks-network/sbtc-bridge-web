import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
//import polyfillNode from 'rollup-plugin-polyfill-node';
//import inject from '@rollup/plugin-inject';
import { resolve } from "path";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

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
    wasm(),
    topLevelAwait()
  ],
	resolve: {
		alias: {
			//$lib: resolve("src/lib"),
			$stores: resolve("src/stores"),
			$types: resolve("src/types"),
			$transitions: resolve("src/transitions"),
        // This Rollup aliases are extracted from @esbuild-plugins/node-modules-polyfill,
        // see https://github.com/remorses/esbuild-plugins/blob/master/node-modules-polyfill/src/polyfills.ts
        // process and buffer are excluded because already managed
        // by node-globals-polyfill
        /**
        util: 'rollup-plugin-node-polyfills/polyfills/util',
        sys: 'util',
        events: 'rollup-plugin-node-polyfills/polyfills/events',
        path: 'rollup-plugin-node-polyfills/polyfills/path',
        querystring: 'rollup-plugin-node-polyfills/polyfills/qs',
        punycode: 'rollup-plugin-node-polyfills/polyfills/punycode',
        url: 'rollup-plugin-node-polyfills/polyfills/url',
        string_decoder: 'rollup-plugin-node-polyfills/polyfills/string-decoder',
        http: 'rollup-plugin-node-polyfills/polyfills/http',
        https: 'rollup-plugin-node-polyfills/polyfills/http',
        os: 'rollup-plugin-node-polyfills/polyfills/os',
        assert: 'rollup-plugin-node-polyfills/polyfills/assert',
        constants: 'rollup-plugin-node-polyfills/polyfills/constants',
        timers: 'rollup-plugin-node-polyfills/polyfills/timers',
        console: 'rollup-plugin-node-polyfills/polyfills/console',
        vm: 'rollup-plugin-node-polyfills/polyfills/vm',
        zlib: 'rollup-plugin-node-polyfills/polyfills/zlib',
        tty: 'rollup-plugin-node-polyfills/polyfills/tty',
        domain: 'rollup-plugin-node-polyfills/polyfills/domain'
         */
        stream: 'rollup-plugin-node-polyfills/polyfills/stream',
        _stream_transform:
            'rollup-plugin-node-polyfills/polyfills/readable-stream/transform',
            _stream_duplex:
            'rollup-plugin-node-polyfills/polyfills/readable-stream/duplex',
        _stream_passthrough:
            'rollup-plugin-node-polyfills/polyfills/readable-stream/passthrough',
        _stream_readable:
            'rollup-plugin-node-polyfills/polyfills/readable-stream/readable',
        _stream_writable:
            'rollup-plugin-node-polyfills/polyfills/readable-stream/writable',
		}
	},

  optimizeDeps: {
    exclude: ['web3'], // <= The libraries that need shimming should be excluded from dependency optimization.
    esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
            global: 'globalThis'
        },
        // Enable esbuild polyfill plugins
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
    minify: false,
    rollupOptions: {
        //input: {
        //  main: resolve(__dirname, 'index.html'),
        //},
        plugins: [
            // Enable rollup polyfills plugin
            // used during production bundling
            rollupNodePolyFill()
        ]
    }
  }
});
