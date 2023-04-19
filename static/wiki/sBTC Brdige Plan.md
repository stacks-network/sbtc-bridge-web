## Introduction

The bridge projects supports the main sBTC project, composed of three stages; 

- Stage 1 - [Alpha sBTC](https://docs.google.com/document/d/1R33gZupJg0KsY-vRZYbVFwTHRmq2BCIvyPIVeY0JyGM/edit#heading=h.yr46qe7lks70)
- Stage 2 - [Mini sBTC](https://docs.google.com/document/d/1R33gZupJg0KsY-vRZYbVFwTHRmq2BCIvyPIVeY0JyGM/edit#heading=h.yr46qe7lks70)
- Stage 3 - [Nakamoto sBTC - SIP-021](https://github.com/stacksgov/sips/pull/113)

sBTC-Bridge resides in two repositories;

- The [Bridge Web UI](https://github.com/Trust-Machines/sbtc-bridge-web)
- The [Bridge API](https://github.com/Trust-Machines/sbtc-bridge-api)

The Bridge API is an open API that digests Stacks and Bitcoin Blockchain sBTC related data and serves it over a stateless rest API.
 
## Critical Bounties

Our goal here is to track delivery of developments to the Bridge project covered by these critical bounties;

* [CB-2Q23-03.1 : sBTC Bridge: API Continuation](https://github.com/stacksgov/Stacks-Grant-Launchpad/issues/872)
* [CB-2Q23-04.3 : sBTC Stacks-Signer Dashboard: RPC-API and UI](https://github.com/stacksgov/Stacks-Grant-Launchpad/issues/877)
* [CB-2Q23-03.2 : sBTC Bridge: Integration with Trezor & Ledger](https://github.com/stacksgov/Stacks-Grant-Launchpad/issues/873)

Note: the work to bootstrap and deliver sBTC alpha is summarised in Appendix 1 below.

### Reporting and Transparency

The plan tracks delivery of each Bounty against work items - mainly Pull Requests. Each PR links to an issue in the Repo which describes the work item. This hopefully provides a fully transparent and traceable way to determine the work delivered for each bounty.

## Ongoing Progress

The bridge project serves the needs of the wider sBTC project, as it's also a useful test tool for developers working on other parts of the system and so the delivery the bounties is likely to be non-sequential. For this reason I'm planning to maintain a mapping of Pull Requests to each Bounty.

| Work Item                                                                             | Type  | Cost (days | Bounty       |
|---------------------------------------------------------------------------------------|-------|------------|--------------|
| [Cloud based Mongo DB #21](https://github.com/Trust-Machines/sbtc-bridge-api/pull/21) | dev   | 3          | CB-2Q23-03.1 |
|                                                                                       |       |            |              |


# Appendix 1: 

Summarises the work delivered to bootstrap the sBTC Bridge Web and API components. 

## ~~Phase I: Pegging In/Out~~

Bootstrap the project and provide basic screens for user to build Bitcoin wrap/unwrap request transactions according to the spec [SIP-021](https://github.com/stacksgov/sips/pull/113)

1. Bootstrap application, bitcoinjs and node polyfills working
2. Deployment - github pages
3. Gating - access control via Hiro Wallet
4. Views
   - peg in transaction builder
   - peg out transaction builder
   - transaction signing
5. Integrations
   - Electrum wallet compatible transactions for sign / broadcast
   - sbtc-alpha contract via Micro Stacks
   - Bitcoin explorer integration via mempool.space and api.blockcypher.com
6. Caching layer via reactive wrapper around local browser storage
7. Unit tests - vitest

Time: 10 days

**Delivered on 3rd Feb**

### ~~Phase II: Transaction History~~

1. Views
   - display transactions
   - filter transactions
2. Integrations to read / parse
   - mint transactions
   - burn transactions
   - fulfillment transactions
3. Local caching to speed up queries where possible
4. Unit and e2e tests including creation of test data and stubs.

Time: 9 days

**Delivery by 24th Feb**

### ~~Phase III: SBTC Data Indexer Rest API~~

This component is a stateless, open API whose primary purpose is to make the sbtc-bridge application fast. It will achieve this by pre-reading and aggregating SBTC related blockchain and smart contract state into a Mongo database.

Secondary purpose to provide additional metrics and business intelligence for SBTC.

This component can be readily extended via Websocket API.

1. API application deployed via docker, provides;
   - access to bitcoin rpc and stacks node rpc
   - reads/caches contract event data on schedule
   - NodeJS / Typescript application
2. Mongodb deployed via docker
3. Deployment on GCP k8 Cluster
4. Features
- Read and index sbtc peg in txids
- Read and index sbtc peg out txids
- Rest API calls to return these txids

The estimate here is for a working prototype deployed on testnet implementing the minimal feature set above.

Time: 12 days

**Delivery: 17/31**

## ~~Phase IV: OP_DROP Tx Format~~

[OP_DROP is a format](https://docs.google.com/document/d/1EnYEk6gA2w6VfRpT8CcK8mghZRMUEjn2OhHwzdK_9x0/edit) that may help to broaden the  user base for SBTC.

1. OP_DROP Wrap
2. OP_DROP Unwrap
3. Decode OP_DROP transactions to retrieve stacks signer.

Time: 5 days

**Delivery: 3/17**

## Phase V: Hiro Wallet Integration / Change Address / SBTC Simulator

Work Items:

1. Hiro [PSBT Integrations](https://github.com/Trust-Machines/sbtc-bridge/issues/54)
* UI/UX for decision to use Hiro Wallet as un/wrap request wallet
* Adjust UI flows
* Wallet integration
* **Estimate 4 days**
2. Allow [User to Specify Change Address](https://github.com/Trust-Machines/sbtc-bridge/issues/53)
* Adds link / modal to the un/wrap views to collect a change address.
* Adjust data structures and transaction outputs to include the change address
* **Estimate 2.5 days**
3. Continuous Integration Workflows [Dockerfile](https://github.com/Trust-Machines/sbtc-bridge/issues/53)
* UI/API working in correct infrasturture
  - Kubernetes
  - Cloudflare
  - CI triggered from Github on merge
* **Estimate 2.5 days**
4. [SBTC Simulator](https://github.com/Trust-Machines/sbtc-bridge/issues/39)
* Allows the bridge to operate a custodial server side wallet. The bridge-api would watch bitcoind for un/wrap transactions and broadcast mint/burn txs automatically. Provides a way to simulate the actions of sbtc coordinator in order to support development of downstream tools - e.g. views of a users transaction history, sorting and filtering of transactions etc.
* **Estimate 5 days**

**Time Estimate: 15 days**

**Expected Delivery: 4/07**

## Phase VI: Proposal for Integration of Stacks Signer Dashboard

Note: Under external bounty process - see Foundation & SBTC Bounties.

Features:

Estimate:

## Phase VII: Proposal for Integration of Stacks Signer Management Tool

Note: Under external bounty process - see Foundation & SBTC Bounties.

Features:

Estimate:

## Phase VIII: Trezor / Ledger Integration

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

Time: 15 days

Delivery: 4/28

### Ledger

Purpose

Integrate with Ledger Live to allow bitcoiners to sign un/wrap transactions with their Nano, Nano S Plus, Stax Ledger wallets.

Features;

1. Views
   - Ledger peg in flow
   - Ledger peg out flow
   - Ledger instructions / guides
2. Integrations
   - Ledger Live integration
3. Transactions
   - Redirect flows via Ledger Live
   - Ledger wallet integration for signing PSBT
4. Unit and e2e tests including creation of test data and stubs.

Time: 10 days

Delivery: ?/??

## Phase ?: Independent of 3rd Party APIs

A goal for the Bridge is to be independent of 3rd party APIs as this enable the application to function without constraints e.g. 3rd party rate limiting and to be able to verify all blockchain state independently.

The main challenge is to be able to reliably read UTXO data for arbitrary wallets. A small investigation is needed to be able to decide the best way to do this out of hosting either;

1. Electrumx
2. Bitcoin Sync

for indexing bitcoin transaction.

Estimated time to investigate and deliver: 15 days



