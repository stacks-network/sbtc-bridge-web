# sbtc-bridge

## Introduction

Sbtc-bridge supports a trustless two way peg between BTC and sBTC.
sBTC is a SIP-010 fungible token on the Stacks Blockchain that can be used in
defi protocols, nft marketplaces, governance and many more applications.

## Phase I: Pegging In/Out

1. Bootstrap application, bitcoinjs and node polyfills working
2. Deployment - github pages
3. Gating - access control via Hiro Wallet
4. Views
    - peg in transaction builder
    - peg out transaction builder
    - transaction signing
5. Integrations
    - Electrum wallet for sign / broadcast
    - sbtc-alpha contract via Micro Stacks
    - Bitcoin explorer integration via mempool.space and api.blockcypher.com
6. Caching layer via reactive wrapper around local browser storage
7. Unit tests - vitest

Time: 10 days

Delivered 3rd Feb

## Phase II: Transaction History

1. Views
    - display transactions
    - filter transactions
2. Integrations to read / parse
    - mint transactions
    - burn transactions
    - fulfilment transactions
3. Local caching to speed up queries where possible
4. Unit and e2e tests including creation of test data and stubs.

Time: 9 days

Delivery by 24th Feb

## Phase III: Trezor / Ledger Integration

### Trezor

1. Views
    - Trezor peg in flow
    - Trezor peg out flow
    - Trezor instructions / guides
2. Integrations
    - Trezor Suite integration
3. Transactions
    - Trezor with SegWit (P2SH) and Native SegWit (bech32)
4. Unit and e2e tests including creation of test data and stubs.

Time: 20 days

Delivery: 30th of March

### Ledger

1. Views
    - Ledger peg in flow
    - Ledger peg out flow
    - Ledger instructions / guides
2. Integrations
    - Ledger Live integration
3. Transactions
    - Ledger with SegWit (P2SH) and Native SegWit (bech32)
4. Unit and e2e tests including creation of test data and stubs.

Time: 15 days

Delivery by 20th April

## Phase IV: SBTC Data Indexer Rest API

This components is a stateless, open API whose primary purpose to make the sbtc-bridge
application fast. It will acheive this by pre-reading and aggregating SBTC related blockchain
and smart contract state into a Mongo database.

Secondary purpose to provide additional metrics and business intelligence for SBTC.
This component can be extended via Websocket API.

1. API application deployed via docker, provides;
    - access to bitcoin rpc and stacks node rpc
    - reads/caches contract event data on schedule
2. Mongodb deployed va docker
3. Supporting infrastructure
    - nginx reverse proxy
    - Lets Encrypt SSL

Time: TBD days

Delivery by TBD
