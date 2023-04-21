import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, U as validate_store, V as component_subscribe, v as validate_slots, p as element, y as text, q as claim_element, r as children, z as claim_text, l as detach_dev, x as add_location, g as insert_hydration_dev, O as append_hydration_dev, A as set_data_dev, Z as noop } from "./index.605ac338.js";
import { s as sbtcConfig } from "./stores.d1299e51.js";
const file = "src/lib/components/common/SbtcWalletDisplay.svelte";
function create_fragment(ctx) {
  let span;
  let t0;
  let t1_value = (
    /*$sbtcConfig*/
    ctx[0].sbtcContractData.sbtcWalletAddress + ""
  );
  let t1;
  const block = {
    c: function create() {
      span = element("span");
      t0 = text("sBTC Wallet: ");
      t1 = text(t1_value);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {});
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "sBTC Wallet: ");
      t1 = claim_text(span_nodes, t1_value);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(span, file, 3, 0, 74);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, span, anchor);
      append_hydration_dev(span, t0);
      append_hydration_dev(span, t1);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*$sbtcConfig*/
      1 && t1_value !== (t1_value = /*$sbtcConfig*/
      ctx2[0].sbtcContractData.sbtcWalletAddress + ""))
        set_data_dev(t1, t1_value);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance($$self, $$props, $$invalidate) {
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(0, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("SbtcWalletDisplay", slots, []);
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<SbtcWalletDisplay> was created with unknown prop '${key}'`);
  });
  $$self.$capture_state = () => ({ sbtcConfig, $sbtcConfig });
  return [$sbtcConfig];
}
class SbtcWalletDisplay extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SbtcWalletDisplay",
      options,
      id: create_fragment.name
    });
  }
}
export {
  SbtcWalletDisplay as S
};
