# sbtc-bridge Test Specification

![ci](https://github.com/Trust-Machines/sbtc-bridge)

## Introduction

Testing this application depends on the target environment.

This document describes testing in devnet on the developer machine.

## Setup

The following assumes;

1. Docker desktop already running
2. Stacks web wallet installed

### Bitcoin Wallet

Run electrum in testnet mode, e.g.

```bash
/Applications/Electrum.app/Contents/MacOS/run_electrum --testnet
```

### Run the sBTC-Bridge

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

sBTC Wallet: `tb1q6ue638m4t5knwxl4kwhwyuffttlp0ffee3zn3e`
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
sBTC Wallet: `2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb`
Stacks Address: `ST2ST2H80NP5C9SPR4ENJ1Z9CDM9PKAJVPYWPQZ50` (Balance before 0.05995887 sBTC)
Peg In Amount: 50000

Txid of a peg in sent using electrum - note the peg in can be simulated in the admin
section of the bridge app by pasting this txid;

```bash
TC1_TXID=c8047ec3fd2890cf4caa5f8cdcdbf7d3ecb7c0d0732ecd3518766e9eb79a1a9c
```

#### 3 BTC Peg Out

From BTC Wallet: `tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5`
sBTC Wallet: `2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb`
Stacks Address: `ST2ST2H80NP5C9SPR4ENJ1Z9CDM9PKAJVPYWPQZ50` (Balance before 0.05995887 sBTC)
Peg Out Amount: 5530688 (see op_return vout 0)
Peg Out Dust: 500
Peg Out Change: 5537161

Question: sBTC Wallet is a Bitcoin-QT v 19.1 wallet. Even though this tx is broadcast and confirmed the wallet
does not seem to read the UTXO. Note the OP_RETURN is at index 0 and the sBTC Wallet UTXO
is index 1.

Update 1: the tx only has 3 confirmations - maybe this is why.

```bash
TXID=0e1474207bb7787b4557c9f365b3cba3aa3737b61729110070569f24fcce51ee
```

#### 4 BTC Peg Out

From BTC Wallet: `tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5`
sBTC Wallet: `2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb`
Stacks Address: `ST2ST2H80NP5C9SPR4ENJ1Z9CDM9PKAJVPYWPQZ50` (Balance before 0.05578706 sBTC)
Peg Out Amount: 35000 (see op_return vout 0)
Peg Out Stx Address: ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM (see op_return vout 0)
Peg Out Dust: 500 (0.000005)
Peg Out Change: tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5	     0.05517706

Question: sBTC Wallet is a Bitcoin-QT v 19.1 wallet. Even though this tx is broadcast and confirmed the wallet
does not seem to read the UTXO. Note the OP_RETURN is at index 0 and the sBTC Wallet UTXO
is index 1.

Update 1: the tx only has 3 confirmations - maybe this is why.

```bash
TXID=523700c7597e94e91f2879f55a125e8379b37408512a67b48c69b31d9915f879
```

##### 4.1 Peg Out 23/Feb

From BTC Wallet: `tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5`
sBTC Wallet: `tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss`
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

Wrap (7/Mar)
txid=8f221a6e120140d660faa7d5d3baf3e8d5413a20237ad234571cb4d8c3438fc4
amt=5000
from=tb1qyxeczljl4g744py6u37r0csr2q4grlh7yhp9km
wallet: electrum testnet
mint to stacks addr: ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN

Unwrap (7/Mar)
txid=61340871d880ffe44a5c3a67d025e1165942b48151912086b9266fd659d83689
wallet: bitcoin descwallet
burn from stacks addr: ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN
amt=2500
* Sends 0.00000000 BTC to 
* Sends 0.00000500 BTC to tb1pf74xr0x574farj55t4hhfvv0vpc9mpgerasawmf5zk9suauckugqdppqe8
* Sends 0.08997200 BTC to tb1pf74xr0x574farj55t4hhfvv0vpc9mpgerasawmf5zk9suauckugqdppqe8
* Pays transaction fee: 0.00001200 BTC

Total Amount: 0.08997700 BTC
(=89.97700 mBTC or 89 977.00 bits or 8 997 700 sat)

Unwrap (7/Mar)
txid=d535779265442d72e2dea9c6d6df7141977efecff45edaff074461ba28cb05ec
wallet: electrum alice
burn from stacks addr: ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN
amt=3250
SCRIPT 6a4c8bb20c0000000000000037363164353362656334616366383461623330646165363031386432393537636663656165333365326130386362353638313436666437393964313665643931343466336165366666643564666565633764316135373731656634323232316233306164333765346565653164623365383063663435386637346439636334653030	     0.        
tb1pf74xr0x574farj55t4hhfvv0vpc9mpgerasawmf5zk9suauckugqdppqe8	     0.000005  
tb1q4zfnhnvfjupe66m4x8sg5d03cja75vfmn27xyq	     0.04204767

Wrap (OP_DROP)
txid: aabcd4d7662c3bba319bfc25b634bb0af73fc4dde383c78e3e0e640009d2b434
mint to: ST1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28G8HXK9G5
amt: 4500 
stx txid: 0x93477f0b7d503622baf54662e57c8089255fc22bddd003a77fbb8430e0ad4b41


Unwrap
btc_txid: ec7e5a986d03b68ba2e7a9628a94897f5fc2e13d1b47d43a58bf48227f7e23aa
stx_txid: 0xa39bc2cb0b2506f7c793effa4dd9022c4805765db84c2fda22ea051327392e5e
Electrum testnet_wallet
btc: tb1qyxeczljl4g744py6u37r0csr2q4grlh7yhp9km
stx: ST1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28G8HXK9G5
amt: 1500
msg:dc050000000000000051204faa61bcd4f553d1ca945d6f74b18f60705d85191f61d76d34158b0e7798b710
sig:89c35c02cce3511cf478175ae414868ce061b20b7b7179bca7968ecf32f22fd2564dd55fef209599c4561aeda529893394e3e1ec70d45a64616e7138d58380e701
    0000006162626462633236303539353539393164363835656663353065303437663464353232313436613763346233363865613563376261383764393939343966

pk:02e30e89dc85db23273fed237c21d4ca495de4fbffbdf8a90d90e902847fb411c7
SCRIPT 4c8bdc0500000000000000383963333563303263636533353131636634373831373561653431343836386365303631623230623762373137396263613739363865636633326632326664323536346464353566656632303935393963343536316165646135323938393333393465336531656337306434356136343631366537313338643538333830653730317576a93e74623170663734787230783537346661726a35357434686866767630767063396d70676572617361776d66357a6b3973756175636b75677164707071653888ac	     0.000005  
tb1qyxeczljl4g744py6u37r0csr2q4grlh7yhp9km	     0.036394

Unwrap : OP_RETURN
data:msghash      : 3841eeba827e6401623fd3eb32b6862c114074972a315e7f7687856e7fbcd436
tx-data:data      : dc05000000000000005120deec29b36f0829c98748cf1c3271497ece61e9aa5148242b23378f39d9fb854f
tx-data:publicKey : 03568e2792f422b3184a75f290a0533109e5319212c8aa01134d7a65b4914256c8
tx-data:signature : 4a6e8c16736a9bcb47e290ae32a27788420e0a4750b7bb261edf86fb0919f4ff0e3bf570efb19a208128b36190d0d085ff284058bd1d155b55e455515b9f1b2400
tx-data:sbtcWalletAddress : tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7
tx-data:amount    : 1500
---------------------------------------
OUTPUTS - OP_RETURN
0: SCRIPT 6a4c8bdc050000000000000034613665386331363733366139626362343765323930616533326132373738383432306530613437353062376262323631656466383666623039313966346666306533626635373065666231396132303831323862333631393064306430383566663238343035386264316431353562353565343535353135623966316232343030   0.
1: tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7    0.000005  
2: tb1qyxeczljl4g744py6u37r0csr2q4grlh7yhp9km    0.036372

btc-txid : 6181883e240e4a9a796293d218d2bd61272d978bbb6938f2de3fc447f09016de
stx-txid : 0x2339f3795b8504ce7b8f508987488e6e0d250ca859711864d9611127733f1ca0


Unwrap : OP_DROP
data:msghash      : 31c9a2827b9fbe185184bf641d9e8cd9bbabc8e6dafadab460576495f64d85fe
tx-data:data      : 9808000000000000005120deec29b36f0829c98748cf1c3271497ece61e9aa5148242b23378f39d9fb854f
tx-data:publicKey : 03568e2792f422b3184a75f290a0533109e5319212c8aa01134d7a65b4914256c8
tx-data:signature : 5e88655f97c897c0472fa88256a1bf03f098e5790c56e19f85cd905255fdab8b0d335171f0955f9a896c19243ea1d9e05a48b5b3997a4fc462081b016b565a6301
tx-data:sbtcWalletAddress : tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7
tx-data:amount    : 2200
---------------------------------------
OUTPUTS - OP_RETURN
0: SCRIPT 4c8b980800000000000000356538383635356639376338393763303437326661383832353661316266303366303938653537393063353665313966383563643930353235356664616238623064333335313731663039353566396138393663313932343365613164396530356134386235623339393761346663343632303831623031366235363561363330317576a9225120deec29b36f0829c98748cf1c3271497ece61e9aa5148242b23378f39d9fb854f88ac     0.0000025
tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7     0.0000025
tb1qyxeczljl4g744py6u37r0csr2q4grlh7yhp9km     0.03635

btc-txid : f8575ebcace9468920b0a89e62d05f1c6bc56536152ad535397012a93b66ed33
stx-txid : 0x686c6342f7064befbced8e14c434e6b54e0eca3588aaf823d540609b59a158c1








Unwrap : OP_DROP
Two Outputs.
data:msghash      : 31c9a2827b9fbe185184bf641d9e8cd9bbabc8e6dafadab460576495f64d85fe
tx-data:data      : 9808000000000000005120deec29b36f0829c98748cf1c3271497ece61e9aa5148242b23378f39d9fb854f
tx-data:publicKey : 03568e2792f422b3184a75f290a0533109e5319212c8aa01134d7a65b4914256c8
tx-data:signature : 5e88655f97c897c0472fa88256a1bf03f098e5790c56e19f85cd905255fdab8b0d335171f0955f9a896c19243ea1d9e05a48b5b3997a4fc462081b016b565a6301

tx-data:sbtcWalletAddress : tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7
tx-data:amount    : 2200
---------------------------------------

SCRIPT 4c8b980800000000000000356538383635356639376338393763303437326661383832353661316266303366303938653537393063353665313966383563643930353235356664616238623064333335313731663039353566396138393663313932343365613164396530356134386235623339393761346663343632303831623031366235363561363330317576a93e746231706d6d6b7a6e766d30707135756e7036676575777279753266306d3878723664323239797a673265727837386e6e6b306d733438736b397336713788ac	     0.0000025 
tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7     0.0000025 
tb1qyxeczljl4g744py6u37r0csr2q4grlh7yhp9km    0.036361

------------------------------------

## Wrap : OP_DROP : BitcoinCore : tb1pf74xr0x574farj55t4hhfvv0vpc9mpgerasawmf5zk9suauckugqdppqe8

Two Outputs. 
data:stxaddr      : ST1NXBK3K5YYMD6FD41MVNP3JS1GABZ8TRVX023PT
data:msghash      : 
tx-data:data      : 
tx-data:publicKey : 
tx-data:signature : 

btc tx : 026a1e82180b00d9e0311a4cb46baf6c05cad9aa5e8c307c4efa56ab58cf67d3
stx tx : 0x1bc246a96e01d86cdd7eb6ead65bdcc85b0522d342a838bd64cc86b31a04d81a


tx-data:sbtcWalletAddress : tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7
tx-data:amount    : 75000
---------------------------------------
* Sends 0.00075000 BTC to 
* Sends 0.08916780 BTC to tb1pf74xr0x574farj55t4hhfvv0vpc9mpgerasawmf5zk9suauckugqdppqe8
* Pays transaction fee: 0.00000480 BTC

Total Amount: 0.08991780 BTC
(=89.91780 mBTC or 89 917.80 bits or 8 991 780 sat)* Sends 0.00075000 BTC to 
* Sends 0.08916780 BTC to tb1pf74xr0x574farj55t4hhfvv0vpc9mpgerasawmf5zk9suauckugqdppqe8
* Pays transaction fee: 0.00000480 BTC

Total Amount: 0.08991780 BTC
(=89.91780 mBTC or 89 917.80 bits or 8 991 780 sat)


ba7ec7a3ece8eef63b17d522ac37102a3e43e71d23dc020122be491144a702fc

6ac1bf951ae2f0f55e4acacc3ce12e7673a7abc20d98349c0e0d78062142e3b4


Pegin - Hiro
btc: tb1qaghq4jp4dz4cc63tfcus3y29gmeu20x8yrqv0k
stx: ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN
amt: 1657958
https://blockstream.info/testnet/tx/4bd70ba3af022d621194d7056e5715ae2c8fabef5cd09f2a4a9ddc95b72de74b?expand




PEGIN - OPRETURN
SCRIPT 6a4c4e54323c1a6bd5cc732fbd4699ed2069bad872c860a5fd1ac6000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000	     0.        
tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7	     0.00045   
tb1qad2gq03ayju273uz0sham69t27nsdczkvhwp8k	     0.01924001

stx_addr: ST1NXBK3K5YYMD6FD41MVNP3JS1GABZ8TRVX023PT
btc_txid: 9957119099211384d8a2e175079409f15413027ce93ca89ab5835e59f5e5f9a9
stx_txid: 0xfc17ac9d934a94a2055181ddc2506c0a7005c227a1a6b9b8601426e87d848dfa
amt: 64000

PEGIN - OPDROP

stx_addr: tb1qnzqsylm7xv2svujkqunj20t7zs7l67n85pj8qf
btc_addr: ST1NXBK3K5YYMD6FD41MVNP3JS1GABZ8TRVX023PT
amt: 64000

btc_txid: 5a865fb72d76f188614717f8cc944a6477b28f563738b8d8ff74027eb73ddb1a
stx_txid: 0x99c3eac53588eb2c1022d794a3e27b6877bbb879dbf090a804fcf5e9afa8d175


PEGOUT OPDROP HIRO

btc_addr: tb1qaghq4jp4dz4cc63tfcus3y29gmeu20x8yrqv0k
stx_addr: ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN
amt: 4200

data2sign: 6810000000000000005120deec29b36f0829c98748cf1c3271497ece61e9aa5148242b23378f39d9fb854f
sig:       e838d8b8bc0ef04ad9e65e905d1f4c09c5861af913d27ee5c2dd76091b3e5a277144d204948e8cb7ff17cf07b24452e1f5e9430e4ef73555bfe7e1f401f2c17200
msgHash:   d1b430168dedac6fa3823d00ea7c940597a72345a168deff3348c41d91f65ad0
pubkey:    03568e2792f422b3184a75f290a0533109e5319212c8aa01134d7a65b4914256c8

btc_txid: 5a865fb72d76f188614717f8cc944a6477b28f563738b8d8ff74027eb73ddb1a
stx_txid: 0x99c3eac53588eb2c1022d794a3e27b6877bbb879dbf090a804fcf5e9afa8d175



PEGOUT OPDROP ELECTRUM

btc_addr: tb1qnzqsylm7xv2svujkqunj20t7zs7l67n85pj8qf
stx_addr: ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN
amt: 4200

data2sign: 6810000000000000005120deec29b36f0829c98748cf1c3271497ece61e9aa5148242b23378f39d9fb854f
sig:       e838d8b8bc0ef04ad9e65e905d1f4c09c5861af913d27ee5c2dd76091b3e5a277144d204948e8cb7ff17cf07b24452e1f5e9430e4ef73555bfe7e1f401f2c17200
msgHash:   d1b430168dedac6fa3823d00ea7c940597a72345a168deff3348c41d91f65ad0
pubkey:    03568e2792f422b3184a75f290a0533109e5319212c8aa01134d7a65b4914256c8

btc_txid: 416ec596e44bf14859a903d763a15cd047e7bde82b6a40cb8fd5be8e43d55c79
stx_txid: 0x98e23c0988dcc05db6371aa1cad05e9fbe41fd9205b13e1ede6c717d076d3cea

scriptPubKey.asm: OP_PUSHBYTES_74 54323e6810000000000000006538333864386238626330656630346164396536356539303564316634633039633538363161663931336432376565356332646437363039316233653561 OP_DROP OP_DUP OP_HASH160 OP_PUSHBYTES_34 5120deec29b36f0829c98748cf1c3271497ece61e9aa5148242b23378f39d9fb854f OP_EQUALVERIFY OP_CHECKSIG

scriptPubKey.hex: 4a54323e68100000000000000065383338643862386263306566303461643965363565393035643166346330396335383631616639313364323765653563326464373630393162336535617576a9225120deec29b36f0829c98748cf1c3271497ece61e9aa5148242b23378f39d9fb854f88ac




PEGOUT OPRETURN ELECTRUM

btc_addr: tb1qnzqsylm7xv2svujkqunj20t7zs7l67n85pj8qf
stx_addr: ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN
amt: 4200

data2sign: 6810000000000000005120deec29b36f0829c98748cf1c3271497ece61e9aa5148242b23378f39d9fb854f
sig:       e838d8b8bc0ef04ad9e65e905d1f4c09c5861af913d27ee5c2dd76091b3e5a277144d204948e8cb7ff17cf07b24452e1f5e9430e4ef73555bfe7e1f401f2c17200
msgHash:   d1b430168dedac6fa3823d00ea7c940597a72345a168deff3348c41d91f65ad0
pubkey:    03568e2792f422b3184a75f290a0533109e5319212c8aa01134d7a65b4914256c8

btc_txid: 30deb03869dac929020901e90df2db62e720824e2e7d2b5346de7edb08ba8e72
stx_txid: 0x6a757cd4e400e6f817140708edcbbec39d2ae0f2c07202013c403fc1beee8a62

SCRIPT 6a4a54323e6810000000000000006538333864386238626330656630346164396536356539303564316634633039633538363161663931336432376565356332646437363039316233653561	     0.        
tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7	     0.000005  
tb1qnzqsylm7xv2svujkqunj20t7zs7l67n85pj8qf	     0.00963636



PEGOUT OPRETURN ELECTRUM

btc_addr: tb1qad2gq03ayju273uz0sham69t27nsdczkvhwp8k
stx_addr: ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN
amt: 4200

data2sign: 6810000000000000005120deec29b36f0829c98748cf1c3271497ece61e9aa5148242b23378f39d9fb854f
sig:       e838d8b8bc0ef04ad9e65e905d1f4c09c5861af913d27ee5c2dd76091b3e5a277144d204948e8cb7ff17cf07b24452e1f5e9430e4ef73555bfe7e1f401f2c17200
msgHash:   d1b430168dedac6fa3823d00ea7c940597a72345a168deff3348c41d91f65ad0
pubkey:    03568e2792f422b3184a75f290a0533109e5319212c8aa01134d7a65b4914256c8

btc_txid: a0bffdc6f0abaef199b5bc8006090161f43f7136ee4fa4aeb4166456b1334f6b
stx_txid: 0x37837d203815f9492f7f25f6caf5922c6c78154f3e75974c2440cfe992cbeb49




PEGOUT OPRETURN ELECTRUM

btc_addr: tb1qad2gq03ayju273uz0sham69t27nsdczkvhwp8k
stx_addr: ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN
amt: 4200

data2sign: 6810000000000000005120deec29b36f0829c98748cf1c3271497ece61e9aa5148242b23378f39d9fb854f
sig:       e838d8b8bc0ef04ad9e65e905d1f4c09c5861af913d27ee5c2dd76091b3e5a277144d204948e8cb7ff17cf07b24452e1f5e9430e4ef73555bfe7e1f401f2c17200
msgHash:   d1b430168dedac6fa3823d00ea7c940597a72345a168deff3348c41d91f65ad0
pubkey:    03568e2792f422b3184a75f290a0533109e5319212c8aa01134d7a65b4914256c8

btc_txid: ec883ccd99bb686a1d77eb45cf04b04fa529e702a58f62e2b7a51f6ce420aaf9
stx_txid: 0x2ec2f9564d0b99449dea8cd402c2f254876beeaa72c8134a95fd2e00f4508abf



Funding Tx
btc_txid: 9c319cfc6bac6d953e99fae9529beb85b6302e4d84534677c8e9734133680aef
btc_addr: tb1qp8r7ln235zx6nd8rsdzkgkrxc238p6eecys2m9
stx_addr: ST1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28G8HXK9G5



PEGIN OPDROP ELECTRUM

btc_addr: tb1q4zfnhnvfjupe66m4x8sg5d03cja75vfmn27xyq (alice)
stx_addr: ST1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28G8HXK9G5
amt: 33633

btc_txid: 0bafd9c550025d954a70f5d7826605b66984c3dd28420bb01f8bc9d620e2d275
stx_txid: 0x2ec2f9564d0b99449dea8cd402c2f254876beeaa72c8134a95fd2e00f4508abf

SCRIPT 4c4e54323c1a7010183fd1a76976e7b2bb67acdf57cdfe7048820000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007576a93e746231706d6d6b7a6e766d30707135756e7036676575777279753266306d3878723664323239797a673265727837386e6e6b306d733438736b397336713788ac	     0.00033633
tb1q4zfnhnvfjupe66m4x8sg5d03cja75vfmn27xyq	     0.04170534


Wrap Return
btc_txid: 3b9e5b639a4486257fe7252d4086d5c82a940d65460fd7867e7f45886ddcad3a
stx_txid: 0xbd151793e0d3bc3b8220ade6dc3fd9372b27717523ba7f8e71394ae9c15e5597

Unwrap Return
btc_txid: 96d8efdb0dbb981a078c9428a1dc9d8c25cc177eac7f8e4563540115dd066aa3
stx_txid: 0xea10430d6af17ef11e75a2f422a1af03b87e4356a95e67f5db09a6cca0d98dcf

Wrap Drop Locking

btc_txid: 5b5361d2f5e858ce6d68862e2d227818936ead5f500c13ba3ede50723b49bf83
stx_txid: 

stx_addr: ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN
btc_addr: tb1qaghq4jp4dz4cc63tfcus3y29gmeu20x8yrqv0k
amt:      78687


Wrap Return Locking
btc_txid: d8c60878cf2d5e7acca546382371deeff77acfc7d127eeb44b75b25574a1c992






Pegin Request: a4961477d1380cd6b6713570ebdcb9944ad66d166e620e9bc47469091d94ec80