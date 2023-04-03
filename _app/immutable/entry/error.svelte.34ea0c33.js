import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, G as validate_store, H as component_subscribe, v as validate_slots, p as element, y as text, c as space, q as claim_element, r as children, z as claim_text, l as detach_dev, f as claim_space, x as add_location, g as insert_hydration_dev, J as append_hydration_dev, A as set_data_dev, I as noop } from "../chunks/index.0c92228d.js";
import { s as stores } from "../chunks/singletons.516f5833.js";
const getStores = () => {
  const stores$1 = stores;
  return {
    page: {
      subscribe: stores$1.page.subscribe
    },
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    updated: stores$1.updated
  };
};
const page = {
  /** @param {(value: any) => void} fn */
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const file = "node_modules/@sveltejs/kit/src/runtime/components/error.svelte";
function create_fragment(ctx) {
  var _a;
  let h1;
  let t0_value = (
    /*$page*/
    ctx[0].status + ""
  );
  let t0;
  let t1;
  let p;
  let t2_value = (
    /*$page*/
    ((_a = ctx[0].error) == null ? void 0 : _a.message) + ""
  );
  let t2;
  const block = {
    c: function create() {
      h1 = element("h1");
      t0 = text(t0_value);
      t1 = space();
      p = element("p");
      t2 = text(t2_value);
      this.h();
    },
    l: function claim(nodes) {
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, t0_value);
      h1_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, t2_value);
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(h1, file, 4, 0, 57);
      add_location(p, file, 5, 0, 81);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, h1, anchor);
      append_hydration_dev(h1, t0);
      insert_hydration_dev(target, t1, anchor);
      insert_hydration_dev(target, p, anchor);
      append_hydration_dev(p, t2);
    },
    p: function update(ctx2, [dirty]) {
      var _a2;
      if (dirty & /*$page*/
      1 && t0_value !== (t0_value = /*$page*/
      ctx2[0].status + ""))
        set_data_dev(t0, t0_value);
      if (dirty & /*$page*/
      1 && t2_value !== (t2_value = /*$page*/
      ((_a2 = ctx2[0].error) == null ? void 0 : _a2.message) + ""))
        set_data_dev(t2, t2_value);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(h1);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(p);
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
  let $page;
  validate_store(page, "page");
  component_subscribe($$self, page, ($$value) => $$invalidate(0, $page = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Error", slots, []);
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Error> was created with unknown prop '${key}'`);
  });
  $$self.$capture_state = () => ({ page, $page });
  return [$page];
}
let Error$1 = class Error extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Error",
      options,
      id: create_fragment.name
    });
  }
};
export {
  Error$1 as default
};
