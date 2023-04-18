import { w as writable } from "./index.88c4ce8e.js";
import { aa as get_store_value } from "./index.605ac338.js";
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
  pegIn: true,
  loggedIn: false,
  balance: { balance: 0, address: "" },
  sigData: void 0,
  sbtcContractData: {},
  pegInTransaction: void 0,
  pegOutTransaction: void 0,
  userSettings: {
    useOpDrop: true,
    debugMode: false
  }
};
const sbtcConfig = persisted("sbtcConfig", defaultSbtcConfig);
export {
  defaultSbtcConfig as d,
  sbtcConfig as s
};