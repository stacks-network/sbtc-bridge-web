import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, U as validate_store, V as component_subscribe, v as validate_slots, o as onMount, a3 as validate_each_argument, p as element, q as claim_element, r as children, l as detach_dev, u as attr_dev, x as add_location, g as insert_hydration_dev, O as append_hydration_dev, _ as noop, e as empty, a4 as destroy_each, y as text, c as space, z as claim_text, f as claim_space, W as listen_dev, X as prevent_default, A as set_data_dev } from "../chunks/index.d5e223f8.js";
import { s as sbtcConfig } from "../chunks/stores.3f4ae6bf.js";
import { P as PegInTransaction } from "../chunks/PegInTransaction.5807a3a2.js";
import { j as fetchMyWrapTransactions, a as addresses } from "../chunks/stacks_connect.185d0304.js";
import { C as COMMS_ERROR } from "../chunks/utils.7d5a9605.js";
import { R as ReclaimTransaction } from "../chunks/ReclaimTransaction.1fdc97f3.js";
import { g as goto } from "../chunks/navigation.c506d165.js";
const _page_svelte_svelte_type_style_lang = "";
const file = "src/routes/listReclaims/+page.svelte";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  return child_ctx;
}
function create_if_block(ctx) {
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
      if (dirty & /*peginRequests, setPegin*/
      6) {
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
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(34:1) {#if inited}",
    ctx
  });
  return block;
}
function create_each_block(ctx) {
  var _a;
  let div4;
  let div0;
  let a;
  let t0_value = (
    /*pegin*/
    ctx[7].fromBtcAddress + ""
  );
  let t0;
  let t1;
  let div1;
  let t2_value = (
    /*pegin*/
    ctx[7].stacksAddress + ""
  );
  let t2;
  let t3;
  let div2;
  let t4_value = (
    /*pegin*/
    ctx[7].status + ""
  );
  let t4;
  let t5;
  let div3;
  let t6_value = (
    /*pegin*/
    ((_a = ctx[7].vout) == null ? void 0 : _a.value) + ""
  );
  let t6;
  let t7;
  let mounted;
  let dispose;
  function click_handler() {
    return (
      /*click_handler*/
      ctx[3](
        /*pegin*/
        ctx[7]
      )
    );
  }
  const block = {
    c: function create() {
      div4 = element("div");
      div0 = element("div");
      a = element("a");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      t2 = text(t2_value);
      t3 = space();
      div2 = element("div");
      t4 = text(t4_value);
      t5 = space();
      div3 = element("div");
      t6 = text(t6_value);
      t7 = space();
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      a = claim_element(div0_nodes, "A", { href: true });
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, t0_value);
      a_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(div4_nodes);
      div1 = claim_element(div4_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t2 = claim_text(div1_nodes, t2_value);
      div1_nodes.forEach(detach_dev);
      t3 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      t4 = claim_text(div2_nodes, t4_value);
      div2_nodes.forEach(detach_dev);
      t5 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      t6 = claim_text(div3_nodes, t6_value);
      div3_nodes.forEach(detach_dev);
      t7 = claim_space(div4_nodes);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", "/");
      add_location(a, file, 37, 4, 1256);
      attr_dev(div0, "class", "col");
      add_location(div0, file, 36, 3, 1234);
      attr_dev(div1, "class", "col");
      add_location(div1, file, 39, 3, 1356);
      attr_dev(div2, "class", "col");
      add_location(div2, file, 40, 3, 1404);
      attr_dev(div3, "class", "col");
      add_location(div3, file, 41, 3, 1445);
      attr_dev(div4, "class", "row text-white");
      add_location(div4, file, 35, 2, 1202);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div4, anchor);
      append_hydration_dev(div4, div0);
      append_hydration_dev(div0, a);
      append_hydration_dev(a, t0);
      append_hydration_dev(div4, t1);
      append_hydration_dev(div4, div1);
      append_hydration_dev(div1, t2);
      append_hydration_dev(div4, t3);
      append_hydration_dev(div4, div2);
      append_hydration_dev(div2, t4);
      append_hydration_dev(div4, t5);
      append_hydration_dev(div4, div3);
      append_hydration_dev(div3, t6);
      append_hydration_dev(div4, t7);
      if (!mounted) {
        dispose = listen_dev(a, "click", prevent_default(click_handler), false, true, false, false);
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      var _a2;
      ctx = new_ctx;
      if (dirty & /*peginRequests*/
      2 && t0_value !== (t0_value = /*pegin*/
      ctx[7].fromBtcAddress + ""))
        set_data_dev(t0, t0_value);
      if (dirty & /*peginRequests*/
      2 && t2_value !== (t2_value = /*pegin*/
      ctx[7].stacksAddress + ""))
        set_data_dev(t2, t2_value);
      if (dirty & /*peginRequests*/
      2 && t4_value !== (t4_value = /*pegin*/
      ctx[7].status + ""))
        set_data_dev(t4, t4_value);
      if (dirty & /*peginRequests*/
      2 && t6_value !== (t6_value = /*pegin*/
      ((_a2 = ctx[7].vout) == null ? void 0 : _a2.value) + ""))
        set_data_dev(t6, t6_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div4);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(35:2) {#each peginRequests as pegin}",
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
      attr_dev(div, "class", "my-4 p-4");
      add_location(div, file, 32, 1, 1130);
      attr_dev(section, "class", "bg-dark s-gURQwspLRvWr");
      add_location(section, file, 31, 0, 1103);
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
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(5, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Page", slots, []);
  let prTx = $sbtcConfig.reclaimTransaction && $sbtcConfig.reclaimTransaction.ready ? PegInTransaction.hydrate($sbtcConfig.reclaimTransaction) : new ReclaimTransaction();
  let inited = false;
  let peginRequests;
  let errorReason;
  const setPegin = async (peginRequest) => {
    const conf = $sbtcConfig;
    conf.peginRequest = peginRequest;
    sbtcConfig.set(conf);
    goto("/reclaim");
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
  const click_handler = (pegin) => setPegin(pegin);
  $$self.$capture_state = () => ({
    onMount,
    sbtcConfig,
    PegInTransaction,
    addresses,
    COMMS_ERROR,
    ReclaimTransaction,
    fetchMyWrapTransactions,
    goto,
    prTx,
    inited,
    peginRequests,
    errorReason,
    setPegin,
    $sbtcConfig
  });
  $$self.$inject_state = ($$props2) => {
    if ("prTx" in $$props2)
      prTx = $$props2.prTx;
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
  return [inited, peginRequests, setPegin, click_handler];
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
