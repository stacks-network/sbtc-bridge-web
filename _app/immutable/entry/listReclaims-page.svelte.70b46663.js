import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, o as onMount, a3 as validate_each_argument, p as element, q as claim_element, r as children, l as detach_dev, u as attr_dev, x as add_location, g as insert_hydration_dev, O as append_hydration_dev, Z as noop, y as text, c as space, e as empty, z as claim_text, f as claim_space, a4 as destroy_each, A as set_data_dev } from "../chunks/index.605ac338.js";
import { j as fetchMyWrapTransactions, a as addresses } from "../chunks/stacks_connect.b652bb6f.js";
import { C as COMMS_ERROR, t as truncate, a as explorerBtcTxUrl, b as explorerBtcAddressUrl } from "../chunks/utils.121fbef1.js";
const _page_svelte_svelte_type_style_lang = "";
const file = "src/routes/listReclaims/+page.svelte";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
}
function create_if_block(ctx) {
  let h4;
  let t0;
  let t1;
  let p;
  let t2;
  let t3_value = addresses().stxAddress + "";
  let t3;
  let t4;
  let div5;
  let div0;
  let span0;
  let t5;
  let t6;
  let div1;
  let span1;
  let t7;
  let t8;
  let div2;
  let span2;
  let t9;
  let t10;
  let div3;
  let span3;
  let t11;
  let t12;
  let div4;
  let span4;
  let t13;
  let t14;
  let each_1_anchor;
  let each_value = (
    /*peginRequests*/
    ctx[1]
  );
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const block = {
    c: function create() {
      h4 = element("h4");
      t0 = text("Activity");
      t1 = space();
      p = element("p");
      t2 = text("Account: ");
      t3 = text(t3_value);
      t4 = space();
      div5 = element("div");
      div0 = element("div");
      span0 = element("span");
      t5 = text("Status");
      t6 = space();
      div1 = element("div");
      span1 = element("span");
      t7 = text("From");
      t8 = space();
      div2 = element("div");
      span2 = element("span");
      t9 = text("To");
      t10 = space();
      div3 = element("div");
      span3 = element("span");
      t11 = text("Sats.");
      t12 = space();
      div4 = element("div");
      span4 = element("span");
      t13 = text("Txid");
      t14 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      h4 = claim_element(nodes, "H4", { class: true });
      var h4_nodes = children(h4);
      t0 = claim_text(h4_nodes, "Activity");
      h4_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, "Account: ");
      t3 = claim_text(p_nodes, t3_value);
      p_nodes.forEach(detach_dev);
      t4 = claim_space(nodes);
      div5 = claim_element(nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div0 = claim_element(div5_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      span0 = claim_element(div0_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t5 = claim_text(span0_nodes, "Status");
      span0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t6 = claim_space(div5_nodes);
      div1 = claim_element(div5_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      span1 = claim_element(div1_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t7 = claim_text(span1_nodes, "From");
      span1_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t8 = claim_space(div5_nodes);
      div2 = claim_element(div5_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      span2 = claim_element(div2_nodes, "SPAN", { class: true });
      var span2_nodes = children(span2);
      t9 = claim_text(span2_nodes, "To");
      span2_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t10 = claim_space(div5_nodes);
      div3 = claim_element(div5_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      span3 = claim_element(div3_nodes, "SPAN", { class: true });
      var span3_nodes = children(span3);
      t11 = claim_text(span3_nodes, "Sats.");
      span3_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t12 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      span4 = claim_element(div4_nodes, "SPAN", { class: true });
      var span4_nodes = children(span4);
      t13 = claim_text(span4_nodes, "Txid");
      span4_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t14 = claim_space(nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      attr_dev(h4, "class", "");
      add_location(h4, file, 43, 2, 1133);
      attr_dev(p, "class", "");
      add_location(p, file, 44, 2, 1162);
      attr_dev(span0, "class", "text-warning");
      add_location(span0, file, 46, 22, 1254);
      attr_dev(div0, "class", "col-2");
      add_location(div0, file, 46, 3, 1235);
      attr_dev(span1, "class", "text-warning");
      add_location(span1, file, 47, 22, 1323);
      attr_dev(div1, "class", "col-2");
      add_location(div1, file, 47, 3, 1304);
      attr_dev(span2, "class", "text-warning");
      add_location(span2, file, 48, 22, 1390);
      attr_dev(div2, "class", "col-2");
      add_location(div2, file, 48, 3, 1371);
      attr_dev(span3, "class", "text-warning");
      add_location(span3, file, 49, 22, 1455);
      attr_dev(div3, "class", "col-2");
      add_location(div3, file, 49, 3, 1436);
      attr_dev(span4, "class", "text-warning");
      add_location(span4, file, 50, 22, 1523);
      attr_dev(div4, "class", "col-4");
      add_location(div4, file, 50, 3, 1504);
      attr_dev(div5, "class", "row");
      add_location(div5, file, 45, 2, 1214);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, h4, anchor);
      append_hydration_dev(h4, t0);
      insert_hydration_dev(target, t1, anchor);
      insert_hydration_dev(target, p, anchor);
      append_hydration_dev(p, t2);
      append_hydration_dev(p, t3);
      insert_hydration_dev(target, t4, anchor);
      insert_hydration_dev(target, div5, anchor);
      append_hydration_dev(div5, div0);
      append_hydration_dev(div0, span0);
      append_hydration_dev(span0, t5);
      append_hydration_dev(div5, t6);
      append_hydration_dev(div5, div1);
      append_hydration_dev(div1, span1);
      append_hydration_dev(span1, t7);
      append_hydration_dev(div5, t8);
      append_hydration_dev(div5, div2);
      append_hydration_dev(div2, span2);
      append_hydration_dev(span2, t9);
      append_hydration_dev(div5, t10);
      append_hydration_dev(div5, div3);
      append_hydration_dev(div3, span3);
      append_hydration_dev(span3, t11);
      append_hydration_dev(div5, t12);
      append_hydration_dev(div5, div4);
      append_hydration_dev(div4, span4);
      append_hydration_dev(span4, t13);
      insert_hydration_dev(target, t14, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_hydration_dev(target, each_1_anchor, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*explorerBtcTxUrl, peginRequests, truncate, explorerBtcAddressUrl, getTo, getStatus*/
      14) {
        each_value = /*peginRequests*/
        ctx2[1];
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
      if (detaching)
        detach_dev(h4);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(p);
      if (detaching)
        detach_dev(t4);
      if (detaching)
        detach_dev(div5);
      if (detaching)
        detach_dev(t14);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(43:1) {#if inited}",
    ctx
  });
  return block;
}
function create_else_block(ctx) {
  let t_value = (
    /*pegin*/
    ctx[5].amount + ""
  );
  let t;
  const block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*peginRequests*/
      2 && t_value !== (t_value = /*pegin*/
      ctx2[5].amount + ""))
        set_data_dev(t, t_value);
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
    source: "(62:48) {:else}",
    ctx
  });
  return block;
}
function create_if_block_1(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("?");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "?");
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
    id: create_if_block_1.name,
    type: "if",
    source: "(62:23) {#if pegin.status === 1}",
    ctx
  });
  return block;
}
function create_each_block(ctx) {
  var _a;
  let div5;
  let div0;
  let t0_value = (
    /*getStatus*/
    ctx[2](
      /*pegin*/
      ctx[5].status
    ) + ""
  );
  let t0;
  let t1;
  let div1;
  let a0;
  let t2_value = truncate(
    /*pegin*/
    ctx[5].fromBtcAddress
  ) + "";
  let t2;
  let a0_href_value;
  let t3;
  let div2;
  let a1;
  let t4_value = truncate(
    /*pegin*/
    (_a = ctx[5].timeBasedPegin) == null ? void 0 : _a.address
  ) + "";
  let t4;
  let a1_href_value;
  let t5;
  let div3;
  let t6;
  let div4;
  let a2;
  let t7_value = truncate(
    /*pegin*/
    ctx[5].btcTxid
  ) + "";
  let t7;
  let a2_href_value;
  let t8;
  function select_block_type(ctx2, dirty) {
    if (
      /*pegin*/
      ctx2[5].status === 1
    )
      return create_if_block_1;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  const block = {
    c: function create() {
      div5 = element("div");
      div0 = element("div");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      a0 = element("a");
      t2 = text(t2_value);
      t3 = space();
      div2 = element("div");
      a1 = element("a");
      t4 = text(t4_value);
      t5 = space();
      div3 = element("div");
      if_block.c();
      t6 = space();
      div4 = element("div");
      a2 = element("a");
      t7 = text(t7_value);
      t8 = space();
      this.h();
    },
    l: function claim(nodes) {
      div5 = claim_element(nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div0 = claim_element(div5_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, t0_value);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(div5_nodes);
      div1 = claim_element(div5_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      a0 = claim_element(div1_nodes, "A", { href: true, target: true, rel: true });
      var a0_nodes = children(a0);
      t2 = claim_text(a0_nodes, t2_value);
      a0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t3 = claim_space(div5_nodes);
      div2 = claim_element(div5_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      a1 = claim_element(div2_nodes, "A", { href: true, target: true, rel: true });
      var a1_nodes = children(a1);
      t4 = claim_text(a1_nodes, t4_value);
      a1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t5 = claim_space(div5_nodes);
      div3 = claim_element(div5_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      if_block.l(div3_nodes);
      div3_nodes.forEach(detach_dev);
      t6 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      a2 = claim_element(div4_nodes, "A", { href: true, target: true, rel: true });
      var a2_nodes = children(a2);
      t7 = claim_text(a2_nodes, t7_value);
      a2_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      t8 = claim_space(div5_nodes);
      div5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "col-2");
      add_location(div0, file, 54, 4, 1646);
      attr_dev(a0, "href", a0_href_value = explorerBtcAddressUrl(
        /*pegin*/
        ctx[5].fromBtcAddress
      ));
      attr_dev(a0, "target", "_blank");
      attr_dev(a0, "rel", "noreferrer");
      add_location(a0, file, 56, 5, 1726);
      attr_dev(div1, "class", "col-2");
      add_location(div1, file, 55, 4, 1701);
      attr_dev(a1, "href", a1_href_value = explorerBtcAddressUrl(
        /*getTo*/
        ctx[3](
          /*pegin*/
          ctx[5]
        )
      ));
      attr_dev(a1, "target", "_blank");
      attr_dev(a1, "rel", "noreferrer");
      add_location(a1, file, 59, 5, 1890);
      attr_dev(div2, "class", "col-2");
      add_location(div2, file, 58, 4, 1865);
      attr_dev(div3, "class", "col-2");
      add_location(div3, file, 61, 4, 2030);
      attr_dev(a2, "href", a2_href_value = explorerBtcTxUrl(
        /*pegin*/
        ctx[5].btcTxid
      ));
      attr_dev(a2, "target", "_blank");
      attr_dev(a2, "rel", "noreferrer");
      add_location(a2, file, 63, 5, 2136);
      attr_dev(div4, "class", "col-4");
      add_location(div4, file, 62, 4, 2111);
      attr_dev(div5, "class", "row text-white");
      add_location(div5, file, 53, 3, 1613);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div5, anchor);
      append_hydration_dev(div5, div0);
      append_hydration_dev(div0, t0);
      append_hydration_dev(div5, t1);
      append_hydration_dev(div5, div1);
      append_hydration_dev(div1, a0);
      append_hydration_dev(a0, t2);
      append_hydration_dev(div5, t3);
      append_hydration_dev(div5, div2);
      append_hydration_dev(div2, a1);
      append_hydration_dev(a1, t4);
      append_hydration_dev(div5, t5);
      append_hydration_dev(div5, div3);
      if_block.m(div3, null);
      append_hydration_dev(div5, t6);
      append_hydration_dev(div5, div4);
      append_hydration_dev(div4, a2);
      append_hydration_dev(a2, t7);
      append_hydration_dev(div5, t8);
    },
    p: function update(ctx2, dirty) {
      var _a2;
      if (dirty & /*peginRequests*/
      2 && t0_value !== (t0_value = /*getStatus*/
      ctx2[2](
        /*pegin*/
        ctx2[5].status
      ) + ""))
        set_data_dev(t0, t0_value);
      if (dirty & /*peginRequests*/
      2 && t2_value !== (t2_value = truncate(
        /*pegin*/
        ctx2[5].fromBtcAddress
      ) + ""))
        set_data_dev(t2, t2_value);
      if (dirty & /*peginRequests*/
      2 && a0_href_value !== (a0_href_value = explorerBtcAddressUrl(
        /*pegin*/
        ctx2[5].fromBtcAddress
      ))) {
        attr_dev(a0, "href", a0_href_value);
      }
      if (dirty & /*peginRequests*/
      2 && t4_value !== (t4_value = truncate(
        /*pegin*/
        (_a2 = ctx2[5].timeBasedPegin) == null ? void 0 : _a2.address
      ) + ""))
        set_data_dev(t4, t4_value);
      if (dirty & /*peginRequests*/
      2 && a1_href_value !== (a1_href_value = explorerBtcAddressUrl(
        /*getTo*/
        ctx2[3](
          /*pegin*/
          ctx2[5]
        )
      ))) {
        attr_dev(a1, "href", a1_href_value);
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div3, null);
        }
      }
      if (dirty & /*peginRequests*/
      2 && t7_value !== (t7_value = truncate(
        /*pegin*/
        ctx2[5].btcTxid
      ) + ""))
        set_data_dev(t7, t7_value);
      if (dirty & /*peginRequests*/
      2 && a2_href_value !== (a2_href_value = explorerBtcTxUrl(
        /*pegin*/
        ctx2[5].btcTxid
      ))) {
        attr_dev(a2, "href", a2_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div5);
      if_block.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(53:2) {#each peginRequests as pegin}",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let section;
  let div;
  let if_block = (
    /*inited*/
    ctx[0] && create_if_block(ctx)
  );
  const block = {
    c: function create() {
      section = element("section");
      div = element("div");
      if (if_block)
        if_block.c();
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      div = claim_element(section_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "container my-4 p-4");
      add_location(div, file, 41, 1, 1084);
      attr_dev(section, "class", "bg-dark text-white s-gURQwspLRvWr");
      add_location(section, file, 40, 0, 1046);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, section, anchor);
      append_hydration_dev(section, div);
      if (if_block)
        if_block.m(div, null);
    },
    p: function update(ctx2, [dirty]) {
      if (
        /*inited*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(div, null);
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
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Page", slots, []);
  let inited = false;
  let peginRequests;
  let errorReason;
  const getStatus = (status) => {
    if (status === 1) {
      return "not seen";
    }
    if (status === 2) {
      return "seen onchain";
    }
    if (status === 3) {
      return "revealed";
    }
  };
  const getTo = (pegin) => {
    if (pegin && pegin.timeBasedPegin && pegin.timeBasedPegin.address) {
      return pegin.timeBasedPegin.address;
    } else {
      return "unknown";
    }
  };
  onMount(async () => {
    try {
      $$invalidate(1, peginRequests = await fetchMyWrapTransactions(addresses().stxAddress));
      if (peginRequests.length > 0)
        $$invalidate(0, inited = true);
    } catch (err) {
      errorReason = COMMS_ERROR;
    }
  });
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Page> was created with unknown prop '${key}'`);
  });
  $$self.$capture_state = () => ({
    onMount,
    addresses,
    COMMS_ERROR,
    truncate,
    explorerBtcTxUrl,
    explorerBtcAddressUrl,
    fetchMyWrapTransactions,
    inited,
    peginRequests,
    errorReason,
    getStatus,
    getTo
  });
  $$self.$inject_state = ($$props2) => {
    if ("inited" in $$props2)
      $$invalidate(0, inited = $$props2.inited);
    if ("peginRequests" in $$props2)
      $$invalidate(1, peginRequests = $$props2.peginRequests);
    if ("errorReason" in $$props2)
      errorReason = $$props2.errorReason;
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [inited, peginRequests, getStatus, getTo];
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
