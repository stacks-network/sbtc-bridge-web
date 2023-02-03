export const sbtcWallet = 'tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss';
export const addressList = [
	'2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb', // bitcoin core testnet
	'tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5' // electrum alice testnet
];

//https://mempool.space/testnet/api/address/2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb/address
export const addresses = JSON.parse('[{"address":"2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb","chain_stats":{"funded_txo_count":1,"funded_txo_sum":297900,"spent_txo_count":0,"spent_txo_sum":0,"tx_count":1},"mempool_stats":{"funded_txo_count":0,"funded_txo_sum":0,"spent_txo_count":0,"spent_txo_sum":0,"tx_count":0}},{"address":"tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5","chain_stats":{"funded_txo_count":1,"funded_txo_sum":13307200,"spent_txo_count":0,"spent_txo_sum":0,"tx_count":1},"mempool_stats":{"funded_txo_count":0,"funded_txo_sum":0,"spent_txo_count":0,"spent_txo_sum":0,"tx_count":0}}]');

//https://mempool.space/testnet/api/address/2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb/utxo
export const utxo0 = JSON.parse('[{"txid":"5037ff3fe8e6a0349da5a0c77d1c07ed3ab7dc6cc3509ccc71c1dbd009380508","vout":1,"status":{"confirmed":true,"block_height":2195753,"block_hash":"000000000000004386101c18f87e2eb41ff9ca5200087e1f69c8914e5c5c700c","block_time":1650020138},"value":297900},{"txid":"894757c00ce5a6765ab765f3b4b47ff350b8061bb1defc6c36c4f4b80b798e04","vout":1,"status":{"confirmed":true,"block_height":2418440,"block_hash":"000000000000001137eef2552c39249888eb5f58da3e6b0b8281291903f6304b","block_time":1675179580},"value":13307200}]');
export const utxo1 = JSON.parse('[{"txid":"894757c00ce5a6765ab765f3b4b47ff350b8061bb1defc6c36c4f4b80b798e04","vout":1,"status":{"confirmed":true,"block_height":2418440,"block_hash":"000000000000001137eef2552c39249888eb5f58da3e6b0b8281291903f6304b","block_time":1675179580},"value":13307200}]');

//https://mempool.space/testnet/api/address/2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb/txs
export const txs0 = JSON.parse('[{"txid":"5037ff3fe8e6a0349da5a0c77d1c07ed3ab7dc6cc3509ccc71c1dbd009380508","version":2,"locktime":2195752,"vin":[{"txid":"2f361acfaa88ab2efbed47d266077b5588cdcbb9cce7b11859a89835ce3fc0ff","vout":1,"prevout":{"scriptpubkey":"a9141701162e649099dc1ffc99ea1f7d45963553f6c287","scriptpubkey_asm":"OP_HASH160 OP_PUSHBYTES_20 1701162e649099dc1ffc99ea1f7d45963553f6c2 OP_EQUAL","scriptpubkey_type":"p2sh","scriptpubkey_address":"2MuLrqCQds5Sz3Xenj29WeuBGFAuoLy6Z53","value":3504133},"scriptsig":"160014dc14b9f045dc9714fced41ea8f86ec1ea5383007","scriptsig_asm":"OP_PUSHBYTES_22 0014dc14b9f045dc9714fced41ea8f86ec1ea5383007","witness":["304402203ed494a82388e04c5d9de8719b140dac32ae90e349e35fcc95efab3f8341b4db02204bfeb4dd6a782b2cd5431e2fbb4380f667c5463e17221b0bee5024b44515a26601","02a367e9b28b83d7efc282159c404d4ad74a1faae26a683abd675ac3f3312f232c"],"is_coinbase":false,"sequence":4294967293,"inner_redeemscript_asm":"OP_0 OP_PUSHBYTES_20 dc14b9f045dc9714fced41ea8f86ec1ea5383007"}],"vout":[{"scriptpubkey":"a914b591db0e42d7bb1e0630dce5e95c5671c3e9adc587","scriptpubkey_asm":"OP_HASH160 OP_PUSHBYTES_20 b591db0e42d7bb1e0630dce5e95c5671c3e9adc5 OP_EQUAL","scriptpubkey_type":"p2sh","scriptpubkey_address":"2N9oH2EeCJoEorbVaCpGCQUykvCmkF8esds","value":3206067},{"scriptpubkey":"a914a91a74e9ff3101b0e56169e744d9f1e9ff5305bf87","scriptpubkey_asm":"OP_HASH160 OP_PUSHBYTES_20 a91a74e9ff3101b0e56169e744d9f1e9ff5305bf OP_EQUAL","scriptpubkey_type":"p2sh","scriptpubkey_address":"2N8fMsws2pTGfNzkFTLWdUYM5RTWEAphieb","value":297900}],"size":247,"weight":661,"fee":166,"status":{"confirmed":true,"block_height":2195753,"block_hash":"000000000000004386101c18f87e2eb41ff9ca5200087e1f69c8914e5c5c700c","block_time":1650020138}}]');
export const txs1 = JSON.parse('[{"txid":"894757c00ce5a6765ab765f3b4b47ff350b8061bb1defc6c36c4f4b80b798e04","version":2,"locktime":2418439,"vin":[{"txid":"1cc566b72aaed5e27c76a629c790534b023dda90e571f0f325fcc7449245729e","vout":0,"prevout":{"scriptpubkey":"0014ec394379bffcf32d99ed5b692aa81cb540f8b7f4","scriptpubkey_asm":"OP_0 OP_PUSHBYTES_20 ec394379bffcf32d99ed5b692aa81cb540f8b7f4","scriptpubkey_type":"v0_p2wpkh","scriptpubkey_address":"tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss","value":8289039},"scriptsig":"","scriptsig_asm":"","witness":["30440220039d5ceec2f09bbaa36d8b11906375c5666c54b60cd81c67f180e0ccad392f2102203774a9807131e42c4422aa3f74c61017e4f39e7488a7c2f2fc4083bde5ee79a001","03068ce1cb09d6c2e0cd08c8638b579fe2bf398d3341eb12c303da1b17dd9e34d1"],"is_coinbase":false,"sequence":4294967293},{"txid":"abcf7b3d10f8296504d9a59cb803049b9b53455f8bf36cbd9177fc5a10e63f93","vout":0,"prevout":{"scriptpubkey":"0014ec394379bffcf32d99ed5b692aa81cb540f8b7f4","scriptpubkey_asm":"OP_0 OP_PUSHBYTES_20 ec394379bffcf32d99ed5b692aa81cb540f8b7f4","scriptpubkey_type":"v0_p2wpkh","scriptpubkey_address":"tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss","value":32456},"scriptsig":"","scriptsig_asm":"","witness":["3044022078d567912f5174ceea349eeaba6516686b17eb215ef6168805242c3fbf94d10f02201a8be63ae9a9adbad47364bbaf6118cee4b3ee3212b4a191276abd848baaad8a01","03068ce1cb09d6c2e0cd08c8638b579fe2bf398d3341eb12c303da1b17dd9e34d1"],"is_coinbase":false,"sequence":4294967293},{"txid":"c847c50f52c196e566a47ada6563494f698e30cf80afea5ab3777a0e706f8678","vout":0,"prevout":{"scriptpubkey":"0014ec394379bffcf32d99ed5b692aa81cb540f8b7f4","scriptpubkey_asm":"OP_0 OP_PUSHBYTES_20 ec394379bffcf32d99ed5b692aa81cb540f8b7f4","scriptpubkey_type":"v0_p2wpkh","scriptpubkey_address":"tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss","value":9986005},"scriptsig":"","scriptsig_asm":"","witness":["30440220094a366d1c6f06e9eec4a94087634cd0c2780c623f0c131b6e1b60f4b82c4ebf022017204254442375cdfba84440de3b2efe238b0cdc92f4583bad71939a6a49e90901","03068ce1cb09d6c2e0cd08c8638b579fe2bf398d3341eb12c303da1b17dd9e34d1"],"is_coinbase":false,"sequence":4294967293}],"vout":[{"scriptpubkey":"001481a4724816dbd39939e9504fce3cae950f2770db","scriptpubkey_asm":"OP_0 OP_PUSHBYTES_20 81a4724816dbd39939e9504fce3cae950f2770db","scriptpubkey_type":"v0_p2wpkh","scriptpubkey_address":"tb1qsxj8yjqkm0fejw0f2p8uu09wj58jwuxmqakeyk","value":5000000},{"scriptpubkey":"00143e16009af8fc7edac27cd978ef590cc8e8c11240","scriptpubkey_asm":"OP_0 OP_PUSHBYTES_20 3e16009af8fc7edac27cd978ef590cc8e8c11240","scriptpubkey_type":"v0_p2wpkh","scriptpubkey_address":"tb1q8ctqpxhcl3ld4snum9uw7kgver5vzyjqfy5pa5","value":13307200}],"size":518,"weight":1103,"fee":300,"status":{"confirmed":true,"block_height":2418440,"block_hash":"000000000000001137eef2552c39249888eb5f58da3e6b0b8281291903f6304b","block_time":1675179580}}]');
// ------------------------------------------------------------------------
export const sbtcConfig10 = {
	network: 'testnet',
	sbtcWalletAddress: 'tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss',
	fromBtcAddress: 'tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss',
	addressDetails: {
		address: 'tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss',
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
	pegInChangeAmount: 0,
	pegInAmount: 8275453
};
export const sbtcConfig1 = {
	network: 'testnet',
	sbtcWalletAddress: 'tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss',
	fromBtcAddress: 'tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss',
	addressDetails: {
		address: 'tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss',
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
	pegInChangeAmount: 0,
	pegInAmount: 8275453
};
