import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a5 as createEventDispatcher, p as element, y as text, c as space, q as claim_element, r as children, z as claim_text, l as detach_dev, f as claim_space, x as add_location, u as attr_dev, g as insert_hydration_dev, O as append_hydration_dev, a1 as set_input_value, W as listen_dev, A as set_data_dev, Z as noop, Y as run_all, X as prevent_default, e as empty, U as validate_store, V as component_subscribe, o as onMount, a3 as validate_each_argument, a4 as destroy_each, a0 as globals, C as create_component, D as claim_component, E as mount_component, k as transition_in, h as transition_out, F as destroy_component } from "./index.605ac338.js";
import { a as addresses, C as CONFIG, k as hexToBytes, m as sendRawTxDirectMempool, B as savePaymentRequest } from "./stacks_connect.fd09cc29.js";
import { o as isSupported, t as truncate, a as explorerBtcTxUrl, e as explorerTxUrl, h as hex, d as btc, b as explorerBtcAddressUrl, T as Transaction } from "./utils.41e44eab.js";
import { s as sbtcConfig } from "./stores.d1299e51.js";
import { P as PegInfo, o as openPsbtRequestPopup } from "./SignTransaction.a6eceb81.js";
const file$4 = "src/lib/components/common/Principal.svelte";
function create_if_block_1$3(ctx) {
  let div;
  let a;
  let t;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div = element("div");
      a = element("a");
      t = text("mine");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      a = claim_element(div_nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      t = claim_text(a_nodes, "mine");
      a_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", "/");
      attr_dev(a, "class", "");
      add_location(a, file$4, 34, 11, 1540);
      add_location(div, file$4, 34, 6, 1535);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, a);
      append_hydration_dev(a, t);
      if (!mounted) {
        dispose = listen_dev(a, "click", prevent_default(
          /*click_handler*/
          ctx[7]
        ), false, true, false, false);
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$3.name,
    type: "if",
    source: "(34:6) {#if stxAddress !== addresses().stxAddress}",
    ctx
  });
  return block;
}
function create_if_block$3(ctx) {
  let div;
  let t;
  const block = {
    c: function create() {
      div = element("div");
      t = text(
        /*reason*/
        ctx[2]
      );
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t = claim_text(
        div_nodes,
        /*reason*/
        ctx[2]
      );
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "text-warning");
      add_location(div, file$4, 37, 56, 1747);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*reason*/
      4)
        set_data_dev(
          t,
          /*reason*/
          ctx2[2]
        );
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$3.name,
    type: "if",
    source: "(38:4) {#if errored && stxAddress && stxAddress.length > 0}",
    ctx
  });
  return block;
}
function create_fragment$4(ctx) {
  let div3;
  let div2;
  let label;
  let span0;
  let t0_value = (
    /*principalData*/
    ctx[0].label + ""
  );
  let t0;
  let t1;
  let span1;
  let t2;
  let input;
  let t3;
  let div1;
  let div0;
  let t4_value = (
    /*principalData*/
    ctx[0].info + ""
  );
  let t4;
  let t5;
  let show_if = (
    /*stxAddress*/
    ctx[1] !== addresses().stxAddress
  );
  let t6;
  let mounted;
  let dispose;
  let if_block0 = show_if && create_if_block_1$3(ctx);
  let if_block1 = (
    /*errored*/
    ctx[3] && /*stxAddress*/
    ctx[1] && /*stxAddress*/
    ctx[1].length > 0 && create_if_block$3(ctx)
  );
  const block = {
    c: function create() {
      div3 = element("div");
      div2 = element("div");
      label = element("label");
      span0 = element("span");
      t0 = text(t0_value);
      t1 = space();
      span1 = element("span");
      t2 = space();
      input = element("input");
      t3 = space();
      div1 = element("div");
      div0 = element("div");
      t4 = text(t4_value);
      t5 = space();
      if (if_block0)
        if_block0.c();
      t6 = space();
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l: function claim(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      label = claim_element(div2_nodes, "LABEL", { for: true, class: true });
      var label_nodes = children(label);
      span0 = claim_element(label_nodes, "SPAN", {});
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, t0_value);
      span0_nodes.forEach(detach_dev);
      t1 = claim_space(label_nodes);
      span1 = claim_element(label_nodes, "SPAN", {
        class: true,
        "data-bs-toggle": true,
        "data-bs-placement": true,
        "data-bs-custom-class": true,
        title: true
      });
      children(span1).forEach(detach_dev);
      label_nodes.forEach(detach_dev);
      t2 = claim_space(div2_nodes);
      input = claim_element(div2_nodes, "INPUT", {
        type: true,
        id: true,
        class: true,
        autocomplete: true
      });
      t3 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t4 = claim_text(div0_nodes, t4_value);
      div0_nodes.forEach(detach_dev);
      t5 = claim_space(div1_nodes);
      if (if_block0)
        if_block0.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      t6 = claim_space(div2_nodes);
      if (if_block1)
        if_block1.l(div2_nodes);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(span0, file$4, 27, 6, 912);
      attr_dev(span1, "class", "pointer text-info");
      attr_dev(span1, "data-bs-toggle", "tooltip-ftux");
      attr_dev(span1, "data-bs-placement", "top");
      attr_dev(span1, "data-bs-custom-class", "custom-tooltip");
      attr_dev(span1, "title", "Your Stacks address. The equivalent amount of sBTC will be sent to this wallet");
      add_location(span1, file$4, 28, 6, 953);
      attr_dev(label, "for", "transact-path");
      attr_dev(label, "class", "d-flex justify-content-between");
      add_location(label, file$4, 26, 4, 839);
      attr_dev(input, "type", "text");
      attr_dev(input, "id", "from-address");
      attr_dev(input, "class", "form-control form-inline");
      attr_dev(input, "autocomplete", "off");
      add_location(input, file$4, 30, 4, 1189);
      attr_dev(div0, "class", "text-small text-white");
      add_location(div0, file$4, 32, 6, 1417);
      attr_dev(div1, "class", "d-flex justify-content-between text-small text-info");
      add_location(div1, file$4, 31, 4, 1345);
      attr_dev(div2, "class", "col");
      add_location(div2, file$4, 25, 2, 817);
      attr_dev(div3, "class", "row");
      add_location(div3, file$4, 24, 0, 797);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div3, anchor);
      append_hydration_dev(div3, div2);
      append_hydration_dev(div2, label);
      append_hydration_dev(label, span0);
      append_hydration_dev(span0, t0);
      append_hydration_dev(label, t1);
      append_hydration_dev(label, span1);
      append_hydration_dev(div2, t2);
      append_hydration_dev(div2, input);
      set_input_value(
        input,
        /*stxAddress*/
        ctx[1]
      );
      append_hydration_dev(div2, t3);
      append_hydration_dev(div2, div1);
      append_hydration_dev(div1, div0);
      append_hydration_dev(div0, t4);
      append_hydration_dev(div1, t5);
      if (if_block0)
        if_block0.m(div1, null);
      append_hydration_dev(div2, t6);
      if (if_block1)
        if_block1.m(div2, null);
      if (!mounted) {
        dispose = [
          listen_dev(
            input,
            "input",
            /*input_input_handler*/
            ctx[5]
          ),
          listen_dev(
            input,
            "input",
            /*input_handler*/
            ctx[6],
            false,
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*principalData*/
      1 && t0_value !== (t0_value = /*principalData*/
      ctx2[0].label + ""))
        set_data_dev(t0, t0_value);
      if (dirty & /*stxAddress*/
      2 && input.value !== /*stxAddress*/
      ctx2[1]) {
        set_input_value(
          input,
          /*stxAddress*/
          ctx2[1]
        );
      }
      if (dirty & /*principalData*/
      1 && t4_value !== (t4_value = /*principalData*/
      ctx2[0].info + ""))
        set_data_dev(t4, t4_value);
      if (dirty & /*stxAddress*/
      2)
        show_if = /*stxAddress*/
        ctx2[1] !== addresses().stxAddress;
      if (show_if) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_1$3(ctx2);
          if_block0.c();
          if_block0.m(div1, null);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*errored*/
        ctx2[3] && /*stxAddress*/
        ctx2[1] && /*stxAddress*/
        ctx2[1].length > 0
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block$3(ctx2);
          if_block1.c();
          if_block1.m(div2, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div3);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$4($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Principal", slots, []);
  let { principalData } = $$props;
  const network = CONFIG.VITE_NETWORK;
  const dispatch = createEventDispatcher();
  let stxAddress = principalData.currentAddress;
  const mainReason = "Please enter a valid stacks blockchain " + network + " address";
  let reason = mainReason;
  let errored = false;
  const changeStxAddress = async () => {
    $$invalidate(3, errored = false);
    try {
      dispatch("principal_updated", { error: false, currentAddress: stxAddress });
    } catch (err) {
      $$invalidate(3, errored = true);
      $$invalidate(2, reason = err || "Error - is the address a valid");
      dispatch("principal_updated", { error: true, reason });
      return;
    }
  };
  $$self.$$.on_mount.push(function() {
    if (principalData === void 0 && !("principalData" in $$props || $$self.$$.bound[$$self.$$.props["principalData"]])) {
      console.warn("<Principal> was created without expected prop 'principalData'");
    }
  });
  const writable_props = ["principalData"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Principal> was created with unknown prop '${key}'`);
  });
  function input_input_handler() {
    stxAddress = this.value;
    $$invalidate(1, stxAddress);
  }
  const input_handler = () => changeStxAddress();
  const click_handler = () => {
    $$invalidate(1, stxAddress = addresses().stxAddress);
    changeStxAddress();
  };
  $$self.$$set = ($$props2) => {
    if ("principalData" in $$props2)
      $$invalidate(0, principalData = $$props2.principalData);
  };
  $$self.$capture_state = () => ({
    CONFIG,
    createEventDispatcher,
    addresses,
    principalData,
    network,
    dispatch,
    stxAddress,
    mainReason,
    reason,
    errored,
    changeStxAddress
  });
  $$self.$inject_state = ($$props2) => {
    if ("principalData" in $$props2)
      $$invalidate(0, principalData = $$props2.principalData);
    if ("stxAddress" in $$props2)
      $$invalidate(1, stxAddress = $$props2.stxAddress);
    if ("reason" in $$props2)
      $$invalidate(2, reason = $$props2.reason);
    if ("errored" in $$props2)
      $$invalidate(3, errored = $$props2.errored);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    principalData,
    stxAddress,
    reason,
    errored,
    changeStxAddress,
    input_input_handler,
    input_handler,
    click_handler
  ];
}
class Principal extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { principalData: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Principal",
      options,
      id: create_fragment$4.name
    });
  }
  get principalData() {
    throw new Error("<Principal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set principalData(value) {
    throw new Error("<Principal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$3 = "src/lib/components/common/FeeDisplay.svelte";
function create_else_block_1(ctx) {
  let div5;
  let div0;
  let t0;
  let t1_value = (
    /*amtData*/
    ctx[0].dust + ""
  );
  let t1;
  let t2;
  let t3;
  let div1;
  let t4;
  let div4;
  let div2;
  let t5;
  let span0;
  let t6_value = (
    /*amtData*/
    ctx[0].fee + ""
  );
  let t6;
  let t7;
  let t8;
  let div3;
  let span1;
  let t9;
  let t10;
  let span2;
  let a0;
  let t11;
  let a0_class_value;
  let t12;
  let span3;
  let a1;
  let t13;
  let a1_class_value;
  let t14;
  let span4;
  let a2;
  let t15;
  let a2_class_value;
  let mounted;
  let dispose;
  function select_block_type_2(ctx2, dirty) {
    if (
      /*amtData*/
      ctx2[0].change === 0
    )
      return create_if_block_2$1;
    return create_else_block_2;
  }
  let current_block_type = select_block_type_2(ctx);
  let if_block = current_block_type(ctx);
  const block = {
    c: function create() {
      div5 = element("div");
      div0 = element("div");
      t0 = text("Dust ");
      t1 = text(t1_value);
      t2 = text(" BTC");
      t3 = space();
      div1 = element("div");
      if_block.c();
      t4 = space();
      div4 = element("div");
      div2 = element("div");
      t5 = text("Fee: ");
      span0 = element("span");
      t6 = text(t6_value);
      t7 = text(" sats/kb");
      t8 = space();
      div3 = element("div");
      span1 = element("span");
      t9 = text("priority:");
      t10 = space();
      span2 = element("span");
      a0 = element("a");
      t11 = text("low");
      t12 = space();
      span3 = element("span");
      a1 = element("a");
      t13 = text("medium");
      t14 = space();
      span4 = element("span");
      a2 = element("a");
      t15 = text("high");
      this.h();
    },
    l: function claim(nodes) {
      div5 = claim_element(nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div0 = claim_element(div5_nodes, "DIV", {});
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "Dust ");
      t1 = claim_text(div0_nodes, t1_value);
      t2 = claim_text(div0_nodes, " BTC");
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(div5_nodes);
      div1 = claim_element(div5_nodes, "DIV", {});
      var div1_nodes = children(div1);
      if_block.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      t4 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div2 = claim_element(div4_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      t5 = claim_text(div2_nodes, "Fee: ");
      span0 = claim_element(div2_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t6 = claim_text(span0_nodes, t6_value);
      t7 = claim_text(span0_nodes, " sats/kb");
      span0_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t8 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {});
      var div3_nodes = children(div3);
      span1 = claim_element(div3_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t9 = claim_text(span1_nodes, "priority:");
      span1_nodes.forEach(detach_dev);
      t10 = claim_space(div3_nodes);
      span2 = claim_element(div3_nodes, "SPAN", { class: true });
      var span2_nodes = children(span2);
      a0 = claim_element(span2_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      t11 = claim_text(a0_nodes, "low");
      a0_nodes.forEach(detach_dev);
      span2_nodes.forEach(detach_dev);
      t12 = claim_space(div3_nodes);
      span3 = claim_element(div3_nodes, "SPAN", { class: true });
      var span3_nodes = children(span3);
      a1 = claim_element(span3_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      t13 = claim_text(a1_nodes, "medium");
      a1_nodes.forEach(detach_dev);
      span3_nodes.forEach(detach_dev);
      t14 = claim_space(div3_nodes);
      span4 = claim_element(div3_nodes, "SPAN", { class: true });
      var span4_nodes = children(span4);
      a2 = claim_element(span4_nodes, "A", { href: true, class: true });
      var a2_nodes = children(a2);
      t15 = claim_text(a2_nodes, "high");
      a2_nodes.forEach(detach_dev);
      span4_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(div0, file$3, 27, 2, 1292);
      add_location(div1, file$3, 28, 2, 1329);
      attr_dev(span0, "class", "text-success");
      add_location(span0, file$3, 30, 23, 1503);
      attr_dev(div2, "class", "");
      add_location(div2, file$3, 30, 4, 1484);
      attr_dev(span1, "class", "ms-5 text-white");
      add_location(span1, file$3, 32, 6, 1581);
      attr_dev(a0, "href", "/");
      attr_dev(a0, "class", a0_class_value = /*low*/
      ctx[3] ? "text-success" : "text-info");
      add_location(a0, file$3, 33, 27, 1656);
      attr_dev(span2, "class", "mx-0 ");
      add_location(span2, file$3, 33, 6, 1635);
      attr_dev(a1, "href", "/");
      attr_dev(a1, "class", a1_class_value = /*medium*/
      ctx[2] ? "text-success" : "text-info");
      add_location(a1, file$3, 34, 26, 1800);
      attr_dev(span3, "class", "mx-0");
      add_location(span3, file$3, 34, 6, 1780);
      attr_dev(a2, "href", "/");
      attr_dev(a2, "class", a2_class_value = /*high*/
      ctx[1] ? "text-success" : "text-info");
      add_location(a2, file$3, 35, 26, 1950);
      attr_dev(span4, "class", "mx-0");
      add_location(span4, file$3, 35, 6, 1930);
      add_location(div3, file$3, 31, 4, 1569);
      attr_dev(div4, "class", "d-flex justify-content-between");
      add_location(div4, file$3, 29, 2, 1435);
      attr_dev(div5, "class", "mb-5 col-12");
      add_location(div5, file$3, 26, 0, 1264);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div5, anchor);
      append_hydration_dev(div5, div0);
      append_hydration_dev(div0, t0);
      append_hydration_dev(div0, t1);
      append_hydration_dev(div0, t2);
      append_hydration_dev(div5, t3);
      append_hydration_dev(div5, div1);
      if_block.m(div1, null);
      append_hydration_dev(div5, t4);
      append_hydration_dev(div5, div4);
      append_hydration_dev(div4, div2);
      append_hydration_dev(div2, t5);
      append_hydration_dev(div2, span0);
      append_hydration_dev(span0, t6);
      append_hydration_dev(span0, t7);
      append_hydration_dev(div4, t8);
      append_hydration_dev(div4, div3);
      append_hydration_dev(div3, span1);
      append_hydration_dev(span1, t9);
      append_hydration_dev(div3, t10);
      append_hydration_dev(div3, span2);
      append_hydration_dev(span2, a0);
      append_hydration_dev(a0, t11);
      append_hydration_dev(div3, t12);
      append_hydration_dev(div3, span3);
      append_hydration_dev(span3, a1);
      append_hydration_dev(a1, t13);
      append_hydration_dev(div3, t14);
      append_hydration_dev(div3, span4);
      append_hydration_dev(span4, a2);
      append_hydration_dev(a2, t15);
      if (!mounted) {
        dispose = [
          listen_dev(a0, "click", prevent_default(
            /*click_handler_3*/
            ctx[9]
          ), false, true, false, false),
          listen_dev(a1, "click", prevent_default(
            /*click_handler_4*/
            ctx[10]
          ), false, true, false, false),
          listen_dev(a2, "click", prevent_default(
            /*click_handler_5*/
            ctx[11]
          ), false, true, false, false)
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*amtData*/
      1 && t1_value !== (t1_value = /*amtData*/
      ctx2[0].dust + ""))
        set_data_dev(t1, t1_value);
      if (current_block_type === (current_block_type = select_block_type_2(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div1, null);
        }
      }
      if (dirty & /*amtData*/
      1 && t6_value !== (t6_value = /*amtData*/
      ctx2[0].fee + ""))
        set_data_dev(t6, t6_value);
      if (dirty & /*low*/
      8 && a0_class_value !== (a0_class_value = /*low*/
      ctx2[3] ? "text-success" : "text-info")) {
        attr_dev(a0, "class", a0_class_value);
      }
      if (dirty & /*medium*/
      4 && a1_class_value !== (a1_class_value = /*medium*/
      ctx2[2] ? "text-success" : "text-info")) {
        attr_dev(a1, "class", a1_class_value);
      }
      if (dirty & /*high*/
      2 && a2_class_value !== (a2_class_value = /*high*/
      ctx2[1] ? "text-success" : "text-info")) {
        attr_dev(a2, "class", a2_class_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div5);
      if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block_1.name,
    type: "else",
    source: "(26:0) {:else}",
    ctx
  });
  return block;
}
function create_if_block$2(ctx) {
  let div4;
  let div0;
  let t0;
  let div3;
  let div1;
  let t1;
  let span0;
  let t2_value = (
    /*amtData*/
    ctx[0].fee + ""
  );
  let t2;
  let t3;
  let t4;
  let div2;
  let span1;
  let t5;
  let t6;
  let span2;
  let a0;
  let t7;
  let a0_class_value;
  let t8;
  let span3;
  let a1;
  let t9;
  let a1_class_value;
  let t10;
  let span4;
  let a2;
  let t11;
  let a2_class_value;
  let mounted;
  let dispose;
  function select_block_type_1(ctx2, dirty) {
    if (
      /*amtData*/
      ctx2[0].change === 0
    )
      return create_if_block_1$2;
    return create_else_block$2;
  }
  let current_block_type = select_block_type_1(ctx);
  let if_block = current_block_type(ctx);
  const block = {
    c: function create() {
      div4 = element("div");
      div0 = element("div");
      if_block.c();
      t0 = space();
      div3 = element("div");
      div1 = element("div");
      t1 = text("Fee: ");
      span0 = element("span");
      t2 = text(t2_value);
      t3 = text(" sats/kb");
      t4 = space();
      div2 = element("div");
      span1 = element("span");
      t5 = text("priority:");
      t6 = space();
      span2 = element("span");
      a0 = element("a");
      t7 = text("low");
      t8 = space();
      span3 = element("span");
      a1 = element("a");
      t9 = text("medium");
      t10 = space();
      span4 = element("span");
      a2 = element("a");
      t11 = text("high");
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", {});
      var div0_nodes = children(div0);
      if_block.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t1 = claim_text(div1_nodes, "Fee: ");
      span0 = claim_element(div1_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t2 = claim_text(span0_nodes, t2_value);
      t3 = claim_text(span0_nodes, " sats/kb");
      span0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t4 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {});
      var div2_nodes = children(div2);
      span1 = claim_element(div2_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t5 = claim_text(span1_nodes, "priority:");
      span1_nodes.forEach(detach_dev);
      t6 = claim_space(div2_nodes);
      span2 = claim_element(div2_nodes, "SPAN", { class: true });
      var span2_nodes = children(span2);
      a0 = claim_element(span2_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      t7 = claim_text(a0_nodes, "low");
      a0_nodes.forEach(detach_dev);
      span2_nodes.forEach(detach_dev);
      t8 = claim_space(div2_nodes);
      span3 = claim_element(div2_nodes, "SPAN", { class: true });
      var span3_nodes = children(span3);
      a1 = claim_element(span3_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      t9 = claim_text(a1_nodes, "medium");
      a1_nodes.forEach(detach_dev);
      span3_nodes.forEach(detach_dev);
      t10 = claim_space(div2_nodes);
      span4 = claim_element(div2_nodes, "SPAN", { class: true });
      var span4_nodes = children(span4);
      a2 = claim_element(span4_nodes, "A", { href: true, class: true });
      var a2_nodes = children(a2);
      t11 = claim_text(a2_nodes, "high");
      a2_nodes.forEach(detach_dev);
      span4_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(div0, file$3, 14, 2, 488);
      attr_dev(span0, "class", "text-success");
      add_location(span0, file$3, 16, 23, 662);
      attr_dev(div1, "class", "");
      add_location(div1, file$3, 16, 4, 643);
      attr_dev(span1, "class", "ms-5 text-white");
      add_location(span1, file$3, 18, 6, 740);
      attr_dev(a0, "href", "/");
      attr_dev(a0, "class", a0_class_value = /*low*/
      ctx[3] ? "text-success" : "text-info");
      add_location(a0, file$3, 19, 27, 815);
      attr_dev(span2, "class", "mx-0 ");
      add_location(span2, file$3, 19, 6, 794);
      attr_dev(a1, "href", "/");
      attr_dev(a1, "class", a1_class_value = /*medium*/
      ctx[2] ? "text-success" : "text-info");
      add_location(a1, file$3, 20, 26, 959);
      attr_dev(span3, "class", "mx-0");
      add_location(span3, file$3, 20, 6, 939);
      attr_dev(a2, "href", "/");
      attr_dev(a2, "class", a2_class_value = /*high*/
      ctx[1] ? "text-success" : "text-info");
      add_location(a2, file$3, 21, 26, 1109);
      attr_dev(span4, "class", "mx-0");
      add_location(span4, file$3, 21, 6, 1089);
      add_location(div2, file$3, 17, 4, 728);
      attr_dev(div3, "class", "d-flex justify-content-between");
      add_location(div3, file$3, 15, 2, 594);
      attr_dev(div4, "class", "mt-4 mb-5 col-12");
      add_location(div4, file$3, 13, 0, 455);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div4, anchor);
      append_hydration_dev(div4, div0);
      if_block.m(div0, null);
      append_hydration_dev(div4, t0);
      append_hydration_dev(div4, div3);
      append_hydration_dev(div3, div1);
      append_hydration_dev(div1, t1);
      append_hydration_dev(div1, span0);
      append_hydration_dev(span0, t2);
      append_hydration_dev(span0, t3);
      append_hydration_dev(div3, t4);
      append_hydration_dev(div3, div2);
      append_hydration_dev(div2, span1);
      append_hydration_dev(span1, t5);
      append_hydration_dev(div2, t6);
      append_hydration_dev(div2, span2);
      append_hydration_dev(span2, a0);
      append_hydration_dev(a0, t7);
      append_hydration_dev(div2, t8);
      append_hydration_dev(div2, span3);
      append_hydration_dev(span3, a1);
      append_hydration_dev(a1, t9);
      append_hydration_dev(div2, t10);
      append_hydration_dev(div2, span4);
      append_hydration_dev(span4, a2);
      append_hydration_dev(a2, t11);
      if (!mounted) {
        dispose = [
          listen_dev(a0, "click", prevent_default(
            /*click_handler*/
            ctx[6]
          ), false, true, false, false),
          listen_dev(a1, "click", prevent_default(
            /*click_handler_1*/
            ctx[7]
          ), false, true, false, false),
          listen_dev(a2, "click", prevent_default(
            /*click_handler_2*/
            ctx[8]
          ), false, true, false, false)
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type_1(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div0, null);
        }
      }
      if (dirty & /*amtData*/
      1 && t2_value !== (t2_value = /*amtData*/
      ctx2[0].fee + ""))
        set_data_dev(t2, t2_value);
      if (dirty & /*low*/
      8 && a0_class_value !== (a0_class_value = /*low*/
      ctx2[3] ? "text-success" : "text-info")) {
        attr_dev(a0, "class", a0_class_value);
      }
      if (dirty & /*medium*/
      4 && a1_class_value !== (a1_class_value = /*medium*/
      ctx2[2] ? "text-success" : "text-info")) {
        attr_dev(a1, "class", a1_class_value);
      }
      if (dirty & /*high*/
      2 && a2_class_value !== (a2_class_value = /*high*/
      ctx2[1] ? "text-success" : "text-info")) {
        attr_dev(a2, "class", a2_class_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div4);
      if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$2.name,
    type: "if",
    source: "(13:0) {#if amtData.pegIn}",
    ctx
  });
  return block;
}
function create_else_block_2(ctx) {
  let t0;
  let t1_value = (
    /*amtData*/
    ctx[0].change + ""
  );
  let t1;
  let t2;
  const block = {
    c: function create() {
      t0 = text("Change ");
      t1 = text(t1_value);
      t2 = text(" (add change address?)");
    },
    l: function claim(nodes) {
      t0 = claim_text(nodes, "Change ");
      t1 = claim_text(nodes, t1_value);
      t2 = claim_text(nodes, " (add change address?)");
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t0, anchor);
      insert_hydration_dev(target, t1, anchor);
      insert_hydration_dev(target, t2, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*amtData*/
      1 && t1_value !== (t1_value = /*amtData*/
      ctx2[0].change + ""))
        set_data_dev(t1, t1_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(t2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block_2.name,
    type: "else",
    source: "(29:42) {:else}",
    ctx
  });
  return block;
}
function create_if_block_2$1(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("No change");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "No change");
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
    id: create_if_block_2$1.name,
    type: "if",
    source: "(29:7) {#if amtData.change === 0}",
    ctx
  });
  return block;
}
function create_else_block$2(ctx) {
  let t0;
  let t1_value = (
    /*amtData*/
    ctx[0].change + ""
  );
  let t1;
  let t2;
  const block = {
    c: function create() {
      t0 = text("Change ");
      t1 = text(t1_value);
      t2 = text(" (add change address?)");
    },
    l: function claim(nodes) {
      t0 = claim_text(nodes, "Change ");
      t1 = claim_text(nodes, t1_value);
      t2 = claim_text(nodes, " (add change address?)");
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t0, anchor);
      insert_hydration_dev(target, t1, anchor);
      insert_hydration_dev(target, t2, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*amtData*/
      1 && t1_value !== (t1_value = /*amtData*/
      ctx2[0].change + ""))
        set_data_dev(t1, t1_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(t2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block$2.name,
    type: "else",
    source: "(15:42) {:else}",
    ctx
  });
  return block;
}
function create_if_block_1$2(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("No change");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "No change");
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
    id: create_if_block_1$2.name,
    type: "if",
    source: "(15:7) {#if amtData.change === 0}",
    ctx
  });
  return block;
}
function create_fragment$3(ctx) {
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    if (
      /*amtData*/
      ctx2[0].pegIn
    )
      return create_if_block$2;
    return create_else_block_1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  const block = {
    c: function create() {
      if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if_block.m(target, anchor);
      insert_hydration_dev(target, if_block_anchor, anchor);
    },
    p: function update(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach_dev(if_block_anchor);
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
  let low;
  let medium;
  let high;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("FeeDisplay", slots, []);
  const dispatch = createEventDispatcher();
  let { amtData } = $$props;
  let { currentPeg } = $$props;
  const changeRate = (rate) => {
    dispatch("fee_rate_updated", {
      opCode: "prio",
      error: false,
      newAmount: currentPeg,
      newFeeRate: rate
    });
  };
  $$self.$$.on_mount.push(function() {
    if (amtData === void 0 && !("amtData" in $$props || $$self.$$.bound[$$self.$$.props["amtData"]])) {
      console.warn("<FeeDisplay> was created without expected prop 'amtData'");
    }
    if (currentPeg === void 0 && !("currentPeg" in $$props || $$self.$$.bound[$$self.$$.props["currentPeg"]])) {
      console.warn("<FeeDisplay> was created without expected prop 'currentPeg'");
    }
  });
  const writable_props = ["amtData", "currentPeg"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<FeeDisplay> was created with unknown prop '${key}'`);
  });
  const click_handler = () => changeRate(0);
  const click_handler_1 = () => changeRate(1);
  const click_handler_2 = () => changeRate(2);
  const click_handler_3 = () => changeRate(0);
  const click_handler_4 = () => changeRate(1);
  const click_handler_5 = () => changeRate(2);
  $$self.$$set = ($$props2) => {
    if ("amtData" in $$props2)
      $$invalidate(0, amtData = $$props2.amtData);
    if ("currentPeg" in $$props2)
      $$invalidate(5, currentPeg = $$props2.currentPeg);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    dispatch,
    amtData,
    currentPeg,
    changeRate,
    high,
    medium,
    low
  });
  $$self.$inject_state = ($$props2) => {
    if ("amtData" in $$props2)
      $$invalidate(0, amtData = $$props2.amtData);
    if ("currentPeg" in $$props2)
      $$invalidate(5, currentPeg = $$props2.currentPeg);
    if ("high" in $$props2)
      $$invalidate(1, high = $$props2.high);
    if ("medium" in $$props2)
      $$invalidate(2, medium = $$props2.medium);
    if ("low" in $$props2)
      $$invalidate(3, low = $$props2.low);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*amtData*/
    1) {
      $$invalidate(3, low = amtData.fee === amtData.fees[0]);
    }
    if ($$self.$$.dirty & /*amtData*/
    1) {
      $$invalidate(2, medium = amtData.fee === amtData.fees[1]);
    }
    if ($$self.$$.dirty & /*amtData*/
    1) {
      $$invalidate(1, high = amtData.fee === amtData.fees[2]);
    }
  };
  return [
    amtData,
    high,
    medium,
    low,
    changeRate,
    currentPeg,
    click_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3,
    click_handler_4,
    click_handler_5
  ];
}
class FeeDisplay extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { amtData: 0, currentPeg: 5 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "FeeDisplay",
      options,
      id: create_fragment$3.name
    });
  }
  get amtData() {
    throw new Error("<FeeDisplay>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set amtData(value) {
    throw new Error("<FeeDisplay>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get currentPeg() {
    throw new Error("<FeeDisplay>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set currentPeg(value) {
    throw new Error("<FeeDisplay>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$2 = "src/lib/components/common/UTXOSelection.svelte";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[15] = list[i];
  return child_ctx;
}
function create_else_block$1(ctx) {
  let div;
  let span;
  let t;
  const block = {
    c: function create() {
      div = element("div");
      span = element("span");
      t = text("Insufficient balance - please use a different bitcoin address");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      span = claim_element(div_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Insufficient balance - please use a different bitcoin address");
      span_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "text-warning");
      add_location(span, file$2, 76, 11, 2933);
      add_location(div, file$2, 76, 6, 2928);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, span);
      append_hydration_dev(span, t);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block$1.name,
    type: "else",
    source: "(76:4) {:else}",
    ctx
  });
  return block;
}
function create_if_block_3(ctx) {
  let div1;
  let div0;
  let t0;
  let t1_value = (
    /*utxoData*/
    ctx[0].maxCommit + ""
  );
  let t1;
  let t2;
  let div0_title_value;
  let t3;
  let if_block = (
    /*showDebugInfo*/
    ctx[5] && create_if_block_4(ctx)
  );
  const block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      t0 = text("BTC Balance ");
      t1 = text(t1_value);
      t2 = text(" Sats.");
      t3 = space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true, title: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "BTC Balance ");
      t1 = claim_text(div0_nodes, t1_value);
      t2 = claim_text(div0_nodes, " Sats.");
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(div1_nodes);
      if (if_block)
        if_block.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "");
      attr_dev(div0, "title", div0_title_value = /*utxoData*/
      ctx[0].numbInputs + " unspent inputs with total value: " + /*utxoData*/
      ctx[0].maxCommit);
      add_location(div0, file$2, 66, 6, 2295);
      attr_dev(div1, "class", "text-small d-flex justify-content-between text-info");
      add_location(div1, file$2, 65, 4, 2222);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div1, anchor);
      append_hydration_dev(div1, div0);
      append_hydration_dev(div0, t0);
      append_hydration_dev(div0, t1);
      append_hydration_dev(div0, t2);
      append_hydration_dev(div1, t3);
      if (if_block)
        if_block.m(div1, null);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*utxoData*/
      1 && t1_value !== (t1_value = /*utxoData*/
      ctx2[0].maxCommit + ""))
        set_data_dev(t1, t1_value);
      if (dirty & /*utxoData*/
      1 && div0_title_value !== (div0_title_value = /*utxoData*/
      ctx2[0].numbInputs + " unspent inputs with total value: " + /*utxoData*/
      ctx2[0].maxCommit)) {
        attr_dev(div0, "title", div0_title_value);
      }
      if (
        /*showDebugInfo*/
        ctx2[5]
      )
        if_block.p(ctx2, dirty);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
      if (if_block)
        if_block.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_3.name,
    type: "if",
    source: "(65:4) {#if $sbtcConfig.userSettings.useOpDrop || utxoData.numbInputs > 0}",
    ctx
  });
  return block;
}
function create_if_block_4(ctx) {
  let div;
  let t0;
  let a0;
  let t1;
  let t2;
  let a1;
  let t3;
  let mounted;
  let dispose;
  let if_block = !/*isWebWallet*/
  ctx[7] && create_if_block_5(ctx);
  const block = {
    c: function create() {
      div = element("div");
      if (if_block)
        if_block.c();
      t0 = space();
      a0 = element("a");
      t1 = text("reload utxos");
      t2 = space();
      a1 = element("a");
      t3 = text("show details");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if (if_block)
        if_block.l(div_nodes);
      t0 = claim_space(div_nodes);
      a0 = claim_element(div_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      t1 = claim_text(a0_nodes, "reload utxos");
      a0_nodes.forEach(detach_dev);
      t2 = claim_space(div_nodes);
      a1 = claim_element(div_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      t3 = claim_text(a1_nodes, "show details");
      a1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a0, "href", "/");
      attr_dev(a0, "class", "text-white px-3 border-right");
      add_location(a0, file$2, 70, 8, 2638);
      attr_dev(a1, "href", "/");
      attr_dev(a1, "class", "text-white ps-3 ");
      add_location(a1, file$2, 71, 8, 2765);
      add_location(div, file$2, 68, 6, 2474);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      append_hydration_dev(div, t0);
      append_hydration_dev(div, a0);
      append_hydration_dev(a0, t1);
      append_hydration_dev(div, t2);
      append_hydration_dev(div, a1);
      append_hydration_dev(a1, t3);
      if (!mounted) {
        dispose = [
          listen_dev(a0, "click", prevent_default(
            /*click_handler_1*/
            ctx[12]
          ), false, true, false, false),
          listen_dev(a1, "click", prevent_default(
            /*click_handler_2*/
            ctx[13]
          ), false, true, false, false)
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (!/*isWebWallet*/
      ctx2[7])
        if_block.p(ctx2, dirty);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_4.name,
    type: "if",
    source: "(68:6) {#if showDebugInfo}",
    ctx
  });
  return block;
}
function create_if_block_5(ctx) {
  let a;
  let t;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      a = element("a");
      t = text("web wallet address");
      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      t = claim_text(a_nodes, "web wallet address");
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", "/");
      attr_dev(a, "class", "text-white px-3 border-right");
      add_location(a, file$2, 69, 26, 2506);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, a, anchor);
      append_hydration_dev(a, t);
      if (!mounted) {
        dispose = listen_dev(a, "click", prevent_default(
          /*click_handler*/
          ctx[11]
        ), false, true, false, false);
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(a);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_5.name,
    type: "if",
    source: "(70:8) {#if !isWebWallet}",
    ctx
  });
  return block;
}
function create_if_block$1(ctx) {
  let t;
  let if_block1_anchor;
  let if_block0 = (
    /*bitcoinAddress*/
    ctx[1] && /*errorReason*/
    ctx[2] && create_if_block_2(ctx)
  );
  let if_block1 = (
    /*showUtxos*/
    ctx[3] && create_if_block_1$1(ctx)
  );
  const block = {
    c: function create() {
      if (if_block0)
        if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      t = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration_dev(target, t, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration_dev(target, if_block1_anchor, anchor);
    },
    p: function update(ctx2, dirty) {
      if (
        /*bitcoinAddress*/
        ctx2[1] && /*errorReason*/
        ctx2[2]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_2(ctx2);
          if_block0.c();
          if_block0.m(t.parentNode, t);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*showUtxos*/
        ctx2[3]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_1$1(ctx2);
          if_block1.c();
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    d: function destroy(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach_dev(t);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach_dev(if_block1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$1.name,
    type: "if",
    source: "(79:4) {#if showDebugInfo}",
    ctx
  });
  return block;
}
function create_if_block_2(ctx) {
  let div;
  let span;
  let t;
  const block = {
    c: function create() {
      div = element("div");
      span = element("span");
      t = text(
        /*errorReason*/
        ctx[2]
      );
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      span = claim_element(div_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(
        span_nodes,
        /*errorReason*/
        ctx[2]
      );
      span_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "text-warning");
      add_location(span, file$2, 80, 11, 3120);
      add_location(div, file$2, 80, 6, 3115);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, span);
      append_hydration_dev(span, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*errorReason*/
      4)
        set_data_dev(
          t,
          /*errorReason*/
          ctx2[2]
        );
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(80:4) {#if bitcoinAddress && errorReason}",
    ctx
  });
  return block;
}
function create_if_block_1$1(ctx) {
  let div4;
  let h6;
  let t0;
  let t1;
  let div3;
  let div0;
  let span0;
  let t2;
  let t3;
  let div1;
  let span1;
  let t4;
  let t5;
  let div2;
  let span2;
  let t6;
  let t7;
  let each_value = (
    /*utxoData*/
    ctx[0].utxos
  );
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const block = {
    c: function create() {
      div4 = element("div");
      h6 = element("h6");
      t0 = text("UTXOs");
      t1 = space();
      div3 = element("div");
      div0 = element("div");
      span0 = element("span");
      t2 = text("Sats.");
      t3 = space();
      div1 = element("div");
      span1 = element("span");
      t4 = text("Confs.");
      t5 = space();
      div2 = element("div");
      span2 = element("span");
      t6 = text("Txid");
      t7 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      h6 = claim_element(div4_nodes, "H6", {});
      var h6_nodes = children(h6);
      t0 = claim_text(h6_nodes, "UTXOs");
      h6_nodes.forEach(detach_dev);
      t1 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      span0 = claim_element(div0_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t2 = claim_text(span0_nodes, "Sats.");
      span0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      span1 = claim_element(div1_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t4 = claim_text(span1_nodes, "Confs.");
      span1_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      span2 = claim_element(div2_nodes, "SPAN", { class: true });
      var span2_nodes = children(span2);
      t6 = claim_text(span2_nodes, "Txid");
      span2_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t7 = claim_space(div4_nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div4_nodes);
      }
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(h6, file$2, 84, 6, 3254);
      attr_dev(span0, "class", "text-white");
      add_location(span0, file$2, 86, 27, 3320);
      attr_dev(div0, "class", "col-2");
      add_location(div0, file$2, 86, 8, 3301);
      attr_dev(span1, "class", "text-white");
      add_location(span1, file$2, 87, 27, 3391);
      attr_dev(div1, "class", "col-2");
      add_location(div1, file$2, 87, 8, 3372);
      attr_dev(span2, "class", "text-white");
      add_location(span2, file$2, 88, 27, 3463);
      attr_dev(div2, "class", "col-8");
      add_location(div2, file$2, 88, 8, 3444);
      attr_dev(div3, "class", "row");
      add_location(div3, file$2, 85, 6, 3275);
      attr_dev(div4, "class", "mt-3 mb-4 mx-0 border p-3");
      add_location(div4, file$2, 83, 4, 3208);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div4, anchor);
      append_hydration_dev(div4, h6);
      append_hydration_dev(h6, t0);
      append_hydration_dev(div4, t1);
      append_hydration_dev(div4, div3);
      append_hydration_dev(div3, div0);
      append_hydration_dev(div0, span0);
      append_hydration_dev(span0, t2);
      append_hydration_dev(div3, t3);
      append_hydration_dev(div3, div1);
      append_hydration_dev(div1, span1);
      append_hydration_dev(span1, t4);
      append_hydration_dev(div3, t5);
      append_hydration_dev(div3, div2);
      append_hydration_dev(div2, span2);
      append_hydration_dev(span2, t6);
      append_hydration_dev(div4, t7);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div4, null);
        }
      }
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*explorerBtcTxUrl, utxoData, truncate*/
      1) {
        each_value = /*utxoData*/
        ctx2[0].utxos;
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div4, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div4);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$1.name,
    type: "if",
    source: "(83:4) {#if showUtxos}",
    ctx
  });
  return block;
}
function create_each_block(ctx) {
  let div3;
  let div0;
  let span0;
  let t0_value = (
    /*utxo*/
    ctx[15].value + ""
  );
  let t0;
  let t1;
  let div1;
  let span1;
  let t2_value = (
    /*utxo*/
    ctx[15].tx.confirmations + ""
  );
  let t2;
  let t3;
  let t4_value = (
    /*utxo*/
    ctx[15].tx.confirmations < 6 ? "(of 6)" : ""
  );
  let t4;
  let span1_class_value;
  let t5;
  let div2;
  let span2;
  let a;
  let t6_value = truncate(
    /*utxo*/
    ctx[15].txid,
    16
  ) + "";
  let t6;
  let t7;
  let t8_value = (
    /*utxo*/
    ctx[15].vout + ""
  );
  let t8;
  let a_href_value;
  let t9;
  const block = {
    c: function create() {
      div3 = element("div");
      div0 = element("div");
      span0 = element("span");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      span1 = element("span");
      t2 = text(t2_value);
      t3 = space();
      t4 = text(t4_value);
      t5 = space();
      div2 = element("div");
      span2 = element("span");
      a = element("a");
      t6 = text(t6_value);
      t7 = text(" : ");
      t8 = text(t8_value);
      t9 = space();
      this.h();
    },
    l: function claim(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      span0 = claim_element(div0_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, t0_value);
      span0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      span1 = claim_element(div1_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t2 = claim_text(span1_nodes, t2_value);
      t3 = claim_space(span1_nodes);
      t4 = claim_text(span1_nodes, t4_value);
      span1_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      span2 = claim_element(div2_nodes, "SPAN", { class: true });
      var span2_nodes = children(span2);
      a = claim_element(span2_nodes, "A", {
        class: true,
        href: true,
        target: true,
        rel: true
      });
      var a_nodes = children(a);
      t6 = claim_text(a_nodes, t6_value);
      t7 = claim_text(a_nodes, " : ");
      t8 = claim_text(a_nodes, t8_value);
      a_nodes.forEach(detach_dev);
      span2_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t9 = claim_space(div3_nodes);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span0, "class", "");
      add_location(span0, file$2, 92, 27, 3629);
      attr_dev(div0, "class", "col-2");
      add_location(div0, file$2, 92, 8, 3610);
      attr_dev(span1, "class", span1_class_value = /*utxo*/
      ctx[15].tx.confirmations < 6 ? "text-warning" : "text-success");
      add_location(span1, file$2, 93, 27, 3697);
      attr_dev(div1, "class", "col-2");
      add_location(div1, file$2, 93, 8, 3678);
      attr_dev(a, "class", "text-white");
      attr_dev(a, "href", a_href_value = explorerBtcTxUrl(
        /*utxo*/
        ctx[15].txid
      ));
      attr_dev(a, "target", "_blank");
      attr_dev(a, "rel", "noreferrer");
      add_location(a, file$2, 94, 42, 3898);
      attr_dev(span2, "class", "");
      add_location(span2, file$2, 94, 27, 3883);
      attr_dev(div2, "class", "col-8");
      add_location(div2, file$2, 94, 8, 3864);
      attr_dev(div3, "class", "row text-white text-small");
      add_location(div3, file$2, 91, 6, 3562);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div3, anchor);
      append_hydration_dev(div3, div0);
      append_hydration_dev(div0, span0);
      append_hydration_dev(span0, t0);
      append_hydration_dev(div3, t1);
      append_hydration_dev(div3, div1);
      append_hydration_dev(div1, span1);
      append_hydration_dev(span1, t2);
      append_hydration_dev(span1, t3);
      append_hydration_dev(span1, t4);
      append_hydration_dev(div3, t5);
      append_hydration_dev(div3, div2);
      append_hydration_dev(div2, span2);
      append_hydration_dev(span2, a);
      append_hydration_dev(a, t6);
      append_hydration_dev(a, t7);
      append_hydration_dev(a, t8);
      append_hydration_dev(div3, t9);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*utxoData*/
      1 && t0_value !== (t0_value = /*utxo*/
      ctx2[15].value + ""))
        set_data_dev(t0, t0_value);
      if (dirty & /*utxoData*/
      1 && t2_value !== (t2_value = /*utxo*/
      ctx2[15].tx.confirmations + ""))
        set_data_dev(t2, t2_value);
      if (dirty & /*utxoData*/
      1 && t4_value !== (t4_value = /*utxo*/
      ctx2[15].tx.confirmations < 6 ? "(of 6)" : ""))
        set_data_dev(t4, t4_value);
      if (dirty & /*utxoData*/
      1 && span1_class_value !== (span1_class_value = /*utxo*/
      ctx2[15].tx.confirmations < 6 ? "text-warning" : "text-success")) {
        attr_dev(span1, "class", span1_class_value);
      }
      if (dirty & /*utxoData*/
      1 && t6_value !== (t6_value = truncate(
        /*utxo*/
        ctx2[15].txid,
        16
      ) + ""))
        set_data_dev(t6, t6_value);
      if (dirty & /*utxoData*/
      1 && t8_value !== (t8_value = /*utxo*/
      ctx2[15].vout + ""))
        set_data_dev(t8, t8_value);
      if (dirty & /*utxoData*/
      1 && a_href_value !== (a_href_value = explorerBtcTxUrl(
        /*utxo*/
        ctx2[15].txid
      ))) {
        attr_dev(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div3);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(91:6) {#each utxoData.utxos as utxo}",
    ctx
  });
  return block;
}
function create_fragment$2(ctx) {
  let div2;
  let div1;
  let label;
  let span0;
  let t0_value = (
    /*utxoData*/
    ctx[0].label + ""
  );
  let t0;
  let t1;
  let span1;
  let t2;
  let input;
  let t3;
  let div0;
  let t4_value = (
    /*utxoData*/
    ctx[0].info + ""
  );
  let t4;
  let t5;
  let t6;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (
      /*$sbtcConfig*/
      ctx2[4].userSettings.useOpDrop || /*utxoData*/
      ctx2[0].numbInputs > 0
    )
      return create_if_block_3;
    return create_else_block$1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type(ctx);
  let if_block1 = (
    /*showDebugInfo*/
    ctx[5] && create_if_block$1(ctx)
  );
  const block = {
    c: function create() {
      div2 = element("div");
      div1 = element("div");
      label = element("label");
      span0 = element("span");
      t0 = text(t0_value);
      t1 = space();
      span1 = element("span");
      t2 = space();
      input = element("input");
      t3 = space();
      div0 = element("div");
      t4 = text(t4_value);
      t5 = space();
      if_block0.c();
      t6 = space();
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l: function claim(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      label = claim_element(div1_nodes, "LABEL", { for: true, class: true });
      var label_nodes = children(label);
      span0 = claim_element(label_nodes, "SPAN", {});
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, t0_value);
      span0_nodes.forEach(detach_dev);
      t1 = claim_space(label_nodes);
      span1 = claim_element(label_nodes, "SPAN", {
        class: true,
        "data-bs-toggle": true,
        "data-bs-placement": true,
        "data-bs-custom-class": true,
        title: true
      });
      children(span1).forEach(detach_dev);
      label_nodes.forEach(detach_dev);
      t2 = claim_space(div1_nodes);
      input = claim_element(div1_nodes, "INPUT", {
        type: true,
        id: true,
        class: true,
        autocomplete: true
      });
      t3 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t4 = claim_text(div0_nodes, t4_value);
      div0_nodes.forEach(detach_dev);
      t5 = claim_space(div1_nodes);
      if_block0.l(div1_nodes);
      t6 = claim_space(div1_nodes);
      if (if_block1)
        if_block1.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(span0, file$2, 59, 6, 1675);
      attr_dev(span1, "class", "pointer text-info");
      attr_dev(span1, "data-bs-toggle", "tooltip-ftux");
      attr_dev(span1, "data-bs-placement", "top");
      attr_dev(span1, "data-bs-custom-class", "custom-tooltip");
      attr_dev(span1, "title", "Your bitcoin address. Funds you send from this wallet will be exchanged for sBTC");
      add_location(span1, file$2, 60, 6, 1711);
      attr_dev(label, "for", "transact-path");
      attr_dev(label, "class", "d-flex justify-content-between");
      add_location(label, file$2, 58, 4, 1602);
      attr_dev(input, "type", "text");
      attr_dev(input, "id", "from-address");
      attr_dev(input, "class", "form-control");
      attr_dev(input, "autocomplete", "off");
      add_location(input, file$2, 62, 4, 1949);
      attr_dev(div0, "class", "text-small");
      add_location(div0, file$2, 63, 4, 2100);
      attr_dev(div1, "class", "col");
      add_location(div1, file$2, 57, 2, 1580);
      attr_dev(div2, "class", "row");
      add_location(div2, file$2, 56, 0, 1560);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div2, anchor);
      append_hydration_dev(div2, div1);
      append_hydration_dev(div1, label);
      append_hydration_dev(label, span0);
      append_hydration_dev(span0, t0);
      append_hydration_dev(label, t1);
      append_hydration_dev(label, span1);
      append_hydration_dev(div1, t2);
      append_hydration_dev(div1, input);
      set_input_value(
        input,
        /*bitcoinAddress*/
        ctx[1]
      );
      append_hydration_dev(div1, t3);
      append_hydration_dev(div1, div0);
      append_hydration_dev(div0, t4);
      append_hydration_dev(div1, t5);
      if_block0.m(div1, null);
      append_hydration_dev(div1, t6);
      if (if_block1)
        if_block1.m(div1, null);
      if (!mounted) {
        dispose = [
          listen_dev(
            input,
            "input",
            /*input_input_handler*/
            ctx[9]
          ),
          listen_dev(
            input,
            "input",
            /*input_handler*/
            ctx[10],
            false,
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*utxoData*/
      1 && t0_value !== (t0_value = /*utxoData*/
      ctx2[0].label + ""))
        set_data_dev(t0, t0_value);
      if (dirty & /*bitcoinAddress*/
      2 && input.value !== /*bitcoinAddress*/
      ctx2[1]) {
        set_input_value(
          input,
          /*bitcoinAddress*/
          ctx2[1]
        );
      }
      if (dirty & /*utxoData*/
      1 && t4_value !== (t4_value = /*utxoData*/
      ctx2[0].info + ""))
        set_data_dev(t4, t4_value);
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block0) {
        if_block0.p(ctx2, dirty);
      } else {
        if_block0.d(1);
        if_block0 = current_block_type(ctx2);
        if (if_block0) {
          if_block0.c();
          if_block0.m(div1, t6);
        }
      }
      if (
        /*showDebugInfo*/
        ctx2[5]
      )
        if_block1.p(ctx2, dirty);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div2);
      if_block0.d();
      if (if_block1)
        if_block1.d();
      mounted = false;
      run_all(dispose);
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
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(4, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("UTXOSelection", slots, []);
  const dispatch = createEventDispatcher();
  let { utxoData = {
    label: "",
    info: "",
    utxos: [],
    maxCommit: 0,
    fromBtcAddress: void 0,
    numbInputs: 0,
    network: "testnet"
  } } = $$props;
  let bitcoinAddress = utxoData.fromBtcAddress;
  let errorReason;
  let showUtxos;
  let showDebugInfo = $sbtcConfig.userSettings.debugMode;
  const useWebWallet = async () => {
    $$invalidate(1, bitcoinAddress = addresses().cardinal);
    configureUTXOs();
  };
  const isWebWallet = async () => {
    return utxoData.fromBtcAddress === addresses().cardinal;
  };
  const configureUTXOs = async (force) => {
    $$invalidate(2, errorReason = void 0);
    if (!bitcoinAddress)
      return;
    try {
      isSupported(bitcoinAddress);
    } catch (err) {
      $$invalidate(1, bitcoinAddress = void 0);
      $$invalidate(2, errorReason = "Unsupported bitcoin address");
      return;
    }
    try {
      await dispatch("utxo_updated", {
        errored: false,
        opCode: "address-change",
        bitcoinAddress
      });
    } catch (err) {
      return;
    }
  };
  onMount(async () => {
    configureUTXOs();
  });
  const writable_props = ["utxoData"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<UTXOSelection> was created with unknown prop '${key}'`);
  });
  function input_input_handler() {
    bitcoinAddress = this.value;
    $$invalidate(1, bitcoinAddress);
  }
  const input_handler = () => configureUTXOs();
  const click_handler = () => useWebWallet();
  const click_handler_1 = () => configureUTXOs();
  const click_handler_2 = () => $$invalidate(3, showUtxos = !showUtxos);
  $$self.$$set = ($$props2) => {
    if ("utxoData" in $$props2)
      $$invalidate(0, utxoData = $$props2.utxoData);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    isSupported,
    onMount,
    addresses,
    truncate,
    explorerBtcTxUrl,
    explorerTxUrl,
    sbtcConfig,
    dispatch,
    utxoData,
    bitcoinAddress,
    errorReason,
    showUtxos,
    showDebugInfo,
    useWebWallet,
    isWebWallet,
    configureUTXOs,
    $sbtcConfig
  });
  $$self.$inject_state = ($$props2) => {
    if ("utxoData" in $$props2)
      $$invalidate(0, utxoData = $$props2.utxoData);
    if ("bitcoinAddress" in $$props2)
      $$invalidate(1, bitcoinAddress = $$props2.bitcoinAddress);
    if ("errorReason" in $$props2)
      $$invalidate(2, errorReason = $$props2.errorReason);
    if ("showUtxos" in $$props2)
      $$invalidate(3, showUtxos = $$props2.showUtxos);
    if ("showDebugInfo" in $$props2)
      $$invalidate(5, showDebugInfo = $$props2.showDebugInfo);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    utxoData,
    bitcoinAddress,
    errorReason,
    showUtxos,
    $sbtcConfig,
    showDebugInfo,
    useWebWallet,
    isWebWallet,
    configureUTXOs,
    input_input_handler,
    input_handler,
    click_handler,
    click_handler_1,
    click_handler_2
  ];
}
class UTXOSelection extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { utxoData: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "UTXOSelection",
      options,
      id: create_fragment$2.name
    });
  }
  get utxoData() {
    throw new Error("<UTXOSelection>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set utxoData(value) {
    throw new Error("<UTXOSelection>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const { console: console_1 } = globals;
const file$1 = "src/lib/components/common/SignTransactionWeb.svelte";
function create_if_block_1(ctx) {
  let div;
  let p;
  let t;
  const block = {
    c: function create() {
      div = element("div");
      p = element("p");
      t = text(
        /*errorReason*/
        ctx[4]
      );
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      p = claim_element(div_nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(
        p_nodes,
        /*errorReason*/
        ctx[4]
      );
      p_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p, file$1, 103, 4, 3684);
      attr_dev(div, "class", "my-5 text-center text-danger");
      add_location(div, file$1, 102, 2, 3637);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, p);
      append_hydration_dev(p, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*errorReason*/
      16)
        set_data_dev(
          t,
          /*errorReason*/
          ctx2[4]
        );
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(102:2) {#if errorReason}",
    ctx
  });
  return block;
}
function create_else_block(ctx) {
  let div;
  let button0;
  let t0;
  let t1;
  let button1;
  let t2;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div = element("div");
      button0 = element("button");
      t0 = text("Sign & Broadcast");
      t1 = space();
      button1 = element("button");
      t2 = text("Back");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      button0 = claim_element(div_nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      t0 = claim_text(button0_nodes, "Sign & Broadcast");
      button0_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      button1 = claim_element(div_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      t2 = claim_text(button1_nodes, "Back");
      button1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        button0,
        "class",
        /*btnClass*/
        ctx[8](false)
      );
      add_location(button0, file$1, 115, 4, 4077);
      attr_dev(
        button1,
        "class",
        /*btnClass*/
        ctx[8](true)
      );
      add_location(button1, file$1, 116, 4, 4174);
      attr_dev(div, "class", "d-flex justify-content-center my-5");
      add_location(div, file$1, 114, 2, 4024);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, button0);
      append_hydration_dev(button0, t0);
      append_hydration_dev(div, t1);
      append_hydration_dev(div, button1);
      append_hydration_dev(button1, t2);
      if (!mounted) {
        dispose = [
          listen_dev(
            button0,
            "click",
            /*click_handler*/
            ctx[9],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            button1,
            "click",
            /*click_handler_1*/
            ctx[10],
            false,
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(114:2) {:else}",
    ctx
  });
  return block;
}
function create_if_block(ctx) {
  let div;
  let p0;
  let t0;
  let a;
  let t1;
  let t2;
  let t3;
  let p1;
  let t4;
  const block = {
    c: function create() {
      div = element("div");
      p0 = element("p");
      t0 = text("Your transaction has been sent to the ");
      a = element("a");
      t1 = text("Bitcoin network");
      t2 = text(".");
      t3 = space();
      p1 = element("p");
      t4 = text("Once confirmed your sBTC will be minted to your Stacks Wallet.");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "Your transaction has been sent to the ");
      a = claim_element(p0_nodes, "A", { href: true, target: true, rel: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "Bitcoin network");
      a_nodes.forEach(detach_dev);
      t2 = claim_text(p0_nodes, ".");
      p0_nodes.forEach(detach_dev);
      t3 = claim_space(div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, "Once confirmed your sBTC will be minted to your Stacks Wallet.");
      p1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        a,
        "href",
        /*getExplorerUrl*/
        ctx[6]()
      );
      attr_dev(a, "target", "_blank");
      attr_dev(a, "rel", "noreferrer");
      add_location(a, file$1, 108, 45, 3833);
      add_location(p0, file$1, 108, 4, 3792);
      add_location(p1, file$1, 110, 4, 3927);
      attr_dev(div, "class", "my-5 text-center text-warning");
      add_location(div, file$1, 107, 2, 3744);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, p0);
      append_hydration_dev(p0, t0);
      append_hydration_dev(p0, a);
      append_hydration_dev(a, t1);
      append_hydration_dev(p0, t2);
      append_hydration_dev(div, t3);
      append_hydration_dev(div, p1);
      append_hydration_dev(p1, t4);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(107:2) {#if broadcasted}",
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let section0;
  let div;
  let h2;
  let t0;
  let t1;
  let peginfo;
  let t2;
  let section1;
  let t3;
  let current;
  peginfo = new PegInfo({
    props: {
      piTx: (
        /*piTx*/
        ctx[0]
      ),
      sigData: (
        /*sigData*/
        ctx[2]
      ),
      currentTx: (
        /*currentTx*/
        ctx[3]
      )
    },
    $$inline: true
  });
  peginfo.$on(
    "update_transaction",
    /*updateTransaction*/
    ctx[7]
  );
  let if_block0 = (
    /*errorReason*/
    ctx[4] && create_if_block_1(ctx)
  );
  function select_block_type(ctx2, dirty) {
    if (
      /*broadcasted*/
      ctx2[5]
    )
      return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block1 = current_block_type(ctx);
  const block = {
    c: function create() {
      section0 = element("section");
      div = element("div");
      h2 = element("h2");
      t0 = text("Step 2: Sign with Hiro Web Wallet");
      t1 = space();
      create_component(peginfo.$$.fragment);
      t2 = space();
      section1 = element("section");
      if (if_block0)
        if_block0.c();
      t3 = space();
      if_block1.c();
      this.h();
    },
    l: function claim(nodes) {
      section0 = claim_element(nodes, "SECTION", { class: true });
      var section0_nodes = children(section0);
      div = claim_element(section0_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      h2 = claim_element(div_nodes, "H2", {});
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, "Step 2: Sign with Hiro Web Wallet");
      h2_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      section0_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      claim_component(peginfo.$$.fragment, nodes);
      t2 = claim_space(nodes);
      section1 = claim_element(nodes, "SECTION", {});
      var section1_nodes = children(section1);
      if (if_block0)
        if_block0.l(section1_nodes);
      t3 = claim_space(section1_nodes);
      if_block1.l(section1_nodes);
      section1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(h2, file$1, 96, 4, 3460);
      attr_dev(div, "class", "d-flex justify-content-between");
      add_location(div, file$1, 95, 2, 3411);
      attr_dev(section0, "class", "mb-3");
      add_location(section0, file$1, 94, 0, 3386);
      add_location(section1, file$1, 100, 0, 3605);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, section0, anchor);
      append_hydration_dev(section0, div);
      append_hydration_dev(div, h2);
      append_hydration_dev(h2, t0);
      insert_hydration_dev(target, t1, anchor);
      mount_component(peginfo, target, anchor);
      insert_hydration_dev(target, t2, anchor);
      insert_hydration_dev(target, section1, anchor);
      if (if_block0)
        if_block0.m(section1, null);
      append_hydration_dev(section1, t3);
      if_block1.m(section1, null);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const peginfo_changes = {};
      if (dirty & /*piTx*/
      1)
        peginfo_changes.piTx = /*piTx*/
        ctx2[0];
      if (dirty & /*sigData*/
      4)
        peginfo_changes.sigData = /*sigData*/
        ctx2[2];
      if (dirty & /*currentTx*/
      8)
        peginfo_changes.currentTx = /*currentTx*/
        ctx2[3];
      peginfo.$set(peginfo_changes);
      if (
        /*errorReason*/
        ctx2[4]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_1(ctx2);
          if_block0.c();
          if_block0.m(section1, t3);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block1) {
        if_block1.p(ctx2, dirty);
      } else {
        if_block1.d(1);
        if_block1 = current_block_type(ctx2);
        if (if_block1) {
          if_block1.c();
          if_block1.m(section1, null);
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(peginfo.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(peginfo.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(section0);
      if (detaching)
        detach_dev(t1);
      destroy_component(peginfo, detaching);
      if (detaching)
        detach_dev(t2);
      if (detaching)
        detach_dev(section1);
      if (if_block0)
        if_block0.d();
      if_block1.d();
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
  var _a, _b;
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(12, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("SignTransactionWeb", slots, []);
  let { piTx } = $$props;
  const dispatch = createEventDispatcher();
  let sigData;
  let currentTx;
  let errorReason;
  const from = $sbtcConfig.pegIn ? (_a = $sbtcConfig == null ? void 0 : $sbtcConfig.pegInTransaction) == null ? void 0 : _a.fromBtcAddress : (_b = $sbtcConfig == null ? void 0 : $sbtcConfig.pegOutTransaction) == null ? void 0 : _b.fromBtcAddress;
  const getExplorerUrl = () => {
    return explorerBtcAddressUrl(from);
  };
  async function requestSignPsbt() {
    console.log(currentTx);
    openPsbtRequestPopup({
      hex: currentTx,
      appDetails: {
        name: "My App",
        icon: window.location.origin + "/my-app-logo.svg"
      },
      onFinish(data) {
        broadcastTransaction(data.hex);
      },
      onCancel() {
        console.log("User cancelled operation");
        return;
      }
    });
  }
  const updateTransaction = () => {
    dispatch("update_transaction", { success: true });
  };
  const btnClass = (bb) => {
    if ($sbtcConfig.pegIn) {
      return bb ? "mx-2 w-25 btn btn-outline-info" : "mx-2 w-25 btn btn-info";
    } else {
      return bb ? "mx-2 w-25 btn btn-outline-warning" : "mx-2 w-25 btn btn-warning";
    }
  };
  let resp;
  let broadcasted;
  const broadcastTransaction = async (psbtHex) => {
    let errMessage = void 0;
    try {
      const tx = Transaction.fromPSBT(hexToBytes(psbtHex));
      try {
        tx.finalize();
      } catch (err) {
        console.log("finalize error: ", err);
        $$invalidate(4, errorReason = "Unable to create the transaction - this can happen if your wallet is connected to a different account to the one your logged in with. Try hitting the 'back` button, switching account in the wallet and trying again?");
        return;
      }
      const txHex = hex.encode(tx.toBytes(true, tx.hasWitnesses));
      $$invalidate(3, currentTx = txHex);
      $$invalidate(4, errorReason = void 0);
      resp = await sendRawTxDirectMempool(txHex);
      if (resp && resp.error) {
        errMessage = resp.error;
        $$invalidate(5, broadcasted = false);
        $$invalidate(4, errorReason = resp.error + " Unable to broadcast transaction - please try hitting 'back' and refreshing the bitcoin input data.");
      } else {
        if ($sbtcConfig.pegIn) {
          const peginRequest = piTx.getOpDropPeginRequest("op_return", "web");
          await savePaymentRequest(peginRequest);
        }
        $$invalidate(5, broadcasted = true);
      }
    } catch (err) {
      $$invalidate(4, errorReason = errMessage + ". Unable to broadcast transaction - please try hitting 'back' and refreshing the bitcoin input data.");
    }
  };
  onMount(async () => {
    $$invalidate(2, sigData = {
      webWallet: true,
      pegin: $sbtcConfig.pegIn,
      outputsForDisplay: piTx == null ? void 0 : piTx.getOutputsForDisplay(),
      inputsForDisplay: piTx == null ? void 0 : piTx.addressInfo.utxos
    });
    $$invalidate(3, currentTx = hex.encode(piTx == null ? void 0 : piTx.buildOpReturnTransaction().toPSBT(2)));
  });
  $$self.$$.on_mount.push(function() {
    if (piTx === void 0 && !("piTx" in $$props || $$self.$$.bound[$$self.$$.props["piTx"]])) {
      console_1.warn("<SignTransactionWeb> was created without expected prop 'piTx'");
    }
  });
  const writable_props = ["piTx"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console_1.warn(`<SignTransactionWeb> was created with unknown prop '${key}'`);
  });
  const click_handler = () => requestSignPsbt();
  const click_handler_1 = () => updateTransaction();
  $$self.$$set = ($$props2) => {
    if ("piTx" in $$props2)
      $$invalidate(0, piTx = $$props2.piTx);
  };
  $$self.$capture_state = () => ({
    onMount,
    createEventDispatcher,
    hex,
    openPsbtRequestPopup,
    btc,
    hexToBytes,
    sendRawTxDirectMempool,
    PegInfo,
    sbtcConfig,
    explorerBtcAddressUrl,
    savePaymentRequest,
    piTx,
    dispatch,
    sigData,
    currentTx,
    errorReason,
    from,
    getExplorerUrl,
    requestSignPsbt,
    updateTransaction,
    btnClass,
    resp,
    broadcasted,
    broadcastTransaction,
    $sbtcConfig
  });
  $$self.$inject_state = ($$props2) => {
    if ("piTx" in $$props2)
      $$invalidate(0, piTx = $$props2.piTx);
    if ("sigData" in $$props2)
      $$invalidate(2, sigData = $$props2.sigData);
    if ("currentTx" in $$props2)
      $$invalidate(3, currentTx = $$props2.currentTx);
    if ("errorReason" in $$props2)
      $$invalidate(4, errorReason = $$props2.errorReason);
    if ("resp" in $$props2)
      resp = $$props2.resp;
    if ("broadcasted" in $$props2)
      $$invalidate(5, broadcasted = $$props2.broadcasted);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    piTx,
    requestSignPsbt,
    sigData,
    currentTx,
    errorReason,
    broadcasted,
    getExplorerUrl,
    updateTransaction,
    btnClass,
    click_handler,
    click_handler_1
  ];
}
class SignTransactionWeb extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { piTx: 0, requestSignPsbt: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SignTransactionWeb",
      options,
      id: create_fragment$1.name
    });
  }
  get piTx() {
    throw new Error("<SignTransactionWeb>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set piTx(value) {
    throw new Error("<SignTransactionWeb>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get requestSignPsbt() {
    return this.$$.ctx[1];
  }
  set requestSignPsbt(value) {
    throw new Error("<SignTransactionWeb>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
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
  FeeDisplay as F,
  Principal as P,
  SbtcWalletDisplay as S,
  UTXOSelection as U,
  SignTransactionWeb as a
};
