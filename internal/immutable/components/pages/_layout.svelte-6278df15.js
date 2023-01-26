var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { _ as __vitePreload } from "../../chunks/preload-helper-6910039e.js";
import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, a as space, q as text, l as claim_element, m as children, h as detach, c as claim_space, r as claim_text, n as attr, C as src_url_equal, b as insert_hydration, D as append_hydration, E as listen, F as prevent_default, u as set_data, G as noop, H as run_all, I as component_subscribe, J as createEventDispatcher, p as set_style, w as create_component, x as claim_component, y as mount_component, f as transition_in, t as transition_out, z as destroy_component, K as setContext, L as getContext, B as writable, e as empty, d as check_outros, M as onDestroy, o as onMount, A as tick, g as group_outros, N as create_slot, O as update_slot_base, P as get_all_dirty_from_scope, Q as get_slot_changes } from "../../chunks/index-3bacd89c.js";
import { s as sbtcConfig, f as fetchSbtcWalletAddress, c as cr, u as ur, H as Hr, m as m$2, R as Rr, _ as _$2, g as ge$2, $ as $$2, q as q$1, h as hr, U as Ur, V as Vt, p as p$2, a as $$3, b as utils, d as getPublicKey, w as wt, E as Er, e as pe, i as f$3, j as U$2, r as recoverPublicKey, S as Signature, k as d$2, l as Se, A as At, n as pe$1, o as S$1, K as K$1, t as lr, v as ut$1, x as ct$1, y as mt, z as ee$2, B as qe, C as verify, D as ar, F as Kt, G as ce$2, I as Rr$1, J as Ir, L as pr, M as pr$1, N as dr, O as xr, P as we$1, Q as V$1, T as l$3, X as X$1, W as Xt } from "../../chunks/sbtc-cae2e119.js";
let Layout;
let __tla = (async () => {
  const app = "";
  const logoWhite = "" + new URL("../../assets/logo-white-68f65e57.jpeg", import.meta.url).href;
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
    let li2;
    let span1;
    let t2;
    let t3_value = ctx[0].network + "";
    let t3;
    let t4;
    let ul0;
    let li0;
    let a1;
    let t5;
    let t6;
    let li1;
    let a2;
    let t7;
    let mounted;
    let dispose;
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
        li2 = element("li");
        span1 = element("span");
        t2 = text("Network: ");
        t3 = text(t3_value);
        t4 = space();
        ul0 = element("ul");
        li0 = element("li");
        a1 = element("a");
        t5 = text("Testnet");
        t6 = space();
        li1 = element("li");
        a2 = element("a");
        t7 = text("Mainnet");
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
        li2 = claim_element(ul1_nodes, "LI", {
          class: true
        });
        var li2_nodes = children(li2);
        span1 = claim_element(li2_nodes, "SPAN", {
          class: true,
          id: true,
          role: true,
          "data-bs-toggle": true,
          "aria-expanded": true
        });
        var span1_nodes = children(span1);
        t2 = claim_text(span1_nodes, "Network: ");
        t3 = claim_text(span1_nodes, t3_value);
        span1_nodes.forEach(detach);
        t4 = claim_space(li2_nodes);
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
        t5 = claim_text(a1_nodes, "Testnet");
        a1_nodes.forEach(detach);
        li0_nodes.forEach(detach);
        t6 = claim_space(ul0_nodes);
        li1 = claim_element(ul0_nodes, "LI", {});
        var li1_nodes = children(li1);
        a2 = claim_element(li1_nodes, "A", {
          class: true,
          href: true
        });
        var a2_nodes = children(a2);
        t7 = claim_text(a2_nodes, "Mainnet");
        a2_nodes.forEach(detach);
        li1_nodes.forEach(detach);
        ul0_nodes.forEach(detach);
        li2_nodes.forEach(detach);
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
        attr(a0, "href", "/");
        attr(span0, "class", "navbar-toggler-icon");
        attr(button, "class", "navbar-toggler");
        attr(button, "type", "button");
        attr(button, "data-bs-toggle", "collapse");
        attr(button, "data-bs-target", "#navbarNav");
        attr(button, "aria-controls", "navbarNav");
        attr(button, "aria-expanded", "false");
        attr(button, "aria-label", "Toggle navigation");
        attr(span1, "class", "nav-link dropdown-toggle text-white");
        attr(span1, "id", "navbarDropdown");
        attr(span1, "role", "button");
        attr(span1, "data-bs-toggle", "dropdown");
        attr(span1, "aria-expanded", "false");
        attr(a1, "class", "dropdown-item");
        attr(a1, "href", "/");
        attr(a2, "class", "dropdown-item");
        attr(a2, "href", "/");
        attr(ul0, "class", "dropdown-menu dropdown-menu-start");
        attr(ul0, "aria-labelledby", "navbarDropdown");
        attr(li2, "class", "nav-item dropdown");
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
        append_hydration(ul1, li2);
        append_hydration(li2, span1);
        append_hydration(span1, t2);
        append_hydration(span1, t3);
        append_hydration(li2, t4);
        append_hydration(li2, ul0);
        append_hydration(ul0, li0);
        append_hydration(li0, a1);
        append_hydration(a1, t5);
        append_hydration(ul0, t6);
        append_hydration(ul0, li1);
        append_hydration(li1, a2);
        append_hydration(a2, t7);
        if (!mounted) {
          dispose = [
            listen(a1, "click", prevent_default(ctx[2])),
            listen(a2, "click", prevent_default(ctx[3]))
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (dirty & 1 && t3_value !== (t3_value = ctx2[0].network + ""))
          set_data(t3, t3_value);
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(nav);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance$1($$self, $$props, $$invalidate) {
    let $sbtcConfig;
    component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(0, $sbtcConfig = $$value));
    const dispatch = createEventDispatcher();
    const updateNetwork = async (newNet) => {
      if (newNet === $sbtcConfig.network)
        return;
      const addr = await fetchSbtcWalletAddress(newNet);
      let conf = {
        network: newNet,
        sbtcWalletAddress: addr
      };
      sbtcConfig.update(() => conf);
      dispatch("network_change", {});
    };
    const click_handler = () => updateNetwork("testnet");
    const click_handler_1 = () => updateNetwork("mainnet");
    return [
      $sbtcConfig,
      updateNetwork,
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
  var g$1 = "https://stacks-node-api.mainnet.stacks.co", p$1 = "https://stacks-node-api.testnet.stacks.co", i = class {
    constructor(t = {
      url: g$1
    }) {
      __publicField(this, "version", cr.Mainnet);
      __publicField(this, "chainId", ur.Mainnet);
      __publicField(this, "broadcastEndpoint", "/v2/transactions");
      __publicField(this, "transferFeeEstimateEndpoint", "/v2/fees/transfer");
      __publicField(this, "accountEndpoint", "/v2/accounts");
      __publicField(this, "contractAbiEndpoint", "/v2/contracts/interface");
      __publicField(this, "readOnlyFunctionCallEndpoint", "/v2/contracts/call-read");
      __publicField(this, "bnsLookupUrl");
      __publicField(this, "_coreApiUrl");
      __publicField(this, "fetcher");
      __publicField(this, "getCoreApiUrl", () => this._coreApiUrl);
      __publicField(this, "isMainnet", () => this.version === cr.Mainnet);
      __publicField(this, "getBroadcastApiUrl", () => `${this.getCoreApiUrl()}${this.broadcastEndpoint}`);
      __publicField(this, "getTransferFeeEstimateApiUrl", () => `${this.getCoreApiUrl()}${this.transferFeeEstimateEndpoint}`);
      __publicField(this, "getAccountApiUrl", (t) => `${this.getCoreApiUrl()}${this.accountEndpoint}/${t}?proof=0`);
      __publicField(this, "getAbiApiUrl", (t, e) => `${this.getCoreApiUrl()}${this.contractAbiEndpoint}/${t}/${e}`);
      __publicField(this, "getReadOnlyFunctionCallApiUrl", (t, e, r) => `${this.getCoreApiUrl()}${this.readOnlyFunctionCallEndpoint}/${t}/${e}/${encodeURIComponent(r)}`);
      __publicField(this, "getInfoUrl", () => `${this.getCoreApiUrl()}/v2/info`);
      __publicField(this, "getBlockTimeInfoUrl", () => `${this.getCoreApiUrl()}/extended/v1/info/network_block_times`);
      __publicField(this, "getPoxInfoUrl", () => `${this.getCoreApiUrl()}/v2/pox`);
      __publicField(this, "getRewardsUrl", (t, e) => {
        let r = `${this.getCoreApiUrl()}/extended/v1/burnchain/rewards/${t}`;
        return e && (r = `${r}?limit=${e.limit}&offset=${e.offset}`), r;
      });
      __publicField(this, "getRewardsTotalUrl", (t) => `${this.getCoreApiUrl()}/extended/v1/burnchain/rewards/${t}/total`);
      __publicField(this, "getRewardHoldersUrl", (t, e) => {
        let r = `${this.getCoreApiUrl()}/extended/v1/burnchain/reward_slot_holders/${t}`;
        return e && (r = `${r}?limit=${e.limit}&offset=${e.offset}`), r;
      });
      __publicField(this, "getStackerInfoUrl", (t, e) => `${this.getCoreApiUrl()}${this.readOnlyFunctionCallEndpoint}
    ${t}/${e}/get-stacker-info`);
      if (!t.url && !t.coreApiUrl)
        throw Error("[miro-stacks] Network initialized with no api url");
      this._coreApiUrl = t.url || t.coreApiUrl, this.bnsLookupUrl = t.bnsLookupUrl || t.url || t.coreApiUrl, this.fetcher = t.fetcher || Hr;
    }
    get coreApiUrl() {
      return this._coreApiUrl;
    }
    set coreApiUrl(t) {
      throw new Error("Cannot modify property `coreApiUrl` after object initialization");
    }
    getNameInfo(t) {
      let e = `${this.bnsLookupUrl}/v1/names/${t}`;
      return this.fetcher(e).then((r) => {
        if (r.status === 404)
          throw new Error("Name not found");
        if (r.status !== 200)
          throw new Error(`Bad response status: ${r.status}`);
        return r.json();
      }).then((r) => r.address ? Object.assign({}, r, {
        address: r.address
      }) : r);
    }
  }, l$2 = class l extends i {
    constructor(t = {
      url: p$1,
      fetcher: Hr
    }) {
      super(t);
      __publicField(this, "version", cr.Testnet);
      __publicField(this, "chainId", ur.Testnet);
    }
  };
  var $e$1 = ((r) => (r[r.OnChainOnly = 1] = "OnChainOnly", r[r.OffChainOnly = 2] = "OffChainOnly", r[r.Any = 3] = "Any", r))($e$1 || {});
  cr.Mainnet;
  var ve$2 = ((n) => (n[n.Allow = 1] = "Allow", n[n.Deny = 2] = "Deny", n))(ve$2 || {}), Ve$1 = ((r) => (r[r.STX = 0] = "STX", r[r.Fungible = 1] = "Fungible", r[r.NonFungible = 2] = "NonFungible", r))(Ve$1 || {}), le = ((n) => (n[n.Standard = 4] = "Standard", n[n.Sponsored = 5] = "Sponsored", n))(le || {}), De$1 = ((i2) => (i2[i2.SerializeP2PKH = 0] = "SerializeP2PKH", i2[i2.SerializeP2SH = 1] = "SerializeP2SH", i2[i2.SerializeP2WPKH = 2] = "SerializeP2WPKH", i2[i2.SerializeP2WSH = 3] = "SerializeP2WSH", i2))(De$1 || {}), Nn = ((i2) => (i2[i2.MainnetSingleSig = 22] = "MainnetSingleSig", i2[i2.MainnetMultiSig = 20] = "MainnetMultiSig", i2[i2.TestnetSingleSig = 26] = "TestnetSingleSig", i2[i2.TestnetMultiSig = 21] = "TestnetMultiSig", i2))(Nn || {}), ye$1 = ((n) => (n[n.Compressed = 0] = "Compressed", n[n.Uncompressed = 1] = "Uncompressed", n))(ye$1 || {}), ge$1 = ((o) => (o[o.Equal = 1] = "Equal", o[o.Greater = 2] = "Greater", o[o.GreaterEqual = 3] = "GreaterEqual", o[o.Less = 4] = "Less", o[o.LessEqual = 5] = "LessEqual", o))(ge$1 || {}), _e$2 = ((n) => (n[n.DoesNotOwn = 16] = "DoesNotOwn", n[n.Owns = 17] = "Owns", n))(_e$2 || {}), Hn = ((r) => (r[r.STX = 0] = "STX", r[r.Fungible = 1] = "Fungible", r[r.NonFungible = 2] = "NonFungible", r))(Hn || {}), On = ((y2) => (y2.Serialization = "Serialization", y2.Deserialization = "Deserialization", y2.SignatureValidation = "SignatureValidation", y2.FeeTooLow = "FeeTooLow", y2.BadNonce = "BadNonce", y2.NotEnoughFunds = "NotEnoughFunds", y2.NoSuchContract = "NoSuchContract", y2.NoSuchPublicFunction = "NoSuchPublicFunction", y2.BadFunctionArgument = "BadFunctionArgument", y2.ContractAlreadyExists = "ContractAlreadyExists", y2.PoisonMicroblocksDoNotConflict = "PoisonMicroblocksDoNotConflict", y2.PoisonMicroblockHasUnknownPubKeyHash = "PoisonMicroblockHasUnknownPubKeyHash", y2.PoisonMicroblockIsInvalid = "PoisonMicroblockIsInvalid", y2.BadAddressVersionByte = "BadAddressVersionByte", y2.NoCoinbaseViaMempool = "NoCoinbaseViaMempool", y2.ServerFailureNoSuchChainTip = "ServerFailureNoSuchChainTip", y2.ServerFailureDatabase = "ServerFailureDatabase", y2.ServerFailureOther = "ServerFailureOther", y2))(On || {});
  var h$4 = ((o) => (o[o.TokenTransfer = 0] = "TokenTransfer", o[o.SmartContract = 1] = "SmartContract", o[o.ContractCall = 2] = "ContractCall", o[o.PoisonMicroblock = 3] = "PoisonMicroblock", o[o.Coinbase = 4] = "Coinbase", o))(h$4 || {});
  function et$1(e) {
    let t = new q$1();
    return t.appendByte(e.conditionType), t.push(tt$1(e.principal)), (e.conditionType === 1 || e.conditionType === 2) && t.push(it$1(e.assetInfo)), e.conditionType === 2 && t.push(m$2(e.assetName)), t.appendByte(e.conditionCode), (e.conditionType === 0 || e.conditionType === 1) && t.push(Rr(e.amount, false, 8)), t.concatBuffer();
  }
  function tt$1(e) {
    let t = new q$1();
    return t.push(Uint8Array.from([
      e.prefix
    ])), t.push(_$2(e.address)), e.prefix === ge$2.Contract && t.push($$2(e.contractName)), t.concatBuffer();
  }
  function it$1(e) {
    let t = new q$1();
    return t.push(_$2(e.address)), t.push($$2(e.contractName)), t.push($$2(e.assetName)), t.concatBuffer();
  }
  var Yt = ((i2) => (i2[i2.PublicKeyCompressed = 0] = "PublicKeyCompressed", i2[i2.PublicKeyUncompressed = 1] = "PublicKeyUncompressed", i2[i2.SignatureCompressed = 2] = "SignatureCompressed", i2[i2.SignatureUncompressed = 3] = "SignatureUncompressed", i2))(Yt || {});
  var f$2 = typeof document < "u", ee$1 = ((r) => (r.SessionStorageKey = "stacks-session", r.NetworkStorageKey = "stacks-network", r))(ee$1 || {});
  var u$1 = hr("localStorage", {
    returnEmptyObject: true
  }), U$1 = {
    setItem: (e, t) => {
      if (f$2)
        return u$1 == null ? void 0 : u$1.setItem(e, t);
    },
    getItem: (e) => {
      if (f$2) {
        let t = u$1 == null ? void 0 : u$1.getItem(e);
        if (t === null)
          throw new Error("defaultStorageAdapter: no value stored");
        return t;
      }
    },
    removeItem: (e) => {
      if (f$2)
        return u$1 == null ? void 0 : u$1.removeItem(e);
    }
  }, c = (e) => e ? p$2(getPublicKey(e, true)) : null;
  function K(e) {
    return e == null ? void 0 : e.map((t) => typeof t != "string" ? p$2(et$1(t)) : t);
  }
  var d$1 = (e, t) => t ? new Se("ES256k", t).sign(e) : At(e);
  var l$1 = async (e, t) => {
    let r = {
      ...e,
      postConditions: K(e.postConditions)
    };
    return d$1(r, t);
  };
  var ce$1 = ((n) => (n.ContractCall = "contract_call", n.ContractDeploy = "smart_contract", n.STXTransfer = "token_transfer", n))(ce$1 || {});
  async function Tt({ functionArgs: e, privateKey: t, ...r }) {
    let n = c(t), s = {
      ...r,
      functionArgs: e.map((o) => Ur(typeof o == "string" ? o : Vt(o))),
      txType: "contract_call",
      publicKey: n
    };
    return l$1(s, t);
  }
  async function Pt({ privateKey: e, ...t }) {
    let r = {
      ...t,
      publicKey: c(e),
      txType: "smart_contract"
    };
    return l$1(r, e);
  }
  async function It$1({ privateKey: e, ...t }) {
    let r = {
      ...t,
      amount: typeof t.amount == "bigint" ? Number(t.amount).toString(10) : t.amount,
      publicKey: c(e),
      txType: "token_transfer"
    };
    return l$1(r, e);
  }
  function ge(e) {
    let t = e.split(":");
    if (t.length !== 3)
      throw new TypeError("Decentralized IDs must have 3 parts");
    if (t[0].toLowerCase() !== "did")
      throw new TypeError('Decentralized IDs must start with "did"');
    return t[1].toLowerCase();
  }
  function fe(e) {
    return e && ge(e) === "btc-addr" ? e.split(":")[2] : void 0;
  }
  async function B$1(e, t) {
    let r = wt(e), s = r == null ? void 0 : r.payload, o;
    if (s.private_key)
      try {
        let i2 = Er(s.private_key);
        o = await pe({
          privateKey: t,
          cipherObject: i2
        });
      } catch {
        console.error("[micro-stacks] failed to decrypt appPrivateKey");
      }
    return {
      addresses: s.profile.stxAddress,
      appPrivateKey: o,
      associationToken: s.associationToken,
      hubUrl: s.hubUrl,
      public_keys: s.public_keys,
      profile: s.profile,
      profile_url: s.profile_url,
      username: s.username,
      version: s.version,
      decentralizedID: s.iss,
      identityAddress: fe(s.iss)
    };
  }
  function y$4() {
    return hr("StacksProvider", {
      returnEmptyObject: false,
      usageDesc: "authenticate",
      throwIfUnavailable: true
    });
  }
  async function Nt(e, t = U$1, r = JSON.stringify) {
    var n, s;
    if (!e.appDetails)
      throw Error("[micro-stacks] authenticate error: `authOptions.appDetails` are required for authentication");
    try {
      let o = p$2($$3()), a2 = await we(e, o), i2 = await B$1(a2, o);
      return (n = e == null ? void 0 : e.onFinish) == null || n.call(e, i2), t.setItem("stacks-session", r(i2)), i2;
    } catch (o) {
      (s = e == null ? void 0 : e.onCancel) == null || s.call(e, o.message);
    }
  }
  function Te(e, t) {
    if (!e.appDetails)
      throw Error("[micro-stacks] authenticate error: `authOptions.appDetails` are required for authentication");
    let r = e.scopes || [], n = hr("location", {
      returnEmptyObject: true
    }).origin;
    return {
      scopes: [
        .../* @__PURE__ */ new Set([
          "store_write",
          ...r
        ])
      ],
      redirect_uri: n,
      public_keys: [
        t
      ],
      domain_name: n,
      appDetails: e.appDetails
    };
  }
  async function ve$1(e, t) {
    return new Se("ES256k", t).sign(e);
  }
  async function be(e, t) {
    let r = p$2(getPublicKey(t)), n = Te(e, r);
    return ve$1(n, t);
  }
  async function we(e, t) {
    let r = y$4();
    if (!r)
      throw Error("This function can only be called on the client, and with the presence of StacksProvider");
    let n = await be(e, t);
    return r.authenticationRequest(n);
  }
  function p(e) {
    return async function(r) {
      let { token: n, onFinish: s, onCancel: o } = r;
      try {
        let a2 = y$4();
        if (!a2)
          throw new Error("[micro-stacks/connect] No Stacks provider");
        let i2 = a2[e];
        if (typeof i2 != "function")
          throw new Error(`[micro-stacks/connect] StacksProvider method ${e} not found`);
        let g2 = await i2(n);
        s == null || s(g2);
      } catch (a2) {
        o == null || o(a2 == null ? void 0 : a2.message);
      }
    };
  }
  var Gt = p("transactionRequest"), F$2 = p("signatureRequest"), _$1 = p("structuredDataSignatureRequest");
  var H$2 = ((s) => (s.Chrome = "https://chrome.google.com/webstore/detail/hiro-wallet/ldinpeekobnhjjdofggfgjlcehhmanlj", s.Firefox = "https://addons.mozilla.org/en-US/firefox/addon/hiro-wallet/", s.Mobile = "https://www.xverse.app", s.Browser = "https://www.hiro.so/wallet/install-web", s))(H$2 || {});
  var V = async (e) => {
    let t = {
      stxAddress: e.stxAddress,
      message: e.message,
      appDetails: e.appDetails ?? null,
      publicKey: c(e.privateKey),
      network: e.network
    };
    return d$1(t, e.privateKey);
  }, De = async (e) => {
    try {
      let t = await V({
        message: e.message,
        network: e.network,
        privateKey: e.privateKey,
        stxAddress: e.stxAddress,
        authOrigin: e.authOrigin,
        appDetails: e.appDetails
      });
      return F$2({
        token: t,
        onFinish: e.onFinish,
        onCancel: e.onCancel
      });
    } catch (t) {
      console.error("[micro-stacks] handleSignMessageRequest failed"), console.error(t);
    }
  };
  var h$3 = (e, t, r) => pe$1({
    name: S$1(e),
    version: S$1(t),
    "chain-id": K$1(r)
  }), X = (e) => {
    var o;
    let t = typeof e.message != "string" ? Vt(e.message) : e.message, r = h$3(e.domain.name, e.domain.version, e.domain.chainId ?? ((o = e.network) == null ? void 0 : o.chainId) ?? ur.Mainnet), n = Vt(r), s = {
      stxAddress: e.stxAddress,
      message: Ur(t),
      domain: Ur(n),
      appDetails: e.appDetails,
      publicKey: c(e.privateKey),
      network: e.network
    };
    return d$1(s, e == null ? void 0 : e.privateKey);
  }, Ke = async (e) => {
    try {
      let t = await X({
        message: e.message,
        domain: e.domain,
        privateKey: e.privateKey,
        stxAddress: e.stxAddress,
        authOrigin: e.authOrigin,
        appDetails: e.appDetails,
        network: e.network
      });
      return _$1({
        token: t,
        onFinish: e.onFinish,
        onCancel: e.onCancel
      });
    } catch (t) {
      console.error("[micro-stacks] handleSignStructuredDataRequest failed"), console.error(t);
    }
  };
  var _e$1 = 9007199254740991;
  function w$2(e) {
    if (e < 0 || e > _e$1 || e % 1 !== 0)
      throw new RangeError("value out of range");
  }
  var P$2 = (e, t, r) => {
    w$2(e);
    let n;
    if (t || (t = new Uint8Array(C$3(e))), !lr(t))
      throw new TypeError("uint8Array must be of Uint8Array type");
    return r || (r = 0), e < 253 ? (ut$1(t, e, r), n = 1) : e <= 65535 ? (ut$1(t, 253, r), ct$1(t, e, r + 1), n = 3) : e <= 4294967295 ? (ut$1(t, 254, r), mt(t, e, r + 1), n = 5) : (ut$1(t, 255, r), mt(t, e >>> 0, r + 1), mt(t, e / 4294967296 | 0, r + 5), n = 9), P$2.bytes = n, t;
  };
  function C$3(e) {
    return w$2(e), e < 253 ? 1 : e <= 65535 ? 3 : e <= 4294967295 ? 5 : 9;
  }
  var Ve = `Stacks Signed Message:
`, D$1 = utils.utf8ToBytes(Ve), We = `Stacks Message Signing:
`, I$2 = utils.utf8ToBytes(We);
  function R$2(e, t = D$1) {
    return f$3(z$3(e, t));
  }
  function z$3(e, t = D$1) {
    let r = typeof e == "string" ? utils.utf8ToBytes(e) : e, n = P$2(r.length);
    return U$2([
      t,
      n,
      r
    ]);
  }
  var O$1 = 32;
  function $e(e) {
    if (e.length < O$1 * 2 * 2 + 1)
      throw new Error("Invalid signature");
    let t = e.slice(0, 2), r = e.slice(2, 2 + O$1 * 2), n = e.slice(2 + O$1 * 2);
    return {
      recoveryBytes: d$2(t),
      r,
      s: n
    };
  }
  function Qe(e) {
    return e.slice(-2) + e.slice(0, -2);
  }
  var Q = ({ hash: e, signature: t, recoveryBytes: r }) => recoverPublicKey(e, t, Number(r), true), Z$1 = (e) => {
    let { signature: t, mode: r = "rsv" } = e, { r: n, s, recoveryBytes: o } = $e(r === "rsv" ? Qe(t) : t);
    return {
      signature: new Signature(d$2(n), d$2(s)),
      recoveryBytes: o
    };
  }, M$2 = (e) => {
    if (!e.publicKey && !e.stxAddress)
      throw Error("[micro-stacks/connect[ verifyMessageSignature -- You must pass `stxAddress` if you are recovering the public key from the signature");
    let { message: t, mode: r = "rsv" } = e, n = e.publicKey;
    try {
      let s = typeof t == "string" ? R$2(t, e.prefix) : t, { signature: o, recoveryBytes: a2 } = Z$1({
        signature: e.signature,
        mode: r
      });
      if (!n) {
        let [i2] = ee$2(e.stxAddress);
        n = p$2(Q({
          hash: s,
          signature: o,
          recoveryBytes: a2
        }));
        let g2 = qe(n, i2);
        if (g2 !== e.stxAddress)
          return console.error(`[micro-stacks/connect] verifyMessageSignature Stacks address is not correct. expected: ${e.stxAddress}, received: ${g2}`), false;
      }
      return verify(o, s, n, {
        strict: false
      });
    } catch (s) {
      return console.error("[micro-stacks/connect] verifyMessageSignature failed", s), false;
    }
  }, Ze = (e) => M$2(e) || M$2({
    ...e,
    prefix: I$2
  });
  const createStoreImpl = (createState) => {
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace) => {
      const nextState = typeof partial === "function" ? partial(state) : partial;
      if (nextState !== state) {
        const previousState = state;
        state = (replace != null ? replace : typeof nextState !== "object") ? nextState : Object.assign({}, state, nextState);
        listeners.forEach((listener) => listener(state, previousState));
      }
    };
    const getState = () => state;
    const subscribe = (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    };
    const destroy = () => listeners.clear();
    const api = {
      setState,
      getState,
      subscribe,
      destroy
    };
    state = createState(setState, getState, api);
    return api;
  };
  const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
  const subscribeWithSelectorImpl = (fn) => (set, get, api) => {
    const origSubscribe = api.subscribe;
    api.subscribe = (selector, optListener, options) => {
      let listener = selector;
      if (optListener) {
        const equalityFn = (options == null ? void 0 : options.equalityFn) || Object.is;
        let currentSlice = selector(api.getState());
        listener = (state) => {
          const nextSlice = selector(state);
          if (!equalityFn(currentSlice, nextSlice)) {
            const previousSlice = currentSlice;
            optListener(currentSlice = nextSlice, previousSlice);
          }
        };
        if (options == null ? void 0 : options.fireImmediately) {
          optListener(currentSlice, currentSlice);
        }
      }
      return origSubscribe(listener);
    };
    const initialState = fn(set, get, api);
    return initialState;
  };
  const subscribeWithSelector = subscribeWithSelectorImpl;
  const toThenable = (fn) => (input) => {
    try {
      const result = fn(input);
      if (result instanceof Promise) {
        return result;
      }
      return {
        then(onFulfilled) {
          return toThenable(onFulfilled)(result);
        },
        catch(_onRejected) {
          return this;
        }
      };
    } catch (e) {
      return {
        then(_onFulfilled) {
          return this;
        },
        catch(onRejected) {
          return toThenable(onRejected)(e);
        }
      };
    }
  };
  const persistImpl = (config, baseOptions) => (set, get, api) => {
    let options = {
      getStorage: () => localStorage,
      serialize: JSON.stringify,
      deserialize: JSON.parse,
      partialize: (state) => state,
      version: 0,
      merge: (persistedState, currentState) => ({
        ...currentState,
        ...persistedState
      }),
      ...baseOptions
    };
    let hasHydrated = false;
    const hydrationListeners = /* @__PURE__ */ new Set();
    const finishHydrationListeners = /* @__PURE__ */ new Set();
    let storage;
    try {
      storage = options.getStorage();
    } catch (e) {
    }
    if (!storage) {
      return config((...args) => {
        console.warn(`[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`);
        set(...args);
      }, get, api);
    }
    const thenableSerialize = toThenable(options.serialize);
    const setItem = () => {
      const state = options.partialize({
        ...get()
      });
      let errorInSync;
      const thenable = thenableSerialize({
        state,
        version: options.version
      }).then((serializedValue) => storage.setItem(options.name, serializedValue)).catch((e) => {
        errorInSync = e;
      });
      if (errorInSync) {
        throw errorInSync;
      }
      return thenable;
    };
    const savedSetState = api.setState;
    api.setState = (state, replace) => {
      savedSetState(state, replace);
      void setItem();
    };
    const configResult = config((...args) => {
      set(...args);
      void setItem();
    }, get, api);
    let stateFromStorage;
    const hydrate = () => {
      var _a;
      if (!storage)
        return;
      hasHydrated = false;
      hydrationListeners.forEach((cb) => cb(get()));
      const postRehydrationCallback = ((_a = options.onRehydrateStorage) == null ? void 0 : _a.call(options, get())) || void 0;
      return toThenable(storage.getItem.bind(storage))(options.name).then((storageValue) => {
        if (storageValue) {
          return options.deserialize(storageValue);
        }
      }).then((deserializedStorageValue) => {
        if (deserializedStorageValue) {
          if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
            if (options.migrate) {
              return options.migrate(deserializedStorageValue.state, deserializedStorageValue.version);
            }
            console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`);
          } else {
            return deserializedStorageValue.state;
          }
        }
      }).then((migratedState) => {
        var _a2;
        stateFromStorage = options.merge(migratedState, (_a2 = get()) != null ? _a2 : configResult);
        set(stateFromStorage, true);
        return setItem();
      }).then(() => {
        postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
        hasHydrated = true;
        finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
      }).catch((e) => {
        postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
      });
    };
    api.persist = {
      setOptions: (newOptions) => {
        options = {
          ...options,
          ...newOptions
        };
        if (newOptions.getStorage) {
          storage = newOptions.getStorage();
        }
      },
      clearStorage: () => {
        storage == null ? void 0 : storage.removeItem(options.name);
      },
      getOptions: () => options,
      rehydrate: () => hydrate(),
      hasHydrated: () => hasHydrated,
      onHydrate: (cb) => {
        hydrationListeners.add(cb);
        return () => {
          hydrationListeners.delete(cb);
        };
      },
      onFinishHydration: (cb) => {
        finishHydrationListeners.add(cb);
        return () => {
          finishHydrationListeners.delete(cb);
        };
      }
    };
    hydrate();
    return stateFromStorage || configResult;
  };
  const persist = persistImpl;
  var isProduction = true;
  var prefix = "Invariant failed";
  function invariant(condition, message) {
    if (condition) {
      return;
    }
    if (isProduction) {
      throw new Error(prefix);
    }
    var provided = typeof message === "function" ? message() : message;
    var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
  }
  function z$2(r) {
    return r = f$1(r), r = u(r), a(r);
  }
  function f$1(r) {
    let n = /(^|[^\\]);.*/g;
    return r.replace(n, function(e, t) {
      return t || "";
    });
  }
  function u(r) {
    let n = [], e = /\([\s\S]*?\)/gim, t = e.exec(r);
    for (; t !== null; ) {
      let i2 = t[0].replace(/\s+/gm, " ");
      n.push({
        match: t,
        replacement: i2
      }), t = e.exec(r);
    }
    let s = r.split("");
    for (let i2 of n) {
      let { match: o, replacement: c2 } = i2;
      s.splice(o.index, o[0].length, c2);
    }
    return s.join("").replace(/\(|\)/gim, " ");
  }
  function a(r) {
    let n = {}, e = r.split(`
`);
    for (let t of e) {
      if (!t || !t.trim())
        continue;
      let s = t.toUpperCase();
      /\s+TXT\s+/.test(s) ? (n.txt = n.txt || [], n.txt.push(h$2(t))) : s.indexOf("$ORIGIN") === 0 ? n.$origin = t.split(/\s+/g)[1] : s.indexOf("$TTL") === 0 ? n.$ttl = parseInt(t.split(/\s+/g)[1], 10) : /\s+SOA\s+/.test(s) ? n.soa = l(t) : /\s+NS\s+/.test(s) ? (n.ns = n.ns || [], n.ns.push(g(t))) : /\s+A\s+/.test(s) ? (n.a = n.a || [], n.a.push(T$1(t, n.a))) : /\s+AAAA\s+/.test(s) ? (n.aaaa = n.aaaa || [], n.aaaa.push(m$1(t))) : /\s+CNAME\s+/.test(s) ? (n.cname = n.cname || [], n.cname.push(y$3(t))) : /\s+MX\s+/.test(s) ? (n.mx = n.mx || [], n.mx.push(N$2(t))) : /\s+PTR\s+/.test(s) ? (n.ptr = n.ptr || [], n.ptr.push(d(t, n.ptr, n.$origin))) : /\s+SRV\s+/.test(s) ? (n.srv = n.srv || [], n.srv.push(I$1(t))) : /\s+SPF\s+/.test(s) ? (n.spf = n.spf || [], n.spf.push(A$2(t))) : /\s+URI\s+/.test(s) && (n.uri = n.uri || [], n.uri.push(R$1(t)));
    }
    return n;
  }
  function l(r) {
    let n = {}, e = r.trim().split(/\s+/g), t = e.length;
    return n.name = e[0], n.minimum = parseInt(e[t - 1], 10), n.expire = parseInt(e[t - 2], 10), n.retry = parseInt(e[t - 3], 10), n.refresh = parseInt(e[t - 4], 10), n.serial = parseInt(e[t - 5], 10), n.rname = e[t - 6], n.mname = e[t - 7], isNaN(e[1]) || (n.ttl = parseInt(e[1], 10)), n;
  }
  function g(r) {
    let n = r.trim().split(/\s+/g), e = n.length, t = {
      name: n[0],
      host: n[e - 1]
    };
    return isNaN(n[1]) || (t.ttl = parseInt(n[1], 10)), t;
  }
  function T$1(r, n) {
    let e = r.trim().split(/\s+/g), t = r.trim().toUpperCase().split(/\s+/g), s = e.length, i2 = {
      name: e[0],
      ip: e[s - 1]
    };
    return t.lastIndexOf("A") === 0 && (n.length ? i2.name = n[n.length - 1].name : i2.name = "@"), isNaN(e[1]) || (i2.ttl = parseInt(e[1], 10)), i2;
  }
  function m$1(r) {
    let n = r.trim().split(/\s+/g), e = n.length, t = {
      name: n[0],
      ip: n[e - 1]
    };
    return isNaN(n[1]) || (t.ttl = parseInt(n[1], 10)), t;
  }
  function y$3(r) {
    let n = r.trim().split(/\s+/g), e = n.length, t = {
      name: n[0],
      alias: n[e - 1]
    };
    return isNaN(n[1]) || (t.ttl = parseInt(n[1], 10)), t;
  }
  function N$2(r) {
    let n = r.trim().split(/\s+/g), e = n.length, t = {
      name: n[0],
      preference: parseInt(n[e - 2], 10),
      host: n[e - 1]
    };
    return isNaN(n[1]) || (t.ttl = parseInt(n[1], 10)), t;
  }
  function h$2(r) {
    let n = r.trim().match(/[^\s"']+|"[^"]*"|'[^']*'/g);
    if (!n)
      throw new Error("Failure to tokenize TXT record");
    let e = n.length, t = n.indexOf("TXT");
    function s(c2) {
      return c2.indexOf('"') > -1 && (c2 = c2.split('"')[1]), c2;
    }
    let i2;
    e - t - 1 > 1 ? i2 = [
      ...n.slice(t + 1).map(s)
    ] : i2 = s(n[e - 1]);
    let o = {
      name: n[0],
      txt: i2
    };
    return isNaN(n[1]) || (o.ttl = parseInt(n[1], 10)), o;
  }
  function d(r, n, e) {
    let t = r.trim().split(/\s+/g);
    r.trim().toUpperCase().split(/\s+/g).lastIndexOf("PTR") === 0 && n[n.length - 1] && t.unshift(n[n.length - 1].name);
    let i2 = t.length, o = {
      name: t[0],
      fullname: `${t[0]}.${e}`,
      host: t[i2 - 1]
    };
    return isNaN(t[1]) || (o.ttl = parseInt(t[1], 10)), o;
  }
  function I$1(r) {
    let n = r.trim().split(/\s+/g), e = n.length, t = {
      name: n[0],
      target: n[e - 1],
      priority: parseInt(n[e - 4], 10),
      weight: parseInt(n[e - 3], 10),
      port: parseInt(n[e - 2], 10)
    };
    return isNaN(n[1]) || (t.ttl = parseInt(n[1], 10)), t;
  }
  function A$2(r) {
    let n = r.trim().split(/\s+/g), e = {
      name: n[0],
      data: ""
    }, t = n.length;
    for (; t-- > 4; )
      e.data = n[t] + " " + e.data.trim();
    return isNaN(n[1]) || (e.ttl = parseInt(n[1], 10)), e;
  }
  function R$1(r) {
    let n = r.trim().split(/\s+/g), e = n.length, t = {
      name: n[0],
      target: n[e - 1].replace(/"/g, ""),
      priority: parseInt(n[e - 3], 10),
      weight: parseInt(n[e - 2], 10)
    };
    return isNaN(n[1]) || (t.ttl = parseInt(n[1], 10)), t;
  }
  var ae = Object.defineProperty;
  var ce = (r, e, t) => e in r ? ae(r, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: t
  }) : r[e] = t;
  var z$1 = (r, e, t) => (ce(r, typeof e != "symbol" ? e + "" : e, t), t);
  function de(r) {
    return (r == null ? void 0 : r.map((e) => ({
      ...e,
      domain: e.path
    }))) ?? null;
  }
  function M$1(r) {
    let { hubInfo: e, privateKey: t, gaiaHubUrl: o, associationToken: n = null, scopes: s } = r, { challenge_text: i2 } = e, a2 = p$2(getPublicKey(t, true)), u2 = $$3(16).toString();
    return {
      gaiaChallenge: i2,
      hubUrl: o,
      iss: a2,
      salt: u2,
      associationToken: n,
      scopes: de(s)
    };
  }
  function ye(r) {
    let e = M$1(r);
    return `v1:${new Se("ES256K", r.privateKey).signSync(e)}`;
  }
  var J$1 = {
    challenge_text: '["gaiahub","0","storage2.blockstack.org","blockstack_storage_please_sign"]',
    latest_auth_version: "v1",
    max_file_upload_size_megabytes: 20,
    read_url_prefix: "https://gaia.blockstack.org/hub/"
  };
  function je(r) {
    let { gaiaHubUrl: e, privateKey: t, associationToken: o, scopes: n } = r, s = J$1, { read_url_prefix: i2, max_file_upload_size_megabytes: a2 } = s, u2 = ye({
      hubInfo: s,
      privateKey: t,
      gaiaHubUrl: e,
      associationToken: o,
      scopes: n
    });
    return {
      address: ar(t),
      url_prefix: i2,
      token: u2,
      server: e,
      max_file_upload_size_megabytes: a2 ?? 20
    };
  }
  var w$1 = {
    MISSING_PARAMETER: "missing_parameter",
    REMOTE_SERVICE_ERROR: "remote_service_error",
    INVALID_STATE: "invalid_state",
    NO_SESSION_DATA: "no_session_data",
    DOES_NOT_EXIST: "does_not_exist",
    FAILED_DECRYPTION_ERROR: "failed_decryption_error",
    INVALID_DID_ERROR: "invalid_did_error",
    NOT_ENOUGH_FUNDS_ERROR: "not_enough_error",
    INVALID_AMOUNT_ERROR: "invalid_amount_error",
    LOGIN_FAILED_ERROR: "login_failed",
    SIGNATURE_VERIFICATION_ERROR: "signature_verification_failure",
    CONFLICT_ERROR: "conflict_error",
    NOT_ENOUGH_PROOF_ERROR: "not_enough_proof_error",
    BAD_PATH_ERROR: "bad_path_error",
    VALIDATION_ERROR: "validation_error",
    PAYLOAD_TOO_LARGE_ERROR: "payload_too_large_error",
    PRECONDITION_FAILED_ERROR: "precondition_failed_error",
    UNKNOWN: "unknown"
  };
  Object.freeze(w$1);
  var k$1 = class k extends Error {
    constructor(e) {
      super();
      __publicField(this, "message");
      __publicField(this, "code");
      __publicField(this, "parameter");
      let t = e.message, o = `Error Code: ${e.code}`, n = this.stack;
      if (n)
        o += `Stack Trace:
${n}`;
      else
        try {
          throw new Error();
        } catch (s) {
          n = s.stack;
        }
      t += `
If you believe this exception is caused by a bug in blockstack.js,
      please file a bug report: https://github.com/blockstack/blockstack.js/issues

${o}`, this.message = t, this.code = e.code, this.parameter = e.parameter ? e.parameter : void 0;
    }
    toString() {
      return `${super.toString()}
    code: ${this.code} param: ${this.parameter ? this.parameter : "n/a"}`;
    }
  };
  var y$2 = class y extends k$1 {
    constructor(e) {
      let t = `Failed to verify signature: ${e}`;
      super({
        code: w$1.SIGNATURE_VERIFICATION_ERROR,
        message: t
      }), this.message = t, this.name = "SignatureVerificationError";
    }
  };
  var b$1 = class b extends k$1 {
    constructor(e, t) {
      super(e);
      __publicField(this, "hubError");
      t && (this.hubError = {
        statusCode: t.status,
        statusText: t.statusText
      }, typeof t.body == "string" ? this.hubError.message = t.body : typeof t.body == "object" && Object.assign(this.hubError, t.body));
    }
  }, x$1 = class x extends b$1 {
    constructor(e, t) {
      super({
        message: e,
        code: w$1.DOES_NOT_EXIST
      }, t), this.name = "DoesNotExist";
    }
  }, P$1 = class P extends b$1 {
    constructor(e, t) {
      super({
        message: e,
        code: w$1.CONFLICT_ERROR
      }, t), this.name = "ConflictError";
    }
  }, v = class extends b$1 {
    constructor(e, t) {
      super({
        message: e,
        code: w$1.NOT_ENOUGH_PROOF_ERROR
      }, t), this.name = "NotEnoughProofError";
    }
  }, S = class extends b$1 {
    constructor(e, t) {
      super({
        message: e,
        code: w$1.BAD_PATH_ERROR
      }, t), this.name = "BadPathError";
    }
  }, C$2 = class C extends b$1 {
    constructor(e, t) {
      super({
        message: e,
        code: w$1.VALIDATION_ERROR
      }, t), this.name = "ValidationError";
    }
  }, E$1 = class E extends b$1 {
    constructor(e, t, o) {
      super({
        message: e,
        code: w$1.PAYLOAD_TOO_LARGE_ERROR
      }, t);
      __publicField(this, "hubError");
      __publicField(this, "maxUploadByteSize");
      this.name = "PayloadTooLargeError", this.maxUploadByteSize = o;
    }
  }, L$1 = class L extends b$1 {
    constructor(e, t) {
      super({
        message: e,
        code: w$1.PRECONDITION_FAILED_ERROR
      }, t), this.name = "PreconditionFailedError";
    }
  };
  async function me(r) {
    let e = "", t;
    try {
      e = await r.text();
      try {
        t = JSON.parse(e);
      } catch {
      }
    } catch (i2) {
      console.debug(`Error getting bad http response text: ${i2}`);
    }
    let o = r.status, n = r.statusText;
    return {
      status: o,
      statusText: n,
      body: t || e
    };
  }
  function G(r) {
    return Number.isFinite(r) ? Math.floor(r * 1024 * 1024) : 0;
  }
  async function R(r, e, t) {
    if (r.ok)
      throw new Error("Cannot get a Stacks from a valid response.");
    let o = await me(r);
    if (o.status === 401)
      throw new C$2(e, o);
    if (o.status === 402)
      throw new v(e, o);
    if (o.status === 403)
      throw new S(e, o);
    if (o.status === 404)
      throw new x$1(e, o);
    if (o.status === 409)
      throw new P$1(e, o);
    if (o.status === 412)
      throw new L$1(e, o);
    if (o.status === 413) {
      let n = t && t.max_file_upload_size_megabytes ? G(t.max_file_upload_size_megabytes) : 0;
      throw new E$1(e, o, n);
    } else
      throw new Error(e);
  }
  function Z(r) {
    if (!r || !r.hubError || !r.hubError.statusCode)
      return false;
    let e = r.hubError.statusCode;
    return e === 401 || e === 409 || e >= 500 && e <= 599;
  }
  async function A$1(r) {
    let { filename: e, contents: t, hubConfig: o, contentType: n = "application/octet-stream" } = r, s = {
      "Content-Type": n,
      Authorization: `bearer ${o.token}`
    }, i2 = await Hr(`${o.server}/store/${o.address}/${e}`, {
      method: "POST",
      headers: s,
      body: t
    });
    if (!i2.ok)
      throw await R(i2, "Error when uploading to Gaia hub.", o);
    let a2 = await i2.text();
    return JSON.parse(a2);
  }
  function I(r, e) {
    return Promise.resolve(`${e.url_prefix}${e.address}/${r}`);
  }
  var h$1 = ".sig", U = "https://stacks-node-api.stacks.co/v1/names";
  var $$1 = class $ {
    constructor(e, t) {
      __publicField(this, "content");
      __publicField(this, "wasString");
      __publicField(this, "contentType");
      __publicField(this, "contentByteLength");
      __publicField(this, "loadedData");
      this.wasString = typeof e == "string", this.content = $$1.normalizeContentDataType(e, t), this.contentType = t || this.detectContentType(), this.contentByteLength = this.detectContentLength();
    }
    static normalizeContentDataType(e, t) {
      try {
        if (typeof e == "string") {
          let o = (t || "").toLowerCase().replace("-", "");
          if (o.includes("charset") && !o.includes("charset=utf8") && !o.includes("charset=ascii"))
            throw new Error(`Unable to determine byte length with charset: ${t}`);
          return new TextEncoder().encode(e);
        } else {
          if (e instanceof Uint8Array)
            return e;
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          if (typeof Blob < "u" && e instanceof Blob)
            return e;
          if (e instanceof ArrayBuffer)
            return new Uint8Array(e);
          if (Array.isArray(e)) {
            if (e.length > 0 && (!Number.isInteger(e[0]) || e[0] < 0 || e[0] > 255))
              throw new Error(`Unexpected array values provided as file data: value "${e[0]}" at index 0 is not an octet number. ${this.supportedTypesMsg}`);
            return new Uint8Array(e);
          } else {
            let o = Object.prototype.toString.call(e);
            throw new Error(`Unexpected type provided as file data: ${o}. ${this.supportedTypesMsg}`);
          }
        }
      } catch (o) {
        throw console.error(o), new Error(`Error processing data: ${o}`);
      }
    }
    detectContentType() {
      return this.wasString ? "text/plain; charset=utf-8" : typeof Blob < "u" && this.content instanceof Blob && this.content.type ? this.content.type : "application/octet-stream";
    }
    detectContentLength() {
      if (ArrayBuffer.isView(this.content) || this.content instanceof Uint8Array)
        return this.content.byteLength;
      if (typeof Blob < "u" && this.content instanceof Blob)
        return this.content.size;
      let e = Object.prototype.toString.call(this.content), t = new Error(`Unexpected type "${e}" while detecting content length`);
      throw console.error(t), t;
    }
    async loadContent() {
      try {
        if (this.content instanceof Uint8Array)
          return this.content;
        if (ArrayBuffer.isView(this.content))
          return new Uint8Array(this.content.buffer, this.content.byteOffset, this.content.byteLength);
        if (typeof Blob < "u" && this.content instanceof Blob) {
          let e = new FileReader();
          return await new Promise((n, s) => {
            e.onerror = (i2) => {
              s(i2);
            }, e.onload = () => {
              let i2 = e.result;
              n(new Uint8Array(i2));
            }, e.readAsArrayBuffer(this.content);
          });
        } else {
          let e = Object.prototype.toString.call(this.content);
          throw new Error(`Unexpected type ${e}`);
        }
      } catch (e) {
        console.error(e);
        let t = new Error(`Error loading content: ${e}`);
        throw console.error(t), t;
      }
    }
    load() {
      return this.loadedData === void 0 && (this.loadedData = this.loadContent()), this.loadedData;
    }
  }, O = $$1;
  z$1(O, "supportedTypesMsg", "Supported types are: `string` (to be UTF8 encoded), `Uint8Array`, `Blob`, `File`, `ArrayBuffer`, `UInt8Array` or any other typed array buffer. ");
  async function nt(r, e, t) {
    let { privateKey: o } = t, { encrypt: n, sign: s, gaiaHubConfig: i2, cipherTextEncoding: a2 } = t, { contentType: u2 = "" } = t, c2 = G(i2.max_file_upload_size_megabytes), g2 = c2 > 0, l2 = new O(e, u2);
    if (u2 = l2.contentType, !n && g2 && l2.contentByteLength > c2) {
      let p2 = `The max file upload size for this hub is ${c2} bytes, the given content is ${l2.contentByteLength} bytes`, f2 = new E$1(p2, null, c2);
      throw console.error(f2), f2;
    }
    if (n && g2 && a2) {
      let p2 = Kt({
        contentLength: l2.contentByteLength,
        wasString: l2.wasString,
        sign: !!s,
        cipherTextEncoding: a2
      });
      if (p2 > c2) {
        let f2 = `The max file upload size for this hub is ${c2} bytes, the given content is ${p2} bytes after encryption`, d2 = new E$1(f2, null, c2);
        throw console.error(d2), d2;
      }
    }
    let m2;
    if (!n && s) {
      let p2 = await l2.load();
      if (typeof s == "string")
        o = s;
      else if (!o)
        throw Error("Need to pass private key");
      let f2 = await ce$2({
        contents: p2,
        privateKey: o
      });
      m2 = async (d2) => (await Promise.all([
        A$1({
          filename: r,
          contents: p2,
          hubConfig: d2,
          contentType: u2
        }),
        A$1({
          filename: `${r}${h$1}`,
          contents: JSON.stringify(f2),
          hubConfig: d2,
          contentType: "application/json"
        })
      ]))[0].publicURL;
    } else {
      let p2;
      if (!n && !s)
        p2 = l2.content;
      else {
        let f2;
        if (typeof n == "string")
          f2 = n;
        else if (typeof s == "string")
          f2 = p$2(getPublicKey(s, true));
        else if (o)
          f2 = p$2(getPublicKey(o, true));
        else
          throw new Error("No private key passed");
        let d2 = await l2.load(), _2 = await Rr$1(d2, {
          publicKey: f2,
          wasString: l2.wasString,
          cipherTextEncoding: a2,
          privateKey: o
        });
        if (p2 = JSON.stringify(_2), o) {
          let { signature: K2, publicKey: T2 } = await ce$2({
            contents: _2,
            privateKey: o
          });
          p2 = JSON.stringify({
            signature: K2,
            publicKey: T2,
            cipherText: _2
          });
        }
        u2 = "application/json";
      }
      m2 = async (f2) => (await A$1({
        filename: r,
        contents: p2,
        hubConfig: f2,
        contentType: u2
      })).publicURL;
    }
    try {
      return await m2(i2);
    } catch (p2) {
      if (Z(p2))
        return console.error(p2), console.error("Possible recoverable error during Gaia upload, retrying..."), await m2(i2);
      throw p2;
    }
  }
  function q(r) {
    if (!r.hasOwnProperty("uri") || !Array.isArray(r.uri) || r.uri.length < 1)
      return null;
    let e = r.uri[0];
    if (!e.hasOwnProperty("target"))
      return null;
    let t = e.target;
    return t.startsWith("https") || t.startsWith("http") || (t = `https://${t}`), t;
  }
  function N$1(r, e) {
    let t;
    return e.proof && e.proof.url && (t = e.proof.url), {
      "@type": "Account",
      service: r,
      identifier: e.username,
      proofType: "http",
      proofUrl: t
    };
  }
  function H$1(r) {
    let e = {
      "@type": "Person"
    };
    if (r) {
      r.name && r.name.formatted && (e.name = r.name.formatted), r.bio && (e.description = r.bio), r.location && r.location.formatted && (e.address = {
        "@type": "PostalAddress",
        addressLocality: r.location.formatted
      });
      let t = [];
      r.avatar && r.avatar.url && t.push({
        "@type": "ImageObject",
        name: "avatar",
        contentUrl: r.avatar.url
      }), r.cover && r.cover.url && t.push({
        "@type": "ImageObject",
        name: "cover",
        contentUrl: r.cover.url
      }), t.length && (e.image = t), r.website && (e.website = [
        {
          "@type": "WebSite",
          url: r.website
        }
      ]);
      let o = [];
      r.bitcoin && r.bitcoin.address && o.push({
        "@type": "Account",
        role: "payment",
        service: "bitcoin",
        identifier: r.bitcoin.address
      }), r.twitter && r.twitter.username && o.push(N$1("twitter", r.twitter)), r.facebook && r.facebook.username && o.push(N$1("facebook", r.facebook)), r.github && r.github.username && o.push(N$1("github", r.github)), r.auth && r.auth.length > 0 && r.auth[0] && r.auth[0].publicKeychain && o.push({
        "@type": "Account",
        role: "key",
        service: "bip32",
        identifier: r.auth[0].publicKeychain
      }), r.pgp && r.pgp.url && o.push({
        "@type": "Account",
        role: "key",
        service: "pgp",
        identifier: r.pgp.fingerprint,
        contentUrl: r.pgp.url
      }), e.account = o;
    }
    return e;
  }
  function _e(r, e) {
    let t = wt(r);
    if (!t)
      throw Error("no decoded token");
    let o = t.payload;
    if (typeof o == "string")
      throw new Error("Unexpected token payload type of string");
    if (o.hasOwnProperty("subject") && o.subject) {
      if (!o.subject.hasOwnProperty("publicKey"))
        throw new Error("Token doesn't have a subject public key");
    } else
      throw new Error("Token doesn't have a subject");
    if (o.hasOwnProperty("issuer") && o.issuer) {
      if (!o.issuer.hasOwnProperty("publicKey"))
        throw new Error("Token doesn't have an issuer public key");
    } else
      throw new Error("Token doesn't have an issuer");
    if (!o.hasOwnProperty("claim"))
      throw new Error("Token doesn't have a claim");
    let n = o.issuer.publicKey, s = qe(n);
    if (e !== n) {
      if (e !== s)
        throw new Error("Token issuer public key does not match the verifying value");
    }
    let i2 = new we$1(t.header.alg, n);
    if (!i2)
      throw new Error("Invalid token verifier");
    if (!i2.verify(r))
      throw new Error("Token verification failed");
    return t;
  }
  function ee(r, e) {
    let t = e ? _e(r, e) : wt(r);
    if (t && t.hasOwnProperty("payload")) {
      let o = t.payload;
      if (typeof o == "string")
        throw new Error("[micro-stacks] extractProfile: Unexpected token payload type of string");
      if (o.hasOwnProperty("claim"))
        return o.claim;
    }
    return {};
  }
  async function te(r, e) {
    let t = z$2(r);
    if (t.hasOwnProperty("$origin") || (t = null), !(t && Object.keys(t).length > 0))
      return H$1(JSON.parse(r));
    let n = q(t);
    if (n)
      try {
        let i2 = await (await Hr(n)).json();
        return ee(i2[0].token, e);
      } catch (s) {
        throw console.error(`[micro-stacks] resolveZoneFileToProfile: error fetching token file ${n}: ${s}`), s;
      }
    return console.debug("[micro-stacks] Token file url not found. Resolving to blank profile."), {};
  }
  async function re(r) {
    let { username: e, zoneFileLookupURL: t = U } = r;
    if (!e)
      return Promise.reject();
    let o = `${t.replace(/\/$/, "")}/${r.username}`, s = await (await Hr(o)).json();
    if (s.hasOwnProperty("zonefile") && s.hasOwnProperty("address"))
      return await te(s.zonefile, r.verify ? s.address : void 0);
    throw new Error("Invalid zonefile lookup response: did not contain `address` or `zonefile` field");
  }
  async function oe(r, e, t, o) {
    let n = await re({
      username: e,
      zoneFileLookupURL: o
    }), s;
    if (!!n)
      return n.hasOwnProperty("apps") ? n.apps.hasOwnProperty(t) && (s = `${n.apps[t].replace(/\/?(\?|#|$)/, "/$1")}${r}`) : n.hasOwnProperty("appsMeta") && n.appsMeta.hasOwnProperty(t) && (s = `${n.appsMeta[t].replace(/\/?(\?|#|$)/, "/$1")}${r}`), s;
  }
  async function ve(r, e) {
    let t;
    if (e.username ? t = await oe(r, e.username, e.app, e.zoneFileLookupURL) : t = await I(r, e.gaiaHubConfig), t)
      return t;
    throw new Error("Missing readURL");
  }
  async function D(r) {
    let { app: e, username: t, zoneFileLookupURL: o, gaiaHubConfig: n } = r, s;
    t ? s = await oe("/", t, e, o) : n && (s = await I("/", n));
    let i2 = /([13][a-km-zA-HJ-NP-Z0-9]{26,35})/.exec(s);
    if (!i2)
      throw new Error("Failed to parse gaia address");
    return i2[i2.length - 1];
  }
  async function F$1(r) {
    let { path: e, forceText: t, app: o, username: n, zoneFileLookupURL: s, gaiaHubConfig: i2 } = r, a2 = await ve(e, {
      app: o,
      username: n,
      zoneFileLookupURL: s,
      gaiaHubConfig: i2
    }), u2 = await Hr(a2);
    if (!u2.ok)
      throw await R(u2, `getFile ${e} failed.`, null);
    let c2 = u2.headers.get("Content-Type");
    if (typeof c2 == "string" && (c2 = c2.toLowerCase()), t || c2 === null || c2.startsWith("text") || c2.startsWith("application/json"))
      return u2.text();
    {
      let g2 = await u2.arrayBuffer();
      return pr(g2);
    }
  }
  async function ne(r, e) {
    let { app: t, username: o, zoneFileLookupURL: n, gaiaHubConfig: s } = e, i2 = `${r}${h$1}`;
    try {
      let [a2, u2, c2] = await Promise.all([
        F$1({
          path: r,
          app: t,
          username: o,
          zoneFileLookupURL: n,
          forceText: false,
          gaiaHubConfig: s
        }),
        F$1({
          path: i2,
          app: t,
          username: o,
          zoneFileLookupURL: n,
          forceText: true,
          gaiaHubConfig: s
        }),
        D({
          app: t,
          username: o,
          zoneFileLookupURL: n,
          gaiaHubConfig: s
        })
      ]);
      if (!a2)
        return a2;
      if (!c2)
        throw new y$2(`Failed to get gaia address for verification of: ${r}`);
      if (!u2 || typeof u2 != "string")
        throw new y$2(`Failed to obtain signature for file: ${r} -- looked in ${r}${h$1}`);
      let g2, l2;
      try {
        let d2 = JSON.parse(u2);
        g2 = d2.signature, l2 = d2.publicKey;
      } catch (d2) {
        throw d2 instanceof SyntaxError ? new Error(`Failed to parse signature content JSON (path: ${r}${h$1}) The content may be corrupted.`) : d2;
      }
      let m2 = pr$1(l2), p2 = typeof a2 == "string" ? dr(a2) : a2, f2 = xr({
        signature: g2,
        contents: p2,
        publicKey: l2
      });
      if (c2 !== m2)
        throw new y$2(`Signer pubkey address (${m2}) doesn't match gaia address (${c2})`);
      if (f2)
        return a2;
      throw new y$2(`Contents do not match ECDSA signature: path: ${r}, signature: ${r}${h$1}`);
    } catch (a2) {
      throw a2 instanceof x$1 && a2.message.indexOf(i2) >= 0 ? new y$2(`Failed to obtain signature for file: ${r} -- looked in ${r}${h$1}`) : a2;
    }
  }
  async function ie(r) {
    let { path: e, storedContents: t, app: o, privateKey: n, username: s, zoneFileLookupURL: i2, gaiaHubConfig: a2 } = r, u2 = n, c2 = u2 ? getPublicKey(u2, true) : null, g2 = null;
    if (s || a2 ? g2 = await D({
      app: o,
      username: s,
      zoneFileLookupURL: i2,
      gaiaHubConfig: a2
    }) : c2 && (g2 = pr$1(c2)), !g2)
      throw new y$2(`Failed to get gaia address for verification of: ${e}`);
    let l2;
    try {
      l2 = JSON.parse(t);
    } catch (T2) {
      throw T2 instanceof SyntaxError ? new Error("Failed to parse encrypted, signed content JSON. The content may not be encrypted. If using getFile, try passing { verify: false, decrypt: false }.") : T2;
    }
    let m2 = l2.signature, p2 = l2.publicKey, f2 = l2.cipherText, d2 = pr$1(p2);
    if (!p2 || !f2 || !m2)
      throw new y$2(`Failed to get signature verification data from file: ${e}`);
    if (d2 !== g2)
      throw new y$2(`Signer pubkey address (${d2}) doesn't match gaia address (${g2})`);
    if (!xr({
      signature: m2,
      contents: f2,
      publicKey: p2
    }))
      throw new y$2(`Contents do not match ECDSA signature in file: ${e}`);
    if (!n)
      throw Error("Private key needs to be passed in order to decrypt content");
    return Ir(f2, {
      privateKey: n
    });
  }
  async function Bt(r, e) {
    let t = {
      decrypt: true,
      verify: false,
      app: hr("location", {
        returnEmptyObject: true
      }).origin,
      zoneFileLookupURL: U,
      ...e
    };
    if (t.verify && !t.decrypt)
      return ne(r, t);
    let o = await F$1({
      path: r,
      app: t.app,
      username: t.username,
      zoneFileLookupURL: t.zoneFileLookupURL,
      forceText: !!t.decrypt,
      gaiaHubConfig: t.gaiaHubConfig
    });
    if (o === null)
      return o;
    if (typeof o != "string")
      throw new Error("[micro-stacks/storage] Expected to get back a string for the cipherText");
    let n = !!t.verify, s = !!t.decrypt, i2 = typeof t.decrypt == "string" ? t.decrypt : t.privateKey;
    if (o.includes("signature") && o.includes("publicKey") && (n = true), o.includes("cipherText") && o.includes("ephemeralPK") && (s = true), !n && !s)
      return o;
    let a2 = !o.includes("cipherText");
    if (s && a2)
      throw new Error(`[micro-stacks/storage] Expected to get back a string that includes cipherText, is it encrypted? got back: ${JSON.stringify(o)}`);
    if (!i2)
      throw new Error("[micro-stacks/storage] No private key was passed to getFile, a private key needs to be passed if decrypt is set to true");
    if (!n)
      return Ir(o, {
        privateKey: i2
      });
    if (s && n)
      return ie({
        path: r,
        storedContents: o,
        app: t.app,
        privateKey: i2,
        username: t.username,
        zoneFileLookupURL: t.zoneFileLookupURL,
        gaiaHubConfig: t.gaiaHubConfig
      });
    throw new Error("[micro-stacks/storage] Should be unreachable.");
  }
  var et = "micro-stacks", M = {
    getItem: (n) => null,
    setItem: (n, t) => {
    },
    removeItem: (n) => {
    }
  }, F = st({
    storage: typeof window < "u" ? window.localStorage : M,
    serialize: JSON.stringify,
    deserialize: JSON.parse
  });
  function st({ storage: n, key: t = et, serialize: e, deserialize: s }) {
    return {
      ...n,
      getItem: (i2, r = null) => {
        let o = `${t}.${i2.replace(`${t}.`, "")}`, a2 = n.getItem(o);
        if (!s)
          return a2 ?? r;
        try {
          return a2 ? s(a2) : r;
        } catch (d2) {
          return console.warn(d2), r;
        }
      },
      setItem: (i2, r) => {
        let o = `${t}.${i2.replace(`${t}.`, "")}`;
        if (r === null)
          n.removeItem(o);
        else
          try {
            let a2 = e ? e(r) : r;
            n.setItem(o, a2);
          } catch (a2) {
            console.error(a2);
          }
      },
      removeItem: (i2) => n.removeItem(`${t}.${i2}`)
    };
  }
  function P(n) {
    return `[@micro-stacks/client] ${n}`;
  }
  function h(n, t) {
    invariant(n, P(t));
  }
  var B = ((s) => (s.ContractCall = "contract_call", s.TokenTransfer = "token_transfer", s.ContractDeploy = "contract_deploy", s))(B || {}), L = ((i2) => (i2.Authentication = "status/Authentication", i2.TransactionSigning = "status/TransactionSigning", i2.MessageSigning = "status/MessageSigning", i2.StructuredMessageSigning = "status/StructuredMessageSigning", i2))(L || {}), z = ((e) => (e.IsLoading = "status/IsLoading", e.IsIdle = "status/IsIdle", e))(z || {}), b = "store", C$1 = typeof document > "u";
  var it = function(n) {
    var t = n.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);
    return t;
  };
  function A(n) {
    if (!!n && !/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(n) && !/%[^0-9a-f]/i.test(n) && !/%[0-9a-f](:?[^0-9a-f]|$)/i.test(n)) {
      var t = [], e = "", s = "", i2 = "", r = "", o = "", a2 = "";
      if (t = it(n), e = t[1], s = t[2], i2 = t[3], r = t[4], o = t[5], !!(e && e.length && i2.length >= 0)) {
        if (s && s.length) {
          if (!(i2.length === 0 || /^\//.test(i2)))
            return;
        } else if (/^\/\//.test(i2))
          return;
        if (!!/^[a-z][a-z0-9\+\-\.]*$/.test(e.toLowerCase()))
          return a2 += e + ":", s && s.length && (a2 += "//" + s), a2 += i2, r && r.length && (a2 += "?" + r), o && o.length && (a2 += "#" + o), a2;
      }
    }
  }
  var ot = "(?<domain>([^?#]*)) wants you to sign in with your Stacks account:", at = "\\n(?<address>S[A-Z0-9]{40})\\n\\n", ct = "((?<statement>[^\\n]+)\\n)?", H = "(([^:?#]+):)?(([^?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?", dt = `\\nURI: (?<uri>${H}?)`, ut = "\\nVersion: (?<version>1)", lt = "\\nChain ID: (?<chainId>[0-9]+)", ht = "\\nNonce: (?<nonce>[a-zA-Z0-9]{8,})", E = "([0-9]+)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])[Tt]([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(.[0-9]+)?(([Zz])|([+|-]([01][0-9]|2[0-3]):[0-5][0-9]))", gt = `\\nIssued At: (?<issuedAt>${E})`, St = `(\\nExpiration Time: (?<expirationTime>${E}))?`, ft = `(\\nNot Before: (?<notBefore>${E}))?`, pt = "(\\nRequest ID: (?<requestId>[-._~!$&'()*+,;=:@%a-zA-Z0-9]*))?", It = `(\\nResources:(?<resources>(\\n- ${H}?)+))?`, yt = `^${ot}${at}${ct}${dt}${ut}${lt}${ht}${gt}${St}${ft}${pt}${It}$`, m = class {
    constructor(t) {
      __publicField(this, "domain");
      __publicField(this, "address");
      __publicField(this, "statement");
      __publicField(this, "uri");
      __publicField(this, "version");
      __publicField(this, "chainId");
      __publicField(this, "nonce");
      __publicField(this, "issuedAt");
      __publicField(this, "expirationTime");
      __publicField(this, "notBefore");
      __publicField(this, "requestId");
      __publicField(this, "resources");
      __publicField(this, "match");
      var i2, r, o, a2, d2, u2, S2, l2, c2, g2, v2, D2, K2, V2;
      let s = new RegExp(yt, "g").exec(t);
      if (!s)
        throw new Error("Message did not match the regular expression.");
      if (this.match = s, this.domain = (i2 = s == null ? void 0 : s.groups) == null ? void 0 : i2.domain, this.domain.length === 0 || !/[^#?]*/.test(this.domain))
        throw new Error("Domain cannot be empty.");
      if (this.address = (r = s == null ? void 0 : s.groups) == null ? void 0 : r.address, !Xt(this.address))
        throw new Error("Invalid address.");
      if (this.statement = (o = s == null ? void 0 : s.groups) == null ? void 0 : o.statement, this.uri = (a2 = s == null ? void 0 : s.groups) == null ? void 0 : a2.uri, !A(this.uri))
        throw new Error("Invalid URI.");
      this.version = (d2 = s == null ? void 0 : s.groups) == null ? void 0 : d2.version, this.nonce = (u2 = s == null ? void 0 : s.groups) == null ? void 0 : u2.nonce, this.chainId = parseInt((S2 = s == null ? void 0 : s.groups) == null ? void 0 : S2.chainId), this.issuedAt = (l2 = s == null ? void 0 : s.groups) == null ? void 0 : l2.issuedAt, this.expirationTime = (c2 = s == null ? void 0 : s.groups) == null ? void 0 : c2.expirationTime, this.notBefore = (g2 = s == null ? void 0 : s.groups) == null ? void 0 : g2.notBefore, this.requestId = (v2 = s == null ? void 0 : s.groups) == null ? void 0 : v2.requestId, this.resources = (K2 = (D2 = s == null ? void 0 : s.groups) == null ? void 0 : D2.resources) == null ? void 0 : K2.split(`
- `).slice(1), ((V2 = this.resources) == null ? void 0 : V2.length) > 0 && this.resources.forEach((U2) => {
        if (!A(U2))
          throw new Error(`${U2} is not a valid resource.`);
      });
    }
  };
  var W = [
    "signature",
    "domain",
    "nonce",
    "time"
  ], f = class {
    constructor(t, e, s) {
      __publicField(this, "type");
      __publicField(this, "expected");
      __publicField(this, "received");
      this.type = t, this.expected = e, this.received = s;
    }
  };
  var w = class {
    constructor(t) {
      __publicField(this, "domain");
      __publicField(this, "address");
      __publicField(this, "statement");
      __publicField(this, "uri");
      __publicField(this, "version");
      __publicField(this, "chainId");
      __publicField(this, "nonce");
      __publicField(this, "issuedAt");
      __publicField(this, "expirationTime");
      __publicField(this, "notBefore");
      __publicField(this, "requestId");
      __publicField(this, "resources");
      typeof t == "string" && (t = new m(t)), this.domain = t.domain, this.address = t.address, this.statement = t.statement, this.uri = t.uri, this.version = t.version, this.nonce = t.nonce, this.issuedAt = t.issuedAt, this.expirationTime = t.expirationTime, this.notBefore = t.notBefore, this.requestId = t.requestId, this.chainId = t.chainId, this.resources = t.resources, typeof this.chainId == "string" && (this.chainId = parseInt(this.chainId)), this.validateMessage();
    }
    toMessage() {
      this.validateMessage();
      let t = `${this.domain} wants you to sign in with your Stacks account:`, e = `URI: ${this.uri}`, s = [
        t,
        this.address
      ].join(`
`), i2 = `Version: ${this.version}`, r = "Chain ID: " + this.chainId || "1", o = `Nonce: ${this.nonce}`, a2 = [
        e,
        i2,
        r,
        o
      ];
      if (this.issuedAt && Date.parse(this.issuedAt), this.issuedAt = this.issuedAt ? this.issuedAt : new Date().toISOString(), a2.push(`Issued At: ${this.issuedAt}`), this.expirationTime) {
        let u2 = `Expiration Time: ${this.expirationTime}`;
        a2.push(u2);
      }
      this.notBefore && a2.push(`Not Before: ${this.notBefore}`), this.requestId && a2.push(`Request ID: ${this.requestId}`), this.resources && a2.push([
        "Resources:",
        ...this.resources.map((u2) => `- ${u2}`)
      ].join(`
`));
      let d2 = a2.join(`
`);
      return s = [
        s,
        this.statement
      ].join(`

`), this.statement && (s += `
`), [
        s,
        d2
      ].join(`
`);
    }
    prepareMessage() {
      let t;
      switch (this.version) {
        case "1": {
          t = this.toMessage();
          break;
        }
        default: {
          t = this.toMessage();
          break;
        }
      }
      return t;
    }
    async verify(t) {
      return new Promise(async (e, s) => {
        Object.keys(t).forEach((c2) => {
          W.includes(c2) || s({
            success: false,
            data: this,
            error: new Error(`${c2} is not a valid key for VerifyParams.`)
          });
        });
        let i2 = (c2) => {
          s(c2);
        }, { signature: r, domain: o, nonce: a2, time: d2 } = t;
        o && o !== this.domain && i2({
          success: false,
          data: this,
          error: new f("Domain do not match provided domain for verification.", o, this.domain)
        }), a2 && a2 !== this.nonce && i2({
          success: false,
          data: this,
          error: new f("Nonce do not match provided nonce for verification.", a2, this.nonce)
        });
        let u2 = new Date(d2 || new Date());
        if (this.expirationTime) {
          let c2 = new Date(this.expirationTime);
          u2.getTime() >= c2.getTime() && i2({
            success: false,
            data: this,
            error: new f("Expired message.", `${u2.toISOString()} < ${c2.toISOString()}`, `${u2.toISOString()} >= ${c2.toISOString()}`)
          });
        }
        if (this.notBefore) {
          let c2 = new Date(this.notBefore);
          u2.getTime() < c2.getTime() && i2({
            success: false,
            data: this,
            error: new f("Message is not valid yet.", `${u2.toISOString()} >= ${c2.toISOString()}`, `${u2.toISOString()} < ${c2.toISOString()}`)
          });
        }
        let S2;
        try {
          S2 = this.prepareMessage();
        } catch (c2) {
          i2({
            success: false,
            data: this,
            error: c2
          });
          return;
        }
        let l2;
        try {
          let c2 = R$2(S2), g2 = Z$1({
            signature: r
          }), v2 = Q({
            hash: c2,
            signature: g2.signature,
            recoveryBytes: g2.recoveryBytes
          });
          Ze({
            signature: r,
            message: c2
          }) && (l2 = qe(v2, ee$2(this.address)[0]));
        } catch {
        } finally {
          l2 !== this.address && i2({
            success: false,
            data: this,
            error: new f("Signature do not match address of the message.", l2, `Resolved address to be ${this.address}`)
          });
        }
        e({
          success: true,
          data: this
        });
      });
    }
    validateMessage(...t) {
      var i2;
      if (t.length > 0)
        throw new f("Unable to parse the message.", "Unexpected argument in the validateMessage function.");
      if (!this.domain || this.domain.length === 0 || !/[^#?]*/.test(this.domain))
        throw new f("Invalid domain.", `${this.domain} to be a valid domain.`);
      if (!Xt(this.address))
        throw new f("Invalid address.", `${this.address} to be a valid address.`);
      if (!A(this.uri))
        throw new f("URI does not conform to RFC 3986.", `${this.uri} to be a valid uri.`);
      if (this.version !== "1")
        throw new f("Invalid message version.", "1", this.version);
      let e = (i2 = this == null ? void 0 : this.nonce) == null ? void 0 : i2.match(/[a-zA-Z0-9]{8,}/);
      if (!e || this.nonce.length < 8 || e[0] !== this.nonce)
        throw new f("Nonce size smaller then 8 characters or is not alphanumeric.", `Length > 8 (${e == null ? void 0 : e.length}). Alphanumeric.`, this.nonce);
      let s = /([0-9]+)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])[Tt]([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(([Zz])|([+|\-]([01][0-9]|2[0-3]):[0-5][0-9]))/;
      if (this.issuedAt && !s.test(this.issuedAt))
        throw new Error("Invalid time format.");
      if (this.expirationTime && !s.test(this.expirationTime))
        throw new Error("Invalid time format.");
      if (this.notBefore && !s.test(this.notBefore))
        throw new Error("Invalid time format.");
    }
  };
  var y$1 = 1;
  function T({ state: n, version: t }) {
    var e, s, i2;
    return JSON.stringify([
      [
        (e = n.network) == null ? void 0 : e.chainId,
        (i2 = (s = n.network) == null ? void 0 : s.getCoreApiUrl) == null ? void 0 : i2.call(s)
      ],
      [
        n.currentAccountIndex,
        n.accounts.map((r) => ({
          appPrivateKey: r.appPrivateKey,
          address: V$1(r.address[0], l$3(r.address[1])),
          profile_url: r.profile_url
        }))
      ],
      t
    ]);
  }
  function Ot(n) {
    let t = JSON.parse(n), [e, s] = t[0], [i$1, r] = t[1], o = t[2] ?? y$1;
    return {
      network: e === ur.Mainnet ? new i({
        url: s
      }) : new l$2({
        url: s
      }),
      currentAccountIndex: i$1,
      accounts: r.map((d2) => {
        let [u2, S2] = ee$2(d2.address);
        return {
          appPrivateKey: d2.appPrivateKey,
          address: [
            u2,
            p$2(S2)
          ],
          profile_url: d2.profile_url
        };
      }),
      version: o
    };
  }
  var _ = (n) => {
    if (n) {
      if (typeof n != "string")
        return n;
      if (n === "testnet")
        return new l$2();
    }
    return new i();
  }, k = ({ network: n = new i(), ...t }) => ({
    statuses: {
      ["status/Authentication"]: "status/IsIdle",
      ["status/TransactionSigning"]: "status/IsIdle",
      ["status/MessageSigning"]: "status/IsIdle",
      ["status/StructuredMessageSigning"]: "status/IsIdle"
    },
    network: _(n),
    appName: t.appName,
    appIconUrl: t.appIconUrl,
    accounts: [],
    currentAccountIndex: 0,
    onPersistState: t.onPersistState,
    onAuthentication: t.onAuthentication,
    onNoWalletFound: t.onNoWalletFound,
    onSignOut: t.onSignOut
  }), N = (n, t) => {
    try {
      let { version: e, ...s } = Ot(n);
      return {
        state: {
          ...k(t),
          ...s
        },
        version: e
      };
    } catch {
      return {
        state: k(t),
        version: y$1
      };
    }
  }, j = () => {
    if (!hr("localStorage", {
      throwIfUnavailable: false
    }))
      return;
    let t = localStorage.getItem("MICRO_STACKS_DEBUG");
    if (t)
      return JSON.parse(t);
  };
  var x = class {
    constructor(t = {}) {
      __publicField(this, "config");
      __publicField(this, "storage");
      __publicField(this, "store");
      __publicField(this, "debug");
      __publicField(this, "fetcher");
      __publicField(this, "getState", () => this.store.getState());
      __publicField(this, "onStorageUpdate", (t) => {
        if (typeof document < "u") {
          let e = window.location.host, s = new URL(t.url).host, i2 = e === s, r = t.key === "micro-stacks.store";
          if (i2 && r) {
            let o = t.newValue;
            this.hydrate(JSON.parse(o));
          }
        }
      });
      __publicField(this, "tabSyncSubscription", (t) => {
        let e = typeof document < "u";
        return e && t && window.addEventListener("storage", this.onStorageUpdate), () => {
          e && t && window.removeEventListener("storage", this.onStorageUpdate);
        };
      });
      __publicField(this, "onPersistState", (t) => {
        var e, s;
        return (s = (e = this.store.getState()) == null ? void 0 : e.onPersistState) == null ? void 0 : s.call(e, t);
      });
      __publicField(this, "setOnPersistState", (t) => {
        this.setState((e) => ({
          ...e,
          onPersistState: t
        })), this.config.onPersistState = t;
      });
      __publicField(this, "setOnNoWalletFound", (t) => {
        this.setState((e) => ({
          ...e,
          onNoWalletFound: t
        })), this.config.onPersistState = t;
      });
      __publicField(this, "setOnSignOut", (t) => {
        this.setState((e) => ({
          ...e,
          onSignOut: t
        })), this.config.onSignOut = t;
      });
      __publicField(this, "setOnAuthentication", (t) => {
        this.setState((e) => ({
          ...e,
          onAuthentication: t
        })), this.config.onAuthentication = t;
      });
      __publicField(this, "persist", async () => {
        if (this.onPersistState) {
          let t = this.dehydrate(this.store.getState());
          await this.onPersistState(t);
        }
      });
      __publicField(this, "selectHasSession", (t) => Boolean(t.accounts.length));
      __publicField(this, "selectAccounts", (t) => t.accounts);
      __publicField(this, "selectAccount", (t) => this.selectHasSession(t) ? t.accounts[t.currentAccountIndex] : void 0);
      __publicField(this, "selectNetwork", (t) => this.config.enableNetworkSwitching ? t.network : _(this.config.network));
      __publicField(this, "selectNetworkChain", (t) => this.selectNetwork(t).chainId === ur.Mainnet ? "mainnet" : "testnet");
      __publicField(this, "selectTestnetStxAddress", (t) => {
        let e = this.selectAccount(t);
        return e ? V$1(e.address[0] === X$1.mainnetP2SH ? X$1.testnetP2SH : X$1.testnetP2PKH, l$3(e.address[1])) : void 0;
      });
      __publicField(this, "selectMainnetStxAddress", (t) => {
        let e = this.selectAccount(t);
        return e ? V$1(e.address[0], l$3(e.address[1])) : void 0;
      });
      __publicField(this, "selectStxAddress", (t) => this.selectNetworkChain(t) === "mainnet" ? this.selectMainnetStxAddress(t) : this.selectTestnetStxAddress(t));
      __publicField(this, "selectAppDetails", (t) => t.appName && t.appIconUrl ? {
        name: t.appName,
        icon: t.appIconUrl
      } : void 0);
      __publicField(this, "selectIdentityAddress", (t) => {
        let e = this.selectAccount(t);
        return e != null && e.appPrivateKey ? ar(e.appPrivateKey) : void 0;
      });
      __publicField(this, "selectDecentralizedID", (t) => {
        let e = this.selectIdentityAddress(t);
        return e ? `did:btc-addr:${e}` : void 0;
      });
      __publicField(this, "selectStatuses", (t) => t.statuses);
      __publicField(this, "statuses", () => this.selectStatuses(this.getState()));
      __publicField(this, "isSignMessageRequestPending", () => this.statuses()["status/MessageSigning"]);
      __publicField(this, "isSignStructuredMessageRequestPending", () => this.statuses()["status/StructuredMessageSigning"]);
      __publicField(this, "authenticate", async (t) => {
        if (!this.handleNoStacksProviderFound())
          return;
        let e = this.selectAppDetails(this.getState());
        h(e, "App details are not defined for you app. Most functionality (authentication, signing requests) require details be passed to the wallet. Add them to your MicroStacksClient config.");
        let s = this.selectAccounts(this.getState());
        this.setIsRequestPending("status/Authentication"), await Nt({
          appDetails: e,
          onFinish: async ({ profile: i2, ...r }) => {
            var S2, l2;
            let [o, a2] = ee$2(r.addresses.mainnet), d2 = [
              o,
              p$2(a2)
            ];
            s.find((c2) => c2.address === d2) ? this.setState((c2) => ({
              ...c2,
              currentAccountIndex: s.findIndex((g2) => g2.address === d2)
            })) : this.setState((c2) => {
              var g2;
              return {
                ...c2,
                accounts: c2.accounts.concat({
                  address: d2,
                  appPrivateKey: (g2 = this.debug) != null && g2.disableAppPrivateKey ? void 0 : r.appPrivateKey,
                  decentralizedID: r.decentralizedID,
                  profile_url: r.profile_url
                }),
                currentAccountIndex: c2.accounts.length
              };
            }), (S2 = t == null ? void 0 : t.onFinish) == null || S2.call(t, r), (l2 = this.onAuthentication) == null || l2.call(this, {
              profile: i2,
              ...r
            }), await this.persist(), this.setIsIdle("status/Authentication");
          },
          onCancel: (i2) => {
            var r;
            this.setIsIdle("status/Authentication"), (r = t == null ? void 0 : t.onCancel) == null || r.call(t, i2);
          }
        }, M);
      });
      __publicField(this, "signOut", async (t) => {
        var e, s, i2, r;
        return (i2 = (s = (e = this.store) == null ? void 0 : e.persist) == null ? void 0 : s.clearStorage) == null || i2.call(s), (r = this.onSignOut) == null || r.call(this), this.resetState(), t == null ? void 0 : t();
      });
      __publicField(this, "getSignInMessage", ({ domain: t, nonce: e, version: s = "1.0.0" }) => {
        if (!this.handleNoStacksProviderFound())
          return;
        let i2 = this.getState(), r = this.selectAppDetails(i2), o = this.selectStxAddress(i2);
        h(r, "App details are not defined for you app. Most functionality (authentication, signing requests) require details be passed to the wallet. Add them to your MicroStacksClient config."), h(o, "No current Stacks address can be found. This could be because a session has been invalidated, or the user is not signed in.");
        let a2 = hr("document", {
          throwIfUnavailable: false
        }) ? window.location.origin : "";
        return new w({
          domain: r.name,
          address: o,
          statement: "Sign in with Stacks",
          uri: t ?? a2,
          version: s,
          chainId: ur.Mainnet,
          nonce: e
        });
      });
      __publicField(this, "signTransaction", async (t, e) => {
        if (!this.handleNoStacksProviderFound())
          return;
        let s = this.getState(), i2 = this.selectAppDetails(s), r = this.selectStxAddress(s), o = this.selectAccount(s), a2 = this.selectNetwork(s);
        h(i2, "App details are not defined for you app. Most functionality (authentication, signing requests) require details be passed to the wallet. Add them to your MicroStacksClient config."), h(r, "No current Stacks address can be found. This could be because a session has been invalidated, or the user is not signed in."), h(o, "There is not current user session available. Please make sure the user has signed in before attempting this action."), this.setIsRequestPending("status/TransactionSigning");
        let d2, u2 = {
          privateKey: o.appPrivateKey,
          appDetails: i2,
          stxAddress: r,
          network: a2,
          postConditionMode: e.postConditionMode,
          postConditions: e.postConditions,
          attachment: e.attachment,
          sponsored: e.sponsored
        }, l2 = await (t === "token_transfer" ? It$1 : t === "contract_call" ? Tt : Pt)({
          ...u2,
          ...e
        });
        return h(l2, "Transaction JWT could not be created"), await Gt({
          token: l2,
          onFinish: (c2) => {
            var g2;
            d2 = c2, (g2 = e == null ? void 0 : e.onFinish) == null || g2.call(e, c2), this.setIsIdle("status/TransactionSigning");
          },
          onCancel: (c2) => {
            var g2;
            (g2 = e == null ? void 0 : e.onCancel) == null || g2.call(e, c2), this.setIsIdle("status/TransactionSigning");
          }
        }), d2;
      });
      __publicField(this, "signMessage", async (t) => {
        if (!this.handleNoStacksProviderFound())
          return;
        let e = this.getState(), s = this.selectAppDetails(e), i2 = this.selectStxAddress(e), r = this.selectAccount(e), o = this.selectNetwork(e);
        h(s, "App details are not defined for you app. Most functionality (authentication, signing requests) require details be passed to the wallet. Add them to your MicroStacksClient config."), h(i2, "No current Stacks address can be found. This could be because a session has been invalidated, or the user is not signed in."), h(r, "There is not current user session available. Please make sure the user has signed in before attempting this action."), h(t.message, "No message found -- a message is required when requesting a message signature."), this.setIsRequestPending("status/MessageSigning");
        let a2;
        return await De({
          appDetails: s,
          privateKey: r.appPrivateKey,
          stxAddress: i2,
          network: o,
          message: t.message,
          onFinish: (d2) => {
            var u2;
            a2 = d2, (u2 = t == null ? void 0 : t.onFinish) == null || u2.call(t, d2), this.setIsIdle("status/MessageSigning");
          },
          onCancel: (d2) => {
            var u2;
            (u2 = t == null ? void 0 : t.onCancel) == null || u2.call(t, d2), this.setIsIdle("status/MessageSigning");
          }
        }), a2;
      });
      __publicField(this, "signStructuredMessage", async (t) => {
        var d2, u2, S2;
        if (!this.handleNoStacksProviderFound())
          return;
        let e = this.getState(), s = this.selectAppDetails(e), i2 = this.selectStxAddress(e), r = this.selectAccount(e), o = this.selectNetwork(e);
        h(s, "App details are not defined for you app. Most functionality (authentication, signing requests) require details be passed to the wallet. Add them to your MicroStacksClient config."), h(i2, "No current Stacks address can be found. This could be because a session has been invalidated, or the user is not signed in."), h(r, "There is not current user session available. Please make sure the user has signed in before attempting this action."), h(t.message, "No message found -- a message is required when requesting a message signature."), this.setIsRequestPending("status/StructuredMessageSigning");
        let a2;
        return await Ke({
          appDetails: s,
          privateKey: r.appPrivateKey,
          stxAddress: i2,
          network: o,
          domain: {
            name: ((d2 = t.domain) == null ? void 0 : d2.name) ?? s.name,
            version: ((u2 = t.domain) == null ? void 0 : u2.version) ?? "1.0.0",
            chainId: ((S2 = t.domain) == null ? void 0 : S2.chainId) ?? o.chainId
          },
          message: t.message,
          onFinish: (l2) => {
            var c2;
            a2 = l2, (c2 = t == null ? void 0 : t.onFinish) == null || c2.call(t, l2), this.setIsIdle("status/StructuredMessageSigning");
          },
          onCancel: (l2) => {
            var c2;
            (c2 = t == null ? void 0 : t.onCancel) == null || c2.call(t, l2), this.setIsIdle("status/StructuredMessageSigning");
          }
        }), a2;
      });
      __publicField(this, "setNetwork", (t) => {
        if (!this.config.enableNetworkSwitching)
          throw new Error(P("Network switching is currently disabled. Set `enableNetworkSwitching` to `true` to enable."));
        typeof t == "string" ? this.setState((s) => ({
          ...s,
          network: t === "mainnet" ? new i() : new l$2()
        })) : this.setState((s) => ({
          ...s,
          network: t
        })), this.persist();
      });
      __publicField(this, "putFile", (t, e, { encrypt: s = true, sign: i2 }) => {
        let r = this.selectHasSession(this.getState()), o = this.selectGaiaHubConfig(this.getState()), a2 = this.selectAccount(this.getState());
        if (!r) {
          console.warn("There is not current user session available. Please make sure the user has signed in before attempting this action.");
          return;
        }
        if (!(a2 != null && a2.appPrivateKey) || !o) {
          console.warn("The current user session has no `appPrivateKey` defined. Certain actions require an `appPrivateKey`, such as using gaia or encryption.");
          return;
        }
        return nt(t, e, {
          privateKey: a2.appPrivateKey,
          gaiaHubConfig: o,
          encrypt: s,
          sign: i2,
          wasString: typeof e == "string"
        });
      });
      __publicField(this, "getFile", (t, { decrypt: e = true, verify: s }) => {
        let i2 = this.selectHasSession(this.getState()), r = this.selectGaiaHubConfig(this.getState()), o = this.selectAccount(this.getState());
        if (!i2) {
          console.warn("There is not current user session available. Please make sure the user has signed in before attempting this action.");
          return;
        }
        if (!(o != null && o.appPrivateKey) || !r) {
          console.warn("The current user session has no `appPrivateKey` defined. Certain actions require an `appPrivateKey`, such as using gaia or encryption.");
          return;
        }
        return Bt(t, {
          privateKey: o.appPrivateKey,
          gaiaHubConfig: r,
          decrypt: e,
          verify: s
        });
      });
      let e = {
        storage: (t == null ? void 0 : t.storage) ?? F,
        network: (t == null ? void 0 : t.network) ?? new i(),
        ...t
      }, s = typeof e.dehydratedState == "function" ? e.dehydratedState(this.storeKey) : e.dehydratedState, i$1 = s ? N(s, e) : {
        state: k(e),
        version: y$1
      };
      this.store = createStore(subscribeWithSelector(persist(() => i$1.state, {
        name: b,
        getStorage: () => e.storage,
        version: i$1.version,
        serialize: ({ state: r, version: o }) => T({
          state: r,
          version: o ?? y$1
        }),
        deserialize: (r) => N(r, e)
      }))), this.debug = j(), this.config = e, this.storage = e.storage, this.fetcher = e.fetcher || Hr;
    }
    setState(t) {
      let e = typeof t == "function" ? t(this.store.getState()) : t;
      this.store.setState(e, true);
    }
    resetState() {
      this.setState((t) => ({
        ...t,
        accounts: [],
        currentAccountIndex: 0
      }));
    }
    get subscribe() {
      return this.store.subscribe;
    }
    getStacksProvider() {
      return hr("StacksProvider", {
        throwIfUnavailable: false
      });
    }
    subscribeToStacksProvider(t, e = 100) {
      if (this.getStacksProvider())
        return t(), () => {
        };
      {
        let s = setInterval(() => {
          !!this.getStacksProvider() && (t(), clearInterval(s));
        }, e);
        return () => {
          typeof s < "u" && clearInterval(s);
        };
      }
    }
    get storeKey() {
      return b;
    }
    get onAuthentication() {
      var t;
      return (t = this.store.getState()) == null ? void 0 : t.onAuthentication;
    }
    get onNoWalletFound() {
      var t;
      return (t = this.store.getState()) == null ? void 0 : t.onNoWalletFound;
    }
    get onSignOut() {
      var t;
      return (t = this.store.getState()) == null ? void 0 : t.onSignOut;
    }
    dehydrate(t) {
      return T({
        state: t ?? this.store.getState(),
        version: y$1
      });
    }
    hydrate(t) {
      let e = N(t, this.config);
      this.setState(e.state);
    }
    setStatus(t, e) {
      this.setState((s) => ({
        ...s,
        statuses: {
          ...s.statuses,
          [t]: e
        }
      }));
    }
    setIsRequestPending(t) {
      this.setStatus(t, "status/IsLoading");
    }
    setIsIdle(t) {
      this.setStatus(t, "status/IsIdle");
    }
    handleNoStacksProviderFound() {
      return typeof this.getStacksProvider() > "u" ? typeof this.onNoWalletFound < "u" ? (this.onNoWalletFound(), false) : (h(this.getStacksProvider(), "The injected `StacksProvider` cannot be found. This is typically because there is no Stacks wallet available, such as the Hiro web wallet extension or the iOS/Android wallet Xverse."), false) : true;
    }
    selectGaiaHubConfig(t) {
      let e = this.selectHasSession(t), s = this.selectAccount(t);
      if (!(!e || !(s != null && s.appPrivateKey)))
        return je({
          gaiaHubUrl: "https://hub.blockstack.org",
          privateKey: s.appPrivateKey
        });
    }
    async fetchBNSName() {
      var i2;
      let t = this.selectStxAddress(this.getState()), e = this.selectNetwork(this.getState());
      if (!t) {
        console.warn("No Stacks address found while trying to fetch BNS name");
        return;
      }
      let s = e.getCoreApiUrl() + `/v1/addresses/stacks/${t}`;
      try {
        let o = await (await this.fetcher(s)).json();
        return (i2 = o == null ? void 0 : o.names) == null ? void 0 : i2[0];
      } catch (r) {
        console.log("[@micro-stacks/client] fetchBNSName failed", r);
      }
    }
    async fetchZoneFile() {
      try {
        let t = this.selectStxAddress(this.getState()), e = this.selectNetwork(this.getState());
        if (!t) {
          console.warn("No Stacks address found while trying to fetch zonefile name");
          return;
        }
        let s = e.getCoreApiUrl() + `/v1/names/${t}/zonefile`;
        return await (await this.fetcher(s)).json();
      } catch (t) {
        console.log("[@micro-stacks/client] fetchZoneFile failed", t);
      }
    }
    async fetchProfile() {
      let t = this.selectAccount(this.getState());
      if (!!(t != null && t.profile_url))
        try {
          return await (await this.fetcher(t.profile_url)).json();
        } catch (e) {
          console.log("[@micro-stacks/client] fetchProfile failed", e);
        }
    }
    encrypt(t, e = {}) {
      var s;
      if ((e == null ? void 0 : e.publicKey) && (e == null ? void 0 : e.privateKey))
        throw Error("Error: do not pass both `publicKey` and `privateKey` to client.encrypt");
      return Rr$1(t, {
        ...e,
        privateKey: e.privateKey ?? ((s = this.selectAccount(this.getState())) == null ? void 0 : s.appPrivateKey)
      });
    }
    decrypt(t, e) {
      var i2;
      let s = e.privateKey ?? ((i2 = this.selectAccount(this.getState())) == null ? void 0 : i2.appPrivateKey);
      if (!s)
        throw Error("You must pass a `privateKey` value to client.decrypt");
      return Ir(t, {
        privateKey: s
      });
    }
  };
  var $;
  function tt(n) {
    let t = (n == null ? void 0 : n.client) ?? new x(n == null ? void 0 : n.config);
    return C$1 ? t : ($ = t, $);
  }
  var y = "micro-stacks-client-context";
  var se = ({ appName: e, appIconUrl: o, storage: i2 = F, network: g2, dehydratedState: s, onPersistState: t, onSignOut: r, onAuthentication: u2, onNoWalletFound: d2, fetcher: x2 }) => {
    setContext(y, tt({
      config: {
        appName: e,
        appIconUrl: o,
        storage: i2,
        network: g2,
        dehydratedState: s,
        onPersistState: t,
        onSignOut: r,
        onAuthentication: u2,
        onNoWalletFound: d2,
        fetcher: x2
      }
    }));
  }, J = "No MicroStacksClient set, mount the client in your app by wrapping your app in `ClientProvider` or using `mountClient`", C = () => {
    let e = getContext(y);
    if (!e)
      throw new Error(J);
    return e;
  };
  const client = writable({});
  const _layout_svelte_svelte_type_style_lang = "";
  function create_if_block(ctx) {
    let div;
    let header;
    let t0;
    let previous_key = ctx[0];
    let t1;
    let footer;
    let current;
    header = new Header({});
    header.$on("network_change", ctx[2]);
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
        attr(div, "class", "app svelte-210wo4");
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
    const default_slot_template = ctx[4].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[3], null);
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
          if (default_slot.p && (!current || dirty & 8)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[3], !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(default_slot_template, ctx2[3], dirty, null), null);
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
    component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(7, $sbtcConfig = $$value));
    let { $$slots: slots = {}, $$scope } = $$props;
    let componentKey = 0;
    const unsubscribe = sbtcConfig.subscribe(() => {
    });
    onDestroy(unsubscribe);
    const networkChange = () => {
      $$invalidate(0, componentKey++, componentKey);
    };
    let inited = false;
    let origin = "";
    if (typeof window !== "undefined") {
      origin = window.location.origin;
    }
    const config = {
      appName: "sBTC Client",
      appIconUrl: origin + "/img/logo.png",
      network: $sbtcConfig.network === "mainnet" ? new i() : new l$2()
    };
    se(config);
    client.set(C());
    const fetchWalletAddress = async () => {
      const addr = await fetchSbtcWalletAddress($sbtcConfig.network);
      const conf = $sbtcConfig;
      conf.sbtcWalletAddress = addr;
      sbtcConfig.update(() => conf);
    };
    let bootstrap;
    onMount(async () => {
      bootstrap = await __vitePreload(() => import("../../chunks/bootstrap.esm-1ba04bfb.js"), true ? [] : void 0, import.meta.url);
      try {
        await fetchWalletAddress();
      } catch (err) {
        console.log(err);
      }
      $$invalidate(1, inited = true);
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
        $$invalidate(3, $$scope = $$props2.$$scope);
    };
    return [
      componentKey,
      inited,
      networkChange,
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
