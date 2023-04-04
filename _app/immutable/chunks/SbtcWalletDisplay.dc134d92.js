var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, Q as create_slot, X as assign, Y as compute_rest_props, v as validate_slots, Z as exclude_internal_props, _ as svg_element, $ as claim_svg_element, r as children, l as detach_dev, u as attr_dev, x as add_location, a0 as set_svg_attributes, a1 as toggle_class, g as insert_hydration_dev, J as append_hydration_dev, R as update_slot_base, T as get_all_dirty_from_scope, U as get_slot_changes, a2 as get_spread_update, k as transition_in, h as transition_out, a5 as createEventDispatcher, p as element, y as text, c as space, q as claim_element, z as claim_text, f as claim_space, V as set_input_value, L as listen_dev, A as set_data_dev, I as noop, N as run_all, M as prevent_default, e as empty, o as onMount, m as binding_callbacks, G as validate_store, H as component_subscribe, B as group_outros, j as check_outros, a3 as validate_each_argument, C as create_component, D as claim_component, E as mount_component, F as destroy_component, w as set_style, a7 as prop_dev, a4 as destroy_each, K as src_url_equal, P as globals } from "./index.0c92228d.js";
import { _ as _asyncToGenerator, k as _regeneratorRuntime, m as _extends, S as StacksTestnet, n as getUserSession, q as getStacksProvider, r as lib, v as _objectWithoutPropertiesLoose, w as hasAppPrivateKey, x as getKeys, a as addresses, y as commonjsGlobal, z as getDefaultExportFromCjs, e as utils, f as getPublicKey, h as schnorr, i as decodeStacksAddress, t as tupleCV, s as stringAsciiCV, c as uintCV, A as hexToBytes } from "./stacks_connect.7f325cc2.js";
import { T as TEST_NETWORK, N as NETWORK, h as hex, b as explorerBtcAddressUrl, g as base64, j as btc, c as Transaction } from "./utils.7b5b399c.js";
import { s as sbtcConfig } from "./hmac.1e7e1fcb.js";
import { s as sendRawTxDirectMempool } from "./bridge_api.fe1b21a1.js";
var _excluded = ["allowedSighash", "hex", "signAtIndex", "userSession"];
function signPayload(_x, _x2) {
  return _signPayload.apply(this, arguments);
}
function _signPayload() {
  _signPayload = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee2(payload, privateKey) {
    var tokenSigner;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1)
        switch (_context2.prev = _context2.next) {
          case 0:
            tokenSigner = new lib.TokenSigner("ES256k", privateKey);
            return _context2.abrupt("return", tokenSigner.signAsync(_extends({}, payload)));
          case 2:
          case "end":
            return _context2.stop();
        }
    }, _callee2);
  }));
  return _signPayload.apply(this, arguments);
}
function getDefaultPsbtRequestOptions(options) {
  var network = options.network || new StacksTestnet();
  var userSession = getUserSession(options.userSession);
  var defaults = _extends({}, options, {
    network,
    userSession
  });
  return _extends({}, defaults);
}
function openPsbtPopup(_x3) {
  return _openPsbtPopup.apply(this, arguments);
}
function _openPsbtPopup() {
  _openPsbtPopup = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee3(_ref) {
    var token, options, provider, psbtResponse;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1)
        switch (_context3.prev = _context3.next) {
          case 0:
            token = _ref.token, options = _ref.options;
            provider = getStacksProvider();
            if (provider) {
              _context3.next = 4;
              break;
            }
            throw new Error("Hiro Wallet not installed");
          case 4:
            _context3.prev = 4;
            _context3.next = 7;
            return provider.psbtRequest(token);
          case 7:
            psbtResponse = _context3.sent;
            options.onFinish == null ? void 0 : options.onFinish(psbtResponse);
            _context3.next = 15;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](4);
            console.error("[Connect] Error during psbt request", _context3.t0);
            options.onCancel == null ? void 0 : options.onCancel();
          case 15:
          case "end":
            return _context3.stop();
        }
    }, _callee3, null, [[4, 11]]);
  }));
  return _openPsbtPopup.apply(this, arguments);
}
var makePsbtToken = /* @__PURE__ */ function() {
  var _ref2 = /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(options) {
    var allowedSighash, hex2, signAtIndex, userSession, _options, _getKeys, privateKey, publicKey, payload2, payload;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1)
        switch (_context.prev = _context.next) {
          case 0:
            allowedSighash = options.allowedSighash, hex2 = options.hex, signAtIndex = options.signAtIndex, userSession = options.userSession, _options = _objectWithoutPropertiesLoose(options, _excluded);
            if (!hasAppPrivateKey(userSession)) {
              _context.next = 5;
              break;
            }
            _getKeys = getKeys(userSession), privateKey = _getKeys.privateKey, publicKey = _getKeys.publicKey;
            payload2 = _extends({}, _options, {
              allowedSighash,
              hex: hex2,
              signAtIndex,
              publicKey
            });
            return _context.abrupt("return", signPayload(payload2, privateKey));
          case 5:
            payload = _extends({}, _options);
            return _context.abrupt("return", lib.createUnsecuredToken(payload));
          case 7:
          case "end":
            return _context.stop();
        }
    }, _callee);
  }));
  return function makePsbtToken2(_x4) {
    return _ref2.apply(this, arguments);
  };
}();
function generateTokenAndOpenPopup(_x5, _x6) {
  return _generateTokenAndOpenPopup.apply(this, arguments);
}
function _generateTokenAndOpenPopup() {
  _generateTokenAndOpenPopup = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee4(options, makeTokenFn) {
    var token;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1)
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return makeTokenFn(_extends({}, getDefaultPsbtRequestOptions(options), options));
          case 2:
            token = _context4.sent;
            return _context4.abrupt("return", openPsbtPopup({
              token,
              options
            }));
          case 4:
          case "end":
            return _context4.stop();
        }
    }, _callee4);
  }));
  return _generateTokenAndOpenPopup.apply(this, arguments);
}
function openPsbtRequestPopup(options) {
  return generateTokenAndOpenPopup(options, makePsbtToken);
}
const file$d = "node_modules/svelte-bootstrap-icons/lib/ArrowDown.svelte";
function create_fragment$d(ctx) {
  let svg;
  let path;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
    null
  );
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: "16" },
    { height: "16" },
    { fill: "currentColor" },
    { viewBox: "0 0 16 16" },
    /*$$restProps*/
    ctx[0]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  const block = {
    c: function create() {
      svg = svg_element("svg");
      if (default_slot)
        default_slot.c();
      path = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        fill: true,
        viewBox: true
      });
      var svg_nodes = children(svg);
      if (default_slot)
        default_slot.l(svg_nodes);
      path = claim_svg_element(svg_nodes, "path", { "fill-rule": true, d: true });
      children(path).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(path, "fill-rule", "evenodd");
      attr_dev(path, "d", "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z");
      add_location(path, file$d, 0, 171, 171);
      set_svg_attributes(svg, svg_data);
      toggle_class(svg, "bi", true);
      toggle_class(svg, "bi-arrow-down", true);
      add_location(svg, file$d, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, svg, anchor);
      if (default_slot) {
        default_slot.m(svg, null);
      }
      append_hydration_dev(svg, path);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[1],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { width: "16" },
        { height: "16" },
        { fill: "currentColor" },
        { viewBox: "0 0 16 16" },
        dirty & /*$$restProps*/
        1 && /*$$restProps*/
        ctx2[0]
      ]));
      toggle_class(svg, "bi", true);
      toggle_class(svg, "bi-arrow-down", true);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$d.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$d($$self, $$props, $$invalidate) {
  const omit_props_names = [];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ArrowDown", slots, ["default"]);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("$$scope" in $$new_props)
      $$invalidate(1, $$scope = $$new_props.$$scope);
  };
  return [$$restProps, $$scope, slots];
}
class ArrowDown extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$d, create_fragment$d, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ArrowDown",
      options,
      id: create_fragment$d.name
    });
  }
}
const file$c = "node_modules/svelte-bootstrap-icons/lib/ArrowUp.svelte";
function create_fragment$c(ctx) {
  let svg;
  let path;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
    null
  );
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: "16" },
    { height: "16" },
    { fill: "currentColor" },
    { viewBox: "0 0 16 16" },
    /*$$restProps*/
    ctx[0]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  const block = {
    c: function create() {
      svg = svg_element("svg");
      if (default_slot)
        default_slot.c();
      path = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        fill: true,
        viewBox: true
      });
      var svg_nodes = children(svg);
      if (default_slot)
        default_slot.l(svg_nodes);
      path = claim_svg_element(svg_nodes, "path", { "fill-rule": true, d: true });
      children(path).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(path, "fill-rule", "evenodd");
      attr_dev(path, "d", "M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z");
      add_location(path, file$c, 0, 169, 169);
      set_svg_attributes(svg, svg_data);
      toggle_class(svg, "bi", true);
      toggle_class(svg, "bi-arrow-up", true);
      add_location(svg, file$c, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, svg, anchor);
      if (default_slot) {
        default_slot.m(svg, null);
      }
      append_hydration_dev(svg, path);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[1],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { width: "16" },
        { height: "16" },
        { fill: "currentColor" },
        { viewBox: "0 0 16 16" },
        dirty & /*$$restProps*/
        1 && /*$$restProps*/
        ctx2[0]
      ]));
      toggle_class(svg, "bi", true);
      toggle_class(svg, "bi-arrow-up", true);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$c.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$c($$self, $$props, $$invalidate) {
  const omit_props_names = [];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ArrowUp", slots, ["default"]);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("$$scope" in $$new_props)
      $$invalidate(1, $$scope = $$new_props.$$scope);
  };
  return [$$restProps, $$scope, slots];
}
class ArrowUp extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$c, create_fragment$c, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ArrowUp",
      options,
      id: create_fragment$c.name
    });
  }
}
const file$b = "node_modules/svelte-bootstrap-icons/lib/CheckCircle.svelte";
function create_fragment$b(ctx) {
  let svg;
  let path0;
  let path1;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
    null
  );
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { width: "16" },
    { height: "16" },
    { fill: "currentColor" },
    { viewBox: "0 0 16 16" },
    /*$$restProps*/
    ctx[0]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  const block = {
    c: function create() {
      svg = svg_element("svg");
      if (default_slot)
        default_slot.c();
      path0 = svg_element("path");
      path1 = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        fill: true,
        viewBox: true
      });
      var svg_nodes = children(svg);
      if (default_slot)
        default_slot.l(svg_nodes);
      path0 = claim_svg_element(svg_nodes, "path", { d: true });
      children(path0).forEach(detach_dev);
      path1 = claim_svg_element(svg_nodes, "path", { d: true });
      children(path1).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(path0, "d", "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z");
      add_location(path0, file$b, 0, 173, 173);
      attr_dev(path1, "d", "M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z");
      add_location(path1, file$b, 1, 2, 257);
      set_svg_attributes(svg, svg_data);
      toggle_class(svg, "bi", true);
      toggle_class(svg, "bi-check-circle", true);
      add_location(svg, file$b, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, svg, anchor);
      if (default_slot) {
        default_slot.m(svg, null);
      }
      append_hydration_dev(svg, path0);
      append_hydration_dev(svg, path1);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[1],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { width: "16" },
        { height: "16" },
        { fill: "currentColor" },
        { viewBox: "0 0 16 16" },
        dirty & /*$$restProps*/
        1 && /*$$restProps*/
        ctx2[0]
      ]));
      toggle_class(svg, "bi", true);
      toggle_class(svg, "bi-check-circle", true);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(svg);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$b.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$b($$self, $$props, $$invalidate) {
  const omit_props_names = [];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("CheckCircle", slots, ["default"]);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("$$scope" in $$new_props)
      $$invalidate(1, $$scope = $$new_props.$$scope);
  };
  return [$$restProps, $$scope, slots];
}
class CheckCircle extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$b, create_fragment$b, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "CheckCircle",
      options,
      id: create_fragment$b.name
    });
  }
}
const file$a = "src/lib/components/common/Principal.svelte";
function create_if_block_1$5(ctx) {
  let div;
  let a;
  let t;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div = element("div");
      a = element("a");
      t = text("mine");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      a = claim_element(div_nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      t = claim_text(a_nodes, "mine");
      a_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", "/");
      attr_dev(a, "class", "");
      add_location(a, file$a, 33, 11, 1511);
      add_location(div, file$a, 33, 6, 1506);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, a);
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
        detach_dev(div);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$5.name,
    type: "if",
    source: "(33:6) {#if stxAddress !== addresses().stxAddress}",
    ctx
  });
  return block;
}
function create_if_block$7(ctx) {
  let div;
  let t;
  const block = {
    c: function create() {
      div = element("div");
      t = text(
        /*reason*/
        ctx[2]
      );
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t = claim_text(
        div_nodes,
        /*reason*/
        ctx[2]
      );
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "text-warning");
      add_location(div, file$a, 36, 56, 1718);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*reason*/
      4)
        set_data_dev(
          t,
          /*reason*/
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
    id: create_if_block$7.name,
    type: "if",
    source: "(37:4) {#if errored && stxAddress && stxAddress.length > 0}",
    ctx
  });
  return block;
}
function create_fragment$a(ctx) {
  let div3;
  let div2;
  let label;
  let span0;
  let t0_value = (
    /*principalData*/
    ctx[0].label + ""
  );
  let t0;
  let t1;
  let span1;
  let t2;
  let input;
  let t3;
  let div1;
  let div0;
  let t4_value = (
    /*principalData*/
    ctx[0].info + ""
  );
  let t4;
  let t5;
  let show_if = (
    /*stxAddress*/
    ctx[1] !== addresses().stxAddress
  );
  let t6;
  let mounted;
  let dispose;
  let if_block0 = show_if && create_if_block_1$5(ctx);
  let if_block1 = (
    /*errored*/
    ctx[3] && /*stxAddress*/
    ctx[1] && /*stxAddress*/
    ctx[1].length > 0 && create_if_block$7(ctx)
  );
  const block = {
    c: function create() {
      div3 = element("div");
      div2 = element("div");
      label = element("label");
      span0 = element("span");
      t0 = text(t0_value);
      t1 = space();
      span1 = element("span");
      t2 = space();
      input = element("input");
      t3 = space();
      div1 = element("div");
      div0 = element("div");
      t4 = text(t4_value);
      t5 = space();
      if (if_block0)
        if_block0.c();
      t6 = space();
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l: function claim(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      label = claim_element(div2_nodes, "LABEL", { for: true, class: true });
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
      t2 = claim_space(div2_nodes);
      input = claim_element(div2_nodes, "INPUT", {
        type: true,
        id: true,
        class: true,
        autocomplete: true
      });
      t3 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t4 = claim_text(div0_nodes, t4_value);
      div0_nodes.forEach(detach_dev);
      t5 = claim_space(div1_nodes);
      if (if_block0)
        if_block0.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      t6 = claim_space(div2_nodes);
      if (if_block1)
        if_block1.l(div2_nodes);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(span0, file$a, 26, 6, 883);
      attr_dev(span1, "class", "pointer text-info");
      attr_dev(span1, "data-bs-toggle", "tooltip-ftux");
      attr_dev(span1, "data-bs-placement", "top");
      attr_dev(span1, "data-bs-custom-class", "custom-tooltip");
      attr_dev(span1, "title", "Your Stacks address. The equivalent amount of sBTC will be sent to this wallet");
      add_location(span1, file$a, 27, 6, 924);
      attr_dev(label, "for", "transact-path");
      attr_dev(label, "class", "d-flex justify-content-between");
      add_location(label, file$a, 25, 4, 810);
      attr_dev(input, "type", "text");
      attr_dev(input, "id", "from-address");
      attr_dev(input, "class", "form-control form-inline");
      attr_dev(input, "autocomplete", "off");
      add_location(input, file$a, 29, 4, 1160);
      attr_dev(div0, "class", "text-small text-white");
      add_location(div0, file$a, 31, 6, 1388);
      attr_dev(div1, "class", "d-flex justify-content-between text-small text-info");
      add_location(div1, file$a, 30, 4, 1316);
      attr_dev(div2, "class", "col");
      add_location(div2, file$a, 24, 2, 788);
      attr_dev(div3, "class", "row");
      add_location(div3, file$a, 23, 0, 768);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div3, anchor);
      append_hydration_dev(div3, div2);
      append_hydration_dev(div2, label);
      append_hydration_dev(label, span0);
      append_hydration_dev(span0, t0);
      append_hydration_dev(label, t1);
      append_hydration_dev(label, span1);
      append_hydration_dev(div2, t2);
      append_hydration_dev(div2, input);
      set_input_value(
        input,
        /*stxAddress*/
        ctx[1]
      );
      append_hydration_dev(div2, t3);
      append_hydration_dev(div2, div1);
      append_hydration_dev(div1, div0);
      append_hydration_dev(div0, t4);
      append_hydration_dev(div1, t5);
      if (if_block0)
        if_block0.m(div1, null);
      append_hydration_dev(div2, t6);
      if (if_block1)
        if_block1.m(div2, null);
      if (!mounted) {
        dispose = [
          listen_dev(
            input,
            "input",
            /*input_input_handler*/
            ctx[5]
          ),
          listen_dev(
            input,
            "input",
            /*input_handler*/
            ctx[6],
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
      if (dirty & /*principalData*/
      1 && t0_value !== (t0_value = /*principalData*/
      ctx2[0].label + ""))
        set_data_dev(t0, t0_value);
      if (dirty & /*stxAddress*/
      2 && input.value !== /*stxAddress*/
      ctx2[1]) {
        set_input_value(
          input,
          /*stxAddress*/
          ctx2[1]
        );
      }
      if (dirty & /*principalData*/
      1 && t4_value !== (t4_value = /*principalData*/
      ctx2[0].info + ""))
        set_data_dev(t4, t4_value);
      if (dirty & /*stxAddress*/
      2)
        show_if = /*stxAddress*/
        ctx2[1] !== addresses().stxAddress;
      if (show_if) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_1$5(ctx2);
          if_block0.c();
          if_block0.m(div1, null);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*errored*/
        ctx2[3] && /*stxAddress*/
        ctx2[1] && /*stxAddress*/
        ctx2[1].length > 0
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block$7(ctx2);
          if_block1.c();
          if_block1.m(div2, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div3);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$a.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$a($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Principal", slots, []);
  let { principalData } = $$props;
  const network = "mainnet";
  const dispatch = createEventDispatcher();
  let stxAddress = principalData.currentAddress;
  const mainReason = "Please enter a valid stacks blockchain " + network + " address";
  let reason = mainReason;
  let errored = false;
  const changeStxAddress = async () => {
    $$invalidate(3, errored = false);
    try {
      dispatch("principal_updated", { error: false, currentAddress: stxAddress });
    } catch (err) {
      $$invalidate(3, errored = true);
      $$invalidate(2, reason = err || "Error - is the address a valid");
      dispatch("principal_updated", { error: true, reason });
      return;
    }
  };
  $$self.$$.on_mount.push(function() {
    if (principalData === void 0 && !("principalData" in $$props || $$self.$$.bound[$$self.$$.props["principalData"]])) {
      console.warn("<Principal> was created without expected prop 'principalData'");
    }
  });
  const writable_props = ["principalData"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Principal> was created with unknown prop '${key}'`);
  });
  function input_input_handler() {
    stxAddress = this.value;
    $$invalidate(1, stxAddress);
  }
  const input_handler = () => changeStxAddress();
  const click_handler = () => {
    $$invalidate(1, stxAddress = addresses().stxAddress);
    changeStxAddress();
  };
  $$self.$$set = ($$props2) => {
    if ("principalData" in $$props2)
      $$invalidate(0, principalData = $$props2.principalData);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    addresses,
    principalData,
    network,
    dispatch,
    stxAddress,
    mainReason,
    reason,
    errored,
    changeStxAddress
  });
  $$self.$inject_state = ($$props2) => {
    if ("principalData" in $$props2)
      $$invalidate(0, principalData = $$props2.principalData);
    if ("stxAddress" in $$props2)
      $$invalidate(1, stxAddress = $$props2.stxAddress);
    if ("reason" in $$props2)
      $$invalidate(2, reason = $$props2.reason);
    if ("errored" in $$props2)
      $$invalidate(3, errored = $$props2.errored);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    principalData,
    stxAddress,
    reason,
    errored,
    changeStxAddress,
    input_input_handler,
    input_handler,
    click_handler
  ];
}
class Principal extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$a, create_fragment$a, safe_not_equal, { principalData: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Principal",
      options,
      id: create_fragment$a.name
    });
  }
  get principalData() {
    throw new Error("<Principal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set principalData(value) {
    throw new Error("<Principal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$9 = "src/lib/components/common/FeeDisplay.svelte";
function create_else_block_1$1(ctx) {
  let div5;
  let div0;
  let t0;
  let t1_value = (
    /*amtData*/
    ctx[0].dust + ""
  );
  let t1;
  let t2;
  let t3;
  let div1;
  let t4;
  let div4;
  let div2;
  let t5;
  let span0;
  let t6_value = (
    /*amtData*/
    ctx[0].fee + ""
  );
  let t6;
  let t7;
  let t8;
  let div3;
  let span1;
  let t9;
  let t10;
  let span2;
  let a0;
  let t11;
  let a0_class_value;
  let t12;
  let span3;
  let a1;
  let t13;
  let a1_class_value;
  let t14;
  let span4;
  let a2;
  let t15;
  let a2_class_value;
  let mounted;
  let dispose;
  function select_block_type_2(ctx2, dirty) {
    if (
      /*amtData*/
      ctx2[0].change === 0
    )
      return create_if_block_2$3;
    return create_else_block_2$1;
  }
  let current_block_type = select_block_type_2(ctx);
  let if_block = current_block_type(ctx);
  const block = {
    c: function create() {
      div5 = element("div");
      div0 = element("div");
      t0 = text("Dust ");
      t1 = text(t1_value);
      t2 = text(" BTC");
      t3 = space();
      div1 = element("div");
      if_block.c();
      t4 = space();
      div4 = element("div");
      div2 = element("div");
      t5 = text("Fee: ");
      span0 = element("span");
      t6 = text(t6_value);
      t7 = text(" sats/kb");
      t8 = space();
      div3 = element("div");
      span1 = element("span");
      t9 = text("priority:");
      t10 = space();
      span2 = element("span");
      a0 = element("a");
      t11 = text("low");
      t12 = space();
      span3 = element("span");
      a1 = element("a");
      t13 = text("medium");
      t14 = space();
      span4 = element("span");
      a2 = element("a");
      t15 = text("high");
      this.h();
    },
    l: function claim(nodes) {
      div5 = claim_element(nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div0 = claim_element(div5_nodes, "DIV", {});
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "Dust ");
      t1 = claim_text(div0_nodes, t1_value);
      t2 = claim_text(div0_nodes, " BTC");
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(div5_nodes);
      div1 = claim_element(div5_nodes, "DIV", {});
      var div1_nodes = children(div1);
      if_block.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      t4 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div2 = claim_element(div4_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      t5 = claim_text(div2_nodes, "Fee: ");
      span0 = claim_element(div2_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t6 = claim_text(span0_nodes, t6_value);
      t7 = claim_text(span0_nodes, " sats/kb");
      span0_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t8 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {});
      var div3_nodes = children(div3);
      span1 = claim_element(div3_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t9 = claim_text(span1_nodes, "priority:");
      span1_nodes.forEach(detach_dev);
      t10 = claim_space(div3_nodes);
      span2 = claim_element(div3_nodes, "SPAN", { class: true });
      var span2_nodes = children(span2);
      a0 = claim_element(span2_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      t11 = claim_text(a0_nodes, "low");
      a0_nodes.forEach(detach_dev);
      span2_nodes.forEach(detach_dev);
      t12 = claim_space(div3_nodes);
      span3 = claim_element(div3_nodes, "SPAN", { class: true });
      var span3_nodes = children(span3);
      a1 = claim_element(span3_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      t13 = claim_text(a1_nodes, "medium");
      a1_nodes.forEach(detach_dev);
      span3_nodes.forEach(detach_dev);
      t14 = claim_space(div3_nodes);
      span4 = claim_element(div3_nodes, "SPAN", { class: true });
      var span4_nodes = children(span4);
      a2 = claim_element(span4_nodes, "A", { href: true, class: true });
      var a2_nodes = children(a2);
      t15 = claim_text(a2_nodes, "high");
      a2_nodes.forEach(detach_dev);
      span4_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(div0, file$9, 27, 2, 1292);
      add_location(div1, file$9, 28, 2, 1329);
      attr_dev(span0, "class", "text-success");
      add_location(span0, file$9, 30, 23, 1503);
      attr_dev(div2, "class", "");
      add_location(div2, file$9, 30, 4, 1484);
      attr_dev(span1, "class", "ms-5 text-white");
      add_location(span1, file$9, 32, 6, 1581);
      attr_dev(a0, "href", "/");
      attr_dev(a0, "class", a0_class_value = /*low*/
      ctx[3] ? "text-success" : "text-info");
      add_location(a0, file$9, 33, 27, 1656);
      attr_dev(span2, "class", "mx-0 ");
      add_location(span2, file$9, 33, 6, 1635);
      attr_dev(a1, "href", "/");
      attr_dev(a1, "class", a1_class_value = /*medium*/
      ctx[2] ? "text-success" : "text-info");
      add_location(a1, file$9, 34, 26, 1800);
      attr_dev(span3, "class", "mx-0");
      add_location(span3, file$9, 34, 6, 1780);
      attr_dev(a2, "href", "/");
      attr_dev(a2, "class", a2_class_value = /*high*/
      ctx[1] ? "text-success" : "text-info");
      add_location(a2, file$9, 35, 26, 1950);
      attr_dev(span4, "class", "mx-0");
      add_location(span4, file$9, 35, 6, 1930);
      add_location(div3, file$9, 31, 4, 1569);
      attr_dev(div4, "class", "d-flex justify-content-between");
      add_location(div4, file$9, 29, 2, 1435);
      attr_dev(div5, "class", "mb-5 col-12");
      add_location(div5, file$9, 26, 0, 1264);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div5, anchor);
      append_hydration_dev(div5, div0);
      append_hydration_dev(div0, t0);
      append_hydration_dev(div0, t1);
      append_hydration_dev(div0, t2);
      append_hydration_dev(div5, t3);
      append_hydration_dev(div5, div1);
      if_block.m(div1, null);
      append_hydration_dev(div5, t4);
      append_hydration_dev(div5, div4);
      append_hydration_dev(div4, div2);
      append_hydration_dev(div2, t5);
      append_hydration_dev(div2, span0);
      append_hydration_dev(span0, t6);
      append_hydration_dev(span0, t7);
      append_hydration_dev(div4, t8);
      append_hydration_dev(div4, div3);
      append_hydration_dev(div3, span1);
      append_hydration_dev(span1, t9);
      append_hydration_dev(div3, t10);
      append_hydration_dev(div3, span2);
      append_hydration_dev(span2, a0);
      append_hydration_dev(a0, t11);
      append_hydration_dev(div3, t12);
      append_hydration_dev(div3, span3);
      append_hydration_dev(span3, a1);
      append_hydration_dev(a1, t13);
      append_hydration_dev(div3, t14);
      append_hydration_dev(div3, span4);
      append_hydration_dev(span4, a2);
      append_hydration_dev(a2, t15);
      if (!mounted) {
        dispose = [
          listen_dev(a0, "click", prevent_default(
            /*click_handler_3*/
            ctx[9]
          ), false, true, false, false),
          listen_dev(a1, "click", prevent_default(
            /*click_handler_4*/
            ctx[10]
          ), false, true, false, false),
          listen_dev(a2, "click", prevent_default(
            /*click_handler_5*/
            ctx[11]
          ), false, true, false, false)
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*amtData*/
      1 && t1_value !== (t1_value = /*amtData*/
      ctx2[0].dust + ""))
        set_data_dev(t1, t1_value);
      if (current_block_type === (current_block_type = select_block_type_2(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div1, null);
        }
      }
      if (dirty & /*amtData*/
      1 && t6_value !== (t6_value = /*amtData*/
      ctx2[0].fee + ""))
        set_data_dev(t6, t6_value);
      if (dirty & /*low*/
      8 && a0_class_value !== (a0_class_value = /*low*/
      ctx2[3] ? "text-success" : "text-info")) {
        attr_dev(a0, "class", a0_class_value);
      }
      if (dirty & /*medium*/
      4 && a1_class_value !== (a1_class_value = /*medium*/
      ctx2[2] ? "text-success" : "text-info")) {
        attr_dev(a1, "class", a1_class_value);
      }
      if (dirty & /*high*/
      2 && a2_class_value !== (a2_class_value = /*high*/
      ctx2[1] ? "text-success" : "text-info")) {
        attr_dev(a2, "class", a2_class_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div5);
      if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block_1$1.name,
    type: "else",
    source: "(26:0) {:else}",
    ctx
  });
  return block;
}
function create_if_block$6(ctx) {
  let div4;
  let div0;
  let t0;
  let div3;
  let div1;
  let t1;
  let span0;
  let t2_value = (
    /*amtData*/
    ctx[0].fee + ""
  );
  let t2;
  let t3;
  let t4;
  let div2;
  let span1;
  let t5;
  let t6;
  let span2;
  let a0;
  let t7;
  let a0_class_value;
  let t8;
  let span3;
  let a1;
  let t9;
  let a1_class_value;
  let t10;
  let span4;
  let a2;
  let t11;
  let a2_class_value;
  let mounted;
  let dispose;
  function select_block_type_1(ctx2, dirty) {
    if (
      /*amtData*/
      ctx2[0].change === 0
    )
      return create_if_block_1$4;
    return create_else_block$2;
  }
  let current_block_type = select_block_type_1(ctx);
  let if_block = current_block_type(ctx);
  const block = {
    c: function create() {
      div4 = element("div");
      div0 = element("div");
      if_block.c();
      t0 = space();
      div3 = element("div");
      div1 = element("div");
      t1 = text("Fee: ");
      span0 = element("span");
      t2 = text(t2_value);
      t3 = text(" sats/kb");
      t4 = space();
      div2 = element("div");
      span1 = element("span");
      t5 = text("priority:");
      t6 = space();
      span2 = element("span");
      a0 = element("a");
      t7 = text("low");
      t8 = space();
      span3 = element("span");
      a1 = element("a");
      t9 = text("medium");
      t10 = space();
      span4 = element("span");
      a2 = element("a");
      t11 = text("high");
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", {});
      var div0_nodes = children(div0);
      if_block.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t1 = claim_text(div1_nodes, "Fee: ");
      span0 = claim_element(div1_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t2 = claim_text(span0_nodes, t2_value);
      t3 = claim_text(span0_nodes, " sats/kb");
      span0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t4 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {});
      var div2_nodes = children(div2);
      span1 = claim_element(div2_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t5 = claim_text(span1_nodes, "priority:");
      span1_nodes.forEach(detach_dev);
      t6 = claim_space(div2_nodes);
      span2 = claim_element(div2_nodes, "SPAN", { class: true });
      var span2_nodes = children(span2);
      a0 = claim_element(span2_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      t7 = claim_text(a0_nodes, "low");
      a0_nodes.forEach(detach_dev);
      span2_nodes.forEach(detach_dev);
      t8 = claim_space(div2_nodes);
      span3 = claim_element(div2_nodes, "SPAN", { class: true });
      var span3_nodes = children(span3);
      a1 = claim_element(span3_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      t9 = claim_text(a1_nodes, "medium");
      a1_nodes.forEach(detach_dev);
      span3_nodes.forEach(detach_dev);
      t10 = claim_space(div2_nodes);
      span4 = claim_element(div2_nodes, "SPAN", { class: true });
      var span4_nodes = children(span4);
      a2 = claim_element(span4_nodes, "A", { href: true, class: true });
      var a2_nodes = children(a2);
      t11 = claim_text(a2_nodes, "high");
      a2_nodes.forEach(detach_dev);
      span4_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(div0, file$9, 14, 2, 488);
      attr_dev(span0, "class", "text-success");
      add_location(span0, file$9, 16, 23, 662);
      attr_dev(div1, "class", "");
      add_location(div1, file$9, 16, 4, 643);
      attr_dev(span1, "class", "ms-5 text-white");
      add_location(span1, file$9, 18, 6, 740);
      attr_dev(a0, "href", "/");
      attr_dev(a0, "class", a0_class_value = /*low*/
      ctx[3] ? "text-success" : "text-info");
      add_location(a0, file$9, 19, 27, 815);
      attr_dev(span2, "class", "mx-0 ");
      add_location(span2, file$9, 19, 6, 794);
      attr_dev(a1, "href", "/");
      attr_dev(a1, "class", a1_class_value = /*medium*/
      ctx[2] ? "text-success" : "text-info");
      add_location(a1, file$9, 20, 26, 959);
      attr_dev(span3, "class", "mx-0");
      add_location(span3, file$9, 20, 6, 939);
      attr_dev(a2, "href", "/");
      attr_dev(a2, "class", a2_class_value = /*high*/
      ctx[1] ? "text-success" : "text-info");
      add_location(a2, file$9, 21, 26, 1109);
      attr_dev(span4, "class", "mx-0");
      add_location(span4, file$9, 21, 6, 1089);
      add_location(div2, file$9, 17, 4, 728);
      attr_dev(div3, "class", "d-flex justify-content-between");
      add_location(div3, file$9, 15, 2, 594);
      attr_dev(div4, "class", "mt-4 mb-5 col-12");
      add_location(div4, file$9, 13, 0, 455);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div4, anchor);
      append_hydration_dev(div4, div0);
      if_block.m(div0, null);
      append_hydration_dev(div4, t0);
      append_hydration_dev(div4, div3);
      append_hydration_dev(div3, div1);
      append_hydration_dev(div1, t1);
      append_hydration_dev(div1, span0);
      append_hydration_dev(span0, t2);
      append_hydration_dev(span0, t3);
      append_hydration_dev(div3, t4);
      append_hydration_dev(div3, div2);
      append_hydration_dev(div2, span1);
      append_hydration_dev(span1, t5);
      append_hydration_dev(div2, t6);
      append_hydration_dev(div2, span2);
      append_hydration_dev(span2, a0);
      append_hydration_dev(a0, t7);
      append_hydration_dev(div2, t8);
      append_hydration_dev(div2, span3);
      append_hydration_dev(span3, a1);
      append_hydration_dev(a1, t9);
      append_hydration_dev(div2, t10);
      append_hydration_dev(div2, span4);
      append_hydration_dev(span4, a2);
      append_hydration_dev(a2, t11);
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
          ), false, true, false, false)
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type_1(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div0, null);
        }
      }
      if (dirty & /*amtData*/
      1 && t2_value !== (t2_value = /*amtData*/
      ctx2[0].fee + ""))
        set_data_dev(t2, t2_value);
      if (dirty & /*low*/
      8 && a0_class_value !== (a0_class_value = /*low*/
      ctx2[3] ? "text-success" : "text-info")) {
        attr_dev(a0, "class", a0_class_value);
      }
      if (dirty & /*medium*/
      4 && a1_class_value !== (a1_class_value = /*medium*/
      ctx2[2] ? "text-success" : "text-info")) {
        attr_dev(a1, "class", a1_class_value);
      }
      if (dirty & /*high*/
      2 && a2_class_value !== (a2_class_value = /*high*/
      ctx2[1] ? "text-success" : "text-info")) {
        attr_dev(a2, "class", a2_class_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div4);
      if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$6.name,
    type: "if",
    source: "(13:0) {#if amtData.pegIn}",
    ctx
  });
  return block;
}
function create_else_block_2$1(ctx) {
  let t0;
  let t1_value = (
    /*amtData*/
    ctx[0].change + ""
  );
  let t1;
  let t2;
  const block = {
    c: function create() {
      t0 = text("Change ");
      t1 = text(t1_value);
      t2 = text(" (add change address?)");
    },
    l: function claim(nodes) {
      t0 = claim_text(nodes, "Change ");
      t1 = claim_text(nodes, t1_value);
      t2 = claim_text(nodes, " (add change address?)");
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t0, anchor);
      insert_hydration_dev(target, t1, anchor);
      insert_hydration_dev(target, t2, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*amtData*/
      1 && t1_value !== (t1_value = /*amtData*/
      ctx2[0].change + ""))
        set_data_dev(t1, t1_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(t2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block_2$1.name,
    type: "else",
    source: "(29:42) {:else}",
    ctx
  });
  return block;
}
function create_if_block_2$3(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("No change");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "No change");
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
    id: create_if_block_2$3.name,
    type: "if",
    source: "(29:7) {#if amtData.change === 0}",
    ctx
  });
  return block;
}
function create_else_block$2(ctx) {
  let t0;
  let t1_value = (
    /*amtData*/
    ctx[0].change + ""
  );
  let t1;
  let t2;
  const block = {
    c: function create() {
      t0 = text("Change ");
      t1 = text(t1_value);
      t2 = text(" (add change address?)");
    },
    l: function claim(nodes) {
      t0 = claim_text(nodes, "Change ");
      t1 = claim_text(nodes, t1_value);
      t2 = claim_text(nodes, " (add change address?)");
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t0, anchor);
      insert_hydration_dev(target, t1, anchor);
      insert_hydration_dev(target, t2, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*amtData*/
      1 && t1_value !== (t1_value = /*amtData*/
      ctx2[0].change + ""))
        set_data_dev(t1, t1_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(t2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block$2.name,
    type: "else",
    source: "(15:42) {:else}",
    ctx
  });
  return block;
}
function create_if_block_1$4(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("No change");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "No change");
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
    id: create_if_block_1$4.name,
    type: "if",
    source: "(15:7) {#if amtData.change === 0}",
    ctx
  });
  return block;
}
function create_fragment$9(ctx) {
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    if (
      /*amtData*/
      ctx2[0].pegIn
    )
      return create_if_block$6;
    return create_else_block_1$1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
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
      if_block.m(target, anchor);
      insert_hydration_dev(target, if_block_anchor, anchor);
    },
    p: function update(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$9.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$9($$self, $$props, $$invalidate) {
  let low;
  let medium;
  let high;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("FeeDisplay", slots, []);
  const dispatch = createEventDispatcher();
  let { amtData } = $$props;
  let { currentPeg } = $$props;
  const changeRate = (rate) => {
    dispatch("fee_rate_updated", {
      opCode: "prio",
      error: false,
      newAmount: currentPeg,
      newFeeRate: rate
    });
  };
  $$self.$$.on_mount.push(function() {
    if (amtData === void 0 && !("amtData" in $$props || $$self.$$.bound[$$self.$$.props["amtData"]])) {
      console.warn("<FeeDisplay> was created without expected prop 'amtData'");
    }
    if (currentPeg === void 0 && !("currentPeg" in $$props || $$self.$$.bound[$$self.$$.props["currentPeg"]])) {
      console.warn("<FeeDisplay> was created without expected prop 'currentPeg'");
    }
  });
  const writable_props = ["amtData", "currentPeg"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<FeeDisplay> was created with unknown prop '${key}'`);
  });
  const click_handler = () => changeRate(0);
  const click_handler_1 = () => changeRate(1);
  const click_handler_2 = () => changeRate(2);
  const click_handler_3 = () => changeRate(0);
  const click_handler_4 = () => changeRate(1);
  const click_handler_5 = () => changeRate(2);
  $$self.$$set = ($$props2) => {
    if ("amtData" in $$props2)
      $$invalidate(0, amtData = $$props2.amtData);
    if ("currentPeg" in $$props2)
      $$invalidate(5, currentPeg = $$props2.currentPeg);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    dispatch,
    amtData,
    currentPeg,
    changeRate,
    high,
    medium,
    low
  });
  $$self.$inject_state = ($$props2) => {
    if ("amtData" in $$props2)
      $$invalidate(0, amtData = $$props2.amtData);
    if ("currentPeg" in $$props2)
      $$invalidate(5, currentPeg = $$props2.currentPeg);
    if ("high" in $$props2)
      $$invalidate(1, high = $$props2.high);
    if ("medium" in $$props2)
      $$invalidate(2, medium = $$props2.medium);
    if ("low" in $$props2)
      $$invalidate(3, low = $$props2.low);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*amtData*/
    1) {
      $$invalidate(3, low = amtData.fee === amtData.fees[0]);
    }
    if ($$self.$$.dirty & /*amtData*/
    1) {
      $$invalidate(2, medium = amtData.fee === amtData.fees[1]);
    }
    if ($$self.$$.dirty & /*amtData*/
    1) {
      $$invalidate(1, high = amtData.fee === amtData.fees[2]);
    }
  };
  return [
    amtData,
    high,
    medium,
    low,
    changeRate,
    currentPeg,
    click_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3,
    click_handler_4,
    click_handler_5
  ];
}
class FeeDisplay extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$9, create_fragment$9, safe_not_equal, { amtData: 0, currentPeg: 5 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "FeeDisplay",
      options,
      id: create_fragment$9.name
    });
  }
  get amtData() {
    throw new Error("<FeeDisplay>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set amtData(value) {
    throw new Error("<FeeDisplay>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get currentPeg() {
    throw new Error("<FeeDisplay>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set currentPeg(value) {
    throw new Error("<FeeDisplay>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
var assertExports$1 = {};
var assert$1 = {
  get exports() {
    return assertExports$1;
  },
  set exports(v) {
    assertExports$1 = v;
  }
};
var errors = {};
var util = {};
var types = {};
var shams$1 = function hasSymbols() {
  if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
    return false;
  }
  if (typeof Symbol.iterator === "symbol") {
    return true;
  }
  var obj = {};
  var sym = Symbol("test");
  var symObj = Object(sym);
  if (typeof sym === "string") {
    return false;
  }
  if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
    return false;
  }
  if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
    return false;
  }
  var symVal = 42;
  obj[sym] = symVal;
  for (sym in obj) {
    return false;
  }
  if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
    return false;
  }
  if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
    return false;
  }
  var syms = Object.getOwnPropertySymbols(obj);
  if (syms.length !== 1 || syms[0] !== sym) {
    return false;
  }
  if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
    return false;
  }
  if (typeof Object.getOwnPropertyDescriptor === "function") {
    var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
    if (descriptor.value !== symVal || descriptor.enumerable !== true) {
      return false;
    }
  }
  return true;
};
var hasSymbols$2 = shams$1;
var shams = function hasToStringTagShams() {
  return hasSymbols$2() && !!Symbol.toStringTag;
};
var origSymbol = typeof Symbol !== "undefined" && Symbol;
var hasSymbolSham = shams$1;
var hasSymbols$1 = function hasNativeSymbols() {
  if (typeof origSymbol !== "function") {
    return false;
  }
  if (typeof Symbol !== "function") {
    return false;
  }
  if (typeof origSymbol("foo") !== "symbol") {
    return false;
  }
  if (typeof Symbol("bar") !== "symbol") {
    return false;
  }
  return hasSymbolSham();
};
var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
var slice = Array.prototype.slice;
var toStr$3 = Object.prototype.toString;
var funcType = "[object Function]";
var implementation$4 = function bind(that) {
  var target = this;
  if (typeof target !== "function" || toStr$3.call(target) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + target);
  }
  var args = slice.call(arguments, 1);
  var bound;
  var binder = function() {
    if (this instanceof bound) {
      var result = target.apply(
        this,
        args.concat(slice.call(arguments))
      );
      if (Object(result) === result) {
        return result;
      }
      return this;
    } else {
      return target.apply(
        that,
        args.concat(slice.call(arguments))
      );
    }
  };
  var boundLength = Math.max(0, target.length - args.length);
  var boundArgs = [];
  for (var i = 0; i < boundLength; i++) {
    boundArgs.push("$" + i);
  }
  bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
  if (target.prototype) {
    var Empty = function Empty2() {
    };
    Empty.prototype = target.prototype;
    bound.prototype = new Empty();
    Empty.prototype = null;
  }
  return bound;
};
var implementation$3 = implementation$4;
var functionBind = Function.prototype.bind || implementation$3;
var bind$1 = functionBind;
var src = bind$1.call(Function.call, Object.prototype.hasOwnProperty);
var undefined$1;
var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;
var getEvalledConstructor = function(expressionSyntax) {
  try {
    return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
  } catch (e) {
  }
};
var $gOPD$1 = Object.getOwnPropertyDescriptor;
if ($gOPD$1) {
  try {
    $gOPD$1({}, "");
  } catch (e) {
    $gOPD$1 = null;
  }
}
var throwTypeError = function() {
  throw new $TypeError();
};
var ThrowTypeError = $gOPD$1 ? function() {
  try {
    arguments.callee;
    return throwTypeError;
  } catch (calleeThrows) {
    try {
      return $gOPD$1(arguments, "callee").get;
    } catch (gOPDthrows) {
      return throwTypeError;
    }
  }
}() : throwTypeError;
var hasSymbols2 = hasSymbols$1();
var getProto$1 = Object.getPrototypeOf || function(x) {
  return x.__proto__;
};
var needsEval = {};
var TypedArray = typeof Uint8Array === "undefined" ? undefined$1 : getProto$1(Uint8Array);
var INTRINSICS = {
  "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
  "%ArrayIteratorPrototype%": hasSymbols2 ? getProto$1([][Symbol.iterator]()) : undefined$1,
  "%AsyncFromSyncIteratorPrototype%": undefined$1,
  "%AsyncFunction%": needsEval,
  "%AsyncGenerator%": needsEval,
  "%AsyncGeneratorFunction%": needsEval,
  "%AsyncIteratorPrototype%": needsEval,
  "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
  "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
  "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined$1 : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined$1 : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
  "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
  "%Function%": $Function,
  "%GeneratorFunction%": needsEval,
  "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
  "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
  "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": hasSymbols2 ? getProto$1(getProto$1([][Symbol.iterator]())) : undefined$1,
  "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
  "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
  "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols2 ? undefined$1 : getProto$1((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
  "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
  "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols2 ? undefined$1 : getProto$1((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": hasSymbols2 ? getProto$1(""[Symbol.iterator]()) : undefined$1,
  "%Symbol%": hasSymbols2 ? Symbol : undefined$1,
  "%SyntaxError%": $SyntaxError,
  "%ThrowTypeError%": ThrowTypeError,
  "%TypedArray%": TypedArray,
  "%TypeError%": $TypeError,
  "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
  "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
  "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
  "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet
};
try {
  null.error;
} catch (e) {
  var errorProto = getProto$1(getProto$1(e));
  INTRINSICS["%Error.prototype%"] = errorProto;
}
var doEval = function doEval2(name) {
  var value;
  if (name === "%AsyncFunction%") {
    value = getEvalledConstructor("async function () {}");
  } else if (name === "%GeneratorFunction%") {
    value = getEvalledConstructor("function* () {}");
  } else if (name === "%AsyncGeneratorFunction%") {
    value = getEvalledConstructor("async function* () {}");
  } else if (name === "%AsyncGenerator%") {
    var fn = doEval2("%AsyncGeneratorFunction%");
    if (fn) {
      value = fn.prototype;
    }
  } else if (name === "%AsyncIteratorPrototype%") {
    var gen = doEval2("%AsyncGenerator%");
    if (gen) {
      value = getProto$1(gen.prototype);
    }
  }
  INTRINSICS[name] = value;
  return value;
};
var LEGACY_ALIASES = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
};
var bind2 = functionBind;
var hasOwn = src;
var $concat = bind2.call(Function.call, Array.prototype.concat);
var $spliceApply = bind2.call(Function.apply, Array.prototype.splice);
var $replace = bind2.call(Function.call, String.prototype.replace);
var $strSlice = bind2.call(Function.call, String.prototype.slice);
var $exec = bind2.call(Function.call, RegExp.prototype.exec);
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = function stringToPath2(string) {
  var first = $strSlice(string, 0, 1);
  var last = $strSlice(string, -1);
  if (first === "%" && last !== "%") {
    throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
  } else if (last === "%" && first !== "%") {
    throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
  }
  var result = [];
  $replace(string, rePropName, function(match, number, quote, subString) {
    result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
  });
  return result;
};
var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
  var intrinsicName = name;
  var alias;
  if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
    alias = LEGACY_ALIASES[intrinsicName];
    intrinsicName = "%" + alias[0] + "%";
  }
  if (hasOwn(INTRINSICS, intrinsicName)) {
    var value = INTRINSICS[intrinsicName];
    if (value === needsEval) {
      value = doEval(intrinsicName);
    }
    if (typeof value === "undefined" && !allowMissing) {
      throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
    }
    return {
      alias,
      name: intrinsicName,
      value
    };
  }
  throw new $SyntaxError("intrinsic " + name + " does not exist!");
};
var getIntrinsic = function GetIntrinsic(name, allowMissing) {
  if (typeof name !== "string" || name.length === 0) {
    throw new $TypeError("intrinsic name must be a non-empty string");
  }
  if (arguments.length > 1 && typeof allowMissing !== "boolean") {
    throw new $TypeError('"allowMissing" argument must be a boolean');
  }
  if ($exec(/^%?[^%]*%?$/, name) === null) {
    throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  }
  var parts = stringToPath(name);
  var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
  var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
  var intrinsicRealName = intrinsic.name;
  var value = intrinsic.value;
  var skipFurtherCaching = false;
  var alias = intrinsic.alias;
  if (alias) {
    intrinsicBaseName = alias[0];
    $spliceApply(parts, $concat([0, 1], alias));
  }
  for (var i = 1, isOwn = true; i < parts.length; i += 1) {
    var part = parts[i];
    var first = $strSlice(part, 0, 1);
    var last = $strSlice(part, -1);
    if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
      throw new $SyntaxError("property names with quotes must have matching quotes");
    }
    if (part === "constructor" || !isOwn) {
      skipFurtherCaching = true;
    }
    intrinsicBaseName += "." + part;
    intrinsicRealName = "%" + intrinsicBaseName + "%";
    if (hasOwn(INTRINSICS, intrinsicRealName)) {
      value = INTRINSICS[intrinsicRealName];
    } else if (value != null) {
      if (!(part in value)) {
        if (!allowMissing) {
          throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
        }
        return void 0;
      }
      if ($gOPD$1 && i + 1 >= parts.length) {
        var desc = $gOPD$1(value, part);
        isOwn = !!desc;
        if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
          value = desc.get;
        } else {
          value = value[part];
        }
      } else {
        isOwn = hasOwn(value, part);
        value = value[part];
      }
      if (isOwn && !skipFurtherCaching) {
        INTRINSICS[intrinsicRealName] = value;
      }
    }
  }
  return value;
};
var callBindExports = {};
var callBind$1 = {
  get exports() {
    return callBindExports;
  },
  set exports(v) {
    callBindExports = v;
  }
};
(function(module) {
  var bind3 = functionBind;
  var GetIntrinsic3 = getIntrinsic;
  var $apply = GetIntrinsic3("%Function.prototype.apply%");
  var $call = GetIntrinsic3("%Function.prototype.call%");
  var $reflectApply = GetIntrinsic3("%Reflect.apply%", true) || bind3.call($call, $apply);
  var $gOPD2 = GetIntrinsic3("%Object.getOwnPropertyDescriptor%", true);
  var $defineProperty = GetIntrinsic3("%Object.defineProperty%", true);
  var $max = GetIntrinsic3("%Math.max%");
  if ($defineProperty) {
    try {
      $defineProperty({}, "a", { value: 1 });
    } catch (e) {
      $defineProperty = null;
    }
  }
  module.exports = function callBind2(originalFunction) {
    var func = $reflectApply(bind3, $call, arguments);
    if ($gOPD2 && $defineProperty) {
      var desc = $gOPD2(func, "length");
      if (desc.configurable) {
        $defineProperty(
          func,
          "length",
          { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
        );
      }
    }
    return func;
  };
  var applyBind = function applyBind2() {
    return $reflectApply(bind3, $apply, arguments);
  };
  if ($defineProperty) {
    $defineProperty(module.exports, "apply", { value: applyBind });
  } else {
    module.exports.apply = applyBind;
  }
})(callBind$1);
var GetIntrinsic$1 = getIntrinsic;
var callBind = callBindExports;
var $indexOf$1 = callBind(GetIntrinsic$1("String.prototype.indexOf"));
var callBound$3 = function callBoundIntrinsic(name, allowMissing) {
  var intrinsic = GetIntrinsic$1(name, !!allowMissing);
  if (typeof intrinsic === "function" && $indexOf$1(name, ".prototype.") > -1) {
    return callBind(intrinsic);
  }
  return intrinsic;
};
var hasToStringTag$4 = shams();
var callBound$2 = callBound$3;
var $toString$2 = callBound$2("Object.prototype.toString");
var isStandardArguments = function isArguments(value) {
  if (hasToStringTag$4 && value && typeof value === "object" && Symbol.toStringTag in value) {
    return false;
  }
  return $toString$2(value) === "[object Arguments]";
};
var isLegacyArguments = function isArguments2(value) {
  if (isStandardArguments(value)) {
    return true;
  }
  return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString$2(value) !== "[object Array]" && $toString$2(value.callee) === "[object Function]";
};
var supportsStandardArguments = function() {
  return isStandardArguments(arguments);
}();
isStandardArguments.isLegacyArguments = isLegacyArguments;
var isArguments$1 = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
var toStr$2 = Object.prototype.toString;
var fnToStr$1 = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;
var hasToStringTag$3 = shams();
var getProto = Object.getPrototypeOf;
var getGeneratorFunc = function() {
  if (!hasToStringTag$3) {
    return false;
  }
  try {
    return Function("return function*() {}")();
  } catch (e) {
  }
};
var GeneratorFunction;
var isGeneratorFunction = function isGeneratorFunction2(fn) {
  if (typeof fn !== "function") {
    return false;
  }
  if (isFnRegex.test(fnToStr$1.call(fn))) {
    return true;
  }
  if (!hasToStringTag$3) {
    var str = toStr$2.call(fn);
    return str === "[object GeneratorFunction]";
  }
  if (!getProto) {
    return false;
  }
  if (typeof GeneratorFunction === "undefined") {
    var generatorFunc = getGeneratorFunc();
    GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
  }
  return getProto(fn) === GeneratorFunction;
};
var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
  try {
    badArrayLike = Object.defineProperty({}, "length", {
      get: function() {
        throw isCallableMarker;
      }
    });
    isCallableMarker = {};
    reflectApply(function() {
      throw 42;
    }, null, badArrayLike);
  } catch (_) {
    if (_ !== isCallableMarker) {
      reflectApply = null;
    }
  }
} else {
  reflectApply = null;
}
var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
  try {
    var fnStr = fnToStr.call(value);
    return constructorRegex.test(fnStr);
  } catch (e) {
    return false;
  }
};
var tryFunctionObject = function tryFunctionToStr(value) {
  try {
    if (isES6ClassFn(value)) {
      return false;
    }
    fnToStr.call(value);
    return true;
  } catch (e) {
    return false;
  }
};
var toStr$1 = Object.prototype.toString;
var objectClass = "[object Object]";
var fnClass = "[object Function]";
var genClass = "[object GeneratorFunction]";
var ddaClass = "[object HTMLAllCollection]";
var ddaClass2 = "[object HTML document.all class]";
var ddaClass3 = "[object HTMLCollection]";
var hasToStringTag$2 = typeof Symbol === "function" && !!Symbol.toStringTag;
var isIE68 = !(0 in [,]);
var isDDA = function isDocumentDotAll() {
  return false;
};
if (typeof document === "object") {
  var all = document.all;
  if (toStr$1.call(all) === toStr$1.call(document.all)) {
    isDDA = function isDocumentDotAll2(value) {
      if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
        try {
          var str = toStr$1.call(value);
          return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
        } catch (e) {
        }
      }
      return false;
    };
  }
}
var isCallable$1 = reflectApply ? function isCallable(value) {
  if (isDDA(value)) {
    return true;
  }
  if (!value) {
    return false;
  }
  if (typeof value !== "function" && typeof value !== "object") {
    return false;
  }
  try {
    reflectApply(value, null, badArrayLike);
  } catch (e) {
    if (e !== isCallableMarker) {
      return false;
    }
  }
  return !isES6ClassFn(value) && tryFunctionObject(value);
} : function isCallable2(value) {
  if (isDDA(value)) {
    return true;
  }
  if (!value) {
    return false;
  }
  if (typeof value !== "function" && typeof value !== "object") {
    return false;
  }
  if (hasToStringTag$2) {
    return tryFunctionObject(value);
  }
  if (isES6ClassFn(value)) {
    return false;
  }
  var strClass = toStr$1.call(value);
  if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
    return false;
  }
  return tryFunctionObject(value);
};
var isCallable3 = isCallable$1;
var toStr = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var forEachArray = function forEachArray2(array, iterator, receiver) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (hasOwnProperty.call(array, i)) {
      if (receiver == null) {
        iterator(array[i], i, array);
      } else {
        iterator.call(receiver, array[i], i, array);
      }
    }
  }
};
var forEachString = function forEachString2(string, iterator, receiver) {
  for (var i = 0, len = string.length; i < len; i++) {
    if (receiver == null) {
      iterator(string.charAt(i), i, string);
    } else {
      iterator.call(receiver, string.charAt(i), i, string);
    }
  }
};
var forEachObject = function forEachObject2(object, iterator, receiver) {
  for (var k in object) {
    if (hasOwnProperty.call(object, k)) {
      if (receiver == null) {
        iterator(object[k], k, object);
      } else {
        iterator.call(receiver, object[k], k, object);
      }
    }
  }
};
var forEach$2 = function forEach(list, iterator, thisArg) {
  if (!isCallable3(iterator)) {
    throw new TypeError("iterator must be a function");
  }
  var receiver;
  if (arguments.length >= 3) {
    receiver = thisArg;
  }
  if (toStr.call(list) === "[object Array]") {
    forEachArray(list, iterator, receiver);
  } else if (typeof list === "string") {
    forEachString(list, iterator, receiver);
  } else {
    forEachObject(list, iterator, receiver);
  }
};
var forEach_1 = forEach$2;
var possibleNames = [
  "BigInt64Array",
  "BigUint64Array",
  "Float32Array",
  "Float64Array",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Uint16Array",
  "Uint32Array",
  "Uint8Array",
  "Uint8ClampedArray"
];
var g$2 = typeof globalThis === "undefined" ? commonjsGlobal : globalThis;
var availableTypedArrays$2 = function availableTypedArrays() {
  var out = [];
  for (var i = 0; i < possibleNames.length; i++) {
    if (typeof g$2[possibleNames[i]] === "function") {
      out[out.length] = possibleNames[i];
    }
  }
  return out;
};
var GetIntrinsic2 = getIntrinsic;
var $gOPD = GetIntrinsic2("%Object.getOwnPropertyDescriptor%", true);
if ($gOPD) {
  try {
    $gOPD([], "length");
  } catch (e) {
    $gOPD = null;
  }
}
var gopd = $gOPD;
var forEach$1 = forEach_1;
var availableTypedArrays$1 = availableTypedArrays$2;
var callBound$1 = callBound$3;
var $toString$1 = callBound$1("Object.prototype.toString");
var hasToStringTag$1 = shams();
var gOPD$1 = gopd;
var g$1 = typeof globalThis === "undefined" ? commonjsGlobal : globalThis;
var typedArrays$1 = availableTypedArrays$1();
var $indexOf = callBound$1("Array.prototype.indexOf", true) || function indexOf(array, value) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};
var $slice$1 = callBound$1("String.prototype.slice");
var toStrTags$1 = {};
var getPrototypeOf$1 = Object.getPrototypeOf;
if (hasToStringTag$1 && gOPD$1 && getPrototypeOf$1) {
  forEach$1(typedArrays$1, function(typedArray) {
    var arr = new g$1[typedArray]();
    if (Symbol.toStringTag in arr) {
      var proto = getPrototypeOf$1(arr);
      var descriptor = gOPD$1(proto, Symbol.toStringTag);
      if (!descriptor) {
        var superProto = getPrototypeOf$1(proto);
        descriptor = gOPD$1(superProto, Symbol.toStringTag);
      }
      toStrTags$1[typedArray] = descriptor.get;
    }
  });
}
var tryTypedArrays$1 = function tryAllTypedArrays(value) {
  var anyTrue = false;
  forEach$1(toStrTags$1, function(getter, typedArray) {
    if (!anyTrue) {
      try {
        anyTrue = getter.call(value) === typedArray;
      } catch (e) {
      }
    }
  });
  return anyTrue;
};
var isTypedArray$1 = function isTypedArray(value) {
  if (!value || typeof value !== "object") {
    return false;
  }
  if (!hasToStringTag$1 || !(Symbol.toStringTag in value)) {
    var tag = $slice$1($toString$1(value), 8, -1);
    return $indexOf(typedArrays$1, tag) > -1;
  }
  if (!gOPD$1) {
    return false;
  }
  return tryTypedArrays$1(value);
};
var forEach2 = forEach_1;
var availableTypedArrays2 = availableTypedArrays$2;
var callBound = callBound$3;
var gOPD = gopd;
var $toString = callBound("Object.prototype.toString");
var hasToStringTag = shams();
var g = typeof globalThis === "undefined" ? commonjsGlobal : globalThis;
var typedArrays = availableTypedArrays2();
var $slice = callBound("String.prototype.slice");
var toStrTags = {};
var getPrototypeOf = Object.getPrototypeOf;
if (hasToStringTag && gOPD && getPrototypeOf) {
  forEach2(typedArrays, function(typedArray) {
    if (typeof g[typedArray] === "function") {
      var arr = new g[typedArray]();
      if (Symbol.toStringTag in arr) {
        var proto = getPrototypeOf(arr);
        var descriptor = gOPD(proto, Symbol.toStringTag);
        if (!descriptor) {
          var superProto = getPrototypeOf(proto);
          descriptor = gOPD(superProto, Symbol.toStringTag);
        }
        toStrTags[typedArray] = descriptor.get;
      }
    }
  });
}
var tryTypedArrays = function tryAllTypedArrays2(value) {
  var foundName = false;
  forEach2(toStrTags, function(getter, typedArray) {
    if (!foundName) {
      try {
        var name = getter.call(value);
        if (name === typedArray) {
          foundName = name;
        }
      } catch (e) {
      }
    }
  });
  return foundName;
};
var isTypedArray2 = isTypedArray$1;
var whichTypedArray = function whichTypedArray2(value) {
  if (!isTypedArray2(value)) {
    return false;
  }
  if (!hasToStringTag || !(Symbol.toStringTag in value)) {
    return $slice($toString(value), 8, -1);
  }
  return tryTypedArrays(value);
};
(function(exports) {
  var isArgumentsObject = isArguments$1;
  var isGeneratorFunction$1 = isGeneratorFunction;
  var whichTypedArray$1 = whichTypedArray;
  var isTypedArray3 = isTypedArray$1;
  function uncurryThis(f) {
    return f.call.bind(f);
  }
  var BigIntSupported = typeof BigInt !== "undefined";
  var SymbolSupported = typeof Symbol !== "undefined";
  var ObjectToString = uncurryThis(Object.prototype.toString);
  var numberValue = uncurryThis(Number.prototype.valueOf);
  var stringValue = uncurryThis(String.prototype.valueOf);
  var booleanValue = uncurryThis(Boolean.prototype.valueOf);
  if (BigIntSupported) {
    var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
  }
  if (SymbolSupported) {
    var symbolValue = uncurryThis(Symbol.prototype.valueOf);
  }
  function checkBoxedPrimitive(value, prototypeValueOf) {
    if (typeof value !== "object") {
      return false;
    }
    try {
      prototypeValueOf(value);
      return true;
    } catch (e) {
      return false;
    }
  }
  exports.isArgumentsObject = isArgumentsObject;
  exports.isGeneratorFunction = isGeneratorFunction$1;
  exports.isTypedArray = isTypedArray3;
  function isPromise(input) {
    return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
  }
  exports.isPromise = isPromise;
  function isArrayBufferView(value) {
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      return ArrayBuffer.isView(value);
    }
    return isTypedArray3(value) || isDataView(value);
  }
  exports.isArrayBufferView = isArrayBufferView;
  function isUint8Array(value) {
    return whichTypedArray$1(value) === "Uint8Array";
  }
  exports.isUint8Array = isUint8Array;
  function isUint8ClampedArray(value) {
    return whichTypedArray$1(value) === "Uint8ClampedArray";
  }
  exports.isUint8ClampedArray = isUint8ClampedArray;
  function isUint16Array(value) {
    return whichTypedArray$1(value) === "Uint16Array";
  }
  exports.isUint16Array = isUint16Array;
  function isUint32Array(value) {
    return whichTypedArray$1(value) === "Uint32Array";
  }
  exports.isUint32Array = isUint32Array;
  function isInt8Array(value) {
    return whichTypedArray$1(value) === "Int8Array";
  }
  exports.isInt8Array = isInt8Array;
  function isInt16Array(value) {
    return whichTypedArray$1(value) === "Int16Array";
  }
  exports.isInt16Array = isInt16Array;
  function isInt32Array(value) {
    return whichTypedArray$1(value) === "Int32Array";
  }
  exports.isInt32Array = isInt32Array;
  function isFloat32Array(value) {
    return whichTypedArray$1(value) === "Float32Array";
  }
  exports.isFloat32Array = isFloat32Array;
  function isFloat64Array(value) {
    return whichTypedArray$1(value) === "Float64Array";
  }
  exports.isFloat64Array = isFloat64Array;
  function isBigInt64Array(value) {
    return whichTypedArray$1(value) === "BigInt64Array";
  }
  exports.isBigInt64Array = isBigInt64Array;
  function isBigUint64Array(value) {
    return whichTypedArray$1(value) === "BigUint64Array";
  }
  exports.isBigUint64Array = isBigUint64Array;
  function isMapToString(value) {
    return ObjectToString(value) === "[object Map]";
  }
  isMapToString.working = typeof Map !== "undefined" && isMapToString(/* @__PURE__ */ new Map());
  function isMap(value) {
    if (typeof Map === "undefined") {
      return false;
    }
    return isMapToString.working ? isMapToString(value) : value instanceof Map;
  }
  exports.isMap = isMap;
  function isSetToString(value) {
    return ObjectToString(value) === "[object Set]";
  }
  isSetToString.working = typeof Set !== "undefined" && isSetToString(/* @__PURE__ */ new Set());
  function isSet(value) {
    if (typeof Set === "undefined") {
      return false;
    }
    return isSetToString.working ? isSetToString(value) : value instanceof Set;
  }
  exports.isSet = isSet;
  function isWeakMapToString(value) {
    return ObjectToString(value) === "[object WeakMap]";
  }
  isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(/* @__PURE__ */ new WeakMap());
  function isWeakMap(value) {
    if (typeof WeakMap === "undefined") {
      return false;
    }
    return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
  }
  exports.isWeakMap = isWeakMap;
  function isWeakSetToString(value) {
    return ObjectToString(value) === "[object WeakSet]";
  }
  isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(/* @__PURE__ */ new WeakSet());
  function isWeakSet(value) {
    return isWeakSetToString(value);
  }
  exports.isWeakSet = isWeakSet;
  function isArrayBufferToString(value) {
    return ObjectToString(value) === "[object ArrayBuffer]";
  }
  isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
  function isArrayBuffer(value) {
    if (typeof ArrayBuffer === "undefined") {
      return false;
    }
    return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
  }
  exports.isArrayBuffer = isArrayBuffer;
  function isDataViewToString(value) {
    return ObjectToString(value) === "[object DataView]";
  }
  isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
  function isDataView(value) {
    if (typeof DataView === "undefined") {
      return false;
    }
    return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
  }
  exports.isDataView = isDataView;
  var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : void 0;
  function isSharedArrayBufferToString(value) {
    return ObjectToString(value) === "[object SharedArrayBuffer]";
  }
  function isSharedArrayBuffer(value) {
    if (typeof SharedArrayBufferCopy === "undefined") {
      return false;
    }
    if (typeof isSharedArrayBufferToString.working === "undefined") {
      isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
    }
    return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
  }
  exports.isSharedArrayBuffer = isSharedArrayBuffer;
  function isAsyncFunction(value) {
    return ObjectToString(value) === "[object AsyncFunction]";
  }
  exports.isAsyncFunction = isAsyncFunction;
  function isMapIterator(value) {
    return ObjectToString(value) === "[object Map Iterator]";
  }
  exports.isMapIterator = isMapIterator;
  function isSetIterator(value) {
    return ObjectToString(value) === "[object Set Iterator]";
  }
  exports.isSetIterator = isSetIterator;
  function isGeneratorObject(value) {
    return ObjectToString(value) === "[object Generator]";
  }
  exports.isGeneratorObject = isGeneratorObject;
  function isWebAssemblyCompiledModule(value) {
    return ObjectToString(value) === "[object WebAssembly.Module]";
  }
  exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
  function isNumberObject(value) {
    return checkBoxedPrimitive(value, numberValue);
  }
  exports.isNumberObject = isNumberObject;
  function isStringObject(value) {
    return checkBoxedPrimitive(value, stringValue);
  }
  exports.isStringObject = isStringObject;
  function isBooleanObject(value) {
    return checkBoxedPrimitive(value, booleanValue);
  }
  exports.isBooleanObject = isBooleanObject;
  function isBigIntObject(value) {
    return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
  }
  exports.isBigIntObject = isBigIntObject;
  function isSymbolObject(value) {
    return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
  }
  exports.isSymbolObject = isSymbolObject;
  function isBoxedPrimitive(value) {
    return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
  }
  exports.isBoxedPrimitive = isBoxedPrimitive;
  function isAnyArrayBuffer(value) {
    return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
  }
  exports.isAnyArrayBuffer = isAnyArrayBuffer;
  ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(method) {
    Object.defineProperty(exports, method, {
      enumerable: false,
      value: function() {
        throw new Error(method + " is not supported in userland");
      }
    });
  });
})(types);
var isBufferBrowser = function isBuffer(arg) {
  return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
};
var inherits_browserExports = {};
var inherits_browser = {
  get exports() {
    return inherits_browserExports;
  },
  set exports(v) {
    inherits_browserExports = v;
  }
};
if (typeof Object.create === "function") {
  inherits_browser.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  inherits_browser.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {
      };
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}
(function(exports) {
  var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };
  var formatRegExp = /%[sdj%]/g;
  exports.format = function(f) {
    if (!isString(f)) {
      var objects = [];
      for (var i = 0; i < arguments.length; i++) {
        objects.push(inspect(arguments[i]));
      }
      return objects.join(" ");
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function(x2) {
      if (x2 === "%%")
        return "%";
      if (i >= len)
        return x2;
      switch (x2) {
        case "%s":
          return String(args[i++]);
        case "%d":
          return Number(args[i++]);
        case "%j":
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return "[Circular]";
          }
        default:
          return x2;
      }
    });
    for (var x = args[i]; i < len; x = args[++i]) {
      if (isNull(x) || !isObject(x)) {
        str += " " + x;
      } else {
        str += " " + inspect(x);
      }
    }
    return str;
  };
  exports.deprecate = function(fn, msg) {
    if (typeof process !== "undefined" && process.noDeprecation === true) {
      return fn;
    }
    if (typeof process === "undefined") {
      return function() {
        return exports.deprecate(fn, msg).apply(this, arguments);
      };
    }
    var warned = false;
    function deprecated() {
      if (!warned) {
        if (process.throwDeprecation) {
          throw new Error(msg);
        } else if (process.traceDeprecation) {
          console.trace(msg);
        } else {
          console.error(msg);
        }
        warned = true;
      }
      return fn.apply(this, arguments);
    }
    return deprecated;
  };
  var debugs = {};
  var debugEnvRegex = /^$/;
  if ({}.NODE_DEBUG) {
    var debugEnv = {}.NODE_DEBUG;
    debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
    debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
  }
  exports.debuglog = function(set) {
    set = set.toUpperCase();
    if (!debugs[set]) {
      if (debugEnvRegex.test(set)) {
        var pid = process.pid;
        debugs[set] = function() {
          var msg = exports.format.apply(exports, arguments);
          console.error("%s %d: %s", set, pid, msg);
        };
      } else {
        debugs[set] = function() {
        };
      }
    }
    return debugs[set];
  };
  function inspect(obj, opts) {
    var ctx = {
      seen: [],
      stylize: stylizeNoColor
    };
    if (arguments.length >= 3)
      ctx.depth = arguments[2];
    if (arguments.length >= 4)
      ctx.colors = arguments[3];
    if (isBoolean(opts)) {
      ctx.showHidden = opts;
    } else if (opts) {
      exports._extend(ctx, opts);
    }
    if (isUndefined(ctx.showHidden))
      ctx.showHidden = false;
    if (isUndefined(ctx.depth))
      ctx.depth = 2;
    if (isUndefined(ctx.colors))
      ctx.colors = false;
    if (isUndefined(ctx.customInspect))
      ctx.customInspect = true;
    if (ctx.colors)
      ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
  }
  exports.inspect = inspect;
  inspect.colors = {
    "bold": [1, 22],
    "italic": [3, 23],
    "underline": [4, 24],
    "inverse": [7, 27],
    "white": [37, 39],
    "grey": [90, 39],
    "black": [30, 39],
    "blue": [34, 39],
    "cyan": [36, 39],
    "green": [32, 39],
    "magenta": [35, 39],
    "red": [31, 39],
    "yellow": [33, 39]
  };
  inspect.styles = {
    "special": "cyan",
    "number": "yellow",
    "boolean": "yellow",
    "undefined": "grey",
    "null": "bold",
    "string": "green",
    "date": "magenta",
    // "name": intentionally not styling
    "regexp": "red"
  };
  function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];
    if (style) {
      return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
    } else {
      return str;
    }
  }
  function stylizeNoColor(str, styleType) {
    return str;
  }
  function arrayToHash(array) {
    var hash = {};
    array.forEach(function(val, idx) {
      hash[val] = true;
    });
    return hash;
  }
  function formatValue(ctx, value, recurseTimes) {
    if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
      var ret = value.inspect(recurseTimes, ctx);
      if (!isString(ret)) {
        ret = formatValue(ctx, ret, recurseTimes);
      }
      return ret;
    }
    var primitive = formatPrimitive(ctx, value);
    if (primitive) {
      return primitive;
    }
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);
    if (ctx.showHidden) {
      keys = Object.getOwnPropertyNames(value);
    }
    if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
      return formatError(value);
    }
    if (keys.length === 0) {
      if (isFunction(value)) {
        var name = value.name ? ": " + value.name : "";
        return ctx.stylize("[Function" + name + "]", "special");
      }
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
      }
      if (isDate(value)) {
        return ctx.stylize(Date.prototype.toString.call(value), "date");
      }
      if (isError(value)) {
        return formatError(value);
      }
    }
    var base = "", array = false, braces = ["{", "}"];
    if (isArray(value)) {
      array = true;
      braces = ["[", "]"];
    }
    if (isFunction(value)) {
      var n = value.name ? ": " + value.name : "";
      base = " [Function" + n + "]";
    }
    if (isRegExp(value)) {
      base = " " + RegExp.prototype.toString.call(value);
    }
    if (isDate(value)) {
      base = " " + Date.prototype.toUTCString.call(value);
    }
    if (isError(value)) {
      base = " " + formatError(value);
    }
    if (keys.length === 0 && (!array || value.length == 0)) {
      return braces[0] + base + braces[1];
    }
    if (recurseTimes < 0) {
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
      } else {
        return ctx.stylize("[Object]", "special");
      }
    }
    ctx.seen.push(value);
    var output;
    if (array) {
      output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    } else {
      output = keys.map(function(key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
      });
    }
    ctx.seen.pop();
    return reduceToSingleString(output, base, braces);
  }
  function formatPrimitive(ctx, value) {
    if (isUndefined(value))
      return ctx.stylize("undefined", "undefined");
    if (isString(value)) {
      var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return ctx.stylize(simple, "string");
    }
    if (isNumber(value))
      return ctx.stylize("" + value, "number");
    if (isBoolean(value))
      return ctx.stylize("" + value, "boolean");
    if (isNull(value))
      return ctx.stylize("null", "null");
  }
  function formatError(value) {
    return "[" + Error.prototype.toString.call(value) + "]";
  }
  function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for (var i = 0, l = value.length; i < l; ++i) {
      if (hasOwnProperty2(value, String(i))) {
        output.push(formatProperty(
          ctx,
          value,
          recurseTimes,
          visibleKeys,
          String(i),
          true
        ));
      } else {
        output.push("");
      }
    }
    keys.forEach(function(key) {
      if (!key.match(/^\d+$/)) {
        output.push(formatProperty(
          ctx,
          value,
          recurseTimes,
          visibleKeys,
          key,
          true
        ));
      }
    });
    return output;
  }
  function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
    if (desc.get) {
      if (desc.set) {
        str = ctx.stylize("[Getter/Setter]", "special");
      } else {
        str = ctx.stylize("[Getter]", "special");
      }
    } else {
      if (desc.set) {
        str = ctx.stylize("[Setter]", "special");
      }
    }
    if (!hasOwnProperty2(visibleKeys, key)) {
      name = "[" + key + "]";
    }
    if (!str) {
      if (ctx.seen.indexOf(desc.value) < 0) {
        if (isNull(recurseTimes)) {
          str = formatValue(ctx, desc.value, null);
        } else {
          str = formatValue(ctx, desc.value, recurseTimes - 1);
        }
        if (str.indexOf("\n") > -1) {
          if (array) {
            str = str.split("\n").map(function(line) {
              return "  " + line;
            }).join("\n").slice(2);
          } else {
            str = "\n" + str.split("\n").map(function(line) {
              return "   " + line;
            }).join("\n");
          }
        }
      } else {
        str = ctx.stylize("[Circular]", "special");
      }
    }
    if (isUndefined(name)) {
      if (array && key.match(/^\d+$/)) {
        return str;
      }
      name = JSON.stringify("" + key);
      if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
        name = name.slice(1, -1);
        name = ctx.stylize(name, "name");
      } else {
        name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
        name = ctx.stylize(name, "string");
      }
    }
    return name + ": " + str;
  }
  function reduceToSingleString(output, base, braces) {
    var length = output.reduce(function(prev, cur) {
      if (cur.indexOf("\n") >= 0)
        ;
      return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    if (length > 60) {
      return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
    }
    return braces[0] + base + " " + output.join(", ") + " " + braces[1];
  }
  exports.types = types;
  function isArray(ar) {
    return Array.isArray(ar);
  }
  exports.isArray = isArray;
  function isBoolean(arg) {
    return typeof arg === "boolean";
  }
  exports.isBoolean = isBoolean;
  function isNull(arg) {
    return arg === null;
  }
  exports.isNull = isNull;
  function isNullOrUndefined(arg) {
    return arg == null;
  }
  exports.isNullOrUndefined = isNullOrUndefined;
  function isNumber(arg) {
    return typeof arg === "number";
  }
  exports.isNumber = isNumber;
  function isString(arg) {
    return typeof arg === "string";
  }
  exports.isString = isString;
  function isSymbol(arg) {
    return typeof arg === "symbol";
  }
  exports.isSymbol = isSymbol;
  function isUndefined(arg) {
    return arg === void 0;
  }
  exports.isUndefined = isUndefined;
  function isRegExp(re) {
    return isObject(re) && objectToString(re) === "[object RegExp]";
  }
  exports.isRegExp = isRegExp;
  exports.types.isRegExp = isRegExp;
  function isObject(arg) {
    return typeof arg === "object" && arg !== null;
  }
  exports.isObject = isObject;
  function isDate(d) {
    return isObject(d) && objectToString(d) === "[object Date]";
  }
  exports.isDate = isDate;
  exports.types.isDate = isDate;
  function isError(e) {
    return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
  }
  exports.isError = isError;
  exports.types.isNativeError = isError;
  function isFunction(arg) {
    return typeof arg === "function";
  }
  exports.isFunction = isFunction;
  function isPrimitive(arg) {
    return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || // ES6 symbol
    typeof arg === "undefined";
  }
  exports.isPrimitive = isPrimitive;
  exports.isBuffer = isBufferBrowser;
  function objectToString(o) {
    return Object.prototype.toString.call(o);
  }
  function pad(n) {
    return n < 10 ? "0" + n.toString(10) : n.toString(10);
  }
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  function timestamp() {
    var d = /* @__PURE__ */ new Date();
    var time = [
      pad(d.getHours()),
      pad(d.getMinutes()),
      pad(d.getSeconds())
    ].join(":");
    return [d.getDate(), months[d.getMonth()], time].join(" ");
  }
  exports.log = function() {
    console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
  };
  exports.inherits = inherits_browserExports;
  exports._extend = function(origin, add) {
    if (!add || !isObject(add))
      return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while (i--) {
      origin[keys[i]] = add[keys[i]];
    }
    return origin;
  };
  function hasOwnProperty2(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : void 0;
  exports.promisify = function promisify(original) {
    if (typeof original !== "function")
      throw new TypeError('The "original" argument must be of type Function');
    if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
      var fn = original[kCustomPromisifiedSymbol];
      if (typeof fn !== "function") {
        throw new TypeError('The "util.promisify.custom" argument must be of type Function');
      }
      Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
      });
      return fn;
    }
    function fn() {
      var promiseResolve, promiseReject;
      var promise = new Promise(function(resolve, reject) {
        promiseResolve = resolve;
        promiseReject = reject;
      });
      var args = [];
      for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      args.push(function(err, value) {
        if (err) {
          promiseReject(err);
        } else {
          promiseResolve(value);
        }
      });
      try {
        original.apply(this, args);
      } catch (err) {
        promiseReject(err);
      }
      return promise;
    }
    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
    if (kCustomPromisifiedSymbol)
      Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
      });
    return Object.defineProperties(
      fn,
      getOwnPropertyDescriptors(original)
    );
  };
  exports.promisify.custom = kCustomPromisifiedSymbol;
  function callbackifyOnRejected(reason, cb) {
    if (!reason) {
      var newReason = new Error("Promise was rejected with a falsy value");
      newReason.reason = reason;
      reason = newReason;
    }
    return cb(reason);
  }
  function callbackify(original) {
    if (typeof original !== "function") {
      throw new TypeError('The "original" argument must be of type Function');
    }
    function callbackified() {
      var args = [];
      for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      var maybeCb = args.pop();
      if (typeof maybeCb !== "function") {
        throw new TypeError("The last argument must be of type Function");
      }
      var self = this;
      var cb = function() {
        return maybeCb.apply(self, arguments);
      };
      original.apply(this, args).then(
        function(ret) {
          process.nextTick(cb.bind(null, null, ret));
        },
        function(rej) {
          process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
        }
      );
    }
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(
      callbackified,
      getOwnPropertyDescriptors(original)
    );
    return callbackified;
  }
  exports.callbackify = callbackify;
})(util);
var hasRequiredErrors;
function requireErrors() {
  if (hasRequiredErrors)
    return errors;
  hasRequiredErrors = 1;
  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function _classCallCheck(instance2, Constructor) {
    if (!(instance2 instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  var codes = {};
  var assert2;
  var util$1;
  function createErrorType(code, message, Base) {
    if (!Base) {
      Base = Error;
    }
    function getMessage(arg1, arg2, arg3) {
      if (typeof message === "string") {
        return message;
      } else {
        return message(arg1, arg2, arg3);
      }
    }
    var NodeError = /* @__PURE__ */ function(_Base) {
      _inherits(NodeError2, _Base);
      function NodeError2(arg1, arg2, arg3) {
        var _this;
        _classCallCheck(this, NodeError2);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(NodeError2).call(this, getMessage(arg1, arg2, arg3)));
        _this.code = code;
        return _this;
      }
      return NodeError2;
    }(Base);
    codes[code] = NodeError;
  }
  function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
      var len = expected.length;
      expected = expected.map(function(i) {
        return String(i);
      });
      if (len > 2) {
        return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
      } else if (len === 2) {
        return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
      } else {
        return "of ".concat(thing, " ").concat(expected[0]);
      }
    } else {
      return "of ".concat(thing, " ").concat(String(expected));
    }
  }
  function startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
  }
  function endsWith(str, search, this_len) {
    if (this_len === void 0 || this_len > str.length) {
      this_len = str.length;
    }
    return str.substring(this_len - search.length, this_len) === search;
  }
  function includes(str, search, start) {
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + search.length > str.length) {
      return false;
    } else {
      return str.indexOf(search, start) !== -1;
    }
  }
  createErrorType("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError);
  createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
    if (assert2 === void 0)
      assert2 = requireAssert();
    assert2(typeof name === "string", "'name' must be a string");
    var determiner;
    if (typeof expected === "string" && startsWith(expected, "not ")) {
      determiner = "must not be";
      expected = expected.replace(/^not /, "");
    } else {
      determiner = "must be";
    }
    var msg;
    if (endsWith(name, " argument")) {
      msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    } else {
      var type = includes(name, ".") ? "property" : "argument";
      msg = 'The "'.concat(name, '" ').concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    }
    msg += ". Received type ".concat(_typeof(actual));
    return msg;
  }, TypeError);
  createErrorType("ERR_INVALID_ARG_VALUE", function(name, value) {
    var reason = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "is invalid";
    if (util$1 === void 0)
      util$1 = util;
    var inspected = util$1.inspect(value);
    if (inspected.length > 128) {
      inspected = "".concat(inspected.slice(0, 128), "...");
    }
    return "The argument '".concat(name, "' ").concat(reason, ". Received ").concat(inspected);
  }, TypeError);
  createErrorType("ERR_INVALID_RETURN_VALUE", function(input, name, value) {
    var type;
    if (value && value.constructor && value.constructor.name) {
      type = "instance of ".concat(value.constructor.name);
    } else {
      type = "type ".concat(_typeof(value));
    }
    return "Expected ".concat(input, ' to be returned from the "').concat(name, '"') + " function but got ".concat(type, ".");
  }, TypeError);
  createErrorType("ERR_MISSING_ARGS", function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (assert2 === void 0)
      assert2 = requireAssert();
    assert2(args.length > 0, "At least one arg needs to be specified");
    var msg = "The ";
    var len = args.length;
    args = args.map(function(a) {
      return '"'.concat(a, '"');
    });
    switch (len) {
      case 1:
        msg += "".concat(args[0], " argument");
        break;
      case 2:
        msg += "".concat(args[0], " and ").concat(args[1], " arguments");
        break;
      default:
        msg += args.slice(0, len - 1).join(", ");
        msg += ", and ".concat(args[len - 1], " arguments");
        break;
    }
    return "".concat(msg, " must be specified");
  }, TypeError);
  errors.codes = codes;
  return errors;
}
var assertion_error;
var hasRequiredAssertion_error;
function requireAssertion_error() {
  if (hasRequiredAssertion_error)
    return assertion_error;
  hasRequiredAssertion_error = 1;
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === "function") {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys.forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _classCallCheck(instance2, Constructor) {
    if (!(instance2 instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
    _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
      if (Class2 === null || !_isNativeFunction(Class2))
        return Class2;
      if (typeof Class2 !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class2))
          return _cache.get(Class2);
        _cache.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
      return _setPrototypeOf(Wrapper, Class2);
    };
    return _wrapNativeSuper(Class);
  }
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct2(Parent2, args2, Class2) {
        var a = [null];
        a.push.apply(a, args2);
        var Constructor = Function.bind.apply(Parent2, a);
        var instance2 = new Constructor();
        if (Class2)
          _setPrototypeOf(instance2, Class2.prototype);
        return instance2;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  var _require = util, inspect = _require.inspect;
  var _require2 = requireErrors(), ERR_INVALID_ARG_TYPE = _require2.codes.ERR_INVALID_ARG_TYPE;
  function endsWith(str, search, this_len) {
    if (this_len === void 0 || this_len > str.length) {
      this_len = str.length;
    }
    return str.substring(this_len - search.length, this_len) === search;
  }
  function repeat(str, count) {
    count = Math.floor(count);
    if (str.length == 0 || count == 0)
      return "";
    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));
    while (count) {
      str += str;
      count--;
    }
    str += str.substring(0, maxCount - str.length);
    return str;
  }
  var blue = "";
  var green = "";
  var red = "";
  var white = "";
  var kReadableOperator = {
    deepStrictEqual: "Expected values to be strictly deep-equal:",
    strictEqual: "Expected values to be strictly equal:",
    strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
    deepEqual: "Expected values to be loosely deep-equal:",
    equal: "Expected values to be loosely equal:",
    notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
    notStrictEqual: 'Expected "actual" to be strictly unequal to:',
    notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
    notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
    notEqual: 'Expected "actual" to be loosely unequal to:',
    notIdentical: "Values identical but not reference-equal:"
  };
  var kMaxShortLength = 10;
  function copyError(source) {
    var keys = Object.keys(source);
    var target = Object.create(Object.getPrototypeOf(source));
    keys.forEach(function(key) {
      target[key] = source[key];
    });
    Object.defineProperty(target, "message", {
      value: source.message
    });
    return target;
  }
  function inspectValue(val) {
    return inspect(val, {
      compact: false,
      customInspect: false,
      depth: 1e3,
      maxArrayLength: Infinity,
      // Assert compares only enumerable properties (with a few exceptions).
      showHidden: false,
      // Having a long line as error is better than wrapping the line for
      // comparison for now.
      // TODO(BridgeAR): `breakLength` should be limited as soon as soon as we
      // have meta information about the inspected properties (i.e., know where
      // in what line the property starts and ends).
      breakLength: Infinity,
      // Assert does not detect proxies currently.
      showProxy: false,
      sorted: true,
      // Inspect getters as we also check them when comparing entries.
      getters: true
    });
  }
  function createErrDiff(actual, expected, operator) {
    var other = "";
    var res = "";
    var lastPos = 0;
    var end = "";
    var skipped = false;
    var actualInspected = inspectValue(actual);
    var actualLines = actualInspected.split("\n");
    var expectedLines = inspectValue(expected).split("\n");
    var i = 0;
    var indicator = "";
    if (operator === "strictEqual" && _typeof(actual) === "object" && _typeof(expected) === "object" && actual !== null && expected !== null) {
      operator = "strictEqualObject";
    }
    if (actualLines.length === 1 && expectedLines.length === 1 && actualLines[0] !== expectedLines[0]) {
      var inputLength = actualLines[0].length + expectedLines[0].length;
      if (inputLength <= kMaxShortLength) {
        if ((_typeof(actual) !== "object" || actual === null) && (_typeof(expected) !== "object" || expected === null) && (actual !== 0 || expected !== 0)) {
          return "".concat(kReadableOperator[operator], "\n\n") + "".concat(actualLines[0], " !== ").concat(expectedLines[0], "\n");
        }
      } else if (operator !== "strictEqualObject") {
        var maxLength = process.stderr && process.stderr.isTTY ? process.stderr.columns : 80;
        if (inputLength < maxLength) {
          while (actualLines[0][i] === expectedLines[0][i]) {
            i++;
          }
          if (i > 2) {
            indicator = "\n  ".concat(repeat(" ", i), "^");
            i = 0;
          }
        }
      }
    }
    var a = actualLines[actualLines.length - 1];
    var b = expectedLines[expectedLines.length - 1];
    while (a === b) {
      if (i++ < 2) {
        end = "\n  ".concat(a).concat(end);
      } else {
        other = a;
      }
      actualLines.pop();
      expectedLines.pop();
      if (actualLines.length === 0 || expectedLines.length === 0)
        break;
      a = actualLines[actualLines.length - 1];
      b = expectedLines[expectedLines.length - 1];
    }
    var maxLines = Math.max(actualLines.length, expectedLines.length);
    if (maxLines === 0) {
      var _actualLines = actualInspected.split("\n");
      if (_actualLines.length > 30) {
        _actualLines[26] = "".concat(blue, "...").concat(white);
        while (_actualLines.length > 27) {
          _actualLines.pop();
        }
      }
      return "".concat(kReadableOperator.notIdentical, "\n\n").concat(_actualLines.join("\n"), "\n");
    }
    if (i > 3) {
      end = "\n".concat(blue, "...").concat(white).concat(end);
      skipped = true;
    }
    if (other !== "") {
      end = "\n  ".concat(other).concat(end);
      other = "";
    }
    var printedLines = 0;
    var msg = kReadableOperator[operator] + "\n".concat(green, "+ actual").concat(white, " ").concat(red, "- expected").concat(white);
    var skippedMsg = " ".concat(blue, "...").concat(white, " Lines skipped");
    for (i = 0; i < maxLines; i++) {
      var cur = i - lastPos;
      if (actualLines.length < i + 1) {
        if (cur > 1 && i > 2) {
          if (cur > 4) {
            res += "\n".concat(blue, "...").concat(white);
            skipped = true;
          } else if (cur > 3) {
            res += "\n  ".concat(expectedLines[i - 2]);
            printedLines++;
          }
          res += "\n  ".concat(expectedLines[i - 1]);
          printedLines++;
        }
        lastPos = i;
        other += "\n".concat(red, "-").concat(white, " ").concat(expectedLines[i]);
        printedLines++;
      } else if (expectedLines.length < i + 1) {
        if (cur > 1 && i > 2) {
          if (cur > 4) {
            res += "\n".concat(blue, "...").concat(white);
            skipped = true;
          } else if (cur > 3) {
            res += "\n  ".concat(actualLines[i - 2]);
            printedLines++;
          }
          res += "\n  ".concat(actualLines[i - 1]);
          printedLines++;
        }
        lastPos = i;
        res += "\n".concat(green, "+").concat(white, " ").concat(actualLines[i]);
        printedLines++;
      } else {
        var expectedLine = expectedLines[i];
        var actualLine = actualLines[i];
        var divergingLines = actualLine !== expectedLine && (!endsWith(actualLine, ",") || actualLine.slice(0, -1) !== expectedLine);
        if (divergingLines && endsWith(expectedLine, ",") && expectedLine.slice(0, -1) === actualLine) {
          divergingLines = false;
          actualLine += ",";
        }
        if (divergingLines) {
          if (cur > 1 && i > 2) {
            if (cur > 4) {
              res += "\n".concat(blue, "...").concat(white);
              skipped = true;
            } else if (cur > 3) {
              res += "\n  ".concat(actualLines[i - 2]);
              printedLines++;
            }
            res += "\n  ".concat(actualLines[i - 1]);
            printedLines++;
          }
          lastPos = i;
          res += "\n".concat(green, "+").concat(white, " ").concat(actualLine);
          other += "\n".concat(red, "-").concat(white, " ").concat(expectedLine);
          printedLines += 2;
        } else {
          res += other;
          other = "";
          if (cur === 1 || i === 0) {
            res += "\n  ".concat(actualLine);
            printedLines++;
          }
        }
      }
      if (printedLines > 20 && i < maxLines - 2) {
        return "".concat(msg).concat(skippedMsg, "\n").concat(res, "\n").concat(blue, "...").concat(white).concat(other, "\n") + "".concat(blue, "...").concat(white);
      }
    }
    return "".concat(msg).concat(skipped ? skippedMsg : "", "\n").concat(res).concat(other).concat(end).concat(indicator);
  }
  var AssertionError = /* @__PURE__ */ function(_Error) {
    _inherits(AssertionError2, _Error);
    function AssertionError2(options) {
      var _this;
      _classCallCheck(this, AssertionError2);
      if (_typeof(options) !== "object" || options === null) {
        throw new ERR_INVALID_ARG_TYPE("options", "Object", options);
      }
      var message = options.message, operator = options.operator, stackStartFn = options.stackStartFn;
      var actual = options.actual, expected = options.expected;
      var limit = Error.stackTraceLimit;
      Error.stackTraceLimit = 0;
      if (message != null) {
        _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError2).call(this, String(message)));
      } else {
        if (process.stderr && process.stderr.isTTY) {
          if (process.stderr && process.stderr.getColorDepth && process.stderr.getColorDepth() !== 1) {
            blue = "\x1B[34m";
            green = "\x1B[32m";
            white = "\x1B[39m";
            red = "\x1B[31m";
          } else {
            blue = "";
            green = "";
            white = "";
            red = "";
          }
        }
        if (_typeof(actual) === "object" && actual !== null && _typeof(expected) === "object" && expected !== null && "stack" in actual && actual instanceof Error && "stack" in expected && expected instanceof Error) {
          actual = copyError(actual);
          expected = copyError(expected);
        }
        if (operator === "deepStrictEqual" || operator === "strictEqual") {
          _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError2).call(this, createErrDiff(actual, expected, operator)));
        } else if (operator === "notDeepStrictEqual" || operator === "notStrictEqual") {
          var base = kReadableOperator[operator];
          var res = inspectValue(actual).split("\n");
          if (operator === "notStrictEqual" && _typeof(actual) === "object" && actual !== null) {
            base = kReadableOperator.notStrictEqualObject;
          }
          if (res.length > 30) {
            res[26] = "".concat(blue, "...").concat(white);
            while (res.length > 27) {
              res.pop();
            }
          }
          if (res.length === 1) {
            _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError2).call(this, "".concat(base, " ").concat(res[0])));
          } else {
            _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError2).call(this, "".concat(base, "\n\n").concat(res.join("\n"), "\n")));
          }
        } else {
          var _res = inspectValue(actual);
          var other = "";
          var knownOperators = kReadableOperator[operator];
          if (operator === "notDeepEqual" || operator === "notEqual") {
            _res = "".concat(kReadableOperator[operator], "\n\n").concat(_res);
            if (_res.length > 1024) {
              _res = "".concat(_res.slice(0, 1021), "...");
            }
          } else {
            other = "".concat(inspectValue(expected));
            if (_res.length > 512) {
              _res = "".concat(_res.slice(0, 509), "...");
            }
            if (other.length > 512) {
              other = "".concat(other.slice(0, 509), "...");
            }
            if (operator === "deepEqual" || operator === "equal") {
              _res = "".concat(knownOperators, "\n\n").concat(_res, "\n\nshould equal\n\n");
            } else {
              other = " ".concat(operator, " ").concat(other);
            }
          }
          _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError2).call(this, "".concat(_res).concat(other)));
        }
      }
      Error.stackTraceLimit = limit;
      _this.generatedMessage = !message;
      Object.defineProperty(_assertThisInitialized(_this), "name", {
        value: "AssertionError [ERR_ASSERTION]",
        enumerable: false,
        writable: true,
        configurable: true
      });
      _this.code = "ERR_ASSERTION";
      _this.actual = actual;
      _this.expected = expected;
      _this.operator = operator;
      if (Error.captureStackTrace) {
        Error.captureStackTrace(_assertThisInitialized(_this), stackStartFn);
      }
      _this.stack;
      _this.name = "AssertionError";
      return _possibleConstructorReturn(_this);
    }
    _createClass(AssertionError2, [{
      key: "toString",
      value: function toString() {
        return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
      }
    }, {
      key: inspect.custom,
      value: function value(recurseTimes, ctx) {
        return inspect(this, _objectSpread({}, ctx, {
          customInspect: false,
          depth: 0
        }));
      }
    }]);
    return AssertionError2;
  }(_wrapNativeSuper(Error));
  assertion_error = AssertionError;
  return assertion_error;
}
var es6ObjectAssign;
var hasRequiredEs6ObjectAssign;
function requireEs6ObjectAssign() {
  if (hasRequiredEs6ObjectAssign)
    return es6ObjectAssign;
  hasRequiredEs6ObjectAssign = 1;
  function assign2(target, firstSource) {
    if (target === void 0 || target === null) {
      throw new TypeError("Cannot convert first argument to object");
    }
    var to = Object(target);
    for (var i = 1; i < arguments.length; i++) {
      var nextSource = arguments[i];
      if (nextSource === void 0 || nextSource === null) {
        continue;
      }
      var keysArray = Object.keys(Object(nextSource));
      for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
        var nextKey = keysArray[nextIndex];
        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== void 0 && desc.enumerable) {
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
    return to;
  }
  function polyfill2() {
    if (!Object.assign) {
      Object.defineProperty(Object, "assign", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: assign2
      });
    }
  }
  es6ObjectAssign = {
    assign: assign2,
    polyfill: polyfill2
  };
  return es6ObjectAssign;
}
var isArguments3;
var hasRequiredIsArguments;
function requireIsArguments() {
  if (hasRequiredIsArguments)
    return isArguments3;
  hasRequiredIsArguments = 1;
  var toStr2 = Object.prototype.toString;
  isArguments3 = function isArguments4(value) {
    var str = toStr2.call(value);
    var isArgs = str === "[object Arguments]";
    if (!isArgs) {
      isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr2.call(value.callee) === "[object Function]";
    }
    return isArgs;
  };
  return isArguments3;
}
var implementation$2;
var hasRequiredImplementation$2;
function requireImplementation$2() {
  if (hasRequiredImplementation$2)
    return implementation$2;
  hasRequiredImplementation$2 = 1;
  var keysShim;
  if (!Object.keys) {
    var has = Object.prototype.hasOwnProperty;
    var toStr2 = Object.prototype.toString;
    var isArgs = requireIsArguments();
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var hasDontEnumBug = !isEnumerable.call({ toString: null }, "toString");
    var hasProtoEnumBug = isEnumerable.call(function() {
    }, "prototype");
    var dontEnums = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ];
    var equalsConstructorPrototype = function(o) {
      var ctor = o.constructor;
      return ctor && ctor.prototype === o;
    };
    var excludedKeys = {
      $applicationCache: true,
      $console: true,
      $external: true,
      $frame: true,
      $frameElement: true,
      $frames: true,
      $innerHeight: true,
      $innerWidth: true,
      $onmozfullscreenchange: true,
      $onmozfullscreenerror: true,
      $outerHeight: true,
      $outerWidth: true,
      $pageXOffset: true,
      $pageYOffset: true,
      $parent: true,
      $scrollLeft: true,
      $scrollTop: true,
      $scrollX: true,
      $scrollY: true,
      $self: true,
      $webkitIndexedDB: true,
      $webkitStorageInfo: true,
      $window: true
    };
    var hasAutomationEqualityBug = function() {
      if (typeof window === "undefined") {
        return false;
      }
      for (var k in window) {
        try {
          if (!excludedKeys["$" + k] && has.call(window, k) && window[k] !== null && typeof window[k] === "object") {
            try {
              equalsConstructorPrototype(window[k]);
            } catch (e) {
              return true;
            }
          }
        } catch (e) {
          return true;
        }
      }
      return false;
    }();
    var equalsConstructorPrototypeIfNotBuggy = function(o) {
      if (typeof window === "undefined" || !hasAutomationEqualityBug) {
        return equalsConstructorPrototype(o);
      }
      try {
        return equalsConstructorPrototype(o);
      } catch (e) {
        return false;
      }
    };
    keysShim = function keys(object) {
      var isObject = object !== null && typeof object === "object";
      var isFunction = toStr2.call(object) === "[object Function]";
      var isArguments4 = isArgs(object);
      var isString = isObject && toStr2.call(object) === "[object String]";
      var theKeys = [];
      if (!isObject && !isFunction && !isArguments4) {
        throw new TypeError("Object.keys called on a non-object");
      }
      var skipProto = hasProtoEnumBug && isFunction;
      if (isString && object.length > 0 && !has.call(object, 0)) {
        for (var i = 0; i < object.length; ++i) {
          theKeys.push(String(i));
        }
      }
      if (isArguments4 && object.length > 0) {
        for (var j = 0; j < object.length; ++j) {
          theKeys.push(String(j));
        }
      } else {
        for (var name in object) {
          if (!(skipProto && name === "prototype") && has.call(object, name)) {
            theKeys.push(String(name));
          }
        }
      }
      if (hasDontEnumBug) {
        var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
        for (var k = 0; k < dontEnums.length; ++k) {
          if (!(skipConstructor && dontEnums[k] === "constructor") && has.call(object, dontEnums[k])) {
            theKeys.push(dontEnums[k]);
          }
        }
      }
      return theKeys;
    };
  }
  implementation$2 = keysShim;
  return implementation$2;
}
var objectKeys;
var hasRequiredObjectKeys;
function requireObjectKeys() {
  if (hasRequiredObjectKeys)
    return objectKeys;
  hasRequiredObjectKeys = 1;
  var slice2 = Array.prototype.slice;
  var isArgs = requireIsArguments();
  var origKeys = Object.keys;
  var keysShim = origKeys ? function keys(o) {
    return origKeys(o);
  } : requireImplementation$2();
  var originalKeys = Object.keys;
  keysShim.shim = function shimObjectKeys() {
    if (Object.keys) {
      var keysWorksWithArguments = function() {
        var args = Object.keys(arguments);
        return args && args.length === arguments.length;
      }(1, 2);
      if (!keysWorksWithArguments) {
        Object.keys = function keys(object) {
          if (isArgs(object)) {
            return originalKeys(slice2.call(object));
          }
          return originalKeys(object);
        };
      }
    } else {
      Object.keys = keysShim;
    }
    return Object.keys || keysShim;
  };
  objectKeys = keysShim;
  return objectKeys;
}
var hasPropertyDescriptors_1;
var hasRequiredHasPropertyDescriptors;
function requireHasPropertyDescriptors() {
  if (hasRequiredHasPropertyDescriptors)
    return hasPropertyDescriptors_1;
  hasRequiredHasPropertyDescriptors = 1;
  var GetIntrinsic3 = getIntrinsic;
  var $defineProperty = GetIntrinsic3("%Object.defineProperty%", true);
  var hasPropertyDescriptors = function hasPropertyDescriptors2() {
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
        return true;
      } catch (e) {
        return false;
      }
    }
    return false;
  };
  hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
    if (!hasPropertyDescriptors()) {
      return null;
    }
    try {
      return $defineProperty([], "length", { value: 1 }).length !== 1;
    } catch (e) {
      return true;
    }
  };
  hasPropertyDescriptors_1 = hasPropertyDescriptors;
  return hasPropertyDescriptors_1;
}
var defineProperties_1;
var hasRequiredDefineProperties;
function requireDefineProperties() {
  if (hasRequiredDefineProperties)
    return defineProperties_1;
  hasRequiredDefineProperties = 1;
  var keys = requireObjectKeys();
  var hasSymbols3 = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
  var toStr2 = Object.prototype.toString;
  var concat = Array.prototype.concat;
  var origDefineProperty = Object.defineProperty;
  var isFunction = function(fn) {
    return typeof fn === "function" && toStr2.call(fn) === "[object Function]";
  };
  var hasPropertyDescriptors = requireHasPropertyDescriptors()();
  var supportsDescriptors = origDefineProperty && hasPropertyDescriptors;
  var defineProperty = function(object, name, value, predicate) {
    if (name in object) {
      if (predicate === true) {
        if (object[name] === value) {
          return;
        }
      } else if (!isFunction(predicate) || !predicate()) {
        return;
      }
    }
    if (supportsDescriptors) {
      origDefineProperty(object, name, {
        configurable: true,
        enumerable: false,
        value,
        writable: true
      });
    } else {
      object[name] = value;
    }
  };
  var defineProperties = function(object, map) {
    var predicates = arguments.length > 2 ? arguments[2] : {};
    var props = keys(map);
    if (hasSymbols3) {
      props = concat.call(props, Object.getOwnPropertySymbols(map));
    }
    for (var i = 0; i < props.length; i += 1) {
      defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
    }
  };
  defineProperties.supportsDescriptors = !!supportsDescriptors;
  defineProperties_1 = defineProperties;
  return defineProperties_1;
}
var implementation$1;
var hasRequiredImplementation$1;
function requireImplementation$1() {
  if (hasRequiredImplementation$1)
    return implementation$1;
  hasRequiredImplementation$1 = 1;
  var numberIsNaN = function(value) {
    return value !== value;
  };
  implementation$1 = function is(a, b) {
    if (a === 0 && b === 0) {
      return 1 / a === 1 / b;
    }
    if (a === b) {
      return true;
    }
    if (numberIsNaN(a) && numberIsNaN(b)) {
      return true;
    }
    return false;
  };
  return implementation$1;
}
var polyfill$1;
var hasRequiredPolyfill$1;
function requirePolyfill$1() {
  if (hasRequiredPolyfill$1)
    return polyfill$1;
  hasRequiredPolyfill$1 = 1;
  var implementation2 = requireImplementation$1();
  polyfill$1 = function getPolyfill() {
    return typeof Object.is === "function" ? Object.is : implementation2;
  };
  return polyfill$1;
}
var shim$1;
var hasRequiredShim$1;
function requireShim$1() {
  if (hasRequiredShim$1)
    return shim$1;
  hasRequiredShim$1 = 1;
  var getPolyfill = requirePolyfill$1();
  var define = requireDefineProperties();
  shim$1 = function shimObjectIs() {
    var polyfill2 = getPolyfill();
    define(Object, { is: polyfill2 }, {
      is: function testObjectIs() {
        return Object.is !== polyfill2;
      }
    });
    return polyfill2;
  };
  return shim$1;
}
var objectIs;
var hasRequiredObjectIs;
function requireObjectIs() {
  if (hasRequiredObjectIs)
    return objectIs;
  hasRequiredObjectIs = 1;
  var define = requireDefineProperties();
  var callBind2 = callBindExports;
  var implementation2 = requireImplementation$1();
  var getPolyfill = requirePolyfill$1();
  var shim2 = requireShim$1();
  var polyfill2 = callBind2(getPolyfill(), Object);
  define(polyfill2, {
    getPolyfill,
    implementation: implementation2,
    shim: shim2
  });
  objectIs = polyfill2;
  return objectIs;
}
var implementation;
var hasRequiredImplementation;
function requireImplementation() {
  if (hasRequiredImplementation)
    return implementation;
  hasRequiredImplementation = 1;
  implementation = function isNaN2(value) {
    return value !== value;
  };
  return implementation;
}
var polyfill;
var hasRequiredPolyfill;
function requirePolyfill() {
  if (hasRequiredPolyfill)
    return polyfill;
  hasRequiredPolyfill = 1;
  var implementation2 = requireImplementation();
  polyfill = function getPolyfill() {
    if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a")) {
      return Number.isNaN;
    }
    return implementation2;
  };
  return polyfill;
}
var shim;
var hasRequiredShim;
function requireShim() {
  if (hasRequiredShim)
    return shim;
  hasRequiredShim = 1;
  var define = requireDefineProperties();
  var getPolyfill = requirePolyfill();
  shim = function shimNumberIsNaN() {
    var polyfill2 = getPolyfill();
    define(Number, { isNaN: polyfill2 }, {
      isNaN: function testIsNaN() {
        return Number.isNaN !== polyfill2;
      }
    });
    return polyfill2;
  };
  return shim;
}
var isNan;
var hasRequiredIsNan;
function requireIsNan() {
  if (hasRequiredIsNan)
    return isNan;
  hasRequiredIsNan = 1;
  var callBind2 = callBindExports;
  var define = requireDefineProperties();
  var implementation2 = requireImplementation();
  var getPolyfill = requirePolyfill();
  var shim2 = requireShim();
  var polyfill2 = callBind2(getPolyfill(), Number);
  define(polyfill2, {
    getPolyfill,
    implementation: implementation2,
    shim: shim2
  });
  isNan = polyfill2;
  return isNan;
}
var comparisons;
var hasRequiredComparisons;
function requireComparisons() {
  if (hasRequiredComparisons)
    return comparisons;
  hasRequiredComparisons = 1;
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  var regexFlagsSupported = /a/g.flags !== void 0;
  var arrayFromSet = function arrayFromSet2(set) {
    var array = [];
    set.forEach(function(value) {
      return array.push(value);
    });
    return array;
  };
  var arrayFromMap = function arrayFromMap2(map) {
    var array = [];
    map.forEach(function(value, key) {
      return array.push([key, value]);
    });
    return array;
  };
  var objectIs2 = Object.is ? Object.is : requireObjectIs();
  var objectGetOwnPropertySymbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
    return [];
  };
  var numberIsNaN = Number.isNaN ? Number.isNaN : requireIsNan();
  function uncurryThis(f) {
    return f.call.bind(f);
  }
  var hasOwnProperty2 = uncurryThis(Object.prototype.hasOwnProperty);
  var propertyIsEnumerable = uncurryThis(Object.prototype.propertyIsEnumerable);
  var objectToString = uncurryThis(Object.prototype.toString);
  var _require$types = util.types, isAnyArrayBuffer = _require$types.isAnyArrayBuffer, isArrayBufferView = _require$types.isArrayBufferView, isDate = _require$types.isDate, isMap = _require$types.isMap, isRegExp = _require$types.isRegExp, isSet = _require$types.isSet, isNativeError = _require$types.isNativeError, isBoxedPrimitive = _require$types.isBoxedPrimitive, isNumberObject = _require$types.isNumberObject, isStringObject = _require$types.isStringObject, isBooleanObject = _require$types.isBooleanObject, isBigIntObject = _require$types.isBigIntObject, isSymbolObject = _require$types.isSymbolObject, isFloat32Array = _require$types.isFloat32Array, isFloat64Array = _require$types.isFloat64Array;
  function isNonIndex(key) {
    if (key.length === 0 || key.length > 10)
      return true;
    for (var i = 0; i < key.length; i++) {
      var code = key.charCodeAt(i);
      if (code < 48 || code > 57)
        return true;
    }
    return key.length === 10 && key >= Math.pow(2, 32);
  }
  function getOwnNonIndexProperties(value) {
    return Object.keys(value).filter(isNonIndex).concat(objectGetOwnPropertySymbols(value).filter(Object.prototype.propertyIsEnumerable.bind(value)));
  }
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   */
  function compare(a, b) {
    if (a === b) {
      return 0;
    }
    var x = a.length;
    var y = b.length;
    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
      if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
      }
    }
    if (x < y) {
      return -1;
    }
    if (y < x) {
      return 1;
    }
    return 0;
  }
  var kStrict = true;
  var kLoose = false;
  var kNoIterator = 0;
  var kIsArray = 1;
  var kIsSet = 2;
  var kIsMap = 3;
  function areSimilarRegExps(a, b) {
    return regexFlagsSupported ? a.source === b.source && a.flags === b.flags : RegExp.prototype.toString.call(a) === RegExp.prototype.toString.call(b);
  }
  function areSimilarFloatArrays(a, b) {
    if (a.byteLength !== b.byteLength) {
      return false;
    }
    for (var offset = 0; offset < a.byteLength; offset++) {
      if (a[offset] !== b[offset]) {
        return false;
      }
    }
    return true;
  }
  function areSimilarTypedArrays(a, b) {
    if (a.byteLength !== b.byteLength) {
      return false;
    }
    return compare(new Uint8Array(a.buffer, a.byteOffset, a.byteLength), new Uint8Array(b.buffer, b.byteOffset, b.byteLength)) === 0;
  }
  function areEqualArrayBuffers(buf1, buf2) {
    return buf1.byteLength === buf2.byteLength && compare(new Uint8Array(buf1), new Uint8Array(buf2)) === 0;
  }
  function isEqualBoxedPrimitive(val1, val2) {
    if (isNumberObject(val1)) {
      return isNumberObject(val2) && objectIs2(Number.prototype.valueOf.call(val1), Number.prototype.valueOf.call(val2));
    }
    if (isStringObject(val1)) {
      return isStringObject(val2) && String.prototype.valueOf.call(val1) === String.prototype.valueOf.call(val2);
    }
    if (isBooleanObject(val1)) {
      return isBooleanObject(val2) && Boolean.prototype.valueOf.call(val1) === Boolean.prototype.valueOf.call(val2);
    }
    if (isBigIntObject(val1)) {
      return isBigIntObject(val2) && BigInt.prototype.valueOf.call(val1) === BigInt.prototype.valueOf.call(val2);
    }
    return isSymbolObject(val2) && Symbol.prototype.valueOf.call(val1) === Symbol.prototype.valueOf.call(val2);
  }
  function innerDeepEqual(val1, val2, strict, memos) {
    if (val1 === val2) {
      if (val1 !== 0)
        return true;
      return strict ? objectIs2(val1, val2) : true;
    }
    if (strict) {
      if (_typeof(val1) !== "object") {
        return typeof val1 === "number" && numberIsNaN(val1) && numberIsNaN(val2);
      }
      if (_typeof(val2) !== "object" || val1 === null || val2 === null) {
        return false;
      }
      if (Object.getPrototypeOf(val1) !== Object.getPrototypeOf(val2)) {
        return false;
      }
    } else {
      if (val1 === null || _typeof(val1) !== "object") {
        if (val2 === null || _typeof(val2) !== "object") {
          return val1 == val2;
        }
        return false;
      }
      if (val2 === null || _typeof(val2) !== "object") {
        return false;
      }
    }
    var val1Tag = objectToString(val1);
    var val2Tag = objectToString(val2);
    if (val1Tag !== val2Tag) {
      return false;
    }
    if (Array.isArray(val1)) {
      if (val1.length !== val2.length) {
        return false;
      }
      var keys1 = getOwnNonIndexProperties(val1);
      var keys2 = getOwnNonIndexProperties(val2);
      if (keys1.length !== keys2.length) {
        return false;
      }
      return keyCheck(val1, val2, strict, memos, kIsArray, keys1);
    }
    if (val1Tag === "[object Object]") {
      if (!isMap(val1) && isMap(val2) || !isSet(val1) && isSet(val2)) {
        return false;
      }
    }
    if (isDate(val1)) {
      if (!isDate(val2) || Date.prototype.getTime.call(val1) !== Date.prototype.getTime.call(val2)) {
        return false;
      }
    } else if (isRegExp(val1)) {
      if (!isRegExp(val2) || !areSimilarRegExps(val1, val2)) {
        return false;
      }
    } else if (isNativeError(val1) || val1 instanceof Error) {
      if (val1.message !== val2.message || val1.name !== val2.name) {
        return false;
      }
    } else if (isArrayBufferView(val1)) {
      if (!strict && (isFloat32Array(val1) || isFloat64Array(val1))) {
        if (!areSimilarFloatArrays(val1, val2)) {
          return false;
        }
      } else if (!areSimilarTypedArrays(val1, val2)) {
        return false;
      }
      var _keys = getOwnNonIndexProperties(val1);
      var _keys2 = getOwnNonIndexProperties(val2);
      if (_keys.length !== _keys2.length) {
        return false;
      }
      return keyCheck(val1, val2, strict, memos, kNoIterator, _keys);
    } else if (isSet(val1)) {
      if (!isSet(val2) || val1.size !== val2.size) {
        return false;
      }
      return keyCheck(val1, val2, strict, memos, kIsSet);
    } else if (isMap(val1)) {
      if (!isMap(val2) || val1.size !== val2.size) {
        return false;
      }
      return keyCheck(val1, val2, strict, memos, kIsMap);
    } else if (isAnyArrayBuffer(val1)) {
      if (!areEqualArrayBuffers(val1, val2)) {
        return false;
      }
    } else if (isBoxedPrimitive(val1) && !isEqualBoxedPrimitive(val1, val2)) {
      return false;
    }
    return keyCheck(val1, val2, strict, memos, kNoIterator);
  }
  function getEnumerables(val, keys) {
    return keys.filter(function(k) {
      return propertyIsEnumerable(val, k);
    });
  }
  function keyCheck(val1, val2, strict, memos, iterationType, aKeys) {
    if (arguments.length === 5) {
      aKeys = Object.keys(val1);
      var bKeys = Object.keys(val2);
      if (aKeys.length !== bKeys.length) {
        return false;
      }
    }
    var i = 0;
    for (; i < aKeys.length; i++) {
      if (!hasOwnProperty2(val2, aKeys[i])) {
        return false;
      }
    }
    if (strict && arguments.length === 5) {
      var symbolKeysA = objectGetOwnPropertySymbols(val1);
      if (symbolKeysA.length !== 0) {
        var count = 0;
        for (i = 0; i < symbolKeysA.length; i++) {
          var key = symbolKeysA[i];
          if (propertyIsEnumerable(val1, key)) {
            if (!propertyIsEnumerable(val2, key)) {
              return false;
            }
            aKeys.push(key);
            count++;
          } else if (propertyIsEnumerable(val2, key)) {
            return false;
          }
        }
        var symbolKeysB = objectGetOwnPropertySymbols(val2);
        if (symbolKeysA.length !== symbolKeysB.length && getEnumerables(val2, symbolKeysB).length !== count) {
          return false;
        }
      } else {
        var _symbolKeysB = objectGetOwnPropertySymbols(val2);
        if (_symbolKeysB.length !== 0 && getEnumerables(val2, _symbolKeysB).length !== 0) {
          return false;
        }
      }
    }
    if (aKeys.length === 0 && (iterationType === kNoIterator || iterationType === kIsArray && val1.length === 0 || val1.size === 0)) {
      return true;
    }
    if (memos === void 0) {
      memos = {
        val1: /* @__PURE__ */ new Map(),
        val2: /* @__PURE__ */ new Map(),
        position: 0
      };
    } else {
      var val2MemoA = memos.val1.get(val1);
      if (val2MemoA !== void 0) {
        var val2MemoB = memos.val2.get(val2);
        if (val2MemoB !== void 0) {
          return val2MemoA === val2MemoB;
        }
      }
      memos.position++;
    }
    memos.val1.set(val1, memos.position);
    memos.val2.set(val2, memos.position);
    var areEq = objEquiv(val1, val2, strict, aKeys, memos, iterationType);
    memos.val1.delete(val1);
    memos.val2.delete(val2);
    return areEq;
  }
  function setHasEqualElement(set, val1, strict, memo) {
    var setValues = arrayFromSet(set);
    for (var i = 0; i < setValues.length; i++) {
      var val2 = setValues[i];
      if (innerDeepEqual(val1, val2, strict, memo)) {
        set.delete(val2);
        return true;
      }
    }
    return false;
  }
  function findLooseMatchingPrimitives(prim) {
    switch (_typeof(prim)) {
      case "undefined":
        return null;
      case "object":
        return void 0;
      case "symbol":
        return false;
      case "string":
        prim = +prim;
      case "number":
        if (numberIsNaN(prim)) {
          return false;
        }
    }
    return true;
  }
  function setMightHaveLoosePrim(a, b, prim) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null)
      return altValue;
    return b.has(altValue) && !a.has(altValue);
  }
  function mapMightHaveLoosePrim(a, b, prim, item, memo) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) {
      return altValue;
    }
    var curB = b.get(altValue);
    if (curB === void 0 && !b.has(altValue) || !innerDeepEqual(item, curB, false, memo)) {
      return false;
    }
    return !a.has(altValue) && innerDeepEqual(item, curB, false, memo);
  }
  function setEquiv(a, b, strict, memo) {
    var set = null;
    var aValues = arrayFromSet(a);
    for (var i = 0; i < aValues.length; i++) {
      var val = aValues[i];
      if (_typeof(val) === "object" && val !== null) {
        if (set === null) {
          set = /* @__PURE__ */ new Set();
        }
        set.add(val);
      } else if (!b.has(val)) {
        if (strict)
          return false;
        if (!setMightHaveLoosePrim(a, b, val)) {
          return false;
        }
        if (set === null) {
          set = /* @__PURE__ */ new Set();
        }
        set.add(val);
      }
    }
    if (set !== null) {
      var bValues = arrayFromSet(b);
      for (var _i = 0; _i < bValues.length; _i++) {
        var _val = bValues[_i];
        if (_typeof(_val) === "object" && _val !== null) {
          if (!setHasEqualElement(set, _val, strict, memo))
            return false;
        } else if (!strict && !a.has(_val) && !setHasEqualElement(set, _val, strict, memo)) {
          return false;
        }
      }
      return set.size === 0;
    }
    return true;
  }
  function mapHasEqualEntry(set, map, key1, item1, strict, memo) {
    var setValues = arrayFromSet(set);
    for (var i = 0; i < setValues.length; i++) {
      var key2 = setValues[i];
      if (innerDeepEqual(key1, key2, strict, memo) && innerDeepEqual(item1, map.get(key2), strict, memo)) {
        set.delete(key2);
        return true;
      }
    }
    return false;
  }
  function mapEquiv(a, b, strict, memo) {
    var set = null;
    var aEntries = arrayFromMap(a);
    for (var i = 0; i < aEntries.length; i++) {
      var _aEntries$i = _slicedToArray(aEntries[i], 2), key = _aEntries$i[0], item1 = _aEntries$i[1];
      if (_typeof(key) === "object" && key !== null) {
        if (set === null) {
          set = /* @__PURE__ */ new Set();
        }
        set.add(key);
      } else {
        var item2 = b.get(key);
        if (item2 === void 0 && !b.has(key) || !innerDeepEqual(item1, item2, strict, memo)) {
          if (strict)
            return false;
          if (!mapMightHaveLoosePrim(a, b, key, item1, memo))
            return false;
          if (set === null) {
            set = /* @__PURE__ */ new Set();
          }
          set.add(key);
        }
      }
    }
    if (set !== null) {
      var bEntries = arrayFromMap(b);
      for (var _i2 = 0; _i2 < bEntries.length; _i2++) {
        var _bEntries$_i = _slicedToArray(bEntries[_i2], 2), key = _bEntries$_i[0], item = _bEntries$_i[1];
        if (_typeof(key) === "object" && key !== null) {
          if (!mapHasEqualEntry(set, a, key, item, strict, memo))
            return false;
        } else if (!strict && (!a.has(key) || !innerDeepEqual(a.get(key), item, false, memo)) && !mapHasEqualEntry(set, a, key, item, false, memo)) {
          return false;
        }
      }
      return set.size === 0;
    }
    return true;
  }
  function objEquiv(a, b, strict, keys, memos, iterationType) {
    var i = 0;
    if (iterationType === kIsSet) {
      if (!setEquiv(a, b, strict, memos)) {
        return false;
      }
    } else if (iterationType === kIsMap) {
      if (!mapEquiv(a, b, strict, memos)) {
        return false;
      }
    } else if (iterationType === kIsArray) {
      for (; i < a.length; i++) {
        if (hasOwnProperty2(a, i)) {
          if (!hasOwnProperty2(b, i) || !innerDeepEqual(a[i], b[i], strict, memos)) {
            return false;
          }
        } else if (hasOwnProperty2(b, i)) {
          return false;
        } else {
          var keysA = Object.keys(a);
          for (; i < keysA.length; i++) {
            var key = keysA[i];
            if (!hasOwnProperty2(b, key) || !innerDeepEqual(a[key], b[key], strict, memos)) {
              return false;
            }
          }
          if (keysA.length !== Object.keys(b).length) {
            return false;
          }
          return true;
        }
      }
    }
    for (i = 0; i < keys.length; i++) {
      var _key = keys[i];
      if (!innerDeepEqual(a[_key], b[_key], strict, memos)) {
        return false;
      }
    }
    return true;
  }
  function isDeepEqual(val1, val2) {
    return innerDeepEqual(val1, val2, kLoose);
  }
  function isDeepStrictEqual(val1, val2) {
    return innerDeepEqual(val1, val2, kStrict);
  }
  comparisons = {
    isDeepEqual,
    isDeepStrictEqual
  };
  return comparisons;
}
var hasRequiredAssert;
function requireAssert() {
  if (hasRequiredAssert)
    return assertExports$1;
  hasRequiredAssert = 1;
  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function _classCallCheck(instance2, Constructor) {
    if (!(instance2 instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var _require = requireErrors(), _require$codes = _require.codes, ERR_AMBIGUOUS_ARGUMENT = _require$codes.ERR_AMBIGUOUS_ARGUMENT, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_INVALID_ARG_VALUE = _require$codes.ERR_INVALID_ARG_VALUE, ERR_INVALID_RETURN_VALUE = _require$codes.ERR_INVALID_RETURN_VALUE, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
  var AssertionError = requireAssertion_error();
  var _require2 = util, inspect = _require2.inspect;
  var _require$types = util.types, isPromise = _require$types.isPromise, isRegExp = _require$types.isRegExp;
  var objectAssign = Object.assign ? Object.assign : requireEs6ObjectAssign().assign;
  var objectIs2 = Object.is ? Object.is : requireObjectIs();
  var isDeepEqual;
  var isDeepStrictEqual;
  function lazyLoadComparison() {
    var comparison = requireComparisons();
    isDeepEqual = comparison.isDeepEqual;
    isDeepStrictEqual = comparison.isDeepStrictEqual;
  }
  var warned = false;
  var assert2 = assert$1.exports = ok;
  var NO_EXCEPTION_SENTINEL = {};
  function innerFail(obj) {
    if (obj.message instanceof Error)
      throw obj.message;
    throw new AssertionError(obj);
  }
  function fail(actual, expected, message, operator, stackStartFn) {
    var argsLen = arguments.length;
    var internalMessage;
    if (argsLen === 0) {
      internalMessage = "Failed";
    } else if (argsLen === 1) {
      message = actual;
      actual = void 0;
    } else {
      if (warned === false) {
        warned = true;
        var warn = process.emitWarning ? process.emitWarning : console.warn.bind(console);
        warn("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
      }
      if (argsLen === 2)
        operator = "!=";
    }
    if (message instanceof Error)
      throw message;
    var errArgs = {
      actual,
      expected,
      operator: operator === void 0 ? "fail" : operator,
      stackStartFn: stackStartFn || fail
    };
    if (message !== void 0) {
      errArgs.message = message;
    }
    var err = new AssertionError(errArgs);
    if (internalMessage) {
      err.message = internalMessage;
      err.generatedMessage = true;
    }
    throw err;
  }
  assert2.fail = fail;
  assert2.AssertionError = AssertionError;
  function innerOk(fn, argLen, value, message) {
    if (!value) {
      var generatedMessage = false;
      if (argLen === 0) {
        generatedMessage = true;
        message = "No value argument passed to `assert.ok()`";
      } else if (message instanceof Error) {
        throw message;
      }
      var err = new AssertionError({
        actual: value,
        expected: true,
        message,
        operator: "==",
        stackStartFn: fn
      });
      err.generatedMessage = generatedMessage;
      throw err;
    }
  }
  function ok() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    innerOk.apply(void 0, [ok, args.length].concat(args));
  }
  assert2.ok = ok;
  assert2.equal = function equal(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (actual != expected) {
      innerFail({
        actual,
        expected,
        message,
        operator: "==",
        stackStartFn: equal
      });
    }
  };
  assert2.notEqual = function notEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (actual == expected) {
      innerFail({
        actual,
        expected,
        message,
        operator: "!=",
        stackStartFn: notEqual
      });
    }
  };
  assert2.deepEqual = function deepEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (isDeepEqual === void 0)
      lazyLoadComparison();
    if (!isDeepEqual(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "deepEqual",
        stackStartFn: deepEqual
      });
    }
  };
  assert2.notDeepEqual = function notDeepEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (isDeepEqual === void 0)
      lazyLoadComparison();
    if (isDeepEqual(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "notDeepEqual",
        stackStartFn: notDeepEqual
      });
    }
  };
  assert2.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (isDeepEqual === void 0)
      lazyLoadComparison();
    if (!isDeepStrictEqual(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "deepStrictEqual",
        stackStartFn: deepStrictEqual
      });
    }
  };
  assert2.notDeepStrictEqual = notDeepStrictEqual;
  function notDeepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (isDeepEqual === void 0)
      lazyLoadComparison();
    if (isDeepStrictEqual(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "notDeepStrictEqual",
        stackStartFn: notDeepStrictEqual
      });
    }
  }
  assert2.strictEqual = function strictEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (!objectIs2(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "strictEqual",
        stackStartFn: strictEqual
      });
    }
  };
  assert2.notStrictEqual = function notStrictEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (objectIs2(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "notStrictEqual",
        stackStartFn: notStrictEqual
      });
    }
  };
  var Comparison = function Comparison2(obj, keys, actual) {
    var _this = this;
    _classCallCheck(this, Comparison2);
    keys.forEach(function(key) {
      if (key in obj) {
        if (actual !== void 0 && typeof actual[key] === "string" && isRegExp(obj[key]) && obj[key].test(actual[key])) {
          _this[key] = actual[key];
        } else {
          _this[key] = obj[key];
        }
      }
    });
  };
  function compareExceptionKey(actual, expected, key, message, keys, fn) {
    if (!(key in actual) || !isDeepStrictEqual(actual[key], expected[key])) {
      if (!message) {
        var a = new Comparison(actual, keys);
        var b = new Comparison(expected, keys, actual);
        var err = new AssertionError({
          actual: a,
          expected: b,
          operator: "deepStrictEqual",
          stackStartFn: fn
        });
        err.actual = actual;
        err.expected = expected;
        err.operator = fn.name;
        throw err;
      }
      innerFail({
        actual,
        expected,
        message,
        operator: fn.name,
        stackStartFn: fn
      });
    }
  }
  function expectedException(actual, expected, msg, fn) {
    if (typeof expected !== "function") {
      if (isRegExp(expected))
        return expected.test(actual);
      if (arguments.length === 2) {
        throw new ERR_INVALID_ARG_TYPE("expected", ["Function", "RegExp"], expected);
      }
      if (_typeof(actual) !== "object" || actual === null) {
        var err = new AssertionError({
          actual,
          expected,
          message: msg,
          operator: "deepStrictEqual",
          stackStartFn: fn
        });
        err.operator = fn.name;
        throw err;
      }
      var keys = Object.keys(expected);
      if (expected instanceof Error) {
        keys.push("name", "message");
      } else if (keys.length === 0) {
        throw new ERR_INVALID_ARG_VALUE("error", expected, "may not be an empty object");
      }
      if (isDeepEqual === void 0)
        lazyLoadComparison();
      keys.forEach(function(key) {
        if (typeof actual[key] === "string" && isRegExp(expected[key]) && expected[key].test(actual[key])) {
          return;
        }
        compareExceptionKey(actual, expected, key, msg, keys, fn);
      });
      return true;
    }
    if (expected.prototype !== void 0 && actual instanceof expected) {
      return true;
    }
    if (Error.isPrototypeOf(expected)) {
      return false;
    }
    return expected.call({}, actual) === true;
  }
  function getActual(fn) {
    if (typeof fn !== "function") {
      throw new ERR_INVALID_ARG_TYPE("fn", "Function", fn);
    }
    try {
      fn();
    } catch (e) {
      return e;
    }
    return NO_EXCEPTION_SENTINEL;
  }
  function checkIsPromise(obj) {
    return isPromise(obj) || obj !== null && _typeof(obj) === "object" && typeof obj.then === "function" && typeof obj.catch === "function";
  }
  function waitForActual(promiseFn) {
    return Promise.resolve().then(function() {
      var resultPromise;
      if (typeof promiseFn === "function") {
        resultPromise = promiseFn();
        if (!checkIsPromise(resultPromise)) {
          throw new ERR_INVALID_RETURN_VALUE("instance of Promise", "promiseFn", resultPromise);
        }
      } else if (checkIsPromise(promiseFn)) {
        resultPromise = promiseFn;
      } else {
        throw new ERR_INVALID_ARG_TYPE("promiseFn", ["Function", "Promise"], promiseFn);
      }
      return Promise.resolve().then(function() {
        return resultPromise;
      }).then(function() {
        return NO_EXCEPTION_SENTINEL;
      }).catch(function(e) {
        return e;
      });
    });
  }
  function expectsError(stackStartFn, actual, error, message) {
    if (typeof error === "string") {
      if (arguments.length === 4) {
        throw new ERR_INVALID_ARG_TYPE("error", ["Object", "Error", "Function", "RegExp"], error);
      }
      if (_typeof(actual) === "object" && actual !== null) {
        if (actual.message === error) {
          throw new ERR_AMBIGUOUS_ARGUMENT("error/message", 'The error message "'.concat(actual.message, '" is identical to the message.'));
        }
      } else if (actual === error) {
        throw new ERR_AMBIGUOUS_ARGUMENT("error/message", 'The error "'.concat(actual, '" is identical to the message.'));
      }
      message = error;
      error = void 0;
    } else if (error != null && _typeof(error) !== "object" && typeof error !== "function") {
      throw new ERR_INVALID_ARG_TYPE("error", ["Object", "Error", "Function", "RegExp"], error);
    }
    if (actual === NO_EXCEPTION_SENTINEL) {
      var details = "";
      if (error && error.name) {
        details += " (".concat(error.name, ")");
      }
      details += message ? ": ".concat(message) : ".";
      var fnType = stackStartFn.name === "rejects" ? "rejection" : "exception";
      innerFail({
        actual: void 0,
        expected: error,
        operator: stackStartFn.name,
        message: "Missing expected ".concat(fnType).concat(details),
        stackStartFn
      });
    }
    if (error && !expectedException(actual, error, message, stackStartFn)) {
      throw actual;
    }
  }
  function expectsNoError(stackStartFn, actual, error, message) {
    if (actual === NO_EXCEPTION_SENTINEL)
      return;
    if (typeof error === "string") {
      message = error;
      error = void 0;
    }
    if (!error || expectedException(actual, error)) {
      var details = message ? ": ".concat(message) : ".";
      var fnType = stackStartFn.name === "doesNotReject" ? "rejection" : "exception";
      innerFail({
        actual,
        expected: error,
        operator: stackStartFn.name,
        message: "Got unwanted ".concat(fnType).concat(details, "\n") + 'Actual message: "'.concat(actual && actual.message, '"'),
        stackStartFn
      });
    }
    throw actual;
  }
  assert2.throws = function throws(promiseFn) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    expectsError.apply(void 0, [throws, getActual(promiseFn)].concat(args));
  };
  assert2.rejects = function rejects(promiseFn) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    return waitForActual(promiseFn).then(function(result) {
      return expectsError.apply(void 0, [rejects, result].concat(args));
    });
  };
  assert2.doesNotThrow = function doesNotThrow(fn) {
    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }
    expectsNoError.apply(void 0, [doesNotThrow, getActual(fn)].concat(args));
  };
  assert2.doesNotReject = function doesNotReject(fn) {
    for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      args[_key5 - 1] = arguments[_key5];
    }
    return waitForActual(fn).then(function(result) {
      return expectsNoError.apply(void 0, [doesNotReject, result].concat(args));
    });
  };
  assert2.ifError = function ifError(err) {
    if (err !== null && err !== void 0) {
      var message = "ifError got unwanted exception: ";
      if (_typeof(err) === "object" && typeof err.message === "string") {
        if (err.message.length === 0 && err.constructor) {
          message += err.constructor.name;
        } else {
          message += err.message;
        }
      } else {
        message += inspect(err);
      }
      var newErr = new AssertionError({
        actual: err,
        expected: null,
        operator: "ifError",
        message,
        stackStartFn: ifError
      });
      var origStack = err.stack;
      if (typeof origStack === "string") {
        var tmp2 = origStack.split("\n");
        tmp2.shift();
        var tmp1 = newErr.stack.split("\n");
        for (var i = 0; i < tmp2.length; i++) {
          var pos = tmp1.indexOf(tmp2[i]);
          if (pos !== -1) {
            tmp1 = tmp1.slice(0, pos);
            break;
          }
        }
        newErr.stack = "".concat(tmp1.join("\n"), "\n").concat(tmp2.join("\n"));
      }
      throw newErr;
    }
  };
  function strict() {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }
    innerOk.apply(void 0, [strict, args.length].concat(args));
  }
  assert2.strict = objectAssign(strict, assert2, {
    equal: assert2.strictEqual,
    deepEqual: assert2.deepStrictEqual,
    notEqual: assert2.notStrictEqual,
    notDeepEqual: assert2.notDeepStrictEqual
  });
  assert2.strict.strict = assert2.strict;
  return assertExports$1;
}
var assertExports = requireAssert();
const assert = /* @__PURE__ */ getDefaultExportFromCjs(assertExports);
const MAGIC_BYTES_TESTNET = "5432";
const MAGIC_BYTES_MAINNET = "5832";
const PEGIN_OPCODE = "3C";
const PEGOUT_OPCODE = "3e";
const priv = utils.randomPrivateKey();
const keySetForFeeCalculation = [];
keySetForFeeCalculation.push({
  priv,
  ecdsaPub: getPublicKey(priv, true),
  schnorrPub: schnorr.getPublicKey(priv)
});
const _PegTransaction = class {
  constructor() {
    __publicField(this, "unconfirmedUtxos", false);
    __publicField(this, "requiredConfirmed", 6);
    __publicField(this, "net");
    __publicField(this, "ready", false);
    __publicField(this, "fromBtcAddress");
    __publicField(this, "pegInData", {
      stacksAddress: "ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN",
      // default for testing
      sbtcWalletAddress: "tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss",
      // default for testing
      amount: 0
    });
    __publicField(this, "addressInfo", {});
    __publicField(this, "fees", [2e4, 35e3, 5e4]);
    __publicField(this, "fee", 0);
    __publicField(this, "scureFee", 0);
    __publicField(this, "dust", 500);
    __publicField(this, "feeInfo", { low_fee_per_kb: 2e4, medium_fee_per_kb: 2e4, high_fee_per_kb: 2e4 });
    __publicField(this, "getDataToSign");
    __publicField(this, "setAmount", (amount) => {
      console.log(amount);
    });
    __publicField(this, "setPegInData", (pegInData) => {
      this.pegInData = pegInData;
    });
    __publicField(this, "setFeeRate", (rate) => {
      this.fee = rate >= 0 && rate < 3 ? this.fees[rate] : this.fees[1];
      if (this.pegInData.amount + this.fee > this.maxCommit()) {
        this.pegInData.amount = this.maxCommit() - this.fee;
      }
    });
    __publicField(this, "getChange", () => {
      return this.maxCommit() - this.fee - this.dust;
    });
    __publicField(this, "isUTXOConfirmed", (utxo) => {
      return utxo.tx.confirmations > 3;
    });
    __publicField(this, "calculateFees");
    __publicField(this, "getOutputsForDisplay");
    __publicField(this, "getInputsForDisplay", () => {
      const inputs = [];
      for (const utxo of this.addressInfo.utxos) {
        inputs.push({ txid: hex.decode(utxo.txid), index: utxo.vout });
      }
      return inputs;
    });
    /**
     * Overridden by super classes
     */
    __publicField(this, "buildTransaction");
    __publicField(this, "buildData");
  }
  //setAmount = (amount:number) => void;
  setStacksAddress(stacksAddress) {
    if (!stacksAddress) {
      throw new Error("Address not found");
    } else if (_PegTransaction.FORMAT.test(stacksAddress)) {
      throw new Error("please remove white space / special characters");
    }
    const decoded = decodeStacksAddress(stacksAddress.split(".")[0]);
    if (this.net === TEST_NETWORK && decoded[0] !== 26) {
      throw new Error("Please enter a valid stacks blockchain testnet address");
    }
    if (this.net === NETWORK && decoded[0] !== 22) {
      throw new Error("Please enter a valid stacks blockchain mainnet address");
    }
    this.pegInData.stacksAddress = stacksAddress;
  }
  maxCommit() {
    var _a, _b;
    if (!this.ready)
      return 0;
    const summ = (_b = (_a = this.addressInfo) == null ? void 0 : _a.utxos) == null ? void 0 : _b.map((item) => item.value).reduce((prev, curr) => prev + curr, 0);
    return summ || 0;
  }
};
let PegTransaction = _PegTransaction;
__publicField(PegTransaction, "FORMAT", /[ `!@#$%^&*()_+=[\]{};':"\\|,<>/?~]/);
/**
 * User's btc address is needed to fetch utxo's and calculate tx fee.
 * This gives us the max amount they can peg as the sum of utxo amounts.
 * @param fromBtcAddress
 * @returns 
 */
__publicField(PegTransaction, "hydrate", (o) => {
  const me = new _PegTransaction();
  me.net = o.net;
  if (!o.fromBtcAddress)
    throw new Error("No address - use create instead!");
  me.fromBtcAddress = o.fromBtcAddress;
  me.pegInData = o.pegInData;
  me.addressInfo = o.addressInfo;
  me.feeInfo = o.feeInfo;
  me.ready = o.ready;
  return me;
});
tupleCV({
  name: stringAsciiCV("SBTC Bridge"),
  version: stringAsciiCV("1.0.0"),
  "chain-id": uintCV(
    1
    /* Mainnet */
    /* Testnet */
  )
});
function concatByteArrays(byteArrays) {
  const totalSize = byteArrays.reduce((len, bytes) => len + bytes.length, 0);
  const resultArray = new Uint8Array(totalSize);
  let offset = 0;
  for (let i = 0; i < byteArrays.length; i++) {
    resultArray.set(byteArrays[i], offset);
    offset += byteArrays[i].length;
  }
  return resultArray;
}
const file$8 = "src/lib/components/common/CopyClipboard.svelte";
function create_fragment$8(ctx) {
  let textarea_1;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      textarea_1 = element("textarea");
      this.h();
    },
    l: function claim(nodes) {
      textarea_1 = claim_element(nodes, "TEXTAREA", {});
      children(textarea_1).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(textarea_1, file$8, 9, 0, 171);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, textarea_1, anchor);
      set_input_value(
        textarea_1,
        /*name*/
        ctx[0]
      );
      ctx[3](textarea_1);
      if (!mounted) {
        dispose = listen_dev(
          textarea_1,
          "input",
          /*textarea_1_input_handler*/
          ctx[2]
        );
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*name*/
      1) {
        set_input_value(
          textarea_1,
          /*name*/
          ctx2[0]
        );
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(textarea_1);
      ctx[3](null);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$8.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$8($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("CopyClipboard", slots, []);
  let { name } = $$props;
  let textarea;
  onMount(() => {
    textarea.select();
    document.execCommand("copy");
  });
  $$self.$$.on_mount.push(function() {
    if (name === void 0 && !("name" in $$props || $$self.$$.bound[$$self.$$.props["name"]])) {
      console.warn("<CopyClipboard> was created without expected prop 'name'");
    }
  });
  const writable_props = ["name"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<CopyClipboard> was created with unknown prop '${key}'`);
  });
  function textarea_1_input_handler() {
    name = this.value;
    $$invalidate(0, name);
  }
  function textarea_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      textarea = $$value;
      $$invalidate(1, textarea);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(0, name = $$props2.name);
  };
  $$self.$capture_state = () => ({ onMount, name, textarea });
  $$self.$inject_state = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(0, name = $$props2.name);
    if ("textarea" in $$props2)
      $$invalidate(1, textarea = $$props2.textarea);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [name, textarea, textarea_1_input_handler, textarea_1_binding];
}
class CopyClipboard extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$8, create_fragment$8, safe_not_equal, { name: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "CopyClipboard",
      options,
      id: create_fragment$8.name
    });
  }
  get name() {
    throw new Error("<CopyClipboard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set name(value) {
    throw new Error("<CopyClipboard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$7 = "src/lib/components/common/PegInfo.svelte";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[12] = list[i];
  child_ctx[14] = i;
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[15] = list[i];
  return child_ctx;
}
function create_else_block_2(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Unwrap");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Unwrap");
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block_2.name,
    type: "else",
    source: "(21:50) {:else}",
    ctx
  });
  return block;
}
function create_if_block_8(ctx) {
  let t;
  const block = {
    c: function create() {
      t = text("Wrap");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Wrap");
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_8.name,
    type: "if",
    source: "(21:23) {#if $sbtcConfig.pegIn}",
    ctx
  });
  return block;
}
function create_else_block_1(ctx) {
  let arrowdown;
  let current;
  arrowdown = new ArrowDown({ $$inline: true });
  const block = {
    c: function create() {
      create_component(arrowdown.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(arrowdown.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(arrowdown, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(arrowdown.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(arrowdown.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(arrowdown, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block_1.name,
    type: "else",
    source: "(43:150) {:else}",
    ctx
  });
  return block;
}
function create_if_block_7(ctx) {
  let arrowup;
  let current;
  arrowup = new ArrowUp({ $$inline: true });
  const block = {
    c: function create() {
      create_component(arrowup.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(arrowup.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(arrowup, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(arrowup.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(arrowup.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(arrowup, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_7.name,
    type: "if",
    source: "(43:127) {#if showHex}",
    ctx
  });
  return block;
}
function create_else_block$1(ctx) {
  let arrowdown;
  let current;
  arrowdown = new ArrowDown({ $$inline: true });
  const block = {
    c: function create() {
      create_component(arrowdown.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(arrowdown.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(arrowdown, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(arrowdown.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(arrowdown.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(arrowdown, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block$1.name,
    type: "else",
    source: "(44:154) {:else}",
    ctx
  });
  return block;
}
function create_if_block_6(ctx) {
  let arrowup;
  let current;
  arrowup = new ArrowUp({ $$inline: true });
  const block = {
    c: function create() {
      create_component(arrowup.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(arrowup.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(arrowup, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(arrowup.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(arrowup.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(arrowup, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_6.name,
    type: "if",
    source: "(44:132) {#if showTx}",
    ctx
  });
  return block;
}
function create_if_block_5$1(ctx) {
  let textarea;
  const block = {
    c: function create() {
      textarea = element("textarea");
      this.h();
    },
    l: function claim(nodes) {
      textarea = claim_element(nodes, "TEXTAREA", { rows: true, style: true });
      children(textarea).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(textarea, "rows", "6");
      set_style(textarea, "padding", "10px");
      set_style(textarea, "width", "100%");
      textarea.readOnly = true;
      textarea.value = /*currentTx*/
      ctx[2];
      add_location(textarea, file$7, 74, 8, 2995);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, textarea, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*currentTx*/
      4) {
        prop_dev(
          textarea,
          "value",
          /*currentTx*/
          ctx2[2]
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(textarea);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_5$1.name,
    type: "if",
    source: "(74:24) ",
    ctx
  });
  return block;
}
function create_if_block$5(ctx) {
  let section0;
  let h40;
  let t0;
  let t1;
  let t2;
  let section1;
  let h41;
  let t3;
  let t4;
  let each_value_1 = (
    /*sigData*/
    ctx[1].inputsForDisplay
  );
  validate_each_argument(each_value_1);
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  let each_value = (
    /*sigData*/
    ctx[1].outputsForDisplay
  );
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const block = {
    c: function create() {
      section0 = element("section");
      h40 = element("h4");
      t0 = text("Transaction Inputs");
      t1 = space();
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t2 = space();
      section1 = element("section");
      h41 = element("h4");
      t3 = text("Transaction Outputs");
      t4 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l: function claim(nodes) {
      section0 = claim_element(nodes, "SECTION", { class: true });
      var section0_nodes = children(section0);
      h40 = claim_element(section0_nodes, "H4", {});
      var h40_nodes = children(h40);
      t0 = claim_text(h40_nodes, "Transaction Inputs");
      h40_nodes.forEach(detach_dev);
      t1 = claim_space(section0_nodes);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].l(section0_nodes);
      }
      section0_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      section1 = claim_element(nodes, "SECTION", {});
      var section1_nodes = children(section1);
      h41 = claim_element(section1_nodes, "H4", {});
      var h41_nodes = children(h41);
      t3 = claim_text(h41_nodes, "Transaction Outputs");
      h41_nodes.forEach(detach_dev);
      t4 = claim_space(section1_nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(section1_nodes);
      }
      section1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(h40, file$7, 52, 8, 1994);
      attr_dev(section0, "class", "mb-4");
      add_location(section0, file$7, 51, 6, 1963);
      add_location(h41, file$7, 61, 6, 2352);
      add_location(section1, file$7, 60, 4, 2336);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, section0, anchor);
      append_hydration_dev(section0, h40);
      append_hydration_dev(h40, t0);
      append_hydration_dev(section0, t1);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        if (each_blocks_1[i]) {
          each_blocks_1[i].m(section0, null);
        }
      }
      insert_hydration_dev(target, t2, anchor);
      insert_hydration_dev(target, section1, anchor);
      append_hydration_dev(section1, h41);
      append_hydration_dev(h41, t3);
      append_hydration_dev(section1, t4);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(section1, null);
        }
      }
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*sigData*/
      2) {
        each_value_1 = /*sigData*/
        ctx2[1].inputsForDisplay;
        validate_each_argument(each_value_1);
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
          } else {
            each_blocks_1[i] = create_each_block_1(child_ctx);
            each_blocks_1[i].c();
            each_blocks_1[i].m(section0, null);
          }
        }
        for (; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].d(1);
        }
        each_blocks_1.length = each_value_1.length;
      }
      if (dirty & /*sigData*/
      2) {
        each_value = /*sigData*/
        ctx2[1].outputsForDisplay;
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(section1, null);
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
        detach_dev(section0);
      destroy_each(each_blocks_1, detaching);
      if (detaching)
        detach_dev(t2);
      if (detaching)
        detach_dev(section1);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$5.name,
    type: "if",
    source: "(51:6) {#if showTx}",
    ctx
  });
  return block;
}
function create_each_block_1(ctx) {
  let div2;
  let div0;
  let t0_value = (
    /*input*/
    ctx[15].txid + ""
  );
  let t0;
  let t1;
  let span;
  let t2_value = (
    /*input*/
    ctx[15].vout + ""
  );
  let t2;
  let t3;
  let div1;
  let t4_value = (
    /*input*/
    ctx[15].value + ""
  );
  let t4;
  let t5;
  const block = {
    c: function create() {
      div2 = element("div");
      div0 = element("div");
      t0 = text(t0_value);
      t1 = text(":");
      span = element("span");
      t2 = text(t2_value);
      t3 = space();
      div1 = element("div");
      t4 = text(t4_value);
      t5 = space();
      this.h();
    },
    l: function claim(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, t0_value);
      t1 = claim_text(div0_nodes, ":");
      span = claim_element(div0_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t2 = claim_text(span_nodes, t2_value);
      span_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t4 = claim_text(div1_nodes, t4_value);
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(div2_nodes);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "text-dark");
      add_location(span, file$7, 55, 41, 2191);
      attr_dev(div0, "class", "col-10");
      add_location(div0, file$7, 55, 8, 2158);
      attr_dev(div1, "class", "col-2");
      add_location(div1, file$7, 56, 8, 2249);
      attr_dev(div2, "class", "info-panel text-small mx-1 row bg-light my-1 py-1 text-dark");
      add_location(div2, file$7, 54, 6, 2076);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div2, anchor);
      append_hydration_dev(div2, div0);
      append_hydration_dev(div0, t0);
      append_hydration_dev(div0, t1);
      append_hydration_dev(div0, span);
      append_hydration_dev(span, t2);
      append_hydration_dev(div2, t3);
      append_hydration_dev(div2, div1);
      append_hydration_dev(div1, t4);
      append_hydration_dev(div2, t5);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*sigData*/
      2 && t0_value !== (t0_value = /*input*/
      ctx2[15].txid + ""))
        set_data_dev(t0, t0_value);
      if (dirty & /*sigData*/
      2 && t2_value !== (t2_value = /*input*/
      ctx2[15].vout + ""))
        set_data_dev(t2, t2_value);
      if (dirty & /*sigData*/
      2 && t4_value !== (t4_value = /*input*/
      ctx2[15].value + ""))
        set_data_dev(t4, t4_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_1.name,
    type: "each",
    source: "(54:6) {#each sigData.inputsForDisplay as input}",
    ctx
  });
  return block;
}
function create_if_block_4$2(ctx) {
  let t0;
  let t1_value = (
    /*i*/
    ctx[14] + 1 + ""
  );
  let t1;
  const block = {
    c: function create() {
      t0 = text("Output ");
      t1 = text(t1_value);
    },
    l: function claim(nodes) {
      t0 = claim_text(nodes, "Output ");
      t1 = claim_text(nodes, t1_value);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t0, anchor);
      insert_hydration_dev(target, t1, anchor);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(t1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_4$2.name,
    type: "if",
    source: "(65:27) {#if typeof output.amount === 'number'}",
    ctx
  });
  return block;
}
function create_if_block_3$2(ctx) {
  let span;
  let t_value = (
    /*output*/
    ctx[12].address + ""
  );
  let t;
  const block = {
    c: function create() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "text-dark");
      add_location(span, file$7, 66, 30, 2666);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, span, anchor);
      append_hydration_dev(span, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*sigData*/
      2 && t_value !== (t_value = /*output*/
      ctx2[12].address + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_3$2.name,
    type: "if",
    source: "(67:10) {#if output.address}",
    ctx
  });
  return block;
}
function create_if_block_2$2(ctx) {
  let span;
  let t_value = (
    /*output*/
    ctx[12].script + ""
  );
  let t;
  const block = {
    c: function create() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "text-dark");
      add_location(span, file$7, 67, 29, 2748);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, span, anchor);
      append_hydration_dev(span, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*sigData*/
      2 && t_value !== (t_value = /*output*/
      ctx2[12].script + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2$2.name,
    type: "if",
    source: "(68:10) {#if output.script}",
    ctx
  });
  return block;
}
function create_if_block_1$3(ctx) {
  var _a;
  let span;
  let t_value = (
    /*output*/
    ((_a = ctx[12]) == null ? void 0 : _a.amount) + ""
  );
  let t;
  const block = {
    c: function create() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "text-dark");
      add_location(span, file$7, 69, 46, 2861);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, span, anchor);
      append_hydration_dev(span, t);
    },
    p: function update(ctx2, dirty) {
      var _a2;
      if (dirty & /*sigData*/
      2 && t_value !== (t_value = /*output*/
      ((_a2 = ctx2[12]) == null ? void 0 : _a2.amount) + ""))
        set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$3.name,
    type: "if",
    source: "(70:27) {#if output.amount}",
    ctx
  });
  return block;
}
function create_each_block(ctx) {
  let div3;
  let div0;
  let t0;
  let div1;
  let t1;
  let t2;
  let div2;
  let t3;
  let if_block0 = typeof /*output*/
  ctx[12].amount === "number" && create_if_block_4$2(ctx);
  let if_block1 = (
    /*output*/
    ctx[12].address && create_if_block_3$2(ctx)
  );
  let if_block2 = (
    /*output*/
    ctx[12].script && create_if_block_2$2(ctx)
  );
  let if_block3 = (
    /*output*/
    ctx[12].amount && create_if_block_1$3(ctx)
  );
  const block = {
    c: function create() {
      div3 = element("div");
      div0 = element("div");
      if (if_block0)
        if_block0.c();
      t0 = space();
      div1 = element("div");
      if (if_block1)
        if_block1.c();
      t1 = space();
      if (if_block2)
        if_block2.c();
      t2 = space();
      div2 = element("div");
      if (if_block3)
        if_block3.c();
      t3 = space();
      this.h();
    },
    l: function claim(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (if_block0)
        if_block0.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if (if_block1)
        if_block1.l(div1_nodes);
      t1 = claim_space(div1_nodes);
      if (if_block2)
        if_block2.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      t2 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      if (if_block3)
        if_block3.l(div2_nodes);
      div2_nodes.forEach(detach_dev);
      t3 = claim_space(div3_nodes);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "col-2");
      add_location(div0, file$7, 64, 8, 2524);
      attr_dev(div1, "class", "col-8");
      add_location(div1, file$7, 65, 8, 2616);
      attr_dev(div2, "class", "col-2");
      add_location(div2, file$7, 69, 8, 2823);
      attr_dev(div3, "class", "info-panel text-small mx-1 row bg-light my-1 py-1 text-danger");
      add_location(div3, file$7, 63, 6, 2440);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div3, anchor);
      append_hydration_dev(div3, div0);
      if (if_block0)
        if_block0.m(div0, null);
      append_hydration_dev(div3, t0);
      append_hydration_dev(div3, div1);
      if (if_block1)
        if_block1.m(div1, null);
      append_hydration_dev(div1, t1);
      if (if_block2)
        if_block2.m(div1, null);
      append_hydration_dev(div3, t2);
      append_hydration_dev(div3, div2);
      if (if_block3)
        if_block3.m(div2, null);
      append_hydration_dev(div3, t3);
    },
    p: function update(ctx2, dirty) {
      if (typeof /*output*/
      ctx2[12].amount === "number") {
        if (if_block0)
          ;
        else {
          if_block0 = create_if_block_4$2(ctx2);
          if_block0.c();
          if_block0.m(div0, null);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*output*/
        ctx2[12].address
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_3$2(ctx2);
          if_block1.c();
          if_block1.m(div1, t1);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (
        /*output*/
        ctx2[12].script
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block_2$2(ctx2);
          if_block2.c();
          if_block2.m(div1, null);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
      if (
        /*output*/
        ctx2[12].amount
      ) {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
        } else {
          if_block3 = create_if_block_1$3(ctx2);
          if_block3.c();
          if_block3.m(div2, null);
        }
      } else if (if_block3) {
        if_block3.d(1);
        if_block3 = null;
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div3);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
      if (if_block3)
        if_block3.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(63:6) {#each sigData.outputsForDisplay as output, i}",
    ctx
  });
  return block;
}
function create_fragment$7(ctx) {
  let section;
  let div2;
  let div0;
  let t0;
  let t1;
  let div1;
  let t2;
  let t3;
  let div5;
  let div3;
  let t4;
  let t5;
  let div4;
  let t6_value = (
    /*pegInfo*/
    ctx[0].fromBtcAddress + ""
  );
  let t6;
  let t7;
  let div8;
  let div6;
  let t8;
  let t9;
  let div7;
  let t10_value = (
    /*webWallet*/
    ctx[6] ? "Hiro Web Wallet" : "Other Wallet"
  );
  let t10;
  let t11;
  let div11;
  let div9;
  let t12;
  let t13;
  let div10;
  let t14_value = (
    /*pegInfo*/
    ctx[0].pegInData.stacksAddress + ""
  );
  let t14;
  let t15;
  let div14;
  let div12;
  let t16;
  let t17;
  let div13;
  let t18_value = (
    /*pegInfo*/
    ctx[0].pegInData.amount + ""
  );
  let t18;
  let t19;
  let div18;
  let div15;
  let t20;
  let t21;
  let div17;
  let div16;
  let span0;
  let a0;
  let current_block_type_index;
  let if_block1;
  let t22;
  let t23;
  let span1;
  let a1;
  let current_block_type_index_1;
  let if_block2;
  let t24;
  let t25;
  let span2;
  let a2;
  let t26;
  let t27;
  let div20;
  let div19;
  let current;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (
      /*$sbtcConfig*/
      ctx2[5].pegIn
    )
      return create_if_block_8;
    return create_else_block_2;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type(ctx);
  const if_block_creators = [create_if_block_7, create_else_block_1];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (
      /*showHex*/
      ctx2[4]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx);
  if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const if_block_creators_1 = [create_if_block_6, create_else_block$1];
  const if_blocks_1 = [];
  function select_block_type_2(ctx2, dirty) {
    if (
      /*showTx*/
      ctx2[3]
    )
      return 0;
    return 1;
  }
  current_block_type_index_1 = select_block_type_2(ctx);
  if_block2 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
  function select_block_type_3(ctx2, dirty) {
    if (
      /*showTx*/
      ctx2[3]
    )
      return create_if_block$5;
    if (
      /*showHex*/
      ctx2[4]
    )
      return create_if_block_5$1;
  }
  let current_block_type_1 = select_block_type_3(ctx);
  let if_block3 = current_block_type_1 && current_block_type_1(ctx);
  const block = {
    c: function create() {
      section = element("section");
      div2 = element("div");
      div0 = element("div");
      t0 = text("Request");
      t1 = space();
      div1 = element("div");
      if_block0.c();
      t2 = text(" Bitcoin");
      t3 = space();
      div5 = element("div");
      div3 = element("div");
      t4 = text("From");
      t5 = space();
      div4 = element("div");
      t6 = text(t6_value);
      t7 = space();
      div8 = element("div");
      div6 = element("div");
      t8 = text("Wallet");
      t9 = space();
      div7 = element("div");
      t10 = text(t10_value);
      t11 = space();
      div11 = element("div");
      div9 = element("div");
      t12 = text("Stacks Address");
      t13 = space();
      div10 = element("div");
      t14 = text(t14_value);
      t15 = space();
      div14 = element("div");
      div12 = element("div");
      t16 = text("Amount");
      t17 = space();
      div13 = element("div");
      t18 = text(t18_value);
      t19 = space();
      div18 = element("div");
      div15 = element("div");
      t20 = text("Details");
      t21 = space();
      div17 = element("div");
      div16 = element("div");
      span0 = element("span");
      a0 = element("a");
      if_block1.c();
      t22 = text(" show raw tx");
      t23 = space();
      span1 = element("span");
      a1 = element("a");
      if_block2.c();
      t24 = text(" show tx details");
      t25 = space();
      span2 = element("span");
      a2 = element("a");
      t26 = text("back");
      t27 = space();
      div20 = element("div");
      div19 = element("div");
      if (if_block3)
        if_block3.c();
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      div2 = claim_element(section_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "Request");
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if_block0.l(div1_nodes);
      t2 = claim_text(div1_nodes, " Bitcoin");
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t3 = claim_space(section_nodes);
      div5 = claim_element(section_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div3 = claim_element(div5_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      t4 = claim_text(div3_nodes, "From");
      div3_nodes.forEach(detach_dev);
      t5 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      t6 = claim_text(div4_nodes, t6_value);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t7 = claim_space(section_nodes);
      div8 = claim_element(section_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      div6 = claim_element(div8_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      t8 = claim_text(div6_nodes, "Wallet");
      div6_nodes.forEach(detach_dev);
      t9 = claim_space(div8_nodes);
      div7 = claim_element(div8_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      t10 = claim_text(div7_nodes, t10_value);
      div7_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      t11 = claim_space(section_nodes);
      div11 = claim_element(section_nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      div9 = claim_element(div11_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      t12 = claim_text(div9_nodes, "Stacks Address");
      div9_nodes.forEach(detach_dev);
      t13 = claim_space(div11_nodes);
      div10 = claim_element(div11_nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      t14 = claim_text(div10_nodes, t14_value);
      div10_nodes.forEach(detach_dev);
      div11_nodes.forEach(detach_dev);
      t15 = claim_space(section_nodes);
      div14 = claim_element(section_nodes, "DIV", { class: true });
      var div14_nodes = children(div14);
      div12 = claim_element(div14_nodes, "DIV", { class: true });
      var div12_nodes = children(div12);
      t16 = claim_text(div12_nodes, "Amount");
      div12_nodes.forEach(detach_dev);
      t17 = claim_space(div14_nodes);
      div13 = claim_element(div14_nodes, "DIV", { class: true });
      var div13_nodes = children(div13);
      t18 = claim_text(div13_nodes, t18_value);
      div13_nodes.forEach(detach_dev);
      div14_nodes.forEach(detach_dev);
      t19 = claim_space(section_nodes);
      div18 = claim_element(section_nodes, "DIV", { class: true });
      var div18_nodes = children(div18);
      div15 = claim_element(div18_nodes, "DIV", { class: true });
      var div15_nodes = children(div15);
      t20 = claim_text(div15_nodes, "Details");
      div15_nodes.forEach(detach_dev);
      t21 = claim_space(div18_nodes);
      div17 = claim_element(div18_nodes, "DIV", { class: true });
      var div17_nodes = children(div17);
      div16 = claim_element(div17_nodes, "DIV", { class: true });
      var div16_nodes = children(div16);
      span0 = claim_element(div16_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      a0 = claim_element(span0_nodes, "A", { class: true, href: true });
      var a0_nodes = children(a0);
      if_block1.l(a0_nodes);
      t22 = claim_text(a0_nodes, " show raw tx");
      a0_nodes.forEach(detach_dev);
      span0_nodes.forEach(detach_dev);
      t23 = claim_space(div16_nodes);
      span1 = claim_element(div16_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      a1 = claim_element(span1_nodes, "A", { class: true, href: true });
      var a1_nodes = children(a1);
      if_block2.l(a1_nodes);
      t24 = claim_text(a1_nodes, " show tx details");
      a1_nodes.forEach(detach_dev);
      span1_nodes.forEach(detach_dev);
      t25 = claim_space(div16_nodes);
      span2 = claim_element(div16_nodes, "SPAN", {});
      var span2_nodes = children(span2);
      a2 = claim_element(span2_nodes, "A", { class: true, href: true });
      var a2_nodes = children(a2);
      t26 = claim_text(a2_nodes, "back");
      a2_nodes.forEach(detach_dev);
      span2_nodes.forEach(detach_dev);
      div16_nodes.forEach(detach_dev);
      div17_nodes.forEach(detach_dev);
      div18_nodes.forEach(detach_dev);
      t27 = claim_space(section_nodes);
      div20 = claim_element(section_nodes, "DIV", { class: true });
      var div20_nodes = children(div20);
      div19 = claim_element(div20_nodes, "DIV", { class: true });
      var div19_nodes = children(div19);
      if (if_block3)
        if_block3.l(div19_nodes);
      div19_nodes.forEach(detach_dev);
      div20_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "col-4");
      add_location(div0, file$7, 19, 4, 593);
      attr_dev(div1, "class", "col-8");
      add_location(div1, file$7, 20, 4, 630);
      attr_dev(div2, "class", "row");
      add_location(div2, file$7, 18, 2, 571);
      attr_dev(div3, "class", "col-4");
      add_location(div3, file$7, 23, 4, 742);
      attr_dev(div4, "class", "col-8");
      add_location(div4, file$7, 24, 4, 776);
      attr_dev(div5, "class", "row");
      add_location(div5, file$7, 22, 2, 720);
      attr_dev(div6, "class", "col-4");
      add_location(div6, file$7, 27, 4, 859);
      attr_dev(div7, "class", "col-8");
      add_location(div7, file$7, 28, 4, 895);
      attr_dev(div8, "class", "row");
      add_location(div8, file$7, 26, 2, 837);
      attr_dev(div9, "class", "col-4");
      add_location(div9, file$7, 31, 4, 1004);
      attr_dev(div10, "class", "col-8");
      add_location(div10, file$7, 32, 4, 1048);
      attr_dev(div11, "class", "row");
      add_location(div11, file$7, 30, 2, 982);
      attr_dev(div12, "class", "col-4");
      add_location(div12, file$7, 35, 4, 1140);
      attr_dev(div13, "class", "col-8");
      add_location(div13, file$7, 36, 4, 1176);
      attr_dev(div14, "class", "row");
      add_location(div14, file$7, 34, 2, 1118);
      attr_dev(div15, "class", "col-4");
      add_location(div15, file$7, 39, 4, 1261);
      attr_dev(a0, "class", "text-info");
      attr_dev(a0, "href", "/");
      add_location(a0, file$7, 42, 27, 1366);
      attr_dev(span0, "class", "mx-1");
      add_location(span0, file$7, 42, 8, 1347);
      attr_dev(a1, "class", "text-info");
      attr_dev(a1, "href", "/");
      add_location(a1, file$7, 43, 32, 1569);
      attr_dev(span1, "class", "mx-1 me-4");
      add_location(span1, file$7, 43, 8, 1545);
      attr_dev(a2, "class", "text-info");
      attr_dev(a2, "href", "/");
      add_location(a2, file$7, 44, 14, 1757);
      add_location(span2, file$7, 44, 8, 1751);
      attr_dev(div16, "class", "");
      add_location(div16, file$7, 41, 6, 1324);
      attr_dev(div17, "class", "col-8");
      add_location(div17, file$7, 40, 4, 1298);
      attr_dev(div18, "class", "row");
      add_location(div18, file$7, 38, 2, 1239);
      attr_dev(div19, "class", "col-12");
      add_location(div19, file$7, 49, 4, 1917);
      attr_dev(div20, "class", "row");
      add_location(div20, file$7, 48, 2, 1895);
      attr_dev(section, "class", "");
      add_location(section, file$7, 16, 0, 549);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, section, anchor);
      append_hydration_dev(section, div2);
      append_hydration_dev(div2, div0);
      append_hydration_dev(div0, t0);
      append_hydration_dev(div2, t1);
      append_hydration_dev(div2, div1);
      if_block0.m(div1, null);
      append_hydration_dev(div1, t2);
      append_hydration_dev(section, t3);
      append_hydration_dev(section, div5);
      append_hydration_dev(div5, div3);
      append_hydration_dev(div3, t4);
      append_hydration_dev(div5, t5);
      append_hydration_dev(div5, div4);
      append_hydration_dev(div4, t6);
      append_hydration_dev(section, t7);
      append_hydration_dev(section, div8);
      append_hydration_dev(div8, div6);
      append_hydration_dev(div6, t8);
      append_hydration_dev(div8, t9);
      append_hydration_dev(div8, div7);
      append_hydration_dev(div7, t10);
      append_hydration_dev(section, t11);
      append_hydration_dev(section, div11);
      append_hydration_dev(div11, div9);
      append_hydration_dev(div9, t12);
      append_hydration_dev(div11, t13);
      append_hydration_dev(div11, div10);
      append_hydration_dev(div10, t14);
      append_hydration_dev(section, t15);
      append_hydration_dev(section, div14);
      append_hydration_dev(div14, div12);
      append_hydration_dev(div12, t16);
      append_hydration_dev(div14, t17);
      append_hydration_dev(div14, div13);
      append_hydration_dev(div13, t18);
      append_hydration_dev(section, t19);
      append_hydration_dev(section, div18);
      append_hydration_dev(div18, div15);
      append_hydration_dev(div15, t20);
      append_hydration_dev(div18, t21);
      append_hydration_dev(div18, div17);
      append_hydration_dev(div17, div16);
      append_hydration_dev(div16, span0);
      append_hydration_dev(span0, a0);
      if_blocks[current_block_type_index].m(a0, null);
      append_hydration_dev(a0, t22);
      append_hydration_dev(div16, t23);
      append_hydration_dev(div16, span1);
      append_hydration_dev(span1, a1);
      if_blocks_1[current_block_type_index_1].m(a1, null);
      append_hydration_dev(a1, t24);
      append_hydration_dev(div16, t25);
      append_hydration_dev(div16, span2);
      append_hydration_dev(span2, a2);
      append_hydration_dev(a2, t26);
      append_hydration_dev(section, t27);
      append_hydration_dev(section, div20);
      append_hydration_dev(div20, div19);
      if (if_block3)
        if_block3.m(div19, null);
      current = true;
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
    p: function update(ctx2, [dirty]) {
      if (current_block_type !== (current_block_type = select_block_type(ctx2))) {
        if_block0.d(1);
        if_block0 = current_block_type(ctx2);
        if (if_block0) {
          if_block0.c();
          if_block0.m(div1, t2);
        }
      }
      if ((!current || dirty & /*pegInfo*/
      1) && t6_value !== (t6_value = /*pegInfo*/
      ctx2[0].fromBtcAddress + ""))
        set_data_dev(t6, t6_value);
      if ((!current || dirty & /*pegInfo*/
      1) && t14_value !== (t14_value = /*pegInfo*/
      ctx2[0].pegInData.stacksAddress + ""))
        set_data_dev(t14, t14_value);
      if ((!current || dirty & /*pegInfo*/
      1) && t18_value !== (t18_value = /*pegInfo*/
      ctx2[0].pegInData.amount + ""))
        set_data_dev(t18, t18_value);
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2);
      if (current_block_type_index !== previous_block_index) {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block1 = if_blocks[current_block_type_index];
        if (!if_block1) {
          if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block1.c();
        }
        transition_in(if_block1, 1);
        if_block1.m(a0, t22);
      }
      let previous_block_index_1 = current_block_type_index_1;
      current_block_type_index_1 = select_block_type_2(ctx2);
      if (current_block_type_index_1 !== previous_block_index_1) {
        group_outros();
        transition_out(if_blocks_1[previous_block_index_1], 1, 1, () => {
          if_blocks_1[previous_block_index_1] = null;
        });
        check_outros();
        if_block2 = if_blocks_1[current_block_type_index_1];
        if (!if_block2) {
          if_block2 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx2);
          if_block2.c();
        }
        transition_in(if_block2, 1);
        if_block2.m(a1, t24);
      }
      if (current_block_type_1 === (current_block_type_1 = select_block_type_3(ctx2)) && if_block3) {
        if_block3.p(ctx2, dirty);
      } else {
        if (if_block3)
          if_block3.d(1);
        if_block3 = current_block_type_1 && current_block_type_1(ctx2);
        if (if_block3) {
          if_block3.c();
          if_block3.m(div19, null);
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block1);
      transition_in(if_block2);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block1);
      transition_out(if_block2);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(section);
      if_block0.d();
      if_blocks[current_block_type_index].d();
      if_blocks_1[current_block_type_index_1].d();
      if (if_block3) {
        if_block3.d();
      }
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$7.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$7($$self, $$props, $$invalidate) {
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(5, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("PegInfo", slots, []);
  const dispatch = createEventDispatcher();
  let { pegInfo } = $$props;
  let { sigData } = $$props;
  let { currentTx } = $$props;
  const webWallet = pegInfo.fromBtcAddress === addresses().cardinal;
  let showTx = false;
  let showHex = false;
  const updateTransaction = () => {
    dispatch("update_transaction", { success: true });
  };
  $$self.$$.on_mount.push(function() {
    if (pegInfo === void 0 && !("pegInfo" in $$props || $$self.$$.bound[$$self.$$.props["pegInfo"]])) {
      console.warn("<PegInfo> was created without expected prop 'pegInfo'");
    }
    if (sigData === void 0 && !("sigData" in $$props || $$self.$$.bound[$$self.$$.props["sigData"]])) {
      console.warn("<PegInfo> was created without expected prop 'sigData'");
    }
    if (currentTx === void 0 && !("currentTx" in $$props || $$self.$$.bound[$$self.$$.props["currentTx"]])) {
      console.warn("<PegInfo> was created without expected prop 'currentTx'");
    }
  });
  const writable_props = ["pegInfo", "sigData", "currentTx"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<PegInfo> was created with unknown prop '${key}'`);
  });
  const click_handler = () => {
    $$invalidate(4, showHex = !showHex);
    $$invalidate(3, showTx = false);
  };
  const click_handler_1 = () => {
    $$invalidate(3, showTx = !showTx);
    $$invalidate(4, showHex = false);
  };
  const click_handler_2 = () => updateTransaction();
  $$self.$$set = ($$props2) => {
    if ("pegInfo" in $$props2)
      $$invalidate(0, pegInfo = $$props2.pegInfo);
    if ("sigData" in $$props2)
      $$invalidate(1, sigData = $$props2.sigData);
    if ("currentTx" in $$props2)
      $$invalidate(2, currentTx = $$props2.currentTx);
  };
  $$self.$capture_state = () => ({
    addresses,
    createEventDispatcher,
    ArrowUp,
    ArrowDown,
    CheckCircle,
    sbtcConfig,
    dispatch,
    pegInfo,
    sigData,
    currentTx,
    webWallet,
    showTx,
    showHex,
    updateTransaction,
    $sbtcConfig
  });
  $$self.$inject_state = ($$props2) => {
    if ("pegInfo" in $$props2)
      $$invalidate(0, pegInfo = $$props2.pegInfo);
    if ("sigData" in $$props2)
      $$invalidate(1, sigData = $$props2.sigData);
    if ("currentTx" in $$props2)
      $$invalidate(2, currentTx = $$props2.currentTx);
    if ("showTx" in $$props2)
      $$invalidate(3, showTx = $$props2.showTx);
    if ("showHex" in $$props2)
      $$invalidate(4, showHex = $$props2.showHex);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    pegInfo,
    sigData,
    currentTx,
    showTx,
    showHex,
    $sbtcConfig,
    webWallet,
    updateTransaction,
    click_handler,
    click_handler_1,
    click_handler_2
  ];
}
class PegInfo extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$7, create_fragment$7, safe_not_equal, { pegInfo: 0, sigData: 1, currentTx: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "PegInfo",
      options,
      id: create_fragment$7.name
    });
  }
  get pegInfo() {
    throw new Error("<PegInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set pegInfo(value) {
    throw new Error("<PegInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get sigData() {
    throw new Error("<PegInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set sigData(value) {
    throw new Error("<PegInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get currentTx() {
    throw new Error("<PegInfo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set currentTx(value) {
    throw new Error("<PegInfo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const electrum1 = "" + new URL("../assets/electrum1.b86953ea.png", import.meta.url).href;
const electrum2 = "" + new URL("../assets/electrum2.8623e396.png", import.meta.url).href;
const electrum3 = "" + new URL("../assets/electrum3.a984e762.png", import.meta.url).href;
const Electrum_svelte_svelte_type_style_lang = "";
const file$6 = "src/lib/components/wallets/Electrum.svelte";
function create_if_block$4(ctx) {
  let p;
  let t;
  const block = {
    c: function create() {
      p = element("p");
      t = text("Testnet Hint: /Applications/Electrum.app/Contents/MacOS/run_electrum --testnet");
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Testnet Hint: /Applications/Electrum.app/Contents/MacOS/run_electrum --testnet");
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "text-small");
      add_location(p, file$6, 19, 4, 895);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, p, anchor);
      append_hydration_dev(p, t);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$4.name,
    type: "if",
    source: "(19:4) {#if network === 'testnet'}",
    ctx
  });
  return block;
}
function create_fragment$6(ctx) {
  let div5;
  let div0;
  let h40;
  let t0;
  let t1;
  let p0;
  let t2;
  let t3;
  let p1;
  let t4;
  let t5;
  let p2;
  let t6;
  let a;
  let t7;
  let t8;
  let t9;
  let div1;
  let h41;
  let t10;
  let t11;
  let p3;
  let t12;
  let t13;
  let img0;
  let img0_src_value;
  let t14;
  let div2;
  let img1;
  let img1_src_value;
  let t15;
  let div3;
  let h42;
  let t16;
  let t17;
  let img2;
  let img2_src_value;
  let t18;
  let div4;
  let h43;
  let t19;
  let t20;
  let p4;
  let span;
  let t21;
  let t22;
  let img3;
  let img3_src_value;
  let if_block = (
    /*network*/
    ctx[0] === "testnet" && create_if_block$4(ctx)
  );
  const block = {
    c: function create() {
      div5 = element("div");
      div0 = element("div");
      h40 = element("h4");
      t0 = text("Intro.");
      t1 = space();
      p0 = element("p");
      t2 = text("The transaction has been copied to the clipboard.");
      t3 = space();
      p1 = element("p");
      t4 = text("This flow has been tested with Electrum 4.3.3.");
      t5 = space();
      p2 = element("p");
      t6 = text("Once sent the transaction will show up on the ");
      a = element("a");
      t7 = text("explorer");
      t8 = space();
      if (if_block)
        if_block.c();
      t9 = space();
      div1 = element("div");
      h41 = element("h4");
      t10 = text("1. Paste the Transaction.");
      t11 = space();
      p3 = element("p");
      t12 = text("Paste the transaction into your Electrum wallet");
      t13 = space();
      img0 = element("img");
      t14 = space();
      div2 = element("div");
      img1 = element("img");
      t15 = space();
      div3 = element("div");
      h42 = element("h4");
      t16 = text("2. Sign the Transaction.");
      t17 = space();
      img2 = element("img");
      t18 = space();
      div4 = element("div");
      h43 = element("h4");
      t19 = text("3. Broadcast the Transaction.");
      t20 = space();
      p4 = element("p");
      span = element("span");
      t21 = text("Note: Double check your wallet displays the correct recipient and amount.");
      t22 = space();
      img3 = element("img");
      this.h();
    },
    l: function claim(nodes) {
      div5 = claim_element(nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div0 = claim_element(div5_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h40 = claim_element(div0_nodes, "H4", {});
      var h40_nodes = children(h40);
      t0 = claim_text(h40_nodes, "Intro.");
      h40_nodes.forEach(detach_dev);
      t1 = claim_space(div0_nodes);
      p0 = claim_element(div0_nodes, "P", {});
      var p0_nodes = children(p0);
      t2 = claim_text(p0_nodes, "The transaction has been copied to the clipboard.");
      p0_nodes.forEach(detach_dev);
      t3 = claim_space(div0_nodes);
      p1 = claim_element(div0_nodes, "P", {});
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, "This flow has been tested with Electrum 4.3.3.");
      p1_nodes.forEach(detach_dev);
      t5 = claim_space(div0_nodes);
      p2 = claim_element(div0_nodes, "P", {});
      var p2_nodes = children(p2);
      t6 = claim_text(p2_nodes, "Once sent the transaction will show up on the ");
      a = claim_element(p2_nodes, "A", { href: true, target: true, rel: true });
      var a_nodes = children(a);
      t7 = claim_text(a_nodes, "explorer");
      a_nodes.forEach(detach_dev);
      p2_nodes.forEach(detach_dev);
      t8 = claim_space(div0_nodes);
      if (if_block)
        if_block.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t9 = claim_space(div5_nodes);
      div1 = claim_element(div5_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      h41 = claim_element(div1_nodes, "H4", {});
      var h41_nodes = children(h41);
      t10 = claim_text(h41_nodes, "1. Paste the Transaction.");
      h41_nodes.forEach(detach_dev);
      t11 = claim_space(div1_nodes);
      p3 = claim_element(div1_nodes, "P", {});
      var p3_nodes = children(p3);
      t12 = claim_text(p3_nodes, "Paste the transaction into your Electrum wallet");
      p3_nodes.forEach(detach_dev);
      t13 = claim_space(div1_nodes);
      img0 = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true });
      div1_nodes.forEach(detach_dev);
      t14 = claim_space(div5_nodes);
      div2 = claim_element(div5_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      img1 = claim_element(div2_nodes, "IMG", { src: true, alt: true, class: true });
      div2_nodes.forEach(detach_dev);
      t15 = claim_space(div5_nodes);
      div3 = claim_element(div5_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      h42 = claim_element(div3_nodes, "H4", {});
      var h42_nodes = children(h42);
      t16 = claim_text(h42_nodes, "2. Sign the Transaction.");
      h42_nodes.forEach(detach_dev);
      t17 = claim_space(div3_nodes);
      img2 = claim_element(div3_nodes, "IMG", { src: true, alt: true, class: true });
      div3_nodes.forEach(detach_dev);
      t18 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      h43 = claim_element(div4_nodes, "H4", {});
      var h43_nodes = children(h43);
      t19 = claim_text(h43_nodes, "3. Broadcast the Transaction.");
      h43_nodes.forEach(detach_dev);
      t20 = claim_space(div4_nodes);
      p4 = claim_element(div4_nodes, "P", { class: true });
      var p4_nodes = children(p4);
      span = claim_element(p4_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t21 = claim_text(span_nodes, "Note: Double check your wallet displays the correct recipient and amount.");
      span_nodes.forEach(detach_dev);
      p4_nodes.forEach(detach_dev);
      t22 = claim_space(div4_nodes);
      img3 = claim_element(div4_nodes, "IMG", { src: true, alt: true, class: true });
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(h40, file$6, 14, 4, 594);
      add_location(p0, file$6, 15, 4, 614);
      add_location(p1, file$6, 16, 4, 675);
      attr_dev(
        a,
        "href",
        /*getExplorerUrl*/
        ctx[1]()
      );
      attr_dev(a, "target", "_blank");
      attr_dev(a, "rel", "noreferrer");
      add_location(a, file$6, 17, 53, 782);
      add_location(p2, file$6, 17, 4, 733);
      attr_dev(div0, "class", "my-4");
      add_location(div0, file$6, 13, 2, 571);
      add_location(h41, file$6, 23, 4, 1045);
      add_location(p3, file$6, 24, 4, 1084);
      if (!src_url_equal(img0.src, img0_src_value = electrum1))
        attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "night time");
      attr_dev(img0, "class", "s-VY_8YC2zOSYf");
      add_location(img0, file$6, 25, 4, 1143);
      attr_dev(div1, "class", "slide");
      add_location(div1, file$6, 22, 2, 1021);
      if (!src_url_equal(img1.src, img1_src_value = electrum2))
        attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "night time");
      attr_dev(img1, "class", "s-VY_8YC2zOSYf");
      add_location(img1, file$6, 28, 4, 1214);
      attr_dev(div2, "class", "");
      add_location(div2, file$6, 27, 2, 1195);
      add_location(h42, file$6, 31, 4, 1290);
      if (!src_url_equal(img2.src, img2_src_value = electrum2))
        attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "night time");
      attr_dev(img2, "class", "s-VY_8YC2zOSYf");
      add_location(img2, file$6, 32, 4, 1328);
      attr_dev(div3, "class", "slide");
      add_location(div3, file$6, 30, 2, 1266);
      add_location(h43, file$6, 35, 4, 1404);
      attr_dev(span, "class", "text-warning");
      add_location(span, file$6, 36, 16, 1459);
      attr_dev(p4, "class", "");
      add_location(p4, file$6, 36, 4, 1447);
      if (!src_url_equal(img3.src, img3_src_value = electrum3))
        attr_dev(img3, "src", img3_src_value);
      attr_dev(img3, "alt", "night time");
      attr_dev(img3, "class", "s-VY_8YC2zOSYf");
      add_location(img3, file$6, 37, 4, 1575);
      attr_dev(div4, "class", "slide");
      add_location(div4, file$6, 34, 2, 1380);
      attr_dev(div5, "class", "");
      add_location(div5, file$6, 12, 0, 554);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div5, anchor);
      append_hydration_dev(div5, div0);
      append_hydration_dev(div0, h40);
      append_hydration_dev(h40, t0);
      append_hydration_dev(div0, t1);
      append_hydration_dev(div0, p0);
      append_hydration_dev(p0, t2);
      append_hydration_dev(div0, t3);
      append_hydration_dev(div0, p1);
      append_hydration_dev(p1, t4);
      append_hydration_dev(div0, t5);
      append_hydration_dev(div0, p2);
      append_hydration_dev(p2, t6);
      append_hydration_dev(p2, a);
      append_hydration_dev(a, t7);
      append_hydration_dev(div0, t8);
      if (if_block)
        if_block.m(div0, null);
      append_hydration_dev(div5, t9);
      append_hydration_dev(div5, div1);
      append_hydration_dev(div1, h41);
      append_hydration_dev(h41, t10);
      append_hydration_dev(div1, t11);
      append_hydration_dev(div1, p3);
      append_hydration_dev(p3, t12);
      append_hydration_dev(div1, t13);
      append_hydration_dev(div1, img0);
      append_hydration_dev(div5, t14);
      append_hydration_dev(div5, div2);
      append_hydration_dev(div2, img1);
      append_hydration_dev(div5, t15);
      append_hydration_dev(div5, div3);
      append_hydration_dev(div3, h42);
      append_hydration_dev(h42, t16);
      append_hydration_dev(div3, t17);
      append_hydration_dev(div3, img2);
      append_hydration_dev(div5, t18);
      append_hydration_dev(div5, div4);
      append_hydration_dev(div4, h43);
      append_hydration_dev(h43, t19);
      append_hydration_dev(div4, t20);
      append_hydration_dev(div4, p4);
      append_hydration_dev(p4, span);
      append_hydration_dev(span, t21);
      append_hydration_dev(div4, t22);
      append_hydration_dev(div4, img3);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div5);
      if (if_block)
        if_block.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$6.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$6($$self, $$props, $$invalidate) {
  var _a, _b;
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(2, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Electrum", slots, []);
  const network = "mainnet";
  const from = $sbtcConfig.pegIn ? (_a = $sbtcConfig == null ? void 0 : $sbtcConfig.pegInTransaction) == null ? void 0 : _a.fromBtcAddress : (_b = $sbtcConfig == null ? void 0 : $sbtcConfig.pegOutTransaction) == null ? void 0 : _b.fromBtcAddress;
  const getExplorerUrl = () => {
    return explorerBtcAddressUrl(from);
  };
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Electrum> was created with unknown prop '${key}'`);
  });
  $$self.$capture_state = () => ({
    electrum1,
    electrum2,
    electrum3,
    explorerBtcAddressUrl,
    sbtcConfig,
    network,
    from,
    getExplorerUrl,
    $sbtcConfig
  });
  return [network, getExplorerUrl];
}
class Electrum extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Electrum",
      options,
      id: create_fragment$6.name
    });
  }
}
const bitcoincore1 = "" + new URL("../assets/bitcoincore1.d9e9a058.png", import.meta.url).href;
const bitcoincore2 = "" + new URL("../assets/bitcoincore2.a5c710cc.png", import.meta.url).href;
const bitcoincore3 = "" + new URL("../assets/bitcoincore3.2b54283c.png", import.meta.url).href;
const bitcoincore4 = "" + new URL("../assets/bitcoincore4.87eef577.png", import.meta.url).href;
const BitcoinCore_svelte_svelte_type_style_lang = "";
const file$5 = "src/lib/components/wallets/BitcoinCore.svelte";
function create_if_block$3(ctx) {
  let p;
  let t;
  const block = {
    c: function create() {
      p = element("p");
      t = text("Testnet Hint: /Applications/Bitcoin-Qt.app/Contents/MacOS/Bitcoin-Qt -testnet -datadir=[user.home]/Library/Application\\ Support/Bitcoin/testnet -conf=[user.home]/Library/Application\\ Support/Bitcoin/testnet/bitcoin.conf");
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t = claim_text(p_nodes, "Testnet Hint: /Applications/Bitcoin-Qt.app/Contents/MacOS/Bitcoin-Qt -testnet -datadir=[user.home]/Library/Application\\ Support/Bitcoin/testnet -conf=[user.home]/Library/Application\\ Support/Bitcoin/testnet/bitcoin.conf");
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "text-small");
      add_location(p, file$5, 20, 4, 969);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, p, anchor);
      append_hydration_dev(p, t);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$3.name,
    type: "if",
    source: "(20:4) {#if network === 'testnet'}",
    ctx
  });
  return block;
}
function create_fragment$5(ctx) {
  let div5;
  let div0;
  let h40;
  let t0;
  let t1;
  let p0;
  let t2;
  let t3;
  let p1;
  let t4;
  let t5;
  let p2;
  let t6;
  let a;
  let t7;
  let t8;
  let t9;
  let div1;
  let h41;
  let t10;
  let t11;
  let p3;
  let t12;
  let t13;
  let p4;
  let t14;
  let t15;
  let img0;
  let img0_src_value;
  let t16;
  let div2;
  let h42;
  let t17;
  let t18;
  let img1;
  let img1_src_value;
  let t19;
  let div3;
  let h43;
  let t20;
  let t21;
  let p5;
  let span;
  let t22;
  let t23;
  let img2;
  let img2_src_value;
  let t24;
  let div4;
  let p6;
  let t25;
  let t26;
  let img3;
  let img3_src_value;
  let if_block = (
    /*network*/
    ctx[0] === "testnet" && create_if_block$3(ctx)
  );
  const block = {
    c: function create() {
      div5 = element("div");
      div0 = element("div");
      h40 = element("h4");
      t0 = text("Intro.");
      t1 = space();
      p0 = element("p");
      t2 = text("The transaction has been copied to the clipboard.");
      t3 = space();
      p1 = element("p");
      t4 = text("This flow tested with Bitcoin Core 22");
      t5 = space();
      p2 = element("p");
      t6 = text("Once sent the transaction will show up on the ");
      a = element("a");
      t7 = text("explorer");
      t8 = space();
      if (if_block)
        if_block.c();
      t9 = space();
      div1 = element("div");
      h41 = element("h4");
      t10 = text("1. Paste the Transaction.");
      t11 = space();
      p3 = element("p");
      t12 = text("Open your Bitcoin Core wallet");
      t13 = space();
      p4 = element("p");
      t14 = text("Paste the transaction (already in the clipboard) into your Bitcoin Core wallet");
      t15 = space();
      img0 = element("img");
      t16 = space();
      div2 = element("div");
      h42 = element("h4");
      t17 = text("2. Sign the Transaction.");
      t18 = space();
      img1 = element("img");
      t19 = space();
      div3 = element("div");
      h43 = element("h4");
      t20 = text("3. Broadcast the Transaction.");
      t21 = space();
      p5 = element("p");
      span = element("span");
      t22 = text("Note: Double check your wallet displays the correct recipient and amount.");
      t23 = space();
      img2 = element("img");
      t24 = space();
      div4 = element("div");
      p6 = element("p");
      t25 = text("Check the transaction is sent successfully!");
      t26 = space();
      img3 = element("img");
      this.h();
    },
    l: function claim(nodes) {
      div5 = claim_element(nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div0 = claim_element(div5_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      h40 = claim_element(div0_nodes, "H4", {});
      var h40_nodes = children(h40);
      t0 = claim_text(h40_nodes, "Intro.");
      h40_nodes.forEach(detach_dev);
      t1 = claim_space(div0_nodes);
      p0 = claim_element(div0_nodes, "P", {});
      var p0_nodes = children(p0);
      t2 = claim_text(p0_nodes, "The transaction has been copied to the clipboard.");
      p0_nodes.forEach(detach_dev);
      t3 = claim_space(div0_nodes);
      p1 = claim_element(div0_nodes, "P", {});
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, "This flow tested with Bitcoin Core 22");
      p1_nodes.forEach(detach_dev);
      t5 = claim_space(div0_nodes);
      p2 = claim_element(div0_nodes, "P", {});
      var p2_nodes = children(p2);
      t6 = claim_text(p2_nodes, "Once sent the transaction will show up on the ");
      a = claim_element(p2_nodes, "A", { href: true, target: true, rel: true });
      var a_nodes = children(a);
      t7 = claim_text(a_nodes, "explorer");
      a_nodes.forEach(detach_dev);
      p2_nodes.forEach(detach_dev);
      t8 = claim_space(div0_nodes);
      if (if_block)
        if_block.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t9 = claim_space(div5_nodes);
      div1 = claim_element(div5_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      h41 = claim_element(div1_nodes, "H4", {});
      var h41_nodes = children(h41);
      t10 = claim_text(h41_nodes, "1. Paste the Transaction.");
      h41_nodes.forEach(detach_dev);
      t11 = claim_space(div1_nodes);
      p3 = claim_element(div1_nodes, "P", {});
      var p3_nodes = children(p3);
      t12 = claim_text(p3_nodes, "Open your Bitcoin Core wallet");
      p3_nodes.forEach(detach_dev);
      t13 = claim_space(div1_nodes);
      p4 = claim_element(div1_nodes, "P", {});
      var p4_nodes = children(p4);
      t14 = claim_text(p4_nodes, "Paste the transaction (already in the clipboard) into your Bitcoin Core wallet");
      p4_nodes.forEach(detach_dev);
      t15 = claim_space(div1_nodes);
      img0 = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true });
      div1_nodes.forEach(detach_dev);
      t16 = claim_space(div5_nodes);
      div2 = claim_element(div5_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      h42 = claim_element(div2_nodes, "H4", {});
      var h42_nodes = children(h42);
      t17 = claim_text(h42_nodes, "2. Sign the Transaction.");
      h42_nodes.forEach(detach_dev);
      t18 = claim_space(div2_nodes);
      img1 = claim_element(div2_nodes, "IMG", { src: true, alt: true, class: true });
      div2_nodes.forEach(detach_dev);
      t19 = claim_space(div5_nodes);
      div3 = claim_element(div5_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      h43 = claim_element(div3_nodes, "H4", {});
      var h43_nodes = children(h43);
      t20 = claim_text(h43_nodes, "3. Broadcast the Transaction.");
      h43_nodes.forEach(detach_dev);
      t21 = claim_space(div3_nodes);
      p5 = claim_element(div3_nodes, "P", { class: true });
      var p5_nodes = children(p5);
      span = claim_element(p5_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t22 = claim_text(span_nodes, "Note: Double check your wallet displays the correct recipient and amount.");
      span_nodes.forEach(detach_dev);
      p5_nodes.forEach(detach_dev);
      t23 = claim_space(div3_nodes);
      img2 = claim_element(div3_nodes, "IMG", { src: true, alt: true, class: true });
      div3_nodes.forEach(detach_dev);
      t24 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      p6 = claim_element(div4_nodes, "P", {});
      var p6_nodes = children(p6);
      t25 = claim_text(p6_nodes, "Check the transaction is sent successfully!");
      p6_nodes.forEach(detach_dev);
      t26 = claim_space(div4_nodes);
      img3 = claim_element(div4_nodes, "IMG", { src: true, alt: true, class: true });
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(h40, file$5, 15, 4, 677);
      add_location(p0, file$5, 16, 4, 697);
      add_location(p1, file$5, 17, 4, 758);
      attr_dev(
        a,
        "href",
        /*getExplorerUrl*/
        ctx[1]()
      );
      attr_dev(a, "target", "_blank");
      attr_dev(a, "rel", "noreferrer");
      add_location(a, file$5, 18, 53, 856);
      add_location(p2, file$5, 18, 4, 807);
      attr_dev(div0, "class", "my-4");
      add_location(div0, file$5, 14, 2, 654);
      add_location(h41, file$5, 24, 4, 1260);
      add_location(p3, file$5, 25, 4, 1299);
      add_location(p4, file$5, 26, 4, 1340);
      if (!src_url_equal(img0.src, img0_src_value = bitcoincore1))
        attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "night time");
      attr_dev(img0, "class", "s-8LcgRHRQ5WJL");
      add_location(img0, file$5, 27, 4, 1430);
      attr_dev(div1, "class", "slide");
      add_location(div1, file$5, 23, 2, 1236);
      add_location(h42, file$5, 30, 4, 1509);
      if (!src_url_equal(img1.src, img1_src_value = bitcoincore2))
        attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "night time");
      attr_dev(img1, "class", "s-8LcgRHRQ5WJL");
      add_location(img1, file$5, 31, 4, 1547);
      attr_dev(div2, "class", "slide");
      add_location(div2, file$5, 29, 2, 1485);
      add_location(h43, file$5, 34, 4, 1626);
      attr_dev(span, "class", "text-warning");
      add_location(span, file$5, 35, 16, 1681);
      attr_dev(p5, "class", "");
      add_location(p5, file$5, 35, 4, 1669);
      if (!src_url_equal(img2.src, img2_src_value = bitcoincore3))
        attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "night time");
      attr_dev(img2, "class", "s-8LcgRHRQ5WJL");
      add_location(img2, file$5, 36, 4, 1797);
      attr_dev(div3, "class", "slide");
      add_location(div3, file$5, 33, 2, 1602);
      add_location(p6, file$5, 39, 4, 1876);
      if (!src_url_equal(img3.src, img3_src_value = bitcoincore4))
        attr_dev(img3, "src", img3_src_value);
      attr_dev(img3, "alt", "night time");
      attr_dev(img3, "class", "s-8LcgRHRQ5WJL");
      add_location(img3, file$5, 40, 4, 1931);
      attr_dev(div4, "class", "slide");
      add_location(div4, file$5, 38, 2, 1852);
      attr_dev(div5, "class", "");
      add_location(div5, file$5, 13, 0, 637);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div5, anchor);
      append_hydration_dev(div5, div0);
      append_hydration_dev(div0, h40);
      append_hydration_dev(h40, t0);
      append_hydration_dev(div0, t1);
      append_hydration_dev(div0, p0);
      append_hydration_dev(p0, t2);
      append_hydration_dev(div0, t3);
      append_hydration_dev(div0, p1);
      append_hydration_dev(p1, t4);
      append_hydration_dev(div0, t5);
      append_hydration_dev(div0, p2);
      append_hydration_dev(p2, t6);
      append_hydration_dev(p2, a);
      append_hydration_dev(a, t7);
      append_hydration_dev(div0, t8);
      if (if_block)
        if_block.m(div0, null);
      append_hydration_dev(div5, t9);
      append_hydration_dev(div5, div1);
      append_hydration_dev(div1, h41);
      append_hydration_dev(h41, t10);
      append_hydration_dev(div1, t11);
      append_hydration_dev(div1, p3);
      append_hydration_dev(p3, t12);
      append_hydration_dev(div1, t13);
      append_hydration_dev(div1, p4);
      append_hydration_dev(p4, t14);
      append_hydration_dev(div1, t15);
      append_hydration_dev(div1, img0);
      append_hydration_dev(div5, t16);
      append_hydration_dev(div5, div2);
      append_hydration_dev(div2, h42);
      append_hydration_dev(h42, t17);
      append_hydration_dev(div2, t18);
      append_hydration_dev(div2, img1);
      append_hydration_dev(div5, t19);
      append_hydration_dev(div5, div3);
      append_hydration_dev(div3, h43);
      append_hydration_dev(h43, t20);
      append_hydration_dev(div3, t21);
      append_hydration_dev(div3, p5);
      append_hydration_dev(p5, span);
      append_hydration_dev(span, t22);
      append_hydration_dev(div3, t23);
      append_hydration_dev(div3, img2);
      append_hydration_dev(div5, t24);
      append_hydration_dev(div5, div4);
      append_hydration_dev(div4, p6);
      append_hydration_dev(p6, t25);
      append_hydration_dev(div4, t26);
      append_hydration_dev(div4, img3);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div5);
      if (if_block)
        if_block.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$5.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$5($$self, $$props, $$invalidate) {
  var _a, _b;
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(2, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("BitcoinCore", slots, []);
  const network = "mainnet";
  const from = $sbtcConfig.pegIn ? (_a = $sbtcConfig == null ? void 0 : $sbtcConfig.pegInTransaction) == null ? void 0 : _a.fromBtcAddress : (_b = $sbtcConfig == null ? void 0 : $sbtcConfig.pegOutTransaction) == null ? void 0 : _b.fromBtcAddress;
  const getExplorerUrl = () => {
    return explorerBtcAddressUrl(from);
  };
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<BitcoinCore> was created with unknown prop '${key}'`);
  });
  $$self.$capture_state = () => ({
    bitcoincore1,
    bitcoincore2,
    bitcoincore3,
    bitcoincore4,
    explorerBtcAddressUrl,
    sbtcConfig,
    network,
    from,
    getExplorerUrl,
    $sbtcConfig
  });
  return [network, getExplorerUrl];
}
class BitcoinCore extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "BitcoinCore",
      options,
      id: create_fragment$5.name
    });
  }
}
const trezor1 = "" + new URL("../assets/trezor1.52a60956.png", import.meta.url).href;
const TrezorOne_svelte_svelte_type_style_lang = "";
const file$4 = "src/lib/components/wallets/TrezorOne.svelte";
function create_fragment$4(ctx) {
  let div3;
  let div0;
  let p0;
  let t0;
  let t1;
  let img0;
  let img0_src_value;
  let t2;
  let div1;
  let img1;
  let img1_src_value;
  let t3;
  let div2;
  let p1;
  let t4;
  let t5;
  let p2;
  let t6;
  let t7;
  let img2;
  let img2_src_value;
  const block = {
    c: function create() {
      div3 = element("div");
      div0 = element("div");
      p0 = element("p");
      t0 = text("Send 0.05BTC (on testnet) to trezor one address: tb1qsxj8yjqkm0fejw0f2p8uu09wj58jwuxmqakeyk");
      t1 = space();
      img0 = element("img");
      t2 = space();
      div1 = element("div");
      img1 = element("img");
      t3 = space();
      div2 = element("div");
      p1 = element("p");
      t4 = text("Sign and broadcast the transaction");
      t5 = space();
      p2 = element("p");
      t6 = text("Always check the amount and recipient address!");
      t7 = space();
      img2 = element("img");
      this.h();
    },
    l: function claim(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      p0 = claim_element(div0_nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "Send 0.05BTC (on testnet) to trezor one address: tb1qsxj8yjqkm0fejw0f2p8uu09wj58jwuxmqakeyk");
      p0_nodes.forEach(detach_dev);
      t1 = claim_space(div0_nodes);
      img0 = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
      div0_nodes.forEach(detach_dev);
      t2 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      img1 = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true });
      div1_nodes.forEach(detach_dev);
      t3 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      p1 = claim_element(div2_nodes, "P", {});
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, "Sign and broadcast the transaction");
      p1_nodes.forEach(detach_dev);
      t5 = claim_space(div2_nodes);
      p2 = claim_element(div2_nodes, "P", {});
      var p2_nodes = children(p2);
      t6 = claim_text(p2_nodes, "Always check the amount and recipient address!");
      p2_nodes.forEach(detach_dev);
      t7 = claim_space(div2_nodes);
      img2 = claim_element(div2_nodes, "IMG", { src: true, alt: true, class: true });
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p0, file$4, 7, 4, 250);
      if (!src_url_equal(img0.src, img0_src_value = trezor1))
        attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "night time");
      attr_dev(img0, "class", "s-gWK7n4eyE0dg");
      add_location(img0, file$4, 8, 4, 353);
      attr_dev(div0, "class", "p-3 border");
      add_location(div0, file$4, 6, 2, 221);
      if (!src_url_equal(img1.src, img1_src_value = electrum2))
        attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "night time");
      attr_dev(img1, "class", "s-gWK7n4eyE0dg");
      add_location(img1, file$4, 11, 4, 432);
      attr_dev(div1, "class", "p-3 border");
      add_location(div1, file$4, 10, 2, 403);
      add_location(p1, file$4, 14, 4, 513);
      add_location(p2, file$4, 15, 4, 559);
      if (!src_url_equal(img2.src, img2_src_value = electrum3))
        attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "night time");
      attr_dev(img2, "class", "s-gWK7n4eyE0dg");
      add_location(img2, file$4, 16, 4, 617);
      attr_dev(div2, "class", "p-3 border");
      add_location(div2, file$4, 13, 2, 484);
      attr_dev(div3, "class", "");
      add_location(div3, file$4, 5, 0, 204);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div3, anchor);
      append_hydration_dev(div3, div0);
      append_hydration_dev(div0, p0);
      append_hydration_dev(p0, t0);
      append_hydration_dev(div0, t1);
      append_hydration_dev(div0, img0);
      append_hydration_dev(div3, t2);
      append_hydration_dev(div3, div1);
      append_hydration_dev(div1, img1);
      append_hydration_dev(div3, t3);
      append_hydration_dev(div3, div2);
      append_hydration_dev(div2, p1);
      append_hydration_dev(p1, t4);
      append_hydration_dev(div2, t5);
      append_hydration_dev(div2, p2);
      append_hydration_dev(p2, t6);
      append_hydration_dev(div2, t7);
      append_hydration_dev(div2, img2);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div3);
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
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("TrezorOne", slots, []);
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<TrezorOne> was created with unknown prop '${key}'`);
  });
  $$self.$capture_state = () => ({ trezor1, electrum2, electrum3 });
  return [];
}
class TrezorOne extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "TrezorOne",
      options,
      id: create_fragment$4.name
    });
  }
}
const WalletHelp_svelte_svelte_type_style_lang = "";
const file$3 = "src/lib/components/wallets/WalletHelp.svelte";
function create_if_block_5(ctx) {
  let button;
  let t;
  let button_class_value;
  const block = {
    c: function create() {
      button = element("button");
      t = text("Bitcoin Core");
      this.h();
    },
    l: function claim(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true, "aria-current": true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "Bitcoin Core");
      button_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button, "class", button_class_value = /*wallet*/
      ctx[0] === 1 ? "btn w-25 btn-info" : "btn btn-outline-info w-25");
      attr_dev(button, "aria-current", "page");
      add_location(button, file$3, 10, 24, 375);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, button, anchor);
      append_hydration_dev(button, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*wallet*/
      1 && button_class_value !== (button_class_value = /*wallet*/
      ctx2[0] === 1 ? "btn w-25 btn-info" : "btn btn-outline-info w-25")) {
        attr_dev(button, "class", button_class_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(button);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_5.name,
    type: "if",
    source: "(11:6) {#if wallet === 1}",
    ctx
  });
  return block;
}
function create_if_block_4$1(ctx) {
  let button;
  let t;
  let button_class_value;
  const block = {
    c: function create() {
      button = element("button");
      t = text("Electrum");
      this.h();
    },
    l: function claim(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true, "aria-current": true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "Electrum");
      button_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button, "class", button_class_value = /*wallet*/
      ctx[0] === 2 ? "btn w-25 btn-info" : "btn btn-outline-info w-25");
      attr_dev(button, "aria-current", "page");
      add_location(button, file$3, 11, 24, 529);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, button, anchor);
      append_hydration_dev(button, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*wallet*/
      1 && button_class_value !== (button_class_value = /*wallet*/
      ctx2[0] === 2 ? "btn w-25 btn-info" : "btn btn-outline-info w-25")) {
        attr_dev(button, "class", button_class_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(button);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_4$1.name,
    type: "if",
    source: "(12:6) {#if wallet === 2}",
    ctx
  });
  return block;
}
function create_if_block_3$1(ctx) {
  let div;
  let bitcoincore;
  let current;
  bitcoincore = new BitcoinCore({ $$inline: true });
  const block = {
    c: function create() {
      div = element("div");
      create_component(bitcoincore.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true,
        id: true,
        role: true,
        "aria-labelledby": true
      });
      var div_nodes = children(div);
      claim_component(bitcoincore.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "pane s-jQy3T8RQvP_U");
      attr_dev(div, "id", "home");
      attr_dev(div, "role", "tabpanel");
      attr_dev(div, "aria-labelledby", "home-tab");
      add_location(div, file$3, 18, 24, 1049);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(bitcoincore, div, null);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(bitcoincore.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(bitcoincore.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(bitcoincore);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_3$1.name,
    type: "if",
    source: "(19:6) {#if wallet === 1}",
    ctx
  });
  return block;
}
function create_if_block_2$1(ctx) {
  let div;
  let electrum;
  let current;
  electrum = new Electrum({ $$inline: true });
  const block = {
    c: function create() {
      div = element("div");
      create_component(electrum.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true,
        id: true,
        role: true,
        "aria-labelledby": true
      });
      var div_nodes = children(div);
      claim_component(electrum.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "pane s-jQy3T8RQvP_U");
      attr_dev(div, "id", "home");
      attr_dev(div, "role", "tabpanel");
      attr_dev(div, "aria-labelledby", "home-tab");
      add_location(div, file$3, 19, 24, 1170);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(electrum, div, null);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(electrum.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(electrum.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(electrum);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2$1.name,
    type: "if",
    source: "(20:6) {#if wallet === 2}",
    ctx
  });
  return block;
}
function create_if_block_1$2(ctx) {
  let div;
  let trezorone;
  let current;
  trezorone = new TrezorOne({ $$inline: true });
  const block = {
    c: function create() {
      div = element("div");
      create_component(trezorone.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true,
        id: true,
        role: true,
        "aria-labelledby": true
      });
      var div_nodes = children(div);
      claim_component(trezorone.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "pane s-jQy3T8RQvP_U");
      attr_dev(div, "id", "profile");
      attr_dev(div, "role", "tabpanel");
      attr_dev(div, "aria-labelledby", "profile-tab");
      add_location(div, file$3, 20, 24, 1288);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(trezorone, div, null);
      current = true;
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(trezorone.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(trezorone.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(trezorone);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$2.name,
    type: "if",
    source: "(21:6) {#if wallet === 3}",
    ctx
  });
  return block;
}
function create_if_block$2(ctx) {
  let div;
  let t;
  const block = {
    c: function create() {
      div = element("div");
      t = text("Instructions for Ledger");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true,
        id: true,
        role: true,
        "aria-labelledby": true
      });
      var div_nodes = children(div);
      t = claim_text(div_nodes, "Instructions for Ledger");
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "pane s-jQy3T8RQvP_U");
      attr_dev(div, "id", "contact");
      attr_dev(div, "role", "tabpanel");
      attr_dev(div, "aria-labelledby", "contact-tab");
      add_location(div, file$3, 21, 24, 1414);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, t);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$2.name,
    type: "if",
    source: "(22:6) {#if wallet === 4}",
    ctx
  });
  return block;
}
function create_fragment$3(ctx) {
  let div3;
  let div2;
  let div0;
  let t0;
  let t1;
  let div1;
  let t2;
  let t3;
  let t4;
  let current;
  let if_block0 = (
    /*wallet*/
    ctx[0] === 1 && create_if_block_5(ctx)
  );
  let if_block1 = (
    /*wallet*/
    ctx[0] === 2 && create_if_block_4$1(ctx)
  );
  let if_block2 = (
    /*wallet*/
    ctx[0] === 1 && create_if_block_3$1(ctx)
  );
  let if_block3 = (
    /*wallet*/
    ctx[0] === 2 && create_if_block_2$1(ctx)
  );
  let if_block4 = (
    /*wallet*/
    ctx[0] === 3 && create_if_block_1$2(ctx)
  );
  let if_block5 = (
    /*wallet*/
    ctx[0] === 4 && create_if_block$2(ctx)
  );
  const block = {
    c: function create() {
      div3 = element("div");
      div2 = element("div");
      div0 = element("div");
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      div1 = element("div");
      if (if_block2)
        if_block2.c();
      t2 = space();
      if (if_block3)
        if_block3.c();
      t3 = space();
      if (if_block4)
        if_block4.c();
      t4 = space();
      if (if_block5)
        if_block5.c();
      this.h();
    },
    l: function claim(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (if_block0)
        if_block0.l(div0_nodes);
      t0 = claim_space(div0_nodes);
      if (if_block1)
        if_block1.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true, id: true });
      var div1_nodes = children(div1);
      if (if_block2)
        if_block2.l(div1_nodes);
      t2 = claim_space(div1_nodes);
      if (if_block3)
        if_block3.l(div1_nodes);
      t3 = claim_space(div1_nodes);
      if (if_block4)
        if_block4.l(div1_nodes);
      t4 = claim_space(div1_nodes);
      if (if_block5)
        if_block5.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "menu d-flex justify-content-start s-jQy3T8RQvP_U");
      add_location(div0, file$3, 9, 4, 303);
      attr_dev(div1, "class", "");
      attr_dev(div1, "id", "myTabContent");
      add_location(div1, file$3, 17, 4, 992);
      attr_dev(div2, "class", "col");
      add_location(div2, file$3, 8, 2, 281);
      attr_dev(div3, "class", "row");
      add_location(div3, file$3, 7, 0, 261);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div3, anchor);
      append_hydration_dev(div3, div2);
      append_hydration_dev(div2, div0);
      if (if_block0)
        if_block0.m(div0, null);
      append_hydration_dev(div0, t0);
      if (if_block1)
        if_block1.m(div0, null);
      append_hydration_dev(div2, t1);
      append_hydration_dev(div2, div1);
      if (if_block2)
        if_block2.m(div1, null);
      append_hydration_dev(div1, t2);
      if (if_block3)
        if_block3.m(div1, null);
      append_hydration_dev(div1, t3);
      if (if_block4)
        if_block4.m(div1, null);
      append_hydration_dev(div1, t4);
      if (if_block5)
        if_block5.m(div1, null);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (
        /*wallet*/
        ctx2[0] === 1
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_5(ctx2);
          if_block0.c();
          if_block0.m(div0, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*wallet*/
        ctx2[0] === 2
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_4$1(ctx2);
          if_block1.c();
          if_block1.m(div0, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (
        /*wallet*/
        ctx2[0] === 1
      ) {
        if (if_block2) {
          if (dirty & /*wallet*/
          1) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block_3$1(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div1, t2);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
      if (
        /*wallet*/
        ctx2[0] === 2
      ) {
        if (if_block3) {
          if (dirty & /*wallet*/
          1) {
            transition_in(if_block3, 1);
          }
        } else {
          if_block3 = create_if_block_2$1(ctx2);
          if_block3.c();
          transition_in(if_block3, 1);
          if_block3.m(div1, t3);
        }
      } else if (if_block3) {
        group_outros();
        transition_out(if_block3, 1, 1, () => {
          if_block3 = null;
        });
        check_outros();
      }
      if (
        /*wallet*/
        ctx2[0] === 3
      ) {
        if (if_block4) {
          if (dirty & /*wallet*/
          1) {
            transition_in(if_block4, 1);
          }
        } else {
          if_block4 = create_if_block_1$2(ctx2);
          if_block4.c();
          transition_in(if_block4, 1);
          if_block4.m(div1, t4);
        }
      } else if (if_block4) {
        group_outros();
        transition_out(if_block4, 1, 1, () => {
          if_block4 = null;
        });
        check_outros();
      }
      if (
        /*wallet*/
        ctx2[0] === 4
      ) {
        if (if_block5)
          ;
        else {
          if_block5 = create_if_block$2(ctx2);
          if_block5.c();
          if_block5.m(div1, null);
        }
      } else if (if_block5) {
        if_block5.d(1);
        if_block5 = null;
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block2);
      transition_in(if_block3);
      transition_in(if_block4);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block2);
      transition_out(if_block3);
      transition_out(if_block4);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div3);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
      if (if_block3)
        if_block3.d();
      if (if_block4)
        if_block4.d();
      if (if_block5)
        if_block5.d();
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
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("WalletHelp", slots, []);
  let { wallet = 0 } = $$props;
  const writable_props = ["wallet"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<WalletHelp> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("wallet" in $$props2)
      $$invalidate(0, wallet = $$props2.wallet);
  };
  $$self.$capture_state = () => ({ Electrum, BitcoinCore, TrezorOne, wallet });
  $$self.$inject_state = ($$props2) => {
    if ("wallet" in $$props2)
      $$invalidate(0, wallet = $$props2.wallet);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [wallet];
}
class WalletHelp extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { wallet: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "WalletHelp",
      options,
      id: create_fragment$3.name
    });
  }
  get wallet() {
    throw new Error("<WalletHelp>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set wallet(value) {
    throw new Error("<WalletHelp>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const { console: console_1$1 } = globals;
const file$2 = "src/lib/components/common/SignTransaction.svelte";
function create_if_block_4(ctx) {
  let t0;
  let t1;
  let t2;
  const block = {
    c: function create() {
      t0 = text("(");
      t1 = text(
        /*wallet*/
        ctx[2]
      );
      t2 = text(")");
    },
    l: function claim(nodes) {
      t0 = claim_text(nodes, "(");
      t1 = claim_text(
        nodes,
        /*wallet*/
        ctx[2]
      );
      t2 = claim_text(nodes, ")");
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t0, anchor);
      insert_hydration_dev(target, t1, anchor);
      insert_hydration_dev(target, t2, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*wallet*/
      4)
        set_data_dev(
          t1,
          /*wallet*/
          ctx2[2]
        );
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(t2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_4.name,
    type: "if",
    source: "(82:24) {#if wallet}",
    ctx
  });
  return block;
}
function create_if_block_2(ctx) {
  let div1;
  let div0;
  let ul1;
  let li2;
  let span;
  let t0;
  let t1;
  let ul0;
  let li0;
  let a0;
  let t2;
  let t3;
  let li1;
  let a1;
  let t4;
  let mounted;
  let dispose;
  let if_block = (
    /*opMechanism*/
    ctx[3] && create_if_block_3(ctx)
  );
  const block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      ul1 = element("ul");
      li2 = element("li");
      span = element("span");
      t0 = text("2. Select Mechanism: ");
      if (if_block)
        if_block.c();
      t1 = space();
      ul0 = element("ul");
      li0 = element("li");
      a0 = element("a");
      t2 = text("OP Return");
      t3 = space();
      li1 = element("li");
      a1 = element("a");
      t4 = text("OP Drop");
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      ul1 = claim_element(div0_nodes, "UL", { class: true });
      var ul1_nodes = children(ul1);
      li2 = claim_element(ul1_nodes, "LI", { class: true });
      var li2_nodes = children(li2);
      span = claim_element(li2_nodes, "SPAN", {
        class: true,
        id: true,
        role: true,
        "data-bs-toggle": true,
        "aria-expanded": true
      });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "2. Select Mechanism: ");
      if (if_block)
        if_block.l(span_nodes);
      span_nodes.forEach(detach_dev);
      t1 = claim_space(li2_nodes);
      ul0 = claim_element(li2_nodes, "UL", { class: true, "aria-labelledby": true });
      var ul0_nodes = children(ul0);
      li0 = claim_element(ul0_nodes, "LI", {});
      var li0_nodes = children(li0);
      a0 = claim_element(li0_nodes, "A", { class: true, href: true });
      var a0_nodes = children(a0);
      t2 = claim_text(a0_nodes, "OP Return");
      a0_nodes.forEach(detach_dev);
      li0_nodes.forEach(detach_dev);
      t3 = claim_space(ul0_nodes);
      li1 = claim_element(ul0_nodes, "LI", {});
      var li1_nodes = children(li1);
      a1 = claim_element(li1_nodes, "A", { class: true, href: true });
      var a1_nodes = children(a1);
      t4 = claim_text(a1_nodes, "OP Drop");
      a1_nodes.forEach(detach_dev);
      li1_nodes.forEach(detach_dev);
      ul0_nodes.forEach(detach_dev);
      li2_nodes.forEach(detach_dev);
      ul1_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "nav-link dropdown-toggle ");
      attr_dev(span, "id", "navbarDropdown");
      attr_dev(span, "role", "button");
      attr_dev(span, "data-bs-toggle", "dropdown");
      attr_dev(span, "aria-expanded", "false");
      add_location(span, file$2, 96, 5, 3055);
      attr_dev(a0, "class", "dropdown-item");
      attr_dev(a0, "href", "/");
      add_location(a0, file$2, 100, 10, 3351);
      add_location(li0, file$2, 100, 6, 3347);
      attr_dev(a1, "class", "dropdown-item");
      attr_dev(a1, "href", "/");
      add_location(a1, file$2, 101, 10, 3474);
      add_location(li1, file$2, 101, 6, 3470);
      attr_dev(ul0, "class", "dropdown-menu dropdown-menu-start");
      attr_dev(ul0, "aria-labelledby", "navbarDropdown");
      add_location(ul0, file$2, 99, 5, 3261);
      attr_dev(li2, "class", "nav-item dropdown");
      add_location(li2, file$2, 95, 4, 3019);
      attr_dev(ul1, "class", "navbar-nav");
      add_location(ul1, file$2, 94, 3, 2991);
      add_location(div0, file$2, 93, 4, 2982);
      attr_dev(div1, "class", "my-3 d-flex justify-content-start");
      add_location(div1, file$2, 92, 2, 2930);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div1, anchor);
      append_hydration_dev(div1, div0);
      append_hydration_dev(div0, ul1);
      append_hydration_dev(ul1, li2);
      append_hydration_dev(li2, span);
      append_hydration_dev(span, t0);
      if (if_block)
        if_block.m(span, null);
      append_hydration_dev(li2, t1);
      append_hydration_dev(li2, ul0);
      append_hydration_dev(ul0, li0);
      append_hydration_dev(li0, a0);
      append_hydration_dev(a0, t2);
      append_hydration_dev(ul0, t3);
      append_hydration_dev(ul0, li1);
      append_hydration_dev(li1, a1);
      append_hydration_dev(a1, t4);
      if (!mounted) {
        dispose = [
          listen_dev(a0, "click", prevent_default(
            /*click_handler_2*/
            ctx[12]
          ), false, true, false, false),
          listen_dev(a1, "click", prevent_default(
            /*click_handler_3*/
            ctx[13]
          ), false, true, false, false)
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (
        /*opMechanism*/
        ctx2[3]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_3(ctx2);
          if_block.c();
          if_block.m(span, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(92:2) {#if wallet}",
    ctx
  });
  return block;
}
function create_if_block_3(ctx) {
  let t0;
  let t1;
  let t2;
  const block = {
    c: function create() {
      t0 = text("(");
      t1 = text(
        /*opMechanism*/
        ctx[3]
      );
      t2 = text(")");
    },
    l: function claim(nodes) {
      t0 = claim_text(nodes, "(");
      t1 = claim_text(
        nodes,
        /*opMechanism*/
        ctx[3]
      );
      t2 = claim_text(nodes, ")");
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, t0, anchor);
      insert_hydration_dev(target, t1, anchor);
      insert_hydration_dev(target, t2, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*opMechanism*/
      8)
        set_data_dev(
          t1,
          /*opMechanism*/
          ctx2[3]
        );
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(t2);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_3.name,
    type: "if",
    source: "(98:27) {#if opMechanism}",
    ctx
  });
  return block;
}
function create_if_block_1$1(ctx) {
  let div1;
  let div0;
  let ul;
  let li;
  let span;
  let t;
  const block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      ul = element("ul");
      li = element("li");
      span = element("span");
      t = text("3. Follow the Instructions Below");
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      ul = claim_element(div0_nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      li = claim_element(ul_nodes, "LI", { class: true });
      var li_nodes = children(li);
      span = claim_element(li_nodes, "SPAN", {
        class: true,
        id: true,
        role: true,
        "data-bs-toggle": true,
        "aria-expanded": true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "3. Follow the Instructions Below");
      span_nodes.forEach(detach_dev);
      li_nodes.forEach(detach_dev);
      ul_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "nav-link dropdown-toggle ");
      attr_dev(span, "id", "navbarDropdown");
      attr_dev(span, "role", "button");
      attr_dev(span, "data-bs-toggle", "dropdown");
      attr_dev(span, "aria-expanded", "false");
      add_location(span, file$2, 113, 5, 3798);
      attr_dev(li, "class", "nav-item dropdown");
      add_location(li, file$2, 112, 4, 3762);
      attr_dev(ul, "class", "navbar-nav");
      add_location(ul, file$2, 111, 3, 3734);
      add_location(div0, file$2, 110, 4, 3725);
      attr_dev(div1, "class", "my-3 d-flex justify-content-start");
      add_location(div1, file$2, 109, 2, 3673);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div1, anchor);
      append_hydration_dev(div1, div0);
      append_hydration_dev(div0, ul);
      append_hydration_dev(ul, li);
      append_hydration_dev(li, span);
      append_hydration_dev(span, t);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$1.name,
    type: "if",
    source: "(109:2) {#if wallet && opMechanism}",
    ctx
  });
  return block;
}
function create_if_block$1(ctx) {
  let wallethelp;
  let current;
  wallethelp = new WalletHelp({
    props: { wallet: (
      /*getWalletId*/
      ctx[6]()
    ) },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(wallethelp.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(wallethelp.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(wallethelp, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const wallethelp_changes = {};
      if (dirty & /*getWalletId*/
      64)
        wallethelp_changes.wallet = /*getWalletId*/
        ctx2[6]();
      wallethelp.$set(wallethelp_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(wallethelp.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(wallethelp.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(wallethelp, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$1.name,
    type: "if",
    source: "(124:0) {#if copied}",
    ctx
  });
  return block;
}
function create_fragment$2(ctx) {
  let div0;
  let t0;
  let section0;
  let div1;
  let h2;
  let t1;
  let t2;
  let peginfo;
  let t3;
  let section1;
  let div3;
  let div2;
  let ul1;
  let li2;
  let span;
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
  let t10;
  let t11;
  let input;
  let t12;
  let if_block3_anchor;
  let current;
  let mounted;
  let dispose;
  peginfo = new PegInfo({
    props: {
      pegInfo: (
        /*pegInfo*/
        ctx[1]
      ),
      sigData: (
        /*sigData*/
        ctx[0]
      ),
      currentTx: (
        /*currentTx*/
        ctx[5]
      )
    },
    $$inline: true
  });
  peginfo.$on(
    "update_transaction",
    /*updateTransaction*/
    ctx[9]
  );
  let if_block0 = (
    /*wallet*/
    ctx[2] && create_if_block_4(ctx)
  );
  let if_block1 = (
    /*wallet*/
    ctx[2] && create_if_block_2(ctx)
  );
  let if_block2 = (
    /*wallet*/
    ctx[2] && /*opMechanism*/
    ctx[3] && create_if_block_1$1(ctx)
  );
  let if_block3 = (
    /*copied*/
    ctx[4] && create_if_block$1(ctx)
  );
  const block = {
    c: function create() {
      div0 = element("div");
      t0 = space();
      section0 = element("section");
      div1 = element("div");
      h2 = element("h2");
      t1 = text("Step 2: Sign & Broadcast");
      t2 = space();
      create_component(peginfo.$$.fragment);
      t3 = space();
      section1 = element("section");
      div3 = element("div");
      div2 = element("div");
      ul1 = element("ul");
      li2 = element("li");
      span = element("span");
      t4 = text("1. Select Wallet: ");
      if (if_block0)
        if_block0.c();
      t5 = space();
      ul0 = element("ul");
      li0 = element("li");
      a0 = element("a");
      t6 = text("Bitcoin Core");
      t7 = space();
      li1 = element("li");
      a1 = element("a");
      t8 = text("Electrum");
      t9 = space();
      if (if_block1)
        if_block1.c();
      t10 = space();
      if (if_block2)
        if_block2.c();
      t11 = space();
      input = element("input");
      t12 = space();
      if (if_block3)
        if_block3.c();
      if_block3_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      div0 = claim_element(nodes, "DIV", { id: true });
      children(div0).forEach(detach_dev);
      t0 = claim_space(nodes);
      section0 = claim_element(nodes, "SECTION", { class: true });
      var section0_nodes = children(section0);
      div1 = claim_element(section0_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      h2 = claim_element(div1_nodes, "H2", {});
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Step 2: Sign & Broadcast");
      h2_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      section0_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      claim_component(peginfo.$$.fragment, nodes);
      t3 = claim_space(nodes);
      section1 = claim_element(nodes, "SECTION", {});
      var section1_nodes = children(section1);
      div3 = claim_element(section1_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", {});
      var div2_nodes = children(div2);
      ul1 = claim_element(div2_nodes, "UL", { class: true });
      var ul1_nodes = children(ul1);
      li2 = claim_element(ul1_nodes, "LI", { class: true });
      var li2_nodes = children(li2);
      span = claim_element(li2_nodes, "SPAN", {
        class: true,
        id: true,
        role: true,
        "data-bs-toggle": true,
        "aria-expanded": true
      });
      var span_nodes = children(span);
      t4 = claim_text(span_nodes, "1. Select Wallet: ");
      if (if_block0)
        if_block0.l(span_nodes);
      span_nodes.forEach(detach_dev);
      t5 = claim_space(li2_nodes);
      ul0 = claim_element(li2_nodes, "UL", { class: true, "aria-labelledby": true });
      var ul0_nodes = children(ul0);
      li0 = claim_element(ul0_nodes, "LI", {});
      var li0_nodes = children(li0);
      a0 = claim_element(li0_nodes, "A", { class: true, href: true });
      var a0_nodes = children(a0);
      t6 = claim_text(a0_nodes, "Bitcoin Core");
      a0_nodes.forEach(detach_dev);
      li0_nodes.forEach(detach_dev);
      t7 = claim_space(ul0_nodes);
      li1 = claim_element(ul0_nodes, "LI", {});
      var li1_nodes = children(li1);
      a1 = claim_element(li1_nodes, "A", { class: true, href: true });
      var a1_nodes = children(a1);
      t8 = claim_text(a1_nodes, "Electrum");
      a1_nodes.forEach(detach_dev);
      li1_nodes.forEach(detach_dev);
      ul0_nodes.forEach(detach_dev);
      li2_nodes.forEach(detach_dev);
      ul1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t9 = claim_space(section1_nodes);
      if (if_block1)
        if_block1.l(section1_nodes);
      t10 = claim_space(section1_nodes);
      if (if_block2)
        if_block2.l(section1_nodes);
      t11 = claim_space(section1_nodes);
      input = claim_element(section1_nodes, "INPUT", { style: true });
      section1_nodes.forEach(detach_dev);
      t12 = claim_space(nodes);
      if (if_block3)
        if_block3.l(nodes);
      if_block3_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "id", "clipboard");
      add_location(div0, file$2, 66, 0, 1943);
      add_location(h2, file$2, 69, 4, 2044);
      attr_dev(div1, "class", "d-flex justify-content-between");
      add_location(div1, file$2, 68, 2, 1995);
      attr_dev(section0, "class", "mb-3");
      add_location(section0, file$2, 67, 0, 1970);
      attr_dev(span, "class", "nav-link dropdown-toggle ");
      attr_dev(span, "id", "navbarDropdown");
      attr_dev(span, "role", "button");
      attr_dev(span, "data-bs-toggle", "dropdown");
      attr_dev(span, "aria-expanded", "false");
      add_location(span, file$2, 80, 5, 2344);
      attr_dev(a0, "class", "dropdown-item");
      attr_dev(a0, "href", "/");
      add_location(a0, file$2, 84, 10, 2627);
      add_location(li0, file$2, 84, 6, 2623);
      attr_dev(a1, "class", "dropdown-item");
      attr_dev(a1, "href", "/");
      add_location(a1, file$2, 85, 10, 2754);
      add_location(li1, file$2, 85, 6, 2750);
      attr_dev(ul0, "class", "dropdown-menu dropdown-menu-start");
      attr_dev(ul0, "aria-labelledby", "navbarDropdown");
      add_location(ul0, file$2, 83, 5, 2537);
      attr_dev(li2, "class", "nav-item dropdown");
      add_location(li2, file$2, 79, 4, 2308);
      attr_dev(ul1, "class", "navbar-nav");
      add_location(ul1, file$2, 78, 3, 2280);
      add_location(div2, file$2, 77, 4, 2271);
      attr_dev(div3, "class", "my-3 d-flex justify-content-start");
      add_location(div3, file$2, 76, 2, 2219);
      set_style(input, "visibility", "hidden");
      add_location(input, file$2, 121, 2, 4022);
      add_location(section1, file$2, 75, 0, 2207);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div0, anchor);
      insert_hydration_dev(target, t0, anchor);
      insert_hydration_dev(target, section0, anchor);
      append_hydration_dev(section0, div1);
      append_hydration_dev(div1, h2);
      append_hydration_dev(h2, t1);
      insert_hydration_dev(target, t2, anchor);
      mount_component(peginfo, target, anchor);
      insert_hydration_dev(target, t3, anchor);
      insert_hydration_dev(target, section1, anchor);
      append_hydration_dev(section1, div3);
      append_hydration_dev(div3, div2);
      append_hydration_dev(div2, ul1);
      append_hydration_dev(ul1, li2);
      append_hydration_dev(li2, span);
      append_hydration_dev(span, t4);
      if (if_block0)
        if_block0.m(span, null);
      append_hydration_dev(li2, t5);
      append_hydration_dev(li2, ul0);
      append_hydration_dev(ul0, li0);
      append_hydration_dev(li0, a0);
      append_hydration_dev(a0, t6);
      append_hydration_dev(ul0, t7);
      append_hydration_dev(ul0, li1);
      append_hydration_dev(li1, a1);
      append_hydration_dev(a1, t8);
      append_hydration_dev(section1, t9);
      if (if_block1)
        if_block1.m(section1, null);
      append_hydration_dev(section1, t10);
      if (if_block2)
        if_block2.m(section1, null);
      append_hydration_dev(section1, t11);
      append_hydration_dev(section1, input);
      set_input_value(
        input,
        /*currentTx*/
        ctx[5]
      );
      insert_hydration_dev(target, t12, anchor);
      if (if_block3)
        if_block3.m(target, anchor);
      insert_hydration_dev(target, if_block3_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen_dev(a0, "click", prevent_default(
            /*click_handler*/
            ctx[10]
          ), false, true, false, false),
          listen_dev(a1, "click", prevent_default(
            /*click_handler_1*/
            ctx[11]
          ), false, true, false, false),
          listen_dev(
            input,
            "input",
            /*input_input_handler*/
            ctx[14]
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      const peginfo_changes = {};
      if (dirty & /*pegInfo*/
      2)
        peginfo_changes.pegInfo = /*pegInfo*/
        ctx2[1];
      if (dirty & /*sigData*/
      1)
        peginfo_changes.sigData = /*sigData*/
        ctx2[0];
      if (dirty & /*currentTx*/
      32)
        peginfo_changes.currentTx = /*currentTx*/
        ctx2[5];
      peginfo.$set(peginfo_changes);
      if (
        /*wallet*/
        ctx2[2]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_4(ctx2);
          if_block0.c();
          if_block0.m(span, null);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*wallet*/
        ctx2[2]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_2(ctx2);
          if_block1.c();
          if_block1.m(section1, t10);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (
        /*wallet*/
        ctx2[2] && /*opMechanism*/
        ctx2[3]
      ) {
        if (if_block2)
          ;
        else {
          if_block2 = create_if_block_1$1(ctx2);
          if_block2.c();
          if_block2.m(section1, t11);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
      if (dirty & /*currentTx*/
      32 && input.value !== /*currentTx*/
      ctx2[5]) {
        set_input_value(
          input,
          /*currentTx*/
          ctx2[5]
        );
      }
      if (
        /*copied*/
        ctx2[4]
      ) {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
          if (dirty & /*copied*/
          16) {
            transition_in(if_block3, 1);
          }
        } else {
          if_block3 = create_if_block$1(ctx2);
          if_block3.c();
          transition_in(if_block3, 1);
          if_block3.m(if_block3_anchor.parentNode, if_block3_anchor);
        }
      } else if (if_block3) {
        group_outros();
        transition_out(if_block3, 1, 1, () => {
          if_block3 = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(peginfo.$$.fragment, local);
      transition_in(if_block3);
      current = true;
    },
    o: function outro(local) {
      transition_out(peginfo.$$.fragment, local);
      transition_out(if_block3);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div0);
      if (detaching)
        detach_dev(t0);
      if (detaching)
        detach_dev(section0);
      if (detaching)
        detach_dev(t2);
      destroy_component(peginfo, detaching);
      if (detaching)
        detach_dev(t3);
      if (detaching)
        detach_dev(section1);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (if_block2)
        if_block2.d();
      if (detaching)
        detach_dev(t12);
      if (if_block3)
        if_block3.d(detaching);
      if (detaching)
        detach_dev(if_block3_anchor);
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
function instance$2($$self, $$props, $$invalidate) {
  let getWalletId;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("SignTransaction", slots, []);
  const dispatch = createEventDispatcher();
  let wallet;
  let opMechanism;
  let { sigData } = $$props;
  let { pegInfo } = $$props;
  let showTx = false;
  let showHex = false;
  let copied = false;
  let currentTx = hex.encode(sigData.txs.opReturn.toPSBT());
  const setCurrent = () => {
    if (opMechanism === "return") {
      const psbt = sigData.txs.opReturn.toPSBT();
      wallet === "Bitcoin Core" ? $$invalidate(5, currentTx = base64.encode(psbt)) : $$invalidate(5, currentTx = hex.encode(psbt));
    } else if (opMechanism === "drop") {
      const psbt = sigData.txs.opDrop.toPSBT();
      wallet === "Bitcoin Core" ? $$invalidate(5, currentTx = base64.encode(psbt)) : $$invalidate(5, currentTx = hex.encode(psbt));
    }
  };
  const updateWallet = (newWallet) => {
    $$invalidate(4, copied = false);
    $$invalidate(3, opMechanism = void 0);
    $$invalidate(2, wallet = newWallet);
    setCurrent();
  };
  const updateOpMechanism = (newOpMechanism) => {
    $$invalidate(3, opMechanism = newOpMechanism);
    setCurrent();
    copy();
  };
  const updateTransaction = () => {
    dispatch("update_transaction", { success: true });
  };
  const copy = () => {
    const app = new CopyClipboard({
      target: document.getElementById("clipboard"),
      props: { name: currentTx }
    });
    app.$destroy();
    $$invalidate(4, copied = true);
  };
  onMount(async () => {
    try {
      if (sigData.webWallet) {
        console.log("Using web wallet psbt request");
      }
    } catch (err) {
      dispatch("update_transaction", { success: false, reason: err.message });
    }
  });
  $$self.$$.on_mount.push(function() {
    if (sigData === void 0 && !("sigData" in $$props || $$self.$$.bound[$$self.$$.props["sigData"]])) {
      console_1$1.warn("<SignTransaction> was created without expected prop 'sigData'");
    }
    if (pegInfo === void 0 && !("pegInfo" in $$props || $$self.$$.bound[$$self.$$.props["pegInfo"]])) {
      console_1$1.warn("<SignTransaction> was created without expected prop 'pegInfo'");
    }
  });
  const writable_props = ["sigData", "pegInfo"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console_1$1.warn(`<SignTransaction> was created with unknown prop '${key}'`);
  });
  const click_handler = () => updateWallet("Bitcoin Core");
  const click_handler_1 = () => updateWallet("Electrum");
  const click_handler_2 = () => updateOpMechanism("return");
  const click_handler_3 = () => updateOpMechanism("drop");
  function input_input_handler() {
    currentTx = this.value;
    $$invalidate(5, currentTx);
  }
  $$self.$$set = ($$props2) => {
    if ("sigData" in $$props2)
      $$invalidate(0, sigData = $$props2.sigData);
    if ("pegInfo" in $$props2)
      $$invalidate(1, pegInfo = $$props2.pegInfo);
  };
  $$self.$capture_state = () => ({
    onMount,
    createEventDispatcher,
    CopyClipboard,
    PegInfo,
    WalletHelp,
    hex,
    base64,
    dispatch,
    wallet,
    opMechanism,
    sigData,
    pegInfo,
    showTx,
    showHex,
    copied,
    currentTx,
    setCurrent,
    updateWallet,
    updateOpMechanism,
    updateTransaction,
    copy,
    getWalletId
  });
  $$self.$inject_state = ($$props2) => {
    if ("wallet" in $$props2)
      $$invalidate(2, wallet = $$props2.wallet);
    if ("opMechanism" in $$props2)
      $$invalidate(3, opMechanism = $$props2.opMechanism);
    if ("sigData" in $$props2)
      $$invalidate(0, sigData = $$props2.sigData);
    if ("pegInfo" in $$props2)
      $$invalidate(1, pegInfo = $$props2.pegInfo);
    if ("showTx" in $$props2)
      showTx = $$props2.showTx;
    if ("showHex" in $$props2)
      showHex = $$props2.showHex;
    if ("copied" in $$props2)
      $$invalidate(4, copied = $$props2.copied);
    if ("currentTx" in $$props2)
      $$invalidate(5, currentTx = $$props2.currentTx);
    if ("getWalletId" in $$props2)
      $$invalidate(6, getWalletId = $$props2.getWalletId);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*wallet*/
    4) {
      $$invalidate(6, getWalletId = () => {
        if (wallet === "Bitcoin Core")
          return 1;
        else if (wallet === "Electrum")
          return 2;
        return 0;
      });
    }
  };
  return [
    sigData,
    pegInfo,
    wallet,
    opMechanism,
    copied,
    currentTx,
    getWalletId,
    updateWallet,
    updateOpMechanism,
    updateTransaction,
    click_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3,
    input_input_handler
  ];
}
class SignTransaction extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { sigData: 0, pegInfo: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SignTransaction",
      options,
      id: create_fragment$2.name
    });
  }
  get sigData() {
    throw new Error("<SignTransaction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set sigData(value) {
    throw new Error("<SignTransaction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get pegInfo() {
    throw new Error("<SignTransaction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set pegInfo(value) {
    throw new Error("<SignTransaction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const { console: console_1 } = globals;
const file$1 = "src/lib/components/common/SignTransactionWeb.svelte";
function create_if_block_1(ctx) {
  let div;
  let p;
  let t;
  const block = {
    c: function create() {
      div = element("div");
      p = element("p");
      t = text(
        /*errorReason*/
        ctx[4]
      );
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      p = claim_element(div_nodes, "P", {});
      var p_nodes = children(p);
      t = claim_text(
        p_nodes,
        /*errorReason*/
        ctx[4]
      );
      p_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p, file$1, 91, 4, 3175);
      attr_dev(div, "class", "my-5 text-center text-danger");
      add_location(div, file$1, 90, 2, 3128);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, p);
      append_hydration_dev(p, t);
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*errorReason*/
      16)
        set_data_dev(
          t,
          /*errorReason*/
          ctx2[4]
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
    source: "(90:2) {#if errorReason}",
    ctx
  });
  return block;
}
function create_else_block(ctx) {
  let div;
  let button0;
  let t0;
  let t1;
  let button1;
  let t2;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div = element("div");
      button0 = element("button");
      t0 = text("Sign & Broadcast");
      t1 = space();
      button1 = element("button");
      t2 = text("Back");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      button0 = claim_element(div_nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      t0 = claim_text(button0_nodes, "Sign & Broadcast");
      button0_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      button1 = claim_element(div_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      t2 = claim_text(button1_nodes, "Back");
      button1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        button0,
        "class",
        /*btnClass*/
        ctx[8](false)
      );
      add_location(button0, file$1, 103, 4, 3568);
      attr_dev(
        button1,
        "class",
        /*btnClass*/
        ctx[8](true)
      );
      add_location(button1, file$1, 104, 4, 3665);
      attr_dev(div, "class", "d-flex justify-content-center my-5");
      add_location(div, file$1, 102, 2, 3515);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, button0);
      append_hydration_dev(button0, t0);
      append_hydration_dev(div, t1);
      append_hydration_dev(div, button1);
      append_hydration_dev(button1, t2);
      if (!mounted) {
        dispose = [
          listen_dev(
            button0,
            "click",
            /*click_handler*/
            ctx[9],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            button1,
            "click",
            /*click_handler_1*/
            ctx[10],
            false,
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(102:2) {:else}",
    ctx
  });
  return block;
}
function create_if_block(ctx) {
  let div;
  let p0;
  let t0;
  let a;
  let t1;
  let t2;
  let t3;
  let p1;
  let t4;
  const block = {
    c: function create() {
      div = element("div");
      p0 = element("p");
      t0 = text("Your transaction has been sent to the ");
      a = element("a");
      t1 = text("Bitcoin network");
      t2 = text(".");
      t3 = space();
      p1 = element("p");
      t4 = text("Once confirmed your SBTC will be minted to your Stacks Wallet.");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "Your transaction has been sent to the ");
      a = claim_element(p0_nodes, "A", { href: true, target: true, rel: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "Bitcoin network");
      a_nodes.forEach(detach_dev);
      t2 = claim_text(p0_nodes, ".");
      p0_nodes.forEach(detach_dev);
      t3 = claim_space(div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, "Once confirmed your SBTC will be minted to your Stacks Wallet.");
      p1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        a,
        "href",
        /*getExplorerUrl*/
        ctx[6]()
      );
      attr_dev(a, "target", "_blank");
      attr_dev(a, "rel", "noreferrer");
      add_location(a, file$1, 96, 45, 3324);
      add_location(p0, file$1, 96, 4, 3283);
      add_location(p1, file$1, 98, 4, 3418);
      attr_dev(div, "class", "my-5 text-center text-warning");
      add_location(div, file$1, 95, 2, 3235);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, p0);
      append_hydration_dev(p0, t0);
      append_hydration_dev(p0, a);
      append_hydration_dev(a, t1);
      append_hydration_dev(p0, t2);
      append_hydration_dev(div, t3);
      append_hydration_dev(div, p1);
      append_hydration_dev(p1, t4);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(95:2) {#if broadcasted}",
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let section0;
  let div;
  let h2;
  let t0;
  let t1;
  let peginfo;
  let t2;
  let section1;
  let t3;
  let current;
  peginfo = new PegInfo({
    props: {
      pegInfo: (
        /*pegInfo*/
        ctx[1]
      ),
      sigData: (
        /*sigData*/
        ctx[0]
      ),
      currentTx: (
        /*currentTx*/
        ctx[3]
      )
    },
    $$inline: true
  });
  peginfo.$on(
    "update_transaction",
    /*updateTransaction*/
    ctx[7]
  );
  let if_block0 = (
    /*errorReason*/
    ctx[4] && create_if_block_1(ctx)
  );
  function select_block_type(ctx2, dirty) {
    if (
      /*broadcasted*/
      ctx2[5]
    )
      return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block1 = current_block_type(ctx);
  const block = {
    c: function create() {
      section0 = element("section");
      div = element("div");
      h2 = element("h2");
      t0 = text("Step 2: Sign with Hiro Web Wallet");
      t1 = space();
      create_component(peginfo.$$.fragment);
      t2 = space();
      section1 = element("section");
      if (if_block0)
        if_block0.c();
      t3 = space();
      if_block1.c();
      this.h();
    },
    l: function claim(nodes) {
      section0 = claim_element(nodes, "SECTION", { class: true });
      var section0_nodes = children(section0);
      div = claim_element(section0_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      h2 = claim_element(div_nodes, "H2", {});
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, "Step 2: Sign with Hiro Web Wallet");
      h2_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      section0_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      claim_component(peginfo.$$.fragment, nodes);
      t2 = claim_space(nodes);
      section1 = claim_element(nodes, "SECTION", {});
      var section1_nodes = children(section1);
      if (if_block0)
        if_block0.l(section1_nodes);
      t3 = claim_space(section1_nodes);
      if_block1.l(section1_nodes);
      section1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(h2, file$1, 84, 4, 2948);
      attr_dev(div, "class", "d-flex justify-content-between");
      add_location(div, file$1, 83, 2, 2899);
      attr_dev(section0, "class", "mb-3");
      add_location(section0, file$1, 82, 0, 2874);
      add_location(section1, file$1, 88, 0, 3096);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, section0, anchor);
      append_hydration_dev(section0, div);
      append_hydration_dev(div, h2);
      append_hydration_dev(h2, t0);
      insert_hydration_dev(target, t1, anchor);
      mount_component(peginfo, target, anchor);
      insert_hydration_dev(target, t2, anchor);
      insert_hydration_dev(target, section1, anchor);
      if (if_block0)
        if_block0.m(section1, null);
      append_hydration_dev(section1, t3);
      if_block1.m(section1, null);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const peginfo_changes = {};
      if (dirty & /*pegInfo*/
      2)
        peginfo_changes.pegInfo = /*pegInfo*/
        ctx2[1];
      if (dirty & /*sigData*/
      1)
        peginfo_changes.sigData = /*sigData*/
        ctx2[0];
      if (dirty & /*currentTx*/
      8)
        peginfo_changes.currentTx = /*currentTx*/
        ctx2[3];
      peginfo.$set(peginfo_changes);
      if (
        /*errorReason*/
        ctx2[4]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_1(ctx2);
          if_block0.c();
          if_block0.m(section1, t3);
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
          if_block1.m(section1, null);
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(peginfo.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(peginfo.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(section0);
      if (detaching)
        detach_dev(t1);
      destroy_component(peginfo, detaching);
      if (detaching)
        detach_dev(t2);
      if (detaching)
        detach_dev(section1);
      if (if_block0)
        if_block0.d();
      if_block1.d();
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
  var _a, _b;
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(12, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("SignTransactionWeb", slots, []);
  const dispatch = createEventDispatcher();
  let { sigData } = $$props;
  let { pegInfo } = $$props;
  let currentTx = hex.encode(sigData.txs.opReturn.toPSBT(2));
  let errorReason;
  let successReason;
  const from = $sbtcConfig.pegIn ? (_a = $sbtcConfig == null ? void 0 : $sbtcConfig.pegInTransaction) == null ? void 0 : _a.fromBtcAddress : (_b = $sbtcConfig == null ? void 0 : $sbtcConfig.pegOutTransaction) == null ? void 0 : _b.fromBtcAddress;
  const getExplorerUrl = () => {
    return explorerBtcAddressUrl(from);
  };
  async function requestSignPsbt() {
    console.log(currentTx);
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
  }
  const updateTransaction = () => {
    dispatch("update_transaction", { success: true });
  };
  const btnClass = (bb) => {
    if ($sbtcConfig.pegIn) {
      return bb ? "mx-2 w-25 btn btn-outline-info" : "mx-2 w-25 btn btn-info";
    } else {
      return bb ? "mx-2 w-25 btn btn-outline-warning" : "mx-2 w-25 btn btn-warning";
    }
  };
  let resp;
  let broadcasted;
  const broadcastTransaction = async (psbtHex) => {
    try {
      const tx = Transaction.fromPSBT(hexToBytes(psbtHex));
      try {
        tx.finalize();
      } catch (err) {
        $$invalidate(4, errorReason = "Unable to create the transaction - this can happen if your wallet is connected to a different account to the one your logged in with. Try hitting the 'back` button, switching account in the wallet and trying again?");
        return;
      }
      const txHex = hex.encode(tx.toBytes(true, tx.hasWitnesses));
      $$invalidate(3, currentTx = txHex);
      $$invalidate(4, errorReason = void 0);
      resp = await sendRawTxDirectMempool(txHex);
      console.log(resp);
      if (!resp || resp.error) {
        $$invalidate(5, broadcasted = false);
        $$invalidate(4, errorReason = "Unable to broadcast transaction - please try hitting 'back' and refreshing the bitcoin input data.");
      } else {
        $$invalidate(5, broadcasted = true);
      }
    } catch (err) {
      $$invalidate(4, errorReason = err.message + ". Unable to broadcast transaction - please try hitting 'back' and refreshing the bitcoin input data.");
    }
  };
  onMount(async () => {
  });
  $$self.$$.on_mount.push(function() {
    if (sigData === void 0 && !("sigData" in $$props || $$self.$$.bound[$$self.$$.props["sigData"]])) {
      console_1.warn("<SignTransactionWeb> was created without expected prop 'sigData'");
    }
    if (pegInfo === void 0 && !("pegInfo" in $$props || $$self.$$.bound[$$self.$$.props["pegInfo"]])) {
      console_1.warn("<SignTransactionWeb> was created without expected prop 'pegInfo'");
    }
  });
  const writable_props = ["sigData", "pegInfo"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console_1.warn(`<SignTransactionWeb> was created with unknown prop '${key}'`);
  });
  const click_handler = () => requestSignPsbt();
  const click_handler_1 = () => updateTransaction();
  $$self.$$set = ($$props2) => {
    if ("sigData" in $$props2)
      $$invalidate(0, sigData = $$props2.sigData);
    if ("pegInfo" in $$props2)
      $$invalidate(1, pegInfo = $$props2.pegInfo);
  };
  $$self.$capture_state = () => ({
    onMount,
    createEventDispatcher,
    hex,
    openPsbtRequestPopup,
    btc,
    hexToBytes,
    sendRawTxDirectMempool,
    PegInfo,
    sbtcConfig,
    explorerBtcAddressUrl,
    dispatch,
    sigData,
    pegInfo,
    currentTx,
    errorReason,
    successReason,
    from,
    getExplorerUrl,
    requestSignPsbt,
    updateTransaction,
    btnClass,
    resp,
    broadcasted,
    broadcastTransaction,
    $sbtcConfig
  });
  $$self.$inject_state = ($$props2) => {
    if ("sigData" in $$props2)
      $$invalidate(0, sigData = $$props2.sigData);
    if ("pegInfo" in $$props2)
      $$invalidate(1, pegInfo = $$props2.pegInfo);
    if ("currentTx" in $$props2)
      $$invalidate(3, currentTx = $$props2.currentTx);
    if ("errorReason" in $$props2)
      $$invalidate(4, errorReason = $$props2.errorReason);
    if ("successReason" in $$props2)
      successReason = $$props2.successReason;
    if ("resp" in $$props2)
      resp = $$props2.resp;
    if ("broadcasted" in $$props2)
      $$invalidate(5, broadcasted = $$props2.broadcasted);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    sigData,
    pegInfo,
    requestSignPsbt,
    currentTx,
    errorReason,
    broadcasted,
    getExplorerUrl,
    updateTransaction,
    btnClass,
    click_handler,
    click_handler_1
  ];
}
class SignTransactionWeb extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      sigData: 0,
      pegInfo: 1,
      requestSignPsbt: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SignTransactionWeb",
      options,
      id: create_fragment$1.name
    });
  }
  get sigData() {
    throw new Error("<SignTransactionWeb>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set sigData(value) {
    throw new Error("<SignTransactionWeb>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get pegInfo() {
    throw new Error("<SignTransactionWeb>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set pegInfo(value) {
    throw new Error("<SignTransactionWeb>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get requestSignPsbt() {
    return this.$$.ctx[2];
  }
  set requestSignPsbt(value) {
    throw new Error("<SignTransactionWeb>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file = "src/lib/components/common/SbtcWalletDisplay.svelte";
function create_fragment(ctx) {
  let span;
  let t0;
  let t1_value = (
    /*$sbtcConfig*/
    ctx[0].sbtcContractData.sbtcWalletAddress + ""
  );
  let t1;
  const block = {
    c: function create() {
      span = element("span");
      t0 = text("SBTC Wallet: ");
      t1 = text(t1_value);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {});
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "SBTC Wallet: ");
      t1 = claim_text(span_nodes, t1_value);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(span, file, 3, 0, 74);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, span, anchor);
      append_hydration_dev(span, t0);
      append_hydration_dev(span, t1);
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
        detach_dev(span);
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
  validate_slots("SbtcWalletDisplay", slots, []);
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<SbtcWalletDisplay> was created with unknown prop '${key}'`);
  });
  $$self.$capture_state = () => ({ sbtcConfig, $sbtcConfig });
  return [$sbtcConfig];
}
class SbtcWalletDisplay extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SbtcWalletDisplay",
      options,
      id: create_fragment.name
    });
  }
}
export {
  FeeDisplay as F,
  MAGIC_BYTES_TESTNET as M,
  Principal as P,
  SbtcWalletDisplay as S,
  PegTransaction as a,
  assert as b,
  MAGIC_BYTES_MAINNET as c,
  PEGIN_OPCODE as d,
  concatByteArrays as e,
  SignTransaction as f,
  SignTransactionWeb as g,
  PEGOUT_OPCODE as h
};
