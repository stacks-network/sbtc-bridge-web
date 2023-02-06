import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, n as element, x as text, c as space, p as claim_element, q as children, y as claim_text, l as detach_dev, f as claim_space, r as attr_dev, w as add_location, g as insert_hydration_dev, K as append_hydration_dev, I as noop, v as validate_slots } from "../../../chunks/index-5e67b194.js";
import { P as PegIn, a as PegOut, __tla as __tla_0 } from "../../../chunks/PegOut-ef473937.js";
import { s as sbtcConfig } from "../../../chunks/index-077a78a4.js";
let Page;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const _page_svelte_svelte_type_style_lang = "";
  const file = "src/routes/history/+page.svelte";
  function create_fragment(ctx) {
    let section;
    let div1;
    let div0;
    let h1;
    let span;
    let t0;
    let t1;
    let t2;
    let h2;
    let t3;
    const block = {
      c: function create() {
        section = element("section");
        div1 = element("div");
        div0 = element("div");
        h1 = element("h1");
        span = element("span");
        t0 = text("Transaction");
        t1 = text(" History");
        t2 = space();
        h2 = element("h2");
        t3 = text("BTC to sBTC - no middle men!");
        this.h();
      },
      l: function claim(nodes) {
        section = claim_element(nodes, "SECTION", {
          class: true
        });
        var section_nodes = children(section);
        div1 = claim_element(section_nodes, "DIV", {
          class: true
        });
        var div1_nodes = children(div1);
        div0 = claim_element(div1_nodes, "DIV", {
          class: true
        });
        var div0_nodes = children(div0);
        h1 = claim_element(div0_nodes, "H1", {
          class: true
        });
        var h1_nodes = children(h1);
        span = claim_element(h1_nodes, "SPAN", {
          class: true
        });
        var span_nodes = children(span);
        t0 = claim_text(span_nodes, "Transaction");
        span_nodes.forEach(detach_dev);
        t1 = claim_text(h1_nodes, " History");
        h1_nodes.forEach(detach_dev);
        t2 = claim_space(div0_nodes);
        h2 = claim_element(div0_nodes, "H2", {
          class: true
        });
        var h2_nodes = children(h2);
        t3 = claim_text(h2_nodes, "BTC to sBTC - no middle men!");
        h2_nodes.forEach(detach_dev);
        div0_nodes.forEach(detach_dev);
        div1_nodes.forEach(detach_dev);
        section_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(span, "class", "strokeme-info");
        add_location(span, file, 8, 26, 296);
        attr_dev(h1, "class", "text-info s-WmfxB9smyTUP");
        add_location(h1, file, 8, 4, 274);
        attr_dev(h2, "class", "text-info mb-3");
        add_location(h2, file, 9, 4, 360);
        attr_dev(div0, "class", "card-width");
        add_location(div0, file, 7, 3, 245);
        attr_dev(div1, "class", "my-4 p-4");
        add_location(div1, file, 6, 2, 219);
        attr_dev(section, "class", "bg-dark s-WmfxB9smyTUP");
        add_location(section, file, 5, 1, 191);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, section, anchor);
        append_hydration_dev(section, div1);
        append_hydration_dev(div1, div0);
        append_hydration_dev(div0, h1);
        append_hydration_dev(h1, span);
        append_hydration_dev(span, t0);
        append_hydration_dev(h1, t1);
        append_hydration_dev(div0, t2);
        append_hydration_dev(div0, h2);
        append_hydration_dev(h2, t3);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(section);
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
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("Page", slots, []);
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
        console.warn(`<Page> was created with unknown prop '${key}'`);
    });
    $$self.$capture_state = () => ({
      PegIn,
      PegOut,
      sbtcConfig
    });
    return [];
  }
  Page = class Page extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance, create_fragment, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "Page",
        options,
        id: create_fragment.name
      });
    }
  };
});
export {
  __tla,
  Page as default
};
