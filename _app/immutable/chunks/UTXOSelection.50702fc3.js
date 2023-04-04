import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a5 as createEventDispatcher, o as onMount, a3 as validate_each_argument, p as element, y as text, c as space, q as claim_element, r as children, z as claim_text, l as detach_dev, f as claim_space, x as add_location, u as attr_dev, g as insert_hydration_dev, J as append_hydration_dev, V as set_input_value, L as listen_dev, A as set_data_dev, I as noop, N as run_all, a4 as destroy_each, M as prevent_default } from "./index.0c92228d.js";
import { i as isSupported, t as truncate, a as explorerBtcTxUrl, e as explorerTxUrl } from "./utils.7b5b399c.js";
import { a as addresses } from "./stacks_connect.7f325cc2.js";
const file = "src/lib/components/common/UTXOSelection.svelte";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[12] = list[i];
  return child_ctx;
}
function create_else_block(ctx) {
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
      add_location(span, file, 69, 11, 2644);
      add_location(div, file, 69, 6, 2639);
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
    id: create_else_block.name,
    type: "else",
    source: "(69:4) {:else}",
    ctx
  });
  return block;
}
function create_if_block_2(ctx) {
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
      add_location(div0, file, 61, 6, 2086);
      attr_dev(a0, "href", "/");
      attr_dev(a0, "class", "text-white px-3 border-right");
      add_location(a0, file, 63, 8, 2253);
      attr_dev(a1, "href", "/");
      attr_dev(a1, "class", "text-white px-3 border-right");
      add_location(a1, file, 64, 8, 2371);
      attr_dev(a2, "href", "/");
      attr_dev(a2, "class", "text-white ps-3 ");
      add_location(a2, file, 65, 8, 2493);
      add_location(div1, file, 62, 6, 2239);
      attr_dev(div2, "class", "text-small d-flex justify-content-between text-info");
      add_location(div2, file, 60, 4, 2013);
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
    id: create_if_block_2.name,
    type: "if",
    source: "(60:4) {#if utxoData.numbInputs > 0}",
    ctx
  });
  return block;
}
function create_if_block_1(ctx) {
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
      add_location(span, file, 72, 11, 2807);
      add_location(div, file, 72, 6, 2802);
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
    id: create_if_block_1.name,
    type: "if",
    source: "(72:4) {#if bitcoinAddress && errorReason}",
    ctx
  });
  return block;
}
function create_if_block(ctx) {
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
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
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
      add_location(span0, file, 77, 25, 2976);
      attr_dev(div0, "class", "col-2");
      add_location(div0, file, 77, 6, 2957);
      attr_dev(span1, "class", "text-warning");
      add_location(span1, file, 78, 25, 3046);
      attr_dev(div1, "class", "col-2");
      add_location(div1, file, 78, 6, 3027);
      attr_dev(span2, "class", "text-warning");
      add_location(span2, file, 79, 25, 3117);
      attr_dev(div2, "class", "col-2");
      add_location(div2, file, 79, 6, 3098);
      attr_dev(span3, "class", "text-warning");
      add_location(span3, file, 80, 25, 3189);
      attr_dev(div3, "class", "col-6");
      add_location(div3, file, 80, 6, 3170);
      attr_dev(div4, "class", "row");
      add_location(div4, file, 76, 4, 2933);
      attr_dev(div5, "class", "mt-3 mb-4 mx-0 px-0");
      add_location(div5, file, 75, 4, 2895);
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
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
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
    id: create_if_block.name,
    type: "if",
    source: "(75:4) {#if showUtxos}",
    ctx
  });
  return block;
}
function create_each_block(ctx) {
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
      add_location(span0, file, 84, 25, 3349);
      attr_dev(div0, "class", "col-2");
      add_location(div0, file, 84, 6, 3330);
      attr_dev(span1, "class", "");
      add_location(span1, file, 85, 25, 3414);
      attr_dev(div1, "class", "col-2");
      add_location(div1, file, 85, 6, 3395);
      attr_dev(span2, "class", span2_class_value = /*utxo*/
      ctx[12].tx.confirmations < 6 ? "text-warning" : "text-success");
      add_location(span2, file, 86, 25, 3480);
      attr_dev(div2, "class", "col-2");
      add_location(div2, file, 86, 6, 3461);
      attr_dev(a, "href", a_href_value = explorerBtcTxUrl(
        /*utxo*/
        ctx[12].txid
      ));
      attr_dev(a, "target", "_blank");
      attr_dev(a, "rel", "noreferrer");
      add_location(a, file, 87, 40, 3679);
      attr_dev(span3, "class", "");
      add_location(span3, file, 87, 25, 3664);
      attr_dev(div3, "class", "col-6");
      add_location(div3, file, 87, 6, 3645);
      attr_dev(div4, "class", "row text-white text-small");
      add_location(div4, file, 83, 4, 3284);
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
    id: create_each_block.name,
    type: "each",
    source: "(83:4) {#each utxoData.utxos as utxo}",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
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
      return create_if_block_2;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type(ctx);
  let if_block1 = (
    /*bitcoinAddress*/
    ctx[1] && /*errorReason*/
    ctx[2] && create_if_block_1(ctx)
  );
  let if_block2 = (
    /*showUtxos*/
    ctx[3] && create_if_block(ctx)
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
      add_location(span0, file, 54, 6, 1504);
      attr_dev(span1, "class", "pointer text-info");
      attr_dev(span1, "data-bs-toggle", "tooltip-ftux");
      attr_dev(span1, "data-bs-placement", "top");
      attr_dev(span1, "data-bs-custom-class", "custom-tooltip");
      attr_dev(span1, "title", "Your bitcoin address. Funds you send from this wallet will be exchanged for sBTC");
      add_location(span1, file, 55, 6, 1540);
      attr_dev(label, "for", "transact-path");
      attr_dev(label, "class", "d-flex justify-content-between");
      add_location(label, file, 53, 4, 1431);
      attr_dev(input, "type", "text");
      attr_dev(input, "id", "from-address");
      attr_dev(input, "class", "form-control");
      attr_dev(input, "autocomplete", "off");
      add_location(input, file, 57, 4, 1778);
      attr_dev(div0, "class", "text-small");
      add_location(div0, file, 58, 4, 1929);
      attr_dev(div1, "class", "col");
      add_location(div1, file, 52, 2, 1409);
      attr_dev(div2, "class", "row");
      add_location(div2, file, 51, 0, 1389);
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
          if_block1 = create_if_block_1(ctx2);
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
          if_block2 = create_if_block(ctx2);
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
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance($$self, $$props, $$invalidate) {
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
      console.warn(`<UTXOSelection> was created with unknown prop '${key}'`);
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
class UTXOSelection extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { utxoData: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "UTXOSelection",
      options,
      id: create_fragment.name
    });
  }
  get utxoData() {
    throw new Error("<UTXOSelection>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set utxoData(value) {
    throw new Error("<UTXOSelection>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
export {
  UTXOSelection as U
};
