import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, U as validate_store, V as component_subscribe, v as validate_slots, p as element, y as text, c as space, q as claim_element, r as children, z as claim_text, l as detach_dev, f as claim_space, u as attr_dev, x as add_location, w as set_style, g as insert_hydration_dev, O as append_hydration_dev, W as listen_dev, X as prevent_default, Z as noop, Y as run_all, _ as src_url_equal } from "../chunks/index.605ac338.js";
import { s as stx_eco_wallet_on, a as stx_eco_wallet_off } from "../chunks/stx_eco_wallet_off.86fb394e.js";
import { s as sbtcConfig } from "../chunks/stores.c4e5deb1.js";
const _page_svelte_svelte_type_style_lang = "";
const file = "src/routes/settings/+page.svelte";
function create_else_block_3(ctx) {
  let img;
  let img_src_value;
  const block = {
    c: function create() {
      img = element("img");
      this.h();
    },
    l: function claim(nodes) {
      img = claim_element(nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      this.h();
    },
    h: function hydrate() {
      if (!src_url_equal(img.src, img_src_value = stx_eco_wallet_off))
        attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Wallet Connected");
      attr_dev(img, "width", "40");
      attr_dev(img, "height", "auto");
      add_location(img, file, 30, 6, 1244);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, img, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(img);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block_3.name,
    type: "else",
    source: "(30:6) {:else}",
    ctx
  });
  return block;
}
function create_if_block_3(ctx) {
  let img;
  let img_src_value;
  const block = {
    c: function create() {
      img = element("img");
      this.h();
    },
    l: function claim(nodes) {
      img = claim_element(nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      this.h();
    },
    h: function hydrate() {
      if (!src_url_equal(img.src, img_src_value = stx_eco_wallet_on))
        attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Wallet Connected");
      attr_dev(img, "width", "40");
      attr_dev(img, "height", "auto");
      add_location(img, file, 28, 6, 1144);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, img, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(img);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_3.name,
    type: "if",
    source: "(28:6) {#if $sbtcConfig.userSettings?.useOpDrop}",
    ctx
  });
  return block;
}
function create_else_block_2(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Use OP_RETURN Mechanism - pegin data sent in op_return output");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Use OP_RETURN Mechanism - pegin data sent in op_return output");
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block_2.name,
    type: "else",
    source: "(38:5) {:else}",
    ctx
  });
  return block;
}
function create_if_block_2(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Use OP_DROP Mechanism - pegin data sent in spendable output");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Use OP_DROP Mechanism - pegin data sent in spendable output");
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(36:5) {#if $sbtcConfig.userSettings?.useOpDrop}",
    ctx
  });
  return block;
}
function create_else_block_1(ctx) {
  let img;
  let img_src_value;
  const block = {
    c: function create() {
      img = element("img");
      this.h();
    },
    l: function claim(nodes) {
      img = claim_element(nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      this.h();
    },
    h: function hydrate() {
      if (!src_url_equal(img.src, img_src_value = stx_eco_wallet_off))
        attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Wallet Connected");
      attr_dev(img, "width", "40");
      attr_dev(img, "height", "auto");
      add_location(img, file, 49, 6, 1984);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, img, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(img);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block_1.name,
    type: "else",
    source: "(49:6) {:else}",
    ctx
  });
  return block;
}
function create_if_block_1(ctx) {
  let img;
  let img_src_value;
  const block = {
    c: function create() {
      img = element("img");
      this.h();
    },
    l: function claim(nodes) {
      img = claim_element(nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      this.h();
    },
    h: function hydrate() {
      if (!src_url_equal(img.src, img_src_value = stx_eco_wallet_on))
        attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Wallet Connected");
      attr_dev(img, "width", "40");
      attr_dev(img, "height", "auto");
      add_location(img, file, 47, 6, 1884);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, img, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(img);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(47:6) {#if $sbtcConfig.userSettings?.debugMode}",
    ctx
  });
  return block;
}
function create_else_block(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Debug Mode On - advanced info provided");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Debug Mode On - advanced info provided");
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(57:5) {:else}",
    ctx
  });
  return block;
}
function create_if_block(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Debug Mode Off - advanced info not shown");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Debug Mode Off - advanced info not shown");
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(55:5) {#if $sbtcConfig.userSettings?.debugMode}",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let section;
  let div9;
  let div8;
  let h1;
  let span;
  let t0;
  let t1;
  let t2;
  let div3;
  let div0;
  let t3;
  let t4;
  let div1;
  let a0;
  let t5;
  let div2;
  let t6;
  let div7;
  let div4;
  let t7;
  let t8;
  let div5;
  let a1;
  let t9;
  let div6;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    var _a;
    if (
      /*$sbtcConfig*/
      (_a = ctx2[0].userSettings) == null ? void 0 : _a.useOpDrop
    )
      return create_if_block_3;
    return create_else_block_3;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type(ctx);
  function select_block_type_1(ctx2, dirty) {
    var _a;
    if (
      /*$sbtcConfig*/
      (_a = ctx2[0].userSettings) == null ? void 0 : _a.useOpDrop
    )
      return create_if_block_2;
    return create_else_block_2;
  }
  let current_block_type_1 = select_block_type_1(ctx);
  let if_block1 = current_block_type_1(ctx);
  function select_block_type_2(ctx2, dirty) {
    var _a;
    if (
      /*$sbtcConfig*/
      (_a = ctx2[0].userSettings) == null ? void 0 : _a.debugMode
    )
      return create_if_block_1;
    return create_else_block_1;
  }
  let current_block_type_2 = select_block_type_2(ctx);
  let if_block2 = current_block_type_2(ctx);
  function select_block_type_3(ctx2, dirty) {
    var _a;
    if (
      /*$sbtcConfig*/
      (_a = ctx2[0].userSettings) == null ? void 0 : _a.debugMode
    )
      return create_if_block;
    return create_else_block;
  }
  let current_block_type_3 = select_block_type_3(ctx);
  let if_block3 = current_block_type_3(ctx);
  const block = {
    c: function create() {
      section = element("section");
      div9 = element("div");
      div8 = element("div");
      h1 = element("h1");
      span = element("span");
      t0 = text("sBTC");
      t1 = text(" Settings");
      t2 = space();
      div3 = element("div");
      div0 = element("div");
      t3 = text("Pegin Transactions");
      t4 = space();
      div1 = element("div");
      a0 = element("a");
      if_block0.c();
      t5 = space();
      div2 = element("div");
      if_block1.c();
      t6 = space();
      div7 = element("div");
      div4 = element("div");
      t7 = text("Debug Mode");
      t8 = space();
      div5 = element("div");
      a1 = element("a");
      if_block2.c();
      t9 = space();
      div6 = element("div");
      if_block3.c();
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      div9 = claim_element(section_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      div8 = claim_element(div9_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      h1 = claim_element(div8_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      span = claim_element(h1_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "sBTC");
      span_nodes.forEach(detach_dev);
      t1 = claim_text(h1_nodes, " Settings");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(div8_nodes);
      div3 = claim_element(div8_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t3 = claim_text(div0_nodes, "Pegin Transactions");
      div0_nodes.forEach(detach_dev);
      t4 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      a0 = claim_element(div1_nodes, "A", { href: true, class: true, style: true });
      var a0_nodes = children(a0);
      if_block0.l(a0_nodes);
      a0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      if_block1.l(div2_nodes);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t6 = claim_space(div8_nodes);
      div7 = claim_element(div8_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      div4 = claim_element(div7_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      t7 = claim_text(div4_nodes, "Debug Mode");
      div4_nodes.forEach(detach_dev);
      t8 = claim_space(div7_nodes);
      div5 = claim_element(div7_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      a1 = claim_element(div5_nodes, "A", { href: true, class: true, style: true });
      var a1_nodes = children(a1);
      if_block2.l(a1_nodes);
      a1_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t9 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      if_block3.l(div6_nodes);
      div6_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      div9_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "strokeme-white");
      add_location(span, file, 22, 34, 802);
      attr_dev(h1, "class", "pointer text-white s-lf-SQIIAcKox");
      add_location(h1, file, 22, 3, 771);
      attr_dev(div0, "class", "col-3");
      add_location(div0, file, 24, 4, 887);
      attr_dev(a0, "href", "/");
      attr_dev(a0, "class", "text-white pointer");
      set_style(a0, "vertical-align", "middle");
      add_location(a0, file, 26, 5, 960);
      attr_dev(div1, "class", "col-1");
      add_location(div1, file, 25, 4, 935);
      attr_dev(div2, "class", "col-7");
      add_location(div2, file, 34, 4, 1362);
      attr_dev(div3, "class", "row my-3");
      add_location(div3, file, 23, 3, 860);
      attr_dev(div4, "class", "col-3");
      add_location(div4, file, 43, 4, 1636);
      attr_dev(a1, "href", "/");
      attr_dev(a1, "class", "text-white pointer");
      set_style(a1, "vertical-align", "middle");
      add_location(a1, file, 45, 5, 1701);
      attr_dev(div5, "class", "col-1");
      add_location(div5, file, 44, 4, 1676);
      attr_dev(div6, "class", "col-7");
      add_location(div6, file, 53, 4, 2102);
      attr_dev(div7, "class", "row my-3");
      add_location(div7, file, 42, 3, 1609);
      attr_dev(div8, "class", "card-width");
      add_location(div8, file, 21, 2, 743);
      attr_dev(div9, "class", "my-4 p-4");
      add_location(div9, file, 20, 1, 718);
      attr_dev(section, "class", "bg-dark text-white s-lf-SQIIAcKox");
      add_location(section, file, 19, 0, 680);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, section, anchor);
      append_hydration_dev(section, div9);
      append_hydration_dev(div9, div8);
      append_hydration_dev(div8, h1);
      append_hydration_dev(h1, span);
      append_hydration_dev(span, t0);
      append_hydration_dev(h1, t1);
      append_hydration_dev(div8, t2);
      append_hydration_dev(div8, div3);
      append_hydration_dev(div3, div0);
      append_hydration_dev(div0, t3);
      append_hydration_dev(div3, t4);
      append_hydration_dev(div3, div1);
      append_hydration_dev(div1, a0);
      if_block0.m(a0, null);
      append_hydration_dev(div3, t5);
      append_hydration_dev(div3, div2);
      if_block1.m(div2, null);
      append_hydration_dev(div8, t6);
      append_hydration_dev(div8, div7);
      append_hydration_dev(div7, div4);
      append_hydration_dev(div4, t7);
      append_hydration_dev(div7, t8);
      append_hydration_dev(div7, div5);
      append_hydration_dev(div5, a1);
      if_block2.m(a1, null);
      append_hydration_dev(div7, t9);
      append_hydration_dev(div7, div6);
      if_block3.m(div6, null);
      if (!mounted) {
        dispose = [
          listen_dev(a0, "click", prevent_default(
            /*click_handler*/
            ctx[2]
          ), false, true, false, false),
          listen_dev(a1, "click", prevent_default(
            /*click_handler_1*/
            ctx[3]
          ), false, true, false, false)
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block0) {
        if_block0.p(ctx2, dirty);
      } else {
        if_block0.d(1);
        if_block0 = current_block_type(ctx2);
        if (if_block0) {
          if_block0.c();
          if_block0.m(a0, null);
        }
      }
      if (current_block_type_1 !== (current_block_type_1 = select_block_type_1(ctx2))) {
        if_block1.d(1);
        if_block1 = current_block_type_1(ctx2);
        if (if_block1) {
          if_block1.c();
          if_block1.m(div2, null);
        }
      }
      if (current_block_type_2 === (current_block_type_2 = select_block_type_2(ctx2)) && if_block2) {
        if_block2.p(ctx2, dirty);
      } else {
        if_block2.d(1);
        if_block2 = current_block_type_2(ctx2);
        if (if_block2) {
          if_block2.c();
          if_block2.m(a1, null);
        }
      }
      if (current_block_type_3 !== (current_block_type_3 = select_block_type_3(ctx2))) {
        if_block3.d(1);
        if_block3 = current_block_type_3(ctx2);
        if (if_block3) {
          if_block3.c();
          if_block3.m(div6, null);
        }
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(section);
      if_block0.d();
      if_block1.d();
      if_block2.d();
      if_block3.d();
      mounted = false;
      run_all(dispose);
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
  validate_slots("Page", slots, []);
  const toggleMechanism = (arg) => {
    const conf = $sbtcConfig;
    if (typeof conf.userSettings === "undefined") {
      conf.userSettings = { useOpDrop: false, debugMode: false };
    }
    if (arg === "txmode")
      conf.userSettings.useOpDrop = !conf.userSettings.useOpDrop;
    if (arg === "debug")
      conf.userSettings.debugMode = !conf.userSettings.debugMode;
    sbtcConfig.update(() => conf);
  };
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Page> was created with unknown prop '${key}'`);
  });
  const click_handler = () => toggleMechanism("txmode");
  const click_handler_1 = () => toggleMechanism("debug");
  $$self.$capture_state = () => ({
    stx_eco_wallet_on,
    stx_eco_wallet_off,
    sbtcConfig,
    toggleMechanism,
    $sbtcConfig
  });
  return [$sbtcConfig, toggleMechanism, click_handler, click_handler_1];
}
class Page extends SvelteComponentDev {
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
}
export {
  Page as default
};
