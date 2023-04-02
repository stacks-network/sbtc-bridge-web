import { _ as __vitePreload } from "../chunks/preload-helper.f8376bb0.js";
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, G as validate_store, H as component_subscribe, v as validate_slots, o as onMount, c as space, p as element, f as claim_space, q as claim_element, r as children, l as detach_dev, u as attr_dev, x as add_location, g as insert_hydration_dev, I as noop, y as text, z as claim_text, J as append_hydration_dev, K as src_url_equal, L as listen_dev, M as prevent_default, w as set_style, C as create_component, D as claim_component, E as mount_component, k as transition_in, h as transition_out, F as destroy_component, N as run_all, O as onDestroy, t as tick, P as globals, e as empty, j as check_outros, B as group_outros, Q as create_slot, R as update_slot_base, T as get_all_dirty_from_scope, U as get_slot_changes } from "../chunks/index.0c92228d.js";
import { a as addresses, l as logUserOut, b as loginStacksJs, u as userSession } from "../chunks/stacks_connect.44e9d878.js";
import { i as isCoordinator } from "../chunks/sbtc_admin.8c2c8b4b.js";
import { s as sbtcConfig, d as defaultSbtcConfig } from "../chunks/hmac.1e7e1fcb.js";
import { g as goto } from "../chunks/navigation.08cdc4ce.js";
import { U as UserBalance } from "../chunks/UserBalance.c86474f0.js";
const app = "";
const stx_eco_wallet_on = "" + new URL("../assets/stx_eco_wallet_on.090e5a93.png", import.meta.url).href;
const stx_eco_wallet_off = "" + new URL("../assets/stx_eco_wallet_off.7e8f173f.png", import.meta.url).href;
const WalletConnectButton_svelte_svelte_type_style_lang = "";
const file$4 = "src/lib/header/WalletConnectButton.svelte";
function create_if_block_2(ctx) {
  let li;
  let span;
  let a;
  let t;
  const block = {
    c: function create() {
      li = element("li");
      span = element("span");
      a = element("a");
      t = text("Admin");
      this.h();
    },
    l: function claim(nodes) {
      li = claim_element(nodes, "LI", { class: true });
      var li_nodes = children(li);
      span = claim_element(li_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      a = claim_element(span_nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      t = claim_text(a_nodes, "Admin");
      a_nodes.forEach(detach_dev);
      span_nodes.forEach(detach_dev);
      li_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", "/admin");
      attr_dev(a, "class", "pointer px-2");
      add_location(a, file$4, 27, 1, 885);
      attr_dev(span, "class", "nav-link");
      add_location(span, file$4, 26, 1, 860);
      attr_dev(li, "class", "nav-item mb-1 s-03Bkx-y2PLke");
      add_location(li, file$4, 25, 0, 832);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, li, anchor);
      append_hydration_dev(li, span);
      append_hydration_dev(span, a);
      append_hydration_dev(a, t);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(li);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(25:0) {#if coordinator}",
    ctx
  });
  return block;
}
function create_else_block$1(ctx) {
  let span1;
  let a;
  let span0;
  let img;
  let img_src_value;
  let t;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      span1 = element("span");
      a = element("a");
      span0 = element("span");
      img = element("img");
      t = text(" connect");
      this.h();
    },
    l: function claim(nodes) {
      span1 = claim_element(nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      a = claim_element(span1_nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      span0 = claim_element(a_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      img = claim_element(span0_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      span0_nodes.forEach(detach_dev);
      t = claim_text(a_nodes, " connect");
      a_nodes.forEach(detach_dev);
      span1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (!src_url_equal(img.src, img_src_value = stx_eco_wallet_off))
        attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Connect Wallet / Login");
      attr_dev(img, "width", "40");
      attr_dev(img, "height", "auto");
      add_location(img, file$4, 45, 120, 1618);
      attr_dev(span0, "class", "px-1");
      add_location(span0, file$4, 45, 100, 1598);
      attr_dev(a, "href", "/");
      attr_dev(a, "class", "pointer px-2");
      add_location(a, file$4, 45, 24, 1522);
      attr_dev(span1, "class", "nav-link");
      add_location(span1, file$4, 45, 1, 1499);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, span1, anchor);
      append_hydration_dev(span1, a);
      append_hydration_dev(a, span0);
      append_hydration_dev(span0, img);
      append_hydration_dev(a, t);
      if (!mounted) {
        dispose = listen_dev(a, "click", prevent_default(
          /*click_handler_1*/
          ctx[6]
        ), false, true, false, false);
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span1);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block$1.name,
    type: "else",
    source: "(45:0) {:else}",
    ctx
  });
  return block;
}
function create_if_block_1$1(ctx) {
  let span1;
  let a;
  let span0;
  let img;
  let img_src_value;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      span1 = element("span");
      a = element("a");
      span0 = element("span");
      img = element("img");
      this.h();
    },
    l: function claim(nodes) {
      span1 = claim_element(nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      a = claim_element(span1_nodes, "A", { href: true, class: true, style: true });
      var a_nodes = children(a);
      span0 = claim_element(a_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      img = claim_element(span0_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      span0_nodes.forEach(detach_dev);
      a_nodes.forEach(detach_dev);
      span1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (!src_url_equal(img.src, img_src_value = stx_eco_wallet_on))
        attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Wallet Connected");
      attr_dev(img, "width", "40");
      attr_dev(img, "height", "auto");
      add_location(img, file$4, 41, 23, 1387);
      attr_dev(span0, "class", "px-2");
      add_location(span0, file$4, 41, 3, 1367);
      attr_dev(a, "href", "/");
      attr_dev(a, "class", "pointer");
      set_style(a, "vertical-align", "middle");
      add_location(a, file$4, 40, 2, 1262);
      attr_dev(span1, "class", "nav-link");
      add_location(span1, file$4, 39, 1, 1236);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, span1, anchor);
      append_hydration_dev(span1, a);
      append_hydration_dev(a, span0);
      append_hydration_dev(span0, img);
      if (!mounted) {
        dispose = listen_dev(a, "click", prevent_default(
          /*click_handler*/
          ctx[5]
        ), false, true, false, false);
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span1);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$1.name,
    type: "if",
    source: "(39:31) ",
    ctx
  });
  return block;
}
function create_if_block$1(ctx) {
  let span;
  let a;
  let t;
  const block = {
    c: function create() {
      span = element("span");
      a = element("a");
      t = text("Install Web Wallet");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", { class: true, style: true });
      var span_nodes = children(span);
      a = claim_element(span_nodes, "A", {
        href: true,
        class: true,
        target: true,
        rel: true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes, "Install Web Wallet");
      a_nodes.forEach(detach_dev);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", "https://wallet.hiro.so/wallet/install-web");
      attr_dev(a, "class", "pointer");
      attr_dev(a, "target", "_blank");
      attr_dev(a, "rel", "noreferrer");
      add_location(a, file$4, 34, 1, 1066);
      attr_dev(span, "class", "nav-link");
      set_style(span, "position", "relative");
      set_style(span, "top", "2px");
      add_location(span, file$4, 33, 0, 1003);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, span, anchor);
      append_hydration_dev(span, a);
      append_hydration_dev(a, t);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$1.name,
    type: "if",
    source: "(33:0) {#if webWalletNeeded}",
    ctx
  });
  return block;
}
function create_fragment$4(ctx) {
  let t;
  let li;
  let if_block0 = (
    /*coordinator*/
    ctx[1] && create_if_block_2(ctx)
  );
  function select_block_type(ctx2, dirty) {
    if (
      /*webWalletNeeded*/
      ctx2[4]
    )
      return create_if_block$1;
    if (
      /*$sbtcConfig*/
      ctx2[0].loggedIn
    )
      return create_if_block_1$1;
    return create_else_block$1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block1 = current_block_type(ctx);
  const block = {
    c: function create() {
      if (if_block0)
        if_block0.c();
      t = space();
      li = element("li");
      if_block1.c();
      this.h();
    },
    l: function claim(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      t = claim_space(nodes);
      li = claim_element(nodes, "LI", { class: true });
      var li_nodes = children(li);
      if_block1.l(li_nodes);
      li_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(li, "class", "nav-item mb-1 s-03Bkx-y2PLke");
      add_location(li, file$4, 31, 0, 954);
    },
    m: function mount(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration_dev(target, t, anchor);
      insert_hydration_dev(target, li, anchor);
      if_block1.m(li, null);
    },
    p: function update(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block1) {
        if_block1.p(ctx2, dirty);
      } else {
        if_block1.d(1);
        if_block1 = current_block_type(ctx2);
        if (if_block1) {
          if_block1.c();
          if_block1.m(li, null);
        }
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach_dev(t);
      if (detaching)
        detach_dev(li);
      if_block1.d();
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
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(0, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("WalletConnectButton", slots, []);
  const coordinator = isCoordinator(addresses().stxAddress);
  const logout = () => {
    logUserOut();
    sbtcConfig.update((conf) => {
      conf.loggedIn = false;
      return conf;
    });
  };
  const doLogin = async () => {
    await loginStacksJs();
  };
  let webWalletNeeded = false;
  onMount(async () => {
  });
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<WalletConnectButton> was created with unknown prop '${key}'`);
  });
  const click_handler = () => logout();
  const click_handler_1 = () => doLogin();
  $$self.$capture_state = () => ({
    logUserOut,
    addresses,
    onMount,
    stx_eco_wallet_on,
    stx_eco_wallet_off,
    isCoordinator,
    sbtcConfig,
    loginStacksJs,
    coordinator,
    logout,
    doLogin,
    webWalletNeeded,
    $sbtcConfig
  });
  $$self.$inject_state = ($$props2) => {
    if ("webWalletNeeded" in $$props2)
      $$invalidate(4, webWalletNeeded = $$props2.webWalletNeeded);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    $sbtcConfig,
    coordinator,
    logout,
    doLogin,
    webWalletNeeded,
    click_handler,
    click_handler_1
  ];
}
class WalletConnectButton extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "WalletConnectButton",
      options,
      id: create_fragment$4.name
    });
  }
}
const logoWhite = "" + new URL("../assets/logo-white.68f65e57.jpeg", import.meta.url).href;
const Header_svelte_svelte_type_style_lang = "";
const file$3 = "src/lib/header/Header.svelte";
function create_fragment$3(ctx) {
  let nav;
  let div2;
  let a0;
  let img;
  let img_src_value;
  let t0;
  let div0;
  let userbalance;
  let t1;
  let span0;
  let t2;
  let t3;
  let button;
  let span1;
  let t4;
  let div1;
  let ul1;
  let li2;
  let span2;
  let t5;
  let t6;
  let ul0;
  let li0;
  let a1;
  let t7;
  let t8;
  let li1;
  let a2;
  let t9;
  let t10;
  let li3;
  let span4;
  let span3;
  let a3;
  let t11;
  let t12;
  let walletconnectbutton;
  let current;
  let mounted;
  let dispose;
  userbalance = new UserBalance({
    props: { showAddress: false },
    $$inline: true
  });
  walletconnectbutton = new WalletConnectButton({ $$inline: true });
  const block = {
    c: function create() {
      nav = element("nav");
      div2 = element("div");
      a0 = element("a");
      img = element("img");
      t0 = space();
      div0 = element("div");
      create_component(userbalance.$$.fragment);
      t1 = space();
      span0 = element("span");
      t2 = text(
        /*network*/
        ctx[1]
      );
      t3 = space();
      button = element("button");
      span1 = element("span");
      t4 = space();
      div1 = element("div");
      ul1 = element("ul");
      li2 = element("li");
      span2 = element("span");
      t5 = text("SBTC Exchange");
      t6 = space();
      ul0 = element("ul");
      li0 = element("li");
      a1 = element("a");
      t7 = text("Wrap BTC");
      t8 = space();
      li1 = element("li");
      a2 = element("a");
      t9 = text("Unwrap sBTC");
      t10 = space();
      li3 = element("li");
      span4 = element("span");
      span3 = element("span");
      a3 = element("a");
      t11 = text("History");
      t12 = space();
      create_component(walletconnectbutton.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      nav = claim_element(nodes, "NAV", { class: true });
      var nav_nodes = children(nav);
      div2 = claim_element(nav_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      a0 = claim_element(div2_nodes, "A", { class: true, href: true });
      var a0_nodes = children(a0);
      img = claim_element(a0_nodes, "IMG", {
        width: true,
        height: true,
        class: true,
        src: true,
        alt: true
      });
      a0_nodes.forEach(detach_dev);
      t0 = claim_space(div2_nodes);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(userbalance.$$.fragment, div0_nodes);
      t1 = claim_space(div0_nodes);
      span0 = claim_element(div0_nodes, "SPAN", {
        class: true,
        id: true,
        role: true,
        "data-bs-toggle": true,
        "aria-expanded": true
      });
      var span0_nodes = children(span0);
      t2 = claim_text(
        span0_nodes,
        /*network*/
        ctx[1]
      );
      span0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(div2_nodes);
      button = claim_element(div2_nodes, "BUTTON", {
        class: true,
        type: true,
        "data-bs-toggle": true,
        "data-bs-target": true,
        "aria-controls": true,
        "aria-expanded": true,
        "aria-label": true
      });
      var button_nodes = children(button);
      span1 = claim_element(button_nodes, "SPAN", { class: true });
      children(span1).forEach(detach_dev);
      button_nodes.forEach(detach_dev);
      t4 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true, id: true });
      var div1_nodes = children(div1);
      ul1 = claim_element(div1_nodes, "UL", { class: true });
      var ul1_nodes = children(ul1);
      li2 = claim_element(ul1_nodes, "LI", { class: true });
      var li2_nodes = children(li2);
      span2 = claim_element(li2_nodes, "SPAN", {
        class: true,
        id: true,
        role: true,
        "data-bs-toggle": true,
        "aria-expanded": true
      });
      var span2_nodes = children(span2);
      t5 = claim_text(span2_nodes, "SBTC Exchange");
      span2_nodes.forEach(detach_dev);
      t6 = claim_space(li2_nodes);
      ul0 = claim_element(li2_nodes, "UL", { class: true, "aria-labelledby": true });
      var ul0_nodes = children(ul0);
      li0 = claim_element(ul0_nodes, "LI", {});
      var li0_nodes = children(li0);
      a1 = claim_element(li0_nodes, "A", { class: true, href: true });
      var a1_nodes = children(a1);
      t7 = claim_text(a1_nodes, "Wrap BTC");
      a1_nodes.forEach(detach_dev);
      li0_nodes.forEach(detach_dev);
      t8 = claim_space(ul0_nodes);
      li1 = claim_element(ul0_nodes, "LI", {});
      var li1_nodes = children(li1);
      a2 = claim_element(li1_nodes, "A", { class: true, href: true });
      var a2_nodes = children(a2);
      t9 = claim_text(a2_nodes, "Unwrap sBTC");
      a2_nodes.forEach(detach_dev);
      li1_nodes.forEach(detach_dev);
      ul0_nodes.forEach(detach_dev);
      li2_nodes.forEach(detach_dev);
      t10 = claim_space(ul1_nodes);
      li3 = claim_element(ul1_nodes, "LI", { class: true });
      var li3_nodes = children(li3);
      span4 = claim_element(li3_nodes, "SPAN", { class: true });
      var span4_nodes = children(span4);
      span3 = claim_element(span4_nodes, "SPAN", { title: true });
      var span3_nodes = children(span3);
      a3 = claim_element(span3_nodes, "A", { class: true, href: true });
      var a3_nodes = children(a3);
      t11 = claim_text(a3_nodes, "History");
      a3_nodes.forEach(detach_dev);
      span3_nodes.forEach(detach_dev);
      span4_nodes.forEach(detach_dev);
      li3_nodes.forEach(detach_dev);
      t12 = claim_space(ul1_nodes);
      claim_component(walletconnectbutton.$$.fragment, ul1_nodes);
      ul1_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      nav_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "width", "40px");
      attr_dev(img, "height", "40px");
      attr_dev(img, "class", "nav-logo");
      if (!src_url_equal(img.src, img_src_value = logoWhite))
        attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "CityCoins Test");
      add_location(img, file$3, 17, 3, 669);
      attr_dev(a0, "class", "navbar-brand");
      attr_dev(a0, "href", "/");
      add_location(a0, file$3, 16, 2, 632);
      attr_dev(span0, "class", "text-center px-2 bg-white text-black nav-link");
      attr_dev(span0, "id", "navbarDropdown");
      attr_dev(span0, "role", "button");
      attr_dev(span0, "data-bs-toggle", "dropdown");
      attr_dev(span0, "aria-expanded", "false");
      add_location(span0, file$3, 21, 3, 843);
      attr_dev(div0, "class", "nav-item text-white s-WFTADzNPIVrM");
      add_location(div0, file$3, 19, 2, 767);
      attr_dev(span1, "class", "navbar-toggler-icon");
      add_location(span1, file$3, 24, 3, 1195);
      attr_dev(button, "class", "navbar-toggler");
      attr_dev(button, "type", "button");
      attr_dev(button, "data-bs-toggle", "collapse");
      attr_dev(button, "data-bs-target", "#navbarNav");
      attr_dev(button, "aria-controls", "navbarNav");
      attr_dev(button, "aria-expanded", "false");
      attr_dev(button, "aria-label", "Toggle navigation");
      add_location(button, file$3, 23, 2, 1013);
      attr_dev(span2, "class", "nav-link dropdown-toggle ");
      attr_dev(span2, "id", "navbarDropdown");
      attr_dev(span2, "role", "button");
      attr_dev(span2, "data-bs-toggle", "dropdown");
      attr_dev(span2, "aria-expanded", "false");
      add_location(span2, file$3, 29, 5, 1372);
      attr_dev(a1, "class", "dropdown-item s-WFTADzNPIVrM");
      attr_dev(a1, "href", "/");
      add_location(a1, file$3, 33, 10, 1623);
      add_location(li0, file$3, 33, 6, 1619);
      attr_dev(a2, "class", "dropdown-item s-WFTADzNPIVrM");
      attr_dev(a2, "href", "/");
      add_location(a2, file$3, 34, 10, 1733);
      add_location(li1, file$3, 34, 6, 1729);
      attr_dev(ul0, "class", "dropdown-menu dropdown-menu-start");
      attr_dev(ul0, "aria-labelledby", "navbarDropdown");
      add_location(ul0, file$3, 32, 5, 1533);
      attr_dev(li2, "class", "nav-item dropdown s-WFTADzNPIVrM");
      add_location(li2, file$3, 28, 4, 1336);
      attr_dev(a3, "class", "");
      attr_dev(a3, "href", "/history");
      add_location(a3, file$3, 39, 50, 1977);
      attr_dev(span3, "title", "Your SBTC Transaction History");
      add_location(span3, file$3, 39, 6, 1933);
      attr_dev(span4, "class", "pointer nav-link");
      add_location(span4, file$3, 38, 5, 1895);
      attr_dev(li3, "class", "badge nav-item s-WFTADzNPIVrM");
      add_location(li3, file$3, 37, 4, 1862);
      attr_dev(ul1, "class", "navbar-nav");
      add_location(ul1, file$3, 27, 3, 1308);
      attr_dev(div1, "class", "collapse navbar-collapse");
      attr_dev(div1, "id", "navbarNav");
      add_location(div1, file$3, 26, 2, 1251);
      attr_dev(div2, "class", "container-fluid mx-5");
      add_location(div2, file$3, 15, 1, 595);
      attr_dev(nav, "class", "navbar navbar-expand-md transparent");
      add_location(nav, file$3, 14, 0, 544);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, nav, anchor);
      append_hydration_dev(nav, div2);
      append_hydration_dev(div2, a0);
      append_hydration_dev(a0, img);
      append_hydration_dev(div2, t0);
      append_hydration_dev(div2, div0);
      mount_component(userbalance, div0, null);
      append_hydration_dev(div0, t1);
      append_hydration_dev(div0, span0);
      append_hydration_dev(span0, t2);
      append_hydration_dev(div2, t3);
      append_hydration_dev(div2, button);
      append_hydration_dev(button, span1);
      append_hydration_dev(div2, t4);
      append_hydration_dev(div2, div1);
      append_hydration_dev(div1, ul1);
      append_hydration_dev(ul1, li2);
      append_hydration_dev(li2, span2);
      append_hydration_dev(span2, t5);
      append_hydration_dev(li2, t6);
      append_hydration_dev(li2, ul0);
      append_hydration_dev(ul0, li0);
      append_hydration_dev(li0, a1);
      append_hydration_dev(a1, t7);
      append_hydration_dev(ul0, t8);
      append_hydration_dev(ul0, li1);
      append_hydration_dev(li1, a2);
      append_hydration_dev(a2, t9);
      append_hydration_dev(ul1, t10);
      append_hydration_dev(ul1, li3);
      append_hydration_dev(li3, span4);
      append_hydration_dev(span4, span3);
      append_hydration_dev(span3, a3);
      append_hydration_dev(a3, t11);
      append_hydration_dev(ul1, t12);
      mount_component(walletconnectbutton, ul1, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen_dev(a1, "click", prevent_default(
            /*click_handler*/
            ctx[2]
          ), false, true, false, false),
          listen_dev(a2, "click", prevent_default(
            /*click_handler_1*/
            ctx[3]
          ), false, true, false, false)
        ];
        mounted = true;
      }
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(userbalance.$$.fragment, local);
      transition_in(walletconnectbutton.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(userbalance.$$.fragment, local);
      transition_out(walletconnectbutton.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(nav);
      destroy_component(userbalance);
      destroy_component(walletconnectbutton);
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
function instance$3($$self, $$props, $$invalidate) {
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(4, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Header", slots, []);
  const togglePeg = (pegin) => {
    const conf = $sbtcConfig;
    conf.pegIn = pegin;
    sbtcConfig.set(conf);
    pegin ? goto("/wrap") : goto("/unwrap");
  };
  const network = "mainnet";
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Header> was created with unknown prop '${key}'`);
  });
  const click_handler = () => togglePeg(true);
  const click_handler_1 = () => togglePeg(false);
  $$self.$capture_state = () => ({
    WalletConnectButton,
    logoWhite,
    sbtcConfig,
    goto,
    UserBalance,
    togglePeg,
    network,
    $sbtcConfig
  });
  return [togglePeg, network, click_handler, click_handler_1];
}
class Header extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Header",
      options,
      id: create_fragment$3.name
    });
  }
}
const stx_eco_discord = "" + new URL("../assets/stx_eco_discord.5cc61295.png", import.meta.url).href;
const stx_eco_twitter = "" + new URL("../assets/stx_eco_twitter.b58c754c.png", import.meta.url).href;
const stx_eco_github = "" + new URL("../assets/stx_eco_github.0e15c254.png", import.meta.url).href;
const FooterLinks_svelte_svelte_type_style_lang = "";
const file$2 = "src/lib/header/FooterLinks.svelte";
function create_fragment$2(ctx) {
  let div24;
  let div3;
  let p0;
  let t0;
  let t1;
  let div0;
  let a0;
  let t2;
  let t3;
  let div1;
  let a1;
  let t4;
  let t5;
  let div2;
  let a2;
  let t6;
  let t7;
  let div7;
  let p1;
  let t8;
  let t9;
  let div4;
  let a3;
  let t10;
  let t11;
  let div5;
  let a4;
  let t12;
  let t13;
  let div6;
  let a5;
  let t14;
  let t15;
  let div11;
  let p2;
  let t16;
  let t17;
  let div8;
  let a6;
  let t18;
  let t19;
  let div9;
  let a7;
  let t20;
  let t21;
  let div10;
  let a8;
  let t22;
  let t23;
  let div15;
  let p3;
  let t24;
  let t25;
  let div12;
  let a9;
  let t26;
  let t27;
  let div13;
  let a10;
  let t28;
  let t29;
  let div14;
  let a11;
  let t30;
  let t31;
  let div19;
  let p4;
  let t32;
  let t33;
  let div16;
  let a12;
  let t34;
  let t35;
  let div17;
  let a13;
  let t36;
  let t37;
  let div18;
  let a14;
  let t38;
  let t39;
  let div23;
  let div22;
  let div20;
  let a15;
  let img0;
  let img0_src_value;
  let t40;
  let a16;
  let img1;
  let img1_src_value;
  let t41;
  let div21;
  let a17;
  let img2;
  let img2_src_value;
  const block = {
    c: function create() {
      div24 = element("div");
      div3 = element("div");
      p0 = element("p");
      t0 = text("Standards");
      t1 = space();
      div0 = element("div");
      a0 = element("a");
      t2 = text("SIP Process");
      t3 = space();
      div1 = element("div");
      a1 = element("a");
      t4 = text("SIP Requests");
      t5 = space();
      div2 = element("div");
      a2 = element("a");
      t6 = text("SIP News");
      t7 = space();
      div7 = element("div");
      p1 = element("p");
      t8 = text("Code");
      t9 = space();
      div4 = element("div");
      a3 = element("a");
      t10 = text("Clarity Lab");
      t11 = space();
      div5 = element("div");
      a4 = element("a");
      t12 = text("Raise Issues");
      t13 = space();
      div6 = element("div");
      a5 = element("a");
      t14 = text("Ecosystem DAO");
      t15 = space();
      div11 = element("div");
      p2 = element("p");
      t16 = text("Videos");
      t17 = space();
      div8 = element("div");
      a6 = element("a");
      t18 = text("Stacks");
      t19 = space();
      div9 = element("div");
      a7 = element("a");
      t20 = text("Clarity");
      t21 = space();
      div10 = element("div");
      a8 = element("a");
      t22 = text("PoX");
      t23 = space();
      div15 = element("div");
      p3 = element("p");
      t24 = text("Contact");
      t25 = space();
      div12 = element("div");
      a9 = element("a");
      t26 = text("Discord");
      t27 = space();
      div13 = element("div");
      a10 = element("a");
      t28 = text("Enquiries");
      t29 = space();
      div14 = element("div");
      a11 = element("a");
      t30 = text("Twitter");
      t31 = space();
      div19 = element("div");
      p4 = element("p");
      t32 = text("Partners");
      t33 = space();
      div16 = element("div");
      a12 = element("a");
      t34 = text("Foundation");
      t35 = space();
      div17 = element("div");
      a13 = element("a");
      t36 = text("Hiro Wallet");
      t37 = space();
      div18 = element("div");
      a14 = element("a");
      t38 = text("Trust Machines");
      t39 = space();
      div23 = element("div");
      div22 = element("div");
      div20 = element("div");
      a15 = element("a");
      img0 = element("img");
      t40 = space();
      a16 = element("a");
      img1 = element("img");
      t41 = space();
      div21 = element("div");
      a17 = element("a");
      img2 = element("img");
      this.h();
    },
    l: function claim(nodes) {
      div24 = claim_element(nodes, "DIV", { class: true });
      var div24_nodes = children(div24);
      div3 = claim_element(div24_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      p0 = claim_element(div3_nodes, "P", { class: true });
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "Standards");
      p0_nodes.forEach(detach_dev);
      t1 = claim_space(div3_nodes);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      a0 = claim_element(div0_nodes, "A", {
        href: true,
        target: true,
        rel: true,
        class: true
      });
      var a0_nodes = children(a0);
      t2 = claim_text(a0_nodes, "SIP Process");
      a0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      a1 = claim_element(div1_nodes, "A", {
        href: true,
        target: true,
        rel: true,
        class: true
      });
      var a1_nodes = children(a1);
      t4 = claim_text(a1_nodes, "SIP Requests");
      a1_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      a2 = claim_element(div2_nodes, "A", {
        href: true,
        target: true,
        rel: true,
        class: true
      });
      var a2_nodes = children(a2);
      t6 = claim_text(a2_nodes, "SIP News");
      a2_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t7 = claim_space(div24_nodes);
      div7 = claim_element(div24_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      p1 = claim_element(div7_nodes, "P", { class: true });
      var p1_nodes = children(p1);
      t8 = claim_text(p1_nodes, "Code");
      p1_nodes.forEach(detach_dev);
      t9 = claim_space(div7_nodes);
      div4 = claim_element(div7_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      a3 = claim_element(div4_nodes, "A", {
        href: true,
        target: true,
        rel: true,
        class: true
      });
      var a3_nodes = children(a3);
      t10 = claim_text(a3_nodes, "Clarity Lab");
      a3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      t11 = claim_space(div7_nodes);
      div5 = claim_element(div7_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      a4 = claim_element(div5_nodes, "A", {
        href: true,
        target: true,
        rel: true,
        class: true
      });
      var a4_nodes = children(a4);
      t12 = claim_text(a4_nodes, "Raise Issues");
      a4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t13 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      a5 = claim_element(div6_nodes, "A", {
        href: true,
        target: true,
        rel: true,
        class: true
      });
      var a5_nodes = children(a5);
      t14 = claim_text(a5_nodes, "Ecosystem DAO");
      a5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      t15 = claim_space(div24_nodes);
      div11 = claim_element(div24_nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      p2 = claim_element(div11_nodes, "P", { class: true });
      var p2_nodes = children(p2);
      t16 = claim_text(p2_nodes, "Videos");
      p2_nodes.forEach(detach_dev);
      t17 = claim_space(div11_nodes);
      div8 = claim_element(div11_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      a6 = claim_element(div8_nodes, "A", {
        target: true,
        href: true,
        rel: true,
        class: true
      });
      var a6_nodes = children(a6);
      t18 = claim_text(a6_nodes, "Stacks");
      a6_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      t19 = claim_space(div11_nodes);
      div9 = claim_element(div11_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      a7 = claim_element(div9_nodes, "A", {
        target: true,
        href: true,
        rel: true,
        class: true
      });
      var a7_nodes = children(a7);
      t20 = claim_text(a7_nodes, "Clarity");
      a7_nodes.forEach(detach_dev);
      div9_nodes.forEach(detach_dev);
      t21 = claim_space(div11_nodes);
      div10 = claim_element(div11_nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      a8 = claim_element(div10_nodes, "A", {
        target: true,
        href: true,
        rel: true,
        class: true
      });
      var a8_nodes = children(a8);
      t22 = claim_text(a8_nodes, "PoX");
      a8_nodes.forEach(detach_dev);
      div10_nodes.forEach(detach_dev);
      div11_nodes.forEach(detach_dev);
      t23 = claim_space(div24_nodes);
      div15 = claim_element(div24_nodes, "DIV", { class: true });
      var div15_nodes = children(div15);
      p3 = claim_element(div15_nodes, "P", { class: true });
      var p3_nodes = children(p3);
      t24 = claim_text(p3_nodes, "Contact");
      p3_nodes.forEach(detach_dev);
      t25 = claim_space(div15_nodes);
      div12 = claim_element(div15_nodes, "DIV", { class: true });
      var div12_nodes = children(div12);
      a9 = claim_element(div12_nodes, "A", {
        href: true,
        target: true,
        rel: true,
        class: true
      });
      var a9_nodes = children(a9);
      t26 = claim_text(a9_nodes, "Discord");
      a9_nodes.forEach(detach_dev);
      div12_nodes.forEach(detach_dev);
      t27 = claim_space(div15_nodes);
      div13 = claim_element(div15_nodes, "DIV", { class: true });
      var div13_nodes = children(div13);
      a10 = claim_element(div13_nodes, "A", {
        href: true,
        target: true,
        rel: true,
        class: true
      });
      var a10_nodes = children(a10);
      t28 = claim_text(a10_nodes, "Enquiries");
      a10_nodes.forEach(detach_dev);
      div13_nodes.forEach(detach_dev);
      t29 = claim_space(div15_nodes);
      div14 = claim_element(div15_nodes, "DIV", { class: true });
      var div14_nodes = children(div14);
      a11 = claim_element(div14_nodes, "A", {
        href: true,
        target: true,
        rel: true,
        class: true
      });
      var a11_nodes = children(a11);
      t30 = claim_text(a11_nodes, "Twitter");
      a11_nodes.forEach(detach_dev);
      div14_nodes.forEach(detach_dev);
      div15_nodes.forEach(detach_dev);
      t31 = claim_space(div24_nodes);
      div19 = claim_element(div24_nodes, "DIV", { class: true });
      var div19_nodes = children(div19);
      p4 = claim_element(div19_nodes, "P", { class: true });
      var p4_nodes = children(p4);
      t32 = claim_text(p4_nodes, "Partners");
      p4_nodes.forEach(detach_dev);
      t33 = claim_space(div19_nodes);
      div16 = claim_element(div19_nodes, "DIV", { class: true });
      var div16_nodes = children(div16);
      a12 = claim_element(div16_nodes, "A", {
        class: true,
        href: true,
        target: true,
        rel: true
      });
      var a12_nodes = children(a12);
      t34 = claim_text(a12_nodes, "Foundation");
      a12_nodes.forEach(detach_dev);
      div16_nodes.forEach(detach_dev);
      t35 = claim_space(div19_nodes);
      div17 = claim_element(div19_nodes, "DIV", { class: true });
      var div17_nodes = children(div17);
      a13 = claim_element(div17_nodes, "A", {
        class: true,
        href: true,
        target: true,
        rel: true
      });
      var a13_nodes = children(a13);
      t36 = claim_text(a13_nodes, "Hiro Wallet");
      a13_nodes.forEach(detach_dev);
      div17_nodes.forEach(detach_dev);
      t37 = claim_space(div19_nodes);
      div18 = claim_element(div19_nodes, "DIV", { class: true });
      var div18_nodes = children(div18);
      a14 = claim_element(div18_nodes, "A", {
        class: true,
        href: true,
        target: true,
        rel: true
      });
      var a14_nodes = children(a14);
      t38 = claim_text(a14_nodes, "Trust Machines");
      a14_nodes.forEach(detach_dev);
      div18_nodes.forEach(detach_dev);
      div19_nodes.forEach(detach_dev);
      t39 = claim_space(div24_nodes);
      div23 = claim_element(div24_nodes, "DIV", { class: true });
      var div23_nodes = children(div23);
      div22 = claim_element(div23_nodes, "DIV", { class: true });
      var div22_nodes = children(div22);
      div20 = claim_element(div22_nodes, "DIV", { class: true });
      var div20_nodes = children(div20);
      a15 = claim_element(div20_nodes, "A", {
        class: true,
        href: true,
        target: true,
        rel: true
      });
      var a15_nodes = children(a15);
      img0 = claim_element(a15_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      a15_nodes.forEach(detach_dev);
      t40 = claim_space(div20_nodes);
      a16 = claim_element(div20_nodes, "A", {
        class: true,
        href: true,
        target: true,
        rel: true
      });
      var a16_nodes = children(a16);
      img1 = claim_element(a16_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      a16_nodes.forEach(detach_dev);
      div20_nodes.forEach(detach_dev);
      t41 = claim_space(div22_nodes);
      div21 = claim_element(div22_nodes, "DIV", { style: true });
      var div21_nodes = children(div21);
      a17 = claim_element(div21_nodes, "A", {
        class: true,
        href: true,
        target: true,
        rel: true
      });
      var a17_nodes = children(a17);
      img2 = claim_element(a17_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      a17_nodes.forEach(detach_dev);
      div21_nodes.forEach(detach_dev);
      div22_nodes.forEach(detach_dev);
      div23_nodes.forEach(detach_dev);
      div24_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p0, "class", "s-OMmj-e4ZMm3Z");
      add_location(p0, file$2, 9, 4, 414);
      attr_dev(a0, "href", "https://github.com/stacksgov/sips/blob/main/sips/sip-000/sip-000-stacks-improvement-proposal-process.md");
      attr_dev(a0, "target", "_blank");
      attr_dev(a0, "rel", "noreferrer");
      attr_dev(a0, "class", "s-OMmj-e4ZMm3Z");
      add_location(a0, file$2, 11, 6, 464);
      attr_dev(div0, "class", "demo-div");
      add_location(div0, file$2, 10, 4, 435);
      attr_dev(a1, "href", "https://github.com/stacksgov/sips/pulls");
      attr_dev(a1, "target", "_blank");
      attr_dev(a1, "rel", "noreferrer");
      attr_dev(a1, "class", "s-OMmj-e4ZMm3Z");
      add_location(a1, file$2, 14, 6, 671);
      attr_dev(div1, "class", "demo-div");
      add_location(div1, file$2, 13, 4, 642);
      attr_dev(a2, "href", "https://discord.com/channels/621759717756370964/1001471092302544936");
      attr_dev(a2, "target", "_blank");
      attr_dev(a2, "rel", "noreferrer");
      attr_dev(a2, "class", "s-OMmj-e4ZMm3Z");
      add_location(a2, file$2, 17, 6, 815);
      attr_dev(div2, "class", "demo-div");
      add_location(div2, file$2, 16, 4, 786);
      attr_dev(div3, "class", "col-md-2 col-sm-6 hideme");
      add_location(div3, file$2, 8, 2, 371);
      attr_dev(p1, "class", "s-OMmj-e4ZMm3Z");
      add_location(p1, file$2, 21, 4, 1004);
      attr_dev(a3, "href", "https://github.com/Clarity-Innovation-Lab");
      attr_dev(a3, "target", "_blank");
      attr_dev(a3, "rel", "noreferrer");
      attr_dev(a3, "class", "s-OMmj-e4ZMm3Z");
      add_location(a3, file$2, 23, 6, 1049);
      attr_dev(div4, "class", "demo-div");
      add_location(div4, file$2, 22, 4, 1020);
      attr_dev(a4, "href", "https://github.com/Clarity-Innovation-Lab/ecosystem-dao/issues");
      attr_dev(a4, "target", "_blank");
      attr_dev(a4, "rel", "noreferrer");
      attr_dev(a4, "class", "s-OMmj-e4ZMm3Z");
      add_location(a4, file$2, 26, 6, 1194);
      attr_dev(div5, "class", "demo-div");
      add_location(div5, file$2, 25, 4, 1165);
      attr_dev(a5, "href", "https://github.com/Clarity-Innovation-Lab/ecosystem-dao");
      attr_dev(a5, "target", "_blank");
      attr_dev(a5, "rel", "noreferrer");
      attr_dev(a5, "class", "s-OMmj-e4ZMm3Z");
      add_location(a5, file$2, 29, 6, 1361);
      attr_dev(div6, "class", "demo-div");
      add_location(div6, file$2, 28, 4, 1332);
      attr_dev(div7, "class", "col-md-2 col-sm-6 hideme");
      add_location(div7, file$2, 20, 2, 961);
      attr_dev(p2, "class", "s-OMmj-e4ZMm3Z");
      add_location(p2, file$2, 33, 4, 1543);
      attr_dev(a6, "target", "_blank");
      attr_dev(a6, "href", "https://www.youtube.com/watch?v=fbq6L3PrKWE");
      attr_dev(a6, "rel", "noreferrer");
      attr_dev(a6, "class", "s-OMmj-e4ZMm3Z");
      add_location(a6, file$2, 35, 6, 1590);
      attr_dev(div8, "class", "demo-div");
      add_location(div8, file$2, 34, 4, 1561);
      attr_dev(a7, "target", "_blank");
      attr_dev(a7, "href", "https://www.youtube.com/watch?v=OAVwd6SNJVU&t=717s");
      attr_dev(a7, "rel", "noreferrer");
      attr_dev(a7, "class", "s-OMmj-e4ZMm3Z");
      add_location(a7, file$2, 38, 6, 1732);
      attr_dev(div9, "class", "demo-div");
      add_location(div9, file$2, 37, 4, 1703);
      attr_dev(a8, "target", "_blank");
      attr_dev(a8, "href", "https://www.youtube.com/watch?v=NG081fD-PoI");
      attr_dev(a8, "rel", "noreferrer");
      attr_dev(a8, "class", "s-OMmj-e4ZMm3Z");
      add_location(a8, file$2, 41, 6, 1882);
      attr_dev(div10, "class", "demo-div");
      add_location(div10, file$2, 40, 4, 1853);
      attr_dev(div11, "class", "col-md-2 col-sm-6 hideme");
      add_location(div11, file$2, 32, 2, 1500);
      attr_dev(p3, "class", "s-OMmj-e4ZMm3Z");
      add_location(p3, file$2, 45, 4, 2042);
      attr_dev(a9, "href", "https://discord.com/channels/621759717756370964/971037457661444156");
      attr_dev(a9, "target", "_blank");
      attr_dev(a9, "rel", "noreferrer");
      attr_dev(a9, "class", "s-OMmj-e4ZMm3Z");
      add_location(a9, file$2, 47, 6, 2090);
      attr_dev(div12, "class", "demo-div");
      add_location(div12, file$2, 46, 4, 2061);
      attr_dev(a10, "href", "mailto:mike@claritylab.dev");
      attr_dev(a10, "target", "_blank");
      attr_dev(a10, "rel", "noreferrer");
      attr_dev(a10, "class", "s-OMmj-e4ZMm3Z");
      add_location(a10, file$2, 50, 6, 2256);
      attr_dev(div13, "class", "demo-div");
      add_location(div13, file$2, 49, 4, 2227);
      attr_dev(a11, "href", "https://mobile.twitter.com/radicleart");
      attr_dev(a11, "target", "_blank");
      attr_dev(a11, "rel", "noreferrer");
      attr_dev(a11, "class", "s-OMmj-e4ZMm3Z");
      add_location(a11, file$2, 53, 6, 2384);
      attr_dev(div14, "class", "demo-div");
      add_location(div14, file$2, 52, 4, 2355);
      attr_dev(div15, "class", "col-md-2 col-sm-6 hideme");
      add_location(div15, file$2, 44, 2, 1999);
      attr_dev(p4, "class", "s-OMmj-e4ZMm3Z");
      add_location(p4, file$2, 57, 4, 2542);
      attr_dev(a12, "class", " s-OMmj-e4ZMm3Z");
      attr_dev(
        a12,
        "href",
        /*stacksOrg*/
        ctx[1]
      );
      attr_dev(a12, "target", "_blank");
      attr_dev(a12, "rel", "noreferrer");
      add_location(a12, file$2, 59, 6, 2591);
      attr_dev(div16, "class", "demo-div");
      add_location(div16, file$2, 58, 4, 2562);
      attr_dev(a13, "class", " s-OMmj-e4ZMm3Z");
      attr_dev(
        a13,
        "href",
        /*webWalletLink*/
        ctx[0]
      );
      attr_dev(a13, "target", "_blank");
      attr_dev(a13, "rel", "noreferrer");
      add_location(a13, file$2, 62, 6, 2712);
      attr_dev(div17, "class", "demo-div");
      add_location(div17, file$2, 61, 4, 2683);
      attr_dev(a14, "class", " s-OMmj-e4ZMm3Z");
      attr_dev(a14, "href", "https://www.trustmachines.co/");
      attr_dev(a14, "target", "_blank");
      attr_dev(a14, "rel", "noreferrer");
      add_location(a14, file$2, 65, 6, 2838);
      attr_dev(div18, "class", "demo-div");
      add_location(div18, file$2, 64, 4, 2809);
      attr_dev(div19, "class", "col-md-2 col-sm-6 hideme");
      add_location(div19, file$2, 56, 2, 2499);
      if (!src_url_equal(img0.src, img0_src_value = stx_eco_discord))
        attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "discord ecosystem dao logo");
      attr_dev(img0, "width", "39");
      attr_dev(img0, "height", "auto");
      add_location(img0, file$2, 71, 131, 3181);
      attr_dev(a15, "class", "mx-0 s-OMmj-e4ZMm3Z");
      attr_dev(a15, "href", "https://discord.com/channels/621759717756370964/971037457661444156");
      attr_dev(a15, "target", "_blank");
      attr_dev(a15, "rel", "noreferrer");
      add_location(a15, file$2, 71, 8, 3058);
      if (!src_url_equal(img1.src, img1_src_value = stx_eco_twitter))
        attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "twitter ecosystem dao logo");
      attr_dev(img1, "width", "39");
      attr_dev(img1, "height", "auto");
      add_location(img1, file$2, 72, 102, 3374);
      attr_dev(a16, "class", "mx-0 s-OMmj-e4ZMm3Z");
      attr_dev(a16, "href", "https://mobile.twitter.com/radicleart");
      attr_dev(a16, "target", "_blank");
      attr_dev(a16, "rel", "noreferrer");
      add_location(a16, file$2, 72, 8, 3280);
      attr_dev(div20, "class", "mb-0");
      add_location(div20, file$2, 70, 6, 3031);
      if (!src_url_equal(img2.src, img2_src_value = stx_eco_github))
        attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "github ecosystem dao logo");
      attr_dev(img2, "width", "39");
      attr_dev(img2, "height", "auto");
      add_location(img2, file$2, 74, 158, 3636);
      attr_dev(a17, "class", " s-OMmj-e4ZMm3Z");
      attr_dev(a17, "href", "https://github.com/Clarity-Innovation-Lab/ecosystem-dao");
      attr_dev(a17, "target", "_blank");
      attr_dev(a17, "rel", "noreferrer");
      add_location(a17, file$2, 74, 50, 3528);
      set_style(div21, "position", "relative");
      set_style(div21, "left", "2px");
      add_location(div21, file$2, 74, 6, 3484);
      attr_dev(div22, "class", "text-center");
      add_location(div22, file$2, 69, 4, 2999);
      attr_dev(div23, "class", "col-md-2 col-sm-12 ");
      add_location(div23, file$2, 68, 2, 2961);
      attr_dev(div24, "class", "row");
      add_location(div24, file$2, 7, 0, 351);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div24, anchor);
      append_hydration_dev(div24, div3);
      append_hydration_dev(div3, p0);
      append_hydration_dev(p0, t0);
      append_hydration_dev(div3, t1);
      append_hydration_dev(div3, div0);
      append_hydration_dev(div0, a0);
      append_hydration_dev(a0, t2);
      append_hydration_dev(div3, t3);
      append_hydration_dev(div3, div1);
      append_hydration_dev(div1, a1);
      append_hydration_dev(a1, t4);
      append_hydration_dev(div3, t5);
      append_hydration_dev(div3, div2);
      append_hydration_dev(div2, a2);
      append_hydration_dev(a2, t6);
      append_hydration_dev(div24, t7);
      append_hydration_dev(div24, div7);
      append_hydration_dev(div7, p1);
      append_hydration_dev(p1, t8);
      append_hydration_dev(div7, t9);
      append_hydration_dev(div7, div4);
      append_hydration_dev(div4, a3);
      append_hydration_dev(a3, t10);
      append_hydration_dev(div7, t11);
      append_hydration_dev(div7, div5);
      append_hydration_dev(div5, a4);
      append_hydration_dev(a4, t12);
      append_hydration_dev(div7, t13);
      append_hydration_dev(div7, div6);
      append_hydration_dev(div6, a5);
      append_hydration_dev(a5, t14);
      append_hydration_dev(div24, t15);
      append_hydration_dev(div24, div11);
      append_hydration_dev(div11, p2);
      append_hydration_dev(p2, t16);
      append_hydration_dev(div11, t17);
      append_hydration_dev(div11, div8);
      append_hydration_dev(div8, a6);
      append_hydration_dev(a6, t18);
      append_hydration_dev(div11, t19);
      append_hydration_dev(div11, div9);
      append_hydration_dev(div9, a7);
      append_hydration_dev(a7, t20);
      append_hydration_dev(div11, t21);
      append_hydration_dev(div11, div10);
      append_hydration_dev(div10, a8);
      append_hydration_dev(a8, t22);
      append_hydration_dev(div24, t23);
      append_hydration_dev(div24, div15);
      append_hydration_dev(div15, p3);
      append_hydration_dev(p3, t24);
      append_hydration_dev(div15, t25);
      append_hydration_dev(div15, div12);
      append_hydration_dev(div12, a9);
      append_hydration_dev(a9, t26);
      append_hydration_dev(div15, t27);
      append_hydration_dev(div15, div13);
      append_hydration_dev(div13, a10);
      append_hydration_dev(a10, t28);
      append_hydration_dev(div15, t29);
      append_hydration_dev(div15, div14);
      append_hydration_dev(div14, a11);
      append_hydration_dev(a11, t30);
      append_hydration_dev(div24, t31);
      append_hydration_dev(div24, div19);
      append_hydration_dev(div19, p4);
      append_hydration_dev(p4, t32);
      append_hydration_dev(div19, t33);
      append_hydration_dev(div19, div16);
      append_hydration_dev(div16, a12);
      append_hydration_dev(a12, t34);
      append_hydration_dev(div19, t35);
      append_hydration_dev(div19, div17);
      append_hydration_dev(div17, a13);
      append_hydration_dev(a13, t36);
      append_hydration_dev(div19, t37);
      append_hydration_dev(div19, div18);
      append_hydration_dev(div18, a14);
      append_hydration_dev(a14, t38);
      append_hydration_dev(div24, t39);
      append_hydration_dev(div24, div23);
      append_hydration_dev(div23, div22);
      append_hydration_dev(div22, div20);
      append_hydration_dev(div20, a15);
      append_hydration_dev(a15, img0);
      append_hydration_dev(div20, t40);
      append_hydration_dev(div20, a16);
      append_hydration_dev(a16, img1);
      append_hydration_dev(div22, t41);
      append_hydration_dev(div22, div21);
      append_hydration_dev(div21, a17);
      append_hydration_dev(a17, img2);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div24);
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
  validate_slots("FooterLinks", slots, []);
  let webWalletLink = "https://www.hiro.so/wallet/install-web";
  let stacksOrg = "https://stacks.org";
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<FooterLinks> was created with unknown prop '${key}'`);
  });
  $$self.$capture_state = () => ({
    stx_eco_discord,
    stx_eco_twitter,
    stx_eco_github,
    webWalletLink,
    stacksOrg
  });
  $$self.$inject_state = ($$props2) => {
    if ("webWalletLink" in $$props2)
      $$invalidate(0, webWalletLink = $$props2.webWalletLink);
    if ("stacksOrg" in $$props2)
      $$invalidate(1, stacksOrg = $$props2.stacksOrg);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [webWalletLink, stacksOrg];
}
class FooterLinks extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "FooterLinks",
      options,
      id: create_fragment$2.name
    });
  }
}
const Footer_svelte_svelte_type_style_lang = "";
const file$1 = "src/lib/header/Footer.svelte";
function create_fragment$1(ctx) {
  let div12;
  let div11;
  let div5;
  let div1;
  let div0;
  let a;
  let img;
  let img_src_value;
  let t0;
  let div4;
  let div3;
  let div2;
  let footerlinks;
  let t1;
  let div10;
  let div7;
  let div6;
  let t2;
  let t3;
  let div9;
  let div8;
  let t4;
  let current;
  footerlinks = new FooterLinks({ $$inline: true });
  const block = {
    c: function create() {
      div12 = element("div");
      div11 = element("div");
      div5 = element("div");
      div1 = element("div");
      div0 = element("div");
      a = element("a");
      img = element("img");
      t0 = space();
      div4 = element("div");
      div3 = element("div");
      div2 = element("div");
      create_component(footerlinks.$$.fragment);
      t1 = space();
      div10 = element("div");
      div7 = element("div");
      div6 = element("div");
      t2 = text("sBTC © 2023");
      t3 = space();
      div9 = element("div");
      div8 = element("div");
      t4 = text("For the ♥ of crypto!");
      this.h();
    },
    l: function claim(nodes) {
      div12 = claim_element(nodes, "DIV", { class: true, id: true });
      var div12_nodes = children(div12);
      div11 = claim_element(div12_nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      div5 = claim_element(div11_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div1 = claim_element(div5_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      a = claim_element(div0_nodes, "A", { class: true, href: true });
      var a_nodes = children(a);
      img = claim_element(a_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      a_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t0 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      claim_component(footerlinks.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t1 = claim_space(div11_nodes);
      div10 = claim_element(div11_nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      div7 = claim_element(div10_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      div6 = claim_element(div7_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      t2 = claim_text(div6_nodes, "sBTC © 2023");
      div6_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      t3 = claim_space(div10_nodes);
      div9 = claim_element(div10_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      div8 = claim_element(div9_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      t4 = claim_text(div8_nodes, "For the ♥ of crypto!");
      div8_nodes.forEach(detach_dev);
      div9_nodes.forEach(detach_dev);
      div10_nodes.forEach(detach_dev);
      div11_nodes.forEach(detach_dev);
      div12_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (!src_url_equal(img.src, img_src_value = logoWhite))
        attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "stacks ecosystem dao logo");
      attr_dev(img, "width", "198");
      attr_dev(img, "height", "auto");
      add_location(img, file$1, 10, 14, 361);
      attr_dev(a, "class", "navbar-brand");
      attr_dev(a, "href", "/");
      add_location(a, file$1, 9, 12, 313);
      attr_dev(div0, "class", "");
      add_location(div0, file$1, 8, 10, 286);
      attr_dev(div1, "class", "px-0 col-4");
      add_location(div1, file$1, 7, 8, 251);
      attr_dev(div2, "class", "col-12");
      add_location(div2, file$1, 16, 12, 559);
      attr_dev(div3, "class", "row");
      add_location(div3, file$1, 15, 10, 529);
      attr_dev(div4, "class", "col-8");
      add_location(div4, file$1, 14, 8, 499);
      attr_dev(div5, "class", "row mx-5");
      add_location(div5, file$1, 6, 6, 220);
      attr_dev(div6, "class", "copywright");
      add_location(div6, file$1, 24, 12, 781);
      attr_dev(div7, "class", "mb-4");
      add_location(div7, file$1, 23, 8, 749);
      attr_dev(div8, "class", "copywright");
      add_location(div8, file$1, 27, 10, 881);
      attr_dev(div9, "class", "mb-4");
      add_location(div9, file$1, 26, 8, 851);
      attr_dev(div10, "class", "mx-5 mt-5 d-flex justify-content-between copy s-llc3ExEW13Oc");
      add_location(div10, file$1, 22, 6, 680);
      attr_dev(div11, "class", "pt-5");
      add_location(div11, file$1, 5, 4, 194);
      attr_dev(div12, "class", "container-fluid footer");
      attr_dev(div12, "id", "footer-section");
      add_location(div12, file$1, 4, 0, 132);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div12, anchor);
      append_hydration_dev(div12, div11);
      append_hydration_dev(div11, div5);
      append_hydration_dev(div5, div1);
      append_hydration_dev(div1, div0);
      append_hydration_dev(div0, a);
      append_hydration_dev(a, img);
      append_hydration_dev(div5, t0);
      append_hydration_dev(div5, div4);
      append_hydration_dev(div4, div3);
      append_hydration_dev(div3, div2);
      mount_component(footerlinks, div2, null);
      append_hydration_dev(div11, t1);
      append_hydration_dev(div11, div10);
      append_hydration_dev(div10, div7);
      append_hydration_dev(div7, div6);
      append_hydration_dev(div6, t2);
      append_hydration_dev(div10, t3);
      append_hydration_dev(div10, div9);
      append_hydration_dev(div9, div8);
      append_hydration_dev(div8, t4);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(footerlinks.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(footerlinks.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div12);
      destroy_component(footerlinks);
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
  validate_slots("Footer", slots, []);
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Footer> was created with unknown prop '${key}'`);
  });
  $$self.$capture_state = () => ({ FooterLinks, logoWhite });
  return [];
}
class Footer extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Footer",
      options,
      id: create_fragment$1.name
    });
  }
}
const _layout_svelte_svelte_type_style_lang = "";
const { console: console_1 } = globals;
const file = "src/routes/+layout.svelte";
function create_if_block(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_1, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*$sbtcConfig*/
      ctx2[1] && /*$sbtcConfig*/
      ctx2[1].loggedIn
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
    id: create_if_block.name,
    type: "if",
    source: "(53:0) {#if inited}",
    ctx
  });
  return block;
}
function create_else_block(ctx) {
  let div;
  let p0;
  let t0;
  let t1;
  let p1;
  let span1;
  let a;
  let span0;
  let img;
  let img_src_value;
  let t2;
  let t3;
  let p2;
  let t4;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div = element("div");
      p0 = element("p");
      t0 = text("Connect your Hiro web wallet to start wrapping SBTC!");
      t1 = space();
      p1 = element("p");
      span1 = element("span");
      a = element("a");
      span0 = element("span");
      img = element("img");
      t2 = text(" connect");
      t3 = space();
      p2 = element("p");
      t4 = text("Currently in Alpha Testing!");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      p0 = claim_element(div_nodes, "P", { class: true });
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "Connect your Hiro web wallet to start wrapping SBTC!");
      p0_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      span1 = claim_element(p1_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      a = claim_element(span1_nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      span0 = claim_element(a_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      img = claim_element(span0_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      span0_nodes.forEach(detach_dev);
      t2 = claim_text(a_nodes, " connect");
      a_nodes.forEach(detach_dev);
      span1_nodes.forEach(detach_dev);
      p1_nodes.forEach(detach_dev);
      t3 = claim_space(div_nodes);
      p2 = claim_element(div_nodes, "P", { class: true });
      var p2_nodes = children(p2);
      t4 = claim_text(p2_nodes, "Currently in Alpha Testing!");
      p2_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p0, "class", "text-white");
      add_location(p0, file, 61, 2, 1888);
      if (!src_url_equal(img.src, img_src_value = stx_eco_wallet_off))
        attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Connect Wallet / Login");
      attr_dev(img, "width", "40");
      attr_dev(img, "height", "auto");
      add_location(img, file, 62, 116, 2083);
      attr_dev(span0, "class", "px-1");
      add_location(span0, file, 62, 96, 2063);
      attr_dev(a, "href", "/");
      attr_dev(a, "class", "pointer px-2");
      add_location(a, file, 62, 28, 1995);
      attr_dev(span1, "class", "nav-item");
      add_location(span1, file, 62, 5, 1972);
      add_location(p1, file, 62, 2, 1969);
      attr_dev(p2, "class", "mt-5 text-warning");
      add_location(p2, file, 63, 2, 2201);
      attr_dev(div, "class", "lobby bg-dark s-7IPF32Wcq3s8");
      add_location(div, file, 60, 0, 1858);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, p0);
      append_hydration_dev(p0, t0);
      append_hydration_dev(div, t1);
      append_hydration_dev(div, p1);
      append_hydration_dev(p1, span1);
      append_hydration_dev(span1, a);
      append_hydration_dev(a, span0);
      append_hydration_dev(span0, img);
      append_hydration_dev(a, t2);
      append_hydration_dev(div, t3);
      append_hydration_dev(div, p2);
      append_hydration_dev(p2, t4);
      if (!mounted) {
        dispose = listen_dev(a, "click", prevent_default(
          /*doLogin*/
          ctx[2]
        ), false, true, false, false);
        mounted = true;
      }
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(60:0) {:else}",
    ctx
  });
  return block;
}
function create_if_block_1(ctx) {
  let div;
  let header;
  let t0;
  let t1;
  let footer;
  let current;
  header = new Header({ $$inline: true });
  const default_slot_template = (
    /*#slots*/
    ctx[5].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    null
  );
  footer = new Footer({ $$inline: true });
  const block = {
    c: function create() {
      div = element("div");
      create_component(header.$$.fragment);
      t0 = space();
      if (default_slot)
        default_slot.c();
      t1 = space();
      create_component(footer.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(header.$$.fragment, div_nodes);
      t0 = claim_space(div_nodes);
      if (default_slot)
        default_slot.l(div_nodes);
      t1 = claim_space(div_nodes);
      claim_component(footer.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "app s-7IPF32Wcq3s8");
      add_location(div, file, 54, 0, 1789);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(header, div, null);
      append_hydration_dev(div, t0);
      if (default_slot) {
        default_slot.m(div, null);
      }
      append_hydration_dev(div, t1);
      mount_component(footer, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[4],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      transition_in(default_slot, local);
      transition_in(footer.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(header.$$.fragment, local);
      transition_out(default_slot, local);
      transition_out(footer.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(header);
      if (default_slot)
        default_slot.d(detaching);
      destroy_component(footer);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(54:0) {#if $sbtcConfig && $sbtcConfig.loggedIn}",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*inited*/
    ctx[0] && create_if_block(ctx)
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
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*inited*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
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
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(1, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Layout", slots, ["default"]);
  let { data } = $$props;
  const unsubscribe = sbtcConfig.subscribe((conf) => {
  });
  onDestroy(unsubscribe);
  let inited = false;
  const doLogin = async () => {
    await loginStacksJs();
    initApplication();
  };
  const initApplication = async () => {
    let conf = defaultSbtcConfig;
    if ($sbtcConfig)
      conf = $sbtcConfig;
    if (userSession.isUserSignedIn()) {
      conf.loggedIn = true;
    }
    conf.sbtcContractData = data.sbtcContractData;
    sbtcConfig.update(() => conf);
  };
  let bootstrap;
  onMount(async () => {
    await tick();
    bootstrap = await __vitePreload(() => import("../chunks/bootstrap.esm.ef76bbff.js"), true ? [] : void 0, import.meta.url);
    try {
      await initApplication();
      $$invalidate(0, inited = true);
    } catch (err) {
      console.log(err);
    }
    setTimeout(
      function() {
        const tooltipTriggerList = window.document.querySelectorAll('[data-bs-toggle="tooltip"]');
        if (tooltipTriggerList)
          [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
        const popoverTriggerList = window.document.querySelectorAll('[data-bs-toggle="dropdown"]');
        if (popoverTriggerList)
          [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Dropdown(popoverTriggerEl));
      },
      500
    );
  });
  $$self.$$.on_mount.push(function() {
    if (data === void 0 && !("data" in $$props || $$self.$$.bound[$$self.$$.props["data"]])) {
      console_1.warn("<Layout> was created without expected prop 'data'");
    }
  });
  const writable_props = ["data"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console_1.warn(`<Layout> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(3, data = $$props2.data);
    if ("$$scope" in $$props2)
      $$invalidate(4, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({
    tick,
    onMount,
    onDestroy,
    Header,
    Footer,
    sbtcConfig,
    loginStacksJs,
    userSession,
    stx_eco_wallet_off,
    defaultSbtcConfig,
    data,
    unsubscribe,
    inited,
    doLogin,
    initApplication,
    bootstrap,
    $sbtcConfig
  });
  $$self.$inject_state = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(3, data = $$props2.data);
    if ("inited" in $$props2)
      $$invalidate(0, inited = $$props2.inited);
    if ("bootstrap" in $$props2)
      bootstrap = $$props2.bootstrap;
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [inited, $sbtcConfig, doLogin, data, $$scope, slots];
}
class Layout extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { data: 3 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Layout",
      options,
      id: create_fragment.name
    });
  }
  get data() {
    throw new Error("<Layout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set data(value) {
    throw new Error("<Layout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
export {
  Layout as default
};
