const SIMNET_CONFIG = {
    VITE_ENVIRONMENT: 'simnet',
    VITE_PUBLIC_APP_NAME: 'sBTC Bridge Simnet',
    VITE_PUBLIC_APP_VERSION: '1.0.0',
    VITE_BRIDGE_WS: 'ws://localhost:3010',
    VITE_NETWORK: 'testnet',
    VITE_SBTC_COORDINATOR: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
    VITE_BRIDGE_API: 'http://localhost:3010/bridge-api/v1',
    VITE_STACKS_API: 'http://localhost:3999',
    VITE_STACKS_EXPLORER: 'http://localhost:8000',
    VITE_BSTREAM_EXPLORER: 'http://localhost:3002',
    VITE_MEMPOOL_EXPLORER: 'http://localhost:18443',
}

const DEVNET_REMOTE_CONFIG = {
    VITE_ENVIRONMENT: 'devnet',
    VITE_PUBLIC_APP_NAME: 'sBTC Bridge Devnet',
    VITE_PUBLIC_APP_VERSION: '1.0.0',
    VITE_NETWORK: 'devnet',
    VITE_SBTC_COORDINATOR: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
    VITE_BRIDGE_WS: 'ws://localhost:3010',
    VITE_BRIDGE_API: 'http://96.126.107.204/:3010/bridge-api/v1',
    VITE_STACKS_API: 'http://96.126.107.204/:3999',
    VITE_STACKS_EXPLORER: 'http://96.126.107.204/:3020',
    VITE_BSTREAM_EXPLORER: 'http://96.126.107.204//api',
    VITE_MEMPOOL_EXPLORER: 'http://96.126.107.204//api',
}

const DEVNET_CONFIG = {
    VITE_ENVIRONMENT: 'devnet',
    VITE_PUBLIC_APP_NAME: 'sBTC Bridge Devnet',
    VITE_PUBLIC_APP_VERSION: '1.0.0',
    VITE_NETWORK: 'devnet',
    VITE_SBTC_COORDINATOR: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
    VITE_BRIDGE_WS: 'ws://localhost:3010',
    VITE_BRIDGE_API: 'http://localhost:3010/bridge-api/v1',
    VITE_STACKS_API: 'http://stacks-api:3999',
    VITE_STACKS_EXPLORER: 'http://stacks-explorer:3020',
    VITE_BSTREAM_EXPLORER: 'http://mempool-web/testnet/api',
    VITE_MEMPOOL_EXPLORER: 'http://mempool-web/testnet/api',
}

const DEV_TESTNET_CONFIG = {
    VITE_ENVIRONMENT: 'devnet',
    VITE_PUBLIC_APP_NAME: 'sBTC Bridge Devnet',
    VITE_PUBLIC_APP_VERSION: '1.0.0',
    VITE_NETWORK: 'testnet',
    VITE_SBTC_COORDINATOR: 'ST1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28G8HXK9G5',
    VITE_BRIDGE_WS: 'ws://localhost:3010',
    VITE_BRIDGE_API: 'https://bridge.sbtc.tech/bridge-api/v1',
    VITE_STACKS_API: 'https://api.testnet.hiro.so',
    VITE_STACKS_EXPLORER: 'https://explorer.hiro.so',
    VITE_BSTREAM_EXPLORER: 'https://mempool.space/testnet',
    VITE_MEMPOOL_EXPLORER: 'https://mempool.space/testnet/api',
}

const TESTNET_CONFIG = {
    VITE_ENVIRONMENT: 'staging',
    VITE_PUBLIC_APP_NAME: 'sBTC Bridge Testnet',
    VITE_PUBLIC_APP_VERSION: '1.0.0',
    VITE_BRIDGE_WS: 'ws://bridge.sbtc.tech',
    VITE_NETWORK: 'testnet',
    VITE_SBTC_COORDINATOR: 'ST1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28G8HXK9G5',
    VITE_BRIDGE_API: 'https://bridge.sbtc.tech/bridge-api/v1',
    VITE_STACKS_API: 'https://api.testnet.hiro.so',
    VITE_STACKS_EXPLORER: 'https://explorer.hiro.so',
    VITE_BSTREAM_EXPLORER: 'https://mempool.space/testnet',
    VITE_MEMPOOL_EXPLORER: 'https://mempool.space/testnet/api',
}

const MAINNET_CONFIG = {
    VITE_ENVIRONMENT: 'production',
    VITE_PUBLIC_APP_NAME: 'sBTC Bridge',
    VITE_PUBLIC_APP_VERSION: '1.0.0',
    VITE_BRIDGE_WS: 'ws://bridge.sbtc.tech',
    VITE_NETWORK: 'mainnet',
    VITE_SBTC_COORDINATOR: 'ST3SPZXMPYVNHH3KF0RXNXVX1WVJ3QM1ZMD5FKWDN',
    VITE_BRIDGE_API: 'https://bridge.sbtc.tech/bridge-api/v1',
    VITE_STACKS_API: 'https://api.hiro.so',
    VITE_STACKS_EXPLORER: 'https://explorer.hiro.so',
    VITE_BSTREAM_EXPLORER: 'https://mempool.space',
    VITE_MEMPOOL_EXPLORER: 'https://mempool.space/api',
}

export let CONFIG = MAINNET_CONFIG;

export function setConfig(network:string) {
    if (!network || network.indexOf('chain=') === -1) network = 'testnet'
    else if (network.indexOf('devenv') > -1) {
        CONFIG = DEVNET_REMOTE_CONFIG;
        return
    }
    else if (network.indexOf('devnet') === -1) network = 'devnet'
    else if (network.indexOf('testnet') === -1) network = 'testnet'
    else if (network.indexOf('mainnet') === -1) network = 'mainnet'
    const mode = import.meta.env.MODE
    if (mode === 'development') {
        if (network === 'testnet' || network === 'mainnet') CONFIG = DEV_TESTNET_CONFIG;
        else CONFIG = DEVNET_CONFIG;
        return;
    } else if (mode === 'simnet') {
        CONFIG = SIMNET_CONFIG;
        return;
    }
    //if (!mode) mode = 'testnet'
    //console.log('import.meta.env.MODE: ' + mode);
	if (network === 'devnet') CONFIG = DEVNET_CONFIG;
	else if (network.indexOf('testnet') > -1) CONFIG = TESTNET_CONFIG;
	else if (network.indexOf('simnet') > -1) CONFIG = SIMNET_CONFIG;
	else if (network.indexOf('devnet') > -1) CONFIG = DEVNET_CONFIG;
	else CONFIG = MAINNET_CONFIG
    if (import.meta.env.MODE === 'linode-staging') {
        CONFIG.VITE_BRIDGE_API = 'https://bridge.sbtc.tech/bridge-api/v1'
    }
}

export function isSimnet() {
    return CONFIG.VITE_ENVIRONMENT === 'simnet'
  }
  