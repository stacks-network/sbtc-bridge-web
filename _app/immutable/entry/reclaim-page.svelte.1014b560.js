import { S as SvelteComponentDev, i as init$1, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a5 as createEventDispatcher, p as element, y as text, c as space, C as create_component, q as claim_element, r as children, z as claim_text, l as detach_dev, f as claim_space, D as claim_component, x as add_location, u as attr_dev, g as insert_hydration_dev, J as append_hydration_dev, V as set_input_value, E as mount_component, a6 as action_destroyer, L as listen_dev, A as set_data_dev, W as to_number, k as transition_in, h as transition_out, F as destroy_component, N as run_all, M as prevent_default, I as noop, o as onMount, a3 as validate_each_argument, a4 as destroy_each, G as validate_store, H as component_subscribe, P as globals, e as empty, B as group_outros, j as check_outros } from "../chunks/index.0c92228d.js";
import { s as sbtcConfig } from "../chunks/hmac.1e7e1fcb.js";
import { F as FeeDisplay, P as Principal, a as PegTransaction, b as assert, M as MAGIC_BYTES_TESTNET, c as MAGIC_BYTES_MAINNET, d as PEGIN_OPCODE, e as concatByteArrays, S as SbtcWalletDisplay, f as SignTransaction, g as SignTransactionWeb } from "../chunks/SbtcWalletDisplay.dc134d92.js";
import { i as isSupported, t as truncate, a as explorerBtcTxUrl, e as explorerTxUrl, b as explorerBtcAddressUrl, T as TEST_NETWORK, N as NETWORK, p as p2wpkh, h as hex, c as Transaction, s as secp256k1, S as Script, O as OutScript, A as Address, R as RawTx } from "../chunks/utils.7b5b399c.js";
import { a as addresses, e as utils, f as getPublicKey, h as schnorr, i as decodeStacksAddress } from "../chunks/stacks_connect.7f325cc2.js";
import { P as PegInTransaction } from "../chunks/PegInTransaction.391e46ac.js";
import { b as fetchAddressTransactions, c as fetchUtxoSet, d as fetchCurrentFeeRates } from "../chunks/bridge_api.fe1b21a1.js";
const file$3 = "src/lib/components/reclaim/TransactionId.svelte";
function create_if_block_1$3(ctx) {
  let span;
  let a;
  let t;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      span = element("span");
      a = element("a");
      t = text("set max");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {});
      var span_nodes = children(span);
      a = claim_element(span_nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      t = claim_text(a_nodes, "set max");
      a_nodes.forEach(detach_dev);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", "/");
      attr_dev(a, "class", "");
      add_location(a, file$3, 44, 36, 1936);
      add_location(span, file$3, 44, 30, 1930);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, span, anchor);
      append_hydration_dev(span, a);
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
        detach_dev(span);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$3.name,
    type: "if",
    source: "(45:6) {#if amtData.change > 0}",
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
        /*errorReason*/
        ctx[1]
      );
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t = claim_text(
        div_nodes,
        /*errorReason*/
        ctx[1]
      );
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "text-danger");
      add_location(div, file$3, 46, 21, 2063);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*errorReason*/
      2)
        set_data_dev(
          t,
          /*errorReason*/
          ctx2[1]
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
    source: "(47:4) {#if errorReason}",
    ctx
  });
  return block;
}
function create_fragment$3(ctx) {
  let div3;
  let div2;
  let label;
  let span0;
  let t0_value = (
    /*amtData*/
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
    /*amtData*/
    ctx[0].info + ""
  );
  let t4;
  let t5;
  let div1;
  let t6;
  let t7;
  let feedisplay;
  let current;
  let mounted;
  let dispose;
  let if_block0 = (
    /*amtData*/
    ctx[0].change > 0 && create_if_block_1$3(ctx)
  );
  let if_block1 = (
    /*errorReason*/
    ctx[1] && create_if_block$3(ctx)
  );
  feedisplay = new FeeDisplay({
    props: {
      amtData: (
        /*amtData*/
        ctx[0]
      ),
      currentPeg: (
        /*pegAmount*/
        ctx[2]
      )
    },
    $$inline: true
  });
  feedisplay.$on(
    "fee_rate_updated",
    /*changeRate*/
    ctx[4]
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
      div0 = element("div");
      t4 = text(t4_value);
      t5 = space();
      div1 = element("div");
      if (if_block0)
        if_block0.c();
      t6 = space();
      if (if_block1)
        if_block1.c();
      t7 = space();
      create_component(feedisplay.$$.fragment);
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
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t4 = claim_text(div0_nodes, t4_value);
      div0_nodes.forEach(detach_dev);
      t5 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if (if_block0)
        if_block0.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      t6 = claim_space(div2_nodes);
      if (if_block1)
        if_block1.l(div2_nodes);
      t7 = claim_space(div2_nodes);
      claim_component(feedisplay.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(span0, file$3, 38, 6, 1295);
      attr_dev(span1, "class", "pointer text-info");
      attr_dev(span1, "data-bs-toggle", "tooltip-ftux");
      attr_dev(span1, "data-bs-placement", "top");
      attr_dev(span1, "data-bs-custom-class", "custom-tooltip");
      attr_dev(span1, "title", "The amount of Bitcoin you want to swap for sBTC. The bitcoin is locked in the protocol and you convert your sBTC back to Bitcoin when you peg out.");
      add_location(span1, file$3, 39, 6, 1330);
      attr_dev(label, "for", "transact-path");
      attr_dev(label, "class", "d-flex justify-content-between");
      add_location(label, file$3, 37, 4, 1222);
      attr_dev(input, "type", "number");
      attr_dev(input, "id", "from-address");
      attr_dev(input, "class", "form-control");
      attr_dev(input, "autocomplete", "off");
      add_location(input, file$3, 41, 4, 1634);
      attr_dev(div0, "class", "text-small");
      add_location(div0, file$3, 42, 4, 1788);
      attr_dev(div1, "class", "text-small d-flex justify-content-end text-info");
      add_location(div1, file$3, 43, 4, 1837);
      attr_dev(div2, "class", "col-12");
      add_location(div2, file$3, 36, 2, 1197);
      attr_dev(div3, "class", "row");
      add_location(div3, file$3, 35, 0, 1177);
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
        /*pegAmount*/
        ctx[2]
      );
      append_hydration_dev(div2, t3);
      append_hydration_dev(div2, div0);
      append_hydration_dev(div0, t4);
      append_hydration_dev(div2, t5);
      append_hydration_dev(div2, div1);
      if (if_block0)
        if_block0.m(div1, null);
      append_hydration_dev(div2, t6);
      if (if_block1)
        if_block1.m(div2, null);
      append_hydration_dev(div2, t7);
      mount_component(feedisplay, div2, null);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(init.call(null, input)),
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
      if ((!current || dirty & /*amtData*/
      1) && t0_value !== (t0_value = /*amtData*/
      ctx2[0].label + ""))
        set_data_dev(t0, t0_value);
      if (dirty & /*pegAmount*/
      4 && to_number(input.value) !== /*pegAmount*/
      ctx2[2]) {
        set_input_value(
          input,
          /*pegAmount*/
          ctx2[2]
        );
      }
      if ((!current || dirty & /*amtData*/
      1) && t4_value !== (t4_value = /*amtData*/
      ctx2[0].info + ""))
        set_data_dev(t4, t4_value);
      if (
        /*amtData*/
        ctx2[0].change > 0
      ) {
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
        /*errorReason*/
        ctx2[1]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block$3(ctx2);
          if_block1.c();
          if_block1.m(div2, t7);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      const feedisplay_changes = {};
      if (dirty & /*amtData*/
      1)
        feedisplay_changes.amtData = /*amtData*/
        ctx2[0];
      if (dirty & /*pegAmount*/
      4)
        feedisplay_changes.currentPeg = /*pegAmount*/
        ctx2[2];
      feedisplay.$set(feedisplay_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(feedisplay.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(feedisplay.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div3);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      destroy_component(feedisplay);
      mounted = false;
      run_all(dispose);
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
function init(el) {
  el.focus();
}
function instance$3($$self, $$props, $$invalidate) {
  let low;
  let medium;
  let high;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("TransactionId", slots, []);
  let { amtData } = $$props;
  const dispatch = createEventDispatcher();
  let errorReason;
  let pegAmount = amtData.pegAmount;
  const changePegIn = (maxValue) => {
    $$invalidate(1, errorReason = void 0);
    try {
      if (pegAmount > amtData.maxCommit) {
        $$invalidate(1, errorReason = "Can't wrap more btc than available.");
        return;
      }
      if (maxValue) {
        $$invalidate(2, pegAmount = amtData.maxCommit - amtData.fee);
      }
      const rate = amtData.fees.find((o) => o === amtData.fee);
      dispatch("amount_updated", {
        opCode: "user",
        error: false,
        newAmount: pegAmount,
        newFeeRate: rate
      });
    } catch (err) {
      $$invalidate(1, errorReason = err || "Amount is not valid");
    }
  };
  const changeRate = (event) => {
    const rate = event.detail.newFeeRate;
    dispatch("amount_updated", {
      opCode: "prio",
      error: false,
      newAmount: pegAmount,
      newFeeRate: rate
    });
  };
  $$self.$$.on_mount.push(function() {
    if (amtData === void 0 && !("amtData" in $$props || $$self.$$.bound[$$self.$$.props["amtData"]])) {
      console.warn("<TransactionId> was created without expected prop 'amtData'");
    }
  });
  const writable_props = ["amtData"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<TransactionId> was created with unknown prop '${key}'`);
  });
  function input_input_handler() {
    pegAmount = to_number(this.value);
    $$invalidate(2, pegAmount);
  }
  const input_handler = () => changePegIn(false);
  const click_handler = () => changePegIn(true);
  $$self.$$set = ($$props2) => {
    if ("amtData" in $$props2)
      $$invalidate(0, amtData = $$props2.amtData);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    FeeDisplay,
    amtData,
    dispatch,
    errorReason,
    pegAmount,
    changePegIn,
    changeRate,
    init,
    high,
    medium,
    low
  });
  $$self.$inject_state = ($$props2) => {
    if ("amtData" in $$props2)
      $$invalidate(0, amtData = $$props2.amtData);
    if ("errorReason" in $$props2)
      $$invalidate(1, errorReason = $$props2.errorReason);
    if ("pegAmount" in $$props2)
      $$invalidate(2, pegAmount = $$props2.pegAmount);
    if ("high" in $$props2)
      high = $$props2.high;
    if ("medium" in $$props2)
      medium = $$props2.medium;
    if ("low" in $$props2)
      low = $$props2.low;
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*amtData*/
    1) {
      low = amtData.fee === amtData.fees[0];
    }
    if ($$self.$$.dirty & /*amtData*/
    1) {
      medium = amtData.fee === amtData.fees[1];
    }
    if ($$self.$$.dirty & /*amtData*/
    1) {
      high = amtData.fee === amtData.fees[2];
    }
  };
  return [
    amtData,
    errorReason,
    pegAmount,
    changePegIn,
    changeRate,
    input_input_handler,
    input_handler,
    click_handler
  ];
}
class TransactionId extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init$1(this, options, instance$3, create_fragment$3, safe_not_equal, { amtData: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "TransactionId",
      options,
      id: create_fragment$3.name
    });
  }
  get amtData() {
    throw new Error("<TransactionId>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set amtData(value) {
    throw new Error("<TransactionId>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$2 = "src/lib/components/reclaim/AddressTransactions.svelte";
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[12] = list[i];
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
      add_location(span, file$2, 69, 11, 2644);
      add_location(div, file$2, 69, 6, 2639);
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
    source: "(69:4) {:else}",
    ctx
  });
  return block;
}
function create_if_block_2$2(ctx) {
  let div2;
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
  let div1;
  let a0;
  let t4;
  let t5;
  let a1;
  let t6;
  let t7;
  let a2;
  let t8;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div2 = element("div");
      div0 = element("div");
      t0 = text("BTC Balance ");
      t1 = text(t1_value);
      t2 = text(" Sats.");
      t3 = space();
      div1 = element("div");
      a0 = element("a");
      t4 = text("hiro wallet");
      t5 = space();
      a1 = element("a");
      t6 = text("refresh");
      t7 = space();
      a2 = element("a");
      t8 = text("details");
      this.h();
    },
    l: function claim(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true, title: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "BTC Balance ");
      t1 = claim_text(div0_nodes, t1_value);
      t2 = claim_text(div0_nodes, " Sats.");
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {});
      var div1_nodes = children(div1);
      a0 = claim_element(div1_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      t4 = claim_text(a0_nodes, "hiro wallet");
      a0_nodes.forEach(detach_dev);
      t5 = claim_space(div1_nodes);
      a1 = claim_element(div1_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      t6 = claim_text(a1_nodes, "refresh");
      a1_nodes.forEach(detach_dev);
      t7 = claim_space(div1_nodes);
      a2 = claim_element(div1_nodes, "A", { href: true, class: true });
      var a2_nodes = children(a2);
      t8 = claim_text(a2_nodes, "details");
      a2_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "");
      attr_dev(div0, "title", div0_title_value = /*utxoData*/
      ctx[0].numbInputs + " unspent inputs with total value: " + /*utxoData*/
      ctx[0].maxCommit);
      add_location(div0, file$2, 61, 6, 2086);
      attr_dev(a0, "href", "/");
      attr_dev(a0, "class", "text-white px-3 border-right");
      add_location(a0, file$2, 63, 8, 2253);
      attr_dev(a1, "href", "/");
      attr_dev(a1, "class", "text-white px-3 border-right");
      add_location(a1, file$2, 64, 8, 2371);
      attr_dev(a2, "href", "/");
      attr_dev(a2, "class", "text-white ps-3 ");
      add_location(a2, file$2, 65, 8, 2493);
      add_location(div1, file$2, 62, 6, 2239);
      attr_dev(div2, "class", "text-small d-flex justify-content-between text-info");
      add_location(div2, file$2, 60, 4, 2013);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div2, anchor);
      append_hydration_dev(div2, div0);
      append_hydration_dev(div0, t0);
      append_hydration_dev(div0, t1);
      append_hydration_dev(div0, t2);
      append_hydration_dev(div2, t3);
      append_hydration_dev(div2, div1);
      append_hydration_dev(div1, a0);
      append_hydration_dev(a0, t4);
      append_hydration_dev(div1, t5);
      append_hydration_dev(div1, a1);
      append_hydration_dev(a1, t6);
      append_hydration_dev(div1, t7);
      append_hydration_dev(div1, a2);
      append_hydration_dev(a2, t8);
      if (!mounted) {
        dispose = [
          listen_dev(a0, "click", prevent_default(
            /*click_handler*/
            ctx[8]
          ), false, true, false, false),
          listen_dev(a1, "click", prevent_default(
            /*click_handler_1*/
            ctx[9]
          ), false, true, false, false),
          listen_dev(a2, "click", prevent_default(
            /*click_handler_2*/
            ctx[10]
          ), false, true, false, false)
        ];
        mounted = true;
      }
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
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div2);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2$2.name,
    type: "if",
    source: "(60:4) {#if utxoData.numbInputs > 0}",
    ctx
  });
  return block;
}
function create_if_block_1$2(ctx) {
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
      add_location(span, file$2, 72, 11, 2807);
      add_location(div, file$2, 72, 6, 2802);
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
    id: create_if_block_1$2.name,
    type: "if",
    source: "(72:4) {#if bitcoinAddress && errorReason}",
    ctx
  });
  return block;
}
function create_if_block$2(ctx) {
  let div5;
  let div4;
  let div0;
  let span0;
  let t0;
  let t1;
  let div1;
  let span1;
  let t2;
  let t3;
  let div2;
  let span2;
  let t4;
  let t5;
  let div3;
  let span3;
  let t6;
  let t7;
  let each_value = (
    /*utxoData*/
    ctx[0].utxos
  );
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  const block = {
    c: function create() {
      div5 = element("div");
      div4 = element("div");
      div0 = element("div");
      span0 = element("span");
      t0 = text("Vout");
      t1 = space();
      div1 = element("div");
      span1 = element("span");
      t2 = text("Sats.");
      t3 = space();
      div2 = element("div");
      span2 = element("span");
      t4 = text("Confs.");
      t5 = space();
      div3 = element("div");
      span3 = element("span");
      t6 = text("Txid");
      t7 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l: function claim(nodes) {
      div5 = claim_element(nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      span0 = claim_element(div0_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, "Vout");
      span0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(div4_nodes);
      div1 = claim_element(div4_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      span1 = claim_element(div1_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t2 = claim_text(span1_nodes, "Sats.");
      span1_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t3 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      span2 = claim_element(div2_nodes, "SPAN", { class: true });
      var span2_nodes = children(span2);
      t4 = claim_text(span2_nodes, "Confs.");
      span2_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t5 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      span3 = claim_element(div3_nodes, "SPAN", { class: true });
      var span3_nodes = children(span3);
      t6 = claim_text(span3_nodes, "Txid");
      span3_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      t7 = claim_space(div5_nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div5_nodes);
      }
      div5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span0, "class", "text-warning");
      add_location(span0, file$2, 77, 25, 2976);
      attr_dev(div0, "class", "col-2");
      add_location(div0, file$2, 77, 6, 2957);
      attr_dev(span1, "class", "text-warning");
      add_location(span1, file$2, 78, 25, 3046);
      attr_dev(div1, "class", "col-2");
      add_location(div1, file$2, 78, 6, 3027);
      attr_dev(span2, "class", "text-warning");
      add_location(span2, file$2, 79, 25, 3117);
      attr_dev(div2, "class", "col-2");
      add_location(div2, file$2, 79, 6, 3098);
      attr_dev(span3, "class", "text-warning");
      add_location(span3, file$2, 80, 25, 3189);
      attr_dev(div3, "class", "col-6");
      add_location(div3, file$2, 80, 6, 3170);
      attr_dev(div4, "class", "row");
      add_location(div4, file$2, 76, 4, 2933);
      attr_dev(div5, "class", "mt-3 mb-4 mx-0 px-0");
      add_location(div5, file$2, 75, 4, 2895);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div5, anchor);
      append_hydration_dev(div5, div4);
      append_hydration_dev(div4, div0);
      append_hydration_dev(div0, span0);
      append_hydration_dev(span0, t0);
      append_hydration_dev(div4, t1);
      append_hydration_dev(div4, div1);
      append_hydration_dev(div1, span1);
      append_hydration_dev(span1, t2);
      append_hydration_dev(div4, t3);
      append_hydration_dev(div4, div2);
      append_hydration_dev(div2, span2);
      append_hydration_dev(span2, t4);
      append_hydration_dev(div4, t5);
      append_hydration_dev(div4, div3);
      append_hydration_dev(div3, span3);
      append_hydration_dev(span3, t6);
      append_hydration_dev(div5, t7);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div5, null);
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
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div5, null);
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
        detach_dev(div5);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$2.name,
    type: "if",
    source: "(75:4) {#if showUtxos}",
    ctx
  });
  return block;
}
function create_each_block$1(ctx) {
  let div4;
  let div0;
  let span0;
  let t0_value = (
    /*utxo*/
    ctx[12].vout + ""
  );
  let t0;
  let t1;
  let div1;
  let span1;
  let t2_value = (
    /*utxo*/
    ctx[12].value + ""
  );
  let t2;
  let t3;
  let div2;
  let span2;
  let t4_value = (
    /*utxo*/
    ctx[12].tx.confirmations + ""
  );
  let t4;
  let t5;
  let t6_value = (
    /*utxo*/
    ctx[12].tx.confirmations < 6 ? "(of 6)" : ""
  );
  let t6;
  let span2_class_value;
  let t7;
  let div3;
  let span3;
  let a;
  let t8_value = truncate(
    /*utxo*/
    ctx[12].txid,
    10
  ) + "";
  let t8;
  let a_href_value;
  let t9;
  const block = {
    c: function create() {
      div4 = element("div");
      div0 = element("div");
      span0 = element("span");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      span1 = element("span");
      t2 = text(t2_value);
      t3 = space();
      div2 = element("div");
      span2 = element("span");
      t4 = text(t4_value);
      t5 = space();
      t6 = text(t6_value);
      t7 = space();
      div3 = element("div");
      span3 = element("span");
      a = element("a");
      t8 = text(t8_value);
      t9 = space();
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      span0 = claim_element(div0_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, t0_value);
      span0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(div4_nodes);
      div1 = claim_element(div4_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      span1 = claim_element(div1_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t2 = claim_text(span1_nodes, t2_value);
      span1_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t3 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      span2 = claim_element(div2_nodes, "SPAN", { class: true });
      var span2_nodes = children(span2);
      t4 = claim_text(span2_nodes, t4_value);
      t5 = claim_space(span2_nodes);
      t6 = claim_text(span2_nodes, t6_value);
      span2_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t7 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      span3 = claim_element(div3_nodes, "SPAN", { class: true });
      var span3_nodes = children(span3);
      a = claim_element(span3_nodes, "A", { href: true, target: true, rel: true });
      var a_nodes = children(a);
      t8 = claim_text(a_nodes, t8_value);
      a_nodes.forEach(detach_dev);
      span3_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t9 = claim_space(div4_nodes);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span0, "class", "");
      add_location(span0, file$2, 84, 25, 3349);
      attr_dev(div0, "class", "col-2");
      add_location(div0, file$2, 84, 6, 3330);
      attr_dev(span1, "class", "");
      add_location(span1, file$2, 85, 25, 3414);
      attr_dev(div1, "class", "col-2");
      add_location(div1, file$2, 85, 6, 3395);
      attr_dev(span2, "class", span2_class_value = /*utxo*/
      ctx[12].tx.confirmations < 6 ? "text-warning" : "text-success");
      add_location(span2, file$2, 86, 25, 3480);
      attr_dev(div2, "class", "col-2");
      add_location(div2, file$2, 86, 6, 3461);
      attr_dev(a, "href", a_href_value = explorerBtcTxUrl(
        /*utxo*/
        ctx[12].txid
      ));
      attr_dev(a, "target", "_blank");
      attr_dev(a, "rel", "noreferrer");
      add_location(a, file$2, 87, 40, 3679);
      attr_dev(span3, "class", "");
      add_location(span3, file$2, 87, 25, 3664);
      attr_dev(div3, "class", "col-6");
      add_location(div3, file$2, 87, 6, 3645);
      attr_dev(div4, "class", "row text-white text-small");
      add_location(div4, file$2, 83, 4, 3284);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div4, anchor);
      append_hydration_dev(div4, div0);
      append_hydration_dev(div0, span0);
      append_hydration_dev(span0, t0);
      append_hydration_dev(div4, t1);
      append_hydration_dev(div4, div1);
      append_hydration_dev(div1, span1);
      append_hydration_dev(span1, t2);
      append_hydration_dev(div4, t3);
      append_hydration_dev(div4, div2);
      append_hydration_dev(div2, span2);
      append_hydration_dev(span2, t4);
      append_hydration_dev(span2, t5);
      append_hydration_dev(span2, t6);
      append_hydration_dev(div4, t7);
      append_hydration_dev(div4, div3);
      append_hydration_dev(div3, span3);
      append_hydration_dev(span3, a);
      append_hydration_dev(a, t8);
      append_hydration_dev(div4, t9);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*utxoData*/
      1 && t0_value !== (t0_value = /*utxo*/
      ctx2[12].vout + ""))
        set_data_dev(t0, t0_value);
      if (dirty & /*utxoData*/
      1 && t2_value !== (t2_value = /*utxo*/
      ctx2[12].value + ""))
        set_data_dev(t2, t2_value);
      if (dirty & /*utxoData*/
      1 && t4_value !== (t4_value = /*utxo*/
      ctx2[12].tx.confirmations + ""))
        set_data_dev(t4, t4_value);
      if (dirty & /*utxoData*/
      1 && t6_value !== (t6_value = /*utxo*/
      ctx2[12].tx.confirmations < 6 ? "(of 6)" : ""))
        set_data_dev(t6, t6_value);
      if (dirty & /*utxoData*/
      1 && span2_class_value !== (span2_class_value = /*utxo*/
      ctx2[12].tx.confirmations < 6 ? "text-warning" : "text-success")) {
        attr_dev(span2, "class", span2_class_value);
      }
      if (dirty & /*utxoData*/
      1 && t8_value !== (t8_value = truncate(
        /*utxo*/
        ctx2[12].txid,
        10
      ) + ""))
        set_data_dev(t8, t8_value);
      if (dirty & /*utxoData*/
      1 && a_href_value !== (a_href_value = explorerBtcTxUrl(
        /*utxo*/
        ctx2[12].txid
      ))) {
        attr_dev(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div4);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block$1.name,
    type: "each",
    source: "(83:4) {#each utxoData.utxos as utxo}",
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
  let t7;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (
      /*utxoData*/
      ctx2[0].numbInputs > 0
    )
      return create_if_block_2$2;
    return create_else_block$1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type(ctx);
  let if_block1 = (
    /*bitcoinAddress*/
    ctx[1] && /*errorReason*/
    ctx[2] && create_if_block_1$2(ctx)
  );
  let if_block2 = (
    /*showUtxos*/
    ctx[3] && create_if_block$2(ctx)
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
      t7 = space();
      if (if_block2)
        if_block2.c();
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
      t7 = claim_space(div1_nodes);
      if (if_block2)
        if_block2.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(span0, file$2, 54, 6, 1504);
      attr_dev(span1, "class", "pointer text-info");
      attr_dev(span1, "data-bs-toggle", "tooltip-ftux");
      attr_dev(span1, "data-bs-placement", "top");
      attr_dev(span1, "data-bs-custom-class", "custom-tooltip");
      attr_dev(span1, "title", "Your bitcoin address. Funds you send from this wallet will be exchanged for sBTC");
      add_location(span1, file$2, 55, 6, 1540);
      attr_dev(label, "for", "transact-path");
      attr_dev(label, "class", "d-flex justify-content-between");
      add_location(label, file$2, 53, 4, 1431);
      attr_dev(input, "type", "text");
      attr_dev(input, "id", "from-address");
      attr_dev(input, "class", "form-control");
      attr_dev(input, "autocomplete", "off");
      add_location(input, file$2, 57, 4, 1778);
      attr_dev(div0, "class", "text-small");
      add_location(div0, file$2, 58, 4, 1929);
      attr_dev(div1, "class", "col");
      add_location(div1, file$2, 52, 2, 1409);
      attr_dev(div2, "class", "row");
      add_location(div2, file$2, 51, 0, 1389);
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
      append_hydration_dev(div1, t7);
      if (if_block2)
        if_block2.m(div1, null);
      if (!mounted) {
        dispose = [
          listen_dev(
            input,
            "input",
            /*input_input_handler*/
            ctx[6]
          ),
          listen_dev(
            input,
            "input",
            /*input_handler*/
            ctx[7],
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
        /*bitcoinAddress*/
        ctx2[1] && /*errorReason*/
        ctx2[2]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_1$2(ctx2);
          if_block1.c();
          if_block1.m(div1, t7);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (
        /*showUtxos*/
        ctx2[3]
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block$2(ctx2);
          if_block2.c();
          if_block2.m(div1, null);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div2);
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
    block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$2($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("AddressTransactions", slots, []);
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
  const hiroWallet = async () => {
    $$invalidate(1, bitcoinAddress = addresses().cardinal);
    configureUTXOs();
  };
  const configureUTXOs = async (force) => {
    $$invalidate(2, errorReason = void 0);
    if (!bitcoinAddress)
      return;
    try {
      isSupported(bitcoinAddress);
    } catch (err) {
      $$invalidate(1, bitcoinAddress = void 0);
      $$invalidate(2, errorReason = "Insufficient balance - please use a different bitcoin address");
      return;
    }
    try {
      await dispatch("utxo_updated", {
        errored: false,
        opCode: "address-change",
        bitcoinAddress
      });
    } catch (err) {
      $$invalidate(2, errorReason = "Insufficient balance - please use a different bitcoin address");
      return;
    }
  };
  onMount(async () => {
    configureUTXOs();
  });
  const writable_props = ["utxoData"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<AddressTransactions> was created with unknown prop '${key}'`);
  });
  function input_input_handler() {
    bitcoinAddress = this.value;
    $$invalidate(1, bitcoinAddress);
  }
  const input_handler = () => configureUTXOs();
  const click_handler = () => hiroWallet();
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
    dispatch,
    utxoData,
    bitcoinAddress,
    errorReason,
    showUtxos,
    hiroWallet,
    configureUTXOs
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
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    utxoData,
    bitcoinAddress,
    errorReason,
    showUtxos,
    hiroWallet,
    configureUTXOs,
    input_input_handler,
    input_handler,
    click_handler,
    click_handler_1,
    click_handler_2
  ];
}
class AddressTransactions extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init$1(this, options, instance$2, create_fragment$2, safe_not_equal, { utxoData: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "AddressTransactions",
      options,
      id: create_fragment$2.name
    });
  }
  get utxoData() {
    throw new Error("<AddressTransactions>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set utxoData(value) {
    throw new Error("<AddressTransactions>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const BuildTransaction_svelte_svelte_type_style_lang = "";
const { console: console_1 } = globals;
const file$1 = "src/lib/components/reclaim/BuildTransaction.svelte";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[25] = list[i];
  return child_ctx;
}
function create_if_block$1(ctx) {
  let div0;
  let addresstransactions;
  let t0;
  let div6;
  let div5;
  let div1;
  let span0;
  let t1;
  let t2;
  let div2;
  let span1;
  let t3;
  let t4;
  let div3;
  let span2;
  let t5;
  let t6;
  let div4;
  let span3;
  let t7;
  let t8;
  let t9;
  let t10;
  let t11;
  let t12;
  let if_block3_anchor;
  let current;
  addresstransactions = new AddressTransactions({
    props: { utxoData: (
      /*utxoData*/
      ctx[7]
    ) },
    $$inline: true
  });
  addresstransactions.$on(
    "utxo_updated",
    /*utxoUpdated*/
    ctx[13]
  );
  let each_value = (
    /*txs*/
    ctx[2]
  );
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  let if_block0 = (
    /*showStxAddress*/
    ctx[6] && create_if_block_4(ctx)
  );
  let if_block1 = (
    /*showAmount*/
    ctx[5] && create_if_block_3(ctx)
  );
  let if_block2 = (
    /*errorReason*/
    ctx[0] && create_if_block_2$1(ctx)
  );
  let if_block3 = (
    /*showButton*/
    ctx[4] && create_if_block_1$1(ctx)
  );
  const block = {
    c: function create() {
      div0 = element("div");
      create_component(addresstransactions.$$.fragment);
      t0 = space();
      div6 = element("div");
      div5 = element("div");
      div1 = element("div");
      span0 = element("span");
      t1 = text("Vout");
      t2 = space();
      div2 = element("div");
      span1 = element("span");
      t3 = text("Sats.");
      t4 = space();
      div3 = element("div");
      span2 = element("span");
      t5 = text("Confs.");
      t6 = space();
      div4 = element("div");
      span3 = element("span");
      t7 = text("Txid");
      t8 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t9 = space();
      if (if_block0)
        if_block0.c();
      t10 = space();
      if (if_block1)
        if_block1.c();
      t11 = space();
      if (if_block2)
        if_block2.c();
      t12 = space();
      if (if_block3)
        if_block3.c();
      if_block3_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      div0 = claim_element(nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(addresstransactions.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div6 = claim_element(nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      div5 = claim_element(div6_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div1 = claim_element(div5_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      span0 = claim_element(div1_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t1 = claim_text(span0_nodes, "Vout");
      span0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t2 = claim_space(div5_nodes);
      div2 = claim_element(div5_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      span1 = claim_element(div2_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t3 = claim_text(span1_nodes, "Sats.");
      span1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t4 = claim_space(div5_nodes);
      div3 = claim_element(div5_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      span2 = claim_element(div3_nodes, "SPAN", { class: true });
      var span2_nodes = children(span2);
      t5 = claim_text(span2_nodes, "Confs.");
      span2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t6 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      span3 = claim_element(div4_nodes, "SPAN", { class: true });
      var span3_nodes = children(span3);
      t7 = claim_text(span3_nodes, "Txid");
      span3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t8 = claim_space(div6_nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div6_nodes);
      }
      div6_nodes.forEach(detach_dev);
      t9 = claim_space(nodes);
      if (if_block0)
        if_block0.l(nodes);
      t10 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      t11 = claim_space(nodes);
      if (if_block2)
        if_block2.l(nodes);
      t12 = claim_space(nodes);
      if (if_block3)
        if_block3.l(nodes);
      if_block3_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "mb-4");
      add_location(div0, file$1, 137, 2, 4820);
      attr_dev(span0, "class", "text-warning");
      add_location(span0, file$1, 141, 25, 4993);
      attr_dev(div1, "class", "col-2");
      add_location(div1, file$1, 141, 6, 4974);
      attr_dev(span1, "class", "text-warning");
      add_location(span1, file$1, 142, 25, 5063);
      attr_dev(div2, "class", "col-2");
      add_location(div2, file$1, 142, 6, 5044);
      attr_dev(span2, "class", "text-warning");
      add_location(span2, file$1, 143, 25, 5134);
      attr_dev(div3, "class", "col-2");
      add_location(div3, file$1, 143, 6, 5115);
      attr_dev(span3, "class", "text-warning");
      add_location(span3, file$1, 144, 25, 5206);
      attr_dev(div4, "class", "col-6");
      add_location(div4, file$1, 144, 6, 5187);
      attr_dev(div5, "class", "row s-2tHUg2sA72wI");
      add_location(div5, file$1, 140, 4, 4950);
      attr_dev(div6, "class", "mt-3 mb-4 mx-0 px-0");
      add_location(div6, file$1, 139, 2, 4912);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div0, anchor);
      mount_component(addresstransactions, div0, null);
      insert_hydration_dev(target, t0, anchor);
      insert_hydration_dev(target, div6, anchor);
      append_hydration_dev(div6, div5);
      append_hydration_dev(div5, div1);
      append_hydration_dev(div1, span0);
      append_hydration_dev(span0, t1);
      append_hydration_dev(div5, t2);
      append_hydration_dev(div5, div2);
      append_hydration_dev(div2, span1);
      append_hydration_dev(span1, t3);
      append_hydration_dev(div5, t4);
      append_hydration_dev(div5, div3);
      append_hydration_dev(div3, span2);
      append_hydration_dev(span2, t5);
      append_hydration_dev(div5, t6);
      append_hydration_dev(div5, div4);
      append_hydration_dev(div4, span3);
      append_hydration_dev(span3, t7);
      append_hydration_dev(div6, t8);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div6, null);
        }
      }
      insert_hydration_dev(target, t9, anchor);
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration_dev(target, t10, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration_dev(target, t11, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert_hydration_dev(target, t12, anchor);
      if (if_block3)
        if_block3.m(target, anchor);
      insert_hydration_dev(target, if_block3_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const addresstransactions_changes = {};
      if (dirty & /*utxoData*/
      128)
        addresstransactions_changes.utxoData = /*utxoData*/
        ctx2[7];
      addresstransactions.$set(addresstransactions_changes);
      if (dirty & /*explorerBtcTxUrl, txs, truncate*/
      4) {
        each_value = /*txs*/
        ctx2[2];
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div6, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (
        /*showStxAddress*/
        ctx2[6]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*showStxAddress*/
          64) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_4(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t10.parentNode, t10);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*showAmount*/
        ctx2[5]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*showAmount*/
          32) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_3(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(t11.parentNode, t11);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (
        /*errorReason*/
        ctx2[0]
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block_2$1(ctx2);
          if_block2.c();
          if_block2.m(t12.parentNode, t12);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
      if (
        /*showButton*/
        ctx2[4]
      ) {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
        } else {
          if_block3 = create_if_block_1$1(ctx2);
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
      transition_in(addresstransactions.$$.fragment, local);
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o: function outro(local) {
      transition_out(addresstransactions.$$.fragment, local);
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div0);
      destroy_component(addresstransactions);
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(div6);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach_dev(t9);
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach_dev(t10);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach_dev(t11);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach_dev(t12);
      if (if_block3)
        if_block3.d(detaching);
      if (detaching)
        detach_dev(if_block3_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$1.name,
    type: "if",
    source: "(137:0) {#if inited}",
    ctx
  });
  return block;
}
function create_each_block(ctx) {
  let div4;
  let div0;
  let span0;
  let t0_value = (
    /*tx*/
    ctx[25].vout + ""
  );
  let t0;
  let t1;
  let div1;
  let span1;
  let t2_value = (
    /*tx*/
    ctx[25].locktime + ""
  );
  let t2;
  let t3;
  let div2;
  let span2;
  let t4_value = (
    /*tx*/
    ctx[25].confirmations + ""
  );
  let t4;
  let t5;
  let t6_value = (
    /*tx*/
    ctx[25].confirmations < 6 ? "(of 6)" : ""
  );
  let t6;
  let span2_class_value;
  let t7;
  let div3;
  let span3;
  let a;
  let t8_value = truncate(
    /*tx*/
    ctx[25].txid,
    10
  ) + "";
  let t8;
  let a_href_value;
  let t9;
  const block = {
    c: function create() {
      div4 = element("div");
      div0 = element("div");
      span0 = element("span");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      span1 = element("span");
      t2 = text(t2_value);
      t3 = space();
      div2 = element("div");
      span2 = element("span");
      t4 = text(t4_value);
      t5 = space();
      t6 = text(t6_value);
      t7 = space();
      div3 = element("div");
      span3 = element("span");
      a = element("a");
      t8 = text(t8_value);
      t9 = space();
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      span0 = claim_element(div0_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, t0_value);
      span0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(div4_nodes);
      div1 = claim_element(div4_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      span1 = claim_element(div1_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t2 = claim_text(span1_nodes, t2_value);
      span1_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t3 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      span2 = claim_element(div2_nodes, "SPAN", { class: true });
      var span2_nodes = children(span2);
      t4 = claim_text(span2_nodes, t4_value);
      t5 = claim_space(span2_nodes);
      t6 = claim_text(span2_nodes, t6_value);
      span2_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t7 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      span3 = claim_element(div3_nodes, "SPAN", { class: true });
      var span3_nodes = children(span3);
      a = claim_element(span3_nodes, "A", { href: true, target: true, rel: true });
      var a_nodes = children(a);
      t8 = claim_text(a_nodes, t8_value);
      a_nodes.forEach(detach_dev);
      span3_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t9 = claim_space(div4_nodes);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span0, "class", "");
      add_location(span0, file$1, 148, 25, 5353);
      attr_dev(div0, "class", "col-2");
      add_location(div0, file$1, 148, 6, 5334);
      attr_dev(span1, "class", "");
      add_location(span1, file$1, 149, 25, 5416);
      attr_dev(div1, "class", "col-2");
      add_location(div1, file$1, 149, 6, 5397);
      attr_dev(span2, "class", span2_class_value = /*tx*/
      ctx[25].confirmations < 6 ? "text-warning" : "text-success");
      add_location(span2, file$1, 150, 25, 5483);
      attr_dev(div2, "class", "col-2");
      add_location(div2, file$1, 150, 6, 5464);
      attr_dev(a, "href", a_href_value = explorerBtcTxUrl(
        /*tx*/
        ctx[25].txid
      ));
      attr_dev(a, "target", "_blank");
      attr_dev(a, "rel", "noreferrer");
      add_location(a, file$1, 151, 40, 5667);
      attr_dev(span3, "class", "");
      add_location(span3, file$1, 151, 25, 5652);
      attr_dev(div3, "class", "col-6");
      add_location(div3, file$1, 151, 6, 5633);
      attr_dev(div4, "class", "row text-white text-small s-2tHUg2sA72wI");
      add_location(div4, file$1, 147, 4, 5288);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div4, anchor);
      append_hydration_dev(div4, div0);
      append_hydration_dev(div0, span0);
      append_hydration_dev(span0, t0);
      append_hydration_dev(div4, t1);
      append_hydration_dev(div4, div1);
      append_hydration_dev(div1, span1);
      append_hydration_dev(span1, t2);
      append_hydration_dev(div4, t3);
      append_hydration_dev(div4, div2);
      append_hydration_dev(div2, span2);
      append_hydration_dev(span2, t4);
      append_hydration_dev(span2, t5);
      append_hydration_dev(span2, t6);
      append_hydration_dev(div4, t7);
      append_hydration_dev(div4, div3);
      append_hydration_dev(div3, span3);
      append_hydration_dev(span3, a);
      append_hydration_dev(a, t8);
      append_hydration_dev(div4, t9);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*txs*/
      4 && t0_value !== (t0_value = /*tx*/
      ctx2[25].vout + ""))
        set_data_dev(t0, t0_value);
      if (dirty & /*txs*/
      4 && t2_value !== (t2_value = /*tx*/
      ctx2[25].locktime + ""))
        set_data_dev(t2, t2_value);
      if (dirty & /*txs*/
      4 && t4_value !== (t4_value = /*tx*/
      ctx2[25].confirmations + ""))
        set_data_dev(t4, t4_value);
      if (dirty & /*txs*/
      4 && t6_value !== (t6_value = /*tx*/
      ctx2[25].confirmations < 6 ? "(of 6)" : ""))
        set_data_dev(t6, t6_value);
      if (dirty & /*txs*/
      4 && span2_class_value !== (span2_class_value = /*tx*/
      ctx2[25].confirmations < 6 ? "text-warning" : "text-success")) {
        attr_dev(span2, "class", span2_class_value);
      }
      if (dirty & /*txs*/
      4 && t8_value !== (t8_value = truncate(
        /*tx*/
        ctx2[25].txid,
        10
      ) + ""))
        set_data_dev(t8, t8_value);
      if (dirty & /*txs*/
      4 && a_href_value !== (a_href_value = explorerBtcTxUrl(
        /*tx*/
        ctx2[25].txid
      ))) {
        attr_dev(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div4);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(147:4) {#each txs as tx}",
    ctx
  });
  return block;
}
function create_if_block_4(ctx) {
  let div;
  let principal;
  let current;
  principal = new Principal({
    props: { principalData: (
      /*principalData*/
      ctx[8]
    ) },
    $$inline: true
  });
  principal.$on(
    "principal_updated",
    /*principalUpdated*/
    ctx[12]
  );
  const block = {
    c: function create() {
      div = element("div");
      create_component(principal.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(principal.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "mb-4");
      add_location(div, file$1, 157, 2, 5835);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(principal, div, null);
      current = true;
    },
    p: noop,
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
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(principal);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_4.name,
    type: "if",
    source: "(157:2) {#if showStxAddress}",
    ctx
  });
  return block;
}
function create_if_block_3(ctx) {
  let previous_key = (
    /*componentKey3*/
    ctx[1]
  );
  let key_block_anchor;
  let current;
  let key_block = create_key_block(ctx);
  const block = {
    c: function create() {
      key_block.c();
      key_block_anchor = empty();
    },
    l: function claim(nodes) {
      key_block.l(nodes);
      key_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      key_block.m(target, anchor);
      insert_hydration_dev(target, key_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*componentKey3*/
      2 && safe_not_equal(previous_key, previous_key = /*componentKey3*/
      ctx2[1])) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block(ctx2);
        key_block.c();
        transition_in(key_block, 1);
        key_block.m(key_block_anchor.parentNode, key_block_anchor);
      } else {
        key_block.p(ctx2, dirty);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(key_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(key_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(key_block_anchor);
      key_block.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_3.name,
    type: "if",
    source: "(160:2) {#if showAmount}",
    ctx
  });
  return block;
}
function create_key_block(ctx) {
  let div;
  let peginamount;
  let current;
  peginamount = new TransactionId({
    props: { amtData: (
      /*amtData*/
      ctx[9]()
    ) },
    $$inline: true
  });
  peginamount.$on(
    "amount_updated",
    /*amountUpdated*/
    ctx[11]
  );
  const block = {
    c: function create() {
      div = element("div");
      create_component(peginamount.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(peginamount.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "mb-4");
      add_location(div, file$1, 161, 2, 5981);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(peginamount, div, null);
      current = true;
    },
    p: noop,
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
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(peginamount);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block.name,
    type: "key",
    source: "(161:2) {#key componentKey3}",
    ctx
  });
  return block;
}
function create_if_block_2$1(ctx) {
  let div;
  const block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "text-danger");
      add_location(div, file$1, 164, 19, 6111);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      div.innerHTML = /*errorReason*/
      ctx[0];
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*errorReason*/
      1)
        div.innerHTML = /*errorReason*/
        ctx2[0];
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2$1.name,
    type: "if",
    source: "(165:2) {#if errorReason}",
    ctx
  });
  return block;
}
function create_if_block_1$1(ctx) {
  let div1;
  let div0;
  let button;
  let t;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      button = element("button");
      t = text("CONTINUE");
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      button = claim_element(div0_nodes, "BUTTON", { class: true, type: true });
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
      add_location(button, file$1, 168, 6, 6234);
      attr_dev(div0, "class", "col");
      add_location(div0, file$1, 167, 4, 6210);
      attr_dev(div1, "class", "row s-2tHUg2sA72wI");
      add_location(div1, file$1, 166, 2, 6188);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div1, anchor);
      append_hydration_dev(div1, div0);
      append_hydration_dev(div0, button);
      append_hydration_dev(button, t);
      if (!mounted) {
        dispose = listen_dev(
          button,
          "click",
          /*click_handler*/
          ctx[17],
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$1.name,
    type: "if",
    source: "(166:2) {#if showButton}",
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*inited*/
    ctx[3] && create_if_block$1(ctx)
  );
  const block = {
    c: function create() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (
        /*inited*/
        ctx2[3]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*inited*/
          8) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
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
    d: function destroy(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach_dev(if_block_anchor);
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
  let utxoData;
  let showStxAddress;
  let showAmount;
  let showButton;
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(18, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("BuildTransaction", slots, []);
  let { piTx } = $$props;
  if (!piTx.fromBtcAddress)
    piTx.fromBtcAddress = addresses().cardinal;
  let componentKey3 = 0;
  const getExplorerUrl = () => {
    return explorerBtcAddressUrl(piTx.fromBtcAddress);
  };
  if (!piTx.pegInData.stacksAddress && addresses().stxAddress)
    piTx.pegInData.stacksAddress = addresses().stxAddress;
  const principalData = {
    label: "Stacks Address (Account or Contract)",
    info: "sBTC will be minted to this account or contract",
    currentAddress: piTx.pegInData.stacksAddress
  };
  const amtData = () => {
    return {
      pegIn: true,
      label: "Amount (Satoshis)",
      info: "The amount to wrap cannot exceed your balance less some satoshi to pay gas fees",
      pegAmount: piTx.pegInData.amount ? piTx.pegInData.amount : piTx.maxCommit() - piTx.fee,
      maxCommit: piTx.maxCommit(),
      change: piTx.getChange(),
      fee: piTx.fee,
      fees: piTx.fees,
      dust: piTx.dust
    };
  };
  const network = "mainnet";
  console.log("piTx:", piTx);
  const dispatch = createEventDispatcher();
  let ready = true;
  let errorReason;
  let stxAddressOk = true;
  let amountOk = false;
  const updateConfig = () => {
    var _a;
    const conf = $sbtcConfig;
    conf.pegInTransaction = piTx;
    sbtcConfig.update(() => conf);
    $$invalidate(16, amountOk = ((_a = piTx.pegInData) == null ? void 0 : _a.amount) > 0);
  };
  const requestSignature = () => {
    dispatch("request_signature");
  };
  const amountUpdated = (event) => {
    $$invalidate(0, errorReason = void 0);
    $$invalidate(16, amountOk = !event.detail.error);
    if (event.detail.opCode === "user") {
      try {
        piTx.setAmount(event.detail.newAmount);
      } catch (err) {
        $$invalidate(0, errorReason = err);
        piTx.setAmount(piTx.maxCommit() - piTx.fee);
      }
    } else if (event.detail.opCode === "prio") {
      piTx.setFeeRate(event.detail.newFeeRate);
      if (piTx.pegInData.amount > piTx.maxCommit() - piTx.fee)
        piTx.setAmount(piTx.maxCommit() - piTx.fee);
    }
    updateConfig();
    $$invalidate(1, componentKey3++, componentKey3);
  };
  const principalUpdated = (event) => {
    $$invalidate(0, errorReason = void 0);
    $$invalidate(15, stxAddressOk = !event.detail.error);
    if (stxAddressOk) {
      piTx.setStacksAddress(event.detail.currentAddress);
      updateConfig();
    }
  };
  let txs = [];
  const addressTransactions = async () => {
    $$invalidate(0, errorReason = void 0);
    if (!piTx.fromBtcAddress)
      return;
    try {
      $$invalidate(2, txs = await fetchAddressTransactions(piTx.fromBtcAddress));
    } catch (err) {
      $$invalidate(0, errorReason = "Insufficient balance - please use a different bitcoin address");
      return;
    }
  };
  const utxoUpdated = async (event) => {
    $$invalidate(0, errorReason = void 0);
    const data = event.detail;
    if (data.opCode === "address-change") {
      try {
        const p0 = piTx.pegInData;
        $$invalidate(14, piTx = await PegInTransaction.create(network, data.bitcoinAddress, $sbtcConfig.sbtcContractData.sbtcWalletAddress));
        piTx.calculateFees();
        if (p0.amount > 0 && p0.amount < piTx.maxCommit())
          piTx.setAmount(p0.amount);
        updateConfig();
      } catch (err) {
        $$invalidate(0, errorReason = "Your address either has no balance or there are unconfirmed transactions. You can paste another address or check this address here <a href=" + getExplorerUrl() + ' target="_blank">btc explorer</a>');
      }
    }
  };
  let inited = false;
  onMount(async () => {
    if (!piTx.pegInData.stacksAddress)
      $$invalidate(15, stxAddressOk = false);
    if (piTx.pegInData.amount > 0)
      $$invalidate(16, amountOk = true);
    updateConfig();
    $$invalidate(3, inited = true);
    addressTransactions();
  });
  $$self.$$.on_mount.push(function() {
    if (piTx === void 0 && !("piTx" in $$props || $$self.$$.bound[$$self.$$.props["piTx"]])) {
      console_1.warn("<BuildTransaction> was created without expected prop 'piTx'");
    }
  });
  const writable_props = ["piTx"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console_1.warn(`<BuildTransaction> was created with unknown prop '${key}'`);
  });
  const click_handler = () => requestSignature();
  $$self.$$set = ($$props2) => {
    if ("piTx" in $$props2)
      $$invalidate(14, piTx = $$props2.piTx);
  };
  $$self.$capture_state = () => ({
    onMount,
    sbtcConfig,
    Principal,
    PegInAmount: TransactionId,
    AddressTransactions,
    createEventDispatcher,
    PegInTransaction,
    addresses,
    truncate,
    explorerBtcAddressUrl,
    explorerBtcTxUrl,
    fetchAddressTransactions,
    piTx,
    componentKey3,
    getExplorerUrl,
    principalData,
    amtData,
    network,
    dispatch,
    ready,
    errorReason,
    stxAddressOk,
    amountOk,
    updateConfig,
    requestSignature,
    amountUpdated,
    principalUpdated,
    txs,
    addressTransactions,
    utxoUpdated,
    inited,
    showButton,
    showAmount,
    showStxAddress,
    utxoData,
    $sbtcConfig
  });
  $$self.$inject_state = ($$props2) => {
    if ("piTx" in $$props2)
      $$invalidate(14, piTx = $$props2.piTx);
    if ("componentKey3" in $$props2)
      $$invalidate(1, componentKey3 = $$props2.componentKey3);
    if ("ready" in $$props2)
      ready = $$props2.ready;
    if ("errorReason" in $$props2)
      $$invalidate(0, errorReason = $$props2.errorReason);
    if ("stxAddressOk" in $$props2)
      $$invalidate(15, stxAddressOk = $$props2.stxAddressOk);
    if ("amountOk" in $$props2)
      $$invalidate(16, amountOk = $$props2.amountOk);
    if ("txs" in $$props2)
      $$invalidate(2, txs = $$props2.txs);
    if ("inited" in $$props2)
      $$invalidate(3, inited = $$props2.inited);
    if ("showButton" in $$props2)
      $$invalidate(4, showButton = $$props2.showButton);
    if ("showAmount" in $$props2)
      $$invalidate(5, showAmount = $$props2.showAmount);
    if ("showStxAddress" in $$props2)
      $$invalidate(6, showStxAddress = $$props2.showStxAddress);
    if ("utxoData" in $$props2)
      $$invalidate(7, utxoData = $$props2.utxoData);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*piTx*/
    16384) {
      $$invalidate(7, utxoData = {
        label: "Your Bitcoin Address",
        info: "You'll send bitcoin from here to the sBTC wallet",
        utxos: piTx.addressInfo.utxos,
        maxCommit: piTx.ready ? piTx.maxCommit() : 0,
        fromBtcAddress: piTx.fromBtcAddress,
        numbInputs: piTx.ready ? piTx.addressInfo.utxos.length : 0,
        network
      });
    }
    if ($$self.$$.dirty & /*piTx, errorReason*/
    16385) {
      $$invalidate(6, showStxAddress = piTx.ready && !errorReason);
    }
    if ($$self.$$.dirty & /*piTx, stxAddressOk, errorReason*/
    49153) {
      $$invalidate(5, showAmount = piTx.ready && stxAddressOk && !errorReason);
    }
    if ($$self.$$.dirty & /*piTx, amountOk, errorReason*/
    81921) {
      $$invalidate(4, showButton = piTx.ready && amountOk && !errorReason);
    }
  };
  return [
    errorReason,
    componentKey3,
    txs,
    inited,
    showButton,
    showAmount,
    showStxAddress,
    utxoData,
    principalData,
    amtData,
    requestSignature,
    amountUpdated,
    principalUpdated,
    utxoUpdated,
    piTx,
    stxAddressOk,
    amountOk,
    click_handler
  ];
}
class BuildTransaction extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init$1(this, options, instance$1, create_fragment$1, safe_not_equal, { piTx: 14 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "BuildTransaction",
      options,
      id: create_fragment$1.name
    });
  }
  get piTx() {
    throw new Error("<BuildTransaction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set piTx(value) {
    throw new Error("<BuildTransaction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const priv = utils.randomPrivateKey();
const keySetForFeeCalculation = [];
keySetForFeeCalculation.push({
  priv,
  ecdsaPub: getPublicKey(priv, true),
  schnorrPub: schnorr.getPublicKey(priv)
});
const _ReclaimTransaction = class extends PegTransaction {
  constructor() {
    super();
    this.getChange = () => {
      return this.maxCommit() - this.pegInData.amount - this.fee;
    };
    this.setAmount = (amount) => {
      if (amount > this.maxCommit() - this.fee) {
        throw new Error("Amount is more than available " + this.maxCommit() + " less the gas " + this.fee);
      }
      this.pegInData.amount = amount;
    };
    this.calculateFees = () => {
      if (!this.ready)
        throw new Error("Not ready!");
      const stacksAddress = "ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN";
      const sbtcWalletAddress = "tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss";
      const p2Ret = p2wpkh(keySetForFeeCalculation[0].ecdsaPub);
      assert("wpkh" === p2Ret.type);
      const privKey = hex.decode("0101010101010101010101010101010101010101010101010101010101010101");
      const tx = new Transaction({ allowUnknowOutput: true });
      for (const utxo of this.addressInfo.utxos) {
        if (this.isUTXOConfirmed(utxo)) {
          tx.addInput({
            txid: hex.decode(utxo.txid),
            //txid: utxo.txid,
            index: utxo.vout,
            witnessUtxo: {
              amount: 600n,
              script: p2wpkh(secp256k1.getPublicKey(privKey, true)).script
            }
          });
        } else {
          this.unconfirmedUtxos = true;
        }
      }
      if (tx.inputsLength === 0)
        throw new Error("No confirmed UTXOs");
      const asmScript = this.getOpDropP2shScript(stacksAddress, sbtcWalletAddress);
      tx.addOutput({ script: asmScript, amount: BigInt(0) });
      const changeAmount = Math.floor(0);
      if (changeAmount > 0)
        tx.addOutputAddress(this.fromBtcAddress, BigInt(changeAmount), this.net);
      tx.sign(privKey);
      tx.finalize();
      this.scureFee = Number(tx.fee);
      this.fees = [
        this.scureFee * 0.8,
        //Math.floor((this.feeInfo.low_fee_per_kb / 1000) * vsize),
        this.scureFee * 1,
        //Math.floor((this.feeInfo.medium_fee_per_kb / 1000) * vsize),
        this.scureFee * 1.2
        //Math.floor((this.feeInfo.high_fee_per_kb / 1000) * vsize),
      ];
      this.fee = this.fees[1];
      if (this.pegInData.amount === 0) {
        this.pegInData.amount = this.maxCommit() - this.fee;
      }
    };
    this.getOutputsForDisplay = () => {
      const changeAmount = this.getChange();
      const outs = [
        { script: "RETURN " + this.pegInData.stacksAddress, amount: 0 },
        { address: this.pegInData.sbtcWalletAddress, amount: this.pegInData.amount }
      ];
      if (changeAmount > 0)
        outs.push({ address: this.fromBtcAddress, amount: changeAmount });
      outs.push({ address: "pays " + this.fee + " satoshis to miner." });
      return outs;
    };
    this.buildTransaction = (signature) => {
      if (!this.ready)
        throw new Error("Not ready!");
      if (signature)
        throw new Error("signature only for peg out!");
      return { opReturn: this.buildOpReturnTransaction(), opDrop: this.buildOpDropTransaction() };
    };
    this.buildOpDropTransaction = () => {
      if (!this.pegInData.stacksAddress)
        throw new Error("Stacks address required!");
      const tx = new Transaction({ allowUnknowOutput: true, lockTime: 0 });
      this.addInputs(tx);
      const asmScript = this.getOpDropP2shScript(this.pegInData.stacksAddress, this.pegInData.sbtcWalletAddress);
      tx.addOutput({ script: asmScript, amount: BigInt(this.pegInData.amount) });
      const changeAmount = Math.floor(this.maxCommit() - this.pegInData.amount - this.fee);
      if (changeAmount > 0)
        tx.addOutputAddress(this.fromBtcAddress, BigInt(changeAmount), this.net);
      return tx;
    };
    this.buildOpReturnTransaction = () => {
      if (!this.pegInData.stacksAddress)
        throw new Error("Stacks address required!");
      const tx = new Transaction({ allowUnknowOutput: true });
      this.addInputs(tx);
      const data = this.buildData(this.pegInData.stacksAddress);
      tx.addOutput({ script: Script.encode(["RETURN", data]), amount: 0n });
      {
        const asmScript = Script.encode([
          "IF",
          OutScript.encode(Address(this.net).decode(this.pegInData.sbtcWalletAddress)),
          "ELSE",
          144,
          "CHECKSEQUENCEVERIFY",
          "DROP",
          OutScript.encode(Address(this.net).decode(this.fromBtcAddress)),
          "CHECKSIG",
          "ENDIF"
        ]);
        tx.addOutput({ script: asmScript, amount: BigInt(this.pegInData.amount) });
      }
      const changeAmount = Math.floor(this.maxCommit() - this.pegInData.amount - this.fee);
      if (changeAmount > 0)
        tx.addOutputAddress(this.fromBtcAddress, BigInt(changeAmount), this.net);
      return tx;
    };
    this.addInputs = (tx) => {
      for (const utxo of this.addressInfo.utxos) {
        const script = RawTx.decode(hex.decode(utxo.tx.hex));
        if (this.isUTXOConfirmed(utxo)) {
          const nextI = {
            txid: hex.decode(utxo.txid),
            index: utxo.vout,
            witnessUtxo: {
              script: script.outputs[utxo.vout].script,
              amount: BigInt(utxo.value)
            }
          };
          tx.addInput(nextI);
        }
      }
    };
    this.buildData = (sigOrPrin) => {
      const magicBuf = this.net === TEST_NETWORK ? hex.decode(MAGIC_BYTES_TESTNET) : hex.decode(MAGIC_BYTES_MAINNET);
      const opCodeBuf = hex.decode(PEGIN_OPCODE);
      const addr = decodeStacksAddress(sigOrPrin.split(".")[0]);
      const addr0Buf = hex.decode(addr[0].toString(16));
      const addr1Buf = hex.decode(addr[1]);
      let data;
      if (sigOrPrin.indexOf(".") > -1) {
        const cnameBuf = new TextEncoder().encode(sigOrPrin.split(".")[1]);
        data = concatByteArrays([magicBuf, opCodeBuf, addr0Buf, addr1Buf, cnameBuf]);
        console.log(sigOrPrin.split(".")[1]);
      } else {
        data = concatByteArrays([magicBuf, opCodeBuf, addr0Buf, addr1Buf]);
      }
      return data;
    };
  }
  /**
  	1. https://medium.com/summa-technology/bitcoins-time-locks-27e0c362d7a1
  	 	# Anyone can spend, so long as 256 blocks have passed since input_1's previous output.
  		# Note that a separate transaction can be created to spend these coins.
  		# The alternate path would specify a lock_time of at least 506321.
  		# The script allows either an absolute or relative time lock, whichever is shorter.
  		tx_3:
  		lock_time: 0
  		input_1:
  			sequence_no: 0x00000100
  			scriptsig:
  			OP_FALSE
  			script:
  			OP_IF
  				506321 OP_CHECKLOCKTIMEVERIFY
  			OP_ELSE
  				0x00000100 OP_CHECKSEQUENCEVERIFY
  			OP_ENDIF
  			OP_DROP
  
  	2. https://github.com/bitcoin/bips/blob/master/bip-0112.mediawiki
  	 	IF
          	2 <Alice's pubkey> <Bob's pubkey> <Escrow's pubkey> 3 CHECKMULTISIG
  		ELSE
  			"30d" CHECKSEQUENCEVERIFY DROP
  			<Alice's pubkey> CHECKSIG
  		ENDIF
  	3. see also scure.lockTime https://github.com/paulmillr/scure-btc-signer/blob/d762e4bf994821c3e1b79fe99ee1c7576e323fbf/index.ts#L1755
  	*/
  getOpDropP2shScript(stacksAddress, sbtcWalletAddress) {
    const data = this.buildData(stacksAddress);
    const walletUint8 = new TextEncoder().encode(sbtcWalletAddress);
    let asmScript = Script.encode([data, "DROP", "DUP", "HASH160", walletUint8, "EQUALVERIFY", "CHECKSIG"]);
    {
      asmScript = Script.encode([
        "IF",
        data,
        "DROP",
        "DUP",
        "HASH160",
        walletUint8,
        "EQUALVERIFY",
        "CHECKSIG",
        "ELSE",
        144,
        "CHECKSEQUENCEVERIFY",
        "DROP",
        OutScript.encode(Address(this.net).decode(this.fromBtcAddress)),
        "CHECKSIG",
        "ENDIF"
      ]);
    }
    return asmScript;
  }
};
let ReclaimTransaction = _ReclaimTransaction;
ReclaimTransaction.create = async (network, fromBtcAddress, sbtcWalletAddress) => {
  const me = new _ReclaimTransaction();
  me.net = network === "testnet" ? TEST_NETWORK : NETWORK;
  me.fromBtcAddress = fromBtcAddress;
  me.pegInData = {
    amount: 0,
    stacksAddress: void 0,
    sbtcWalletAddress
  };
  me.addressInfo = await fetchUtxoSet(fromBtcAddress);
  const btcFeeRates = await fetchCurrentFeeRates();
  me.feeInfo = btcFeeRates.feeInfo;
  me.ready = true;
  return me;
};
ReclaimTransaction.hydrate = (o) => {
  const me = new _ReclaimTransaction();
  me.net = o.net;
  if (!o.fromBtcAddress)
    throw new Error("No address - use create instead!");
  me.fromBtcAddress = o.fromBtcAddress;
  me.pegInData = o.pegInData;
  me.addressInfo = o.addressInfo;
  me.feeInfo = o.feeInfo;
  me.fees = o.fees;
  me.fee = o.fee;
  me.scureFee = o.scureFee;
  me.ready = o.ready;
  return me;
};
const _page_svelte_svelte_type_style_lang = "";
const file = "src/routes/reclaim/+page.svelte";
function create_else_block(ctx) {
  let t;
  let if_block1_anchor;
  let current;
  let if_block0 = (
    /*sigData*/
    ctx[1] && !/*sigData*/
    ctx[1].webWallet && create_if_block_2(ctx)
  );
  let if_block1 = (
    /*sigData*/
    ctx[1] && /*sigData*/
    ctx[1].webWallet && create_if_block_1(ctx)
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
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (
        /*sigData*/
        ctx2[1] && !/*sigData*/
        ctx2[1].webWallet
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*sigData*/
          2) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t.parentNode, t);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*sigData*/
        ctx2[1] && /*sigData*/
        ctx2[1].webWallet
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*sigData*/
          2) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
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
    id: create_else_block.name,
    type: "else",
    source: "(42:6) {:else}",
    ctx
  });
  return block;
}
function create_if_block(ctx) {
  let buildtransaction;
  let current;
  buildtransaction = new BuildTransaction({
    props: { piTx: (
      /*piTx*/
      ctx[0]
    ) },
    $$inline: true
  });
  buildtransaction.$on(
    "request_signature",
    /*openSigView*/
    ctx[3]
  );
  const block = {
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
    p: function update(ctx2, dirty) {
      const buildtransaction_changes = {};
      if (dirty & /*piTx*/
      1)
        buildtransaction_changes.piTx = /*piTx*/
        ctx2[0];
      buildtransaction.$set(buildtransaction_changes);
    },
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
    d: function destroy(detaching) {
      destroy_component(buildtransaction, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(40:6) {#if view === 'build_tx_view'}",
    ctx
  });
  return block;
}
function create_if_block_2(ctx) {
  let signtransaction;
  let current;
  signtransaction = new SignTransaction({
    props: {
      sigData: (
        /*sigData*/
        ctx[1]
      ),
      pegInfo: JSON.parse(JSON.stringify(
        /*piTx*/
        ctx[0]
      ))
    },
    $$inline: true
  });
  signtransaction.$on(
    "update_transaction",
    /*updateTransaction*/
    ctx[4]
  );
  const block = {
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
    p: function update(ctx2, dirty) {
      const signtransaction_changes = {};
      if (dirty & /*sigData*/
      2)
        signtransaction_changes.sigData = /*sigData*/
        ctx2[1];
      if (dirty & /*piTx*/
      1)
        signtransaction_changes.pegInfo = JSON.parse(JSON.stringify(
          /*piTx*/
          ctx2[0]
        ));
      signtransaction.$set(signtransaction_changes);
    },
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
    d: function destroy(detaching) {
      destroy_component(signtransaction, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(43:7) {#if sigData && !sigData.webWallet}",
    ctx
  });
  return block;
}
function create_if_block_1(ctx) {
  let signtransactionweb;
  let current;
  signtransactionweb = new SignTransactionWeb({
    props: {
      sigData: (
        /*sigData*/
        ctx[1]
      ),
      pegInfo: JSON.parse(JSON.stringify(
        /*piTx*/
        ctx[0]
      ))
    },
    $$inline: true
  });
  signtransactionweb.$on(
    "update_transaction",
    /*updateTransaction*/
    ctx[4]
  );
  const block = {
    c: function create() {
      create_component(signtransactionweb.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(signtransactionweb.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(signtransactionweb, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const signtransactionweb_changes = {};
      if (dirty & /*sigData*/
      2)
        signtransactionweb_changes.sigData = /*sigData*/
        ctx2[1];
      if (dirty & /*piTx*/
      1)
        signtransactionweb_changes.pegInfo = JSON.parse(JSON.stringify(
          /*piTx*/
          ctx2[0]
        ));
      signtransactionweb.$set(signtransactionweb_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(signtransactionweb.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(signtransactionweb.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(signtransactionweb, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(46:7) {#if sigData && sigData.webWallet}",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let section;
  let div5;
  let div4;
  let h1;
  let t0;
  let span;
  let t1;
  let t2;
  let h2;
  let t3;
  let t4;
  let div0;
  let sbtcwalletdisplay;
  let t5;
  let div3;
  let div2;
  let div1;
  let current_block_type_index;
  let if_block;
  let current;
  sbtcwalletdisplay = new SbtcWalletDisplay({ $$inline: true });
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*view*/
      ctx2[2] === "build_tx_view"
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const block = {
    c: function create() {
      section = element("section");
      div5 = element("div");
      div4 = element("div");
      h1 = element("h1");
      t0 = text("Reclaim ");
      span = element("span");
      t1 = text("BTC");
      t2 = space();
      h2 = element("h2");
      t3 = text("Reclaim BTC from previous wrap - if for some reason the signers were unable to spend it.");
      t4 = space();
      div0 = element("div");
      create_component(sbtcwalletdisplay.$$.fragment);
      t5 = space();
      div3 = element("div");
      div2 = element("div");
      div1 = element("div");
      if_block.c();
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      div5 = claim_element(section_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      h1 = claim_element(div4_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Reclaim ");
      span = claim_element(h1_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t1 = claim_text(span_nodes, "BTC");
      span_nodes.forEach(detach_dev);
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(div4_nodes);
      h2 = claim_element(div4_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t3 = claim_text(h2_nodes, "Reclaim BTC from previous wrap - if for some reason the signers were unable to spend it.");
      h2_nodes.forEach(detach_dev);
      t4 = claim_space(div4_nodes);
      div0 = claim_element(div4_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(sbtcwalletdisplay.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t5 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", {});
      var div1_nodes = children(div1);
      if_block.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "strokeme-info");
      add_location(span, file, 31, 33, 1376);
      attr_dev(h1, "class", "text-info s-3IUHshgJ7mP2");
      add_location(h1, file, 31, 3, 1346);
      attr_dev(h2, "class", "text-info mb-3");
      add_location(h2, file, 32, 3, 1423);
      attr_dev(div0, "class", "my-3 d-flex justify-content-between text-white");
      add_location(div0, file, 33, 3, 1547);
      add_location(div1, file, 38, 5, 1730);
      attr_dev(div2, "class", "card border p-4");
      add_location(div2, file, 37, 4, 1695);
      attr_dev(div3, "class", "d-flex justify-content-center");
      add_location(div3, file, 36, 3, 1647);
      attr_dev(div4, "class", "card-width");
      add_location(div4, file, 30, 2, 1318);
      attr_dev(div5, "class", "my-4 p-4");
      add_location(div5, file, 29, 1, 1293);
      attr_dev(section, "class", "bg-dark s-3IUHshgJ7mP2");
      add_location(section, file, 28, 0, 1266);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, section, anchor);
      append_hydration_dev(section, div5);
      append_hydration_dev(div5, div4);
      append_hydration_dev(div4, h1);
      append_hydration_dev(h1, t0);
      append_hydration_dev(h1, span);
      append_hydration_dev(span, t1);
      append_hydration_dev(div4, t2);
      append_hydration_dev(div4, h2);
      append_hydration_dev(h2, t3);
      append_hydration_dev(div4, t4);
      append_hydration_dev(div4, div0);
      mount_component(sbtcwalletdisplay, div0, null);
      append_hydration_dev(div4, t5);
      append_hydration_dev(div4, div3);
      append_hydration_dev(div3, div2);
      append_hydration_dev(div2, div1);
      if_blocks[current_block_type_index].m(div1, null);
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
        if_block.m(div1, null);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(sbtcwalletdisplay.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(sbtcwalletdisplay.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(section);
      destroy_component(sbtcwalletdisplay);
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
  let view;
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(5, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Page", slots, []);
  let piTx = $sbtcConfig.pegInTransaction && $sbtcConfig.pegInTransaction.ready ? ReclaimTransaction.hydrate($sbtcConfig.pegInTransaction) : new ReclaimTransaction();
  let sigData;
  const openSigView = () => {
    $$invalidate(0, piTx = ReclaimTransaction.hydrate($sbtcConfig.pegInTransaction));
    if (!piTx.pegInData.stacksAddress)
      piTx.setStacksAddress(addresses().stxAddress);
    $$invalidate(1, sigData = {
      pegin: true,
      webWallet: piTx.fromBtcAddress === addresses().cardinal,
      txs: piTx == null ? void 0 : piTx.buildTransaction(void 0),
      outputsForDisplay: piTx == null ? void 0 : piTx.getOutputsForDisplay(),
      inputsForDisplay: piTx == null ? void 0 : piTx.addressInfo.utxos
    });
    $$invalidate(2, view = "sign_tx_view");
  };
  const updateTransaction = () => {
    $$invalidate(2, view = "build_tx_view");
  };
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Page> was created with unknown prop '${key}'`);
  });
  $$self.$capture_state = () => ({
    BuildTransaction,
    SignTransaction,
    SignTransactionWeb,
    sbtcConfig,
    ReclaimTransaction,
    SbtcWalletDisplay,
    addresses,
    piTx,
    sigData,
    openSigView,
    updateTransaction,
    view,
    $sbtcConfig
  });
  $$self.$inject_state = ($$props2) => {
    if ("piTx" in $$props2)
      $$invalidate(0, piTx = $$props2.piTx);
    if ("sigData" in $$props2)
      $$invalidate(1, sigData = $$props2.sigData);
    if ("view" in $$props2)
      $$invalidate(2, view = $$props2.view);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$invalidate(2, view = "build_tx_view");
  return [piTx, sigData, view, openSigView, updateTransaction];
}
class Page extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init$1(this, options, instance, create_fragment, safe_not_equal, {});
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
