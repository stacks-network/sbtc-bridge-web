import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, n as element, c as space, x as text, p as claim_element, q as children, f as claim_space, y as claim_text, l as detach_dev, w as add_location, r as attr_dev, g as insert_hydration_dev, K as append_hydration_dev, z as set_data_dev, t as transition_out, j as check_outros, k as transition_in, G as validate_store, H as component_subscribe, v as validate_slots, h as group_outros, A as create_component, B as claim_component, C as mount_component, D as destroy_component } from "../../chunks/index-5e67b194.js";
import { P as PegIn, a as PegOut, __tla as __tla_0 } from "../../chunks/PegOut-ef473937.js";
import { s as sbtcConfig } from "../../chunks/index-077a78a4.js";
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
  const file = "src/routes/+page.svelte";
  function create_else_block_1(ctx) {
    let h1;
    let span;
    let t0;
    let t1;
    let t2;
    let h2;
    let t3;
    const block = {
      c: function create() {
        h1 = element("h1");
        span = element("span");
        t0 = text("sBTC");
        t1 = text(" Peg Out");
        t2 = space();
        h2 = element("h2");
        t3 = text("sBTC to BTC  - no middle men!");
        this.h();
      },
      l: function claim(nodes) {
        h1 = claim_element(nodes, "H1", {
          class: true
        });
        var h1_nodes = children(h1);
        span = claim_element(h1_nodes, "SPAN", {
          class: true
        });
        var span_nodes = children(span);
        t0 = claim_text(span_nodes, "sBTC");
        span_nodes.forEach(detach_dev);
        t1 = claim_text(h1_nodes, " Peg Out");
        h1_nodes.forEach(detach_dev);
        t2 = claim_space(nodes);
        h2 = claim_element(nodes, "H2", {
          class: true
        });
        var h2_nodes = children(h2);
        t3 = claim_text(h2_nodes, "sBTC to BTC  - no middle men!");
        h2_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(span, "class", "strokeme-warning");
        add_location(span, file, 12, 29, 482);
        attr_dev(h1, "class", "text-warning s-y_bCXRrkrYfP");
        add_location(h1, file, 12, 4, 457);
        attr_dev(h2, "class", "text-warning mb-3");
        add_location(h2, file, 13, 4, 542);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, h1, anchor);
        append_hydration_dev(h1, span);
        append_hydration_dev(span, t0);
        append_hydration_dev(h1, t1);
        insert_hydration_dev(target, t2, anchor);
        insert_hydration_dev(target, h2, anchor);
        append_hydration_dev(h2, t3);
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(h1);
        if (detaching)
          detach_dev(t2);
        if (detaching)
          detach_dev(h2);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_else_block_1.name,
      type: "else",
      source: "(12:4) {:else}",
      ctx
    });
    return block;
  }
  function create_if_block_2(ctx) {
    let h1;
    let span;
    let t0;
    let t1;
    let t2;
    let h2;
    let t3;
    const block = {
      c: function create() {
        h1 = element("h1");
        span = element("span");
        t0 = text("sBTC");
        t1 = text(" Peg In");
        t2 = space();
        h2 = element("h2");
        t3 = text("BTC to sBTC - no middle men!");
        this.h();
      },
      l: function claim(nodes) {
        h1 = claim_element(nodes, "H1", {
          class: true
        });
        var h1_nodes = children(h1);
        span = claim_element(h1_nodes, "SPAN", {
          class: true
        });
        var span_nodes = children(span);
        t0 = claim_text(span_nodes, "sBTC");
        span_nodes.forEach(detach_dev);
        t1 = claim_text(h1_nodes, " Peg In");
        h1_nodes.forEach(detach_dev);
        t2 = claim_space(nodes);
        h2 = claim_element(nodes, "H2", {
          class: true
        });
        var h2_nodes = children(h2);
        t3 = claim_text(h2_nodes, "BTC to sBTC - no middle men!");
        h2_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(span, "class", "strokeme-info");
        add_location(span, file, 9, 26, 324);
        attr_dev(h1, "class", "text-info s-y_bCXRrkrYfP");
        add_location(h1, file, 9, 4, 302);
        attr_dev(h2, "class", "text-info mb-3");
        add_location(h2, file, 10, 4, 380);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, h1, anchor);
        append_hydration_dev(h1, span);
        append_hydration_dev(span, t0);
        append_hydration_dev(h1, t1);
        insert_hydration_dev(target, t2, anchor);
        insert_hydration_dev(target, h2, anchor);
        append_hydration_dev(h2, t3);
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(h1);
        if (detaching)
          detach_dev(t2);
        if (detaching)
          detach_dev(h2);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_2.name,
      type: "if",
      source: "(9:4) {#if $sbtcConfig.pegIn}",
      ctx
    });
    return block;
  }
  function create_if_block_1(ctx) {
    let span;
    let t0;
    let t1_value = ctx[0].feeCalc.pegInFeeCalc.pegInAmount + "";
    let t1;
    const block = {
      c: function create() {
        span = element("span");
        t0 = text("Amount: ");
        t1 = text(t1_value);
        this.h();
      },
      l: function claim(nodes) {
        span = claim_element(nodes, "SPAN", {
          class: true
        });
        var span_nodes = children(span);
        t0 = claim_text(span_nodes, "Amount: ");
        t1 = claim_text(span_nodes, t1_value);
        span_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(span, "class", "text-end");
        add_location(span, file, 17, 76, 823);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, span, anchor);
        append_hydration_dev(span, t0);
        append_hydration_dev(span, t1);
      },
      p: function update(ctx2, dirty) {
        if (dirty & 1 && t1_value !== (t1_value = ctx2[0].feeCalc.pegInFeeCalc.pegInAmount + ""))
          set_data_dev(t1, t1_value);
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(span);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_1.name,
      type: "if",
      source: "(18:5) {#if $sbtcConfig.pegIn && $sbtcConfig.feeCalc.pegInFeeCalc.pegInAmount}",
      ctx
    });
    return block;
  }
  function create_else_block(ctx) {
    let div;
    let pegout;
    let current;
    pegout = new PegOut({
      $$inline: true
    });
    const block = {
      c: function create() {
        div = element("div");
        create_component(pegout.$$.fragment);
        this.h();
      },
      l: function claim(nodes) {
        div = claim_element(nodes, "DIV", {
          class: true
        });
        var div_nodes = children(div);
        claim_component(pegout.$$.fragment, div_nodes);
        div_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(div, "class", "d-flex justify-content-center");
        add_location(div, file, 24, 4, 1043);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div, anchor);
        mount_component(pegout, div, null);
        current = true;
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(pegout.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(pegout.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(div);
        destroy_component(pegout);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_else_block.name,
      type: "else",
      source: "(24:4) {:else}",
      ctx
    });
    return block;
  }
  function create_if_block(ctx) {
    let div;
    let pegin;
    let current;
    pegin = new PegIn({
      $$inline: true
    });
    const block = {
      c: function create() {
        div = element("div");
        create_component(pegin.$$.fragment);
        this.h();
      },
      l: function claim(nodes) {
        div = claim_element(nodes, "DIV", {
          class: true
        });
        var div_nodes = children(div);
        claim_component(pegin.$$.fragment, div_nodes);
        div_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(div, "class", "d-flex justify-content-center");
        add_location(div, file, 20, 4, 958);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div, anchor);
        mount_component(pegin, div, null);
        current = true;
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(pegin.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(pegin.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(div);
        destroy_component(pegin);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block.name,
      type: "if",
      source: "(20:4) {#if $sbtcConfig.pegIn}",
      ctx
    });
    return block;
  }
  function create_fragment(ctx) {
    let section;
    let div2;
    let div1;
    let t0;
    let div0;
    let span;
    let t1;
    let t2_value = ctx[0].sbtcWalletAddress + "";
    let t2;
    let t3;
    let t4;
    let current_block_type_index;
    let if_block2;
    let current;
    function select_block_type(ctx2, dirty) {
      if (ctx2[0].pegIn)
        return create_if_block_2;
      return create_else_block_1;
    }
    let current_block_type = select_block_type(ctx);
    let if_block0 = current_block_type(ctx);
    let if_block1 = ctx[0].pegIn && ctx[0].feeCalc.pegInFeeCalc.pegInAmount && create_if_block_1(ctx);
    const if_block_creators = [
      create_if_block,
      create_else_block
    ];
    const if_blocks = [];
    function select_block_type_1(ctx2, dirty) {
      if (ctx2[0].pegIn)
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type_1(ctx);
    if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    const block = {
      c: function create() {
        section = element("section");
        div2 = element("div");
        div1 = element("div");
        if_block0.c();
        t0 = space();
        div0 = element("div");
        span = element("span");
        t1 = text("SBTC Wallet: ");
        t2 = text(t2_value);
        t3 = space();
        if (if_block1)
          if_block1.c();
        t4 = space();
        if_block2.c();
        this.h();
      },
      l: function claim(nodes) {
        section = claim_element(nodes, "SECTION", {
          class: true
        });
        var section_nodes = children(section);
        div2 = claim_element(section_nodes, "DIV", {
          class: true
        });
        var div2_nodes = children(div2);
        div1 = claim_element(div2_nodes, "DIV", {
          class: true
        });
        var div1_nodes = children(div1);
        if_block0.l(div1_nodes);
        t0 = claim_space(div1_nodes);
        div0 = claim_element(div1_nodes, "DIV", {
          class: true
        });
        var div0_nodes = children(div0);
        span = claim_element(div0_nodes, "SPAN", {});
        var span_nodes = children(span);
        t1 = claim_text(span_nodes, "SBTC Wallet: ");
        t2 = claim_text(span_nodes, t2_value);
        span_nodes.forEach(detach_dev);
        t3 = claim_space(div0_nodes);
        if (if_block1)
          if_block1.l(div0_nodes);
        div0_nodes.forEach(detach_dev);
        t4 = claim_space(div1_nodes);
        if_block2.l(div1_nodes);
        div1_nodes.forEach(detach_dev);
        div2_nodes.forEach(detach_dev);
        section_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        add_location(span, file, 16, 5, 687);
        attr_dev(div0, "class", "my-3 d-flex justify-content-between text-white");
        add_location(div0, file, 15, 4, 621);
        attr_dev(div1, "class", "card-width");
        add_location(div1, file, 7, 3, 245);
        attr_dev(div2, "class", "my-4 p-4");
        add_location(div2, file, 6, 2, 219);
        attr_dev(section, "class", "bg-dark s-y_bCXRrkrYfP");
        add_location(section, file, 5, 1, 191);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, section, anchor);
        append_hydration_dev(section, div2);
        append_hydration_dev(div2, div1);
        if_block0.m(div1, null);
        append_hydration_dev(div1, t0);
        append_hydration_dev(div1, div0);
        append_hydration_dev(div0, span);
        append_hydration_dev(span, t1);
        append_hydration_dev(span, t2);
        append_hydration_dev(div0, t3);
        if (if_block1)
          if_block1.m(div0, null);
        append_hydration_dev(div1, t4);
        if_blocks[current_block_type_index].m(div1, null);
        current = true;
      },
      p: function update(ctx2, [dirty]) {
        if (current_block_type !== (current_block_type = select_block_type(ctx2))) {
          if_block0.d(1);
          if_block0 = current_block_type(ctx2);
          if (if_block0) {
            if_block0.c();
            if_block0.m(div1, t0);
          }
        }
        if ((!current || dirty & 1) && t2_value !== (t2_value = ctx2[0].sbtcWalletAddress + ""))
          set_data_dev(t2, t2_value);
        if (ctx2[0].pegIn && ctx2[0].feeCalc.pegInFeeCalc.pegInAmount) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block_1(ctx2);
            if_block1.c();
            if_block1.m(div0, null);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type_1(ctx2);
        if (current_block_type_index !== previous_block_index) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block2 = if_blocks[current_block_type_index];
          if (!if_block2) {
            if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block2.c();
          }
          transition_in(if_block2, 1);
          if_block2.m(div1, null);
        }
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(if_block2);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block2);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(section);
        if_block0.d();
        if (if_block1)
          if_block1.d();
        if_blocks[current_block_type_index].d();
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
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
        console.warn(`<Page> was created with unknown prop '${key}'`);
    });
    $$self.$capture_state = () => ({
      PegIn,
      PegOut,
      sbtcConfig,
      $sbtcConfig
    });
    return [
      $sbtcConfig
    ];
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
