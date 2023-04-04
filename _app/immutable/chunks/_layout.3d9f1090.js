import { f as fetchSbtcData } from "./bridge_api.fe1b21a1.js";
const prerender = false;
const ssr = false;
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
const _layout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  load,
  prerender,
  ssr
}, Symbol.toStringTag, { value: "Module" }));
export {
  _layout as _,
  load as l,
  prerender as p,
  ssr as s
};
