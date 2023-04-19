import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, G as create_slot, H as assign, I as compute_rest_props, v as validate_slots, J as exclude_internal_props, K as svg_element, L as claim_svg_element, r as children, l as detach_dev, u as attr_dev, x as add_location, M as set_svg_attributes, N as toggle_class, g as insert_hydration_dev, O as append_hydration_dev, P as update_slot_base, Q as get_all_dirty_from_scope, R as get_slot_changes, T as get_spread_update, k as transition_in, h as transition_out, o as onMount, p as element, y as text, c as space, q as claim_element, z as claim_text, f as claim_space, W as listen_dev, X as prevent_default, Z as noop, Y as run_all, a3 as validate_each_argument, e as empty, a4 as destroy_each, w as set_style, A as set_data_dev, C as create_component, D as claim_component, E as mount_component, F as destroy_component } from "../chunks/index.605ac338.js";
import { i as fetchSbtcEvents } from "../chunks/stacks_connect.b652bb6f.js";
import { t as truncate, a as explorerBtcTxUrl, e as explorerTxUrl } from "../chunks/utils.121fbef1.js";
import { U as UserBalance } from "../chunks/UserBalance.2e221e79.js";
const file$3 = "node_modules/svelte-bootstrap-icons/lib/ArrowRepeat.svelte";
function create_fragment$3(ctx) {
  let svg;
  let path0;
  let path1;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
    null
  );
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: "16" },
    { height: "16" },
    { fill: "currentColor" },
    { viewBox: "0 0 16 16" },
    /*$$restProps*/
    ctx[0]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  const block = {
    c: function create() {
      svg = svg_element("svg");
      if (default_slot)
        default_slot.c();
      path0 = svg_element("path");
      path1 = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        fill: true,
        viewBox: true
      });
      var svg_nodes = children(svg);
      if (default_slot)
        default_slot.l(svg_nodes);
      path0 = claim_svg_element(svg_nodes, "path", { d: true });
      children(path0).forEach(detach_dev);
      path1 = claim_svg_element(svg_nodes, "path", { "fill-rule": true, d: true });
      children(path1).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(path0, "d", "M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z");
      add_location(path0, file$3, 0, 173, 173);
      attr_dev(path1, "fill-rule", "evenodd");
      attr_dev(path1, "d", "M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z");
      add_location(path1, file$3, 1, 2, 387);
      set_svg_attributes(svg, svg_data);
      toggle_class(svg, "bi", true);
      toggle_class(svg, "bi-arrow-repeat", true);
      add_location(svg, file$3, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, svg, anchor);
      if (default_slot) {
        default_slot.m(svg, null);
      }
      append_hydration_dev(svg, path0);
      append_hydration_dev(svg, path1);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[1],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { width: "16" },
        { height: "16" },
        { fill: "currentColor" },
        { viewBox: "0 0 16 16" },
        dirty & /*$$restProps*/
        1 && /*$$restProps*/
        ctx2[0]
      ]));
      toggle_class(svg, "bi", true);
      toggle_class(svg, "bi-arrow-repeat", true);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$3($$self, $$props, $$invalidate) {
  const omit_props_names = [];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ArrowRepeat", slots, ["default"]);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("$$scope" in $$new_props)
      $$invalidate(1, $$scope = $$new_props.$$scope);
  };
  return [$$restProps, $$scope, slots];
}
class ArrowRepeat extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ArrowRepeat",
      options,
      id: create_fragment$3.name
    });
  }
}
const file$2 = "node_modules/svelte-bootstrap-icons/lib/SortAlphaUp.svelte";
function create_fragment$2(ctx) {
  let svg;
  let path0;
  let path1;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
    null
  );
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: "16" },
    { height: "16" },
    { fill: "currentColor" },
    { viewBox: "0 0 16 16" },
    /*$$restProps*/
    ctx[0]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  const block = {
    c: function create() {
      svg = svg_element("svg");
      if (default_slot)
        default_slot.c();
      path0 = svg_element("path");
      path1 = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        fill: true,
        viewBox: true
      });
      var svg_nodes = children(svg);
      if (default_slot)
        default_slot.l(svg_nodes);
      path0 = claim_svg_element(svg_nodes, "path", { "fill-rule": true, d: true });
      children(path0).forEach(detach_dev);
      path1 = claim_svg_element(svg_nodes, "path", { d: true });
      children(path1).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(path0, "fill-rule", "evenodd");
      attr_dev(path0, "d", "M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z");
      add_location(path0, file$2, 0, 174, 174);
      attr_dev(path1, "d", "M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z");
      add_location(path1, file$2, 1, 2, 333);
      set_svg_attributes(svg, svg_data);
      toggle_class(svg, "bi", true);
      toggle_class(svg, "bi-sort-alpha-up", true);
      add_location(svg, file$2, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, svg, anchor);
      if (default_slot) {
        default_slot.m(svg, null);
      }
      append_hydration_dev(svg, path0);
      append_hydration_dev(svg, path1);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[1],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { width: "16" },
        { height: "16" },
        { fill: "currentColor" },
        { viewBox: "0 0 16 16" },
        dirty & /*$$restProps*/
        1 && /*$$restProps*/
        ctx2[0]
      ]));
      toggle_class(svg, "bi", true);
      toggle_class(svg, "bi-sort-alpha-up", true);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$2($$self, $$props, $$invalidate) {
  const omit_props_names = [];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("SortAlphaUp", slots, ["default"]);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("$$scope" in $$new_props)
      $$invalidate(1, $$scope = $$new_props.$$scope);
  };
  return [$$restProps, $$scope, slots];
}
class SortAlphaUp extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SortAlphaUp",
      options,
      id: create_fragment$2.name
    });
  }
}
const Pegs_svelte_svelte_type_style_lang = "";
const file$1 = "src/lib/components/history/Pegs.svelte";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[15] = list[i];
  child_ctx[17] = i;
  return child_ctx;
}
function create_else_block(ctx) {
  let each_1_anchor;
  let each_value = (
    /*events*/
    ctx[0]
  );
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const block = {
    c: function create() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_hydration_dev(target, each_1_anchor, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*events, explorerBtcTxUrl, explorerTxUrl, truncate, toggleDetails*/
      9) {
        each_value = /*events*/
        ctx2[0];
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d: function destroy(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(60:2) {:else}",
    ctx
  });
  return block;
}
function create_if_block(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("No transactions");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "No transactions");
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(58:2) {#if !transactions}",
    ctx
  });
  return block;
}
function create_each_block(ctx) {
  let div6;
  let div0;
  let a0;
  let t0_value = (
    /*item*/
    ctx[15].pegData.pegType + ""
  );
  let t0;
  let t1;
  let t2_value = (
    /*item*/
    ctx[15].pegData.opType + ""
  );
  let t2;
  let t3;
  let div1;
  let t4_value = (
    /*item*/
    ctx[15].pegData.amountSats + ""
  );
  let t4;
  let t5;
  let div2;
  let t6_value = (
    /*item*/
    ctx[15].pegData.burnBlockHeight + ""
  );
  let t6;
  let t7;
  let div3;
  let t8_value = truncate(
    /*item*/
    ctx[15].pegData.stxAddress
  ) + "";
  let t8;
  let t9;
  let div4;
  let t10_value = truncate(
    /*item*/
    ctx[15].pegData.sbtcWallet
  ) + "";
  let t10;
  let t11;
  let div5;
  let a1;
  let t12;
  let a1_href_value;
  let t13;
  let a2;
  let t14;
  let a2_href_value;
  let t15;
  let div28;
  let div27;
  let div7;
  let t16;
  let div8;
  let t17_value = (
    /*item*/
    ctx[15].contractId + ""
  );
  let t17;
  let t18;
  let div9;
  let t19;
  let div10;
  let t20_value = (
    /*item*/
    ctx[15].eventIndex + ""
  );
  let t20;
  let t21;
  let div11;
  let t22;
  let div12;
  let t23_value = (
    /*item*/
    ctx[15].txid + ""
  );
  let t23;
  let t24;
  let div13;
  let t25;
  let div14;
  let t26_value = (
    /*item*/
    ctx[15].bitcoinTxid + ""
  );
  let t26;
  let t27;
  let div15;
  let t28;
  let div16;
  let t29_value = (
    /*item*/
    ctx[15].pegData.pegType + ""
  );
  let t29;
  let t30;
  let div17;
  let t31;
  let div18;
  let t32_value = (
    /*item*/
    ctx[15].pegData.opType + ""
  );
  let t32;
  let t33;
  let div19;
  let t34;
  let div20;
  let t35_value = (
    /*item*/
    ctx[15].pegData.stxAddress + ""
  );
  let t35;
  let t36;
  let div21;
  let t37;
  let div22;
  let t38_value = (
    /*item*/
    ctx[15].pegData.amountSats + ""
  );
  let t38;
  let t39;
  let div23;
  let t40;
  let div24;
  let t41_value = (
    /*item*/
    ctx[15].pegData.burnBlockHeight + ""
  );
  let t41;
  let t42;
  let div25;
  let t43;
  let div26;
  let t44_value = (
    /*item*/
    ctx[15].pegData.sbtcWallet + ""
  );
  let t44;
  let t45;
  let mounted;
  let dispose;
  function click_handler_6() {
    return (
      /*click_handler_6*/
      ctx[10](
        /*i*/
        ctx[17]
      )
    );
  }
  const block = {
    c: function create() {
      div6 = element("div");
      div0 = element("div");
      a0 = element("a");
      t0 = text(t0_value);
      t1 = text("/");
      t2 = text(t2_value);
      t3 = space();
      div1 = element("div");
      t4 = text(t4_value);
      t5 = space();
      div2 = element("div");
      t6 = text(t6_value);
      t7 = space();
      div3 = element("div");
      t8 = text(t8_value);
      t9 = space();
      div4 = element("div");
      t10 = text(t10_value);
      t11 = space();
      div5 = element("div");
      a1 = element("a");
      t12 = text("stx");
      t13 = text(" | \n      ");
      a2 = element("a");
      t14 = text("btc");
      t15 = space();
      div28 = element("div");
      div27 = element("div");
      div7 = element("div");
      t16 = text("contractId");
      div8 = element("div");
      t17 = text(t17_value);
      t18 = space();
      div9 = element("div");
      t19 = text("eventIndex");
      div10 = element("div");
      t20 = text(t20_value);
      t21 = space();
      div11 = element("div");
      t22 = text("txid");
      div12 = element("div");
      t23 = text(t23_value);
      t24 = space();
      div13 = element("div");
      t25 = text("bitcoinTxid");
      div14 = element("div");
      t26 = text(t26_value);
      t27 = space();
      div15 = element("div");
      t28 = text("pegType");
      div16 = element("div");
      t29 = text(t29_value);
      t30 = space();
      div17 = element("div");
      t31 = text("opType");
      div18 = element("div");
      t32 = text(t32_value);
      t33 = space();
      div19 = element("div");
      t34 = text("stxAddress");
      div20 = element("div");
      t35 = text(t35_value);
      t36 = space();
      div21 = element("div");
      t37 = text("amountSats");
      div22 = element("div");
      t38 = text(t38_value);
      t39 = space();
      div23 = element("div");
      t40 = text("burnBlockHeight");
      div24 = element("div");
      t41 = text(t41_value);
      t42 = space();
      div25 = element("div");
      t43 = text("sbtcWallet");
      div26 = element("div");
      t44 = text(t44_value);
      t45 = space();
      this.h();
    },
    l: function claim(nodes) {
      div6 = claim_element(nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      div0 = claim_element(div6_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      a0 = claim_element(div0_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t0 = claim_text(a0_nodes, t0_value);
      t1 = claim_text(a0_nodes, "/");
      t2 = claim_text(a0_nodes, t2_value);
      a0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(div6_nodes);
      div1 = claim_element(div6_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t4 = claim_text(div1_nodes, t4_value);
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(div6_nodes);
      div2 = claim_element(div6_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      t6 = claim_text(div2_nodes, t6_value);
      div2_nodes.forEach(detach_dev);
      t7 = claim_space(div6_nodes);
      div3 = claim_element(div6_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      t8 = claim_text(div3_nodes, t8_value);
      div3_nodes.forEach(detach_dev);
      t9 = claim_space(div6_nodes);
      div4 = claim_element(div6_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      t10 = claim_text(div4_nodes, t10_value);
      div4_nodes.forEach(detach_dev);
      t11 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      a1 = claim_element(div5_nodes, "A", { href: true, target: true, rel: true });
      var a1_nodes = children(a1);
      t12 = claim_text(a1_nodes, "stx");
      a1_nodes.forEach(detach_dev);
      t13 = claim_text(div5_nodes, " | \n      ");
      a2 = claim_element(div5_nodes, "A", { href: true, target: true, rel: true });
      var a2_nodes = children(a2);
      t14 = claim_text(a2_nodes, "btc");
      a2_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      t15 = claim_space(nodes);
      div28 = claim_element(nodes, "DIV", { id: true, class: true, style: true });
      var div28_nodes = children(div28);
      div27 = claim_element(div28_nodes, "DIV", { class: true });
      var div27_nodes = children(div27);
      div7 = claim_element(div27_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      t16 = claim_text(div7_nodes, "contractId");
      div7_nodes.forEach(detach_dev);
      div8 = claim_element(div27_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      t17 = claim_text(div8_nodes, t17_value);
      div8_nodes.forEach(detach_dev);
      t18 = claim_space(div27_nodes);
      div9 = claim_element(div27_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      t19 = claim_text(div9_nodes, "eventIndex");
      div9_nodes.forEach(detach_dev);
      div10 = claim_element(div27_nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      t20 = claim_text(div10_nodes, t20_value);
      div10_nodes.forEach(detach_dev);
      t21 = claim_space(div27_nodes);
      div11 = claim_element(div27_nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      t22 = claim_text(div11_nodes, "txid");
      div11_nodes.forEach(detach_dev);
      div12 = claim_element(div27_nodes, "DIV", { class: true });
      var div12_nodes = children(div12);
      t23 = claim_text(div12_nodes, t23_value);
      div12_nodes.forEach(detach_dev);
      t24 = claim_space(div27_nodes);
      div13 = claim_element(div27_nodes, "DIV", { class: true });
      var div13_nodes = children(div13);
      t25 = claim_text(div13_nodes, "bitcoinTxid");
      div13_nodes.forEach(detach_dev);
      div14 = claim_element(div27_nodes, "DIV", { class: true });
      var div14_nodes = children(div14);
      t26 = claim_text(div14_nodes, t26_value);
      div14_nodes.forEach(detach_dev);
      t27 = claim_space(div27_nodes);
      div15 = claim_element(div27_nodes, "DIV", { class: true });
      var div15_nodes = children(div15);
      t28 = claim_text(div15_nodes, "pegType");
      div15_nodes.forEach(detach_dev);
      div16 = claim_element(div27_nodes, "DIV", { class: true });
      var div16_nodes = children(div16);
      t29 = claim_text(div16_nodes, t29_value);
      div16_nodes.forEach(detach_dev);
      t30 = claim_space(div27_nodes);
      div17 = claim_element(div27_nodes, "DIV", { class: true });
      var div17_nodes = children(div17);
      t31 = claim_text(div17_nodes, "opType");
      div17_nodes.forEach(detach_dev);
      div18 = claim_element(div27_nodes, "DIV", { class: true });
      var div18_nodes = children(div18);
      t32 = claim_text(div18_nodes, t32_value);
      div18_nodes.forEach(detach_dev);
      t33 = claim_space(div27_nodes);
      div19 = claim_element(div27_nodes, "DIV", { class: true });
      var div19_nodes = children(div19);
      t34 = claim_text(div19_nodes, "stxAddress");
      div19_nodes.forEach(detach_dev);
      div20 = claim_element(div27_nodes, "DIV", { class: true });
      var div20_nodes = children(div20);
      t35 = claim_text(div20_nodes, t35_value);
      div20_nodes.forEach(detach_dev);
      t36 = claim_space(div27_nodes);
      div21 = claim_element(div27_nodes, "DIV", { class: true });
      var div21_nodes = children(div21);
      t37 = claim_text(div21_nodes, "amountSats");
      div21_nodes.forEach(detach_dev);
      div22 = claim_element(div27_nodes, "DIV", { class: true });
      var div22_nodes = children(div22);
      t38 = claim_text(div22_nodes, t38_value);
      div22_nodes.forEach(detach_dev);
      t39 = claim_space(div27_nodes);
      div23 = claim_element(div27_nodes, "DIV", { class: true });
      var div23_nodes = children(div23);
      t40 = claim_text(div23_nodes, "burnBlockHeight");
      div23_nodes.forEach(detach_dev);
      div24 = claim_element(div27_nodes, "DIV", { class: true });
      var div24_nodes = children(div24);
      t41 = claim_text(div24_nodes, t41_value);
      div24_nodes.forEach(detach_dev);
      t42 = claim_space(div27_nodes);
      div25 = claim_element(div27_nodes, "DIV", { class: true });
      var div25_nodes = children(div25);
      t43 = claim_text(div25_nodes, "sbtcWallet");
      div25_nodes.forEach(detach_dev);
      div26 = claim_element(div27_nodes, "DIV", { class: true });
      var div26_nodes = children(div26);
      t44 = claim_text(div26_nodes, t44_value);
      div26_nodes.forEach(detach_dev);
      div27_nodes.forEach(detach_dev);
      t45 = claim_space(div28_nodes);
      div28_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a0, "href", "/");
      add_location(a0, file$1, 63, 6, 2029);
      attr_dev(div0, "class", "col-2");
      add_location(div0, file$1, 62, 4, 2003);
      attr_dev(div1, "class", "col-2");
      add_location(div1, file$1, 65, 4, 2154);
      attr_dev(div2, "class", "col-2");
      add_location(div2, file$1, 68, 4, 2221);
      attr_dev(div3, "class", "col-2");
      add_location(div3, file$1, 71, 4, 2293);
      attr_dev(div4, "class", "col-2");
      add_location(div4, file$1, 74, 4, 2370);
      attr_dev(a1, "href", a1_href_value = explorerTxUrl(
        /*item*/
        ctx[15].txid
      ));
      attr_dev(a1, "target", "_blank");
      attr_dev(a1, "rel", "noreferrer");
      add_location(a1, file$1, 78, 6, 2473);
      attr_dev(a2, "href", a2_href_value = explorerBtcTxUrl(
        /*item*/
        ctx[15].bitcoinTxid
      ));
      attr_dev(a2, "target", "_blank");
      attr_dev(a2, "rel", "noreferrer");
      add_location(a2, file$1, 79, 6, 2558);
      attr_dev(div5, "class", "col-2");
      add_location(div5, file$1, 77, 4, 2447);
      attr_dev(div6, "class", "row tab-row my-3 s-GHO30WP5kzY9");
      add_location(div6, file$1, 61, 2, 1968);
      attr_dev(div7, "class", "col-2");
      add_location(div7, file$1, 84, 4, 2783);
      attr_dev(div8, "class", "col-10");
      add_location(div8, file$1, 84, 39, 2818);
      attr_dev(div9, "class", "col-2");
      add_location(div9, file$1, 85, 4, 2866);
      attr_dev(div10, "class", "col-10");
      add_location(div10, file$1, 85, 39, 2901);
      attr_dev(div11, "class", "col-2");
      add_location(div11, file$1, 86, 4, 2949);
      attr_dev(div12, "class", "col-10");
      add_location(div12, file$1, 86, 33, 2978);
      attr_dev(div13, "class", "col-2");
      add_location(div13, file$1, 87, 4, 3020);
      attr_dev(div14, "class", "col-10");
      add_location(div14, file$1, 87, 40, 3056);
      attr_dev(div15, "class", "col-2");
      add_location(div15, file$1, 88, 4, 3105);
      attr_dev(div16, "class", "col-10");
      add_location(div16, file$1, 88, 36, 3137);
      attr_dev(div17, "class", "col-2");
      add_location(div17, file$1, 89, 4, 3190);
      attr_dev(div18, "class", "col-10");
      add_location(div18, file$1, 89, 35, 3221);
      attr_dev(div19, "class", "col-2");
      add_location(div19, file$1, 90, 4, 3273);
      attr_dev(div20, "class", "col-10");
      add_location(div20, file$1, 90, 39, 3308);
      attr_dev(div21, "class", "col-2");
      add_location(div21, file$1, 91, 4, 3364);
      attr_dev(div22, "class", "col-10");
      add_location(div22, file$1, 91, 39, 3399);
      attr_dev(div23, "class", "col-2");
      add_location(div23, file$1, 92, 4, 3455);
      attr_dev(div24, "class", "col-10");
      add_location(div24, file$1, 92, 44, 3495);
      attr_dev(div25, "class", "col-2");
      add_location(div25, file$1, 93, 4, 3556);
      attr_dev(div26, "class", "col-10");
      add_location(div26, file$1, 93, 39, 3591);
      attr_dev(div27, "class", "row text-small");
      add_location(div27, file$1, 83, 2, 2750);
      attr_dev(div28, "id", "peg-details-" + /*i*/
      ctx[17]);
      attr_dev(div28, "class", "p-3 container bg-info");
      set_style(div28, "display", "none");
      add_location(div28, file$1, 82, 2, 2666);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div6, anchor);
      append_hydration_dev(div6, div0);
      append_hydration_dev(div0, a0);
      append_hydration_dev(a0, t0);
      append_hydration_dev(a0, t1);
      append_hydration_dev(a0, t2);
      append_hydration_dev(div6, t3);
      append_hydration_dev(div6, div1);
      append_hydration_dev(div1, t4);
      append_hydration_dev(div6, t5);
      append_hydration_dev(div6, div2);
      append_hydration_dev(div2, t6);
      append_hydration_dev(div6, t7);
      append_hydration_dev(div6, div3);
      append_hydration_dev(div3, t8);
      append_hydration_dev(div6, t9);
      append_hydration_dev(div6, div4);
      append_hydration_dev(div4, t10);
      append_hydration_dev(div6, t11);
      append_hydration_dev(div6, div5);
      append_hydration_dev(div5, a1);
      append_hydration_dev(a1, t12);
      append_hydration_dev(div5, t13);
      append_hydration_dev(div5, a2);
      append_hydration_dev(a2, t14);
      insert_hydration_dev(target, t15, anchor);
      insert_hydration_dev(target, div28, anchor);
      append_hydration_dev(div28, div27);
      append_hydration_dev(div27, div7);
      append_hydration_dev(div7, t16);
      append_hydration_dev(div27, div8);
      append_hydration_dev(div8, t17);
      append_hydration_dev(div27, t18);
      append_hydration_dev(div27, div9);
      append_hydration_dev(div9, t19);
      append_hydration_dev(div27, div10);
      append_hydration_dev(div10, t20);
      append_hydration_dev(div27, t21);
      append_hydration_dev(div27, div11);
      append_hydration_dev(div11, t22);
      append_hydration_dev(div27, div12);
      append_hydration_dev(div12, t23);
      append_hydration_dev(div27, t24);
      append_hydration_dev(div27, div13);
      append_hydration_dev(div13, t25);
      append_hydration_dev(div27, div14);
      append_hydration_dev(div14, t26);
      append_hydration_dev(div27, t27);
      append_hydration_dev(div27, div15);
      append_hydration_dev(div15, t28);
      append_hydration_dev(div27, div16);
      append_hydration_dev(div16, t29);
      append_hydration_dev(div27, t30);
      append_hydration_dev(div27, div17);
      append_hydration_dev(div17, t31);
      append_hydration_dev(div27, div18);
      append_hydration_dev(div18, t32);
      append_hydration_dev(div27, t33);
      append_hydration_dev(div27, div19);
      append_hydration_dev(div19, t34);
      append_hydration_dev(div27, div20);
      append_hydration_dev(div20, t35);
      append_hydration_dev(div27, t36);
      append_hydration_dev(div27, div21);
      append_hydration_dev(div21, t37);
      append_hydration_dev(div27, div22);
      append_hydration_dev(div22, t38);
      append_hydration_dev(div27, t39);
      append_hydration_dev(div27, div23);
      append_hydration_dev(div23, t40);
      append_hydration_dev(div27, div24);
      append_hydration_dev(div24, t41);
      append_hydration_dev(div27, t42);
      append_hydration_dev(div27, div25);
      append_hydration_dev(div25, t43);
      append_hydration_dev(div27, div26);
      append_hydration_dev(div26, t44);
      append_hydration_dev(div28, t45);
      if (!mounted) {
        dispose = listen_dev(a0, "click", prevent_default(click_handler_6), false, true, false, false);
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*events*/
      1 && t0_value !== (t0_value = /*item*/
      ctx[15].pegData.pegType + ""))
        set_data_dev(t0, t0_value);
      if (dirty & /*events*/
      1 && t2_value !== (t2_value = /*item*/
      ctx[15].pegData.opType + ""))
        set_data_dev(t2, t2_value);
      if (dirty & /*events*/
      1 && t4_value !== (t4_value = /*item*/
      ctx[15].pegData.amountSats + ""))
        set_data_dev(t4, t4_value);
      if (dirty & /*events*/
      1 && t6_value !== (t6_value = /*item*/
      ctx[15].pegData.burnBlockHeight + ""))
        set_data_dev(t6, t6_value);
      if (dirty & /*events*/
      1 && t8_value !== (t8_value = truncate(
        /*item*/
        ctx[15].pegData.stxAddress
      ) + ""))
        set_data_dev(t8, t8_value);
      if (dirty & /*events*/
      1 && t10_value !== (t10_value = truncate(
        /*item*/
        ctx[15].pegData.sbtcWallet
      ) + ""))
        set_data_dev(t10, t10_value);
      if (dirty & /*events*/
      1 && a1_href_value !== (a1_href_value = explorerTxUrl(
        /*item*/
        ctx[15].txid
      ))) {
        attr_dev(a1, "href", a1_href_value);
      }
      if (dirty & /*events*/
      1 && a2_href_value !== (a2_href_value = explorerBtcTxUrl(
        /*item*/
        ctx[15].bitcoinTxid
      ))) {
        attr_dev(a2, "href", a2_href_value);
      }
      if (dirty & /*events*/
      1 && t17_value !== (t17_value = /*item*/
      ctx[15].contractId + ""))
        set_data_dev(t17, t17_value);
      if (dirty & /*events*/
      1 && t20_value !== (t20_value = /*item*/
      ctx[15].eventIndex + ""))
        set_data_dev(t20, t20_value);
      if (dirty & /*events*/
      1 && t23_value !== (t23_value = /*item*/
      ctx[15].txid + ""))
        set_data_dev(t23, t23_value);
      if (dirty & /*events*/
      1 && t26_value !== (t26_value = /*item*/
      ctx[15].bitcoinTxid + ""))
        set_data_dev(t26, t26_value);
      if (dirty & /*events*/
      1 && t29_value !== (t29_value = /*item*/
      ctx[15].pegData.pegType + ""))
        set_data_dev(t29, t29_value);
      if (dirty & /*events*/
      1 && t32_value !== (t32_value = /*item*/
      ctx[15].pegData.opType + ""))
        set_data_dev(t32, t32_value);
      if (dirty & /*events*/
      1 && t35_value !== (t35_value = /*item*/
      ctx[15].pegData.stxAddress + ""))
        set_data_dev(t35, t35_value);
      if (dirty & /*events*/
      1 && t38_value !== (t38_value = /*item*/
      ctx[15].pegData.amountSats + ""))
        set_data_dev(t38, t38_value);
      if (dirty & /*events*/
      1 && t41_value !== (t41_value = /*item*/
      ctx[15].pegData.burnBlockHeight + ""))
        set_data_dev(t41, t41_value);
      if (dirty & /*events*/
      1 && t44_value !== (t44_value = /*item*/
      ctx[15].pegData.sbtcWallet + ""))
        set_data_dev(t44, t44_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div6);
      if (detaching)
        detach_dev(t15);
      if (detaching)
        detach_dev(div28);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(61:2) {#each events as item, i}",
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let div13;
  let div12;
  let div1;
  let div0;
  let a0;
  let t0;
  let t1;
  let div3;
  let div2;
  let a1;
  let t2;
  let t3;
  let div5;
  let div4;
  let a2;
  let t4;
  let t5;
  let div7;
  let div6;
  let a3;
  let t6;
  let t7;
  let div9;
  let div8;
  let a4;
  let t8;
  let t9;
  let div11;
  let div10;
  let a5;
  let t10;
  let t11;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (!/*transactions*/
    ctx2[1])
      return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  const block = {
    c: function create() {
      div13 = element("div");
      div12 = element("div");
      div1 = element("div");
      div0 = element("div");
      a0 = element("a");
      t0 = text("Type");
      t1 = space();
      div3 = element("div");
      div2 = element("div");
      a1 = element("a");
      t2 = text("Amount");
      t3 = space();
      div5 = element("div");
      div4 = element("div");
      a2 = element("a");
      t4 = text("Burn Hieght");
      t5 = space();
      div7 = element("div");
      div6 = element("div");
      a3 = element("a");
      t6 = text("From");
      t7 = space();
      div9 = element("div");
      div8 = element("div");
      a4 = element("a");
      t8 = text("sBTC Wallet");
      t9 = space();
      div11 = element("div");
      div10 = element("div");
      a5 = element("a");
      t10 = text("Txs");
      t11 = space();
      if_block.c();
      this.h();
    },
    l: function claim(nodes) {
      div13 = claim_element(nodes, "DIV", { class: true });
      var div13_nodes = children(div13);
      div12 = claim_element(div13_nodes, "DIV", { class: true });
      var div12_nodes = children(div12);
      div1 = claim_element(div12_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      a0 = claim_element(div0_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t0 = claim_text(a0_nodes, "Type");
      a0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t1 = claim_space(div12_nodes);
      div3 = claim_element(div12_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      a1 = claim_element(div2_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t2 = claim_text(a1_nodes, "Amount");
      a1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t3 = claim_space(div12_nodes);
      div5 = claim_element(div12_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      a2 = claim_element(div4_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      t4 = claim_text(a2_nodes, "Burn Hieght");
      a2_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t5 = claim_space(div12_nodes);
      div7 = claim_element(div12_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      div6 = claim_element(div7_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      a3 = claim_element(div6_nodes, "A", { href: true });
      var a3_nodes = children(a3);
      t6 = claim_text(a3_nodes, "From");
      a3_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      t7 = claim_space(div12_nodes);
      div9 = claim_element(div12_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      div8 = claim_element(div9_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      a4 = claim_element(div8_nodes, "A", { href: true });
      var a4_nodes = children(a4);
      t8 = claim_text(a4_nodes, "sBTC Wallet");
      a4_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      div9_nodes.forEach(detach_dev);
      t9 = claim_space(div12_nodes);
      div11 = claim_element(div12_nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      div10 = claim_element(div11_nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      a5 = claim_element(div10_nodes, "A", { href: true });
      var a5_nodes = children(a5);
      t10 = claim_text(a5_nodes, "Txs");
      a5_nodes.forEach(detach_dev);
      div10_nodes.forEach(detach_dev);
      div11_nodes.forEach(detach_dev);
      div12_nodes.forEach(detach_dev);
      t11 = claim_space(div13_nodes);
      if_block.l(div13_nodes);
      div13_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a0, "href", "/");
      add_location(a0, file$1, 39, 35, 1058);
      attr_dev(div0, "class", "filter pointer ");
      add_location(div0, file$1, 39, 6, 1029);
      attr_dev(div1, "class", "col-2");
      add_location(div1, file$1, 38, 4, 1003);
      attr_dev(a1, "href", "/");
      add_location(a1, file$1, 42, 34, 1203);
      attr_dev(div2, "class", "filter pointer");
      add_location(div2, file$1, 42, 6, 1175);
      attr_dev(div3, "class", "col-2");
      add_location(div3, file$1, 41, 4, 1149);
      attr_dev(a2, "href", "/");
      add_location(a2, file$1, 45, 34, 1348);
      attr_dev(div4, "class", "filter pointer");
      add_location(div4, file$1, 45, 6, 1320);
      attr_dev(div5, "class", "col-2");
      add_location(div5, file$1, 44, 4, 1294);
      attr_dev(a3, "href", "/");
      add_location(a3, file$1, 48, 34, 1498);
      attr_dev(div6, "class", "filter pointer");
      add_location(div6, file$1, 48, 6, 1470);
      attr_dev(div7, "class", "col-2");
      add_location(div7, file$1, 47, 4, 1444);
      attr_dev(a4, "href", "/");
      add_location(a4, file$1, 51, 34, 1643);
      attr_dev(div8, "class", "filter pointer");
      add_location(div8, file$1, 51, 6, 1615);
      attr_dev(div9, "class", "col-2");
      add_location(div9, file$1, 50, 4, 1589);
      attr_dev(a5, "href", "/");
      add_location(a5, file$1, 54, 34, 1793);
      attr_dev(div10, "class", "filter pointer");
      add_location(div10, file$1, 54, 6, 1765);
      attr_dev(div11, "class", "col-2");
      add_location(div11, file$1, 53, 4, 1739);
      attr_dev(div12, "class", "row");
      add_location(div12, file$1, 37, 2, 981);
      attr_dev(div13, "class", "text-white");
      add_location(div13, file$1, 36, 0, 954);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div13, anchor);
      append_hydration_dev(div13, div12);
      append_hydration_dev(div12, div1);
      append_hydration_dev(div1, div0);
      append_hydration_dev(div0, a0);
      append_hydration_dev(a0, t0);
      append_hydration_dev(div12, t1);
      append_hydration_dev(div12, div3);
      append_hydration_dev(div3, div2);
      append_hydration_dev(div2, a1);
      append_hydration_dev(a1, t2);
      append_hydration_dev(div12, t3);
      append_hydration_dev(div12, div5);
      append_hydration_dev(div5, div4);
      append_hydration_dev(div4, a2);
      append_hydration_dev(a2, t4);
      append_hydration_dev(div12, t5);
      append_hydration_dev(div12, div7);
      append_hydration_dev(div7, div6);
      append_hydration_dev(div6, a3);
      append_hydration_dev(a3, t6);
      append_hydration_dev(div12, t7);
      append_hydration_dev(div12, div9);
      append_hydration_dev(div9, div8);
      append_hydration_dev(div8, a4);
      append_hydration_dev(a4, t8);
      append_hydration_dev(div12, t9);
      append_hydration_dev(div12, div11);
      append_hydration_dev(div11, div10);
      append_hydration_dev(div10, a5);
      append_hydration_dev(a5, t10);
      append_hydration_dev(div13, t11);
      if_block.m(div13, null);
      if (!mounted) {
        dispose = [
          listen_dev(a0, "click", prevent_default(
            /*click_handler*/
            ctx[4]
          ), false, true, false, false),
          listen_dev(a1, "click", prevent_default(
            /*click_handler_1*/
            ctx[5]
          ), false, true, false, false),
          listen_dev(a2, "click", prevent_default(
            /*click_handler_2*/
            ctx[6]
          ), false, true, false, false),
          listen_dev(a3, "click", prevent_default(
            /*click_handler_3*/
            ctx[7]
          ), false, true, false, false),
          listen_dev(a4, "click", prevent_default(
            /*click_handler_4*/
            ctx[8]
          ), false, true, false, false),
          listen_dev(a5, "click", prevent_default(
            /*click_handler_5*/
            ctx[9]
          ), false, true, false, false)
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div13, null);
        }
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div13);
      if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Pegs", slots, []);
  let events = [];
  let transactions = false;
  const fetchTxs = async () => {
    $$invalidate(0, events = await fetchSbtcEvents());
    $$invalidate(0, events = events.reverse());
    $$invalidate(1, transactions = true);
  };
  let sortDir = true;
  let sortField = "title";
  let componentKey = 0;
  const reorder = (sf) => {
    sortField = sf;
    sortDir = !sortDir;
    componentKey++;
  };
  const toggleDetails = (index) => {
    const x = document.getElementById("peg-details-" + index);
    if (!x)
      return;
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  onMount(async () => {
    fetchTxs();
  });
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Pegs> was created with unknown prop '${key}'`);
  });
  const click_handler = () => reorder("event");
  const click_handler_1 = () => reorder("dst");
  const click_handler_2 = () => reorder("dst");
  const click_handler_3 = () => reorder("event");
  const click_handler_4 = () => reorder("dst");
  const click_handler_5 = () => reorder("dst");
  const click_handler_6 = (i) => toggleDetails(i);
  $$self.$capture_state = () => ({
    fetchSbtcEvents,
    ArrowRepeat,
    SortAlphaUp,
    truncate,
    explorerBtcTxUrl,
    explorerTxUrl,
    onMount,
    UserBalance,
    events,
    transactions,
    fetchTxs,
    sortDir,
    sortField,
    componentKey,
    reorder,
    toggleDetails
  });
  $$self.$inject_state = ($$props2) => {
    if ("events" in $$props2)
      $$invalidate(0, events = $$props2.events);
    if ("transactions" in $$props2)
      $$invalidate(1, transactions = $$props2.transactions);
    if ("sortDir" in $$props2)
      sortDir = $$props2.sortDir;
    if ("sortField" in $$props2)
      sortField = $$props2.sortField;
    if ("componentKey" in $$props2)
      componentKey = $$props2.componentKey;
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    events,
    transactions,
    reorder,
    toggleDetails,
    click_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3,
    click_handler_4,
    click_handler_5,
    click_handler_6
  ];
}
class Pegs extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Pegs",
      options,
      id: create_fragment$1.name
    });
  }
}
const _page_svelte_svelte_type_style_lang = "";
const file = "src/routes/history/+page.svelte";
function create_fragment(ctx) {
  let section;
  let div3;
  let div2;
  let div1;
  let div0;
  let h1;
  let span;
  let t0;
  let t1;
  let t2;
  let pegs;
  let current;
  pegs = new Pegs({ $$inline: true });
  const block = {
    c: function create() {
      section = element("section");
      div3 = element("div");
      div2 = element("div");
      div1 = element("div");
      div0 = element("div");
      h1 = element("h1");
      span = element("span");
      t0 = text("sBTC");
      t1 = text(" Transaction History");
      t2 = space();
      create_component(pegs.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      div3 = claim_element(section_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h1 = claim_element(div0_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      span = claim_element(h1_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "sBTC");
      span_nodes.forEach(detach_dev);
      t1 = claim_text(h1_nodes, " Transaction History");
      h1_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t2 = claim_space(div2_nodes);
      claim_component(pegs.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "strokeme-white");
      add_location(span, file, 8, 37, 269);
      attr_dev(h1, "class", "pointer text-white s-WmfxB9smyTUP");
      add_location(h1, file, 8, 6, 238);
      attr_dev(div0, "class", "d-flex justify-content-between");
      add_location(div0, file, 7, 4, 187);
      attr_dev(div1, "class", "row");
      add_location(div1, file, 6, 3, 165);
      attr_dev(div2, "class", "card-width");
      add_location(div2, file, 5, 2, 137);
      attr_dev(div3, "class", "my-4 p-4");
      add_location(div3, file, 4, 1, 112);
      attr_dev(section, "class", "bg-dark s-WmfxB9smyTUP");
      add_location(section, file, 3, 0, 85);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, section, anchor);
      append_hydration_dev(section, div3);
      append_hydration_dev(div3, div2);
      append_hydration_dev(div2, div1);
      append_hydration_dev(div1, div0);
      append_hydration_dev(div0, h1);
      append_hydration_dev(h1, span);
      append_hydration_dev(span, t0);
      append_hydration_dev(h1, t1);
      append_hydration_dev(div2, t2);
      mount_component(pegs, div2, null);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(pegs.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(pegs.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(section);
      destroy_component(pegs);
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
  $$self.$capture_state = () => ({ Pegs });
  return [];
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
