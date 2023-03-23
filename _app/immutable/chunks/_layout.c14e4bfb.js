import { f as fetchSbtcData } from './bridge_api.2c2497c7.js';

const prerender = false;
async function load() {
  try {
    const sbtcContractData = await fetchSbtcData();
    return {
      sbtcContractData: JSON.parse(sbtcContractData)
    };
  } catch (err) {
    console.log("LayoutLoad Error: ", err);
    return {
      sbtcContractData: "unknown at present"
    };
  }
}

const _layout = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    load,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

export { _layout as _, load as l, prerender as p };
