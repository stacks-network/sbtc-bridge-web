# sbtc-bridge

## Introduction

SBTC-Bridge supports trustless swaps of BTC to/from sBTC,
a [SIP-010](https://github.com/stacksgov/sips/blob/main/sips/sip-010/sip-010-fungible-token-standard.md) compliant fungible token on the Stacks Blockchain that can be used in
defi protocols, nft marketplace, dao governance and many more applications.

Non-custodial swaps between Bitcoin and Stacks Blockchains are possible because
Clarity Smart Contracts have direct read and write access to the Bitcoin chain - Stacks is
a Bitcoin Layer 2 technology.

## Development

```bash
npm install
npm install sass
npm run dev
# or
npm run dev -- --open
```

### Deployment

First build the application;

```bash
npm run build
```

Note you can preview the production build locally with `npm run preview`.

#### Github Pages

Requires access to github settings and for a branch `gh-pages` to be created from `main`.
Then run;

```bash
node ./gh-pages.js
```

This pushes the contents of `build/` to the `gh-pages` branch. Github Pages
has been configured on the repository to serve the application from;

```bash
https://trust-machines.github.io/sbtc-bridge
```

The basic strategy is to deploy the `distribution files` to a branch called `gh-pages` and then configure Github Pages to serve the application from there. Details on Github Pages and Svelte
applications can be found in these guides.

- [Github Pages how to](https://docs.github.com/en/pages)
- [Svelte + Github Pages how to](https://github.com/sveltejs/kit/tree/master/packages/adapter-static#spa-mode)

#### Linode / Digital Ocean

Create your preferred target environment (Debian VM + Nginx for example).
Update the deploy script with your config and add your public ssh key to known hosts.
Then run;

```bash
bash ./deploy-remote.sh
```

### Packaging

The application can be packaged and uploaded to the npm registry;

```bash
./node_modules/.bin/svelte-kit package
cd package
npm publish
```

## Bundling bitcoinjs-lib

This application ports the Bitcoinjs library by polyfilling nodejs dependencies. For
Details see 1 below. Bitcoin js can also be bundled using browserify. This is an older and
more clunky - details below.

### 1. Polyfill

The main issue is configuring vite to polyfill the required nodejs dependencies. This
has to be done in both the development and production build environments. The various
legacy modules and dependencies and the number of circular dependencies together with the
fact tha the nodejs module mechanics differ from those of the client side code means
its just not easy!
The following came close to successfully polyfilling Buffer into bitcoinjs
[Polyfill Node.js built-in modules with Vite](https://medium.com/@ftaioli/using-node-js-builtin-modules-with-vite-6194737c2cd2). But even with excellent guides
like this there may be slight differences and a problem persisted in the development
build environment.

```bash
npm install bitcoinjs-lib browserify uglify-es
```

### 2. Pre-Compiling Bitcoinjs Module

See [How to Browserify](https://github.com/bitcoinjs/bitcoinjs-lib/issues/965).

Following the advice here (after uninstalling/re-installing browserify) led to
a javascript module.

Get correct browserify by checking and sym linking;

```bash
npm install -g browserify
npm install -g uglify-es
/Users/mikey/.nvm/versions/node/v16.14.2/bin/browserify --version
ln -s /Users/mikey/.nvm/versions/node/v16.14.2/bin/browserify /usr/local/bin/browserify
```

Download the latest tag of bitcoinjs;

```bash
git clone git@github.com:bitcoinjs/bitcoinjs-lib.git
cd bitcoinjs-lib
git fetch --all
git checkout f221e1f7ac01c11b715e3398e04514a7df64ae42
npm install
```

Bundle the library and its dependencies;

```bash
browserify -r . --standalone bitcoinjs > bitcoinjs.js
uglifyjs -c --mangle reserved=['BigInteger','ECPair','Point'] bitcoinjs.js > bitcoinjs.min.js
```

Svelte configuration;

```bash
cp bitcoinjs.* ../multisig-svelte/static/public
```

in app.html add

```bash
<script src="%sveltekit.assets%/public/bitcoinjs.js"></script>
```

Note this will be bitcoinjs.min.js in production.
