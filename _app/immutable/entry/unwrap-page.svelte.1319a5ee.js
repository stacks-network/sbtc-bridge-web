import { S as SvelteComponentDev, i as init$1, s as safe_not_equal, d as dispatch_dev, U as validate_store, V as component_subscribe, v as validate_slots, a5 as createEventDispatcher, p as element, y as text, c as space, C as create_component, q as claim_element, r as children, z as claim_text, l as detach_dev, f as claim_space, D as claim_component, x as add_location, u as attr_dev, w as set_style, g as insert_hydration_dev, O as append_hydration_dev, a1 as set_input_value, E as mount_component, a6 as action_destroyer, W as listen_dev, A as set_data_dev, a2 as to_number, k as transition_in, h as transition_out, F as destroy_component, Y as run_all, X as prevent_default, _ as noop, o as onMount, e as empty, B as group_outros, j as check_outros } from "../chunks/index.1d91065c.js";
import { s as sbtcConfig, C as CONFIG } from "../chunks/hmac.447cb554.js";
import { F as FeeDisplay, P as PegTransaction, a as assert, c as concatByteArrays, M as MAGIC_BYTES_TESTNET, b as MAGIC_BYTES_MAINNET, d as PEGOUT_OPCODE, e as Principal, U as UTXOSelection, S as SbtcWalletDisplay, f as SignTransaction, g as SignTransactionWeb } from "../chunks/SbtcWalletDisplay.4fdbab1b.js";
import { T as TEST_NETWORK, N as NETWORK, h as hex, p as p2wpkh, b as Transaction, s as secp256k1, S as Script, O as OutScript, A as Address, R as RawTx, c as explorerAddressUrl, d as explorerBtcAddressUrl } from "../chunks/utils.1ded2fdd.js";
import { e as utils, h as getPublicKey, i as schnorr, a as addresses, j as signMessage } from "../chunks/stacks_connect.857de9b7.js";
import { b as fetchUtxoSet, c as fetchCurrentFeeRates } from "../chunks/bridge_api.65cdfd29.js";
const file$2 = "src/lib/components/unwrapper/PegOutAmount.svelte";
function create_if_block_1$2(ctx) {
  let div;
  let t;
  const block = {
    c: function create() {
      div = element("div");
      t = text(
        /*reason*/
        ctx[1]
      );
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t = claim_text(
        div_nodes,
        /*reason*/
        ctx[1]
      );
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "text-danger");
      add_location(div, file$2, 44, 18, 1970);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*reason*/
      2)
        set_data_dev(
          t,
          /*reason*/
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
    id: create_if_block_1$2.name,
    type: "if",
    source: "(45:6) {#if reason}",
    ctx
  });
  return block;
}
function create_if_block$2(ctx) {
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
      add_location(a, file$2, 47, 38, 2168);
      add_location(span, file$2, 47, 32, 2162);
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
    id: create_if_block$2.name,
    type: "if",
    source: "(48:8) {#if amtData.change > 0}",
    ctx
  });
  return block;
}
function create_fragment$2(ctx) {
  let div5;
  let div2;
  let label0;
  let span0;
  let t0_value = (
    /*amtData*/
    ctx[0].label + ""
  );
  let t0;
  let t1;
  let span1;
  let t2;
  let input0;
  let t3;
  let t4;
  let div1;
  let div0;
  let t5_value = (
    /*amtData*/
    ctx[0].info + ""
  );
  let t5;
  let t6;
  let t7;
  let div4;
  let label1;
  let span2;
  let t8;
  let t9;
  let span3;
  let t10;
  let input1;
  let t11;
  let div3;
  let t12;
  let t13;
  let feedisplay;
  let current;
  let mounted;
  let dispose;
  let if_block0 = (
    /*reason*/
    ctx[1] && create_if_block_1$2(ctx)
  );
  let if_block1 = (
    /*amtData*/
    ctx[0].change > 0 && create_if_block$2(ctx)
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
      div5 = element("div");
      div2 = element("div");
      label0 = element("label");
      span0 = element("span");
      t0 = text(t0_value);
      t1 = space();
      span1 = element("span");
      t2 = space();
      input0 = element("input");
      t3 = space();
      if (if_block0)
        if_block0.c();
      t4 = space();
      div1 = element("div");
      div0 = element("div");
      t5 = text(t5_value);
      t6 = space();
      if (if_block1)
        if_block1.c();
      t7 = space();
      div4 = element("div");
      label1 = element("label");
      span2 = element("span");
      t8 = text("sBTC Dust Amount");
      t9 = space();
      span3 = element("span");
      t10 = space();
      input1 = element("input");
      t11 = space();
      div3 = element("div");
      t12 = text("Tiny amount of bitcoin is sent to the sBTC wallet for book keeping purposes");
      t13 = space();
      create_component(feedisplay.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div5 = claim_element(nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div2 = claim_element(div5_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      label0 = claim_element(div2_nodes, "LABEL", { for: true, class: true });
      var label0_nodes = children(label0);
      span0 = claim_element(label0_nodes, "SPAN", {});
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, t0_value);
      span0_nodes.forEach(detach_dev);
      t1 = claim_space(label0_nodes);
      span1 = claim_element(label0_nodes, "SPAN", {
        class: true,
        "data-bs-toggle": true,
        "data-bs-placement": true,
        "data-bs-custom-class": true,
        title: true
      });
      children(span1).forEach(detach_dev);
      label0_nodes.forEach(detach_dev);
      t2 = claim_space(div2_nodes);
      input0 = claim_element(div2_nodes, "INPUT", {
        type: true,
        id: true,
        class: true,
        autocomplete: true
      });
      t3 = claim_space(div2_nodes);
      if (if_block0)
        if_block0.l(div2_nodes);
      t4 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t5 = claim_text(div0_nodes, t5_value);
      div0_nodes.forEach(detach_dev);
      t6 = claim_space(div1_nodes);
      if (if_block1)
        if_block1.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t7 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      label1 = claim_element(div4_nodes, "LABEL", { for: true, class: true });
      var label1_nodes = children(label1);
      span2 = claim_element(label1_nodes, "SPAN", {});
      var span2_nodes = children(span2);
      t8 = claim_text(span2_nodes, "sBTC Dust Amount");
      span2_nodes.forEach(detach_dev);
      t9 = claim_space(label1_nodes);
      span3 = claim_element(label1_nodes, "SPAN", {
        class: true,
        "data-bs-toggle": true,
        "data-bs-placement": true,
        "data-bs-custom-class": true,
        title: true
      });
      children(span3).forEach(detach_dev);
      label1_nodes.forEach(detach_dev);
      t10 = claim_space(div4_nodes);
      input1 = claim_element(div4_nodes, "INPUT", {
        type: true,
        id: true,
        class: true,
        style: true
      });
      t11 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true, title: true });
      var div3_nodes = children(div3);
      t12 = claim_text(div3_nodes, "Tiny amount of bitcoin is sent to the sBTC wallet for book keeping purposes");
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      t13 = claim_space(div5_nodes);
      claim_component(feedisplay.$$.fragment, div5_nodes);
      div5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(span0, file$2, 40, 8, 1457);
      attr_dev(span1, "class", "pointer text-info");
      attr_dev(span1, "data-bs-toggle", "tooltip-ftux");
      attr_dev(span1, "data-bs-placement", "top");
      attr_dev(span1, "data-bs-custom-class", "custom-tooltip");
      attr_dev(span1, "title", "The amount of Bitcoin you want to swap for sBTC. The bitcoin is locked in the protocol and you convert your sBTC back to Bitcoin when you peg out.");
      add_location(span1, file$2, 41, 8, 1494);
      attr_dev(label0, "for", "transact-path");
      attr_dev(label0, "class", "d-flex justify-content-between");
      add_location(label0, file$2, 39, 6, 1382);
      attr_dev(input0, "type", "number");
      attr_dev(input0, "id", "from-address");
      attr_dev(input0, "class", "form-control");
      attr_dev(input0, "autocomplete", "off");
      add_location(input0, file$2, 43, 6, 1802);
      attr_dev(div0, "class", "text-small");
      add_location(div0, file$2, 46, 8, 2085);
      attr_dev(div1, "class", "text-small d-flex justify-content-between");
      add_location(div1, file$2, 45, 6, 2021);
      attr_dev(div2, "class", "col-12");
      add_location(div2, file$2, 38, 4, 1355);
      add_location(span2, file$2, 53, 8, 2399);
      attr_dev(span3, "class", "pointer text-info");
      attr_dev(span3, "data-bs-toggle", "tooltip-ftux");
      attr_dev(span3, "data-bs-placement", "top");
      attr_dev(span3, "data-bs-custom-class", "custom-tooltip");
      attr_dev(span3, "title", "A tiny amount of bitoin is sent to the sBTC to keep track of sBTC transactions.");
      add_location(span3, file$2, 54, 8, 2437);
      attr_dev(label1, "for", "transact-path");
      attr_dev(label1, "class", "d-flex justify-content-between");
      add_location(label1, file$2, 52, 6, 2324);
      attr_dev(input1, "type", "number");
      input1.readOnly = true;
      attr_dev(input1, "id", "dust");
      attr_dev(input1, "class", "form-control");
      set_style(input1, "background", "#999");
      add_location(input1, file$2, 56, 6, 2678);
      attr_dev(div3, "class", "text-small");
      attr_dev(div3, "title", "Required for book keeping.");
      add_location(div3, file$2, 57, 6, 2798);
      attr_dev(div4, "class", "mt-5 col-12");
      add_location(div4, file$2, 51, 4, 2292);
      attr_dev(div5, "class", "row");
      add_location(div5, file$2, 37, 2, 1333);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div5, anchor);
      append_hydration_dev(div5, div2);
      append_hydration_dev(div2, label0);
      append_hydration_dev(label0, span0);
      append_hydration_dev(span0, t0);
      append_hydration_dev(label0, t1);
      append_hydration_dev(label0, span1);
      append_hydration_dev(div2, t2);
      append_hydration_dev(div2, input0);
      set_input_value(
        input0,
        /*pegAmount*/
        ctx[2]
      );
      append_hydration_dev(div2, t3);
      if (if_block0)
        if_block0.m(div2, null);
      append_hydration_dev(div2, t4);
      append_hydration_dev(div2, div1);
      append_hydration_dev(div1, div0);
      append_hydration_dev(div0, t5);
      append_hydration_dev(div1, t6);
      if (if_block1)
        if_block1.m(div1, null);
      append_hydration_dev(div5, t7);
      append_hydration_dev(div5, div4);
      append_hydration_dev(div4, label1);
      append_hydration_dev(label1, span2);
      append_hydration_dev(span2, t8);
      append_hydration_dev(label1, t9);
      append_hydration_dev(label1, span3);
      append_hydration_dev(div4, t10);
      append_hydration_dev(div4, input1);
      set_input_value(
        input1,
        /*amtData*/
        ctx[0].dust
      );
      append_hydration_dev(div4, t11);
      append_hydration_dev(div4, div3);
      append_hydration_dev(div3, t12);
      append_hydration_dev(div5, t13);
      mount_component(feedisplay, div5, null);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(init.call(null, input0)),
          listen_dev(
            input0,
            "input",
            /*input0_input_handler*/
            ctx[5]
          ),
          listen_dev(
            input0,
            "input",
            /*input_handler*/
            ctx[6],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            input1,
            "input",
            /*input1_input_handler*/
            ctx[8]
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
      4 && to_number(input0.value) !== /*pegAmount*/
      ctx2[2]) {
        set_input_value(
          input0,
          /*pegAmount*/
          ctx2[2]
        );
      }
      if (
        /*reason*/
        ctx2[1]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_1$2(ctx2);
          if_block0.c();
          if_block0.m(div2, t4);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if ((!current || dirty & /*amtData*/
      1) && t5_value !== (t5_value = /*amtData*/
      ctx2[0].info + ""))
        set_data_dev(t5, t5_value);
      if (
        /*amtData*/
        ctx2[0].change > 0
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block$2(ctx2);
          if_block1.c();
          if_block1.m(div1, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (dirty & /*amtData*/
      1 && to_number(input1.value) !== /*amtData*/
      ctx2[0].dust) {
        set_input_value(
          input1,
          /*amtData*/
          ctx2[0].dust
        );
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
        detach_dev(div5);
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
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function init(el) {
  el.focus();
}
function instance$2($$self, $$props, $$invalidate) {
  let low;
  let medium;
  let high;
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(12, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("PegOutAmount", slots, []);
  let { amtData } = $$props;
  const dispatch = createEventDispatcher();
  let reason;
  let pegAmount = amtData.pegAmount;
  const changePegIn = (maxValue) => {
    $$invalidate(1, reason = void 0);
    try {
      if (pegAmount > $sbtcConfig.balance.balance) {
        $$invalidate(1, reason = "Can't unwrap more sBTC then you own");
        dispatch("amount_updated", {
          opCode: "user",
          error: true,
          reason: "Can't unwrap more sBTC then you own"
        });
        return;
      }
      if (maxValue) {
        $$invalidate(2, pegAmount = $sbtcConfig.balance.balance);
      }
      const rate = amtData.fees.find((o) => o === amtData.fee);
      dispatch("amount_updated", {
        opCode: "user",
        error: false,
        newAmount: pegAmount,
        newFeeRate: rate
      });
    } catch (err) {
      $$invalidate(1, reason = err || "Amount is not valid");
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
      console.warn("<PegOutAmount> was created without expected prop 'amtData'");
    }
  });
  const writable_props = ["amtData"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<PegOutAmount> was created with unknown prop '${key}'`);
  });
  function input0_input_handler() {
    pegAmount = to_number(this.value);
    $$invalidate(2, pegAmount);
  }
  const input_handler = () => changePegIn(false);
  const click_handler = () => changePegIn(true);
  function input1_input_handler() {
    amtData.dust = to_number(this.value);
    $$invalidate(0, amtData);
  }
  $$self.$$set = ($$props2) => {
    if ("amtData" in $$props2)
      $$invalidate(0, amtData = $$props2.amtData);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    sbtcConfig,
    FeeDisplay,
    amtData,
    dispatch,
    reason,
    pegAmount,
    changePegIn,
    changeRate,
    init,
    high,
    medium,
    low,
    $sbtcConfig
  });
  $$self.$inject_state = ($$props2) => {
    if ("amtData" in $$props2)
      $$invalidate(0, amtData = $$props2.amtData);
    if ("reason" in $$props2)
      $$invalidate(1, reason = $$props2.reason);
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
    reason,
    pegAmount,
    changePegIn,
    changeRate,
    input0_input_handler,
    input_handler,
    click_handler,
    input1_input_handler
  ];
}
class PegOutAmount extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init$1(this, options, instance$2, create_fragment$2, safe_not_equal, { amtData: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "PegOutAmount",
      options,
      id: create_fragment$2.name
    });
  }
  get amtData() {
    throw new Error("<PegOutAmount>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set amtData(value) {
    throw new Error("<PegOutAmount>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const priv = utils.randomPrivateKey();
const keySetForFeeCalculation = [];
keySetForFeeCalculation.push({
  priv,
  ecdsaPub: getPublicKey(priv, true),
  schnorrPub: schnorr.getPublicKey(priv)
});
const _PegOutTransaction = class extends PegTransaction {
  constructor() {
    super();
    this.privKey = hex.decode("0101010101010101010101010101010101010101010101010101010101010101");
    this.getChange = () => {
      return this.maxCommit() - this.fee - this.dust;
    };
    this.setAmount = (amount) => {
      this.pegInData.amount = amount;
    };
    this.calculateFees = () => {
      if (!this.ready)
        throw new Error("Not ready!");
      const sbtcWalletAddress = "tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss";
      const p2Ret = p2wpkh(keySetForFeeCalculation[0].ecdsaPub);
      assert("wpkh" === p2Ret.type);
      const tx = new Transaction({ allowUnknowOutput: true });
      for (const utxo of this.addressInfo.utxos) {
        if (this.isUTXOConfirmed(utxo)) {
          tx.addInput({
            txid: hex.decode(utxo.txid),
            //txid: utxo.txid,
            index: utxo.vout,
            witnessUtxo: {
              amount: 600n,
              script: p2wpkh(secp256k1.getPublicKey(this.privKey, true)).script
            }
          });
        } else {
          this.unconfirmedUtxos = true;
        }
      }
      if (tx.inputsLength === 0)
        throw new Error("No confirmed UTXOs");
      const uint8array = new TextEncoder().encode(sbtcWalletAddress);
      tx.addOutput({ script: Script.encode(["RETURN", uint8array]), amount: 0n });
      tx.addOutputAddress(sbtcWalletAddress, BigInt(0), this.net);
      tx.addOutputAddress(this.fromBtcAddress, BigInt(0), this.net);
      tx.sign(this.privKey);
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
      const changeAmount = Math.floor(this.maxCommit() - this.dust - this.fee);
      const addr = new TextEncoder().encode(this.pegInData.stacksAddress || "stx address unknown");
      const outs = [
        { script: "RETURN " + addr, amount: 0 },
        { address: this.pegInData.sbtcWalletAddress, amount: this.dust }
      ];
      if (changeAmount > 0)
        outs.push({ address: this.fromBtcAddress, amount: changeAmount });
      outs.push({ address: "pays " + this.fee + " satoshis to miner." });
      return outs;
    };
    this.getDataToSign = () => {
      const view2 = this.amountToUint8(this.pegInData.amount);
      const script = OutScript.encode(Address(this.net).decode(this.pegInData.sbtcWalletAddress));
      const data = concatByteArrays([view2, script]);
      return hex.encode(data);
    };
    this.amountToUint8 = (amt) => {
      const buffer = new ArrayBuffer(9);
      const view1 = new DataView(buffer);
      view1.setUint32(0, amt, true);
      const view2 = new Uint8Array(view1.buffer);
      return view2;
    };
    this.buildTransaction = (signature) => {
      if (!this.ready)
        throw new Error("Not ready!");
      if (!signature)
        throw new Error("Signature of output 2 scriptPubKey is required");
      return { opReturn: this.buildOpReturn(signature), opDrop: this.buildOpDrop(signature) };
    };
    this.addInputs = (tx) => {
      for (const utxo of this.addressInfo.utxos) {
        const script = RawTx.decode(hex.decode(utxo.tx.hex));
        tx.addInput({
          txid: hex.decode(utxo.txid),
          index: utxo.vout,
          witnessUtxo: {
            script: script.outputs[utxo.vout].script,
            amount: BigInt(utxo.value)
          }
        });
      }
    };
    this.buildOpReturn = (signature) => {
      if (!this.ready)
        throw new Error("Not ready!");
      if (!signature)
        throw new Error("Signature of output 2 scriptPubKey is required");
      const tx = new Transaction({ allowUnknowOutput: true });
      this.addInputs(tx);
      if (!signature)
        throw new Error("Signature of the amount and output 2 scriptPubKey is missing.");
      const data = this.buildData(signature);
      tx.addOutput({ script: Script.encode(["RETURN", data]), amount: 0n });
      tx.addOutputAddress(this.pegInData.sbtcWalletAddress, BigInt(this.dust), this.net);
      if (this.getChange() > 0)
        tx.addOutputAddress(this.fromBtcAddress, BigInt(this.getChange()), this.net);
      return tx;
    };
    this.buildOpDrop = (signature) => {
      if (!signature)
        throw new Error("Signature of the amount and output 2 scriptPubKey is missing.");
      const tx = new Transaction({ allowUnknowOutput: true });
      this.addInputs(tx);
      const asmScript = this.getOpDropP2shScript(signature);
      tx.addOutput({ script: asmScript, amount: BigInt(this.dust) });
      if (this.getChange() > 0)
        tx.addOutputAddress(this.fromBtcAddress, BigInt(this.getChange()), this.net);
      return tx;
    };
    this.buildData = (sigOrPrin) => {
      const magicBuf = this.net === TEST_NETWORK ? hex.decode(MAGIC_BYTES_TESTNET) : hex.decode(MAGIC_BYTES_MAINNET);
      const opCodeBuf = hex.decode(PEGOUT_OPCODE);
      const view2 = this.amountToUint8(this.pegInData.amount);
      const sigBuf = hex.decode(sigOrPrin);
      const data = concatByteArrays([magicBuf, opCodeBuf, view2, sigBuf]);
      return data;
    };
  }
  getOpDropP2shScript(signature) {
    const script = OutScript.encode(Address(this.net).decode(this.pegInData.sbtcWalletAddress));
    const data = this.buildData(signature);
    const asmScript = Script.encode([data, "DROP", "DUP", "HASH160", script, "EQUALVERIFY", "CHECKSIG"]);
    return asmScript;
  }
};
let PegOutTransaction = _PegOutTransaction;
PegOutTransaction.create = async (network, fromBtcAddress, sbtcWalletAddress) => {
  const me = new _PegOutTransaction();
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
PegOutTransaction.hydrate = (o) => {
  const me = new _PegOutTransaction();
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
const BuildTransaction_svelte_svelte_type_style_lang = "";
const file$1 = "src/lib/components/unwrapper/BuildTransaction.svelte";
function create_else_block_1(ctx) {
  let div;
  let p0;
  let t0;
  let t1;
  let p1;
  let span1;
  let t2;
  let span0;
  let t3;
  const block = {
    c: function create() {
      div = element("div");
      p0 = element("p");
      t0 = text("Problem Connecting to APIs");
      t1 = space();
      p1 = element("p");
      span1 = element("span");
      t2 = text("Status: Bridge API currently experiencing connectivity problems.\n    We are already working on this.\n  ");
      span0 = element("span");
      t3 = text("Please report this to the core engineering team!");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      p0 = claim_element(div_nodes, "P", { class: true });
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "Problem Connecting to APIs");
      p0_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      span1 = claim_element(p1_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t2 = claim_text(span1_nodes, "Status: Bridge API currently experiencing connectivity problems.\n    We are already working on this.\n  ");
      span0 = claim_element(span1_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t3 = claim_text(span0_nodes, "Please report this to the core engineering team!");
      span0_nodes.forEach(detach_dev);
      span1_nodes.forEach(detach_dev);
      p1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p0, "class", "text-white");
      add_location(p0, file$1, 146, 2, 5134);
      attr_dev(span0, "class", "mt-5 text-warning");
      add_location(span0, file$1, 149, 2, 5318);
      attr_dev(span1, "class", "nav-item");
      add_location(span1, file$1, 147, 5, 5192);
      add_location(p1, file$1, 147, 2, 5189);
      attr_dev(div, "class", "lobby bg-dark");
      add_location(div, file$1, 145, 0, 5104);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, p0);
      append_hydration_dev(p0, t0);
      append_hydration_dev(div, t1);
      append_hydration_dev(div, p1);
      append_hydration_dev(p1, span1);
      append_hydration_dev(span1, t2);
      append_hydration_dev(span1, span0);
      append_hydration_dev(span0, t3);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block_1.name,
    type: "else",
    source: "(145:0) {:else}",
    ctx
  });
  return block;
}
function create_if_block$1(ctx) {
  let div;
  let utxoselection;
  let t0;
  let current_block_type_index;
  let if_block0;
  let t1;
  let if_block1_anchor;
  let current;
  utxoselection = new UTXOSelection({
    props: { utxoData: (
      /*utxoData*/
      ctx[5]
    ) },
    $$inline: true
  });
  utxoselection.$on(
    "utxo_updated",
    /*utxoUpdated*/
    ctx[12]
  );
  const if_block_creators = [create_if_block_2$1, create_else_block$1];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (
      /*$sbtcConfig*/
      ctx2[1].balance.balance <= 0
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let if_block1 = (
    /*errorReason*/
    ctx[0] && create_if_block_1$1(ctx)
  );
  const block = {
    c: function create() {
      div = element("div");
      create_component(utxoselection.$$.fragment);
      t0 = space();
      if_block0.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(utxoselection.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      if_block0.l(nodes);
      t1 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "mb-4");
      add_location(div, file$1, 122, 2, 4190);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(utxoselection, div, null);
      insert_hydration_dev(target, t0, anchor);
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration_dev(target, t1, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration_dev(target, if_block1_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const utxoselection_changes = {};
      if (dirty & /*utxoData*/
      32)
        utxoselection_changes.utxoData = /*utxoData*/
        ctx2[5];
      utxoselection.$set(utxoselection_changes);
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block0 = if_blocks[current_block_type_index];
        if (!if_block0) {
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block0.c();
        } else {
          if_block0.p(ctx2, dirty);
        }
        transition_in(if_block0, 1);
        if_block0.m(t1.parentNode, t1);
      }
      if (
        /*errorReason*/
        ctx2[0]
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
    i: function intro(local) {
      if (current)
        return;
      transition_in(utxoselection.$$.fragment, local);
      transition_in(if_block0);
      current = true;
    },
    o: function outro(local) {
      transition_out(utxoselection.$$.fragment, local);
      transition_out(if_block0);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(utxoselection);
      if (detaching)
        detach_dev(t0);
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach_dev(t1);
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
    source: "(122:0) {#if ready}",
    ctx
  });
  return block;
}
function create_else_block$1(ctx) {
  let t0;
  let t1;
  let if_block2_anchor;
  let current;
  let if_block0 = (
    /*showStxAddress*/
    ctx[4] && create_if_block_5(ctx)
  );
  let if_block1 = (
    /*showAmount*/
    ctx[3] && create_if_block_4(ctx)
  );
  let if_block2 = (
    /*showButton*/
    ctx[2] && create_if_block_3(ctx)
  );
  const block = {
    c: function create() {
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      if (if_block2)
        if_block2.c();
      if_block2_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      t0 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      t1 = claim_space(nodes);
      if (if_block2)
        if_block2.l(nodes);
      if_block2_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration_dev(target, t0, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration_dev(target, t1, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert_hydration_dev(target, if_block2_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (
        /*showStxAddress*/
        ctx2[4]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*showStxAddress*/
          16) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_5(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t0.parentNode, t0);
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
        ctx2[3]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*showAmount*/
          8) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_4(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(t1.parentNode, t1);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (
        /*showButton*/
        ctx2[2]
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block_3(ctx2);
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
        detach_dev(t0);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach_dev(t1);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach_dev(if_block2_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block$1.name,
    type: "else",
    source: "(129:2) {:else}",
    ctx
  });
  return block;
}
function create_if_block_2$1(ctx) {
  let div;
  let p0;
  let t0;
  let a0;
  let t1_value = (
    /*$sbtcConfig*/
    ctx[1].balance.address + ""
  );
  let t1;
  let a0_href_value;
  let t2;
  let p1;
  let a1;
  let t3;
  const block = {
    c: function create() {
      div = element("div");
      p0 = element("p");
      t0 = text("No sBTC to unwrap for account: ");
      a0 = element("a");
      t1 = text(t1_value);
      t2 = space();
      p1 = element("p");
      a1 = element("a");
      t3 = text("Get sBTC here!");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      p0 = claim_element(div_nodes, "P", { class: true });
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "No sBTC to unwrap for account: ");
      a0 = claim_element(p0_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t1 = claim_text(a0_nodes, t1_value);
      a0_nodes.forEach(detach_dev);
      p0_nodes.forEach(detach_dev);
      t2 = claim_space(div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      a1 = claim_element(p1_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t3 = claim_text(a1_nodes, "Get sBTC here!");
      a1_nodes.forEach(detach_dev);
      p1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a0, "href", a0_href_value = explorerAddressUrl(
        /*$sbtcConfig*/
        ctx[1].balance.address
      ));
      add_location(a0, file$1, 125, 51, 4411);
      attr_dev(p0, "class", "mb-4");
      add_location(p0, file$1, 125, 4, 4364);
      attr_dev(a1, "href", "/wrap");
      add_location(a1, file$1, 126, 7, 4514);
      add_location(p1, file$1, 126, 4, 4511);
      attr_dev(div, "class", "text-center text-warning my-5");
      add_location(div, file$1, 124, 2, 4316);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, p0);
      append_hydration_dev(p0, t0);
      append_hydration_dev(p0, a0);
      append_hydration_dev(a0, t1);
      append_hydration_dev(div, t2);
      append_hydration_dev(div, p1);
      append_hydration_dev(p1, a1);
      append_hydration_dev(a1, t3);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*$sbtcConfig*/
      2 && t1_value !== (t1_value = /*$sbtcConfig*/
      ctx2[1].balance.address + ""))
        set_data_dev(t1, t1_value);
      if (dirty & /*$sbtcConfig*/
      2 && a0_href_value !== (a0_href_value = explorerAddressUrl(
        /*$sbtcConfig*/
        ctx2[1].balance.address
      ))) {
        attr_dev(a0, "href", a0_href_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2$1.name,
    type: "if",
    source: "(124:2) {#if $sbtcConfig.balance.balance <= 0}",
    ctx
  });
  return block;
}
function create_if_block_5(ctx) {
  let div;
  let principal;
  let current;
  principal = new Principal({
    props: { principalData: (
      /*principalData*/
      ctx[7]
    ) },
    $$inline: true
  });
  principal.$on(
    "principal_updated",
    /*principalUpdated*/
    ctx[11]
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
      add_location(div, file$1, 130, 2, 4597);
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
    id: create_if_block_5.name,
    type: "if",
    source: "(130:2) {#if showStxAddress}",
    ctx
  });
  return block;
}
function create_if_block_4(ctx) {
  let div;
  let pegoutamount;
  let current;
  pegoutamount = new PegOutAmount({
    props: { amtData: (
      /*amtData*/
      ctx[6]
    ) },
    $$inline: true
  });
  pegoutamount.$on(
    "amount_updated",
    /*amountUpdated*/
    ctx[10]
  );
  const block = {
    c: function create() {
      div = element("div");
      create_component(pegoutamount.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(pegoutamount.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "mb-4");
      add_location(div, file$1, 133, 2, 4720);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(pegoutamount, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const pegoutamount_changes = {};
      if (dirty & /*amtData*/
      64)
        pegoutamount_changes.amtData = /*amtData*/
        ctx2[6];
      pegoutamount.$set(pegoutamount_changes);
    },
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
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(pegoutamount);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_4.name,
    type: "if",
    source: "(133:2) {#if showAmount}",
    ctx
  });
  return block;
}
function create_if_block_3(ctx) {
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
      add_location(button, file$1, 138, 6, 4880);
      attr_dev(div0, "class", "col");
      add_location(div0, file$1, 137, 4, 4856);
      attr_dev(div1, "class", "row s-DXQTMplg7quh");
      add_location(div1, file$1, 136, 2, 4834);
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
          ctx[16],
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
    id: create_if_block_3.name,
    type: "if",
    source: "(136:2) {#if showButton}",
    ctx
  });
  return block;
}
function create_if_block_1$1(ctx) {
  let div;
  let t;
  const block = {
    c: function create() {
      div = element("div");
      t = text(
        /*errorReason*/
        ctx[0]
      );
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t = claim_text(
        div_nodes,
        /*errorReason*/
        ctx[0]
      );
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "text-danger");
      add_location(div, file$1, 143, 19, 5046);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*errorReason*/
      1)
        set_data_dev(
          t,
          /*errorReason*/
          ctx2[0]
        );
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$1.name,
    type: "if",
    source: "(144:2) {#if errorReason}",
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$1, create_else_block_1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*ready*/
      ctx2[8]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
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
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if_block.p(ctx2, dirty);
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
      if_blocks[current_block_type_index].d(detaching);
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
  let amtData;
  let utxoData;
  let showStxAddress;
  let showAmount;
  let showButton;
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(1, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("BuildTransaction", slots, []);
  let { poTx } = $$props;
  if (!poTx.fromBtcAddress)
    poTx.fromBtcAddress = addresses().cardinal;
  const getExplorerUrl = () => {
    return explorerBtcAddressUrl(poTx.fromBtcAddress);
  };
  if (!poTx.pegInData.stacksAddress && addresses().stxAddress)
    poTx.pegInData.stacksAddress = addresses().stxAddress;
  const principalData = {
    label: "Stacks Contract or Account Address",
    info: "sBTC will be burned from this account",
    currentAddress: poTx.pegInData.stacksAddress
  };
  const network = CONFIG.VITE_NETWORK;
  const dispatch = createEventDispatcher();
  let ready = true;
  let errorReason;
  let stxAddressOk = true;
  let amountOk = true;
  const updateConfig = () => {
    const conf = $sbtcConfig;
    conf.pegOutTransaction = poTx;
    sbtcConfig.update(() => conf);
    $$invalidate(15, amountOk = poTx.pegInData.amount > 0);
  };
  const requestSignature = () => {
    const script = poTx.getDataToSign();
    signMessage(requestSignatureCB, script);
  };
  const requestSignatureCB = async (sigData, message) => {
    const conf = $sbtcConfig;
    conf.sigData = sigData;
    sbtcConfig.update(() => conf);
    dispatch("request_signature");
  };
  const amountUpdated = (event) => {
    $$invalidate(15, amountOk = !event.detail.error);
    if (amountOk) {
      poTx.setFeeRate(event.detail.newFeeRate);
      poTx.setAmount(event.detail.newAmount);
      updateConfig();
    }
  };
  const principalUpdated = (event) => {
    $$invalidate(14, stxAddressOk = !event.detail.error);
    if (stxAddressOk) {
      poTx.setStacksAddress(event.detail.currentAddress);
      updateConfig();
    }
  };
  const utxoUpdated = async (event) => {
    $$invalidate(0, errorReason = void 0);
    const data = event.detail;
    if (data.opCode === "address-change") {
      try {
        const p0 = poTx == null ? void 0 : poTx.pegInData;
        $$invalidate(13, poTx = await PegOutTransaction.create(network, data.bitcoinAddress, $sbtcConfig.sbtcContractData.sbtcWalletAddress));
        poTx.calculateFees();
        if (p0.amount > 0 && p0.amount < poTx.maxCommit())
          poTx.setAmount(p0.amount);
        updateConfig();
      } catch (err) {
        if (err.message !== "No inputs signed")
          $$invalidate(0, errorReason = err.message);
        else {
          if (err.message === "No confirmed UTXOs")
            ;
          $$invalidate(0, errorReason = "Please fix above errors and try again.");
        }
      }
    }
  };
  onMount(async () => {
    if (!poTx.pegInData.stacksAddress)
      $$invalidate(14, stxAddressOk = false);
    if (poTx.pegInData.amount > 0)
      $$invalidate(15, amountOk = true);
    updateConfig();
  });
  $$self.$$.on_mount.push(function() {
    if (poTx === void 0 && !("poTx" in $$props || $$self.$$.bound[$$self.$$.props["poTx"]])) {
      console.warn("<BuildTransaction> was created without expected prop 'poTx'");
    }
  });
  const writable_props = ["poTx"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<BuildTransaction> was created with unknown prop '${key}'`);
  });
  const click_handler = () => requestSignature();
  $$self.$$set = ($$props2) => {
    if ("poTx" in $$props2)
      $$invalidate(13, poTx = $$props2.poTx);
  };
  $$self.$capture_state = () => ({
    CONFIG,
    onMount,
    sbtcConfig,
    Principal,
    PegOutAmount,
    UTXOSelection,
    createEventDispatcher,
    PegOutTransaction,
    explorerAddressUrl,
    addresses,
    signMessage,
    hex,
    explorerBtcAddressUrl,
    poTx,
    getExplorerUrl,
    principalData,
    network,
    dispatch,
    ready,
    errorReason,
    stxAddressOk,
    amountOk,
    updateConfig,
    requestSignature,
    requestSignatureCB,
    amountUpdated,
    principalUpdated,
    utxoUpdated,
    showButton,
    showAmount,
    showStxAddress,
    utxoData,
    amtData,
    $sbtcConfig
  });
  $$self.$inject_state = ($$props2) => {
    if ("poTx" in $$props2)
      $$invalidate(13, poTx = $$props2.poTx);
    if ("ready" in $$props2)
      $$invalidate(8, ready = $$props2.ready);
    if ("errorReason" in $$props2)
      $$invalidate(0, errorReason = $$props2.errorReason);
    if ("stxAddressOk" in $$props2)
      $$invalidate(14, stxAddressOk = $$props2.stxAddressOk);
    if ("amountOk" in $$props2)
      $$invalidate(15, amountOk = $$props2.amountOk);
    if ("showButton" in $$props2)
      $$invalidate(2, showButton = $$props2.showButton);
    if ("showAmount" in $$props2)
      $$invalidate(3, showAmount = $$props2.showAmount);
    if ("showStxAddress" in $$props2)
      $$invalidate(4, showStxAddress = $$props2.showStxAddress);
    if ("utxoData" in $$props2)
      $$invalidate(5, utxoData = $$props2.utxoData);
    if ("amtData" in $$props2)
      $$invalidate(6, amtData = $$props2.amtData);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*poTx, $sbtcConfig*/
    8194) {
      $$invalidate(6, amtData = {
        pegIn: false,
        label: "Amount (sBTC)",
        info: "The amount to unwrap cannot exceed your sBTC balance",
        pegAmount: poTx.pegInData.amount > 0 ? poTx.pegInData.amount : $sbtcConfig.balance.balance,
        maxCommit: poTx.maxCommit(),
        change: poTx.getChange(),
        fee: poTx.fee,
        fees: poTx.fees,
        dust: poTx.dust
      });
    }
    if ($$self.$$.dirty & /*poTx*/
    8192) {
      $$invalidate(5, utxoData = {
        label: "Your Bitcoin Address",
        info: "Your sBTC will be burned and the equivalent bitcoin then sent to this address",
        utxos: poTx.addressInfo.utxos,
        maxCommit: poTx.ready ? poTx.maxCommit() : 0,
        fromBtcAddress: poTx.ready ? poTx.fromBtcAddress : addresses().cardinal,
        numbInputs: poTx.ready ? poTx.addressInfo.utxos.length : 0,
        network
      });
    }
    if ($$self.$$.dirty & /*poTx, errorReason*/
    8193) {
      $$invalidate(4, showStxAddress = poTx.ready && !errorReason);
    }
    if ($$self.$$.dirty & /*poTx, stxAddressOk, errorReason*/
    24577) {
      $$invalidate(3, showAmount = poTx.ready && stxAddressOk && !errorReason);
    }
    if ($$self.$$.dirty & /*poTx, amountOk, errorReason*/
    40961) {
      $$invalidate(2, showButton = poTx.ready && amountOk && !errorReason);
    }
  };
  return [
    errorReason,
    $sbtcConfig,
    showButton,
    showAmount,
    showStxAddress,
    utxoData,
    amtData,
    principalData,
    ready,
    requestSignature,
    amountUpdated,
    principalUpdated,
    utxoUpdated,
    poTx,
    stxAddressOk,
    amountOk,
    click_handler
  ];
}
class BuildTransaction extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init$1(this, options, instance$1, create_fragment$1, safe_not_equal, { poTx: 13 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "BuildTransaction",
      options,
      id: create_fragment$1.name
    });
  }
  get poTx() {
    throw new Error("<BuildTransaction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set poTx(value) {
    throw new Error("<BuildTransaction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const _page_svelte_svelte_type_style_lang = "";
const file = "src/routes/unwrap/+page.svelte";
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
    source: "(44:7) {:else}",
    ctx
  });
  return block;
}
function create_if_block(ctx) {
  let buildtransaction;
  let current;
  buildtransaction = new BuildTransaction({
    props: { poTx: (
      /*poTx*/
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
      if (dirty & /*poTx*/
      1)
        buildtransaction_changes.poTx = /*poTx*/
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
    source: "(42:7) {#if view === 'build_tx_view'}",
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
        /*poTx*/
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
      if (dirty & /*poTx*/
      1)
        signtransaction_changes.pegInfo = JSON.parse(JSON.stringify(
          /*poTx*/
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
    source: "(45:8) {#if sigData && !sigData.webWallet}",
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
        /*poTx*/
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
      if (dirty & /*poTx*/
      1)
        signtransactionweb_changes.pegInfo = JSON.parse(JSON.stringify(
          /*poTx*/
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
    source: "(48:6) {#if sigData && sigData.webWallet}",
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
      t0 = text("Unwrap ");
      span = element("span");
      t1 = text("sBTC");
      t2 = space();
      h2 = element("h2");
      t3 = text("sBTC to BTC");
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
      t0 = claim_text(h1_nodes, "Unwrap ");
      span = claim_element(h1_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t1 = claim_text(span_nodes, "sBTC");
      span_nodes.forEach(detach_dev);
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(div4_nodes);
      h2 = claim_element(div4_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t3 = claim_text(h2_nodes, "sBTC to BTC");
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
      attr_dev(span, "class", "strokeme-warning");
      add_location(span, file, 33, 35, 1446);
      attr_dev(h1, "class", "text-warning s-sCjUEJHBVR8B");
      add_location(h1, file, 33, 3, 1414);
      attr_dev(h2, "class", "text-warning mb-3");
      add_location(h2, file, 34, 3, 1497);
      attr_dev(div0, "class", "my-3 d-flex justify-content-between text-white");
      add_location(div0, file, 35, 3, 1547);
      add_location(div1, file, 40, 5, 1730);
      attr_dev(div2, "class", "card border p-4");
      add_location(div2, file, 39, 4, 1695);
      attr_dev(div3, "class", "d-flex justify-content-center");
      add_location(div3, file, 38, 3, 1647);
      attr_dev(div4, "class", "card-width");
      add_location(div4, file, 32, 2, 1386);
      attr_dev(div5, "class", "my-4 p-4");
      add_location(div5, file, 31, 1, 1361);
      attr_dev(section, "class", "bg-dark s-sCjUEJHBVR8B");
      add_location(section, file, 30, 0, 1334);
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
  let poTx = $sbtcConfig.pegOutTransaction && $sbtcConfig.pegOutTransaction.ready ? PegOutTransaction.hydrate($sbtcConfig.pegOutTransaction) : new PegOutTransaction();
  let sigData;
  const openSigView = () => {
    $$invalidate(0, poTx = PegOutTransaction.hydrate($sbtcConfig.pegOutTransaction));
    if (!poTx.pegInData.stacksAddress)
      poTx.setStacksAddress(addresses().stxAddress);
    const signature = $sbtcConfig.sigData.signature;
    const txs = poTx.buildTransaction(signature);
    $$invalidate(1, sigData = {
      pegin: false,
      webWallet: poTx.fromBtcAddress === addresses().cardinal,
      txs,
      outputsForDisplay: poTx.getOutputsForDisplay(),
      inputsForDisplay: poTx.addressInfo.utxos
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
    SbtcWalletDisplay,
    sbtcConfig,
    PegOutTransaction,
    addresses,
    poTx,
    sigData,
    openSigView,
    updateTransaction,
    view,
    $sbtcConfig
  });
  $$self.$inject_state = ($$props2) => {
    if ("poTx" in $$props2)
      $$invalidate(0, poTx = $$props2.poTx);
    if ("sigData" in $$props2)
      $$invalidate(1, sigData = $$props2.sigData);
    if ("view" in $$props2)
      $$invalidate(2, view = $$props2.view);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$invalidate(2, view = "build_tx_view");
  return [poTx, sigData, view, openSigView, updateTransaction];
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
