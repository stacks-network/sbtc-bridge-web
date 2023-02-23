import { _ as __vitePreload } from "../../chunks/preload-helper-6910039e.js";
import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, k as element, c as claim_space, l as claim_element, m as children, h as detach, n as attr, b as insert_hydration, C as noop, D as component_subscribe, o as onMount, q as text, r as claim_text, E as append_hydration, F as src_url_equal, G as listen, H as prevent_default, p as set_style, w as create_component, x as claim_component, y as mount_component, f as transition_in, t as transition_out, z as destroy_component, I as run_all, J as createEventDispatcher, e as empty, d as check_outros, K as onDestroy, A as tick, g as group_outros, L as create_slot, M as update_slot_base, N as get_all_dirty_from_scope, O as get_slot_changes } from "../../chunks/index-963bdb90.js";
import { C as Ce, a, s as sbtcConfig, i, b as se, c as C, d as defaultSbtcConfig, f as fetchSbtcWalletAddress } from "../../chunks/stores-dd03c1bb.js";
import { l as login, c as client } from "../../chunks/stacks-acc5a44a.js";
import { c as base } from "../../chunks/shared-8b543b29.js";
import { c as coordinator } from "../../chunks/sbtc_admin-93852f03.js";
import { b as buffer, f as fetchFeeEstimate } from "../../chunks/index-38790d48.js";
let Layout;
let __tla = (async () => {
  const app = "";
  const stx_eco_wallet_on = "" + new URL("../../assets/stx_eco_wallet_on-090e5a93.png", import.meta.url).href;
  const stx_eco_wallet_off = "" + new URL("../../assets/stx_eco_wallet_off-7e8f173f.png", import.meta.url).href;
  const WalletConnectButton_svelte_svelte_type_style_lang = "";
  function create_if_block_3(ctx) {
    let li;
    let span;
    let a2;
    let t;
    return {
      c() {
        li = element("li");
        span = element("span");
        a2 = element("a");
        t = text("Admin");
        this.h();
      },
      l(nodes) {
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
        a_nodes.forEach(detach);
        span_nodes.forEach(detach);
        li_nodes.forEach(detach);
        this.h();
      },
      h() {
        attr(a2, "href", base + "/admin");
        attr(a2, "class", "pointer px-2");
        attr(span, "class", "nav-link");
        attr(li, "class", "nav-item mb-1 svelte-gk9fgw");
      },
      m(target, anchor) {
        insert_hydration(target, li, anchor);
        append_hydration(li, span);
        append_hydration(span, a2);
        append_hydration(a2, t);
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(li);
      }
    };
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
    return {
      c() {
        span1 = element("span");
        a2 = element("a");
        span0 = element("span");
        img = element("img");
        t = text(" connect");
        this.h();
      },
      l(nodes) {
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
        span0_nodes.forEach(detach);
        t = claim_text(a_nodes, " connect");
        a_nodes.forEach(detach);
        span1_nodes.forEach(detach);
        this.h();
      },
      h() {
        if (!src_url_equal(img.src, img_src_value = stx_eco_wallet_off))
          attr(img, "src", img_src_value);
        attr(img, "alt", "Connect Wallet / Login");
        attr(img, "width", "40");
        attr(img, "height", "auto");
        attr(span0, "class", "px-1");
        attr(a2, "href", "/");
        attr(a2, "class", "pointer px-2");
        attr(span1, "class", "nav-link");
      },
      m(target, anchor) {
        insert_hydration(target, span1, anchor);
        append_hydration(span1, a2);
        append_hydration(a2, span0);
        append_hydration(span0, img);
        append_hydration(a2, t);
        if (!mounted) {
          dispose = listen(a2, "click", prevent_default(ctx[6]));
          mounted = true;
        }
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(span1);
        mounted = false;
        dispose();
      }
    };
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
    return {
      c() {
        span1 = element("span");
        a2 = element("a");
        span0 = element("span");
        img = element("img");
        t = text(" connect");
        this.h();
      },
      l(nodes) {
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
        span0_nodes.forEach(detach);
        t = claim_text(a_nodes, " connect");
        a_nodes.forEach(detach);
        span1_nodes.forEach(detach);
        this.h();
      },
      h() {
        if (!src_url_equal(img.src, img_src_value = stx_eco_wallet_off))
          attr(img, "src", img_src_value);
        attr(img, "alt", "Connect Wallet / Login");
        attr(img, "width", "40");
        attr(img, "height", "auto");
        attr(span0, "class", "px-2");
        attr(a2, "href", "/");
        attr(span1, "class", "nav-link");
      },
      m(target, anchor) {
        insert_hydration(target, span1, anchor);
        append_hydration(span1, a2);
        append_hydration(a2, span0);
        append_hydration(span0, img);
        append_hydration(a2, t);
        if (!mounted) {
          dispose = listen(a2, "click", prevent_default(login));
          mounted = true;
        }
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(span1);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_1$1(ctx) {
    let span1;
    let a2;
    let span0;
    let img;
    let img_src_value;
    let mounted;
    let dispose;
    return {
      c() {
        span1 = element("span");
        a2 = element("a");
        span0 = element("span");
        img = element("img");
        this.h();
      },
      l(nodes) {
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
        span0_nodes.forEach(detach);
        a_nodes.forEach(detach);
        span1_nodes.forEach(detach);
        this.h();
      },
      h() {
        if (!src_url_equal(img.src, img_src_value = stx_eco_wallet_on))
          attr(img, "src", img_src_value);
        attr(img, "alt", "Wallet Connected");
        attr(img, "width", "40");
        attr(img, "height", "auto");
        attr(span0, "class", "px-2");
        attr(a2, "href", "/");
        attr(a2, "class", "pointer");
        set_style(a2, "vertical-align", "middle");
        attr(span1, "class", "nav-link");
      },
      m(target, anchor) {
        insert_hydration(target, span1, anchor);
        append_hydration(span1, a2);
        append_hydration(a2, span0);
        append_hydration(span0, img);
        if (!mounted) {
          dispose = listen(a2, "click", prevent_default(ctx[4]));
          mounted = true;
        }
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(span1);
        mounted = false;
        dispose();
      }
    };
  }
  function create_fragment$4(ctx) {
    let t;
    let li;
    let if_block0 = coordinator.stxAddress === ctx[1].stxAddress && create_if_block_3();
    function select_block_type(ctx2, dirty) {
      if (ctx2[0].isSignedIn)
        return create_if_block_1$1;
      if (ctx2[0].isRequestPending)
        return create_if_block_2;
      return create_else_block$1;
    }
    let current_block_type = select_block_type(ctx);
    let if_block1 = current_block_type(ctx);
    return {
      c() {
        if (if_block0)
          if_block0.c();
        t = space();
        li = element("li");
        if_block1.c();
        this.h();
      },
      l(nodes) {
        if (if_block0)
          if_block0.l(nodes);
        t = claim_space(nodes);
        li = claim_element(nodes, "LI", {
          class: true
        });
        var li_nodes = children(li);
        if_block1.l(li_nodes);
        li_nodes.forEach(detach);
        this.h();
      },
      h() {
        attr(li, "class", "nav-item mb-1 svelte-gk9fgw");
      },
      m(target, anchor) {
        if (if_block0)
          if_block0.m(target, anchor);
        insert_hydration(target, t, anchor);
        insert_hydration(target, li, anchor);
        if_block1.m(li, null);
      },
      p(ctx2, [dirty]) {
        if (coordinator.stxAddress === ctx2[1].stxAddress) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_3();
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
      d(detaching) {
        if (if_block0)
          if_block0.d(detaching);
        if (detaching)
          detach(t);
        if (detaching)
          detach(li);
        if_block1.d();
      }
    };
  }
  function instance$2($$self, $$props, $$invalidate) {
    let $auth;
    let $account;
    const auth = Ce();
    component_subscribe($$self, auth, (value) => $$invalidate(0, $auth = value));
    const account = a();
    component_subscribe($$self, account, (value) => $$invalidate(1, $account = value));
    const logout = () => {
      $auth.signOut();
    };
    const doLogin = () => {
      login($auth);
    };
    onMount(async () => {
    });
    const click_handler = () => doLogin();
    return [
      $auth,
      $account,
      auth,
      account,
      logout,
      doLogin,
      click_handler
    ];
  }
  class WalletConnectButton extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$2, create_fragment$4, safe_not_equal, {});
    }
  }
  const logoWhite = "" + new URL("../../assets/logo-white-68f65e57.jpeg", import.meta.url).href;
  const Header_svelte_svelte_type_style_lang = "";
  function create_fragment$3(ctx) {
    let nav;
    let div1;
    let a0;
    let img;
    let img_src_value;
    let t0;
    let button;
    let span0;
    let t1;
    let div0;
    let ul1;
    let li0;
    let span2;
    let span1;
    let a1;
    let t2;
    let t3;
    let li3;
    let span3;
    let t4;
    let t5;
    let ul0;
    let li1;
    let a2;
    let t6;
    let t7;
    let li2;
    let a3;
    let t8;
    let t9;
    let walletconnectbutton;
    let current;
    let mounted;
    let dispose;
    walletconnectbutton = new WalletConnectButton({});
    return {
      c() {
        nav = element("nav");
        div1 = element("div");
        a0 = element("a");
        img = element("img");
        t0 = space();
        button = element("button");
        span0 = element("span");
        t1 = space();
        div0 = element("div");
        ul1 = element("ul");
        li0 = element("li");
        span2 = element("span");
        span1 = element("span");
        a1 = element("a");
        t2 = text("History");
        t3 = space();
        li3 = element("li");
        span3 = element("span");
        t4 = text("Peg");
        t5 = space();
        ul0 = element("ul");
        li1 = element("li");
        a2 = element("a");
        t6 = text("Peg In");
        t7 = space();
        li2 = element("li");
        a3 = element("a");
        t8 = text("Peg Out");
        t9 = space();
        create_component(walletconnectbutton.$$.fragment);
        this.h();
      },
      l(nodes) {
        nav = claim_element(nodes, "NAV", {
          class: true
        });
        var nav_nodes = children(nav);
        div1 = claim_element(nav_nodes, "DIV", {
          class: true
        });
        var div1_nodes = children(div1);
        a0 = claim_element(div1_nodes, "A", {
          class: true,
          href: true
        });
        var a0_nodes = children(a0);
        img = claim_element(a0_nodes, "IMG", {
          class: true,
          src: true,
          alt: true
        });
        a0_nodes.forEach(detach);
        t0 = claim_space(div1_nodes);
        button = claim_element(div1_nodes, "BUTTON", {
          class: true,
          type: true,
          "data-bs-toggle": true,
          "data-bs-target": true,
          "aria-controls": true,
          "aria-expanded": true,
          "aria-label": true
        });
        var button_nodes = children(button);
        span0 = claim_element(button_nodes, "SPAN", {
          class: true
        });
        children(span0).forEach(detach);
        button_nodes.forEach(detach);
        t1 = claim_space(div1_nodes);
        div0 = claim_element(div1_nodes, "DIV", {
          class: true,
          id: true
        });
        var div0_nodes = children(div0);
        ul1 = claim_element(div0_nodes, "UL", {
          class: true
        });
        var ul1_nodes = children(ul1);
        li0 = claim_element(ul1_nodes, "LI", {
          class: true
        });
        var li0_nodes = children(li0);
        span2 = claim_element(li0_nodes, "SPAN", {
          class: true
        });
        var span2_nodes = children(span2);
        span1 = claim_element(span2_nodes, "SPAN", {
          title: true
        });
        var span1_nodes = children(span1);
        a1 = claim_element(span1_nodes, "A", {
          class: true,
          href: true
        });
        var a1_nodes = children(a1);
        t2 = claim_text(a1_nodes, "History");
        a1_nodes.forEach(detach);
        span1_nodes.forEach(detach);
        span2_nodes.forEach(detach);
        li0_nodes.forEach(detach);
        t3 = claim_space(ul1_nodes);
        li3 = claim_element(ul1_nodes, "LI", {
          class: true
        });
        var li3_nodes = children(li3);
        span3 = claim_element(li3_nodes, "SPAN", {
          class: true,
          id: true,
          role: true,
          "data-bs-toggle": true,
          "aria-expanded": true
        });
        var span3_nodes = children(span3);
        t4 = claim_text(span3_nodes, "Peg");
        span3_nodes.forEach(detach);
        t5 = claim_space(li3_nodes);
        ul0 = claim_element(li3_nodes, "UL", {
          class: true,
          "aria-labelledby": true
        });
        var ul0_nodes = children(ul0);
        li1 = claim_element(ul0_nodes, "LI", {});
        var li1_nodes = children(li1);
        a2 = claim_element(li1_nodes, "A", {
          class: true,
          href: true
        });
        var a2_nodes = children(a2);
        t6 = claim_text(a2_nodes, "Peg In");
        a2_nodes.forEach(detach);
        li1_nodes.forEach(detach);
        t7 = claim_space(ul0_nodes);
        li2 = claim_element(ul0_nodes, "LI", {});
        var li2_nodes = children(li2);
        a3 = claim_element(li2_nodes, "A", {
          class: true,
          href: true
        });
        var a3_nodes = children(a3);
        t8 = claim_text(a3_nodes, "Peg Out");
        a3_nodes.forEach(detach);
        li2_nodes.forEach(detach);
        ul0_nodes.forEach(detach);
        li3_nodes.forEach(detach);
        t9 = claim_space(ul1_nodes);
        claim_component(walletconnectbutton.$$.fragment, ul1_nodes);
        ul1_nodes.forEach(detach);
        div0_nodes.forEach(detach);
        div1_nodes.forEach(detach);
        nav_nodes.forEach(detach);
        this.h();
      },
      h() {
        attr(img, "class", "nav-logo");
        if (!src_url_equal(img.src, img_src_value = logoWhite))
          attr(img, "src", img_src_value);
        attr(img, "alt", "CityCoins Test");
        attr(a0, "class", "navbar-brand");
        attr(a0, "href", base + "/");
        attr(span0, "class", "navbar-toggler-icon");
        attr(button, "class", "navbar-toggler");
        attr(button, "type", "button");
        attr(button, "data-bs-toggle", "collapse");
        attr(button, "data-bs-target", "#navbarNav");
        attr(button, "aria-controls", "navbarNav");
        attr(button, "aria-expanded", "false");
        attr(button, "aria-label", "Toggle navigation");
        attr(a1, "class", "");
        attr(a1, "href", base + "/history");
        attr(span1, "title", "Your SBTC Transaction History");
        attr(span2, "class", "pointer nav-link");
        attr(li0, "class", "nav-item svelte-cmz2w7");
        attr(span3, "class", "nav-link dropdown-toggle ");
        attr(span3, "id", "navbarDropdown");
        attr(span3, "role", "button");
        attr(span3, "data-bs-toggle", "dropdown");
        attr(span3, "aria-expanded", "false");
        attr(a2, "class", "dropdown-item svelte-cmz2w7");
        attr(a2, "href", base + "/");
        attr(a3, "class", "dropdown-item svelte-cmz2w7");
        attr(a3, "href", base + "/");
        attr(ul0, "class", "dropdown-menu dropdown-menu-start");
        attr(ul0, "aria-labelledby", "navbarDropdown");
        attr(li3, "class", "nav-item dropdown svelte-cmz2w7");
        attr(ul1, "class", "navbar-nav");
        attr(div0, "class", "collapse navbar-collapse");
        attr(div0, "id", "navbarNav");
        attr(div1, "class", "container-fluid mx-5");
        attr(nav, "class", "navbar navbar-expand-md transparent");
      },
      m(target, anchor) {
        insert_hydration(target, nav, anchor);
        append_hydration(nav, div1);
        append_hydration(div1, a0);
        append_hydration(a0, img);
        append_hydration(div1, t0);
        append_hydration(div1, button);
        append_hydration(button, span0);
        append_hydration(div1, t1);
        append_hydration(div1, div0);
        append_hydration(div0, ul1);
        append_hydration(ul1, li0);
        append_hydration(li0, span2);
        append_hydration(span2, span1);
        append_hydration(span1, a1);
        append_hydration(a1, t2);
        append_hydration(ul1, t3);
        append_hydration(ul1, li3);
        append_hydration(li3, span3);
        append_hydration(span3, t4);
        append_hydration(li3, t5);
        append_hydration(li3, ul0);
        append_hydration(ul0, li1);
        append_hydration(li1, a2);
        append_hydration(a2, t6);
        append_hydration(ul0, t7);
        append_hydration(ul0, li2);
        append_hydration(li2, a3);
        append_hydration(a3, t8);
        append_hydration(ul1, t9);
        mount_component(walletconnectbutton, ul1, null);
        current = true;
        if (!mounted) {
          dispose = [
            listen(a2, "click", ctx[1]),
            listen(a3, "click", ctx[2])
          ];
          mounted = true;
        }
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(walletconnectbutton.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(walletconnectbutton.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(nav);
        destroy_component(walletconnectbutton);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance$1($$self, $$props, $$invalidate) {
    let $sbtcConfig;
    component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(3, $sbtcConfig = $$value));
    createEventDispatcher();
    const togglePeg = (pegin) => {
      const conf = $sbtcConfig;
      conf.pegIn = pegin;
      sbtcConfig.set(conf);
    };
    const click_handler = () => togglePeg(true);
    const click_handler_1 = () => togglePeg(false);
    return [
      togglePeg,
      click_handler,
      click_handler_1
    ];
  }
  class Header extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance$1, create_fragment$3, safe_not_equal, {});
    }
  }
  const stx_eco_discord = "" + new URL("../../assets/stx_eco_discord-5cc61295.png", import.meta.url).href;
  const stx_eco_twitter = "" + new URL("../../assets/stx_eco_twitter-b58c754c.png", import.meta.url).href;
  const stx_eco_github = "" + new URL("../../assets/stx_eco_github-0e15c254.png", import.meta.url).href;
  const FooterLinks_svelte_svelte_type_style_lang = "";
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
    return {
      c() {
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
      l(nodes) {
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
        p0_nodes.forEach(detach);
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
        a0_nodes.forEach(detach);
        div0_nodes.forEach(detach);
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
        a1_nodes.forEach(detach);
        div1_nodes.forEach(detach);
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
        a2_nodes.forEach(detach);
        div2_nodes.forEach(detach);
        div3_nodes.forEach(detach);
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
        p1_nodes.forEach(detach);
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
        a3_nodes.forEach(detach);
        div4_nodes.forEach(detach);
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
        a4_nodes.forEach(detach);
        div5_nodes.forEach(detach);
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
        a5_nodes.forEach(detach);
        div6_nodes.forEach(detach);
        div7_nodes.forEach(detach);
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
        p2_nodes.forEach(detach);
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
        a6_nodes.forEach(detach);
        div8_nodes.forEach(detach);
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
        a7_nodes.forEach(detach);
        div9_nodes.forEach(detach);
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
        a8_nodes.forEach(detach);
        div10_nodes.forEach(detach);
        div11_nodes.forEach(detach);
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
        p3_nodes.forEach(detach);
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
        a9_nodes.forEach(detach);
        div12_nodes.forEach(detach);
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
        a10_nodes.forEach(detach);
        div13_nodes.forEach(detach);
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
        a11_nodes.forEach(detach);
        div14_nodes.forEach(detach);
        div15_nodes.forEach(detach);
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
        p4_nodes.forEach(detach);
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
        a12_nodes.forEach(detach);
        div16_nodes.forEach(detach);
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
        a13_nodes.forEach(detach);
        div17_nodes.forEach(detach);
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
        a14_nodes.forEach(detach);
        div18_nodes.forEach(detach);
        div19_nodes.forEach(detach);
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
        a15_nodes.forEach(detach);
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
        a16_nodes.forEach(detach);
        div20_nodes.forEach(detach);
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
        a17_nodes.forEach(detach);
        div21_nodes.forEach(detach);
        div22_nodes.forEach(detach);
        div23_nodes.forEach(detach);
        div24_nodes.forEach(detach);
        this.h();
      },
      h() {
        attr(p0, "class", "svelte-mmff7o");
        attr(a0, "href", "https://github.com/stacksgov/sips/blob/main/sips/sip-000/sip-000-stacks-improvement-proposal-process.md");
        attr(a0, "target", "_blank");
        attr(a0, "rel", "noreferrer");
        attr(a0, "class", "svelte-mmff7o");
        attr(div0, "class", "demo-div");
        attr(a1, "href", "https://github.com/stacksgov/sips/pulls");
        attr(a1, "target", "_blank");
        attr(a1, "rel", "noreferrer");
        attr(a1, "class", "svelte-mmff7o");
        attr(div1, "class", "demo-div");
        attr(a2, "href", "https://discord.com/channels/621759717756370964/1001471092302544936");
        attr(a2, "target", "_blank");
        attr(a2, "rel", "noreferrer");
        attr(a2, "class", "svelte-mmff7o");
        attr(div2, "class", "demo-div");
        attr(div3, "class", "col-md-2 col-sm-6 hideme");
        attr(p1, "class", "svelte-mmff7o");
        attr(a3, "href", "https://github.com/Clarity-Innovation-Lab");
        attr(a3, "target", "_blank");
        attr(a3, "rel", "noreferrer");
        attr(a3, "class", "svelte-mmff7o");
        attr(div4, "class", "demo-div");
        attr(a4, "href", "https://github.com/Clarity-Innovation-Lab/ecosystem-dao/issues");
        attr(a4, "target", "_blank");
        attr(a4, "rel", "noreferrer");
        attr(a4, "class", "svelte-mmff7o");
        attr(div5, "class", "demo-div");
        attr(a5, "href", "https://github.com/Clarity-Innovation-Lab/ecosystem-dao");
        attr(a5, "target", "_blank");
        attr(a5, "rel", "noreferrer");
        attr(a5, "class", "svelte-mmff7o");
        attr(div6, "class", "demo-div");
        attr(div7, "class", "col-md-2 col-sm-6 hideme");
        attr(p2, "class", "svelte-mmff7o");
        attr(a6, "target", "_blank");
        attr(a6, "href", "https://www.youtube.com/watch?v=fbq6L3PrKWE");
        attr(a6, "rel", "noreferrer");
        attr(a6, "class", "svelte-mmff7o");
        attr(div8, "class", "demo-div");
        attr(a7, "target", "_blank");
        attr(a7, "href", "https://www.youtube.com/watch?v=OAVwd6SNJVU&t=717s");
        attr(a7, "rel", "noreferrer");
        attr(a7, "class", "svelte-mmff7o");
        attr(div9, "class", "demo-div");
        attr(a8, "target", "_blank");
        attr(a8, "href", "https://www.youtube.com/watch?v=NG081fD-PoI");
        attr(a8, "rel", "noreferrer");
        attr(a8, "class", "svelte-mmff7o");
        attr(div10, "class", "demo-div");
        attr(div11, "class", "col-md-2 col-sm-6 hideme");
        attr(p3, "class", "svelte-mmff7o");
        attr(a9, "href", "https://discord.com/channels/621759717756370964/971037457661444156");
        attr(a9, "target", "_blank");
        attr(a9, "rel", "noreferrer");
        attr(a9, "class", "svelte-mmff7o");
        attr(div12, "class", "demo-div");
        attr(a10, "href", "mailto:mike@claritylab.dev");
        attr(a10, "target", "_blank");
        attr(a10, "rel", "noreferrer");
        attr(a10, "class", "svelte-mmff7o");
        attr(div13, "class", "demo-div");
        attr(a11, "href", "https://mobile.twitter.com/radicleart");
        attr(a11, "target", "_blank");
        attr(a11, "rel", "noreferrer");
        attr(a11, "class", "svelte-mmff7o");
        attr(div14, "class", "demo-div");
        attr(div15, "class", "col-md-2 col-sm-6 hideme");
        attr(p4, "class", "svelte-mmff7o");
        attr(a12, "class", " svelte-mmff7o");
        attr(a12, "href", stacksOrg);
        attr(a12, "target", "_blank");
        attr(a12, "rel", "noreferrer");
        attr(div16, "class", "demo-div");
        attr(a13, "class", " svelte-mmff7o");
        attr(a13, "href", webWalletLink);
        attr(a13, "target", "_blank");
        attr(a13, "rel", "noreferrer");
        attr(div17, "class", "demo-div");
        attr(a14, "class", " svelte-mmff7o");
        attr(a14, "href", "https://www.trustmachines.co/");
        attr(a14, "target", "_blank");
        attr(a14, "rel", "noreferrer");
        attr(div18, "class", "demo-div");
        attr(div19, "class", "col-md-2 col-sm-6 hideme");
        if (!src_url_equal(img0.src, img0_src_value = stx_eco_discord))
          attr(img0, "src", img0_src_value);
        attr(img0, "alt", "discord ecosystem dao logo");
        attr(img0, "width", "39");
        attr(img0, "height", "auto");
        attr(a15, "class", "mx-0 svelte-mmff7o");
        attr(a15, "href", "https://discord.com/channels/621759717756370964/971037457661444156");
        attr(a15, "target", "_blank");
        attr(a15, "rel", "noreferrer");
        if (!src_url_equal(img1.src, img1_src_value = stx_eco_twitter))
          attr(img1, "src", img1_src_value);
        attr(img1, "alt", "twitter ecosystem dao logo");
        attr(img1, "width", "39");
        attr(img1, "height", "auto");
        attr(a16, "class", "mx-0 svelte-mmff7o");
        attr(a16, "href", "https://mobile.twitter.com/radicleart");
        attr(a16, "target", "_blank");
        attr(a16, "rel", "noreferrer");
        attr(div20, "class", "mb-0");
        if (!src_url_equal(img2.src, img2_src_value = stx_eco_github))
          attr(img2, "src", img2_src_value);
        attr(img2, "alt", "github ecosystem dao logo");
        attr(img2, "width", "39");
        attr(img2, "height", "auto");
        attr(a17, "class", " svelte-mmff7o");
        attr(a17, "href", "https://github.com/Clarity-Innovation-Lab/ecosystem-dao");
        attr(a17, "target", "_blank");
        attr(a17, "rel", "noreferrer");
        set_style(div21, "position", "relative");
        set_style(div21, "left", "2px");
        attr(div22, "class", "text-center");
        attr(div23, "class", "col-md-2 col-sm-12 ");
        attr(div24, "class", "row");
      },
      m(target, anchor) {
        insert_hydration(target, div24, anchor);
        append_hydration(div24, div3);
        append_hydration(div3, p0);
        append_hydration(p0, t0);
        append_hydration(div3, t1);
        append_hydration(div3, div0);
        append_hydration(div0, a0);
        append_hydration(a0, t2);
        append_hydration(div3, t3);
        append_hydration(div3, div1);
        append_hydration(div1, a1);
        append_hydration(a1, t4);
        append_hydration(div3, t5);
        append_hydration(div3, div2);
        append_hydration(div2, a2);
        append_hydration(a2, t6);
        append_hydration(div24, t7);
        append_hydration(div24, div7);
        append_hydration(div7, p1);
        append_hydration(p1, t8);
        append_hydration(div7, t9);
        append_hydration(div7, div4);
        append_hydration(div4, a3);
        append_hydration(a3, t10);
        append_hydration(div7, t11);
        append_hydration(div7, div5);
        append_hydration(div5, a4);
        append_hydration(a4, t12);
        append_hydration(div7, t13);
        append_hydration(div7, div6);
        append_hydration(div6, a5);
        append_hydration(a5, t14);
        append_hydration(div24, t15);
        append_hydration(div24, div11);
        append_hydration(div11, p2);
        append_hydration(p2, t16);
        append_hydration(div11, t17);
        append_hydration(div11, div8);
        append_hydration(div8, a6);
        append_hydration(a6, t18);
        append_hydration(div11, t19);
        append_hydration(div11, div9);
        append_hydration(div9, a7);
        append_hydration(a7, t20);
        append_hydration(div11, t21);
        append_hydration(div11, div10);
        append_hydration(div10, a8);
        append_hydration(a8, t22);
        append_hydration(div24, t23);
        append_hydration(div24, div15);
        append_hydration(div15, p3);
        append_hydration(p3, t24);
        append_hydration(div15, t25);
        append_hydration(div15, div12);
        append_hydration(div12, a9);
        append_hydration(a9, t26);
        append_hydration(div15, t27);
        append_hydration(div15, div13);
        append_hydration(div13, a10);
        append_hydration(a10, t28);
        append_hydration(div15, t29);
        append_hydration(div15, div14);
        append_hydration(div14, a11);
        append_hydration(a11, t30);
        append_hydration(div24, t31);
        append_hydration(div24, div19);
        append_hydration(div19, p4);
        append_hydration(p4, t32);
        append_hydration(div19, t33);
        append_hydration(div19, div16);
        append_hydration(div16, a12);
        append_hydration(a12, t34);
        append_hydration(div19, t35);
        append_hydration(div19, div17);
        append_hydration(div17, a13);
        append_hydration(a13, t36);
        append_hydration(div19, t37);
        append_hydration(div19, div18);
        append_hydration(div18, a14);
        append_hydration(a14, t38);
        append_hydration(div24, t39);
        append_hydration(div24, div23);
        append_hydration(div23, div22);
        append_hydration(div22, div20);
        append_hydration(div20, a15);
        append_hydration(a15, img0);
        append_hydration(div20, t40);
        append_hydration(div20, a16);
        append_hydration(a16, img1);
        append_hydration(div22, t41);
        append_hydration(div22, div21);
        append_hydration(div21, a17);
        append_hydration(a17, img2);
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div24);
      }
    };
  }
  let webWalletLink = "https://www.hiro.so/wallet/install-web";
  let stacksOrg = "https://stacks.org";
  class FooterLinks extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, null, create_fragment$2, safe_not_equal, {});
    }
  }
  const Footer_svelte_svelte_type_style_lang = "";
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
    footerlinks = new FooterLinks({});
    return {
      c() {
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
      l(nodes) {
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
        a_nodes.forEach(detach);
        div0_nodes.forEach(detach);
        div1_nodes.forEach(detach);
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
        div2_nodes.forEach(detach);
        div3_nodes.forEach(detach);
        div4_nodes.forEach(detach);
        div5_nodes.forEach(detach);
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
        div6_nodes.forEach(detach);
        div7_nodes.forEach(detach);
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
        div8_nodes.forEach(detach);
        div9_nodes.forEach(detach);
        div10_nodes.forEach(detach);
        div11_nodes.forEach(detach);
        div12_nodes.forEach(detach);
        this.h();
      },
      h() {
        if (!src_url_equal(img.src, img_src_value = logoWhite))
          attr(img, "src", img_src_value);
        attr(img, "alt", "stacks ecosystem dao logo");
        attr(img, "width", "198");
        attr(img, "height", "auto");
        attr(a2, "class", "navbar-brand");
        attr(a2, "href", "/");
        attr(div0, "class", "");
        attr(div1, "class", "px-0 col-4");
        attr(div2, "class", "col-12");
        attr(div3, "class", "row");
        attr(div4, "class", "col-8");
        attr(div5, "class", "row mx-5");
        attr(div6, "class", "copywright svelte-1rvwk6o");
        attr(div7, "class", "mb-4");
        attr(div8, "class", "copywright svelte-1rvwk6o");
        attr(div9, "class", "mb-4");
        attr(div10, "class", "mx-5 mt-5 d-flex justify-content-between copy svelte-1rvwk6o");
        attr(div11, "class", "pt-5");
        attr(div12, "class", "container-fluid footer svelte-1rvwk6o");
        attr(div12, "id", "footer-section");
      },
      m(target, anchor) {
        insert_hydration(target, div12, anchor);
        append_hydration(div12, div11);
        append_hydration(div11, div5);
        append_hydration(div5, div1);
        append_hydration(div1, div0);
        append_hydration(div0, a2);
        append_hydration(a2, img);
        append_hydration(div5, t0);
        append_hydration(div5, div4);
        append_hydration(div4, div3);
        append_hydration(div3, div2);
        mount_component(footerlinks, div2, null);
        append_hydration(div11, t1);
        append_hydration(div11, div10);
        append_hydration(div10, div7);
        append_hydration(div7, div6);
        append_hydration(div6, t2);
        append_hydration(div10, t3);
        append_hydration(div10, div9);
        append_hydration(div9, div8);
        append_hydration(div8, t4);
        current = true;
      },
      p: noop,
      i(local) {
        if (current)
          return;
        transition_in(footerlinks.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(footerlinks.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div12);
        destroy_component(footerlinks);
      }
    };
  }
  class Footer extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, null, create_fragment$1, safe_not_equal, {});
    }
  }
  const _layout_svelte_svelte_type_style_lang = "";
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
      if (ctx2[2].isSignedIn)
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      l(nodes) {
        if_block.l(nodes);
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert_hydration(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
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
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
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
    return {
      c() {
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
      l(nodes) {
        div = claim_element(nodes, "DIV", {
          class: true
        });
        var div_nodes = children(div);
        p0 = claim_element(div_nodes, "P", {
          class: true
        });
        var p0_nodes = children(p0);
        t0 = claim_text(p0_nodes, "Connect your Hiro web wallet to peg in to SBTC!");
        p0_nodes.forEach(detach);
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
        span0_nodes.forEach(detach);
        t2 = claim_text(a_nodes, " connect");
        a_nodes.forEach(detach);
        span1_nodes.forEach(detach);
        p1_nodes.forEach(detach);
        t3 = claim_space(div_nodes);
        p2 = claim_element(div_nodes, "P", {
          class: true
        });
        var p2_nodes = children(p2);
        t4 = claim_text(p2_nodes, "Currently in Beta testing - invitation only!");
        p2_nodes.forEach(detach);
        div_nodes.forEach(detach);
        this.h();
      },
      h() {
        attr(p0, "class", "text-white");
        if (!src_url_equal(img.src, img_src_value = stx_eco_wallet_off))
          attr(img, "src", img_src_value);
        attr(img, "alt", "Connect Wallet / Login");
        attr(img, "width", "40");
        attr(img, "height", "auto");
        attr(span0, "class", "px-1");
        attr(a2, "href", "/");
        attr(a2, "class", "pointer px-2");
        attr(span1, "class", "nav-item");
        attr(p2, "class", "mt-5 text-warning");
        attr(div, "class", "lobby bg-dark svelte-113s9q2");
      },
      m(target, anchor) {
        insert_hydration(target, div, anchor);
        append_hydration(div, p0);
        append_hydration(p0, t0);
        append_hydration(div, t1);
        append_hydration(div, p1);
        append_hydration(p1, span1);
        append_hydration(span1, a2);
        append_hydration(a2, span0);
        append_hydration(span0, img);
        append_hydration(a2, t2);
        append_hydration(div, t3);
        append_hydration(div, p2);
        append_hydration(p2, t4);
        if (!mounted) {
          dispose = listen(a2, "click", prevent_default(ctx[5]));
          mounted = true;
        }
      },
      p: noop,
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block_1(ctx) {
    let div;
    let header;
    let t0;
    let previous_key = ctx[0];
    let t1;
    let footer;
    let current;
    header = new Header({});
    header.$on("network_change", ctx[3]);
    let key_block = create_key_block(ctx);
    footer = new Footer({});
    return {
      c() {
        div = element("div");
        create_component(header.$$.fragment);
        t0 = space();
        key_block.c();
        t1 = space();
        create_component(footer.$$.fragment);
        this.h();
      },
      l(nodes) {
        div = claim_element(nodes, "DIV", {
          class: true
        });
        var div_nodes = children(div);
        claim_component(header.$$.fragment, div_nodes);
        t0 = claim_space(div_nodes);
        key_block.l(div_nodes);
        t1 = claim_space(div_nodes);
        claim_component(footer.$$.fragment, div_nodes);
        div_nodes.forEach(detach);
        this.h();
      },
      h() {
        attr(div, "class", "app svelte-113s9q2");
      },
      m(target, anchor) {
        insert_hydration(target, div, anchor);
        mount_component(header, div, null);
        append_hydration(div, t0);
        key_block.m(div, null);
        append_hydration(div, t1);
        mount_component(footer, div, null);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & 1 && safe_not_equal(previous_key, previous_key = ctx2[0])) {
          group_outros();
          transition_out(key_block, 1, 1, noop);
          check_outros();
          key_block = create_key_block(ctx2);
          key_block.c();
          transition_in(key_block, 1);
          key_block.m(div, t1);
        } else {
          key_block.p(ctx2, dirty);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(header.$$.fragment, local);
        transition_in(key_block);
        transition_in(footer.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(header.$$.fragment, local);
        transition_out(key_block);
        transition_out(footer.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        destroy_component(header);
        key_block.d(detaching);
        destroy_component(footer);
      }
    };
  }
  function create_key_block(ctx) {
    let current;
    const default_slot_template = ctx[7].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[6], null);
    return {
      c() {
        if (default_slot)
          default_slot.c();
      },
      l(nodes) {
        if (default_slot)
          default_slot.l(nodes);
      },
      m(target, anchor) {
        if (default_slot) {
          default_slot.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 64)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[6], !current ? get_all_dirty_from_scope(ctx2[6]) : get_slot_changes(default_slot_template, ctx2[6], dirty, null), null);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (default_slot)
          default_slot.d(detaching);
      }
    };
  }
  function create_fragment(ctx) {
    let if_block_anchor;
    let current;
    let if_block = ctx[1] && create_if_block(ctx);
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      l(nodes) {
        if (if_block)
          if_block.l(nodes);
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert_hydration(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        if (ctx2[1]) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 2) {
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
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function instance($$self, $$props, $$invalidate) {
    let $sbtcConfig;
    let $auth;
    component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(10, $sbtcConfig = $$value));
    let { $$slots: slots = {}, $$scope } = $$props;
    let componentKey = 0;
    const unsubscribe = sbtcConfig.subscribe(() => {
    });
    onDestroy(unsubscribe);
    const networkChange = () => {
      $$invalidate(0, componentKey++, componentKey);
    };
    let inited = false;
    let origin = "http://mainnet.stx.eco";
    if (typeof window !== "undefined") {
      origin = window.location.origin;
    }
    const config = {
      appName: "sBTC Client",
      appIconUrl: origin + "/img/logo.png",
      network: new i()
    };
    se(config);
    client.set(C());
    const auth = Ce();
    component_subscribe($$self, auth, (value) => $$invalidate(2, $auth = value));
    const doLogin = () => {
      login($auth);
    };
    const fetchWalletAddress = async () => {
      const addr = await fetchSbtcWalletAddress();
      const conf = $sbtcConfig;
      conf.sbtcWalletAddress = addr;
      sbtcConfig.update(() => conf);
    };
    let bootstrap;
    onMount(async () => {
      globalThis.Buffer = buffer.Buffer;
      bootstrap = await __vitePreload(() => import("../../chunks/bootstrap.esm-1ba04bfb.js"), true ? [] : void 0, import.meta.url);
      try {
        $$invalidate(1, inited = true);
        try {
          await fetchWalletAddress();
        } catch (err) {
          console.log(err);
        }
        let conf = $sbtcConfig;
        if (!conf || !conf.feeCalc)
          conf = defaultSbtcConfig;
        const feeInfo = await fetchFeeEstimate();
        if (feeInfo)
          conf.feeInfo = feeInfo;
        conf.feeCalc.pegOutFeeCalc.feeToApply = conf.feeInfo.low_fee_per_kb;
        sbtcConfig.update(() => conf);
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
    $$self.$$set = ($$props2) => {
      if ("$$scope" in $$props2)
        $$invalidate(6, $$scope = $$props2.$$scope);
    };
    return [
      componentKey,
      inited,
      $auth,
      networkChange,
      auth,
      doLogin,
      $$scope,
      slots
    ];
  }
  Layout = class Layout extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance, create_fragment, safe_not_equal, {});
    }
  };
})();
export {
  __tla,
  Layout as default
};
