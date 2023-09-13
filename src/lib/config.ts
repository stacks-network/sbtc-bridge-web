const SIMNET_CONFIG = {
    VITE_ENVIRONMENT: 'simnet',
    VITE_PUBLIC_APP_NAME: 'sBTC Bridge Simnet',
    VITE_PUBLIC_APP_VERSION: '1.0.0',
    VITE_BRIDGE_WS: 'ws://localhost:3010',
    VITE_URI_BRIDGE: 'http://localhost:8080',
    VITE_URI_SIGN: 'http://localhost:8081',
    VITE_ORIGIN: 'http://localhost:8080',
    VITE_NETWORK: 'testnet',
    VITE_SBTC_CONTRACT_ID: 'ST1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28G8HXK9G5.related-pink-tick',
    VITE_SBTC_COORDINATOR: 'ST1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28G8HXK9G5',
    VITE_BRIDGE_API: 'http://localhost:3010/bridge-api/v1',
    VITE_SIGNER_API: 'http://localhost:4010/signer-api/v1',
    VITE_STACKS_API: 'http://localhost:3999',
    VITE_STACKS_EXPLORER: 'http://localhost:8000',
    VITE_BSTREAM_EXPLORER: 'http://localhost:3002',
    VITE_MEMPOOL_EXPLORER: 'http://localhost:18443',
    VITE_BLOCKCYPHER_EXPLORER: 'http://localhost:3002',
    VITE_BTC_SCHNORR_KEY_REVEAL: '93a7e5ecde5eccc4fd858dfcf7d92011eade103600de0e8122d6fc5ffedf962d',
    VITE_BTC_SCHNORR_KEY_RECLAIM: 'eb80b7f63eb74a215b6947b479e154a83cf429691dceab272c405b1614efb98c',
    VITE_BTC_SCHNORR_KEY_ORACLE: '0d7b49bc4864057b087108f81a57da7178cfbeb85a09c8957b64b9840e368b42',
}

const DEVNET_CONFIG = {
    VITE_ENVIRONMENT: 'devnet',
    VITE_PUBLIC_APP_NAME: 'sBTC Bridge Devnet',
    VITE_PUBLIC_APP_VERSION: '1.0.0',
    VITE_URI_BRIDGE: 'http://localhost:8080',
    VITE_URI_SIGN: 'http://localhost:8081',
    VITE_ORIGIN: 'https://sbtc.tech',
    VITE_NETWORK: 'testnet',
    VITE_SBTC_COORDINATOR: 'ST1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28G8HXK9G5',
    VITE_SBTC_CONTRACT_ID: 'ST1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28G8HXK9G5.related-pink-tick',
    VITE_BRIDGE_WS: 'ws://localhost:3010',
    VITE_BRIDGE_API: 'http://localhost:3010/bridge-api/v1',
    VITE_SIGNER_API: 'http://localhost:3010/signer-api/v1',
    VITE_STACKS_API: 'http://localhost:3999',
    VITE_STACKS_EXPLORER: 'http://localhost:8000',
    VITE_BSTREAM_EXPLORER: 'https://mempool.space/testnet',
    VITE_MEMPOOL_EXPLORER: 'https://mempool.space/testnet/api',
    VITE_BLOCKCYPHER_EXPLORER: 'https://api.blockcypher.com/v1/btc/test3',
    VITE_BTC_SCHNORR_KEY_REVEAL: 'secret',
    VITE_BTC_SCHNORR_KEY_RECLAIM: 'secret',
    VITE_BTC_SCHNORR_KEY_ORACLE: 'secret',
}

const TESTNET_CONFIG = {
    VITE_ENVIRONMENT: 'staging',
    VITE_PUBLIC_APP_NAME: 'sBTC Bridge Testnet',
    VITE_PUBLIC_APP_VERSION: '1.0.0',
    VITE_BRIDGE_WS: 'ws://bridge.stx.eco',
    VITE_URI_BRIDGE: 'https://bridge.stx.eco',
    VITE_URI_SIGN: 'https://sign.stx.eco',
    VITE_ORIGIN: 'https://sbtc.tech',
    VITE_NETWORK: 'testnet',
    VITE_SBTC_CONTRACT_ID: 'ST1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28G8HXK9G5.related-pink-tick',
    VITE_SBTC_COORDINATOR: 'ST1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28G8HXK9G5',
    VITE_BRIDGE_API: 'https://bridge.stx.eco/bridge-api/v1',
    VITE_SIGNER_API: 'https://bridge.stx.eco/signer-api/v1',
    VITE_STACKS_API: 'https://api.testnet.hiro.so',
    VITE_STACKS_EXPLORER: 'https://explorer.hiro.so',
    VITE_BSTREAM_EXPLORER: 'https://mempool.space/testnet',
    VITE_MEMPOOL_EXPLORER: 'https://mempool.space/testnet/api',
    VITE_BLOCKCYPHER_EXPLORER: 'https://api.blockcypher.com/v1/btc/test3',
    VITE_BTC_SCHNORR_KEY_REVEAL: 'secret',
    VITE_BTC_SCHNORR_KEY_RECLAIM: 'secret',
    VITE_BTC_SCHNORR_KEY_ORACLE: 'secret',
}

const MAINNET_CONFIG = {
    VITE_ENVIRONMENT: 'production',
    VITE_PUBLIC_APP_NAME: 'sBTC Bridge',
    VITE_PUBLIC_APP_VERSION: '1.0.0',
    VITE_BRIDGE_WS: 'ws://bridge.stx.eco',
    VITE_URI_BRIDGE: 'https://bridge.stx.eco',
    VITE_URI_SIGN: 'https://sign.stx.eco',
    VITE_ORIGIN: 'https://sbtc.tech',
    VITE_NETWORK: 'mainnet',
    VITE_SBTC_CONTRACT_ID: 'ST3SPZXMPYVNHH3KF0RXNXVX1WVJ3QM1ZMD5FKWDN.romeo_mjc-3',
    VITE_SBTC_COORDINATOR: 'ST3SPZXMPYVNHH3KF0RXNXVX1WVJ3QM1ZMD5FKWDN',
    VITE_BRIDGE_API: 'https://bridge.stx.eco/bridge-api/v1',
    VITE_SIGNER_API: 'https://bridge.stx.eco/signer-api/v1',
    VITE_STACKS_API: 'https://api.hiro.so',
    VITE_STACKS_EXPLORER: 'https://explorer.hiro.so',
    VITE_BSTREAM_EXPLORER: 'https://mempool.space',
    VITE_MEMPOOL_EXPLORER: 'https://mempool.space/api',
    VITE_BLOCKCYPHER_EXPLORER: 'https://api.blockcypher.com/v1/btc',
    VITE_BTC_SCHNORR_KEY_REVEAL: 'secret',
    VITE_BTC_SCHNORR_KEY_RECLAIM: 'secret',
    VITE_BTC_SCHNORR_KEY_ORACLE: 'secret',
}

export let CONFIG = MAINNET_CONFIG;

export function setConfig(search:string) {
    let mode = import.meta.env.MODE
    if (!mode) mode = 'testnet'
    //console.log('import.meta.env.MODE: ' + mode);
	if (mode === 'simnet') CONFIG = SIMNET_CONFIG;
	else if (mode === 'development') CONFIG = DEVNET_CONFIG;
	else if (search.indexOf('testnet') > -1) CONFIG = TESTNET_CONFIG;
	else if (search.indexOf('simnet') > -1) CONFIG = SIMNET_CONFIG;
	else if (search.indexOf('devnet') > -1) CONFIG = DEVNET_CONFIG;
	else CONFIG = MAINNET_CONFIG
    if (import.meta.env.MODE === 'linode-staging') {
        CONFIG.VITE_BRIDGE_API = 'https://bridge.stx.eco/bridge-api/v1'
    }
    if (mode === 'development') {
        CONFIG.VITE_BTC_SCHNORR_KEY_REVEAL = '93a7e5ecde5eccc4fd858dfcf7d92011eade103600de0e8122d6fc5ffedf962d';
        CONFIG.VITE_BTC_SCHNORR_KEY_RECLAIM = 'eb80b7f63eb74a215b6947b479e154a83cf429691dceab272c405b1614efb98c';
        CONFIG.VITE_BTC_SCHNORR_KEY_ORACLE = '0d7b49bc4864057b087108f81a57da7178cfbeb85a09c8957b64b9840e368b42';
    }
}

export function isSimnet() {
    return CONFIG.VITE_ENVIRONMENT === 'simnet'
  }
  