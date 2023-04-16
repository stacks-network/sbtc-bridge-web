import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a5 as createEventDispatcher, o as onMount, a0 as globals, p as element, c as space, y as text, C as create_component, q as claim_element, r as children, l as detach_dev, f as claim_space, z as claim_text, D as claim_component, u as attr_dev, x as add_location, w as set_style, g as insert_hydration_dev, O as append_hydration_dev, E as mount_component, a1 as set_input_value, W as listen_dev, X as prevent_default, A as set_data_dev, a6 as prop_dev, k as transition_in, h as transition_out, F as destroy_component, Y as run_all, _ as noop, U as validate_store, V as component_subscribe, j as check_outros, e as empty, B as group_outros } from "../chunks/index.d5e223f8.js";
import { a as addresses, k as hexToBytes, m as sendRawTxDirectMempool, C as CONFIG } from "../chunks/stacks_connect.185d0304.js";
import { s as sbtcConfig } from "../chunks/stores.3f4ae6bf.js";
import { P as PegInTransaction } from "../chunks/PegInTransaction.5807a3a2.js";
import { C as CopyClipboard, o as openPsbtRequestPopup, S as SignTransaction } from "../chunks/SignTransaction.fe6ce907.js";
import { D as DebugPeginInfo } from "../chunks/DebugPeginInfo.001cdc54.js";
import { b as base64, h as hex, c as btc, T as Transaction, C as COMMS_ERROR, t as truncate, a as explorerBtcTxUrl, e as explorerTxUrl } from "../chunks/utils.7d5a9605.js";
import { R as ReclaimTransaction } from "../chunks/ReclaimTransaction.1fdc97f3.js";
import { g as goto } from "../chunks/navigation.3ba95eff.js";
const { console: console_1 } = globals;
const file$1 = "src/lib/components/reclaim/ReclaimForm.svelte";
function create_if_block$1(ctx) {
  let div1;
  let div0;
  let t0;
  let a;
  let t1;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      t0 = text("Sign with ");
      a = element("a");
      t1 = text("web wallet");
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "Sign with ");
      a = claim_element(div0_nodes, "A", { href: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "web wallet");
      a_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", "/");
      add_location(a, file$1, 146, 34, 5209);
      attr_dev(div0, "class", "col-12");
      add_location(div0, file$1, 146, 4, 5179);
      attr_dev(div1, "class", "row");
      add_location(div1, file$1, 145, 2, 5157);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div1, anchor);
      append_hydration_dev(div1, div0);
      append_hydration_dev(div0, t0);
      append_hydration_dev(div0, a);
      append_hydration_dev(a, t1);
      if (!mounted) {
        dispose = listen_dev(a, "click", prevent_default(
          /*click_handler_4*/
          ctx[10]
        ), false, true, false, false);
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
    id: create_if_block$1.name,
    type: "if",
    source: "(145:2) {#if signWeb}",
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let div0;
  let t0;
  let section;
  let div1;
  let h2;
  let t1;
  let t2;
  let div3;
  let div2;
  let ul1;
  let li4;
  let span;
  let t3;
  let t4;
  let t5;
  let ul0;
  let li0;
  let a0;
  let t6;
  let t7;
  let li1;
  let a1;
  let t8;
  let t9;
  let li2;
  let a2;
  let t10;
  let t11;
  let li3;
  let a3;
  let t12;
  let t13;
  let div6;
  let div4;
  let t14;
  let t15;
  let t16;
  let div5;
  let textarea;
  let t17;
  let t18;
  let debugpegininfo;
  let t19;
  let input;
  let current;
  let mounted;
  let dispose;
  let if_block = (
    /*signWeb*/
    ctx[3] && create_if_block$1(ctx)
  );
  debugpegininfo = new DebugPeginInfo({
    props: {
      tx: (
        /*prTx*/
        ctx[0]
      ),
      peginRequest: void 0
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div0 = element("div");
      t0 = space();
      section = element("section");
      div1 = element("div");
      h2 = element("h2");
      t1 = text("Sign & Broadcast");
      t2 = space();
      div3 = element("div");
      div2 = element("div");
      ul1 = element("ul");
      li4 = element("li");
      span = element("span");
      t3 = text("Choose Format - ");
      t4 = text(
        /*currentFmt*/
        ctx[2]
      );
      t5 = space();
      ul0 = element("ul");
      li0 = element("li");
      a0 = element("a");
      t6 = text("Reclaim Electrum");
      t7 = space();
      li1 = element("li");
      a1 = element("a");
      t8 = text("Reclaim Bitcoin Core");
      t9 = space();
      li2 = element("li");
      a2 = element("a");
      t10 = text("Signer Bitcoin Core");
      t11 = space();
      li3 = element("li");
      a3 = element("a");
      t12 = text("Signer Electrum");
      t13 = space();
      div6 = element("div");
      div4 = element("div");
      t14 = text("PSBT - ");
      t15 = text(
        /*currentFmt*/
        ctx[2]
      );
      t16 = space();
      div5 = element("div");
      textarea = element("textarea");
      t17 = space();
      if (if_block)
        if_block.c();
      t18 = space();
      create_component(debugpegininfo.$$.fragment);
      t19 = space();
      input = element("input");
      this.h();
    },
    l: function claim(nodes) {
      div0 = claim_element(nodes, "DIV", { id: true });
      children(div0).forEach(detach_dev);
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      div1 = claim_element(section_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      h2 = claim_element(div1_nodes, "H2", {});
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Sign & Broadcast");
      h2_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", {});
      var div2_nodes = children(div2);
      ul1 = claim_element(div2_nodes, "UL", { class: true });
      var ul1_nodes = children(ul1);
      li4 = claim_element(ul1_nodes, "LI", { class: true });
      var li4_nodes = children(li4);
      span = claim_element(li4_nodes, "SPAN", {
        class: true,
        id: true,
        role: true,
        "data-bs-toggle": true,
        "aria-expanded": true
      });
      var span_nodes = children(span);
      t3 = claim_text(span_nodes, "Choose Format - ");
      t4 = claim_text(
        span_nodes,
        /*currentFmt*/
        ctx[2]
      );
      span_nodes.forEach(detach_dev);
      t5 = claim_space(li4_nodes);
      ul0 = claim_element(li4_nodes, "UL", { class: true, "aria-labelledby": true });
      var ul0_nodes = children(ul0);
      li0 = claim_element(ul0_nodes, "LI", {});
      var li0_nodes = children(li0);
      a0 = claim_element(li0_nodes, "A", { class: true, href: true });
      var a0_nodes = children(a0);
      t6 = claim_text(a0_nodes, "Reclaim Electrum");
      a0_nodes.forEach(detach_dev);
      li0_nodes.forEach(detach_dev);
      t7 = claim_space(ul0_nodes);
      li1 = claim_element(ul0_nodes, "LI", {});
      var li1_nodes = children(li1);
      a1 = claim_element(li1_nodes, "A", { class: true, href: true });
      var a1_nodes = children(a1);
      t8 = claim_text(a1_nodes, "Reclaim Bitcoin Core");
      a1_nodes.forEach(detach_dev);
      li1_nodes.forEach(detach_dev);
      t9 = claim_space(ul0_nodes);
      li2 = claim_element(ul0_nodes, "LI", {});
      var li2_nodes = children(li2);
      a2 = claim_element(li2_nodes, "A", { class: true, href: true });
      var a2_nodes = children(a2);
      t10 = claim_text(a2_nodes, "Signer Bitcoin Core");
      a2_nodes.forEach(detach_dev);
      li2_nodes.forEach(detach_dev);
      t11 = claim_space(ul0_nodes);
      li3 = claim_element(ul0_nodes, "LI", {});
      var li3_nodes = children(li3);
      a3 = claim_element(li3_nodes, "A", { class: true, href: true });
      var a3_nodes = children(a3);
      t12 = claim_text(a3_nodes, "Signer Electrum");
      a3_nodes.forEach(detach_dev);
      li3_nodes.forEach(detach_dev);
      ul0_nodes.forEach(detach_dev);
      li4_nodes.forEach(detach_dev);
      ul1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t13 = claim_space(section_nodes);
      div6 = claim_element(section_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      div4 = claim_element(div6_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      t14 = claim_text(div4_nodes, "PSBT - ");
      t15 = claim_text(
        div4_nodes,
        /*currentFmt*/
        ctx[2]
      );
      div4_nodes.forEach(detach_dev);
      t16 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      textarea = claim_element(div5_nodes, "TEXTAREA", { rows: true, style: true });
      children(textarea).forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      t17 = claim_space(section_nodes);
      if (if_block)
        if_block.l(section_nodes);
      t18 = claim_space(section_nodes);
      claim_component(debugpegininfo.$$.fragment, section_nodes);
      t19 = claim_space(section_nodes);
      input = claim_element(section_nodes, "INPUT", { style: true });
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "id", "clipboard");
      add_location(div0, file$1, 116, 0, 3797);
      add_location(h2, file$1, 120, 4, 3899);
      attr_dev(div1, "class", "d-flex justify-content-between");
      add_location(div1, file$1, 119, 2, 3850);
      attr_dev(span, "class", "nav-link dropdown-toggle ");
      attr_dev(span, "id", "navbarDropdown");
      attr_dev(span, "role", "button");
      attr_dev(span, "data-bs-toggle", "dropdown");
      attr_dev(span, "aria-expanded", "false");
      add_location(span, file$1, 126, 10, 4073);
      attr_dev(a0, "class", "dropdown-item");
      attr_dev(a0, "href", "/");
      add_location(a0, file$1, 130, 16, 4361);
      add_location(li0, file$1, 130, 12, 4357);
      attr_dev(a1, "class", "dropdown-item");
      attr_dev(a1, "href", "/");
      add_location(a1, file$1, 131, 16, 4496);
      add_location(li1, file$1, 131, 12, 4492);
      attr_dev(a2, "class", "dropdown-item");
      attr_dev(a2, "href", "/");
      add_location(a2, file$1, 132, 16, 4635);
      add_location(li2, file$1, 132, 12, 4631);
      attr_dev(a3, "class", "dropdown-item");
      attr_dev(a3, "href", "/");
      add_location(a3, file$1, 133, 16, 4772);
      add_location(li3, file$1, 133, 12, 4768);
      attr_dev(ul0, "class", "dropdown-menu dropdown-menu-start");
      attr_dev(ul0, "aria-labelledby", "navbarDropdown");
      add_location(ul0, file$1, 129, 10, 4265);
      attr_dev(li4, "class", "nav-item dropdown");
      add_location(li4, file$1, 125, 8, 4032);
      attr_dev(ul1, "class", "navbar-nav");
      add_location(ul1, file$1, 124, 6, 4e3);
      add_location(div2, file$1, 123, 4, 3988);
      attr_dev(div3, "class", "my-3 d-flex justify-content-start");
      add_location(div3, file$1, 122, 2, 3936);
      attr_dev(div4, "class", "col-12");
      add_location(div4, file$1, 140, 4, 4975);
      attr_dev(textarea, "rows", "8");
      set_style(textarea, "width", "100%");
      set_style(textarea, "padding", "10px");
      textarea.value = /*currentTx*/
      ctx[1];
      add_location(textarea, file$1, 141, 24, 5045);
      attr_dev(div5, "class", "col-12");
      add_location(div5, file$1, 141, 4, 5025);
      attr_dev(div6, "class", "row");
      add_location(div6, file$1, 139, 2, 4953);
      set_style(input, "visibility", "hidden");
      add_location(input, file$1, 152, 2, 5370);
      attr_dev(section, "class", "mb-3");
      add_location(section, file$1, 118, 0, 3825);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div0, anchor);
      insert_hydration_dev(target, t0, anchor);
      insert_hydration_dev(target, section, anchor);
      append_hydration_dev(section, div1);
      append_hydration_dev(div1, h2);
      append_hydration_dev(h2, t1);
      append_hydration_dev(section, t2);
      append_hydration_dev(section, div3);
      append_hydration_dev(div3, div2);
      append_hydration_dev(div2, ul1);
      append_hydration_dev(ul1, li4);
      append_hydration_dev(li4, span);
      append_hydration_dev(span, t3);
      append_hydration_dev(span, t4);
      append_hydration_dev(li4, t5);
      append_hydration_dev(li4, ul0);
      append_hydration_dev(ul0, li0);
      append_hydration_dev(li0, a0);
      append_hydration_dev(a0, t6);
      append_hydration_dev(ul0, t7);
      append_hydration_dev(ul0, li1);
      append_hydration_dev(li1, a1);
      append_hydration_dev(a1, t8);
      append_hydration_dev(ul0, t9);
      append_hydration_dev(ul0, li2);
      append_hydration_dev(li2, a2);
      append_hydration_dev(a2, t10);
      append_hydration_dev(ul0, t11);
      append_hydration_dev(ul0, li3);
      append_hydration_dev(li3, a3);
      append_hydration_dev(a3, t12);
      append_hydration_dev(section, t13);
      append_hydration_dev(section, div6);
      append_hydration_dev(div6, div4);
      append_hydration_dev(div4, t14);
      append_hydration_dev(div4, t15);
      append_hydration_dev(div6, t16);
      append_hydration_dev(div6, div5);
      append_hydration_dev(div5, textarea);
      append_hydration_dev(section, t17);
      if (if_block)
        if_block.m(section, null);
      append_hydration_dev(section, t18);
      mount_component(debugpegininfo, section, null);
      append_hydration_dev(section, t19);
      append_hydration_dev(section, input);
      set_input_value(
        input,
        /*currentTx*/
        ctx[1]
      );
      current = true;
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
          ), false, true, false, false),
          listen_dev(a3, "click", prevent_default(
            /*click_handler_3*/
            ctx[9]
          ), false, true, false, false),
          listen_dev(
            input,
            "input",
            /*input_input_handler*/
            ctx[11]
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (!current || dirty & /*currentFmt*/
      4)
        set_data_dev(
          t4,
          /*currentFmt*/
          ctx2[2]
        );
      if (!current || dirty & /*currentFmt*/
      4)
        set_data_dev(
          t15,
          /*currentFmt*/
          ctx2[2]
        );
      if (!current || dirty & /*currentTx*/
      2) {
        prop_dev(
          textarea,
          "value",
          /*currentTx*/
          ctx2[1]
        );
      }
      if (
        /*signWeb*/
        ctx2[3]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          if_block.m(section, t18);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      const debugpegininfo_changes = {};
      if (dirty & /*prTx*/
      1)
        debugpegininfo_changes.tx = /*prTx*/
        ctx2[0];
      debugpegininfo.$set(debugpegininfo_changes);
      if (dirty & /*currentTx*/
      2 && input.value !== /*currentTx*/
      ctx2[1]) {
        set_input_value(
          input,
          /*currentTx*/
          ctx2[1]
        );
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(debugpegininfo.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(debugpegininfo.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div0);
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(section);
      if (if_block)
        if_block.d();
      destroy_component(debugpegininfo);
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
  validate_slots("ReclaimForm", slots, []);
  const dispatch = createEventDispatcher();
  let { prTx } = $$props;
  let copied = false;
  let errorReason;
  const signWithWebWallet = () => {
    $$invalidate(1, currentTx = reclaimPsbtHex);
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
  };
  let resp;
  let broadcasted;
  const broadcastTransaction = async (psbtHex) => {
    try {
      const tx = Transaction.fromPSBT(hexToBytes(psbtHex));
      try {
        tx.finalize();
      } catch (err) {
        console.log("finalize error: ", err);
        errorReason = "Unable to create the transaction - this can happen if your wallet is connected to a different account to the one your logged in with. Try hitting the 'back` button, switching account in the wallet and trying again?";
        return;
      }
      const txHex = hex.encode(tx.toBytes(true, tx.hasWitnesses));
      $$invalidate(1, currentTx = txHex);
      errorReason = void 0;
      resp = await sendRawTxDirectMempool(txHex);
      console.log(resp);
      if (!resp || resp.error) {
        broadcasted = false;
        errorReason = "Unable to broadcast transaction - please try hitting 'back' and refreshing the bitcoin input data.";
      } else {
        broadcasted = true;
      }
    } catch (err) {
      errorReason = err.message + ". Unable to broadcast transaction - please try hitting 'back' and refreshing the bitcoin input data.";
    }
  };
  const copy = () => {
    const app = new CopyClipboard({
      target: document.getElementById("clipboard"),
      props: { name: currentTx }
    });
    app.$destroy();
    copied = true;
  };
  const formats = [
    "Reclaim Bitcoin Core",
    "Reclaim Electrum",
    "Signer Bitcoin Core",
    "Signer Electrum"
  ];
  let currentTx;
  let currentFmt;
  const updateWallet = (newWallet) => {
    copied = false;
    if (newWallet === "reclaimHex") {
      $$invalidate(1, currentTx = reclaimPsbtHex);
      $$invalidate(2, currentFmt = formats[1]);
    } else if (newWallet === "reclaimB64") {
      $$invalidate(1, currentTx = reclaimPsbtB64);
      $$invalidate(2, currentFmt = formats[0]);
    } else if (newWallet === "signerHex") {
      $$invalidate(1, currentTx = signerPsbtHex);
      $$invalidate(2, currentFmt = formats[3]);
    } else if (newWallet === "signerB64") {
      $$invalidate(1, currentTx = signerPsbtB64);
      $$invalidate(2, currentFmt = formats[2]);
    }
    copy();
  };
  let showDetails = true;
  let signWeb = false;
  let txReclaim;
  let txSigner;
  let reclaimPsbtB64;
  let reclaimPsbtHex;
  let signerPsbtB64;
  let signerPsbtHex;
  onMount(async () => {
    txReclaim = prTx.buildReclaimTransaction();
    reclaimPsbtB64 = base64.encode(txReclaim.toPSBT());
    reclaimPsbtHex = hex.encode(txReclaim.toPSBT());
    txSigner = prTx.buildSignerTransaction();
    signerPsbtB64 = base64.encode(txSigner.toPSBT());
    signerPsbtHex = hex.encode(txSigner.toPSBT());
    $$invalidate(1, currentTx = reclaimPsbtHex);
    $$invalidate(2, currentFmt = formats[1]);
    copy();
    if (addresses().cardinal === prTx.fromBtcAddress) {
      $$invalidate(3, signWeb = true);
    }
  });
  $$self.$$.on_mount.push(function() {
    if (prTx === void 0 && !("prTx" in $$props || $$self.$$.bound[$$self.$$.props["prTx"]])) {
      console_1.warn("<ReclaimForm> was created without expected prop 'prTx'");
    }
  });
  const writable_props = ["prTx"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console_1.warn(`<ReclaimForm> was created with unknown prop '${key}'`);
  });
  const click_handler = () => updateWallet("reclaimHex");
  const click_handler_1 = () => updateWallet("reclaimB64");
  const click_handler_2 = () => updateWallet("signerB64");
  const click_handler_3 = () => updateWallet("signerHex");
  const click_handler_4 = () => signWithWebWallet();
  function input_input_handler() {
    currentTx = this.value;
    $$invalidate(1, currentTx);
  }
  $$self.$$set = ($$props2) => {
    if ("prTx" in $$props2)
      $$invalidate(0, prTx = $$props2.prTx);
  };
  $$self.$capture_state = () => ({
    onMount,
    createEventDispatcher,
    CopyClipboard,
    DebugPeginInfo,
    addresses,
    openPsbtRequestPopup,
    hex,
    base64,
    btc,
    hexToBytes,
    sendRawTxDirectMempool,
    dispatch,
    prTx,
    copied,
    errorReason,
    signWithWebWallet,
    resp,
    broadcasted,
    broadcastTransaction,
    copy,
    formats,
    currentTx,
    currentFmt,
    updateWallet,
    showDetails,
    signWeb,
    txReclaim,
    txSigner,
    reclaimPsbtB64,
    reclaimPsbtHex,
    signerPsbtB64,
    signerPsbtHex
  });
  $$self.$inject_state = ($$props2) => {
    if ("prTx" in $$props2)
      $$invalidate(0, prTx = $$props2.prTx);
    if ("copied" in $$props2)
      copied = $$props2.copied;
    if ("errorReason" in $$props2)
      errorReason = $$props2.errorReason;
    if ("resp" in $$props2)
      resp = $$props2.resp;
    if ("broadcasted" in $$props2)
      broadcasted = $$props2.broadcasted;
    if ("currentTx" in $$props2)
      $$invalidate(1, currentTx = $$props2.currentTx);
    if ("currentFmt" in $$props2)
      $$invalidate(2, currentFmt = $$props2.currentFmt);
    if ("showDetails" in $$props2)
      showDetails = $$props2.showDetails;
    if ("signWeb" in $$props2)
      $$invalidate(3, signWeb = $$props2.signWeb);
    if ("txReclaim" in $$props2)
      txReclaim = $$props2.txReclaim;
    if ("txSigner" in $$props2)
      txSigner = $$props2.txSigner;
    if ("reclaimPsbtB64" in $$props2)
      reclaimPsbtB64 = $$props2.reclaimPsbtB64;
    if ("reclaimPsbtHex" in $$props2)
      reclaimPsbtHex = $$props2.reclaimPsbtHex;
    if ("signerPsbtB64" in $$props2)
      signerPsbtB64 = $$props2.signerPsbtB64;
    if ("signerPsbtHex" in $$props2)
      signerPsbtHex = $$props2.signerPsbtHex;
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    prTx,
    currentTx,
    currentFmt,
    signWeb,
    signWithWebWallet,
    updateWallet,
    click_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3,
    click_handler_4,
    input_input_handler
  ];
}
class ReclaimForm extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { prTx: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ReclaimForm",
      options,
      id: create_fragment$1.name
    });
  }
  get prTx() {
    throw new Error("<ReclaimForm>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set prTx(value) {
    throw new Error("<ReclaimForm>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const _page_svelte_svelte_type_style_lang = "";
const file = "src/routes/reclaim/+page.svelte";
function create_if_block_1(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_2, create_if_block_3, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*view*/
      ctx2[3] === "sign_tx_view"
    )
      return 0;
    if (
      /*view*/
      ctx2[3] === "build_tx_view"
    )
      return 1;
    return 2;
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
    p: function update(ctx2, dirty) {
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
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(50:1) {#if inited}",
    ctx
  });
  return block;
}
function create_else_block(ctx) {
  let div1;
  let div0;
  let t;
  const block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      t = text("Loading data..");
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t = claim_text(div0_nodes, "Loading data..");
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "my-3 d-flex justify-content-between");
      add_location(div0, file, 79, 4, 3096);
      attr_dev(div1, "class", "card-width");
      add_location(div1, file, 78, 3, 3067);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div1, anchor);
      append_hydration_dev(div1, div0);
      append_hydration_dev(div0, t);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(78:2) {:else}",
    ctx
  });
  return block;
}
function create_if_block_3(ctx) {
  let div1;
  let div0;
  let h1;
  let t0;
  let t1;
  let div10;
  let div2;
  let t2;
  let div3;
  let t3_value = (
    /*peginRequest*/
    ctx[4].fromBtcAddress + ""
  );
  let t3;
  let t4;
  let div4;
  let t5;
  let t6;
  let div5;
  let a;
  let t7_value = truncate(
    /*peginRequest*/
    ctx[4].btcTxid
  ) + "";
  let t7;
  let t8;
  let div6;
  let t9;
  let div7;
  let t10_value = (
    /*peginRequest*/
    ctx[4].stacksAddress + ""
  );
  let t10;
  let t11;
  let div8;
  let t12;
  let div9;
  let t13_value = (
    /*prTx*/
    ctx[0].pegInData.amount + ""
  );
  let t13;
  let t14;
  let t15;
  let div13;
  let div11;
  let button0;
  let t16;
  let t17;
  let div12;
  let button1;
  let t18;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      h1 = element("h1");
      t0 = text("Reclaim Pegin Request");
      t1 = space();
      div10 = element("div");
      div2 = element("div");
      t2 = text("Return Address");
      div3 = element("div");
      t3 = text(t3_value);
      t4 = space();
      div4 = element("div");
      t5 = text("Tx Id");
      t6 = space();
      div5 = element("div");
      a = element("a");
      t7 = text(t7_value);
      t8 = space();
      div6 = element("div");
      t9 = text("Stacks addr");
      div7 = element("div");
      t10 = text(t10_value);
      t11 = space();
      div8 = element("div");
      t12 = text("For");
      div9 = element("div");
      t13 = text(t13_value);
      t14 = text(" Sats");
      t15 = space();
      div13 = element("div");
      div11 = element("div");
      button0 = element("button");
      t16 = text("CONTINUE");
      t17 = space();
      div12 = element("div");
      button1 = element("button");
      t18 = text("BACK");
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h1 = claim_element(div0_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Reclaim Pegin Request");
      h1_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      div10 = claim_element(nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      div2 = claim_element(div10_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      t2 = claim_text(div2_nodes, "Return Address");
      div2_nodes.forEach(detach_dev);
      div3 = claim_element(div10_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      t3 = claim_text(div3_nodes, t3_value);
      div3_nodes.forEach(detach_dev);
      t4 = claim_space(div10_nodes);
      div4 = claim_element(div10_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      t5 = claim_text(div4_nodes, "Tx Id");
      div4_nodes.forEach(detach_dev);
      t6 = claim_space(div10_nodes);
      div5 = claim_element(div10_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      a = claim_element(div5_nodes, "A", { href: true, target: true, rel: true });
      var a_nodes = children(a);
      t7 = claim_text(a_nodes, t7_value);
      a_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t8 = claim_space(div10_nodes);
      div6 = claim_element(div10_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      t9 = claim_text(div6_nodes, "Stacks addr");
      div6_nodes.forEach(detach_dev);
      div7 = claim_element(div10_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      t10 = claim_text(div7_nodes, t10_value);
      div7_nodes.forEach(detach_dev);
      t11 = claim_space(div10_nodes);
      div8 = claim_element(div10_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      t12 = claim_text(div8_nodes, "For");
      div8_nodes.forEach(detach_dev);
      div9 = claim_element(div10_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      t13 = claim_text(div9_nodes, t13_value);
      t14 = claim_text(div9_nodes, " Sats");
      div9_nodes.forEach(detach_dev);
      div10_nodes.forEach(detach_dev);
      t15 = claim_space(nodes);
      div13 = claim_element(nodes, "DIV", { class: true });
      var div13_nodes = children(div13);
      div11 = claim_element(div13_nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      button0 = claim_element(div11_nodes, "BUTTON", { class: true, type: true });
      var button0_nodes = children(button0);
      t16 = claim_text(button0_nodes, "CONTINUE");
      button0_nodes.forEach(detach_dev);
      div11_nodes.forEach(detach_dev);
      t17 = claim_space(div13_nodes);
      div12 = claim_element(div13_nodes, "DIV", { class: true });
      var div12_nodes = children(div12);
      button1 = claim_element(div12_nodes, "BUTTON", { class: true, type: true });
      var button1_nodes = children(button1);
      t18 = claim_text(button1_nodes, "BACK");
      button1_nodes.forEach(detach_dev);
      div12_nodes.forEach(detach_dev);
      div13_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h1, "class", "s-3IUHshgJ7mP2");
      add_location(h1, file, 56, 5, 2173);
      attr_dev(div0, "class", "col");
      add_location(div0, file, 55, 4, 2150);
      attr_dev(div1, "class", "row");
      add_location(div1, file, 54, 3, 2128);
      attr_dev(div2, "class", "col-2");
      add_location(div2, file, 61, 4, 2251);
      attr_dev(div3, "class", "col-10");
      add_location(div3, file, 61, 43, 2290);
      attr_dev(div4, "class", "col-2");
      add_location(div4, file, 62, 4, 2350);
      attr_dev(a, "href", explorerBtcTxUrl(
        /*peginRequest*/
        ctx[4].btcTxid
      ));
      attr_dev(a, "target", "_blank");
      attr_dev(a, "rel", "noreferrer");
      add_location(a, file, 64, 5, 2411);
      attr_dev(div5, "class", "col-10");
      add_location(div5, file, 63, 4, 2385);
      attr_dev(div6, "class", "col-2");
      add_location(div6, file, 66, 4, 2545);
      attr_dev(div7, "class", "col-10");
      add_location(div7, file, 66, 40, 2581);
      attr_dev(div8, "class", "col-2");
      add_location(div8, file, 67, 4, 2640);
      attr_dev(div9, "class", "col-10");
      add_location(div9, file, 67, 32, 2668);
      attr_dev(div10, "class", "row");
      add_location(div10, file, 60, 3, 2229);
      attr_dev(button0, "class", "btn btn-outline-info w-100");
      attr_dev(button0, "type", "button");
      add_location(button0, file, 71, 5, 2786);
      attr_dev(div11, "class", "col");
      add_location(div11, file, 70, 4, 2763);
      attr_dev(button1, "class", "btn btn-outline-info w-100");
      attr_dev(button1, "type", "button");
      add_location(button1, file, 74, 5, 2930);
      attr_dev(div12, "class", "col");
      add_location(div12, file, 73, 4, 2907);
      attr_dev(div13, "class", "row my-5");
      add_location(div13, file, 69, 3, 2736);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div1, anchor);
      append_hydration_dev(div1, div0);
      append_hydration_dev(div0, h1);
      append_hydration_dev(h1, t0);
      insert_hydration_dev(target, t1, anchor);
      insert_hydration_dev(target, div10, anchor);
      append_hydration_dev(div10, div2);
      append_hydration_dev(div2, t2);
      append_hydration_dev(div10, div3);
      append_hydration_dev(div3, t3);
      append_hydration_dev(div10, t4);
      append_hydration_dev(div10, div4);
      append_hydration_dev(div4, t5);
      append_hydration_dev(div10, t6);
      append_hydration_dev(div10, div5);
      append_hydration_dev(div5, a);
      append_hydration_dev(a, t7);
      append_hydration_dev(div10, t8);
      append_hydration_dev(div10, div6);
      append_hydration_dev(div6, t9);
      append_hydration_dev(div10, div7);
      append_hydration_dev(div7, t10);
      append_hydration_dev(div10, t11);
      append_hydration_dev(div10, div8);
      append_hydration_dev(div8, t12);
      append_hydration_dev(div10, div9);
      append_hydration_dev(div9, t13);
      append_hydration_dev(div9, t14);
      insert_hydration_dev(target, t15, anchor);
      insert_hydration_dev(target, div13, anchor);
      append_hydration_dev(div13, div11);
      append_hydration_dev(div11, button0);
      append_hydration_dev(button0, t16);
      append_hydration_dev(div13, t17);
      append_hydration_dev(div13, div12);
      append_hydration_dev(div12, button1);
      append_hydration_dev(button1, t18);
      if (!mounted) {
        dispose = [
          listen_dev(
            button0,
            "click",
            /*click_handler*/
            ctx[7],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            button1,
            "click",
            /*click_handler_1*/
            ctx[8],
            false,
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*prTx*/
      1 && t13_value !== (t13_value = /*prTx*/
      ctx2[0].pegInData.amount + ""))
        set_data_dev(t13, t13_value);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(div10);
      if (detaching)
        detach_dev(t15);
      if (detaching)
        detach_dev(div13);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_3.name,
    type: "if",
    source: "(53:37) ",
    ctx
  });
  return block;
}
function create_if_block_2(ctx) {
  let transactions;
  let current;
  transactions = new ReclaimForm({
    props: { prTx: (
      /*prTx*/
      ctx[0]
    ) },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(transactions.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(transactions.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(transactions, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const transactions_changes = {};
      if (dirty & /*prTx*/
      1)
        transactions_changes.prTx = /*prTx*/
        ctx2[0];
      transactions.$set(transactions_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(transactions.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(transactions.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(transactions, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(51:2) {#if view === 'sign_tx_view'}",
    ctx
  });
  return block;
}
function create_if_block(ctx) {
  let div1;
  let div0;
  const block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "my-3 d-flex justify-content-between");
      add_location(div0, file, 85, 2, 3238);
      attr_dev(div1, "class", "card-width");
      add_location(div1, file, 84, 1, 3211);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div1, anchor);
      append_hydration_dev(div1, div0);
      div0.innerHTML = /*errorReason*/
      ctx[2];
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*errorReason*/
      4)
        div0.innerHTML = /*errorReason*/
        ctx2[2];
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(84:1) {#if errorReason}",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let section;
  let div;
  let t;
  let current;
  let if_block0 = (
    /*inited*/
    ctx[1] && create_if_block_1(ctx)
  );
  let if_block1 = (
    /*errorReason*/
    ctx[2] && create_if_block(ctx)
  );
  const block = {
    c: function create() {
      section = element("section");
      div = element("div");
      if (if_block0)
        if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      div = claim_element(section_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (if_block0)
        if_block0.l(div_nodes);
      t = claim_space(div_nodes);
      if (if_block1)
        if_block1.l(div_nodes);
      div_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "container my-5 p-5");
      add_location(div, file, 48, 1, 1910);
      attr_dev(section, "class", "bg-dark text-white s-3IUHshgJ7mP2");
      add_location(section, file, 47, 0, 1871);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, section, anchor);
      append_hydration_dev(section, div);
      if (if_block0)
        if_block0.m(div, null);
      append_hydration_dev(div, t);
      if (if_block1)
        if_block1.m(div, null);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (
        /*inited*/
        ctx2[1]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*inited*/
          2) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div, t);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*errorReason*/
        ctx2[2]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          if_block1.m(div, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block0);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block0);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(section);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
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
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(9, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Page", slots, []);
  if (!$sbtcConfig.peginRequest)
    goto("/listReclaims");
  const peginRequest = $sbtcConfig.peginRequest;
  let prTx = new ReclaimTransaction();
  let inited = false;
  const network = CONFIG.VITE_NETWORK;
  const openSigView = () => {
    $$invalidate(3, view = "sign_tx_view");
  };
  const openBackView = () => {
    goto("/listReclaims");
  };
  const updateTransaction = () => {
    $$invalidate(3, view = "build_tx_view");
  };
  let errorReason;
  onMount(async () => {
    var _a;
    try {
      if (!prTx.ready) {
        $$invalidate(0, prTx = await ReclaimTransaction.create(network, peginRequest.btcTxid, peginRequest.fromBtcAddress, peginRequest.sbtcWalletAddress));
      }
      $$invalidate(0, prTx.pegInData.requestData = peginRequest, prTx);
      prTx.calculateFees();
      prTx.setStacksAddress(addresses().stxAddress);
      $$invalidate(0, prTx.pegInData.amount = ((_a = peginRequest.vout) == null ? void 0 : _a.value) || 0, prTx);
      $$invalidate(1, inited = true);
    } catch (err) {
      $$invalidate(2, errorReason = COMMS_ERROR + "<br/><br/>This can happen when the address has unconfirmed transactions - we have this issue logged and are working to continuously improve the application.");
    }
  });
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Page> was created with unknown prop '${key}'`);
  });
  const click_handler = () => openSigView();
  const click_handler_1 = () => openBackView();
  $$self.$capture_state = () => ({
    CONFIG,
    onMount,
    sbtcConfig,
    PegInTransaction,
    SignTransaction,
    Transactions: ReclaimForm,
    addresses,
    COMMS_ERROR,
    ReclaimTransaction,
    goto,
    truncate,
    explorerBtcTxUrl,
    explorerTxUrl,
    peginRequest,
    prTx,
    inited,
    network,
    openSigView,
    openBackView,
    updateTransaction,
    errorReason,
    view,
    $sbtcConfig
  });
  $$self.$inject_state = ($$props2) => {
    if ("prTx" in $$props2)
      $$invalidate(0, prTx = $$props2.prTx);
    if ("inited" in $$props2)
      $$invalidate(1, inited = $$props2.inited);
    if ("errorReason" in $$props2)
      $$invalidate(2, errorReason = $$props2.errorReason);
    if ("view" in $$props2)
      $$invalidate(3, view = $$props2.view);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$invalidate(3, view = "build_tx_view");
  return [
    prTx,
    inited,
    errorReason,
    view,
    peginRequest,
    openSigView,
    openBackView,
    click_handler,
    click_handler_1
  ];
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
