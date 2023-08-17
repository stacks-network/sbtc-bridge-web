const SIMNET_CONFIG = {
    VITE_PUBLIC_APP_NAME: 'sBTC Bridge Simnet',
    VITE_PUBLIC_APP_VERSION: '1.0.0',
    VITE_BRIDGE_WS: 'ws://bridge.stx.eco',
    VITE_URI_BRIDGE: 'https://bridge.stx.eco',
    VITE_URI_SIGN: 'https://sign.stx.eco',
    VITE_URI_VOTE: 'https://vote.stx.eco',
    VITE_ORIGIN: 'https://bridge.stx.eco',
    VITE_NETWORK: 'testnet',
    VITE_SBTC_WALLET: 'tb1q6zlpyrzvzjcrf6dlsctcrh9yl3dwfktsw0nclq',
    VITE_SBTC_CONTRACT_ID: 'ST306HDPY54T81RZ7A9NGA2F03B8NRGW6Y59ZRZSD.faint-tan-cobra',
    VITE_SBTC_COORDINATOR: 'ST2BJA4JYFJ7SDMNFJZ9TJ3GB80P9Z80ADNF2R2AG',
    VITE_BRIDGE_API: 'http://localhost:3010/bridge-api/v1',
    VITE_SIGNER_API: 'http://localhost:3010/signer-api/v1',
    VITE_STACKS_API: 'http://localhost:3999',
    VITE_STACKS_EXPLORER: 'http://localhost:8000',
    VITE_BSTREAM_EXPLORER: 'http://localhost:3002',
    VITE_MEMPOOL_EXPLORER: 'http://localhost:18443',
    VITE_BLOCKCYPHER_EXPLORER: 'http://localhost:3002',
    VITE_BTC_SCHNORR_KEY_REVEAL: '93a7e5ecde5eccc4fd858dfcf7d92011eade103600de0e8122d6fc5ffedf962d',
    VITE_BTC_SCHNORR_KEY_RECLAIM: 'eb80b7f63eb74a215b6947b479e154a83cf429691dceab272c405b1614efb98c',
    VITE_BTC_SCHNORR_KEY_ORACLE: '0d7b49bc4864057b087108f81a57da7178cfbeb85a09c8957b64b9840e368b42',
}

const TESTNET_CONFIG = {
    VITE_PUBLIC_APP_NAME: 'sBTC Bridge Testnet',
    VITE_PUBLIC_APP_VERSION: '1.0.0',
    VITE_BRIDGE_WS: 'ws://bridge.stx.eco',
    VITE_URI_BRIDGE: 'https://bridge.stx.eco',
    VITE_URI_SIGN: 'https://sign.stx.eco',
    VITE_URI_VOTE: 'https://vote.stx.eco',
    VITE_ORIGIN: 'https://sbtc.world',
    VITE_NETWORK: 'testnet',
    VITE_SBTC_WALLET: 'tb1q6zlpyrzvzjcrf6dlsctcrh9yl3dwfktsw0nclq',
    VITE_SBTC_CONTRACT_ID: 'ST306HDPY54T81RZ7A9NGA2F03B8NRGW6Y59ZRZSD.faint-tan-cobra',
    VITE_SBTC_COORDINATOR: 'ST2BJA4JYFJ7SDMNFJZ9TJ3GB80P9Z80ADNF2R2AG',
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
    VITE_PUBLIC_APP_NAME: 'sBTC Bridge',
    VITE_PUBLIC_APP_VERSION: '1.0.0',
    VITE_BRIDGE_WS: 'ws://bridge.stx.eco',
    VITE_URI_BRIDGE: 'https://bridge.stx.eco',
    VITE_URI_SIGN: 'https://sign.stx.eco',
    VITE_URI_VOTE: 'https://vote.stx.eco',
    VITE_ORIGIN: 'https://sbtc.world',
    VITE_NETWORK: 'mainnet',
    VITE_SBTC_WALLET: 'tb1q6ue638m4t5knwxl4kwhwyuffttlp0ffee3zn3e',
    VITE_SBTC_CONTRACT_ID: 'ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN.sky-blue-elephant',
    VITE_SBTC_COORDINATOR: 'ST2BJA4JYFJ7SDMNFJZ9TJ3GB80P9Z80ADNF2R2AG',
    //VITE_BRIDGE_API: 'https://api.sbtc.world/bridge-api/v1',
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

const DEVNET_CONFIG = {
    VITE_PUBLIC_APP_NAME: 'sBTC Bridge Devnet',
    VITE_PUBLIC_APP_VERSION: '1.0.0',
    VITE_URI_BRIDGE: 'http://localhost:8080',
    VITE_URI_SIGN: 'http://localhost:8081',
    VITE_URI_VOTE: 'http://localhost:8082',
    VITE_ORIGIN: 'https://sbtc.world',
    VITE_NETWORK: 'testnet',
    VITE_SBTC_WALLET: 'tb1q6zlpyrzvzjcrf6dlsctcrh9yl3dwfktsw0nclq',
    VITE_SBTC_COORDINATOR: 'ST2BJA4JYFJ7SDMNFJZ9TJ3GB80P9Z80ADNF2R2AG',
    VITE_SBTC_CONTRACT_ID: 'ST306HDPY54T81RZ7A9NGA2F03B8NRGW6Y59ZRZSD.faint-tan-cobra',
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

export let CONFIG = MAINNET_CONFIG;

export function setConfig(search:string) {
    //console.log('setConfig: ' + search);
    const mode = import.meta.env.MODE
    console.log('import.meta.env.MODE: ' + mode);
	if (mode === 'simnet') CONFIG = SIMNET_CONFIG;
	else if (search.indexOf('testnet') > -1) CONFIG = TESTNET_CONFIG;
	else if (search.indexOf('simnet') > -1) CONFIG = SIMNET_CONFIG;
	else if (search.indexOf('devnet') > -1) CONFIG = DEVNET_CONFIG;
	else CONFIG = MAINNET_CONFIG
    if (import.meta.env.MODE === 'linode-staging') {
        CONFIG.VITE_BRIDGE_API = 'https://bridge.stx.eco/bridge-api/v1'
    } else if (import.meta.env.MODE === 'development') {
        CONFIG.VITE_BRIDGE_API = 'https://bridge.stx.eco/bridge-api/v1'
        CONFIG.VITE_SIGNER_API = 'https://bridge.stx.eco/signer-api/v1'
        CONFIG.VITE_URI_BRIDGE = 'http://localhost:8080'
        CONFIG.VITE_URI_SIGN = 'http://localhost:8081'
        CONFIG.VITE_URI_VOTE = 'http://localhost:8082'
    
        // toggle depending on location / ip address etc
        //CONFIG.VITE_BRIDGE_WS = 'ws://localhost:3010'
        //CONFIG.VITE_BRIDGE_API = 'http://localhost:3010/bridge-api/v1'
        //CONFIG.VITE_SIGNER_API: 'http://localhost:4010/signer-api/v1',
    }
    if (import.meta.env.MODE === 'development') {
        CONFIG.VITE_BTC_SCHNORR_KEY_REVEAL = '93a7e5ecde5eccc4fd858dfcf7d92011eade103600de0e8122d6fc5ffedf962d';
        CONFIG.VITE_BTC_SCHNORR_KEY_RECLAIM = 'eb80b7f63eb74a215b6947b479e154a83cf429691dceab272c405b1614efb98c';
        CONFIG.VITE_BTC_SCHNORR_KEY_ORACLE = '0d7b49bc4864057b087108f81a57da7178cfbeb85a09c8957b64b9840e368b42';
    }
}

