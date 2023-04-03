import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, G as validate_store, H as component_subscribe, v as validate_slots, p as element, y as text, c as space, q as claim_element, r as children, z as claim_text, l as detach_dev, f as claim_space, x as add_location, u as attr_dev, g as insert_hydration_dev, J as append_hydration_dev, L as listen_dev, M as prevent_default, A as set_data_dev, I as noop, N as run_all } from "../chunks/index.0c92228d.js";
import { g as goto } from "../chunks/navigation.e625c10f.js";
import { s as sbtcConfig } from "../chunks/hmac.1e7e1fcb.js";
import { e as explorerTxUrl } from "../chunks/utils.d534dad3.js";
const _page_svelte_svelte_type_style_lang = "";
const file = "src/routes/+page.svelte";
function create_fragment(ctx) {
  let section;
  let div10;
  let div2;
  let div0;
  let t0;
  let t1_value = (
    /*$sbtcConfig*/
    ctx[0].sbtcContractData.sbtcWalletAddress + ""
  );
  let t1;
  let t2;
  let div1;
  let t3;
  let a;
  let t4;
  let t5;
  let div9;
  let div8;
  let div5;
  let div4;
  let h10;
  let t6;
  let span0;
  let t7;
  let t8;
  let h20;
  let t9;
  let t10;
  let div3;
  let button0;
  let t11;
  let t12;
  let div7;
  let div6;
  let h11;
  let t13;
  let span1;
  let t14;
  let t15;
  let h21;
  let t16;
  let t17;
  let button1;
  let t18;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      section = element("section");
      div10 = element("div");
      div2 = element("div");
      div0 = element("div");
      t0 = text("SBTC Wallet: ");
      t1 = text(t1_value);
      t2 = space();
      div1 = element("div");
      t3 = text("Contract: ");
      a = element("a");
      t4 = text(
        /*sbtcContract*/
        ctx[1]
      );
      t5 = space();
      div9 = element("div");
      div8 = element("div");
      div5 = element("div");
      div4 = element("div");
      h10 = element("h1");
      t6 = text("Wrap ");
      span0 = element("span");
      t7 = text("sBTC");
      t8 = space();
      h20 = element("h2");
      t9 = text("BTC to sBTC");
      t10 = space();
      div3 = element("div");
      button0 = element("button");
      t11 = text("Wrap");
      t12 = space();
      div7 = element("div");
      div6 = element("div");
      h11 = element("h1");
      t13 = text("Unwrap ");
      span1 = element("span");
      t14 = text("sBTC");
      t15 = space();
      h21 = element("h2");
      t16 = text("sBTC to BTC");
      t17 = space();
      button1 = element("button");
      t18 = text("Unwrap");
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      div10 = claim_element(section_nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      div2 = claim_element(div10_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {});
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "SBTC Wallet: ");
      t1 = claim_text(div0_nodes, t1_value);
      div0_nodes.forEach(detach_dev);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {});
      var div1_nodes = children(div1);
      t3 = claim_text(div1_nodes, "Contract: ");
      a = claim_element(div1_nodes, "A", { href: true, target: true, rel: true });
      var a_nodes = children(a);
      t4 = claim_text(
        a_nodes,
        /*sbtcContract*/
        ctx[1]
      );
      a_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t5 = claim_space(div10_nodes);
      div9 = claim_element(div10_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      div8 = claim_element(div9_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      div5 = claim_element(div8_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      h10 = claim_element(div4_nodes, "H1", { class: true });
      var h10_nodes = children(h10);
      t6 = claim_text(h10_nodes, "Wrap ");
      span0 = claim_element(h10_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t7 = claim_text(span0_nodes, "sBTC");
      span0_nodes.forEach(detach_dev);
      h10_nodes.forEach(detach_dev);
      t8 = claim_space(div4_nodes);
      h20 = claim_element(div4_nodes, "H2", { class: true });
      var h20_nodes = children(h20);
      t9 = claim_text(h20_nodes, "BTC to sBTC");
      h20_nodes.forEach(detach_dev);
      t10 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      button0 = claim_element(div3_nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      t11 = claim_text(button0_nodes, "Wrap");
      button0_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t12 = claim_space(div8_nodes);
      div7 = claim_element(div8_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      div6 = claim_element(div7_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      h11 = claim_element(div6_nodes, "H1", { class: true });
      var h11_nodes = children(h11);
      t13 = claim_text(h11_nodes, "Unwrap ");
      span1 = claim_element(h11_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t14 = claim_text(span1_nodes, "sBTC");
      span1_nodes.forEach(detach_dev);
      h11_nodes.forEach(detach_dev);
      t15 = claim_space(div6_nodes);
      h21 = claim_element(div6_nodes, "H2", { class: true });
      var h21_nodes = children(h21);
      t16 = claim_text(h21_nodes, "sBTC to BTC");
      h21_nodes.forEach(detach_dev);
      t17 = claim_space(div6_nodes);
      button1 = claim_element(div6_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      t18 = claim_text(button1_nodes, "Unwrap");
      button1_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      div9_nodes.forEach(detach_dev);
      div10_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(div0, file, 16, 3, 547);
      attr_dev(
        a,
        "href",
        /*sbtcContractUrl*/
        ctx[2]
      );
      attr_dev(a, "target", "_blank");
      attr_dev(a, "rel", "noreferrer");
      add_location(a, file, 17, 18, 640);
      add_location(div1, file, 17, 3, 625);
      attr_dev(div2, "class", "text-small text-center mb-5 text-center text-white");
      add_location(div2, file, 15, 2, 479);
      attr_dev(span0, "class", "strokeme-info");
      add_location(span0, file, 23, 38, 892);
      attr_dev(h10, "class", "mt-5 text-info s-y_bCXRrkrYfP");
      add_location(h10, file, 23, 6, 860);
      attr_dev(h20, "class", "text-info mb-5");
      add_location(h20, file, 24, 6, 943);
      attr_dev(button0, "class", "w-50 btn btn-outline-info");
      add_location(button0, file, 26, 7, 1015);
      attr_dev(div3, "class", "");
      add_location(div3, file, 25, 6, 993);
      attr_dev(div4, "class", "card-sm text-center s-y_bCXRrkrYfP");
      add_location(div4, file, 22, 5, 820);
      attr_dev(div5, "class", "col-md-6 col-sm-12 mb-4");
      add_location(div5, file, 21, 4, 777);
      attr_dev(span1, "class", "strokeme-warning");
      add_location(span1, file, 32, 43, 1274);
      attr_dev(h11, "class", "mt-5 text-warning s-y_bCXRrkrYfP");
      add_location(h11, file, 32, 6, 1237);
      attr_dev(h21, "class", "text-warning mb-5");
      add_location(h21, file, 33, 6, 1328);
      attr_dev(button1, "class", "w-50 btn btn-outline-warning");
      add_location(button1, file, 34, 6, 1381);
      attr_dev(div6, "class", "card-sm text-center s-y_bCXRrkrYfP");
      add_location(div6, file, 31, 5, 1197);
      attr_dev(div7, "class", "col-md-6 col-sm-12");
      add_location(div7, file, 30, 4, 1159);
      attr_dev(div8, "class", "row");
      add_location(div8, file, 20, 3, 755);
      attr_dev(div9, "class", "");
      add_location(div9, file, 19, 2, 737);
      attr_dev(div10, "class", "m-4");
      add_location(div10, file, 14, 1, 459);
      attr_dev(section, "class", "bg-dark");
      add_location(section, file, 13, 0, 432);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, section, anchor);
      append_hydration_dev(section, div10);
      append_hydration_dev(div10, div2);
      append_hydration_dev(div2, div0);
      append_hydration_dev(div0, t0);
      append_hydration_dev(div0, t1);
      append_hydration_dev(div2, t2);
      append_hydration_dev(div2, div1);
      append_hydration_dev(div1, t3);
      append_hydration_dev(div1, a);
      append_hydration_dev(a, t4);
      append_hydration_dev(div10, t5);
      append_hydration_dev(div10, div9);
      append_hydration_dev(div9, div8);
      append_hydration_dev(div8, div5);
      append_hydration_dev(div5, div4);
      append_hydration_dev(div4, h10);
      append_hydration_dev(h10, t6);
      append_hydration_dev(h10, span0);
      append_hydration_dev(span0, t7);
      append_hydration_dev(div4, t8);
      append_hydration_dev(div4, h20);
      append_hydration_dev(h20, t9);
      append_hydration_dev(div4, t10);
      append_hydration_dev(div4, div3);
      append_hydration_dev(div3, button0);
      append_hydration_dev(button0, t11);
      append_hydration_dev(div8, t12);
      append_hydration_dev(div8, div7);
      append_hydration_dev(div7, div6);
      append_hydration_dev(div6, h11);
      append_hydration_dev(h11, t13);
      append_hydration_dev(h11, span1);
      append_hydration_dev(span1, t14);
      append_hydration_dev(div6, t15);
      append_hydration_dev(div6, h21);
      append_hydration_dev(h21, t16);
      append_hydration_dev(div6, t17);
      append_hydration_dev(div6, button1);
      append_hydration_dev(button1, t18);
      if (!mounted) {
        dispose = [
          listen_dev(button0, "click", prevent_default(
            /*click_handler*/
            ctx[4]
          ), false, true, false, false),
          listen_dev(button1, "click", prevent_default(
            /*click_handler_1*/
            ctx[5]
          ), false, true, false, false)
        ];
        mounted = true;
      }
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
        detach_dev(section);
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
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(0, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Page", slots, []);
  const sbtcContract = "ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN.sky-blue-elephant";
  const sbtcContractUrl = explorerTxUrl(sbtcContract);
  const togglePeg = (pegin) => {
    const conf = $sbtcConfig;
    conf.pegIn = pegin;
    sbtcConfig.set(conf);
    pegin ? goto("/wrap") : goto("/unwrap");
  };
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Page> was created with unknown prop '${key}'`);
  });
  const click_handler = () => togglePeg(true);
  const click_handler_1 = () => togglePeg(false);
  $$self.$capture_state = () => ({
    goto,
    sbtcConfig,
    explorerTxUrl,
    sbtcContract,
    sbtcContractUrl,
    togglePeg,
    $sbtcConfig
  });
  return [
    $sbtcConfig,
    sbtcContract,
    sbtcContractUrl,
    togglePeg,
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
