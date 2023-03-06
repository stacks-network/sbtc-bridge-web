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

## Peg In Tests

### Flow 1: Peg In (no API)

![flow-pegin-1](https://raw.githubusercontent.com/Trust-Machines/sbtc-bridge/feat/tx_history/static/flow-pegin-1.png)

#### 1 BTC Peg In

SBTC Wallet: `tb1q6ue638m4t5knwxl4kwhwyuffttlp0ffee3zn3e`
From BTC Wallet: `tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5`
Stacks Address: `ST2ST2H80NP5C9SPR4ENJ1Z9CDM9PKAJVPYWPQZ50`
Peg In Amount: 0.07251634
Mempool: https://mempool.space/testnet/api/tx/6a54178bd2b94249d49199588ea5cbb52fb03a2abf065eef9eb511c6497ddd4f

Txid of a peg in sent using electrum - note the peg in can be simulated in the admin
section of the bridge app by pasting this txid;

```bash
TC1_TXID=5e2b695b9557e2bbaeddf764c7cc7c3ec19f78ecd69c99ece9d8a49cbc1abe65
```

#### 2 BTC Peg In

From BTC Wallet: `tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5`
SBTC Wallet: `2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb`
Stacks Address: `ST2ST2H80NP5C9SPR4ENJ1Z9CDM9PKAJVPYWPQZ50` (Balance before 0.05995887 sBTC)
Peg In Amount: 50000

Txid of a peg in sent using electrum - note the peg in can be simulated in the admin
section of the bridge app by pasting this txid;

```bash
TC1_TXID=c8047ec3fd2890cf4caa5f8cdcdbf7d3ecb7c0d0732ecd3518766e9eb79a1a9c
```

#### 3 BTC Peg Out

From BTC Wallet: `tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5`
SBTC Wallet: `2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb`
Stacks Address: `ST2ST2H80NP5C9SPR4ENJ1Z9CDM9PKAJVPYWPQZ50` (Balance before 0.05995887 sBTC)
Peg Out Amount: 5530688 (see op_return vout 0)
Peg Out Dust: 500
Peg Out Change: 5537161

Question: SBTC Wallet is a Bitcoin-QT v 19.1 wallet. Even though this tx is broadcast and confirmed the wallet
does not seem to read the UTXO. Note the OP_RETURN is at index 0 and the SBTC Wallet UTXO
is index 1.

Update 1: the tx only has 3 confirmations - maybe this is why.

```bash
TXID=0e1474207bb7787b4557c9f365b3cba3aa3737b61729110070569f24fcce51ee
```

#### 4 BTC Peg Out

From BTC Wallet: `tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5`
SBTC Wallet: `2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb`
Stacks Address: `ST2ST2H80NP5C9SPR4ENJ1Z9CDM9PKAJVPYWPQZ50` (Balance before 0.05578706 sBTC)
Peg Out Amount: 35000 (see op_return vout 0)
Peg Out Stx Address: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM (see op_return vout 0)
Peg Out Dust: 500 (0.000005)
Peg Out Change: tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5	     0.05517706

Question: SBTC Wallet is a Bitcoin-QT v 19.1 wallet. Even though this tx is broadcast and confirmed the wallet
does not seem to read the UTXO. Note the OP_RETURN is at index 0 and the SBTC Wallet UTXO
is index 1.

Update 1: the tx only has 3 confirmations - maybe this is why.

```bash
TXID=523700c7597e94e91f2879f55a125e8379b37408512a67b48c69b31d9915f879
```

##### 4.1 Peg Out 23/Feb

From BTC Wallet: `tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5`
SBTC Wallet: `tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss`
Stacks Address: `ST1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28G8HXK9G5` (Balance before 0.05578706 sBTC)
Peg Out Amount: 35000 (see op_return vout 0)
Peg Out Stx Address: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM (see op_return vout 0)
Peg Out Dust: 500 (0.000005)
Peg Out Change: tb1q6ue638m4t5knwxl4kwhwyuffttlp0ffee3zn3e	     7647521

```bash
TXID=e48f84d6a9a4df155eac836bdeac2f9396b79ab18cda0fef13e9d2e6856d607b
```

=======================================================================================================

## Bitcoin Signer

Wrap (2/Mar):
txid=f5e10a2b08f2e0205666d49acb54ab880b2df6a45ac87b33d523d22abfe1e1bb

Unwrap (5/Mar)
txid=9f60d74ac1fb62f1ba90743404797634e36ce069076609aaffaba26bfe2311b4

descwallet bitcoin core -> taproot
txid=74bec3453dd356b0765ba88e0b872ad5ea4b3c20ac2101bd5db8c12157ceea63
pays 0.04btc from electrum testnet_wallet to taproot 1

Unwrap (6/Mar)
descwallet bitcoin core -> taproot
txid=432eb3f6be554134576d3af164d47e7cf259d911e175776f35b0ac6521a5bfb7
pays 0.04btc from electrum testnet_wallet to taproot 1
* Sends 0.00000000 BTC to 
* Sends 0.00000500 BTC to tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss
* Sends 0.03998900 BTC to tb1pf74xr0x574farj55t4hhfvv0vpc9mpgerasawmf5zk9suauckugqdppqe8
* Pays transaction fee: 0.00000600 BTC
