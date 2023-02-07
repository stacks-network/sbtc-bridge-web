# sbtc-bridge Test Specification

![ci](https://github.com/Trust-Machines/sbtc-bridge)

## Introduction

Testing this application depends on the target environment.

This document describes testing in devnet on the developer machine.

## Setup

The following assumes;

1. Docker desktop already running
2. Hiro web wallet installed

### Bitcoin Wallet

Run electrum in testnet mode, e.g.

```bash
/Applications/Electrum.app/Contents/MacOS/run_electrum --testnet
```

### Run the SBTC-Bridge

See README for instructions. After the setup login into the application
as `accounts.deployer` from Devnet settings.

### Clarinet

Check out the repo:

```bash
git clone git@github.com:Trust-Machines/core-eng.git
cd core-eng
git fetch origin pull/8/head:sbtc-alpha
git checkout sbtc-alpha
```

Then run clarinet;

```bash
cd sbtc-ops/clarinet
clarinet integrate
```

### Hiro Wallet

1. Sign out of the wallet.
2. Open core-eng/sbtc-ops/clarinet/settings/Devnet.toml
3. Copy the menomic for `accounts.deployer`
4. Sign back into the web wallet with this seed
5. change network to devnet

## Tests

### Flow 1: Peg In (no API)

![flow-pegin-1](https://raw.githubusercontent.com/Trust-Machines/sbtc-bridge/feat/tx_history/static/flow-pegin-1.png)