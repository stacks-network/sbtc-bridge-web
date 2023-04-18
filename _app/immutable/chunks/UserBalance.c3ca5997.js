import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, U as validate_store, V as component_subscribe, v as validate_slots, c as space, p as element, y as text, f as claim_space, q as claim_element, r as children, z as claim_text, l as detach_dev, x as add_location, g as insert_hydration_dev, O as append_hydration_dev, A as set_data_dev, Z as noop, u as attr_dev } from "./index.605ac338.js";
import { s as sbtcConfig } from "./stores.d1299e51.js";
import { f as fmtSatoshiToBitcoin } from "./utils.41e44eab.js";
const file = "src/lib/components/common/UserBalance.svelte";
function create_if_block(ctx) {
  let span;
  let t_value = (
    /*$sbtcConfig*/
    ctx[1].balance.address + ""
  );
  let t;
  const block = {
    c: function create() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "ub-address");
      add_location(span, file, 6, 0, 174);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, span, anchor);
      append_hydration_dev(span, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*$sbtcConfig*/
      2 && t_value !== (t_value = /*$sbtcConfig*/
      ctx2[1].balance.address + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(6:0) {#if showAddress}",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  var _a, _b;
  let t0;
  let span;
  let t1;
  let t2_value = fmtSatoshiToBitcoin(
    /*$sbtcConfig*/
    ((_b = (_a = ctx[1]) == null ? void 0 : _a.balance) == null ? void 0 : _b.balance) || 0
  ) + "";
  let t2;
  let t3;
  let if_block = (
    /*showAddress*/
    ctx[0] && create_if_block(ctx)
  );
  const block = {
    c: function create() {
      if (if_block)
        if_block.c();
      t0 = space();
      span = element("span");
      t1 = text("Bal. ");
      t2 = text(t2_value);
      t3 = text(" sBTC");
      this.h();
    },
    l: function claim(nodes) {
      if (if_block)
        if_block.l(nodes);
      t0 = claim_space(nodes);
      span = claim_element(nodes, "SPAN", {});
      var span_nodes = children(span);
      t1 = claim_text(span_nodes, "Bal. ");
      t2 = claim_text(span_nodes, t2_value);
      t3 = claim_text(span_nodes, " sBTC");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(span, file, 10, 0, 248);
    },
    m: function mount(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration_dev(target, t0, anchor);
      insert_hydration_dev(target, span, anchor);
      append_hydration_dev(span, t1);
      append_hydration_dev(span, t2);
      append_hydration_dev(span, t3);
    },
    p: function update(ctx2, [dirty]) {
      var _a2, _b2;
      if (
        /*showAddress*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(t0.parentNode, t0);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & /*$sbtcConfig*/
      2 && t2_value !== (t2_value = fmtSatoshiToBitcoin(
        /*$sbtcConfig*/
        ((_b2 = (_a2 = ctx2[1]) == null ? void 0 : _a2.balance) == null ? void 0 : _b2.balance) || 0
      ) + ""))
        set_data_dev(t2, t2_value);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach_dev(t0);
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
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(1, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("UserBalance", slots, []);
  let { showAddress = false } = $$props;
  const writable_props = ["showAddress"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<UserBalance> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("showAddress" in $$props2)
      $$invalidate(0, showAddress = $$props2.showAddress);
  };
  $$self.$capture_state = () => ({
    sbtcConfig,
    fmtSatoshiToBitcoin,
    showAddress,
    $sbtcConfig
  });
  $$self.$inject_state = ($$props2) => {
    if ("showAddress" in $$props2)
      $$invalidate(0, showAddress = $$props2.showAddress);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [showAddress, $sbtcConfig];
}
class UserBalance extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { showAddress: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "UserBalance",
      options,
      id: create_fragment.name
    });
  }
  get showAddress() {
    throw new Error("<UserBalance>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set showAddress(value) {
    throw new Error("<UserBalance>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
export {
  UserBalance as U
};
