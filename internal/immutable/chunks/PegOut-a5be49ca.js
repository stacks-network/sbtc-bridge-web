var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, R as create_slot, _ as assign, $ as compute_rest_props, v as validate_slots, a0 as exclude_internal_props, a1 as svg_element, a2 as claim_svg_element, q as children, l as detach_dev, r as attr_dev, w as add_location, a3 as set_svg_attributes, a4 as toggle_class, g as insert_hydration_dev, K as append_hydration_dev, T as update_slot_base, U as get_all_dirty_from_scope, V as get_slot_changes, a5 as get_spread_update, k as transition_in, t as transition_out, G as validate_store, H as component_subscribe, N as createEventDispatcher, a6 as set_store_value, n as element, x as text, c as space, A as create_component, p as claim_element, y as claim_text, f as claim_space, B as claim_component, C as mount_component, a7 as set_input_value, L as listen_dev, z as set_data_dev, D as destroy_component, O as run_all, M as prevent_default, a8 as to_number, Q as globals$1, I as noop$3, o as onMount, e as empty, h as group_outros, j as check_outros, J as src_url_equal, a9 as validate_each_argument, u as set_style, aa as prop_dev, ab as destroy_each } from "./index-5e67b194.js";
import { s as sbtcConfig, j as a, C as Ce, k as decodeStacksAddress, m as maxCommit, e as buffer, n as getAugmentedNamespace, _ as __viteBrowserExternal, o as commonjsGlobal, p as getDefaultExportFromCjs, q as fetchUTXOs, r as attachAllInputTransactions, t as fetchAddressDetails, A as ArrowUp, a as ArrowDown } from "./index-3a754f14.js";
import { Tooltip } from "./bootstrap.esm-e88d1e6f.js";
let PegIn, PegOut;
let __tla = (async () => {
  const file$c = "node_modules/svelte-bootstrap-icons/lib/PatchQuestion.svelte";
  function create_fragment$c(ctx) {
    let svg;
    let path0;
    let path1;
    let path2;
    let current;
    const default_slot_template = ctx[2].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[1], null);
    let svg_levels = [
      {
        xmlns: "http://www.w3.org/2000/svg"
      },
      {
        width: "16"
      },
      {
        height: "16"
      },
      {
        fill: "currentColor"
      },
      {
        viewBox: "0 0 16 16"
      },
      ctx[0]
    ];
    let svg_data = {};
    for (let i = 0; i < svg_levels.length; i += 1) {
      svg_data = assign(svg_data, svg_levels[i]);
    }
    const block2 = {
      c: function create() {
        svg = svg_element("svg");
        if (default_slot)
          default_slot.c();
        path0 = svg_element("path");
        path1 = svg_element("path");
        path2 = svg_element("path");
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
        path0 = claim_svg_element(svg_nodes, "path", {
          d: true
        });
        children(path0).forEach(detach_dev);
        path1 = claim_svg_element(svg_nodes, "path", {
          d: true
        });
        children(path1).forEach(detach_dev);
        path2 = claim_svg_element(svg_nodes, "path", {
          d: true
        });
        children(path2).forEach(detach_dev);
        svg_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(path0, "d", "M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z");
        add_location(path0, file$c, 0, 175, 175);
        attr_dev(path1, "d", "m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z");
        add_location(path1, file$c, 1, 2, 544);
        attr_dev(path2, "d", "M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z");
        add_location(path2, file$c, 2, 2, 1302);
        set_svg_attributes(svg, svg_data);
        toggle_class(svg, "bi", true);
        toggle_class(svg, "bi-patch-question", true);
        add_location(svg, file$c, 0, 0, 0);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, svg, anchor);
        if (default_slot) {
          default_slot.m(svg, null);
        }
        append_hydration_dev(svg, path0);
        append_hydration_dev(svg, path1);
        append_hydration_dev(svg, path2);
        current = true;
      },
      p: function update(ctx2, [dirty]) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 2)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[1], !current ? get_all_dirty_from_scope(ctx2[1]) : get_slot_changes(default_slot_template, ctx2[1], dirty, null), null);
          }
        }
        set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
          {
            xmlns: "http://www.w3.org/2000/svg"
          },
          {
            width: "16"
          },
          {
            height: "16"
          },
          {
            fill: "currentColor"
          },
          {
            viewBox: "0 0 16 16"
          },
          dirty & 1 && ctx2[0]
        ]));
        toggle_class(svg, "bi", true);
        toggle_class(svg, "bi-patch-question", true);
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
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(svg);
        if (default_slot)
          default_slot.d(detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_fragment$c.name,
      type: "component",
      source: "",
      ctx
    });
    return block2;
  }
  function instance$c($$self, $$props, $$invalidate) {
    const omit_props_names = [];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("PatchQuestion", slots, [
      "default"
    ]);
    $$self.$$set = ($$new_props) => {
      $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
      $$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
      if ("$$scope" in $$new_props)
        $$invalidate(1, $$scope = $$new_props.$$scope);
    };
    return [
      $$restProps,
      $$scope,
      slots
    ];
  }
  class PatchQuestion extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance$c, create_fragment$c, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "PatchQuestion",
        options,
        id: create_fragment$c.name
      });
    }
  }
  const file$b = "src/lib/components/pegin/build/Principal.svelte";
  function create_if_block$9(ctx) {
    let div;
    let t;
    const block2 = {
      c: function create() {
        div = element("div");
        t = text(ctx[1]);
        this.h();
      },
      l: function claim(nodes) {
        div = claim_element(nodes, "DIV", {
          class: true
        });
        var div_nodes = children(div);
        t = claim_text(div_nodes, ctx[1]);
        div_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(div, "class", "text-danger");
        add_location(div, file$b, 67, 56, 2500);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div, anchor);
        append_hydration_dev(div, t);
      },
      p: function update(ctx2, dirty) {
        if (dirty & 2)
          set_data_dev(t, ctx2[1]);
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block$9.name,
      type: "if",
      source: "(68:4) {#if errored && stxAddress && stxAddress.length > 0}",
      ctx
    });
    return block2;
  }
  function create_fragment$b(ctx) {
    let div1;
    let div0;
    let label;
    let span0;
    let t0;
    let t1_value = ctx[3].network + "";
    let t1;
    let t2;
    let t3;
    let span1;
    let patchquestion;
    let t4;
    let input;
    let t5;
    let current;
    let mounted;
    let dispose;
    patchquestion = new PatchQuestion({
      props: {
        width: 30,
        height: 30
      },
      $$inline: true
    });
    let if_block = ctx[2] && ctx[0] && ctx[0].length > 0 && create_if_block$9(ctx);
    const block2 = {
      c: function create() {
        div1 = element("div");
        div0 = element("div");
        label = element("label");
        span0 = element("span");
        t0 = text("Stacks/Contract Principal (");
        t1 = text(t1_value);
        t2 = text("):");
        t3 = space();
        span1 = element("span");
        create_component(patchquestion.$$.fragment);
        t4 = space();
        input = element("input");
        t5 = space();
        if (if_block)
          if_block.c();
        this.h();
      },
      l: function claim(nodes) {
        div1 = claim_element(nodes, "DIV", {
          class: true
        });
        var div1_nodes = children(div1);
        div0 = claim_element(div1_nodes, "DIV", {
          class: true
        });
        var div0_nodes = children(div0);
        label = claim_element(div0_nodes, "LABEL", {
          for: true,
          class: true
        });
        var label_nodes = children(label);
        span0 = claim_element(label_nodes, "SPAN", {});
        var span0_nodes = children(span0);
        t0 = claim_text(span0_nodes, "Stacks/Contract Principal (");
        t1 = claim_text(span0_nodes, t1_value);
        t2 = claim_text(span0_nodes, "):");
        span0_nodes.forEach(detach_dev);
        t3 = claim_space(label_nodes);
        span1 = claim_element(label_nodes, "SPAN", {
          class: true,
          "data-bs-toggle": true,
          "data-bs-placement": true,
          "data-bs-custom-class": true,
          title: true
        });
        var span1_nodes = children(span1);
        claim_component(patchquestion.$$.fragment, span1_nodes);
        span1_nodes.forEach(detach_dev);
        label_nodes.forEach(detach_dev);
        t4 = claim_space(div0_nodes);
        input = claim_element(div0_nodes, "INPUT", {
          type: true,
          id: true,
          class: true,
          autocomplete: true
        });
        t5 = claim_space(div0_nodes);
        if (if_block)
          if_block.l(div0_nodes);
        div0_nodes.forEach(detach_dev);
        div1_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        add_location(span0, file$b, 63, 6, 1947);
        attr_dev(span1, "class", "pointer text-info");
        attr_dev(span1, "data-bs-toggle", "tooltip-ftux");
        attr_dev(span1, "data-bs-placement", "top");
        attr_dev(span1, "data-bs-custom-class", "custom-tooltip");
        attr_dev(span1, "title", "Your Stacks address. The equivalent amount of sBTC will be sent to this wallet");
        add_location(span1, file$b, 64, 6, 2017);
        attr_dev(label, "for", "transact-path");
        attr_dev(label, "class", "d-flex justify-content-between");
        add_location(label, file$b, 62, 4, 1874);
        attr_dev(input, "type", "text");
        attr_dev(input, "id", "from-address");
        attr_dev(input, "class", "form-control form-inline");
        attr_dev(input, "autocomplete", "off");
        add_location(input, file$b, 66, 4, 2292);
        attr_dev(div0, "class", "col");
        add_location(div0, file$b, 61, 2, 1852);
        attr_dev(div1, "class", "row");
        add_location(div1, file$b, 60, 0, 1832);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div1, anchor);
        append_hydration_dev(div1, div0);
        append_hydration_dev(div0, label);
        append_hydration_dev(label, span0);
        append_hydration_dev(span0, t0);
        append_hydration_dev(span0, t1);
        append_hydration_dev(span0, t2);
        append_hydration_dev(label, t3);
        append_hydration_dev(label, span1);
        mount_component(patchquestion, span1, null);
        append_hydration_dev(div0, t4);
        append_hydration_dev(div0, input);
        set_input_value(input, ctx[0]);
        append_hydration_dev(div0, t5);
        if (if_block)
          if_block.m(div0, null);
        current = true;
        if (!mounted) {
          dispose = [
            listen_dev(input, "input", ctx[7]),
            listen_dev(input, "input", ctx[8], false, false, false)
          ];
          mounted = true;
        }
      },
      p: function update(ctx2, [dirty]) {
        if ((!current || dirty & 8) && t1_value !== (t1_value = ctx2[3].network + ""))
          set_data_dev(t1, t1_value);
        if (dirty & 1 && input.value !== ctx2[0]) {
          set_input_value(input, ctx2[0]);
        }
        if (ctx2[2] && ctx2[0] && ctx2[0].length > 0) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block$9(ctx2);
            if_block.c();
            if_block.m(div0, null);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(patchquestion.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(patchquestion.$$.fragment, local);
        current = false;
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div1);
        destroy_component(patchquestion);
        if (if_block)
          if_block.d();
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_fragment$b.name,
      type: "component",
      source: "",
      ctx
    });
    return block2;
  }
  const format = /[ `!@#$%^&*()_+=\[\]{};':"\\|,<>\/?~]/;
  function instance$b($$self, $$props, $$invalidate) {
    let $sbtcConfig;
    let $account;
    let $auth;
    validate_store(sbtcConfig, "sbtcConfig");
    component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(3, $sbtcConfig = $$value));
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("Principal", slots, []);
    const account = a();
    validate_store(account, "account");
    component_subscribe($$self, account, (value2) => $$invalidate(9, $account = value2));
    const dispatch = createEventDispatcher();
    const auth = Ce();
    validate_store(auth, "auth");
    component_subscribe($$self, auth, (value2) => $$invalidate(10, $auth = value2));
    if (!$sbtcConfig.stxAddress) {
      if ($auth.isSignedIn) {
        set_store_value(sbtcConfig, $sbtcConfig.stxAddress = $account.stxAddress, $sbtcConfig);
      }
    }
    let stxAddress = $sbtcConfig.stxAddress;
    const mainReason = "Please enter a valid stacks blockchain " + $sbtcConfig.network + " address";
    let reason = mainReason;
    let errored = false;
    const report = (errors2) => {
      $$invalidate(2, errored = errors2);
      dispatch("principal_updated", {
        error: errors2,
        reason
      });
    };
    const changeStxAddress = () => {
      $$invalidate(2, errored = false);
      if (!stxAddress) {
        report(true);
        $$invalidate(2, errored = false);
      } else if (format.test(stxAddress)) {
        $$invalidate(1, reason = "please remove white space / special characters");
        report(true);
      } else {
        try {
          const decoded = decodeStacksAddress(stxAddress.split(".")[0]);
          if ($sbtcConfig.network === "testnet" && decoded[0] !== 26) {
            $$invalidate(1, reason = mainReason);
            report(true);
            return;
          }
          if ($sbtcConfig.network === "mainnet" && decoded[0] !== 22) {
            $$invalidate(1, reason = mainReason);
            report(true);
            return;
          }
          const conf = $sbtcConfig;
          conf.stxAddress = stxAddress;
          sbtcConfig.update(() => conf);
          report(false);
        } catch (err) {
          report(true);
        }
      }
    };
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
        console.warn(`<Principal> was created with unknown prop '${key}'`);
    });
    function input_input_handler() {
      stxAddress = this.value;
      $$invalidate(0, stxAddress);
    }
    const input_handler = () => changeStxAddress();
    $$self.$capture_state = () => ({
      decodeStacksAddress,
      sbtcConfig,
      createEventDispatcher,
      PatchQuestion,
      getAuth: Ce,
      getAccount: a,
      account,
      format,
      dispatch,
      auth,
      stxAddress,
      mainReason,
      reason,
      errored,
      report,
      changeStxAddress,
      $sbtcConfig,
      $account,
      $auth
    });
    $$self.$inject_state = ($$props2) => {
      if ("stxAddress" in $$props2)
        $$invalidate(0, stxAddress = $$props2.stxAddress);
      if ("reason" in $$props2)
        $$invalidate(1, reason = $$props2.reason);
      if ("errored" in $$props2)
        $$invalidate(2, errored = $$props2.errored);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    return [
      stxAddress,
      reason,
      errored,
      $sbtcConfig,
      account,
      auth,
      changeStxAddress,
      input_input_handler,
      input_handler
    ];
  }
  class Principal extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance$b, create_fragment$b, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "Principal",
        options,
        id: create_fragment$b.name
      });
    }
  }
  const file$a = "src/lib/components/pegin/build/PegInAmount.svelte";
  function create_key_block$1(ctx) {
    let span0;
    let a0;
    let t0;
    let a0_class_value;
    let t1;
    let span1;
    let a1;
    let t2;
    let a1_class_value;
    let t3;
    let span2;
    let a2;
    let t4;
    let a2_class_value;
    let mounted;
    let dispose;
    const block2 = {
      c: function create() {
        span0 = element("span");
        a0 = element("a");
        t0 = text("low");
        t1 = space();
        span1 = element("span");
        a1 = element("a");
        t2 = text("medium");
        t3 = space();
        span2 = element("span");
        a2 = element("a");
        t4 = text("high");
        this.h();
      },
      l: function claim(nodes) {
        span0 = claim_element(nodes, "SPAN", {
          class: true
        });
        var span0_nodes = children(span0);
        a0 = claim_element(span0_nodes, "A", {
          href: true,
          class: true
        });
        var a0_nodes = children(a0);
        t0 = claim_text(a0_nodes, "low");
        a0_nodes.forEach(detach_dev);
        span0_nodes.forEach(detach_dev);
        t1 = claim_space(nodes);
        span1 = claim_element(nodes, "SPAN", {
          class: true
        });
        var span1_nodes = children(span1);
        a1 = claim_element(span1_nodes, "A", {
          href: true,
          class: true
        });
        var a1_nodes = children(a1);
        t2 = claim_text(a1_nodes, "medium");
        a1_nodes.forEach(detach_dev);
        span1_nodes.forEach(detach_dev);
        t3 = claim_space(nodes);
        span2 = claim_element(nodes, "SPAN", {
          class: true
        });
        var span2_nodes = children(span2);
        a2 = claim_element(span2_nodes, "A", {
          href: true,
          class: true
        });
        var a2_nodes = children(a2);
        t4 = claim_text(a2_nodes, "high");
        a2_nodes.forEach(detach_dev);
        span2_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(a0, "href", "/");
        attr_dev(a0, "class", a0_class_value = ctx[6] ? "text-success" : "text-info");
        add_location(a0, file$a, 56, 41, 2747);
        attr_dev(span0, "class", "mx-2 border-right");
        add_location(span0, file$a, 56, 8, 2714);
        attr_dev(a1, "href", "/");
        attr_dev(a1, "class", a1_class_value = ctx[5] ? "text-success" : "text-info");
        add_location(a1, file$a, 57, 41, 2910);
        attr_dev(span1, "class", "mx-2 border-right");
        add_location(span1, file$a, 57, 8, 2877);
        attr_dev(a2, "href", "/");
        attr_dev(a2, "class", a2_class_value = ctx[4] ? "text-success" : "text-info");
        add_location(a2, file$a, 58, 28, 3069);
        attr_dev(span2, "class", "mx-2");
        add_location(span2, file$a, 58, 8, 3049);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, span0, anchor);
        append_hydration_dev(span0, a0);
        append_hydration_dev(a0, t0);
        insert_hydration_dev(target, t1, anchor);
        insert_hydration_dev(target, span1, anchor);
        append_hydration_dev(span1, a1);
        append_hydration_dev(a1, t2);
        insert_hydration_dev(target, t3, anchor);
        insert_hydration_dev(target, span2, anchor);
        append_hydration_dev(span2, a2);
        append_hydration_dev(a2, t4);
        if (!mounted) {
          dispose = [
            listen_dev(a0, "click", prevent_default(ctx[11]), false, true, false),
            listen_dev(a1, "click", prevent_default(ctx[12]), false, true, false),
            listen_dev(a2, "click", prevent_default(ctx[13]), false, true, false)
          ];
          mounted = true;
        }
      },
      p: function update(ctx2, dirty) {
        if (dirty & 64 && a0_class_value !== (a0_class_value = ctx2[6] ? "text-success" : "text-info")) {
          attr_dev(a0, "class", a0_class_value);
        }
        if (dirty & 32 && a1_class_value !== (a1_class_value = ctx2[5] ? "text-success" : "text-info")) {
          attr_dev(a1, "class", a1_class_value);
        }
        if (dirty & 16 && a2_class_value !== (a2_class_value = ctx2[4] ? "text-success" : "text-info")) {
          attr_dev(a2, "class", a2_class_value);
        }
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(span0);
        if (detaching)
          detach_dev(t1);
        if (detaching)
          detach_dev(span1);
        if (detaching)
          detach_dev(t3);
        if (detaching)
          detach_dev(span2);
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_key_block$1.name,
      type: "key",
      source: "(56:8) {#key componentKey}",
      ctx
    });
    return block2;
  }
  function create_if_block$8(ctx) {
    let div1;
    let div0;
    let p0;
    let t0;
    let t1_value = ctx[0].feeCalc.pegInFeeCalc.pegInAmount + "";
    let t1;
    let t2;
    let t3;
    let p1;
    let t4;
    let t5_value = ctx[0].feeCalc.pegInFeeCalc.feeToApply + "";
    let t5;
    let t6;
    let t7;
    let if_block = ctx[2] > 0 && create_if_block_1$6(ctx);
    const block2 = {
      c: function create() {
        div1 = element("div");
        div0 = element("div");
        p0 = element("p");
        t0 = text("Pegging in for ");
        t1 = text(t1_value);
        t2 = text(" satoshi");
        t3 = space();
        p1 = element("p");
        t4 = text("Fee will be calculated at ");
        t5 = text(t5_value);
        t6 = text(" sats/kb");
        t7 = space();
        if (if_block)
          if_block.c();
        this.h();
      },
      l: function claim(nodes) {
        div1 = claim_element(nodes, "DIV", {
          class: true
        });
        var div1_nodes = children(div1);
        div0 = claim_element(div1_nodes, "DIV", {
          class: true
        });
        var div0_nodes = children(div0);
        p0 = claim_element(div0_nodes, "P", {});
        var p0_nodes = children(p0);
        t0 = claim_text(p0_nodes, "Pegging in for ");
        t1 = claim_text(p0_nodes, t1_value);
        t2 = claim_text(p0_nodes, " satoshi");
        p0_nodes.forEach(detach_dev);
        t3 = claim_space(div0_nodes);
        p1 = claim_element(div0_nodes, "P", {});
        var p1_nodes = children(p1);
        t4 = claim_text(p1_nodes, "Fee will be calculated at ");
        t5 = claim_text(p1_nodes, t5_value);
        t6 = claim_text(p1_nodes, " sats/kb");
        p1_nodes.forEach(detach_dev);
        t7 = claim_space(div0_nodes);
        if (if_block)
          if_block.l(div0_nodes);
        div0_nodes.forEach(detach_dev);
        div1_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        add_location(p0, file$a, 66, 8, 3577);
        add_location(p1, file$a, 67, 8, 3662);
        attr_dev(div0, "class", "text-center w-50 bg-light text-dark py-3 px-4 my-4 border-radius");
        add_location(div0, file$a, 65, 6, 3490);
        attr_dev(div1, "class", "d-flex justify-content-center");
        add_location(div1, file$a, 64, 4, 3440);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div1, anchor);
        append_hydration_dev(div1, div0);
        append_hydration_dev(div0, p0);
        append_hydration_dev(p0, t0);
        append_hydration_dev(p0, t1);
        append_hydration_dev(p0, t2);
        append_hydration_dev(div0, t3);
        append_hydration_dev(div0, p1);
        append_hydration_dev(p1, t4);
        append_hydration_dev(p1, t5);
        append_hydration_dev(p1, t6);
        append_hydration_dev(div0, t7);
        if (if_block)
          if_block.m(div0, null);
      },
      p: function update(ctx2, dirty) {
        if (dirty & 1 && t1_value !== (t1_value = ctx2[0].feeCalc.pegInFeeCalc.pegInAmount + ""))
          set_data_dev(t1, t1_value);
        if (dirty & 1 && t5_value !== (t5_value = ctx2[0].feeCalc.pegInFeeCalc.feeToApply + ""))
          set_data_dev(t5, t5_value);
        if (ctx2[2] > 0) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block_1$6(ctx2);
            if_block.c();
            if_block.m(div0, null);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div1);
        if (if_block)
          if_block.d();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block$8.name,
      type: "if",
      source: "(64:4) {#if $sbtcConfig.feeCalc.pegInFeeCalc.pegInAmount && $sbtcConfig.feeCalc.pegInFeeCalc.pegInAmount > 0}",
      ctx
    });
    return block2;
  }
  function create_if_block_1$6(ctx) {
    let p;
    let t0;
    let t1;
    const block2 = {
      c: function create() {
        p = element("p");
        t0 = text(ctx[2]);
        t1 = text(" sats, will be sent back to your sending address.");
        this.h();
      },
      l: function claim(nodes) {
        p = claim_element(nodes, "P", {});
        var p_nodes = children(p);
        t0 = claim_text(p_nodes, ctx[2]);
        t1 = claim_text(p_nodes, " sats, will be sent back to your sending address.");
        p_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        add_location(p, file$a, 68, 24, 3773);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, p, anchor);
        append_hydration_dev(p, t0);
        append_hydration_dev(p, t1);
      },
      p: function update(ctx2, dirty) {
        if (dirty & 4)
          set_data_dev(t0, ctx2[2]);
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(p);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block_1$6.name,
      type: "if",
      source: "(69:8) {#if change > 0}",
      ctx
    });
    return block2;
  }
  function create_fragment$a(ctx) {
    let div4;
    let div3;
    let label;
    let span0;
    let t0;
    let t1;
    let span1;
    let patchquestion;
    let t2;
    let input;
    let t3;
    let div2;
    let div0;
    let t4;
    let span2;
    let t5_value = ctx[0].feeCalc.pegInFeeCalc.feeToApply + "";
    let t5;
    let t6;
    let previous_key = ctx[3];
    let t7;
    let div1;
    let a2;
    let t8;
    let t9;
    let current;
    let mounted;
    let dispose;
    patchquestion = new PatchQuestion({
      props: {
        width: 30,
        height: 30
      },
      $$inline: true
    });
    let key_block = create_key_block$1(ctx);
    let if_block = ctx[0].feeCalc.pegInFeeCalc.pegInAmount && ctx[0].feeCalc.pegInFeeCalc.pegInAmount > 0 && create_if_block$8(ctx);
    const block2 = {
      c: function create() {
        div4 = element("div");
        div3 = element("div");
        label = element("label");
        span0 = element("span");
        t0 = text("Peg In Amount / Sats:");
        t1 = space();
        span1 = element("span");
        create_component(patchquestion.$$.fragment);
        t2 = space();
        input = element("input");
        t3 = space();
        div2 = element("div");
        div0 = element("div");
        t4 = text("Fee rate ");
        span2 = element("span");
        t5 = text(t5_value);
        t6 = text(" (sats/kb):\n        ");
        key_block.c();
        t7 = space();
        div1 = element("div");
        a2 = element("a");
        t8 = text("max");
        t9 = space();
        if (if_block)
          if_block.c();
        this.h();
      },
      l: function claim(nodes) {
        div4 = claim_element(nodes, "DIV", {
          class: true
        });
        var div4_nodes = children(div4);
        div3 = claim_element(div4_nodes, "DIV", {
          class: true
        });
        var div3_nodes = children(div3);
        label = claim_element(div3_nodes, "LABEL", {
          for: true,
          class: true
        });
        var label_nodes = children(label);
        span0 = claim_element(label_nodes, "SPAN", {});
        var span0_nodes = children(span0);
        t0 = claim_text(span0_nodes, "Peg In Amount / Sats:");
        span0_nodes.forEach(detach_dev);
        t1 = claim_space(label_nodes);
        span1 = claim_element(label_nodes, "SPAN", {
          class: true,
          "data-bs-toggle": true,
          "data-bs-placement": true,
          "data-bs-custom-class": true,
          title: true
        });
        var span1_nodes = children(span1);
        claim_component(patchquestion.$$.fragment, span1_nodes);
        span1_nodes.forEach(detach_dev);
        label_nodes.forEach(detach_dev);
        t2 = claim_space(div3_nodes);
        input = claim_element(div3_nodes, "INPUT", {
          type: true,
          id: true,
          class: true,
          autocomplete: true
        });
        t3 = claim_space(div3_nodes);
        div2 = claim_element(div3_nodes, "DIV", {
          class: true
        });
        var div2_nodes = children(div2);
        div0 = claim_element(div2_nodes, "DIV", {});
        var div0_nodes = children(div0);
        t4 = claim_text(div0_nodes, "Fee rate ");
        span2 = claim_element(div0_nodes, "SPAN", {
          class: true
        });
        var span2_nodes = children(span2);
        t5 = claim_text(span2_nodes, t5_value);
        span2_nodes.forEach(detach_dev);
        t6 = claim_text(div0_nodes, " (sats/kb):\n        ");
        key_block.l(div0_nodes);
        div0_nodes.forEach(detach_dev);
        t7 = claim_space(div2_nodes);
        div1 = claim_element(div2_nodes, "DIV", {});
        var div1_nodes = children(div1);
        a2 = claim_element(div1_nodes, "A", {
          href: true,
          class: true
        });
        var a_nodes = children(a2);
        t8 = claim_text(a_nodes, "max");
        a_nodes.forEach(detach_dev);
        div1_nodes.forEach(detach_dev);
        div2_nodes.forEach(detach_dev);
        t9 = claim_space(div3_nodes);
        if (if_block)
          if_block.l(div3_nodes);
        div3_nodes.forEach(detach_dev);
        div4_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        add_location(span0, file$a, 49, 6, 1980);
        attr_dev(span1, "class", "pointer text-info");
        attr_dev(span1, "data-bs-toggle", "tooltip-ftux");
        attr_dev(span1, "data-bs-placement", "top");
        attr_dev(span1, "data-bs-custom-class", "custom-tooltip");
        attr_dev(span1, "title", "The amount of Bitcoin you want to swap for sBTC. The bitcoin is locked in the protocol and you convert your sBTC back to Bitcoin when you peg out.");
        add_location(span1, file$a, 50, 6, 2021);
        attr_dev(label, "for", "transact-path");
        attr_dev(label, "class", "d-flex justify-content-between");
        add_location(label, file$a, 48, 4, 1907);
        attr_dev(input, "type", "number");
        attr_dev(input, "id", "from-address");
        attr_dev(input, "class", "form-control");
        attr_dev(input, "autocomplete", "off");
        add_location(input, file$a, 52, 4, 2364);
        attr_dev(span2, "class", "text-success");
        add_location(span2, file$a, 54, 20, 2587);
        add_location(div0, file$a, 54, 6, 2573);
        attr_dev(a2, "href", "/");
        attr_dev(a2, "class", "");
        add_location(a2, file$a, 61, 11, 3233);
        add_location(div1, file$a, 61, 6, 3228);
        attr_dev(div2, "class", "d-flex justify-content-between text-info");
        add_location(div2, file$a, 53, 4, 2511);
        attr_dev(div3, "class", "col-12");
        add_location(div3, file$a, 47, 2, 1882);
        attr_dev(div4, "class", "row");
        add_location(div4, file$a, 46, 0, 1862);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div4, anchor);
        append_hydration_dev(div4, div3);
        append_hydration_dev(div3, label);
        append_hydration_dev(label, span0);
        append_hydration_dev(span0, t0);
        append_hydration_dev(label, t1);
        append_hydration_dev(label, span1);
        mount_component(patchquestion, span1, null);
        append_hydration_dev(div3, t2);
        append_hydration_dev(div3, input);
        set_input_value(input, ctx[1]);
        append_hydration_dev(div3, t3);
        append_hydration_dev(div3, div2);
        append_hydration_dev(div2, div0);
        append_hydration_dev(div0, t4);
        append_hydration_dev(div0, span2);
        append_hydration_dev(span2, t5);
        append_hydration_dev(div0, t6);
        key_block.m(div0, null);
        append_hydration_dev(div2, t7);
        append_hydration_dev(div2, div1);
        append_hydration_dev(div1, a2);
        append_hydration_dev(a2, t8);
        append_hydration_dev(div3, t9);
        if (if_block)
          if_block.m(div3, null);
        current = true;
        if (!mounted) {
          dispose = [
            listen_dev(input, "input", ctx[9]),
            listen_dev(input, "input", ctx[10], false, false, false),
            listen_dev(a2, "click", prevent_default(ctx[14]), false, true, false)
          ];
          mounted = true;
        }
      },
      p: function update(ctx2, [dirty]) {
        if (dirty & 2 && to_number(input.value) !== ctx2[1]) {
          set_input_value(input, ctx2[1]);
        }
        if ((!current || dirty & 1) && t5_value !== (t5_value = ctx2[0].feeCalc.pegInFeeCalc.feeToApply + ""))
          set_data_dev(t5, t5_value);
        if (dirty & 8 && safe_not_equal(previous_key, previous_key = ctx2[3])) {
          key_block.d(1);
          key_block = create_key_block$1(ctx2);
          key_block.c();
          key_block.m(div0, null);
        } else {
          key_block.p(ctx2, dirty);
        }
        if (ctx2[0].feeCalc.pegInFeeCalc.pegInAmount && ctx2[0].feeCalc.pegInFeeCalc.pegInAmount > 0) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block$8(ctx2);
            if_block.c();
            if_block.m(div3, null);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(patchquestion.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(patchquestion.$$.fragment, local);
        current = false;
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div4);
        destroy_component(patchquestion);
        key_block.d(detaching);
        if (if_block)
          if_block.d();
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_fragment$a.name,
      type: "component",
      source: "",
      ctx
    });
    return block2;
  }
  function instance$a($$self, $$props, $$invalidate) {
    let low;
    let medium;
    let high;
    let $sbtcConfig;
    validate_store(sbtcConfig, "sbtcConfig");
    component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(0, $sbtcConfig = $$value));
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("PegInAmount", slots, []);
    const dispatch = createEventDispatcher();
    let pegInAmount = $sbtcConfig.feeCalc.pegInFeeCalc.pegInAmount;
    let errorReason;
    let changeErrorReason;
    let change = 0;
    const changePegIn = (maxValue) => {
      const fee = $sbtcConfig.feeCalc.pegInFeeCalc.feeToApply || 0;
      const maxPeg = maxCommit($sbtcConfig.utxos);
      if (maxValue)
        $$invalidate(1, pegInAmount = maxPeg - fee);
      errorReason = void 0;
      changeErrorReason = void 0;
      if (pegInAmount > maxPeg) {
        errorReason = "Cannot commit more BTC then is available at your address";
        return;
      }
      const conf = $sbtcConfig;
      $$invalidate(2, change = maxPeg - pegInAmount - fee);
      conf.feeCalc.pegInFeeCalc.pegInAmount = Number(pegInAmount);
      sbtcConfig.set(conf);
    };
    let componentKey = 0;
    const changeRate = (rate) => {
      const conf = $sbtcConfig;
      if (rate === "low")
        conf.feeCalc.pegInFeeCalc.feeToApply = $sbtcConfig.feeCalc.pegInFeeCalc.low.fee;
      else if (rate === "medium")
        conf.feeCalc.pegInFeeCalc.feeToApply = $sbtcConfig.feeCalc.pegInFeeCalc.medium.fee;
      else if (rate === "high")
        conf.feeCalc.pegInFeeCalc.feeToApply = $sbtcConfig.feeCalc.pegInFeeCalc.high.fee;
      sbtcConfig.set(conf);
      if ($sbtcConfig.feeCalc.pegInFeeCalc.pegInAmount > 0) {
        changePegIn(true);
      }
      $$invalidate(3, componentKey++, componentKey);
    };
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
        console.warn(`<PegInAmount> was created with unknown prop '${key}'`);
    });
    function input_input_handler() {
      pegInAmount = to_number(this.value);
      $$invalidate(1, pegInAmount);
    }
    const input_handler = () => changePegIn(false);
    const click_handler = () => changeRate("low");
    const click_handler_1 = () => changeRate("medium");
    const click_handler_2 = () => changeRate("high");
    const click_handler_3 = () => changePegIn(true);
    $$self.$capture_state = () => ({
      maxCommit,
      sbtcConfig,
      createEventDispatcher,
      PatchQuestion,
      dispatch,
      pegInAmount,
      errorReason,
      changeErrorReason,
      change,
      changePegIn,
      componentKey,
      changeRate,
      high,
      medium,
      low,
      $sbtcConfig
    });
    $$self.$inject_state = ($$props2) => {
      if ("pegInAmount" in $$props2)
        $$invalidate(1, pegInAmount = $$props2.pegInAmount);
      if ("errorReason" in $$props2)
        errorReason = $$props2.errorReason;
      if ("changeErrorReason" in $$props2)
        changeErrorReason = $$props2.changeErrorReason;
      if ("change" in $$props2)
        $$invalidate(2, change = $$props2.change);
      if ("componentKey" in $$props2)
        $$invalidate(3, componentKey = $$props2.componentKey);
      if ("high" in $$props2)
        $$invalidate(4, high = $$props2.high);
      if ("medium" in $$props2)
        $$invalidate(5, medium = $$props2.medium);
      if ("low" in $$props2)
        $$invalidate(6, low = $$props2.low);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 1) {
        $$invalidate(6, low = $sbtcConfig.feeInfo.low_fee_per_kb === $sbtcConfig.feeCalc.pegInFeeCalc.feeToApply);
      }
      if ($$self.$$.dirty & 1) {
        $$invalidate(5, medium = $sbtcConfig.feeInfo.medium_fee_per_kb === $sbtcConfig.feeCalc.pegInFeeCalc.feeToApply);
      }
      if ($$self.$$.dirty & 1) {
        $$invalidate(4, high = $sbtcConfig.feeInfo.high_fee_per_kb === $sbtcConfig.feeCalc.pegInFeeCalc.feeToApply);
      }
    };
    return [
      $sbtcConfig,
      pegInAmount,
      change,
      componentKey,
      high,
      medium,
      low,
      changePegIn,
      changeRate,
      input_input_handler,
      input_handler,
      click_handler,
      click_handler_1,
      click_handler_2,
      click_handler_3
    ];
  }
  class PegInAmount extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance$a, create_fragment$a, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "PegInAmount",
        options,
        id: create_fragment$a.name
      });
    }
  }
  var src$3 = {};
  var address = {};
  var networks$3 = {};
  Object.defineProperty(networks$3, "__esModule", {
    value: true
  });
  networks$3.testnet = networks$3.regtest = networks$3.bitcoin = void 0;
  networks$3.bitcoin = {
    messagePrefix: "Bitcoin Signed Message:\n",
    bech32: "bc",
    bip32: {
      public: 76067358,
      private: 76066276
    },
    pubKeyHash: 0,
    scriptHash: 5,
    wif: 128
  };
  networks$3.regtest = {
    messagePrefix: "Bitcoin Signed Message:\n",
    bech32: "bcrt",
    bip32: {
      public: 70617039,
      private: 70615956
    },
    pubKeyHash: 111,
    scriptHash: 196,
    wif: 239
  };
  networks$3.testnet = {
    messagePrefix: "Bitcoin Signed Message:\n",
    bech32: "tb",
    bip32: {
      public: 70617039,
      private: 70615956
    },
    pubKeyHash: 111,
    scriptHash: 196,
    wif: 239
  };
  var payments$3 = {};
  var embed = {};
  var script = {};
  var bip66$1 = {};
  Object.defineProperty(bip66$1, "__esModule", {
    value: true
  });
  bip66$1.encode = bip66$1.decode = bip66$1.check = void 0;
  function check$d(buffer2) {
    if (buffer2.length < 8)
      return false;
    if (buffer2.length > 72)
      return false;
    if (buffer2[0] !== 48)
      return false;
    if (buffer2[1] !== buffer2.length - 2)
      return false;
    if (buffer2[2] !== 2)
      return false;
    const lenR = buffer2[3];
    if (lenR === 0)
      return false;
    if (5 + lenR >= buffer2.length)
      return false;
    if (buffer2[4 + lenR] !== 2)
      return false;
    const lenS = buffer2[5 + lenR];
    if (lenS === 0)
      return false;
    if (6 + lenR + lenS !== buffer2.length)
      return false;
    if (buffer2[4] & 128)
      return false;
    if (lenR > 1 && buffer2[4] === 0 && !(buffer2[5] & 128))
      return false;
    if (buffer2[lenR + 6] & 128)
      return false;
    if (lenS > 1 && buffer2[lenR + 6] === 0 && !(buffer2[lenR + 7] & 128))
      return false;
    return true;
  }
  bip66$1.check = check$d;
  function decode$j(buffer2) {
    if (buffer2.length < 8)
      throw new Error("DER sequence length is too short");
    if (buffer2.length > 72)
      throw new Error("DER sequence length is too long");
    if (buffer2[0] !== 48)
      throw new Error("Expected DER sequence");
    if (buffer2[1] !== buffer2.length - 2)
      throw new Error("DER sequence length is invalid");
    if (buffer2[2] !== 2)
      throw new Error("Expected DER integer");
    const lenR = buffer2[3];
    if (lenR === 0)
      throw new Error("R length is zero");
    if (5 + lenR >= buffer2.length)
      throw new Error("R length is too long");
    if (buffer2[4 + lenR] !== 2)
      throw new Error("Expected DER integer (2)");
    const lenS = buffer2[5 + lenR];
    if (lenS === 0)
      throw new Error("S length is zero");
    if (6 + lenR + lenS !== buffer2.length)
      throw new Error("S length is invalid");
    if (buffer2[4] & 128)
      throw new Error("R value is negative");
    if (lenR > 1 && buffer2[4] === 0 && !(buffer2[5] & 128))
      throw new Error("R value excessively padded");
    if (buffer2[lenR + 6] & 128)
      throw new Error("S value is negative");
    if (lenS > 1 && buffer2[lenR + 6] === 0 && !(buffer2[lenR + 7] & 128))
      throw new Error("S value excessively padded");
    return {
      r: buffer2.slice(4, 4 + lenR),
      s: buffer2.slice(6 + lenR)
    };
  }
  bip66$1.decode = decode$j;
  function encode$k(r, s) {
    const lenR = r.length;
    const lenS = s.length;
    if (lenR === 0)
      throw new Error("R length is zero");
    if (lenS === 0)
      throw new Error("S length is zero");
    if (lenR > 33)
      throw new Error("R length is too long");
    if (lenS > 33)
      throw new Error("S length is too long");
    if (r[0] & 128)
      throw new Error("R value is negative");
    if (s[0] & 128)
      throw new Error("S value is negative");
    if (lenR > 1 && r[0] === 0 && !(r[1] & 128))
      throw new Error("R value excessively padded");
    if (lenS > 1 && s[0] === 0 && !(s[1] & 128))
      throw new Error("S value excessively padded");
    const signature = buffer.Buffer.allocUnsafe(6 + lenR + lenS);
    signature[0] = 48;
    signature[1] = signature.length - 2;
    signature[2] = 2;
    signature[3] = r.length;
    r.copy(signature, 4);
    signature[4 + lenR] = 2;
    signature[5 + lenR] = s.length;
    s.copy(signature, 6 + lenR);
    return signature;
  }
  bip66$1.encode = encode$k;
  var ops = {};
  Object.defineProperty(ops, "__esModule", {
    value: true
  });
  ops.REVERSE_OPS = ops.OPS = void 0;
  const OPS$8 = {
    OP_FALSE: 0,
    OP_0: 0,
    OP_PUSHDATA1: 76,
    OP_PUSHDATA2: 77,
    OP_PUSHDATA4: 78,
    OP_1NEGATE: 79,
    OP_RESERVED: 80,
    OP_TRUE: 81,
    OP_1: 81,
    OP_2: 82,
    OP_3: 83,
    OP_4: 84,
    OP_5: 85,
    OP_6: 86,
    OP_7: 87,
    OP_8: 88,
    OP_9: 89,
    OP_10: 90,
    OP_11: 91,
    OP_12: 92,
    OP_13: 93,
    OP_14: 94,
    OP_15: 95,
    OP_16: 96,
    OP_NOP: 97,
    OP_VER: 98,
    OP_IF: 99,
    OP_NOTIF: 100,
    OP_VERIF: 101,
    OP_VERNOTIF: 102,
    OP_ELSE: 103,
    OP_ENDIF: 104,
    OP_VERIFY: 105,
    OP_RETURN: 106,
    OP_TOALTSTACK: 107,
    OP_FROMALTSTACK: 108,
    OP_2DROP: 109,
    OP_2DUP: 110,
    OP_3DUP: 111,
    OP_2OVER: 112,
    OP_2ROT: 113,
    OP_2SWAP: 114,
    OP_IFDUP: 115,
    OP_DEPTH: 116,
    OP_DROP: 117,
    OP_DUP: 118,
    OP_NIP: 119,
    OP_OVER: 120,
    OP_PICK: 121,
    OP_ROLL: 122,
    OP_ROT: 123,
    OP_SWAP: 124,
    OP_TUCK: 125,
    OP_CAT: 126,
    OP_SUBSTR: 127,
    OP_LEFT: 128,
    OP_RIGHT: 129,
    OP_SIZE: 130,
    OP_INVERT: 131,
    OP_AND: 132,
    OP_OR: 133,
    OP_XOR: 134,
    OP_EQUAL: 135,
    OP_EQUALVERIFY: 136,
    OP_RESERVED1: 137,
    OP_RESERVED2: 138,
    OP_1ADD: 139,
    OP_1SUB: 140,
    OP_2MUL: 141,
    OP_2DIV: 142,
    OP_NEGATE: 143,
    OP_ABS: 144,
    OP_NOT: 145,
    OP_0NOTEQUAL: 146,
    OP_ADD: 147,
    OP_SUB: 148,
    OP_MUL: 149,
    OP_DIV: 150,
    OP_MOD: 151,
    OP_LSHIFT: 152,
    OP_RSHIFT: 153,
    OP_BOOLAND: 154,
    OP_BOOLOR: 155,
    OP_NUMEQUAL: 156,
    OP_NUMEQUALVERIFY: 157,
    OP_NUMNOTEQUAL: 158,
    OP_LESSTHAN: 159,
    OP_GREATERTHAN: 160,
    OP_LESSTHANOREQUAL: 161,
    OP_GREATERTHANOREQUAL: 162,
    OP_MIN: 163,
    OP_MAX: 164,
    OP_WITHIN: 165,
    OP_RIPEMD160: 166,
    OP_SHA1: 167,
    OP_SHA256: 168,
    OP_HASH160: 169,
    OP_HASH256: 170,
    OP_CODESEPARATOR: 171,
    OP_CHECKSIG: 172,
    OP_CHECKSIGVERIFY: 173,
    OP_CHECKMULTISIG: 174,
    OP_CHECKMULTISIGVERIFY: 175,
    OP_NOP1: 176,
    OP_NOP2: 177,
    OP_CHECKLOCKTIMEVERIFY: 177,
    OP_NOP3: 178,
    OP_CHECKSEQUENCEVERIFY: 178,
    OP_NOP4: 179,
    OP_NOP5: 180,
    OP_NOP6: 181,
    OP_NOP7: 182,
    OP_NOP8: 183,
    OP_NOP9: 184,
    OP_NOP10: 185,
    OP_CHECKSIGADD: 186,
    OP_PUBKEYHASH: 253,
    OP_PUBKEY: 254,
    OP_INVALIDOPCODE: 255
  };
  ops.OPS = OPS$8;
  const REVERSE_OPS = {};
  ops.REVERSE_OPS = REVERSE_OPS;
  for (const op of Object.keys(OPS$8)) {
    const code = OPS$8[op];
    REVERSE_OPS[code] = op;
  }
  var push_data = {};
  Object.defineProperty(push_data, "__esModule", {
    value: true
  });
  push_data.decode = push_data.encode = push_data.encodingLength = void 0;
  const ops_1 = ops;
  function encodingLength$2(i) {
    return i < ops_1.OPS.OP_PUSHDATA1 ? 1 : i <= 255 ? 2 : i <= 65535 ? 3 : 5;
  }
  push_data.encodingLength = encodingLength$2;
  function encode$j(buffer2, num, offset) {
    const size = encodingLength$2(num);
    if (size === 1) {
      buffer2.writeUInt8(num, offset);
    } else if (size === 2) {
      buffer2.writeUInt8(ops_1.OPS.OP_PUSHDATA1, offset);
      buffer2.writeUInt8(num, offset + 1);
    } else if (size === 3) {
      buffer2.writeUInt8(ops_1.OPS.OP_PUSHDATA2, offset);
      buffer2.writeUInt16LE(num, offset + 1);
    } else {
      buffer2.writeUInt8(ops_1.OPS.OP_PUSHDATA4, offset);
      buffer2.writeUInt32LE(num, offset + 1);
    }
    return size;
  }
  push_data.encode = encode$j;
  function decode$i(buffer2, offset) {
    const opcode = buffer2.readUInt8(offset);
    let num;
    let size;
    if (opcode < ops_1.OPS.OP_PUSHDATA1) {
      num = opcode;
      size = 1;
    } else if (opcode === ops_1.OPS.OP_PUSHDATA1) {
      if (offset + 2 > buffer2.length)
        return null;
      num = buffer2.readUInt8(offset + 1);
      size = 2;
    } else if (opcode === ops_1.OPS.OP_PUSHDATA2) {
      if (offset + 3 > buffer2.length)
        return null;
      num = buffer2.readUInt16LE(offset + 1);
      size = 3;
    } else {
      if (offset + 5 > buffer2.length)
        return null;
      if (opcode !== ops_1.OPS.OP_PUSHDATA4)
        throw new Error("Unexpected opcode");
      num = buffer2.readUInt32LE(offset + 1);
      size = 5;
    }
    return {
      opcode,
      number: num,
      size
    };
  }
  push_data.decode = decode$i;
  var script_number = {};
  Object.defineProperty(script_number, "__esModule", {
    value: true
  });
  script_number.encode = script_number.decode = void 0;
  function decode$h(buffer2, maxLength, minimal) {
    maxLength = maxLength || 4;
    minimal = minimal === void 0 ? true : minimal;
    const length = buffer2.length;
    if (length === 0)
      return 0;
    if (length > maxLength)
      throw new TypeError("Script number overflow");
    if (minimal) {
      if ((buffer2[length - 1] & 127) === 0) {
        if (length <= 1 || (buffer2[length - 2] & 128) === 0)
          throw new Error("Non-minimally encoded script number");
      }
    }
    if (length === 5) {
      const a2 = buffer2.readUInt32LE(0);
      const b = buffer2.readUInt8(4);
      if (b & 128)
        return -((b & ~128) * 4294967296 + a2);
      return b * 4294967296 + a2;
    }
    let result = 0;
    for (let i = 0; i < length; ++i) {
      result |= buffer2[i] << 8 * i;
    }
    if (buffer2[length - 1] & 128)
      return -(result & ~(128 << 8 * (length - 1)));
    return result;
  }
  script_number.decode = decode$h;
  function scriptNumSize(i) {
    return i > 2147483647 ? 5 : i > 8388607 ? 4 : i > 32767 ? 3 : i > 127 ? 2 : i > 0 ? 1 : 0;
  }
  function encode$i(_number) {
    let value2 = Math.abs(_number);
    const size = scriptNumSize(value2);
    const buffer$1 = buffer.Buffer.allocUnsafe(size);
    const negative = _number < 0;
    for (let i = 0; i < size; ++i) {
      buffer$1.writeUInt8(value2 & 255, i);
      value2 >>= 8;
    }
    if (buffer$1[size - 1] & 128) {
      buffer$1.writeUInt8(negative ? 128 : 0, size - 1);
    } else if (negative) {
      buffer$1[size - 1] |= 128;
    }
    return buffer$1;
  }
  script_number.encode = encode$i;
  var script_signature = {};
  var types$8 = {};
  var types$7 = {
    Array: function(value2) {
      return value2 !== null && value2 !== void 0 && value2.constructor === Array;
    },
    Boolean: function(value2) {
      return typeof value2 === "boolean";
    },
    Function: function(value2) {
      return typeof value2 === "function";
    },
    Nil: function(value2) {
      return value2 === void 0 || value2 === null;
    },
    Number: function(value2) {
      return typeof value2 === "number";
    },
    Object: function(value2) {
      return typeof value2 === "object";
    },
    String: function(value2) {
      return typeof value2 === "string";
    },
    "": function() {
      return true;
    }
  };
  types$7.Null = types$7.Nil;
  for (var typeName$1 in types$7) {
    types$7[typeName$1].toJSON = function(t) {
      return t;
    }.bind(null, typeName$1);
  }
  var native$1 = types$7;
  var native = native$1;
  function getTypeName(fn) {
    return fn.name || fn.toString().match(/function (.*?)\s*\(/)[1];
  }
  function getValueTypeName$1(value2) {
    return native.Nil(value2) ? "" : getTypeName(value2.constructor);
  }
  function getValue(value2) {
    if (native.Function(value2))
      return "";
    if (native.String(value2))
      return JSON.stringify(value2);
    if (value2 && native.Object(value2))
      return "";
    return value2;
  }
  function captureStackTrace(e, t) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(e, t);
    }
  }
  function tfJSON$1(type) {
    if (native.Function(type))
      return type.toJSON ? type.toJSON() : getTypeName(type);
    if (native.Array(type))
      return "Array";
    if (type && native.Object(type))
      return "Object";
    return type !== void 0 ? type : "";
  }
  function tfErrorString(type, value2, valueTypeName) {
    var valueJson = getValue(value2);
    return "Expected " + tfJSON$1(type) + ", got" + (valueTypeName !== "" ? " " + valueTypeName : "") + (valueJson !== "" ? " " + valueJson : "");
  }
  function TfTypeError$1(type, value2, valueTypeName) {
    valueTypeName = valueTypeName || getValueTypeName$1(value2);
    this.message = tfErrorString(type, value2, valueTypeName);
    captureStackTrace(this, TfTypeError$1);
    this.__type = type;
    this.__value = value2;
    this.__valueTypeName = valueTypeName;
  }
  TfTypeError$1.prototype = Object.create(Error.prototype);
  TfTypeError$1.prototype.constructor = TfTypeError$1;
  function tfPropertyErrorString(type, label, name, value2, valueTypeName) {
    var description = '" of type ';
    if (label === "key")
      description = '" with key type ';
    return tfErrorString('property "' + tfJSON$1(name) + description + tfJSON$1(type), value2, valueTypeName);
  }
  function TfPropertyTypeError$1(type, property, label, value2, valueTypeName) {
    if (type) {
      valueTypeName = valueTypeName || getValueTypeName$1(value2);
      this.message = tfPropertyErrorString(type, label, property, value2, valueTypeName);
    } else {
      this.message = 'Unexpected property "' + property + '"';
    }
    captureStackTrace(this, TfTypeError$1);
    this.__label = label;
    this.__property = property;
    this.__type = type;
    this.__value = value2;
    this.__valueTypeName = valueTypeName;
  }
  TfPropertyTypeError$1.prototype = Object.create(Error.prototype);
  TfPropertyTypeError$1.prototype.constructor = TfTypeError$1;
  function tfCustomError(expected, actual) {
    return new TfTypeError$1(expected, {}, actual);
  }
  function tfSubError$1(e, property, label) {
    if (e instanceof TfPropertyTypeError$1) {
      property = property + "." + e.__property;
      e = new TfPropertyTypeError$1(e.__type, property, e.__label, e.__value, e.__valueTypeName);
    } else if (e instanceof TfTypeError$1) {
      e = new TfPropertyTypeError$1(e.__type, property, label, e.__value, e.__valueTypeName);
    }
    captureStackTrace(e);
    return e;
  }
  var errors = {
    TfTypeError: TfTypeError$1,
    TfPropertyTypeError: TfPropertyTypeError$1,
    tfCustomError,
    tfSubError: tfSubError$1,
    tfJSON: tfJSON$1,
    getValueTypeName: getValueTypeName$1
  };
  var extra;
  var hasRequiredExtra;
  function requireExtra() {
    if (hasRequiredExtra)
      return extra;
    hasRequiredExtra = 1;
    var NATIVE2 = native$1;
    var ERRORS2 = errors;
    function _Buffer2(value2) {
      return buffer.Buffer.isBuffer(value2);
    }
    function Hex(value2) {
      return typeof value2 === "string" && /^([0-9a-f]{2})+$/i.test(value2);
    }
    function _LengthN(type, length) {
      var name = type.toJSON();
      function Length(value2) {
        if (!type(value2))
          return false;
        if (value2.length === length)
          return true;
        throw ERRORS2.tfCustomError(name + "(Length: " + length + ")", name + "(Length: " + value2.length + ")");
      }
      Length.toJSON = function() {
        return name;
      };
      return Length;
    }
    var _ArrayN = _LengthN.bind(null, NATIVE2.Array);
    var _BufferN = _LengthN.bind(null, _Buffer2);
    var _HexN = _LengthN.bind(null, Hex);
    var _StringN = _LengthN.bind(null, NATIVE2.String);
    function Range(a2, b, f) {
      f = f || NATIVE2.Number;
      function _range(value2, strict) {
        return f(value2, strict) && value2 > a2 && value2 < b;
      }
      _range.toJSON = function() {
        return `${f.toJSON()} between [${a2}, ${b}]`;
      };
      return _range;
    }
    var INT53_MAX = Math.pow(2, 53) - 1;
    function Finite(value2) {
      return typeof value2 === "number" && isFinite(value2);
    }
    function Int8(value2) {
      return value2 << 24 >> 24 === value2;
    }
    function Int16(value2) {
      return value2 << 16 >> 16 === value2;
    }
    function Int32(value2) {
      return (value2 | 0) === value2;
    }
    function Int53(value2) {
      return typeof value2 === "number" && value2 >= -INT53_MAX && value2 <= INT53_MAX && Math.floor(value2) === value2;
    }
    function UInt8(value2) {
      return (value2 & 255) === value2;
    }
    function UInt16(value2) {
      return (value2 & 65535) === value2;
    }
    function UInt32(value2) {
      return value2 >>> 0 === value2;
    }
    function UInt53(value2) {
      return typeof value2 === "number" && value2 >= 0 && value2 <= INT53_MAX && Math.floor(value2) === value2;
    }
    var types2 = {
      ArrayN: _ArrayN,
      Buffer: _Buffer2,
      BufferN: _BufferN,
      Finite,
      Hex,
      HexN: _HexN,
      Int8,
      Int16,
      Int32,
      Int53,
      Range,
      StringN: _StringN,
      UInt8,
      UInt16,
      UInt32,
      UInt53
    };
    for (var typeName2 in types2) {
      types2[typeName2].toJSON = function(t) {
        return t;
      }.bind(null, typeName2);
    }
    extra = types2;
    return extra;
  }
  var ERRORS = errors;
  var NATIVE = native$1;
  var tfJSON = ERRORS.tfJSON;
  var TfTypeError = ERRORS.TfTypeError;
  var TfPropertyTypeError = ERRORS.TfPropertyTypeError;
  var tfSubError = ERRORS.tfSubError;
  var getValueTypeName = ERRORS.getValueTypeName;
  var TYPES = {
    arrayOf: function arrayOf(type, options) {
      type = compile(type);
      options = options || {};
      function _arrayOf(array, strict) {
        if (!NATIVE.Array(array))
          return false;
        if (NATIVE.Nil(array))
          return false;
        if (options.minLength !== void 0 && array.length < options.minLength)
          return false;
        if (options.maxLength !== void 0 && array.length > options.maxLength)
          return false;
        if (options.length !== void 0 && array.length !== options.length)
          return false;
        return array.every(function(value2, i) {
          try {
            return typeforce$4(type, value2, strict);
          } catch (e) {
            throw tfSubError(e, i);
          }
        });
      }
      _arrayOf.toJSON = function() {
        var str = "[" + tfJSON(type) + "]";
        if (options.length !== void 0) {
          str += "{" + options.length + "}";
        } else if (options.minLength !== void 0 || options.maxLength !== void 0) {
          str += "{" + (options.minLength === void 0 ? 0 : options.minLength) + "," + (options.maxLength === void 0 ? Infinity : options.maxLength) + "}";
        }
        return str;
      };
      return _arrayOf;
    },
    maybe: function maybe(type) {
      type = compile(type);
      function _maybe(value2, strict) {
        return NATIVE.Nil(value2) || type(value2, strict, maybe);
      }
      _maybe.toJSON = function() {
        return "?" + tfJSON(type);
      };
      return _maybe;
    },
    map: function map(propertyType, propertyKeyType) {
      propertyType = compile(propertyType);
      if (propertyKeyType)
        propertyKeyType = compile(propertyKeyType);
      function _map(value2, strict) {
        if (!NATIVE.Object(value2))
          return false;
        if (NATIVE.Nil(value2))
          return false;
        for (var propertyName in value2) {
          try {
            if (propertyKeyType) {
              typeforce$4(propertyKeyType, propertyName, strict);
            }
          } catch (e) {
            throw tfSubError(e, propertyName, "key");
          }
          try {
            var propertyValue = value2[propertyName];
            typeforce$4(propertyType, propertyValue, strict);
          } catch (e) {
            throw tfSubError(e, propertyName);
          }
        }
        return true;
      }
      if (propertyKeyType) {
        _map.toJSON = function() {
          return "{" + tfJSON(propertyKeyType) + ": " + tfJSON(propertyType) + "}";
        };
      } else {
        _map.toJSON = function() {
          return "{" + tfJSON(propertyType) + "}";
        };
      }
      return _map;
    },
    object: function object(uncompiled) {
      var type = {};
      for (var typePropertyName in uncompiled) {
        type[typePropertyName] = compile(uncompiled[typePropertyName]);
      }
      function _object(value2, strict) {
        if (!NATIVE.Object(value2))
          return false;
        if (NATIVE.Nil(value2))
          return false;
        var propertyName;
        try {
          for (propertyName in type) {
            var propertyType = type[propertyName];
            var propertyValue = value2[propertyName];
            typeforce$4(propertyType, propertyValue, strict);
          }
        } catch (e) {
          throw tfSubError(e, propertyName);
        }
        if (strict) {
          for (propertyName in value2) {
            if (type[propertyName])
              continue;
            throw new TfPropertyTypeError(void 0, propertyName);
          }
        }
        return true;
      }
      _object.toJSON = function() {
        return tfJSON(type);
      };
      return _object;
    },
    anyOf: function anyOf() {
      var types2 = [].slice.call(arguments).map(compile);
      function _anyOf(value2, strict) {
        return types2.some(function(type) {
          try {
            return typeforce$4(type, value2, strict);
          } catch (e) {
            return false;
          }
        });
      }
      _anyOf.toJSON = function() {
        return types2.map(tfJSON).join("|");
      };
      return _anyOf;
    },
    allOf: function allOf() {
      var types2 = [].slice.call(arguments).map(compile);
      function _allOf(value2, strict) {
        return types2.every(function(type) {
          try {
            return typeforce$4(type, value2, strict);
          } catch (e) {
            return false;
          }
        });
      }
      _allOf.toJSON = function() {
        return types2.map(tfJSON).join(" & ");
      };
      return _allOf;
    },
    quacksLike: function quacksLike(type) {
      function _quacksLike(value2) {
        return type === getValueTypeName(value2);
      }
      _quacksLike.toJSON = function() {
        return type;
      };
      return _quacksLike;
    },
    tuple: function tuple() {
      var types2 = [].slice.call(arguments).map(compile);
      function _tuple(values, strict) {
        if (NATIVE.Nil(values))
          return false;
        if (NATIVE.Nil(values.length))
          return false;
        if (strict && values.length !== types2.length)
          return false;
        return types2.every(function(type, i) {
          try {
            return typeforce$4(type, values[i], strict);
          } catch (e) {
            throw tfSubError(e, i);
          }
        });
      }
      _tuple.toJSON = function() {
        return "(" + types2.map(tfJSON).join(", ") + ")";
      };
      return _tuple;
    },
    value: function value2(expected) {
      function _value(actual) {
        return actual === expected;
      }
      _value.toJSON = function() {
        return expected;
      };
      return _value;
    }
  };
  TYPES.oneOf = TYPES.anyOf;
  function compile(type) {
    if (NATIVE.String(type)) {
      if (type[0] === "?")
        return TYPES.maybe(type.slice(1));
      return NATIVE[type] || TYPES.quacksLike(type);
    } else if (type && NATIVE.Object(type)) {
      if (NATIVE.Array(type)) {
        if (type.length !== 1)
          throw new TypeError("Expected compile() parameter of type Array of length 1");
        return TYPES.arrayOf(type[0]);
      }
      return TYPES.object(type);
    } else if (NATIVE.Function(type)) {
      return type;
    }
    return TYPES.value(type);
  }
  function typeforce$4(type, value2, strict, surrogate) {
    if (NATIVE.Function(type)) {
      if (type(value2, strict))
        return true;
      throw new TfTypeError(surrogate || type, value2);
    }
    return typeforce$4(compile(type), value2, strict);
  }
  for (var typeName in NATIVE) {
    typeforce$4[typeName] = NATIVE[typeName];
  }
  for (typeName in TYPES) {
    typeforce$4[typeName] = TYPES[typeName];
  }
  var EXTRA = requireExtra();
  for (typeName in EXTRA) {
    typeforce$4[typeName] = EXTRA[typeName];
  }
  typeforce$4.compile = compile;
  typeforce$4.TfTypeError = TfTypeError;
  typeforce$4.TfPropertyTypeError = TfPropertyTypeError;
  var typeforce_1 = typeforce$4;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.oneOf = exports2.Null = exports2.BufferN = exports2.Function = exports2.UInt32 = exports2.UInt8 = exports2.tuple = exports2.maybe = exports2.Hex = exports2.Buffer = exports2.String = exports2.Boolean = exports2.Array = exports2.Number = exports2.Hash256bit = exports2.Hash160bit = exports2.Buffer256bit = exports2.isTaptree = exports2.isTapleaf = exports2.TAPLEAF_VERSION_MASK = exports2.Network = exports2.ECPoint = exports2.Satoshi = exports2.Signer = exports2.BIP32Path = exports2.UInt31 = exports2.isPoint = exports2.typeforce = void 0;
    const buffer_12 = buffer;
    exports2.typeforce = typeforce_1;
    const ZERO32 = buffer_12.Buffer.alloc(32, 0);
    const EC_P = buffer_12.Buffer.from("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f", "hex");
    function isPoint2(p) {
      if (!buffer_12.Buffer.isBuffer(p))
        return false;
      if (p.length < 33)
        return false;
      const t = p[0];
      const x = p.slice(1, 33);
      if (x.compare(ZERO32) === 0)
        return false;
      if (x.compare(EC_P) >= 0)
        return false;
      if ((t === 2 || t === 3) && p.length === 33) {
        return true;
      }
      const y = p.slice(33);
      if (y.compare(ZERO32) === 0)
        return false;
      if (y.compare(EC_P) >= 0)
        return false;
      if (t === 4 && p.length === 65)
        return true;
      return false;
    }
    exports2.isPoint = isPoint2;
    const UINT31_MAX = Math.pow(2, 31) - 1;
    function UInt31(value2) {
      return exports2.typeforce.UInt32(value2) && value2 <= UINT31_MAX;
    }
    exports2.UInt31 = UInt31;
    function BIP32Path(value2) {
      return exports2.typeforce.String(value2) && !!value2.match(/^(m\/)?(\d+'?\/)*\d+'?$/);
    }
    exports2.BIP32Path = BIP32Path;
    BIP32Path.toJSON = () => {
      return "BIP32 derivation path";
    };
    function Signer(obj) {
      return (exports2.typeforce.Buffer(obj.publicKey) || typeof obj.getPublicKey === "function") && typeof obj.sign === "function";
    }
    exports2.Signer = Signer;
    const SATOSHI_MAX = 21 * 1e14;
    function Satoshi(value2) {
      return exports2.typeforce.UInt53(value2) && value2 <= SATOSHI_MAX;
    }
    exports2.Satoshi = Satoshi;
    exports2.ECPoint = exports2.typeforce.quacksLike("Point");
    exports2.Network = exports2.typeforce.compile({
      messagePrefix: exports2.typeforce.oneOf(exports2.typeforce.Buffer, exports2.typeforce.String),
      bip32: {
        public: exports2.typeforce.UInt32,
        private: exports2.typeforce.UInt32
      },
      pubKeyHash: exports2.typeforce.UInt8,
      scriptHash: exports2.typeforce.UInt8,
      wif: exports2.typeforce.UInt8
    });
    exports2.TAPLEAF_VERSION_MASK = 254;
    function isTapleaf(o) {
      if (!o || !("output" in o))
        return false;
      if (!buffer_12.Buffer.isBuffer(o.output))
        return false;
      if (o.version !== void 0)
        return (o.version & exports2.TAPLEAF_VERSION_MASK) === o.version;
      return true;
    }
    exports2.isTapleaf = isTapleaf;
    function isTaptree(scriptTree) {
      if (!(0, exports2.Array)(scriptTree))
        return isTapleaf(scriptTree);
      if (scriptTree.length !== 2)
        return false;
      return scriptTree.every((t) => isTaptree(t));
    }
    exports2.isTaptree = isTaptree;
    exports2.Buffer256bit = exports2.typeforce.BufferN(32);
    exports2.Hash160bit = exports2.typeforce.BufferN(20);
    exports2.Hash256bit = exports2.typeforce.BufferN(32);
    exports2.Number = exports2.typeforce.Number;
    exports2.Array = exports2.typeforce.Array;
    exports2.Boolean = exports2.typeforce.Boolean;
    exports2.String = exports2.typeforce.String;
    exports2.Buffer = exports2.typeforce.Buffer;
    exports2.Hex = exports2.typeforce.Hex;
    exports2.maybe = exports2.typeforce.maybe;
    exports2.tuple = exports2.typeforce.tuple;
    exports2.UInt8 = exports2.typeforce.UInt8;
    exports2.UInt32 = exports2.typeforce.UInt32;
    exports2.Function = exports2.typeforce.Function;
    exports2.BufferN = exports2.typeforce.BufferN;
    exports2.Null = exports2.typeforce.Null;
    exports2.oneOf = exports2.typeforce.oneOf;
  })(types$8);
  Object.defineProperty(script_signature, "__esModule", {
    value: true
  });
  script_signature.encode = script_signature.decode = void 0;
  const bip66 = bip66$1;
  const types$6 = types$8;
  const { typeforce: typeforce$3 } = types$6;
  const ZERO$1 = buffer.Buffer.alloc(1, 0);
  function toDER(x) {
    let i = 0;
    while (x[i] === 0)
      ++i;
    if (i === x.length)
      return ZERO$1;
    x = x.slice(i);
    if (x[0] & 128)
      return buffer.Buffer.concat([
        ZERO$1,
        x
      ], 1 + x.length);
    return x;
  }
  function fromDER(x) {
    if (x[0] === 0)
      x = x.slice(1);
    const buffer$1 = buffer.Buffer.alloc(32, 0);
    const bstart = Math.max(0, 32 - x.length);
    x.copy(buffer$1, bstart);
    return buffer$1;
  }
  function decode$g(buffer$1) {
    const hashType = buffer$1.readUInt8(buffer$1.length - 1);
    const hashTypeMod = hashType & ~128;
    if (hashTypeMod <= 0 || hashTypeMod >= 4)
      throw new Error("Invalid hashType " + hashType);
    const decoded = bip66.decode(buffer$1.slice(0, -1));
    const r = fromDER(decoded.r);
    const s = fromDER(decoded.s);
    const signature = buffer.Buffer.concat([
      r,
      s
    ], 64);
    return {
      signature,
      hashType
    };
  }
  script_signature.decode = decode$g;
  function encode$h(signature, hashType) {
    typeforce$3({
      signature: types$6.BufferN(64),
      hashType: types$6.UInt8
    }, {
      signature,
      hashType
    });
    const hashTypeMod = hashType & ~128;
    if (hashTypeMod <= 0 || hashTypeMod >= 4)
      throw new Error("Invalid hashType " + hashType);
    const hashTypeBuffer = buffer.Buffer.allocUnsafe(1);
    hashTypeBuffer.writeUInt8(hashType, 0);
    const r = toDER(signature.slice(0, 32));
    const s = toDER(signature.slice(32, 64));
    return buffer.Buffer.concat([
      bip66.encode(r, s),
      hashTypeBuffer
    ]);
  }
  script_signature.encode = encode$h;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.signature = exports2.number = exports2.isCanonicalScriptSignature = exports2.isDefinedHashType = exports2.isCanonicalPubKey = exports2.toStack = exports2.fromASM = exports2.toASM = exports2.decompile = exports2.compile = exports2.isPushOnly = exports2.OPS = void 0;
    const bip662 = bip66$1;
    const ops_12 = ops;
    Object.defineProperty(exports2, "OPS", {
      enumerable: true,
      get: function() {
        return ops_12.OPS;
      }
    });
    const pushdata = push_data;
    const scriptNumber = script_number;
    const scriptSignature = script_signature;
    const types2 = types$8;
    const { typeforce: typeforce2 } = types2;
    const OP_INT_BASE2 = ops_12.OPS.OP_RESERVED;
    function isOPInt(value2) {
      return types2.Number(value2) && (value2 === ops_12.OPS.OP_0 || value2 >= ops_12.OPS.OP_1 && value2 <= ops_12.OPS.OP_16 || value2 === ops_12.OPS.OP_1NEGATE);
    }
    function isPushOnlyChunk(value2) {
      return types2.Buffer(value2) || isOPInt(value2);
    }
    function isPushOnly(value2) {
      return types2.Array(value2) && value2.every(isPushOnlyChunk);
    }
    exports2.isPushOnly = isPushOnly;
    function asMinimalOP(buffer2) {
      if (buffer2.length === 0)
        return ops_12.OPS.OP_0;
      if (buffer2.length !== 1)
        return;
      if (buffer2[0] >= 1 && buffer2[0] <= 16)
        return OP_INT_BASE2 + buffer2[0];
      if (buffer2[0] === 129)
        return ops_12.OPS.OP_1NEGATE;
    }
    function chunksIsBuffer(buf) {
      return buffer.Buffer.isBuffer(buf);
    }
    function chunksIsArray(buf) {
      return types2.Array(buf);
    }
    function singleChunkIsBuffer(buf) {
      return buffer.Buffer.isBuffer(buf);
    }
    function compile2(chunks) {
      if (chunksIsBuffer(chunks))
        return chunks;
      typeforce2(types2.Array, chunks);
      const bufferSize = chunks.reduce((accum, chunk) => {
        if (singleChunkIsBuffer(chunk)) {
          if (chunk.length === 1 && asMinimalOP(chunk) !== void 0) {
            return accum + 1;
          }
          return accum + pushdata.encodingLength(chunk.length) + chunk.length;
        }
        return accum + 1;
      }, 0);
      const buffer$1 = buffer.Buffer.allocUnsafe(bufferSize);
      let offset = 0;
      chunks.forEach((chunk) => {
        if (singleChunkIsBuffer(chunk)) {
          const opcode = asMinimalOP(chunk);
          if (opcode !== void 0) {
            buffer$1.writeUInt8(opcode, offset);
            offset += 1;
            return;
          }
          offset += pushdata.encode(buffer$1, chunk.length, offset);
          chunk.copy(buffer$1, offset);
          offset += chunk.length;
        } else {
          buffer$1.writeUInt8(chunk, offset);
          offset += 1;
        }
      });
      if (offset !== buffer$1.length)
        throw new Error("Could not decode chunks");
      return buffer$1;
    }
    exports2.compile = compile2;
    function decompile(buffer2) {
      if (chunksIsArray(buffer2))
        return buffer2;
      typeforce2(types2.Buffer, buffer2);
      const chunks = [];
      let i = 0;
      while (i < buffer2.length) {
        const opcode = buffer2[i];
        if (opcode > ops_12.OPS.OP_0 && opcode <= ops_12.OPS.OP_PUSHDATA4) {
          const d = pushdata.decode(buffer2, i);
          if (d === null)
            return null;
          i += d.size;
          if (i + d.number > buffer2.length)
            return null;
          const data = buffer2.slice(i, i + d.number);
          i += d.number;
          const op = asMinimalOP(data);
          if (op !== void 0) {
            chunks.push(op);
          } else {
            chunks.push(data);
          }
        } else {
          chunks.push(opcode);
          i += 1;
        }
      }
      return chunks;
    }
    exports2.decompile = decompile;
    function toASM(chunks) {
      if (chunksIsBuffer(chunks)) {
        chunks = decompile(chunks);
      }
      return chunks.map((chunk) => {
        if (singleChunkIsBuffer(chunk)) {
          const op = asMinimalOP(chunk);
          if (op === void 0)
            return chunk.toString("hex");
          chunk = op;
        }
        return ops_12.REVERSE_OPS[chunk];
      }).join(" ");
    }
    exports2.toASM = toASM;
    function fromASM(asm) {
      typeforce2(types2.String, asm);
      return compile2(asm.split(" ").map((chunkStr) => {
        if (ops_12.OPS[chunkStr] !== void 0)
          return ops_12.OPS[chunkStr];
        typeforce2(types2.Hex, chunkStr);
        return buffer.Buffer.from(chunkStr, "hex");
      }));
    }
    exports2.fromASM = fromASM;
    function toStack(chunks) {
      chunks = decompile(chunks);
      typeforce2(isPushOnly, chunks);
      return chunks.map((op) => {
        if (singleChunkIsBuffer(op))
          return op;
        if (op === ops_12.OPS.OP_0)
          return buffer.Buffer.allocUnsafe(0);
        return scriptNumber.encode(op - OP_INT_BASE2);
      });
    }
    exports2.toStack = toStack;
    function isCanonicalPubKey(buffer2) {
      return types2.isPoint(buffer2);
    }
    exports2.isCanonicalPubKey = isCanonicalPubKey;
    function isDefinedHashType(hashType) {
      const hashTypeMod = hashType & ~128;
      return hashTypeMod > 0 && hashTypeMod < 4;
    }
    exports2.isDefinedHashType = isDefinedHashType;
    function isCanonicalScriptSignature(buffer$1) {
      if (!buffer.Buffer.isBuffer(buffer$1))
        return false;
      if (!isDefinedHashType(buffer$1[buffer$1.length - 1]))
        return false;
      return bip662.check(buffer$1.slice(0, -1));
    }
    exports2.isCanonicalScriptSignature = isCanonicalScriptSignature;
    exports2.number = scriptNumber;
    exports2.signature = scriptSignature;
  })(script);
  var lazy$8 = {};
  Object.defineProperty(lazy$8, "__esModule", {
    value: true
  });
  lazy$8.value = lazy$8.prop = void 0;
  function prop(object, name, f) {
    Object.defineProperty(object, name, {
      configurable: true,
      enumerable: true,
      get() {
        const _value = f.call(this);
        this[name] = _value;
        return _value;
      },
      set(_value) {
        Object.defineProperty(this, name, {
          configurable: true,
          enumerable: true,
          value: _value,
          writable: true
        });
      }
    });
  }
  lazy$8.prop = prop;
  function value(f) {
    let _value;
    return () => {
      if (_value !== void 0)
        return _value;
      _value = f();
      return _value;
    };
  }
  lazy$8.value = value;
  Object.defineProperty(embed, "__esModule", {
    value: true
  });
  embed.p2data = void 0;
  const networks_1$8 = networks$3;
  const bscript$b = script;
  const types_1$9 = types$8;
  const lazy$7 = lazy$8;
  const OPS$7 = bscript$b.OPS;
  function stacksEqual$4(a2, b) {
    if (a2.length !== b.length)
      return false;
    return a2.every((x, i) => {
      return x.equals(b[i]);
    });
  }
  function p2data(a2, opts) {
    if (!a2.data && !a2.output)
      throw new TypeError("Not enough data");
    opts = Object.assign({
      validate: true
    }, opts || {});
    (0, types_1$9.typeforce)({
      network: types_1$9.typeforce.maybe(types_1$9.typeforce.Object),
      output: types_1$9.typeforce.maybe(types_1$9.typeforce.Buffer),
      data: types_1$9.typeforce.maybe(types_1$9.typeforce.arrayOf(types_1$9.typeforce.Buffer))
    }, a2);
    const network = a2.network || networks_1$8.bitcoin;
    const o = {
      name: "embed",
      network
    };
    lazy$7.prop(o, "output", () => {
      if (!a2.data)
        return;
      return bscript$b.compile([
        OPS$7.OP_RETURN
      ].concat(a2.data));
    });
    lazy$7.prop(o, "data", () => {
      if (!a2.output)
        return;
      return bscript$b.decompile(a2.output).slice(1);
    });
    if (opts.validate) {
      if (a2.output) {
        const chunks = bscript$b.decompile(a2.output);
        if (chunks[0] !== OPS$7.OP_RETURN)
          throw new TypeError("Output is invalid");
        if (!chunks.slice(1).every(types_1$9.typeforce.Buffer))
          throw new TypeError("Output is invalid");
        if (a2.data && !stacksEqual$4(a2.data, o.data))
          throw new TypeError("Data mismatch");
      }
    }
    return Object.assign(o, a2);
  }
  embed.p2data = p2data;
  var p2ms$1 = {};
  Object.defineProperty(p2ms$1, "__esModule", {
    value: true
  });
  p2ms$1.p2ms = void 0;
  const networks_1$7 = networks$3;
  const bscript$a = script;
  const types_1$8 = types$8;
  const lazy$6 = lazy$8;
  const OPS$6 = bscript$a.OPS;
  const OP_INT_BASE = OPS$6.OP_RESERVED;
  function stacksEqual$3(a2, b) {
    if (a2.length !== b.length)
      return false;
    return a2.every((x, i) => {
      return x.equals(b[i]);
    });
  }
  function p2ms(a2, opts) {
    if (!a2.input && !a2.output && !(a2.pubkeys && a2.m !== void 0) && !a2.signatures)
      throw new TypeError("Not enough data");
    opts = Object.assign({
      validate: true
    }, opts || {});
    function isAcceptableSignature(x) {
      return bscript$a.isCanonicalScriptSignature(x) || (opts.allowIncomplete && x === OPS$6.OP_0) !== void 0;
    }
    (0, types_1$8.typeforce)({
      network: types_1$8.typeforce.maybe(types_1$8.typeforce.Object),
      m: types_1$8.typeforce.maybe(types_1$8.typeforce.Number),
      n: types_1$8.typeforce.maybe(types_1$8.typeforce.Number),
      output: types_1$8.typeforce.maybe(types_1$8.typeforce.Buffer),
      pubkeys: types_1$8.typeforce.maybe(types_1$8.typeforce.arrayOf(types_1$8.isPoint)),
      signatures: types_1$8.typeforce.maybe(types_1$8.typeforce.arrayOf(isAcceptableSignature)),
      input: types_1$8.typeforce.maybe(types_1$8.typeforce.Buffer)
    }, a2);
    const network = a2.network || networks_1$7.bitcoin;
    const o = {
      network
    };
    let chunks = [];
    let decoded = false;
    function decode2(output) {
      if (decoded)
        return;
      decoded = true;
      chunks = bscript$a.decompile(output);
      o.m = chunks[0] - OP_INT_BASE;
      o.n = chunks[chunks.length - 2] - OP_INT_BASE;
      o.pubkeys = chunks.slice(1, -2);
    }
    lazy$6.prop(o, "output", () => {
      if (!a2.m)
        return;
      if (!o.n)
        return;
      if (!a2.pubkeys)
        return;
      return bscript$a.compile([].concat(OP_INT_BASE + a2.m, a2.pubkeys, OP_INT_BASE + o.n, OPS$6.OP_CHECKMULTISIG));
    });
    lazy$6.prop(o, "m", () => {
      if (!o.output)
        return;
      decode2(o.output);
      return o.m;
    });
    lazy$6.prop(o, "n", () => {
      if (!o.pubkeys)
        return;
      return o.pubkeys.length;
    });
    lazy$6.prop(o, "pubkeys", () => {
      if (!a2.output)
        return;
      decode2(a2.output);
      return o.pubkeys;
    });
    lazy$6.prop(o, "signatures", () => {
      if (!a2.input)
        return;
      return bscript$a.decompile(a2.input).slice(1);
    });
    lazy$6.prop(o, "input", () => {
      if (!a2.signatures)
        return;
      return bscript$a.compile([
        OPS$6.OP_0
      ].concat(a2.signatures));
    });
    lazy$6.prop(o, "witness", () => {
      if (!o.input)
        return;
      return [];
    });
    lazy$6.prop(o, "name", () => {
      if (!o.m || !o.n)
        return;
      return `p2ms(${o.m} of ${o.n})`;
    });
    if (opts.validate) {
      if (a2.output) {
        decode2(a2.output);
        if (!types_1$8.typeforce.Number(chunks[0]))
          throw new TypeError("Output is invalid");
        if (!types_1$8.typeforce.Number(chunks[chunks.length - 2]))
          throw new TypeError("Output is invalid");
        if (chunks[chunks.length - 1] !== OPS$6.OP_CHECKMULTISIG)
          throw new TypeError("Output is invalid");
        if (o.m <= 0 || o.n > 16 || o.m > o.n || o.n !== chunks.length - 3)
          throw new TypeError("Output is invalid");
        if (!o.pubkeys.every((x) => (0, types_1$8.isPoint)(x)))
          throw new TypeError("Output is invalid");
        if (a2.m !== void 0 && a2.m !== o.m)
          throw new TypeError("m mismatch");
        if (a2.n !== void 0 && a2.n !== o.n)
          throw new TypeError("n mismatch");
        if (a2.pubkeys && !stacksEqual$3(a2.pubkeys, o.pubkeys))
          throw new TypeError("Pubkeys mismatch");
      }
      if (a2.pubkeys) {
        if (a2.n !== void 0 && a2.n !== a2.pubkeys.length)
          throw new TypeError("Pubkey count mismatch");
        o.n = a2.pubkeys.length;
        if (o.n < o.m)
          throw new TypeError("Pubkey count cannot be less than m");
      }
      if (a2.signatures) {
        if (a2.signatures.length < o.m)
          throw new TypeError("Not enough signatures provided");
        if (a2.signatures.length > o.m)
          throw new TypeError("Too many signatures provided");
      }
      if (a2.input) {
        if (a2.input[0] !== OPS$6.OP_0)
          throw new TypeError("Input is invalid");
        if (o.signatures.length === 0 || !o.signatures.every(isAcceptableSignature))
          throw new TypeError("Input has invalid signature(s)");
        if (a2.signatures && !stacksEqual$3(a2.signatures, o.signatures))
          throw new TypeError("Signature mismatch");
        if (a2.m !== void 0 && a2.m !== a2.signatures.length)
          throw new TypeError("Signature count mismatch");
      }
    }
    return Object.assign(o, a2);
  }
  p2ms$1.p2ms = p2ms;
  var p2pk$1 = {};
  Object.defineProperty(p2pk$1, "__esModule", {
    value: true
  });
  p2pk$1.p2pk = void 0;
  const networks_1$6 = networks$3;
  const bscript$9 = script;
  const types_1$7 = types$8;
  const lazy$5 = lazy$8;
  const OPS$5 = bscript$9.OPS;
  function p2pk(a2, opts) {
    if (!a2.input && !a2.output && !a2.pubkey && !a2.input && !a2.signature)
      throw new TypeError("Not enough data");
    opts = Object.assign({
      validate: true
    }, opts || {});
    (0, types_1$7.typeforce)({
      network: types_1$7.typeforce.maybe(types_1$7.typeforce.Object),
      output: types_1$7.typeforce.maybe(types_1$7.typeforce.Buffer),
      pubkey: types_1$7.typeforce.maybe(types_1$7.isPoint),
      signature: types_1$7.typeforce.maybe(bscript$9.isCanonicalScriptSignature),
      input: types_1$7.typeforce.maybe(types_1$7.typeforce.Buffer)
    }, a2);
    const _chunks = lazy$5.value(() => {
      return bscript$9.decompile(a2.input);
    });
    const network = a2.network || networks_1$6.bitcoin;
    const o = {
      name: "p2pk",
      network
    };
    lazy$5.prop(o, "output", () => {
      if (!a2.pubkey)
        return;
      return bscript$9.compile([
        a2.pubkey,
        OPS$5.OP_CHECKSIG
      ]);
    });
    lazy$5.prop(o, "pubkey", () => {
      if (!a2.output)
        return;
      return a2.output.slice(1, -1);
    });
    lazy$5.prop(o, "signature", () => {
      if (!a2.input)
        return;
      return _chunks()[0];
    });
    lazy$5.prop(o, "input", () => {
      if (!a2.signature)
        return;
      return bscript$9.compile([
        a2.signature
      ]);
    });
    lazy$5.prop(o, "witness", () => {
      if (!o.input)
        return;
      return [];
    });
    if (opts.validate) {
      if (a2.output) {
        if (a2.output[a2.output.length - 1] !== OPS$5.OP_CHECKSIG)
          throw new TypeError("Output is invalid");
        if (!(0, types_1$7.isPoint)(o.pubkey))
          throw new TypeError("Output pubkey is invalid");
        if (a2.pubkey && !a2.pubkey.equals(o.pubkey))
          throw new TypeError("Pubkey mismatch");
      }
      if (a2.signature) {
        if (a2.input && !a2.input.equals(o.input))
          throw new TypeError("Signature mismatch");
      }
      if (a2.input) {
        if (_chunks().length !== 1)
          throw new TypeError("Input is invalid");
        if (!bscript$9.isCanonicalScriptSignature(o.signature))
          throw new TypeError("Input has invalid signature");
      }
    }
    return Object.assign(o, a2);
  }
  p2pk$1.p2pk = p2pk;
  var p2pkh$1 = {};
  var crypto$1 = {};
  var inherits_browserExports = {};
  var inherits_browser = {
    get exports() {
      return inherits_browserExports;
    },
    set exports(v2) {
      inherits_browserExports = v2;
    }
  };
  if (typeof Object.create === "function") {
    inherits_browser.exports = function inherits2(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      }
    };
  } else {
    inherits_browser.exports = function inherits2(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      }
    };
  }
  var safeBufferExports = {};
  var safeBuffer = {
    get exports() {
      return safeBufferExports;
    },
    set exports(v2) {
      safeBufferExports = v2;
    }
  };
  (function(module, exports2) {
    var buffer$1 = buffer;
    var Buffer2 = buffer$1.Buffer;
    function copyProps(src2, dst) {
      for (var key in src2) {
        dst[key] = src2[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module.exports = buffer$1;
    } else {
      copyProps(buffer$1, exports2);
      exports2.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer$1.SlowBuffer(size);
    };
  })(safeBuffer, safeBufferExports);
  var readableBrowserExports = {};
  var readableBrowser = {
    get exports() {
      return readableBrowserExports;
    },
    set exports(v2) {
      readableBrowserExports = v2;
    }
  };
  var browserExports$1 = {};
  var browser$3 = {
    get exports() {
      return browserExports$1;
    },
    set exports(v2) {
      browserExports$1 = v2;
    }
  };
  var process = browser$3.exports = {};
  var cachedSetTimeout;
  var cachedClearTimeout;
  function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
  }
  function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      if (typeof setTimeout === "function") {
        cachedSetTimeout = setTimeout;
      } else {
        cachedSetTimeout = defaultSetTimout;
      }
    } catch (e) {
      cachedSetTimeout = defaultSetTimout;
    }
    try {
      if (typeof clearTimeout === "function") {
        cachedClearTimeout = clearTimeout;
      } else {
        cachedClearTimeout = defaultClearTimeout;
      }
    } catch (e) {
      cachedClearTimeout = defaultClearTimeout;
    }
  })();
  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
      return setTimeout(fun, 0);
    }
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
      cachedSetTimeout = setTimeout;
      return setTimeout(fun, 0);
    }
    try {
      return cachedSetTimeout(fun, 0);
    } catch (e) {
      try {
        return cachedSetTimeout.call(null, fun, 0);
      } catch (e2) {
        return cachedSetTimeout.call(this, fun, 0);
      }
    }
  }
  function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
      return clearTimeout(marker);
    }
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
      cachedClearTimeout = clearTimeout;
      return clearTimeout(marker);
    }
    try {
      return cachedClearTimeout(marker);
    } catch (e) {
      try {
        return cachedClearTimeout.call(null, marker);
      } catch (e2) {
        return cachedClearTimeout.call(this, marker);
      }
    }
  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      runTimeout(drainQueue);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = "browser";
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = "";
  process.versions = {};
  function noop$2() {
  }
  process.on = noop$2;
  process.addListener = noop$2;
  process.once = noop$2;
  process.off = noop$2;
  process.removeListener = noop$2;
  process.removeAllListeners = noop$2;
  process.emit = noop$2;
  process.prependListener = noop$2;
  process.prependOnceListener = noop$2;
  process.listeners = function(name) {
    return [];
  };
  process.binding = function(name) {
    throw new Error("process.binding is not supported");
  };
  process.cwd = function() {
    return "/";
  };
  process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
  };
  process.umask = function() {
    return 0;
  };
  var eventsExports = {};
  var events = {
    get exports() {
      return eventsExports;
    },
    set exports(v2) {
      eventsExports = v2;
    }
  };
  var R = typeof Reflect === "object" ? Reflect : null;
  var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  };
  var ReflectOwnKeys;
  if (R && typeof R.ownKeys === "function") {
    ReflectOwnKeys = R.ownKeys;
  } else if (Object.getOwnPropertySymbols) {
    ReflectOwnKeys = function ReflectOwnKeys2(target) {
      return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
    };
  } else {
    ReflectOwnKeys = function ReflectOwnKeys2(target) {
      return Object.getOwnPropertyNames(target);
    };
  }
  function ProcessEmitWarning(warning) {
    if (console && console.warn)
      console.warn(warning);
  }
  var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value2) {
    return value2 !== value2;
  };
  function EventEmitter() {
    EventEmitter.init.call(this);
  }
  events.exports = EventEmitter;
  eventsExports.once = once$2;
  EventEmitter.EventEmitter = EventEmitter;
  EventEmitter.prototype._events = void 0;
  EventEmitter.prototype._eventsCount = 0;
  EventEmitter.prototype._maxListeners = void 0;
  var defaultMaxListeners = 10;
  function checkListener(listener) {
    if (typeof listener !== "function") {
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
    }
  }
  Object.defineProperty(EventEmitter, "defaultMaxListeners", {
    enumerable: true,
    get: function() {
      return defaultMaxListeners;
    },
    set: function(arg) {
      if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
      }
      defaultMaxListeners = arg;
    }
  });
  EventEmitter.init = function() {
    if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
      this._events = /* @__PURE__ */ Object.create(null);
      this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || void 0;
  };
  EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
    }
    this._maxListeners = n;
    return this;
  };
  function _getMaxListeners(that) {
    if (that._maxListeners === void 0)
      return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
  }
  EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
  };
  EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for (var i = 1; i < arguments.length; i++)
      args.push(arguments[i]);
    var doError = type === "error";
    var events2 = this._events;
    if (events2 !== void 0)
      doError = doError && events2.error === void 0;
    else if (!doError)
      return false;
    if (doError) {
      var er;
      if (args.length > 0)
        er = args[0];
      if (er instanceof Error) {
        throw er;
      }
      var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
      err.context = er;
      throw err;
    }
    var handler = events2[type];
    if (handler === void 0)
      return false;
    if (typeof handler === "function") {
      ReflectApply(handler, this, args);
    } else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        ReflectApply(listeners[i], this, args);
    }
    return true;
  };
  function _addListener(target, type, listener, prepend) {
    var m;
    var events2;
    var existing;
    checkListener(listener);
    events2 = target._events;
    if (events2 === void 0) {
      events2 = target._events = /* @__PURE__ */ Object.create(null);
      target._eventsCount = 0;
    } else {
      if (events2.newListener !== void 0) {
        target.emit("newListener", type, listener.listener ? listener.listener : listener);
        events2 = target._events;
      }
      existing = events2[type];
    }
    if (existing === void 0) {
      existing = events2[type] = listener;
      ++target._eventsCount;
    } else {
      if (typeof existing === "function") {
        existing = events2[type] = prepend ? [
          listener,
          existing
        ] : [
          existing,
          listener
        ];
      } else if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
      m = _getMaxListeners(target);
      if (m > 0 && existing.length > m && !existing.warned) {
        existing.warned = true;
        var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        w.name = "MaxListenersExceededWarning";
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        ProcessEmitWarning(w);
      }
    }
    return target;
  }
  EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
  };
  EventEmitter.prototype.on = EventEmitter.prototype.addListener;
  EventEmitter.prototype.prependListener = function prependListener2(type, listener) {
    return _addListener(this, type, listener, true);
  };
  function onceWrapper() {
    if (!this.fired) {
      this.target.removeListener(this.type, this.wrapFn);
      this.fired = true;
      if (arguments.length === 0)
        return this.listener.call(this.target);
      return this.listener.apply(this.target, arguments);
    }
  }
  function _onceWrap(target, type, listener) {
    var state2 = {
      fired: false,
      wrapFn: void 0,
      target,
      type,
      listener
    };
    var wrapped = onceWrapper.bind(state2);
    wrapped.listener = listener;
    state2.wrapFn = wrapped;
    return wrapped;
  }
  EventEmitter.prototype.once = function once2(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
  };
  EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
  };
  EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events2, position, i, originalListener;
    checkListener(listener);
    events2 = this._events;
    if (events2 === void 0)
      return this;
    list = events2[type];
    if (list === void 0)
      return this;
    if (list === listener || list.listener === listener) {
      if (--this._eventsCount === 0)
        this._events = /* @__PURE__ */ Object.create(null);
      else {
        delete events2[type];
        if (events2.removeListener)
          this.emit("removeListener", type, list.listener || listener);
      }
    } else if (typeof list !== "function") {
      position = -1;
      for (i = list.length - 1; i >= 0; i--) {
        if (list[i] === listener || list[i].listener === listener) {
          originalListener = list[i].listener;
          position = i;
          break;
        }
      }
      if (position < 0)
        return this;
      if (position === 0)
        list.shift();
      else {
        spliceOne(list, position);
      }
      if (list.length === 1)
        events2[type] = list[0];
      if (events2.removeListener !== void 0)
        this.emit("removeListener", type, originalListener || listener);
    }
    return this;
  };
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events2, i;
    events2 = this._events;
    if (events2 === void 0)
      return this;
    if (events2.removeListener === void 0) {
      if (arguments.length === 0) {
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
      } else if (events2[type] !== void 0) {
        if (--this._eventsCount === 0)
          this._events = /* @__PURE__ */ Object.create(null);
        else
          delete events2[type];
      }
      return this;
    }
    if (arguments.length === 0) {
      var keys2 = Object.keys(events2);
      var key;
      for (i = 0; i < keys2.length; ++i) {
        key = keys2[i];
        if (key === "removeListener")
          continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners("removeListener");
      this._events = /* @__PURE__ */ Object.create(null);
      this._eventsCount = 0;
      return this;
    }
    listeners = events2[type];
    if (typeof listeners === "function") {
      this.removeListener(type, listeners);
    } else if (listeners !== void 0) {
      for (i = listeners.length - 1; i >= 0; i--) {
        this.removeListener(type, listeners[i]);
      }
    }
    return this;
  };
  function _listeners(target, type, unwrap) {
    var events2 = target._events;
    if (events2 === void 0)
      return [];
    var evlistener = events2[type];
    if (evlistener === void 0)
      return [];
    if (typeof evlistener === "function")
      return unwrap ? [
        evlistener.listener || evlistener
      ] : [
        evlistener
      ];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
  }
  EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
  };
  EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
  };
  EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === "function") {
      return emitter.listenerCount(type);
    } else {
      return listenerCount$1.call(emitter, type);
    }
  };
  EventEmitter.prototype.listenerCount = listenerCount$1;
  function listenerCount$1(type) {
    var events2 = this._events;
    if (events2 !== void 0) {
      var evlistener = events2[type];
      if (typeof evlistener === "function") {
        return 1;
      } else if (evlistener !== void 0) {
        return evlistener.length;
      }
    }
    return 0;
  }
  EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
  };
  function arrayClone(arr, n) {
    var copy = new Array(n);
    for (var i = 0; i < n; ++i)
      copy[i] = arr[i];
    return copy;
  }
  function spliceOne(list, index) {
    for (; index + 1 < list.length; index++)
      list[index] = list[index + 1];
    list.pop();
  }
  function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for (var i = 0; i < ret.length; ++i) {
      ret[i] = arr[i].listener || arr[i];
    }
    return ret;
  }
  function once$2(emitter, name) {
    return new Promise(function(resolve, reject) {
      function errorListener(err) {
        emitter.removeListener(name, resolver);
        reject(err);
      }
      function resolver() {
        if (typeof emitter.removeListener === "function") {
          emitter.removeListener("error", errorListener);
        }
        resolve([].slice.call(arguments));
      }
      eventTargetAgnosticAddListener(emitter, name, resolver, {
        once: true
      });
      if (name !== "error") {
        addErrorHandlerIfEventEmitter(emitter, errorListener, {
          once: true
        });
      }
    });
  }
  function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === "function") {
      eventTargetAgnosticAddListener(emitter, "error", handler, flags);
    }
  }
  function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === "function") {
      if (flags.once) {
        emitter.once(name, listener);
      } else {
        emitter.on(name, listener);
      }
    } else if (typeof emitter.addEventListener === "function") {
      emitter.addEventListener(name, function wrapListener(arg) {
        if (flags.once) {
          emitter.removeEventListener(name, wrapListener);
        }
        listener(arg);
      });
    } else {
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
    }
  }
  var streamBrowser = eventsExports.EventEmitter;
  const require$$3 = getAugmentedNamespace(__viteBrowserExternal);
  var buffer_list;
  var hasRequiredBuffer_list;
  function requireBuffer_list() {
    if (hasRequiredBuffer_list)
      return buffer_list;
    hasRequiredBuffer_list = 1;
    function ownKeys(object, enumerableOnly) {
      var keys2 = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys2.push.apply(keys2, symbols);
      }
      return keys2;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value2) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value2,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value2;
      }
      return obj;
    }
    function _classCallCheck(instance2, Constructor) {
      if (!(instance2 instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var _require = buffer, Buffer2 = _require.Buffer;
    var _require2 = require$$3, inspect = _require2.inspect;
    var custom = inspect && inspect.custom || "inspect";
    function copyBuffer(src2, target, offset) {
      Buffer2.prototype.copy.call(src2, target, offset);
    }
    buffer_list = function() {
      function BufferList2() {
        _classCallCheck(this, BufferList2);
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      _createClass(BufferList2, [
        {
          key: "push",
          value: function push(v2) {
            var entry = {
              data: v2,
              next: null
            };
            if (this.length > 0)
              this.tail.next = entry;
            else
              this.head = entry;
            this.tail = entry;
            ++this.length;
          }
        },
        {
          key: "unshift",
          value: function unshift(v2) {
            var entry = {
              data: v2,
              next: this.head
            };
            if (this.length === 0)
              this.tail = entry;
            this.head = entry;
            ++this.length;
          }
        },
        {
          key: "shift",
          value: function shift() {
            if (this.length === 0)
              return;
            var ret = this.head.data;
            if (this.length === 1)
              this.head = this.tail = null;
            else
              this.head = this.head.next;
            --this.length;
            return ret;
          }
        },
        {
          key: "clear",
          value: function clear() {
            this.head = this.tail = null;
            this.length = 0;
          }
        },
        {
          key: "join",
          value: function join(s) {
            if (this.length === 0)
              return "";
            var p = this.head;
            var ret = "" + p.data;
            while (p = p.next) {
              ret += s + p.data;
            }
            return ret;
          }
        },
        {
          key: "concat",
          value: function concat(n) {
            if (this.length === 0)
              return Buffer2.alloc(0);
            var ret = Buffer2.allocUnsafe(n >>> 0);
            var p = this.head;
            var i = 0;
            while (p) {
              copyBuffer(p.data, ret, i);
              i += p.data.length;
              p = p.next;
            }
            return ret;
          }
        },
        {
          key: "consume",
          value: function consume(n, hasStrings) {
            var ret;
            if (n < this.head.data.length) {
              ret = this.head.data.slice(0, n);
              this.head.data = this.head.data.slice(n);
            } else if (n === this.head.data.length) {
              ret = this.shift();
            } else {
              ret = hasStrings ? this._getString(n) : this._getBuffer(n);
            }
            return ret;
          }
        },
        {
          key: "first",
          value: function first() {
            return this.head.data;
          }
        },
        {
          key: "_getString",
          value: function _getString(n) {
            var p = this.head;
            var c = 1;
            var ret = p.data;
            n -= ret.length;
            while (p = p.next) {
              var str = p.data;
              var nb = n > str.length ? str.length : n;
              if (nb === str.length)
                ret += str;
              else
                ret += str.slice(0, n);
              n -= nb;
              if (n === 0) {
                if (nb === str.length) {
                  ++c;
                  if (p.next)
                    this.head = p.next;
                  else
                    this.head = this.tail = null;
                } else {
                  this.head = p;
                  p.data = str.slice(nb);
                }
                break;
              }
              ++c;
            }
            this.length -= c;
            return ret;
          }
        },
        {
          key: "_getBuffer",
          value: function _getBuffer(n) {
            var ret = Buffer2.allocUnsafe(n);
            var p = this.head;
            var c = 1;
            p.data.copy(ret);
            n -= p.data.length;
            while (p = p.next) {
              var buf = p.data;
              var nb = n > buf.length ? buf.length : n;
              buf.copy(ret, ret.length - n, 0, nb);
              n -= nb;
              if (n === 0) {
                if (nb === buf.length) {
                  ++c;
                  if (p.next)
                    this.head = p.next;
                  else
                    this.head = this.tail = null;
                } else {
                  this.head = p;
                  p.data = buf.slice(nb);
                }
                break;
              }
              ++c;
            }
            this.length -= c;
            return ret;
          }
        },
        {
          key: custom,
          value: function value2(_, options) {
            return inspect(this, _objectSpread({}, options, {
              depth: 0,
              customInspect: false
            }));
          }
        }
      ]);
      return BufferList2;
    }();
    return buffer_list;
  }
  function destroy(err, cb) {
    var _this = this;
    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;
    if (readableDestroyed || writableDestroyed) {
      if (cb) {
        cb(err);
      } else if (err) {
        if (!this._writableState) {
          browserExports$1.nextTick(emitErrorNT, this, err);
        } else if (!this._writableState.errorEmitted) {
          this._writableState.errorEmitted = true;
          browserExports$1.nextTick(emitErrorNT, this, err);
        }
      }
      return this;
    }
    if (this._readableState) {
      this._readableState.destroyed = true;
    }
    if (this._writableState) {
      this._writableState.destroyed = true;
    }
    this._destroy(err || null, function(err2) {
      if (!cb && err2) {
        if (!_this._writableState) {
          browserExports$1.nextTick(emitErrorAndCloseNT, _this, err2);
        } else if (!_this._writableState.errorEmitted) {
          _this._writableState.errorEmitted = true;
          browserExports$1.nextTick(emitErrorAndCloseNT, _this, err2);
        } else {
          browserExports$1.nextTick(emitCloseNT, _this);
        }
      } else if (cb) {
        browserExports$1.nextTick(emitCloseNT, _this);
        cb(err2);
      } else {
        browserExports$1.nextTick(emitCloseNT, _this);
      }
    });
    return this;
  }
  function emitErrorAndCloseNT(self, err) {
    emitErrorNT(self, err);
    emitCloseNT(self);
  }
  function emitCloseNT(self) {
    if (self._writableState && !self._writableState.emitClose)
      return;
    if (self._readableState && !self._readableState.emitClose)
      return;
    self.emit("close");
  }
  function undestroy() {
    if (this._readableState) {
      this._readableState.destroyed = false;
      this._readableState.reading = false;
      this._readableState.ended = false;
      this._readableState.endEmitted = false;
    }
    if (this._writableState) {
      this._writableState.destroyed = false;
      this._writableState.ended = false;
      this._writableState.ending = false;
      this._writableState.finalCalled = false;
      this._writableState.prefinished = false;
      this._writableState.finished = false;
      this._writableState.errorEmitted = false;
    }
  }
  function emitErrorNT(self, err) {
    self.emit("error", err);
  }
  function errorOrDestroy(stream2, err) {
    var rState = stream2._readableState;
    var wState = stream2._writableState;
    if (rState && rState.autoDestroy || wState && wState.autoDestroy)
      stream2.destroy(err);
    else
      stream2.emit("error", err);
  }
  var destroy_1 = {
    destroy,
    undestroy,
    errorOrDestroy
  };
  var errorsBrowser = {};
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var codes = {};
  function createErrorType(code, message, Base2) {
    if (!Base2) {
      Base2 = Error;
    }
    function getMessage(arg1, arg2, arg3) {
      if (typeof message === "string") {
        return message;
      } else {
        return message(arg1, arg2, arg3);
      }
    }
    var NodeError = function(_Base) {
      _inheritsLoose(NodeError2, _Base);
      function NodeError2(arg1, arg2, arg3) {
        return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
      }
      return NodeError2;
    }(Base2);
    NodeError.prototype.name = Base2.name;
    NodeError.prototype.code = code;
    codes[code] = NodeError;
  }
  function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
      var len = expected.length;
      expected = expected.map(function(i) {
        return String(i);
      });
      if (len > 2) {
        return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
      } else if (len === 2) {
        return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
      } else {
        return "of ".concat(thing, " ").concat(expected[0]);
      }
    } else {
      return "of ".concat(thing, " ").concat(String(expected));
    }
  }
  function startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
  }
  function endsWith(str, search, this_len) {
    if (this_len === void 0 || this_len > str.length) {
      this_len = str.length;
    }
    return str.substring(this_len - search.length, this_len) === search;
  }
  function includes(str, search, start) {
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + search.length > str.length) {
      return false;
    } else {
      return str.indexOf(search, start) !== -1;
    }
  }
  createErrorType("ERR_INVALID_OPT_VALUE", function(name, value2) {
    return 'The value "' + value2 + '" is invalid for option "' + name + '"';
  }, TypeError);
  createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
    var determiner;
    if (typeof expected === "string" && startsWith(expected, "not ")) {
      determiner = "must not be";
      expected = expected.replace(/^not /, "");
    } else {
      determiner = "must be";
    }
    var msg;
    if (endsWith(name, " argument")) {
      msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    } else {
      var type = includes(name, ".") ? "property" : "argument";
      msg = 'The "'.concat(name, '" ').concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    }
    msg += ". Received type ".concat(typeof actual);
    return msg;
  }, TypeError);
  createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
  createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
    return "The " + name + " method is not implemented";
  });
  createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
  createErrorType("ERR_STREAM_DESTROYED", function(name) {
    return "Cannot call " + name + " after a stream was destroyed";
  });
  createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
  createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
  createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
  createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
  createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
    return "Unknown encoding: " + arg;
  }, TypeError);
  createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
  errorsBrowser.codes = codes;
  var ERR_INVALID_OPT_VALUE = errorsBrowser.codes.ERR_INVALID_OPT_VALUE;
  function highWaterMarkFrom(options, isDuplex, duplexKey) {
    return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
  }
  function getHighWaterMark(state2, options, duplexKey, isDuplex) {
    var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
    if (hwm != null) {
      if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
        var name = isDuplex ? duplexKey : "highWaterMark";
        throw new ERR_INVALID_OPT_VALUE(name, hwm);
      }
      return Math.floor(hwm);
    }
    return state2.objectMode ? 16 : 16 * 1024;
  }
  var state = {
    getHighWaterMark
  };
  var browser$2;
  var hasRequiredBrowser;
  function requireBrowser() {
    if (hasRequiredBrowser)
      return browser$2;
    hasRequiredBrowser = 1;
    browser$2 = deprecate;
    function deprecate(fn, msg) {
      if (config("noDeprecation")) {
        return fn;
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (config("throwDeprecation")) {
            throw new Error(msg);
          } else if (config("traceDeprecation")) {
            console.trace(msg);
          } else {
            console.warn(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      return deprecated;
    }
    function config(name) {
      try {
        if (!commonjsGlobal.localStorage)
          return false;
      } catch (_) {
        return false;
      }
      var val = commonjsGlobal.localStorage[name];
      if (null == val)
        return false;
      return String(val).toLowerCase() === "true";
    }
    return browser$2;
  }
  var _stream_writable;
  var hasRequired_stream_writable;
  function require_stream_writable() {
    if (hasRequired_stream_writable)
      return _stream_writable;
    hasRequired_stream_writable = 1;
    _stream_writable = Writable2;
    function CorkedRequest2(state2) {
      var _this = this;
      this.next = null;
      this.entry = null;
      this.finish = function() {
        onCorkedFinish(_this, state2);
      };
    }
    var Duplex2;
    Writable2.WritableState = WritableState2;
    var internalUtil = {
      deprecate: requireBrowser()
    };
    var Stream2 = streamBrowser;
    var Buffer2 = buffer.Buffer;
    var OurUint8Array = commonjsGlobal.Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var destroyImpl = destroy_1;
    var _require = state, getHighWaterMark2 = _require.getHighWaterMark;
    var _require$codes2 = errorsBrowser.codes, ERR_INVALID_ARG_TYPE = _require$codes2.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED2 = _require$codes2.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK2 = _require$codes2.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes2.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED2 = _require$codes2.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes2.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes2.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes2.ERR_UNKNOWN_ENCODING;
    var errorOrDestroy2 = destroyImpl.errorOrDestroy;
    inherits_browserExports(Writable2, Stream2);
    function nop2() {
    }
    function WritableState2(options, stream2, isDuplex) {
      Duplex2 = Duplex2 || require_stream_duplex();
      options = options || {};
      if (typeof isDuplex !== "boolean")
        isDuplex = stream2 instanceof Duplex2;
      this.objectMode = !!options.objectMode;
      if (isDuplex)
        this.objectMode = this.objectMode || !!options.writableObjectMode;
      this.highWaterMark = getHighWaterMark2(this, options, "writableHighWaterMark", isDuplex);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      var noDecode = options.decodeStrings === false;
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function(er) {
        onwrite2(stream2, er);
      };
      this.writecb = null;
      this.writelen = 0;
      this.bufferedRequest = null;
      this.lastBufferedRequest = null;
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
      this.emitClose = options.emitClose !== false;
      this.autoDestroy = !!options.autoDestroy;
      this.bufferedRequestCount = 0;
      this.corkedRequestsFree = new CorkedRequest2(this);
    }
    WritableState2.prototype.getBuffer = function getBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    };
    (function() {
      try {
        Object.defineProperty(WritableState2.prototype, "buffer", {
          get: internalUtil.deprecate(function writableStateBufferGetter() {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch (_) {
      }
    })();
    var realHasInstance;
    if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
      realHasInstance = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(Writable2, Symbol.hasInstance, {
        value: function value2(object) {
          if (realHasInstance.call(this, object))
            return true;
          if (this !== Writable2)
            return false;
          return object && object._writableState instanceof WritableState2;
        }
      });
    } else {
      realHasInstance = function realHasInstance2(object) {
        return object instanceof this;
      };
    }
    function Writable2(options) {
      Duplex2 = Duplex2 || require_stream_duplex();
      var isDuplex = this instanceof Duplex2;
      if (!isDuplex && !realHasInstance.call(Writable2, this))
        return new Writable2(options);
      this._writableState = new WritableState2(options, this, isDuplex);
      this.writable = true;
      if (options) {
        if (typeof options.write === "function")
          this._write = options.write;
        if (typeof options.writev === "function")
          this._writev = options.writev;
        if (typeof options.destroy === "function")
          this._destroy = options.destroy;
        if (typeof options.final === "function")
          this._final = options.final;
      }
      Stream2.call(this);
    }
    Writable2.prototype.pipe = function() {
      errorOrDestroy2(this, new ERR_STREAM_CANNOT_PIPE());
    };
    function writeAfterEnd2(stream2, cb) {
      var er = new ERR_STREAM_WRITE_AFTER_END();
      errorOrDestroy2(stream2, er);
      browserExports$1.nextTick(cb, er);
    }
    function validChunk2(stream2, state2, chunk, cb) {
      var er;
      if (chunk === null) {
        er = new ERR_STREAM_NULL_VALUES();
      } else if (typeof chunk !== "string" && !state2.objectMode) {
        er = new ERR_INVALID_ARG_TYPE("chunk", [
          "string",
          "Buffer"
        ], chunk);
      }
      if (er) {
        errorOrDestroy2(stream2, er);
        browserExports$1.nextTick(cb, er);
        return false;
      }
      return true;
    }
    Writable2.prototype.write = function(chunk, encoding, cb) {
      var state2 = this._writableState;
      var ret = false;
      var isBuf = !state2.objectMode && _isUint8Array(chunk);
      if (isBuf && !Buffer2.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
      }
      if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (isBuf)
        encoding = "buffer";
      else if (!encoding)
        encoding = state2.defaultEncoding;
      if (typeof cb !== "function")
        cb = nop2;
      if (state2.ending)
        writeAfterEnd2(this, cb);
      else if (isBuf || validChunk2(this, state2, chunk, cb)) {
        state2.pendingcb++;
        ret = writeOrBuffer2(this, state2, isBuf, chunk, encoding, cb);
      }
      return ret;
    };
    Writable2.prototype.cork = function() {
      this._writableState.corked++;
    };
    Writable2.prototype.uncork = function() {
      var state2 = this._writableState;
      if (state2.corked) {
        state2.corked--;
        if (!state2.writing && !state2.corked && !state2.bufferProcessing && state2.bufferedRequest)
          clearBuffer2(this, state2);
      }
    };
    Writable2.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
      if (typeof encoding === "string")
        encoding = encoding.toLowerCase();
      if (!([
        "hex",
        "utf8",
        "utf-8",
        "ascii",
        "binary",
        "base64",
        "ucs2",
        "ucs-2",
        "utf16le",
        "utf-16le",
        "raw"
      ].indexOf((encoding + "").toLowerCase()) > -1))
        throw new ERR_UNKNOWN_ENCODING(encoding);
      this._writableState.defaultEncoding = encoding;
      return this;
    };
    Object.defineProperty(Writable2.prototype, "writableBuffer", {
      enumerable: false,
      get: function get() {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    function decodeChunk2(state2, chunk, encoding) {
      if (!state2.objectMode && state2.decodeStrings !== false && typeof chunk === "string") {
        chunk = Buffer2.from(chunk, encoding);
      }
      return chunk;
    }
    Object.defineProperty(Writable2.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function get() {
        return this._writableState.highWaterMark;
      }
    });
    function writeOrBuffer2(stream2, state2, isBuf, chunk, encoding, cb) {
      if (!isBuf) {
        var newChunk = decodeChunk2(state2, chunk, encoding);
        if (chunk !== newChunk) {
          isBuf = true;
          encoding = "buffer";
          chunk = newChunk;
        }
      }
      var len = state2.objectMode ? 1 : chunk.length;
      state2.length += len;
      var ret = state2.length < state2.highWaterMark;
      if (!ret)
        state2.needDrain = true;
      if (state2.writing || state2.corked) {
        var last = state2.lastBufferedRequest;
        state2.lastBufferedRequest = {
          chunk,
          encoding,
          isBuf,
          callback: cb,
          next: null
        };
        if (last) {
          last.next = state2.lastBufferedRequest;
        } else {
          state2.bufferedRequest = state2.lastBufferedRequest;
        }
        state2.bufferedRequestCount += 1;
      } else {
        doWrite2(stream2, state2, false, len, chunk, encoding, cb);
      }
      return ret;
    }
    function doWrite2(stream2, state2, writev, len, chunk, encoding, cb) {
      state2.writelen = len;
      state2.writecb = cb;
      state2.writing = true;
      state2.sync = true;
      if (state2.destroyed)
        state2.onwrite(new ERR_STREAM_DESTROYED2("write"));
      else if (writev)
        stream2._writev(chunk, state2.onwrite);
      else
        stream2._write(chunk, encoding, state2.onwrite);
      state2.sync = false;
    }
    function onwriteError2(stream2, state2, sync, er, cb) {
      --state2.pendingcb;
      if (sync) {
        browserExports$1.nextTick(cb, er);
        browserExports$1.nextTick(finishMaybe2, stream2, state2);
        stream2._writableState.errorEmitted = true;
        errorOrDestroy2(stream2, er);
      } else {
        cb(er);
        stream2._writableState.errorEmitted = true;
        errorOrDestroy2(stream2, er);
        finishMaybe2(stream2, state2);
      }
    }
    function onwriteStateUpdate2(state2) {
      state2.writing = false;
      state2.writecb = null;
      state2.length -= state2.writelen;
      state2.writelen = 0;
    }
    function onwrite2(stream2, er) {
      var state2 = stream2._writableState;
      var sync = state2.sync;
      var cb = state2.writecb;
      if (typeof cb !== "function")
        throw new ERR_MULTIPLE_CALLBACK2();
      onwriteStateUpdate2(state2);
      if (er)
        onwriteError2(stream2, state2, sync, er, cb);
      else {
        var finished = needFinish2(state2) || stream2.destroyed;
        if (!finished && !state2.corked && !state2.bufferProcessing && state2.bufferedRequest) {
          clearBuffer2(stream2, state2);
        }
        if (sync) {
          browserExports$1.nextTick(afterWrite2, stream2, state2, finished, cb);
        } else {
          afterWrite2(stream2, state2, finished, cb);
        }
      }
    }
    function afterWrite2(stream2, state2, finished, cb) {
      if (!finished)
        onwriteDrain2(stream2, state2);
      state2.pendingcb--;
      cb();
      finishMaybe2(stream2, state2);
    }
    function onwriteDrain2(stream2, state2) {
      if (state2.length === 0 && state2.needDrain) {
        state2.needDrain = false;
        stream2.emit("drain");
      }
    }
    function clearBuffer2(stream2, state2) {
      state2.bufferProcessing = true;
      var entry = state2.bufferedRequest;
      if (stream2._writev && entry && entry.next) {
        var l = state2.bufferedRequestCount;
        var buffer2 = new Array(l);
        var holder = state2.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while (entry) {
          buffer2[count] = entry;
          if (!entry.isBuf)
            allBuffers = false;
          entry = entry.next;
          count += 1;
        }
        buffer2.allBuffers = allBuffers;
        doWrite2(stream2, state2, true, state2.length, buffer2, "", holder.finish);
        state2.pendingcb++;
        state2.lastBufferedRequest = null;
        if (holder.next) {
          state2.corkedRequestsFree = holder.next;
          holder.next = null;
        } else {
          state2.corkedRequestsFree = new CorkedRequest2(state2);
        }
        state2.bufferedRequestCount = 0;
      } else {
        while (entry) {
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state2.objectMode ? 1 : chunk.length;
          doWrite2(stream2, state2, false, len, chunk, encoding, cb);
          entry = entry.next;
          state2.bufferedRequestCount--;
          if (state2.writing) {
            break;
          }
        }
        if (entry === null)
          state2.lastBufferedRequest = null;
      }
      state2.bufferedRequest = entry;
      state2.bufferProcessing = false;
    }
    Writable2.prototype._write = function(chunk, encoding, cb) {
      cb(new ERR_METHOD_NOT_IMPLEMENTED2("_write()"));
    };
    Writable2.prototype._writev = null;
    Writable2.prototype.end = function(chunk, encoding, cb) {
      var state2 = this._writableState;
      if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (chunk !== null && chunk !== void 0)
        this.write(chunk, encoding);
      if (state2.corked) {
        state2.corked = 1;
        this.uncork();
      }
      if (!state2.ending)
        endWritable2(this, state2, cb);
      return this;
    };
    Object.defineProperty(Writable2.prototype, "writableLength", {
      enumerable: false,
      get: function get() {
        return this._writableState.length;
      }
    });
    function needFinish2(state2) {
      return state2.ending && state2.length === 0 && state2.bufferedRequest === null && !state2.finished && !state2.writing;
    }
    function callFinal(stream2, state2) {
      stream2._final(function(err) {
        state2.pendingcb--;
        if (err) {
          errorOrDestroy2(stream2, err);
        }
        state2.prefinished = true;
        stream2.emit("prefinish");
        finishMaybe2(stream2, state2);
      });
    }
    function prefinish2(stream2, state2) {
      if (!state2.prefinished && !state2.finalCalled) {
        if (typeof stream2._final === "function" && !state2.destroyed) {
          state2.pendingcb++;
          state2.finalCalled = true;
          browserExports$1.nextTick(callFinal, stream2, state2);
        } else {
          state2.prefinished = true;
          stream2.emit("prefinish");
        }
      }
    }
    function finishMaybe2(stream2, state2) {
      var need = needFinish2(state2);
      if (need) {
        prefinish2(stream2, state2);
        if (state2.pendingcb === 0) {
          state2.finished = true;
          stream2.emit("finish");
          if (state2.autoDestroy) {
            var rState = stream2._readableState;
            if (!rState || rState.autoDestroy && rState.endEmitted) {
              stream2.destroy();
            }
          }
        }
      }
      return need;
    }
    function endWritable2(stream2, state2, cb) {
      state2.ending = true;
      finishMaybe2(stream2, state2);
      if (cb) {
        if (state2.finished)
          browserExports$1.nextTick(cb);
        else
          stream2.once("finish", cb);
      }
      state2.ended = true;
      stream2.writable = false;
    }
    function onCorkedFinish(corkReq, state2, err) {
      var entry = corkReq.entry;
      corkReq.entry = null;
      while (entry) {
        var cb = entry.callback;
        state2.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      state2.corkedRequestsFree.next = corkReq;
    }
    Object.defineProperty(Writable2.prototype, "destroyed", {
      enumerable: false,
      get: function get() {
        if (this._writableState === void 0) {
          return false;
        }
        return this._writableState.destroyed;
      },
      set: function set(value2) {
        if (!this._writableState) {
          return;
        }
        this._writableState.destroyed = value2;
      }
    });
    Writable2.prototype.destroy = destroyImpl.destroy;
    Writable2.prototype._undestroy = destroyImpl.undestroy;
    Writable2.prototype._destroy = function(err, cb) {
      cb(err);
    };
    return _stream_writable;
  }
  var _stream_duplex;
  var hasRequired_stream_duplex;
  function require_stream_duplex() {
    if (hasRequired_stream_duplex)
      return _stream_duplex;
    hasRequired_stream_duplex = 1;
    var objectKeys = Object.keys || function(obj) {
      var keys3 = [];
      for (var key in obj) {
        keys3.push(key);
      }
      return keys3;
    };
    _stream_duplex = Duplex2;
    var Readable2 = require_stream_readable();
    var Writable2 = require_stream_writable();
    inherits_browserExports(Duplex2, Readable2);
    {
      var keys2 = objectKeys(Writable2.prototype);
      for (var v2 = 0; v2 < keys2.length; v2++) {
        var method2 = keys2[v2];
        if (!Duplex2.prototype[method2])
          Duplex2.prototype[method2] = Writable2.prototype[method2];
      }
    }
    function Duplex2(options) {
      if (!(this instanceof Duplex2))
        return new Duplex2(options);
      Readable2.call(this, options);
      Writable2.call(this, options);
      this.allowHalfOpen = true;
      if (options) {
        if (options.readable === false)
          this.readable = false;
        if (options.writable === false)
          this.writable = false;
        if (options.allowHalfOpen === false) {
          this.allowHalfOpen = false;
          this.once("end", onend2);
        }
      }
    }
    Object.defineProperty(Duplex2.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function get() {
        return this._writableState.highWaterMark;
      }
    });
    Object.defineProperty(Duplex2.prototype, "writableBuffer", {
      enumerable: false,
      get: function get() {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    Object.defineProperty(Duplex2.prototype, "writableLength", {
      enumerable: false,
      get: function get() {
        return this._writableState.length;
      }
    });
    function onend2() {
      if (this._writableState.ended)
        return;
      browserExports$1.nextTick(onEndNT2, this);
    }
    function onEndNT2(self) {
      self.end();
    }
    Object.defineProperty(Duplex2.prototype, "destroyed", {
      enumerable: false,
      get: function get() {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function set(value2) {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return;
        }
        this._readableState.destroyed = value2;
        this._writableState.destroyed = value2;
      }
    });
    return _stream_duplex;
  }
  var string_decoder$1 = {};
  var hasRequiredString_decoder;
  function requireString_decoder() {
    if (hasRequiredString_decoder)
      return string_decoder$1;
    hasRequiredString_decoder = 1;
    var Buffer2 = safeBufferExports.Buffer;
    var isEncoding = Buffer2.isEncoding || function(encoding) {
      encoding = "" + encoding;
      switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function _normalizeEncoding(enc) {
      if (!enc)
        return "utf8";
      var retried;
      while (true) {
        switch (enc) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return enc;
          default:
            if (retried)
              return;
            enc = ("" + enc).toLowerCase();
            retried = true;
        }
      }
    }
    function normalizeEncoding(enc) {
      var nenc = _normalizeEncoding(enc);
      if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc)))
        throw new Error("Unknown encoding: " + enc);
      return nenc || enc;
    }
    string_decoder$1.StringDecoder = StringDecoder2;
    function StringDecoder2(encoding) {
      this.encoding = normalizeEncoding(encoding);
      var nb;
      switch (this.encoding) {
        case "utf16le":
          this.text = utf16Text;
          this.end = utf16End;
          nb = 4;
          break;
        case "utf8":
          this.fillLast = utf8FillLast;
          nb = 4;
          break;
        case "base64":
          this.text = base64Text;
          this.end = base64End;
          nb = 3;
          break;
        default:
          this.write = simpleWrite;
          this.end = simpleEnd;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = Buffer2.allocUnsafe(nb);
    }
    StringDecoder2.prototype.write = function(buf) {
      if (buf.length === 0)
        return "";
      var r;
      var i;
      if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === void 0)
          return "";
        i = this.lastNeed;
        this.lastNeed = 0;
      } else {
        i = 0;
      }
      if (i < buf.length)
        return r ? r + this.text(buf, i) : this.text(buf, i);
      return r || "";
    };
    StringDecoder2.prototype.end = utf8End;
    StringDecoder2.prototype.text = utf8Text;
    StringDecoder2.prototype.fillLast = function(buf) {
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
      this.lastNeed -= buf.length;
    };
    function utf8CheckByte(byte) {
      if (byte <= 127)
        return 0;
      else if (byte >> 5 === 6)
        return 2;
      else if (byte >> 4 === 14)
        return 3;
      else if (byte >> 3 === 30)
        return 4;
      return byte >> 6 === 2 ? -1 : -2;
    }
    function utf8CheckIncomplete(self, buf, i) {
      var j = buf.length - 1;
      if (j < i)
        return 0;
      var nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0)
          self.lastNeed = nb - 1;
        return nb;
      }
      if (--j < i || nb === -2)
        return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0)
          self.lastNeed = nb - 2;
        return nb;
      }
      if (--j < i || nb === -2)
        return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) {
          if (nb === 2)
            nb = 0;
          else
            self.lastNeed = nb - 3;
        }
        return nb;
      }
      return 0;
    }
    function utf8CheckExtraBytes(self, buf, p) {
      if ((buf[0] & 192) !== 128) {
        self.lastNeed = 0;
        return "\uFFFD";
      }
      if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 192) !== 128) {
          self.lastNeed = 1;
          return "\uFFFD";
        }
        if (self.lastNeed > 2 && buf.length > 2) {
          if ((buf[2] & 192) !== 128) {
            self.lastNeed = 2;
            return "\uFFFD";
          }
        }
      }
    }
    function utf8FillLast(buf) {
      var p = this.lastTotal - this.lastNeed;
      var r = utf8CheckExtraBytes(this, buf);
      if (r !== void 0)
        return r;
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, p, 0, buf.length);
      this.lastNeed -= buf.length;
    }
    function utf8Text(buf, i) {
      var total = utf8CheckIncomplete(this, buf, i);
      if (!this.lastNeed)
        return buf.toString("utf8", i);
      this.lastTotal = total;
      var end = buf.length - (total - this.lastNeed);
      buf.copy(this.lastChar, 0, end);
      return buf.toString("utf8", i, end);
    }
    function utf8End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed)
        return r + "\uFFFD";
      return r;
    }
    function utf16Text(buf, i) {
      if ((buf.length - i) % 2 === 0) {
        var r = buf.toString("utf16le", i);
        if (r) {
          var c = r.charCodeAt(r.length - 1);
          if (c >= 55296 && c <= 56319) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = buf[buf.length - 2];
            this.lastChar[1] = buf[buf.length - 1];
            return r.slice(0, -1);
          }
        }
        return r;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = buf[buf.length - 1];
      return buf.toString("utf16le", i, buf.length - 1);
    }
    function utf16End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
      }
      return r;
    }
    function base64Text(buf, i) {
      var n = (buf.length - i) % 3;
      if (n === 0)
        return buf.toString("base64", i);
      this.lastNeed = 3 - n;
      this.lastTotal = 3;
      if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
      } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
      }
      return buf.toString("base64", i, buf.length - n);
    }
    function base64End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed)
        return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
      return r;
    }
    function simpleWrite(buf) {
      return buf.toString(this.encoding);
    }
    function simpleEnd(buf) {
      return buf && buf.length ? this.write(buf) : "";
    }
    return string_decoder$1;
  }
  var ERR_STREAM_PREMATURE_CLOSE = errorsBrowser.codes.ERR_STREAM_PREMATURE_CLOSE;
  function once$1(callback) {
    var called = false;
    return function() {
      if (called)
        return;
      called = true;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      callback.apply(this, args);
    };
  }
  function noop$1() {
  }
  function isRequest$1(stream2) {
    return stream2.setHeader && typeof stream2.abort === "function";
  }
  function eos$1(stream2, opts, callback) {
    if (typeof opts === "function")
      return eos$1(stream2, null, opts);
    if (!opts)
      opts = {};
    callback = once$1(callback || noop$1);
    var readable = opts.readable || opts.readable !== false && stream2.readable;
    var writable = opts.writable || opts.writable !== false && stream2.writable;
    var onlegacyfinish = function onlegacyfinish2() {
      if (!stream2.writable)
        onfinish();
    };
    var writableEnded = stream2._writableState && stream2._writableState.finished;
    var onfinish = function onfinish2() {
      writable = false;
      writableEnded = true;
      if (!readable)
        callback.call(stream2);
    };
    var readableEnded = stream2._readableState && stream2._readableState.endEmitted;
    var onend2 = function onend3() {
      readable = false;
      readableEnded = true;
      if (!writable)
        callback.call(stream2);
    };
    var onerror = function onerror2(err) {
      callback.call(stream2, err);
    };
    var onclose = function onclose2() {
      var err;
      if (readable && !readableEnded) {
        if (!stream2._readableState || !stream2._readableState.ended)
          err = new ERR_STREAM_PREMATURE_CLOSE();
        return callback.call(stream2, err);
      }
      if (writable && !writableEnded) {
        if (!stream2._writableState || !stream2._writableState.ended)
          err = new ERR_STREAM_PREMATURE_CLOSE();
        return callback.call(stream2, err);
      }
    };
    var onrequest = function onrequest2() {
      stream2.req.on("finish", onfinish);
    };
    if (isRequest$1(stream2)) {
      stream2.on("complete", onfinish);
      stream2.on("abort", onclose);
      if (stream2.req)
        onrequest();
      else
        stream2.on("request", onrequest);
    } else if (writable && !stream2._writableState) {
      stream2.on("end", onlegacyfinish);
      stream2.on("close", onlegacyfinish);
    }
    stream2.on("end", onend2);
    stream2.on("finish", onfinish);
    if (opts.error !== false)
      stream2.on("error", onerror);
    stream2.on("close", onclose);
    return function() {
      stream2.removeListener("complete", onfinish);
      stream2.removeListener("abort", onclose);
      stream2.removeListener("request", onrequest);
      if (stream2.req)
        stream2.req.removeListener("finish", onfinish);
      stream2.removeListener("end", onlegacyfinish);
      stream2.removeListener("close", onlegacyfinish);
      stream2.removeListener("finish", onfinish);
      stream2.removeListener("end", onend2);
      stream2.removeListener("error", onerror);
      stream2.removeListener("close", onclose);
    };
  }
  var endOfStream = eos$1;
  var async_iterator;
  var hasRequiredAsync_iterator;
  function requireAsync_iterator() {
    if (hasRequiredAsync_iterator)
      return async_iterator;
    hasRequiredAsync_iterator = 1;
    var _Object$setPrototypeO;
    function _defineProperty(obj, key, value2) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value2,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value2;
      }
      return obj;
    }
    var finished = endOfStream;
    var kLastResolve = Symbol("lastResolve");
    var kLastReject = Symbol("lastReject");
    var kError = Symbol("error");
    var kEnded = Symbol("ended");
    var kLastPromise = Symbol("lastPromise");
    var kHandlePromise = Symbol("handlePromise");
    var kStream = Symbol("stream");
    function createIterResult(value2, done2) {
      return {
        value: value2,
        done: done2
      };
    }
    function readAndResolve(iter) {
      var resolve = iter[kLastResolve];
      if (resolve !== null) {
        var data = iter[kStream].read();
        if (data !== null) {
          iter[kLastPromise] = null;
          iter[kLastResolve] = null;
          iter[kLastReject] = null;
          resolve(createIterResult(data, false));
        }
      }
    }
    function onReadable(iter) {
      browserExports$1.nextTick(readAndResolve, iter);
    }
    function wrapForNext(lastPromise, iter) {
      return function(resolve, reject) {
        lastPromise.then(function() {
          if (iter[kEnded]) {
            resolve(createIterResult(void 0, true));
            return;
          }
          iter[kHandlePromise](resolve, reject);
        }, reject);
      };
    }
    var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
    });
    var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
      get stream() {
        return this[kStream];
      },
      next: function next() {
        var _this = this;
        var error = this[kError];
        if (error !== null) {
          return Promise.reject(error);
        }
        if (this[kEnded]) {
          return Promise.resolve(createIterResult(void 0, true));
        }
        if (this[kStream].destroyed) {
          return new Promise(function(resolve, reject) {
            browserExports$1.nextTick(function() {
              if (_this[kError]) {
                reject(_this[kError]);
              } else {
                resolve(createIterResult(void 0, true));
              }
            });
          });
        }
        var lastPromise = this[kLastPromise];
        var promise;
        if (lastPromise) {
          promise = new Promise(wrapForNext(lastPromise, this));
        } else {
          var data = this[kStream].read();
          if (data !== null) {
            return Promise.resolve(createIterResult(data, false));
          }
          promise = new Promise(this[kHandlePromise]);
        }
        this[kLastPromise] = promise;
        return promise;
      }
    }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
      return this;
    }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
      var _this2 = this;
      return new Promise(function(resolve, reject) {
        _this2[kStream].destroy(null, function(err) {
          if (err) {
            reject(err);
            return;
          }
          resolve(createIterResult(void 0, true));
        });
      });
    }), _Object$setPrototypeO), AsyncIteratorPrototype);
    var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator2(stream2) {
      var _Object$create;
      var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
        value: stream2,
        writable: true
      }), _defineProperty(_Object$create, kLastResolve, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kLastReject, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kError, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kEnded, {
        value: stream2._readableState.endEmitted,
        writable: true
      }), _defineProperty(_Object$create, kHandlePromise, {
        value: function value2(resolve, reject) {
          var data = iterator[kStream].read();
          if (data) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve(createIterResult(data, false));
          } else {
            iterator[kLastResolve] = resolve;
            iterator[kLastReject] = reject;
          }
        },
        writable: true
      }), _Object$create));
      iterator[kLastPromise] = null;
      finished(stream2, function(err) {
        if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
          var reject = iterator[kLastReject];
          if (reject !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            reject(err);
          }
          iterator[kError] = err;
          return;
        }
        var resolve = iterator[kLastResolve];
        if (resolve !== null) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          resolve(createIterResult(void 0, true));
        }
        iterator[kEnded] = true;
      });
      stream2.on("readable", onReadable.bind(null, iterator));
      return iterator;
    };
    async_iterator = createReadableStreamAsyncIterator;
    return async_iterator;
  }
  var fromBrowser;
  var hasRequiredFromBrowser;
  function requireFromBrowser() {
    if (hasRequiredFromBrowser)
      return fromBrowser;
    hasRequiredFromBrowser = 1;
    fromBrowser = function() {
      throw new Error("Readable.from is not available in the browser");
    };
    return fromBrowser;
  }
  var _stream_readable;
  var hasRequired_stream_readable;
  function require_stream_readable() {
    if (hasRequired_stream_readable)
      return _stream_readable;
    hasRequired_stream_readable = 1;
    _stream_readable = Readable2;
    var Duplex2;
    Readable2.ReadableState = ReadableState2;
    eventsExports.EventEmitter;
    var EElistenerCount = function EElistenerCount2(emitter, type) {
      return emitter.listeners(type).length;
    };
    var Stream2 = streamBrowser;
    var Buffer2 = buffer.Buffer;
    var OurUint8Array = commonjsGlobal.Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var debugUtil = require$$3;
    var debug2;
    if (debugUtil && debugUtil.debuglog) {
      debug2 = debugUtil.debuglog("stream");
    } else {
      debug2 = function debug3() {
      };
    }
    var BufferList2 = requireBuffer_list();
    var destroyImpl = destroy_1;
    var _require = state, getHighWaterMark2 = _require.getHighWaterMark;
    var _require$codes2 = errorsBrowser.codes, ERR_INVALID_ARG_TYPE = _require$codes2.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes2.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED2 = _require$codes2.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes2.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
    var StringDecoder2;
    var createReadableStreamAsyncIterator;
    var from;
    inherits_browserExports(Readable2, Stream2);
    var errorOrDestroy2 = destroyImpl.errorOrDestroy;
    var kProxyEvents = [
      "error",
      "close",
      "destroy",
      "pause",
      "resume"
    ];
    function prependListener2(emitter, event, fn) {
      if (typeof emitter.prependListener === "function")
        return emitter.prependListener(event, fn);
      if (!emitter._events || !emitter._events[event])
        emitter.on(event, fn);
      else if (Array.isArray(emitter._events[event]))
        emitter._events[event].unshift(fn);
      else
        emitter._events[event] = [
          fn,
          emitter._events[event]
        ];
    }
    function ReadableState2(options, stream2, isDuplex) {
      Duplex2 = Duplex2 || require_stream_duplex();
      options = options || {};
      if (typeof isDuplex !== "boolean")
        isDuplex = stream2 instanceof Duplex2;
      this.objectMode = !!options.objectMode;
      if (isDuplex)
        this.objectMode = this.objectMode || !!options.readableObjectMode;
      this.highWaterMark = getHighWaterMark2(this, options, "readableHighWaterMark", isDuplex);
      this.buffer = new BufferList2();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
      this.paused = true;
      this.emitClose = options.emitClose !== false;
      this.autoDestroy = !!options.autoDestroy;
      this.destroyed = false;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (options.encoding) {
        if (!StringDecoder2)
          StringDecoder2 = requireString_decoder().StringDecoder;
        this.decoder = new StringDecoder2(options.encoding);
        this.encoding = options.encoding;
      }
    }
    function Readable2(options) {
      Duplex2 = Duplex2 || require_stream_duplex();
      if (!(this instanceof Readable2))
        return new Readable2(options);
      var isDuplex = this instanceof Duplex2;
      this._readableState = new ReadableState2(options, this, isDuplex);
      this.readable = true;
      if (options) {
        if (typeof options.read === "function")
          this._read = options.read;
        if (typeof options.destroy === "function")
          this._destroy = options.destroy;
      }
      Stream2.call(this);
    }
    Object.defineProperty(Readable2.prototype, "destroyed", {
      enumerable: false,
      get: function get() {
        if (this._readableState === void 0) {
          return false;
        }
        return this._readableState.destroyed;
      },
      set: function set(value2) {
        if (!this._readableState) {
          return;
        }
        this._readableState.destroyed = value2;
      }
    });
    Readable2.prototype.destroy = destroyImpl.destroy;
    Readable2.prototype._undestroy = destroyImpl.undestroy;
    Readable2.prototype._destroy = function(err, cb) {
      cb(err);
    };
    Readable2.prototype.push = function(chunk, encoding) {
      var state2 = this._readableState;
      var skipChunkCheck;
      if (!state2.objectMode) {
        if (typeof chunk === "string") {
          encoding = encoding || state2.defaultEncoding;
          if (encoding !== state2.encoding) {
            chunk = Buffer2.from(chunk, encoding);
            encoding = "";
          }
          skipChunkCheck = true;
        }
      } else {
        skipChunkCheck = true;
      }
      return readableAddChunk2(this, chunk, encoding, false, skipChunkCheck);
    };
    Readable2.prototype.unshift = function(chunk) {
      return readableAddChunk2(this, chunk, null, true, false);
    };
    function readableAddChunk2(stream2, chunk, encoding, addToFront, skipChunkCheck) {
      debug2("readableAddChunk", chunk);
      var state2 = stream2._readableState;
      if (chunk === null) {
        state2.reading = false;
        onEofChunk2(stream2, state2);
      } else {
        var er;
        if (!skipChunkCheck)
          er = chunkInvalid2(state2, chunk);
        if (er) {
          errorOrDestroy2(stream2, er);
        } else if (state2.objectMode || chunk && chunk.length > 0) {
          if (typeof chunk !== "string" && !state2.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
            chunk = _uint8ArrayToBuffer(chunk);
          }
          if (addToFront) {
            if (state2.endEmitted)
              errorOrDestroy2(stream2, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
            else
              addChunk(stream2, state2, chunk, true);
          } else if (state2.ended) {
            errorOrDestroy2(stream2, new ERR_STREAM_PUSH_AFTER_EOF());
          } else if (state2.destroyed) {
            return false;
          } else {
            state2.reading = false;
            if (state2.decoder && !encoding) {
              chunk = state2.decoder.write(chunk);
              if (state2.objectMode || chunk.length !== 0)
                addChunk(stream2, state2, chunk, false);
              else
                maybeReadMore2(stream2, state2);
            } else {
              addChunk(stream2, state2, chunk, false);
            }
          }
        } else if (!addToFront) {
          state2.reading = false;
          maybeReadMore2(stream2, state2);
        }
      }
      return !state2.ended && (state2.length < state2.highWaterMark || state2.length === 0);
    }
    function addChunk(stream2, state2, chunk, addToFront) {
      if (state2.flowing && state2.length === 0 && !state2.sync) {
        state2.awaitDrain = 0;
        stream2.emit("data", chunk);
      } else {
        state2.length += state2.objectMode ? 1 : chunk.length;
        if (addToFront)
          state2.buffer.unshift(chunk);
        else
          state2.buffer.push(chunk);
        if (state2.needReadable)
          emitReadable2(stream2);
      }
      maybeReadMore2(stream2, state2);
    }
    function chunkInvalid2(state2, chunk) {
      var er;
      if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state2.objectMode) {
        er = new ERR_INVALID_ARG_TYPE("chunk", [
          "string",
          "Buffer",
          "Uint8Array"
        ], chunk);
      }
      return er;
    }
    Readable2.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    Readable2.prototype.setEncoding = function(enc) {
      if (!StringDecoder2)
        StringDecoder2 = requireString_decoder().StringDecoder;
      var decoder = new StringDecoder2(enc);
      this._readableState.decoder = decoder;
      this._readableState.encoding = this._readableState.decoder.encoding;
      var p = this._readableState.buffer.head;
      var content = "";
      while (p !== null) {
        content += decoder.write(p.data);
        p = p.next;
      }
      this._readableState.buffer.clear();
      if (content !== "")
        this._readableState.buffer.push(content);
      this._readableState.length = content.length;
      return this;
    };
    var MAX_HWM2 = 1073741824;
    function computeNewHighWaterMark2(n) {
      if (n >= MAX_HWM2) {
        n = MAX_HWM2;
      } else {
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
      }
      return n;
    }
    function howMuchToRead2(n, state2) {
      if (n <= 0 || state2.length === 0 && state2.ended)
        return 0;
      if (state2.objectMode)
        return 1;
      if (n !== n) {
        if (state2.flowing && state2.length)
          return state2.buffer.head.data.length;
        else
          return state2.length;
      }
      if (n > state2.highWaterMark)
        state2.highWaterMark = computeNewHighWaterMark2(n);
      if (n <= state2.length)
        return n;
      if (!state2.ended) {
        state2.needReadable = true;
        return 0;
      }
      return state2.length;
    }
    Readable2.prototype.read = function(n) {
      debug2("read", n);
      n = parseInt(n, 10);
      var state2 = this._readableState;
      var nOrig = n;
      if (n !== 0)
        state2.emittedReadable = false;
      if (n === 0 && state2.needReadable && ((state2.highWaterMark !== 0 ? state2.length >= state2.highWaterMark : state2.length > 0) || state2.ended)) {
        debug2("read: emitReadable", state2.length, state2.ended);
        if (state2.length === 0 && state2.ended)
          endReadable2(this);
        else
          emitReadable2(this);
        return null;
      }
      n = howMuchToRead2(n, state2);
      if (n === 0 && state2.ended) {
        if (state2.length === 0)
          endReadable2(this);
        return null;
      }
      var doRead = state2.needReadable;
      debug2("need readable", doRead);
      if (state2.length === 0 || state2.length - n < state2.highWaterMark) {
        doRead = true;
        debug2("length less than watermark", doRead);
      }
      if (state2.ended || state2.reading) {
        doRead = false;
        debug2("reading or ended", doRead);
      } else if (doRead) {
        debug2("do read");
        state2.reading = true;
        state2.sync = true;
        if (state2.length === 0)
          state2.needReadable = true;
        this._read(state2.highWaterMark);
        state2.sync = false;
        if (!state2.reading)
          n = howMuchToRead2(nOrig, state2);
      }
      var ret;
      if (n > 0)
        ret = fromList2(n, state2);
      else
        ret = null;
      if (ret === null) {
        state2.needReadable = state2.length <= state2.highWaterMark;
        n = 0;
      } else {
        state2.length -= n;
        state2.awaitDrain = 0;
      }
      if (state2.length === 0) {
        if (!state2.ended)
          state2.needReadable = true;
        if (nOrig !== n && state2.ended)
          endReadable2(this);
      }
      if (ret !== null)
        this.emit("data", ret);
      return ret;
    };
    function onEofChunk2(stream2, state2) {
      debug2("onEofChunk");
      if (state2.ended)
        return;
      if (state2.decoder) {
        var chunk = state2.decoder.end();
        if (chunk && chunk.length) {
          state2.buffer.push(chunk);
          state2.length += state2.objectMode ? 1 : chunk.length;
        }
      }
      state2.ended = true;
      if (state2.sync) {
        emitReadable2(stream2);
      } else {
        state2.needReadable = false;
        if (!state2.emittedReadable) {
          state2.emittedReadable = true;
          emitReadable_2(stream2);
        }
      }
    }
    function emitReadable2(stream2) {
      var state2 = stream2._readableState;
      debug2("emitReadable", state2.needReadable, state2.emittedReadable);
      state2.needReadable = false;
      if (!state2.emittedReadable) {
        debug2("emitReadable", state2.flowing);
        state2.emittedReadable = true;
        browserExports$1.nextTick(emitReadable_2, stream2);
      }
    }
    function emitReadable_2(stream2) {
      var state2 = stream2._readableState;
      debug2("emitReadable_", state2.destroyed, state2.length, state2.ended);
      if (!state2.destroyed && (state2.length || state2.ended)) {
        stream2.emit("readable");
        state2.emittedReadable = false;
      }
      state2.needReadable = !state2.flowing && !state2.ended && state2.length <= state2.highWaterMark;
      flow2(stream2);
    }
    function maybeReadMore2(stream2, state2) {
      if (!state2.readingMore) {
        state2.readingMore = true;
        browserExports$1.nextTick(maybeReadMore_2, stream2, state2);
      }
    }
    function maybeReadMore_2(stream2, state2) {
      while (!state2.reading && !state2.ended && (state2.length < state2.highWaterMark || state2.flowing && state2.length === 0)) {
        var len = state2.length;
        debug2("maybeReadMore read 0");
        stream2.read(0);
        if (len === state2.length)
          break;
      }
      state2.readingMore = false;
    }
    Readable2.prototype._read = function(n) {
      errorOrDestroy2(this, new ERR_METHOD_NOT_IMPLEMENTED2("_read()"));
    };
    Readable2.prototype.pipe = function(dest, pipeOpts) {
      var src2 = this;
      var state2 = this._readableState;
      switch (state2.pipesCount) {
        case 0:
          state2.pipes = dest;
          break;
        case 1:
          state2.pipes = [
            state2.pipes,
            dest
          ];
          break;
        default:
          state2.pipes.push(dest);
          break;
      }
      state2.pipesCount += 1;
      debug2("pipe count=%d opts=%j", state2.pipesCount, pipeOpts);
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== browserExports$1.stdout && dest !== browserExports$1.stderr;
      var endFn = doEnd ? onend2 : unpipe;
      if (state2.endEmitted)
        browserExports$1.nextTick(endFn);
      else
        src2.once("end", endFn);
      dest.on("unpipe", onunpipe);
      function onunpipe(readable, unpipeInfo) {
        debug2("onunpipe");
        if (readable === src2) {
          if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
            unpipeInfo.hasUnpiped = true;
            cleanup();
          }
        }
      }
      function onend2() {
        debug2("onend");
        dest.end();
      }
      var ondrain = pipeOnDrain2(src2);
      dest.on("drain", ondrain);
      var cleanedUp = false;
      function cleanup() {
        debug2("cleanup");
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src2.removeListener("end", onend2);
        src2.removeListener("end", unpipe);
        src2.removeListener("data", ondata);
        cleanedUp = true;
        if (state2.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
          ondrain();
      }
      src2.on("data", ondata);
      function ondata(chunk) {
        debug2("ondata");
        var ret = dest.write(chunk);
        debug2("dest.write", ret);
        if (ret === false) {
          if ((state2.pipesCount === 1 && state2.pipes === dest || state2.pipesCount > 1 && indexOf2(state2.pipes, dest) !== -1) && !cleanedUp) {
            debug2("false write response, pause", state2.awaitDrain);
            state2.awaitDrain++;
          }
          src2.pause();
        }
      }
      function onerror(er) {
        debug2("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (EElistenerCount(dest, "error") === 0)
          errorOrDestroy2(dest, er);
      }
      prependListener2(dest, "error", onerror);
      function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
      }
      dest.once("close", onclose);
      function onfinish() {
        debug2("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
      }
      dest.once("finish", onfinish);
      function unpipe() {
        debug2("unpipe");
        src2.unpipe(dest);
      }
      dest.emit("pipe", src2);
      if (!state2.flowing) {
        debug2("pipe resume");
        src2.resume();
      }
      return dest;
    };
    function pipeOnDrain2(src2) {
      return function pipeOnDrainFunctionResult() {
        var state2 = src2._readableState;
        debug2("pipeOnDrain", state2.awaitDrain);
        if (state2.awaitDrain)
          state2.awaitDrain--;
        if (state2.awaitDrain === 0 && EElistenerCount(src2, "data")) {
          state2.flowing = true;
          flow2(src2);
        }
      };
    }
    Readable2.prototype.unpipe = function(dest) {
      var state2 = this._readableState;
      var unpipeInfo = {
        hasUnpiped: false
      };
      if (state2.pipesCount === 0)
        return this;
      if (state2.pipesCount === 1) {
        if (dest && dest !== state2.pipes)
          return this;
        if (!dest)
          dest = state2.pipes;
        state2.pipes = null;
        state2.pipesCount = 0;
        state2.flowing = false;
        if (dest)
          dest.emit("unpipe", this, unpipeInfo);
        return this;
      }
      if (!dest) {
        var dests = state2.pipes;
        var len = state2.pipesCount;
        state2.pipes = null;
        state2.pipesCount = 0;
        state2.flowing = false;
        for (var i = 0; i < len; i++) {
          dests[i].emit("unpipe", this, {
            hasUnpiped: false
          });
        }
        return this;
      }
      var index = indexOf2(state2.pipes, dest);
      if (index === -1)
        return this;
      state2.pipes.splice(index, 1);
      state2.pipesCount -= 1;
      if (state2.pipesCount === 1)
        state2.pipes = state2.pipes[0];
      dest.emit("unpipe", this, unpipeInfo);
      return this;
    };
    Readable2.prototype.on = function(ev, fn) {
      var res = Stream2.prototype.on.call(this, ev, fn);
      var state2 = this._readableState;
      if (ev === "data") {
        state2.readableListening = this.listenerCount("readable") > 0;
        if (state2.flowing !== false)
          this.resume();
      } else if (ev === "readable") {
        if (!state2.endEmitted && !state2.readableListening) {
          state2.readableListening = state2.needReadable = true;
          state2.flowing = false;
          state2.emittedReadable = false;
          debug2("on readable", state2.length, state2.reading);
          if (state2.length) {
            emitReadable2(this);
          } else if (!state2.reading) {
            browserExports$1.nextTick(nReadingNextTick2, this);
          }
        }
      }
      return res;
    };
    Readable2.prototype.addListener = Readable2.prototype.on;
    Readable2.prototype.removeListener = function(ev, fn) {
      var res = Stream2.prototype.removeListener.call(this, ev, fn);
      if (ev === "readable") {
        browserExports$1.nextTick(updateReadableListening, this);
      }
      return res;
    };
    Readable2.prototype.removeAllListeners = function(ev) {
      var res = Stream2.prototype.removeAllListeners.apply(this, arguments);
      if (ev === "readable" || ev === void 0) {
        browserExports$1.nextTick(updateReadableListening, this);
      }
      return res;
    };
    function updateReadableListening(self) {
      var state2 = self._readableState;
      state2.readableListening = self.listenerCount("readable") > 0;
      if (state2.resumeScheduled && !state2.paused) {
        state2.flowing = true;
      } else if (self.listenerCount("data") > 0) {
        self.resume();
      }
    }
    function nReadingNextTick2(self) {
      debug2("readable nexttick read 0");
      self.read(0);
    }
    Readable2.prototype.resume = function() {
      var state2 = this._readableState;
      if (!state2.flowing) {
        debug2("resume");
        state2.flowing = !state2.readableListening;
        resume2(this, state2);
      }
      state2.paused = false;
      return this;
    };
    function resume2(stream2, state2) {
      if (!state2.resumeScheduled) {
        state2.resumeScheduled = true;
        browserExports$1.nextTick(resume_2, stream2, state2);
      }
    }
    function resume_2(stream2, state2) {
      debug2("resume", state2.reading);
      if (!state2.reading) {
        stream2.read(0);
      }
      state2.resumeScheduled = false;
      stream2.emit("resume");
      flow2(stream2);
      if (state2.flowing && !state2.reading)
        stream2.read(0);
    }
    Readable2.prototype.pause = function() {
      debug2("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        debug2("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      this._readableState.paused = true;
      return this;
    };
    function flow2(stream2) {
      var state2 = stream2._readableState;
      debug2("flow", state2.flowing);
      while (state2.flowing && stream2.read() !== null) {
      }
    }
    Readable2.prototype.wrap = function(stream2) {
      var _this = this;
      var state2 = this._readableState;
      var paused = false;
      stream2.on("end", function() {
        debug2("wrapped end");
        if (state2.decoder && !state2.ended) {
          var chunk = state2.decoder.end();
          if (chunk && chunk.length)
            _this.push(chunk);
        }
        _this.push(null);
      });
      stream2.on("data", function(chunk) {
        debug2("wrapped data");
        if (state2.decoder)
          chunk = state2.decoder.write(chunk);
        if (state2.objectMode && (chunk === null || chunk === void 0))
          return;
        else if (!state2.objectMode && (!chunk || !chunk.length))
          return;
        var ret = _this.push(chunk);
        if (!ret) {
          paused = true;
          stream2.pause();
        }
      });
      for (var i in stream2) {
        if (this[i] === void 0 && typeof stream2[i] === "function") {
          this[i] = function methodWrap(method2) {
            return function methodWrapReturnFunction() {
              return stream2[method2].apply(stream2, arguments);
            };
          }(i);
        }
      }
      for (var n = 0; n < kProxyEvents.length; n++) {
        stream2.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
      }
      this._read = function(n2) {
        debug2("wrapped _read", n2);
        if (paused) {
          paused = false;
          stream2.resume();
        }
      };
      return this;
    };
    if (typeof Symbol === "function") {
      Readable2.prototype[Symbol.asyncIterator] = function() {
        if (createReadableStreamAsyncIterator === void 0) {
          createReadableStreamAsyncIterator = requireAsync_iterator();
        }
        return createReadableStreamAsyncIterator(this);
      };
    }
    Object.defineProperty(Readable2.prototype, "readableHighWaterMark", {
      enumerable: false,
      get: function get() {
        return this._readableState.highWaterMark;
      }
    });
    Object.defineProperty(Readable2.prototype, "readableBuffer", {
      enumerable: false,
      get: function get() {
        return this._readableState && this._readableState.buffer;
      }
    });
    Object.defineProperty(Readable2.prototype, "readableFlowing", {
      enumerable: false,
      get: function get() {
        return this._readableState.flowing;
      },
      set: function set(state2) {
        if (this._readableState) {
          this._readableState.flowing = state2;
        }
      }
    });
    Readable2._fromList = fromList2;
    Object.defineProperty(Readable2.prototype, "readableLength", {
      enumerable: false,
      get: function get() {
        return this._readableState.length;
      }
    });
    function fromList2(n, state2) {
      if (state2.length === 0)
        return null;
      var ret;
      if (state2.objectMode)
        ret = state2.buffer.shift();
      else if (!n || n >= state2.length) {
        if (state2.decoder)
          ret = state2.buffer.join("");
        else if (state2.buffer.length === 1)
          ret = state2.buffer.first();
        else
          ret = state2.buffer.concat(state2.length);
        state2.buffer.clear();
      } else {
        ret = state2.buffer.consume(n, state2.decoder);
      }
      return ret;
    }
    function endReadable2(stream2) {
      var state2 = stream2._readableState;
      debug2("endReadable", state2.endEmitted);
      if (!state2.endEmitted) {
        state2.ended = true;
        browserExports$1.nextTick(endReadableNT2, state2, stream2);
      }
    }
    function endReadableNT2(state2, stream2) {
      debug2("endReadableNT", state2.endEmitted, state2.length);
      if (!state2.endEmitted && state2.length === 0) {
        state2.endEmitted = true;
        stream2.readable = false;
        stream2.emit("end");
        if (state2.autoDestroy) {
          var wState = stream2._writableState;
          if (!wState || wState.autoDestroy && wState.finished) {
            stream2.destroy();
          }
        }
      }
    }
    if (typeof Symbol === "function") {
      Readable2.from = function(iterable, opts) {
        if (from === void 0) {
          from = requireFromBrowser();
        }
        return from(Readable2, iterable, opts);
      };
    }
    function indexOf2(xs, x) {
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x)
          return i;
      }
      return -1;
    }
    return _stream_readable;
  }
  var _stream_transform = Transform$4;
  var _require$codes$1 = errorsBrowser.codes, ERR_METHOD_NOT_IMPLEMENTED = _require$codes$1.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes$1.ERR_MULTIPLE_CALLBACK, ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes$1.ERR_TRANSFORM_ALREADY_TRANSFORMING, ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes$1.ERR_TRANSFORM_WITH_LENGTH_0;
  var Duplex$1 = require_stream_duplex();
  inherits_browserExports(Transform$4, Duplex$1);
  function afterTransform$1(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (cb === null) {
      return this.emit("error", new ERR_MULTIPLE_CALLBACK());
    }
    ts.writechunk = null;
    ts.writecb = null;
    if (data != null)
      this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) {
      this._read(rs.highWaterMark);
    }
  }
  function Transform$4(options) {
    if (!(this instanceof Transform$4))
      return new Transform$4(options);
    Duplex$1.call(this, options);
    this._transformState = {
      afterTransform: afterTransform$1.bind(this),
      needTransform: false,
      transforming: false,
      writecb: null,
      writechunk: null,
      writeencoding: null
    };
    this._readableState.needReadable = true;
    this._readableState.sync = false;
    if (options) {
      if (typeof options.transform === "function")
        this._transform = options.transform;
      if (typeof options.flush === "function")
        this._flush = options.flush;
    }
    this.on("prefinish", prefinish$1);
  }
  function prefinish$1() {
    var _this = this;
    if (typeof this._flush === "function" && !this._readableState.destroyed) {
      this._flush(function(er, data) {
        done$1(_this, er, data);
      });
    } else {
      done$1(this, null, null);
    }
  }
  Transform$4.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex$1.prototype.push.call(this, chunk, encoding);
  };
  Transform$4.prototype._transform = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
  };
  Transform$4.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
      var rs = this._readableState;
      if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
        this._read(rs.highWaterMark);
    }
  };
  Transform$4.prototype._read = function(n) {
    var ts = this._transformState;
    if (ts.writechunk !== null && !ts.transforming) {
      ts.transforming = true;
      this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else {
      ts.needTransform = true;
    }
  };
  Transform$4.prototype._destroy = function(err, cb) {
    Duplex$1.prototype._destroy.call(this, err, function(err2) {
      cb(err2);
    });
  };
  function done$1(stream2, er, data) {
    if (er)
      return stream2.emit("error", er);
    if (data != null)
      stream2.push(data);
    if (stream2._writableState.length)
      throw new ERR_TRANSFORM_WITH_LENGTH_0();
    if (stream2._transformState.transforming)
      throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
    return stream2.push(null);
  }
  var _stream_passthrough = PassThrough$1;
  var Transform$3 = _stream_transform;
  inherits_browserExports(PassThrough$1, Transform$3);
  function PassThrough$1(options) {
    if (!(this instanceof PassThrough$1))
      return new PassThrough$1(options);
    Transform$3.call(this, options);
  }
  PassThrough$1.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
  };
  var eos;
  function once(callback) {
    var called = false;
    return function() {
      if (called)
        return;
      called = true;
      callback.apply(void 0, arguments);
    };
  }
  var _require$codes = errorsBrowser.codes, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
  function noop(err) {
    if (err)
      throw err;
  }
  function isRequest(stream2) {
    return stream2.setHeader && typeof stream2.abort === "function";
  }
  function destroyer(stream2, reading, writing, callback) {
    callback = once(callback);
    var closed = false;
    stream2.on("close", function() {
      closed = true;
    });
    if (eos === void 0)
      eos = endOfStream;
    eos(stream2, {
      readable: reading,
      writable: writing
    }, function(err) {
      if (err)
        return callback(err);
      closed = true;
      callback();
    });
    var destroyed = false;
    return function(err) {
      if (closed)
        return;
      if (destroyed)
        return;
      destroyed = true;
      if (isRequest(stream2))
        return stream2.abort();
      if (typeof stream2.destroy === "function")
        return stream2.destroy();
      callback(err || new ERR_STREAM_DESTROYED("pipe"));
    };
  }
  function call(fn) {
    fn();
  }
  function pipe(from, to) {
    return from.pipe(to);
  }
  function popCallback(streams) {
    if (!streams.length)
      return noop;
    if (typeof streams[streams.length - 1] !== "function")
      return noop;
    return streams.pop();
  }
  function pipeline() {
    for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
      streams[_key] = arguments[_key];
    }
    var callback = popCallback(streams);
    if (Array.isArray(streams[0]))
      streams = streams[0];
    if (streams.length < 2) {
      throw new ERR_MISSING_ARGS("streams");
    }
    var error;
    var destroys = streams.map(function(stream2, i) {
      var reading = i < streams.length - 1;
      var writing = i > 0;
      return destroyer(stream2, reading, writing, function(err) {
        if (!error)
          error = err;
        if (err)
          destroys.forEach(call);
        if (reading)
          return;
        destroys.forEach(call);
        callback(error);
      });
    });
    return streams.reduce(pipe);
  }
  var pipeline_1 = pipeline;
  (function(module, exports2) {
    exports2 = module.exports = require_stream_readable();
    exports2.Stream = exports2;
    exports2.Readable = exports2;
    exports2.Writable = require_stream_writable();
    exports2.Duplex = require_stream_duplex();
    exports2.Transform = _stream_transform;
    exports2.PassThrough = _stream_passthrough;
    exports2.finished = endOfStream;
    exports2.pipeline = pipeline_1;
  })(readableBrowser, readableBrowserExports);
  var Buffer$f = safeBufferExports.Buffer;
  var Transform$2 = readableBrowserExports.Transform;
  var inherits$a = inherits_browserExports;
  function throwIfNotStringOrBuffer(val, prefix) {
    if (!Buffer$f.isBuffer(val) && typeof val !== "string") {
      throw new TypeError(prefix + " must be a string or a buffer");
    }
  }
  function HashBase$2(blockSize) {
    Transform$2.call(this);
    this._block = Buffer$f.allocUnsafe(blockSize);
    this._blockSize = blockSize;
    this._blockOffset = 0;
    this._length = [
      0,
      0,
      0,
      0
    ];
    this._finalized = false;
  }
  inherits$a(HashBase$2, Transform$2);
  HashBase$2.prototype._transform = function(chunk, encoding, callback) {
    var error = null;
    try {
      this.update(chunk, encoding);
    } catch (err) {
      error = err;
    }
    callback(error);
  };
  HashBase$2.prototype._flush = function(callback) {
    var error = null;
    try {
      this.push(this.digest());
    } catch (err) {
      error = err;
    }
    callback(error);
  };
  HashBase$2.prototype.update = function(data, encoding) {
    throwIfNotStringOrBuffer(data, "Data");
    if (this._finalized)
      throw new Error("Digest already called");
    if (!Buffer$f.isBuffer(data))
      data = Buffer$f.from(data, encoding);
    var block2 = this._block;
    var offset = 0;
    while (this._blockOffset + data.length - offset >= this._blockSize) {
      for (var i = this._blockOffset; i < this._blockSize; )
        block2[i++] = data[offset++];
      this._update();
      this._blockOffset = 0;
    }
    while (offset < data.length)
      block2[this._blockOffset++] = data[offset++];
    for (var j = 0, carry = data.length * 8; carry > 0; ++j) {
      this._length[j] += carry;
      carry = this._length[j] / 4294967296 | 0;
      if (carry > 0)
        this._length[j] -= 4294967296 * carry;
    }
    return this;
  };
  HashBase$2.prototype._update = function() {
    throw new Error("_update is not implemented");
  };
  HashBase$2.prototype.digest = function(encoding) {
    if (this._finalized)
      throw new Error("Digest already called");
    this._finalized = true;
    var digest = this._digest();
    if (encoding !== void 0)
      digest = digest.toString(encoding);
    this._block.fill(0);
    this._blockOffset = 0;
    for (var i = 0; i < 4; ++i)
      this._length[i] = 0;
    return digest;
  };
  HashBase$2.prototype._digest = function() {
    throw new Error("_digest is not implemented");
  };
  var hashBase = HashBase$2;
  var inherits$9 = inherits_browserExports;
  var HashBase$1 = hashBase;
  var Buffer$e = safeBufferExports.Buffer;
  var ARRAY16$1 = new Array(16);
  function MD5$1() {
    HashBase$1.call(this, 64);
    this._a = 1732584193;
    this._b = 4023233417;
    this._c = 2562383102;
    this._d = 271733878;
  }
  inherits$9(MD5$1, HashBase$1);
  MD5$1.prototype._update = function() {
    var M = ARRAY16$1;
    for (var i = 0; i < 16; ++i)
      M[i] = this._block.readInt32LE(i * 4);
    var a2 = this._a;
    var b = this._b;
    var c = this._c;
    var d = this._d;
    a2 = fnF(a2, b, c, d, M[0], 3614090360, 7);
    d = fnF(d, a2, b, c, M[1], 3905402710, 12);
    c = fnF(c, d, a2, b, M[2], 606105819, 17);
    b = fnF(b, c, d, a2, M[3], 3250441966, 22);
    a2 = fnF(a2, b, c, d, M[4], 4118548399, 7);
    d = fnF(d, a2, b, c, M[5], 1200080426, 12);
    c = fnF(c, d, a2, b, M[6], 2821735955, 17);
    b = fnF(b, c, d, a2, M[7], 4249261313, 22);
    a2 = fnF(a2, b, c, d, M[8], 1770035416, 7);
    d = fnF(d, a2, b, c, M[9], 2336552879, 12);
    c = fnF(c, d, a2, b, M[10], 4294925233, 17);
    b = fnF(b, c, d, a2, M[11], 2304563134, 22);
    a2 = fnF(a2, b, c, d, M[12], 1804603682, 7);
    d = fnF(d, a2, b, c, M[13], 4254626195, 12);
    c = fnF(c, d, a2, b, M[14], 2792965006, 17);
    b = fnF(b, c, d, a2, M[15], 1236535329, 22);
    a2 = fnG(a2, b, c, d, M[1], 4129170786, 5);
    d = fnG(d, a2, b, c, M[6], 3225465664, 9);
    c = fnG(c, d, a2, b, M[11], 643717713, 14);
    b = fnG(b, c, d, a2, M[0], 3921069994, 20);
    a2 = fnG(a2, b, c, d, M[5], 3593408605, 5);
    d = fnG(d, a2, b, c, M[10], 38016083, 9);
    c = fnG(c, d, a2, b, M[15], 3634488961, 14);
    b = fnG(b, c, d, a2, M[4], 3889429448, 20);
    a2 = fnG(a2, b, c, d, M[9], 568446438, 5);
    d = fnG(d, a2, b, c, M[14], 3275163606, 9);
    c = fnG(c, d, a2, b, M[3], 4107603335, 14);
    b = fnG(b, c, d, a2, M[8], 1163531501, 20);
    a2 = fnG(a2, b, c, d, M[13], 2850285829, 5);
    d = fnG(d, a2, b, c, M[2], 4243563512, 9);
    c = fnG(c, d, a2, b, M[7], 1735328473, 14);
    b = fnG(b, c, d, a2, M[12], 2368359562, 20);
    a2 = fnH(a2, b, c, d, M[5], 4294588738, 4);
    d = fnH(d, a2, b, c, M[8], 2272392833, 11);
    c = fnH(c, d, a2, b, M[11], 1839030562, 16);
    b = fnH(b, c, d, a2, M[14], 4259657740, 23);
    a2 = fnH(a2, b, c, d, M[1], 2763975236, 4);
    d = fnH(d, a2, b, c, M[4], 1272893353, 11);
    c = fnH(c, d, a2, b, M[7], 4139469664, 16);
    b = fnH(b, c, d, a2, M[10], 3200236656, 23);
    a2 = fnH(a2, b, c, d, M[13], 681279174, 4);
    d = fnH(d, a2, b, c, M[0], 3936430074, 11);
    c = fnH(c, d, a2, b, M[3], 3572445317, 16);
    b = fnH(b, c, d, a2, M[6], 76029189, 23);
    a2 = fnH(a2, b, c, d, M[9], 3654602809, 4);
    d = fnH(d, a2, b, c, M[12], 3873151461, 11);
    c = fnH(c, d, a2, b, M[15], 530742520, 16);
    b = fnH(b, c, d, a2, M[2], 3299628645, 23);
    a2 = fnI(a2, b, c, d, M[0], 4096336452, 6);
    d = fnI(d, a2, b, c, M[7], 1126891415, 10);
    c = fnI(c, d, a2, b, M[14], 2878612391, 15);
    b = fnI(b, c, d, a2, M[5], 4237533241, 21);
    a2 = fnI(a2, b, c, d, M[12], 1700485571, 6);
    d = fnI(d, a2, b, c, M[3], 2399980690, 10);
    c = fnI(c, d, a2, b, M[10], 4293915773, 15);
    b = fnI(b, c, d, a2, M[1], 2240044497, 21);
    a2 = fnI(a2, b, c, d, M[8], 1873313359, 6);
    d = fnI(d, a2, b, c, M[15], 4264355552, 10);
    c = fnI(c, d, a2, b, M[6], 2734768916, 15);
    b = fnI(b, c, d, a2, M[13], 1309151649, 21);
    a2 = fnI(a2, b, c, d, M[4], 4149444226, 6);
    d = fnI(d, a2, b, c, M[11], 3174756917, 10);
    c = fnI(c, d, a2, b, M[2], 718787259, 15);
    b = fnI(b, c, d, a2, M[9], 3951481745, 21);
    this._a = this._a + a2 | 0;
    this._b = this._b + b | 0;
    this._c = this._c + c | 0;
    this._d = this._d + d | 0;
  };
  MD5$1.prototype._digest = function() {
    this._block[this._blockOffset++] = 128;
    if (this._blockOffset > 56) {
      this._block.fill(0, this._blockOffset, 64);
      this._update();
      this._blockOffset = 0;
    }
    this._block.fill(0, this._blockOffset, 56);
    this._block.writeUInt32LE(this._length[0], 56);
    this._block.writeUInt32LE(this._length[1], 60);
    this._update();
    var buffer2 = Buffer$e.allocUnsafe(16);
    buffer2.writeInt32LE(this._a, 0);
    buffer2.writeInt32LE(this._b, 4);
    buffer2.writeInt32LE(this._c, 8);
    buffer2.writeInt32LE(this._d, 12);
    return buffer2;
  };
  function rotl$1(x, n) {
    return x << n | x >>> 32 - n;
  }
  function fnF(a2, b, c, d, m, k, s) {
    return rotl$1(a2 + (b & c | ~b & d) + m + k | 0, s) + b | 0;
  }
  function fnG(a2, b, c, d, m, k, s) {
    return rotl$1(a2 + (b & d | c & ~d) + m + k | 0, s) + b | 0;
  }
  function fnH(a2, b, c, d, m, k, s) {
    return rotl$1(a2 + (b ^ c ^ d) + m + k | 0, s) + b | 0;
  }
  function fnI(a2, b, c, d, m, k, s) {
    return rotl$1(a2 + (c ^ (b | ~d)) + m + k | 0, s) + b | 0;
  }
  var md5_js = MD5$1;
  var Buffer$d = buffer.Buffer;
  var inherits$8 = inherits_browserExports;
  var HashBase = hashBase;
  var ARRAY16 = new Array(16);
  var zl = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    7,
    4,
    13,
    1,
    10,
    6,
    15,
    3,
    12,
    0,
    9,
    5,
    2,
    14,
    11,
    8,
    3,
    10,
    14,
    4,
    9,
    15,
    8,
    1,
    2,
    7,
    0,
    6,
    13,
    11,
    5,
    12,
    1,
    9,
    11,
    10,
    0,
    8,
    12,
    4,
    13,
    3,
    7,
    15,
    14,
    5,
    6,
    2,
    4,
    0,
    5,
    9,
    7,
    12,
    2,
    10,
    14,
    1,
    3,
    8,
    11,
    6,
    15,
    13
  ];
  var zr = [
    5,
    14,
    7,
    0,
    9,
    2,
    11,
    4,
    13,
    6,
    15,
    8,
    1,
    10,
    3,
    12,
    6,
    11,
    3,
    7,
    0,
    13,
    5,
    10,
    14,
    15,
    8,
    12,
    4,
    9,
    1,
    2,
    15,
    5,
    1,
    3,
    7,
    14,
    6,
    9,
    11,
    8,
    12,
    2,
    10,
    0,
    4,
    13,
    8,
    6,
    4,
    1,
    3,
    11,
    15,
    0,
    5,
    12,
    2,
    13,
    9,
    7,
    10,
    14,
    12,
    15,
    10,
    4,
    1,
    5,
    8,
    7,
    6,
    2,
    13,
    14,
    0,
    3,
    9,
    11
  ];
  var sl = [
    11,
    14,
    15,
    12,
    5,
    8,
    7,
    9,
    11,
    13,
    14,
    15,
    6,
    7,
    9,
    8,
    7,
    6,
    8,
    13,
    11,
    9,
    7,
    15,
    7,
    12,
    15,
    9,
    11,
    7,
    13,
    12,
    11,
    13,
    6,
    7,
    14,
    9,
    13,
    15,
    14,
    8,
    13,
    6,
    5,
    12,
    7,
    5,
    11,
    12,
    14,
    15,
    14,
    15,
    9,
    8,
    9,
    14,
    5,
    6,
    8,
    6,
    5,
    12,
    9,
    15,
    5,
    11,
    6,
    8,
    13,
    12,
    5,
    12,
    13,
    14,
    11,
    8,
    5,
    6
  ];
  var sr = [
    8,
    9,
    9,
    11,
    13,
    15,
    15,
    5,
    7,
    7,
    8,
    11,
    14,
    14,
    12,
    6,
    9,
    13,
    15,
    7,
    12,
    8,
    9,
    11,
    7,
    7,
    12,
    7,
    6,
    15,
    13,
    11,
    9,
    7,
    15,
    11,
    8,
    6,
    6,
    14,
    12,
    13,
    5,
    14,
    13,
    13,
    7,
    5,
    15,
    5,
    8,
    11,
    14,
    14,
    6,
    14,
    6,
    9,
    12,
    9,
    12,
    5,
    15,
    8,
    8,
    5,
    12,
    9,
    12,
    5,
    14,
    6,
    8,
    13,
    6,
    5,
    15,
    13,
    11,
    11
  ];
  var hl = [
    0,
    1518500249,
    1859775393,
    2400959708,
    2840853838
  ];
  var hr = [
    1352829926,
    1548603684,
    1836072691,
    2053994217,
    0
  ];
  function RIPEMD160$1() {
    HashBase.call(this, 64);
    this._a = 1732584193;
    this._b = 4023233417;
    this._c = 2562383102;
    this._d = 271733878;
    this._e = 3285377520;
  }
  inherits$8(RIPEMD160$1, HashBase);
  RIPEMD160$1.prototype._update = function() {
    var words = ARRAY16;
    for (var j = 0; j < 16; ++j)
      words[j] = this._block.readInt32LE(j * 4);
    var al = this._a | 0;
    var bl = this._b | 0;
    var cl = this._c | 0;
    var dl = this._d | 0;
    var el = this._e | 0;
    var ar = this._a | 0;
    var br = this._b | 0;
    var cr = this._c | 0;
    var dr = this._d | 0;
    var er = this._e | 0;
    for (var i = 0; i < 80; i += 1) {
      var tl;
      var tr;
      if (i < 16) {
        tl = fn1(al, bl, cl, dl, el, words[zl[i]], hl[0], sl[i]);
        tr = fn5(ar, br, cr, dr, er, words[zr[i]], hr[0], sr[i]);
      } else if (i < 32) {
        tl = fn2(al, bl, cl, dl, el, words[zl[i]], hl[1], sl[i]);
        tr = fn4(ar, br, cr, dr, er, words[zr[i]], hr[1], sr[i]);
      } else if (i < 48) {
        tl = fn3(al, bl, cl, dl, el, words[zl[i]], hl[2], sl[i]);
        tr = fn3(ar, br, cr, dr, er, words[zr[i]], hr[2], sr[i]);
      } else if (i < 64) {
        tl = fn4(al, bl, cl, dl, el, words[zl[i]], hl[3], sl[i]);
        tr = fn2(ar, br, cr, dr, er, words[zr[i]], hr[3], sr[i]);
      } else {
        tl = fn5(al, bl, cl, dl, el, words[zl[i]], hl[4], sl[i]);
        tr = fn1(ar, br, cr, dr, er, words[zr[i]], hr[4], sr[i]);
      }
      al = el;
      el = dl;
      dl = rotl(cl, 10);
      cl = bl;
      bl = tl;
      ar = er;
      er = dr;
      dr = rotl(cr, 10);
      cr = br;
      br = tr;
    }
    var t = this._b + cl + dr | 0;
    this._b = this._c + dl + er | 0;
    this._c = this._d + el + ar | 0;
    this._d = this._e + al + br | 0;
    this._e = this._a + bl + cr | 0;
    this._a = t;
  };
  RIPEMD160$1.prototype._digest = function() {
    this._block[this._blockOffset++] = 128;
    if (this._blockOffset > 56) {
      this._block.fill(0, this._blockOffset, 64);
      this._update();
      this._blockOffset = 0;
    }
    this._block.fill(0, this._blockOffset, 56);
    this._block.writeUInt32LE(this._length[0], 56);
    this._block.writeUInt32LE(this._length[1], 60);
    this._update();
    var buffer2 = Buffer$d.alloc ? Buffer$d.alloc(20) : new Buffer$d(20);
    buffer2.writeInt32LE(this._a, 0);
    buffer2.writeInt32LE(this._b, 4);
    buffer2.writeInt32LE(this._c, 8);
    buffer2.writeInt32LE(this._d, 12);
    buffer2.writeInt32LE(this._e, 16);
    return buffer2;
  };
  function rotl(x, n) {
    return x << n | x >>> 32 - n;
  }
  function fn1(a2, b, c, d, e, m, k, s) {
    return rotl(a2 + (b ^ c ^ d) + m + k | 0, s) + e | 0;
  }
  function fn2(a2, b, c, d, e, m, k, s) {
    return rotl(a2 + (b & c | ~b & d) + m + k | 0, s) + e | 0;
  }
  function fn3(a2, b, c, d, e, m, k, s) {
    return rotl(a2 + ((b | ~c) ^ d) + m + k | 0, s) + e | 0;
  }
  function fn4(a2, b, c, d, e, m, k, s) {
    return rotl(a2 + (b & d | c & ~d) + m + k | 0, s) + e | 0;
  }
  function fn5(a2, b, c, d, e, m, k, s) {
    return rotl(a2 + (b ^ (c | ~d)) + m + k | 0, s) + e | 0;
  }
  var ripemd160$1 = RIPEMD160$1;
  var sha_jsExports = {};
  var sha_js = {
    get exports() {
      return sha_jsExports;
    },
    set exports(v2) {
      sha_jsExports = v2;
    }
  };
  var Buffer$c = safeBufferExports.Buffer;
  function Hash$7(blockSize, finalSize) {
    this._block = Buffer$c.alloc(blockSize);
    this._finalSize = finalSize;
    this._blockSize = blockSize;
    this._len = 0;
  }
  Hash$7.prototype.update = function(data, enc) {
    if (typeof data === "string") {
      enc = enc || "utf8";
      data = Buffer$c.from(data, enc);
    }
    var block2 = this._block;
    var blockSize = this._blockSize;
    var length = data.length;
    var accum = this._len;
    for (var offset = 0; offset < length; ) {
      var assigned = accum % blockSize;
      var remainder = Math.min(length - offset, blockSize - assigned);
      for (var i = 0; i < remainder; i++) {
        block2[assigned + i] = data[offset + i];
      }
      accum += remainder;
      offset += remainder;
      if (accum % blockSize === 0) {
        this._update(block2);
      }
    }
    this._len += length;
    return this;
  };
  Hash$7.prototype.digest = function(enc) {
    var rem = this._len % this._blockSize;
    this._block[rem] = 128;
    this._block.fill(0, rem + 1);
    if (rem >= this._finalSize) {
      this._update(this._block);
      this._block.fill(0);
    }
    var bits = this._len * 8;
    if (bits <= 4294967295) {
      this._block.writeUInt32BE(bits, this._blockSize - 4);
    } else {
      var lowBits = (bits & 4294967295) >>> 0;
      var highBits = (bits - lowBits) / 4294967296;
      this._block.writeUInt32BE(highBits, this._blockSize - 8);
      this._block.writeUInt32BE(lowBits, this._blockSize - 4);
    }
    this._update(this._block);
    var hash2 = this._hash();
    return enc ? hash2.toString(enc) : hash2;
  };
  Hash$7.prototype._update = function() {
    throw new Error("_update must be implemented by subclass");
  };
  var hash = Hash$7;
  var inherits$7 = inherits_browserExports;
  var Hash$6 = hash;
  var Buffer$b = safeBufferExports.Buffer;
  var K$3 = [
    1518500249,
    1859775393,
    2400959708 | 0,
    3395469782 | 0
  ];
  var W$5 = new Array(80);
  function Sha() {
    this.init();
    this._w = W$5;
    Hash$6.call(this, 64, 56);
  }
  inherits$7(Sha, Hash$6);
  Sha.prototype.init = function() {
    this._a = 1732584193;
    this._b = 4023233417;
    this._c = 2562383102;
    this._d = 271733878;
    this._e = 3285377520;
    return this;
  };
  function rotl5$1(num) {
    return num << 5 | num >>> 27;
  }
  function rotl30$1(num) {
    return num << 30 | num >>> 2;
  }
  function ft$1(s, b, c, d) {
    if (s === 0)
      return b & c | ~b & d;
    if (s === 2)
      return b & c | b & d | c & d;
    return b ^ c ^ d;
  }
  Sha.prototype._update = function(M) {
    var W2 = this._w;
    var a2 = this._a | 0;
    var b = this._b | 0;
    var c = this._c | 0;
    var d = this._d | 0;
    var e = this._e | 0;
    for (var i = 0; i < 16; ++i)
      W2[i] = M.readInt32BE(i * 4);
    for (; i < 80; ++i)
      W2[i] = W2[i - 3] ^ W2[i - 8] ^ W2[i - 14] ^ W2[i - 16];
    for (var j = 0; j < 80; ++j) {
      var s = ~~(j / 20);
      var t = rotl5$1(a2) + ft$1(s, b, c, d) + e + W2[j] + K$3[s] | 0;
      e = d;
      d = c;
      c = rotl30$1(b);
      b = a2;
      a2 = t;
    }
    this._a = a2 + this._a | 0;
    this._b = b + this._b | 0;
    this._c = c + this._c | 0;
    this._d = d + this._d | 0;
    this._e = e + this._e | 0;
  };
  Sha.prototype._hash = function() {
    var H = Buffer$b.allocUnsafe(20);
    H.writeInt32BE(this._a | 0, 0);
    H.writeInt32BE(this._b | 0, 4);
    H.writeInt32BE(this._c | 0, 8);
    H.writeInt32BE(this._d | 0, 12);
    H.writeInt32BE(this._e | 0, 16);
    return H;
  };
  var sha$1 = Sha;
  var inherits$6 = inherits_browserExports;
  var Hash$5 = hash;
  var Buffer$a = safeBufferExports.Buffer;
  var K$2 = [
    1518500249,
    1859775393,
    2400959708 | 0,
    3395469782 | 0
  ];
  var W$4 = new Array(80);
  function Sha1() {
    this.init();
    this._w = W$4;
    Hash$5.call(this, 64, 56);
  }
  inherits$6(Sha1, Hash$5);
  Sha1.prototype.init = function() {
    this._a = 1732584193;
    this._b = 4023233417;
    this._c = 2562383102;
    this._d = 271733878;
    this._e = 3285377520;
    return this;
  };
  function rotl1(num) {
    return num << 1 | num >>> 31;
  }
  function rotl5(num) {
    return num << 5 | num >>> 27;
  }
  function rotl30(num) {
    return num << 30 | num >>> 2;
  }
  function ft(s, b, c, d) {
    if (s === 0)
      return b & c | ~b & d;
    if (s === 2)
      return b & c | b & d | c & d;
    return b ^ c ^ d;
  }
  Sha1.prototype._update = function(M) {
    var W2 = this._w;
    var a2 = this._a | 0;
    var b = this._b | 0;
    var c = this._c | 0;
    var d = this._d | 0;
    var e = this._e | 0;
    for (var i = 0; i < 16; ++i)
      W2[i] = M.readInt32BE(i * 4);
    for (; i < 80; ++i)
      W2[i] = rotl1(W2[i - 3] ^ W2[i - 8] ^ W2[i - 14] ^ W2[i - 16]);
    for (var j = 0; j < 80; ++j) {
      var s = ~~(j / 20);
      var t = rotl5(a2) + ft(s, b, c, d) + e + W2[j] + K$2[s] | 0;
      e = d;
      d = c;
      c = rotl30(b);
      b = a2;
      a2 = t;
    }
    this._a = a2 + this._a | 0;
    this._b = b + this._b | 0;
    this._c = c + this._c | 0;
    this._d = d + this._d | 0;
    this._e = e + this._e | 0;
  };
  Sha1.prototype._hash = function() {
    var H = Buffer$a.allocUnsafe(20);
    H.writeInt32BE(this._a | 0, 0);
    H.writeInt32BE(this._b | 0, 4);
    H.writeInt32BE(this._c | 0, 8);
    H.writeInt32BE(this._d | 0, 12);
    H.writeInt32BE(this._e | 0, 16);
    return H;
  };
  var sha1$1 = Sha1;
  var inherits$5 = inherits_browserExports;
  var Hash$4 = hash;
  var Buffer$9 = safeBufferExports.Buffer;
  var K$1 = [
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ];
  var W$3 = new Array(64);
  function Sha256$1() {
    this.init();
    this._w = W$3;
    Hash$4.call(this, 64, 56);
  }
  inherits$5(Sha256$1, Hash$4);
  Sha256$1.prototype.init = function() {
    this._a = 1779033703;
    this._b = 3144134277;
    this._c = 1013904242;
    this._d = 2773480762;
    this._e = 1359893119;
    this._f = 2600822924;
    this._g = 528734635;
    this._h = 1541459225;
    return this;
  };
  function ch(x, y, z) {
    return z ^ x & (y ^ z);
  }
  function maj$1(x, y, z) {
    return x & y | z & (x | y);
  }
  function sigma0$1(x) {
    return (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10);
  }
  function sigma1$1(x) {
    return (x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7);
  }
  function gamma0(x) {
    return (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ x >>> 3;
  }
  function gamma1(x) {
    return (x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ x >>> 10;
  }
  Sha256$1.prototype._update = function(M) {
    var W2 = this._w;
    var a2 = this._a | 0;
    var b = this._b | 0;
    var c = this._c | 0;
    var d = this._d | 0;
    var e = this._e | 0;
    var f = this._f | 0;
    var g2 = this._g | 0;
    var h2 = this._h | 0;
    for (var i = 0; i < 16; ++i)
      W2[i] = M.readInt32BE(i * 4);
    for (; i < 64; ++i)
      W2[i] = gamma1(W2[i - 2]) + W2[i - 7] + gamma0(W2[i - 15]) + W2[i - 16] | 0;
    for (var j = 0; j < 64; ++j) {
      var T1 = h2 + sigma1$1(e) + ch(e, f, g2) + K$1[j] + W2[j] | 0;
      var T2 = sigma0$1(a2) + maj$1(a2, b, c) | 0;
      h2 = g2;
      g2 = f;
      f = e;
      e = d + T1 | 0;
      d = c;
      c = b;
      b = a2;
      a2 = T1 + T2 | 0;
    }
    this._a = a2 + this._a | 0;
    this._b = b + this._b | 0;
    this._c = c + this._c | 0;
    this._d = d + this._d | 0;
    this._e = e + this._e | 0;
    this._f = f + this._f | 0;
    this._g = g2 + this._g | 0;
    this._h = h2 + this._h | 0;
  };
  Sha256$1.prototype._hash = function() {
    var H = Buffer$9.allocUnsafe(32);
    H.writeInt32BE(this._a, 0);
    H.writeInt32BE(this._b, 4);
    H.writeInt32BE(this._c, 8);
    H.writeInt32BE(this._d, 12);
    H.writeInt32BE(this._e, 16);
    H.writeInt32BE(this._f, 20);
    H.writeInt32BE(this._g, 24);
    H.writeInt32BE(this._h, 28);
    return H;
  };
  var sha256$1 = Sha256$1;
  var inherits$4 = inherits_browserExports;
  var Sha256 = sha256$1;
  var Hash$3 = hash;
  var Buffer$8 = safeBufferExports.Buffer;
  var W$2 = new Array(64);
  function Sha224() {
    this.init();
    this._w = W$2;
    Hash$3.call(this, 64, 56);
  }
  inherits$4(Sha224, Sha256);
  Sha224.prototype.init = function() {
    this._a = 3238371032;
    this._b = 914150663;
    this._c = 812702999;
    this._d = 4144912697;
    this._e = 4290775857;
    this._f = 1750603025;
    this._g = 1694076839;
    this._h = 3204075428;
    return this;
  };
  Sha224.prototype._hash = function() {
    var H = Buffer$8.allocUnsafe(28);
    H.writeInt32BE(this._a, 0);
    H.writeInt32BE(this._b, 4);
    H.writeInt32BE(this._c, 8);
    H.writeInt32BE(this._d, 12);
    H.writeInt32BE(this._e, 16);
    H.writeInt32BE(this._f, 20);
    H.writeInt32BE(this._g, 24);
    return H;
  };
  var sha224 = Sha224;
  var inherits$3 = inherits_browserExports;
  var Hash$2 = hash;
  var Buffer$7 = safeBufferExports.Buffer;
  var K = [
    1116352408,
    3609767458,
    1899447441,
    602891725,
    3049323471,
    3964484399,
    3921009573,
    2173295548,
    961987163,
    4081628472,
    1508970993,
    3053834265,
    2453635748,
    2937671579,
    2870763221,
    3664609560,
    3624381080,
    2734883394,
    310598401,
    1164996542,
    607225278,
    1323610764,
    1426881987,
    3590304994,
    1925078388,
    4068182383,
    2162078206,
    991336113,
    2614888103,
    633803317,
    3248222580,
    3479774868,
    3835390401,
    2666613458,
    4022224774,
    944711139,
    264347078,
    2341262773,
    604807628,
    2007800933,
    770255983,
    1495990901,
    1249150122,
    1856431235,
    1555081692,
    3175218132,
    1996064986,
    2198950837,
    2554220882,
    3999719339,
    2821834349,
    766784016,
    2952996808,
    2566594879,
    3210313671,
    3203337956,
    3336571891,
    1034457026,
    3584528711,
    2466948901,
    113926993,
    3758326383,
    338241895,
    168717936,
    666307205,
    1188179964,
    773529912,
    1546045734,
    1294757372,
    1522805485,
    1396182291,
    2643833823,
    1695183700,
    2343527390,
    1986661051,
    1014477480,
    2177026350,
    1206759142,
    2456956037,
    344077627,
    2730485921,
    1290863460,
    2820302411,
    3158454273,
    3259730800,
    3505952657,
    3345764771,
    106217008,
    3516065817,
    3606008344,
    3600352804,
    1432725776,
    4094571909,
    1467031594,
    275423344,
    851169720,
    430227734,
    3100823752,
    506948616,
    1363258195,
    659060556,
    3750685593,
    883997877,
    3785050280,
    958139571,
    3318307427,
    1322822218,
    3812723403,
    1537002063,
    2003034995,
    1747873779,
    3602036899,
    1955562222,
    1575990012,
    2024104815,
    1125592928,
    2227730452,
    2716904306,
    2361852424,
    442776044,
    2428436474,
    593698344,
    2756734187,
    3733110249,
    3204031479,
    2999351573,
    3329325298,
    3815920427,
    3391569614,
    3928383900,
    3515267271,
    566280711,
    3940187606,
    3454069534,
    4118630271,
    4000239992,
    116418474,
    1914138554,
    174292421,
    2731055270,
    289380356,
    3203993006,
    460393269,
    320620315,
    685471733,
    587496836,
    852142971,
    1086792851,
    1017036298,
    365543100,
    1126000580,
    2618297676,
    1288033470,
    3409855158,
    1501505948,
    4234509866,
    1607167915,
    987167468,
    1816402316,
    1246189591
  ];
  var W$1 = new Array(160);
  function Sha512() {
    this.init();
    this._w = W$1;
    Hash$2.call(this, 128, 112);
  }
  inherits$3(Sha512, Hash$2);
  Sha512.prototype.init = function() {
    this._ah = 1779033703;
    this._bh = 3144134277;
    this._ch = 1013904242;
    this._dh = 2773480762;
    this._eh = 1359893119;
    this._fh = 2600822924;
    this._gh = 528734635;
    this._hh = 1541459225;
    this._al = 4089235720;
    this._bl = 2227873595;
    this._cl = 4271175723;
    this._dl = 1595750129;
    this._el = 2917565137;
    this._fl = 725511199;
    this._gl = 4215389547;
    this._hl = 327033209;
    return this;
  };
  function Ch(x, y, z) {
    return z ^ x & (y ^ z);
  }
  function maj(x, y, z) {
    return x & y | z & (x | y);
  }
  function sigma0(x, xl) {
    return (x >>> 28 | xl << 4) ^ (xl >>> 2 | x << 30) ^ (xl >>> 7 | x << 25);
  }
  function sigma1(x, xl) {
    return (x >>> 14 | xl << 18) ^ (x >>> 18 | xl << 14) ^ (xl >>> 9 | x << 23);
  }
  function Gamma0(x, xl) {
    return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ x >>> 7;
  }
  function Gamma0l(x, xl) {
    return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7 | xl << 25);
  }
  function Gamma1(x, xl) {
    return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ x >>> 6;
  }
  function Gamma1l(x, xl) {
    return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6 | xl << 26);
  }
  function getCarry(a2, b) {
    return a2 >>> 0 < b >>> 0 ? 1 : 0;
  }
  Sha512.prototype._update = function(M) {
    var W2 = this._w;
    var ah = this._ah | 0;
    var bh = this._bh | 0;
    var ch2 = this._ch | 0;
    var dh = this._dh | 0;
    var eh = this._eh | 0;
    var fh = this._fh | 0;
    var gh = this._gh | 0;
    var hh = this._hh | 0;
    var al = this._al | 0;
    var bl = this._bl | 0;
    var cl = this._cl | 0;
    var dl = this._dl | 0;
    var el = this._el | 0;
    var fl = this._fl | 0;
    var gl = this._gl | 0;
    var hl2 = this._hl | 0;
    for (var i = 0; i < 32; i += 2) {
      W2[i] = M.readInt32BE(i * 4);
      W2[i + 1] = M.readInt32BE(i * 4 + 4);
    }
    for (; i < 160; i += 2) {
      var xh = W2[i - 15 * 2];
      var xl = W2[i - 15 * 2 + 1];
      var gamma02 = Gamma0(xh, xl);
      var gamma0l = Gamma0l(xl, xh);
      xh = W2[i - 2 * 2];
      xl = W2[i - 2 * 2 + 1];
      var gamma12 = Gamma1(xh, xl);
      var gamma1l = Gamma1l(xl, xh);
      var Wi7h = W2[i - 7 * 2];
      var Wi7l = W2[i - 7 * 2 + 1];
      var Wi16h = W2[i - 16 * 2];
      var Wi16l = W2[i - 16 * 2 + 1];
      var Wil = gamma0l + Wi7l | 0;
      var Wih = gamma02 + Wi7h + getCarry(Wil, gamma0l) | 0;
      Wil = Wil + gamma1l | 0;
      Wih = Wih + gamma12 + getCarry(Wil, gamma1l) | 0;
      Wil = Wil + Wi16l | 0;
      Wih = Wih + Wi16h + getCarry(Wil, Wi16l) | 0;
      W2[i] = Wih;
      W2[i + 1] = Wil;
    }
    for (var j = 0; j < 160; j += 2) {
      Wih = W2[j];
      Wil = W2[j + 1];
      var majh = maj(ah, bh, ch2);
      var majl = maj(al, bl, cl);
      var sigma0h = sigma0(ah, al);
      var sigma0l = sigma0(al, ah);
      var sigma1h = sigma1(eh, el);
      var sigma1l = sigma1(el, eh);
      var Kih = K[j];
      var Kil = K[j + 1];
      var chh = Ch(eh, fh, gh);
      var chl = Ch(el, fl, gl);
      var t1l = hl2 + sigma1l | 0;
      var t1h = hh + sigma1h + getCarry(t1l, hl2) | 0;
      t1l = t1l + chl | 0;
      t1h = t1h + chh + getCarry(t1l, chl) | 0;
      t1l = t1l + Kil | 0;
      t1h = t1h + Kih + getCarry(t1l, Kil) | 0;
      t1l = t1l + Wil | 0;
      t1h = t1h + Wih + getCarry(t1l, Wil) | 0;
      var t2l = sigma0l + majl | 0;
      var t2h = sigma0h + majh + getCarry(t2l, sigma0l) | 0;
      hh = gh;
      hl2 = gl;
      gh = fh;
      gl = fl;
      fh = eh;
      fl = el;
      el = dl + t1l | 0;
      eh = dh + t1h + getCarry(el, dl) | 0;
      dh = ch2;
      dl = cl;
      ch2 = bh;
      cl = bl;
      bh = ah;
      bl = al;
      al = t1l + t2l | 0;
      ah = t1h + t2h + getCarry(al, t1l) | 0;
    }
    this._al = this._al + al | 0;
    this._bl = this._bl + bl | 0;
    this._cl = this._cl + cl | 0;
    this._dl = this._dl + dl | 0;
    this._el = this._el + el | 0;
    this._fl = this._fl + fl | 0;
    this._gl = this._gl + gl | 0;
    this._hl = this._hl + hl2 | 0;
    this._ah = this._ah + ah + getCarry(this._al, al) | 0;
    this._bh = this._bh + bh + getCarry(this._bl, bl) | 0;
    this._ch = this._ch + ch2 + getCarry(this._cl, cl) | 0;
    this._dh = this._dh + dh + getCarry(this._dl, dl) | 0;
    this._eh = this._eh + eh + getCarry(this._el, el) | 0;
    this._fh = this._fh + fh + getCarry(this._fl, fl) | 0;
    this._gh = this._gh + gh + getCarry(this._gl, gl) | 0;
    this._hh = this._hh + hh + getCarry(this._hl, hl2) | 0;
  };
  Sha512.prototype._hash = function() {
    var H = Buffer$7.allocUnsafe(64);
    function writeInt64BE(h2, l, offset) {
      H.writeInt32BE(h2, offset);
      H.writeInt32BE(l, offset + 4);
    }
    writeInt64BE(this._ah, this._al, 0);
    writeInt64BE(this._bh, this._bl, 8);
    writeInt64BE(this._ch, this._cl, 16);
    writeInt64BE(this._dh, this._dl, 24);
    writeInt64BE(this._eh, this._el, 32);
    writeInt64BE(this._fh, this._fl, 40);
    writeInt64BE(this._gh, this._gl, 48);
    writeInt64BE(this._hh, this._hl, 56);
    return H;
  };
  var sha512 = Sha512;
  var inherits$2 = inherits_browserExports;
  var SHA512 = sha512;
  var Hash$1 = hash;
  var Buffer$6 = safeBufferExports.Buffer;
  var W = new Array(160);
  function Sha384() {
    this.init();
    this._w = W;
    Hash$1.call(this, 128, 112);
  }
  inherits$2(Sha384, SHA512);
  Sha384.prototype.init = function() {
    this._ah = 3418070365;
    this._bh = 1654270250;
    this._ch = 2438529370;
    this._dh = 355462360;
    this._eh = 1731405415;
    this._fh = 2394180231;
    this._gh = 3675008525;
    this._hh = 1203062813;
    this._al = 3238371032;
    this._bl = 914150663;
    this._cl = 812702999;
    this._dl = 4144912697;
    this._el = 4290775857;
    this._fl = 1750603025;
    this._gl = 1694076839;
    this._hl = 3204075428;
    return this;
  };
  Sha384.prototype._hash = function() {
    var H = Buffer$6.allocUnsafe(48);
    function writeInt64BE(h2, l, offset) {
      H.writeInt32BE(h2, offset);
      H.writeInt32BE(l, offset + 4);
    }
    writeInt64BE(this._ah, this._al, 0);
    writeInt64BE(this._bh, this._bl, 8);
    writeInt64BE(this._ch, this._cl, 16);
    writeInt64BE(this._dh, this._dl, 24);
    writeInt64BE(this._eh, this._el, 32);
    writeInt64BE(this._fh, this._fl, 40);
    return H;
  };
  var sha384 = Sha384;
  var exports = sha_js.exports = function SHA(algorithm) {
    algorithm = algorithm.toLowerCase();
    var Algorithm = exports[algorithm];
    if (!Algorithm)
      throw new Error(algorithm + " is not supported (we accept pull requests)");
    return new Algorithm();
  };
  exports.sha = sha$1;
  exports.sha1 = sha1$1;
  exports.sha224 = sha224;
  exports.sha256 = sha256$1;
  exports.sha384 = sha384;
  exports.sha512 = sha512;
  var util = {};
  var types$5 = {};
  var shams$1 = function hasSymbols2() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
      return false;
    }
    if (typeof Symbol.iterator === "symbol") {
      return true;
    }
    var obj = {};
    var sym = Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") {
      return false;
    }
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
      return false;
    }
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
      return false;
    }
    var symVal = 42;
    obj[sym] = symVal;
    for (sym in obj) {
      return false;
    }
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
      return false;
    }
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
      return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
      return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
      return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === "function") {
      var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
      if (descriptor.value !== symVal || descriptor.enumerable !== true) {
        return false;
      }
    }
    return true;
  };
  var hasSymbols$2 = shams$1;
  var shams = function hasToStringTagShams() {
    return hasSymbols$2() && !!Symbol.toStringTag;
  };
  var origSymbol = typeof Symbol !== "undefined" && Symbol;
  var hasSymbolSham = shams$1;
  var hasSymbols$1 = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") {
      return false;
    }
    if (typeof Symbol !== "function") {
      return false;
    }
    if (typeof origSymbol("foo") !== "symbol") {
      return false;
    }
    if (typeof Symbol("bar") !== "symbol") {
      return false;
    }
    return hasSymbolSham();
  };
  var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
  var slice = Array.prototype.slice;
  var toStr$3 = Object.prototype.toString;
  var funcType = "[object Function]";
  var implementation$1 = function bind2(that) {
    var target = this;
    if (typeof target !== "function" || toStr$3.call(target) !== funcType) {
      throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);
    var bound;
    var binder = function() {
      if (this instanceof bound) {
        var result = target.apply(this, args.concat(slice.call(arguments)));
        if (Object(result) === result) {
          return result;
        }
        return this;
      } else {
        return target.apply(that, args.concat(slice.call(arguments)));
      }
    };
    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
      boundArgs.push("$" + i);
    }
    bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
      var Empty = function Empty2() {
      };
      Empty.prototype = target.prototype;
      bound.prototype = new Empty();
      Empty.prototype = null;
    }
    return bound;
  };
  var implementation = implementation$1;
  var functionBind = Function.prototype.bind || implementation;
  var bind$1 = functionBind;
  var src$2 = bind$1.call(Function.call, Object.prototype.hasOwnProperty);
  var undefined$1;
  var $SyntaxError = SyntaxError;
  var $Function = Function;
  var $TypeError = TypeError;
  var getEvalledConstructor = function(expressionSyntax) {
    try {
      return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch (e) {
    }
  };
  var $gOPD$1 = Object.getOwnPropertyDescriptor;
  if ($gOPD$1) {
    try {
      $gOPD$1({}, "");
    } catch (e) {
      $gOPD$1 = null;
    }
  }
  var throwTypeError = function() {
    throw new $TypeError();
  };
  var ThrowTypeError = $gOPD$1 ? function() {
    try {
      arguments.callee;
      return throwTypeError;
    } catch (calleeThrows) {
      try {
        return $gOPD$1(arguments, "callee").get;
      } catch (gOPDthrows) {
        return throwTypeError;
      }
    }
  }() : throwTypeError;
  var hasSymbols = hasSymbols$1();
  var getProto$1 = Object.getPrototypeOf || function(x) {
    return x.__proto__;
  };
  var needsEval = {};
  var TypedArray = typeof Uint8Array === "undefined" ? undefined$1 : getProto$1(Uint8Array);
  var INTRINSICS = {
    "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
    "%ArrayIteratorPrototype%": hasSymbols ? getProto$1([][Symbol.iterator]()) : undefined$1,
    "%AsyncFromSyncIteratorPrototype%": undefined$1,
    "%AsyncFunction%": needsEval,
    "%AsyncGenerator%": needsEval,
    "%AsyncGeneratorFunction%": needsEval,
    "%AsyncIteratorPrototype%": needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
    "%Function%": $Function,
    "%GeneratorFunction%": needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hasSymbols ? getProto$1(getProto$1([][Symbol.iterator]())) : undefined$1,
    "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
    "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined$1 : getProto$1((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined$1 : getProto$1((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hasSymbols ? getProto$1(""[Symbol.iterator]()) : undefined$1,
    "%Symbol%": hasSymbols ? Symbol : undefined$1,
    "%SyntaxError%": $SyntaxError,
    "%ThrowTypeError%": ThrowTypeError,
    "%TypedArray%": TypedArray,
    "%TypeError%": $TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet
  };
  var doEval = function doEval2(name) {
    var value2;
    if (name === "%AsyncFunction%") {
      value2 = getEvalledConstructor("async function () {}");
    } else if (name === "%GeneratorFunction%") {
      value2 = getEvalledConstructor("function* () {}");
    } else if (name === "%AsyncGeneratorFunction%") {
      value2 = getEvalledConstructor("async function* () {}");
    } else if (name === "%AsyncGenerator%") {
      var fn = doEval2("%AsyncGeneratorFunction%");
      if (fn) {
        value2 = fn.prototype;
      }
    } else if (name === "%AsyncIteratorPrototype%") {
      var gen = doEval2("%AsyncGenerator%");
      if (gen) {
        value2 = getProto$1(gen.prototype);
      }
    }
    INTRINSICS[name] = value2;
    return value2;
  };
  var LEGACY_ALIASES = {
    "%ArrayBufferPrototype%": [
      "ArrayBuffer",
      "prototype"
    ],
    "%ArrayPrototype%": [
      "Array",
      "prototype"
    ],
    "%ArrayProto_entries%": [
      "Array",
      "prototype",
      "entries"
    ],
    "%ArrayProto_forEach%": [
      "Array",
      "prototype",
      "forEach"
    ],
    "%ArrayProto_keys%": [
      "Array",
      "prototype",
      "keys"
    ],
    "%ArrayProto_values%": [
      "Array",
      "prototype",
      "values"
    ],
    "%AsyncFunctionPrototype%": [
      "AsyncFunction",
      "prototype"
    ],
    "%AsyncGenerator%": [
      "AsyncGeneratorFunction",
      "prototype"
    ],
    "%AsyncGeneratorPrototype%": [
      "AsyncGeneratorFunction",
      "prototype",
      "prototype"
    ],
    "%BooleanPrototype%": [
      "Boolean",
      "prototype"
    ],
    "%DataViewPrototype%": [
      "DataView",
      "prototype"
    ],
    "%DatePrototype%": [
      "Date",
      "prototype"
    ],
    "%ErrorPrototype%": [
      "Error",
      "prototype"
    ],
    "%EvalErrorPrototype%": [
      "EvalError",
      "prototype"
    ],
    "%Float32ArrayPrototype%": [
      "Float32Array",
      "prototype"
    ],
    "%Float64ArrayPrototype%": [
      "Float64Array",
      "prototype"
    ],
    "%FunctionPrototype%": [
      "Function",
      "prototype"
    ],
    "%Generator%": [
      "GeneratorFunction",
      "prototype"
    ],
    "%GeneratorPrototype%": [
      "GeneratorFunction",
      "prototype",
      "prototype"
    ],
    "%Int8ArrayPrototype%": [
      "Int8Array",
      "prototype"
    ],
    "%Int16ArrayPrototype%": [
      "Int16Array",
      "prototype"
    ],
    "%Int32ArrayPrototype%": [
      "Int32Array",
      "prototype"
    ],
    "%JSONParse%": [
      "JSON",
      "parse"
    ],
    "%JSONStringify%": [
      "JSON",
      "stringify"
    ],
    "%MapPrototype%": [
      "Map",
      "prototype"
    ],
    "%NumberPrototype%": [
      "Number",
      "prototype"
    ],
    "%ObjectPrototype%": [
      "Object",
      "prototype"
    ],
    "%ObjProto_toString%": [
      "Object",
      "prototype",
      "toString"
    ],
    "%ObjProto_valueOf%": [
      "Object",
      "prototype",
      "valueOf"
    ],
    "%PromisePrototype%": [
      "Promise",
      "prototype"
    ],
    "%PromiseProto_then%": [
      "Promise",
      "prototype",
      "then"
    ],
    "%Promise_all%": [
      "Promise",
      "all"
    ],
    "%Promise_reject%": [
      "Promise",
      "reject"
    ],
    "%Promise_resolve%": [
      "Promise",
      "resolve"
    ],
    "%RangeErrorPrototype%": [
      "RangeError",
      "prototype"
    ],
    "%ReferenceErrorPrototype%": [
      "ReferenceError",
      "prototype"
    ],
    "%RegExpPrototype%": [
      "RegExp",
      "prototype"
    ],
    "%SetPrototype%": [
      "Set",
      "prototype"
    ],
    "%SharedArrayBufferPrototype%": [
      "SharedArrayBuffer",
      "prototype"
    ],
    "%StringPrototype%": [
      "String",
      "prototype"
    ],
    "%SymbolPrototype%": [
      "Symbol",
      "prototype"
    ],
    "%SyntaxErrorPrototype%": [
      "SyntaxError",
      "prototype"
    ],
    "%TypedArrayPrototype%": [
      "TypedArray",
      "prototype"
    ],
    "%TypeErrorPrototype%": [
      "TypeError",
      "prototype"
    ],
    "%Uint8ArrayPrototype%": [
      "Uint8Array",
      "prototype"
    ],
    "%Uint8ClampedArrayPrototype%": [
      "Uint8ClampedArray",
      "prototype"
    ],
    "%Uint16ArrayPrototype%": [
      "Uint16Array",
      "prototype"
    ],
    "%Uint32ArrayPrototype%": [
      "Uint32Array",
      "prototype"
    ],
    "%URIErrorPrototype%": [
      "URIError",
      "prototype"
    ],
    "%WeakMapPrototype%": [
      "WeakMap",
      "prototype"
    ],
    "%WeakSetPrototype%": [
      "WeakSet",
      "prototype"
    ]
  };
  var bind = functionBind;
  var hasOwn = src$2;
  var $concat = bind.call(Function.call, Array.prototype.concat);
  var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
  var $replace = bind.call(Function.call, String.prototype.replace);
  var $strSlice = bind.call(Function.call, String.prototype.slice);
  var $exec = bind.call(Function.call, RegExp.prototype.exec);
  var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = function stringToPath2(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === "%" && last !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    } else if (last === "%" && first !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
      result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
    });
    return result;
  };
  var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
      alias = LEGACY_ALIASES[intrinsicName];
      intrinsicName = "%" + alias[0] + "%";
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
      var value2 = INTRINSICS[intrinsicName];
      if (value2 === needsEval) {
        value2 = doEval(intrinsicName);
      }
      if (typeof value2 === "undefined" && !allowMissing) {
        throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
      }
      return {
        alias,
        name: intrinsicName,
        value: value2
      };
    }
    throw new $SyntaxError("intrinsic " + name + " does not exist!");
  };
  var getIntrinsic = function GetIntrinsic2(name, allowMissing) {
    if (typeof name !== "string" || name.length === 0) {
      throw new $TypeError("intrinsic name must be a non-empty string");
    }
    if (arguments.length > 1 && typeof allowMissing !== "boolean") {
      throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
      throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value2 = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
      intrinsicBaseName = alias[0];
      $spliceApply(parts, $concat([
        0,
        1
      ], alias));
    }
    for (var i = 1, isOwn = true; i < parts.length; i += 1) {
      var part = parts[i];
      var first = $strSlice(part, 0, 1);
      var last = $strSlice(part, -1);
      if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
        throw new $SyntaxError("property names with quotes must have matching quotes");
      }
      if (part === "constructor" || !isOwn) {
        skipFurtherCaching = true;
      }
      intrinsicBaseName += "." + part;
      intrinsicRealName = "%" + intrinsicBaseName + "%";
      if (hasOwn(INTRINSICS, intrinsicRealName)) {
        value2 = INTRINSICS[intrinsicRealName];
      } else if (value2 != null) {
        if (!(part in value2)) {
          if (!allowMissing) {
            throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
          }
          return void 0;
        }
        if ($gOPD$1 && i + 1 >= parts.length) {
          var desc = $gOPD$1(value2, part);
          isOwn = !!desc;
          if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
            value2 = desc.get;
          } else {
            value2 = value2[part];
          }
        } else {
          isOwn = hasOwn(value2, part);
          value2 = value2[part];
        }
        if (isOwn && !skipFurtherCaching) {
          INTRINSICS[intrinsicRealName] = value2;
        }
      }
    }
    return value2;
  };
  var callBindExports = {};
  var callBind$1 = {
    get exports() {
      return callBindExports;
    },
    set exports(v2) {
      callBindExports = v2;
    }
  };
  (function(module) {
    var bind2 = functionBind;
    var GetIntrinsic2 = getIntrinsic;
    var $apply = GetIntrinsic2("%Function.prototype.apply%");
    var $call = GetIntrinsic2("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic2("%Reflect.apply%", true) || bind2.call($call, $apply);
    var $gOPD2 = GetIntrinsic2("%Object.getOwnPropertyDescriptor%", true);
    var $defineProperty = GetIntrinsic2("%Object.defineProperty%", true);
    var $max = GetIntrinsic2("%Math.max%");
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", {
          value: 1
        });
      } catch (e) {
        $defineProperty = null;
      }
    }
    module.exports = function callBind2(originalFunction) {
      var func = $reflectApply(bind2, $call, arguments);
      if ($gOPD2 && $defineProperty) {
        var desc = $gOPD2(func, "length");
        if (desc.configurable) {
          $defineProperty(func, "length", {
            value: 1 + $max(0, originalFunction.length - (arguments.length - 1))
          });
        }
      }
      return func;
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind2, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", {
        value: applyBind
      });
    } else {
      module.exports.apply = applyBind;
    }
  })(callBind$1);
  var GetIntrinsic$1 = getIntrinsic;
  var callBind = callBindExports;
  var $indexOf$1 = callBind(GetIntrinsic$1("String.prototype.indexOf"));
  var callBound$3 = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic$1(name, !!allowMissing);
    if (typeof intrinsic === "function" && $indexOf$1(name, ".prototype.") > -1) {
      return callBind(intrinsic);
    }
    return intrinsic;
  };
  var hasToStringTag$4 = shams();
  var callBound$2 = callBound$3;
  var $toString$2 = callBound$2("Object.prototype.toString");
  var isStandardArguments = function isArguments2(value2) {
    if (hasToStringTag$4 && value2 && typeof value2 === "object" && Symbol.toStringTag in value2) {
      return false;
    }
    return $toString$2(value2) === "[object Arguments]";
  };
  var isLegacyArguments = function isArguments2(value2) {
    if (isStandardArguments(value2)) {
      return true;
    }
    return value2 !== null && typeof value2 === "object" && typeof value2.length === "number" && value2.length >= 0 && $toString$2(value2) !== "[object Array]" && $toString$2(value2.callee) === "[object Function]";
  };
  var supportsStandardArguments = function() {
    return isStandardArguments(arguments);
  }();
  isStandardArguments.isLegacyArguments = isLegacyArguments;
  var isArguments = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
  var toStr$2 = Object.prototype.toString;
  var fnToStr$1 = Function.prototype.toString;
  var isFnRegex = /^\s*(?:function)?\*/;
  var hasToStringTag$3 = shams();
  var getProto = Object.getPrototypeOf;
  var getGeneratorFunc = function() {
    if (!hasToStringTag$3) {
      return false;
    }
    try {
      return Function("return function*() {}")();
    } catch (e) {
    }
  };
  var GeneratorFunction;
  var isGeneratorFunction = function isGeneratorFunction2(fn) {
    if (typeof fn !== "function") {
      return false;
    }
    if (isFnRegex.test(fnToStr$1.call(fn))) {
      return true;
    }
    if (!hasToStringTag$3) {
      var str = toStr$2.call(fn);
      return str === "[object GeneratorFunction]";
    }
    if (!getProto) {
      return false;
    }
    if (typeof GeneratorFunction === "undefined") {
      var generatorFunc = getGeneratorFunc();
      GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
    }
    return getProto(fn) === GeneratorFunction;
  };
  var fnToStr = Function.prototype.toString;
  var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
  var badArrayLike;
  var isCallableMarker;
  if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
    try {
      badArrayLike = Object.defineProperty({}, "length", {
        get: function() {
          throw isCallableMarker;
        }
      });
      isCallableMarker = {};
      reflectApply(function() {
        throw 42;
      }, null, badArrayLike);
    } catch (_) {
      if (_ !== isCallableMarker) {
        reflectApply = null;
      }
    }
  } else {
    reflectApply = null;
  }
  var constructorRegex = /^\s*class\b/;
  var isES6ClassFn = function isES6ClassFunction(value2) {
    try {
      var fnStr = fnToStr.call(value2);
      return constructorRegex.test(fnStr);
    } catch (e) {
      return false;
    }
  };
  var tryFunctionObject = function tryFunctionToStr(value2) {
    try {
      if (isES6ClassFn(value2)) {
        return false;
      }
      fnToStr.call(value2);
      return true;
    } catch (e) {
      return false;
    }
  };
  var toStr$1 = Object.prototype.toString;
  var objectClass = "[object Object]";
  var fnClass = "[object Function]";
  var genClass = "[object GeneratorFunction]";
  var ddaClass = "[object HTMLAllCollection]";
  var ddaClass2 = "[object HTML document.all class]";
  var ddaClass3 = "[object HTMLCollection]";
  var hasToStringTag$2 = typeof Symbol === "function" && !!Symbol.toStringTag;
  var isIE68 = !(0 in [
    ,
  ]);
  var isDDA = function isDocumentDotAll() {
    return false;
  };
  if (typeof document === "object") {
    var all = document.all;
    if (toStr$1.call(all) === toStr$1.call(document.all)) {
      isDDA = function isDocumentDotAll(value2) {
        if ((isIE68 || !value2) && (typeof value2 === "undefined" || typeof value2 === "object")) {
          try {
            var str = toStr$1.call(value2);
            return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value2("") == null;
          } catch (e) {
          }
        }
        return false;
      };
    }
  }
  var isCallable$1 = reflectApply ? function isCallable2(value2) {
    if (isDDA(value2)) {
      return true;
    }
    if (!value2) {
      return false;
    }
    if (typeof value2 !== "function" && typeof value2 !== "object") {
      return false;
    }
    try {
      reflectApply(value2, null, badArrayLike);
    } catch (e) {
      if (e !== isCallableMarker) {
        return false;
      }
    }
    return !isES6ClassFn(value2) && tryFunctionObject(value2);
  } : function isCallable2(value2) {
    if (isDDA(value2)) {
      return true;
    }
    if (!value2) {
      return false;
    }
    if (typeof value2 !== "function" && typeof value2 !== "object") {
      return false;
    }
    if (hasToStringTag$2) {
      return tryFunctionObject(value2);
    }
    if (isES6ClassFn(value2)) {
      return false;
    }
    var strClass = toStr$1.call(value2);
    if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
      return false;
    }
    return tryFunctionObject(value2);
  };
  var isCallable = isCallable$1;
  var toStr = Object.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var forEachArray = function forEachArray2(array, iterator, receiver) {
    for (var i = 0, len = array.length; i < len; i++) {
      if (hasOwnProperty.call(array, i)) {
        if (receiver == null) {
          iterator(array[i], i, array);
        } else {
          iterator.call(receiver, array[i], i, array);
        }
      }
    }
  };
  var forEachString = function forEachString2(string, iterator, receiver) {
    for (var i = 0, len = string.length; i < len; i++) {
      if (receiver == null) {
        iterator(string.charAt(i), i, string);
      } else {
        iterator.call(receiver, string.charAt(i), i, string);
      }
    }
  };
  var forEachObject = function forEachObject2(object, iterator, receiver) {
    for (var k in object) {
      if (hasOwnProperty.call(object, k)) {
        if (receiver == null) {
          iterator(object[k], k, object);
        } else {
          iterator.call(receiver, object[k], k, object);
        }
      }
    }
  };
  var forEach$3 = function forEach2(list, iterator, thisArg) {
    if (!isCallable(iterator)) {
      throw new TypeError("iterator must be a function");
    }
    var receiver;
    if (arguments.length >= 3) {
      receiver = thisArg;
    }
    if (toStr.call(list) === "[object Array]") {
      forEachArray(list, iterator, receiver);
    } else if (typeof list === "string") {
      forEachString(list, iterator, receiver);
    } else {
      forEachObject(list, iterator, receiver);
    }
  };
  var forEach_1 = forEach$3;
  var possibleNames = [
    "BigInt64Array",
    "BigUint64Array",
    "Float32Array",
    "Float64Array",
    "Int16Array",
    "Int32Array",
    "Int8Array",
    "Uint16Array",
    "Uint32Array",
    "Uint8Array",
    "Uint8ClampedArray"
  ];
  var g$2 = typeof globalThis === "undefined" ? commonjsGlobal : globalThis;
  var availableTypedArrays$2 = function availableTypedArrays2() {
    var out = [];
    for (var i = 0; i < possibleNames.length; i++) {
      if (typeof g$2[possibleNames[i]] === "function") {
        out[out.length] = possibleNames[i];
      }
    }
    return out;
  };
  var GetIntrinsic = getIntrinsic;
  var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
  if ($gOPD) {
    try {
      $gOPD([], "length");
    } catch (e) {
      $gOPD = null;
    }
  }
  var gopd = $gOPD;
  var forEach$2 = forEach_1;
  var availableTypedArrays$1 = availableTypedArrays$2;
  var callBound$1 = callBound$3;
  var $toString$1 = callBound$1("Object.prototype.toString");
  var hasToStringTag$1 = shams();
  var gOPD$1 = gopd;
  var g$1 = typeof globalThis === "undefined" ? commonjsGlobal : globalThis;
  var typedArrays$1 = availableTypedArrays$1();
  var $indexOf = callBound$1("Array.prototype.indexOf", true) || function indexOf2(array, value2) {
    for (var i = 0; i < array.length; i += 1) {
      if (array[i] === value2) {
        return i;
      }
    }
    return -1;
  };
  var $slice$1 = callBound$1("String.prototype.slice");
  var toStrTags$1 = {};
  var getPrototypeOf$1 = Object.getPrototypeOf;
  if (hasToStringTag$1 && gOPD$1 && getPrototypeOf$1) {
    forEach$2(typedArrays$1, function(typedArray) {
      var arr = new g$1[typedArray]();
      if (Symbol.toStringTag in arr) {
        var proto = getPrototypeOf$1(arr);
        var descriptor = gOPD$1(proto, Symbol.toStringTag);
        if (!descriptor) {
          var superProto = getPrototypeOf$1(proto);
          descriptor = gOPD$1(superProto, Symbol.toStringTag);
        }
        toStrTags$1[typedArray] = descriptor.get;
      }
    });
  }
  var tryTypedArrays$1 = function tryAllTypedArrays(value2) {
    var anyTrue = false;
    forEach$2(toStrTags$1, function(getter, typedArray) {
      if (!anyTrue) {
        try {
          anyTrue = getter.call(value2) === typedArray;
        } catch (e) {
        }
      }
    });
    return anyTrue;
  };
  var isTypedArray$1 = function isTypedArray2(value2) {
    if (!value2 || typeof value2 !== "object") {
      return false;
    }
    if (!hasToStringTag$1 || !(Symbol.toStringTag in value2)) {
      var tag = $slice$1($toString$1(value2), 8, -1);
      return $indexOf(typedArrays$1, tag) > -1;
    }
    if (!gOPD$1) {
      return false;
    }
    return tryTypedArrays$1(value2);
  };
  var forEach$1 = forEach_1;
  var availableTypedArrays = availableTypedArrays$2;
  var callBound = callBound$3;
  var gOPD = gopd;
  var $toString = callBound("Object.prototype.toString");
  var hasToStringTag = shams();
  var g = typeof globalThis === "undefined" ? commonjsGlobal : globalThis;
  var typedArrays = availableTypedArrays();
  var $slice = callBound("String.prototype.slice");
  var toStrTags = {};
  var getPrototypeOf = Object.getPrototypeOf;
  if (hasToStringTag && gOPD && getPrototypeOf) {
    forEach$1(typedArrays, function(typedArray) {
      if (typeof g[typedArray] === "function") {
        var arr = new g[typedArray]();
        if (Symbol.toStringTag in arr) {
          var proto = getPrototypeOf(arr);
          var descriptor = gOPD(proto, Symbol.toStringTag);
          if (!descriptor) {
            var superProto = getPrototypeOf(proto);
            descriptor = gOPD(superProto, Symbol.toStringTag);
          }
          toStrTags[typedArray] = descriptor.get;
        }
      }
    });
  }
  var tryTypedArrays = function tryAllTypedArrays(value2) {
    var foundName = false;
    forEach$1(toStrTags, function(getter, typedArray) {
      if (!foundName) {
        try {
          var name = getter.call(value2);
          if (name === typedArray) {
            foundName = name;
          }
        } catch (e) {
        }
      }
    });
    return foundName;
  };
  var isTypedArray = isTypedArray$1;
  var whichTypedArray = function whichTypedArray2(value2) {
    if (!isTypedArray(value2)) {
      return false;
    }
    if (!hasToStringTag || !(Symbol.toStringTag in value2)) {
      return $slice($toString(value2), 8, -1);
    }
    return tryTypedArrays(value2);
  };
  (function(exports2) {
    var isArgumentsObject = isArguments;
    var isGeneratorFunction$1 = isGeneratorFunction;
    var whichTypedArray$1 = whichTypedArray;
    var isTypedArray2 = isTypedArray$1;
    function uncurryThis(f) {
      return f.call.bind(f);
    }
    var BigIntSupported = typeof BigInt !== "undefined";
    var SymbolSupported = typeof Symbol !== "undefined";
    var ObjectToString = uncurryThis(Object.prototype.toString);
    var numberValue = uncurryThis(Number.prototype.valueOf);
    var stringValue = uncurryThis(String.prototype.valueOf);
    var booleanValue = uncurryThis(Boolean.prototype.valueOf);
    if (BigIntSupported) {
      var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
    }
    if (SymbolSupported) {
      var symbolValue = uncurryThis(Symbol.prototype.valueOf);
    }
    function checkBoxedPrimitive(value2, prototypeValueOf) {
      if (typeof value2 !== "object") {
        return false;
      }
      try {
        prototypeValueOf(value2);
        return true;
      } catch (e) {
        return false;
      }
    }
    exports2.isArgumentsObject = isArgumentsObject;
    exports2.isGeneratorFunction = isGeneratorFunction$1;
    exports2.isTypedArray = isTypedArray2;
    function isPromise(input) {
      return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
    }
    exports2.isPromise = isPromise;
    function isArrayBufferView(value2) {
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        return ArrayBuffer.isView(value2);
      }
      return isTypedArray2(value2) || isDataView(value2);
    }
    exports2.isArrayBufferView = isArrayBufferView;
    function isUint8Array2(value2) {
      return whichTypedArray$1(value2) === "Uint8Array";
    }
    exports2.isUint8Array = isUint8Array2;
    function isUint8ClampedArray(value2) {
      return whichTypedArray$1(value2) === "Uint8ClampedArray";
    }
    exports2.isUint8ClampedArray = isUint8ClampedArray;
    function isUint16Array(value2) {
      return whichTypedArray$1(value2) === "Uint16Array";
    }
    exports2.isUint16Array = isUint16Array;
    function isUint32Array(value2) {
      return whichTypedArray$1(value2) === "Uint32Array";
    }
    exports2.isUint32Array = isUint32Array;
    function isInt8Array(value2) {
      return whichTypedArray$1(value2) === "Int8Array";
    }
    exports2.isInt8Array = isInt8Array;
    function isInt16Array(value2) {
      return whichTypedArray$1(value2) === "Int16Array";
    }
    exports2.isInt16Array = isInt16Array;
    function isInt32Array(value2) {
      return whichTypedArray$1(value2) === "Int32Array";
    }
    exports2.isInt32Array = isInt32Array;
    function isFloat32Array(value2) {
      return whichTypedArray$1(value2) === "Float32Array";
    }
    exports2.isFloat32Array = isFloat32Array;
    function isFloat64Array(value2) {
      return whichTypedArray$1(value2) === "Float64Array";
    }
    exports2.isFloat64Array = isFloat64Array;
    function isBigInt64Array(value2) {
      return whichTypedArray$1(value2) === "BigInt64Array";
    }
    exports2.isBigInt64Array = isBigInt64Array;
    function isBigUint64Array(value2) {
      return whichTypedArray$1(value2) === "BigUint64Array";
    }
    exports2.isBigUint64Array = isBigUint64Array;
    function isMapToString(value2) {
      return ObjectToString(value2) === "[object Map]";
    }
    isMapToString.working = typeof Map !== "undefined" && isMapToString(/* @__PURE__ */ new Map());
    function isMap(value2) {
      if (typeof Map === "undefined") {
        return false;
      }
      return isMapToString.working ? isMapToString(value2) : value2 instanceof Map;
    }
    exports2.isMap = isMap;
    function isSetToString(value2) {
      return ObjectToString(value2) === "[object Set]";
    }
    isSetToString.working = typeof Set !== "undefined" && isSetToString(/* @__PURE__ */ new Set());
    function isSet(value2) {
      if (typeof Set === "undefined") {
        return false;
      }
      return isSetToString.working ? isSetToString(value2) : value2 instanceof Set;
    }
    exports2.isSet = isSet;
    function isWeakMapToString(value2) {
      return ObjectToString(value2) === "[object WeakMap]";
    }
    isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(/* @__PURE__ */ new WeakMap());
    function isWeakMap(value2) {
      if (typeof WeakMap === "undefined") {
        return false;
      }
      return isWeakMapToString.working ? isWeakMapToString(value2) : value2 instanceof WeakMap;
    }
    exports2.isWeakMap = isWeakMap;
    function isWeakSetToString(value2) {
      return ObjectToString(value2) === "[object WeakSet]";
    }
    isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(/* @__PURE__ */ new WeakSet());
    function isWeakSet(value2) {
      return isWeakSetToString(value2);
    }
    exports2.isWeakSet = isWeakSet;
    function isArrayBufferToString(value2) {
      return ObjectToString(value2) === "[object ArrayBuffer]";
    }
    isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
    function isArrayBuffer(value2) {
      if (typeof ArrayBuffer === "undefined") {
        return false;
      }
      return isArrayBufferToString.working ? isArrayBufferToString(value2) : value2 instanceof ArrayBuffer;
    }
    exports2.isArrayBuffer = isArrayBuffer;
    function isDataViewToString(value2) {
      return ObjectToString(value2) === "[object DataView]";
    }
    isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
    function isDataView(value2) {
      if (typeof DataView === "undefined") {
        return false;
      }
      return isDataViewToString.working ? isDataViewToString(value2) : value2 instanceof DataView;
    }
    exports2.isDataView = isDataView;
    var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : void 0;
    function isSharedArrayBufferToString(value2) {
      return ObjectToString(value2) === "[object SharedArrayBuffer]";
    }
    function isSharedArrayBuffer(value2) {
      if (typeof SharedArrayBufferCopy === "undefined") {
        return false;
      }
      if (typeof isSharedArrayBufferToString.working === "undefined") {
        isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
      }
      return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value2) : value2 instanceof SharedArrayBufferCopy;
    }
    exports2.isSharedArrayBuffer = isSharedArrayBuffer;
    function isAsyncFunction(value2) {
      return ObjectToString(value2) === "[object AsyncFunction]";
    }
    exports2.isAsyncFunction = isAsyncFunction;
    function isMapIterator(value2) {
      return ObjectToString(value2) === "[object Map Iterator]";
    }
    exports2.isMapIterator = isMapIterator;
    function isSetIterator(value2) {
      return ObjectToString(value2) === "[object Set Iterator]";
    }
    exports2.isSetIterator = isSetIterator;
    function isGeneratorObject(value2) {
      return ObjectToString(value2) === "[object Generator]";
    }
    exports2.isGeneratorObject = isGeneratorObject;
    function isWebAssemblyCompiledModule(value2) {
      return ObjectToString(value2) === "[object WebAssembly.Module]";
    }
    exports2.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
    function isNumberObject(value2) {
      return checkBoxedPrimitive(value2, numberValue);
    }
    exports2.isNumberObject = isNumberObject;
    function isStringObject(value2) {
      return checkBoxedPrimitive(value2, stringValue);
    }
    exports2.isStringObject = isStringObject;
    function isBooleanObject(value2) {
      return checkBoxedPrimitive(value2, booleanValue);
    }
    exports2.isBooleanObject = isBooleanObject;
    function isBigIntObject(value2) {
      return BigIntSupported && checkBoxedPrimitive(value2, bigIntValue);
    }
    exports2.isBigIntObject = isBigIntObject;
    function isSymbolObject(value2) {
      return SymbolSupported && checkBoxedPrimitive(value2, symbolValue);
    }
    exports2.isSymbolObject = isSymbolObject;
    function isBoxedPrimitive(value2) {
      return isNumberObject(value2) || isStringObject(value2) || isBooleanObject(value2) || isBigIntObject(value2) || isSymbolObject(value2);
    }
    exports2.isBoxedPrimitive = isBoxedPrimitive;
    function isAnyArrayBuffer(value2) {
      return typeof Uint8Array !== "undefined" && (isArrayBuffer(value2) || isSharedArrayBuffer(value2));
    }
    exports2.isAnyArrayBuffer = isAnyArrayBuffer;
    [
      "isProxy",
      "isExternal",
      "isModuleNamespaceObject"
    ].forEach(function(method2) {
      Object.defineProperty(exports2, method2, {
        enumerable: false,
        value: function() {
          throw new Error(method2 + " is not supported in userland");
        }
      });
    });
  })(types$5);
  var isBufferBrowser = function isBuffer(arg) {
    return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
  };
  (function(exports2) {
    var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(obj) {
      var keys2 = Object.keys(obj);
      var descriptors = {};
      for (var i = 0; i < keys2.length; i++) {
        descriptors[keys2[i]] = Object.getOwnPropertyDescriptor(obj, keys2[i]);
      }
      return descriptors;
    };
    var formatRegExp = /%[sdj%]/g;
    exports2.format = function(f) {
      if (!isString(f)) {
        var objects = [];
        for (var i = 0; i < arguments.length; i++) {
          objects.push(inspect(arguments[i]));
        }
        return objects.join(" ");
      }
      var i = 1;
      var args = arguments;
      var len = args.length;
      var str = String(f).replace(formatRegExp, function(x2) {
        if (x2 === "%%")
          return "%";
        if (i >= len)
          return x2;
        switch (x2) {
          case "%s":
            return String(args[i++]);
          case "%d":
            return Number(args[i++]);
          case "%j":
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return "[Circular]";
            }
          default:
            return x2;
        }
      });
      for (var x = args[i]; i < len; x = args[++i]) {
        if (isNull(x) || !isObject(x)) {
          str += " " + x;
        } else {
          str += " " + inspect(x);
        }
      }
      return str;
    };
    exports2.deprecate = function(fn, msg) {
      if (typeof browserExports$1 !== "undefined" && browserExports$1.noDeprecation === true) {
        return fn;
      }
      if (typeof browserExports$1 === "undefined") {
        return function() {
          return exports2.deprecate(fn, msg).apply(this, arguments);
        };
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (browserExports$1.throwDeprecation) {
            throw new Error(msg);
          } else if (browserExports$1.traceDeprecation) {
            console.trace(msg);
          } else {
            console.error(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      return deprecated;
    };
    var debugs = {};
    var debugEnvRegex = /^$/;
    if ({}.NODE_DEBUG) {
      var debugEnv = {}.NODE_DEBUG;
      debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
      debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
    }
    exports2.debuglog = function(set) {
      set = set.toUpperCase();
      if (!debugs[set]) {
        if (debugEnvRegex.test(set)) {
          var pid = browserExports$1.pid;
          debugs[set] = function() {
            var msg = exports2.format.apply(exports2, arguments);
            console.error("%s %d: %s", set, pid, msg);
          };
        } else {
          debugs[set] = function() {
          };
        }
      }
      return debugs[set];
    };
    function inspect(obj, opts) {
      var ctx = {
        seen: [],
        stylize: stylizeNoColor
      };
      if (arguments.length >= 3)
        ctx.depth = arguments[2];
      if (arguments.length >= 4)
        ctx.colors = arguments[3];
      if (isBoolean(opts)) {
        ctx.showHidden = opts;
      } else if (opts) {
        exports2._extend(ctx, opts);
      }
      if (isUndefined(ctx.showHidden))
        ctx.showHidden = false;
      if (isUndefined(ctx.depth))
        ctx.depth = 2;
      if (isUndefined(ctx.colors))
        ctx.colors = false;
      if (isUndefined(ctx.customInspect))
        ctx.customInspect = true;
      if (ctx.colors)
        ctx.stylize = stylizeWithColor;
      return formatValue(ctx, obj, ctx.depth);
    }
    exports2.inspect = inspect;
    inspect.colors = {
      "bold": [
        1,
        22
      ],
      "italic": [
        3,
        23
      ],
      "underline": [
        4,
        24
      ],
      "inverse": [
        7,
        27
      ],
      "white": [
        37,
        39
      ],
      "grey": [
        90,
        39
      ],
      "black": [
        30,
        39
      ],
      "blue": [
        34,
        39
      ],
      "cyan": [
        36,
        39
      ],
      "green": [
        32,
        39
      ],
      "magenta": [
        35,
        39
      ],
      "red": [
        31,
        39
      ],
      "yellow": [
        33,
        39
      ]
    };
    inspect.styles = {
      "special": "cyan",
      "number": "yellow",
      "boolean": "yellow",
      "undefined": "grey",
      "null": "bold",
      "string": "green",
      "date": "magenta",
      "regexp": "red"
    };
    function stylizeWithColor(str, styleType) {
      var style = inspect.styles[styleType];
      if (style) {
        return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
      } else {
        return str;
      }
    }
    function stylizeNoColor(str, styleType) {
      return str;
    }
    function arrayToHash(array) {
      var hash2 = {};
      array.forEach(function(val, idx) {
        hash2[val] = true;
      });
      return hash2;
    }
    function formatValue(ctx, value2, recurseTimes) {
      if (ctx.customInspect && value2 && isFunction(value2.inspect) && value2.inspect !== exports2.inspect && !(value2.constructor && value2.constructor.prototype === value2)) {
        var ret = value2.inspect(recurseTimes, ctx);
        if (!isString(ret)) {
          ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
      }
      var primitive = formatPrimitive(ctx, value2);
      if (primitive) {
        return primitive;
      }
      var keys2 = Object.keys(value2);
      var visibleKeys = arrayToHash(keys2);
      if (ctx.showHidden) {
        keys2 = Object.getOwnPropertyNames(value2);
      }
      if (isError(value2) && (keys2.indexOf("message") >= 0 || keys2.indexOf("description") >= 0)) {
        return formatError(value2);
      }
      if (keys2.length === 0) {
        if (isFunction(value2)) {
          var name = value2.name ? ": " + value2.name : "";
          return ctx.stylize("[Function" + name + "]", "special");
        }
        if (isRegExp(value2)) {
          return ctx.stylize(RegExp.prototype.toString.call(value2), "regexp");
        }
        if (isDate(value2)) {
          return ctx.stylize(Date.prototype.toString.call(value2), "date");
        }
        if (isError(value2)) {
          return formatError(value2);
        }
      }
      var base2 = "", array = false, braces = [
        "{",
        "}"
      ];
      if (isArray(value2)) {
        array = true;
        braces = [
          "[",
          "]"
        ];
      }
      if (isFunction(value2)) {
        var n = value2.name ? ": " + value2.name : "";
        base2 = " [Function" + n + "]";
      }
      if (isRegExp(value2)) {
        base2 = " " + RegExp.prototype.toString.call(value2);
      }
      if (isDate(value2)) {
        base2 = " " + Date.prototype.toUTCString.call(value2);
      }
      if (isError(value2)) {
        base2 = " " + formatError(value2);
      }
      if (keys2.length === 0 && (!array || value2.length == 0)) {
        return braces[0] + base2 + braces[1];
      }
      if (recurseTimes < 0) {
        if (isRegExp(value2)) {
          return ctx.stylize(RegExp.prototype.toString.call(value2), "regexp");
        } else {
          return ctx.stylize("[Object]", "special");
        }
      }
      ctx.seen.push(value2);
      var output;
      if (array) {
        output = formatArray(ctx, value2, recurseTimes, visibleKeys, keys2);
      } else {
        output = keys2.map(function(key) {
          return formatProperty(ctx, value2, recurseTimes, visibleKeys, key, array);
        });
      }
      ctx.seen.pop();
      return reduceToSingleString(output, base2, braces);
    }
    function formatPrimitive(ctx, value2) {
      if (isUndefined(value2))
        return ctx.stylize("undefined", "undefined");
      if (isString(value2)) {
        var simple = "'" + JSON.stringify(value2).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return ctx.stylize(simple, "string");
      }
      if (isNumber(value2))
        return ctx.stylize("" + value2, "number");
      if (isBoolean(value2))
        return ctx.stylize("" + value2, "boolean");
      if (isNull(value2))
        return ctx.stylize("null", "null");
    }
    function formatError(value2) {
      return "[" + Error.prototype.toString.call(value2) + "]";
    }
    function formatArray(ctx, value2, recurseTimes, visibleKeys, keys2) {
      var output = [];
      for (var i = 0, l = value2.length; i < l; ++i) {
        if (hasOwnProperty2(value2, String(i))) {
          output.push(formatProperty(ctx, value2, recurseTimes, visibleKeys, String(i), true));
        } else {
          output.push("");
        }
      }
      keys2.forEach(function(key) {
        if (!key.match(/^\d+$/)) {
          output.push(formatProperty(ctx, value2, recurseTimes, visibleKeys, key, true));
        }
      });
      return output;
    }
    function formatProperty(ctx, value2, recurseTimes, visibleKeys, key, array) {
      var name, str, desc;
      desc = Object.getOwnPropertyDescriptor(value2, key) || {
        value: value2[key]
      };
      if (desc.get) {
        if (desc.set) {
          str = ctx.stylize("[Getter/Setter]", "special");
        } else {
          str = ctx.stylize("[Getter]", "special");
        }
      } else {
        if (desc.set) {
          str = ctx.stylize("[Setter]", "special");
        }
      }
      if (!hasOwnProperty2(visibleKeys, key)) {
        name = "[" + key + "]";
      }
      if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
          if (isNull(recurseTimes)) {
            str = formatValue(ctx, desc.value, null);
          } else {
            str = formatValue(ctx, desc.value, recurseTimes - 1);
          }
          if (str.indexOf("\n") > -1) {
            if (array) {
              str = str.split("\n").map(function(line) {
                return "  " + line;
              }).join("\n").slice(2);
            } else {
              str = "\n" + str.split("\n").map(function(line) {
                return "   " + line;
              }).join("\n");
            }
          }
        } else {
          str = ctx.stylize("[Circular]", "special");
        }
      }
      if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
          return str;
        }
        name = JSON.stringify("" + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.slice(1, -1);
          name = ctx.stylize(name, "name");
        } else {
          name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
          name = ctx.stylize(name, "string");
        }
      }
      return name + ": " + str;
    }
    function reduceToSingleString(output, base2, braces) {
      var length = output.reduce(function(prev, cur) {
        if (cur.indexOf("\n") >= 0)
          ;
        return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      if (length > 60) {
        return braces[0] + (base2 === "" ? "" : base2 + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
      }
      return braces[0] + base2 + " " + output.join(", ") + " " + braces[1];
    }
    exports2.types = types$5;
    function isArray(ar) {
      return Array.isArray(ar);
    }
    exports2.isArray = isArray;
    function isBoolean(arg) {
      return typeof arg === "boolean";
    }
    exports2.isBoolean = isBoolean;
    function isNull(arg) {
      return arg === null;
    }
    exports2.isNull = isNull;
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports2.isNullOrUndefined = isNullOrUndefined;
    function isNumber(arg) {
      return typeof arg === "number";
    }
    exports2.isNumber = isNumber;
    function isString(arg) {
      return typeof arg === "string";
    }
    exports2.isString = isString;
    function isSymbol(arg) {
      return typeof arg === "symbol";
    }
    exports2.isSymbol = isSymbol;
    function isUndefined(arg) {
      return arg === void 0;
    }
    exports2.isUndefined = isUndefined;
    function isRegExp(re) {
      return isObject(re) && objectToString(re) === "[object RegExp]";
    }
    exports2.isRegExp = isRegExp;
    exports2.types.isRegExp = isRegExp;
    function isObject(arg) {
      return typeof arg === "object" && arg !== null;
    }
    exports2.isObject = isObject;
    function isDate(d) {
      return isObject(d) && objectToString(d) === "[object Date]";
    }
    exports2.isDate = isDate;
    exports2.types.isDate = isDate;
    function isError(e) {
      return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
    }
    exports2.isError = isError;
    exports2.types.isNativeError = isError;
    function isFunction(arg) {
      return typeof arg === "function";
    }
    exports2.isFunction = isFunction;
    function isPrimitive(arg) {
      return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined";
    }
    exports2.isPrimitive = isPrimitive;
    exports2.isBuffer = isBufferBrowser;
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
    function pad(n) {
      return n < 10 ? "0" + n.toString(10) : n.toString(10);
    }
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    function timestamp() {
      var d = new Date();
      var time = [
        pad(d.getHours()),
        pad(d.getMinutes()),
        pad(d.getSeconds())
      ].join(":");
      return [
        d.getDate(),
        months[d.getMonth()],
        time
      ].join(" ");
    }
    exports2.log = function() {
      console.log("%s - %s", timestamp(), exports2.format.apply(exports2, arguments));
    };
    exports2.inherits = inherits_browserExports;
    exports2._extend = function(origin, add) {
      if (!add || !isObject(add))
        return origin;
      var keys2 = Object.keys(add);
      var i = keys2.length;
      while (i--) {
        origin[keys2[i]] = add[keys2[i]];
      }
      return origin;
    };
    function hasOwnProperty2(obj, prop2) {
      return Object.prototype.hasOwnProperty.call(obj, prop2);
    }
    var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : void 0;
    exports2.promisify = function promisify(original) {
      if (typeof original !== "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
        var fn = original[kCustomPromisifiedSymbol];
        if (typeof fn !== "function") {
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        }
        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
          value: fn,
          enumerable: false,
          writable: false,
          configurable: true
        });
        return fn;
      }
      function fn() {
        var promiseResolve, promiseReject;
        var promise = new Promise(function(resolve, reject) {
          promiseResolve = resolve;
          promiseReject = reject;
        });
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        args.push(function(err, value2) {
          if (err) {
            promiseReject(err);
          } else {
            promiseResolve(value2);
          }
        });
        try {
          original.apply(this, args);
        } catch (err) {
          promiseReject(err);
        }
        return promise;
      }
      Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
      if (kCustomPromisifiedSymbol)
        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
          value: fn,
          enumerable: false,
          writable: false,
          configurable: true
        });
      return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
    };
    exports2.promisify.custom = kCustomPromisifiedSymbol;
    function callbackifyOnRejected(reason, cb) {
      if (!reason) {
        var newReason = new Error("Promise was rejected with a falsy value");
        newReason.reason = reason;
        reason = newReason;
      }
      return cb(reason);
    }
    function callbackify(original) {
      if (typeof original !== "function") {
        throw new TypeError('The "original" argument must be of type Function');
      }
      function callbackified() {
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        var maybeCb = args.pop();
        if (typeof maybeCb !== "function") {
          throw new TypeError("The last argument must be of type Function");
        }
        var self = this;
        var cb = function() {
          return maybeCb.apply(self, arguments);
        };
        original.apply(this, args).then(function(ret) {
          browserExports$1.nextTick(cb.bind(null, null, ret));
        }, function(rej) {
          browserExports$1.nextTick(callbackifyOnRejected.bind(null, rej, cb));
        });
      }
      Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
      Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
      return callbackified;
    }
    exports2.callbackify = callbackify;
  })(util);
  function BufferList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  BufferList.prototype.push = function(v2) {
    var entry = {
      data: v2,
      next: null
    };
    if (this.length > 0)
      this.tail.next = entry;
    else
      this.head = entry;
    this.tail = entry;
    ++this.length;
  };
  BufferList.prototype.unshift = function(v2) {
    var entry = {
      data: v2,
      next: this.head
    };
    if (this.length === 0)
      this.tail = entry;
    this.head = entry;
    ++this.length;
  };
  BufferList.prototype.shift = function() {
    if (this.length === 0)
      return;
    var ret = this.head.data;
    if (this.length === 1)
      this.head = this.tail = null;
    else
      this.head = this.head.next;
    --this.length;
    return ret;
  };
  BufferList.prototype.clear = function() {
    this.head = this.tail = null;
    this.length = 0;
  };
  BufferList.prototype.join = function(s) {
    if (this.length === 0)
      return "";
    var p = this.head;
    var ret = "" + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }
    return ret;
  };
  BufferList.prototype.concat = function(n) {
    if (this.length === 0)
      return buffer.Buffer.alloc(0);
    if (this.length === 1)
      return this.head.data;
    var ret = buffer.Buffer.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      p.data.copy(ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };
  var string_decoder = {};
  var StringDecoder_1;
  var Buffer$5 = buffer.Buffer;
  var isBufferEncoding = Buffer$5.isEncoding || function(encoding) {
    switch (encoding && encoding.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return true;
      default:
        return false;
    }
  };
  function assertEncoding(encoding) {
    if (encoding && !isBufferEncoding(encoding)) {
      throw new Error("Unknown encoding: " + encoding);
    }
  }
  var StringDecoder$1 = StringDecoder_1 = string_decoder.StringDecoder = function(encoding) {
    this.encoding = (encoding || "utf8").toLowerCase().replace(/[-_]/, "");
    assertEncoding(encoding);
    switch (this.encoding) {
      case "utf8":
        this.surrogateSize = 3;
        break;
      case "ucs2":
      case "utf16le":
        this.surrogateSize = 2;
        this.detectIncompleteChar = utf16DetectIncompleteChar;
        break;
      case "base64":
        this.surrogateSize = 3;
        this.detectIncompleteChar = base64DetectIncompleteChar;
        break;
      default:
        this.write = passThroughWrite;
        return;
    }
    this.charBuffer = new Buffer$5(6);
    this.charReceived = 0;
    this.charLength = 0;
  };
  StringDecoder$1.prototype.write = function(buffer2) {
    var charStr = "";
    while (this.charLength) {
      var available = buffer2.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : buffer2.length;
      buffer2.copy(this.charBuffer, this.charReceived, 0, available);
      this.charReceived += available;
      if (this.charReceived < this.charLength) {
        return "";
      }
      buffer2 = buffer2.slice(available, buffer2.length);
      charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
      var charCode = charStr.charCodeAt(charStr.length - 1);
      if (charCode >= 55296 && charCode <= 56319) {
        this.charLength += this.surrogateSize;
        charStr = "";
        continue;
      }
      this.charReceived = this.charLength = 0;
      if (buffer2.length === 0) {
        return charStr;
      }
      break;
    }
    this.detectIncompleteChar(buffer2);
    var end = buffer2.length;
    if (this.charLength) {
      buffer2.copy(this.charBuffer, 0, buffer2.length - this.charReceived, end);
      end -= this.charReceived;
    }
    charStr += buffer2.toString(this.encoding, 0, end);
    var end = charStr.length - 1;
    var charCode = charStr.charCodeAt(end);
    if (charCode >= 55296 && charCode <= 56319) {
      var size = this.surrogateSize;
      this.charLength += size;
      this.charReceived += size;
      this.charBuffer.copy(this.charBuffer, size, 0, size);
      buffer2.copy(this.charBuffer, 0, 0, size);
      return charStr.substring(0, end);
    }
    return charStr;
  };
  StringDecoder$1.prototype.detectIncompleteChar = function(buffer2) {
    var i = buffer2.length >= 3 ? 3 : buffer2.length;
    for (; i > 0; i--) {
      var c = buffer2[buffer2.length - i];
      if (i == 1 && c >> 5 == 6) {
        this.charLength = 2;
        break;
      }
      if (i <= 2 && c >> 4 == 14) {
        this.charLength = 3;
        break;
      }
      if (i <= 3 && c >> 3 == 30) {
        this.charLength = 4;
        break;
      }
    }
    this.charReceived = i;
  };
  StringDecoder$1.prototype.end = function(buffer2) {
    var res = "";
    if (buffer2 && buffer2.length)
      res = this.write(buffer2);
    if (this.charReceived) {
      var cr = this.charReceived;
      var buf = this.charBuffer;
      var enc = this.encoding;
      res += buf.slice(0, cr).toString(enc);
    }
    return res;
  };
  function passThroughWrite(buffer2) {
    return buffer2.toString(this.encoding);
  }
  function utf16DetectIncompleteChar(buffer2) {
    this.charReceived = buffer2.length % 2;
    this.charLength = this.charReceived ? 2 : 0;
  }
  function base64DetectIncompleteChar(buffer2) {
    this.charReceived = buffer2.length % 3;
    this.charLength = this.charReceived ? 3 : 0;
  }
  Readable.ReadableState = ReadableState;
  var debug = util.debuglog("stream");
  util.inherits(Readable, eventsExports);
  function prependListener(emitter, event, fn) {
    if (typeof emitter.prependListener === "function") {
      return emitter.prependListener(event, fn);
    } else {
      if (!emitter._events || !emitter._events[event])
        emitter.on(event, fn);
      else if (Array.isArray(emitter._events[event]))
        emitter._events[event].unshift(fn);
      else
        emitter._events[event] = [
          fn,
          emitter._events[event]
        ];
    }
  }
  function listenerCount(emitter, type) {
    return emitter.listeners(type).length;
  }
  function ReadableState(options, stream2) {
    options = options || {};
    this.objectMode = !!options.objectMode;
    if (stream2 instanceof Duplex)
      this.objectMode = this.objectMode || !!options.readableObjectMode;
    var hwm = options.highWaterMark;
    var defaultHwm = this.objectMode ? 16 : 16 * 1024;
    this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
    this.highWaterMark = ~~this.highWaterMark;
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    this.sync = true;
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.defaultEncoding = options.defaultEncoding || "utf8";
    this.ranOut = false;
    this.awaitDrain = 0;
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
      this.decoder = new StringDecoder_1(options.encoding);
      this.encoding = options.encoding;
    }
  }
  function Readable(options) {
    if (!(this instanceof Readable))
      return new Readable(options);
    this._readableState = new ReadableState(options, this);
    this.readable = true;
    if (options && typeof options.read === "function")
      this._read = options.read;
    eventsExports.call(this);
  }
  Readable.prototype.push = function(chunk, encoding) {
    var state2 = this._readableState;
    if (!state2.objectMode && typeof chunk === "string") {
      encoding = encoding || state2.defaultEncoding;
      if (encoding !== state2.encoding) {
        chunk = buffer.Buffer.from(chunk, encoding);
        encoding = "";
      }
    }
    return readableAddChunk(this, state2, chunk, encoding, false);
  };
  Readable.prototype.unshift = function(chunk) {
    var state2 = this._readableState;
    return readableAddChunk(this, state2, chunk, "", true);
  };
  Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
  };
  function readableAddChunk(stream2, state2, chunk, encoding, addToFront) {
    var er = chunkInvalid(state2, chunk);
    if (er) {
      stream2.emit("error", er);
    } else if (chunk === null) {
      state2.reading = false;
      onEofChunk(stream2, state2);
    } else if (state2.objectMode || chunk && chunk.length > 0) {
      if (state2.ended && !addToFront) {
        var e = new Error("stream.push() after EOF");
        stream2.emit("error", e);
      } else if (state2.endEmitted && addToFront) {
        var _e = new Error("stream.unshift() after end event");
        stream2.emit("error", _e);
      } else {
        var skipAdd;
        if (state2.decoder && !addToFront && !encoding) {
          chunk = state2.decoder.write(chunk);
          skipAdd = !state2.objectMode && chunk.length === 0;
        }
        if (!addToFront)
          state2.reading = false;
        if (!skipAdd) {
          if (state2.flowing && state2.length === 0 && !state2.sync) {
            stream2.emit("data", chunk);
            stream2.read(0);
          } else {
            state2.length += state2.objectMode ? 1 : chunk.length;
            if (addToFront)
              state2.buffer.unshift(chunk);
            else
              state2.buffer.push(chunk);
            if (state2.needReadable)
              emitReadable(stream2);
          }
        }
        maybeReadMore(stream2, state2);
      }
    } else if (!addToFront) {
      state2.reading = false;
    }
    return needMoreData(state2);
  }
  function needMoreData(state2) {
    return !state2.ended && (state2.needReadable || state2.length < state2.highWaterMark || state2.length === 0);
  }
  Readable.prototype.setEncoding = function(enc) {
    this._readableState.decoder = new StringDecoder_1(enc);
    this._readableState.encoding = enc;
    return this;
  };
  var MAX_HWM = 8388608;
  function computeNewHighWaterMark(n) {
    if (n >= MAX_HWM) {
      n = MAX_HWM;
    } else {
      n--;
      n |= n >>> 1;
      n |= n >>> 2;
      n |= n >>> 4;
      n |= n >>> 8;
      n |= n >>> 16;
      n++;
    }
    return n;
  }
  function howMuchToRead(n, state2) {
    if (n <= 0 || state2.length === 0 && state2.ended)
      return 0;
    if (state2.objectMode)
      return 1;
    if (n !== n) {
      if (state2.flowing && state2.length)
        return state2.buffer.head.data.length;
      else
        return state2.length;
    }
    if (n > state2.highWaterMark)
      state2.highWaterMark = computeNewHighWaterMark(n);
    if (n <= state2.length)
      return n;
    if (!state2.ended) {
      state2.needReadable = true;
      return 0;
    }
    return state2.length;
  }
  Readable.prototype.read = function(n) {
    debug("read", n);
    n = parseInt(n, 10);
    var state2 = this._readableState;
    var nOrig = n;
    if (n !== 0)
      state2.emittedReadable = false;
    if (n === 0 && state2.needReadable && (state2.length >= state2.highWaterMark || state2.ended)) {
      debug("read: emitReadable", state2.length, state2.ended);
      if (state2.length === 0 && state2.ended)
        endReadable(this);
      else
        emitReadable(this);
      return null;
    }
    n = howMuchToRead(n, state2);
    if (n === 0 && state2.ended) {
      if (state2.length === 0)
        endReadable(this);
      return null;
    }
    var doRead = state2.needReadable;
    debug("need readable", doRead);
    if (state2.length === 0 || state2.length - n < state2.highWaterMark) {
      doRead = true;
      debug("length less than watermark", doRead);
    }
    if (state2.ended || state2.reading) {
      doRead = false;
      debug("reading or ended", doRead);
    } else if (doRead) {
      debug("do read");
      state2.reading = true;
      state2.sync = true;
      if (state2.length === 0)
        state2.needReadable = true;
      this._read(state2.highWaterMark);
      state2.sync = false;
      if (!state2.reading)
        n = howMuchToRead(nOrig, state2);
    }
    var ret;
    if (n > 0)
      ret = fromList(n, state2);
    else
      ret = null;
    if (ret === null) {
      state2.needReadable = true;
      n = 0;
    } else {
      state2.length -= n;
    }
    if (state2.length === 0) {
      if (!state2.ended)
        state2.needReadable = true;
      if (nOrig !== n && state2.ended)
        endReadable(this);
    }
    if (ret !== null)
      this.emit("data", ret);
    return ret;
  };
  function chunkInvalid(state2, chunk) {
    var er = null;
    if (!buffer.Buffer.isBuffer(chunk) && typeof chunk !== "string" && chunk !== null && chunk !== void 0 && !state2.objectMode) {
      er = new TypeError("Invalid non-string/buffer chunk");
    }
    return er;
  }
  function onEofChunk(stream2, state2) {
    if (state2.ended)
      return;
    if (state2.decoder) {
      var chunk = state2.decoder.end();
      if (chunk && chunk.length) {
        state2.buffer.push(chunk);
        state2.length += state2.objectMode ? 1 : chunk.length;
      }
    }
    state2.ended = true;
    emitReadable(stream2);
  }
  function emitReadable(stream2) {
    var state2 = stream2._readableState;
    state2.needReadable = false;
    if (!state2.emittedReadable) {
      debug("emitReadable", state2.flowing);
      state2.emittedReadable = true;
      if (state2.sync)
        browserExports$1.nextTick(emitReadable_, stream2);
      else
        emitReadable_(stream2);
    }
  }
  function emitReadable_(stream2) {
    debug("emit readable");
    stream2.emit("readable");
    flow(stream2);
  }
  function maybeReadMore(stream2, state2) {
    if (!state2.readingMore) {
      state2.readingMore = true;
      browserExports$1.nextTick(maybeReadMore_, stream2, state2);
    }
  }
  function maybeReadMore_(stream2, state2) {
    var len = state2.length;
    while (!state2.reading && !state2.flowing && !state2.ended && state2.length < state2.highWaterMark) {
      debug("maybeReadMore read 0");
      stream2.read(0);
      if (len === state2.length)
        break;
      else
        len = state2.length;
    }
    state2.readingMore = false;
  }
  Readable.prototype._read = function(n) {
    this.emit("error", new Error("not implemented"));
  };
  Readable.prototype.pipe = function(dest, pipeOpts) {
    var src2 = this;
    var state2 = this._readableState;
    switch (state2.pipesCount) {
      case 0:
        state2.pipes = dest;
        break;
      case 1:
        state2.pipes = [
          state2.pipes,
          dest
        ];
        break;
      default:
        state2.pipes.push(dest);
        break;
    }
    state2.pipesCount += 1;
    debug("pipe count=%d opts=%j", state2.pipesCount, pipeOpts);
    var doEnd = !pipeOpts || pipeOpts.end !== false;
    var endFn = doEnd ? onend2 : cleanup;
    if (state2.endEmitted)
      browserExports$1.nextTick(endFn);
    else
      src2.once("end", endFn);
    dest.on("unpipe", onunpipe);
    function onunpipe(readable) {
      debug("onunpipe");
      if (readable === src2) {
        cleanup();
      }
    }
    function onend2() {
      debug("onend");
      dest.end();
    }
    var ondrain = pipeOnDrain(src2);
    dest.on("drain", ondrain);
    var cleanedUp = false;
    function cleanup() {
      debug("cleanup");
      dest.removeListener("close", onclose);
      dest.removeListener("finish", onfinish);
      dest.removeListener("drain", ondrain);
      dest.removeListener("error", onerror);
      dest.removeListener("unpipe", onunpipe);
      src2.removeListener("end", onend2);
      src2.removeListener("end", cleanup);
      src2.removeListener("data", ondata);
      cleanedUp = true;
      if (state2.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
        ondrain();
    }
    var increasedAwaitDrain = false;
    src2.on("data", ondata);
    function ondata(chunk) {
      debug("ondata");
      increasedAwaitDrain = false;
      var ret = dest.write(chunk);
      if (false === ret && !increasedAwaitDrain) {
        if ((state2.pipesCount === 1 && state2.pipes === dest || state2.pipesCount > 1 && indexOf(state2.pipes, dest) !== -1) && !cleanedUp) {
          debug("false write response, pause", src2._readableState.awaitDrain);
          src2._readableState.awaitDrain++;
          increasedAwaitDrain = true;
        }
        src2.pause();
      }
    }
    function onerror(er) {
      debug("onerror", er);
      unpipe();
      dest.removeListener("error", onerror);
      if (listenerCount(dest, "error") === 0)
        dest.emit("error", er);
    }
    prependListener(dest, "error", onerror);
    function onclose() {
      dest.removeListener("finish", onfinish);
      unpipe();
    }
    dest.once("close", onclose);
    function onfinish() {
      debug("onfinish");
      dest.removeListener("close", onclose);
      unpipe();
    }
    dest.once("finish", onfinish);
    function unpipe() {
      debug("unpipe");
      src2.unpipe(dest);
    }
    dest.emit("pipe", src2);
    if (!state2.flowing) {
      debug("pipe resume");
      src2.resume();
    }
    return dest;
  };
  function pipeOnDrain(src2) {
    return function() {
      var state2 = src2._readableState;
      debug("pipeOnDrain", state2.awaitDrain);
      if (state2.awaitDrain)
        state2.awaitDrain--;
      if (state2.awaitDrain === 0 && src2.listeners("data").length) {
        state2.flowing = true;
        flow(src2);
      }
    };
  }
  Readable.prototype.unpipe = function(dest) {
    var state2 = this._readableState;
    if (state2.pipesCount === 0)
      return this;
    if (state2.pipesCount === 1) {
      if (dest && dest !== state2.pipes)
        return this;
      if (!dest)
        dest = state2.pipes;
      state2.pipes = null;
      state2.pipesCount = 0;
      state2.flowing = false;
      if (dest)
        dest.emit("unpipe", this);
      return this;
    }
    if (!dest) {
      var dests = state2.pipes;
      var len = state2.pipesCount;
      state2.pipes = null;
      state2.pipesCount = 0;
      state2.flowing = false;
      for (var _i = 0; _i < len; _i++) {
        dests[_i].emit("unpipe", this);
      }
      return this;
    }
    var i = indexOf(state2.pipes, dest);
    if (i === -1)
      return this;
    state2.pipes.splice(i, 1);
    state2.pipesCount -= 1;
    if (state2.pipesCount === 1)
      state2.pipes = state2.pipes[0];
    dest.emit("unpipe", this);
    return this;
  };
  Readable.prototype.on = function(ev, fn) {
    var res = eventsExports.prototype.on.call(this, ev, fn);
    if (ev === "data") {
      if (this._readableState.flowing !== false)
        this.resume();
    } else if (ev === "readable") {
      var state2 = this._readableState;
      if (!state2.endEmitted && !state2.readableListening) {
        state2.readableListening = state2.needReadable = true;
        state2.emittedReadable = false;
        if (!state2.reading) {
          browserExports$1.nextTick(nReadingNextTick, this);
        } else if (state2.length) {
          emitReadable(this);
        }
      }
    }
    return res;
  };
  Readable.prototype.addListener = Readable.prototype.on;
  function nReadingNextTick(self) {
    debug("readable nexttick read 0");
    self.read(0);
  }
  Readable.prototype.resume = function() {
    var state2 = this._readableState;
    if (!state2.flowing) {
      debug("resume");
      state2.flowing = true;
      resume(this, state2);
    }
    return this;
  };
  function resume(stream2, state2) {
    if (!state2.resumeScheduled) {
      state2.resumeScheduled = true;
      browserExports$1.nextTick(resume_, stream2, state2);
    }
  }
  function resume_(stream2, state2) {
    if (!state2.reading) {
      debug("resume read 0");
      stream2.read(0);
    }
    state2.resumeScheduled = false;
    state2.awaitDrain = 0;
    stream2.emit("resume");
    flow(stream2);
    if (state2.flowing && !state2.reading)
      stream2.read(0);
  }
  Readable.prototype.pause = function() {
    debug("call pause flowing=%j", this._readableState.flowing);
    if (false !== this._readableState.flowing) {
      debug("pause");
      this._readableState.flowing = false;
      this.emit("pause");
    }
    return this;
  };
  function flow(stream2) {
    var state2 = stream2._readableState;
    debug("flow", state2.flowing);
    while (state2.flowing && stream2.read() !== null) {
    }
  }
  Readable.prototype.wrap = function(stream2) {
    var state2 = this._readableState;
    var paused = false;
    var self = this;
    stream2.on("end", function() {
      debug("wrapped end");
      if (state2.decoder && !state2.ended) {
        var chunk = state2.decoder.end();
        if (chunk && chunk.length)
          self.push(chunk);
      }
      self.push(null);
    });
    stream2.on("data", function(chunk) {
      debug("wrapped data");
      if (state2.decoder)
        chunk = state2.decoder.write(chunk);
      if (state2.objectMode && (chunk === null || chunk === void 0))
        return;
      else if (!state2.objectMode && (!chunk || !chunk.length))
        return;
      var ret = self.push(chunk);
      if (!ret) {
        paused = true;
        stream2.pause();
      }
    });
    for (var i in stream2) {
      if (this[i] === void 0 && typeof stream2[i] === "function") {
        this[i] = function(method2) {
          return function() {
            return stream2[method2].apply(stream2, arguments);
          };
        }(i);
      }
    }
    var events2 = [
      "error",
      "close",
      "destroy",
      "pause",
      "resume"
    ];
    forEach(events2, function(ev) {
      stream2.on(ev, self.emit.bind(self, ev));
    });
    self._read = function(n) {
      debug("wrapped _read", n);
      if (paused) {
        paused = false;
        stream2.resume();
      }
    };
    return self;
  };
  Readable._fromList = fromList;
  function fromList(n, state2) {
    if (state2.length === 0)
      return null;
    var ret;
    if (state2.objectMode)
      ret = state2.buffer.shift();
    else if (!n || n >= state2.length) {
      if (state2.decoder)
        ret = state2.buffer.join("");
      else if (state2.buffer.length === 1)
        ret = state2.buffer.head.data;
      else
        ret = state2.buffer.concat(state2.length);
      state2.buffer.clear();
    } else {
      ret = fromListPartial(n, state2.buffer, state2.decoder);
    }
    return ret;
  }
  function fromListPartial(n, list, hasStrings) {
    var ret;
    if (n < list.head.data.length) {
      ret = list.head.data.slice(0, n);
      list.head.data = list.head.data.slice(n);
    } else if (n === list.head.data.length) {
      ret = list.shift();
    } else {
      ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
    }
    return ret;
  }
  function copyFromBufferString(n, list) {
    var p = list.head;
    var c = 1;
    var ret = p.data;
    n -= ret.length;
    while (p = p.next) {
      var str = p.data;
      var nb = n > str.length ? str.length : n;
      if (nb === str.length)
        ret += str;
      else
        ret += str.slice(0, n);
      n -= nb;
      if (n === 0) {
        if (nb === str.length) {
          ++c;
          if (p.next)
            list.head = p.next;
          else
            list.head = list.tail = null;
        } else {
          list.head = p;
          p.data = str.slice(nb);
        }
        break;
      }
      ++c;
    }
    list.length -= c;
    return ret;
  }
  function copyFromBuffer(n, list) {
    var ret = buffer.Buffer.allocUnsafe(n);
    var p = list.head;
    var c = 1;
    p.data.copy(ret);
    n -= p.data.length;
    while (p = p.next) {
      var buf = p.data;
      var nb = n > buf.length ? buf.length : n;
      buf.copy(ret, ret.length - n, 0, nb);
      n -= nb;
      if (n === 0) {
        if (nb === buf.length) {
          ++c;
          if (p.next)
            list.head = p.next;
          else
            list.head = list.tail = null;
        } else {
          list.head = p;
          p.data = buf.slice(nb);
        }
        break;
      }
      ++c;
    }
    list.length -= c;
    return ret;
  }
  function endReadable(stream2) {
    var state2 = stream2._readableState;
    if (state2.length > 0)
      throw new Error('"endReadable()" called on non-empty stream');
    if (!state2.endEmitted) {
      state2.ended = true;
      browserExports$1.nextTick(endReadableNT, state2, stream2);
    }
  }
  function endReadableNT(state2, stream2) {
    if (!state2.endEmitted && state2.length === 0) {
      state2.endEmitted = true;
      stream2.readable = false;
      stream2.emit("end");
    }
  }
  function forEach(xs, f) {
    for (var i = 0, l = xs.length; i < l; i++) {
      f(xs[i], i);
    }
  }
  function indexOf(xs, x) {
    for (var i = 0, l = xs.length; i < l; i++) {
      if (xs[i] === x)
        return i;
    }
    return -1;
  }
  Writable.WritableState = WritableState;
  util.inherits(Writable, eventsExports.EventEmitter);
  function nop() {
  }
  function WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
    this.next = null;
  }
  function WritableState(options, stream2) {
    Object.defineProperty(this, "buffer", {
      get: util.deprecate(function() {
        return this.getBuffer();
      }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")
    });
    options = options || {};
    this.objectMode = !!options.objectMode;
    if (stream2 instanceof Duplex)
      this.objectMode = this.objectMode || !!options.writableObjectMode;
    var hwm = options.highWaterMark;
    var defaultHwm = this.objectMode ? 16 : 16 * 1024;
    this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
    this.highWaterMark = ~~this.highWaterMark;
    this.needDrain = false;
    this.ending = false;
    this.ended = false;
    this.finished = false;
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    this.defaultEncoding = options.defaultEncoding || "utf8";
    this.length = 0;
    this.writing = false;
    this.corked = 0;
    this.sync = true;
    this.bufferProcessing = false;
    this.onwrite = function(er) {
      onwrite(stream2, er);
    };
    this.writecb = null;
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    this.pendingcb = 0;
    this.prefinished = false;
    this.errorEmitted = false;
    this.bufferedRequestCount = 0;
    this.corkedRequestsFree = new CorkedRequest(this);
  }
  WritableState.prototype.getBuffer = function writableStateGetBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while (current) {
      out.push(current);
      current = current.next;
    }
    return out;
  };
  function Writable(options) {
    if (!(this instanceof Writable) && !(this instanceof Duplex))
      return new Writable(options);
    this._writableState = new WritableState(options, this);
    this.writable = true;
    if (options) {
      if (typeof options.write === "function")
        this._write = options.write;
      if (typeof options.writev === "function")
        this._writev = options.writev;
    }
    eventsExports.EventEmitter.call(this);
  }
  Writable.prototype.pipe = function() {
    this.emit("error", new Error("Cannot pipe, not readable"));
  };
  function writeAfterEnd(stream2, cb) {
    var er = new Error("write after end");
    stream2.emit("error", er);
    browserExports$1.nextTick(cb, er);
  }
  function validChunk(stream2, state2, chunk, cb) {
    var valid = true;
    var er = false;
    if (chunk === null) {
      er = new TypeError("May not write null values to stream");
    } else if (!buffer.Buffer.isBuffer(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state2.objectMode) {
      er = new TypeError("Invalid non-string/buffer chunk");
    }
    if (er) {
      stream2.emit("error", er);
      browserExports$1.nextTick(cb, er);
      valid = false;
    }
    return valid;
  }
  Writable.prototype.write = function(chunk, encoding, cb) {
    var state2 = this._writableState;
    var ret = false;
    if (typeof encoding === "function") {
      cb = encoding;
      encoding = null;
    }
    if (buffer.Buffer.isBuffer(chunk))
      encoding = "buffer";
    else if (!encoding)
      encoding = state2.defaultEncoding;
    if (typeof cb !== "function")
      cb = nop;
    if (state2.ended)
      writeAfterEnd(this, cb);
    else if (validChunk(this, state2, chunk, cb)) {
      state2.pendingcb++;
      ret = writeOrBuffer(this, state2, chunk, encoding, cb);
    }
    return ret;
  };
  Writable.prototype.cork = function() {
    var state2 = this._writableState;
    state2.corked++;
  };
  Writable.prototype.uncork = function() {
    var state2 = this._writableState;
    if (state2.corked) {
      state2.corked--;
      if (!state2.writing && !state2.corked && !state2.finished && !state2.bufferProcessing && state2.bufferedRequest)
        clearBuffer(this, state2);
    }
  };
  Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    if (typeof encoding === "string")
      encoding = encoding.toLowerCase();
    if (!([
      "hex",
      "utf8",
      "utf-8",
      "ascii",
      "binary",
      "base64",
      "ucs2",
      "ucs-2",
      "utf16le",
      "utf-16le",
      "raw"
    ].indexOf((encoding + "").toLowerCase()) > -1))
      throw new TypeError("Unknown encoding: " + encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
  };
  function decodeChunk(state2, chunk, encoding) {
    if (!state2.objectMode && state2.decodeStrings !== false && typeof chunk === "string") {
      chunk = buffer.Buffer.from(chunk, encoding);
    }
    return chunk;
  }
  function writeOrBuffer(stream2, state2, chunk, encoding, cb) {
    chunk = decodeChunk(state2, chunk, encoding);
    if (buffer.Buffer.isBuffer(chunk))
      encoding = "buffer";
    var len = state2.objectMode ? 1 : chunk.length;
    state2.length += len;
    var ret = state2.length < state2.highWaterMark;
    if (!ret)
      state2.needDrain = true;
    if (state2.writing || state2.corked) {
      var last = state2.lastBufferedRequest;
      state2.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
      if (last) {
        last.next = state2.lastBufferedRequest;
      } else {
        state2.bufferedRequest = state2.lastBufferedRequest;
      }
      state2.bufferedRequestCount += 1;
    } else {
      doWrite(stream2, state2, false, len, chunk, encoding, cb);
    }
    return ret;
  }
  function doWrite(stream2, state2, writev, len, chunk, encoding, cb) {
    state2.writelen = len;
    state2.writecb = cb;
    state2.writing = true;
    state2.sync = true;
    if (writev)
      stream2._writev(chunk, state2.onwrite);
    else
      stream2._write(chunk, encoding, state2.onwrite);
    state2.sync = false;
  }
  function onwriteError(stream2, state2, sync, er, cb) {
    --state2.pendingcb;
    if (sync)
      browserExports$1.nextTick(cb, er);
    else
      cb(er);
    stream2._writableState.errorEmitted = true;
    stream2.emit("error", er);
  }
  function onwriteStateUpdate(state2) {
    state2.writing = false;
    state2.writecb = null;
    state2.length -= state2.writelen;
    state2.writelen = 0;
  }
  function onwrite(stream2, er) {
    var state2 = stream2._writableState;
    var sync = state2.sync;
    var cb = state2.writecb;
    onwriteStateUpdate(state2);
    if (er)
      onwriteError(stream2, state2, sync, er, cb);
    else {
      var finished = needFinish(state2);
      if (!finished && !state2.corked && !state2.bufferProcessing && state2.bufferedRequest) {
        clearBuffer(stream2, state2);
      }
      if (sync) {
        browserExports$1.nextTick(afterWrite, stream2, state2, finished, cb);
      } else {
        afterWrite(stream2, state2, finished, cb);
      }
    }
  }
  function afterWrite(stream2, state2, finished, cb) {
    if (!finished)
      onwriteDrain(stream2, state2);
    state2.pendingcb--;
    cb();
    finishMaybe(stream2, state2);
  }
  function onwriteDrain(stream2, state2) {
    if (state2.length === 0 && state2.needDrain) {
      state2.needDrain = false;
      stream2.emit("drain");
    }
  }
  function clearBuffer(stream2, state2) {
    state2.bufferProcessing = true;
    var entry = state2.bufferedRequest;
    if (stream2._writev && entry && entry.next) {
      var l = state2.bufferedRequestCount;
      var buffer2 = new Array(l);
      var holder = state2.corkedRequestsFree;
      holder.entry = entry;
      var count = 0;
      while (entry) {
        buffer2[count] = entry;
        entry = entry.next;
        count += 1;
      }
      doWrite(stream2, state2, true, state2.length, buffer2, "", holder.finish);
      state2.pendingcb++;
      state2.lastBufferedRequest = null;
      if (holder.next) {
        state2.corkedRequestsFree = holder.next;
        holder.next = null;
      } else {
        state2.corkedRequestsFree = new CorkedRequest(state2);
      }
    } else {
      while (entry) {
        var chunk = entry.chunk;
        var encoding = entry.encoding;
        var cb = entry.callback;
        var len = state2.objectMode ? 1 : chunk.length;
        doWrite(stream2, state2, false, len, chunk, encoding, cb);
        entry = entry.next;
        if (state2.writing) {
          break;
        }
      }
      if (entry === null)
        state2.lastBufferedRequest = null;
    }
    state2.bufferedRequestCount = 0;
    state2.bufferedRequest = entry;
    state2.bufferProcessing = false;
  }
  Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new Error("not implemented"));
  };
  Writable.prototype._writev = null;
  Writable.prototype.end = function(chunk, encoding, cb) {
    var state2 = this._writableState;
    if (typeof chunk === "function") {
      cb = chunk;
      chunk = null;
      encoding = null;
    } else if (typeof encoding === "function") {
      cb = encoding;
      encoding = null;
    }
    if (chunk !== null && chunk !== void 0)
      this.write(chunk, encoding);
    if (state2.corked) {
      state2.corked = 1;
      this.uncork();
    }
    if (!state2.ending && !state2.finished)
      endWritable(this, state2, cb);
  };
  function needFinish(state2) {
    return state2.ending && state2.length === 0 && state2.bufferedRequest === null && !state2.finished && !state2.writing;
  }
  function prefinish(stream2, state2) {
    if (!state2.prefinished) {
      state2.prefinished = true;
      stream2.emit("prefinish");
    }
  }
  function finishMaybe(stream2, state2) {
    var need = needFinish(state2);
    if (need) {
      if (state2.pendingcb === 0) {
        prefinish(stream2, state2);
        state2.finished = true;
        stream2.emit("finish");
      } else {
        prefinish(stream2, state2);
      }
    }
    return need;
  }
  function endWritable(stream2, state2, cb) {
    state2.ending = true;
    finishMaybe(stream2, state2);
    if (cb) {
      if (state2.finished)
        browserExports$1.nextTick(cb);
      else
        stream2.once("finish", cb);
    }
    state2.ended = true;
    stream2.writable = false;
  }
  function CorkedRequest(state2) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function(err) {
      var entry = _this.entry;
      _this.entry = null;
      while (entry) {
        var cb = entry.callback;
        state2.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      if (state2.corkedRequestsFree) {
        state2.corkedRequestsFree.next = _this;
      } else {
        state2.corkedRequestsFree = _this;
      }
    };
  }
  util.inherits(Duplex, Readable);
  var keys = Object.keys(Writable.prototype);
  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method])
      Duplex.prototype[method] = Writable.prototype[method];
  }
  function Duplex(options) {
    if (!(this instanceof Duplex))
      return new Duplex(options);
    Readable.call(this, options);
    Writable.call(this, options);
    if (options && options.readable === false)
      this.readable = false;
    if (options && options.writable === false)
      this.writable = false;
    this.allowHalfOpen = true;
    if (options && options.allowHalfOpen === false)
      this.allowHalfOpen = false;
    this.once("end", onend);
  }
  function onend() {
    if (this.allowHalfOpen || this._writableState.ended)
      return;
    browserExports$1.nextTick(onEndNT, this);
  }
  function onEndNT(self) {
    self.end();
  }
  util.inherits(Transform$1, Duplex);
  function TransformState(stream2) {
    this.afterTransform = function(er, data) {
      return afterTransform(stream2, er, data);
    };
    this.needTransform = false;
    this.transforming = false;
    this.writecb = null;
    this.writechunk = null;
    this.writeencoding = null;
  }
  function afterTransform(stream2, er, data) {
    var ts = stream2._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (!cb)
      return stream2.emit("error", new Error("no writecb in Transform class"));
    ts.writechunk = null;
    ts.writecb = null;
    if (data !== null && data !== void 0)
      stream2.push(data);
    cb(er);
    var rs = stream2._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) {
      stream2._read(rs.highWaterMark);
    }
  }
  function Transform$1(options) {
    if (!(this instanceof Transform$1))
      return new Transform$1(options);
    Duplex.call(this, options);
    this._transformState = new TransformState(this);
    var stream2 = this;
    this._readableState.needReadable = true;
    this._readableState.sync = false;
    if (options) {
      if (typeof options.transform === "function")
        this._transform = options.transform;
      if (typeof options.flush === "function")
        this._flush = options.flush;
    }
    this.once("prefinish", function() {
      if (typeof this._flush === "function")
        this._flush(function(er) {
          done(stream2, er);
        });
      else
        done(stream2);
    });
  }
  Transform$1.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
  };
  Transform$1.prototype._transform = function(chunk, encoding, cb) {
    throw new Error("Not implemented");
  };
  Transform$1.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
      var rs = this._readableState;
      if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
        this._read(rs.highWaterMark);
    }
  };
  Transform$1.prototype._read = function(n) {
    var ts = this._transformState;
    if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
      ts.transforming = true;
      this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else {
      ts.needTransform = true;
    }
  };
  function done(stream2, er) {
    if (er)
      return stream2.emit("error", er);
    var ws = stream2._writableState;
    var ts = stream2._transformState;
    if (ws.length)
      throw new Error("Calling transform done when ws.length != 0");
    if (ts.transforming)
      throw new Error("Calling transform done when still transforming");
    return stream2.push(null);
  }
  util.inherits(PassThrough, Transform$1);
  function PassThrough(options) {
    if (!(this instanceof PassThrough))
      return new PassThrough(options);
    Transform$1.call(this, options);
  }
  PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
  };
  util.inherits(Stream, eventsExports);
  Stream.Readable = Readable;
  Stream.Writable = Writable;
  Stream.Duplex = Duplex;
  Stream.Transform = Transform$1;
  Stream.PassThrough = PassThrough;
  Stream.Stream = Stream;
  function Stream() {
    eventsExports.call(this);
  }
  Stream.prototype.pipe = function(dest, options) {
    var source = this;
    function ondata(chunk) {
      if (dest.writable) {
        if (false === dest.write(chunk) && source.pause) {
          source.pause();
        }
      }
    }
    source.on("data", ondata);
    function ondrain() {
      if (source.readable && source.resume) {
        source.resume();
      }
    }
    dest.on("drain", ondrain);
    if (!dest._isStdio && (!options || options.end !== false)) {
      source.on("end", onend2);
      source.on("close", onclose);
    }
    var didOnEnd = false;
    function onend2() {
      if (didOnEnd)
        return;
      didOnEnd = true;
      dest.end();
    }
    function onclose() {
      if (didOnEnd)
        return;
      didOnEnd = true;
      if (typeof dest.destroy === "function")
        dest.destroy();
    }
    function onerror(er) {
      cleanup();
      if (eventsExports.listenerCount(this, "error") === 0) {
        throw er;
      }
    }
    source.on("error", onerror);
    dest.on("error", onerror);
    function cleanup() {
      source.removeListener("data", ondata);
      dest.removeListener("drain", ondrain);
      source.removeListener("end", onend2);
      source.removeListener("close", onclose);
      source.removeListener("error", onerror);
      dest.removeListener("error", onerror);
      source.removeListener("end", cleanup);
      source.removeListener("close", cleanup);
      dest.removeListener("close", cleanup);
    }
    source.on("end", cleanup);
    source.on("close", cleanup);
    dest.on("close", cleanup);
    dest.emit("pipe", source);
    return dest;
  };
  const stream = Object.freeze(Object.defineProperty({
    __proto__: null,
    Duplex,
    PassThrough,
    Readable,
    Stream,
    Transform: Transform$1,
    Writable,
    default: Stream
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const require$$1 = getAugmentedNamespace(stream);
  var Buffer$4 = safeBufferExports.Buffer;
  var Transform = require$$1.Transform;
  var StringDecoder = string_decoder.StringDecoder;
  var inherits$1 = inherits_browserExports;
  function CipherBase(hashMode) {
    Transform.call(this);
    this.hashMode = typeof hashMode === "string";
    if (this.hashMode) {
      this[hashMode] = this._finalOrDigest;
    } else {
      this.final = this._finalOrDigest;
    }
    if (this._final) {
      this.__final = this._final;
      this._final = null;
    }
    this._decoder = null;
    this._encoding = null;
  }
  inherits$1(CipherBase, Transform);
  CipherBase.prototype.update = function(data, inputEnc, outputEnc) {
    if (typeof data === "string") {
      data = Buffer$4.from(data, inputEnc);
    }
    var outData = this._update(data);
    if (this.hashMode)
      return this;
    if (outputEnc) {
      outData = this._toString(outData, outputEnc);
    }
    return outData;
  };
  CipherBase.prototype.setAutoPadding = function() {
  };
  CipherBase.prototype.getAuthTag = function() {
    throw new Error("trying to get auth tag in unsupported state");
  };
  CipherBase.prototype.setAuthTag = function() {
    throw new Error("trying to set auth tag in unsupported state");
  };
  CipherBase.prototype.setAAD = function() {
    throw new Error("trying to set aad in unsupported state");
  };
  CipherBase.prototype._transform = function(data, _, next) {
    var err;
    try {
      if (this.hashMode) {
        this._update(data);
      } else {
        this.push(this._update(data));
      }
    } catch (e) {
      err = e;
    } finally {
      next(err);
    }
  };
  CipherBase.prototype._flush = function(done2) {
    var err;
    try {
      this.push(this.__final());
    } catch (e) {
      err = e;
    }
    done2(err);
  };
  CipherBase.prototype._finalOrDigest = function(outputEnc) {
    var outData = this.__final() || Buffer$4.alloc(0);
    if (outputEnc) {
      outData = this._toString(outData, outputEnc, true);
    }
    return outData;
  };
  CipherBase.prototype._toString = function(value2, enc, fin) {
    if (!this._decoder) {
      this._decoder = new StringDecoder(enc);
      this._encoding = enc;
    }
    if (this._encoding !== enc)
      throw new Error("can't switch encodings");
    var out = this._decoder.write(value2);
    if (fin) {
      out += this._decoder.end();
    }
    return out;
  };
  var cipherBase = CipherBase;
  var inherits = inherits_browserExports;
  var MD5 = md5_js;
  var RIPEMD160 = ripemd160$1;
  var sha = sha_jsExports;
  var Base = cipherBase;
  function Hash(hash2) {
    Base.call(this, "digest");
    this._hash = hash2;
  }
  inherits(Hash, Base);
  Hash.prototype._update = function(data) {
    this._hash.update(data);
  };
  Hash.prototype._final = function() {
    return this._hash.digest();
  };
  var browser$1 = function createHash2(alg) {
    alg = alg.toLowerCase();
    if (alg === "md5")
      return new MD5();
    if (alg === "rmd160" || alg === "ripemd160")
      return new RIPEMD160();
    return new Hash(sha(alg));
  };
  Object.defineProperty(crypto$1, "__esModule", {
    value: true
  });
  crypto$1.taggedHash = crypto$1.hash256 = crypto$1.hash160 = crypto$1.sha256 = crypto$1.sha1 = crypto$1.ripemd160 = void 0;
  const createHash$1 = browser$1;
  const RipeMd160 = ripemd160$1;
  function ripemd160(buffer2) {
    try {
      return createHash$1("rmd160").update(buffer2).digest();
    } catch (err) {
      try {
        return createHash$1("ripemd160").update(buffer2).digest();
      } catch (err2) {
        return new RipeMd160().update(buffer2).digest();
      }
    }
  }
  crypto$1.ripemd160 = ripemd160;
  function sha1(buffer2) {
    return createHash$1("sha1").update(buffer2).digest();
  }
  crypto$1.sha1 = sha1;
  function sha256(buffer2) {
    return createHash$1("sha256").update(buffer2).digest();
  }
  crypto$1.sha256 = sha256;
  function hash160(buffer2) {
    return ripemd160(sha256(buffer2));
  }
  crypto$1.hash160 = hash160;
  function hash256(buffer2) {
    return sha256(sha256(buffer2));
  }
  crypto$1.hash256 = hash256;
  const TAGS = [
    "BIP0340/challenge",
    "BIP0340/aux",
    "BIP0340/nonce",
    "TapLeaf",
    "TapBranch",
    "TapSighash",
    "TapTweak",
    "KeyAgg list",
    "KeyAgg coefficient"
  ];
  const TAGGED_HASH_PREFIXES = Object.fromEntries(TAGS.map((tag) => {
    const tagHash = sha256(buffer.Buffer.from(tag));
    return [
      tag,
      buffer.Buffer.concat([
        tagHash,
        tagHash
      ])
    ];
  }));
  function taggedHash(prefix, data) {
    return sha256(buffer.Buffer.concat([
      TAGGED_HASH_PREFIXES[prefix],
      data
    ]));
  }
  crypto$1.taggedHash = taggedHash;
  var _Buffer = safeBufferExports.Buffer;
  function base$1(ALPHABET2) {
    if (ALPHABET2.length >= 255) {
      throw new TypeError("Alphabet too long");
    }
    var BASE_MAP = new Uint8Array(256);
    for (var j = 0; j < BASE_MAP.length; j++) {
      BASE_MAP[j] = 255;
    }
    for (var i = 0; i < ALPHABET2.length; i++) {
      var x = ALPHABET2.charAt(i);
      var xc = x.charCodeAt(0);
      if (BASE_MAP[xc] !== 255) {
        throw new TypeError(x + " is ambiguous");
      }
      BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET2.length;
    var LEADER = ALPHABET2.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256);
    var iFACTOR = Math.log(256) / Math.log(BASE);
    function encode2(source) {
      if (Array.isArray(source) || source instanceof Uint8Array) {
        source = _Buffer.from(source);
      }
      if (!_Buffer.isBuffer(source)) {
        throw new TypeError("Expected Buffer");
      }
      if (source.length === 0) {
        return "";
      }
      var zeroes = 0;
      var length = 0;
      var pbegin = 0;
      var pend = source.length;
      while (pbegin !== pend && source[pbegin] === 0) {
        pbegin++;
        zeroes++;
      }
      var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
      var b58 = new Uint8Array(size);
      while (pbegin !== pend) {
        var carry = source[pbegin];
        var i2 = 0;
        for (var it1 = size - 1; (carry !== 0 || i2 < length) && it1 !== -1; it1--, i2++) {
          carry += 256 * b58[it1] >>> 0;
          b58[it1] = carry % BASE >>> 0;
          carry = carry / BASE >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length = i2;
        pbegin++;
      }
      var it2 = size - length;
      while (it2 !== size && b58[it2] === 0) {
        it2++;
      }
      var str = LEADER.repeat(zeroes);
      for (; it2 < size; ++it2) {
        str += ALPHABET2.charAt(b58[it2]);
      }
      return str;
    }
    function decodeUnsafe(source) {
      if (typeof source !== "string") {
        throw new TypeError("Expected String");
      }
      if (source.length === 0) {
        return _Buffer.alloc(0);
      }
      var psz = 0;
      var zeroes = 0;
      var length = 0;
      while (source[psz] === LEADER) {
        zeroes++;
        psz++;
      }
      var size = (source.length - psz) * FACTOR + 1 >>> 0;
      var b256 = new Uint8Array(size);
      while (source[psz]) {
        var carry = BASE_MAP[source.charCodeAt(psz)];
        if (carry === 255) {
          return;
        }
        var i2 = 0;
        for (var it3 = size - 1; (carry !== 0 || i2 < length) && it3 !== -1; it3--, i2++) {
          carry += BASE * b256[it3] >>> 0;
          b256[it3] = carry % 256 >>> 0;
          carry = carry / 256 >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length = i2;
        psz++;
      }
      var it4 = size - length;
      while (it4 !== size && b256[it4] === 0) {
        it4++;
      }
      var vch = _Buffer.allocUnsafe(zeroes + (size - it4));
      vch.fill(0, 0, zeroes);
      var j2 = zeroes;
      while (it4 !== size) {
        vch[j2++] = b256[it4++];
      }
      return vch;
    }
    function decode2(string) {
      var buffer2 = decodeUnsafe(string);
      if (buffer2) {
        return buffer2;
      }
      throw new Error("Non-base" + BASE + " character");
    }
    return {
      encode: encode2,
      decodeUnsafe,
      decode: decode2
    };
  }
  var src$1 = base$1;
  var basex = src$1;
  var ALPHABET$1 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  var bs58 = basex(ALPHABET$1);
  var base58 = bs58;
  var Buffer$3 = safeBufferExports.Buffer;
  var base = function(checksumFn) {
    function encode2(payload) {
      var checksum = checksumFn(payload);
      return base58.encode(Buffer$3.concat([
        payload,
        checksum
      ], payload.length + 4));
    }
    function decodeRaw2(buffer2) {
      var payload = buffer2.slice(0, -4);
      var checksum = buffer2.slice(-4);
      var newChecksum = checksumFn(payload);
      if (checksum[0] ^ newChecksum[0] | checksum[1] ^ newChecksum[1] | checksum[2] ^ newChecksum[2] | checksum[3] ^ newChecksum[3])
        return;
      return payload;
    }
    function decodeUnsafe(string) {
      var buffer2 = base58.decodeUnsafe(string);
      if (!buffer2)
        return;
      return decodeRaw2(buffer2);
    }
    function decode2(string) {
      var buffer2 = base58.decode(string);
      var payload = decodeRaw2(buffer2);
      if (!payload)
        throw new Error("Invalid checksum");
      return payload;
    }
    return {
      encode: encode2,
      decode: decode2,
      decodeUnsafe
    };
  };
  var createHash = browser$1;
  var bs58checkBase = base;
  function sha256x2(buffer2) {
    var tmp = createHash("sha256").update(buffer2).digest();
    return createHash("sha256").update(tmp).digest();
  }
  var bs58check$4 = bs58checkBase(sha256x2);
  Object.defineProperty(p2pkh$1, "__esModule", {
    value: true
  });
  p2pkh$1.p2pkh = void 0;
  const bcrypto$5 = crypto$1;
  const networks_1$5 = networks$3;
  const bscript$8 = script;
  const types_1$6 = types$8;
  const lazy$4 = lazy$8;
  const bs58check$3 = bs58check$4;
  const OPS$4 = bscript$8.OPS;
  function p2pkh(a2, opts) {
    if (!a2.address && !a2.hash && !a2.output && !a2.pubkey && !a2.input)
      throw new TypeError("Not enough data");
    opts = Object.assign({
      validate: true
    }, opts || {});
    (0, types_1$6.typeforce)({
      network: types_1$6.typeforce.maybe(types_1$6.typeforce.Object),
      address: types_1$6.typeforce.maybe(types_1$6.typeforce.String),
      hash: types_1$6.typeforce.maybe(types_1$6.typeforce.BufferN(20)),
      output: types_1$6.typeforce.maybe(types_1$6.typeforce.BufferN(25)),
      pubkey: types_1$6.typeforce.maybe(types_1$6.isPoint),
      signature: types_1$6.typeforce.maybe(bscript$8.isCanonicalScriptSignature),
      input: types_1$6.typeforce.maybe(types_1$6.typeforce.Buffer)
    }, a2);
    const _address = lazy$4.value(() => {
      const payload = bs58check$3.decode(a2.address);
      const version = payload.readUInt8(0);
      const hash2 = payload.slice(1);
      return {
        version,
        hash: hash2
      };
    });
    const _chunks = lazy$4.value(() => {
      return bscript$8.decompile(a2.input);
    });
    const network = a2.network || networks_1$5.bitcoin;
    const o = {
      name: "p2pkh",
      network
    };
    lazy$4.prop(o, "address", () => {
      if (!o.hash)
        return;
      const payload = buffer.Buffer.allocUnsafe(21);
      payload.writeUInt8(network.pubKeyHash, 0);
      o.hash.copy(payload, 1);
      return bs58check$3.encode(payload);
    });
    lazy$4.prop(o, "hash", () => {
      if (a2.output)
        return a2.output.slice(3, 23);
      if (a2.address)
        return _address().hash;
      if (a2.pubkey || o.pubkey)
        return bcrypto$5.hash160(a2.pubkey || o.pubkey);
    });
    lazy$4.prop(o, "output", () => {
      if (!o.hash)
        return;
      return bscript$8.compile([
        OPS$4.OP_DUP,
        OPS$4.OP_HASH160,
        o.hash,
        OPS$4.OP_EQUALVERIFY,
        OPS$4.OP_CHECKSIG
      ]);
    });
    lazy$4.prop(o, "pubkey", () => {
      if (!a2.input)
        return;
      return _chunks()[1];
    });
    lazy$4.prop(o, "signature", () => {
      if (!a2.input)
        return;
      return _chunks()[0];
    });
    lazy$4.prop(o, "input", () => {
      if (!a2.pubkey)
        return;
      if (!a2.signature)
        return;
      return bscript$8.compile([
        a2.signature,
        a2.pubkey
      ]);
    });
    lazy$4.prop(o, "witness", () => {
      if (!o.input)
        return;
      return [];
    });
    if (opts.validate) {
      let hash2 = buffer.Buffer.from([]);
      if (a2.address) {
        if (_address().version !== network.pubKeyHash)
          throw new TypeError("Invalid version or Network mismatch");
        if (_address().hash.length !== 20)
          throw new TypeError("Invalid address");
        hash2 = _address().hash;
      }
      if (a2.hash) {
        if (hash2.length > 0 && !hash2.equals(a2.hash))
          throw new TypeError("Hash mismatch");
        else
          hash2 = a2.hash;
      }
      if (a2.output) {
        if (a2.output.length !== 25 || a2.output[0] !== OPS$4.OP_DUP || a2.output[1] !== OPS$4.OP_HASH160 || a2.output[2] !== 20 || a2.output[23] !== OPS$4.OP_EQUALVERIFY || a2.output[24] !== OPS$4.OP_CHECKSIG)
          throw new TypeError("Output is invalid");
        const hash22 = a2.output.slice(3, 23);
        if (hash2.length > 0 && !hash2.equals(hash22))
          throw new TypeError("Hash mismatch");
        else
          hash2 = hash22;
      }
      if (a2.pubkey) {
        const pkh = bcrypto$5.hash160(a2.pubkey);
        if (hash2.length > 0 && !hash2.equals(pkh))
          throw new TypeError("Hash mismatch");
        else
          hash2 = pkh;
      }
      if (a2.input) {
        const chunks = _chunks();
        if (chunks.length !== 2)
          throw new TypeError("Input is invalid");
        if (!bscript$8.isCanonicalScriptSignature(chunks[0]))
          throw new TypeError("Input has invalid signature");
        if (!(0, types_1$6.isPoint)(chunks[1]))
          throw new TypeError("Input has invalid pubkey");
        if (a2.signature && !a2.signature.equals(chunks[0]))
          throw new TypeError("Signature mismatch");
        if (a2.pubkey && !a2.pubkey.equals(chunks[1]))
          throw new TypeError("Pubkey mismatch");
        const pkh = bcrypto$5.hash160(chunks[1]);
        if (hash2.length > 0 && !hash2.equals(pkh))
          throw new TypeError("Hash mismatch");
      }
    }
    return Object.assign(o, a2);
  }
  p2pkh$1.p2pkh = p2pkh;
  var p2sh$1 = {};
  Object.defineProperty(p2sh$1, "__esModule", {
    value: true
  });
  p2sh$1.p2sh = void 0;
  const bcrypto$4 = crypto$1;
  const networks_1$4 = networks$3;
  const bscript$7 = script;
  const types_1$5 = types$8;
  const lazy$3 = lazy$8;
  const bs58check$2 = bs58check$4;
  const OPS$3 = bscript$7.OPS;
  function stacksEqual$2(a2, b) {
    if (a2.length !== b.length)
      return false;
    return a2.every((x, i) => {
      return x.equals(b[i]);
    });
  }
  function p2sh(a2, opts) {
    if (!a2.address && !a2.hash && !a2.output && !a2.redeem && !a2.input)
      throw new TypeError("Not enough data");
    opts = Object.assign({
      validate: true
    }, opts || {});
    (0, types_1$5.typeforce)({
      network: types_1$5.typeforce.maybe(types_1$5.typeforce.Object),
      address: types_1$5.typeforce.maybe(types_1$5.typeforce.String),
      hash: types_1$5.typeforce.maybe(types_1$5.typeforce.BufferN(20)),
      output: types_1$5.typeforce.maybe(types_1$5.typeforce.BufferN(23)),
      redeem: types_1$5.typeforce.maybe({
        network: types_1$5.typeforce.maybe(types_1$5.typeforce.Object),
        output: types_1$5.typeforce.maybe(types_1$5.typeforce.Buffer),
        input: types_1$5.typeforce.maybe(types_1$5.typeforce.Buffer),
        witness: types_1$5.typeforce.maybe(types_1$5.typeforce.arrayOf(types_1$5.typeforce.Buffer))
      }),
      input: types_1$5.typeforce.maybe(types_1$5.typeforce.Buffer),
      witness: types_1$5.typeforce.maybe(types_1$5.typeforce.arrayOf(types_1$5.typeforce.Buffer))
    }, a2);
    let network = a2.network;
    if (!network) {
      network = a2.redeem && a2.redeem.network || networks_1$4.bitcoin;
    }
    const o = {
      network
    };
    const _address = lazy$3.value(() => {
      const payload = bs58check$2.decode(a2.address);
      const version = payload.readUInt8(0);
      const hash2 = payload.slice(1);
      return {
        version,
        hash: hash2
      };
    });
    const _chunks = lazy$3.value(() => {
      return bscript$7.decompile(a2.input);
    });
    const _redeem = lazy$3.value(() => {
      const chunks = _chunks();
      const lastChunk = chunks[chunks.length - 1];
      return {
        network,
        output: lastChunk === OPS$3.OP_FALSE ? buffer.Buffer.from([]) : lastChunk,
        input: bscript$7.compile(chunks.slice(0, -1)),
        witness: a2.witness || []
      };
    });
    lazy$3.prop(o, "address", () => {
      if (!o.hash)
        return;
      const payload = buffer.Buffer.allocUnsafe(21);
      payload.writeUInt8(o.network.scriptHash, 0);
      o.hash.copy(payload, 1);
      return bs58check$2.encode(payload);
    });
    lazy$3.prop(o, "hash", () => {
      if (a2.output)
        return a2.output.slice(2, 22);
      if (a2.address)
        return _address().hash;
      if (o.redeem && o.redeem.output)
        return bcrypto$4.hash160(o.redeem.output);
    });
    lazy$3.prop(o, "output", () => {
      if (!o.hash)
        return;
      return bscript$7.compile([
        OPS$3.OP_HASH160,
        o.hash,
        OPS$3.OP_EQUAL
      ]);
    });
    lazy$3.prop(o, "redeem", () => {
      if (!a2.input)
        return;
      return _redeem();
    });
    lazy$3.prop(o, "input", () => {
      if (!a2.redeem || !a2.redeem.input || !a2.redeem.output)
        return;
      return bscript$7.compile([].concat(bscript$7.decompile(a2.redeem.input), a2.redeem.output));
    });
    lazy$3.prop(o, "witness", () => {
      if (o.redeem && o.redeem.witness)
        return o.redeem.witness;
      if (o.input)
        return [];
    });
    lazy$3.prop(o, "name", () => {
      const nameParts = [
        "p2sh"
      ];
      if (o.redeem !== void 0 && o.redeem.name !== void 0)
        nameParts.push(o.redeem.name);
      return nameParts.join("-");
    });
    if (opts.validate) {
      let hash2 = buffer.Buffer.from([]);
      if (a2.address) {
        if (_address().version !== network.scriptHash)
          throw new TypeError("Invalid version or Network mismatch");
        if (_address().hash.length !== 20)
          throw new TypeError("Invalid address");
        hash2 = _address().hash;
      }
      if (a2.hash) {
        if (hash2.length > 0 && !hash2.equals(a2.hash))
          throw new TypeError("Hash mismatch");
        else
          hash2 = a2.hash;
      }
      if (a2.output) {
        if (a2.output.length !== 23 || a2.output[0] !== OPS$3.OP_HASH160 || a2.output[1] !== 20 || a2.output[22] !== OPS$3.OP_EQUAL)
          throw new TypeError("Output is invalid");
        const hash22 = a2.output.slice(2, 22);
        if (hash2.length > 0 && !hash2.equals(hash22))
          throw new TypeError("Hash mismatch");
        else
          hash2 = hash22;
      }
      const checkRedeem = (redeem) => {
        if (redeem.output) {
          const decompile = bscript$7.decompile(redeem.output);
          if (!decompile || decompile.length < 1)
            throw new TypeError("Redeem.output too short");
          const hash22 = bcrypto$4.hash160(redeem.output);
          if (hash2.length > 0 && !hash2.equals(hash22))
            throw new TypeError("Hash mismatch");
          else
            hash2 = hash22;
        }
        if (redeem.input) {
          const hasInput = redeem.input.length > 0;
          const hasWitness = redeem.witness && redeem.witness.length > 0;
          if (!hasInput && !hasWitness)
            throw new TypeError("Empty input");
          if (hasInput && hasWitness)
            throw new TypeError("Input and witness provided");
          if (hasInput) {
            const richunks = bscript$7.decompile(redeem.input);
            if (!bscript$7.isPushOnly(richunks))
              throw new TypeError("Non push-only scriptSig");
          }
        }
      };
      if (a2.input) {
        const chunks = _chunks();
        if (!chunks || chunks.length < 1)
          throw new TypeError("Input too short");
        if (!buffer.Buffer.isBuffer(_redeem().output))
          throw new TypeError("Input is invalid");
        checkRedeem(_redeem());
      }
      if (a2.redeem) {
        if (a2.redeem.network && a2.redeem.network !== network)
          throw new TypeError("Network mismatch");
        if (a2.input) {
          const redeem = _redeem();
          if (a2.redeem.output && !a2.redeem.output.equals(redeem.output))
            throw new TypeError("Redeem.output mismatch");
          if (a2.redeem.input && !a2.redeem.input.equals(redeem.input))
            throw new TypeError("Redeem.input mismatch");
        }
        checkRedeem(a2.redeem);
      }
      if (a2.witness) {
        if (a2.redeem && a2.redeem.witness && !stacksEqual$2(a2.redeem.witness, a2.witness))
          throw new TypeError("Witness and redeem.witness mismatch");
      }
    }
    return Object.assign(o, a2);
  }
  p2sh$1.p2sh = p2sh;
  var p2wpkh$1 = {};
  var dist = {};
  Object.defineProperty(dist, "__esModule", {
    value: true
  });
  dist.bech32m = dist.bech32 = void 0;
  const ALPHABET = "qpzry9x8gf2tvdw0s3jn54khce6mua7l";
  const ALPHABET_MAP = {};
  for (let z = 0; z < ALPHABET.length; z++) {
    const x = ALPHABET.charAt(z);
    ALPHABET_MAP[x] = z;
  }
  function polymodStep(pre) {
    const b = pre >> 25;
    return (pre & 33554431) << 5 ^ -(b >> 0 & 1) & 996825010 ^ -(b >> 1 & 1) & 642813549 ^ -(b >> 2 & 1) & 513874426 ^ -(b >> 3 & 1) & 1027748829 ^ -(b >> 4 & 1) & 705979059;
  }
  function prefixChk(prefix) {
    let chk = 1;
    for (let i = 0; i < prefix.length; ++i) {
      const c = prefix.charCodeAt(i);
      if (c < 33 || c > 126)
        return "Invalid prefix (" + prefix + ")";
      chk = polymodStep(chk) ^ c >> 5;
    }
    chk = polymodStep(chk);
    for (let i = 0; i < prefix.length; ++i) {
      const v2 = prefix.charCodeAt(i);
      chk = polymodStep(chk) ^ v2 & 31;
    }
    return chk;
  }
  function convert$2(data, inBits, outBits, pad) {
    let value2 = 0;
    let bits = 0;
    const maxV = (1 << outBits) - 1;
    const result = [];
    for (let i = 0; i < data.length; ++i) {
      value2 = value2 << inBits | data[i];
      bits += inBits;
      while (bits >= outBits) {
        bits -= outBits;
        result.push(value2 >> bits & maxV);
      }
    }
    if (pad) {
      if (bits > 0) {
        result.push(value2 << outBits - bits & maxV);
      }
    } else {
      if (bits >= inBits)
        return "Excess padding";
      if (value2 << outBits - bits & maxV)
        return "Non-zero padding";
    }
    return result;
  }
  function toWords(bytes) {
    return convert$2(bytes, 8, 5, true);
  }
  function fromWordsUnsafe(words) {
    const res = convert$2(words, 5, 8, false);
    if (Array.isArray(res))
      return res;
  }
  function fromWords(words) {
    const res = convert$2(words, 5, 8, false);
    if (Array.isArray(res))
      return res;
    throw new Error(res);
  }
  function getLibraryFromEncoding(encoding) {
    let ENCODING_CONST;
    if (encoding === "bech32") {
      ENCODING_CONST = 1;
    } else {
      ENCODING_CONST = 734539939;
    }
    function encode2(prefix, words, LIMIT) {
      LIMIT = LIMIT || 90;
      if (prefix.length + 7 + words.length > LIMIT)
        throw new TypeError("Exceeds length limit");
      prefix = prefix.toLowerCase();
      let chk = prefixChk(prefix);
      if (typeof chk === "string")
        throw new Error(chk);
      let result = prefix + "1";
      for (let i = 0; i < words.length; ++i) {
        const x = words[i];
        if (x >> 5 !== 0)
          throw new Error("Non 5-bit word");
        chk = polymodStep(chk) ^ x;
        result += ALPHABET.charAt(x);
      }
      for (let i = 0; i < 6; ++i) {
        chk = polymodStep(chk);
      }
      chk ^= ENCODING_CONST;
      for (let i = 0; i < 6; ++i) {
        const v2 = chk >> (5 - i) * 5 & 31;
        result += ALPHABET.charAt(v2);
      }
      return result;
    }
    function __decode(str, LIMIT) {
      LIMIT = LIMIT || 90;
      if (str.length < 8)
        return str + " too short";
      if (str.length > LIMIT)
        return "Exceeds length limit";
      const lowered = str.toLowerCase();
      const uppered = str.toUpperCase();
      if (str !== lowered && str !== uppered)
        return "Mixed-case string " + str;
      str = lowered;
      const split = str.lastIndexOf("1");
      if (split === -1)
        return "No separator character for " + str;
      if (split === 0)
        return "Missing prefix for " + str;
      const prefix = str.slice(0, split);
      const wordChars = str.slice(split + 1);
      if (wordChars.length < 6)
        return "Data too short";
      let chk = prefixChk(prefix);
      if (typeof chk === "string")
        return chk;
      const words = [];
      for (let i = 0; i < wordChars.length; ++i) {
        const c = wordChars.charAt(i);
        const v2 = ALPHABET_MAP[c];
        if (v2 === void 0)
          return "Unknown character " + c;
        chk = polymodStep(chk) ^ v2;
        if (i + 6 >= wordChars.length)
          continue;
        words.push(v2);
      }
      if (chk !== ENCODING_CONST)
        return "Invalid checksum for " + str;
      return {
        prefix,
        words
      };
    }
    function decodeUnsafe(str, LIMIT) {
      const res = __decode(str, LIMIT);
      if (typeof res === "object")
        return res;
    }
    function decode2(str, LIMIT) {
      const res = __decode(str, LIMIT);
      if (typeof res === "object")
        return res;
      throw new Error(res);
    }
    return {
      decodeUnsafe,
      decode: decode2,
      encode: encode2,
      toWords,
      fromWordsUnsafe,
      fromWords
    };
  }
  dist.bech32 = getLibraryFromEncoding("bech32");
  dist.bech32m = getLibraryFromEncoding("bech32m");
  Object.defineProperty(p2wpkh$1, "__esModule", {
    value: true
  });
  p2wpkh$1.p2wpkh = void 0;
  const bcrypto$3 = crypto$1;
  const networks_1$3 = networks$3;
  const bscript$6 = script;
  const types_1$4 = types$8;
  const lazy$2 = lazy$8;
  const bech32_1$3 = dist;
  const OPS$2 = bscript$6.OPS;
  const EMPTY_BUFFER$2 = buffer.Buffer.alloc(0);
  function p2wpkh(a2, opts) {
    if (!a2.address && !a2.hash && !a2.output && !a2.pubkey && !a2.witness)
      throw new TypeError("Not enough data");
    opts = Object.assign({
      validate: true
    }, opts || {});
    (0, types_1$4.typeforce)({
      address: types_1$4.typeforce.maybe(types_1$4.typeforce.String),
      hash: types_1$4.typeforce.maybe(types_1$4.typeforce.BufferN(20)),
      input: types_1$4.typeforce.maybe(types_1$4.typeforce.BufferN(0)),
      network: types_1$4.typeforce.maybe(types_1$4.typeforce.Object),
      output: types_1$4.typeforce.maybe(types_1$4.typeforce.BufferN(22)),
      pubkey: types_1$4.typeforce.maybe(types_1$4.isPoint),
      signature: types_1$4.typeforce.maybe(bscript$6.isCanonicalScriptSignature),
      witness: types_1$4.typeforce.maybe(types_1$4.typeforce.arrayOf(types_1$4.typeforce.Buffer))
    }, a2);
    const _address = lazy$2.value(() => {
      const result = bech32_1$3.bech32.decode(a2.address);
      const version = result.words.shift();
      const data = bech32_1$3.bech32.fromWords(result.words);
      return {
        version,
        prefix: result.prefix,
        data: buffer.Buffer.from(data)
      };
    });
    const network = a2.network || networks_1$3.bitcoin;
    const o = {
      name: "p2wpkh",
      network
    };
    lazy$2.prop(o, "address", () => {
      if (!o.hash)
        return;
      const words = bech32_1$3.bech32.toWords(o.hash);
      words.unshift(0);
      return bech32_1$3.bech32.encode(network.bech32, words);
    });
    lazy$2.prop(o, "hash", () => {
      if (a2.output)
        return a2.output.slice(2, 22);
      if (a2.address)
        return _address().data;
      if (a2.pubkey || o.pubkey)
        return bcrypto$3.hash160(a2.pubkey || o.pubkey);
    });
    lazy$2.prop(o, "output", () => {
      if (!o.hash)
        return;
      return bscript$6.compile([
        OPS$2.OP_0,
        o.hash
      ]);
    });
    lazy$2.prop(o, "pubkey", () => {
      if (a2.pubkey)
        return a2.pubkey;
      if (!a2.witness)
        return;
      return a2.witness[1];
    });
    lazy$2.prop(o, "signature", () => {
      if (!a2.witness)
        return;
      return a2.witness[0];
    });
    lazy$2.prop(o, "input", () => {
      if (!o.witness)
        return;
      return EMPTY_BUFFER$2;
    });
    lazy$2.prop(o, "witness", () => {
      if (!a2.pubkey)
        return;
      if (!a2.signature)
        return;
      return [
        a2.signature,
        a2.pubkey
      ];
    });
    if (opts.validate) {
      let hash2 = buffer.Buffer.from([]);
      if (a2.address) {
        if (network && network.bech32 !== _address().prefix)
          throw new TypeError("Invalid prefix or Network mismatch");
        if (_address().version !== 0)
          throw new TypeError("Invalid address version");
        if (_address().data.length !== 20)
          throw new TypeError("Invalid address data");
        hash2 = _address().data;
      }
      if (a2.hash) {
        if (hash2.length > 0 && !hash2.equals(a2.hash))
          throw new TypeError("Hash mismatch");
        else
          hash2 = a2.hash;
      }
      if (a2.output) {
        if (a2.output.length !== 22 || a2.output[0] !== OPS$2.OP_0 || a2.output[1] !== 20)
          throw new TypeError("Output is invalid");
        if (hash2.length > 0 && !hash2.equals(a2.output.slice(2)))
          throw new TypeError("Hash mismatch");
        else
          hash2 = a2.output.slice(2);
      }
      if (a2.pubkey) {
        const pkh = bcrypto$3.hash160(a2.pubkey);
        if (hash2.length > 0 && !hash2.equals(pkh))
          throw new TypeError("Hash mismatch");
        else
          hash2 = pkh;
        if (!(0, types_1$4.isPoint)(a2.pubkey) || a2.pubkey.length !== 33)
          throw new TypeError("Invalid pubkey for p2wpkh");
      }
      if (a2.witness) {
        if (a2.witness.length !== 2)
          throw new TypeError("Witness is invalid");
        if (!bscript$6.isCanonicalScriptSignature(a2.witness[0]))
          throw new TypeError("Witness has invalid signature");
        if (!(0, types_1$4.isPoint)(a2.witness[1]) || a2.witness[1].length !== 33)
          throw new TypeError("Witness has invalid pubkey");
        if (a2.signature && !a2.signature.equals(a2.witness[0]))
          throw new TypeError("Signature mismatch");
        if (a2.pubkey && !a2.pubkey.equals(a2.witness[1]))
          throw new TypeError("Pubkey mismatch");
        const pkh = bcrypto$3.hash160(a2.witness[1]);
        if (hash2.length > 0 && !hash2.equals(pkh))
          throw new TypeError("Hash mismatch");
      }
    }
    return Object.assign(o, a2);
  }
  p2wpkh$1.p2wpkh = p2wpkh;
  var p2wsh$1 = {};
  Object.defineProperty(p2wsh$1, "__esModule", {
    value: true
  });
  p2wsh$1.p2wsh = void 0;
  const bcrypto$2 = crypto$1;
  const networks_1$2 = networks$3;
  const bscript$5 = script;
  const types_1$3 = types$8;
  const lazy$1 = lazy$8;
  const bech32_1$2 = dist;
  const OPS$1 = bscript$5.OPS;
  const EMPTY_BUFFER$1 = buffer.Buffer.alloc(0);
  function stacksEqual$1(a2, b) {
    if (a2.length !== b.length)
      return false;
    return a2.every((x, i) => {
      return x.equals(b[i]);
    });
  }
  function chunkHasUncompressedPubkey(chunk) {
    if (buffer.Buffer.isBuffer(chunk) && chunk.length === 65 && chunk[0] === 4 && (0, types_1$3.isPoint)(chunk)) {
      return true;
    } else {
      return false;
    }
  }
  function p2wsh(a2, opts) {
    if (!a2.address && !a2.hash && !a2.output && !a2.redeem && !a2.witness)
      throw new TypeError("Not enough data");
    opts = Object.assign({
      validate: true
    }, opts || {});
    (0, types_1$3.typeforce)({
      network: types_1$3.typeforce.maybe(types_1$3.typeforce.Object),
      address: types_1$3.typeforce.maybe(types_1$3.typeforce.String),
      hash: types_1$3.typeforce.maybe(types_1$3.typeforce.BufferN(32)),
      output: types_1$3.typeforce.maybe(types_1$3.typeforce.BufferN(34)),
      redeem: types_1$3.typeforce.maybe({
        input: types_1$3.typeforce.maybe(types_1$3.typeforce.Buffer),
        network: types_1$3.typeforce.maybe(types_1$3.typeforce.Object),
        output: types_1$3.typeforce.maybe(types_1$3.typeforce.Buffer),
        witness: types_1$3.typeforce.maybe(types_1$3.typeforce.arrayOf(types_1$3.typeforce.Buffer))
      }),
      input: types_1$3.typeforce.maybe(types_1$3.typeforce.BufferN(0)),
      witness: types_1$3.typeforce.maybe(types_1$3.typeforce.arrayOf(types_1$3.typeforce.Buffer))
    }, a2);
    const _address = lazy$1.value(() => {
      const result = bech32_1$2.bech32.decode(a2.address);
      const version = result.words.shift();
      const data = bech32_1$2.bech32.fromWords(result.words);
      return {
        version,
        prefix: result.prefix,
        data: buffer.Buffer.from(data)
      };
    });
    const _rchunks = lazy$1.value(() => {
      return bscript$5.decompile(a2.redeem.input);
    });
    let network = a2.network;
    if (!network) {
      network = a2.redeem && a2.redeem.network || networks_1$2.bitcoin;
    }
    const o = {
      network
    };
    lazy$1.prop(o, "address", () => {
      if (!o.hash)
        return;
      const words = bech32_1$2.bech32.toWords(o.hash);
      words.unshift(0);
      return bech32_1$2.bech32.encode(network.bech32, words);
    });
    lazy$1.prop(o, "hash", () => {
      if (a2.output)
        return a2.output.slice(2);
      if (a2.address)
        return _address().data;
      if (o.redeem && o.redeem.output)
        return bcrypto$2.sha256(o.redeem.output);
    });
    lazy$1.prop(o, "output", () => {
      if (!o.hash)
        return;
      return bscript$5.compile([
        OPS$1.OP_0,
        o.hash
      ]);
    });
    lazy$1.prop(o, "redeem", () => {
      if (!a2.witness)
        return;
      return {
        output: a2.witness[a2.witness.length - 1],
        input: EMPTY_BUFFER$1,
        witness: a2.witness.slice(0, -1)
      };
    });
    lazy$1.prop(o, "input", () => {
      if (!o.witness)
        return;
      return EMPTY_BUFFER$1;
    });
    lazy$1.prop(o, "witness", () => {
      if (a2.redeem && a2.redeem.input && a2.redeem.input.length > 0 && a2.redeem.output && a2.redeem.output.length > 0) {
        const stack = bscript$5.toStack(_rchunks());
        o.redeem = Object.assign({
          witness: stack
        }, a2.redeem);
        o.redeem.input = EMPTY_BUFFER$1;
        return [].concat(stack, a2.redeem.output);
      }
      if (!a2.redeem)
        return;
      if (!a2.redeem.output)
        return;
      if (!a2.redeem.witness)
        return;
      return [].concat(a2.redeem.witness, a2.redeem.output);
    });
    lazy$1.prop(o, "name", () => {
      const nameParts = [
        "p2wsh"
      ];
      if (o.redeem !== void 0 && o.redeem.name !== void 0)
        nameParts.push(o.redeem.name);
      return nameParts.join("-");
    });
    if (opts.validate) {
      let hash2 = buffer.Buffer.from([]);
      if (a2.address) {
        if (_address().prefix !== network.bech32)
          throw new TypeError("Invalid prefix or Network mismatch");
        if (_address().version !== 0)
          throw new TypeError("Invalid address version");
        if (_address().data.length !== 32)
          throw new TypeError("Invalid address data");
        hash2 = _address().data;
      }
      if (a2.hash) {
        if (hash2.length > 0 && !hash2.equals(a2.hash))
          throw new TypeError("Hash mismatch");
        else
          hash2 = a2.hash;
      }
      if (a2.output) {
        if (a2.output.length !== 34 || a2.output[0] !== OPS$1.OP_0 || a2.output[1] !== 32)
          throw new TypeError("Output is invalid");
        const hash22 = a2.output.slice(2);
        if (hash2.length > 0 && !hash2.equals(hash22))
          throw new TypeError("Hash mismatch");
        else
          hash2 = hash22;
      }
      if (a2.redeem) {
        if (a2.redeem.network && a2.redeem.network !== network)
          throw new TypeError("Network mismatch");
        if (a2.redeem.input && a2.redeem.input.length > 0 && a2.redeem.witness && a2.redeem.witness.length > 0)
          throw new TypeError("Ambiguous witness source");
        if (a2.redeem.output) {
          if (bscript$5.decompile(a2.redeem.output).length === 0)
            throw new TypeError("Redeem.output is invalid");
          const hash22 = bcrypto$2.sha256(a2.redeem.output);
          if (hash2.length > 0 && !hash2.equals(hash22))
            throw new TypeError("Hash mismatch");
          else
            hash2 = hash22;
        }
        if (a2.redeem.input && !bscript$5.isPushOnly(_rchunks()))
          throw new TypeError("Non push-only scriptSig");
        if (a2.witness && a2.redeem.witness && !stacksEqual$1(a2.witness, a2.redeem.witness))
          throw new TypeError("Witness and redeem.witness mismatch");
        if (a2.redeem.input && _rchunks().some(chunkHasUncompressedPubkey) || a2.redeem.output && (bscript$5.decompile(a2.redeem.output) || []).some(chunkHasUncompressedPubkey)) {
          throw new TypeError("redeem.input or redeem.output contains uncompressed pubkey");
        }
      }
      if (a2.witness && a2.witness.length > 0) {
        const wScript = a2.witness[a2.witness.length - 1];
        if (a2.redeem && a2.redeem.output && !a2.redeem.output.equals(wScript))
          throw new TypeError("Witness and redeem.output mismatch");
        if (a2.witness.some(chunkHasUncompressedPubkey) || (bscript$5.decompile(wScript) || []).some(chunkHasUncompressedPubkey))
          throw new TypeError("Witness contains uncompressed pubkey");
      }
    }
    return Object.assign(o, a2);
  }
  p2wsh$1.p2wsh = p2wsh;
  var p2tr$1 = {};
  var ecc_lib = {};
  Object.defineProperty(ecc_lib, "__esModule", {
    value: true
  });
  ecc_lib.getEccLib = ecc_lib.initEccLib = void 0;
  const _ECCLIB_CACHE = {};
  function initEccLib(eccLib) {
    if (!eccLib) {
      _ECCLIB_CACHE.eccLib = eccLib;
    } else if (eccLib !== _ECCLIB_CACHE.eccLib) {
      verifyEcc(eccLib);
      _ECCLIB_CACHE.eccLib = eccLib;
    }
  }
  ecc_lib.initEccLib = initEccLib;
  function getEccLib() {
    if (!_ECCLIB_CACHE.eccLib)
      throw new Error("No ECC Library provided. You must call initEccLib() with a valid TinySecp256k1Interface instance");
    return _ECCLIB_CACHE.eccLib;
  }
  ecc_lib.getEccLib = getEccLib;
  const h$1 = (hex) => buffer.Buffer.from(hex, "hex");
  function verifyEcc(ecc2) {
    assert$1(typeof ecc2.isXOnlyPoint === "function");
    assert$1(ecc2.isXOnlyPoint(h$1("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798")));
    assert$1(ecc2.isXOnlyPoint(h$1("fffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffc2e")));
    assert$1(ecc2.isXOnlyPoint(h$1("f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9")));
    assert$1(ecc2.isXOnlyPoint(h$1("0000000000000000000000000000000000000000000000000000000000000001")));
    assert$1(!ecc2.isXOnlyPoint(h$1("0000000000000000000000000000000000000000000000000000000000000000")));
    assert$1(!ecc2.isXOnlyPoint(h$1("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f")));
    assert$1(typeof ecc2.xOnlyPointAddTweak === "function");
    tweakAddVectors.forEach((t) => {
      const r = ecc2.xOnlyPointAddTweak(h$1(t.pubkey), h$1(t.tweak));
      if (t.result === null) {
        assert$1(r === null);
      } else {
        assert$1(r !== null);
        assert$1(r.parity === t.parity);
        assert$1(buffer.Buffer.from(r.xOnlyPubkey).equals(h$1(t.result)));
      }
    });
  }
  function assert$1(bool) {
    if (!bool)
      throw new Error("ecc library invalid");
  }
  const tweakAddVectors = [
    {
      pubkey: "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
      tweak: "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140",
      parity: -1,
      result: null
    },
    {
      pubkey: "1617d38ed8d8657da4d4761e8057bc396ea9e4b9d29776d4be096016dbd2509b",
      tweak: "a8397a935f0dfceba6ba9618f6451ef4d80637abf4e6af2669fbc9de6a8fd2ac",
      parity: 1,
      result: "e478f99dab91052ab39a33ea35fd5e6e4933f4d28023cd597c9a1f6760346adf"
    },
    {
      pubkey: "2c0b7cf95324a07d05398b240174dc0c2be444d96b159aa6c7f7b1e668680991",
      tweak: "823c3cd2142744b075a87eade7e1b8678ba308d566226a0056ca2b7a76f86b47",
      parity: 0,
      result: "9534f8dc8c6deda2dc007655981c78b49c5d96c778fbf363462a11ec9dfd948c"
    }
  ];
  var bip341 = {};
  var bufferutils = {};
  var Buffer$2 = safeBufferExports.Buffer;
  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  function checkUInt53$1(n) {
    if (n < 0 || n > MAX_SAFE_INTEGER$1 || n % 1 !== 0)
      throw new RangeError("value out of range");
  }
  function encode$g(number, buffer2, offset) {
    checkUInt53$1(number);
    if (!buffer2)
      buffer2 = Buffer$2.allocUnsafe(encodingLength$1(number));
    if (!Buffer$2.isBuffer(buffer2))
      throw new TypeError("buffer must be a Buffer instance");
    if (!offset)
      offset = 0;
    if (number < 253) {
      buffer2.writeUInt8(number, offset);
      encode$g.bytes = 1;
    } else if (number <= 65535) {
      buffer2.writeUInt8(253, offset);
      buffer2.writeUInt16LE(number, offset + 1);
      encode$g.bytes = 3;
    } else if (number <= 4294967295) {
      buffer2.writeUInt8(254, offset);
      buffer2.writeUInt32LE(number, offset + 1);
      encode$g.bytes = 5;
    } else {
      buffer2.writeUInt8(255, offset);
      buffer2.writeUInt32LE(number >>> 0, offset + 1);
      buffer2.writeUInt32LE(number / 4294967296 | 0, offset + 5);
      encode$g.bytes = 9;
    }
    return buffer2;
  }
  function decode$f(buffer2, offset) {
    if (!Buffer$2.isBuffer(buffer2))
      throw new TypeError("buffer must be a Buffer instance");
    if (!offset)
      offset = 0;
    var first = buffer2.readUInt8(offset);
    if (first < 253) {
      decode$f.bytes = 1;
      return first;
    } else if (first === 253) {
      decode$f.bytes = 3;
      return buffer2.readUInt16LE(offset + 1);
    } else if (first === 254) {
      decode$f.bytes = 5;
      return buffer2.readUInt32LE(offset + 1);
    } else {
      decode$f.bytes = 9;
      var lo = buffer2.readUInt32LE(offset + 1);
      var hi = buffer2.readUInt32LE(offset + 5);
      var number = hi * 4294967296 + lo;
      checkUInt53$1(number);
      return number;
    }
  }
  function encodingLength$1(number) {
    checkUInt53$1(number);
    return number < 253 ? 1 : number <= 65535 ? 3 : number <= 4294967295 ? 5 : 9;
  }
  var varuintBitcoin = {
    encode: encode$g,
    decode: decode$f,
    encodingLength: encodingLength$1
  };
  Object.defineProperty(bufferutils, "__esModule", {
    value: true
  });
  bufferutils.BufferReader = bufferutils.BufferWriter = bufferutils.cloneBuffer = bufferutils.reverseBuffer = bufferutils.writeUInt64LE = bufferutils.readUInt64LE = bufferutils.varuint = void 0;
  const types$4 = types$8;
  const { typeforce: typeforce$2 } = types$4;
  const varuint$7 = varuintBitcoin;
  bufferutils.varuint = varuint$7;
  function verifuint$1(value2, max) {
    if (typeof value2 !== "number")
      throw new Error("cannot write a non-number as a number");
    if (value2 < 0)
      throw new Error("specified a negative value for writing an unsigned value");
    if (value2 > max)
      throw new Error("RangeError: value out of range");
    if (Math.floor(value2) !== value2)
      throw new Error("value has a fractional component");
  }
  function readUInt64LE$1(buffer2, offset) {
    const a2 = buffer2.readUInt32LE(offset);
    let b = buffer2.readUInt32LE(offset + 4);
    b *= 4294967296;
    verifuint$1(b + a2, 9007199254740991);
    return b + a2;
  }
  bufferutils.readUInt64LE = readUInt64LE$1;
  function writeUInt64LE$1(buffer2, value2, offset) {
    verifuint$1(value2, 9007199254740991);
    buffer2.writeInt32LE(value2 & -1, offset);
    buffer2.writeUInt32LE(Math.floor(value2 / 4294967296), offset + 4);
    return offset + 8;
  }
  bufferutils.writeUInt64LE = writeUInt64LE$1;
  function reverseBuffer$1(buffer2) {
    if (buffer2.length < 1)
      return buffer2;
    let j = buffer2.length - 1;
    let tmp = 0;
    for (let i = 0; i < buffer2.length / 2; i++) {
      tmp = buffer2[i];
      buffer2[i] = buffer2[j];
      buffer2[j] = tmp;
      j--;
    }
    return buffer2;
  }
  bufferutils.reverseBuffer = reverseBuffer$1;
  function cloneBuffer(buffer$1) {
    const clone = buffer.Buffer.allocUnsafe(buffer$1.length);
    buffer$1.copy(clone);
    return clone;
  }
  bufferutils.cloneBuffer = cloneBuffer;
  class BufferWriter {
    static withCapacity(size) {
      return new BufferWriter(buffer.Buffer.alloc(size));
    }
    constructor(buffer2, offset = 0) {
      this.buffer = buffer2;
      this.offset = offset;
      typeforce$2(types$4.tuple(types$4.Buffer, types$4.UInt32), [
        buffer2,
        offset
      ]);
    }
    writeUInt8(i) {
      this.offset = this.buffer.writeUInt8(i, this.offset);
    }
    writeInt32(i) {
      this.offset = this.buffer.writeInt32LE(i, this.offset);
    }
    writeUInt32(i) {
      this.offset = this.buffer.writeUInt32LE(i, this.offset);
    }
    writeUInt64(i) {
      this.offset = writeUInt64LE$1(this.buffer, i, this.offset);
    }
    writeVarInt(i) {
      varuint$7.encode(i, this.buffer, this.offset);
      this.offset += varuint$7.encode.bytes;
    }
    writeSlice(slice2) {
      if (this.buffer.length < this.offset + slice2.length) {
        throw new Error("Cannot write slice out of bounds");
      }
      this.offset += slice2.copy(this.buffer, this.offset);
    }
    writeVarSlice(slice2) {
      this.writeVarInt(slice2.length);
      this.writeSlice(slice2);
    }
    writeVector(vector) {
      this.writeVarInt(vector.length);
      vector.forEach((buf) => this.writeVarSlice(buf));
    }
    end() {
      if (this.buffer.length === this.offset) {
        return this.buffer;
      }
      throw new Error(`buffer size ${this.buffer.length}, offset ${this.offset}`);
    }
  }
  bufferutils.BufferWriter = BufferWriter;
  class BufferReader {
    constructor(buffer2, offset = 0) {
      this.buffer = buffer2;
      this.offset = offset;
      typeforce$2(types$4.tuple(types$4.Buffer, types$4.UInt32), [
        buffer2,
        offset
      ]);
    }
    readUInt8() {
      const result = this.buffer.readUInt8(this.offset);
      this.offset++;
      return result;
    }
    readInt32() {
      const result = this.buffer.readInt32LE(this.offset);
      this.offset += 4;
      return result;
    }
    readUInt32() {
      const result = this.buffer.readUInt32LE(this.offset);
      this.offset += 4;
      return result;
    }
    readUInt64() {
      const result = readUInt64LE$1(this.buffer, this.offset);
      this.offset += 8;
      return result;
    }
    readVarInt() {
      const vi = varuint$7.decode(this.buffer, this.offset);
      this.offset += varuint$7.decode.bytes;
      return vi;
    }
    readSlice(n) {
      if (this.buffer.length < this.offset + n) {
        throw new Error("Cannot read slice out of bounds");
      }
      const result = this.buffer.slice(this.offset, this.offset + n);
      this.offset += n;
      return result;
    }
    readVarSlice() {
      return this.readSlice(this.readVarInt());
    }
    readVector() {
      const count = this.readVarInt();
      const vector = [];
      for (let i = 0; i < count; i++)
        vector.push(this.readVarSlice());
      return vector;
    }
  }
  bufferutils.BufferReader = BufferReader;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.tweakKey = exports2.tapTweakHash = exports2.tapleafHash = exports2.findScriptPath = exports2.toHashTree = exports2.rootHashFromPath = exports2.MAX_TAPTREE_DEPTH = exports2.LEAF_VERSION_TAPSCRIPT = void 0;
    const buffer_12 = buffer;
    const ecc_lib_12 = ecc_lib;
    const bcrypto2 = crypto$1;
    const bufferutils_12 = bufferutils;
    const types_12 = types$8;
    exports2.LEAF_VERSION_TAPSCRIPT = 192;
    exports2.MAX_TAPTREE_DEPTH = 128;
    const isHashBranch = (ht) => "left" in ht && "right" in ht;
    function rootHashFromPath(controlBlock, leafHash) {
      if (controlBlock.length < 33)
        throw new TypeError(`The control-block length is too small. Got ${controlBlock.length}, expected min 33.`);
      const m = (controlBlock.length - 33) / 32;
      let kj = leafHash;
      for (let j = 0; j < m; j++) {
        const ej = controlBlock.slice(33 + 32 * j, 65 + 32 * j);
        if (kj.compare(ej) < 0) {
          kj = tapBranchHash(kj, ej);
        } else {
          kj = tapBranchHash(ej, kj);
        }
      }
      return kj;
    }
    exports2.rootHashFromPath = rootHashFromPath;
    function toHashTree(scriptTree) {
      if ((0, types_12.isTapleaf)(scriptTree))
        return {
          hash: tapleafHash(scriptTree)
        };
      const hashes = [
        toHashTree(scriptTree[0]),
        toHashTree(scriptTree[1])
      ];
      hashes.sort((a2, b) => a2.hash.compare(b.hash));
      const [left, right] = hashes;
      return {
        hash: tapBranchHash(left.hash, right.hash),
        left,
        right
      };
    }
    exports2.toHashTree = toHashTree;
    function findScriptPath(node, hash2) {
      if (isHashBranch(node)) {
        const leftPath = findScriptPath(node.left, hash2);
        if (leftPath !== void 0)
          return [
            ...leftPath,
            node.right.hash
          ];
        const rightPath = findScriptPath(node.right, hash2);
        if (rightPath !== void 0)
          return [
            ...rightPath,
            node.left.hash
          ];
      } else if (node.hash.equals(hash2)) {
        return [];
      }
      return void 0;
    }
    exports2.findScriptPath = findScriptPath;
    function tapleafHash(leaf) {
      const version = leaf.version || exports2.LEAF_VERSION_TAPSCRIPT;
      return bcrypto2.taggedHash("TapLeaf", buffer_12.Buffer.concat([
        buffer_12.Buffer.from([
          version
        ]),
        serializeScript(leaf.output)
      ]));
    }
    exports2.tapleafHash = tapleafHash;
    function tapTweakHash(pubKey, h2) {
      return bcrypto2.taggedHash("TapTweak", buffer_12.Buffer.concat(h2 ? [
        pubKey,
        h2
      ] : [
        pubKey
      ]));
    }
    exports2.tapTweakHash = tapTweakHash;
    function tweakKey(pubKey, h2) {
      if (!buffer_12.Buffer.isBuffer(pubKey))
        return null;
      if (pubKey.length !== 32)
        return null;
      if (h2 && h2.length !== 32)
        return null;
      const tweakHash = tapTweakHash(pubKey, h2);
      const res = (0, ecc_lib_12.getEccLib)().xOnlyPointAddTweak(pubKey, tweakHash);
      if (!res || res.xOnlyPubkey === null)
        return null;
      return {
        parity: res.parity,
        x: buffer_12.Buffer.from(res.xOnlyPubkey)
      };
    }
    exports2.tweakKey = tweakKey;
    function tapBranchHash(a2, b) {
      return bcrypto2.taggedHash("TapBranch", buffer_12.Buffer.concat([
        a2,
        b
      ]));
    }
    function serializeScript(s) {
      const varintLen = bufferutils_12.varuint.encodingLength(s.length);
      const buffer2 = buffer_12.Buffer.allocUnsafe(varintLen);
      bufferutils_12.varuint.encode(s.length, buffer2);
      return buffer_12.Buffer.concat([
        buffer2,
        s
      ]);
    }
  })(bip341);
  Object.defineProperty(p2tr$1, "__esModule", {
    value: true
  });
  p2tr$1.p2tr = void 0;
  const buffer_1 = buffer;
  const networks_1$1 = networks$3;
  const bscript$4 = script;
  const types_1$2 = types$8;
  const ecc_lib_1 = ecc_lib;
  const bip341_1$2 = bip341;
  const lazy = lazy$8;
  const bech32_1$1 = dist;
  const OPS = bscript$4.OPS;
  const TAPROOT_WITNESS_VERSION = 1;
  const ANNEX_PREFIX = 80;
  function p2tr(a2, opts) {
    if (!a2.address && !a2.output && !a2.pubkey && !a2.internalPubkey && !(a2.witness && a2.witness.length > 1))
      throw new TypeError("Not enough data");
    opts = Object.assign({
      validate: true
    }, opts || {});
    (0, types_1$2.typeforce)({
      address: types_1$2.typeforce.maybe(types_1$2.typeforce.String),
      input: types_1$2.typeforce.maybe(types_1$2.typeforce.BufferN(0)),
      network: types_1$2.typeforce.maybe(types_1$2.typeforce.Object),
      output: types_1$2.typeforce.maybe(types_1$2.typeforce.BufferN(34)),
      internalPubkey: types_1$2.typeforce.maybe(types_1$2.typeforce.BufferN(32)),
      hash: types_1$2.typeforce.maybe(types_1$2.typeforce.BufferN(32)),
      pubkey: types_1$2.typeforce.maybe(types_1$2.typeforce.BufferN(32)),
      signature: types_1$2.typeforce.maybe(types_1$2.typeforce.BufferN(64)),
      witness: types_1$2.typeforce.maybe(types_1$2.typeforce.arrayOf(types_1$2.typeforce.Buffer)),
      scriptTree: types_1$2.typeforce.maybe(types_1$2.isTaptree),
      redeem: types_1$2.typeforce.maybe({
        output: types_1$2.typeforce.maybe(types_1$2.typeforce.Buffer),
        redeemVersion: types_1$2.typeforce.maybe(types_1$2.typeforce.Number),
        witness: types_1$2.typeforce.maybe(types_1$2.typeforce.arrayOf(types_1$2.typeforce.Buffer))
      }),
      redeemVersion: types_1$2.typeforce.maybe(types_1$2.typeforce.Number)
    }, a2);
    const _address = lazy.value(() => {
      const result = bech32_1$1.bech32m.decode(a2.address);
      const version = result.words.shift();
      const data = bech32_1$1.bech32m.fromWords(result.words);
      return {
        version,
        prefix: result.prefix,
        data: buffer_1.Buffer.from(data)
      };
    });
    const _witness = lazy.value(() => {
      if (!a2.witness || !a2.witness.length)
        return;
      if (a2.witness.length >= 2 && a2.witness[a2.witness.length - 1][0] === ANNEX_PREFIX) {
        return a2.witness.slice(0, -1);
      }
      return a2.witness.slice();
    });
    const _hashTree = lazy.value(() => {
      if (a2.scriptTree)
        return (0, bip341_1$2.toHashTree)(a2.scriptTree);
      if (a2.hash)
        return {
          hash: a2.hash
        };
      return;
    });
    const network = a2.network || networks_1$1.bitcoin;
    const o = {
      name: "p2tr",
      network
    };
    lazy.prop(o, "address", () => {
      if (!o.pubkey)
        return;
      const words = bech32_1$1.bech32m.toWords(o.pubkey);
      words.unshift(TAPROOT_WITNESS_VERSION);
      return bech32_1$1.bech32m.encode(network.bech32, words);
    });
    lazy.prop(o, "hash", () => {
      const hashTree = _hashTree();
      if (hashTree)
        return hashTree.hash;
      const w = _witness();
      if (w && w.length > 1) {
        const controlBlock = w[w.length - 1];
        const leafVersion = controlBlock[0] & types_1$2.TAPLEAF_VERSION_MASK;
        const script2 = w[w.length - 2];
        const leafHash = (0, bip341_1$2.tapleafHash)({
          output: script2,
          version: leafVersion
        });
        return (0, bip341_1$2.rootHashFromPath)(controlBlock, leafHash);
      }
      return null;
    });
    lazy.prop(o, "output", () => {
      if (!o.pubkey)
        return;
      return bscript$4.compile([
        OPS.OP_1,
        o.pubkey
      ]);
    });
    lazy.prop(o, "redeemVersion", () => {
      if (a2.redeemVersion)
        return a2.redeemVersion;
      if (a2.redeem && a2.redeem.redeemVersion !== void 0 && a2.redeem.redeemVersion !== null) {
        return a2.redeem.redeemVersion;
      }
      return bip341_1$2.LEAF_VERSION_TAPSCRIPT;
    });
    lazy.prop(o, "redeem", () => {
      const witness = _witness();
      if (!witness || witness.length < 2)
        return;
      return {
        output: witness[witness.length - 2],
        witness: witness.slice(0, -2),
        redeemVersion: witness[witness.length - 1][0] & types_1$2.TAPLEAF_VERSION_MASK
      };
    });
    lazy.prop(o, "pubkey", () => {
      if (a2.pubkey)
        return a2.pubkey;
      if (a2.output)
        return a2.output.slice(2);
      if (a2.address)
        return _address().data;
      if (o.internalPubkey) {
        const tweakedKey = (0, bip341_1$2.tweakKey)(o.internalPubkey, o.hash);
        if (tweakedKey)
          return tweakedKey.x;
      }
    });
    lazy.prop(o, "internalPubkey", () => {
      if (a2.internalPubkey)
        return a2.internalPubkey;
      const witness = _witness();
      if (witness && witness.length > 1)
        return witness[witness.length - 1].slice(1, 33);
    });
    lazy.prop(o, "signature", () => {
      if (a2.signature)
        return a2.signature;
      const witness = _witness();
      if (!witness || witness.length !== 1)
        return;
      return witness[0];
    });
    lazy.prop(o, "witness", () => {
      if (a2.witness)
        return a2.witness;
      const hashTree = _hashTree();
      if (hashTree && a2.redeem && a2.redeem.output && a2.internalPubkey) {
        const leafHash = (0, bip341_1$2.tapleafHash)({
          output: a2.redeem.output,
          version: o.redeemVersion
        });
        const path = (0, bip341_1$2.findScriptPath)(hashTree, leafHash);
        if (!path)
          return;
        const outputKey = (0, bip341_1$2.tweakKey)(a2.internalPubkey, hashTree.hash);
        if (!outputKey)
          return;
        const controlBock = buffer_1.Buffer.concat([
          buffer_1.Buffer.from([
            o.redeemVersion | outputKey.parity
          ]),
          a2.internalPubkey
        ].concat(path));
        return [
          a2.redeem.output,
          controlBock
        ];
      }
      if (a2.signature)
        return [
          a2.signature
        ];
    });
    if (opts.validate) {
      let pubkey = buffer_1.Buffer.from([]);
      if (a2.address) {
        if (network && network.bech32 !== _address().prefix)
          throw new TypeError("Invalid prefix or Network mismatch");
        if (_address().version !== TAPROOT_WITNESS_VERSION)
          throw new TypeError("Invalid address version");
        if (_address().data.length !== 32)
          throw new TypeError("Invalid address data");
        pubkey = _address().data;
      }
      if (a2.pubkey) {
        if (pubkey.length > 0 && !pubkey.equals(a2.pubkey))
          throw new TypeError("Pubkey mismatch");
        else
          pubkey = a2.pubkey;
      }
      if (a2.output) {
        if (a2.output.length !== 34 || a2.output[0] !== OPS.OP_1 || a2.output[1] !== 32)
          throw new TypeError("Output is invalid");
        if (pubkey.length > 0 && !pubkey.equals(a2.output.slice(2)))
          throw new TypeError("Pubkey mismatch");
        else
          pubkey = a2.output.slice(2);
      }
      if (a2.internalPubkey) {
        const tweakedKey = (0, bip341_1$2.tweakKey)(a2.internalPubkey, o.hash);
        if (pubkey.length > 0 && !pubkey.equals(tweakedKey.x))
          throw new TypeError("Pubkey mismatch");
        else
          pubkey = tweakedKey.x;
      }
      if (pubkey && pubkey.length) {
        if (!(0, ecc_lib_1.getEccLib)().isXOnlyPoint(pubkey))
          throw new TypeError("Invalid pubkey for p2tr");
      }
      const hashTree = _hashTree();
      if (a2.hash && hashTree) {
        if (!a2.hash.equals(hashTree.hash))
          throw new TypeError("Hash mismatch");
      }
      if (a2.redeem && a2.redeem.output && hashTree) {
        const leafHash = (0, bip341_1$2.tapleafHash)({
          output: a2.redeem.output,
          version: o.redeemVersion
        });
        if (!(0, bip341_1$2.findScriptPath)(hashTree, leafHash))
          throw new TypeError("Redeem script not in tree");
      }
      const witness = _witness();
      if (a2.redeem && o.redeem) {
        if (a2.redeem.redeemVersion) {
          if (a2.redeem.redeemVersion !== o.redeem.redeemVersion)
            throw new TypeError("Redeem.redeemVersion and witness mismatch");
        }
        if (a2.redeem.output) {
          if (bscript$4.decompile(a2.redeem.output).length === 0)
            throw new TypeError("Redeem.output is invalid");
          if (o.redeem.output && !a2.redeem.output.equals(o.redeem.output))
            throw new TypeError("Redeem.output and witness mismatch");
        }
        if (a2.redeem.witness) {
          if (o.redeem.witness && !stacksEqual(a2.redeem.witness, o.redeem.witness))
            throw new TypeError("Redeem.witness and witness mismatch");
        }
      }
      if (witness && witness.length) {
        if (witness.length === 1) {
          if (a2.signature && !a2.signature.equals(witness[0]))
            throw new TypeError("Signature mismatch");
        } else {
          const controlBlock = witness[witness.length - 1];
          if (controlBlock.length < 33)
            throw new TypeError(`The control-block length is too small. Got ${controlBlock.length}, expected min 33.`);
          if ((controlBlock.length - 33) % 32 !== 0)
            throw new TypeError(`The control-block length of ${controlBlock.length} is incorrect!`);
          const m = (controlBlock.length - 33) / 32;
          if (m > 128)
            throw new TypeError(`The script path is too long. Got ${m}, expected max 128.`);
          const internalPubkey = controlBlock.slice(1, 33);
          if (a2.internalPubkey && !a2.internalPubkey.equals(internalPubkey))
            throw new TypeError("Internal pubkey mismatch");
          if (!(0, ecc_lib_1.getEccLib)().isXOnlyPoint(internalPubkey))
            throw new TypeError("Invalid internalPubkey for p2tr witness");
          const leafVersion = controlBlock[0] & types_1$2.TAPLEAF_VERSION_MASK;
          const script2 = witness[witness.length - 2];
          const leafHash = (0, bip341_1$2.tapleafHash)({
            output: script2,
            version: leafVersion
          });
          const hash2 = (0, bip341_1$2.rootHashFromPath)(controlBlock, leafHash);
          const outputKey = (0, bip341_1$2.tweakKey)(internalPubkey, hash2);
          if (!outputKey)
            throw new TypeError("Invalid outputKey for p2tr witness");
          if (pubkey.length && !pubkey.equals(outputKey.x))
            throw new TypeError("Pubkey mismatch for p2tr witness");
          if (outputKey.parity !== (controlBlock[0] & 1))
            throw new Error("Incorrect parity");
        }
      }
    }
    return Object.assign(o, a2);
  }
  p2tr$1.p2tr = p2tr;
  function stacksEqual(a2, b) {
    if (a2.length !== b.length)
      return false;
    return a2.every((x, i) => {
      return x.equals(b[i]);
    });
  }
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.p2tr = exports2.p2wsh = exports2.p2wpkh = exports2.p2sh = exports2.p2pkh = exports2.p2pk = exports2.p2ms = exports2.embed = void 0;
    const embed_1 = embed;
    Object.defineProperty(exports2, "embed", {
      enumerable: true,
      get: function() {
        return embed_1.p2data;
      }
    });
    const p2ms_1 = p2ms$1;
    Object.defineProperty(exports2, "p2ms", {
      enumerable: true,
      get: function() {
        return p2ms_1.p2ms;
      }
    });
    const p2pk_1 = p2pk$1;
    Object.defineProperty(exports2, "p2pk", {
      enumerable: true,
      get: function() {
        return p2pk_1.p2pk;
      }
    });
    const p2pkh_1 = p2pkh$1;
    Object.defineProperty(exports2, "p2pkh", {
      enumerable: true,
      get: function() {
        return p2pkh_1.p2pkh;
      }
    });
    const p2sh_1 = p2sh$1;
    Object.defineProperty(exports2, "p2sh", {
      enumerable: true,
      get: function() {
        return p2sh_1.p2sh;
      }
    });
    const p2wpkh_1 = p2wpkh$1;
    Object.defineProperty(exports2, "p2wpkh", {
      enumerable: true,
      get: function() {
        return p2wpkh_1.p2wpkh;
      }
    });
    const p2wsh_1 = p2wsh$1;
    Object.defineProperty(exports2, "p2wsh", {
      enumerable: true,
      get: function() {
        return p2wsh_1.p2wsh;
      }
    });
    const p2tr_1 = p2tr$1;
    Object.defineProperty(exports2, "p2tr", {
      enumerable: true,
      get: function() {
        return p2tr_1.p2tr;
      }
    });
  })(payments$3);
  Object.defineProperty(address, "__esModule", {
    value: true
  });
  address.toOutputScript = address.fromOutputScript = address.toBech32 = address.toBase58Check = address.fromBech32 = address.fromBase58Check = void 0;
  const networks$2 = networks$3;
  const payments$2 = payments$3;
  const bscript$3 = script;
  const types_1$1 = types$8;
  const bech32_1 = dist;
  const bs58check$1 = bs58check$4;
  const FUTURE_SEGWIT_MAX_SIZE = 40;
  const FUTURE_SEGWIT_MIN_SIZE = 2;
  const FUTURE_SEGWIT_MAX_VERSION = 16;
  const FUTURE_SEGWIT_MIN_VERSION = 2;
  const FUTURE_SEGWIT_VERSION_DIFF = 80;
  const FUTURE_SEGWIT_VERSION_WARNING = "WARNING: Sending to a future segwit version address can lead to loss of funds. End users MUST be warned carefully in the GUI and asked if they wish to proceed with caution. Wallets should verify the segwit version from the output of fromBech32, then decide when it is safe to use which version of segwit.";
  function _toFutureSegwitAddress(output, network) {
    const data = output.slice(2);
    if (data.length < FUTURE_SEGWIT_MIN_SIZE || data.length > FUTURE_SEGWIT_MAX_SIZE)
      throw new TypeError("Invalid program length for segwit address");
    const version = output[0] - FUTURE_SEGWIT_VERSION_DIFF;
    if (version < FUTURE_SEGWIT_MIN_VERSION || version > FUTURE_SEGWIT_MAX_VERSION)
      throw new TypeError("Invalid version for segwit address");
    if (output[1] !== data.length)
      throw new TypeError("Invalid script for segwit address");
    console.warn(FUTURE_SEGWIT_VERSION_WARNING);
    return toBech32(data, version, network.bech32);
  }
  function fromBase58Check(address2) {
    const payload = bs58check$1.decode(address2);
    if (payload.length < 21)
      throw new TypeError(address2 + " is too short");
    if (payload.length > 21)
      throw new TypeError(address2 + " is too long");
    const version = payload.readUInt8(0);
    const hash2 = payload.slice(1);
    return {
      version,
      hash: hash2
    };
  }
  address.fromBase58Check = fromBase58Check;
  function fromBech32(address2) {
    let result;
    let version;
    try {
      result = bech32_1.bech32.decode(address2);
    } catch (e) {
    }
    if (result) {
      version = result.words[0];
      if (version !== 0)
        throw new TypeError(address2 + " uses wrong encoding");
    } else {
      result = bech32_1.bech32m.decode(address2);
      version = result.words[0];
      if (version === 0)
        throw new TypeError(address2 + " uses wrong encoding");
    }
    const data = bech32_1.bech32.fromWords(result.words.slice(1));
    return {
      version,
      prefix: result.prefix,
      data: buffer.Buffer.from(data)
    };
  }
  address.fromBech32 = fromBech32;
  function toBase58Check(hash2, version) {
    (0, types_1$1.typeforce)((0, types_1$1.tuple)(types_1$1.Hash160bit, types_1$1.UInt8), arguments);
    const payload = buffer.Buffer.allocUnsafe(21);
    payload.writeUInt8(version, 0);
    hash2.copy(payload, 1);
    return bs58check$1.encode(payload);
  }
  address.toBase58Check = toBase58Check;
  function toBech32(data, version, prefix) {
    const words = bech32_1.bech32.toWords(data);
    words.unshift(version);
    return version === 0 ? bech32_1.bech32.encode(prefix, words) : bech32_1.bech32m.encode(prefix, words);
  }
  address.toBech32 = toBech32;
  function fromOutputScript(output, network) {
    network = network || networks$2.bitcoin;
    try {
      return payments$2.p2pkh({
        output,
        network
      }).address;
    } catch (e) {
    }
    try {
      return payments$2.p2sh({
        output,
        network
      }).address;
    } catch (e) {
    }
    try {
      return payments$2.p2wpkh({
        output,
        network
      }).address;
    } catch (e) {
    }
    try {
      return payments$2.p2wsh({
        output,
        network
      }).address;
    } catch (e) {
    }
    try {
      return payments$2.p2tr({
        output,
        network
      }).address;
    } catch (e) {
    }
    try {
      return _toFutureSegwitAddress(output, network);
    } catch (e) {
    }
    throw new Error(bscript$3.toASM(output) + " has no matching Address");
  }
  address.fromOutputScript = fromOutputScript;
  function toOutputScript(address2, network) {
    network = network || networks$2.bitcoin;
    let decodeBase58;
    let decodeBech32;
    try {
      decodeBase58 = fromBase58Check(address2);
    } catch (e) {
    }
    if (decodeBase58) {
      if (decodeBase58.version === network.pubKeyHash)
        return payments$2.p2pkh({
          hash: decodeBase58.hash
        }).output;
      if (decodeBase58.version === network.scriptHash)
        return payments$2.p2sh({
          hash: decodeBase58.hash
        }).output;
    } else {
      try {
        decodeBech32 = fromBech32(address2);
      } catch (e) {
      }
      if (decodeBech32) {
        if (decodeBech32.prefix !== network.bech32)
          throw new Error(address2 + " has an invalid prefix");
        if (decodeBech32.version === 0) {
          if (decodeBech32.data.length === 20)
            return payments$2.p2wpkh({
              hash: decodeBech32.data
            }).output;
          if (decodeBech32.data.length === 32)
            return payments$2.p2wsh({
              hash: decodeBech32.data
            }).output;
        } else if (decodeBech32.version === 1) {
          if (decodeBech32.data.length === 32)
            return payments$2.p2tr({
              pubkey: decodeBech32.data
            }).output;
        } else if (decodeBech32.version >= FUTURE_SEGWIT_MIN_VERSION && decodeBech32.version <= FUTURE_SEGWIT_MAX_VERSION && decodeBech32.data.length >= FUTURE_SEGWIT_MIN_SIZE && decodeBech32.data.length <= FUTURE_SEGWIT_MAX_SIZE) {
          console.warn(FUTURE_SEGWIT_VERSION_WARNING);
          return bscript$3.compile([
            decodeBech32.version + FUTURE_SEGWIT_VERSION_DIFF,
            decodeBech32.data
          ]);
        }
      }
    }
    throw new Error(address2 + " has no matching Script");
  }
  address.toOutputScript = toOutputScript;
  var block = {};
  var merkle = {};
  Object.defineProperty(merkle, "__esModule", {
    value: true
  });
  merkle.fastMerkleRoot = void 0;
  function fastMerkleRoot(values, digestFn) {
    if (!Array.isArray(values))
      throw TypeError("Expected values Array");
    if (typeof digestFn !== "function")
      throw TypeError("Expected digest Function");
    let length = values.length;
    const results = values.concat();
    while (length > 1) {
      let j = 0;
      for (let i = 0; i < length; i += 2, ++j) {
        const left = results[i];
        const right = i + 1 === length ? left : results[i + 1];
        const data = buffer.Buffer.concat([
          left,
          right
        ]);
        results[j] = digestFn(data);
      }
      length = j;
    }
    return results[0];
  }
  merkle.fastMerkleRoot = fastMerkleRoot;
  var transaction = {};
  Object.defineProperty(transaction, "__esModule", {
    value: true
  });
  transaction.Transaction = void 0;
  const bufferutils_1$2 = bufferutils;
  const bcrypto$1 = crypto$1;
  const bscript$2 = script;
  const script_1 = script;
  const types$3 = types$8;
  const { typeforce: typeforce$1 } = types$3;
  function varSliceSize(someScript) {
    const length = someScript.length;
    return bufferutils_1$2.varuint.encodingLength(length) + length;
  }
  function vectorSize(someVector) {
    const length = someVector.length;
    return bufferutils_1$2.varuint.encodingLength(length) + someVector.reduce((sum, witness) => {
      return sum + varSliceSize(witness);
    }, 0);
  }
  const EMPTY_BUFFER = buffer.Buffer.allocUnsafe(0);
  const EMPTY_WITNESS = [];
  const ZERO = buffer.Buffer.from("0000000000000000000000000000000000000000000000000000000000000000", "hex");
  const ONE = buffer.Buffer.from("0000000000000000000000000000000000000000000000000000000000000001", "hex");
  const VALUE_UINT64_MAX = buffer.Buffer.from("ffffffffffffffff", "hex");
  const BLANK_OUTPUT = {
    script: EMPTY_BUFFER,
    valueBuffer: VALUE_UINT64_MAX
  };
  function isOutput(out) {
    return out.value !== void 0;
  }
  class Transaction {
    constructor() {
      this.version = 1;
      this.locktime = 0;
      this.ins = [];
      this.outs = [];
    }
    static fromBuffer(buffer2, _NO_STRICT) {
      const bufferReader = new bufferutils_1$2.BufferReader(buffer2);
      const tx = new Transaction();
      tx.version = bufferReader.readInt32();
      const marker = bufferReader.readUInt8();
      const flag = bufferReader.readUInt8();
      let hasWitnesses = false;
      if (marker === Transaction.ADVANCED_TRANSACTION_MARKER && flag === Transaction.ADVANCED_TRANSACTION_FLAG) {
        hasWitnesses = true;
      } else {
        bufferReader.offset -= 2;
      }
      const vinLen = bufferReader.readVarInt();
      for (let i = 0; i < vinLen; ++i) {
        tx.ins.push({
          hash: bufferReader.readSlice(32),
          index: bufferReader.readUInt32(),
          script: bufferReader.readVarSlice(),
          sequence: bufferReader.readUInt32(),
          witness: EMPTY_WITNESS
        });
      }
      const voutLen = bufferReader.readVarInt();
      for (let i = 0; i < voutLen; ++i) {
        tx.outs.push({
          value: bufferReader.readUInt64(),
          script: bufferReader.readVarSlice()
        });
      }
      if (hasWitnesses) {
        for (let i = 0; i < vinLen; ++i) {
          tx.ins[i].witness = bufferReader.readVector();
        }
        if (!tx.hasWitnesses())
          throw new Error("Transaction has superfluous witness data");
      }
      tx.locktime = bufferReader.readUInt32();
      if (_NO_STRICT)
        return tx;
      if (bufferReader.offset !== buffer2.length)
        throw new Error("Transaction has unexpected data");
      return tx;
    }
    static fromHex(hex) {
      return Transaction.fromBuffer(buffer.Buffer.from(hex, "hex"), false);
    }
    static isCoinbaseHash(buffer2) {
      typeforce$1(types$3.Hash256bit, buffer2);
      for (let i = 0; i < 32; ++i) {
        if (buffer2[i] !== 0)
          return false;
      }
      return true;
    }
    isCoinbase() {
      return this.ins.length === 1 && Transaction.isCoinbaseHash(this.ins[0].hash);
    }
    addInput(hash2, index, sequence, scriptSig) {
      typeforce$1(types$3.tuple(types$3.Hash256bit, types$3.UInt32, types$3.maybe(types$3.UInt32), types$3.maybe(types$3.Buffer)), arguments);
      if (types$3.Null(sequence)) {
        sequence = Transaction.DEFAULT_SEQUENCE;
      }
      return this.ins.push({
        hash: hash2,
        index,
        script: scriptSig || EMPTY_BUFFER,
        sequence,
        witness: EMPTY_WITNESS
      }) - 1;
    }
    addOutput(scriptPubKey, value2) {
      typeforce$1(types$3.tuple(types$3.Buffer, types$3.Satoshi), arguments);
      return this.outs.push({
        script: scriptPubKey,
        value: value2
      }) - 1;
    }
    hasWitnesses() {
      return this.ins.some((x) => {
        return x.witness.length !== 0;
      });
    }
    weight() {
      const base2 = this.byteLength(false);
      const total = this.byteLength(true);
      return base2 * 3 + total;
    }
    virtualSize() {
      return Math.ceil(this.weight() / 4);
    }
    byteLength(_ALLOW_WITNESS = true) {
      const hasWitnesses = _ALLOW_WITNESS && this.hasWitnesses();
      return (hasWitnesses ? 10 : 8) + bufferutils_1$2.varuint.encodingLength(this.ins.length) + bufferutils_1$2.varuint.encodingLength(this.outs.length) + this.ins.reduce((sum, input) => {
        return sum + 40 + varSliceSize(input.script);
      }, 0) + this.outs.reduce((sum, output) => {
        return sum + 8 + varSliceSize(output.script);
      }, 0) + (hasWitnesses ? this.ins.reduce((sum, input) => {
        return sum + vectorSize(input.witness);
      }, 0) : 0);
    }
    clone() {
      const newTx = new Transaction();
      newTx.version = this.version;
      newTx.locktime = this.locktime;
      newTx.ins = this.ins.map((txIn) => {
        return {
          hash: txIn.hash,
          index: txIn.index,
          script: txIn.script,
          sequence: txIn.sequence,
          witness: txIn.witness
        };
      });
      newTx.outs = this.outs.map((txOut) => {
        return {
          script: txOut.script,
          value: txOut.value
        };
      });
      return newTx;
    }
    hashForSignature(inIndex, prevOutScript, hashType) {
      typeforce$1(types$3.tuple(types$3.UInt32, types$3.Buffer, types$3.Number), arguments);
      if (inIndex >= this.ins.length)
        return ONE;
      const ourScript = bscript$2.compile(bscript$2.decompile(prevOutScript).filter((x) => {
        return x !== script_1.OPS.OP_CODESEPARATOR;
      }));
      const txTmp = this.clone();
      if ((hashType & 31) === Transaction.SIGHASH_NONE) {
        txTmp.outs = [];
        txTmp.ins.forEach((input, i) => {
          if (i === inIndex)
            return;
          input.sequence = 0;
        });
      } else if ((hashType & 31) === Transaction.SIGHASH_SINGLE) {
        if (inIndex >= this.outs.length)
          return ONE;
        txTmp.outs.length = inIndex + 1;
        for (let i = 0; i < inIndex; i++) {
          txTmp.outs[i] = BLANK_OUTPUT;
        }
        txTmp.ins.forEach((input, y) => {
          if (y === inIndex)
            return;
          input.sequence = 0;
        });
      }
      if (hashType & Transaction.SIGHASH_ANYONECANPAY) {
        txTmp.ins = [
          txTmp.ins[inIndex]
        ];
        txTmp.ins[0].script = ourScript;
      } else {
        txTmp.ins.forEach((input) => {
          input.script = EMPTY_BUFFER;
        });
        txTmp.ins[inIndex].script = ourScript;
      }
      const buffer$1 = buffer.Buffer.allocUnsafe(txTmp.byteLength(false) + 4);
      buffer$1.writeInt32LE(hashType, buffer$1.length - 4);
      txTmp.__toBuffer(buffer$1, 0, false);
      return bcrypto$1.hash256(buffer$1);
    }
    hashForWitnessV1(inIndex, prevOutScripts, values, hashType, leafHash, annex) {
      typeforce$1(types$3.tuple(types$3.UInt32, typeforce$1.arrayOf(types$3.Buffer), typeforce$1.arrayOf(types$3.Satoshi), types$3.UInt32), arguments);
      if (values.length !== this.ins.length || prevOutScripts.length !== this.ins.length) {
        throw new Error("Must supply prevout script and value for all inputs");
      }
      const outputType = hashType === Transaction.SIGHASH_DEFAULT ? Transaction.SIGHASH_ALL : hashType & Transaction.SIGHASH_OUTPUT_MASK;
      const inputType = hashType & Transaction.SIGHASH_INPUT_MASK;
      const isAnyoneCanPay = inputType === Transaction.SIGHASH_ANYONECANPAY;
      const isNone = outputType === Transaction.SIGHASH_NONE;
      const isSingle = outputType === Transaction.SIGHASH_SINGLE;
      let hashPrevouts = EMPTY_BUFFER;
      let hashAmounts = EMPTY_BUFFER;
      let hashScriptPubKeys = EMPTY_BUFFER;
      let hashSequences = EMPTY_BUFFER;
      let hashOutputs = EMPTY_BUFFER;
      if (!isAnyoneCanPay) {
        let bufferWriter = bufferutils_1$2.BufferWriter.withCapacity(36 * this.ins.length);
        this.ins.forEach((txIn) => {
          bufferWriter.writeSlice(txIn.hash);
          bufferWriter.writeUInt32(txIn.index);
        });
        hashPrevouts = bcrypto$1.sha256(bufferWriter.end());
        bufferWriter = bufferutils_1$2.BufferWriter.withCapacity(8 * this.ins.length);
        values.forEach((value2) => bufferWriter.writeUInt64(value2));
        hashAmounts = bcrypto$1.sha256(bufferWriter.end());
        bufferWriter = bufferutils_1$2.BufferWriter.withCapacity(prevOutScripts.map(varSliceSize).reduce((a2, b) => a2 + b));
        prevOutScripts.forEach((prevOutScript) => bufferWriter.writeVarSlice(prevOutScript));
        hashScriptPubKeys = bcrypto$1.sha256(bufferWriter.end());
        bufferWriter = bufferutils_1$2.BufferWriter.withCapacity(4 * this.ins.length);
        this.ins.forEach((txIn) => bufferWriter.writeUInt32(txIn.sequence));
        hashSequences = bcrypto$1.sha256(bufferWriter.end());
      }
      if (!(isNone || isSingle)) {
        const txOutsSize = this.outs.map((output) => 8 + varSliceSize(output.script)).reduce((a2, b) => a2 + b);
        const bufferWriter = bufferutils_1$2.BufferWriter.withCapacity(txOutsSize);
        this.outs.forEach((out) => {
          bufferWriter.writeUInt64(out.value);
          bufferWriter.writeVarSlice(out.script);
        });
        hashOutputs = bcrypto$1.sha256(bufferWriter.end());
      } else if (isSingle && inIndex < this.outs.length) {
        const output = this.outs[inIndex];
        const bufferWriter = bufferutils_1$2.BufferWriter.withCapacity(8 + varSliceSize(output.script));
        bufferWriter.writeUInt64(output.value);
        bufferWriter.writeVarSlice(output.script);
        hashOutputs = bcrypto$1.sha256(bufferWriter.end());
      }
      const spendType = (leafHash ? 2 : 0) + (annex ? 1 : 0);
      const sigMsgSize = 174 - (isAnyoneCanPay ? 49 : 0) - (isNone ? 32 : 0) + (annex ? 32 : 0) + (leafHash ? 37 : 0);
      const sigMsgWriter = bufferutils_1$2.BufferWriter.withCapacity(sigMsgSize);
      sigMsgWriter.writeUInt8(hashType);
      sigMsgWriter.writeInt32(this.version);
      sigMsgWriter.writeUInt32(this.locktime);
      sigMsgWriter.writeSlice(hashPrevouts);
      sigMsgWriter.writeSlice(hashAmounts);
      sigMsgWriter.writeSlice(hashScriptPubKeys);
      sigMsgWriter.writeSlice(hashSequences);
      if (!(isNone || isSingle)) {
        sigMsgWriter.writeSlice(hashOutputs);
      }
      sigMsgWriter.writeUInt8(spendType);
      if (isAnyoneCanPay) {
        const input = this.ins[inIndex];
        sigMsgWriter.writeSlice(input.hash);
        sigMsgWriter.writeUInt32(input.index);
        sigMsgWriter.writeUInt64(values[inIndex]);
        sigMsgWriter.writeVarSlice(prevOutScripts[inIndex]);
        sigMsgWriter.writeUInt32(input.sequence);
      } else {
        sigMsgWriter.writeUInt32(inIndex);
      }
      if (annex) {
        const bufferWriter = bufferutils_1$2.BufferWriter.withCapacity(varSliceSize(annex));
        bufferWriter.writeVarSlice(annex);
        sigMsgWriter.writeSlice(bcrypto$1.sha256(bufferWriter.end()));
      }
      if (isSingle) {
        sigMsgWriter.writeSlice(hashOutputs);
      }
      if (leafHash) {
        sigMsgWriter.writeSlice(leafHash);
        sigMsgWriter.writeUInt8(0);
        sigMsgWriter.writeUInt32(4294967295);
      }
      return bcrypto$1.taggedHash("TapSighash", buffer.Buffer.concat([
        buffer.Buffer.of(0),
        sigMsgWriter.end()
      ]));
    }
    hashForWitnessV0(inIndex, prevOutScript, value2, hashType) {
      typeforce$1(types$3.tuple(types$3.UInt32, types$3.Buffer, types$3.Satoshi, types$3.UInt32), arguments);
      let tbuffer = buffer.Buffer.from([]);
      let bufferWriter;
      let hashOutputs = ZERO;
      let hashPrevouts = ZERO;
      let hashSequence = ZERO;
      if (!(hashType & Transaction.SIGHASH_ANYONECANPAY)) {
        tbuffer = buffer.Buffer.allocUnsafe(36 * this.ins.length);
        bufferWriter = new bufferutils_1$2.BufferWriter(tbuffer, 0);
        this.ins.forEach((txIn) => {
          bufferWriter.writeSlice(txIn.hash);
          bufferWriter.writeUInt32(txIn.index);
        });
        hashPrevouts = bcrypto$1.hash256(tbuffer);
      }
      if (!(hashType & Transaction.SIGHASH_ANYONECANPAY) && (hashType & 31) !== Transaction.SIGHASH_SINGLE && (hashType & 31) !== Transaction.SIGHASH_NONE) {
        tbuffer = buffer.Buffer.allocUnsafe(4 * this.ins.length);
        bufferWriter = new bufferutils_1$2.BufferWriter(tbuffer, 0);
        this.ins.forEach((txIn) => {
          bufferWriter.writeUInt32(txIn.sequence);
        });
        hashSequence = bcrypto$1.hash256(tbuffer);
      }
      if ((hashType & 31) !== Transaction.SIGHASH_SINGLE && (hashType & 31) !== Transaction.SIGHASH_NONE) {
        const txOutsSize = this.outs.reduce((sum, output) => {
          return sum + 8 + varSliceSize(output.script);
        }, 0);
        tbuffer = buffer.Buffer.allocUnsafe(txOutsSize);
        bufferWriter = new bufferutils_1$2.BufferWriter(tbuffer, 0);
        this.outs.forEach((out) => {
          bufferWriter.writeUInt64(out.value);
          bufferWriter.writeVarSlice(out.script);
        });
        hashOutputs = bcrypto$1.hash256(tbuffer);
      } else if ((hashType & 31) === Transaction.SIGHASH_SINGLE && inIndex < this.outs.length) {
        const output = this.outs[inIndex];
        tbuffer = buffer.Buffer.allocUnsafe(8 + varSliceSize(output.script));
        bufferWriter = new bufferutils_1$2.BufferWriter(tbuffer, 0);
        bufferWriter.writeUInt64(output.value);
        bufferWriter.writeVarSlice(output.script);
        hashOutputs = bcrypto$1.hash256(tbuffer);
      }
      tbuffer = buffer.Buffer.allocUnsafe(156 + varSliceSize(prevOutScript));
      bufferWriter = new bufferutils_1$2.BufferWriter(tbuffer, 0);
      const input = this.ins[inIndex];
      bufferWriter.writeInt32(this.version);
      bufferWriter.writeSlice(hashPrevouts);
      bufferWriter.writeSlice(hashSequence);
      bufferWriter.writeSlice(input.hash);
      bufferWriter.writeUInt32(input.index);
      bufferWriter.writeVarSlice(prevOutScript);
      bufferWriter.writeUInt64(value2);
      bufferWriter.writeUInt32(input.sequence);
      bufferWriter.writeSlice(hashOutputs);
      bufferWriter.writeUInt32(this.locktime);
      bufferWriter.writeUInt32(hashType);
      return bcrypto$1.hash256(tbuffer);
    }
    getHash(forWitness) {
      if (forWitness && this.isCoinbase())
        return buffer.Buffer.alloc(32, 0);
      return bcrypto$1.hash256(this.__toBuffer(void 0, void 0, forWitness));
    }
    getId() {
      return (0, bufferutils_1$2.reverseBuffer)(this.getHash(false)).toString("hex");
    }
    toBuffer(buffer2, initialOffset) {
      return this.__toBuffer(buffer2, initialOffset, true);
    }
    toHex() {
      return this.toBuffer(void 0, void 0).toString("hex");
    }
    setInputScript(index, scriptSig) {
      typeforce$1(types$3.tuple(types$3.Number, types$3.Buffer), arguments);
      this.ins[index].script = scriptSig;
    }
    setWitness(index, witness) {
      typeforce$1(types$3.tuple(types$3.Number, [
        types$3.Buffer
      ]), arguments);
      this.ins[index].witness = witness;
    }
    __toBuffer(buffer$1, initialOffset, _ALLOW_WITNESS = false) {
      if (!buffer$1)
        buffer$1 = buffer.Buffer.allocUnsafe(this.byteLength(_ALLOW_WITNESS));
      const bufferWriter = new bufferutils_1$2.BufferWriter(buffer$1, initialOffset || 0);
      bufferWriter.writeInt32(this.version);
      const hasWitnesses = _ALLOW_WITNESS && this.hasWitnesses();
      if (hasWitnesses) {
        bufferWriter.writeUInt8(Transaction.ADVANCED_TRANSACTION_MARKER);
        bufferWriter.writeUInt8(Transaction.ADVANCED_TRANSACTION_FLAG);
      }
      bufferWriter.writeVarInt(this.ins.length);
      this.ins.forEach((txIn) => {
        bufferWriter.writeSlice(txIn.hash);
        bufferWriter.writeUInt32(txIn.index);
        bufferWriter.writeVarSlice(txIn.script);
        bufferWriter.writeUInt32(txIn.sequence);
      });
      bufferWriter.writeVarInt(this.outs.length);
      this.outs.forEach((txOut) => {
        if (isOutput(txOut)) {
          bufferWriter.writeUInt64(txOut.value);
        } else {
          bufferWriter.writeSlice(txOut.valueBuffer);
        }
        bufferWriter.writeVarSlice(txOut.script);
      });
      if (hasWitnesses) {
        this.ins.forEach((input) => {
          bufferWriter.writeVector(input.witness);
        });
      }
      bufferWriter.writeUInt32(this.locktime);
      if (initialOffset !== void 0)
        return buffer$1.slice(initialOffset, bufferWriter.offset);
      return buffer$1;
    }
  }
  transaction.Transaction = Transaction;
  Transaction.DEFAULT_SEQUENCE = 4294967295;
  Transaction.SIGHASH_DEFAULT = 0;
  Transaction.SIGHASH_ALL = 1;
  Transaction.SIGHASH_NONE = 2;
  Transaction.SIGHASH_SINGLE = 3;
  Transaction.SIGHASH_ANYONECANPAY = 128;
  Transaction.SIGHASH_OUTPUT_MASK = 3;
  Transaction.SIGHASH_INPUT_MASK = 128;
  Transaction.ADVANCED_TRANSACTION_MARKER = 0;
  Transaction.ADVANCED_TRANSACTION_FLAG = 1;
  Object.defineProperty(block, "__esModule", {
    value: true
  });
  block.Block = void 0;
  const bufferutils_1$1 = bufferutils;
  const bcrypto = crypto$1;
  const merkle_1 = merkle;
  const transaction_1$3 = transaction;
  const types$2 = types$8;
  const { typeforce } = types$2;
  const errorMerkleNoTxes = new TypeError("Cannot compute merkle root for zero transactions");
  const errorWitnessNotSegwit = new TypeError("Cannot compute witness commit for non-segwit block");
  class Block {
    constructor() {
      this.version = 1;
      this.prevHash = void 0;
      this.merkleRoot = void 0;
      this.timestamp = 0;
      this.witnessCommit = void 0;
      this.bits = 0;
      this.nonce = 0;
      this.transactions = void 0;
    }
    static fromBuffer(buffer2) {
      if (buffer2.length < 80)
        throw new Error("Buffer too small (< 80 bytes)");
      const bufferReader = new bufferutils_1$1.BufferReader(buffer2);
      const block2 = new Block();
      block2.version = bufferReader.readInt32();
      block2.prevHash = bufferReader.readSlice(32);
      block2.merkleRoot = bufferReader.readSlice(32);
      block2.timestamp = bufferReader.readUInt32();
      block2.bits = bufferReader.readUInt32();
      block2.nonce = bufferReader.readUInt32();
      if (buffer2.length === 80)
        return block2;
      const readTransaction = () => {
        const tx = transaction_1$3.Transaction.fromBuffer(bufferReader.buffer.slice(bufferReader.offset), true);
        bufferReader.offset += tx.byteLength();
        return tx;
      };
      const nTransactions = bufferReader.readVarInt();
      block2.transactions = [];
      for (let i = 0; i < nTransactions; ++i) {
        const tx = readTransaction();
        block2.transactions.push(tx);
      }
      const witnessCommit = block2.getWitnessCommit();
      if (witnessCommit)
        block2.witnessCommit = witnessCommit;
      return block2;
    }
    static fromHex(hex) {
      return Block.fromBuffer(buffer.Buffer.from(hex, "hex"));
    }
    static calculateTarget(bits) {
      const exponent = ((bits & 4278190080) >> 24) - 3;
      const mantissa = bits & 8388607;
      const target = buffer.Buffer.alloc(32, 0);
      target.writeUIntBE(mantissa, 29 - exponent, 3);
      return target;
    }
    static calculateMerkleRoot(transactions, forWitness) {
      typeforce([
        {
          getHash: types$2.Function
        }
      ], transactions);
      if (transactions.length === 0)
        throw errorMerkleNoTxes;
      if (forWitness && !txesHaveWitnessCommit(transactions))
        throw errorWitnessNotSegwit;
      const hashes = transactions.map((transaction2) => transaction2.getHash(forWitness));
      const rootHash = (0, merkle_1.fastMerkleRoot)(hashes, bcrypto.hash256);
      return forWitness ? bcrypto.hash256(buffer.Buffer.concat([
        rootHash,
        transactions[0].ins[0].witness[0]
      ])) : rootHash;
    }
    getWitnessCommit() {
      if (!txesHaveWitnessCommit(this.transactions))
        return null;
      const witnessCommits = this.transactions[0].outs.filter((out) => out.script.slice(0, 6).equals(buffer.Buffer.from("6a24aa21a9ed", "hex"))).map((out) => out.script.slice(6, 38));
      if (witnessCommits.length === 0)
        return null;
      const result = witnessCommits[witnessCommits.length - 1];
      if (!(result instanceof buffer.Buffer && result.length === 32))
        return null;
      return result;
    }
    hasWitnessCommit() {
      if (this.witnessCommit instanceof buffer.Buffer && this.witnessCommit.length === 32)
        return true;
      if (this.getWitnessCommit() !== null)
        return true;
      return false;
    }
    hasWitness() {
      return anyTxHasWitness(this.transactions);
    }
    weight() {
      const base2 = this.byteLength(false, false);
      const total = this.byteLength(false, true);
      return base2 * 3 + total;
    }
    byteLength(headersOnly, allowWitness = true) {
      if (headersOnly || !this.transactions)
        return 80;
      return 80 + bufferutils_1$1.varuint.encodingLength(this.transactions.length) + this.transactions.reduce((a2, x) => a2 + x.byteLength(allowWitness), 0);
    }
    getHash() {
      return bcrypto.hash256(this.toBuffer(true));
    }
    getId() {
      return (0, bufferutils_1$1.reverseBuffer)(this.getHash()).toString("hex");
    }
    getUTCDate() {
      const date = new Date(0);
      date.setUTCSeconds(this.timestamp);
      return date;
    }
    toBuffer(headersOnly) {
      const buffer$1 = buffer.Buffer.allocUnsafe(this.byteLength(headersOnly));
      const bufferWriter = new bufferutils_1$1.BufferWriter(buffer$1);
      bufferWriter.writeInt32(this.version);
      bufferWriter.writeSlice(this.prevHash);
      bufferWriter.writeSlice(this.merkleRoot);
      bufferWriter.writeUInt32(this.timestamp);
      bufferWriter.writeUInt32(this.bits);
      bufferWriter.writeUInt32(this.nonce);
      if (headersOnly || !this.transactions)
        return buffer$1;
      bufferutils_1$1.varuint.encode(this.transactions.length, buffer$1, bufferWriter.offset);
      bufferWriter.offset += bufferutils_1$1.varuint.encode.bytes;
      this.transactions.forEach((tx) => {
        const txSize = tx.byteLength();
        tx.toBuffer(buffer$1, bufferWriter.offset);
        bufferWriter.offset += txSize;
      });
      return buffer$1;
    }
    toHex(headersOnly) {
      return this.toBuffer(headersOnly).toString("hex");
    }
    checkTxRoots() {
      const hasWitnessCommit = this.hasWitnessCommit();
      if (!hasWitnessCommit && this.hasWitness())
        return false;
      return this.__checkMerkleRoot() && (hasWitnessCommit ? this.__checkWitnessCommit() : true);
    }
    checkProofOfWork() {
      const hash2 = (0, bufferutils_1$1.reverseBuffer)(this.getHash());
      const target = Block.calculateTarget(this.bits);
      return hash2.compare(target) <= 0;
    }
    __checkMerkleRoot() {
      if (!this.transactions)
        throw errorMerkleNoTxes;
      const actualMerkleRoot = Block.calculateMerkleRoot(this.transactions);
      return this.merkleRoot.compare(actualMerkleRoot) === 0;
    }
    __checkWitnessCommit() {
      if (!this.transactions)
        throw errorMerkleNoTxes;
      if (!this.hasWitnessCommit())
        throw errorWitnessNotSegwit;
      const actualWitnessCommit = Block.calculateMerkleRoot(this.transactions, true);
      return this.witnessCommit.compare(actualWitnessCommit) === 0;
    }
  }
  block.Block = Block;
  function txesHaveWitnessCommit(transactions) {
    return transactions instanceof Array && transactions[0] && transactions[0].ins && transactions[0].ins instanceof Array && transactions[0].ins[0] && transactions[0].ins[0].witness && transactions[0].ins[0].witness instanceof Array && transactions[0].ins[0].witness.length > 0;
  }
  function anyTxHasWitness(transactions) {
    return transactions instanceof Array && transactions.some((tx) => typeof tx === "object" && tx.ins instanceof Array && tx.ins.some((input) => typeof input === "object" && input.witness instanceof Array && input.witness.length > 0));
  }
  var psbt$1 = {};
  var psbt = {};
  var combiner = {};
  var parser = {};
  var fromBuffer = {};
  var converter = {};
  var typeFields = {};
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    (function(GlobalTypes) {
      GlobalTypes[GlobalTypes["UNSIGNED_TX"] = 0] = "UNSIGNED_TX";
      GlobalTypes[GlobalTypes["GLOBAL_XPUB"] = 1] = "GLOBAL_XPUB";
    })(exports2.GlobalTypes || (exports2.GlobalTypes = {}));
    exports2.GLOBAL_TYPE_NAMES = [
      "unsignedTx",
      "globalXpub"
    ];
    (function(InputTypes) {
      InputTypes[InputTypes["NON_WITNESS_UTXO"] = 0] = "NON_WITNESS_UTXO";
      InputTypes[InputTypes["WITNESS_UTXO"] = 1] = "WITNESS_UTXO";
      InputTypes[InputTypes["PARTIAL_SIG"] = 2] = "PARTIAL_SIG";
      InputTypes[InputTypes["SIGHASH_TYPE"] = 3] = "SIGHASH_TYPE";
      InputTypes[InputTypes["REDEEM_SCRIPT"] = 4] = "REDEEM_SCRIPT";
      InputTypes[InputTypes["WITNESS_SCRIPT"] = 5] = "WITNESS_SCRIPT";
      InputTypes[InputTypes["BIP32_DERIVATION"] = 6] = "BIP32_DERIVATION";
      InputTypes[InputTypes["FINAL_SCRIPTSIG"] = 7] = "FINAL_SCRIPTSIG";
      InputTypes[InputTypes["FINAL_SCRIPTWITNESS"] = 8] = "FINAL_SCRIPTWITNESS";
      InputTypes[InputTypes["POR_COMMITMENT"] = 9] = "POR_COMMITMENT";
      InputTypes[InputTypes["TAP_KEY_SIG"] = 19] = "TAP_KEY_SIG";
      InputTypes[InputTypes["TAP_SCRIPT_SIG"] = 20] = "TAP_SCRIPT_SIG";
      InputTypes[InputTypes["TAP_LEAF_SCRIPT"] = 21] = "TAP_LEAF_SCRIPT";
      InputTypes[InputTypes["TAP_BIP32_DERIVATION"] = 22] = "TAP_BIP32_DERIVATION";
      InputTypes[InputTypes["TAP_INTERNAL_KEY"] = 23] = "TAP_INTERNAL_KEY";
      InputTypes[InputTypes["TAP_MERKLE_ROOT"] = 24] = "TAP_MERKLE_ROOT";
    })(exports2.InputTypes || (exports2.InputTypes = {}));
    exports2.INPUT_TYPE_NAMES = [
      "nonWitnessUtxo",
      "witnessUtxo",
      "partialSig",
      "sighashType",
      "redeemScript",
      "witnessScript",
      "bip32Derivation",
      "finalScriptSig",
      "finalScriptWitness",
      "porCommitment",
      "tapKeySig",
      "tapScriptSig",
      "tapLeafScript",
      "tapBip32Derivation",
      "tapInternalKey",
      "tapMerkleRoot"
    ];
    (function(OutputTypes) {
      OutputTypes[OutputTypes["REDEEM_SCRIPT"] = 0] = "REDEEM_SCRIPT";
      OutputTypes[OutputTypes["WITNESS_SCRIPT"] = 1] = "WITNESS_SCRIPT";
      OutputTypes[OutputTypes["BIP32_DERIVATION"] = 2] = "BIP32_DERIVATION";
      OutputTypes[OutputTypes["TAP_INTERNAL_KEY"] = 5] = "TAP_INTERNAL_KEY";
      OutputTypes[OutputTypes["TAP_TREE"] = 6] = "TAP_TREE";
      OutputTypes[OutputTypes["TAP_BIP32_DERIVATION"] = 7] = "TAP_BIP32_DERIVATION";
    })(exports2.OutputTypes || (exports2.OutputTypes = {}));
    exports2.OUTPUT_TYPE_NAMES = [
      "redeemScript",
      "witnessScript",
      "bip32Derivation",
      "tapInternalKey",
      "tapTree",
      "tapBip32Derivation"
    ];
  })(typeFields);
  var globalXpub$1 = {};
  Object.defineProperty(globalXpub$1, "__esModule", {
    value: true
  });
  const typeFields_1$g = typeFields;
  const range$2 = (n) => [
    ...Array(n).keys()
  ];
  function decode$e(keyVal) {
    if (keyVal.key[0] !== typeFields_1$g.GlobalTypes.GLOBAL_XPUB) {
      throw new Error("Decode Error: could not decode globalXpub with key 0x" + keyVal.key.toString("hex"));
    }
    if (keyVal.key.length !== 79 || ![
      2,
      3
    ].includes(keyVal.key[46])) {
      throw new Error("Decode Error: globalXpub has invalid extended pubkey in key 0x" + keyVal.key.toString("hex"));
    }
    if (keyVal.value.length / 4 % 1 !== 0) {
      throw new Error("Decode Error: Global GLOBAL_XPUB value length should be multiple of 4");
    }
    const extendedPubkey = keyVal.key.slice(1);
    const data = {
      masterFingerprint: keyVal.value.slice(0, 4),
      extendedPubkey,
      path: "m"
    };
    for (const i of range$2(keyVal.value.length / 4 - 1)) {
      const val = keyVal.value.readUInt32LE(i * 4 + 4);
      const isHard = !!(val & 2147483648);
      const idx = val & 2147483647;
      data.path += "/" + idx.toString(10) + (isHard ? "'" : "");
    }
    return data;
  }
  globalXpub$1.decode = decode$e;
  function encode$f(data) {
    const head = buffer.Buffer.from([
      typeFields_1$g.GlobalTypes.GLOBAL_XPUB
    ]);
    const key = buffer.Buffer.concat([
      head,
      data.extendedPubkey
    ]);
    const splitPath = data.path.split("/");
    const value2 = buffer.Buffer.allocUnsafe(splitPath.length * 4);
    data.masterFingerprint.copy(value2, 0);
    let offset = 4;
    splitPath.slice(1).forEach((level) => {
      const isHard = level.slice(-1) === "'";
      let num = 2147483647 & parseInt(isHard ? level.slice(0, -1) : level, 10);
      if (isHard)
        num += 2147483648;
      value2.writeUInt32LE(num, offset);
      offset += 4;
    });
    return {
      key,
      value: value2
    };
  }
  globalXpub$1.encode = encode$f;
  globalXpub$1.expected = "{ masterFingerprint: Buffer; extendedPubkey: Buffer; path: string; }";
  function check$c(data) {
    const epk = data.extendedPubkey;
    const mfp = data.masterFingerprint;
    const p = data.path;
    return buffer.Buffer.isBuffer(epk) && epk.length === 78 && [
      2,
      3
    ].indexOf(epk[45]) > -1 && buffer.Buffer.isBuffer(mfp) && mfp.length === 4 && typeof p === "string" && !!p.match(/^m(\/\d+'?)*$/);
  }
  globalXpub$1.check = check$c;
  function canAddToArray$3(array, item, dupeSet) {
    const dupeString = item.extendedPubkey.toString("hex");
    if (dupeSet.has(dupeString))
      return false;
    dupeSet.add(dupeString);
    return array.filter((v2) => v2.extendedPubkey.equals(item.extendedPubkey)).length === 0;
  }
  globalXpub$1.canAddToArray = canAddToArray$3;
  var unsignedTx$1 = {};
  Object.defineProperty(unsignedTx$1, "__esModule", {
    value: true
  });
  const typeFields_1$f = typeFields;
  function encode$e(data) {
    return {
      key: buffer.Buffer.from([
        typeFields_1$f.GlobalTypes.UNSIGNED_TX
      ]),
      value: data.toBuffer()
    };
  }
  unsignedTx$1.encode = encode$e;
  var finalScriptSig$1 = {};
  Object.defineProperty(finalScriptSig$1, "__esModule", {
    value: true
  });
  const typeFields_1$e = typeFields;
  function decode$d(keyVal) {
    if (keyVal.key[0] !== typeFields_1$e.InputTypes.FINAL_SCRIPTSIG) {
      throw new Error("Decode Error: could not decode finalScriptSig with key 0x" + keyVal.key.toString("hex"));
    }
    return keyVal.value;
  }
  finalScriptSig$1.decode = decode$d;
  function encode$d(data) {
    const key = buffer.Buffer.from([
      typeFields_1$e.InputTypes.FINAL_SCRIPTSIG
    ]);
    return {
      key,
      value: data
    };
  }
  finalScriptSig$1.encode = encode$d;
  finalScriptSig$1.expected = "Buffer";
  function check$b(data) {
    return buffer.Buffer.isBuffer(data);
  }
  finalScriptSig$1.check = check$b;
  function canAdd$8(currentData, newData) {
    return !!currentData && !!newData && currentData.finalScriptSig === void 0;
  }
  finalScriptSig$1.canAdd = canAdd$8;
  var finalScriptWitness$1 = {};
  Object.defineProperty(finalScriptWitness$1, "__esModule", {
    value: true
  });
  const typeFields_1$d = typeFields;
  function decode$c(keyVal) {
    if (keyVal.key[0] !== typeFields_1$d.InputTypes.FINAL_SCRIPTWITNESS) {
      throw new Error("Decode Error: could not decode finalScriptWitness with key 0x" + keyVal.key.toString("hex"));
    }
    return keyVal.value;
  }
  finalScriptWitness$1.decode = decode$c;
  function encode$c(data) {
    const key = buffer.Buffer.from([
      typeFields_1$d.InputTypes.FINAL_SCRIPTWITNESS
    ]);
    return {
      key,
      value: data
    };
  }
  finalScriptWitness$1.encode = encode$c;
  finalScriptWitness$1.expected = "Buffer";
  function check$a(data) {
    return buffer.Buffer.isBuffer(data);
  }
  finalScriptWitness$1.check = check$a;
  function canAdd$7(currentData, newData) {
    return !!currentData && !!newData && currentData.finalScriptWitness === void 0;
  }
  finalScriptWitness$1.canAdd = canAdd$7;
  var nonWitnessUtxo$1 = {};
  Object.defineProperty(nonWitnessUtxo$1, "__esModule", {
    value: true
  });
  const typeFields_1$c = typeFields;
  function decode$b(keyVal) {
    if (keyVal.key[0] !== typeFields_1$c.InputTypes.NON_WITNESS_UTXO) {
      throw new Error("Decode Error: could not decode nonWitnessUtxo with key 0x" + keyVal.key.toString("hex"));
    }
    return keyVal.value;
  }
  nonWitnessUtxo$1.decode = decode$b;
  function encode$b(data) {
    return {
      key: buffer.Buffer.from([
        typeFields_1$c.InputTypes.NON_WITNESS_UTXO
      ]),
      value: data
    };
  }
  nonWitnessUtxo$1.encode = encode$b;
  nonWitnessUtxo$1.expected = "Buffer";
  function check$9(data) {
    return buffer.Buffer.isBuffer(data);
  }
  nonWitnessUtxo$1.check = check$9;
  function canAdd$6(currentData, newData) {
    return !!currentData && !!newData && currentData.nonWitnessUtxo === void 0;
  }
  nonWitnessUtxo$1.canAdd = canAdd$6;
  var partialSig$1 = {};
  Object.defineProperty(partialSig$1, "__esModule", {
    value: true
  });
  const typeFields_1$b = typeFields;
  function decode$a(keyVal) {
    if (keyVal.key[0] !== typeFields_1$b.InputTypes.PARTIAL_SIG) {
      throw new Error("Decode Error: could not decode partialSig with key 0x" + keyVal.key.toString("hex"));
    }
    if (!(keyVal.key.length === 34 || keyVal.key.length === 66) || ![
      2,
      3,
      4
    ].includes(keyVal.key[1])) {
      throw new Error("Decode Error: partialSig has invalid pubkey in key 0x" + keyVal.key.toString("hex"));
    }
    const pubkey = keyVal.key.slice(1);
    return {
      pubkey,
      signature: keyVal.value
    };
  }
  partialSig$1.decode = decode$a;
  function encode$a(pSig) {
    const head = buffer.Buffer.from([
      typeFields_1$b.InputTypes.PARTIAL_SIG
    ]);
    return {
      key: buffer.Buffer.concat([
        head,
        pSig.pubkey
      ]),
      value: pSig.signature
    };
  }
  partialSig$1.encode = encode$a;
  partialSig$1.expected = "{ pubkey: Buffer; signature: Buffer; }";
  function check$8(data) {
    return buffer.Buffer.isBuffer(data.pubkey) && buffer.Buffer.isBuffer(data.signature) && [
      33,
      65
    ].includes(data.pubkey.length) && [
      2,
      3,
      4
    ].includes(data.pubkey[0]) && isDerSigWithSighash(data.signature);
  }
  partialSig$1.check = check$8;
  function isDerSigWithSighash(buf) {
    if (!buffer.Buffer.isBuffer(buf) || buf.length < 9)
      return false;
    if (buf[0] !== 48)
      return false;
    if (buf.length !== buf[1] + 3)
      return false;
    if (buf[2] !== 2)
      return false;
    const rLen = buf[3];
    if (rLen > 33 || rLen < 1)
      return false;
    if (buf[3 + rLen + 1] !== 2)
      return false;
    const sLen = buf[3 + rLen + 2];
    if (sLen > 33 || sLen < 1)
      return false;
    if (buf.length !== 3 + rLen + 2 + sLen + 2)
      return false;
    return true;
  }
  function canAddToArray$2(array, item, dupeSet) {
    const dupeString = item.pubkey.toString("hex");
    if (dupeSet.has(dupeString))
      return false;
    dupeSet.add(dupeString);
    return array.filter((v2) => v2.pubkey.equals(item.pubkey)).length === 0;
  }
  partialSig$1.canAddToArray = canAddToArray$2;
  var porCommitment$1 = {};
  Object.defineProperty(porCommitment$1, "__esModule", {
    value: true
  });
  const typeFields_1$a = typeFields;
  function decode$9(keyVal) {
    if (keyVal.key[0] !== typeFields_1$a.InputTypes.POR_COMMITMENT) {
      throw new Error("Decode Error: could not decode porCommitment with key 0x" + keyVal.key.toString("hex"));
    }
    return keyVal.value.toString("utf8");
  }
  porCommitment$1.decode = decode$9;
  function encode$9(data) {
    const key = buffer.Buffer.from([
      typeFields_1$a.InputTypes.POR_COMMITMENT
    ]);
    return {
      key,
      value: buffer.Buffer.from(data, "utf8")
    };
  }
  porCommitment$1.encode = encode$9;
  porCommitment$1.expected = "string";
  function check$7(data) {
    return typeof data === "string";
  }
  porCommitment$1.check = check$7;
  function canAdd$5(currentData, newData) {
    return !!currentData && !!newData && currentData.porCommitment === void 0;
  }
  porCommitment$1.canAdd = canAdd$5;
  var sighashType$1 = {};
  Object.defineProperty(sighashType$1, "__esModule", {
    value: true
  });
  const typeFields_1$9 = typeFields;
  function decode$8(keyVal) {
    if (keyVal.key[0] !== typeFields_1$9.InputTypes.SIGHASH_TYPE) {
      throw new Error("Decode Error: could not decode sighashType with key 0x" + keyVal.key.toString("hex"));
    }
    return keyVal.value.readUInt32LE(0);
  }
  sighashType$1.decode = decode$8;
  function encode$8(data) {
    const key = buffer.Buffer.from([
      typeFields_1$9.InputTypes.SIGHASH_TYPE
    ]);
    const value2 = buffer.Buffer.allocUnsafe(4);
    value2.writeUInt32LE(data, 0);
    return {
      key,
      value: value2
    };
  }
  sighashType$1.encode = encode$8;
  sighashType$1.expected = "number";
  function check$6(data) {
    return typeof data === "number";
  }
  sighashType$1.check = check$6;
  function canAdd$4(currentData, newData) {
    return !!currentData && !!newData && currentData.sighashType === void 0;
  }
  sighashType$1.canAdd = canAdd$4;
  var tapKeySig$1 = {};
  Object.defineProperty(tapKeySig$1, "__esModule", {
    value: true
  });
  const typeFields_1$8 = typeFields;
  function decode$7(keyVal) {
    if (keyVal.key[0] !== typeFields_1$8.InputTypes.TAP_KEY_SIG || keyVal.key.length !== 1) {
      throw new Error("Decode Error: could not decode tapKeySig with key 0x" + keyVal.key.toString("hex"));
    }
    if (!check$5(keyVal.value)) {
      throw new Error("Decode Error: tapKeySig not a valid 64-65-byte BIP340 signature");
    }
    return keyVal.value;
  }
  tapKeySig$1.decode = decode$7;
  function encode$7(value2) {
    const key = buffer.Buffer.from([
      typeFields_1$8.InputTypes.TAP_KEY_SIG
    ]);
    return {
      key,
      value: value2
    };
  }
  tapKeySig$1.encode = encode$7;
  tapKeySig$1.expected = "Buffer";
  function check$5(data) {
    return buffer.Buffer.isBuffer(data) && (data.length === 64 || data.length === 65);
  }
  tapKeySig$1.check = check$5;
  function canAdd$3(currentData, newData) {
    return !!currentData && !!newData && currentData.tapKeySig === void 0;
  }
  tapKeySig$1.canAdd = canAdd$3;
  var tapLeafScript$1 = {};
  Object.defineProperty(tapLeafScript$1, "__esModule", {
    value: true
  });
  const typeFields_1$7 = typeFields;
  function decode$6(keyVal) {
    if (keyVal.key[0] !== typeFields_1$7.InputTypes.TAP_LEAF_SCRIPT) {
      throw new Error("Decode Error: could not decode tapLeafScript with key 0x" + keyVal.key.toString("hex"));
    }
    if ((keyVal.key.length - 2) % 32 !== 0) {
      throw new Error("Decode Error: tapLeafScript has invalid control block in key 0x" + keyVal.key.toString("hex"));
    }
    const leafVersion = keyVal.value[keyVal.value.length - 1];
    if ((keyVal.key[1] & 254) !== leafVersion) {
      throw new Error("Decode Error: tapLeafScript bad leaf version in key 0x" + keyVal.key.toString("hex"));
    }
    const script2 = keyVal.value.slice(0, -1);
    const controlBlock = keyVal.key.slice(1);
    return {
      controlBlock,
      script: script2,
      leafVersion
    };
  }
  tapLeafScript$1.decode = decode$6;
  function encode$6(tScript) {
    const head = buffer.Buffer.from([
      typeFields_1$7.InputTypes.TAP_LEAF_SCRIPT
    ]);
    const verBuf = buffer.Buffer.from([
      tScript.leafVersion
    ]);
    return {
      key: buffer.Buffer.concat([
        head,
        tScript.controlBlock
      ]),
      value: buffer.Buffer.concat([
        tScript.script,
        verBuf
      ])
    };
  }
  tapLeafScript$1.encode = encode$6;
  tapLeafScript$1.expected = "{ controlBlock: Buffer; leafVersion: number, script: Buffer; }";
  function check$4(data) {
    return buffer.Buffer.isBuffer(data.controlBlock) && (data.controlBlock.length - 1) % 32 === 0 && (data.controlBlock[0] & 254) === data.leafVersion && buffer.Buffer.isBuffer(data.script);
  }
  tapLeafScript$1.check = check$4;
  function canAddToArray$1(array, item, dupeSet) {
    const dupeString = item.controlBlock.toString("hex");
    if (dupeSet.has(dupeString))
      return false;
    dupeSet.add(dupeString);
    return array.filter((v2) => v2.controlBlock.equals(item.controlBlock)).length === 0;
  }
  tapLeafScript$1.canAddToArray = canAddToArray$1;
  var tapMerkleRoot$1 = {};
  Object.defineProperty(tapMerkleRoot$1, "__esModule", {
    value: true
  });
  const typeFields_1$6 = typeFields;
  function decode$5(keyVal) {
    if (keyVal.key[0] !== typeFields_1$6.InputTypes.TAP_MERKLE_ROOT || keyVal.key.length !== 1) {
      throw new Error("Decode Error: could not decode tapMerkleRoot with key 0x" + keyVal.key.toString("hex"));
    }
    if (!check$3(keyVal.value)) {
      throw new Error("Decode Error: tapMerkleRoot not a 32-byte hash");
    }
    return keyVal.value;
  }
  tapMerkleRoot$1.decode = decode$5;
  function encode$5(value2) {
    const key = buffer.Buffer.from([
      typeFields_1$6.InputTypes.TAP_MERKLE_ROOT
    ]);
    return {
      key,
      value: value2
    };
  }
  tapMerkleRoot$1.encode = encode$5;
  tapMerkleRoot$1.expected = "Buffer";
  function check$3(data) {
    return buffer.Buffer.isBuffer(data) && data.length === 32;
  }
  tapMerkleRoot$1.check = check$3;
  function canAdd$2(currentData, newData) {
    return !!currentData && !!newData && currentData.tapMerkleRoot === void 0;
  }
  tapMerkleRoot$1.canAdd = canAdd$2;
  var tapScriptSig$1 = {};
  Object.defineProperty(tapScriptSig$1, "__esModule", {
    value: true
  });
  const typeFields_1$5 = typeFields;
  function decode$4(keyVal) {
    if (keyVal.key[0] !== typeFields_1$5.InputTypes.TAP_SCRIPT_SIG) {
      throw new Error("Decode Error: could not decode tapScriptSig with key 0x" + keyVal.key.toString("hex"));
    }
    if (keyVal.key.length !== 65) {
      throw new Error("Decode Error: tapScriptSig has invalid key 0x" + keyVal.key.toString("hex"));
    }
    if (keyVal.value.length !== 64 && keyVal.value.length !== 65) {
      throw new Error("Decode Error: tapScriptSig has invalid signature in key 0x" + keyVal.key.toString("hex"));
    }
    const pubkey = keyVal.key.slice(1, 33);
    const leafHash = keyVal.key.slice(33);
    return {
      pubkey,
      leafHash,
      signature: keyVal.value
    };
  }
  tapScriptSig$1.decode = decode$4;
  function encode$4(tSig) {
    const head = buffer.Buffer.from([
      typeFields_1$5.InputTypes.TAP_SCRIPT_SIG
    ]);
    return {
      key: buffer.Buffer.concat([
        head,
        tSig.pubkey,
        tSig.leafHash
      ]),
      value: tSig.signature
    };
  }
  tapScriptSig$1.encode = encode$4;
  tapScriptSig$1.expected = "{ pubkey: Buffer; leafHash: Buffer; signature: Buffer; }";
  function check$2(data) {
    return buffer.Buffer.isBuffer(data.pubkey) && buffer.Buffer.isBuffer(data.leafHash) && buffer.Buffer.isBuffer(data.signature) && data.pubkey.length === 32 && data.leafHash.length === 32 && (data.signature.length === 64 || data.signature.length === 65);
  }
  tapScriptSig$1.check = check$2;
  function canAddToArray(array, item, dupeSet) {
    const dupeString = item.pubkey.toString("hex") + item.leafHash.toString("hex");
    if (dupeSet.has(dupeString))
      return false;
    dupeSet.add(dupeString);
    return array.filter((v2) => v2.pubkey.equals(item.pubkey) && v2.leafHash.equals(item.leafHash)).length === 0;
  }
  tapScriptSig$1.canAddToArray = canAddToArray;
  var witnessUtxo$1 = {};
  var tools = {};
  var varint = {};
  Object.defineProperty(varint, "__esModule", {
    value: true
  });
  const MAX_SAFE_INTEGER = 9007199254740991;
  function checkUInt53(n) {
    if (n < 0 || n > MAX_SAFE_INTEGER || n % 1 !== 0)
      throw new RangeError("value out of range");
  }
  function encode$3(_number, buffer$1, offset) {
    checkUInt53(_number);
    if (!buffer$1)
      buffer$1 = buffer.Buffer.allocUnsafe(encodingLength(_number));
    if (!buffer.Buffer.isBuffer(buffer$1))
      throw new TypeError("buffer must be a Buffer instance");
    if (!offset)
      offset = 0;
    if (_number < 253) {
      buffer$1.writeUInt8(_number, offset);
      Object.assign(encode$3, {
        bytes: 1
      });
    } else if (_number <= 65535) {
      buffer$1.writeUInt8(253, offset);
      buffer$1.writeUInt16LE(_number, offset + 1);
      Object.assign(encode$3, {
        bytes: 3
      });
    } else if (_number <= 4294967295) {
      buffer$1.writeUInt8(254, offset);
      buffer$1.writeUInt32LE(_number, offset + 1);
      Object.assign(encode$3, {
        bytes: 5
      });
    } else {
      buffer$1.writeUInt8(255, offset);
      buffer$1.writeUInt32LE(_number >>> 0, offset + 1);
      buffer$1.writeUInt32LE(_number / 4294967296 | 0, offset + 5);
      Object.assign(encode$3, {
        bytes: 9
      });
    }
    return buffer$1;
  }
  varint.encode = encode$3;
  function decode$3(buffer$1, offset) {
    if (!buffer.Buffer.isBuffer(buffer$1))
      throw new TypeError("buffer must be a Buffer instance");
    if (!offset)
      offset = 0;
    const first = buffer$1.readUInt8(offset);
    if (first < 253) {
      Object.assign(decode$3, {
        bytes: 1
      });
      return first;
    } else if (first === 253) {
      Object.assign(decode$3, {
        bytes: 3
      });
      return buffer$1.readUInt16LE(offset + 1);
    } else if (first === 254) {
      Object.assign(decode$3, {
        bytes: 5
      });
      return buffer$1.readUInt32LE(offset + 1);
    } else {
      Object.assign(decode$3, {
        bytes: 9
      });
      const lo = buffer$1.readUInt32LE(offset + 1);
      const hi = buffer$1.readUInt32LE(offset + 5);
      const _number = hi * 4294967296 + lo;
      checkUInt53(_number);
      return _number;
    }
  }
  varint.decode = decode$3;
  function encodingLength(_number) {
    checkUInt53(_number);
    return _number < 253 ? 1 : _number <= 65535 ? 3 : _number <= 4294967295 ? 5 : 9;
  }
  varint.encodingLength = encodingLength;
  Object.defineProperty(tools, "__esModule", {
    value: true
  });
  const varuint$6 = varint;
  tools.range = (n) => [
    ...Array(n).keys()
  ];
  function reverseBuffer(buffer2) {
    if (buffer2.length < 1)
      return buffer2;
    let j = buffer2.length - 1;
    let tmp = 0;
    for (let i = 0; i < buffer2.length / 2; i++) {
      tmp = buffer2[i];
      buffer2[i] = buffer2[j];
      buffer2[j] = tmp;
      j--;
    }
    return buffer2;
  }
  tools.reverseBuffer = reverseBuffer;
  function keyValsToBuffer(keyVals) {
    const buffers = keyVals.map(keyValToBuffer);
    buffers.push(buffer.Buffer.from([
      0
    ]));
    return buffer.Buffer.concat(buffers);
  }
  tools.keyValsToBuffer = keyValsToBuffer;
  function keyValToBuffer(keyVal) {
    const keyLen = keyVal.key.length;
    const valLen = keyVal.value.length;
    const keyVarIntLen = varuint$6.encodingLength(keyLen);
    const valVarIntLen = varuint$6.encodingLength(valLen);
    const buffer$1 = buffer.Buffer.allocUnsafe(keyVarIntLen + keyLen + valVarIntLen + valLen);
    varuint$6.encode(keyLen, buffer$1, 0);
    keyVal.key.copy(buffer$1, keyVarIntLen);
    varuint$6.encode(valLen, buffer$1, keyVarIntLen + keyLen);
    keyVal.value.copy(buffer$1, keyVarIntLen + keyLen + valVarIntLen);
    return buffer$1;
  }
  tools.keyValToBuffer = keyValToBuffer;
  function verifuint(value2, max) {
    if (typeof value2 !== "number")
      throw new Error("cannot write a non-number as a number");
    if (value2 < 0)
      throw new Error("specified a negative value for writing an unsigned value");
    if (value2 > max)
      throw new Error("RangeError: value out of range");
    if (Math.floor(value2) !== value2)
      throw new Error("value has a fractional component");
  }
  function readUInt64LE(buffer2, offset) {
    const a2 = buffer2.readUInt32LE(offset);
    let b = buffer2.readUInt32LE(offset + 4);
    b *= 4294967296;
    verifuint(b + a2, 9007199254740991);
    return b + a2;
  }
  tools.readUInt64LE = readUInt64LE;
  function writeUInt64LE(buffer2, value2, offset) {
    verifuint(value2, 9007199254740991);
    buffer2.writeInt32LE(value2 & -1, offset);
    buffer2.writeUInt32LE(Math.floor(value2 / 4294967296), offset + 4);
    return offset + 8;
  }
  tools.writeUInt64LE = writeUInt64LE;
  Object.defineProperty(witnessUtxo$1, "__esModule", {
    value: true
  });
  const typeFields_1$4 = typeFields;
  const tools_1$2 = tools;
  const varuint$5 = varint;
  function decode$2(keyVal) {
    if (keyVal.key[0] !== typeFields_1$4.InputTypes.WITNESS_UTXO) {
      throw new Error("Decode Error: could not decode witnessUtxo with key 0x" + keyVal.key.toString("hex"));
    }
    const value2 = tools_1$2.readUInt64LE(keyVal.value, 0);
    let _offset = 8;
    const scriptLen = varuint$5.decode(keyVal.value, _offset);
    _offset += varuint$5.encodingLength(scriptLen);
    const script2 = keyVal.value.slice(_offset);
    if (script2.length !== scriptLen) {
      throw new Error("Decode Error: WITNESS_UTXO script is not proper length");
    }
    return {
      script: script2,
      value: value2
    };
  }
  witnessUtxo$1.decode = decode$2;
  function encode$2(data) {
    const { script: script2, value: value2 } = data;
    const varintLen = varuint$5.encodingLength(script2.length);
    const result = buffer.Buffer.allocUnsafe(8 + varintLen + script2.length);
    tools_1$2.writeUInt64LE(result, value2, 0);
    varuint$5.encode(script2.length, result, 8);
    script2.copy(result, 8 + varintLen);
    return {
      key: buffer.Buffer.from([
        typeFields_1$4.InputTypes.WITNESS_UTXO
      ]),
      value: result
    };
  }
  witnessUtxo$1.encode = encode$2;
  witnessUtxo$1.expected = "{ script: Buffer; value: number; }";
  function check$1(data) {
    return buffer.Buffer.isBuffer(data.script) && typeof data.value === "number";
  }
  witnessUtxo$1.check = check$1;
  function canAdd$1(currentData, newData) {
    return !!currentData && !!newData && currentData.witnessUtxo === void 0;
  }
  witnessUtxo$1.canAdd = canAdd$1;
  var tapTree$1 = {};
  Object.defineProperty(tapTree$1, "__esModule", {
    value: true
  });
  const typeFields_1$3 = typeFields;
  const varuint$4 = varint;
  function decode$1(keyVal) {
    if (keyVal.key[0] !== typeFields_1$3.OutputTypes.TAP_TREE || keyVal.key.length !== 1) {
      throw new Error("Decode Error: could not decode tapTree with key 0x" + keyVal.key.toString("hex"));
    }
    let _offset = 0;
    const data = [];
    while (_offset < keyVal.value.length) {
      const depth = keyVal.value[_offset++];
      const leafVersion = keyVal.value[_offset++];
      const scriptLen = varuint$4.decode(keyVal.value, _offset);
      _offset += varuint$4.encodingLength(scriptLen);
      data.push({
        depth,
        leafVersion,
        script: keyVal.value.slice(_offset, _offset + scriptLen)
      });
      _offset += scriptLen;
    }
    return {
      leaves: data
    };
  }
  tapTree$1.decode = decode$1;
  function encode$1(tree) {
    const key = buffer.Buffer.from([
      typeFields_1$3.OutputTypes.TAP_TREE
    ]);
    const bufs = [].concat(...tree.leaves.map((tapLeaf) => [
      buffer.Buffer.of(tapLeaf.depth, tapLeaf.leafVersion),
      varuint$4.encode(tapLeaf.script.length),
      tapLeaf.script
    ]));
    return {
      key,
      value: buffer.Buffer.concat(bufs)
    };
  }
  tapTree$1.encode = encode$1;
  tapTree$1.expected = "{ leaves: [{ depth: number; leafVersion: number, script: Buffer; }] }";
  function check(data) {
    return Array.isArray(data.leaves) && data.leaves.every((tapLeaf) => tapLeaf.depth >= 0 && tapLeaf.depth <= 128 && (tapLeaf.leafVersion & 254) === tapLeaf.leafVersion && buffer.Buffer.isBuffer(tapLeaf.script));
  }
  tapTree$1.check = check;
  function canAdd(currentData, newData) {
    return !!currentData && !!newData && currentData.tapTree === void 0;
  }
  tapTree$1.canAdd = canAdd;
  var bip32Derivation$2 = {};
  Object.defineProperty(bip32Derivation$2, "__esModule", {
    value: true
  });
  const range$1 = (n) => [
    ...Array(n).keys()
  ];
  const isValidDERKey = (pubkey) => pubkey.length === 33 && [
    2,
    3
  ].includes(pubkey[0]) || pubkey.length === 65 && 4 === pubkey[0];
  function makeConverter$4(TYPE_BYTE, isValidPubkey = isValidDERKey) {
    function decode2(keyVal) {
      if (keyVal.key[0] !== TYPE_BYTE) {
        throw new Error("Decode Error: could not decode bip32Derivation with key 0x" + keyVal.key.toString("hex"));
      }
      const pubkey = keyVal.key.slice(1);
      if (!isValidPubkey(pubkey)) {
        throw new Error("Decode Error: bip32Derivation has invalid pubkey in key 0x" + keyVal.key.toString("hex"));
      }
      if (keyVal.value.length / 4 % 1 !== 0) {
        throw new Error("Decode Error: Input BIP32_DERIVATION value length should be multiple of 4");
      }
      const data = {
        masterFingerprint: keyVal.value.slice(0, 4),
        pubkey,
        path: "m"
      };
      for (const i of range$1(keyVal.value.length / 4 - 1)) {
        const val = keyVal.value.readUInt32LE(i * 4 + 4);
        const isHard = !!(val & 2147483648);
        const idx = val & 2147483647;
        data.path += "/" + idx.toString(10) + (isHard ? "'" : "");
      }
      return data;
    }
    function encode2(data) {
      const head = buffer.Buffer.from([
        TYPE_BYTE
      ]);
      const key = buffer.Buffer.concat([
        head,
        data.pubkey
      ]);
      const splitPath = data.path.split("/");
      const value2 = buffer.Buffer.allocUnsafe(splitPath.length * 4);
      data.masterFingerprint.copy(value2, 0);
      let offset = 4;
      splitPath.slice(1).forEach((level) => {
        const isHard = level.slice(-1) === "'";
        let num = 2147483647 & parseInt(isHard ? level.slice(0, -1) : level, 10);
        if (isHard)
          num += 2147483648;
        value2.writeUInt32LE(num, offset);
        offset += 4;
      });
      return {
        key,
        value: value2
      };
    }
    const expected = "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; }";
    function check2(data) {
      return buffer.Buffer.isBuffer(data.pubkey) && buffer.Buffer.isBuffer(data.masterFingerprint) && typeof data.path === "string" && isValidPubkey(data.pubkey) && data.masterFingerprint.length === 4;
    }
    function canAddToArray2(array, item, dupeSet) {
      const dupeString = item.pubkey.toString("hex");
      if (dupeSet.has(dupeString))
        return false;
      dupeSet.add(dupeString);
      return array.filter((v2) => v2.pubkey.equals(item.pubkey)).length === 0;
    }
    return {
      decode: decode2,
      encode: encode2,
      check: check2,
      expected,
      canAddToArray: canAddToArray2
    };
  }
  bip32Derivation$2.makeConverter = makeConverter$4;
  var checkPubkey$1 = {};
  Object.defineProperty(checkPubkey$1, "__esModule", {
    value: true
  });
  function makeChecker(pubkeyTypes) {
    return checkPubkey2;
    function checkPubkey2(keyVal) {
      let pubkey;
      if (pubkeyTypes.includes(keyVal.key[0])) {
        pubkey = keyVal.key.slice(1);
        if (!(pubkey.length === 33 || pubkey.length === 65) || ![
          2,
          3,
          4
        ].includes(pubkey[0])) {
          throw new Error("Format Error: invalid pubkey in key 0x" + keyVal.key.toString("hex"));
        }
      }
      return pubkey;
    }
  }
  checkPubkey$1.makeChecker = makeChecker;
  var redeemScript$1 = {};
  Object.defineProperty(redeemScript$1, "__esModule", {
    value: true
  });
  function makeConverter$3(TYPE_BYTE) {
    function decode2(keyVal) {
      if (keyVal.key[0] !== TYPE_BYTE) {
        throw new Error("Decode Error: could not decode redeemScript with key 0x" + keyVal.key.toString("hex"));
      }
      return keyVal.value;
    }
    function encode2(data) {
      const key = buffer.Buffer.from([
        TYPE_BYTE
      ]);
      return {
        key,
        value: data
      };
    }
    const expected = "Buffer";
    function check2(data) {
      return buffer.Buffer.isBuffer(data);
    }
    function canAdd2(currentData, newData) {
      return !!currentData && !!newData && currentData.redeemScript === void 0;
    }
    return {
      decode: decode2,
      encode: encode2,
      check: check2,
      expected,
      canAdd: canAdd2
    };
  }
  redeemScript$1.makeConverter = makeConverter$3;
  var tapBip32Derivation$1 = {};
  Object.defineProperty(tapBip32Derivation$1, "__esModule", {
    value: true
  });
  const varuint$3 = varint;
  const bip32Derivation$1 = bip32Derivation$2;
  const isValidBIP340Key = (pubkey) => pubkey.length === 32;
  function makeConverter$2(TYPE_BYTE) {
    const parent = bip32Derivation$1.makeConverter(TYPE_BYTE, isValidBIP340Key);
    function decode2(keyVal) {
      const nHashes = varuint$3.decode(keyVal.value);
      const nHashesLen = varuint$3.encodingLength(nHashes);
      const base2 = parent.decode({
        key: keyVal.key,
        value: keyVal.value.slice(nHashesLen + nHashes * 32)
      });
      const leafHashes = new Array(nHashes);
      for (let i = 0, _offset = nHashesLen; i < nHashes; i++, _offset += 32) {
        leafHashes[i] = keyVal.value.slice(_offset, _offset + 32);
      }
      return Object.assign({}, base2, {
        leafHashes
      });
    }
    function encode2(data) {
      const base2 = parent.encode(data);
      const nHashesLen = varuint$3.encodingLength(data.leafHashes.length);
      const nHashesBuf = buffer.Buffer.allocUnsafe(nHashesLen);
      varuint$3.encode(data.leafHashes.length, nHashesBuf);
      const value2 = buffer.Buffer.concat([
        nHashesBuf,
        ...data.leafHashes,
        base2.value
      ]);
      return Object.assign({}, base2, {
        value: value2
      });
    }
    const expected = "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; leafHashes: Buffer[]; }";
    function check2(data) {
      return Array.isArray(data.leafHashes) && data.leafHashes.every((leafHash) => buffer.Buffer.isBuffer(leafHash) && leafHash.length === 32) && parent.check(data);
    }
    return {
      decode: decode2,
      encode: encode2,
      check: check2,
      expected,
      canAddToArray: parent.canAddToArray
    };
  }
  tapBip32Derivation$1.makeConverter = makeConverter$2;
  var tapInternalKey$1 = {};
  Object.defineProperty(tapInternalKey$1, "__esModule", {
    value: true
  });
  function makeConverter$1(TYPE_BYTE) {
    function decode2(keyVal) {
      if (keyVal.key[0] !== TYPE_BYTE || keyVal.key.length !== 1) {
        throw new Error("Decode Error: could not decode tapInternalKey with key 0x" + keyVal.key.toString("hex"));
      }
      if (keyVal.value.length !== 32) {
        throw new Error("Decode Error: tapInternalKey not a 32-byte x-only pubkey");
      }
      return keyVal.value;
    }
    function encode2(value2) {
      const key = buffer.Buffer.from([
        TYPE_BYTE
      ]);
      return {
        key,
        value: value2
      };
    }
    const expected = "Buffer";
    function check2(data) {
      return buffer.Buffer.isBuffer(data) && data.length === 32;
    }
    function canAdd2(currentData, newData) {
      return !!currentData && !!newData && currentData.tapInternalKey === void 0;
    }
    return {
      decode: decode2,
      encode: encode2,
      check: check2,
      expected,
      canAdd: canAdd2
    };
  }
  tapInternalKey$1.makeConverter = makeConverter$1;
  var witnessScript$1 = {};
  Object.defineProperty(witnessScript$1, "__esModule", {
    value: true
  });
  function makeConverter(TYPE_BYTE) {
    function decode2(keyVal) {
      if (keyVal.key[0] !== TYPE_BYTE) {
        throw new Error("Decode Error: could not decode witnessScript with key 0x" + keyVal.key.toString("hex"));
      }
      return keyVal.value;
    }
    function encode2(data) {
      const key = buffer.Buffer.from([
        TYPE_BYTE
      ]);
      return {
        key,
        value: data
      };
    }
    const expected = "Buffer";
    function check2(data) {
      return buffer.Buffer.isBuffer(data);
    }
    function canAdd2(currentData, newData) {
      return !!currentData && !!newData && currentData.witnessScript === void 0;
    }
    return {
      decode: decode2,
      encode: encode2,
      check: check2,
      expected,
      canAdd: canAdd2
    };
  }
  witnessScript$1.makeConverter = makeConverter;
  Object.defineProperty(converter, "__esModule", {
    value: true
  });
  const typeFields_1$2 = typeFields;
  const globalXpub = globalXpub$1;
  const unsignedTx = unsignedTx$1;
  const finalScriptSig = finalScriptSig$1;
  const finalScriptWitness = finalScriptWitness$1;
  const nonWitnessUtxo = nonWitnessUtxo$1;
  const partialSig = partialSig$1;
  const porCommitment = porCommitment$1;
  const sighashType = sighashType$1;
  const tapKeySig = tapKeySig$1;
  const tapLeafScript = tapLeafScript$1;
  const tapMerkleRoot = tapMerkleRoot$1;
  const tapScriptSig = tapScriptSig$1;
  const witnessUtxo = witnessUtxo$1;
  const tapTree = tapTree$1;
  const bip32Derivation = bip32Derivation$2;
  const checkPubkey = checkPubkey$1;
  const redeemScript = redeemScript$1;
  const tapBip32Derivation = tapBip32Derivation$1;
  const tapInternalKey = tapInternalKey$1;
  const witnessScript = witnessScript$1;
  const globals = {
    unsignedTx,
    globalXpub,
    checkPubkey: checkPubkey.makeChecker([])
  };
  converter.globals = globals;
  const inputs = {
    nonWitnessUtxo,
    partialSig,
    sighashType,
    finalScriptSig,
    finalScriptWitness,
    porCommitment,
    witnessUtxo,
    bip32Derivation: bip32Derivation.makeConverter(typeFields_1$2.InputTypes.BIP32_DERIVATION),
    redeemScript: redeemScript.makeConverter(typeFields_1$2.InputTypes.REDEEM_SCRIPT),
    witnessScript: witnessScript.makeConverter(typeFields_1$2.InputTypes.WITNESS_SCRIPT),
    checkPubkey: checkPubkey.makeChecker([
      typeFields_1$2.InputTypes.PARTIAL_SIG,
      typeFields_1$2.InputTypes.BIP32_DERIVATION
    ]),
    tapKeySig,
    tapScriptSig,
    tapLeafScript,
    tapBip32Derivation: tapBip32Derivation.makeConverter(typeFields_1$2.InputTypes.TAP_BIP32_DERIVATION),
    tapInternalKey: tapInternalKey.makeConverter(typeFields_1$2.InputTypes.TAP_INTERNAL_KEY),
    tapMerkleRoot
  };
  converter.inputs = inputs;
  const outputs = {
    bip32Derivation: bip32Derivation.makeConverter(typeFields_1$2.OutputTypes.BIP32_DERIVATION),
    redeemScript: redeemScript.makeConverter(typeFields_1$2.OutputTypes.REDEEM_SCRIPT),
    witnessScript: witnessScript.makeConverter(typeFields_1$2.OutputTypes.WITNESS_SCRIPT),
    checkPubkey: checkPubkey.makeChecker([
      typeFields_1$2.OutputTypes.BIP32_DERIVATION
    ]),
    tapBip32Derivation: tapBip32Derivation.makeConverter(typeFields_1$2.OutputTypes.TAP_BIP32_DERIVATION),
    tapTree,
    tapInternalKey: tapInternalKey.makeConverter(typeFields_1$2.OutputTypes.TAP_INTERNAL_KEY)
  };
  converter.outputs = outputs;
  Object.defineProperty(fromBuffer, "__esModule", {
    value: true
  });
  const convert$1 = converter;
  const tools_1$1 = tools;
  const varuint$2 = varint;
  const typeFields_1$1 = typeFields;
  function psbtFromBuffer(buffer2, txGetter) {
    let offset = 0;
    function varSlice() {
      const keyLen = varuint$2.decode(buffer2, offset);
      offset += varuint$2.encodingLength(keyLen);
      const key = buffer2.slice(offset, offset + keyLen);
      offset += keyLen;
      return key;
    }
    function readUInt32BE() {
      const num = buffer2.readUInt32BE(offset);
      offset += 4;
      return num;
    }
    function readUInt8() {
      const num = buffer2.readUInt8(offset);
      offset += 1;
      return num;
    }
    function getKeyValue() {
      const key = varSlice();
      const value2 = varSlice();
      return {
        key,
        value: value2
      };
    }
    function checkEndOfKeyValPairs() {
      if (offset >= buffer2.length) {
        throw new Error("Format Error: Unexpected End of PSBT");
      }
      const isEnd = buffer2.readUInt8(offset) === 0;
      if (isEnd) {
        offset++;
      }
      return isEnd;
    }
    if (readUInt32BE() !== 1886610036) {
      throw new Error("Format Error: Invalid Magic Number");
    }
    if (readUInt8() !== 255) {
      throw new Error("Format Error: Magic Number must be followed by 0xff separator");
    }
    const globalMapKeyVals = [];
    const globalKeyIndex = {};
    while (!checkEndOfKeyValPairs()) {
      const keyVal = getKeyValue();
      const hexKey = keyVal.key.toString("hex");
      if (globalKeyIndex[hexKey]) {
        throw new Error("Format Error: Keys must be unique for global keymap: key " + hexKey);
      }
      globalKeyIndex[hexKey] = 1;
      globalMapKeyVals.push(keyVal);
    }
    const unsignedTxMaps = globalMapKeyVals.filter((keyVal) => keyVal.key[0] === typeFields_1$1.GlobalTypes.UNSIGNED_TX);
    if (unsignedTxMaps.length !== 1) {
      throw new Error("Format Error: Only one UNSIGNED_TX allowed");
    }
    const unsignedTx2 = txGetter(unsignedTxMaps[0].value);
    const { inputCount, outputCount } = unsignedTx2.getInputOutputCounts();
    const inputKeyVals = [];
    const outputKeyVals = [];
    for (const index of tools_1$1.range(inputCount)) {
      const inputKeyIndex = {};
      const input = [];
      while (!checkEndOfKeyValPairs()) {
        const keyVal = getKeyValue();
        const hexKey = keyVal.key.toString("hex");
        if (inputKeyIndex[hexKey]) {
          throw new Error("Format Error: Keys must be unique for each input: input index " + index + " key " + hexKey);
        }
        inputKeyIndex[hexKey] = 1;
        input.push(keyVal);
      }
      inputKeyVals.push(input);
    }
    for (const index of tools_1$1.range(outputCount)) {
      const outputKeyIndex = {};
      const output = [];
      while (!checkEndOfKeyValPairs()) {
        const keyVal = getKeyValue();
        const hexKey = keyVal.key.toString("hex");
        if (outputKeyIndex[hexKey]) {
          throw new Error("Format Error: Keys must be unique for each output: output index " + index + " key " + hexKey);
        }
        outputKeyIndex[hexKey] = 1;
        output.push(keyVal);
      }
      outputKeyVals.push(output);
    }
    return psbtFromKeyVals(unsignedTx2, {
      globalMapKeyVals,
      inputKeyVals,
      outputKeyVals
    });
  }
  fromBuffer.psbtFromBuffer = psbtFromBuffer;
  function checkKeyBuffer(type, keyBuf, keyNum) {
    if (!keyBuf.equals(buffer.Buffer.from([
      keyNum
    ]))) {
      throw new Error(`Format Error: Invalid ${type} key: ${keyBuf.toString("hex")}`);
    }
  }
  fromBuffer.checkKeyBuffer = checkKeyBuffer;
  function psbtFromKeyVals(unsignedTx2, { globalMapKeyVals, inputKeyVals, outputKeyVals }) {
    const globalMap = {
      unsignedTx: unsignedTx2
    };
    let txCount = 0;
    for (const keyVal of globalMapKeyVals) {
      switch (keyVal.key[0]) {
        case typeFields_1$1.GlobalTypes.UNSIGNED_TX:
          checkKeyBuffer("global", keyVal.key, typeFields_1$1.GlobalTypes.UNSIGNED_TX);
          if (txCount > 0) {
            throw new Error("Format Error: GlobalMap has multiple UNSIGNED_TX");
          }
          txCount++;
          break;
        case typeFields_1$1.GlobalTypes.GLOBAL_XPUB:
          if (globalMap.globalXpub === void 0) {
            globalMap.globalXpub = [];
          }
          globalMap.globalXpub.push(convert$1.globals.globalXpub.decode(keyVal));
          break;
        default:
          if (!globalMap.unknownKeyVals)
            globalMap.unknownKeyVals = [];
          globalMap.unknownKeyVals.push(keyVal);
      }
    }
    const inputCount = inputKeyVals.length;
    const outputCount = outputKeyVals.length;
    const inputs2 = [];
    const outputs2 = [];
    for (const index of tools_1$1.range(inputCount)) {
      const input = {};
      for (const keyVal of inputKeyVals[index]) {
        convert$1.inputs.checkPubkey(keyVal);
        switch (keyVal.key[0]) {
          case typeFields_1$1.InputTypes.NON_WITNESS_UTXO:
            checkKeyBuffer("input", keyVal.key, typeFields_1$1.InputTypes.NON_WITNESS_UTXO);
            if (input.nonWitnessUtxo !== void 0) {
              throw new Error("Format Error: Input has multiple NON_WITNESS_UTXO");
            }
            input.nonWitnessUtxo = convert$1.inputs.nonWitnessUtxo.decode(keyVal);
            break;
          case typeFields_1$1.InputTypes.WITNESS_UTXO:
            checkKeyBuffer("input", keyVal.key, typeFields_1$1.InputTypes.WITNESS_UTXO);
            if (input.witnessUtxo !== void 0) {
              throw new Error("Format Error: Input has multiple WITNESS_UTXO");
            }
            input.witnessUtxo = convert$1.inputs.witnessUtxo.decode(keyVal);
            break;
          case typeFields_1$1.InputTypes.PARTIAL_SIG:
            if (input.partialSig === void 0) {
              input.partialSig = [];
            }
            input.partialSig.push(convert$1.inputs.partialSig.decode(keyVal));
            break;
          case typeFields_1$1.InputTypes.SIGHASH_TYPE:
            checkKeyBuffer("input", keyVal.key, typeFields_1$1.InputTypes.SIGHASH_TYPE);
            if (input.sighashType !== void 0) {
              throw new Error("Format Error: Input has multiple SIGHASH_TYPE");
            }
            input.sighashType = convert$1.inputs.sighashType.decode(keyVal);
            break;
          case typeFields_1$1.InputTypes.REDEEM_SCRIPT:
            checkKeyBuffer("input", keyVal.key, typeFields_1$1.InputTypes.REDEEM_SCRIPT);
            if (input.redeemScript !== void 0) {
              throw new Error("Format Error: Input has multiple REDEEM_SCRIPT");
            }
            input.redeemScript = convert$1.inputs.redeemScript.decode(keyVal);
            break;
          case typeFields_1$1.InputTypes.WITNESS_SCRIPT:
            checkKeyBuffer("input", keyVal.key, typeFields_1$1.InputTypes.WITNESS_SCRIPT);
            if (input.witnessScript !== void 0) {
              throw new Error("Format Error: Input has multiple WITNESS_SCRIPT");
            }
            input.witnessScript = convert$1.inputs.witnessScript.decode(keyVal);
            break;
          case typeFields_1$1.InputTypes.BIP32_DERIVATION:
            if (input.bip32Derivation === void 0) {
              input.bip32Derivation = [];
            }
            input.bip32Derivation.push(convert$1.inputs.bip32Derivation.decode(keyVal));
            break;
          case typeFields_1$1.InputTypes.FINAL_SCRIPTSIG:
            checkKeyBuffer("input", keyVal.key, typeFields_1$1.InputTypes.FINAL_SCRIPTSIG);
            input.finalScriptSig = convert$1.inputs.finalScriptSig.decode(keyVal);
            break;
          case typeFields_1$1.InputTypes.FINAL_SCRIPTWITNESS:
            checkKeyBuffer("input", keyVal.key, typeFields_1$1.InputTypes.FINAL_SCRIPTWITNESS);
            input.finalScriptWitness = convert$1.inputs.finalScriptWitness.decode(keyVal);
            break;
          case typeFields_1$1.InputTypes.POR_COMMITMENT:
            checkKeyBuffer("input", keyVal.key, typeFields_1$1.InputTypes.POR_COMMITMENT);
            input.porCommitment = convert$1.inputs.porCommitment.decode(keyVal);
            break;
          case typeFields_1$1.InputTypes.TAP_KEY_SIG:
            checkKeyBuffer("input", keyVal.key, typeFields_1$1.InputTypes.TAP_KEY_SIG);
            input.tapKeySig = convert$1.inputs.tapKeySig.decode(keyVal);
            break;
          case typeFields_1$1.InputTypes.TAP_SCRIPT_SIG:
            if (input.tapScriptSig === void 0) {
              input.tapScriptSig = [];
            }
            input.tapScriptSig.push(convert$1.inputs.tapScriptSig.decode(keyVal));
            break;
          case typeFields_1$1.InputTypes.TAP_LEAF_SCRIPT:
            if (input.tapLeafScript === void 0) {
              input.tapLeafScript = [];
            }
            input.tapLeafScript.push(convert$1.inputs.tapLeafScript.decode(keyVal));
            break;
          case typeFields_1$1.InputTypes.TAP_BIP32_DERIVATION:
            if (input.tapBip32Derivation === void 0) {
              input.tapBip32Derivation = [];
            }
            input.tapBip32Derivation.push(convert$1.inputs.tapBip32Derivation.decode(keyVal));
            break;
          case typeFields_1$1.InputTypes.TAP_INTERNAL_KEY:
            checkKeyBuffer("input", keyVal.key, typeFields_1$1.InputTypes.TAP_INTERNAL_KEY);
            input.tapInternalKey = convert$1.inputs.tapInternalKey.decode(keyVal);
            break;
          case typeFields_1$1.InputTypes.TAP_MERKLE_ROOT:
            checkKeyBuffer("input", keyVal.key, typeFields_1$1.InputTypes.TAP_MERKLE_ROOT);
            input.tapMerkleRoot = convert$1.inputs.tapMerkleRoot.decode(keyVal);
            break;
          default:
            if (!input.unknownKeyVals)
              input.unknownKeyVals = [];
            input.unknownKeyVals.push(keyVal);
        }
      }
      inputs2.push(input);
    }
    for (const index of tools_1$1.range(outputCount)) {
      const output = {};
      for (const keyVal of outputKeyVals[index]) {
        convert$1.outputs.checkPubkey(keyVal);
        switch (keyVal.key[0]) {
          case typeFields_1$1.OutputTypes.REDEEM_SCRIPT:
            checkKeyBuffer("output", keyVal.key, typeFields_1$1.OutputTypes.REDEEM_SCRIPT);
            if (output.redeemScript !== void 0) {
              throw new Error("Format Error: Output has multiple REDEEM_SCRIPT");
            }
            output.redeemScript = convert$1.outputs.redeemScript.decode(keyVal);
            break;
          case typeFields_1$1.OutputTypes.WITNESS_SCRIPT:
            checkKeyBuffer("output", keyVal.key, typeFields_1$1.OutputTypes.WITNESS_SCRIPT);
            if (output.witnessScript !== void 0) {
              throw new Error("Format Error: Output has multiple WITNESS_SCRIPT");
            }
            output.witnessScript = convert$1.outputs.witnessScript.decode(keyVal);
            break;
          case typeFields_1$1.OutputTypes.BIP32_DERIVATION:
            if (output.bip32Derivation === void 0) {
              output.bip32Derivation = [];
            }
            output.bip32Derivation.push(convert$1.outputs.bip32Derivation.decode(keyVal));
            break;
          case typeFields_1$1.OutputTypes.TAP_INTERNAL_KEY:
            checkKeyBuffer("output", keyVal.key, typeFields_1$1.OutputTypes.TAP_INTERNAL_KEY);
            output.tapInternalKey = convert$1.outputs.tapInternalKey.decode(keyVal);
            break;
          case typeFields_1$1.OutputTypes.TAP_TREE:
            checkKeyBuffer("output", keyVal.key, typeFields_1$1.OutputTypes.TAP_TREE);
            output.tapTree = convert$1.outputs.tapTree.decode(keyVal);
            break;
          case typeFields_1$1.OutputTypes.TAP_BIP32_DERIVATION:
            if (output.tapBip32Derivation === void 0) {
              output.tapBip32Derivation = [];
            }
            output.tapBip32Derivation.push(convert$1.outputs.tapBip32Derivation.decode(keyVal));
            break;
          default:
            if (!output.unknownKeyVals)
              output.unknownKeyVals = [];
            output.unknownKeyVals.push(keyVal);
        }
      }
      outputs2.push(output);
    }
    return {
      globalMap,
      inputs: inputs2,
      outputs: outputs2
    };
  }
  fromBuffer.psbtFromKeyVals = psbtFromKeyVals;
  var toBuffer = {};
  Object.defineProperty(toBuffer, "__esModule", {
    value: true
  });
  const convert = converter;
  const tools_1 = tools;
  function psbtToBuffer({ globalMap, inputs: inputs2, outputs: outputs2 }) {
    const { globalKeyVals, inputKeyVals, outputKeyVals } = psbtToKeyVals({
      globalMap,
      inputs: inputs2,
      outputs: outputs2
    });
    const globalBuffer = tools_1.keyValsToBuffer(globalKeyVals);
    const keyValsOrEmptyToBuffer = (keyVals) => keyVals.length === 0 ? [
      buffer.Buffer.from([
        0
      ])
    ] : keyVals.map(tools_1.keyValsToBuffer);
    const inputBuffers = keyValsOrEmptyToBuffer(inputKeyVals);
    const outputBuffers = keyValsOrEmptyToBuffer(outputKeyVals);
    const header = buffer.Buffer.allocUnsafe(5);
    header.writeUIntBE(482972169471, 0, 5);
    return buffer.Buffer.concat([
      header,
      globalBuffer
    ].concat(inputBuffers, outputBuffers));
  }
  toBuffer.psbtToBuffer = psbtToBuffer;
  const sortKeyVals = (a2, b) => {
    return a2.key.compare(b.key);
  };
  function keyValsFromMap(keyValMap, converterFactory) {
    const keyHexSet = /* @__PURE__ */ new Set();
    const keyVals = Object.entries(keyValMap).reduce((result, [key, value2]) => {
      if (key === "unknownKeyVals")
        return result;
      const converter2 = converterFactory[key];
      if (converter2 === void 0)
        return result;
      const encodedKeyVals = (Array.isArray(value2) ? value2 : [
        value2
      ]).map(converter2.encode);
      const keyHexes = encodedKeyVals.map((kv) => kv.key.toString("hex"));
      keyHexes.forEach((hex) => {
        if (keyHexSet.has(hex))
          throw new Error("Serialize Error: Duplicate key: " + hex);
        keyHexSet.add(hex);
      });
      return result.concat(encodedKeyVals);
    }, []);
    const otherKeyVals = keyValMap.unknownKeyVals ? keyValMap.unknownKeyVals.filter((keyVal) => {
      return !keyHexSet.has(keyVal.key.toString("hex"));
    }) : [];
    return keyVals.concat(otherKeyVals).sort(sortKeyVals);
  }
  function psbtToKeyVals({ globalMap, inputs: inputs2, outputs: outputs2 }) {
    return {
      globalKeyVals: keyValsFromMap(globalMap, convert.globals),
      inputKeyVals: inputs2.map((i) => keyValsFromMap(i, convert.inputs)),
      outputKeyVals: outputs2.map((o) => keyValsFromMap(o, convert.outputs))
    };
  }
  toBuffer.psbtToKeyVals = psbtToKeyVals;
  (function(exports2) {
    function __export(m) {
      for (var p in m)
        if (!exports2.hasOwnProperty(p))
          exports2[p] = m[p];
    }
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    __export(fromBuffer);
    __export(toBuffer);
  })(parser);
  Object.defineProperty(combiner, "__esModule", {
    value: true
  });
  const parser_1$1 = parser;
  function combine(psbts) {
    const self = psbts[0];
    const selfKeyVals = parser_1$1.psbtToKeyVals(self);
    const others = psbts.slice(1);
    if (others.length === 0)
      throw new Error("Combine: Nothing to combine");
    const selfTx = getTx(self);
    if (selfTx === void 0) {
      throw new Error("Combine: Self missing transaction");
    }
    const selfGlobalSet = getKeySet(selfKeyVals.globalKeyVals);
    const selfInputSets = selfKeyVals.inputKeyVals.map(getKeySet);
    const selfOutputSets = selfKeyVals.outputKeyVals.map(getKeySet);
    for (const other of others) {
      const otherTx = getTx(other);
      if (otherTx === void 0 || !otherTx.toBuffer().equals(selfTx.toBuffer())) {
        throw new Error("Combine: One of the Psbts does not have the same transaction.");
      }
      const otherKeyVals = parser_1$1.psbtToKeyVals(other);
      const otherGlobalSet = getKeySet(otherKeyVals.globalKeyVals);
      otherGlobalSet.forEach(keyPusher(selfGlobalSet, selfKeyVals.globalKeyVals, otherKeyVals.globalKeyVals));
      const otherInputSets = otherKeyVals.inputKeyVals.map(getKeySet);
      otherInputSets.forEach((inputSet, idx) => inputSet.forEach(keyPusher(selfInputSets[idx], selfKeyVals.inputKeyVals[idx], otherKeyVals.inputKeyVals[idx])));
      const otherOutputSets = otherKeyVals.outputKeyVals.map(getKeySet);
      otherOutputSets.forEach((outputSet, idx) => outputSet.forEach(keyPusher(selfOutputSets[idx], selfKeyVals.outputKeyVals[idx], otherKeyVals.outputKeyVals[idx])));
    }
    return parser_1$1.psbtFromKeyVals(selfTx, {
      globalMapKeyVals: selfKeyVals.globalKeyVals,
      inputKeyVals: selfKeyVals.inputKeyVals,
      outputKeyVals: selfKeyVals.outputKeyVals
    });
  }
  combiner.combine = combine;
  function keyPusher(selfSet, selfKeyVals, otherKeyVals) {
    return (key) => {
      if (selfSet.has(key))
        return;
      const newKv = otherKeyVals.filter((kv) => kv.key.toString("hex") === key)[0];
      selfKeyVals.push(newKv);
      selfSet.add(key);
    };
  }
  function getTx(psbt2) {
    return psbt2.globalMap.unsignedTx;
  }
  function getKeySet(keyVals) {
    const set = /* @__PURE__ */ new Set();
    keyVals.forEach((keyVal) => {
      const hex = keyVal.key.toString("hex");
      if (set.has(hex))
        throw new Error("Combine: KeyValue Map keys should be unique");
      set.add(hex);
    });
    return set;
  }
  var utils = {};
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    const converter$1 = converter;
    function checkForInput(inputs2, inputIndex) {
      const input = inputs2[inputIndex];
      if (input === void 0)
        throw new Error(`No input #${inputIndex}`);
      return input;
    }
    exports2.checkForInput = checkForInput;
    function checkForOutput(outputs2, outputIndex) {
      const output = outputs2[outputIndex];
      if (output === void 0)
        throw new Error(`No output #${outputIndex}`);
      return output;
    }
    exports2.checkForOutput = checkForOutput;
    function checkHasKey(checkKeyVal, keyVals, enumLength) {
      if (checkKeyVal.key[0] < enumLength) {
        throw new Error(`Use the method for your specific key instead of addUnknownKeyVal*`);
      }
      if (keyVals && keyVals.filter((kv) => kv.key.equals(checkKeyVal.key)).length !== 0) {
        throw new Error(`Duplicate Key: ${checkKeyVal.key.toString("hex")}`);
      }
    }
    exports2.checkHasKey = checkHasKey;
    function getEnumLength(myenum) {
      let count = 0;
      Object.keys(myenum).forEach((val) => {
        if (Number(isNaN(Number(val)))) {
          count++;
        }
      });
      return count;
    }
    exports2.getEnumLength = getEnumLength;
    function inputCheckUncleanFinalized(inputIndex, input) {
      let result = false;
      if (input.nonWitnessUtxo || input.witnessUtxo) {
        const needScriptSig = !!input.redeemScript;
        const needWitnessScript = !!input.witnessScript;
        const scriptSigOK = !needScriptSig || !!input.finalScriptSig;
        const witnessScriptOK = !needWitnessScript || !!input.finalScriptWitness;
        const hasOneFinal = !!input.finalScriptSig || !!input.finalScriptWitness;
        result = scriptSigOK && witnessScriptOK && hasOneFinal;
      }
      if (result === false) {
        throw new Error(`Input #${inputIndex} has too much or too little data to clean`);
      }
    }
    exports2.inputCheckUncleanFinalized = inputCheckUncleanFinalized;
    function throwForUpdateMaker(typeName2, name, expected, data) {
      throw new Error(`Data for ${typeName2} key ${name} is incorrect: Expected ${expected} and got ${JSON.stringify(data)}`);
    }
    function updateMaker(typeName2) {
      return (updateData, mainData) => {
        for (const name of Object.keys(updateData)) {
          const data = updateData[name];
          const { canAdd: canAdd2, canAddToArray: canAddToArray2, check: check2, expected } = converter$1[typeName2 + "s"][name] || {};
          const isArray = !!canAddToArray2;
          if (check2) {
            if (isArray) {
              if (!Array.isArray(data) || mainData[name] && !Array.isArray(mainData[name])) {
                throw new Error(`Key type ${name} must be an array`);
              }
              if (!data.every(check2)) {
                throwForUpdateMaker(typeName2, name, expected, data);
              }
              const arr = mainData[name] || [];
              const dupeCheckSet = /* @__PURE__ */ new Set();
              if (!data.every((v2) => canAddToArray2(arr, v2, dupeCheckSet))) {
                throw new Error("Can not add duplicate data to array");
              }
              mainData[name] = arr.concat(data);
            } else {
              if (!check2(data)) {
                throwForUpdateMaker(typeName2, name, expected, data);
              }
              if (!canAdd2(mainData, data)) {
                throw new Error(`Can not add duplicate data to ${typeName2}`);
              }
              mainData[name] = data;
            }
          }
        }
      };
    }
    exports2.updateGlobal = updateMaker("global");
    exports2.updateInput = updateMaker("input");
    exports2.updateOutput = updateMaker("output");
    function addInputAttributes(inputs2, data) {
      const index = inputs2.length - 1;
      const input = checkForInput(inputs2, index);
      exports2.updateInput(data, input);
    }
    exports2.addInputAttributes = addInputAttributes;
    function addOutputAttributes(outputs2, data) {
      const index = outputs2.length - 1;
      const output = checkForOutput(outputs2, index);
      exports2.updateOutput(data, output);
    }
    exports2.addOutputAttributes = addOutputAttributes;
    function defaultVersionSetter(version, txBuf) {
      if (!buffer.Buffer.isBuffer(txBuf) || txBuf.length < 4) {
        throw new Error("Set Version: Invalid Transaction");
      }
      txBuf.writeUInt32LE(version, 0);
      return txBuf;
    }
    exports2.defaultVersionSetter = defaultVersionSetter;
    function defaultLocktimeSetter(locktime, txBuf) {
      if (!buffer.Buffer.isBuffer(txBuf) || txBuf.length < 4) {
        throw new Error("Set Locktime: Invalid Transaction");
      }
      txBuf.writeUInt32LE(locktime, txBuf.length - 4);
      return txBuf;
    }
    exports2.defaultLocktimeSetter = defaultLocktimeSetter;
  })(utils);
  Object.defineProperty(psbt, "__esModule", {
    value: true
  });
  const combiner_1 = combiner;
  const parser_1 = parser;
  const typeFields_1 = typeFields;
  const utils_1$1 = utils;
  let Psbt$1 = class Psbt {
    constructor(tx) {
      this.inputs = [];
      this.outputs = [];
      this.globalMap = {
        unsignedTx: tx
      };
    }
    static fromBase64(data, txFromBuffer) {
      const buffer$1 = buffer.Buffer.from(data, "base64");
      return this.fromBuffer(buffer$1, txFromBuffer);
    }
    static fromHex(data, txFromBuffer) {
      const buffer$1 = buffer.Buffer.from(data, "hex");
      return this.fromBuffer(buffer$1, txFromBuffer);
    }
    static fromBuffer(buffer2, txFromBuffer) {
      const results = parser_1.psbtFromBuffer(buffer2, txFromBuffer);
      const psbt2 = new this(results.globalMap.unsignedTx);
      Object.assign(psbt2, results);
      return psbt2;
    }
    toBase64() {
      const buffer2 = this.toBuffer();
      return buffer2.toString("base64");
    }
    toHex() {
      const buffer2 = this.toBuffer();
      return buffer2.toString("hex");
    }
    toBuffer() {
      return parser_1.psbtToBuffer(this);
    }
    updateGlobal(updateData) {
      utils_1$1.updateGlobal(updateData, this.globalMap);
      return this;
    }
    updateInput(inputIndex, updateData) {
      const input = utils_1$1.checkForInput(this.inputs, inputIndex);
      utils_1$1.updateInput(updateData, input);
      return this;
    }
    updateOutput(outputIndex, updateData) {
      const output = utils_1$1.checkForOutput(this.outputs, outputIndex);
      utils_1$1.updateOutput(updateData, output);
      return this;
    }
    addUnknownKeyValToGlobal(keyVal) {
      utils_1$1.checkHasKey(keyVal, this.globalMap.unknownKeyVals, utils_1$1.getEnumLength(typeFields_1.GlobalTypes));
      if (!this.globalMap.unknownKeyVals)
        this.globalMap.unknownKeyVals = [];
      this.globalMap.unknownKeyVals.push(keyVal);
      return this;
    }
    addUnknownKeyValToInput(inputIndex, keyVal) {
      const input = utils_1$1.checkForInput(this.inputs, inputIndex);
      utils_1$1.checkHasKey(keyVal, input.unknownKeyVals, utils_1$1.getEnumLength(typeFields_1.InputTypes));
      if (!input.unknownKeyVals)
        input.unknownKeyVals = [];
      input.unknownKeyVals.push(keyVal);
      return this;
    }
    addUnknownKeyValToOutput(outputIndex, keyVal) {
      const output = utils_1$1.checkForOutput(this.outputs, outputIndex);
      utils_1$1.checkHasKey(keyVal, output.unknownKeyVals, utils_1$1.getEnumLength(typeFields_1.OutputTypes));
      if (!output.unknownKeyVals)
        output.unknownKeyVals = [];
      output.unknownKeyVals.push(keyVal);
      return this;
    }
    addInput(inputData) {
      this.globalMap.unsignedTx.addInput(inputData);
      this.inputs.push({
        unknownKeyVals: []
      });
      const addKeyVals = inputData.unknownKeyVals || [];
      const inputIndex = this.inputs.length - 1;
      if (!Array.isArray(addKeyVals)) {
        throw new Error("unknownKeyVals must be an Array");
      }
      addKeyVals.forEach((keyVal) => this.addUnknownKeyValToInput(inputIndex, keyVal));
      utils_1$1.addInputAttributes(this.inputs, inputData);
      return this;
    }
    addOutput(outputData) {
      this.globalMap.unsignedTx.addOutput(outputData);
      this.outputs.push({
        unknownKeyVals: []
      });
      const addKeyVals = outputData.unknownKeyVals || [];
      const outputIndex = this.outputs.length - 1;
      if (!Array.isArray(addKeyVals)) {
        throw new Error("unknownKeyVals must be an Array");
      }
      addKeyVals.forEach((keyVal) => this.addUnknownKeyValToInput(outputIndex, keyVal));
      utils_1$1.addOutputAttributes(this.outputs, outputData);
      return this;
    }
    clearFinalizedInput(inputIndex) {
      const input = utils_1$1.checkForInput(this.inputs, inputIndex);
      utils_1$1.inputCheckUncleanFinalized(inputIndex, input);
      for (const key of Object.keys(input)) {
        if (![
          "witnessUtxo",
          "nonWitnessUtxo",
          "finalScriptSig",
          "finalScriptWitness",
          "unknownKeyVals"
        ].includes(key)) {
          delete input[key];
        }
      }
      return this;
    }
    combine(...those) {
      const result = combiner_1.combine([
        this
      ].concat(those));
      Object.assign(this, result);
      return this;
    }
    getTransaction() {
      return this.globalMap.unsignedTx.toBuffer();
    }
  };
  psbt.Psbt = Psbt$1;
  var bip371 = {};
  var psbtutils = {};
  Object.defineProperty(psbtutils, "__esModule", {
    value: true
  });
  psbtutils.signatureBlocksAction = psbtutils.checkInputForSig = psbtutils.pubkeyInScript = psbtutils.pubkeyPositionInScript = psbtutils.witnessStackToScriptWitness = psbtutils.isP2TR = psbtutils.isP2SHScript = psbtutils.isP2WSHScript = psbtutils.isP2WPKH = psbtutils.isP2PKH = psbtutils.isP2PK = psbtutils.isP2MS = void 0;
  const varuint$1 = varint;
  const bscript$1 = script;
  const transaction_1$2 = transaction;
  const crypto_1 = crypto$1;
  const payments$1 = payments$3;
  function isPaymentFactory(payment) {
    return (script2) => {
      try {
        payment({
          output: script2
        });
        return true;
      } catch (err) {
        return false;
      }
    };
  }
  psbtutils.isP2MS = isPaymentFactory(payments$1.p2ms);
  psbtutils.isP2PK = isPaymentFactory(payments$1.p2pk);
  psbtutils.isP2PKH = isPaymentFactory(payments$1.p2pkh);
  psbtutils.isP2WPKH = isPaymentFactory(payments$1.p2wpkh);
  psbtutils.isP2WSHScript = isPaymentFactory(payments$1.p2wsh);
  psbtutils.isP2SHScript = isPaymentFactory(payments$1.p2sh);
  psbtutils.isP2TR = isPaymentFactory(payments$1.p2tr);
  function witnessStackToScriptWitness(witness) {
    let buffer$1 = buffer.Buffer.allocUnsafe(0);
    function writeSlice(slice2) {
      buffer$1 = buffer.Buffer.concat([
        buffer$1,
        buffer.Buffer.from(slice2)
      ]);
    }
    function writeVarInt(i) {
      const currentLen = buffer$1.length;
      const varintLen = varuint$1.encodingLength(i);
      buffer$1 = buffer.Buffer.concat([
        buffer$1,
        buffer.Buffer.allocUnsafe(varintLen)
      ]);
      varuint$1.encode(i, buffer$1, currentLen);
    }
    function writeVarSlice(slice2) {
      writeVarInt(slice2.length);
      writeSlice(slice2);
    }
    function writeVector(vector) {
      writeVarInt(vector.length);
      vector.forEach(writeVarSlice);
    }
    writeVector(witness);
    return buffer$1;
  }
  psbtutils.witnessStackToScriptWitness = witnessStackToScriptWitness;
  function pubkeyPositionInScript(pubkey, script2) {
    const pubkeyHash = (0, crypto_1.hash160)(pubkey);
    const pubkeyXOnly = pubkey.slice(1, 33);
    const decompiled = bscript$1.decompile(script2);
    if (decompiled === null)
      throw new Error("Unknown script error");
    return decompiled.findIndex((element2) => {
      if (typeof element2 === "number")
        return false;
      return element2.equals(pubkey) || element2.equals(pubkeyHash) || element2.equals(pubkeyXOnly);
    });
  }
  psbtutils.pubkeyPositionInScript = pubkeyPositionInScript;
  function pubkeyInScript(pubkey, script2) {
    return pubkeyPositionInScript(pubkey, script2) !== -1;
  }
  psbtutils.pubkeyInScript = pubkeyInScript;
  function checkInputForSig(input, action) {
    const pSigs = extractPartialSigs(input);
    return pSigs.some((pSig) => signatureBlocksAction(pSig, bscript$1.signature.decode, action));
  }
  psbtutils.checkInputForSig = checkInputForSig;
  function signatureBlocksAction(signature, signatureDecodeFn, action) {
    const { hashType } = signatureDecodeFn(signature);
    const whitelist = [];
    const isAnyoneCanPay = hashType & transaction_1$2.Transaction.SIGHASH_ANYONECANPAY;
    if (isAnyoneCanPay)
      whitelist.push("addInput");
    const hashMod = hashType & 31;
    switch (hashMod) {
      case transaction_1$2.Transaction.SIGHASH_ALL:
        break;
      case transaction_1$2.Transaction.SIGHASH_SINGLE:
      case transaction_1$2.Transaction.SIGHASH_NONE:
        whitelist.push("addOutput");
        whitelist.push("setInputSequence");
        break;
    }
    if (whitelist.indexOf(action) === -1) {
      return true;
    }
    return false;
  }
  psbtutils.signatureBlocksAction = signatureBlocksAction;
  function extractPartialSigs(input) {
    let pSigs = [];
    if ((input.partialSig || []).length === 0) {
      if (!input.finalScriptSig && !input.finalScriptWitness)
        return [];
      pSigs = getPsigsFromInputFinalScripts(input);
    } else {
      pSigs = input.partialSig;
    }
    return pSigs.map((p) => p.signature);
  }
  function getPsigsFromInputFinalScripts(input) {
    const scriptItems = !input.finalScriptSig ? [] : bscript$1.decompile(input.finalScriptSig) || [];
    const witnessItems = !input.finalScriptWitness ? [] : bscript$1.decompile(input.finalScriptWitness) || [];
    return scriptItems.concat(witnessItems).filter((item) => {
      return buffer.Buffer.isBuffer(item) && bscript$1.isCanonicalScriptSignature(item);
    }).map((sig) => ({
      signature: sig
    }));
  }
  Object.defineProperty(bip371, "__esModule", {
    value: true
  });
  bip371.checkTaprootInputForSigs = bip371.tapTreeFromList = bip371.tapTreeToList = bip371.tweakInternalPubKey = bip371.checkTaprootOutputFields = bip371.checkTaprootInputFields = bip371.isTaprootOutput = bip371.isTaprootInput = bip371.serializeTaprootSignature = bip371.tapScriptFinalizer = bip371.toXOnly = void 0;
  const types_1 = types$8;
  const transaction_1$1 = transaction;
  const psbtutils_1$1 = psbtutils;
  const bip341_1$1 = bip341;
  const payments_1 = payments$3;
  const psbtutils_2 = psbtutils;
  const toXOnly$1 = (pubKey) => pubKey.length === 32 ? pubKey : pubKey.slice(1, 33);
  bip371.toXOnly = toXOnly$1;
  function tapScriptFinalizer(inputIndex, input, tapLeafHashToFinalize) {
    const tapLeaf = findTapLeafToFinalize(input, inputIndex, tapLeafHashToFinalize);
    try {
      const sigs = sortSignatures(input, tapLeaf);
      const witness = sigs.concat(tapLeaf.script).concat(tapLeaf.controlBlock);
      return {
        finalScriptWitness: (0, psbtutils_1$1.witnessStackToScriptWitness)(witness)
      };
    } catch (err) {
      throw new Error(`Can not finalize taproot input #${inputIndex}: ${err}`);
    }
  }
  bip371.tapScriptFinalizer = tapScriptFinalizer;
  function serializeTaprootSignature(sig, sighashType2) {
    const sighashTypeByte = sighashType2 ? buffer.Buffer.from([
      sighashType2
    ]) : buffer.Buffer.from([]);
    return buffer.Buffer.concat([
      sig,
      sighashTypeByte
    ]);
  }
  bip371.serializeTaprootSignature = serializeTaprootSignature;
  function isTaprootInput(input) {
    return input && !!(input.tapInternalKey || input.tapMerkleRoot || input.tapLeafScript && input.tapLeafScript.length || input.tapBip32Derivation && input.tapBip32Derivation.length || input.witnessUtxo && (0, psbtutils_1$1.isP2TR)(input.witnessUtxo.script));
  }
  bip371.isTaprootInput = isTaprootInput;
  function isTaprootOutput(output, script2) {
    return output && !!(output.tapInternalKey || output.tapTree || output.tapBip32Derivation && output.tapBip32Derivation.length || script2 && (0, psbtutils_1$1.isP2TR)(script2));
  }
  bip371.isTaprootOutput = isTaprootOutput;
  function checkTaprootInputFields(inputData, newInputData, action) {
    checkMixedTaprootAndNonTaprootInputFields(inputData, newInputData, action);
    checkIfTapLeafInTree(inputData, newInputData, action);
  }
  bip371.checkTaprootInputFields = checkTaprootInputFields;
  function checkTaprootOutputFields(outputData, newOutputData, action) {
    checkMixedTaprootAndNonTaprootOutputFields(outputData, newOutputData, action);
    checkTaprootScriptPubkey(outputData, newOutputData);
  }
  bip371.checkTaprootOutputFields = checkTaprootOutputFields;
  function checkTaprootScriptPubkey(outputData, newOutputData) {
    if (!newOutputData.tapTree && !newOutputData.tapInternalKey)
      return;
    const tapInternalKey2 = newOutputData.tapInternalKey || outputData.tapInternalKey;
    const tapTree2 = newOutputData.tapTree || outputData.tapTree;
    if (tapInternalKey2) {
      const { script: scriptPubkey } = outputData;
      const script2 = getTaprootScripPubkey(tapInternalKey2, tapTree2);
      if (scriptPubkey && !scriptPubkey.equals(script2))
        throw new Error("Error adding output. Script or address missmatch.");
    }
  }
  function getTaprootScripPubkey(tapInternalKey2, tapTree2) {
    const scriptTree = tapTree2 && tapTreeFromList(tapTree2.leaves);
    const { output } = (0, payments_1.p2tr)({
      internalPubkey: tapInternalKey2,
      scriptTree
    });
    return output;
  }
  function tweakInternalPubKey(inputIndex, input) {
    const tapInternalKey2 = input.tapInternalKey;
    const outputKey = tapInternalKey2 && (0, bip341_1$1.tweakKey)(tapInternalKey2, input.tapMerkleRoot);
    if (!outputKey)
      throw new Error(`Cannot tweak tap internal key for input #${inputIndex}. Public key: ${tapInternalKey2 && tapInternalKey2.toString("hex")}`);
    return outputKey.x;
  }
  bip371.tweakInternalPubKey = tweakInternalPubKey;
  function tapTreeToList(tree) {
    if (!(0, types_1.isTaptree)(tree))
      throw new Error("Cannot convert taptree to tapleaf list. Expecting a tapree structure.");
    return _tapTreeToList(tree);
  }
  bip371.tapTreeToList = tapTreeToList;
  function tapTreeFromList(leaves = []) {
    if (leaves.length === 1 && leaves[0].depth === 0)
      return {
        output: leaves[0].script,
        version: leaves[0].leafVersion
      };
    return instertLeavesInTree(leaves);
  }
  bip371.tapTreeFromList = tapTreeFromList;
  function checkTaprootInputForSigs(input, action) {
    const sigs = extractTaprootSigs(input);
    return sigs.some((sig) => (0, psbtutils_2.signatureBlocksAction)(sig, decodeSchnorrSignature, action));
  }
  bip371.checkTaprootInputForSigs = checkTaprootInputForSigs;
  function decodeSchnorrSignature(signature) {
    return {
      signature: signature.slice(0, 64),
      hashType: signature.slice(64)[0] || transaction_1$1.Transaction.SIGHASH_DEFAULT
    };
  }
  function extractTaprootSigs(input) {
    const sigs = [];
    if (input.tapKeySig)
      sigs.push(input.tapKeySig);
    if (input.tapScriptSig)
      sigs.push(...input.tapScriptSig.map((s) => s.signature));
    if (!sigs.length) {
      const finalTapKeySig = getTapKeySigFromWithness(input.finalScriptWitness);
      if (finalTapKeySig)
        sigs.push(finalTapKeySig);
    }
    return sigs;
  }
  function getTapKeySigFromWithness(finalScriptWitness2) {
    if (!finalScriptWitness2)
      return;
    const witness = finalScriptWitness2.slice(2);
    if (witness.length === 64 || witness.length === 65)
      return witness;
  }
  function _tapTreeToList(tree, leaves = [], depth = 0) {
    if (depth > bip341_1$1.MAX_TAPTREE_DEPTH)
      throw new Error("Max taptree depth exceeded.");
    if (!tree)
      return [];
    if ((0, types_1.isTapleaf)(tree)) {
      leaves.push({
        depth,
        leafVersion: tree.version || bip341_1$1.LEAF_VERSION_TAPSCRIPT,
        script: tree.output
      });
      return leaves;
    }
    if (tree[0])
      _tapTreeToList(tree[0], leaves, depth + 1);
    if (tree[1])
      _tapTreeToList(tree[1], leaves, depth + 1);
    return leaves;
  }
  function instertLeavesInTree(leaves) {
    let tree;
    for (const leaf of leaves) {
      tree = instertLeafInTree(leaf, tree);
      if (!tree)
        throw new Error(`No room left to insert tapleaf in tree`);
    }
    return tree;
  }
  function instertLeafInTree(leaf, tree, depth = 0) {
    if (depth > bip341_1$1.MAX_TAPTREE_DEPTH)
      throw new Error("Max taptree depth exceeded.");
    if (leaf.depth === depth) {
      if (!tree)
        return {
          output: leaf.script,
          version: leaf.leafVersion
        };
      return;
    }
    if ((0, types_1.isTapleaf)(tree))
      return;
    const leftSide = instertLeafInTree(leaf, tree && tree[0], depth + 1);
    if (leftSide)
      return [
        leftSide,
        tree && tree[1]
      ];
    const rightSide = instertLeafInTree(leaf, tree && tree[1], depth + 1);
    if (rightSide)
      return [
        tree && tree[0],
        rightSide
      ];
  }
  function checkMixedTaprootAndNonTaprootInputFields(inputData, newInputData, action) {
    const isBadTaprootUpdate = isTaprootInput(inputData) && hasNonTaprootFields(newInputData);
    const isBadNonTaprootUpdate = hasNonTaprootFields(inputData) && isTaprootInput(newInputData);
    const hasMixedFields = inputData === newInputData && isTaprootInput(newInputData) && hasNonTaprootFields(newInputData);
    if (isBadTaprootUpdate || isBadNonTaprootUpdate || hasMixedFields)
      throw new Error(`Invalid arguments for Psbt.${action}. Cannot use both taproot and non-taproot fields.`);
  }
  function checkMixedTaprootAndNonTaprootOutputFields(inputData, newInputData, action) {
    const isBadTaprootUpdate = isTaprootOutput(inputData) && hasNonTaprootFields(newInputData);
    const isBadNonTaprootUpdate = hasNonTaprootFields(inputData) && isTaprootOutput(newInputData);
    const hasMixedFields = inputData === newInputData && isTaprootOutput(newInputData) && hasNonTaprootFields(newInputData);
    if (isBadTaprootUpdate || isBadNonTaprootUpdate || hasMixedFields)
      throw new Error(`Invalid arguments for Psbt.${action}. Cannot use both taproot and non-taproot fields.`);
  }
  function checkIfTapLeafInTree(inputData, newInputData, action) {
    if (newInputData.tapMerkleRoot) {
      const newLeafsInTree = (newInputData.tapLeafScript || []).every((l) => isTapLeafInTree(l, newInputData.tapMerkleRoot));
      const oldLeafsInTree = (inputData.tapLeafScript || []).every((l) => isTapLeafInTree(l, newInputData.tapMerkleRoot));
      if (!newLeafsInTree || !oldLeafsInTree)
        throw new Error(`Invalid arguments for Psbt.${action}. Tapleaf not part of taptree.`);
    } else if (inputData.tapMerkleRoot) {
      const newLeafsInTree = (newInputData.tapLeafScript || []).every((l) => isTapLeafInTree(l, inputData.tapMerkleRoot));
      if (!newLeafsInTree)
        throw new Error(`Invalid arguments for Psbt.${action}. Tapleaf not part of taptree.`);
    }
  }
  function isTapLeafInTree(tapLeaf, merkleRoot) {
    if (!merkleRoot)
      return true;
    const leafHash = (0, bip341_1$1.tapleafHash)({
      output: tapLeaf.script,
      version: tapLeaf.leafVersion
    });
    const rootHash = (0, bip341_1$1.rootHashFromPath)(tapLeaf.controlBlock, leafHash);
    return rootHash.equals(merkleRoot);
  }
  function sortSignatures(input, tapLeaf) {
    const leafHash = (0, bip341_1$1.tapleafHash)({
      output: tapLeaf.script,
      version: tapLeaf.leafVersion
    });
    return (input.tapScriptSig || []).filter((tss) => tss.leafHash.equals(leafHash)).map((tss) => addPubkeyPositionInScript(tapLeaf.script, tss)).sort((t1, t2) => t2.positionInScript - t1.positionInScript).map((t) => t.signature);
  }
  function addPubkeyPositionInScript(script2, tss) {
    return Object.assign({
      positionInScript: (0, psbtutils_1$1.pubkeyPositionInScript)(tss.pubkey, script2)
    }, tss);
  }
  function findTapLeafToFinalize(input, inputIndex, leafHashToFinalize) {
    if (!input.tapScriptSig || !input.tapScriptSig.length)
      throw new Error(`Can not finalize taproot input #${inputIndex}. No tapleaf script signature provided.`);
    const tapLeaf = (input.tapLeafScript || []).sort((a2, b) => a2.controlBlock.length - b.controlBlock.length).find((leaf) => canFinalizeLeaf(leaf, input.tapScriptSig, leafHashToFinalize));
    if (!tapLeaf)
      throw new Error(`Can not finalize taproot input #${inputIndex}. Signature for tapleaf script not found.`);
    return tapLeaf;
  }
  function canFinalizeLeaf(leaf, tapScriptSig2, hash2) {
    const leafHash = (0, bip341_1$1.tapleafHash)({
      output: leaf.script,
      version: leaf.leafVersion
    });
    const whiteListedHash = !hash2 || hash2.equals(leafHash);
    return whiteListedHash && tapScriptSig2.find((tss) => tss.leafHash.equals(leafHash)) !== void 0;
  }
  function hasNonTaprootFields(io) {
    return io && !!(io.redeemScript || io.witnessScript || io.bip32Derivation && io.bip32Derivation.length);
  }
  Object.defineProperty(psbt$1, "__esModule", {
    value: true
  });
  psbt$1.Psbt = void 0;
  const bip174_1 = psbt;
  const varuint = varint;
  const utils_1 = utils;
  const address_1 = address;
  const bufferutils_1 = bufferutils;
  const networks_1 = networks$3;
  const payments = payments$3;
  const bip341_1 = bip341;
  const bscript = script;
  const transaction_1 = transaction;
  const bip371_1 = bip371;
  const psbtutils_1 = psbtutils;
  const DEFAULT_OPTS = {
    network: networks_1.bitcoin,
    maximumFeeRate: 5e3
  };
  class Psbt {
    static fromBase64(data, opts = {}) {
      const buffer$1 = buffer.Buffer.from(data, "base64");
      return this.fromBuffer(buffer$1, opts);
    }
    static fromHex(data, opts = {}) {
      const buffer$1 = buffer.Buffer.from(data, "hex");
      return this.fromBuffer(buffer$1, opts);
    }
    static fromBuffer(buffer2, opts = {}) {
      const psbtBase = bip174_1.Psbt.fromBuffer(buffer2, transactionFromBuffer);
      const psbt2 = new Psbt(opts, psbtBase);
      checkTxForDupeIns(psbt2.__CACHE.__TX, psbt2.__CACHE);
      return psbt2;
    }
    constructor(opts = {}, data = new bip174_1.Psbt(new PsbtTransaction())) {
      this.data = data;
      this.opts = Object.assign({}, DEFAULT_OPTS, opts);
      this.__CACHE = {
        __NON_WITNESS_UTXO_TX_CACHE: [],
        __NON_WITNESS_UTXO_BUF_CACHE: [],
        __TX_IN_CACHE: {},
        __TX: this.data.globalMap.unsignedTx.tx,
        __UNSAFE_SIGN_NONSEGWIT: false
      };
      if (this.data.inputs.length === 0)
        this.setVersion(2);
      const dpew = (obj, attr, enumerable, writable) => Object.defineProperty(obj, attr, {
        enumerable,
        writable
      });
      dpew(this, "__CACHE", false, true);
      dpew(this, "opts", false, true);
    }
    get inputCount() {
      return this.data.inputs.length;
    }
    get version() {
      return this.__CACHE.__TX.version;
    }
    set version(version) {
      this.setVersion(version);
    }
    get locktime() {
      return this.__CACHE.__TX.locktime;
    }
    set locktime(locktime) {
      this.setLocktime(locktime);
    }
    get txInputs() {
      return this.__CACHE.__TX.ins.map((input) => ({
        hash: (0, bufferutils_1.cloneBuffer)(input.hash),
        index: input.index,
        sequence: input.sequence
      }));
    }
    get txOutputs() {
      return this.__CACHE.__TX.outs.map((output) => {
        let address2;
        try {
          address2 = (0, address_1.fromOutputScript)(output.script, this.opts.network);
        } catch (_) {
        }
        return {
          script: (0, bufferutils_1.cloneBuffer)(output.script),
          value: output.value,
          address: address2
        };
      });
    }
    combine(...those) {
      this.data.combine(...those.map((o) => o.data));
      return this;
    }
    clone() {
      const res = Psbt.fromBuffer(this.data.toBuffer());
      res.opts = JSON.parse(JSON.stringify(this.opts));
      return res;
    }
    setMaximumFeeRate(satoshiPerByte) {
      check32Bit(satoshiPerByte);
      this.opts.maximumFeeRate = satoshiPerByte;
    }
    setVersion(version) {
      check32Bit(version);
      checkInputsForPartialSig(this.data.inputs, "setVersion");
      const c = this.__CACHE;
      c.__TX.version = version;
      c.__EXTRACTED_TX = void 0;
      return this;
    }
    setLocktime(locktime) {
      check32Bit(locktime);
      checkInputsForPartialSig(this.data.inputs, "setLocktime");
      const c = this.__CACHE;
      c.__TX.locktime = locktime;
      c.__EXTRACTED_TX = void 0;
      return this;
    }
    setInputSequence(inputIndex, sequence) {
      check32Bit(sequence);
      checkInputsForPartialSig(this.data.inputs, "setInputSequence");
      const c = this.__CACHE;
      if (c.__TX.ins.length <= inputIndex) {
        throw new Error("Input index too high");
      }
      c.__TX.ins[inputIndex].sequence = sequence;
      c.__EXTRACTED_TX = void 0;
      return this;
    }
    addInputs(inputDatas) {
      inputDatas.forEach((inputData) => this.addInput(inputData));
      return this;
    }
    addInput(inputData) {
      if (arguments.length > 1 || !inputData || inputData.hash === void 0 || inputData.index === void 0) {
        throw new Error(`Invalid arguments for Psbt.addInput. Requires single object with at least [hash] and [index]`);
      }
      (0, bip371_1.checkTaprootInputFields)(inputData, inputData, "addInput");
      checkInputsForPartialSig(this.data.inputs, "addInput");
      if (inputData.witnessScript)
        checkInvalidP2WSH(inputData.witnessScript);
      const c = this.__CACHE;
      this.data.addInput(inputData);
      const txIn = c.__TX.ins[c.__TX.ins.length - 1];
      checkTxInputCache(c, txIn);
      const inputIndex = this.data.inputs.length - 1;
      const input = this.data.inputs[inputIndex];
      if (input.nonWitnessUtxo) {
        addNonWitnessTxCache(this.__CACHE, input, inputIndex);
      }
      c.__FEE = void 0;
      c.__FEE_RATE = void 0;
      c.__EXTRACTED_TX = void 0;
      return this;
    }
    addOutputs(outputDatas) {
      outputDatas.forEach((outputData) => this.addOutput(outputData));
      return this;
    }
    addOutput(outputData) {
      if (arguments.length > 1 || !outputData || outputData.value === void 0 || outputData.address === void 0 && outputData.script === void 0) {
        throw new Error(`Invalid arguments for Psbt.addOutput. Requires single object with at least [script or address] and [value]`);
      }
      checkInputsForPartialSig(this.data.inputs, "addOutput");
      const { address: address2 } = outputData;
      if (typeof address2 === "string") {
        const { network } = this.opts;
        const script2 = (0, address_1.toOutputScript)(address2, network);
        outputData = Object.assign(outputData, {
          script: script2
        });
      }
      (0, bip371_1.checkTaprootOutputFields)(outputData, outputData, "addOutput");
      const c = this.__CACHE;
      this.data.addOutput(outputData);
      c.__FEE = void 0;
      c.__FEE_RATE = void 0;
      c.__EXTRACTED_TX = void 0;
      return this;
    }
    extractTransaction(disableFeeCheck) {
      if (!this.data.inputs.every(isFinalized))
        throw new Error("Not finalized");
      const c = this.__CACHE;
      if (!disableFeeCheck) {
        checkFees(this, c, this.opts);
      }
      if (c.__EXTRACTED_TX)
        return c.__EXTRACTED_TX;
      const tx = c.__TX.clone();
      inputFinalizeGetAmts(this.data.inputs, tx, c, true);
      return tx;
    }
    getFeeRate() {
      return getTxCacheValue("__FEE_RATE", "fee rate", this.data.inputs, this.__CACHE);
    }
    getFee() {
      return getTxCacheValue("__FEE", "fee", this.data.inputs, this.__CACHE);
    }
    finalizeAllInputs() {
      (0, utils_1.checkForInput)(this.data.inputs, 0);
      range(this.data.inputs.length).forEach((idx) => this.finalizeInput(idx));
      return this;
    }
    finalizeInput(inputIndex, finalScriptsFunc) {
      const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
      if ((0, bip371_1.isTaprootInput)(input))
        return this._finalizeTaprootInput(inputIndex, input, void 0, finalScriptsFunc);
      return this._finalizeInput(inputIndex, input, finalScriptsFunc);
    }
    finalizeTaprootInput(inputIndex, tapLeafHashToFinalize, finalScriptsFunc = bip371_1.tapScriptFinalizer) {
      const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
      if ((0, bip371_1.isTaprootInput)(input))
        return this._finalizeTaprootInput(inputIndex, input, tapLeafHashToFinalize, finalScriptsFunc);
      throw new Error(`Cannot finalize input #${inputIndex}. Not Taproot.`);
    }
    _finalizeInput(inputIndex, input, finalScriptsFunc = getFinalScripts) {
      const { script: script2, isP2SH, isP2WSH, isSegwit } = getScriptFromInput(inputIndex, input, this.__CACHE);
      if (!script2)
        throw new Error(`No script found for input #${inputIndex}`);
      checkPartialSigSighashes(input);
      const { finalScriptSig: finalScriptSig2, finalScriptWitness: finalScriptWitness2 } = finalScriptsFunc(inputIndex, input, script2, isSegwit, isP2SH, isP2WSH);
      if (finalScriptSig2)
        this.data.updateInput(inputIndex, {
          finalScriptSig: finalScriptSig2
        });
      if (finalScriptWitness2)
        this.data.updateInput(inputIndex, {
          finalScriptWitness: finalScriptWitness2
        });
      if (!finalScriptSig2 && !finalScriptWitness2)
        throw new Error(`Unknown error finalizing input #${inputIndex}`);
      this.data.clearFinalizedInput(inputIndex);
      return this;
    }
    _finalizeTaprootInput(inputIndex, input, tapLeafHashToFinalize, finalScriptsFunc = bip371_1.tapScriptFinalizer) {
      if (!input.witnessUtxo)
        throw new Error(`Cannot finalize input #${inputIndex}. Missing withness utxo.`);
      if (input.tapKeySig) {
        const payment = payments.p2tr({
          output: input.witnessUtxo.script,
          signature: input.tapKeySig
        });
        const finalScriptWitness2 = (0, psbtutils_1.witnessStackToScriptWitness)(payment.witness);
        this.data.updateInput(inputIndex, {
          finalScriptWitness: finalScriptWitness2
        });
      } else {
        const { finalScriptWitness: finalScriptWitness2 } = finalScriptsFunc(inputIndex, input, tapLeafHashToFinalize);
        this.data.updateInput(inputIndex, {
          finalScriptWitness: finalScriptWitness2
        });
      }
      this.data.clearFinalizedInput(inputIndex);
      return this;
    }
    getInputType(inputIndex) {
      const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
      const script2 = getScriptFromUtxo(inputIndex, input, this.__CACHE);
      const result = getMeaningfulScript(script2, inputIndex, "input", input.redeemScript || redeemFromFinalScriptSig(input.finalScriptSig), input.witnessScript || redeemFromFinalWitnessScript(input.finalScriptWitness));
      const type = result.type === "raw" ? "" : result.type + "-";
      const mainType = classifyScript(result.meaningfulScript);
      return type + mainType;
    }
    inputHasPubkey(inputIndex, pubkey) {
      const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
      return pubkeyInInput(pubkey, input, inputIndex, this.__CACHE);
    }
    inputHasHDKey(inputIndex, root) {
      const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
      const derivationIsMine = bip32DerivationIsMine(root);
      return !!input.bip32Derivation && input.bip32Derivation.some(derivationIsMine);
    }
    outputHasPubkey(outputIndex, pubkey) {
      const output = (0, utils_1.checkForOutput)(this.data.outputs, outputIndex);
      return pubkeyInOutput(pubkey, output, outputIndex, this.__CACHE);
    }
    outputHasHDKey(outputIndex, root) {
      const output = (0, utils_1.checkForOutput)(this.data.outputs, outputIndex);
      const derivationIsMine = bip32DerivationIsMine(root);
      return !!output.bip32Derivation && output.bip32Derivation.some(derivationIsMine);
    }
    validateSignaturesOfAllInputs(validator2) {
      (0, utils_1.checkForInput)(this.data.inputs, 0);
      const results = range(this.data.inputs.length).map((idx) => this.validateSignaturesOfInput(idx, validator2));
      return results.reduce((final, res) => res === true && final, true);
    }
    validateSignaturesOfInput(inputIndex, validator2, pubkey) {
      const input = this.data.inputs[inputIndex];
      if ((0, bip371_1.isTaprootInput)(input))
        return this.validateSignaturesOfTaprootInput(inputIndex, validator2, pubkey);
      return this._validateSignaturesOfInput(inputIndex, validator2, pubkey);
    }
    _validateSignaturesOfInput(inputIndex, validator2, pubkey) {
      const input = this.data.inputs[inputIndex];
      const partialSig2 = (input || {}).partialSig;
      if (!input || !partialSig2 || partialSig2.length < 1)
        throw new Error("No signatures to validate");
      if (typeof validator2 !== "function")
        throw new Error("Need validator function to validate signatures");
      const mySigs = pubkey ? partialSig2.filter((sig) => sig.pubkey.equals(pubkey)) : partialSig2;
      if (mySigs.length < 1)
        throw new Error("No signatures for this pubkey");
      const results = [];
      let hashCache;
      let scriptCache;
      let sighashCache;
      for (const pSig of mySigs) {
        const sig = bscript.signature.decode(pSig.signature);
        const { hash: hash2, script: script2 } = sighashCache !== sig.hashType ? getHashForSig(inputIndex, Object.assign({}, input, {
          sighashType: sig.hashType
        }), this.__CACHE, true) : {
          hash: hashCache,
          script: scriptCache
        };
        sighashCache = sig.hashType;
        hashCache = hash2;
        scriptCache = script2;
        checkScriptForPubkey(pSig.pubkey, script2, "verify");
        results.push(validator2(pSig.pubkey, hash2, sig.signature));
      }
      return results.every((res) => res === true);
    }
    validateSignaturesOfTaprootInput(inputIndex, validator2, pubkey) {
      const input = this.data.inputs[inputIndex];
      const tapKeySig2 = (input || {}).tapKeySig;
      const tapScriptSig2 = (input || {}).tapScriptSig;
      if (!input && !tapKeySig2 && !(tapScriptSig2 && !tapScriptSig2.length))
        throw new Error("No signatures to validate");
      if (typeof validator2 !== "function")
        throw new Error("Need validator function to validate signatures");
      pubkey = pubkey && (0, bip371_1.toXOnly)(pubkey);
      const allHashses = pubkey ? getTaprootHashesForSig(inputIndex, input, this.data.inputs, pubkey, this.__CACHE) : getAllTaprootHashesForSig(inputIndex, input, this.data.inputs, this.__CACHE);
      if (!allHashses.length)
        throw new Error("No signatures for this pubkey");
      const tapKeyHash = allHashses.find((h2) => !!h2.leafHash);
      if (tapKeySig2 && tapKeyHash) {
        const isValidTapkeySig = validator2(tapKeyHash.pubkey, tapKeyHash.hash, tapKeySig2);
        if (!isValidTapkeySig)
          return false;
      }
      if (tapScriptSig2) {
        for (const tapSig of tapScriptSig2) {
          const tapSigHash = allHashses.find((h2) => tapSig.pubkey.equals(h2.pubkey));
          if (tapSigHash) {
            const isValidTapScriptSig = validator2(tapSig.pubkey, tapSigHash.hash, tapSig.signature);
            if (!isValidTapScriptSig)
              return false;
          }
        }
      }
      return true;
    }
    signAllInputsHD(hdKeyPair, sighashTypes = [
      transaction_1.Transaction.SIGHASH_ALL
    ]) {
      if (!hdKeyPair || !hdKeyPair.publicKey || !hdKeyPair.fingerprint) {
        throw new Error("Need HDSigner to sign input");
      }
      const results = [];
      for (const i of range(this.data.inputs.length)) {
        try {
          this.signInputHD(i, hdKeyPair, sighashTypes);
          results.push(true);
        } catch (err) {
          results.push(false);
        }
      }
      if (results.every((v2) => v2 === false)) {
        throw new Error("No inputs were signed");
      }
      return this;
    }
    signAllInputsHDAsync(hdKeyPair, sighashTypes = [
      transaction_1.Transaction.SIGHASH_ALL
    ]) {
      return new Promise((resolve, reject) => {
        if (!hdKeyPair || !hdKeyPair.publicKey || !hdKeyPair.fingerprint) {
          return reject(new Error("Need HDSigner to sign input"));
        }
        const results = [];
        const promises = [];
        for (const i of range(this.data.inputs.length)) {
          promises.push(this.signInputHDAsync(i, hdKeyPair, sighashTypes).then(() => {
            results.push(true);
          }, () => {
            results.push(false);
          }));
        }
        return Promise.all(promises).then(() => {
          if (results.every((v2) => v2 === false)) {
            return reject(new Error("No inputs were signed"));
          }
          resolve();
        });
      });
    }
    signInputHD(inputIndex, hdKeyPair, sighashTypes = [
      transaction_1.Transaction.SIGHASH_ALL
    ]) {
      if (!hdKeyPair || !hdKeyPair.publicKey || !hdKeyPair.fingerprint) {
        throw new Error("Need HDSigner to sign input");
      }
      const signers = getSignersFromHD(inputIndex, this.data.inputs, hdKeyPair);
      signers.forEach((signer2) => this.signInput(inputIndex, signer2, sighashTypes));
      return this;
    }
    signInputHDAsync(inputIndex, hdKeyPair, sighashTypes = [
      transaction_1.Transaction.SIGHASH_ALL
    ]) {
      return new Promise((resolve, reject) => {
        if (!hdKeyPair || !hdKeyPair.publicKey || !hdKeyPair.fingerprint) {
          return reject(new Error("Need HDSigner to sign input"));
        }
        const signers = getSignersFromHD(inputIndex, this.data.inputs, hdKeyPair);
        const promises = signers.map((signer2) => this.signInputAsync(inputIndex, signer2, sighashTypes));
        return Promise.all(promises).then(() => {
          resolve();
        }).catch(reject);
      });
    }
    signAllInputs(keyPair, sighashTypes) {
      if (!keyPair || !keyPair.publicKey)
        throw new Error("Need Signer to sign input");
      const results = [];
      for (const i of range(this.data.inputs.length)) {
        try {
          this.signInput(i, keyPair, sighashTypes);
          results.push(true);
        } catch (err) {
          results.push(false);
        }
      }
      if (results.every((v2) => v2 === false)) {
        throw new Error("No inputs were signed");
      }
      return this;
    }
    signAllInputsAsync(keyPair, sighashTypes) {
      return new Promise((resolve, reject) => {
        if (!keyPair || !keyPair.publicKey)
          return reject(new Error("Need Signer to sign input"));
        const results = [];
        const promises = [];
        for (const [i] of this.data.inputs.entries()) {
          promises.push(this.signInputAsync(i, keyPair, sighashTypes).then(() => {
            results.push(true);
          }, () => {
            results.push(false);
          }));
        }
        return Promise.all(promises).then(() => {
          if (results.every((v2) => v2 === false)) {
            return reject(new Error("No inputs were signed"));
          }
          resolve();
        });
      });
    }
    signInput(inputIndex, keyPair, sighashTypes) {
      if (!keyPair || !keyPair.publicKey)
        throw new Error("Need Signer to sign input");
      const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
      if ((0, bip371_1.isTaprootInput)(input)) {
        return this._signTaprootInput(inputIndex, input, keyPair, void 0, sighashTypes);
      }
      return this._signInput(inputIndex, keyPair, sighashTypes);
    }
    signTaprootInput(inputIndex, keyPair, tapLeafHashToSign, sighashTypes) {
      if (!keyPair || !keyPair.publicKey)
        throw new Error("Need Signer to sign input");
      const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
      if ((0, bip371_1.isTaprootInput)(input))
        return this._signTaprootInput(inputIndex, input, keyPair, tapLeafHashToSign, sighashTypes);
      throw new Error(`Input #${inputIndex} is not of type Taproot.`);
    }
    _signInput(inputIndex, keyPair, sighashTypes = [
      transaction_1.Transaction.SIGHASH_ALL
    ]) {
      const { hash: hash2, sighashType: sighashType2 } = getHashAndSighashType(this.data.inputs, inputIndex, keyPair.publicKey, this.__CACHE, sighashTypes);
      const partialSig2 = [
        {
          pubkey: keyPair.publicKey,
          signature: bscript.signature.encode(keyPair.sign(hash2), sighashType2)
        }
      ];
      this.data.updateInput(inputIndex, {
        partialSig: partialSig2
      });
      return this;
    }
    _signTaprootInput(inputIndex, input, keyPair, tapLeafHashToSign, allowedSighashTypes = [
      transaction_1.Transaction.SIGHASH_DEFAULT
    ]) {
      const hashesForSig = this.checkTaprootHashesForSig(inputIndex, input, keyPair, tapLeafHashToSign, allowedSighashTypes);
      const tapKeySig2 = hashesForSig.filter((h2) => !h2.leafHash).map((h2) => (0, bip371_1.serializeTaprootSignature)(keyPair.signSchnorr(h2.hash), input.sighashType))[0];
      const tapScriptSig2 = hashesForSig.filter((h2) => !!h2.leafHash).map((h2) => ({
        pubkey: (0, bip371_1.toXOnly)(keyPair.publicKey),
        signature: (0, bip371_1.serializeTaprootSignature)(keyPair.signSchnorr(h2.hash), input.sighashType),
        leafHash: h2.leafHash
      }));
      if (tapKeySig2) {
        this.data.updateInput(inputIndex, {
          tapKeySig: tapKeySig2
        });
      }
      if (tapScriptSig2.length) {
        this.data.updateInput(inputIndex, {
          tapScriptSig: tapScriptSig2
        });
      }
      return this;
    }
    signInputAsync(inputIndex, keyPair, sighashTypes) {
      return Promise.resolve().then(() => {
        if (!keyPair || !keyPair.publicKey)
          throw new Error("Need Signer to sign input");
        const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
        if ((0, bip371_1.isTaprootInput)(input))
          return this._signTaprootInputAsync(inputIndex, input, keyPair, void 0, sighashTypes);
        return this._signInputAsync(inputIndex, keyPair, sighashTypes);
      });
    }
    signTaprootInputAsync(inputIndex, keyPair, tapLeafHash, sighashTypes) {
      return Promise.resolve().then(() => {
        if (!keyPair || !keyPair.publicKey)
          throw new Error("Need Signer to sign input");
        const input = (0, utils_1.checkForInput)(this.data.inputs, inputIndex);
        if ((0, bip371_1.isTaprootInput)(input))
          return this._signTaprootInputAsync(inputIndex, input, keyPair, tapLeafHash, sighashTypes);
        throw new Error(`Input #${inputIndex} is not of type Taproot.`);
      });
    }
    _signInputAsync(inputIndex, keyPair, sighashTypes = [
      transaction_1.Transaction.SIGHASH_ALL
    ]) {
      const { hash: hash2, sighashType: sighashType2 } = getHashAndSighashType(this.data.inputs, inputIndex, keyPair.publicKey, this.__CACHE, sighashTypes);
      return Promise.resolve(keyPair.sign(hash2)).then((signature) => {
        const partialSig2 = [
          {
            pubkey: keyPair.publicKey,
            signature: bscript.signature.encode(signature, sighashType2)
          }
        ];
        this.data.updateInput(inputIndex, {
          partialSig: partialSig2
        });
      });
    }
    async _signTaprootInputAsync(inputIndex, input, keyPair, tapLeafHash, sighashTypes = [
      transaction_1.Transaction.SIGHASH_DEFAULT
    ]) {
      const hashesForSig = this.checkTaprootHashesForSig(inputIndex, input, keyPair, tapLeafHash, sighashTypes);
      const signaturePromises = [];
      const tapKeyHash = hashesForSig.filter((h2) => !h2.leafHash)[0];
      if (tapKeyHash) {
        const tapKeySigPromise = Promise.resolve(keyPair.signSchnorr(tapKeyHash.hash)).then((sig) => {
          return {
            tapKeySig: (0, bip371_1.serializeTaprootSignature)(sig, input.sighashType)
          };
        });
        signaturePromises.push(tapKeySigPromise);
      }
      const tapScriptHashes = hashesForSig.filter((h2) => !!h2.leafHash);
      if (tapScriptHashes.length) {
        const tapScriptSigPromises = tapScriptHashes.map((tsh) => {
          return Promise.resolve(keyPair.signSchnorr(tsh.hash)).then((signature) => {
            const tapScriptSig2 = [
              {
                pubkey: (0, bip371_1.toXOnly)(keyPair.publicKey),
                signature: (0, bip371_1.serializeTaprootSignature)(signature, input.sighashType),
                leafHash: tsh.leafHash
              }
            ];
            return {
              tapScriptSig: tapScriptSig2
            };
          });
        });
        signaturePromises.push(...tapScriptSigPromises);
      }
      return Promise.all(signaturePromises).then((results) => {
        results.forEach((v2) => this.data.updateInput(inputIndex, v2));
      });
    }
    checkTaprootHashesForSig(inputIndex, input, keyPair, tapLeafHashToSign, allowedSighashTypes) {
      if (typeof keyPair.signSchnorr !== "function")
        throw new Error(`Need Schnorr Signer to sign taproot input #${inputIndex}.`);
      const hashesForSig = getTaprootHashesForSig(inputIndex, input, this.data.inputs, keyPair.publicKey, this.__CACHE, tapLeafHashToSign, allowedSighashTypes);
      if (!hashesForSig || !hashesForSig.length)
        throw new Error(`Can not sign for input #${inputIndex} with the key ${keyPair.publicKey.toString("hex")}`);
      return hashesForSig;
    }
    toBuffer() {
      checkCache(this.__CACHE);
      return this.data.toBuffer();
    }
    toHex() {
      checkCache(this.__CACHE);
      return this.data.toHex();
    }
    toBase64() {
      checkCache(this.__CACHE);
      return this.data.toBase64();
    }
    updateGlobal(updateData) {
      this.data.updateGlobal(updateData);
      return this;
    }
    updateInput(inputIndex, updateData) {
      if (updateData.witnessScript)
        checkInvalidP2WSH(updateData.witnessScript);
      (0, bip371_1.checkTaprootInputFields)(this.data.inputs[inputIndex], updateData, "updateInput");
      this.data.updateInput(inputIndex, updateData);
      if (updateData.nonWitnessUtxo) {
        addNonWitnessTxCache(this.__CACHE, this.data.inputs[inputIndex], inputIndex);
      }
      return this;
    }
    updateOutput(outputIndex, updateData) {
      const outputData = this.data.outputs[outputIndex];
      (0, bip371_1.checkTaprootOutputFields)(outputData, updateData, "updateOutput");
      this.data.updateOutput(outputIndex, updateData);
      return this;
    }
    addUnknownKeyValToGlobal(keyVal) {
      this.data.addUnknownKeyValToGlobal(keyVal);
      return this;
    }
    addUnknownKeyValToInput(inputIndex, keyVal) {
      this.data.addUnknownKeyValToInput(inputIndex, keyVal);
      return this;
    }
    addUnknownKeyValToOutput(outputIndex, keyVal) {
      this.data.addUnknownKeyValToOutput(outputIndex, keyVal);
      return this;
    }
    clearFinalizedInput(inputIndex) {
      this.data.clearFinalizedInput(inputIndex);
      return this;
    }
  }
  psbt$1.Psbt = Psbt;
  const transactionFromBuffer = (buffer2) => new PsbtTransaction(buffer2);
  class PsbtTransaction {
    constructor(buffer$1 = buffer.Buffer.from([
      2,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ])) {
      this.tx = transaction_1.Transaction.fromBuffer(buffer$1);
      checkTxEmpty(this.tx);
      Object.defineProperty(this, "tx", {
        enumerable: false,
        writable: true
      });
    }
    getInputOutputCounts() {
      return {
        inputCount: this.tx.ins.length,
        outputCount: this.tx.outs.length
      };
    }
    addInput(input) {
      if (input.hash === void 0 || input.index === void 0 || !buffer.Buffer.isBuffer(input.hash) && typeof input.hash !== "string" || typeof input.index !== "number") {
        throw new Error("Error adding input.");
      }
      const hash2 = typeof input.hash === "string" ? (0, bufferutils_1.reverseBuffer)(buffer.Buffer.from(input.hash, "hex")) : input.hash;
      this.tx.addInput(hash2, input.index, input.sequence);
    }
    addOutput(output) {
      if (output.script === void 0 || output.value === void 0 || !buffer.Buffer.isBuffer(output.script) || typeof output.value !== "number") {
        throw new Error("Error adding output.");
      }
      this.tx.addOutput(output.script, output.value);
    }
    toBuffer() {
      return this.tx.toBuffer();
    }
  }
  function canFinalize(input, script2, scriptType) {
    switch (scriptType) {
      case "pubkey":
      case "pubkeyhash":
      case "witnesspubkeyhash":
        return hasSigs(1, input.partialSig);
      case "multisig":
        const p2ms2 = payments.p2ms({
          output: script2
        });
        return hasSigs(p2ms2.m, input.partialSig, p2ms2.pubkeys);
      default:
        return false;
    }
  }
  function checkCache(cache) {
    if (cache.__UNSAFE_SIGN_NONSEGWIT !== false) {
      throw new Error("Not BIP174 compliant, can not export");
    }
  }
  function hasSigs(neededSigs, partialSig2, pubkeys) {
    if (!partialSig2)
      return false;
    let sigs;
    if (pubkeys) {
      sigs = pubkeys.map((pkey) => {
        const pubkey = compressPubkey(pkey);
        return partialSig2.find((pSig) => pSig.pubkey.equals(pubkey));
      }).filter((v2) => !!v2);
    } else {
      sigs = partialSig2;
    }
    if (sigs.length > neededSigs)
      throw new Error("Too many signatures");
    return sigs.length === neededSigs;
  }
  function isFinalized(input) {
    return !!input.finalScriptSig || !!input.finalScriptWitness;
  }
  function bip32DerivationIsMine(root) {
    return (d) => {
      if (!d.masterFingerprint.equals(root.fingerprint))
        return false;
      if (!root.derivePath(d.path).publicKey.equals(d.pubkey))
        return false;
      return true;
    };
  }
  function check32Bit(num) {
    if (typeof num !== "number" || num !== Math.floor(num) || num > 4294967295 || num < 0) {
      throw new Error("Invalid 32 bit integer");
    }
  }
  function checkFees(psbt2, cache, opts) {
    const feeRate = cache.__FEE_RATE || psbt2.getFeeRate();
    const vsize = cache.__EXTRACTED_TX.virtualSize();
    const satoshis = feeRate * vsize;
    if (feeRate >= opts.maximumFeeRate) {
      throw new Error(`Warning: You are paying around ${(satoshis / 1e8).toFixed(8)} in fees, which is ${feeRate} satoshi per byte for a transaction with a VSize of ${vsize} bytes (segwit counted as 0.25 byte per byte). Use setMaximumFeeRate method to raise your threshold, or pass true to the first arg of extractTransaction.`);
    }
  }
  function checkInputsForPartialSig(inputs2, action) {
    inputs2.forEach((input) => {
      const throws = (0, bip371_1.isTaprootInput)(input) ? (0, bip371_1.checkTaprootInputForSigs)(input, action) : (0, psbtutils_1.checkInputForSig)(input, action);
      if (throws)
        throw new Error("Can not modify transaction, signatures exist.");
    });
  }
  function checkPartialSigSighashes(input) {
    if (!input.sighashType || !input.partialSig)
      return;
    const { partialSig: partialSig2, sighashType: sighashType2 } = input;
    partialSig2.forEach((pSig) => {
      const { hashType } = bscript.signature.decode(pSig.signature);
      if (sighashType2 !== hashType) {
        throw new Error("Signature sighash does not match input sighash type");
      }
    });
  }
  function checkScriptForPubkey(pubkey, script2, action) {
    if (!(0, psbtutils_1.pubkeyInScript)(pubkey, script2)) {
      throw new Error(`Can not ${action} for this input with the key ${pubkey.toString("hex")}`);
    }
  }
  function checkTxEmpty(tx) {
    const isEmpty = tx.ins.every((input) => input.script && input.script.length === 0 && input.witness && input.witness.length === 0);
    if (!isEmpty) {
      throw new Error("Format Error: Transaction ScriptSigs are not empty");
    }
  }
  function checkTxForDupeIns(tx, cache) {
    tx.ins.forEach((input) => {
      checkTxInputCache(cache, input);
    });
  }
  function checkTxInputCache(cache, input) {
    const key = (0, bufferutils_1.reverseBuffer)(buffer.Buffer.from(input.hash)).toString("hex") + ":" + input.index;
    if (cache.__TX_IN_CACHE[key])
      throw new Error("Duplicate input detected.");
    cache.__TX_IN_CACHE[key] = 1;
  }
  function scriptCheckerFactory(payment, paymentScriptName) {
    return (inputIndex, scriptPubKey, redeemScript2, ioType) => {
      const redeemScriptOutput = payment({
        redeem: {
          output: redeemScript2
        }
      }).output;
      if (!scriptPubKey.equals(redeemScriptOutput)) {
        throw new Error(`${paymentScriptName} for ${ioType} #${inputIndex} doesn't match the scriptPubKey in the prevout`);
      }
    };
  }
  const checkRedeemScript = scriptCheckerFactory(payments.p2sh, "Redeem script");
  const checkWitnessScript = scriptCheckerFactory(payments.p2wsh, "Witness script");
  function getTxCacheValue(key, name, inputs2, c) {
    if (!inputs2.every(isFinalized))
      throw new Error(`PSBT must be finalized to calculate ${name}`);
    if (key === "__FEE_RATE" && c.__FEE_RATE)
      return c.__FEE_RATE;
    if (key === "__FEE" && c.__FEE)
      return c.__FEE;
    let tx;
    let mustFinalize = true;
    if (c.__EXTRACTED_TX) {
      tx = c.__EXTRACTED_TX;
      mustFinalize = false;
    } else {
      tx = c.__TX.clone();
    }
    inputFinalizeGetAmts(inputs2, tx, c, mustFinalize);
    if (key === "__FEE_RATE")
      return c.__FEE_RATE;
    else if (key === "__FEE")
      return c.__FEE;
  }
  function getFinalScripts(inputIndex, input, script2, isSegwit, isP2SH, isP2WSH) {
    const scriptType = classifyScript(script2);
    if (!canFinalize(input, script2, scriptType))
      throw new Error(`Can not finalize input #${inputIndex}`);
    return prepareFinalScripts(script2, scriptType, input.partialSig, isSegwit, isP2SH, isP2WSH);
  }
  function prepareFinalScripts(script2, scriptType, partialSig2, isSegwit, isP2SH, isP2WSH) {
    let finalScriptSig2;
    let finalScriptWitness2;
    const payment = getPayment(script2, scriptType, partialSig2);
    const p2wsh2 = !isP2WSH ? null : payments.p2wsh({
      redeem: payment
    });
    const p2sh2 = !isP2SH ? null : payments.p2sh({
      redeem: p2wsh2 || payment
    });
    if (isSegwit) {
      if (p2wsh2) {
        finalScriptWitness2 = (0, psbtutils_1.witnessStackToScriptWitness)(p2wsh2.witness);
      } else {
        finalScriptWitness2 = (0, psbtutils_1.witnessStackToScriptWitness)(payment.witness);
      }
      if (p2sh2) {
        finalScriptSig2 = p2sh2.input;
      }
    } else {
      if (p2sh2) {
        finalScriptSig2 = p2sh2.input;
      } else {
        finalScriptSig2 = payment.input;
      }
    }
    return {
      finalScriptSig: finalScriptSig2,
      finalScriptWitness: finalScriptWitness2
    };
  }
  function getHashAndSighashType(inputs2, inputIndex, pubkey, cache, sighashTypes) {
    const input = (0, utils_1.checkForInput)(inputs2, inputIndex);
    const { hash: hash2, sighashType: sighashType2, script: script2 } = getHashForSig(inputIndex, input, cache, false, sighashTypes);
    checkScriptForPubkey(pubkey, script2, "sign");
    return {
      hash: hash2,
      sighashType: sighashType2
    };
  }
  function getHashForSig(inputIndex, input, cache, forValidate, sighashTypes) {
    const unsignedTx2 = cache.__TX;
    const sighashType2 = input.sighashType || transaction_1.Transaction.SIGHASH_ALL;
    checkSighashTypeAllowed(sighashType2, sighashTypes);
    let hash2;
    let prevout;
    if (input.nonWitnessUtxo) {
      const nonWitnessUtxoTx = nonWitnessUtxoTxFromCache(cache, input, inputIndex);
      const prevoutHash = unsignedTx2.ins[inputIndex].hash;
      const utxoHash = nonWitnessUtxoTx.getHash();
      if (!prevoutHash.equals(utxoHash)) {
        throw new Error(`Non-witness UTXO hash for input #${inputIndex} doesn't match the hash specified in the prevout`);
      }
      const prevoutIndex = unsignedTx2.ins[inputIndex].index;
      prevout = nonWitnessUtxoTx.outs[prevoutIndex];
    } else if (input.witnessUtxo) {
      prevout = input.witnessUtxo;
    } else {
      throw new Error("Need a Utxo input item for signing");
    }
    const { meaningfulScript, type } = getMeaningfulScript(prevout.script, inputIndex, "input", input.redeemScript, input.witnessScript);
    if ([
      "p2sh-p2wsh",
      "p2wsh"
    ].indexOf(type) >= 0) {
      hash2 = unsignedTx2.hashForWitnessV0(inputIndex, meaningfulScript, prevout.value, sighashType2);
    } else if ((0, psbtutils_1.isP2WPKH)(meaningfulScript)) {
      const signingScript = payments.p2pkh({
        hash: meaningfulScript.slice(2)
      }).output;
      hash2 = unsignedTx2.hashForWitnessV0(inputIndex, signingScript, prevout.value, sighashType2);
    } else {
      if (input.nonWitnessUtxo === void 0 && cache.__UNSAFE_SIGN_NONSEGWIT === false)
        throw new Error(`Input #${inputIndex} has witnessUtxo but non-segwit script: ${meaningfulScript.toString("hex")}`);
      if (!forValidate && cache.__UNSAFE_SIGN_NONSEGWIT !== false)
        console.warn("Warning: Signing non-segwit inputs without the full parent transaction means there is a chance that a miner could feed you incorrect information to trick you into paying large fees. This behavior is the same as Psbt's predecesor (TransactionBuilder - now removed) when signing non-segwit scripts. You are not able to export this Psbt with toBuffer|toBase64|toHex since it is not BIP174 compliant.\n*********************\nPROCEED WITH CAUTION!\n*********************");
      hash2 = unsignedTx2.hashForSignature(inputIndex, meaningfulScript, sighashType2);
    }
    return {
      script: meaningfulScript,
      sighashType: sighashType2,
      hash: hash2
    };
  }
  function getAllTaprootHashesForSig(inputIndex, input, inputs2, cache) {
    const allPublicKeys = [];
    if (input.tapInternalKey) {
      const outputKey = (0, bip371_1.tweakInternalPubKey)(inputIndex, input);
      allPublicKeys.push(outputKey);
    }
    if (input.tapScriptSig) {
      const tapScriptPubkeys = input.tapScriptSig.map((tss) => tss.pubkey);
      allPublicKeys.push(...tapScriptPubkeys);
    }
    const allHashes = allPublicKeys.map((pubicKey) => getTaprootHashesForSig(inputIndex, input, inputs2, pubicKey, cache));
    return allHashes.flat();
  }
  function getTaprootHashesForSig(inputIndex, input, inputs2, pubkey, cache, tapLeafHashToSign, allowedSighashTypes) {
    const unsignedTx2 = cache.__TX;
    const sighashType2 = input.sighashType || transaction_1.Transaction.SIGHASH_DEFAULT;
    checkSighashTypeAllowed(sighashType2, allowedSighashTypes);
    const prevOuts = inputs2.map((i, index) => getScriptAndAmountFromUtxo(index, i, cache));
    const signingScripts = prevOuts.map((o) => o.script);
    const values = prevOuts.map((o) => o.value);
    const hashes = [];
    if (input.tapInternalKey && !tapLeafHashToSign) {
      const outputKey = (0, bip371_1.tweakInternalPubKey)(inputIndex, input);
      if ((0, bip371_1.toXOnly)(pubkey).equals(outputKey)) {
        const tapKeyHash = unsignedTx2.hashForWitnessV1(inputIndex, signingScripts, values, sighashType2);
        hashes.push({
          pubkey,
          hash: tapKeyHash
        });
      }
    }
    const tapLeafHashes = (input.tapLeafScript || []).filter((tapLeaf) => (0, psbtutils_1.pubkeyInScript)(pubkey, tapLeaf.script)).map((tapLeaf) => {
      const hash2 = (0, bip341_1.tapleafHash)({
        output: tapLeaf.script,
        version: tapLeaf.leafVersion
      });
      return Object.assign({
        hash: hash2
      }, tapLeaf);
    }).filter((tapLeaf) => !tapLeafHashToSign || tapLeafHashToSign.equals(tapLeaf.hash)).map((tapLeaf) => {
      const tapScriptHash = unsignedTx2.hashForWitnessV1(inputIndex, signingScripts, values, transaction_1.Transaction.SIGHASH_DEFAULT, tapLeaf.hash);
      return {
        pubkey,
        hash: tapScriptHash,
        leafHash: tapLeaf.hash
      };
    });
    return hashes.concat(tapLeafHashes);
  }
  function checkSighashTypeAllowed(sighashType2, sighashTypes) {
    if (sighashTypes && sighashTypes.indexOf(sighashType2) < 0) {
      const str = sighashTypeToString(sighashType2);
      throw new Error(`Sighash type is not allowed. Retry the sign method passing the sighashTypes array of whitelisted types. Sighash type: ${str}`);
    }
  }
  function getPayment(script2, scriptType, partialSig2) {
    let payment;
    switch (scriptType) {
      case "multisig":
        const sigs = getSortedSigs(script2, partialSig2);
        payment = payments.p2ms({
          output: script2,
          signatures: sigs
        });
        break;
      case "pubkey":
        payment = payments.p2pk({
          output: script2,
          signature: partialSig2[0].signature
        });
        break;
      case "pubkeyhash":
        payment = payments.p2pkh({
          output: script2,
          pubkey: partialSig2[0].pubkey,
          signature: partialSig2[0].signature
        });
        break;
      case "witnesspubkeyhash":
        payment = payments.p2wpkh({
          output: script2,
          pubkey: partialSig2[0].pubkey,
          signature: partialSig2[0].signature
        });
        break;
    }
    return payment;
  }
  function getScriptFromInput(inputIndex, input, cache) {
    const unsignedTx2 = cache.__TX;
    const res = {
      script: null,
      isSegwit: false,
      isP2SH: false,
      isP2WSH: false
    };
    res.isP2SH = !!input.redeemScript;
    res.isP2WSH = !!input.witnessScript;
    if (input.witnessScript) {
      res.script = input.witnessScript;
    } else if (input.redeemScript) {
      res.script = input.redeemScript;
    } else {
      if (input.nonWitnessUtxo) {
        const nonWitnessUtxoTx = nonWitnessUtxoTxFromCache(cache, input, inputIndex);
        const prevoutIndex = unsignedTx2.ins[inputIndex].index;
        res.script = nonWitnessUtxoTx.outs[prevoutIndex].script;
      } else if (input.witnessUtxo) {
        res.script = input.witnessUtxo.script;
      }
    }
    if (input.witnessScript || (0, psbtutils_1.isP2WPKH)(res.script)) {
      res.isSegwit = true;
    }
    return res;
  }
  function getSignersFromHD(inputIndex, inputs2, hdKeyPair) {
    const input = (0, utils_1.checkForInput)(inputs2, inputIndex);
    if (!input.bip32Derivation || input.bip32Derivation.length === 0) {
      throw new Error("Need bip32Derivation to sign with HD");
    }
    const myDerivations = input.bip32Derivation.map((bipDv) => {
      if (bipDv.masterFingerprint.equals(hdKeyPair.fingerprint)) {
        return bipDv;
      } else {
        return;
      }
    }).filter((v2) => !!v2);
    if (myDerivations.length === 0) {
      throw new Error("Need one bip32Derivation masterFingerprint to match the HDSigner fingerprint");
    }
    const signers = myDerivations.map((bipDv) => {
      const node = hdKeyPair.derivePath(bipDv.path);
      if (!bipDv.pubkey.equals(node.publicKey)) {
        throw new Error("pubkey did not match bip32Derivation");
      }
      return node;
    });
    return signers;
  }
  function getSortedSigs(script2, partialSig2) {
    const p2ms2 = payments.p2ms({
      output: script2
    });
    return p2ms2.pubkeys.map((pk) => {
      return (partialSig2.filter((ps) => {
        return ps.pubkey.equals(pk);
      })[0] || {}).signature;
    }).filter((v2) => !!v2);
  }
  function scriptWitnessToWitnessStack(buffer2) {
    let offset = 0;
    function readSlice(n) {
      offset += n;
      return buffer2.slice(offset - n, offset);
    }
    function readVarInt() {
      const vi = varuint.decode(buffer2, offset);
      offset += varuint.decode.bytes;
      return vi;
    }
    function readVarSlice() {
      return readSlice(readVarInt());
    }
    function readVector() {
      const count = readVarInt();
      const vector = [];
      for (let i = 0; i < count; i++)
        vector.push(readVarSlice());
      return vector;
    }
    return readVector();
  }
  function sighashTypeToString(sighashType2) {
    let text2 = sighashType2 & transaction_1.Transaction.SIGHASH_ANYONECANPAY ? "SIGHASH_ANYONECANPAY | " : "";
    const sigMod = sighashType2 & 31;
    switch (sigMod) {
      case transaction_1.Transaction.SIGHASH_ALL:
        text2 += "SIGHASH_ALL";
        break;
      case transaction_1.Transaction.SIGHASH_SINGLE:
        text2 += "SIGHASH_SINGLE";
        break;
      case transaction_1.Transaction.SIGHASH_NONE:
        text2 += "SIGHASH_NONE";
        break;
    }
    return text2;
  }
  function addNonWitnessTxCache(cache, input, inputIndex) {
    cache.__NON_WITNESS_UTXO_BUF_CACHE[inputIndex] = input.nonWitnessUtxo;
    const tx = transaction_1.Transaction.fromBuffer(input.nonWitnessUtxo);
    cache.__NON_WITNESS_UTXO_TX_CACHE[inputIndex] = tx;
    const self = cache;
    const selfIndex = inputIndex;
    delete input.nonWitnessUtxo;
    Object.defineProperty(input, "nonWitnessUtxo", {
      enumerable: true,
      get() {
        const buf = self.__NON_WITNESS_UTXO_BUF_CACHE[selfIndex];
        const txCache = self.__NON_WITNESS_UTXO_TX_CACHE[selfIndex];
        if (buf !== void 0) {
          return buf;
        } else {
          const newBuf = txCache.toBuffer();
          self.__NON_WITNESS_UTXO_BUF_CACHE[selfIndex] = newBuf;
          return newBuf;
        }
      },
      set(data) {
        self.__NON_WITNESS_UTXO_BUF_CACHE[selfIndex] = data;
      }
    });
  }
  function inputFinalizeGetAmts(inputs2, tx, cache, mustFinalize) {
    let inputAmount = 0;
    inputs2.forEach((input, idx) => {
      if (mustFinalize && input.finalScriptSig)
        tx.ins[idx].script = input.finalScriptSig;
      if (mustFinalize && input.finalScriptWitness) {
        tx.ins[idx].witness = scriptWitnessToWitnessStack(input.finalScriptWitness);
      }
      if (input.witnessUtxo) {
        inputAmount += input.witnessUtxo.value;
      } else if (input.nonWitnessUtxo) {
        const nwTx = nonWitnessUtxoTxFromCache(cache, input, idx);
        const vout = tx.ins[idx].index;
        const out = nwTx.outs[vout];
        inputAmount += out.value;
      }
    });
    const outputAmount = tx.outs.reduce((total, o) => total + o.value, 0);
    const fee = inputAmount - outputAmount;
    if (fee < 0) {
      throw new Error("Outputs are spending more than Inputs");
    }
    const bytes = tx.virtualSize();
    cache.__FEE = fee;
    cache.__EXTRACTED_TX = tx;
    cache.__FEE_RATE = Math.floor(fee / bytes);
  }
  function nonWitnessUtxoTxFromCache(cache, input, inputIndex) {
    const c = cache.__NON_WITNESS_UTXO_TX_CACHE;
    if (!c[inputIndex]) {
      addNonWitnessTxCache(cache, input, inputIndex);
    }
    return c[inputIndex];
  }
  function getScriptFromUtxo(inputIndex, input, cache) {
    const { script: script2 } = getScriptAndAmountFromUtxo(inputIndex, input, cache);
    return script2;
  }
  function getScriptAndAmountFromUtxo(inputIndex, input, cache) {
    if (input.witnessUtxo !== void 0) {
      return {
        script: input.witnessUtxo.script,
        value: input.witnessUtxo.value
      };
    } else if (input.nonWitnessUtxo !== void 0) {
      const nonWitnessUtxoTx = nonWitnessUtxoTxFromCache(cache, input, inputIndex);
      const o = nonWitnessUtxoTx.outs[cache.__TX.ins[inputIndex].index];
      return {
        script: o.script,
        value: o.value
      };
    } else {
      throw new Error("Can't find pubkey in input without Utxo data");
    }
  }
  function pubkeyInInput(pubkey, input, inputIndex, cache) {
    const script2 = getScriptFromUtxo(inputIndex, input, cache);
    const { meaningfulScript } = getMeaningfulScript(script2, inputIndex, "input", input.redeemScript, input.witnessScript);
    return (0, psbtutils_1.pubkeyInScript)(pubkey, meaningfulScript);
  }
  function pubkeyInOutput(pubkey, output, outputIndex, cache) {
    const script2 = cache.__TX.outs[outputIndex].script;
    const { meaningfulScript } = getMeaningfulScript(script2, outputIndex, "output", output.redeemScript, output.witnessScript);
    return (0, psbtutils_1.pubkeyInScript)(pubkey, meaningfulScript);
  }
  function redeemFromFinalScriptSig(finalScript) {
    if (!finalScript)
      return;
    const decomp = bscript.decompile(finalScript);
    if (!decomp)
      return;
    const lastItem = decomp[decomp.length - 1];
    if (!buffer.Buffer.isBuffer(lastItem) || isPubkeyLike(lastItem) || isSigLike(lastItem))
      return;
    const sDecomp = bscript.decompile(lastItem);
    if (!sDecomp)
      return;
    return lastItem;
  }
  function redeemFromFinalWitnessScript(finalScript) {
    if (!finalScript)
      return;
    const decomp = scriptWitnessToWitnessStack(finalScript);
    const lastItem = decomp[decomp.length - 1];
    if (isPubkeyLike(lastItem))
      return;
    const sDecomp = bscript.decompile(lastItem);
    if (!sDecomp)
      return;
    return lastItem;
  }
  function compressPubkey(pubkey) {
    if (pubkey.length === 65) {
      const parity = pubkey[64] & 1;
      const newKey = pubkey.slice(0, 33);
      newKey[0] = 2 | parity;
      return newKey;
    }
    return pubkey.slice();
  }
  function isPubkeyLike(buf) {
    return buf.length === 33 && bscript.isCanonicalPubKey(buf);
  }
  function isSigLike(buf) {
    return bscript.isCanonicalScriptSignature(buf);
  }
  function getMeaningfulScript(script2, index, ioType, redeemScript2, witnessScript2) {
    const isP2SH = (0, psbtutils_1.isP2SHScript)(script2);
    const isP2SHP2WSH = isP2SH && redeemScript2 && (0, psbtutils_1.isP2WSHScript)(redeemScript2);
    const isP2WSH = (0, psbtutils_1.isP2WSHScript)(script2);
    if (isP2SH && redeemScript2 === void 0)
      throw new Error("scriptPubkey is P2SH but redeemScript missing");
    if ((isP2WSH || isP2SHP2WSH) && witnessScript2 === void 0)
      throw new Error("scriptPubkey or redeemScript is P2WSH but witnessScript missing");
    let meaningfulScript;
    if (isP2SHP2WSH) {
      meaningfulScript = witnessScript2;
      checkRedeemScript(index, script2, redeemScript2, ioType);
      checkWitnessScript(index, redeemScript2, witnessScript2, ioType);
      checkInvalidP2WSH(meaningfulScript);
    } else if (isP2WSH) {
      meaningfulScript = witnessScript2;
      checkWitnessScript(index, script2, witnessScript2, ioType);
      checkInvalidP2WSH(meaningfulScript);
    } else if (isP2SH) {
      meaningfulScript = redeemScript2;
      checkRedeemScript(index, script2, redeemScript2, ioType);
    } else {
      meaningfulScript = script2;
    }
    return {
      meaningfulScript,
      type: isP2SHP2WSH ? "p2sh-p2wsh" : isP2SH ? "p2sh" : isP2WSH ? "p2wsh" : "raw"
    };
  }
  function checkInvalidP2WSH(script2) {
    if ((0, psbtutils_1.isP2WPKH)(script2) || (0, psbtutils_1.isP2SHScript)(script2)) {
      throw new Error("P2WPKH or P2SH can not be contained within P2WSH");
    }
  }
  function classifyScript(script2) {
    if ((0, psbtutils_1.isP2WPKH)(script2))
      return "witnesspubkeyhash";
    if ((0, psbtutils_1.isP2PKH)(script2))
      return "pubkeyhash";
    if ((0, psbtutils_1.isP2MS)(script2))
      return "multisig";
    if ((0, psbtutils_1.isP2PK)(script2))
      return "pubkey";
    return "nonstandard";
  }
  function range(n) {
    return [
      ...Array(n).keys()
    ];
  }
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.initEccLib = exports2.Transaction = exports2.opcodes = exports2.Psbt = exports2.Block = exports2.script = exports2.payments = exports2.networks = exports2.crypto = exports2.address = void 0;
    const address$1 = address;
    exports2.address = address$1;
    const crypto2 = crypto$1;
    exports2.crypto = crypto2;
    const networks2 = networks$3;
    exports2.networks = networks2;
    const payments2 = payments$3;
    exports2.payments = payments2;
    const script$1 = script;
    exports2.script = script$1;
    var block_1 = block;
    Object.defineProperty(exports2, "Block", {
      enumerable: true,
      get: function() {
        return block_1.Block;
      }
    });
    var psbt_1 = psbt$1;
    Object.defineProperty(exports2, "Psbt", {
      enumerable: true,
      get: function() {
        return psbt_1.Psbt;
      }
    });
    var ops_12 = ops;
    Object.defineProperty(exports2, "opcodes", {
      enumerable: true,
      get: function() {
        return ops_12.OPS;
      }
    });
    var transaction_12 = transaction;
    Object.defineProperty(exports2, "Transaction", {
      enumerable: true,
      get: function() {
        return transaction_12.Transaction;
      }
    });
    var ecc_lib_12 = ecc_lib;
    Object.defineProperty(exports2, "initEccLib", {
      enumerable: true,
      get: function() {
        return ecc_lib_12.initEccLib;
      }
    });
  })(src$3);
  const HEX_STRINGS = "0123456789abcdefABCDEF";
  HEX_STRINGS.split("").map((c) => c.codePointAt(0));
  Array(256).fill(true).map((_, i) => {
    const s = String.fromCodePoint(i);
    const index = HEX_STRINGS.indexOf(s);
    return index < 0 ? void 0 : index < 16 ? index : index - 6;
  });
  new TextEncoder();
  new TextDecoder("ascii");
  function compare(v1, v2) {
    const minLength = Math.min(v1.length, v2.length);
    for (let i = 0; i < minLength; ++i) {
      if (v1[i] !== v2[i]) {
        return v1[i] < v2[i] ? -1 : 1;
      }
    }
    return v1.length === v2.length ? 0 : v1.length > v2.length ? 1 : -1;
  }
  const ERROR_BAD_PRIVATE = 0;
  const ERROR_BAD_POINT = 1;
  const ERROR_BAD_TWEAK = 2;
  const ERROR_BAD_HASH = 3;
  const ERROR_BAD_SIGNATURE = 4;
  const ERROR_BAD_EXTRA_DATA = 5;
  const ERROR_BAD_PARITY = 6;
  const ERROR_BAD_RECOVERY_ID = 7;
  const ERRORS_MESSAGES = {
    [ERROR_BAD_PRIVATE.toString()]: "Expected Private",
    [ERROR_BAD_POINT.toString()]: "Expected Point",
    [ERROR_BAD_TWEAK.toString()]: "Expected Tweak",
    [ERROR_BAD_HASH.toString()]: "Expected Hash",
    [ERROR_BAD_SIGNATURE.toString()]: "Expected Signature",
    [ERROR_BAD_EXTRA_DATA.toString()]: "Expected Extra Data (32 bytes)",
    [ERROR_BAD_PARITY.toString()]: "Expected Parity (1 | 0)",
    [ERROR_BAD_RECOVERY_ID.toString()]: "Bad Recovery Id"
  };
  function throwError(errcode) {
    const message = ERRORS_MESSAGES[errcode.toString()] || `Unknow error code: ${errcode}`;
    throw new TypeError(message);
  }
  const PRIVATE_KEY_SIZE = 32;
  const PUBLIC_KEY_COMPRESSED_SIZE = 33;
  const PUBLIC_KEY_UNCOMPRESSED_SIZE = 65;
  const X_ONLY_PUBLIC_KEY_SIZE = 32;
  const TWEAK_SIZE = 32;
  const HASH_SIZE = 32;
  const EXTRA_DATA_SIZE = 32;
  const SIGNATURE_SIZE = 64;
  const BN32_ZERO = new Uint8Array(32);
  const BN32_N = new Uint8Array([
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    254,
    186,
    174,
    220,
    230,
    175,
    72,
    160,
    59,
    191,
    210,
    94,
    140,
    208,
    54,
    65,
    65
  ]);
  const BN32_P_MINUS_N = new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    69,
    81,
    35,
    25,
    80,
    183,
    95,
    196,
    64,
    45,
    161,
    114,
    47,
    201,
    186,
    238
  ]);
  function isUint8Array(value2) {
    return value2 instanceof Uint8Array;
  }
  function cmpBN32(data1, data2) {
    for (let i = 0; i < 32; ++i) {
      if (data1[i] !== data2[i]) {
        return data1[i] < data2[i] ? -1 : 1;
      }
    }
    return 0;
  }
  function isZero(x) {
    return cmpBN32(x, BN32_ZERO) === 0;
  }
  function isPrivate$1(x) {
    return isUint8Array(x) && x.length === PRIVATE_KEY_SIZE && cmpBN32(x, BN32_ZERO) > 0 && cmpBN32(x, BN32_N) < 0;
  }
  function isPoint$2(p) {
    return isUint8Array(p) && (p.length === PUBLIC_KEY_COMPRESSED_SIZE || p.length === PUBLIC_KEY_UNCOMPRESSED_SIZE || p.length === X_ONLY_PUBLIC_KEY_SIZE);
  }
  function isXOnlyPoint$1(p) {
    return isUint8Array(p) && p.length === X_ONLY_PUBLIC_KEY_SIZE;
  }
  function isDERPoint(p) {
    return isUint8Array(p) && (p.length === PUBLIC_KEY_COMPRESSED_SIZE || p.length === PUBLIC_KEY_UNCOMPRESSED_SIZE);
  }
  function isPointCompressed$1(p) {
    return isUint8Array(p) && p.length === PUBLIC_KEY_COMPRESSED_SIZE;
  }
  function isTweak(tweak) {
    return isUint8Array(tweak) && tweak.length === TWEAK_SIZE && cmpBN32(tweak, BN32_N) < 0;
  }
  function isHash(h2) {
    return isUint8Array(h2) && h2.length === HASH_SIZE;
  }
  function isExtraData(e) {
    return e === void 0 || isUint8Array(e) && e.length === EXTRA_DATA_SIZE;
  }
  function isSignature(signature) {
    return isUint8Array(signature) && signature.length === 64 && cmpBN32(signature.subarray(0, 32), BN32_N) < 0 && cmpBN32(signature.subarray(32, 64), BN32_N) < 0;
  }
  function isSigrLessThanPMinusN(signature) {
    return isUint8Array(signature) && signature.length === 64 && cmpBN32(signature.subarray(0, 32), BN32_P_MINUS_N) < 0;
  }
  function validateParity(p) {
    if (p !== 0 && p !== 1)
      throwError(ERROR_BAD_PARITY);
  }
  function validatePrivate(d) {
    if (!isPrivate$1(d))
      throwError(ERROR_BAD_PRIVATE);
  }
  function validatePoint(p) {
    if (!isPoint$2(p))
      throwError(ERROR_BAD_POINT);
  }
  function validateXOnlyPoint(p) {
    if (!isXOnlyPoint$1(p))
      throwError(ERROR_BAD_POINT);
  }
  function validateTweak(tweak) {
    if (!isTweak(tweak))
      throwError(ERROR_BAD_TWEAK);
  }
  function validateHash(h2) {
    if (!isHash(h2))
      throwError(ERROR_BAD_HASH);
  }
  function validateExtraData(e) {
    if (!isExtraData(e))
      throwError(ERROR_BAD_EXTRA_DATA);
  }
  function validateSignature(signature) {
    if (!isSignature(signature))
      throwError(ERROR_BAD_SIGNATURE);
  }
  function validateSignatureCustom(validatorFn) {
    if (!validatorFn())
      throwError(ERROR_BAD_SIGNATURE);
  }
  function validateSignatureNonzeroRS(signature) {
    if (isZero(signature.subarray(0, 32)))
      throwError(ERROR_BAD_SIGNATURE);
    if (isZero(signature.subarray(32, 64)))
      throwError(ERROR_BAD_SIGNATURE);
  }
  function validateSigrPMinusN(signature) {
    if (!isSigrLessThanPMinusN(signature))
      throwError(ERROR_BAD_RECOVERY_ID);
  }
  const __vite__wasmUrl = "" + new URL("../assets/secp256k1-f1fb5561.wasm", import.meta.url).href;
  const __vite__initWasm = async (opts = {}, url) => {
    let result;
    if (url.startsWith("data:")) {
      const urlContent = url.replace(/^data:.*?base64,/, "");
      let bytes;
      if (typeof Buffer === "function" && typeof Buffer.from === "function") {
        bytes = Buffer.from(urlContent, "base64");
      } else if (typeof atob === "function") {
        const binaryString = atob(urlContent);
        bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
      } else {
        throw new Error("Cannot decode base64-encoded data URL");
      }
      result = await WebAssembly.instantiate(bytes, opts);
    } else {
      const response = await fetch(url);
      const contentType = response.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && contentType.startsWith("application/wasm")) {
        result = await WebAssembly.instantiateStreaming(response, opts);
      } else {
        const buffer2 = await response.arrayBuffer();
        result = await WebAssembly.instantiate(buffer2, opts);
      }
    }
    return result.instance.exports;
  };
  function get4RandomBytes() {
    const bytes = new Uint8Array(4);
    window.crypto.getRandomValues(bytes);
    return bytes;
  }
  function generateInt32() {
    const array = get4RandomBytes();
    return (array[0] << 3 * 8) + (array[1] << 2 * 8) + (array[2] << 1 * 8) + array[3];
  }
  URL = globalThis.URL;
  const __vite__wasmModule = await __vite__initWasm({
    "./rand.js": {
      generateInt32
    },
    "./validate_error.js": {
      throwError
    }
  }, __vite__wasmUrl);
  const memory = __vite__wasmModule.memory;
  const initializeContext = __vite__wasmModule.initializeContext;
  const isPoint$1 = __vite__wasmModule.isPoint;
  const PUBLIC_KEY_INPUT$1 = __vite__wasmModule.PUBLIC_KEY_INPUT;
  const pointAdd$1 = __vite__wasmModule.pointAdd;
  const PUBLIC_KEY_INPUT2$1 = __vite__wasmModule.PUBLIC_KEY_INPUT2;
  const pointAddScalar$1 = __vite__wasmModule.pointAddScalar;
  const TWEAK_INPUT$1 = __vite__wasmModule.TWEAK_INPUT;
  const xOnlyPointAddTweak$1 = __vite__wasmModule.xOnlyPointAddTweak;
  const X_ONLY_PUBLIC_KEY_INPUT$1 = __vite__wasmModule.X_ONLY_PUBLIC_KEY_INPUT;
  const xOnlyPointAddTweakCheck$1 = __vite__wasmModule.xOnlyPointAddTweakCheck;
  const X_ONLY_PUBLIC_KEY_INPUT2$1 = __vite__wasmModule.X_ONLY_PUBLIC_KEY_INPUT2;
  const pointCompress$1 = __vite__wasmModule.pointCompress;
  const pointFromScalar$1 = __vite__wasmModule.pointFromScalar;
  const PRIVATE_INPUT = __vite__wasmModule.PRIVATE_INPUT;
  const xOnlyPointFromScalar$1 = __vite__wasmModule.xOnlyPointFromScalar;
  const xOnlyPointFromPoint$1 = __vite__wasmModule.xOnlyPointFromPoint;
  const pointMultiply$1 = __vite__wasmModule.pointMultiply;
  const privateAdd$1 = __vite__wasmModule.privateAdd;
  const privateSub$1 = __vite__wasmModule.privateSub;
  const privateNegate$1 = __vite__wasmModule.privateNegate;
  const sign$1 = __vite__wasmModule.sign;
  const HASH_INPUT$1 = __vite__wasmModule.HASH_INPUT;
  const EXTRA_DATA_INPUT$1 = __vite__wasmModule.EXTRA_DATA_INPUT;
  const SIGNATURE_INPUT$1 = __vite__wasmModule.SIGNATURE_INPUT;
  const signRecoverable$1 = __vite__wasmModule.signRecoverable;
  const signSchnorr$1 = __vite__wasmModule.signSchnorr;
  const verify$1 = __vite__wasmModule.verify;
  const recover$1 = __vite__wasmModule.recover;
  const verifySchnorr$1 = __vite__wasmModule.verifySchnorr;
  const rustsecp256k1_v0_4_1_default_error_callback_fn = __vite__wasmModule.rustsecp256k1_v0_4_1_default_error_callback_fn;
  const rustsecp256k1_v0_4_1_default_illegal_callback_fn = __vite__wasmModule.rustsecp256k1_v0_4_1_default_illegal_callback_fn;
  const __data_end = __vite__wasmModule.__data_end;
  const __heap_base = __vite__wasmModule.__heap_base;
  const wasm = Object.freeze(Object.defineProperty({
    __proto__: null,
    EXTRA_DATA_INPUT: EXTRA_DATA_INPUT$1,
    HASH_INPUT: HASH_INPUT$1,
    PRIVATE_INPUT,
    PUBLIC_KEY_INPUT: PUBLIC_KEY_INPUT$1,
    PUBLIC_KEY_INPUT2: PUBLIC_KEY_INPUT2$1,
    SIGNATURE_INPUT: SIGNATURE_INPUT$1,
    TWEAK_INPUT: TWEAK_INPUT$1,
    X_ONLY_PUBLIC_KEY_INPUT: X_ONLY_PUBLIC_KEY_INPUT$1,
    X_ONLY_PUBLIC_KEY_INPUT2: X_ONLY_PUBLIC_KEY_INPUT2$1,
    __data_end,
    __heap_base,
    initializeContext,
    isPoint: isPoint$1,
    memory,
    pointAdd: pointAdd$1,
    pointAddScalar: pointAddScalar$1,
    pointCompress: pointCompress$1,
    pointFromScalar: pointFromScalar$1,
    pointMultiply: pointMultiply$1,
    privateAdd: privateAdd$1,
    privateNegate: privateNegate$1,
    privateSub: privateSub$1,
    recover: recover$1,
    rustsecp256k1_v0_4_1_default_error_callback_fn,
    rustsecp256k1_v0_4_1_default_illegal_callback_fn,
    sign: sign$1,
    signRecoverable: signRecoverable$1,
    signSchnorr: signSchnorr$1,
    verify: verify$1,
    verifySchnorr: verifySchnorr$1,
    xOnlyPointAddTweak: xOnlyPointAddTweak$1,
    xOnlyPointAddTweakCheck: xOnlyPointAddTweakCheck$1,
    xOnlyPointFromPoint: xOnlyPointFromPoint$1,
    xOnlyPointFromScalar: xOnlyPointFromScalar$1
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const WASM_BUFFER = new Uint8Array(wasm.memory.buffer);
  const WASM_PRIVATE_KEY_PTR = wasm.PRIVATE_INPUT.value;
  const WASM_PUBLIC_KEY_INPUT_PTR = wasm.PUBLIC_KEY_INPUT.value;
  const WASM_PUBLIC_KEY_INPUT_PTR2 = wasm.PUBLIC_KEY_INPUT2.value;
  const WASM_X_ONLY_PUBLIC_KEY_INPUT_PTR = wasm.X_ONLY_PUBLIC_KEY_INPUT.value;
  const WASM_X_ONLY_PUBLIC_KEY_INPUT2_PTR = wasm.X_ONLY_PUBLIC_KEY_INPUT2.value;
  const WASM_TWEAK_INPUT_PTR = wasm.TWEAK_INPUT.value;
  const WASM_HASH_INPUT_PTR = wasm.HASH_INPUT.value;
  const WASM_EXTRA_DATA_INPUT_PTR = wasm.EXTRA_DATA_INPUT.value;
  const WASM_SIGNATURE_INPUT_PTR = wasm.SIGNATURE_INPUT.value;
  const PRIVATE_KEY_INPUT = WASM_BUFFER.subarray(WASM_PRIVATE_KEY_PTR, WASM_PRIVATE_KEY_PTR + PRIVATE_KEY_SIZE);
  const PUBLIC_KEY_INPUT = WASM_BUFFER.subarray(WASM_PUBLIC_KEY_INPUT_PTR, WASM_PUBLIC_KEY_INPUT_PTR + PUBLIC_KEY_UNCOMPRESSED_SIZE);
  const PUBLIC_KEY_INPUT2 = WASM_BUFFER.subarray(WASM_PUBLIC_KEY_INPUT_PTR2, WASM_PUBLIC_KEY_INPUT_PTR2 + PUBLIC_KEY_UNCOMPRESSED_SIZE);
  const X_ONLY_PUBLIC_KEY_INPUT = WASM_BUFFER.subarray(WASM_X_ONLY_PUBLIC_KEY_INPUT_PTR, WASM_X_ONLY_PUBLIC_KEY_INPUT_PTR + X_ONLY_PUBLIC_KEY_SIZE);
  const X_ONLY_PUBLIC_KEY_INPUT2 = WASM_BUFFER.subarray(WASM_X_ONLY_PUBLIC_KEY_INPUT2_PTR, WASM_X_ONLY_PUBLIC_KEY_INPUT2_PTR + X_ONLY_PUBLIC_KEY_SIZE);
  const TWEAK_INPUT = WASM_BUFFER.subarray(WASM_TWEAK_INPUT_PTR, WASM_TWEAK_INPUT_PTR + TWEAK_SIZE);
  const HASH_INPUT = WASM_BUFFER.subarray(WASM_HASH_INPUT_PTR, WASM_HASH_INPUT_PTR + HASH_SIZE);
  const EXTRA_DATA_INPUT = WASM_BUFFER.subarray(WASM_EXTRA_DATA_INPUT_PTR, WASM_EXTRA_DATA_INPUT_PTR + EXTRA_DATA_SIZE);
  const SIGNATURE_INPUT = WASM_BUFFER.subarray(WASM_SIGNATURE_INPUT_PTR, WASM_SIGNATURE_INPUT_PTR + SIGNATURE_SIZE);
  function assumeCompression(compressed, p) {
    if (compressed === void 0) {
      return p !== void 0 ? p.length : PUBLIC_KEY_COMPRESSED_SIZE;
    }
    return compressed ? PUBLIC_KEY_COMPRESSED_SIZE : PUBLIC_KEY_UNCOMPRESSED_SIZE;
  }
  function _isPoint(p) {
    try {
      PUBLIC_KEY_INPUT.set(p);
      return wasm.isPoint(p.length) === 1;
    } finally {
      PUBLIC_KEY_INPUT.fill(0);
    }
  }
  function __initializeContext() {
    wasm.initializeContext();
  }
  function isPoint(p) {
    return isDERPoint(p) && _isPoint(p);
  }
  function isPointCompressed(p) {
    return isPointCompressed$1(p) && _isPoint(p);
  }
  function isXOnlyPoint(p) {
    return isXOnlyPoint$1(p) && _isPoint(p);
  }
  function isPrivate(d) {
    return isPrivate$1(d);
  }
  function pointAdd(pA, pB, compressed) {
    validatePoint(pA);
    validatePoint(pB);
    const outputlen = assumeCompression(compressed, pA);
    try {
      PUBLIC_KEY_INPUT.set(pA);
      PUBLIC_KEY_INPUT2.set(pB);
      return wasm.pointAdd(pA.length, pB.length, outputlen) === 1 ? PUBLIC_KEY_INPUT.slice(0, outputlen) : null;
    } finally {
      PUBLIC_KEY_INPUT.fill(0);
      PUBLIC_KEY_INPUT2.fill(0);
    }
  }
  function pointAddScalar(p, tweak, compressed) {
    validatePoint(p);
    validateTweak(tweak);
    const outputlen = assumeCompression(compressed, p);
    try {
      PUBLIC_KEY_INPUT.set(p);
      TWEAK_INPUT.set(tweak);
      return wasm.pointAddScalar(p.length, outputlen) === 1 ? PUBLIC_KEY_INPUT.slice(0, outputlen) : null;
    } finally {
      PUBLIC_KEY_INPUT.fill(0);
      TWEAK_INPUT.fill(0);
    }
  }
  function pointCompress(p, compressed) {
    validatePoint(p);
    const outputlen = assumeCompression(compressed, p);
    try {
      PUBLIC_KEY_INPUT.set(p);
      wasm.pointCompress(p.length, outputlen);
      return PUBLIC_KEY_INPUT.slice(0, outputlen);
    } finally {
      PUBLIC_KEY_INPUT.fill(0);
    }
  }
  function pointFromScalar(d, compressed) {
    validatePrivate(d);
    const outputlen = assumeCompression(compressed);
    try {
      PRIVATE_KEY_INPUT.set(d);
      return wasm.pointFromScalar(outputlen) === 1 ? PUBLIC_KEY_INPUT.slice(0, outputlen) : null;
    } finally {
      PRIVATE_KEY_INPUT.fill(0);
      PUBLIC_KEY_INPUT.fill(0);
    }
  }
  function xOnlyPointFromScalar(d) {
    validatePrivate(d);
    try {
      PRIVATE_KEY_INPUT.set(d);
      wasm.xOnlyPointFromScalar();
      return X_ONLY_PUBLIC_KEY_INPUT.slice(0, X_ONLY_PUBLIC_KEY_SIZE);
    } finally {
      PRIVATE_KEY_INPUT.fill(0);
      X_ONLY_PUBLIC_KEY_INPUT.fill(0);
    }
  }
  function xOnlyPointFromPoint(p) {
    validatePoint(p);
    try {
      PUBLIC_KEY_INPUT.set(p);
      wasm.xOnlyPointFromPoint(p.length);
      return X_ONLY_PUBLIC_KEY_INPUT.slice(0, X_ONLY_PUBLIC_KEY_SIZE);
    } finally {
      PUBLIC_KEY_INPUT.fill(0);
      X_ONLY_PUBLIC_KEY_INPUT.fill(0);
    }
  }
  function pointMultiply(p, tweak, compressed) {
    validatePoint(p);
    validateTweak(tweak);
    const outputlen = assumeCompression(compressed, p);
    try {
      PUBLIC_KEY_INPUT.set(p);
      TWEAK_INPUT.set(tweak);
      return wasm.pointMultiply(p.length, outputlen) === 1 ? PUBLIC_KEY_INPUT.slice(0, outputlen) : null;
    } finally {
      PUBLIC_KEY_INPUT.fill(0);
      TWEAK_INPUT.fill(0);
    }
  }
  function privateAdd(d, tweak) {
    validatePrivate(d);
    validateTweak(tweak);
    try {
      PRIVATE_KEY_INPUT.set(d);
      TWEAK_INPUT.set(tweak);
      return wasm.privateAdd() === 1 ? PRIVATE_KEY_INPUT.slice(0, PRIVATE_KEY_SIZE) : null;
    } finally {
      PRIVATE_KEY_INPUT.fill(0);
      TWEAK_INPUT.fill(0);
    }
  }
  function privateSub(d, tweak) {
    validatePrivate(d);
    validateTweak(tweak);
    if (isZero(tweak)) {
      return new Uint8Array(d);
    }
    try {
      PRIVATE_KEY_INPUT.set(d);
      TWEAK_INPUT.set(tweak);
      return wasm.privateSub() === 1 ? PRIVATE_KEY_INPUT.slice(0, PRIVATE_KEY_SIZE) : null;
    } finally {
      PRIVATE_KEY_INPUT.fill(0);
      TWEAK_INPUT.fill(0);
    }
  }
  function privateNegate(d) {
    validatePrivate(d);
    try {
      PRIVATE_KEY_INPUT.set(d);
      wasm.privateNegate();
      return PRIVATE_KEY_INPUT.slice(0, PRIVATE_KEY_SIZE);
    } finally {
      PRIVATE_KEY_INPUT.fill(0);
    }
  }
  function xOnlyPointAddTweak(p, tweak) {
    validateXOnlyPoint(p);
    validateTweak(tweak);
    try {
      X_ONLY_PUBLIC_KEY_INPUT.set(p);
      TWEAK_INPUT.set(tweak);
      const parity = wasm.xOnlyPointAddTweak();
      return parity !== -1 ? {
        parity,
        xOnlyPubkey: X_ONLY_PUBLIC_KEY_INPUT.slice(0, X_ONLY_PUBLIC_KEY_SIZE)
      } : null;
    } finally {
      X_ONLY_PUBLIC_KEY_INPUT.fill(0);
      TWEAK_INPUT.fill(0);
    }
  }
  function xOnlyPointAddTweakCheck(point, tweak, resultToCheck, tweakParity) {
    validateXOnlyPoint(point);
    validateXOnlyPoint(resultToCheck);
    validateTweak(tweak);
    const hasParity = tweakParity !== void 0;
    if (hasParity)
      validateParity(tweakParity);
    try {
      X_ONLY_PUBLIC_KEY_INPUT.set(point);
      X_ONLY_PUBLIC_KEY_INPUT2.set(resultToCheck);
      TWEAK_INPUT.set(tweak);
      if (hasParity) {
        return wasm.xOnlyPointAddTweakCheck(tweakParity) === 1;
      } else {
        wasm.xOnlyPointAddTweak();
        const newKey = X_ONLY_PUBLIC_KEY_INPUT.slice(0, X_ONLY_PUBLIC_KEY_SIZE);
        return compare(newKey, resultToCheck) === 0;
      }
    } finally {
      X_ONLY_PUBLIC_KEY_INPUT.fill(0);
      X_ONLY_PUBLIC_KEY_INPUT2.fill(0);
      TWEAK_INPUT.fill(0);
    }
  }
  function sign(h2, d, e) {
    validateHash(h2);
    validatePrivate(d);
    validateExtraData(e);
    try {
      HASH_INPUT.set(h2);
      PRIVATE_KEY_INPUT.set(d);
      if (e !== void 0)
        EXTRA_DATA_INPUT.set(e);
      wasm.sign(e === void 0 ? 0 : 1);
      return SIGNATURE_INPUT.slice(0, SIGNATURE_SIZE);
    } finally {
      HASH_INPUT.fill(0);
      PRIVATE_KEY_INPUT.fill(0);
      if (e !== void 0)
        EXTRA_DATA_INPUT.fill(0);
      SIGNATURE_INPUT.fill(0);
    }
  }
  function signRecoverable(h2, d, e) {
    validateHash(h2);
    validatePrivate(d);
    validateExtraData(e);
    try {
      HASH_INPUT.set(h2);
      PRIVATE_KEY_INPUT.set(d);
      if (e !== void 0)
        EXTRA_DATA_INPUT.set(e);
      const recoveryId = wasm.signRecoverable(e === void 0 ? 0 : 1);
      const signature = SIGNATURE_INPUT.slice(0, SIGNATURE_SIZE);
      return {
        signature,
        recoveryId
      };
    } finally {
      HASH_INPUT.fill(0);
      PRIVATE_KEY_INPUT.fill(0);
      if (e !== void 0)
        EXTRA_DATA_INPUT.fill(0);
      SIGNATURE_INPUT.fill(0);
    }
  }
  function signSchnorr(h2, d, e) {
    validateHash(h2);
    validatePrivate(d);
    validateExtraData(e);
    try {
      HASH_INPUT.set(h2);
      PRIVATE_KEY_INPUT.set(d);
      if (e !== void 0)
        EXTRA_DATA_INPUT.set(e);
      wasm.signSchnorr(e === void 0 ? 0 : 1);
      return SIGNATURE_INPUT.slice(0, SIGNATURE_SIZE);
    } finally {
      HASH_INPUT.fill(0);
      PRIVATE_KEY_INPUT.fill(0);
      if (e !== void 0)
        EXTRA_DATA_INPUT.fill(0);
      SIGNATURE_INPUT.fill(0);
    }
  }
  function verify(h2, Q, signature, strict = false) {
    validateHash(h2);
    validatePoint(Q);
    validateSignature(signature);
    try {
      HASH_INPUT.set(h2);
      PUBLIC_KEY_INPUT.set(Q);
      SIGNATURE_INPUT.set(signature);
      return wasm.verify(Q.length, strict === true ? 1 : 0) === 1 ? true : false;
    } finally {
      HASH_INPUT.fill(0);
      PUBLIC_KEY_INPUT.fill(0);
      SIGNATURE_INPUT.fill(0);
    }
  }
  function recover(h2, signature, recoveryId, compressed = false) {
    validateHash(h2);
    validateSignature(signature);
    validateSignatureNonzeroRS(signature);
    if (recoveryId & 2) {
      validateSigrPMinusN(signature);
    }
    validateSignatureCustom(() => isXOnlyPoint(signature.subarray(0, 32)));
    const outputlen = assumeCompression(compressed);
    try {
      HASH_INPUT.set(h2);
      SIGNATURE_INPUT.set(signature);
      return wasm.recover(outputlen, recoveryId) === 1 ? PUBLIC_KEY_INPUT.slice(0, outputlen) : null;
    } finally {
      HASH_INPUT.fill(0);
      SIGNATURE_INPUT.fill(0);
      PUBLIC_KEY_INPUT.fill(0);
    }
  }
  function verifySchnorr(h2, Q, signature) {
    validateHash(h2);
    validateXOnlyPoint(Q);
    validateSignature(signature);
    try {
      HASH_INPUT.set(h2);
      X_ONLY_PUBLIC_KEY_INPUT.set(Q);
      SIGNATURE_INPUT.set(signature);
      return wasm.verifySchnorr() === 1 ? true : false;
    } finally {
      HASH_INPUT.fill(0);
      X_ONLY_PUBLIC_KEY_INPUT.fill(0);
      SIGNATURE_INPUT.fill(0);
    }
  }
  const ecc = Object.freeze(Object.defineProperty({
    __proto__: null,
    __initializeContext,
    isPoint,
    isPointCompressed,
    isPrivate,
    isXOnlyPoint,
    pointAdd,
    pointAddScalar,
    pointCompress,
    pointFromScalar,
    pointMultiply,
    privateAdd,
    privateNegate,
    privateSub,
    recover,
    sign,
    signRecoverable,
    signSchnorr,
    verify,
    verifySchnorr,
    xOnlyPointAddTweak,
    xOnlyPointAddTweakCheck,
    xOnlyPointFromPoint,
    xOnlyPointFromScalar
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  var src = {};
  var ecpair = {};
  var networks$1 = {};
  Object.defineProperty(networks$1, "__esModule", {
    value: true
  });
  networks$1.testnet = networks$1.bitcoin = void 0;
  networks$1.bitcoin = {
    messagePrefix: "Bitcoin Signed Message:\n",
    bech32: "bc",
    bip32: {
      public: 76067358,
      private: 76066276
    },
    pubKeyHash: 0,
    scriptHash: 5,
    wif: 128
  };
  networks$1.testnet = {
    messagePrefix: "Bitcoin Signed Message:\n",
    bech32: "tb",
    bip32: {
      public: 70617039,
      private: 70615956
    },
    pubKeyHash: 111,
    scriptHash: 196,
    wif: 239
  };
  var types$1 = {};
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.maybe = exports2.Boolean = exports2.Array = exports2.Buffer256bit = exports2.Network = exports2.typeforce = void 0;
    exports2.typeforce = typeforce_1;
    exports2.Network = exports2.typeforce.compile({
      messagePrefix: exports2.typeforce.oneOf(exports2.typeforce.Buffer, exports2.typeforce.String),
      bip32: {
        public: exports2.typeforce.UInt32,
        private: exports2.typeforce.UInt32
      },
      pubKeyHash: exports2.typeforce.UInt8,
      scriptHash: exports2.typeforce.UInt8,
      wif: exports2.typeforce.UInt8
    });
    exports2.Buffer256bit = exports2.typeforce.BufferN(32);
    exports2.Array = exports2.typeforce.Array;
    exports2.Boolean = exports2.typeforce.Boolean;
    exports2.maybe = exports2.typeforce.maybe;
  })(types$1);
  var browserExports = {};
  var browser = {
    get exports() {
      return browserExports;
    },
    set exports(v2) {
      browserExports = v2;
    }
  };
  var MAX_BYTES = 65536;
  var MAX_UINT32 = 4294967295;
  function oldBrowser() {
    throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11");
  }
  var Buffer$1 = safeBufferExports.Buffer;
  var crypto = commonjsGlobal.crypto || commonjsGlobal.msCrypto;
  if (crypto && crypto.getRandomValues) {
    browser.exports = randomBytes$1;
  } else {
    browser.exports = oldBrowser;
  }
  function randomBytes$1(size, cb) {
    if (size > MAX_UINT32)
      throw new RangeError("requested too many random bytes");
    var bytes = Buffer$1.allocUnsafe(size);
    if (size > 0) {
      if (size > MAX_BYTES) {
        for (var generated = 0; generated < size; generated += MAX_BYTES) {
          crypto.getRandomValues(bytes.slice(generated, generated + MAX_BYTES));
        }
      } else {
        crypto.getRandomValues(bytes);
      }
    }
    if (typeof cb === "function") {
      return browserExports$1.nextTick(function() {
        cb(null, bytes);
      });
    }
    return bytes;
  }
  var bs58check = bs58check$4;
  function decodeRaw(buffer2, version) {
    if (version !== void 0 && buffer2[0] !== version)
      throw new Error("Invalid network version");
    if (buffer2.length === 33) {
      return {
        version: buffer2[0],
        privateKey: buffer2.slice(1, 33),
        compressed: false
      };
    }
    if (buffer2.length !== 34)
      throw new Error("Invalid WIF length");
    if (buffer2[33] !== 1)
      throw new Error("Invalid compression flag");
    return {
      version: buffer2[0],
      privateKey: buffer2.slice(1, 33),
      compressed: true
    };
  }
  function encodeRaw(version, privateKey, compressed) {
    var result = new buffer.Buffer(compressed ? 34 : 33);
    result.writeUInt8(version, 0);
    privateKey.copy(result, 1);
    if (compressed) {
      result[33] = 1;
    }
    return result;
  }
  function decode(string, version) {
    return decodeRaw(bs58check.decode(string), version);
  }
  function encode(version, privateKey, compressed) {
    if (typeof version === "number")
      return bs58check.encode(encodeRaw(version, privateKey, compressed));
    return bs58check.encode(encodeRaw(version.version, version.privateKey, version.compressed));
  }
  var wif$1 = {
    decode,
    decodeRaw,
    encode,
    encodeRaw
  };
  var testecc = {};
  Object.defineProperty(testecc, "__esModule", {
    value: true
  });
  testecc.testEcc = void 0;
  const h = (hex) => buffer.Buffer.from(hex, "hex");
  function testEcc(ecc2) {
    assert(ecc2.isPoint(h("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798")));
    assert(!ecc2.isPoint(h("030000000000000000000000000000000000000000000000000000000000000005")));
    assert(ecc2.isPrivate(h("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798")));
    assert(ecc2.isPrivate(h("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140")));
    assert(!ecc2.isPrivate(h("0000000000000000000000000000000000000000000000000000000000000000")));
    assert(!ecc2.isPrivate(h("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141")));
    assert(!ecc2.isPrivate(h("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364142")));
    assert(buffer.Buffer.from(ecc2.privateAdd(h("0000000000000000000000000000000000000000000000000000000000000001"), h("0000000000000000000000000000000000000000000000000000000000000000"))).equals(h("0000000000000000000000000000000000000000000000000000000000000001")));
    assert(ecc2.privateAdd(h("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036413e"), h("0000000000000000000000000000000000000000000000000000000000000003")) === null);
    assert(buffer.Buffer.from(ecc2.privateAdd(h("e211078564db65c3ce7704f08262b1f38f1ef412ad15b5ac2d76657a63b2c500"), h("b51fbb69051255d1becbd683de5848242a89c229348dd72896a87ada94ae8665"))).equals(h("9730c2ee69edbb958d42db7460bafa18fef9d955325aec99044c81c8282b0a24")));
    assert(buffer.Buffer.from(ecc2.privateNegate(h("0000000000000000000000000000000000000000000000000000000000000001"))).equals(h("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140")));
    assert(buffer.Buffer.from(ecc2.privateNegate(h("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd036413e"))).equals(h("0000000000000000000000000000000000000000000000000000000000000003")));
    assert(buffer.Buffer.from(ecc2.privateNegate(h("b1121e4088a66a28f5b6b0f5844943ecd9f610196d7bb83b25214b60452c09af"))).equals(h("4eede1bf775995d70a494f0a7bb6bc11e0b8cccd41cce8009ab1132c8b0a3792")));
    assert(buffer.Buffer.from(ecc2.pointCompress(h("0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"), true)).equals(h("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798")));
    assert(buffer.Buffer.from(ecc2.pointCompress(h("0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"), false)).equals(h("0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")));
    assert(buffer.Buffer.from(ecc2.pointCompress(h("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"), true)).equals(h("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798")));
    assert(buffer.Buffer.from(ecc2.pointCompress(h("0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"), false)).equals(h("0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")));
    assert(buffer.Buffer.from(ecc2.pointFromScalar(h("b1121e4088a66a28f5b6b0f5844943ecd9f610196d7bb83b25214b60452c09af"))).equals(h("02b07ba9dca9523b7ef4bd97703d43d20399eb698e194704791a25ce77a400df99")));
    assert(ecc2.xOnlyPointAddTweak(h("79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"), h("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140")) === null);
    let xOnlyRes = ecc2.xOnlyPointAddTweak(h("1617d38ed8d8657da4d4761e8057bc396ea9e4b9d29776d4be096016dbd2509b"), h("a8397a935f0dfceba6ba9618f6451ef4d80637abf4e6af2669fbc9de6a8fd2ac"));
    assert(buffer.Buffer.from(xOnlyRes.xOnlyPubkey).equals(h("e478f99dab91052ab39a33ea35fd5e6e4933f4d28023cd597c9a1f6760346adf")) && xOnlyRes.parity === 1);
    xOnlyRes = ecc2.xOnlyPointAddTweak(h("2c0b7cf95324a07d05398b240174dc0c2be444d96b159aa6c7f7b1e668680991"), h("823c3cd2142744b075a87eade7e1b8678ba308d566226a0056ca2b7a76f86b47"));
    assert(buffer.Buffer.from(xOnlyRes.xOnlyPubkey).equals(h("9534f8dc8c6deda2dc007655981c78b49c5d96c778fbf363462a11ec9dfd948c")) && xOnlyRes.parity === 0);
    assert(buffer.Buffer.from(ecc2.sign(h("5e9f0a0d593efdcf78ac923bc3313e4e7d408d574354ee2b3288c0da9fbba6ed"), h("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140"))).equals(h("54c4a33c6423d689378f160a7ff8b61330444abb58fb470f96ea16d99d4a2fed07082304410efa6b2943111b6a4e0aaa7b7db55a07e9861d1fb3cb1f421044a5")));
    assert(ecc2.verify(h("5e9f0a0d593efdcf78ac923bc3313e4e7d408d574354ee2b3288c0da9fbba6ed"), h("0379be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"), h("54c4a33c6423d689378f160a7ff8b61330444abb58fb470f96ea16d99d4a2fed07082304410efa6b2943111b6a4e0aaa7b7db55a07e9861d1fb3cb1f421044a5")));
    if (ecc2.signSchnorr) {
      assert(buffer.Buffer.from(ecc2.signSchnorr(h("7e2d58d8b3bcdf1abadec7829054f90dda9805aab56c77333024b9d0a508b75c"), h("c90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b14e5c9"), h("c87aa53824b4d7ae2eb035a2b5bbbccc080e76cdc6d1692c4b0b62d798e6d906"))).equals(h("5831aaeed7b44bb74e5eab94ba9d4294c49bcf2a60728d8b4c200f50dd313c1bab745879a5ad954a72c45a91c3a51d3c7adea98d82f8481e0e1e03674a6f3fb7")));
    }
    if (ecc2.verifySchnorr) {
      assert(ecc2.verifySchnorr(h("7e2d58d8b3bcdf1abadec7829054f90dda9805aab56c77333024b9d0a508b75c"), h("dd308afec5777e13121fa72b9cc1b7cc0139715309b086c960e18fd969774eb8"), h("5831aaeed7b44bb74e5eab94ba9d4294c49bcf2a60728d8b4c200f50dd313c1bab745879a5ad954a72c45a91c3a51d3c7adea98d82f8481e0e1e03674a6f3fb7")));
    }
  }
  testecc.testEcc = testEcc;
  function assert(bool) {
    if (!bool)
      throw new Error("ecc library invalid");
  }
  Object.defineProperty(ecpair, "__esModule", {
    value: true
  });
  ecpair.ECPairFactory = ecpair.networks = void 0;
  const networks = networks$1;
  ecpair.networks = networks;
  const types = types$1;
  const randomBytes = browserExports;
  const wif = wif$1;
  const testecc_1 = testecc;
  const isOptions = types.typeforce.maybe(types.typeforce.compile({
    compressed: types.maybe(types.Boolean),
    network: types.maybe(types.Network)
  }));
  const toXOnly = (pubKey) => pubKey.length === 32 ? pubKey : pubKey.slice(1, 33);
  function ECPairFactory$1(ecc2) {
    (0, testecc_1.testEcc)(ecc2);
    function isPoint2(maybePoint) {
      return ecc2.isPoint(maybePoint);
    }
    function fromPrivateKey(buffer2, options) {
      types.typeforce(types.Buffer256bit, buffer2);
      if (!ecc2.isPrivate(buffer2))
        throw new TypeError("Private key not in range [1, n)");
      types.typeforce(isOptions, options);
      return new ECPair2(buffer2, void 0, options);
    }
    function fromPublicKey(buffer2, options) {
      types.typeforce(ecc2.isPoint, buffer2);
      types.typeforce(isOptions, options);
      return new ECPair2(void 0, buffer2, options);
    }
    function fromWIF(wifString, network) {
      const decoded = wif.decode(wifString);
      const version = decoded.version;
      if (types.Array(network)) {
        network = network.filter((x) => {
          return version === x.wif;
        }).pop();
        if (!network)
          throw new Error("Unknown network version");
      } else {
        network = network || networks.bitcoin;
        if (version !== network.wif)
          throw new Error("Invalid network version");
      }
      return fromPrivateKey(decoded.privateKey, {
        compressed: decoded.compressed,
        network
      });
    }
    function makeRandom(options) {
      types.typeforce(isOptions, options);
      if (options === void 0)
        options = {};
      const rng = options.rng || randomBytes;
      let d;
      do {
        d = rng(32);
        types.typeforce(types.Buffer256bit, d);
      } while (!ecc2.isPrivate(d));
      return fromPrivateKey(d, options);
    }
    class ECPair2 {
      constructor(__D, __Q, options) {
        __publicField(this, "__D");
        __publicField(this, "__Q");
        __publicField(this, "compressed");
        __publicField(this, "network");
        __publicField(this, "lowR");
        this.__D = __D;
        this.__Q = __Q;
        this.lowR = false;
        if (options === void 0)
          options = {};
        this.compressed = options.compressed === void 0 ? true : options.compressed;
        this.network = options.network || networks.bitcoin;
        if (__Q !== void 0)
          this.__Q = buffer.Buffer.from(ecc2.pointCompress(__Q, this.compressed));
      }
      get privateKey() {
        return this.__D;
      }
      get publicKey() {
        if (!this.__Q) {
          const p = ecc2.pointFromScalar(this.__D, this.compressed);
          this.__Q = buffer.Buffer.from(p);
        }
        return this.__Q;
      }
      toWIF() {
        if (!this.__D)
          throw new Error("Missing private key");
        return wif.encode(this.network.wif, this.__D, this.compressed);
      }
      tweak(t) {
        if (this.privateKey)
          return this.tweakFromPrivateKey(t);
        return this.tweakFromPublicKey(t);
      }
      sign(hash2, lowR) {
        if (!this.__D)
          throw new Error("Missing private key");
        if (lowR === void 0)
          lowR = this.lowR;
        if (lowR === false) {
          return buffer.Buffer.from(ecc2.sign(hash2, this.__D));
        } else {
          let sig = ecc2.sign(hash2, this.__D);
          const extraData = buffer.Buffer.alloc(32, 0);
          let counter = 0;
          while (sig[0] > 127) {
            counter++;
            extraData.writeUIntLE(counter, 0, 6);
            sig = ecc2.sign(hash2, this.__D, extraData);
          }
          return buffer.Buffer.from(sig);
        }
      }
      signSchnorr(hash2) {
        if (!this.privateKey)
          throw new Error("Missing private key");
        if (!ecc2.signSchnorr)
          throw new Error("signSchnorr not supported by ecc library");
        return buffer.Buffer.from(ecc2.signSchnorr(hash2, this.privateKey));
      }
      verify(hash2, signature) {
        return ecc2.verify(hash2, this.publicKey, signature);
      }
      verifySchnorr(hash2, signature) {
        if (!ecc2.verifySchnorr)
          throw new Error("verifySchnorr not supported by ecc library");
        return ecc2.verifySchnorr(hash2, this.publicKey.subarray(1, 33), signature);
      }
      tweakFromPublicKey(t) {
        const xOnlyPubKey = toXOnly(this.publicKey);
        const tweakedPublicKey = ecc2.xOnlyPointAddTweak(xOnlyPubKey, t);
        if (!tweakedPublicKey || tweakedPublicKey.xOnlyPubkey === null)
          throw new Error("Cannot tweak public key!");
        const parityByte = buffer.Buffer.from([
          tweakedPublicKey.parity === 0 ? 2 : 3
        ]);
        return fromPublicKey(buffer.Buffer.concat([
          parityByte,
          tweakedPublicKey.xOnlyPubkey
        ]), {
          network: this.network,
          compressed: this.compressed
        });
      }
      tweakFromPrivateKey(t) {
        const hasOddY = this.publicKey[0] === 3 || this.publicKey[0] === 4 && (this.publicKey[64] & 1) === 1;
        const privateKey = hasOddY ? ecc2.privateNegate(this.privateKey) : this.privateKey;
        const tweakedPrivateKey = ecc2.privateAdd(privateKey, t);
        if (!tweakedPrivateKey)
          throw new Error("Invalid tweaked private key!");
        return fromPrivateKey(buffer.Buffer.from(tweakedPrivateKey), {
          network: this.network,
          compressed: this.compressed
        });
      }
    }
    return {
      isPoint: isPoint2,
      fromPrivateKey,
      fromPublicKey,
      fromWIF,
      makeRandom
    };
  }
  ecpair.ECPairFactory = ECPairFactory$1;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.networks = exports2.ECPairFactory = exports2.default = void 0;
    var ecpair_1 = ecpair;
    Object.defineProperty(exports2, "default", {
      enumerable: true,
      get: function() {
        return ecpair_1.ECPairFactory;
      }
    });
    Object.defineProperty(exports2, "ECPairFactory", {
      enumerable: true,
      get: function() {
        return ecpair_1.ECPairFactory;
      }
    });
    Object.defineProperty(exports2, "networks", {
      enumerable: true,
      get: function() {
        return ecpair_1.networks;
      }
    });
  })(src);
  const ECPairFactory = getDefaultExportFromCjs(src);
  const ECPair = ECPairFactory(ecc);
  const dustAmount = 500;
  async function transactionData(config) {
    return buildTransaction(config);
  }
  async function transactionHex(psbt2) {
    return psbt2.toHex();
  }
  function getNetwork(network) {
    return network === "testnet" ? src$3.networks.testnet : src$3.networks.bitcoin;
  }
  const signer = "cN5Ciwee1NA32zD7WNG78TmXBrnAb4jfQZohmh2Zj53mQjNAZV3R";
  const keyPairs = [
    ECPair.makeRandom({
      network: src$3.networks.testnet
    }),
    ECPair.makeRandom({
      network: src$3.networks.testnet
    })
  ];
  function getP2SHToP2WPKH(network) {
    const alice_pair = ECPair.fromWIF(signer, getNetwork(network));
    [
      keyPairs[0].publicKey
    ];
    const p2shObj = src$3.payments.p2sh({
      redeem: src$3.payments.p2wpkh({
        pubkey: alice_pair.publicKey,
        network: getNetwork(network)
      })
    });
    return p2shObj;
  }
  function getRedeemScript(network, utxo) {
    var _a, _b, _c;
    console.log("-------------keyPairs[0].publicKey", keyPairs[0].publicKey);
    const pk = Buffer.from(keyPairs[0].publicKey).toString("hex");
    console.log("-------------keyPairs[0].publicKey", pk);
    console.log("-------------keyPairs[0].publicKey", Buffer.from(pk, "hex"));
    if (!utxo.tx || !utxo.tx.vout)
      throw new Error("No outputs");
    let redeemScript2;
    const sciptType = utxo.tx.vout[utxo.vout].scriptpubkey_type;
    if (sciptType === "pay-to-witness-script-hash") {
      const p2w = src$3.payments.p2wpkh({
        pubkey: keyPairs[0].publicKey,
        network: getNetwork(network)
      });
      redeemScript2 = (_a = p2w == null ? void 0 : p2w.redeem) == null ? void 0 : _a.output;
    } else if (sciptType === "pay-to-script-hash" || sciptType === "p2sh") {
      const paymentParams = {
        redeem: src$3.payments.p2wpkh({
          pubkey: keyPairs[0].publicKey,
          network: getNetwork(network)
        }),
        network: getNetwork(network)
      };
      const p2sh2 = src$3.payments.p2sh(paymentParams);
      redeemScript2 = (_b = p2sh2 == null ? void 0 : p2sh2.redeem) == null ? void 0 : _b.output;
    } else if (sciptType === "v0_p2wpkh") {
      const p2shObj = getP2SHToP2WPKH(network);
      redeemScript2 = (_c = p2shObj == null ? void 0 : p2shObj.redeem) == null ? void 0 : _c.output;
    } else {
      throw new Error("Unhandled type: " + sciptType);
    }
    return redeemScript2;
  }
  function buildTransaction(config) {
    if (!config.fromBtcAddress || !config.sbtcWalletAddress || config.pegIn && !config.stxAddress || !config.utxos)
      throw new Error("wallet or inputs not defined.");
    const network = getNetwork(config.network);
    const psbt2 = new src$3.Psbt({
      network
    });
    config.utxos.forEach((utxo) => {
      psbt2.addInput({
        hash: utxo.txid,
        index: utxo.vout
      });
    });
    const totalInputValue = maxCommit(config.utxos);
    if (config.pegIn) {
      addPegInOutputs(psbt2, config.fromBtcAddress, config.sbtcWalletAddress, config.sbtcWalletAddress, totalInputValue, config.feeCalc.pegInFeeCalc.pegInAmount, config.feeCalc.pegInFeeCalc.feeToApply);
    } else {
      addPegOutOutputs(psbt2, config.fromBtcAddress, config.sbtcWalletAddress, totalInputValue, config.feeCalc.pegOutFeeCalc.pegOutAmount, config.feeCalc.pegOutFeeCalc.feeToApply);
    }
    return psbt2;
  }
  const validator = (pubkey, msghash, signature) => ECPair.fromPublicKey(pubkey).verify(msghash, signature);
  function calculateFee(config) {
    const network = getNetwork(config.network);
    const psbt2 = new src$3.Psbt({
      network
    });
    config.utxos.forEach((utxo) => {
      const nonWitnessUtxo2 = globalThis.Buffer.from(utxo.tx.hex, "hex");
      const redeemScript2 = getRedeemScript(config.network, utxo);
      psbt2.addInput({
        hash: utxo.txid,
        index: utxo.vout,
        nonWitnessUtxo: nonWitnessUtxo2,
        redeemScript: redeemScript2
      });
    });
    const totalInputValue = maxCommit(config.utxos);
    const pegInFeeCalc = calcFeesIn(network, config, psbt2, totalInputValue);
    const pegOutFeeCalc = calcFeesOut(network, config, psbt2, totalInputValue);
    return {
      pegInFeeCalc,
      pegOutFeeCalc
    };
  }
  function calcFeesIn(network, config, psbt2, totalInputValue) {
    const pegInAmount = Math.floor(totalInputValue / 2);
    if (!config.fromBtcAddress)
      throw new Error("Sending Bitcoin address is missing");
    if (!config.sbtcWalletAddress)
      throw new Error("Receiving Bitcoin address is missing");
    addPegInOutputs(psbt2, config.fromBtcAddress, config.sbtcWalletAddress, "ST3JS8A0CHVNVJDCRPNJ1PSPJKTCZ4VSRYNVA55TW", totalInputValue, pegInAmount, 0);
    const fees = getVsizes(network, psbt2, config.feeInfo, config.utxos.length);
    return {
      feeToApply: fees[0],
      pegInAmount,
      high: {
        change: totalInputValue - pegInAmount - fees[2],
        fee: fees[2]
      },
      medium: {
        change: totalInputValue - pegInAmount - fees[1],
        fee: fees[1]
      },
      low: {
        change: totalInputValue - pegInAmount - fees[0],
        fee: fees[0]
      }
    };
  }
  function calcFeesOut(network, config, psbt2, totalInputValue) {
    if (!config.fromBtcAddress)
      throw new Error("Receiving address not known");
    if (!config.sbtcWalletAddress)
      throw new Error("SBTC wallet address not known");
    addPegOutOutputs(psbt2, config.fromBtcAddress, config.sbtcWalletAddress, totalInputValue, 1e6, 0);
    const fees = getVsizes(network, psbt2, config.feeInfo, config.utxos.length);
    return {
      feeToApply: fees[0],
      pegOutAmount: totalInputValue - fees[2] - dustAmount,
      dustAmount,
      high: {
        change: totalInputValue - fees[2] - dustAmount,
        fee: fees[2]
      },
      medium: {
        change: totalInputValue - fees[1] - dustAmount,
        fee: fees[1]
      },
      low: {
        change: totalInputValue - fees[0] - dustAmount,
        fee: fees[0]
      }
    };
  }
  function getVsizes(network, psbt2, feeInfo, numbInputs) {
    try {
      const alice = ECPair.fromWIF(signer, network);
      psbt2.signAllInputs(alice);
      psbt2.validateSignaturesOfInput(0, validator);
      psbt2.finalizeAllInputs();
      const transaction2 = psbt2.extractTransaction();
      let vsize = transaction2.virtualSize();
      vsize = vsize + numbInputs;
      const feeH = Math.floor(feeInfo.high_fee_per_kb / 1e3 * vsize);
      const feeM = Math.floor(feeInfo.medium_fee_per_kb / 1e3 * vsize);
      const feeL = Math.floor(feeInfo.low_fee_per_kb / 1e3 * vsize);
      return [
        feeL,
        feeM,
        feeH
      ];
    } catch (err) {
      return [
        4113,
        6727,
        10586
      ];
    }
  }
  function addPegInOutputs(psbt2, fromBtcAddress, sbtcWalletAddress, stxAddress, totalInputValue, pegInAmount, fees) {
    const data = globalThis.Buffer.from(stxAddress, "utf8");
    const embed2 = src$3.payments.embed({
      data: [
        data
      ]
    });
    if (!embed2.output)
      throw new Error("Output data is missing");
    psbt2.addOutput({
      script: embed2.output,
      value: 0
    });
    psbt2.addOutput({
      address: sbtcWalletAddress,
      value: pegInAmount
    });
    const change = totalInputValue - pegInAmount - fees;
    if (change > 0)
      psbt2.addOutput({
        address: fromBtcAddress,
        value: change
      });
    return psbt2;
  }
  function addPegOutOutputs(psbt2, fromBtcAddress, sbtcWalletAddress, totalInputValue, pegOutAmount, fees) {
    if (!fromBtcAddress)
      throw new Error("Sending Bitcoin address is missing");
    if (!sbtcWalletAddress)
      throw new Error("Receiving Bitcoin address is missing");
    const data = globalThis.Buffer.from("" + pegOutAmount, "utf8");
    const embed2 = src$3.payments.embed({
      data: [
        data
      ]
    });
    if (!embed2.output)
      throw new Error("Output data is missing");
    psbt2.addOutput({
      script: embed2.output,
      value: 0
    });
    psbt2.addOutput({
      address: sbtcWalletAddress,
      value: dustAmount
    });
    const change = totalInputValue - fees - dustAmount;
    if (change > 0)
      psbt2.addOutput({
        address: fromBtcAddress,
        value: change
      });
    return psbt2;
  }
  const { console: console_1 } = globals$1;
  const file$9 = "src/lib/components/pegin/build/UTXOSelection.svelte";
  function create_if_block_2$5(ctx) {
    let div;
    let t;
    const block2 = {
      c: function create() {
        div = element("div");
        t = text(ctx[2]);
        this.h();
      },
      l: function claim(nodes) {
        div = claim_element(nodes, "DIV", {
          class: true
        });
        var div_nodes = children(div);
        t = claim_text(div_nodes, ctx[2]);
        div_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(div, "class", "text-warning");
        add_location(div, file$9, 37, 17, 1438);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div, anchor);
        append_hydration_dev(div, t);
      },
      p: function update(ctx2, dirty) {
        if (dirty & 4)
          set_data_dev(t, ctx2[2]);
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block_2$5.name,
      type: "if",
      source: "(38:0) {#if errorReason}",
      ctx
    });
    return block2;
  }
  function create_if_block_1$5(ctx) {
    let div;
    let t;
    const block2 = {
      c: function create() {
        div = element("div");
        t = text("No bitcoin (transactions outputs) found at this address - please use an address with some bitcoin balance.");
        this.h();
      },
      l: function claim(nodes) {
        div = claim_element(nodes, "DIV", {
          class: true
        });
        var div_nodes = children(div);
        t = claim_text(div_nodes, "No bitcoin (transactions outputs) found at this address - please use an address with some bitcoin balance.");
        div_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(div, "class", "text-danger");
        add_location(div, file$9, 51, 6, 2420);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div, anchor);
        append_hydration_dev(div, t);
      },
      p: noop$3,
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block_1$5.name,
      type: "if",
      source: "(51:29) ",
      ctx
    });
    return block2;
  }
  function create_if_block$7(ctx) {
    var _a;
    let div2;
    let div0;
    let t0_value = (((_a = ctx[1].utxos) == null ? void 0 : _a.length) || 0) + "";
    let t0;
    let t1;
    let t2_value = maxCommit(ctx[1].utxos) + "";
    let t2;
    let t3;
    let t4;
    let div1;
    let a2;
    let t5;
    let mounted;
    let dispose;
    const block2 = {
      c: function create() {
        div2 = element("div");
        div0 = element("div");
        t0 = text(t0_value);
        t1 = text(" UTXO(s) Found (Value: ");
        t2 = text(t2_value);
        t3 = text(")");
        t4 = space();
        div1 = element("div");
        a2 = element("a");
        t5 = text("refresh");
        this.h();
      },
      l: function claim(nodes) {
        div2 = claim_element(nodes, "DIV", {
          class: true
        });
        var div2_nodes = children(div2);
        div0 = claim_element(div2_nodes, "DIV", {});
        var div0_nodes = children(div0);
        t0 = claim_text(div0_nodes, t0_value);
        t1 = claim_text(div0_nodes, " UTXO(s) Found (Value: ");
        t2 = claim_text(div0_nodes, t2_value);
        t3 = claim_text(div0_nodes, ")");
        div0_nodes.forEach(detach_dev);
        t4 = claim_space(div2_nodes);
        div1 = claim_element(div2_nodes, "DIV", {});
        var div1_nodes = children(div1);
        a2 = claim_element(div1_nodes, "A", {
          href: true,
          class: true
        });
        var a_nodes = children(a2);
        t5 = claim_text(a_nodes, "refresh");
        a_nodes.forEach(detach_dev);
        div1_nodes.forEach(detach_dev);
        div2_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        add_location(div0, file$9, 47, 6, 2172);
        attr_dev(a2, "href", "/");
        attr_dev(a2, "class", "");
        add_location(a2, file$9, 48, 11, 2281);
        add_location(div1, file$9, 48, 6, 2276);
        attr_dev(div2, "class", "d-flex justify-content-between text-info");
        add_location(div2, file$9, 46, 4, 2110);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div2, anchor);
        append_hydration_dev(div2, div0);
        append_hydration_dev(div0, t0);
        append_hydration_dev(div0, t1);
        append_hydration_dev(div0, t2);
        append_hydration_dev(div0, t3);
        append_hydration_dev(div2, t4);
        append_hydration_dev(div2, div1);
        append_hydration_dev(div1, a2);
        append_hydration_dev(a2, t5);
        if (!mounted) {
          dispose = listen_dev(a2, "click", prevent_default(ctx[7]), false, true, false);
          mounted = true;
        }
      },
      p: function update(ctx2, dirty) {
        var _a2;
        if (dirty & 2 && t0_value !== (t0_value = (((_a2 = ctx2[1].utxos) == null ? void 0 : _a2.length) || 0) + ""))
          set_data_dev(t0, t0_value);
        if (dirty & 2 && t2_value !== (t2_value = maxCommit(ctx2[1].utxos) + ""))
          set_data_dev(t2, t2_value);
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div2);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block$7.name,
      type: "if",
      source: "(46:4) {#if showUtxos}",
      ctx
    });
    return block2;
  }
  function create_fragment$9(ctx) {
    let t0;
    let div1;
    let div0;
    let label;
    let span0;
    let t1;
    let t2_value = ctx[1].network + "";
    let t2;
    let t3;
    let t4;
    let span1;
    let patchquestion;
    let t5;
    let input;
    let t6;
    let current;
    let mounted;
    let dispose;
    let if_block0 = ctx[2] && create_if_block_2$5(ctx);
    patchquestion = new PatchQuestion({
      props: {
        width: 30,
        height: 30
      },
      $$inline: true
    });
    function select_block_type(ctx2, dirty) {
      if (ctx2[3])
        return create_if_block$7;
      if (ctx2[0])
        return create_if_block_1$5;
    }
    let current_block_type = select_block_type(ctx);
    let if_block1 = current_block_type && current_block_type(ctx);
    const block2 = {
      c: function create() {
        if (if_block0)
          if_block0.c();
        t0 = space();
        div1 = element("div");
        div0 = element("div");
        label = element("label");
        span0 = element("span");
        t1 = text("Bitcoin ");
        t2 = text(t2_value);
        t3 = text(" Address:");
        t4 = space();
        span1 = element("span");
        create_component(patchquestion.$$.fragment);
        t5 = space();
        input = element("input");
        t6 = space();
        if (if_block1)
          if_block1.c();
        this.h();
      },
      l: function claim(nodes) {
        if (if_block0)
          if_block0.l(nodes);
        t0 = claim_space(nodes);
        div1 = claim_element(nodes, "DIV", {
          class: true
        });
        var div1_nodes = children(div1);
        div0 = claim_element(div1_nodes, "DIV", {
          class: true
        });
        var div0_nodes = children(div0);
        label = claim_element(div0_nodes, "LABEL", {
          for: true,
          class: true
        });
        var label_nodes = children(label);
        span0 = claim_element(label_nodes, "SPAN", {});
        var span0_nodes = children(span0);
        t1 = claim_text(span0_nodes, "Bitcoin ");
        t2 = claim_text(span0_nodes, t2_value);
        t3 = claim_text(span0_nodes, " Address:");
        span0_nodes.forEach(detach_dev);
        t4 = claim_space(label_nodes);
        span1 = claim_element(label_nodes, "SPAN", {
          class: true,
          "data-bs-toggle": true,
          "data-bs-placement": true,
          "data-bs-custom-class": true,
          title: true
        });
        var span1_nodes = children(span1);
        claim_component(patchquestion.$$.fragment, span1_nodes);
        span1_nodes.forEach(detach_dev);
        label_nodes.forEach(detach_dev);
        t5 = claim_space(div0_nodes);
        input = claim_element(div0_nodes, "INPUT", {
          type: true,
          id: true,
          class: true,
          autocomplete: true
        });
        t6 = claim_space(div0_nodes);
        if (if_block1)
          if_block1.l(div0_nodes);
        div0_nodes.forEach(detach_dev);
        div1_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        add_location(span0, file$9, 41, 6, 1604);
        attr_dev(span1, "class", "pointer text-info");
        attr_dev(span1, "data-bs-toggle", "tooltip-ftux");
        attr_dev(span1, "data-bs-placement", "top");
        attr_dev(span1, "data-bs-custom-class", "custom-tooltip");
        attr_dev(span1, "title", "Your bitcoin address. Funds you send from this wallet will be exchanged for sBTC");
        add_location(span1, file$9, 42, 6, 1662);
        attr_dev(label, "for", "transact-path");
        attr_dev(label, "class", "d-flex justify-content-between");
        add_location(label, file$9, 40, 4, 1531);
        attr_dev(input, "type", "text");
        attr_dev(input, "id", "from-address");
        attr_dev(input, "class", "form-control");
        attr_dev(input, "autocomplete", "off");
        add_location(input, file$9, 44, 4, 1939);
        attr_dev(div0, "class", "col");
        add_location(div0, file$9, 39, 2, 1509);
        attr_dev(div1, "class", "row");
        add_location(div1, file$9, 38, 0, 1489);
      },
      m: function mount(target, anchor) {
        if (if_block0)
          if_block0.m(target, anchor);
        insert_hydration_dev(target, t0, anchor);
        insert_hydration_dev(target, div1, anchor);
        append_hydration_dev(div1, div0);
        append_hydration_dev(div0, label);
        append_hydration_dev(label, span0);
        append_hydration_dev(span0, t1);
        append_hydration_dev(span0, t2);
        append_hydration_dev(span0, t3);
        append_hydration_dev(label, t4);
        append_hydration_dev(label, span1);
        mount_component(patchquestion, span1, null);
        append_hydration_dev(div0, t5);
        append_hydration_dev(div0, input);
        set_input_value(input, ctx[0]);
        append_hydration_dev(div0, t6);
        if (if_block1)
          if_block1.m(div0, null);
        current = true;
        if (!mounted) {
          dispose = [
            listen_dev(input, "input", ctx[5]),
            listen_dev(input, "input", ctx[6], false, false, false)
          ];
          mounted = true;
        }
      },
      p: function update(ctx2, [dirty]) {
        if (ctx2[2]) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_2$5(ctx2);
            if_block0.c();
            if_block0.m(t0.parentNode, t0);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if ((!current || dirty & 2) && t2_value !== (t2_value = ctx2[1].network + ""))
          set_data_dev(t2, t2_value);
        if (dirty & 1 && input.value !== ctx2[0]) {
          set_input_value(input, ctx2[0]);
        }
        if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if (if_block1)
            if_block1.d(1);
          if_block1 = current_block_type && current_block_type(ctx2);
          if (if_block1) {
            if_block1.c();
            if_block1.m(div0, null);
          }
        }
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(patchquestion.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(patchquestion.$$.fragment, local);
        current = false;
      },
      d: function destroy2(detaching) {
        if (if_block0)
          if_block0.d(detaching);
        if (detaching)
          detach_dev(t0);
        if (detaching)
          detach_dev(div1);
        destroy_component(patchquestion);
        if (if_block1) {
          if_block1.d();
        }
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_fragment$9.name,
      type: "component",
      source: "",
      ctx
    });
    return block2;
  }
  function instance$9($$self, $$props, $$invalidate) {
    let showUtxos;
    let $sbtcConfig;
    validate_store(sbtcConfig, "sbtcConfig");
    component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(1, $sbtcConfig = $$value));
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("UTXOSelection", slots, []);
    let bitcoinAddress = $sbtcConfig.fromBtcAddress;
    let errorReason;
    const configureUTXOs = async (force) => {
      $$invalidate(2, errorReason = void 0);
      if (!bitcoinAddress || bitcoinAddress.length < 10) {
        $$invalidate(2, errorReason = "Invalid address");
        return;
      }
      if (!force && $sbtcConfig.fromBtcAddress === bitcoinAddress && $sbtcConfig.utxos) {
        return;
      }
      try {
        const conf = $sbtcConfig;
        let result = await fetchAddressDetails($sbtcConfig.network, bitcoinAddress);
        conf.fromBtcAddress = bitcoinAddress;
        conf.addressDetails = result;
        let uxtos = await fetchUTXOs($sbtcConfig.network, bitcoinAddress);
        uxtos = await attachAllInputTransactions($sbtcConfig.network, uxtos);
        conf.utxos = uxtos;
        const feeCalc = await calculateFee(conf);
        console.log(feeCalc);
        console.log("utxos --> ", result);
        conf.feeCalc = feeCalc;
        sbtcConfig.update(() => conf);
      } catch (err) {
        $$invalidate(2, errorReason = err || "Error - is the address a valid");
      }
    };
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
        console_1.warn(`<UTXOSelection> was created with unknown prop '${key}'`);
    });
    function input_input_handler() {
      bitcoinAddress = this.value;
      $$invalidate(0, bitcoinAddress);
    }
    const input_handler = () => configureUTXOs(false);
    const click_handler = () => configureUTXOs(true);
    $$self.$capture_state = () => ({
      sbtcConfig,
      fetchUTXOs,
      attachAllInputTransactions,
      fetchAddressDetails,
      PatchQuestion,
      maxCommit,
      calculateFee,
      bitcoinAddress,
      errorReason,
      configureUTXOs,
      showUtxos,
      $sbtcConfig
    });
    $$self.$inject_state = ($$props2) => {
      if ("bitcoinAddress" in $$props2)
        $$invalidate(0, bitcoinAddress = $$props2.bitcoinAddress);
      if ("errorReason" in $$props2)
        $$invalidate(2, errorReason = $$props2.errorReason);
      if ("showUtxos" in $$props2)
        $$invalidate(3, showUtxos = $$props2.showUtxos);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    $$self.$$.update = () => {
      var _a;
      if ($$self.$$.dirty & 3) {
        $$invalidate(3, showUtxos = bitcoinAddress && ((_a = $sbtcConfig.utxos) == null ? void 0 : _a.length) > 0);
      }
    };
    return [
      bitcoinAddress,
      $sbtcConfig,
      errorReason,
      showUtxos,
      configureUTXOs,
      input_input_handler,
      input_handler,
      click_handler
    ];
  }
  class UTXOSelection extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance$9, create_fragment$9, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "UTXOSelection",
        options,
        id: create_fragment$9.name
      });
    }
  }
  const BuildTransaction_svelte_svelte_type_style_lang = "";
  const file$8 = "src/lib/components/pegin/BuildTransaction.svelte";
  function create_if_block_3$1(ctx) {
    let div;
    let t;
    const block2 = {
      c: function create() {
        div = element("div");
        t = text(ctx[3]);
        this.h();
      },
      l: function claim(nodes) {
        div = claim_element(nodes, "DIV", {
          class: true
        });
        var div_nodes = children(div);
        t = claim_text(div_nodes, ctx[3]);
        div_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(div, "class", "text-warning");
        add_location(div, file$8, 26, 17, 1134);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div, anchor);
        append_hydration_dev(div, t);
      },
      p: noop$3,
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block_3$1.name,
      type: "if",
      source: "(27:0) {#if errorReason}",
      ctx
    });
    return block2;
  }
  function create_if_block_2$4(ctx) {
    let div;
    let principal;
    let current;
    principal = new Principal({
      $$inline: true
    });
    principal.$on("principal_updated", ctx[5]);
    const block2 = {
      c: function create() {
        div = element("div");
        create_component(principal.$$.fragment);
        this.h();
      },
      l: function claim(nodes) {
        div = claim_element(nodes, "DIV", {
          class: true
        });
        var div_nodes = children(div);
        claim_component(principal.$$.fragment, div_nodes);
        div_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(div, "class", "mb-4");
        add_location(div, file$8, 29, 0, 1248);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div, anchor);
        mount_component(principal, div, null);
        current = true;
      },
      p: noop$3,
      i: function intro(local) {
        if (current)
          return;
        transition_in(principal.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(principal.$$.fragment, local);
        current = false;
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div);
        destroy_component(principal);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block_2$4.name,
      type: "if",
      source: "(29:0) {#if showStxAddress}",
      ctx
    });
    return block2;
  }
  function create_if_block_1$4(ctx) {
    let div;
    let peginamount;
    let current;
    peginamount = new PegInAmount({
      $$inline: true
    });
    peginamount.$on("amount_updated", ctx[6]);
    const block2 = {
      c: function create() {
        div = element("div");
        create_component(peginamount.$$.fragment);
        this.h();
      },
      l: function claim(nodes) {
        div = claim_element(nodes, "DIV", {
          class: true
        });
        var div_nodes = children(div);
        claim_component(peginamount.$$.fragment, div_nodes);
        div_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(div, "class", "mb-4");
        add_location(div, file$8, 32, 0, 1354);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div, anchor);
        mount_component(peginamount, div, null);
        current = true;
      },
      p: noop$3,
      i: function intro(local) {
        if (current)
          return;
        transition_in(peginamount.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(peginamount.$$.fragment, local);
        current = false;
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div);
        destroy_component(peginamount);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block_1$4.name,
      type: "if",
      source: "(32:0) {#if showPegInAmount}",
      ctx
    });
    return block2;
  }
  function create_if_block$6(ctx) {
    let div1;
    let div0;
    let button;
    let t;
    let mounted;
    let dispose;
    const block2 = {
      c: function create() {
        div1 = element("div");
        div0 = element("div");
        button = element("button");
        t = text("CONTINUE");
        this.h();
      },
      l: function claim(nodes) {
        div1 = claim_element(nodes, "DIV", {
          class: true
        });
        var div1_nodes = children(div1);
        div0 = claim_element(div1_nodes, "DIV", {
          class: true
        });
        var div0_nodes = children(div0);
        button = claim_element(div0_nodes, "BUTTON", {
          class: true,
          type: true
        });
        var button_nodes = children(button);
        t = claim_text(button_nodes, "CONTINUE");
        button_nodes.forEach(detach_dev);
        div0_nodes.forEach(detach_dev);
        div1_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(button, "class", "btn btn-outline-info w-100");
        attr_dev(button, "type", "button");
        add_location(button, file$8, 37, 4, 1493);
        attr_dev(div0, "class", "col");
        add_location(div0, file$8, 36, 2, 1471);
        attr_dev(div1, "class", "row s-6dYibH49IROR");
        add_location(div1, file$8, 35, 0, 1451);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div1, anchor);
        append_hydration_dev(div1, div0);
        append_hydration_dev(div0, button);
        append_hydration_dev(button, t);
        if (!mounted) {
          dispose = listen_dev(button, "click", ctx[9], false, false, false);
          mounted = true;
        }
      },
      p: noop$3,
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div1);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block$6.name,
      type: "if",
      source: "(35:0) {#if showButton}",
      ctx
    });
    return block2;
  }
  function create_fragment$8(ctx) {
    let t0;
    let div;
    let utxoselection;
    let t1;
    let t2;
    let t3;
    let if_block3_anchor;
    let current;
    let if_block0 = ctx[3] && create_if_block_3$1(ctx);
    utxoselection = new UTXOSelection({
      $$inline: true
    });
    let if_block1 = ctx[2] && create_if_block_2$4(ctx);
    let if_block2 = ctx[1] && create_if_block_1$4(ctx);
    let if_block3 = ctx[0] && create_if_block$6(ctx);
    const block2 = {
      c: function create() {
        if (if_block0)
          if_block0.c();
        t0 = space();
        div = element("div");
        create_component(utxoselection.$$.fragment);
        t1 = space();
        if (if_block1)
          if_block1.c();
        t2 = space();
        if (if_block2)
          if_block2.c();
        t3 = space();
        if (if_block3)
          if_block3.c();
        if_block3_anchor = empty();
        this.h();
      },
      l: function claim(nodes) {
        if (if_block0)
          if_block0.l(nodes);
        t0 = claim_space(nodes);
        div = claim_element(nodes, "DIV", {
          class: true
        });
        var div_nodes = children(div);
        claim_component(utxoselection.$$.fragment, div_nodes);
        div_nodes.forEach(detach_dev);
        t1 = claim_space(nodes);
        if (if_block1)
          if_block1.l(nodes);
        t2 = claim_space(nodes);
        if (if_block2)
          if_block2.l(nodes);
        t3 = claim_space(nodes);
        if (if_block3)
          if_block3.l(nodes);
        if_block3_anchor = empty();
        this.h();
      },
      h: function hydrate() {
        attr_dev(div, "class", "mb-4");
        add_location(div, file$8, 27, 0, 1185);
      },
      m: function mount(target, anchor) {
        if (if_block0)
          if_block0.m(target, anchor);
        insert_hydration_dev(target, t0, anchor);
        insert_hydration_dev(target, div, anchor);
        mount_component(utxoselection, div, null);
        insert_hydration_dev(target, t1, anchor);
        if (if_block1)
          if_block1.m(target, anchor);
        insert_hydration_dev(target, t2, anchor);
        if (if_block2)
          if_block2.m(target, anchor);
        insert_hydration_dev(target, t3, anchor);
        if (if_block3)
          if_block3.m(target, anchor);
        insert_hydration_dev(target, if_block3_anchor, anchor);
        current = true;
      },
      p: function update(ctx2, [dirty]) {
        if (ctx2[3])
          if_block0.p(ctx2, dirty);
        if (ctx2[2]) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
            if (dirty & 4) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block_2$4(ctx2);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(t2.parentNode, t2);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
        if (ctx2[1]) {
          if (if_block2) {
            if_block2.p(ctx2, dirty);
            if (dirty & 2) {
              transition_in(if_block2, 1);
            }
          } else {
            if_block2 = create_if_block_1$4(ctx2);
            if_block2.c();
            transition_in(if_block2, 1);
            if_block2.m(t3.parentNode, t3);
          }
        } else if (if_block2) {
          group_outros();
          transition_out(if_block2, 1, 1, () => {
            if_block2 = null;
          });
          check_outros();
        }
        if (ctx2[0]) {
          if (if_block3) {
            if_block3.p(ctx2, dirty);
          } else {
            if_block3 = create_if_block$6(ctx2);
            if_block3.c();
            if_block3.m(if_block3_anchor.parentNode, if_block3_anchor);
          }
        } else if (if_block3) {
          if_block3.d(1);
          if_block3 = null;
        }
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(utxoselection.$$.fragment, local);
        transition_in(if_block1);
        transition_in(if_block2);
        current = true;
      },
      o: function outro(local) {
        transition_out(utxoselection.$$.fragment, local);
        transition_out(if_block1);
        transition_out(if_block2);
        current = false;
      },
      d: function destroy2(detaching) {
        if (if_block0)
          if_block0.d(detaching);
        if (detaching)
          detach_dev(t0);
        if (detaching)
          detach_dev(div);
        destroy_component(utxoselection);
        if (detaching)
          detach_dev(t1);
        if (if_block1)
          if_block1.d(detaching);
        if (detaching)
          detach_dev(t2);
        if (if_block2)
          if_block2.d(detaching);
        if (detaching)
          detach_dev(t3);
        if (if_block3)
          if_block3.d(detaching);
        if (detaching)
          detach_dev(if_block3_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_fragment$8.name,
      type: "component",
      source: "",
      ctx
    });
    return block2;
  }
  function instance$8($$self, $$props, $$invalidate) {
    let showStxAddress;
    let showPegInAmount;
    let showButton;
    let $sbtcConfig;
    validate_store(sbtcConfig, "sbtcConfig");
    component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(8, $sbtcConfig = $$value));
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("BuildTransaction", slots, []);
    const dispatch = createEventDispatcher();
    let errorReason;
    let stxAddressOk = true;
    const requestSignature = () => {
      dispatch("request_signature");
    };
    const principalUpdated = (event) => {
      $$invalidate(7, stxAddressOk = !event.detail.error);
    };
    const amountUpdated = () => {
    };
    onMount(async () => {
    });
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
        console.warn(`<BuildTransaction> was created with unknown prop '${key}'`);
    });
    const click_handler = () => requestSignature();
    $$self.$capture_state = () => ({
      onMount,
      sbtcConfig,
      Principal,
      PegInAmount,
      UTXOSelection,
      Tooltip,
      createEventDispatcher,
      dispatch,
      errorReason,
      stxAddressOk,
      requestSignature,
      principalUpdated,
      amountUpdated,
      showButton,
      showPegInAmount,
      showStxAddress,
      $sbtcConfig
    });
    $$self.$inject_state = ($$props2) => {
      if ("errorReason" in $$props2)
        $$invalidate(3, errorReason = $$props2.errorReason);
      if ("stxAddressOk" in $$props2)
        $$invalidate(7, stxAddressOk = $$props2.stxAddressOk);
      if ("showButton" in $$props2)
        $$invalidate(0, showButton = $$props2.showButton);
      if ("showPegInAmount" in $$props2)
        $$invalidate(1, showPegInAmount = $$props2.showPegInAmount);
      if ("showStxAddress" in $$props2)
        $$invalidate(2, showStxAddress = $$props2.showStxAddress);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    $$self.$$.update = () => {
      var _a;
      if ($$self.$$.dirty & 256) {
        $$invalidate(2, showStxAddress = $sbtcConfig.fromBtcAddress && ((_a = $sbtcConfig.utxos) == null ? void 0 : _a.length) > 0);
      }
      if ($$self.$$.dirty & 384) {
        $$invalidate(1, showPegInAmount = $sbtcConfig.fromBtcAddress && $sbtcConfig.stxAddress && stxAddressOk);
      }
      if ($$self.$$.dirty & 384) {
        $$invalidate(0, showButton = $sbtcConfig.feeCalc.pegInFeeCalc.feeToApply > 0 && $sbtcConfig.fromBtcAddress && $sbtcConfig.feeCalc.pegInFeeCalc.pegInAmount > 0 && stxAddressOk);
      }
    };
    return [
      showButton,
      showPegInAmount,
      showStxAddress,
      errorReason,
      requestSignature,
      principalUpdated,
      amountUpdated,
      stxAddressOk,
      $sbtcConfig,
      click_handler
    ];
  }
  class BuildTransaction extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance$8, create_fragment$8, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "BuildTransaction",
        options,
        id: create_fragment$8.name
      });
    }
  }
  const electrum1 = "" + new URL("../assets/electrum1-b86953ea.png", import.meta.url).href;
  const electrum2 = "" + new URL("../assets/electrum2-8623e396.png", import.meta.url).href;
  const electrum3 = "" + new URL("../assets/electrum3-a984e762.png", import.meta.url).href;
  const Electrum_svelte_svelte_type_style_lang = "";
  const file$7 = "src/lib/components/wallets/Electrum.svelte";
  function create_fragment$7(ctx) {
    let div3;
    let div0;
    let p0;
    let t0;
    let t1;
    let img0;
    let img0_src_value;
    let t2;
    let div1;
    let img1;
    let img1_src_value;
    let t3;
    let div2;
    let p1;
    let t4;
    let t5;
    let p2;
    let t6;
    let t7;
    let img2;
    let img2_src_value;
    const block2 = {
      c: function create() {
        div3 = element("div");
        div0 = element("div");
        p0 = element("p");
        t0 = text("Copy / paste the transaction above into your Electrum wallet");
        t1 = space();
        img0 = element("img");
        t2 = space();
        div1 = element("div");
        img1 = element("img");
        t3 = space();
        div2 = element("div");
        p1 = element("p");
        t4 = text("Sign and broadcast the transaction");
        t5 = space();
        p2 = element("p");
        t6 = text("Always check the amount and recipient address!");
        t7 = space();
        img2 = element("img");
        this.h();
      },
      l: function claim(nodes) {
        div3 = claim_element(nodes, "DIV", {
          class: true
        });
        var div3_nodes = children(div3);
        div0 = claim_element(div3_nodes, "DIV", {
          class: true
        });
        var div0_nodes = children(div0);
        p0 = claim_element(div0_nodes, "P", {});
        var p0_nodes = children(p0);
        t0 = claim_text(p0_nodes, "Copy / paste the transaction above into your Electrum wallet");
        p0_nodes.forEach(detach_dev);
        t1 = claim_space(div0_nodes);
        img0 = claim_element(div0_nodes, "IMG", {
          src: true,
          alt: true,
          class: true
        });
        div0_nodes.forEach(detach_dev);
        t2 = claim_space(div3_nodes);
        div1 = claim_element(div3_nodes, "DIV", {
          class: true
        });
        var div1_nodes = children(div1);
        img1 = claim_element(div1_nodes, "IMG", {
          src: true,
          alt: true,
          class: true
        });
        div1_nodes.forEach(detach_dev);
        t3 = claim_space(div3_nodes);
        div2 = claim_element(div3_nodes, "DIV", {
          class: true
        });
        var div2_nodes = children(div2);
        p1 = claim_element(div2_nodes, "P", {});
        var p1_nodes = children(p1);
        t4 = claim_text(p1_nodes, "Sign and broadcast the transaction");
        p1_nodes.forEach(detach_dev);
        t5 = claim_space(div2_nodes);
        p2 = claim_element(div2_nodes, "P", {});
        var p2_nodes = children(p2);
        t6 = claim_text(p2_nodes, "Always check the amount and recipient address!");
        p2_nodes.forEach(detach_dev);
        t7 = claim_space(div2_nodes);
        img2 = claim_element(div2_nodes, "IMG", {
          src: true,
          alt: true,
          class: true
        });
        div2_nodes.forEach(detach_dev);
        div3_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        add_location(p0, file$7, 7, 4, 254);
        if (!src_url_equal(img0.src, img0_src_value = electrum1))
          attr_dev(img0, "src", img0_src_value);
        attr_dev(img0, "alt", "night time");
        attr_dev(img0, "class", "s-VY_8YC2zOSYf");
        add_location(img0, file$7, 8, 4, 326);
        attr_dev(div0, "class", "p-3 border");
        add_location(div0, file$7, 6, 2, 225);
        if (!src_url_equal(img1.src, img1_src_value = electrum2))
          attr_dev(img1, "src", img1_src_value);
        attr_dev(img1, "alt", "night time");
        attr_dev(img1, "class", "s-VY_8YC2zOSYf");
        add_location(img1, file$7, 11, 4, 407);
        attr_dev(div1, "class", "p-3 border");
        add_location(div1, file$7, 10, 2, 378);
        add_location(p1, file$7, 14, 4, 488);
        add_location(p2, file$7, 15, 4, 534);
        if (!src_url_equal(img2.src, img2_src_value = electrum3))
          attr_dev(img2, "src", img2_src_value);
        attr_dev(img2, "alt", "night time");
        attr_dev(img2, "class", "s-VY_8YC2zOSYf");
        add_location(img2, file$7, 16, 4, 592);
        attr_dev(div2, "class", "p-3 border");
        add_location(div2, file$7, 13, 2, 459);
        attr_dev(div3, "class", "");
        add_location(div3, file$7, 5, 0, 208);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div3, anchor);
        append_hydration_dev(div3, div0);
        append_hydration_dev(div0, p0);
        append_hydration_dev(p0, t0);
        append_hydration_dev(div0, t1);
        append_hydration_dev(div0, img0);
        append_hydration_dev(div3, t2);
        append_hydration_dev(div3, div1);
        append_hydration_dev(div1, img1);
        append_hydration_dev(div3, t3);
        append_hydration_dev(div3, div2);
        append_hydration_dev(div2, p1);
        append_hydration_dev(p1, t4);
        append_hydration_dev(div2, t5);
        append_hydration_dev(div2, p2);
        append_hydration_dev(p2, t6);
        append_hydration_dev(div2, t7);
        append_hydration_dev(div2, img2);
      },
      p: noop$3,
      i: noop$3,
      o: noop$3,
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div3);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_fragment$7.name,
      type: "component",
      source: "",
      ctx
    });
    return block2;
  }
  function instance$7($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("Electrum", slots, []);
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
        console.warn(`<Electrum> was created with unknown prop '${key}'`);
    });
    $$self.$capture_state = () => ({
      electrum1,
      electrum2,
      electrum3
    });
    return [];
  }
  class Electrum extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance$7, create_fragment$7, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "Electrum",
        options,
        id: create_fragment$7.name
      });
    }
  }
  const trezor1 = "" + new URL("../assets/trezor1-52a60956.png", import.meta.url).href;
  const TrezorOne_svelte_svelte_type_style_lang = "";
  const file$6 = "src/lib/components/wallets/TrezorOne.svelte";
  function create_fragment$6(ctx) {
    let div3;
    let div0;
    let p0;
    let t0;
    let t1;
    let img0;
    let img0_src_value;
    let t2;
    let div1;
    let img1;
    let img1_src_value;
    let t3;
    let div2;
    let p1;
    let t4;
    let t5;
    let p2;
    let t6;
    let t7;
    let img2;
    let img2_src_value;
    const block2 = {
      c: function create() {
        div3 = element("div");
        div0 = element("div");
        p0 = element("p");
        t0 = text("Send 0.05BTC (on testnet) to trezor one address: tb1qsxj8yjqkm0fejw0f2p8uu09wj58jwuxmqakeyk");
        t1 = space();
        img0 = element("img");
        t2 = space();
        div1 = element("div");
        img1 = element("img");
        t3 = space();
        div2 = element("div");
        p1 = element("p");
        t4 = text("Sign and broadcast the transaction");
        t5 = space();
        p2 = element("p");
        t6 = text("Always check the amount and recipient address!");
        t7 = space();
        img2 = element("img");
        this.h();
      },
      l: function claim(nodes) {
        div3 = claim_element(nodes, "DIV", {
          class: true
        });
        var div3_nodes = children(div3);
        div0 = claim_element(div3_nodes, "DIV", {
          class: true
        });
        var div0_nodes = children(div0);
        p0 = claim_element(div0_nodes, "P", {});
        var p0_nodes = children(p0);
        t0 = claim_text(p0_nodes, "Send 0.05BTC (on testnet) to trezor one address: tb1qsxj8yjqkm0fejw0f2p8uu09wj58jwuxmqakeyk");
        p0_nodes.forEach(detach_dev);
        t1 = claim_space(div0_nodes);
        img0 = claim_element(div0_nodes, "IMG", {
          src: true,
          alt: true,
          class: true
        });
        div0_nodes.forEach(detach_dev);
        t2 = claim_space(div3_nodes);
        div1 = claim_element(div3_nodes, "DIV", {
          class: true
        });
        var div1_nodes = children(div1);
        img1 = claim_element(div1_nodes, "IMG", {
          src: true,
          alt: true,
          class: true
        });
        div1_nodes.forEach(detach_dev);
        t3 = claim_space(div3_nodes);
        div2 = claim_element(div3_nodes, "DIV", {
          class: true
        });
        var div2_nodes = children(div2);
        p1 = claim_element(div2_nodes, "P", {});
        var p1_nodes = children(p1);
        t4 = claim_text(p1_nodes, "Sign and broadcast the transaction");
        p1_nodes.forEach(detach_dev);
        t5 = claim_space(div2_nodes);
        p2 = claim_element(div2_nodes, "P", {});
        var p2_nodes = children(p2);
        t6 = claim_text(p2_nodes, "Always check the amount and recipient address!");
        p2_nodes.forEach(detach_dev);
        t7 = claim_space(div2_nodes);
        img2 = claim_element(div2_nodes, "IMG", {
          src: true,
          alt: true,
          class: true
        });
        div2_nodes.forEach(detach_dev);
        div3_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        add_location(p0, file$6, 7, 4, 250);
        if (!src_url_equal(img0.src, img0_src_value = trezor1))
          attr_dev(img0, "src", img0_src_value);
        attr_dev(img0, "alt", "night time");
        attr_dev(img0, "class", "s-gWK7n4eyE0dg");
        add_location(img0, file$6, 8, 4, 353);
        attr_dev(div0, "class", "p-3 border");
        add_location(div0, file$6, 6, 2, 221);
        if (!src_url_equal(img1.src, img1_src_value = electrum2))
          attr_dev(img1, "src", img1_src_value);
        attr_dev(img1, "alt", "night time");
        attr_dev(img1, "class", "s-gWK7n4eyE0dg");
        add_location(img1, file$6, 11, 4, 432);
        attr_dev(div1, "class", "p-3 border");
        add_location(div1, file$6, 10, 2, 403);
        add_location(p1, file$6, 14, 4, 513);
        add_location(p2, file$6, 15, 4, 559);
        if (!src_url_equal(img2.src, img2_src_value = electrum3))
          attr_dev(img2, "src", img2_src_value);
        attr_dev(img2, "alt", "night time");
        attr_dev(img2, "class", "s-gWK7n4eyE0dg");
        add_location(img2, file$6, 16, 4, 617);
        attr_dev(div2, "class", "p-3 border");
        add_location(div2, file$6, 13, 2, 484);
        attr_dev(div3, "class", "");
        add_location(div3, file$6, 5, 0, 204);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div3, anchor);
        append_hydration_dev(div3, div0);
        append_hydration_dev(div0, p0);
        append_hydration_dev(p0, t0);
        append_hydration_dev(div0, t1);
        append_hydration_dev(div0, img0);
        append_hydration_dev(div3, t2);
        append_hydration_dev(div3, div1);
        append_hydration_dev(div1, img1);
        append_hydration_dev(div3, t3);
        append_hydration_dev(div3, div2);
        append_hydration_dev(div2, p1);
        append_hydration_dev(p1, t4);
        append_hydration_dev(div2, t5);
        append_hydration_dev(div2, p2);
        append_hydration_dev(p2, t6);
        append_hydration_dev(div2, t7);
        append_hydration_dev(div2, img2);
      },
      p: noop$3,
      i: noop$3,
      o: noop$3,
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div3);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_fragment$6.name,
      type: "component",
      source: "",
      ctx
    });
    return block2;
  }
  function instance$6($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("TrezorOne", slots, []);
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
        console.warn(`<TrezorOne> was created with unknown prop '${key}'`);
    });
    $$self.$capture_state = () => ({
      trezor1,
      electrum2,
      electrum3
    });
    return [];
  }
  class TrezorOne extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance$6, create_fragment$6, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "TrezorOne",
        options,
        id: create_fragment$6.name
      });
    }
  }
  const WalletHelp_svelte_svelte_type_style_lang = "";
  const file$5 = "src/lib/components/wallets/WalletHelp.svelte";
  function create_if_block_2$3(ctx) {
    let div;
    let electrum;
    let current;
    electrum = new Electrum({
      $$inline: true
    });
    const block2 = {
      c: function create() {
        div = element("div");
        create_component(electrum.$$.fragment);
        this.h();
      },
      l: function claim(nodes) {
        div = claim_element(nodes, "DIV", {
          class: true,
          id: true,
          role: true,
          "aria-labelledby": true
        });
        var div_nodes = children(div);
        claim_component(electrum.$$.fragment, div_nodes);
        div_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(div, "class", "pane s-jQy3T8RQvP_U");
        attr_dev(div, "id", "home");
        attr_dev(div, "role", "tabpanel");
        attr_dev(div, "aria-labelledby", "home-tab");
        add_location(div, file$5, 14, 24, 754);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div, anchor);
        mount_component(electrum, div, null);
        current = true;
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(electrum.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(electrum.$$.fragment, local);
        current = false;
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div);
        destroy_component(electrum);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block_2$3.name,
      type: "if",
      source: "(15:6) {#if wallet === 1}",
      ctx
    });
    return block2;
  }
  function create_if_block_1$3(ctx) {
    let div;
    let trezorone;
    let current;
    trezorone = new TrezorOne({
      $$inline: true
    });
    const block2 = {
      c: function create() {
        div = element("div");
        create_component(trezorone.$$.fragment);
        this.h();
      },
      l: function claim(nodes) {
        div = claim_element(nodes, "DIV", {
          class: true,
          id: true,
          role: true,
          "aria-labelledby": true
        });
        var div_nodes = children(div);
        claim_component(trezorone.$$.fragment, div_nodes);
        div_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(div, "class", "pane s-jQy3T8RQvP_U");
        attr_dev(div, "id", "profile");
        attr_dev(div, "role", "tabpanel");
        attr_dev(div, "aria-labelledby", "profile-tab");
        add_location(div, file$5, 15, 24, 872);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div, anchor);
        mount_component(trezorone, div, null);
        current = true;
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(trezorone.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(trezorone.$$.fragment, local);
        current = false;
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div);
        destroy_component(trezorone);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block_1$3.name,
      type: "if",
      source: "(16:6) {#if wallet === 2}",
      ctx
    });
    return block2;
  }
  function create_if_block$5(ctx) {
    let div;
    let t;
    const block2 = {
      c: function create() {
        div = element("div");
        t = text("Instructions for Ledger");
        this.h();
      },
      l: function claim(nodes) {
        div = claim_element(nodes, "DIV", {
          class: true,
          id: true,
          role: true,
          "aria-labelledby": true
        });
        var div_nodes = children(div);
        t = claim_text(div_nodes, "Instructions for Ledger");
        div_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(div, "class", "pane s-jQy3T8RQvP_U");
        attr_dev(div, "id", "contact");
        attr_dev(div, "role", "tabpanel");
        attr_dev(div, "aria-labelledby", "contact-tab");
        add_location(div, file$5, 16, 24, 998);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div, anchor);
        append_hydration_dev(div, t);
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block$5.name,
      type: "if",
      source: "(17:6) {#if wallet === 3}",
      ctx
    });
    return block2;
  }
  function create_fragment$5(ctx) {
    let div3;
    let div2;
    let div0;
    let button0;
    let t0;
    let button0_class_value;
    let t1;
    let button1;
    let t2;
    let button1_class_value;
    let t3;
    let button2;
    let t4;
    let button2_class_value;
    let t5;
    let div1;
    let t6;
    let t7;
    let current;
    let mounted;
    let dispose;
    let if_block0 = ctx[0] === 1 && create_if_block_2$3(ctx);
    let if_block1 = ctx[0] === 2 && create_if_block_1$3(ctx);
    let if_block2 = ctx[0] === 3 && create_if_block$5(ctx);
    const block2 = {
      c: function create() {
        div3 = element("div");
        div2 = element("div");
        div0 = element("div");
        button0 = element("button");
        t0 = text("Electrum");
        t1 = space();
        button1 = element("button");
        t2 = text("Trezor");
        t3 = space();
        button2 = element("button");
        t4 = text("Ledger");
        t5 = space();
        div1 = element("div");
        if (if_block0)
          if_block0.c();
        t6 = space();
        if (if_block1)
          if_block1.c();
        t7 = space();
        if (if_block2)
          if_block2.c();
        this.h();
      },
      l: function claim(nodes) {
        div3 = claim_element(nodes, "DIV", {
          class: true
        });
        var div3_nodes = children(div3);
        div2 = claim_element(div3_nodes, "DIV", {
          class: true
        });
        var div2_nodes = children(div2);
        div0 = claim_element(div2_nodes, "DIV", {
          class: true
        });
        var div0_nodes = children(div0);
        button0 = claim_element(div0_nodes, "BUTTON", {
          class: true,
          "aria-current": true
        });
        var button0_nodes = children(button0);
        t0 = claim_text(button0_nodes, "Electrum");
        button0_nodes.forEach(detach_dev);
        t1 = claim_space(div0_nodes);
        button1 = claim_element(div0_nodes, "BUTTON", {
          class: true
        });
        var button1_nodes = children(button1);
        t2 = claim_text(button1_nodes, "Trezor");
        button1_nodes.forEach(detach_dev);
        t3 = claim_space(div0_nodes);
        button2 = claim_element(div0_nodes, "BUTTON", {
          class: true,
          tabindex: true,
          "aria-disabled": true
        });
        var button2_nodes = children(button2);
        t4 = claim_text(button2_nodes, "Ledger");
        button2_nodes.forEach(detach_dev);
        div0_nodes.forEach(detach_dev);
        t5 = claim_space(div2_nodes);
        div1 = claim_element(div2_nodes, "DIV", {
          class: true,
          id: true
        });
        var div1_nodes = children(div1);
        if (if_block0)
          if_block0.l(div1_nodes);
        t6 = claim_space(div1_nodes);
        if (if_block1)
          if_block1.l(div1_nodes);
        t7 = claim_space(div1_nodes);
        if (if_block2)
          if_block2.l(div1_nodes);
        div1_nodes.forEach(detach_dev);
        div2_nodes.forEach(detach_dev);
        div3_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(button0, "class", button0_class_value = ctx[0] === 1 ? "btn w-100 btn-info" : "btn w-100");
        attr_dev(button0, "aria-current", "page");
        add_location(button0, file$5, 9, 6, 277);
        attr_dev(button1, "class", button1_class_value = ctx[0] === 2 ? "btn w-100 btn-info" : "btn w-100");
        add_location(button1, file$5, 10, 6, 417);
        attr_dev(button2, "class", button2_class_value = ctx[0] === 3 ? "btn w-100 btn-info" : "btn w-100");
        attr_dev(button2, "tabindex", "-1");
        attr_dev(button2, "aria-disabled", "true");
        add_location(button2, file$5, 11, 6, 535);
        attr_dev(div0, "class", "d-flex justify-content-between");
        add_location(div0, file$5, 8, 4, 226);
        attr_dev(div1, "class", "");
        attr_dev(div1, "id", "myTabContent");
        add_location(div1, file$5, 13, 4, 697);
        attr_dev(div2, "class", "col");
        add_location(div2, file$5, 7, 2, 204);
        attr_dev(div3, "class", "row");
        add_location(div3, file$5, 6, 0, 184);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div3, anchor);
        append_hydration_dev(div3, div2);
        append_hydration_dev(div2, div0);
        append_hydration_dev(div0, button0);
        append_hydration_dev(button0, t0);
        append_hydration_dev(div0, t1);
        append_hydration_dev(div0, button1);
        append_hydration_dev(button1, t2);
        append_hydration_dev(div0, t3);
        append_hydration_dev(div0, button2);
        append_hydration_dev(button2, t4);
        append_hydration_dev(div2, t5);
        append_hydration_dev(div2, div1);
        if (if_block0)
          if_block0.m(div1, null);
        append_hydration_dev(div1, t6);
        if (if_block1)
          if_block1.m(div1, null);
        append_hydration_dev(div1, t7);
        if (if_block2)
          if_block2.m(div1, null);
        current = true;
        if (!mounted) {
          dispose = [
            listen_dev(button0, "click", ctx[1], false, false, false),
            listen_dev(button1, "click", ctx[2], false, false, false),
            listen_dev(button2, "click", ctx[3], false, false, false)
          ];
          mounted = true;
        }
      },
      p: function update(ctx2, [dirty]) {
        if (!current || dirty & 1 && button0_class_value !== (button0_class_value = ctx2[0] === 1 ? "btn w-100 btn-info" : "btn w-100")) {
          attr_dev(button0, "class", button0_class_value);
        }
        if (!current || dirty & 1 && button1_class_value !== (button1_class_value = ctx2[0] === 2 ? "btn w-100 btn-info" : "btn w-100")) {
          attr_dev(button1, "class", button1_class_value);
        }
        if (!current || dirty & 1 && button2_class_value !== (button2_class_value = ctx2[0] === 3 ? "btn w-100 btn-info" : "btn w-100")) {
          attr_dev(button2, "class", button2_class_value);
        }
        if (ctx2[0] === 1) {
          if (if_block0) {
            if (dirty & 1) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_2$3(ctx2);
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(div1, t6);
          }
        } else if (if_block0) {
          group_outros();
          transition_out(if_block0, 1, 1, () => {
            if_block0 = null;
          });
          check_outros();
        }
        if (ctx2[0] === 2) {
          if (if_block1) {
            if (dirty & 1) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block_1$3(ctx2);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(div1, t7);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
        if (ctx2[0] === 3) {
          if (if_block2)
            ;
          else {
            if_block2 = create_if_block$5(ctx2);
            if_block2.c();
            if_block2.m(div1, null);
          }
        } else if (if_block2) {
          if_block2.d(1);
          if_block2 = null;
        }
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(if_block0);
        transition_in(if_block1);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block0);
        transition_out(if_block1);
        current = false;
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div3);
        if (if_block0)
          if_block0.d();
        if (if_block1)
          if_block1.d();
        if (if_block2)
          if_block2.d();
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_fragment$5.name,
      type: "component",
      source: "",
      ctx
    });
    return block2;
  }
  function instance$5($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("WalletHelp", slots, []);
    let wallet = 0;
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
        console.warn(`<WalletHelp> was created with unknown prop '${key}'`);
    });
    const click_handler = () => $$invalidate(0, wallet = 1);
    const click_handler_1 = () => $$invalidate(0, wallet = 2);
    const click_handler_2 = () => $$invalidate(0, wallet = 3);
    $$self.$capture_state = () => ({
      Electrum,
      TrezorOne,
      wallet
    });
    $$self.$inject_state = ($$props2) => {
      if ("wallet" in $$props2)
        $$invalidate(0, wallet = $$props2.wallet);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    return [
      wallet,
      click_handler,
      click_handler_1,
      click_handler_2
    ];
  }
  class WalletHelp extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance$5, create_fragment$5, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "WalletHelp",
        options,
        id: create_fragment$5.name
      });
    }
  }
  const SignTransaction_svelte_svelte_type_style_lang = "";
  const file$4 = "src/lib/components/pegin/SignTransaction.svelte";
  function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[10] = list[i];
    child_ctx[12] = i;
    return child_ctx;
  }
  function get_each_context_1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[13] = list[i];
    return child_ctx;
  }
  function create_else_block_1(ctx) {
    let arrowdown;
    let current;
    arrowdown = new ArrowDown({
      $$inline: true
    });
    const block2 = {
      c: function create() {
        create_component(arrowdown.$$.fragment);
      },
      l: function claim(nodes) {
        claim_component(arrowdown.$$.fragment, nodes);
      },
      m: function mount(target, anchor) {
        mount_component(arrowdown, target, anchor);
        current = true;
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(arrowdown.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(arrowdown.$$.fragment, local);
        current = false;
      },
      d: function destroy2(detaching) {
        destroy_component(arrowdown, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_else_block_1.name,
      type: "else",
      source: "(42:111) {:else}",
      ctx
    });
    return block2;
  }
  function create_if_block_3(ctx) {
    let arrowup;
    let current;
    arrowup = new ArrowUp({
      $$inline: true
    });
    const block2 = {
      c: function create() {
        create_component(arrowup.$$.fragment);
      },
      l: function claim(nodes) {
        claim_component(arrowup.$$.fragment, nodes);
      },
      m: function mount(target, anchor) {
        mount_component(arrowup, target, anchor);
        current = true;
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(arrowup.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(arrowup.$$.fragment, local);
        current = false;
      },
      d: function destroy2(detaching) {
        destroy_component(arrowup, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block_3.name,
      type: "if",
      source: "(42:89) {#if showTx}",
      ctx
    });
    return block2;
  }
  function create_if_block$4(ctx) {
    var _a;
    let h40;
    let t0;
    let t1;
    let t2;
    let h41;
    let t3;
    let t4;
    let each1_anchor;
    let each_value_1 = ctx[3].utxos;
    validate_each_argument(each_value_1);
    let each_blocks_1 = [];
    for (let i = 0; i < each_value_1.length; i += 1) {
      each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    }
    let each_value = (_a = ctx[1]) == null ? void 0 : _a.txOutputs;
    validate_each_argument(each_value);
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }
    const block2 = {
      c: function create() {
        h40 = element("h4");
        t0 = text("Transaction Inputs");
        t1 = space();
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].c();
        }
        t2 = space();
        h41 = element("h4");
        t3 = text("Transaction Outputs");
        t4 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each1_anchor = empty();
        this.h();
      },
      l: function claim(nodes) {
        h40 = claim_element(nodes, "H4", {});
        var h40_nodes = children(h40);
        t0 = claim_text(h40_nodes, "Transaction Inputs");
        h40_nodes.forEach(detach_dev);
        t1 = claim_space(nodes);
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].l(nodes);
        }
        t2 = claim_space(nodes);
        h41 = claim_element(nodes, "H4", {});
        var h41_nodes = children(h41);
        t3 = claim_text(h41_nodes, "Transaction Outputs");
        h41_nodes.forEach(detach_dev);
        t4 = claim_space(nodes);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].l(nodes);
        }
        each1_anchor = empty();
        this.h();
      },
      h: function hydrate() {
        add_location(h40, file$4, 47, 4, 1591);
        add_location(h41, file$4, 55, 4, 1909);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, h40, anchor);
        append_hydration_dev(h40, t0);
        insert_hydration_dev(target, t1, anchor);
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].m(target, anchor);
        }
        insert_hydration_dev(target, t2, anchor);
        insert_hydration_dev(target, h41, anchor);
        append_hydration_dev(h41, t3);
        insert_hydration_dev(target, t4, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(target, anchor);
        }
        insert_hydration_dev(target, each1_anchor, anchor);
      },
      p: function update(ctx2, dirty) {
        var _a2;
        if (dirty & 8) {
          each_value_1 = ctx2[3].utxos;
          validate_each_argument(each_value_1);
          let i;
          for (i = 0; i < each_value_1.length; i += 1) {
            const child_ctx = get_each_context_1(ctx2, each_value_1, i);
            if (each_blocks_1[i]) {
              each_blocks_1[i].p(child_ctx, dirty);
            } else {
              each_blocks_1[i] = create_each_block_1(child_ctx);
              each_blocks_1[i].c();
              each_blocks_1[i].m(t2.parentNode, t2);
            }
          }
          for (; i < each_blocks_1.length; i += 1) {
            each_blocks_1[i].d(1);
          }
          each_blocks_1.length = each_value_1.length;
        }
        if (dirty & 42) {
          each_value = (_a2 = ctx2[1]) == null ? void 0 : _a2.txOutputs;
          validate_each_argument(each_value);
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(each1_anchor.parentNode, each1_anchor);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(h40);
        if (detaching)
          detach_dev(t1);
        destroy_each(each_blocks_1, detaching);
        if (detaching)
          detach_dev(t2);
        if (detaching)
          detach_dev(h41);
        if (detaching)
          detach_dev(t4);
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach_dev(each1_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block$4.name,
      type: "if",
      source: "(47:4) {#if showTx && psbt}",
      ctx
    });
    return block2;
  }
  function create_each_block_1(ctx) {
    let div2;
    let div0;
    let t0_value = ctx[13].txid + "";
    let t0;
    let t1;
    let t2_value = ctx[13].vout + "";
    let t2;
    let t3;
    let div1;
    let t4_value = ctx[13].value + "";
    let t4;
    const block2 = {
      c: function create() {
        div2 = element("div");
        div0 = element("div");
        t0 = text(t0_value);
        t1 = text(":");
        t2 = text(t2_value);
        t3 = space();
        div1 = element("div");
        t4 = text(t4_value);
        this.h();
      },
      l: function claim(nodes) {
        div2 = claim_element(nodes, "DIV", {
          class: true
        });
        var div2_nodes = children(div2);
        div0 = claim_element(div2_nodes, "DIV", {
          class: true
        });
        var div0_nodes = children(div0);
        t0 = claim_text(div0_nodes, t0_value);
        t1 = claim_text(div0_nodes, ":");
        t2 = claim_text(div0_nodes, t2_value);
        div0_nodes.forEach(detach_dev);
        t3 = claim_space(div2_nodes);
        div1 = claim_element(div2_nodes, "DIV", {
          class: true
        });
        var div1_nodes = children(div1);
        t4 = claim_text(div1_nodes, t4_value);
        div1_nodes.forEach(detach_dev);
        div2_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(div0, "class", "col-10");
        add_location(div0, file$4, 50, 6, 1720);
        attr_dev(div1, "class", "col-2");
        add_location(div1, file$4, 51, 6, 1778);
        attr_dev(div2, "class", "mx-1 row bg-light my-1 py-3 text-info s-OCg38NUZ_ZJC");
        add_location(div2, file$4, 49, 4, 1662);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div2, anchor);
        append_hydration_dev(div2, div0);
        append_hydration_dev(div0, t0);
        append_hydration_dev(div0, t1);
        append_hydration_dev(div0, t2);
        append_hydration_dev(div2, t3);
        append_hydration_dev(div2, div1);
        append_hydration_dev(div1, t4);
      },
      p: function update(ctx2, dirty) {
        if (dirty & 8 && t0_value !== (t0_value = ctx2[13].txid + ""))
          set_data_dev(t0, t0_value);
        if (dirty & 8 && t2_value !== (t2_value = ctx2[13].vout + ""))
          set_data_dev(t2, t2_value);
        if (dirty & 8 && t4_value !== (t4_value = ctx2[13].value + ""))
          set_data_dev(t4, t4_value);
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div2);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_each_block_1.name,
      type: "each",
      source: "(49:4) {#each $sbtcConfig.utxos as input}",
      ctx
    });
    return block2;
  }
  function create_else_block$2(ctx) {
    let span;
    let t0;
    let t1;
    let t2_value = ctx[3].fromBtcAddress + "";
    let t2;
    const block2 = {
      c: function create() {
        span = element("span");
        t0 = text("Change:");
        t1 = space();
        t2 = text(t2_value);
        this.h();
      },
      l: function claim(nodes) {
        span = claim_element(nodes, "SPAN", {
          class: true
        });
        var span_nodes = children(span);
        t0 = claim_text(span_nodes, "Change:");
        span_nodes.forEach(detach_dev);
        t1 = claim_space(nodes);
        t2 = claim_text(nodes, t2_value);
        this.h();
      },
      h: function hydrate() {
        attr_dev(span, "class", "text-info");
        add_location(span, file$4, 62, 17, 2350);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, span, anchor);
        append_hydration_dev(span, t0);
        insert_hydration_dev(target, t1, anchor);
        insert_hydration_dev(target, t2, anchor);
      },
      p: function update(ctx2, dirty) {
        if (dirty & 8 && t2_value !== (t2_value = ctx2[3].fromBtcAddress + ""))
          set_data_dev(t2, t2_value);
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(span);
        if (detaching)
          detach_dev(t1);
        if (detaching)
          detach_dev(t2);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_else_block$2.name,
      type: "else",
      source: "(63:10) {:else}",
      ctx
    });
    return block2;
  }
  function create_if_block_2$2(ctx) {
    let span;
    let t0;
    let t1;
    let t2_value = ctx[3].sbtcWalletAddress + "";
    let t2;
    const block2 = {
      c: function create() {
        span = element("span");
        t0 = text("To:");
        t1 = space();
        t2 = text(t2_value);
        this.h();
      },
      l: function claim(nodes) {
        span = claim_element(nodes, "SPAN", {
          class: true
        });
        var span_nodes = children(span);
        t0 = claim_text(span_nodes, "To:");
        span_nodes.forEach(detach_dev);
        t1 = claim_space(nodes);
        t2 = claim_text(nodes, t2_value);
        this.h();
      },
      h: function hydrate() {
        attr_dev(span, "class", "text-info");
        add_location(span, file$4, 61, 59, 2266);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, span, anchor);
        append_hydration_dev(span, t0);
        insert_hydration_dev(target, t1, anchor);
        insert_hydration_dev(target, t2, anchor);
      },
      p: function update(ctx2, dirty) {
        if (dirty & 8 && t2_value !== (t2_value = ctx2[3].sbtcWalletAddress + ""))
          set_data_dev(t2, t2_value);
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(span);
        if (detaching)
          detach_dev(t1);
        if (detaching)
          detach_dev(t2);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block_2$2.name,
      type: "if",
      source: "(62:58) ",
      ctx
    });
    return block2;
  }
  function create_if_block_1$2(ctx) {
    let span;
    let t0;
    let t1;
    let t2_value = ctx[5](ctx[10].script) + "";
    let t2;
    const block2 = {
      c: function create() {
        span = element("span");
        t0 = text("OP_RETURN:");
        t1 = space();
        t2 = text(t2_value);
        this.h();
      },
      l: function claim(nodes) {
        span = claim_element(nodes, "SPAN", {
          class: true
        });
        var span_nodes = children(span);
        t0 = claim_text(span_nodes, "OP_RETURN:");
        span_nodes.forEach(detach_dev);
        t1 = claim_space(nodes);
        t2 = claim_text(nodes, t2_value);
        this.h();
      },
      h: function hydrate() {
        attr_dev(span, "class", "text-info");
        add_location(span, file$4, 60, 23, 2130);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, span, anchor);
        append_hydration_dev(span, t0);
        insert_hydration_dev(target, t1, anchor);
        insert_hydration_dev(target, t2, anchor);
      },
      p: function update(ctx2, dirty) {
        if (dirty & 2 && t2_value !== (t2_value = ctx2[5](ctx2[10].script) + ""))
          set_data_dev(t2, t2_value);
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(span);
        if (detaching)
          detach_dev(t1);
        if (detaching)
          detach_dev(t2);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block_1$2.name,
      type: "if",
      source: "(61:10) {#if i === 0}",
      ctx
    });
    return block2;
  }
  function create_each_block(ctx) {
    let div3;
    let div0;
    let t0;
    let t1_value = ctx[12] + 1 + "";
    let t1;
    let t2;
    let div1;
    let t3;
    let div2;
    let span;
    let t4;
    let t5_value = ctx[10].value + "";
    let t5;
    let t6;
    function select_block_type_1(ctx2, dirty) {
      var _a;
      if (ctx2[12] === 0)
        return create_if_block_1$2;
      if (ctx2[12] === 1 && ((_a = ctx2[1]) == null ? void 0 : _a.txOutputs.length) > 2)
        return create_if_block_2$2;
      return create_else_block$2;
    }
    let current_block_type = select_block_type_1(ctx);
    let if_block = current_block_type(ctx);
    const block2 = {
      c: function create() {
        div3 = element("div");
        div0 = element("div");
        t0 = text("Output ");
        t1 = text(t1_value);
        t2 = space();
        div1 = element("div");
        if_block.c();
        t3 = space();
        div2 = element("div");
        span = element("span");
        t4 = space();
        t5 = text(t5_value);
        t6 = space();
        this.h();
      },
      l: function claim(nodes) {
        div3 = claim_element(nodes, "DIV", {
          class: true
        });
        var div3_nodes = children(div3);
        div0 = claim_element(div3_nodes, "DIV", {
          class: true
        });
        var div0_nodes = children(div0);
        t0 = claim_text(div0_nodes, "Output ");
        t1 = claim_text(div0_nodes, t1_value);
        div0_nodes.forEach(detach_dev);
        t2 = claim_space(div3_nodes);
        div1 = claim_element(div3_nodes, "DIV", {
          class: true
        });
        var div1_nodes = children(div1);
        if_block.l(div1_nodes);
        div1_nodes.forEach(detach_dev);
        t3 = claim_space(div3_nodes);
        div2 = claim_element(div3_nodes, "DIV", {
          class: true
        });
        var div2_nodes = children(div2);
        span = claim_element(div2_nodes, "SPAN", {
          class: true
        });
        children(span).forEach(detach_dev);
        t4 = claim_space(div2_nodes);
        t5 = claim_text(div2_nodes, t5_value);
        div2_nodes.forEach(detach_dev);
        t6 = claim_space(div3_nodes);
        div3_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(div0, "class", "col-2");
        add_location(div0, file$4, 58, 6, 2041);
        attr_dev(div1, "class", "col-8");
        add_location(div1, file$4, 59, 6, 2087);
        attr_dev(span, "class", "text-info");
        add_location(span, file$4, 65, 25, 2472);
        attr_dev(div2, "class", "col-2");
        add_location(div2, file$4, 65, 6, 2453);
        attr_dev(div3, "class", "mx-1 row bg-light my-1 py-3 text-info s-OCg38NUZ_ZJC");
        add_location(div3, file$4, 57, 4, 1983);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div3, anchor);
        append_hydration_dev(div3, div0);
        append_hydration_dev(div0, t0);
        append_hydration_dev(div0, t1);
        append_hydration_dev(div3, t2);
        append_hydration_dev(div3, div1);
        if_block.m(div1, null);
        append_hydration_dev(div3, t3);
        append_hydration_dev(div3, div2);
        append_hydration_dev(div2, span);
        append_hydration_dev(div2, t4);
        append_hydration_dev(div2, t5);
        append_hydration_dev(div3, t6);
      },
      p: function update(ctx2, dirty) {
        if (current_block_type === (current_block_type = select_block_type_1(ctx2)) && if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx2);
          if (if_block) {
            if_block.c();
            if_block.m(div1, null);
          }
        }
        if (dirty & 2 && t5_value !== (t5_value = ctx2[10].value + ""))
          set_data_dev(t5, t5_value);
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div3);
        if_block.d();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_each_block.name,
      type: "each",
      source: "(57:4) {#each psbt?.txOutputs as output, i}",
      ctx
    });
    return block2;
  }
  function create_fragment$4(ctx) {
    let div3;
    let div2;
    let div1;
    let h2;
    let t0;
    let t1;
    let div0;
    let span0;
    let a0;
    let current_block_type_index;
    let if_block0;
    let t2;
    let t3;
    let span1;
    let a1;
    let t4;
    let t5;
    let t6;
    let div5;
    let div4;
    let p0;
    let t7;
    let t8;
    let p1;
    let span2;
    let t9;
    let t10;
    let textarea;
    let t11;
    let wallethelp;
    let current;
    let mounted;
    let dispose;
    const if_block_creators = [
      create_if_block_3,
      create_else_block_1
    ];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (ctx2[0])
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx);
    if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    let if_block1 = ctx[0] && ctx[1] && create_if_block$4(ctx);
    wallethelp = new WalletHelp({
      $$inline: true
    });
    const block2 = {
      c: function create() {
        div3 = element("div");
        div2 = element("div");
        div1 = element("div");
        h2 = element("h2");
        t0 = text("Step 2: Sign Transaction");
        t1 = space();
        div0 = element("div");
        span0 = element("span");
        a0 = element("a");
        if_block0.c();
        t2 = text(" show tx");
        t3 = space();
        span1 = element("span");
        a1 = element("a");
        t4 = text("back");
        t5 = space();
        if (if_block1)
          if_block1.c();
        t6 = space();
        div5 = element("div");
        div4 = element("div");
        p0 = element("p");
        t7 = text("This peg in transaction can be read by your wallet where you can provide your digital signature\n      and broadcast to the Bitcoin network.");
        t8 = space();
        p1 = element("p");
        span2 = element("span");
        t9 = text("Always double check your wallet displays the correct recipient address and amount.");
        t10 = space();
        textarea = element("textarea");
        t11 = space();
        create_component(wallethelp.$$.fragment);
        this.h();
      },
      l: function claim(nodes) {
        div3 = claim_element(nodes, "DIV", {
          class: true
        });
        var div3_nodes = children(div3);
        div2 = claim_element(div3_nodes, "DIV", {
          class: true
        });
        var div2_nodes = children(div2);
        div1 = claim_element(div2_nodes, "DIV", {
          class: true
        });
        var div1_nodes = children(div1);
        h2 = claim_element(div1_nodes, "H2", {});
        var h2_nodes = children(h2);
        t0 = claim_text(h2_nodes, "Step 2: Sign Transaction");
        h2_nodes.forEach(detach_dev);
        t1 = claim_space(div1_nodes);
        div0 = claim_element(div1_nodes, "DIV", {});
        var div0_nodes = children(div0);
        span0 = claim_element(div0_nodes, "SPAN", {
          class: true
        });
        var span0_nodes = children(span0);
        a0 = claim_element(span0_nodes, "A", {
          href: true
        });
        var a0_nodes = children(a0);
        if_block0.l(a0_nodes);
        t2 = claim_text(a0_nodes, " show tx");
        a0_nodes.forEach(detach_dev);
        span0_nodes.forEach(detach_dev);
        t3 = claim_space(div0_nodes);
        span1 = claim_element(div0_nodes, "SPAN", {});
        var span1_nodes = children(span1);
        a1 = claim_element(span1_nodes, "A", {
          href: true
        });
        var a1_nodes = children(a1);
        t4 = claim_text(a1_nodes, "back");
        a1_nodes.forEach(detach_dev);
        span1_nodes.forEach(detach_dev);
        div0_nodes.forEach(detach_dev);
        div1_nodes.forEach(detach_dev);
        t5 = claim_space(div2_nodes);
        if (if_block1)
          if_block1.l(div2_nodes);
        div2_nodes.forEach(detach_dev);
        div3_nodes.forEach(detach_dev);
        t6 = claim_space(nodes);
        div5 = claim_element(nodes, "DIV", {
          class: true
        });
        var div5_nodes = children(div5);
        div4 = claim_element(div5_nodes, "DIV", {
          class: true
        });
        var div4_nodes = children(div4);
        p0 = claim_element(div4_nodes, "P", {});
        var p0_nodes = children(p0);
        t7 = claim_text(p0_nodes, "This peg in transaction can be read by your wallet where you can provide your digital signature\n      and broadcast to the Bitcoin network.");
        p0_nodes.forEach(detach_dev);
        t8 = claim_space(div4_nodes);
        p1 = claim_element(div4_nodes, "P", {
          class: true
        });
        var p1_nodes = children(p1);
        span2 = claim_element(p1_nodes, "SPAN", {
          class: true
        });
        var span2_nodes = children(span2);
        t9 = claim_text(span2_nodes, "Always double check your wallet displays the correct recipient address and amount.");
        span2_nodes.forEach(detach_dev);
        p1_nodes.forEach(detach_dev);
        t10 = claim_space(div4_nodes);
        textarea = claim_element(div4_nodes, "TEXTAREA", {
          rows: true,
          style: true
        });
        children(textarea).forEach(detach_dev);
        div4_nodes.forEach(detach_dev);
        div5_nodes.forEach(detach_dev);
        t11 = claim_space(nodes);
        claim_component(wallethelp.$$.fragment, nodes);
        this.h();
      },
      h: function hydrate() {
        add_location(h2, file$4, 39, 6, 1238);
        attr_dev(a0, "href", "/");
        add_location(a0, file$4, 41, 27, 1311);
        attr_dev(span0, "class", "mx-3");
        add_location(span0, file$4, 41, 8, 1292);
        attr_dev(a1, "href", "/");
        add_location(a1, file$4, 42, 14, 1453);
        add_location(span1, file$4, 42, 8, 1447);
        add_location(div0, file$4, 40, 6, 1278);
        attr_dev(div1, "class", "d-flex justify-content-between");
        add_location(div1, file$4, 38, 4, 1187);
        attr_dev(div2, "class", "col");
        add_location(div2, file$4, 37, 2, 1165);
        attr_dev(div3, "class", "row s-OCg38NUZ_ZJC");
        add_location(div3, file$4, 36, 0, 1145);
        add_location(p0, file$4, 74, 4, 2681);
        attr_dev(span2, "class", "text-warning");
        add_location(span2, file$4, 76, 27, 2855);
        attr_dev(p1, "class", "text-center");
        add_location(p1, file$4, 76, 4, 2832);
        attr_dev(textarea, "rows", "6");
        set_style(textarea, "padding", "10px");
        set_style(textarea, "width", "100%");
        textarea.readOnly = true;
        textarea.value = ctx[2];
        add_location(textarea, file$4, 77, 4, 2980);
        attr_dev(div4, "class", "col");
        add_location(div4, file$4, 73, 2, 2659);
        attr_dev(div5, "class", "row s-OCg38NUZ_ZJC");
        add_location(div5, file$4, 72, 0, 2639);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div3, anchor);
        append_hydration_dev(div3, div2);
        append_hydration_dev(div2, div1);
        append_hydration_dev(div1, h2);
        append_hydration_dev(h2, t0);
        append_hydration_dev(div1, t1);
        append_hydration_dev(div1, div0);
        append_hydration_dev(div0, span0);
        append_hydration_dev(span0, a0);
        if_blocks[current_block_type_index].m(a0, null);
        append_hydration_dev(a0, t2);
        append_hydration_dev(div0, t3);
        append_hydration_dev(div0, span1);
        append_hydration_dev(span1, a1);
        append_hydration_dev(a1, t4);
        append_hydration_dev(div2, t5);
        if (if_block1)
          if_block1.m(div2, null);
        insert_hydration_dev(target, t6, anchor);
        insert_hydration_dev(target, div5, anchor);
        append_hydration_dev(div5, div4);
        append_hydration_dev(div4, p0);
        append_hydration_dev(p0, t7);
        append_hydration_dev(div4, t8);
        append_hydration_dev(div4, p1);
        append_hydration_dev(p1, span2);
        append_hydration_dev(span2, t9);
        append_hydration_dev(div4, t10);
        append_hydration_dev(div4, textarea);
        insert_hydration_dev(target, t11, anchor);
        mount_component(wallethelp, target, anchor);
        current = true;
        if (!mounted) {
          dispose = [
            listen_dev(a0, "click", prevent_default(ctx[6]), false, true, false),
            listen_dev(a1, "click", prevent_default(ctx[7]), false, true, false)
          ];
          mounted = true;
        }
      },
      p: function update(ctx2, [dirty]) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2);
        if (current_block_type_index !== previous_block_index) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block0 = if_blocks[current_block_type_index];
          if (!if_block0) {
            if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block0.c();
          }
          transition_in(if_block0, 1);
          if_block0.m(a0, t2);
        }
        if (ctx2[0] && ctx2[1]) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block$4(ctx2);
            if_block1.c();
            if_block1.m(div2, null);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if (!current || dirty & 4) {
          prop_dev(textarea, "value", ctx2[2]);
        }
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(if_block0);
        transition_in(wallethelp.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block0);
        transition_out(wallethelp.$$.fragment, local);
        current = false;
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div3);
        if_blocks[current_block_type_index].d();
        if (if_block1)
          if_block1.d();
        if (detaching)
          detach_dev(t6);
        if (detaching)
          detach_dev(div5);
        if (detaching)
          detach_dev(t11);
        destroy_component(wallethelp, detaching);
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_fragment$4.name,
      type: "component",
      source: "",
      ctx
    });
    return block2;
  }
  function instance$4($$self, $$props, $$invalidate) {
    let $sbtcConfig;
    validate_store(sbtcConfig, "sbtcConfig");
    component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(3, $sbtcConfig = $$value));
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("SignTransaction", slots, []);
    const dispatch = createEventDispatcher();
    let showTx = false;
    const updateTransaction = () => {
      dispatch("update_transaction");
    };
    const convertUint8ToHex = (bytes) => {
      let hex = globalThis.Buffer.from(bytes).toString("hex");
      return hex;
    };
    const convertHexToString = (bytes) => {
      let hex = globalThis.Buffer.from(bytes).toString("hex");
      return hex;
    };
    let psbt2;
    let hexTx;
    onMount(async () => {
      $$invalidate(1, psbt2 = await transactionData($sbtcConfig));
      $$invalidate(2, hexTx = await transactionHex(psbt2));
    });
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
        console.warn(`<SignTransaction> was created with unknown prop '${key}'`);
    });
    const click_handler = () => $$invalidate(0, showTx = !showTx);
    const click_handler_1 = () => updateTransaction();
    $$self.$capture_state = () => ({
      onMount,
      transactionHex,
      transactionData,
      sbtcConfig,
      createEventDispatcher,
      ArrowUp,
      ArrowDown,
      WalletHelp,
      dispatch,
      showTx,
      updateTransaction,
      convertUint8ToHex,
      convertHexToString,
      psbt: psbt2,
      hexTx,
      $sbtcConfig
    });
    $$self.$inject_state = ($$props2) => {
      if ("showTx" in $$props2)
        $$invalidate(0, showTx = $$props2.showTx);
      if ("psbt" in $$props2)
        $$invalidate(1, psbt2 = $$props2.psbt);
      if ("hexTx" in $$props2)
        $$invalidate(2, hexTx = $$props2.hexTx);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    return [
      showTx,
      psbt2,
      hexTx,
      $sbtcConfig,
      updateTransaction,
      convertUint8ToHex,
      click_handler,
      click_handler_1
    ];
  }
  class SignTransaction extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance$4, create_fragment$4, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "SignTransaction",
        options,
        id: create_fragment$4.name
      });
    }
  }
  const file$3 = "src/lib/components/pegin/PegIn.svelte";
  function create_else_block$1(ctx) {
    let signtransaction;
    let current;
    signtransaction = new SignTransaction({
      $$inline: true
    });
    signtransaction.$on("update_transaction", ctx[2]);
    const block2 = {
      c: function create() {
        create_component(signtransaction.$$.fragment);
      },
      l: function claim(nodes) {
        claim_component(signtransaction.$$.fragment, nodes);
      },
      m: function mount(target, anchor) {
        mount_component(signtransaction, target, anchor);
        current = true;
      },
      p: noop$3,
      i: function intro(local) {
        if (current)
          return;
        transition_in(signtransaction.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(signtransaction.$$.fragment, local);
        current = false;
      },
      d: function destroy2(detaching) {
        destroy_component(signtransaction, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_else_block$1.name,
      type: "else",
      source: "(16:4) {:else}",
      ctx
    });
    return block2;
  }
  function create_if_block$3(ctx) {
    let buildtransaction;
    let current;
    buildtransaction = new BuildTransaction({
      $$inline: true
    });
    buildtransaction.$on("request_signature", ctx[1]);
    const block2 = {
      c: function create() {
        create_component(buildtransaction.$$.fragment);
      },
      l: function claim(nodes) {
        claim_component(buildtransaction.$$.fragment, nodes);
      },
      m: function mount(target, anchor) {
        mount_component(buildtransaction, target, anchor);
        current = true;
      },
      p: noop$3,
      i: function intro(local) {
        if (current)
          return;
        transition_in(buildtransaction.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(buildtransaction.$$.fragment, local);
        current = false;
      },
      d: function destroy2(detaching) {
        destroy_component(buildtransaction, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block$3.name,
      type: "if",
      source: "(14:4) {#if view === 'build_tx_view'}",
      ctx
    });
    return block2;
  }
  function create_fragment$3(ctx) {
    let div1;
    let div0;
    let current_block_type_index;
    let if_block;
    let current;
    const if_block_creators = [
      create_if_block$3,
      create_else_block$1
    ];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (ctx2[0] === "build_tx_view")
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    const block2 = {
      c: function create() {
        div1 = element("div");
        div0 = element("div");
        if_block.c();
        this.h();
      },
      l: function claim(nodes) {
        div1 = claim_element(nodes, "DIV", {
          class: true
        });
        var div1_nodes = children(div1);
        div0 = claim_element(div1_nodes, "DIV", {});
        var div0_nodes = children(div0);
        if_block.l(div0_nodes);
        div0_nodes.forEach(detach_dev);
        div1_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        add_location(div0, file$3, 12, 2, 378);
        attr_dev(div1, "class", "card border p-4");
        add_location(div1, file$3, 11, 0, 346);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div1, anchor);
        append_hydration_dev(div1, div0);
        if_blocks[current_block_type_index].m(div0, null);
        current = true;
      },
      p: function update(ctx2, [dirty]) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(div0, null);
        }
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div1);
        if_blocks[current_block_type_index].d();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_fragment$3.name,
      type: "component",
      source: "",
      ctx
    });
    return block2;
  }
  function instance$3($$self, $$props, $$invalidate) {
    let view;
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("PegIn", slots, []);
    const requestSignature = () => {
      $$invalidate(0, view = "sign_tx_view");
    };
    const updateTransaction = () => {
      $$invalidate(0, view = "build_tx_view");
    };
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
        console.warn(`<PegIn> was created with unknown prop '${key}'`);
    });
    $$self.$capture_state = () => ({
      BuildTransaction,
      SignTransaction,
      requestSignature,
      updateTransaction,
      view
    });
    $$self.$inject_state = ($$props2) => {
      if ("view" in $$props2)
        $$invalidate(0, view = $$props2.view);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    $$invalidate(0, view = "build_tx_view");
    return [
      view,
      requestSignature,
      updateTransaction
    ];
  }
  PegIn = class PegIn extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance$3, create_fragment$3, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "PegIn",
        options,
        id: create_fragment$3.name
      });
    }
  };
  const file$2 = "src/lib/components/pegout/PegOutAmount.svelte";
  function create_if_block_2$1(ctx) {
    let div;
    let t;
    const block2 = {
      c: function create() {
        div = element("div");
        t = text(ctx[2]);
        this.h();
      },
      l: function claim(nodes) {
        div = claim_element(nodes, "DIV", {
          class: true
        });
        var div_nodes = children(div);
        t = claim_text(div_nodes, ctx[2]);
        div_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(div, "class", "text-danger");
        add_location(div, file$2, 50, 21, 2408);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div, anchor);
        append_hydration_dev(div, t);
      },
      p: function update(ctx2, dirty) {
        if (dirty & 4)
          set_data_dev(t, ctx2[2]);
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block_2$1.name,
      type: "if",
      source: "(51:4) {#if errorReason}",
      ctx
    });
    return block2;
  }
  function create_key_block(ctx) {
    let span0;
    let a0;
    let t0;
    let a0_class_value;
    let t1;
    let span1;
    let a1;
    let t2;
    let a1_class_value;
    let t3;
    let span2;
    let a2;
    let t4;
    let a2_class_value;
    let mounted;
    let dispose;
    const block2 = {
      c: function create() {
        span0 = element("span");
        a0 = element("a");
        t0 = text("low");
        t1 = space();
        span1 = element("span");
        a1 = element("a");
        t2 = text("medium");
        t3 = space();
        span2 = element("span");
        a2 = element("a");
        t4 = text("high");
        this.h();
      },
      l: function claim(nodes) {
        span0 = claim_element(nodes, "SPAN", {
          class: true
        });
        var span0_nodes = children(span0);
        a0 = claim_element(span0_nodes, "A", {
          href: true,
          class: true
        });
        var a0_nodes = children(a0);
        t0 = claim_text(a0_nodes, "low");
        a0_nodes.forEach(detach_dev);
        span0_nodes.forEach(detach_dev);
        t1 = claim_space(nodes);
        span1 = claim_element(nodes, "SPAN", {
          class: true
        });
        var span1_nodes = children(span1);
        a1 = claim_element(span1_nodes, "A", {
          href: true,
          class: true
        });
        var a1_nodes = children(a1);
        t2 = claim_text(a1_nodes, "medium");
        a1_nodes.forEach(detach_dev);
        span1_nodes.forEach(detach_dev);
        t3 = claim_space(nodes);
        span2 = claim_element(nodes, "SPAN", {
          class: true
        });
        var span2_nodes = children(span2);
        a2 = claim_element(span2_nodes, "A", {
          href: true,
          class: true
        });
        var a2_nodes = children(a2);
        t4 = claim_text(a2_nodes, "high");
        a2_nodes.forEach(detach_dev);
        span2_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(a0, "href", "/");
        attr_dev(a0, "class", a0_class_value = ctx[6] ? "text-success" : "text-info");
        add_location(a0, file$2, 55, 41, 2848);
        attr_dev(span0, "class", "mx-2 border-right");
        add_location(span0, file$2, 55, 8, 2815);
        attr_dev(a1, "href", "/");
        attr_dev(a1, "class", a1_class_value = ctx[5] ? "text-success" : "text-info");
        add_location(a1, file$2, 56, 41, 3011);
        attr_dev(span1, "class", "mx-2 border-right");
        add_location(span1, file$2, 56, 8, 2978);
        attr_dev(a2, "href", "/");
        attr_dev(a2, "class", a2_class_value = ctx[4] ? "text-success" : "text-info");
        add_location(a2, file$2, 57, 28, 3170);
        attr_dev(span2, "class", "mx-2");
        add_location(span2, file$2, 57, 8, 3150);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, span0, anchor);
        append_hydration_dev(span0, a0);
        append_hydration_dev(a0, t0);
        insert_hydration_dev(target, t1, anchor);
        insert_hydration_dev(target, span1, anchor);
        append_hydration_dev(span1, a1);
        append_hydration_dev(a1, t2);
        insert_hydration_dev(target, t3, anchor);
        insert_hydration_dev(target, span2, anchor);
        append_hydration_dev(span2, a2);
        append_hydration_dev(a2, t4);
        if (!mounted) {
          dispose = [
            listen_dev(a0, "click", prevent_default(ctx[12]), false, true, false),
            listen_dev(a1, "click", prevent_default(ctx[13]), false, true, false),
            listen_dev(a2, "click", prevent_default(ctx[14]), false, true, false)
          ];
          mounted = true;
        }
      },
      p: function update(ctx2, dirty) {
        if (dirty & 64 && a0_class_value !== (a0_class_value = ctx2[6] ? "text-success" : "text-info")) {
          attr_dev(a0, "class", a0_class_value);
        }
        if (dirty & 32 && a1_class_value !== (a1_class_value = ctx2[5] ? "text-success" : "text-info")) {
          attr_dev(a1, "class", a1_class_value);
        }
        if (dirty & 16 && a2_class_value !== (a2_class_value = ctx2[4] ? "text-success" : "text-info")) {
          attr_dev(a2, "class", a2_class_value);
        }
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(span0);
        if (detaching)
          detach_dev(t1);
        if (detaching)
          detach_dev(span1);
        if (detaching)
          detach_dev(t3);
        if (detaching)
          detach_dev(span2);
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_key_block.name,
      type: "key",
      source: "(55:8) {#key componentKey}",
      ctx
    });
    return block2;
  }
  function create_if_block$2(ctx) {
    let div1;
    let div0;
    let p0;
    let t0;
    let t1_value = ctx[0].feeCalc.pegOutFeeCalc.pegOutAmount + "";
    let t1;
    let t2;
    let t3;
    let p1;
    let t4;
    let t5;
    let t6;
    let t7;
    let p2;
    let t8;
    let t9_value = ctx[0].feeCalc.pegOutFeeCalc.feeToApply + "";
    let t9;
    let t10;
    let t11;
    let if_block = ctx[7] > 0 && create_if_block_1$1(ctx);
    const block2 = {
      c: function create() {
        div1 = element("div");
        div0 = element("div");
        p0 = element("p");
        t0 = text("Pegging out ");
        t1 = text(t1_value);
        t2 = text(" satoshi");
        t3 = space();
        p1 = element("p");
        t4 = text("Dust to the SBTC wallet - ");
        t5 = text(dustAmount);
        t6 = text(" satoshi");
        t7 = space();
        p2 = element("p");
        t8 = text("Fee will be calculated at ");
        t9 = text(t9_value);
        t10 = text(" sats/kb");
        t11 = space();
        if (if_block)
          if_block.c();
        this.h();
      },
      l: function claim(nodes) {
        div1 = claim_element(nodes, "DIV", {
          class: true
        });
        var div1_nodes = children(div1);
        div0 = claim_element(div1_nodes, "DIV", {
          class: true
        });
        var div0_nodes = children(div0);
        p0 = claim_element(div0_nodes, "P", {});
        var p0_nodes = children(p0);
        t0 = claim_text(p0_nodes, "Pegging out ");
        t1 = claim_text(p0_nodes, t1_value);
        t2 = claim_text(p0_nodes, " satoshi");
        p0_nodes.forEach(detach_dev);
        t3 = claim_space(div0_nodes);
        p1 = claim_element(div0_nodes, "P", {});
        var p1_nodes = children(p1);
        t4 = claim_text(p1_nodes, "Dust to the SBTC wallet - ");
        t5 = claim_text(p1_nodes, dustAmount);
        t6 = claim_text(p1_nodes, " satoshi");
        p1_nodes.forEach(detach_dev);
        t7 = claim_space(div0_nodes);
        p2 = claim_element(div0_nodes, "P", {});
        var p2_nodes = children(p2);
        t8 = claim_text(p2_nodes, "Fee will be calculated at ");
        t9 = claim_text(p2_nodes, t9_value);
        t10 = claim_text(p2_nodes, " sats/kb");
        p2_nodes.forEach(detach_dev);
        t11 = claim_space(div0_nodes);
        if (if_block)
          if_block.l(div0_nodes);
        div0_nodes.forEach(detach_dev);
        div1_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        add_location(p0, file$2, 65, 8, 3683);
        add_location(p1, file$2, 66, 8, 3767);
        add_location(p2, file$2, 67, 8, 3829);
        attr_dev(div0, "class", "text-center w-50 bg-light text-dark py-3 px-4 my-4 border-radius");
        add_location(div0, file$2, 64, 6, 3596);
        attr_dev(div1, "class", "d-flex justify-content-center");
        add_location(div1, file$2, 63, 4, 3546);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div1, anchor);
        append_hydration_dev(div1, div0);
        append_hydration_dev(div0, p0);
        append_hydration_dev(p0, t0);
        append_hydration_dev(p0, t1);
        append_hydration_dev(p0, t2);
        append_hydration_dev(div0, t3);
        append_hydration_dev(div0, p1);
        append_hydration_dev(p1, t4);
        append_hydration_dev(p1, t5);
        append_hydration_dev(p1, t6);
        append_hydration_dev(div0, t7);
        append_hydration_dev(div0, p2);
        append_hydration_dev(p2, t8);
        append_hydration_dev(p2, t9);
        append_hydration_dev(p2, t10);
        append_hydration_dev(div0, t11);
        if (if_block)
          if_block.m(div0, null);
      },
      p: function update(ctx2, dirty) {
        if (dirty & 1 && t1_value !== (t1_value = ctx2[0].feeCalc.pegOutFeeCalc.pegOutAmount + ""))
          set_data_dev(t1, t1_value);
        if (dirty & 1 && t9_value !== (t9_value = ctx2[0].feeCalc.pegOutFeeCalc.feeToApply + ""))
          set_data_dev(t9, t9_value);
        if (ctx2[7] > 0)
          if_block.p(ctx2, dirty);
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div1);
        if (if_block)
          if_block.d();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block$2.name,
      type: "if",
      source: "(63:4) {#if $sbtcConfig.feeCalc.pegOutFeeCalc.pegOutAmount && $sbtcConfig.feeCalc.pegOutFeeCalc.pegOutAmount > 0}",
      ctx
    });
    return block2;
  }
  function create_if_block_1$1(ctx) {
    let p;
    let t0;
    let t1;
    const block2 = {
      c: function create() {
        p = element("p");
        t0 = text(ctx[7]);
        t1 = text(" sats, will be sent back to your sending address.");
        this.h();
      },
      l: function claim(nodes) {
        p = claim_element(nodes, "P", {});
        var p_nodes = children(p);
        t0 = claim_text(p_nodes, ctx[7]);
        t1 = claim_text(p_nodes, " sats, will be sent back to your sending address.");
        p_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        add_location(p, file$2, 68, 24, 3941);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, p, anchor);
        append_hydration_dev(p, t0);
        append_hydration_dev(p, t1);
      },
      p: noop$3,
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(p);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block_1$1.name,
      type: "if",
      source: "(69:8) {#if change > 0}",
      ctx
    });
    return block2;
  }
  function create_fragment$2(ctx) {
    let div4;
    let div3;
    let label;
    let span0;
    let t0;
    let t1;
    let span1;
    let patchquestion;
    let t2;
    let t3;
    let input;
    let t4;
    let div2;
    let div0;
    let t5;
    let span2;
    let t6_value = ctx[0].feeCalc.pegOutFeeCalc.feeToApply + "";
    let t6;
    let t7;
    let previous_key = ctx[3];
    let t8;
    let div1;
    let a2;
    let t9;
    let t10;
    let current;
    let mounted;
    let dispose;
    patchquestion = new PatchQuestion({
      props: {
        width: 30,
        height: 30
      },
      $$inline: true
    });
    let if_block0 = ctx[2] && create_if_block_2$1(ctx);
    let key_block = create_key_block(ctx);
    let if_block1 = ctx[0].feeCalc.pegOutFeeCalc.pegOutAmount && ctx[0].feeCalc.pegOutFeeCalc.pegOutAmount > 0 && create_if_block$2(ctx);
    const block2 = {
      c: function create() {
        div4 = element("div");
        div3 = element("div");
        label = element("label");
        span0 = element("span");
        t0 = text("Peg Out Amount / Sats:");
        t1 = space();
        span1 = element("span");
        create_component(patchquestion.$$.fragment);
        t2 = space();
        if (if_block0)
          if_block0.c();
        t3 = space();
        input = element("input");
        t4 = space();
        div2 = element("div");
        div0 = element("div");
        t5 = text("Fee rate ");
        span2 = element("span");
        t6 = text(t6_value);
        t7 = text(" (sats/kb):\n        ");
        key_block.c();
        t8 = space();
        div1 = element("div");
        a2 = element("a");
        t9 = text("max");
        t10 = space();
        if (if_block1)
          if_block1.c();
        this.h();
      },
      l: function claim(nodes) {
        div4 = claim_element(nodes, "DIV", {
          class: true
        });
        var div4_nodes = children(div4);
        div3 = claim_element(div4_nodes, "DIV", {
          class: true
        });
        var div3_nodes = children(div3);
        label = claim_element(div3_nodes, "LABEL", {
          for: true,
          class: true
        });
        var label_nodes = children(label);
        span0 = claim_element(label_nodes, "SPAN", {});
        var span0_nodes = children(span0);
        t0 = claim_text(span0_nodes, "Peg Out Amount / Sats:");
        span0_nodes.forEach(detach_dev);
        t1 = claim_space(label_nodes);
        span1 = claim_element(label_nodes, "SPAN", {
          class: true,
          "data-bs-toggle": true,
          "data-bs-placement": true,
          "data-bs-custom-class": true,
          title: true
        });
        var span1_nodes = children(span1);
        claim_component(patchquestion.$$.fragment, span1_nodes);
        span1_nodes.forEach(detach_dev);
        label_nodes.forEach(detach_dev);
        t2 = claim_space(div3_nodes);
        if (if_block0)
          if_block0.l(div3_nodes);
        t3 = claim_space(div3_nodes);
        input = claim_element(div3_nodes, "INPUT", {
          type: true,
          id: true,
          class: true,
          autocomplete: true
        });
        t4 = claim_space(div3_nodes);
        div2 = claim_element(div3_nodes, "DIV", {
          class: true
        });
        var div2_nodes = children(div2);
        div0 = claim_element(div2_nodes, "DIV", {});
        var div0_nodes = children(div0);
        t5 = claim_text(div0_nodes, "Fee rate ");
        span2 = claim_element(div0_nodes, "SPAN", {
          class: true
        });
        var span2_nodes = children(span2);
        t6 = claim_text(span2_nodes, t6_value);
        span2_nodes.forEach(detach_dev);
        t7 = claim_text(div0_nodes, " (sats/kb):\n        ");
        key_block.l(div0_nodes);
        div0_nodes.forEach(detach_dev);
        t8 = claim_space(div2_nodes);
        div1 = claim_element(div2_nodes, "DIV", {});
        var div1_nodes = children(div1);
        a2 = claim_element(div1_nodes, "A", {
          href: true,
          class: true
        });
        var a_nodes = children(a2);
        t9 = claim_text(a_nodes, "max");
        a_nodes.forEach(detach_dev);
        div1_nodes.forEach(detach_dev);
        div2_nodes.forEach(detach_dev);
        t10 = claim_space(div3_nodes);
        if (if_block1)
          if_block1.l(div3_nodes);
        div3_nodes.forEach(detach_dev);
        div4_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        add_location(span0, file$2, 47, 6, 2006);
        attr_dev(span1, "class", "pointer text-info");
        attr_dev(span1, "data-bs-toggle", "tooltip-ftux");
        attr_dev(span1, "data-bs-placement", "top");
        attr_dev(span1, "data-bs-custom-class", "custom-tooltip");
        attr_dev(span1, "title", "The amount of Bitcoin you want to swap for sBTC. The bitcoin is locked in the protocol and you convert your sBTC back to Bitcoin when you peg out.");
        add_location(span1, file$2, 48, 6, 2048);
        attr_dev(label, "for", "transact-path");
        attr_dev(label, "class", "d-flex justify-content-between");
        add_location(label, file$2, 46, 4, 1933);
        attr_dev(input, "type", "number");
        attr_dev(input, "id", "from-address");
        attr_dev(input, "class", "form-control");
        attr_dev(input, "autocomplete", "off");
        add_location(input, file$2, 51, 4, 2462);
        attr_dev(span2, "class", "text-success");
        add_location(span2, file$2, 53, 20, 2687);
        add_location(div0, file$2, 53, 6, 2673);
        attr_dev(a2, "href", "/");
        attr_dev(a2, "class", "");
        add_location(a2, file$2, 60, 11, 3334);
        add_location(div1, file$2, 60, 6, 3329);
        attr_dev(div2, "class", "d-flex justify-content-between text-info");
        add_location(div2, file$2, 52, 4, 2611);
        attr_dev(div3, "class", "col-12");
        add_location(div3, file$2, 45, 2, 1908);
        attr_dev(div4, "class", "row");
        add_location(div4, file$2, 44, 0, 1888);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div4, anchor);
        append_hydration_dev(div4, div3);
        append_hydration_dev(div3, label);
        append_hydration_dev(label, span0);
        append_hydration_dev(span0, t0);
        append_hydration_dev(label, t1);
        append_hydration_dev(label, span1);
        mount_component(patchquestion, span1, null);
        append_hydration_dev(div3, t2);
        if (if_block0)
          if_block0.m(div3, null);
        append_hydration_dev(div3, t3);
        append_hydration_dev(div3, input);
        set_input_value(input, ctx[1]);
        append_hydration_dev(div3, t4);
        append_hydration_dev(div3, div2);
        append_hydration_dev(div2, div0);
        append_hydration_dev(div0, t5);
        append_hydration_dev(div0, span2);
        append_hydration_dev(span2, t6);
        append_hydration_dev(div0, t7);
        key_block.m(div0, null);
        append_hydration_dev(div2, t8);
        append_hydration_dev(div2, div1);
        append_hydration_dev(div1, a2);
        append_hydration_dev(a2, t9);
        append_hydration_dev(div3, t10);
        if (if_block1)
          if_block1.m(div3, null);
        current = true;
        if (!mounted) {
          dispose = [
            listen_dev(input, "input", ctx[10]),
            listen_dev(input, "input", ctx[11], false, false, false),
            listen_dev(a2, "click", prevent_default(ctx[15]), false, true, false)
          ];
          mounted = true;
        }
      },
      p: function update(ctx2, [dirty]) {
        if (ctx2[2]) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_2$1(ctx2);
            if_block0.c();
            if_block0.m(div3, t3);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (dirty & 2 && to_number(input.value) !== ctx2[1]) {
          set_input_value(input, ctx2[1]);
        }
        if ((!current || dirty & 1) && t6_value !== (t6_value = ctx2[0].feeCalc.pegOutFeeCalc.feeToApply + ""))
          set_data_dev(t6, t6_value);
        if (dirty & 8 && safe_not_equal(previous_key, previous_key = ctx2[3])) {
          key_block.d(1);
          key_block = create_key_block(ctx2);
          key_block.c();
          key_block.m(div0, null);
        } else {
          key_block.p(ctx2, dirty);
        }
        if (ctx2[0].feeCalc.pegOutFeeCalc.pegOutAmount && ctx2[0].feeCalc.pegOutFeeCalc.pegOutAmount > 0) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block$2(ctx2);
            if_block1.c();
            if_block1.m(div3, null);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(patchquestion.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(patchquestion.$$.fragment, local);
        current = false;
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div4);
        destroy_component(patchquestion);
        if (if_block0)
          if_block0.d();
        key_block.d(detaching);
        if (if_block1)
          if_block1.d();
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_fragment$2.name,
      type: "component",
      source: "",
      ctx
    });
    return block2;
  }
  const balance = 1e8;
  function instance$2($$self, $$props, $$invalidate) {
    let low;
    let medium;
    let high;
    let $sbtcConfig;
    validate_store(sbtcConfig, "sbtcConfig");
    component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(0, $sbtcConfig = $$value));
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("PegOutAmount", slots, []);
    const dispatch = createEventDispatcher();
    let pegOutAmount = $sbtcConfig.feeCalc.pegOutFeeCalc.pegOutAmount;
    let errorReason;
    let changeErrorReason;
    let change = maxCommit($sbtcConfig.utxos) - $sbtcConfig.feeCalc.pegOutFeeCalc.feeToApply - $sbtcConfig.feeCalc.pegOutFeeCalc.dustAmount;
    const changePegOut = (maxValue) => {
      maxCommit($sbtcConfig.utxos);
      $$invalidate(2, errorReason = void 0);
      changeErrorReason = void 0;
      if (pegOutAmount > balance) {
        $$invalidate(2, errorReason = "Cannot commit more BTC then is available at your address");
        return;
      }
      const conf = $sbtcConfig;
      conf.feeCalc.pegOutFeeCalc.pegOutAmount = Number(pegOutAmount);
      sbtcConfig.set(conf);
    };
    let componentKey = 0;
    const changeRate = (rate) => {
      const conf = $sbtcConfig;
      if (rate === "low")
        conf.feeCalc.pegOutFeeCalc.feeToApply = $sbtcConfig.feeInfo.low_fee_per_kb;
      else if (rate === "medium")
        conf.feeCalc.pegOutFeeCalc.feeToApply = $sbtcConfig.feeInfo.medium_fee_per_kb;
      else if (rate === "high")
        conf.feeCalc.pegOutFeeCalc.feeToApply = $sbtcConfig.feeInfo.high_fee_per_kb;
      sbtcConfig.set(conf);
      if ($sbtcConfig.feeCalc.pegInFeeCalc.pegInAmount > 0) {
        changePegOut();
      }
      $$invalidate(3, componentKey++, componentKey);
    };
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
        console.warn(`<PegOutAmount> was created with unknown prop '${key}'`);
    });
    function input_input_handler() {
      pegOutAmount = to_number(this.value);
      $$invalidate(1, pegOutAmount);
    }
    const input_handler = () => changePegOut();
    const click_handler = () => changeRate("low");
    const click_handler_1 = () => changeRate("medium");
    const click_handler_2 = () => changeRate("high");
    const click_handler_3 = () => changePegOut();
    $$self.$capture_state = () => ({
      maxCommit,
      sbtcConfig,
      createEventDispatcher,
      PatchQuestion,
      dustAmount,
      dispatch,
      pegOutAmount,
      errorReason,
      changeErrorReason,
      balance,
      change,
      changePegOut,
      componentKey,
      changeRate,
      high,
      medium,
      low,
      $sbtcConfig
    });
    $$self.$inject_state = ($$props2) => {
      if ("pegOutAmount" in $$props2)
        $$invalidate(1, pegOutAmount = $$props2.pegOutAmount);
      if ("errorReason" in $$props2)
        $$invalidate(2, errorReason = $$props2.errorReason);
      if ("changeErrorReason" in $$props2)
        changeErrorReason = $$props2.changeErrorReason;
      if ("change" in $$props2)
        $$invalidate(7, change = $$props2.change);
      if ("componentKey" in $$props2)
        $$invalidate(3, componentKey = $$props2.componentKey);
      if ("high" in $$props2)
        $$invalidate(4, high = $$props2.high);
      if ("medium" in $$props2)
        $$invalidate(5, medium = $$props2.medium);
      if ("low" in $$props2)
        $$invalidate(6, low = $$props2.low);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 1) {
        $$invalidate(6, low = $sbtcConfig.feeInfo.low_fee_per_kb === $sbtcConfig.feeCalc.pegOutFeeCalc.feeToApply);
      }
      if ($$self.$$.dirty & 1) {
        $$invalidate(5, medium = $sbtcConfig.feeInfo.medium_fee_per_kb === $sbtcConfig.feeCalc.pegOutFeeCalc.feeToApply);
      }
      if ($$self.$$.dirty & 1) {
        $$invalidate(4, high = $sbtcConfig.feeInfo.high_fee_per_kb === $sbtcConfig.feeCalc.pegOutFeeCalc.feeToApply);
      }
    };
    return [
      $sbtcConfig,
      pegOutAmount,
      errorReason,
      componentKey,
      high,
      medium,
      low,
      change,
      changePegOut,
      changeRate,
      input_input_handler,
      input_handler,
      click_handler,
      click_handler_1,
      click_handler_2,
      click_handler_3
    ];
  }
  class PegOutAmount extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance$2, create_fragment$2, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "PegOutAmount",
        options,
        id: create_fragment$2.name
      });
    }
  }
  const OutTransaction_svelte_svelte_type_style_lang = "";
  const file$1 = "src/lib/components/pegout/OutTransaction.svelte";
  function create_if_block_2(ctx) {
    let div;
    let t;
    const block2 = {
      c: function create() {
        div = element("div");
        t = text(ctx[2]);
        this.h();
      },
      l: function claim(nodes) {
        div = claim_element(nodes, "DIV", {
          class: true
        });
        var div_nodes = children(div);
        t = claim_text(div_nodes, ctx[2]);
        div_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(div, "class", "text-warning");
        add_location(div, file$1, 18, 17, 774);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div, anchor);
        append_hydration_dev(div, t);
      },
      p: noop$3,
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block_2.name,
      type: "if",
      source: "(19:0) {#if errorReason}",
      ctx
    });
    return block2;
  }
  function create_if_block_1(ctx) {
    let div;
    let pegoutamount;
    let current;
    pegoutamount = new PegOutAmount({
      $$inline: true
    });
    pegoutamount.$on("amount_updated", ctx[4]);
    const block2 = {
      c: function create() {
        div = element("div");
        create_component(pegoutamount.$$.fragment);
        this.h();
      },
      l: function claim(nodes) {
        div = claim_element(nodes, "DIV", {
          class: true
        });
        var div_nodes = children(div);
        claim_component(pegoutamount.$$.fragment, div_nodes);
        div_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(div, "class", "mb-4");
        add_location(div, file$1, 21, 0, 890);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div, anchor);
        mount_component(pegoutamount, div, null);
        current = true;
      },
      p: noop$3,
      i: function intro(local) {
        if (current)
          return;
        transition_in(pegoutamount.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(pegoutamount.$$.fragment, local);
        current = false;
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div);
        destroy_component(pegoutamount);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block_1.name,
      type: "if",
      source: "(21:0) {#if showPegOutAmount}",
      ctx
    });
    return block2;
  }
  function create_if_block$1(ctx) {
    let div1;
    let div0;
    let button;
    let t;
    let mounted;
    let dispose;
    const block2 = {
      c: function create() {
        div1 = element("div");
        div0 = element("div");
        button = element("button");
        t = text("CONTINUE");
        this.h();
      },
      l: function claim(nodes) {
        div1 = claim_element(nodes, "DIV", {
          class: true
        });
        var div1_nodes = children(div1);
        div0 = claim_element(div1_nodes, "DIV", {
          class: true
        });
        var div0_nodes = children(div0);
        button = claim_element(div0_nodes, "BUTTON", {
          class: true,
          type: true
        });
        var button_nodes = children(button);
        t = claim_text(button_nodes, "CONTINUE");
        button_nodes.forEach(detach_dev);
        div0_nodes.forEach(detach_dev);
        div1_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(button, "class", "btn btn-outline-info w-100");
        attr_dev(button, "type", "button");
        add_location(button, file$1, 26, 4, 1030);
        attr_dev(div0, "class", "col");
        add_location(div0, file$1, 25, 2, 1008);
        attr_dev(div1, "class", "row s-wKdxMgOSexCZ");
        add_location(div1, file$1, 24, 0, 988);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div1, anchor);
        append_hydration_dev(div1, div0);
        append_hydration_dev(div0, button);
        append_hydration_dev(button, t);
        if (!mounted) {
          dispose = listen_dev(button, "click", ctx[6], false, false, false);
          mounted = true;
        }
      },
      p: noop$3,
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div1);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block$1.name,
      type: "if",
      source: "(24:0) {#if showButton}",
      ctx
    });
    return block2;
  }
  function create_fragment$1(ctx) {
    let t0;
    let div;
    let utxoselection;
    let t1;
    let t2;
    let if_block2_anchor;
    let current;
    let if_block0 = ctx[2] && create_if_block_2(ctx);
    utxoselection = new UTXOSelection({
      $$inline: true
    });
    let if_block1 = ctx[1] && create_if_block_1(ctx);
    let if_block2 = ctx[0] && create_if_block$1(ctx);
    const block2 = {
      c: function create() {
        if (if_block0)
          if_block0.c();
        t0 = space();
        div = element("div");
        create_component(utxoselection.$$.fragment);
        t1 = space();
        if (if_block1)
          if_block1.c();
        t2 = space();
        if (if_block2)
          if_block2.c();
        if_block2_anchor = empty();
        this.h();
      },
      l: function claim(nodes) {
        if (if_block0)
          if_block0.l(nodes);
        t0 = claim_space(nodes);
        div = claim_element(nodes, "DIV", {
          class: true
        });
        var div_nodes = children(div);
        claim_component(utxoselection.$$.fragment, div_nodes);
        div_nodes.forEach(detach_dev);
        t1 = claim_space(nodes);
        if (if_block1)
          if_block1.l(nodes);
        t2 = claim_space(nodes);
        if (if_block2)
          if_block2.l(nodes);
        if_block2_anchor = empty();
        this.h();
      },
      h: function hydrate() {
        attr_dev(div, "class", "mb-4");
        add_location(div, file$1, 19, 0, 825);
      },
      m: function mount(target, anchor) {
        if (if_block0)
          if_block0.m(target, anchor);
        insert_hydration_dev(target, t0, anchor);
        insert_hydration_dev(target, div, anchor);
        mount_component(utxoselection, div, null);
        insert_hydration_dev(target, t1, anchor);
        if (if_block1)
          if_block1.m(target, anchor);
        insert_hydration_dev(target, t2, anchor);
        if (if_block2)
          if_block2.m(target, anchor);
        insert_hydration_dev(target, if_block2_anchor, anchor);
        current = true;
      },
      p: function update(ctx2, [dirty]) {
        if (ctx2[2])
          if_block0.p(ctx2, dirty);
        if (ctx2[1]) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
            if (dirty & 2) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block_1(ctx2);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(t2.parentNode, t2);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
        if (ctx2[0]) {
          if (if_block2) {
            if_block2.p(ctx2, dirty);
          } else {
            if_block2 = create_if_block$1(ctx2);
            if_block2.c();
            if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
          }
        } else if (if_block2) {
          if_block2.d(1);
          if_block2 = null;
        }
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(utxoselection.$$.fragment, local);
        transition_in(if_block1);
        current = true;
      },
      o: function outro(local) {
        transition_out(utxoselection.$$.fragment, local);
        transition_out(if_block1);
        current = false;
      },
      d: function destroy2(detaching) {
        if (if_block0)
          if_block0.d(detaching);
        if (detaching)
          detach_dev(t0);
        if (detaching)
          detach_dev(div);
        destroy_component(utxoselection);
        if (detaching)
          detach_dev(t1);
        if (if_block1)
          if_block1.d(detaching);
        if (detaching)
          detach_dev(t2);
        if (if_block2)
          if_block2.d(detaching);
        if (detaching)
          detach_dev(if_block2_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_fragment$1.name,
      type: "component",
      source: "",
      ctx
    });
    return block2;
  }
  function instance$1($$self, $$props, $$invalidate) {
    let showPegOutAmount;
    let showButton;
    let $sbtcConfig;
    validate_store(sbtcConfig, "sbtcConfig");
    component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(5, $sbtcConfig = $$value));
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("OutTransaction", slots, []);
    const dispatch = createEventDispatcher();
    let errorReason;
    let stxAddressOk = true;
    const requestSignature = () => {
      dispatch("request_signature");
    };
    const amountUpdated = () => {
    };
    onMount(async () => {
    });
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
        console.warn(`<OutTransaction> was created with unknown prop '${key}'`);
    });
    const click_handler = () => requestSignature();
    $$self.$capture_state = () => ({
      onMount,
      sbtcConfig,
      PegOutAmount,
      UTXOSelection,
      Tooltip,
      createEventDispatcher,
      dispatch,
      errorReason,
      stxAddressOk,
      requestSignature,
      amountUpdated,
      showButton,
      showPegOutAmount,
      $sbtcConfig
    });
    $$self.$inject_state = ($$props2) => {
      if ("errorReason" in $$props2)
        $$invalidate(2, errorReason = $$props2.errorReason);
      if ("stxAddressOk" in $$props2)
        stxAddressOk = $$props2.stxAddressOk;
      if ("showButton" in $$props2)
        $$invalidate(0, showButton = $$props2.showButton);
      if ("showPegOutAmount" in $$props2)
        $$invalidate(1, showPegOutAmount = $$props2.showPegOutAmount);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 32) {
        $$invalidate(1, showPegOutAmount = $sbtcConfig.fromBtcAddress);
      }
      if ($$self.$$.dirty & 32) {
        $$invalidate(0, showButton = $sbtcConfig.feeCalc.pegOutFeeCalc.feeToApply > 0 && $sbtcConfig.fromBtcAddress && $sbtcConfig.feeCalc.pegOutFeeCalc.pegOutAmount > 0);
      }
    };
    return [
      showButton,
      showPegOutAmount,
      errorReason,
      requestSignature,
      amountUpdated,
      $sbtcConfig,
      click_handler
    ];
  }
  class OutTransaction extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "OutTransaction",
        options,
        id: create_fragment$1.name
      });
    }
  }
  const file = "src/lib/components/pegout/PegOut.svelte";
  function create_else_block(ctx) {
    let signtransaction;
    let current;
    signtransaction = new SignTransaction({
      $$inline: true
    });
    signtransaction.$on("update_transaction", ctx[2]);
    const block2 = {
      c: function create() {
        create_component(signtransaction.$$.fragment);
      },
      l: function claim(nodes) {
        claim_component(signtransaction.$$.fragment, nodes);
      },
      m: function mount(target, anchor) {
        mount_component(signtransaction, target, anchor);
        current = true;
      },
      p: noop$3,
      i: function intro(local) {
        if (current)
          return;
        transition_in(signtransaction.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(signtransaction.$$.fragment, local);
        current = false;
      },
      d: function destroy2(detaching) {
        destroy_component(signtransaction, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_else_block.name,
      type: "else",
      source: "(16:4) {:else}",
      ctx
    });
    return block2;
  }
  function create_if_block(ctx) {
    let outtransaction;
    let current;
    outtransaction = new OutTransaction({
      $$inline: true
    });
    outtransaction.$on("request_signature", ctx[1]);
    const block2 = {
      c: function create() {
        create_component(outtransaction.$$.fragment);
      },
      l: function claim(nodes) {
        claim_component(outtransaction.$$.fragment, nodes);
      },
      m: function mount(target, anchor) {
        mount_component(outtransaction, target, anchor);
        current = true;
      },
      p: noop$3,
      i: function intro(local) {
        if (current)
          return;
        transition_in(outtransaction.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(outtransaction.$$.fragment, local);
        current = false;
      },
      d: function destroy2(detaching) {
        destroy_component(outtransaction, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_if_block.name,
      type: "if",
      source: "(14:4) {#if view === 'build_tx_view'}",
      ctx
    });
    return block2;
  }
  function create_fragment(ctx) {
    let div1;
    let div0;
    let current_block_type_index;
    let if_block;
    let current;
    const if_block_creators = [
      create_if_block,
      create_else_block
    ];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (ctx2[0] === "build_tx_view")
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    const block2 = {
      c: function create() {
        div1 = element("div");
        div0 = element("div");
        if_block.c();
        this.h();
      },
      l: function claim(nodes) {
        div1 = claim_element(nodes, "DIV", {
          class: true
        });
        var div1_nodes = children(div1);
        div0 = claim_element(div1_nodes, "DIV", {});
        var div0_nodes = children(div0);
        if_block.l(div0_nodes);
        div0_nodes.forEach(detach_dev);
        div1_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        add_location(div0, file, 12, 2, 369);
        attr_dev(div1, "class", "card border p-4");
        add_location(div1, file, 11, 0, 337);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div1, anchor);
        append_hydration_dev(div1, div0);
        if_blocks[current_block_type_index].m(div0, null);
        current = true;
      },
      p: function update(ctx2, [dirty]) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(div0, null);
        }
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy2(detaching) {
        if (detaching)
          detach_dev(div1);
        if_blocks[current_block_type_index].d();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block2,
      id: create_fragment.name,
      type: "component",
      source: "",
      ctx
    });
    return block2;
  }
  function instance($$self, $$props, $$invalidate) {
    let view;
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("PegOut", slots, []);
    const requestSignature = () => {
      $$invalidate(0, view = "sign_tx_view");
    };
    const updateTransaction = () => {
      $$invalidate(0, view = "build_tx_view");
    };
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
        console.warn(`<PegOut> was created with unknown prop '${key}'`);
    });
    $$self.$capture_state = () => ({
      OutTransaction,
      SignTransaction,
      requestSignature,
      updateTransaction,
      view
    });
    $$self.$inject_state = ($$props2) => {
      if ("view" in $$props2)
        $$invalidate(0, view = $$props2.view);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    $$invalidate(0, view = "build_tx_view");
    return [
      view,
      requestSignature,
      updateTransaction
    ];
  }
  PegOut = class PegOut extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance, create_fragment, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "PegOut",
        options,
        id: create_fragment.name
      });
    }
  };
})();
export {
  PegIn as P,
  __tla,
  PegOut as a
};
