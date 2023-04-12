# sbtc-bridge

## Introduction

sBTC-Bridge supports trustless swaps of BTC to/from sBTC,
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
