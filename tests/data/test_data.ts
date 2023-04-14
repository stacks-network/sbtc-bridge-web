import type { SbtcConfig } from '$types/sbtc_config';

export const DEPLOYER_PK = {
    "privateKey": "753b7cc01a1a2e86221266a154af739463fce51219d97e4f856cd7200c3bd2a601",
    "publicKey": "0390a5cac7c33fda49f70bc1b0866fa0ba7a9440d9de647fecb8132ceb76a94dfa",
    "address": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
    "btcAddress": "mqVnk6NPRdhntvfm4hh9vvjiRkFDUuSYsH",
    "wif": "cRWawjcDj2J28jczAtjJGKs1pzFxM6V6tJHNZp3WrYoLhr2PLMVB",
    "index": 0
}

export const sbtcConfig = {
	sbtcConfigfromBtcAddress: 'tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5',
	sbtcContractData: {
		sbtcWalletAddress: 'tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7',
	},
	stxAddress: 'ST3JS8A0CHVNVJDCRPNJ1PSPJKTCZ4VSRYNVA55TW',
	pegIn: false,
	balance: { balance: 0, address: '' },
	addressDetails: {
		address: '',
		chain_stats: {
			funded_txo_count: 0,
			funded_txo_sum: 0,
			spent_txo_count: 0,
			spent_txo_sum: 0,
			tx_count: 0
		},
		mempool_stats: {
			funded_txo_count: 0,
			funded_txo_sum: 0,
			spent_txo_count: 0,
			spent_txo_sum: 0,
			tx_count: 0
		}
	},
	utxos: [],
	feeInfo: {
		low_fee_per_kb: 20000,
		medium_fee_per_kb: 35000,
		high_fee_per_kb: 50000
	},
	feeCalc: {
		pegInFeeCalc: {
			feeToApply: 20000,
			pegInAmount: 0,
			high: {
				change: 0,
				fee: 500000,
			},
			medium: {
				change: 0,
				fee: 500000,
			},
			low: {
				change: 0,
				fee: 500000,
			},
		},
		pegOutFeeCalc: {
			feeToApply: 20000,
			pegOutAmount: 0,
			DUST_AMOUNT: 500,
			high: {
				change: 0,
				fee: 500000,
			},
			medium: {
				change: 0,
				fee: 500000,
			},
			low: {
				change: 0,
				fee: 500000,
			},
		}
	},
	sigData: undefined,
	pegInTransaction: undefined,
	pegOutTransaction: undefined
}


export const sbtcWallet = 'tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7';

export const allowed = [
	{ stx: 'SP1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28GBQA1W0F', btc: '7010183fd1a76976e7b2bb67acdf57cdfe704882' },
	{ stx: 'ST3JS8A0CHVNVJDCRPNJ1PSPJKTCZ4VSRYNVA55TW', btc: 'e594280c8eebb93598b5641b66d29e99f26f38f5' }
]
  
export const addressList = [
	'2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb', // bitcoin core testnet
	'tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5' // electrum alice testnet
];
//https://api.blockcypher.com/v1/btc/test3
export const feeData = JSON.parse('{"name":"BTC.test3","height":2418577,"hash":"000000000036d33670c2bcf3231b8d2e3979fc72ddc9d5862c2d9df4a23a656c","time":"2023-02-02T21:31:45.191472924Z","latest_url":"https://api.blockcypher.com/v1/btc/test3/blocks/000000000036d33670c2bcf3231b8d2e3979fc72ddc9d5862c2d9df4a23a656c","previous_hash":"0000000000000012ece64a47c6bfaea36d3c8e4026bbe9087c1d0b0d20ba475a","previous_url":"https://api.blockcypher.com/v1/btc/test3/blocks/0000000000000012ece64a47c6bfaea36d3c8e4026bbe9087c1d0b0d20ba475a","peer_count":225,"unconfirmed_count":22,"high_fee_per_kb":48783,"medium_fee_per_kb":30998,"low_fee_per_kb":18955,"last_fork_height":2418464,"last_fork_hash":"00000000001a8f9342f1557cca0237914a6f7d7f02fc4de8ca38bdba5eae8db2"}');

//https://mempool.space/testnet/api/address/2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb/address
export const addresses = JSON.parse('[{"address":"2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb","chain_stats":{"funded_txo_count":1,"funded_txo_sum":297900,"spent_txo_count":0,"spent_txo_sum":0,"tx_count":1},"mempool_stats":{"funded_txo_count":0,"funded_txo_sum":0,"spent_txo_count":0,"spent_txo_sum":0,"tx_count":0}},{"address":"tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5","chain_stats":{"funded_txo_count":1,"funded_txo_sum":13307200,"spent_txo_count":0,"spent_txo_sum":0,"tx_count":1},"mempool_stats":{"funded_txo_count":0,"funded_txo_sum":0,"spent_txo_count":0,"spent_txo_sum":0,"tx_count":0}}]');

//https://mempool.space/testnet/api/address/2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb/utxo
export const utxo0 = JSON.parse('[{"txid":"5037ff3fe8e6a0349da5a0c77d1c07ed3ab7dc6cc3509ccc71c1dbd009380508","vout":1,"status":{"confirmed":true,"block_height":2195753,"block_hash":"000000000000004386101c18f87e2eb41ff9ca5200087e1f69c8914e5c5c700c","block_time":1650020138},"value":297900}]');
export const utxo1 = JSON.parse('[{"txid":"894757c00ce5a6765ab765f3b4b47ff350b8061bb1defc6c36c4f4b80b798e04","vout":1,"status":{"confirmed":true,"block_height":2418440,"block_hash":"000000000000001137eef2552c39249888eb5f58da3e6b0b8281291903f6304b","block_time":1675179580},"value":13307200}]');

//https://mempool.space/testnet/api/address/2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb/txs
//export const txs0 = JSON.parse('[{"txid":"5037ff3fe8e6a0349da5a0c77d1c07ed3ab7dc6cc3509ccc71c1dbd009380508","version":2,"locktime":2195752,"vin":[{"txid":"2f361acfaa88ab2efbed47d266077b5588cdcbb9cce7b11859a89835ce3fc0ff","vout":1,"prevout":{"scriptpubkey":"a9141701162e649099dc1ffc99ea1f7d45963553f6c287","scriptpubkey_asm":"OP_HASH160 OP_PUSHBYTES_20 1701162e649099dc1ffc99ea1f7d45963553f6c2 OP_EQUAL","scriptpubkey_type":"p2sh","scriptpubkey_address":"2MuLrqCQds5Sz3Xenj29WeuBGFAuoLy6Z53","value":3504133},"scriptsig":"160014dc14b9f045dc9714fced41ea8f86ec1ea5383007","scriptsig_asm":"OP_PUSHBYTES_22 0014dc14b9f045dc9714fced41ea8f86ec1ea5383007","witness":["304402203ed494a82388e04c5d9de8719b140dac32ae90e349e35fcc95efab3f8341b4db02204bfeb4dd6a782b2cd5431e2fbb4380f667c5463e17221b0bee5024b44515a26601","02a367e9b28b83d7efc282159c404d4ad74a1faae26a683abd675ac3f3312f232c"],"is_coinbase":false,"sequence":4294967293,"inner_redeemscript_asm":"OP_0 OP_PUSHBYTES_20 dc14b9f045dc9714fced41ea8f86ec1ea5383007"}],"vout":[{"scriptpubkey":"a914b591db0e42d7bb1e0630dce5e95c5671c3e9adc587","scriptpubkey_asm":"OP_HASH160 OP_PUSHBYTES_20 b591db0e42d7bb1e0630dce5e95c5671c3e9adc5 OP_EQUAL","scriptpubkey_type":"p2sh","scriptpubkey_address":"2N9oH2EeCJoEorbVaCpGCQUykvCmkF8esds","value":3206067},{"scriptpubkey":"a914a91a74e9ff3101b0e56169e744d9f1e9ff5305bf87","scriptpubkey_asm":"OP_HASH160 OP_PUSHBYTES_20 a91a74e9ff3101b0e56169e744d9f1e9ff5305bf OP_EQUAL","scriptpubkey_type":"p2sh","scriptpubkey_address":"2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb","value":297900}],"size":247,"weight":661,"fee":166,"status":{"confirmed":true,"block_height":2195753,"block_hash":"000000000000004386101c18f87e2eb41ff9ca5200087e1f69c8914e5c5c700c","block_time":1650020138}}]');
//export const txs1 = JSON.parse('[{"txid":"894757c00ce5a6765ab765f3b4b47ff350b8061bb1defc6c36c4f4b80b798e04","version":2,"locktime":2418439,"vin":[{"txid":"1cc566b72aaed5e27c76a629c790534b023dda90e571f0f325fcc7449245729e","vout":0,"prevout":{"scriptpubkey":"0014ec394379bffcf32d99ed5b692aa81cb540f8b7f4","scriptpubkey_asm":"OP_0 OP_PUSHBYTES_20 ec394379bffcf32d99ed5b692aa81cb540f8b7f4","scriptpubkey_type":"v0_p2wpkh","scriptpubkey_address":"tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7","value":8289039},"scriptsig":"","scriptsig_asm":"","witness":["30440220039d5ceec2f09bbaa36d8b11906375c5666c54b60cd81c67f180e0ccad392f2102203774a9807131e42c4422aa3f74c61017e4f39e7488a7c2f2fc4083bde5ee79a001","03068ce1cb09d6c2e0cd08c8638b579fe2bf398d3341eb12c303da1b17dd9e34d1"],"is_coinbase":false,"sequence":4294967293},{"txid":"abcf7b3d10f8296504d9a59cb803049b9b53455f8bf36cbd9177fc5a10e63f93","vout":0,"prevout":{"scriptpubkey":"0014ec394379bffcf32d99ed5b692aa81cb540f8b7f4","scriptpubkey_asm":"OP_0 OP_PUSHBYTES_20 ec394379bffcf32d99ed5b692aa81cb540f8b7f4","scriptpubkey_type":"v0_p2wpkh","scriptpubkey_address":"tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7","value":32456},"scriptsig":"","scriptsig_asm":"","witness":["3044022078d567912f5174ceea349eeaba6516686b17eb215ef6168805242c3fbf94d10f02201a8be63ae9a9adbad47364bbaf6118cee4b3ee3212b4a191276abd848baaad8a01","03068ce1cb09d6c2e0cd08c8638b579fe2bf398d3341eb12c303da1b17dd9e34d1"],"is_coinbase":false,"sequence":4294967293},{"txid":"c847c50f52c196e566a47ada6563494f698e30cf80afea5ab3777a0e706f8678","vout":0,"prevout":{"scriptpubkey":"0014ec394379bffcf32d99ed5b692aa81cb540f8b7f4","scriptpubkey_asm":"OP_0 OP_PUSHBYTES_20 ec394379bffcf32d99ed5b692aa81cb540f8b7f4","scriptpubkey_type":"v0_p2wpkh","scriptpubkey_address":"tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7","value":9986005},"scriptsig":"","scriptsig_asm":"","witness":["30440220094a366d1c6f06e9eec4a94087634cd0c2780c623f0c131b6e1b60f4b82c4ebf022017204254442375cdfba84440de3b2efe238b0cdc92f4583bad71939a6a49e90901","03068ce1cb09d6c2e0cd08c8638b579fe2bf398d3341eb12c303da1b17dd9e34d1"],"is_coinbase":false,"sequence":4294967293}],"vout":[{"scriptpubkey":"001481a4724816dbd39939e9504fce3cae950f2770db","scriptpubkey_asm":"OP_0 OP_PUSHBYTES_20 81a4724816dbd39939e9504fce3cae950f2770db","scriptpubkey_type":"v0_p2wpkh","scriptpubkey_address":"tb1qsxj8yjqkm0fejw0f2p8uu09wj58jwuxmqakeyk","value":5000000},{"scriptpubkey":"00143e16009af8fc7edac27cd978ef590cc8e8c11240","scriptpubkey_asm":"OP_0 OP_PUSHBYTES_20 3e16009af8fc7edac27cd978ef590cc8e8c11240","scriptpubkey_type":"v0_p2wpkh","scriptpubkey_address":"tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5","value":13307200}],"size":518,"weight":1103,"fee":300,"status":{"confirmed":true,"block_height":2418440,"block_hash":"000000000000001137eef2552c39249888eb5f58da3e6b0b8281291903f6304b","block_time":1675179580}}]');

export const tx0BC = JSON.parse('{"block_hash":"000000000000004386101c18f87e2eb41ff9ca5200087e1f69c8914e5c5c700c","block_height":2195753,"block_index":44,"hash":"5037ff3fe8e6a0349da5a0c77d1c07ed3ab7dc6cc3509ccc71c1dbd009380508","hex":"02000000000101ffc03fce3598a85918b1e7ccb9cbcd88557b0766d247edfb2eab88aacf1a362f0100000017160014dc14b9f045dc9714fced41ea8f86ec1ea5383007fdffffff02b3eb30000000000017a914b591db0e42d7bb1e0630dce5e95c5671c3e9adc587ac8b04000000000017a914a91a74e9ff3101b0e56169e744d9f1e9ff5305bf870247304402203ed494a82388e04c5d9de8719b140dac32ae90e349e35fcc95efab3f8341b4db02204bfeb4dd6a782b2cd5431e2fbb4380f667c5463e17221b0bee5024b44515a266012102a367e9b28b83d7efc282159c404d4ad74a1faae26a683abd675ac3f3312f232c28812100","addresses":["2MuLrqCQds5Sz3Xenj29WeuBGFAuoLy6Z53","2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb","2N9oH2EeCJoEorbVaCpGCQUykvCmkF8esds"],"total":3503967,"fees":166,"size":247,"vsize":166,"preference":"low","relayed_by":"3.18.26.129:18333","confirmed":"2022-04-15T10:55:38Z","received":"2022-04-15T10:46:15.347Z","ver":2,"lock_time":2195752,"double_spend":false,"vin_sz":1,"vout_sz":2,"opt_in_rbf":true,"confirmations":222825,"confidence":1,"inputs":[{"prev_hash":"2f361acfaa88ab2efbed47d266077b5588cdcbb9cce7b11859a89835ce3fc0ff","output_index":1,"script":"160014dc14b9f045dc9714fced41ea8f86ec1ea5383007","output_value":3504133,"sequence":4294967293,"addresses":["2MuLrqCQds5Sz3Xenj29WeuBGFAuoLy6Z53"],"script_type":"pay-to-script-hash","age":2194346}],"outputs":[{"value":3206067,"script":"a914b591db0e42d7bb1e0630dce5e95c5671c3e9adc587","addresses":["2N9oH2EeCJoEorbVaCpGCQUykvCmkF8esds"],"script_type":"pay-to-script-hash"},{"value":297900,"script":"a914a91a74e9ff3101b0e56169e744d9f1e9ff5305bf87","addresses":["2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb"],"script_type":"pay-to-script-hash"}]}');
export const tx1BC = JSON.parse('{"block_hash":"000000000000001137eef2552c39249888eb5f58da3e6b0b8281291903f6304b","block_height":2418440,"block_index":63,"hash":"894757c00ce5a6765ab765f3b4b47ff350b8061bb1defc6c36c4f4b80b798e04","hex":"020000000001039e72459244c7fc25f3f071e590da3d024b5390c729a6767ce2d5ae2ab766c51c0000000000fdffffff933fe6105afc7791bd6cf38b5f45539b9b0403b89ca5d9046529f8103d7bcfab0000000000fdffffff78866f700e7a77b35aeaaf80cf308e694f496365da7aa466e596c1520fc547c80000000000fdffffff02404b4c000000000016001481a4724816dbd39939e9504fce3cae950f2770db400dcb00000000001600143e16009af8fc7edac27cd978ef590cc8e8c11240024730440220039d5ceec2f09bbaa36d8b11906375c5666c54b60cd81c67f180e0ccad392f2102203774a9807131e42c4422aa3f74c61017e4f39e7488a7c2f2fc4083bde5ee79a0012103068ce1cb09d6c2e0cd08c8638b579fe2bf398d3341eb12c303da1b17dd9e34d102473044022078d567912f5174ceea349eeaba6516686b17eb215ef6168805242c3fbf94d10f02201a8be63ae9a9adbad47364bbaf6118cee4b3ee3212b4a191276abd848baaad8a012103068ce1cb09d6c2e0cd08c8638b579fe2bf398d3341eb12c303da1b17dd9e34d1024730440220094a366d1c6f06e9eec4a94087634cd0c2780c623f0c131b6e1b60f4b82c4ebf022017204254442375cdfba84440de3b2efe238b0cdc92f4583bad71939a6a49e909012103068ce1cb09d6c2e0cd08c8638b579fe2bf398d3341eb12c303da1b17dd9e34d107e72400","addresses":["tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5","tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7","tb1qsxj8yjqkm0fejw0f2p8uu09wj58jwuxmqakeyk"],"total":18307200,"fees":300,"size":518,"vsize":276,"preference":"low","relayed_by":"185.180.220.12:18333","confirmed":"2023-01-31T15:39:40Z","received":"2023-01-31T15:25:18.213Z","ver":2,"lock_time":2418439,"double_spend":false,"vin_sz":3,"vout_sz":2,"opt_in_rbf":true,"confirmations":138,"confidence":1,"inputs":[{"prev_hash":"1cc566b72aaed5e27c76a629c790534b023dda90e571f0f325fcc7449245729e","output_index":0,"output_value":8289039,"sequence":4294967293,"addresses":["tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7"],"script_type":"pay-to-witness-pubkey-hash","age":2417845,"witness":["30440220039d5ceec2f09bbaa36d8b11906375c5666c54b60cd81c67f180e0ccad392f2102203774a9807131e42c4422aa3f74c61017e4f39e7488a7c2f2fc4083bde5ee79a001","03068ce1cb09d6c2e0cd08c8638b579fe2bf398d3341eb12c303da1b17dd9e34d1"]},{"prev_hash":"abcf7b3d10f8296504d9a59cb803049b9b53455f8bf36cbd9177fc5a10e63f93","output_index":0,"output_value":32456,"sequence":4294967293,"addresses":["tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7"],"script_type":"pay-to-witness-pubkey-hash","age":2417959,"witness":["3044022078d567912f5174ceea349eeaba6516686b17eb215ef6168805242c3fbf94d10f02201a8be63ae9a9adbad47364bbaf6118cee4b3ee3212b4a191276abd848baaad8a01","03068ce1cb09d6c2e0cd08c8638b579fe2bf398d3341eb12c303da1b17dd9e34d1"]},{"prev_hash":"c847c50f52c196e566a47ada6563494f698e30cf80afea5ab3777a0e706f8678","output_index":0,"output_value":9986005,"sequence":4294967293,"addresses":["tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7"],"script_type":"pay-to-witness-pubkey-hash","age":2417888,"witness":["30440220094a366d1c6f06e9eec4a94087634cd0c2780c623f0c131b6e1b60f4b82c4ebf022017204254442375cdfba84440de3b2efe238b0cdc92f4583bad71939a6a49e90901","03068ce1cb09d6c2e0cd08c8638b579fe2bf398d3341eb12c303da1b17dd9e34d1"]}],"outputs":[{"value":5000000,"script":"001481a4724816dbd39939e9504fce3cae950f2770db","addresses":["tb1qsxj8yjqkm0fejw0f2p8uu09wj58jwuxmqakeyk"],"script_type":"pay-to-witness-pubkey-hash"},{"value":13307200,"script":"00143e16009af8fc7edac27cd978ef590cc8e8c11240","addresses":["tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5"],"script_type":"pay-to-witness-pubkey-hash"}]}');

export const tx0 = JSON.parse('{"txid":"5037ff3fe8e6a0349da5a0c77d1c07ed3ab7dc6cc3509ccc71c1dbd009380508","version":2,"locktime":2195752,"vin":[{"txid":"2f361acfaa88ab2efbed47d266077b5588cdcbb9cce7b11859a89835ce3fc0ff","vout":1,"prevout":{"scriptpubkey":"a9141701162e649099dc1ffc99ea1f7d45963553f6c287","scriptpubkey_asm":"OP_HASH160 OP_PUSHBYTES_20 1701162e649099dc1ffc99ea1f7d45963553f6c2 OP_EQUAL","scriptpubkey_type":"p2sh","scriptpubkey_address":"2MuLrqCQds5Sz3Xenj29WeuBGFAuoLy6Z53","value":3504133},"scriptsig":"160014dc14b9f045dc9714fced41ea8f86ec1ea5383007","scriptsig_asm":"OP_PUSHBYTES_22 0014dc14b9f045dc9714fced41ea8f86ec1ea5383007","witness":["304402203ed494a82388e04c5d9de8719b140dac32ae90e349e35fcc95efab3f8341b4db02204bfeb4dd6a782b2cd5431e2fbb4380f667c5463e17221b0bee5024b44515a26601","02a367e9b28b83d7efc282159c404d4ad74a1faae26a683abd675ac3f3312f232c"],"is_coinbase":false,"sequence":4294967293,"inner_redeemscript_asm":"OP_0 OP_PUSHBYTES_20 dc14b9f045dc9714fced41ea8f86ec1ea5383007"}],"vout":[{"scriptpubkey":"a914b591db0e42d7bb1e0630dce5e95c5671c3e9adc587","scriptpubkey_asm":"OP_HASH160 OP_PUSHBYTES_20 b591db0e42d7bb1e0630dce5e95c5671c3e9adc5 OP_EQUAL","scriptpubkey_type":"p2sh","scriptpubkey_address":"2N9oH2EeCJoEorbVaCpGCQUykvCmkF8esds","value":3206067},{"scriptpubkey":"a914a91a74e9ff3101b0e56169e744d9f1e9ff5305bf87","scriptpubkey_asm":"OP_HASH160 OP_PUSHBYTES_20 a91a74e9ff3101b0e56169e744d9f1e9ff5305bf OP_EQUAL","scriptpubkey_type":"p2sh","scriptpubkey_address":"2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb","value":297900}],"size":247,"weight":661,"fee":166,"status":{"confirmed":true,"block_height":2195753,"block_hash":"000000000000004386101c18f87e2eb41ff9ca5200087e1f69c8914e5c5c700c","block_time":1650020138}}');
export const tx0Hex = '02000000000101ffc03fce3598a85918b1e7ccb9cbcd88557b0766d247edfb2eab88aacf1a362f0100000017160014dc14b9f045dc9714fced41ea8f86ec1ea5383007fdffffff02b3eb30000000000017a914b591db0e42d7bb1e0630dce5e95c5671c3e9adc587ac8b04000000000017a914a91a74e9ff3101b0e56169e744d9f1e9ff5305bf870247304402203ed494a82388e04c5d9de8719b140dac32ae90e349e35fcc95efab3f8341b4db02204bfeb4dd6a782b2cd5431e2fbb4380f667c5463e17221b0bee5024b44515a266012102a367e9b28b83d7efc282159c404d4ad74a1faae26a683abd675ac3f3312f232c28812100'
export const tx1 = JSON.parse('{"txid":"894757c00ce5a6765ab765f3b4b47ff350b8061bb1defc6c36c4f4b80b798e04","version":2,"locktime":2418439,"vin":[{"txid":"1cc566b72aaed5e27c76a629c790534b023dda90e571f0f325fcc7449245729e","vout":0,"prevout":{"scriptpubkey":"0014ec394379bffcf32d99ed5b692aa81cb540f8b7f4","scriptpubkey_asm":"OP_0 OP_PUSHBYTES_20 ec394379bffcf32d99ed5b692aa81cb540f8b7f4","scriptpubkey_type":"v0_p2wpkh","scriptpubkey_address":"tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7","value":8289039},"scriptsig":"","scriptsig_asm":"","witness":["30440220039d5ceec2f09bbaa36d8b11906375c5666c54b60cd81c67f180e0ccad392f2102203774a9807131e42c4422aa3f74c61017e4f39e7488a7c2f2fc4083bde5ee79a001","03068ce1cb09d6c2e0cd08c8638b579fe2bf398d3341eb12c303da1b17dd9e34d1"],"is_coinbase":false,"sequence":4294967293},{"txid":"abcf7b3d10f8296504d9a59cb803049b9b53455f8bf36cbd9177fc5a10e63f93","vout":0,"prevout":{"scriptpubkey":"0014ec394379bffcf32d99ed5b692aa81cb540f8b7f4","scriptpubkey_asm":"OP_0 OP_PUSHBYTES_20 ec394379bffcf32d99ed5b692aa81cb540f8b7f4","scriptpubkey_type":"v0_p2wpkh","scriptpubkey_address":"tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7","value":32456},"scriptsig":"","scriptsig_asm":"","witness":["3044022078d567912f5174ceea349eeaba6516686b17eb215ef6168805242c3fbf94d10f02201a8be63ae9a9adbad47364bbaf6118cee4b3ee3212b4a191276abd848baaad8a01","03068ce1cb09d6c2e0cd08c8638b579fe2bf398d3341eb12c303da1b17dd9e34d1"],"is_coinbase":false,"sequence":4294967293},{"txid":"c847c50f52c196e566a47ada6563494f698e30cf80afea5ab3777a0e706f8678","vout":0,"prevout":{"scriptpubkey":"0014ec394379bffcf32d99ed5b692aa81cb540f8b7f4","scriptpubkey_asm":"OP_0 OP_PUSHBYTES_20 ec394379bffcf32d99ed5b692aa81cb540f8b7f4","scriptpubkey_type":"v0_p2wpkh","scriptpubkey_address":"tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7","value":9986005},"scriptsig":"","scriptsig_asm":"","witness":["30440220094a366d1c6f06e9eec4a94087634cd0c2780c623f0c131b6e1b60f4b82c4ebf022017204254442375cdfba84440de3b2efe238b0cdc92f4583bad71939a6a49e90901","03068ce1cb09d6c2e0cd08c8638b579fe2bf398d3341eb12c303da1b17dd9e34d1"],"is_coinbase":false,"sequence":4294967293}],"vout":[{"scriptpubkey":"001481a4724816dbd39939e9504fce3cae950f2770db","scriptpubkey_asm":"OP_0 OP_PUSHBYTES_20 81a4724816dbd39939e9504fce3cae950f2770db","scriptpubkey_type":"v0_p2wpkh","scriptpubkey_address":"tb1qsxj8yjqkm0fejw0f2p8uu09wj58jwuxmqakeyk","value":5000000},{"scriptpubkey":"00143e16009af8fc7edac27cd978ef590cc8e8c11240","scriptpubkey_asm":"OP_0 OP_PUSHBYTES_20 3e16009af8fc7edac27cd978ef590cc8e8c11240","scriptpubkey_type":"v0_p2wpkh","scriptpubkey_address":"tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5","value":13307200}],"size":518,"weight":1103,"fee":300,"status":{"confirmed":true,"block_height":2418440,"block_hash":"000000000000001137eef2552c39249888eb5f58da3e6b0b8281291903f6304b","block_time":1675179580}}');
export const tx1Hex = '020000000001039e72459244c7fc25f3f071e590da3d024b5390c729a6767ce2d5ae2ab766c51c0000000000fdffffff933fe6105afc7791bd6cf38b5f45539b9b0403b89ca5d9046529f8103d7bcfab0000000000fdffffff78866f700e7a77b35aeaaf80cf308e694f496365da7aa466e596c1520fc547c80000000000fdffffff02404b4c000000000016001481a4724816dbd39939e9504fce3cae950f2770db400dcb00000000001600143e16009af8fc7edac27cd978ef590cc8e8c11240024730440220039d5ceec2f09bbaa36d8b11906375c5666c54b60cd81c67f180e0ccad392f2102203774a9807131e42c4422aa3f74c61017e4f39e7488a7c2f2fc4083bde5ee79a0012103068ce1cb09d6c2e0cd08c8638b579fe2bf398d3341eb12c303da1b17dd9e34d102473044022078d567912f5174ceea349eeaba6516686b17eb215ef6168805242c3fbf94d10f02201a8be63ae9a9adbad47364bbaf6118cee4b3ee3212b4a191276abd848baaad8a012103068ce1cb09d6c2e0cd08c8638b579fe2bf398d3341eb12c303da1b17dd9e34d1024730440220094a366d1c6f06e9eec4a94087634cd0c2780c623f0c131b6e1b60f4b82c4ebf022017204254442375cdfba84440de3b2efe238b0cdc92f4583bad71939a6a49e909012103068ce1cb09d6c2e0cd08c8638b579fe2bf398d3341eb12c303da1b17dd9e34d107e72400'
// ------------------------------------------------------------------------
export const sbtcConfig10 = {
	network: 'testnet',
	sbtcContractData: {
		sbtcWalletAddress: 'tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7',
	},
	fromBtcAddress: 'tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7',
	addressDetails: {
		address: 'tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7',
		chain_stats: {
			funded_txo_count: 3,
			funded_txo_sum: 26592856,
			spent_txo_count: 2,
			spent_txo_sum: 18303817,
			tx_count: 4
		},
		mempool_stats: {
			funded_txo_count: 0,
			funded_txo_sum: 0,
			spent_txo_count: 0,
			spent_txo_sum: 0,
			tx_count: 0
		}
	},
	utxos: [
		{
			txid: '1cc566b72aaed5e27c76a629c790534b023dda90e571f0f325fcc7449245729e',
			vout: 0,
			status: {
				confirmed: true,
				block_height: 2417845,
				block_hash: '000000003125b56d1fa8c7350bcdf4831d87a304bf8288875d9dbcaffc025d9c',
				block_time: 1674720583
			},
			value: 8289039
		},
		{
			txid: '1cc566b72aaed5e27c76a629c790534b023dda90e571f0f325fcc7449245729e',
			vout: 0,
			status: {
				confirmed: true,
				block_height: 2417845,
				block_hash: '000000003125b56d1fa8c7350bcdf4831d87a304bf8288875d9dbcaffc025d9c',
				block_time: 1674720583
			},
			value: 8289039
		},
		{
			txid: '1cc566b72aaed5e27c76a629c790534b023dda90e571f0f325fcc7449245729e',
			vout: 0,
			status: {
				confirmed: true,
				block_height: 2417845,
				block_hash: '000000003125b56d1fa8c7350bcdf4831d87a304bf8288875d9dbcaffc025d9c',
				block_time: 1674720583
			},
			value: 8289039
		},
		{
			txid: '1cc566b72aaed5e27c76a629c790534b023dda90e571f0f325fcc7449245729e',
			vout: 0,
			status: {
				confirmed: true,
				block_height: 2417845,
				block_hash: '000000003125b56d1fa8c7350bcdf4831d87a304bf8288875d9dbcaffc025d9c',
				block_time: 1674720583
			},
			value: 8289039
		},
		{
			txid: '1cc566b72aaed5e27c76a629c790534b023dda90e571f0f325fcc7449245729e',
			vout: 0,
			status: {
				confirmed: true,
				block_height: 2417845,
				block_hash: '000000003125b56d1fa8c7350bcdf4831d87a304bf8288875d9dbcaffc025d9c',
				block_time: 1674720583
			},
			value: 8289039
		},
		{
			txid: '1cc566b72aaed5e27c76a629c790534b023dda90e571f0f325fcc7449245729e',
			vout: 0,
			status: {
				confirmed: true,
				block_height: 2417845,
				block_hash: '000000003125b56d1fa8c7350bcdf4831d87a304bf8288875d9dbcaffc025d9c',
				block_time: 1674720583
			},
			value: 8289039
		},
		{
			txid: '1cc566b72aaed5e27c76a629c790534b023dda90e571f0f325fcc7449245729e',
			vout: 0,
			status: {
				confirmed: true,
				block_height: 2417845,
				block_hash: '000000003125b56d1fa8c7350bcdf4831d87a304bf8288875d9dbcaffc025d9c',
				block_time: 1674720583
			},
			value: 8289039
		},
		{
			txid: '1cc566b72aaed5e27c76a629c790534b023dda90e571f0f325fcc7449245729e',
			vout: 0,
			status: {
				confirmed: true,
				block_height: 2417845,
				block_hash: '000000003125b56d1fa8c7350bcdf4831d87a304bf8288875d9dbcaffc025d9c',
				block_time: 1674720583
			},
			value: 8289039
		},
		{
			txid: '1cc566b72aaed5e27c76a629c790534b023dda90e571f0f325fcc7449245729e',
			vout: 0,
			status: {
				confirmed: true,
				block_height: 2417845,
				block_hash: '000000003125b56d1fa8c7350bcdf4831d87a304bf8288875d9dbcaffc025d9c',
				block_time: 1674720583
			},
			value: 8289039
		},
		{
			txid: '1cc566b72aaed5e27c76a629c790534b023dda90e571f0f325fcc7449245729e',
			vout: 0,
			status: {
				confirmed: true,
				block_height: 2417845,
				block_hash: '000000003125b56d1fa8c7350bcdf4831d87a304bf8288875d9dbcaffc025d9c',
				block_time: 1674720583
			},
			value: 8289039
		}
	],
	stxAddress: 'ST1NXBK3K5YYMD6FD41MVNP3JS1GABZ8TRVX023PT',
	pegInAmount: 8275453
};
export const sbtcConfig1 = {
	network: 'testnet',
	sbtcContractData: {
		sbtcWalletAddress: 'tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7',
	},
	fromBtcAddress: 'tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7',
	addressDetails: {
		address: 'tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7',
		chain_stats: {
			funded_txo_count: 3,
			funded_txo_sum: 26592856,
			spent_txo_count: 2,
			spent_txo_sum: 18303817,
			tx_count: 4
		},
		mempool_stats: {
			funded_txo_count: 0,
			funded_txo_sum: 0,
			spent_txo_count: 0,
			spent_txo_sum: 0,
			tx_count: 0
		}
	},
	utxos: [
		{
			txid: '1cc566b72aaed5e27c76a629c790534b023dda90e571f0f325fcc7449245729e',
			vout: 0,
			status: {
				confirmed: true,
				block_height: 2417845,
				block_hash: '000000003125b56d1fa8c7350bcdf4831d87a304bf8288875d9dbcaffc025d9c',
				block_time: 1674720583
			},
			value: 8289039
		}
	],
	stxAddress: 'ST1NXBK3K5YYMD6FD41MVNP3JS1GABZ8TRVX023PT',
	pegInAmount: 8275453
};
