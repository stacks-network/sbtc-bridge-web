import { _ as __vitePreload } from "../chunks/preload-helper.6910039e.js";
import { S as SvelteComponentDev, b as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, K as validate_store, L as component_subscribe, o as onMount, c as space, u as element, f as claim_space, w as claim_element, x as children, l as detach_dev, y as attr_dev, A as add_location, g as insert_hydration_dev, n as noop, B as text, C as claim_text, M as append_hydration_dev, N as src_url_equal, O as listen_dev, P as prevent_default, z as set_style, Q as createEventDispatcher, G as create_component, H as claim_component, I as mount_component, k as transition_in, h as transition_out, J as destroy_component, r as run_all, e as empty, j as check_outros, R as onDestroy, t as tick, T as globals, E as group_outros, U as create_slot, V as update_slot_base, W as get_all_dirty_from_scope, X as get_slot_changes } from "../chunks/index.b12fea3b.js";
import { C as Ce, a, Q as Qt } from "../chunks/index.802ed381.js";
import { l as login, s as setUpMicroStacks } from "../chunks/stacks.63c7db87.js";
import { b as base } from "../chunks/paths.050ac54d.js";
import { i as isCoordinator } from "../chunks/sbtc_admin.9fc5955a.js";
import { s as sbtcConfig, d as defaultSbtcConfig } from "../chunks/stores.ec24a7a6.js";
import { g as goto } from "../chunks/navigation.f21f2199.js";
import { U as UserBalance } from "../chunks/UserBalance.5cde872e.js";
let Layout;
let __tla = (async () => {
  const app = "";
  const stx_eco_wallet_on = "" + new URL("../assets/stx_eco_wallet_on.090e5a93.png", import.meta.url).href;
  const stx_eco_wallet_off = "" + new URL("../assets/stx_eco_wallet_off.7e8f173f.png", import.meta.url).href;
  const WalletConnectButton_svelte_svelte_type_style_lang = "";
  const file$4 = "src/lib/header/WalletConnectButton.svelte";
  function create_if_block_3(ctx) {
    let li;
    let span;
    let a2;
    let t;
    const block = {
      c: function create() {
        li = element("li");
        span = element("span");
        a2 = element("a");
        t = text("Admin");
        this.h();
      },
      l: function claim(nodes) {
        li = claim_element(nodes, "LI", {
          class: true
        });
        var li_nodes = children(li);
        span = claim_element(li_nodes, "SPAN", {
          class: true
        });
        var span_nodes = children(span);
        a2 = claim_element(span_nodes, "A", {
          href: true,
          class: true
        });
        var a_nodes = children(a2);
        t = claim_text(a_nodes, "Admin");
        a_nodes.forEach(detach_dev);
        span_nodes.forEach(detach_dev);
        li_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(a2, "href", base + "/admin");
        attr_dev(a2, "class", "pointer px-2");
        add_location(a2, file$4, 32, 1, 1107);
        attr_dev(span, "class", "nav-link");
        add_location(span, file$4, 31, 1, 1082);
        attr_dev(li, "class", "nav-item mb-1 s-03Bkx-y2PLke");
        add_location(li, file$4, 30, 0, 1054);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, li, anchor);
        append_hydration_dev(li, span);
        append_hydration_dev(span, a2);
        append_hydration_dev(a2, t);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(li);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_3.name,
      type: "if",
      source: "(30:0) {#if isCoordinator($account.stxAddress)}",
      ctx
    });
    return block;
  }
  function create_else_block$1(ctx) {
    let span1;
    let a2;
    let span0;
    let img;
    let img_src_value;
    let t;
    let mounted;
    let dispose;
    const block = {
      c: function create() {
        span1 = element("span");
        a2 = element("a");
        span0 = element("span");
        img = element("img");
        t = text(" connect");
        this.h();
      },
      l: function claim(nodes) {
        span1 = claim_element(nodes, "SPAN", {
          class: true
        });
        var span1_nodes = children(span1);
        a2 = claim_element(span1_nodes, "A", {
          href: true,
          class: true
        });
        var a_nodes = children(a2);
        span0 = claim_element(a_nodes, "SPAN", {
          class: true
        });
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
        add_location(img, file$4, 52, 126, 2086);
        attr_dev(span0, "class", "px-1");
        add_location(span0, file$4, 52, 106, 2066);
        attr_dev(a2, "href", base + "/");
        attr_dev(a2, "class", "pointer px-2");
        add_location(a2, file$4, 52, 24, 1984);
        attr_dev(span1, "class", "nav-link");
        add_location(span1, file$4, 52, 1, 1961);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, span1, anchor);
        append_hydration_dev(span1, a2);
        append_hydration_dev(a2, span0);
        append_hydration_dev(span0, img);
        append_hydration_dev(a2, t);
        if (!mounted) {
          dispose = listen_dev(a2, "click", prevent_default(ctx[7]), false, true, false);
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
      source: "(52:0) {:else}",
      ctx
    });
    return block;
  }
  function create_if_block_2(ctx) {
    let span1;
    let a2;
    let span0;
    let img;
    let img_src_value;
    let t;
    let mounted;
    let dispose;
    const block = {
      c: function create() {
        span1 = element("span");
        a2 = element("a");
        span0 = element("span");
        img = element("img");
        t = text(" connect");
        this.h();
      },
      l: function claim(nodes) {
        span1 = claim_element(nodes, "SPAN", {
          class: true
        });
        var span1_nodes = children(span1);
        a2 = claim_element(span1_nodes, "A", {
          href: true
        });
        var a_nodes = children(a2);
        span0 = claim_element(a_nodes, "SPAN", {
          class: true
        });
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
        add_location(img, file$4, 50, 94, 1840);
        attr_dev(span0, "class", "px-2");
        add_location(span0, file$4, 50, 74, 1820);
        attr_dev(a2, "href", base + "/");
        add_location(a2, file$4, 50, 24, 1770);
        attr_dev(span1, "class", "nav-link");
        add_location(span1, file$4, 50, 1, 1747);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, span1, anchor);
        append_hydration_dev(span1, a2);
        append_hydration_dev(a2, span0);
        append_hydration_dev(span0, img);
        append_hydration_dev(a2, t);
        if (!mounted) {
          dispose = listen_dev(a2, "click", prevent_default(login), false, true, false);
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
      id: create_if_block_2.name,
      type: "if",
      source: "(50:33) ",
      ctx
    });
    return block;
  }
  function create_if_block_1$1(ctx) {
    let span1;
    let a2;
    let span0;
    let img;
    let img_src_value;
    let mounted;
    let dispose;
    const block = {
      c: function create() {
        span1 = element("span");
        a2 = element("a");
        span0 = element("span");
        img = element("img");
        this.h();
      },
      l: function claim(nodes) {
        span1 = claim_element(nodes, "SPAN", {
          class: true
        });
        var span1_nodes = children(span1);
        a2 = claim_element(span1_nodes, "A", {
          href: true,
          class: true,
          style: true
        });
        var a_nodes = children(a2);
        span0 = claim_element(a_nodes, "SPAN", {
          class: true
        });
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
        add_location(img, file$4, 46, 23, 1609);
        attr_dev(span0, "class", "px-2");
        add_location(span0, file$4, 46, 3, 1589);
        attr_dev(a2, "href", base + "/");
        attr_dev(a2, "class", "pointer");
        set_style(a2, "vertical-align", "middle");
        add_location(a2, file$4, 45, 2, 1486);
        attr_dev(span1, "class", "nav-link");
        add_location(span1, file$4, 44, 1, 1460);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, span1, anchor);
        append_hydration_dev(span1, a2);
        append_hydration_dev(a2, span0);
        append_hydration_dev(span0, img);
        if (!mounted) {
          dispose = listen_dev(a2, "click", prevent_default(ctx[4]), false, true, false);
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
      source: "(44:27) ",
      ctx
    });
    return block;
  }
  function create_if_block$1(ctx) {
    let span;
    let a2;
    let t;
    const block = {
      c: function create() {
        span = element("span");
        a2 = element("a");
        t = text("Install Web Wallet");
        this.h();
      },
      l: function claim(nodes) {
        span = claim_element(nodes, "SPAN", {
          class: true,
          style: true
        });
        var span_nodes = children(span);
        a2 = claim_element(span_nodes, "A", {
          href: true,
          class: true,
          target: true,
          rel: true
        });
        var a_nodes = children(a2);
        t = claim_text(a_nodes, "Install Web Wallet");
        a_nodes.forEach(detach_dev);
        span_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(a2, "href", "https://wallet.hiro.so/wallet/install-web");
        attr_dev(a2, "class", "pointer");
        attr_dev(a2, "target", "_blank");
        attr_dev(a2, "rel", "noreferrer");
        add_location(a2, file$4, 39, 1, 1294);
        attr_dev(span, "class", "nav-link");
        set_style(span, "position", "relative");
        set_style(span, "top", "2px");
        add_location(span, file$4, 38, 0, 1231);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, span, anchor);
        append_hydration_dev(span, a2);
        append_hydration_dev(a2, t);
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
      source: "(38:0) {#if webWalletNeeded}",
      ctx
    });
    return block;
  }
  function create_fragment$4(ctx) {
    let show_if = isCoordinator(ctx[1].stxAddress);
    let t;
    let li;
    let if_block0 = show_if && create_if_block_3(ctx);
    function select_block_type(ctx2, dirty) {
      if (ctx2[6])
        return create_if_block$1;
      if (ctx2[0].isSignedIn)
        return create_if_block_1$1;
      if (ctx2[0].isRequestPending)
        return create_if_block_2;
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
        li = claim_element(nodes, "LI", {
          class: true
        });
        var li_nodes = children(li);
        if_block1.l(li_nodes);
        li_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(li, "class", "nav-item mb-1 s-03Bkx-y2PLke");
        add_location(li, file$4, 36, 0, 1182);
      },
      m: function mount(target, anchor) {
        if (if_block0)
          if_block0.m(target, anchor);
        insert_hydration_dev(target, t, anchor);
        insert_hydration_dev(target, li, anchor);
        if_block1.m(li, null);
      },
      p: function update(ctx2, [dirty]) {
        if (dirty & 2)
          show_if = isCoordinator(ctx2[1].stxAddress);
        if (show_if) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_3(ctx2);
            if_block0.c();
            if_block0.m(t.parentNode, t);
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
    let $auth;
    let $account;
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("WalletConnectButton", slots, []);
    const auth = Ce();
    validate_store(auth, "auth");
    component_subscribe($$self, auth, (value) => $$invalidate(0, $auth = value));
    const account = a();
    validate_store(account, "account");
    component_subscribe($$self, account, (value) => $$invalidate(1, $account = value));
    const decodeAddr = () => {
      return Qt($account.stxAddress);
    };
    const explorerUrl = function(address) {
      return "https://explorer.stacks.co/address/" + address + "/?chain=mainnet";
    };
    const logout = () => {
      $auth.signOut();
    };
    const doLogin = () => {
      login($auth);
    };
    let webWalletNeeded = false;
    onMount(async () => {
    });
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
        console.warn(`<WalletConnectButton> was created with unknown prop '${key}'`);
    });
    const click_handler = () => doLogin();
    $$self.$capture_state = () => ({
      getAuth: Ce,
      getAccount: a,
      login,
      onMount,
      stx_eco_wallet_on,
      stx_eco_wallet_off,
      c32ToB58: Qt,
      base,
      isCoordinator,
      auth,
      account,
      decodeAddr,
      explorerUrl,
      logout,
      doLogin,
      webWalletNeeded,
      $auth,
      $account
    });
    $$self.$inject_state = ($$props2) => {
      if ("webWalletNeeded" in $$props2)
        $$invalidate(6, webWalletNeeded = $$props2.webWalletNeeded);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    return [
      $auth,
      $account,
      auth,
      account,
      logout,
      doLogin,
      webWalletNeeded,
      click_handler
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
      props: {
        showAddress: false
      },
      $$inline: true
    });
    walletconnectbutton = new WalletConnectButton({
      $$inline: true
    });
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
        t2 = text(ctx[1]);
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
        nav = claim_element(nodes, "NAV", {
          class: true
        });
        var nav_nodes = children(nav);
        div2 = claim_element(nav_nodes, "DIV", {
          class: true
        });
        var div2_nodes = children(div2);
        a0 = claim_element(div2_nodes, "A", {
          class: true,
          href: true
        });
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
        div0 = claim_element(div2_nodes, "DIV", {
          class: true
        });
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
        t2 = claim_text(span0_nodes, ctx[1]);
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
        span1 = claim_element(button_nodes, "SPAN", {
          class: true
        });
        children(span1).forEach(detach_dev);
        button_nodes.forEach(detach_dev);
        t4 = claim_space(div2_nodes);
        div1 = claim_element(div2_nodes, "DIV", {
          class: true,
          id: true
        });
        var div1_nodes = children(div1);
        ul1 = claim_element(div1_nodes, "UL", {
          class: true
        });
        var ul1_nodes = children(ul1);
        li2 = claim_element(ul1_nodes, "LI", {
          class: true
        });
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
        ul0 = claim_element(li2_nodes, "UL", {
          class: true,
          "aria-labelledby": true
        });
        var ul0_nodes = children(ul0);
        li0 = claim_element(ul0_nodes, "LI", {});
        var li0_nodes = children(li0);
        a1 = claim_element(li0_nodes, "A", {
          class: true,
          href: true
        });
        var a1_nodes = children(a1);
        t7 = claim_text(a1_nodes, "Wrap BTC");
        a1_nodes.forEach(detach_dev);
        li0_nodes.forEach(detach_dev);
        t8 = claim_space(ul0_nodes);
        li1 = claim_element(ul0_nodes, "LI", {});
        var li1_nodes = children(li1);
        a2 = claim_element(li1_nodes, "A", {
          class: true,
          href: true
        });
        var a2_nodes = children(a2);
        t9 = claim_text(a2_nodes, "Unwrap sBTC");
        a2_nodes.forEach(detach_dev);
        li1_nodes.forEach(detach_dev);
        ul0_nodes.forEach(detach_dev);
        li2_nodes.forEach(detach_dev);
        t10 = claim_space(ul1_nodes);
        li3 = claim_element(ul1_nodes, "LI", {
          class: true
        });
        var li3_nodes = children(li3);
        span4 = claim_element(li3_nodes, "SPAN", {
          class: true
        });
        var span4_nodes = children(span4);
        span3 = claim_element(span4_nodes, "SPAN", {
          title: true
        });
        var span3_nodes = children(span3);
        a3 = claim_element(span3_nodes, "A", {
          class: true,
          href: true
        });
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
        add_location(img, file$3, 24, 3, 923);
        attr_dev(a0, "class", "navbar-brand");
        attr_dev(a0, "href", base + "/");
        add_location(a0, file$3, 23, 2, 880);
        attr_dev(span0, "class", "text-center px-2 bg-white text-black nav-link");
        attr_dev(span0, "id", "navbarDropdown");
        attr_dev(span0, "role", "button");
        attr_dev(span0, "data-bs-toggle", "dropdown");
        attr_dev(span0, "aria-expanded", "false");
        add_location(span0, file$3, 28, 3, 1097);
        attr_dev(div0, "class", "nav-item text-white s-WFTADzNPIVrM");
        add_location(div0, file$3, 26, 2, 1021);
        attr_dev(span1, "class", "navbar-toggler-icon");
        add_location(span1, file$3, 31, 3, 1449);
        attr_dev(button, "class", "navbar-toggler");
        attr_dev(button, "type", "button");
        attr_dev(button, "data-bs-toggle", "collapse");
        attr_dev(button, "data-bs-target", "#navbarNav");
        attr_dev(button, "aria-controls", "navbarNav");
        attr_dev(button, "aria-expanded", "false");
        attr_dev(button, "aria-label", "Toggle navigation");
        add_location(button, file$3, 30, 2, 1267);
        attr_dev(span2, "class", "nav-link dropdown-toggle ");
        attr_dev(span2, "id", "navbarDropdown");
        attr_dev(span2, "role", "button");
        attr_dev(span2, "data-bs-toggle", "dropdown");
        attr_dev(span2, "aria-expanded", "false");
        add_location(span2, file$3, 36, 5, 1626);
        attr_dev(a1, "class", "dropdown-item s-WFTADzNPIVrM");
        attr_dev(a1, "href", "/");
        add_location(a1, file$3, 40, 10, 1877);
        add_location(li0, file$3, 40, 6, 1873);
        attr_dev(a2, "class", "dropdown-item s-WFTADzNPIVrM");
        attr_dev(a2, "href", "/");
        add_location(a2, file$3, 41, 10, 1987);
        add_location(li1, file$3, 41, 6, 1983);
        attr_dev(ul0, "class", "dropdown-menu dropdown-menu-start");
        attr_dev(ul0, "aria-labelledby", "navbarDropdown");
        add_location(ul0, file$3, 39, 5, 1787);
        attr_dev(li2, "class", "nav-item dropdown s-WFTADzNPIVrM");
        add_location(li2, file$3, 35, 4, 1590);
        attr_dev(a3, "class", "");
        attr_dev(a3, "href", base + "/history");
        add_location(a3, file$3, 46, 50, 2231);
        attr_dev(span3, "title", "Your SBTC Transaction History");
        add_location(span3, file$3, 46, 6, 2187);
        attr_dev(span4, "class", "pointer nav-link");
        add_location(span4, file$3, 45, 5, 2149);
        attr_dev(li3, "class", "badge nav-item s-WFTADzNPIVrM");
        add_location(li3, file$3, 44, 4, 2116);
        attr_dev(ul1, "class", "navbar-nav");
        add_location(ul1, file$3, 34, 3, 1562);
        attr_dev(div1, "class", "collapse navbar-collapse");
        attr_dev(div1, "id", "navbarNav");
        add_location(div1, file$3, 33, 2, 1505);
        attr_dev(div2, "class", "container-fluid mx-5");
        add_location(div2, file$3, 22, 1, 843);
        attr_dev(nav, "class", "navbar navbar-expand-md transparent");
        add_location(nav, file$3, 21, 0, 792);
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
            listen_dev(a1, "click", prevent_default(ctx[2]), false, true, false),
            listen_dev(a2, "click", prevent_default(ctx[3]), false, true, false)
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
    const dispatch = createEventDispatcher();
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
      createEventDispatcher,
      base,
      goto,
      UserBalance,
      dispatch,
      togglePeg,
      network,
      $sbtcConfig
    });
    return [
      togglePeg,
      network,
      click_handler,
      click_handler_1
    ];
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
        div24 = claim_element(nodes, "DIV", {
          class: true
        });
        var div24_nodes = children(div24);
        div3 = claim_element(div24_nodes, "DIV", {
          class: true
        });
        var div3_nodes = children(div3);
        p0 = claim_element(div3_nodes, "P", {
          class: true
        });
        var p0_nodes = children(p0);
        t0 = claim_text(p0_nodes, "Standards");
        p0_nodes.forEach(detach_dev);
        t1 = claim_space(div3_nodes);
        div0 = claim_element(div3_nodes, "DIV", {
          class: true
        });
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
        div1 = claim_element(div3_nodes, "DIV", {
          class: true
        });
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
        div2 = claim_element(div3_nodes, "DIV", {
          class: true
        });
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
        div7 = claim_element(div24_nodes, "DIV", {
          class: true
        });
        var div7_nodes = children(div7);
        p1 = claim_element(div7_nodes, "P", {
          class: true
        });
        var p1_nodes = children(p1);
        t8 = claim_text(p1_nodes, "Code");
        p1_nodes.forEach(detach_dev);
        t9 = claim_space(div7_nodes);
        div4 = claim_element(div7_nodes, "DIV", {
          class: true
        });
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
        div5 = claim_element(div7_nodes, "DIV", {
          class: true
        });
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
        div6 = claim_element(div7_nodes, "DIV", {
          class: true
        });
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
        div11 = claim_element(div24_nodes, "DIV", {
          class: true
        });
        var div11_nodes = children(div11);
        p2 = claim_element(div11_nodes, "P", {
          class: true
        });
        var p2_nodes = children(p2);
        t16 = claim_text(p2_nodes, "Videos");
        p2_nodes.forEach(detach_dev);
        t17 = claim_space(div11_nodes);
        div8 = claim_element(div11_nodes, "DIV", {
          class: true
        });
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
        div9 = claim_element(div11_nodes, "DIV", {
          class: true
        });
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
        div10 = claim_element(div11_nodes, "DIV", {
          class: true
        });
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
        div15 = claim_element(div24_nodes, "DIV", {
          class: true
        });
        var div15_nodes = children(div15);
        p3 = claim_element(div15_nodes, "P", {
          class: true
        });
        var p3_nodes = children(p3);
        t24 = claim_text(p3_nodes, "Contact");
        p3_nodes.forEach(detach_dev);
        t25 = claim_space(div15_nodes);
        div12 = claim_element(div15_nodes, "DIV", {
          class: true
        });
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
        div13 = claim_element(div15_nodes, "DIV", {
          class: true
        });
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
        div14 = claim_element(div15_nodes, "DIV", {
          class: true
        });
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
        div19 = claim_element(div24_nodes, "DIV", {
          class: true
        });
        var div19_nodes = children(div19);
        p4 = claim_element(div19_nodes, "P", {
          class: true
        });
        var p4_nodes = children(p4);
        t32 = claim_text(p4_nodes, "Partners");
        p4_nodes.forEach(detach_dev);
        t33 = claim_space(div19_nodes);
        div16 = claim_element(div19_nodes, "DIV", {
          class: true
        });
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
        div17 = claim_element(div19_nodes, "DIV", {
          class: true
        });
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
        div18 = claim_element(div19_nodes, "DIV", {
          class: true
        });
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
        div23 = claim_element(div24_nodes, "DIV", {
          class: true
        });
        var div23_nodes = children(div23);
        div22 = claim_element(div23_nodes, "DIV", {
          class: true
        });
        var div22_nodes = children(div22);
        div20 = claim_element(div22_nodes, "DIV", {
          class: true
        });
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
        div21 = claim_element(div22_nodes, "DIV", {
          style: true
        });
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
        attr_dev(a12, "href", ctx[1]);
        attr_dev(a12, "target", "_blank");
        attr_dev(a12, "rel", "noreferrer");
        add_location(a12, file$2, 59, 6, 2591);
        attr_dev(div16, "class", "demo-div");
        add_location(div16, file$2, 58, 4, 2562);
        attr_dev(a13, "class", " s-OMmj-e4ZMm3Z");
        attr_dev(a13, "href", ctx[0]);
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
    return [
      webWalletLink,
      stacksOrg
    ];
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
    let a2;
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
    footerlinks = new FooterLinks({
      $$inline: true
    });
    const block = {
      c: function create() {
        div12 = element("div");
        div11 = element("div");
        div5 = element("div");
        div1 = element("div");
        div0 = element("div");
        a2 = element("a");
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
        t2 = text("sBTC \xA9 2023");
        t3 = space();
        div9 = element("div");
        div8 = element("div");
        t4 = text("For the \u2665 of crypto!");
        this.h();
      },
      l: function claim(nodes) {
        div12 = claim_element(nodes, "DIV", {
          class: true,
          id: true
        });
        var div12_nodes = children(div12);
        div11 = claim_element(div12_nodes, "DIV", {
          class: true
        });
        var div11_nodes = children(div11);
        div5 = claim_element(div11_nodes, "DIV", {
          class: true
        });
        var div5_nodes = children(div5);
        div1 = claim_element(div5_nodes, "DIV", {
          class: true
        });
        var div1_nodes = children(div1);
        div0 = claim_element(div1_nodes, "DIV", {
          class: true
        });
        var div0_nodes = children(div0);
        a2 = claim_element(div0_nodes, "A", {
          class: true,
          href: true
        });
        var a_nodes = children(a2);
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
        div4 = claim_element(div5_nodes, "DIV", {
          class: true
        });
        var div4_nodes = children(div4);
        div3 = claim_element(div4_nodes, "DIV", {
          class: true
        });
        var div3_nodes = children(div3);
        div2 = claim_element(div3_nodes, "DIV", {
          class: true
        });
        var div2_nodes = children(div2);
        claim_component(footerlinks.$$.fragment, div2_nodes);
        div2_nodes.forEach(detach_dev);
        div3_nodes.forEach(detach_dev);
        div4_nodes.forEach(detach_dev);
        div5_nodes.forEach(detach_dev);
        t1 = claim_space(div11_nodes);
        div10 = claim_element(div11_nodes, "DIV", {
          class: true
        });
        var div10_nodes = children(div10);
        div7 = claim_element(div10_nodes, "DIV", {
          class: true
        });
        var div7_nodes = children(div7);
        div6 = claim_element(div7_nodes, "DIV", {
          class: true
        });
        var div6_nodes = children(div6);
        t2 = claim_text(div6_nodes, "sBTC \xA9 2023");
        div6_nodes.forEach(detach_dev);
        div7_nodes.forEach(detach_dev);
        t3 = claim_space(div10_nodes);
        div9 = claim_element(div10_nodes, "DIV", {
          class: true
        });
        var div9_nodes = children(div9);
        div8 = claim_element(div9_nodes, "DIV", {
          class: true
        });
        var div8_nodes = children(div8);
        t4 = claim_text(div8_nodes, "For the \u2665 of crypto!");
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
        attr_dev(a2, "class", "navbar-brand");
        attr_dev(a2, "href", "/");
        add_location(a2, file$1, 9, 12, 313);
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
        attr_dev(div6, "class", "copywright s-llc3ExEW13Oc");
        add_location(div6, file$1, 24, 12, 781);
        attr_dev(div7, "class", "mb-4");
        add_location(div7, file$1, 23, 8, 749);
        attr_dev(div8, "class", "copywright s-llc3ExEW13Oc");
        add_location(div8, file$1, 27, 10, 881);
        attr_dev(div9, "class", "mb-4");
        add_location(div9, file$1, 26, 8, 851);
        attr_dev(div10, "class", "mx-5 mt-5 d-flex justify-content-between copy s-llc3ExEW13Oc");
        add_location(div10, file$1, 22, 6, 680);
        attr_dev(div11, "class", "pt-5");
        add_location(div11, file$1, 5, 4, 194);
        attr_dev(div12, "class", "container-fluid footer s-llc3ExEW13Oc");
        attr_dev(div12, "id", "footer-section");
        add_location(div12, file$1, 4, 0, 132);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div12, anchor);
        append_hydration_dev(div12, div11);
        append_hydration_dev(div11, div5);
        append_hydration_dev(div5, div1);
        append_hydration_dev(div1, div0);
        append_hydration_dev(div0, a2);
        append_hydration_dev(a2, img);
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
    $$self.$capture_state = () => ({
      FooterLinks,
      logoWhite
    });
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
  var buffer = {};
  var base64Js = {};
  base64Js.byteLength = byteLength;
  base64Js.toByteArray = toByteArray;
  base64Js.fromByteArray = fromByteArray;
  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
  var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }
  revLookup["-".charCodeAt(0)] = 62;
  revLookup["_".charCodeAt(0)] = 63;
  function getLens(b64) {
    var len2 = b64.length;
    if (len2 % 4 > 0) {
      throw new Error("Invalid string. Length must be a multiple of 4");
    }
    var validLen = b64.indexOf("=");
    if (validLen === -1)
      validLen = len2;
    var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
    return [
      validLen,
      placeHoldersLen
    ];
  }
  function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i2;
    for (i2 = 0; i2 < len2; i2 += 4) {
      tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
      arr[curByte++] = tmp >> 16 & 255;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
      tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
      tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    return arr;
  }
  function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
  }
  function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for (var i2 = start; i2 < end; i2 += 3) {
      tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
      output.push(tripletToBase64(tmp));
    }
    return output.join("");
  }
  function fromByteArray(uint8) {
    var tmp;
    var len2 = uint8.length;
    var extraBytes = len2 % 3;
    var parts = [];
    var maxChunkLength = 16383;
    for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
      parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
    }
    if (extraBytes === 1) {
      tmp = uint8[len2 - 1];
      parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
    } else if (extraBytes === 2) {
      tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
      parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
    }
    return parts.join("");
  }
  var ieee754 = {};
  ieee754.read = function(buffer2, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i2 = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer2[offset + i2];
    i2 += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer2[offset + i2], i2 += d, nBits -= 8) {
    }
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer2[offset + i2], i2 += d, nBits -= 8) {
    }
    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  };
  ieee754.write = function(buffer2, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i2 = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }
      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }
    for (; mLen >= 8; buffer2[offset + i2] = m & 255, i2 += d, m /= 256, mLen -= 8) {
    }
    e = e << mLen | m;
    eLen += mLen;
    for (; eLen > 0; buffer2[offset + i2] = e & 255, i2 += d, e /= 256, eLen -= 8) {
    }
    buffer2[offset + i2 - d] |= s * 128;
  };
  (function(exports) {
    const base64 = base64Js;
    const ieee754$1 = ieee754;
    const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    const K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    }
    function typedArraySupport() {
      try {
        const arr = new Uint8Array(1);
        const proto = {
          foo: function() {
            return 42;
          }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    Object.defineProperty(Buffer.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer.isBuffer(this))
          return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer.isBuffer(this))
          return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      const buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer.prototype);
      return buf;
    }
    function Buffer(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError('The "string" argument must be of type string. Received type number');
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      }
      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer.from(valueOf, encodingOrOffset, length);
      }
      const b = fromObject(value);
      if (b)
        return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
      }
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    }
    Buffer.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      const length = byteLength2(string, encoding) | 0;
      let buf = createBuffer(length);
      const actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      const length = array.length < 0 ? 0 : checked(array.length) | 0;
      const buf = createBuffer(length);
      for (let i2 = 0; i2 < length; i2 += 1) {
        buf[i2] = array[i2] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      let buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer.isBuffer(obj)) {
        const len2 = checked(obj.length) | 0;
        const buf = createBuffer(len2);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len2);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer.alloc(+length);
    }
    Buffer.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer.prototype;
    };
    Buffer.compare = function compare(a2, b) {
      if (isInstance(a2, Uint8Array))
        a2 = Buffer.from(a2, a2.offset, a2.byteLength);
      if (isInstance(b, Uint8Array))
        b = Buffer.from(b, b.offset, b.byteLength);
      if (!Buffer.isBuffer(a2) || !Buffer.isBuffer(b)) {
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      }
      if (a2 === b)
        return 0;
      let x = a2.length;
      let y = b.length;
      for (let i2 = 0, len2 = Math.min(x, y); i2 < len2; ++i2) {
        if (a2[i2] !== b[i2]) {
          x = a2[i2];
          y = b[i2];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    Buffer.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer.alloc(0);
      }
      let i2;
      if (length === void 0) {
        length = 0;
        for (i2 = 0; i2 < list.length; ++i2) {
          length += list[i2].length;
        }
      }
      const buffer2 = Buffer.allocUnsafe(length);
      let pos = 0;
      for (i2 = 0; i2 < list.length; ++i2) {
        let buf = list[i2];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer2.length) {
            if (!Buffer.isBuffer(buf))
              buf = Buffer.from(buf);
            buf.copy(buffer2, pos);
          } else {
            Uint8Array.prototype.set.call(buffer2, buf, pos);
          }
        } else if (!Buffer.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer2, pos);
        }
        pos += buf.length;
      }
      return buffer2;
    };
    function byteLength2(string, encoding) {
      if (Buffer.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
      }
      const len2 = string.length;
      const mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len2 === 0)
        return 0;
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len2;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len2 * 2;
          case "hex":
            return len2 >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer.byteLength = byteLength2;
    function slowToString(encoding, start, end) {
      let loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding)
        encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer.prototype._isBuffer = true;
    function swap(b, n, m) {
      const i2 = b[n];
      b[n] = b[m];
      b[m] = i2;
    }
    Buffer.prototype.swap16 = function swap16() {
      const len2 = this.length;
      if (len2 % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i2 = 0; i2 < len2; i2 += 2) {
        swap(this, i2, i2 + 1);
      }
      return this;
    };
    Buffer.prototype.swap32 = function swap32() {
      const len2 = this.length;
      if (len2 % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i2 = 0; i2 < len2; i2 += 4) {
        swap(this, i2, i2 + 3);
        swap(this, i2 + 1, i2 + 2);
      }
      return this;
    };
    Buffer.prototype.swap64 = function swap64() {
      const len2 = this.length;
      if (len2 % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i2 = 0; i2 < len2; i2 += 8) {
        swap(this, i2, i2 + 7);
        swap(this, i2 + 1, i2 + 6);
        swap(this, i2 + 2, i2 + 5);
        swap(this, i2 + 3, i2 + 4);
      }
      return this;
    };
    Buffer.prototype.toString = function toString() {
      const length = this.length;
      if (length === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer.prototype.toLocaleString = Buffer.prototype.toString;
    Buffer.prototype.equals = function equals(b) {
      if (!Buffer.isBuffer(b))
        throw new TypeError("Argument must be a Buffer");
      if (this === b)
        return true;
      return Buffer.compare(this, b) === 0;
    };
    Buffer.prototype.inspect = function inspect() {
      let str = "";
      const max = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max)
        str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
    }
    Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer.from(target, target.offset, target.byteLength);
      }
      if (!Buffer.isBuffer(target)) {
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target)
        return 0;
      let x = thisEnd - thisStart;
      let y = end - start;
      const len2 = Math.min(x, y);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);
      for (let i2 = 0; i2 < len2; ++i2) {
        if (thisCopy[i2] !== targetCopy[i2]) {
          x = thisCopy[i2];
          y = targetCopy[i2];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer2, val, byteOffset, encoding, dir) {
      if (buffer2.length === 0)
        return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer2.length - 1;
      }
      if (byteOffset < 0)
        byteOffset = buffer2.length + byteOffset;
      if (byteOffset >= buffer2.length) {
        if (dir)
          return -1;
        else
          byteOffset = buffer2.length - 1;
      } else if (byteOffset < 0) {
        if (dir)
          byteOffset = 0;
        else
          return -1;
      }
      if (typeof val === "string") {
        val = Buffer.from(val, encoding);
      }
      if (Buffer.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer2, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer2, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer2, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer2, [
          val
        ], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i3) {
        if (indexSize === 1) {
          return buf[i3];
        } else {
          return buf.readUInt16BE(i3 * indexSize);
        }
      }
      let i2;
      if (dir) {
        let foundIndex = -1;
        for (i2 = byteOffset; i2 < arrLength; i2++) {
          if (read(arr, i2) === read(val, foundIndex === -1 ? 0 : i2 - foundIndex)) {
            if (foundIndex === -1)
              foundIndex = i2;
            if (i2 - foundIndex + 1 === valLength)
              return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1)
              i2 -= i2 - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength)
          byteOffset = arrLength - valLength;
        for (i2 = byteOffset; i2 >= 0; i2--) {
          let found = true;
          for (let j = 0; j < valLength; j++) {
            if (read(arr, i2 + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found)
            return i2;
        }
      }
      return -1;
    }
    Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      const remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      const strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      let i2;
      for (i2 = 0; i2 < length; ++i2) {
        const parsed = parseInt(string.substr(i2 * 2, 2), 16);
        if (numberIsNaN(parsed))
          return i2;
        buf[offset + i2] = parsed;
      }
      return i2;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0)
            encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }
      const remaining = this.length - offset;
      if (length === void 0 || length > remaining)
        length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding)
        encoding = "utf8";
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      const res = [];
      let i2 = start;
      while (i2 < end) {
        const firstByte = buf[i2];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i2 + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i2 + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i2 + 1];
              thirdByte = buf[i2 + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i2 + 1];
              thirdByte = buf[i2 + 2];
              fourthByte = buf[i2 + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i2 += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    const MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      const len2 = codePoints.length;
      if (len2 <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      let res = "";
      let i2 = 0;
      while (i2 < len2) {
        res += String.fromCharCode.apply(String, codePoints.slice(i2, i2 += MAX_ARGUMENTS_LENGTH));
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i2 = start; i2 < end; ++i2) {
        ret += String.fromCharCode(buf[i2] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i2 = start; i2 < end; ++i2) {
        ret += String.fromCharCode(buf[i2]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      const len2 = buf.length;
      if (!start || start < 0)
        start = 0;
      if (!end || end < 0 || end > len2)
        end = len2;
      let out = "";
      for (let i2 = start; i2 < end; ++i2) {
        out += hexSliceLookupTable[buf[i2]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      const bytes = buf.slice(start, end);
      let res = "";
      for (let i2 = 0; i2 < bytes.length - 1; i2 += 2) {
        res += String.fromCharCode(bytes[i2] + bytes[i2 + 1] * 256);
      }
      return res;
    }
    Buffer.prototype.slice = function slice(start, end) {
      const len2 = this.length;
      start = ~~start;
      end = end === void 0 ? len2 : ~~end;
      if (start < 0) {
        start += len2;
        if (start < 0)
          start = 0;
      } else if (start > len2) {
        start = len2;
      }
      if (end < 0) {
        end += len2;
        if (end < 0)
          end = 0;
      } else if (end > len2) {
        end = len2;
      }
      if (end < start)
        end = start;
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0)
        throw new RangeError("offset is not uint");
      if (offset + ext > length)
        throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength3, noAssert) {
      offset = offset >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength3, this.length);
      let val = this[offset];
      let mul = 1;
      let i2 = 0;
      while (++i2 < byteLength3 && (mul *= 256)) {
        val += this[offset + i2] * mul;
      }
      return val;
    };
    Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength3, noAssert) {
      offset = offset >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength3, this.length);
      }
      let val = this[offset + --byteLength3];
      let mul = 1;
      while (byteLength3 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength3] * mul;
      }
      return val;
    };
    Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer.prototype.readIntLE = function readIntLE(offset, byteLength3, noAssert) {
      offset = offset >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength3, this.length);
      let val = this[offset];
      let mul = 1;
      let i2 = 0;
      while (++i2 < byteLength3 && (mul *= 256)) {
        val += this[offset + i2] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength3);
      return val;
    };
    Buffer.prototype.readIntBE = function readIntBE(offset, byteLength3, noAssert) {
      offset = offset >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength3, this.length);
      let i2 = byteLength3;
      let mul = 1;
      let val = this[offset + --i2];
      while (i2 > 0 && (mul *= 256)) {
        val += this[offset + --i2] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength3);
      return val;
    };
    Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128))
        return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      const val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      const val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    });
    Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
    });
    Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754$1.read(this, offset, true, 23, 4);
    };
    Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754$1.read(this, offset, false, 23, 4);
    };
    Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754$1.read(this, offset, true, 52, 8);
    };
    Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754$1.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer.isBuffer(buf))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min)
        throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
    }
    Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength3, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength3) - 1;
        checkInt(this, value, offset, byteLength3, maxBytes, 0);
      }
      let mul = 1;
      let i2 = 0;
      this[offset] = value & 255;
      while (++i2 < byteLength3 && (mul *= 256)) {
        this[offset + i2] = value / mul & 255;
      }
      return offset + byteLength3;
    };
    Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength3, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength3) - 1;
        checkInt(this, value, offset, byteLength3, maxBytes, 0);
      }
      let i2 = byteLength3 - 1;
      let mul = 1;
      this[offset + i2] = value & 255;
      while (--i2 >= 0 && (mul *= 256)) {
        this[offset + i2] = value / mul & 255;
      }
      return offset + byteLength3;
    };
    Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function wrtBigUInt64LE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      return offset;
    }
    function wrtBigUInt64BE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset + 7] = lo;
      lo = lo >> 8;
      buf[offset + 6] = lo;
      lo = lo >> 8;
      buf[offset + 5] = lo;
      lo = lo >> 8;
      buf[offset + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset + 3] = hi;
      hi = hi >> 8;
      buf[offset + 2] = hi;
      hi = hi >> 8;
      buf[offset + 1] = hi;
      hi = hi >> 8;
      buf[offset] = hi;
      return offset + 8;
    }
    Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength3, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength3 - 1);
        checkInt(this, value, offset, byteLength3, limit - 1, -limit);
      }
      let i2 = 0;
      let mul = 1;
      let sub = 0;
      this[offset] = value & 255;
      while (++i2 < byteLength3 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i2 - 1] !== 0) {
          sub = 1;
        }
        this[offset + i2] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength3;
    };
    Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength3, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength3 - 1);
        checkInt(this, value, offset, byteLength3, limit - 1, -limit);
      }
      let i2 = byteLength3 - 1;
      let mul = 1;
      let sub = 0;
      this[offset + i2] = value & 255;
      while (--i2 >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i2 + 1] !== 0) {
          sub = 1;
        }
        this[offset + i2] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength3;
    };
    Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 127, -128);
      if (value < 0)
        value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0)
        value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
      if (offset < 0)
        throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4);
      }
      ieee754$1.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8);
      }
      ieee754$1.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer.isBuffer(target))
        throw new TypeError("argument should be a Buffer");
      if (!start)
        start = 0;
      if (!end && end !== 0)
        end = this.length;
      if (targetStart >= target.length)
        targetStart = target.length;
      if (!targetStart)
        targetStart = 0;
      if (end > 0 && end < start)
        end = start;
      if (end === start)
        return 0;
      if (target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length)
        throw new RangeError("Index out of range");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      if (end > this.length)
        end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      const len2 = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
      }
      return len2;
    };
    Buffer.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          const code2 = val.charCodeAt(0);
          if (encoding === "utf8" && code2 < 128 || encoding === "latin1") {
            val = code2;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val)
        val = 0;
      let i2;
      if (typeof val === "number") {
        for (i2 = start; i2 < end; ++i2) {
          this[i2] = val;
        }
      } else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len2 = bytes.length;
        if (len2 === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i2 = 0; i2 < end - start; ++i2) {
          this[i2 + start] = bytes[i2 % len2];
        }
      }
      return this;
    };
    const errors = {};
    function E(sym, getMessage, Base) {
      errors[sym] = class NodeError extends Base {
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${sym}]`;
          this.stack;
          delete this.name;
        }
        get code() {
          return sym;
        }
        set code(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${sym}]: ${this.message}`;
        }
      };
    }
    E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
      if (name) {
        return `${name} is outside of buffer bounds`;
      }
      return "Attempt to access memory outside buffer bounds";
    }, RangeError);
    E("ERR_INVALID_ARG_TYPE", function(name, actual) {
      return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
    }, TypeError);
    E("ERR_OUT_OF_RANGE", function(str, range, input) {
      let msg = `The value of "${str}" is out of range.`;
      let received = input;
      if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
        received = addNumericalSeparator(String(input));
      } else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
          received = addNumericalSeparator(received);
        }
        received += "n";
      }
      msg += ` It must be ${range}. Received ${received}`;
      return msg;
    }, RangeError);
    function addNumericalSeparator(val) {
      let res = "";
      let i2 = val.length;
      const start = val[0] === "-" ? 1 : 0;
      for (; i2 >= start + 4; i2 -= 3) {
        res = `_${val.slice(i2 - 3, i2)}${res}`;
      }
      return `${val.slice(0, i2)}${res}`;
    }
    function checkBounds(buf, offset, byteLength3) {
      validateNumber(offset, "offset");
      if (buf[offset] === void 0 || buf[offset + byteLength3] === void 0) {
        boundsError(offset, buf.length - (byteLength3 + 1));
      }
    }
    function checkIntBI(value, min, max, buf, offset, byteLength3) {
      if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength3 > 3) {
          if (min === 0 || min === BigInt(0)) {
            range = `>= 0${n} and < 2${n} ** ${(byteLength3 + 1) * 8}${n}`;
          } else {
            range = `>= -(2${n} ** ${(byteLength3 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength3 + 1) * 8 - 1}${n}`;
          }
        } else {
          range = `>= ${min}${n} and <= ${max}${n}`;
        }
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
      }
      checkBounds(buf, offset, byteLength3);
    }
    function validateNumber(value, name) {
      if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
      }
    }
    function boundsError(value, length, type) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
      }
      if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
      }
      throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
    }
    const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2)
        return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      let codePoint;
      const length = string.length;
      let leadSurrogate = null;
      const bytes = [];
      for (let i2 = 0; i2 < length; ++i2) {
        codePoint = string.charCodeAt(i2);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            } else if (i2 + 1 === length) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0)
            break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0)
            break;
          bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0)
            break;
          bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0)
            break;
          bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      const byteArray = [];
      for (let i2 = 0; i2 < str.length; ++i2) {
        byteArray.push(str.charCodeAt(i2) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      let c, hi, lo;
      const byteArray = [];
      for (let i2 = 0; i2 < str.length; ++i2) {
        if ((units -= 2) < 0)
          break;
        c = str.charCodeAt(i2);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      let i2;
      for (i2 = 0; i2 < length; ++i2) {
        if (i2 + offset >= dst.length || i2 >= src.length)
          break;
        dst[i2 + offset] = src[i2];
      }
      return i2;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    const hexSliceLookupTable = function() {
      const alphabet = "0123456789abcdef";
      const table = new Array(256);
      for (let i2 = 0; i2 < 16; ++i2) {
        const i16 = i2 * 16;
        for (let j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i2] + alphabet[j];
        }
      }
      return table;
    }();
    function defineBigIntMethod(fn) {
      return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }
    function BufferBigIntNotDefined() {
      throw new Error("BigInt not supported");
    }
  })(buffer);
  const _layout_svelte_svelte_type_style_lang = "";
  const { console: console_1 } = globals;
  const file = "src/routes/+layout.svelte";
  function create_if_block(ctx) {
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [
      create_if_block_1,
      create_else_block
    ];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (ctx2[1].isSignedIn)
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
      source: "(52:0) {#if inited}",
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
    let a2;
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
        t0 = text("Connect your Hiro web wallet to peg in to SBTC!");
        t1 = space();
        p1 = element("p");
        span1 = element("span");
        a2 = element("a");
        span0 = element("span");
        img = element("img");
        t2 = text(" connect");
        t3 = space();
        p2 = element("p");
        t4 = text("Currently in Beta testing - invitation only!");
        this.h();
      },
      l: function claim(nodes) {
        div = claim_element(nodes, "DIV", {
          class: true
        });
        var div_nodes = children(div);
        p0 = claim_element(div_nodes, "P", {
          class: true
        });
        var p0_nodes = children(p0);
        t0 = claim_text(p0_nodes, "Connect your Hiro web wallet to peg in to SBTC!");
        p0_nodes.forEach(detach_dev);
        t1 = claim_space(div_nodes);
        p1 = claim_element(div_nodes, "P", {});
        var p1_nodes = children(p1);
        span1 = claim_element(p1_nodes, "SPAN", {
          class: true
        });
        var span1_nodes = children(span1);
        a2 = claim_element(span1_nodes, "A", {
          href: true,
          class: true
        });
        var a_nodes = children(a2);
        span0 = claim_element(a_nodes, "SPAN", {
          class: true
        });
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
        p2 = claim_element(div_nodes, "P", {
          class: true
        });
        var p2_nodes = children(p2);
        t4 = claim_text(p2_nodes, "Currently in Beta testing - invitation only!");
        p2_nodes.forEach(detach_dev);
        div_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(p0, "class", "text-white");
        add_location(p0, file, 60, 2, 1898);
        if (!src_url_equal(img.src, img_src_value = stx_eco_wallet_off))
          attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "Connect Wallet / Login");
        attr_dev(img, "width", "40");
        attr_dev(img, "height", "auto");
        add_location(img, file, 61, 116, 2088);
        attr_dev(span0, "class", "px-1");
        add_location(span0, file, 61, 96, 2068);
        attr_dev(a2, "href", "/");
        attr_dev(a2, "class", "pointer px-2");
        add_location(a2, file, 61, 28, 2e3);
        attr_dev(span1, "class", "nav-item");
        add_location(span1, file, 61, 5, 1977);
        add_location(p1, file, 61, 2, 1974);
        attr_dev(p2, "class", "mt-5 text-warning");
        add_location(p2, file, 62, 2, 2206);
        attr_dev(div, "class", "lobby bg-dark s-7IPF32Wcq3s8");
        add_location(div, file, 59, 0, 1868);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div, anchor);
        append_hydration_dev(div, p0);
        append_hydration_dev(p0, t0);
        append_hydration_dev(div, t1);
        append_hydration_dev(div, p1);
        append_hydration_dev(p1, span1);
        append_hydration_dev(span1, a2);
        append_hydration_dev(a2, span0);
        append_hydration_dev(span0, img);
        append_hydration_dev(a2, t2);
        append_hydration_dev(div, t3);
        append_hydration_dev(div, p2);
        append_hydration_dev(p2, t4);
        if (!mounted) {
          dispose = listen_dev(a2, "click", prevent_default(ctx[3]), false, true, false);
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
      source: "(59:0) {:else}",
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
    header = new Header({
      $$inline: true
    });
    const default_slot_template = ctx[6].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[5], null);
    footer = new Footer({
      $$inline: true
    });
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
        div = claim_element(nodes, "DIV", {
          class: true
        });
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
        add_location(div, file, 53, 0, 1799);
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
          if (default_slot.p && (!current || dirty & 32)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(default_slot_template, ctx2[5], dirty, null), null);
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
      source: "(53:0) {#if $auth.isSignedIn}",
      ctx
    });
    return block;
  }
  function create_fragment(ctx) {
    let if_block_anchor;
    let current;
    let if_block = ctx[0] && create_if_block(ctx);
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
        if (ctx2[0]) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 1) {
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
    let $auth;
    validate_store(sbtcConfig, "sbtcConfig");
    component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(8, $sbtcConfig = $$value));
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("Layout", slots, [
      "default"
    ]);
    let { data } = $$props;
    const unsubscribe = sbtcConfig.subscribe(() => {
    });
    onDestroy(unsubscribe);
    setUpMicroStacks();
    let inited = false;
    const auth = Ce();
    validate_store(auth, "auth");
    component_subscribe($$self, auth, (value) => $$invalidate(1, $auth = value));
    const doLogin = () => {
      login($auth);
    };
    const initApplication = async () => {
      const conf = $sbtcConfig;
      conf.sbtcContractData = data.sbtcContractData;
      sbtcConfig.update(() => conf);
      return conf;
    };
    let bootstrap;
    onMount(async () => {
      bootstrap = await __vitePreload(() => import("../chunks/bootstrap.esm.e88d1e6f.js"), true ? [] : void 0, import.meta.url);
      let conf = defaultSbtcConfig;
      try {
        conf = await initApplication();
        globalThis.Buffer = buffer.Buffer;
        $$invalidate(0, inited = true);
      } catch (err) {
        console.log(err);
      }
      await tick();
      setTimeout(function() {
        const tooltipTriggerList = window.document.querySelectorAll('[data-bs-toggle="tooltip"]');
        if (tooltipTriggerList)
          [
            ...tooltipTriggerList
          ].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
        const popoverTriggerList = window.document.querySelectorAll('[data-bs-toggle="dropdown"]');
        if (popoverTriggerList)
          [
            ...popoverTriggerList
          ].map((popoverTriggerEl) => new bootstrap.Dropdown(popoverTriggerEl));
      }, 500);
    });
    $$self.$$.on_mount.push(function() {
      if (data === void 0 && !("data" in $$props || $$self.$$.bound[$$self.$$.props["data"]])) {
        console_1.warn("<Layout> was created without expected prop 'data'");
      }
    });
    const writable_props = [
      "data"
    ];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
        console_1.warn(`<Layout> was created with unknown prop '${key}'`);
    });
    $$self.$$set = ($$props2) => {
      if ("data" in $$props2)
        $$invalidate(4, data = $$props2.data);
      if ("$$scope" in $$props2)
        $$invalidate(5, $$scope = $$props2.$$scope);
    };
    $$self.$capture_state = () => ({
      getAuth: Ce,
      tick,
      onMount,
      onDestroy,
      Header,
      Footer,
      sbtcConfig,
      login,
      stx_eco_wallet_off,
      Buffer: buffer.Buffer,
      defaultSbtcConfig,
      setUpMicroStacks,
      data,
      unsubscribe,
      inited,
      auth,
      doLogin,
      initApplication,
      bootstrap,
      $sbtcConfig,
      $auth
    });
    $$self.$inject_state = ($$props2) => {
      if ("data" in $$props2)
        $$invalidate(4, data = $$props2.data);
      if ("inited" in $$props2)
        $$invalidate(0, inited = $$props2.inited);
      if ("bootstrap" in $$props2)
        bootstrap = $$props2.bootstrap;
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    return [
      inited,
      $auth,
      auth,
      doLogin,
      data,
      $$scope,
      slots
    ];
  }
  Layout = class Layout extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance, create_fragment, safe_not_equal, {
        data: 4
      });
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
  };
})();
export {
  __tla,
  Layout as default
};
