import { Z as get_store_value } from './index.b12fea3b.js';
import { w as writable } from './index.059b192c.js';

// index.ts
var stores = {};
function getStorage(type) {
  return type === "local" ? localStorage : sessionStorage;
}
function persisted(key, initialValue, options) {
  const serializer = (options == null ? void 0 : options.serializer) ?? JSON;
  const storageType = (options == null ? void 0 : options.storage) ?? "local";
  const browser = typeof window !== "undefined" && typeof document !== "undefined";
  function updateStorage(key2, value) {
    if (!browser)
      return;
    getStorage(storageType).setItem(key2, serializer.stringify(value));
  }
  if (!stores[key]) {
    const store = writable(initialValue, (set2) => {
      const json = browser ? getStorage(storageType).getItem(key) : null;
      if (json) {
        set2(serializer.parse(json));
      }
      if (browser) {
        const handleStorage = (event) => {
          if (event.key === key)
            set2(event.newValue ? serializer.parse(event.newValue) : null);
        };
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
      }
    });
    const { subscribe, set } = store;
    stores[key] = {
      set(value) {
        updateStorage(key, value);
        set(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        updateStorage(key, value);
        set(value);
      },
      subscribe
    };
  }
  return stores[key];
}

const defaultSbtcConfig = {
  network: "mainnet",
  feeInfo: {
    high_fee_per_kb: 48783,
    low_fee_per_kb: 2e4,
    medium_fee_per_kb: 30998
  },
  feeCalc: {
    pegInFeeCalc: {
      feeToApply: 2e4,
      pegInAmount: 0,
      high: {
        change: 0,
        fee: 5e5
      },
      medium: {
        change: 0,
        fee: 5e5
      },
      low: {
        change: 0,
        fee: 5e5
      }
    },
    pegOutFeeCalc: {
      feeToApply: 2e4,
      pegOutAmount: 0,
      DUST_AMOUNT: 500,
      high: {
        change: 0,
        fee: 5e5
      },
      medium: {
        change: 0,
        fee: 5e5
      },
      low: {
        change: 0,
        fee: 5e5
      }
    }
  },
  pegIn: true,
  balance: { balance: 0, address: "" },
  addressDetails: {
    address: "",
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
  sigData: void 0,
  sbtcContractData: void 0
};

const sbtcConfig = persisted("sbtcConfig", defaultSbtcConfig);

export { defaultSbtcConfig as d, sbtcConfig as s };
