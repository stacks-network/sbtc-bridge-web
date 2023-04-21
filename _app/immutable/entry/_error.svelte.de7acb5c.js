import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, U as validate_store, V as component_subscribe, v as validate_slots, p as element, y as text, c as space, q as claim_element, r as children, z as claim_text, l as detach_dev, f as claim_space, u as attr_dev, x as add_location, g as insert_hydration_dev, O as append_hydration_dev, Z as noop, A as set_data_dev } from "../chunks/index.605ac338.js";
import { p as page } from "../chunks/stores.b4802465.js";
const _error_svelte_svelte_type_style_lang = "";
const file = "src/routes/+error.svelte";
function create_if_block(ctx) {
  var _a, _b, _c;
  let div;
  let t;
  let if_block0 = (
    /*$page*/
    ((_a = ctx[0]) == null ? void 0 : _a.status) && create_if_block_2(ctx)
  );
  let if_block1 = (
    /*$page*/
    ((_c = (_b = ctx[0]) == null ? void 0 : _b.error) == null ? void 0 : _c.message) && create_if_block_1(ctx)
  );
  const block = {
    c: function create() {
      div = element("div");
      if (if_block0)
        if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (if_block0)
        if_block0.l(div_nodes);
      t = claim_space(div_nodes);
      if (if_block1)
        if_block1.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "mt-4 border-y-2");
      add_location(div, file, 7, 8, 183);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      if (if_block0)
        if_block0.m(div, null);
      append_hydration_dev(div, t);
      if (if_block1)
        if_block1.m(div, null);
    },
    p: function update(ctx2, dirty) {
      var _a2, _b2, _c2;
      if (
        /*$page*/
        (_a2 = ctx2[0]) == null ? void 0 : _a2.status
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_2(ctx2);
          if_block0.c();
          if_block0.m(div, t);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*$page*/
        (_c2 = (_b2 = ctx2[0]) == null ? void 0 : _b2.error) == null ? void 0 : _c2.message
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_1(ctx2);
          if_block1.c();
          if_block1.m(div, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(7:4) {#if $page?.error}",
    ctx
  });
  return block;
}
function create_if_block_2(ctx) {
  var _a;
  let p;
  let t0;
  let t1_value = (
    /*$page*/
    ((_a = ctx[0]) == null ? void 0 : _a.status) + ""
  );
  let t1;
  const block = {
    c: function create() {
      p = element("p");
      t0 = text("Page status: ");
      t1 = text(t1_value);
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "Page status: ");
      t1 = claim_text(p_nodes, t1_value);
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p, file, 9, 16, 261);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, p, anchor);
      append_hydration_dev(p, t0);
      append_hydration_dev(p, t1);
    },
    p: function update(ctx2, dirty) {
      var _a2;
      if (dirty & /*$page*/
      1 && t1_value !== (t1_value = /*$page*/
      ((_a2 = ctx2[0]) == null ? void 0 : _a2.status) + ""))
        set_data_dev(t1, t1_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(9:12) {#if $page?.status}",
    ctx
  });
  return block;
}
function create_if_block_1(ctx) {
  var _a, _b;
  let p;
  let t0;
  let t1_value = (
    /*$page*/
    ((_b = (_a = ctx[0]) == null ? void 0 : _a.error) == null ? void 0 : _b.message) + ""
  );
  let t1;
  const block = {
    c: function create() {
      p = element("p");
      t0 = text("Error message: ");
      t1 = text(t1_value);
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "Error message: ");
      t1 = claim_text(p_nodes, t1_value);
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p, file, 12, 16, 371);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, p, anchor);
      append_hydration_dev(p, t0);
      append_hydration_dev(p, t1);
    },
    p: function update(ctx2, dirty) {
      var _a2, _b2;
      if (dirty & /*$page*/
      1 && t1_value !== (t1_value = /*$page*/
      ((_b2 = (_a2 = ctx2[0]) == null ? void 0 : _a2.error) == null ? void 0 : _b2.message) + ""))
        set_data_dev(t1, t1_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(12:12) {#if $page?.error?.message}",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  var _a;
  let section;
  let h1;
  let t0;
  let t1;
  let if_block = (
    /*$page*/
    ((_a = ctx[0]) == null ? void 0 : _a.error) && create_if_block(ctx)
  );
  const block = {
    c: function create() {
      section = element("section");
      h1 = element("h1");
      t0 = text("Unable to find that one!");
      t1 = space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      h1 = claim_element(section_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Unable to find that one!");
      h1_nodes.forEach(detach_dev);
      t1 = claim_space(section_nodes);
      if (if_block)
        if_block.l(section_nodes);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h1, "class", "s-QcQDAQA3vV4F");
      add_location(h1, file, 5, 4, 118);
      attr_dev(section, "class", "bg-dark text-white text-center pt-5 s-QcQDAQA3vV4F");
      add_location(section, file, 4, 0, 60);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, section, anchor);
      append_hydration_dev(section, h1);
      append_hydration_dev(h1, t0);
      append_hydration_dev(section, t1);
      if (if_block)
        if_block.m(section, null);
    },
    p: function update(ctx2, [dirty]) {
      var _a2;
      if (
        /*$page*/
        (_a2 = ctx2[0]) == null ? void 0 : _a2.error
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(section, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(section);
      if (if_block)
        if_block.d();
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
class Error extends SvelteComponentDev {
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
}
export {
  Error as default
};
