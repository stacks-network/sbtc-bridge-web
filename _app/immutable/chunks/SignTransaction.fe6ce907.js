import { _ as _asyncToGenerator, D as _regeneratorRuntime, E as _extends, S as StacksTestnet, F as getUserSession, G as getStacksProvider, H as lib, I as _objectWithoutPropertiesLoose, J as hasAppPrivateKey, K as getKeys, a as addresses, C as CONFIG } from "./stacks_connect.185d0304.js";
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, G as create_slot, H as assign, I as compute_rest_props, v as validate_slots, J as exclude_internal_props, K as svg_element, L as claim_svg_element, r as children, l as detach_dev, u as attr_dev, x as add_location, M as set_svg_attributes, N as toggle_class, g as insert_hydration_dev, O as append_hydration_dev, P as update_slot_base, Q as get_all_dirty_from_scope, R as get_slot_changes, T as get_spread_update, k as transition_in, h as transition_out, o as onMount, p as element, q as claim_element, a1 as set_input_value, W as listen_dev, _ as noop, m as binding_callbacks, U as validate_store, V as component_subscribe, a5 as createEventDispatcher, y as text, c as space, z as claim_text, f as claim_space, X as prevent_default, A as set_data_dev, B as group_outros, j as check_outros, Y as run_all, a3 as validate_each_argument, C as create_component, D as claim_component, E as mount_component, F as destroy_component, w as set_style, a6 as prop_dev, a4 as destroy_each, Z as src_url_equal, a0 as globals, e as empty } from "./index.d5e223f8.js";
import { s as sbtcConfig } from "./stores.3f4ae6bf.js";
import { l as explorerBtcAddressUrl, h as hex, b as base64 } from "./utils.7d5a9605.js";
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
const file$9 = "node_modules/svelte-bootstrap-icons/lib/ArrowDown.svelte";
function create_fragment$9(ctx) {
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
      add_location(path, file$9, 0, 171, 171);
      set_svg_attributes(svg, svg_data);
      toggle_class(svg, "bi", true);
      toggle_class(svg, "bi-arrow-down", true);
      add_location(svg, file$9, 0, 0, 0);
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
    id: create_fragment$9.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$9($$self, $$props, $$invalidate) {
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
    init(this, options, instance$9, create_fragment$9, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ArrowDown",
      options,
      id: create_fragment$9.name
    });
  }
}
const file$8 = "node_modules/svelte-bootstrap-icons/lib/ArrowUp.svelte";
function create_fragment$8(ctx) {
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
      add_location(path, file$8, 0, 169, 169);
      set_svg_attributes(svg, svg_data);
      toggle_class(svg, "bi", true);
      toggle_class(svg, "bi-arrow-up", true);
      add_location(svg, file$8, 0, 0, 0);
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
    id: create_fragment$8.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$8($$self, $$props, $$invalidate) {
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
    init(this, options, instance$8, create_fragment$8, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ArrowUp",
      options,
      id: create_fragment$8.name
    });
  }
}
const file$7 = "node_modules/svelte-bootstrap-icons/lib/CheckCircle.svelte";
function create_fragment$7(ctx) {
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
      add_location(path0, file$7, 0, 173, 173);
      attr_dev(path1, "d", "M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z");
      add_location(path1, file$7, 1, 2, 257);
      set_svg_attributes(svg, svg_data);
      toggle_class(svg, "bi", true);
      toggle_class(svg, "bi-check-circle", true);
      add_location(svg, file$7, 0, 0, 0);
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
    id: create_fragment$7.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$7($$self, $$props, $$invalidate) {
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
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "CheckCircle",
      options,
      id: create_fragment$7.name
    });
  }
}
const file$6 = "src/lib/components/common/CopyClipboard.svelte";
function create_fragment$6(ctx) {
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
      add_location(textarea_1, file$6, 9, 0, 171);
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
    id: create_fragment$6.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$6($$self, $$props, $$invalidate) {
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
    init(this, options, instance$6, create_fragment$6, safe_not_equal, { name: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "CopyClipboard",
      options,
      id: create_fragment$6.name
    });
  }
  get name() {
    throw new Error("<CopyClipboard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set name(value) {
    throw new Error("<CopyClipboard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$5 = "src/lib/components/common/PegInfo.svelte";
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
function create_else_block(ctx) {
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
    id: create_else_block.name,
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
      add_location(textarea, file$5, 74, 8, 2995);
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
function create_if_block$4(ctx) {
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
      add_location(h40, file$5, 52, 8, 1994);
      attr_dev(section0, "class", "mb-4");
      add_location(section0, file$5, 51, 6, 1963);
      add_location(h41, file$5, 61, 6, 2352);
      add_location(section1, file$5, 60, 4, 2336);
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
    id: create_if_block$4.name,
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
      add_location(span, file$5, 55, 41, 2191);
      attr_dev(div0, "class", "col-10");
      add_location(div0, file$5, 55, 8, 2158);
      attr_dev(div1, "class", "col-2");
      add_location(div1, file$5, 56, 8, 2249);
      attr_dev(div2, "class", "info-panel text-small mx-1 row bg-light my-1 py-1 text-dark");
      add_location(div2, file$5, 54, 6, 2076);
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
function create_if_block_4$1(ctx) {
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
    id: create_if_block_4$1.name,
    type: "if",
    source: "(65:27) {#if typeof output.amount === 'number'}",
    ctx
  });
  return block;
}
function create_if_block_3$1(ctx) {
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
      add_location(span, file$5, 66, 30, 2666);
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
    id: create_if_block_3$1.name,
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
      add_location(span, file$5, 67, 29, 2748);
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
function create_if_block_1$2(ctx) {
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
      add_location(span, file$5, 69, 46, 2861);
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
    id: create_if_block_1$2.name,
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
  ctx[12].amount === "number" && create_if_block_4$1(ctx);
  let if_block1 = (
    /*output*/
    ctx[12].address && create_if_block_3$1(ctx)
  );
  let if_block2 = (
    /*output*/
    ctx[12].script && create_if_block_2$2(ctx)
  );
  let if_block3 = (
    /*output*/
    ctx[12].amount && create_if_block_1$2(ctx)
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
      add_location(div0, file$5, 64, 8, 2524);
      attr_dev(div1, "class", "col-8");
      add_location(div1, file$5, 65, 8, 2616);
      attr_dev(div2, "class", "col-2");
      add_location(div2, file$5, 69, 8, 2823);
      attr_dev(div3, "class", "info-panel text-small mx-1 row bg-light my-1 py-1 text-danger");
      add_location(div3, file$5, 63, 6, 2440);
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
          if_block0 = create_if_block_4$1(ctx2);
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
          if_block1 = create_if_block_3$1(ctx2);
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
          if_block3 = create_if_block_1$2(ctx2);
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
function create_fragment$5(ctx) {
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
  const if_block_creators_1 = [create_if_block_6, create_else_block];
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
      return create_if_block$4;
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
      add_location(div0, file$5, 19, 4, 593);
      attr_dev(div1, "class", "col-8");
      add_location(div1, file$5, 20, 4, 630);
      attr_dev(div2, "class", "row");
      add_location(div2, file$5, 18, 2, 571);
      attr_dev(div3, "class", "col-4");
      add_location(div3, file$5, 23, 4, 742);
      attr_dev(div4, "class", "col-8");
      add_location(div4, file$5, 24, 4, 776);
      attr_dev(div5, "class", "row");
      add_location(div5, file$5, 22, 2, 720);
      attr_dev(div6, "class", "col-4");
      add_location(div6, file$5, 27, 4, 859);
      attr_dev(div7, "class", "col-8");
      add_location(div7, file$5, 28, 4, 895);
      attr_dev(div8, "class", "row");
      add_location(div8, file$5, 26, 2, 837);
      attr_dev(div9, "class", "col-4");
      add_location(div9, file$5, 31, 4, 1004);
      attr_dev(div10, "class", "col-8");
      add_location(div10, file$5, 32, 4, 1048);
      attr_dev(div11, "class", "row");
      add_location(div11, file$5, 30, 2, 982);
      attr_dev(div12, "class", "col-4");
      add_location(div12, file$5, 35, 4, 1140);
      attr_dev(div13, "class", "col-8");
      add_location(div13, file$5, 36, 4, 1176);
      attr_dev(div14, "class", "row");
      add_location(div14, file$5, 34, 2, 1118);
      attr_dev(div15, "class", "col-4");
      add_location(div15, file$5, 39, 4, 1261);
      attr_dev(a0, "class", "text-info");
      attr_dev(a0, "href", "/");
      add_location(a0, file$5, 42, 27, 1366);
      attr_dev(span0, "class", "mx-1");
      add_location(span0, file$5, 42, 8, 1347);
      attr_dev(a1, "class", "text-info");
      attr_dev(a1, "href", "/");
      add_location(a1, file$5, 43, 32, 1569);
      attr_dev(span1, "class", "mx-1 me-4");
      add_location(span1, file$5, 43, 8, 1545);
      attr_dev(a2, "class", "text-info");
      attr_dev(a2, "href", "/");
      add_location(a2, file$5, 44, 14, 1757);
      add_location(span2, file$5, 44, 8, 1751);
      attr_dev(div16, "class", "");
      add_location(div16, file$5, 41, 6, 1324);
      attr_dev(div17, "class", "col-8");
      add_location(div17, file$5, 40, 4, 1298);
      attr_dev(div18, "class", "row");
      add_location(div18, file$5, 38, 2, 1239);
      attr_dev(div19, "class", "col-12");
      add_location(div19, file$5, 49, 4, 1917);
      attr_dev(div20, "class", "row");
      add_location(div20, file$5, 48, 2, 1895);
      attr_dev(section, "class", "");
      add_location(section, file$5, 16, 0, 549);
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
    id: create_fragment$5.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$5($$self, $$props, $$invalidate) {
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
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { pegInfo: 0, sigData: 1, currentTx: 2 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "PegInfo",
      options,
      id: create_fragment$5.name
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
const file$4 = "src/lib/components/wallets/Electrum.svelte";
function create_if_block$3(ctx) {
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
      add_location(p, file$4, 20, 4, 924);
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
function create_fragment$4(ctx) {
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
      add_location(h40, file$4, 15, 4, 623);
      add_location(p0, file$4, 16, 4, 643);
      add_location(p1, file$4, 17, 4, 704);
      attr_dev(
        a,
        "href",
        /*getExplorerUrl*/
        ctx[1]()
      );
      attr_dev(a, "target", "_blank");
      attr_dev(a, "rel", "noreferrer");
      add_location(a, file$4, 18, 53, 811);
      add_location(p2, file$4, 18, 4, 762);
      attr_dev(div0, "class", "my-4");
      add_location(div0, file$4, 14, 2, 600);
      add_location(h41, file$4, 24, 4, 1074);
      add_location(p3, file$4, 25, 4, 1113);
      if (!src_url_equal(img0.src, img0_src_value = electrum1))
        attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "night time");
      attr_dev(img0, "class", "s-VY_8YC2zOSYf");
      add_location(img0, file$4, 26, 4, 1172);
      attr_dev(div1, "class", "slide");
      add_location(div1, file$4, 23, 2, 1050);
      if (!src_url_equal(img1.src, img1_src_value = electrum2))
        attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "night time");
      attr_dev(img1, "class", "s-VY_8YC2zOSYf");
      add_location(img1, file$4, 29, 4, 1243);
      attr_dev(div2, "class", "");
      add_location(div2, file$4, 28, 2, 1224);
      add_location(h42, file$4, 32, 4, 1319);
      if (!src_url_equal(img2.src, img2_src_value = electrum2))
        attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "night time");
      attr_dev(img2, "class", "s-VY_8YC2zOSYf");
      add_location(img2, file$4, 33, 4, 1357);
      attr_dev(div3, "class", "slide");
      add_location(div3, file$4, 31, 2, 1295);
      add_location(h43, file$4, 36, 4, 1433);
      attr_dev(span, "class", "text-warning");
      add_location(span, file$4, 37, 16, 1488);
      attr_dev(p4, "class", "");
      add_location(p4, file$4, 37, 4, 1476);
      if (!src_url_equal(img3.src, img3_src_value = electrum3))
        attr_dev(img3, "src", img3_src_value);
      attr_dev(img3, "alt", "night time");
      attr_dev(img3, "class", "s-VY_8YC2zOSYf");
      add_location(img3, file$4, 38, 4, 1604);
      attr_dev(div4, "class", "slide");
      add_location(div4, file$4, 35, 2, 1409);
      attr_dev(div5, "class", "");
      add_location(div5, file$4, 13, 0, 583);
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
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$4($$self, $$props, $$invalidate) {
  var _a, _b;
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(2, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Electrum", slots, []);
  const network = CONFIG.VITE_NETWORK;
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
    CONFIG,
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
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Electrum",
      options,
      id: create_fragment$4.name
    });
  }
}
const bitcoincore1 = "" + new URL("../assets/bitcoincore1.d9e9a058.png", import.meta.url).href;
const bitcoincore2 = "" + new URL("../assets/bitcoincore2.a5c710cc.png", import.meta.url).href;
const bitcoincore3 = "" + new URL("../assets/bitcoincore3.2b54283c.png", import.meta.url).href;
const bitcoincore4 = "" + new URL("../assets/bitcoincore4.87eef577.png", import.meta.url).href;
const BitcoinCore_svelte_svelte_type_style_lang = "";
const file$3 = "src/lib/components/wallets/BitcoinCore.svelte";
function create_if_block$2(ctx) {
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
      add_location(p, file$3, 21, 4, 998);
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
    id: create_if_block$2.name,
    type: "if",
    source: "(21:4) {#if network === 'testnet'}",
    ctx
  });
  return block;
}
function create_fragment$3(ctx) {
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
    ctx[0] === "testnet" && create_if_block$2(ctx)
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
      add_location(h40, file$3, 16, 4, 706);
      add_location(p0, file$3, 17, 4, 726);
      add_location(p1, file$3, 18, 4, 787);
      attr_dev(
        a,
        "href",
        /*getExplorerUrl*/
        ctx[1]()
      );
      attr_dev(a, "target", "_blank");
      attr_dev(a, "rel", "noreferrer");
      add_location(a, file$3, 19, 53, 885);
      add_location(p2, file$3, 19, 4, 836);
      attr_dev(div0, "class", "my-4");
      add_location(div0, file$3, 15, 2, 683);
      add_location(h41, file$3, 25, 4, 1289);
      add_location(p3, file$3, 26, 4, 1328);
      add_location(p4, file$3, 27, 4, 1369);
      if (!src_url_equal(img0.src, img0_src_value = bitcoincore1))
        attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "night time");
      attr_dev(img0, "class", "s-8LcgRHRQ5WJL");
      add_location(img0, file$3, 28, 4, 1459);
      attr_dev(div1, "class", "slide");
      add_location(div1, file$3, 24, 2, 1265);
      add_location(h42, file$3, 31, 4, 1538);
      if (!src_url_equal(img1.src, img1_src_value = bitcoincore2))
        attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "night time");
      attr_dev(img1, "class", "s-8LcgRHRQ5WJL");
      add_location(img1, file$3, 32, 4, 1576);
      attr_dev(div2, "class", "slide");
      add_location(div2, file$3, 30, 2, 1514);
      add_location(h43, file$3, 35, 4, 1655);
      attr_dev(span, "class", "text-warning");
      add_location(span, file$3, 36, 16, 1710);
      attr_dev(p5, "class", "");
      add_location(p5, file$3, 36, 4, 1698);
      if (!src_url_equal(img2.src, img2_src_value = bitcoincore3))
        attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "night time");
      attr_dev(img2, "class", "s-8LcgRHRQ5WJL");
      add_location(img2, file$3, 37, 4, 1826);
      attr_dev(div3, "class", "slide");
      add_location(div3, file$3, 34, 2, 1631);
      add_location(p6, file$3, 40, 4, 1905);
      if (!src_url_equal(img3.src, img3_src_value = bitcoincore4))
        attr_dev(img3, "src", img3_src_value);
      attr_dev(img3, "alt", "night time");
      attr_dev(img3, "class", "s-8LcgRHRQ5WJL");
      add_location(img3, file$3, 41, 4, 1960);
      attr_dev(div4, "class", "slide");
      add_location(div4, file$3, 39, 2, 1881);
      attr_dev(div5, "class", "");
      add_location(div5, file$3, 14, 0, 666);
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
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$3($$self, $$props, $$invalidate) {
  var _a, _b;
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(2, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("BitcoinCore", slots, []);
  const network = CONFIG.VITE_NETWORK;
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
    CONFIG,
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
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "BitcoinCore",
      options,
      id: create_fragment$3.name
    });
  }
}
const trezor1 = "" + new URL("../assets/trezor1.52a60956.png", import.meta.url).href;
const TrezorOne_svelte_svelte_type_style_lang = "";
const file$2 = "src/lib/components/wallets/TrezorOne.svelte";
function create_fragment$2(ctx) {
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
      add_location(p0, file$2, 7, 4, 250);
      if (!src_url_equal(img0.src, img0_src_value = trezor1))
        attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "night time");
      attr_dev(img0, "class", "s-gWK7n4eyE0dg");
      add_location(img0, file$2, 8, 4, 353);
      attr_dev(div0, "class", "p-3 border");
      add_location(div0, file$2, 6, 2, 221);
      if (!src_url_equal(img1.src, img1_src_value = electrum2))
        attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "night time");
      attr_dev(img1, "class", "s-gWK7n4eyE0dg");
      add_location(img1, file$2, 11, 4, 432);
      attr_dev(div1, "class", "p-3 border");
      add_location(div1, file$2, 10, 2, 403);
      add_location(p1, file$2, 14, 4, 513);
      add_location(p2, file$2, 15, 4, 559);
      if (!src_url_equal(img2.src, img2_src_value = electrum3))
        attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "night time");
      attr_dev(img2, "class", "s-gWK7n4eyE0dg");
      add_location(img2, file$2, 16, 4, 617);
      attr_dev(div2, "class", "p-3 border");
      add_location(div2, file$2, 13, 2, 484);
      attr_dev(div3, "class", "");
      add_location(div3, file$2, 5, 0, 204);
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
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$2($$self, $$props, $$invalidate) {
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
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "TrezorOne",
      options,
      id: create_fragment$2.name
    });
  }
}
const WalletHelp_svelte_svelte_type_style_lang = "";
const file$1 = "src/lib/components/wallets/WalletHelp.svelte";
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
      add_location(button, file$1, 10, 24, 375);
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
function create_if_block_4(ctx) {
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
      add_location(button, file$1, 11, 24, 529);
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
    id: create_if_block_4.name,
    type: "if",
    source: "(12:6) {#if wallet === 2}",
    ctx
  });
  return block;
}
function create_if_block_3(ctx) {
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
      add_location(div, file$1, 18, 24, 1049);
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
    id: create_if_block_3.name,
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
      add_location(div, file$1, 19, 24, 1170);
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
function create_if_block_1$1(ctx) {
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
      add_location(div, file$1, 20, 24, 1288);
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
    id: create_if_block_1$1.name,
    type: "if",
    source: "(21:6) {#if wallet === 3}",
    ctx
  });
  return block;
}
function create_if_block$1(ctx) {
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
      add_location(div, file$1, 21, 24, 1414);
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
    id: create_if_block$1.name,
    type: "if",
    source: "(22:6) {#if wallet === 4}",
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
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
    ctx[0] === 2 && create_if_block_4(ctx)
  );
  let if_block2 = (
    /*wallet*/
    ctx[0] === 1 && create_if_block_3(ctx)
  );
  let if_block3 = (
    /*wallet*/
    ctx[0] === 2 && create_if_block_2$1(ctx)
  );
  let if_block4 = (
    /*wallet*/
    ctx[0] === 3 && create_if_block_1$1(ctx)
  );
  let if_block5 = (
    /*wallet*/
    ctx[0] === 4 && create_if_block$1(ctx)
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
      add_location(div0, file$1, 9, 4, 303);
      attr_dev(div1, "class", "");
      attr_dev(div1, "id", "myTabContent");
      add_location(div1, file$1, 17, 4, 992);
      attr_dev(div2, "class", "col");
      add_location(div2, file$1, 8, 2, 281);
      attr_dev(div3, "class", "row");
      add_location(div3, file$1, 7, 0, 261);
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
          if_block1 = create_if_block_4(ctx2);
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
          if_block2 = create_if_block_3(ctx2);
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
          if_block4 = create_if_block_1$1(ctx2);
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
          if_block5 = create_if_block$1(ctx2);
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
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$1($$self, $$props, $$invalidate) {
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
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { wallet: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "WalletHelp",
      options,
      id: create_fragment$1.name
    });
  }
  get wallet() {
    throw new Error("<WalletHelp>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set wallet(value) {
    throw new Error("<WalletHelp>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const { console: console_1 } = globals;
const file = "src/lib/components/common/SignTransaction.svelte";
function create_if_block_2(ctx) {
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
    id: create_if_block_2.name,
    type: "if",
    source: "(82:24) {#if wallet}",
    ctx
  });
  return block;
}
function create_if_block_1(ctx) {
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
      add_location(span, file, 115, 5, 3924);
      attr_dev(li, "class", "nav-item dropdown");
      add_location(li, file, 114, 4, 3888);
      attr_dev(ul, "class", "navbar-nav");
      add_location(ul, file, 113, 3, 3860);
      add_location(div0, file, 112, 4, 3851);
      attr_dev(div1, "class", "my-3 d-flex justify-content-start");
      add_location(div1, file, 111, 2, 3799);
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
    id: create_if_block_1.name,
    type: "if",
    source: "(111:2) {#if wallet}",
    ctx
  });
  return block;
}
function create_if_block(ctx) {
  let wallethelp;
  let current;
  wallethelp = new WalletHelp({
    props: { wallet: (
      /*getWalletId*/
      ctx[5]()
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
      32)
        wallethelp_changes.wallet = /*getWalletId*/
        ctx2[5]();
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
    id: create_if_block.name,
    type: "if",
    source: "(126:0) {#if copied}",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
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
  let input;
  let t11;
  let if_block2_anchor;
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
        ctx[4]
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
    /*wallet*/
    ctx[2] && create_if_block_2(ctx)
  );
  let if_block1 = (
    /*wallet*/
    ctx[2] && create_if_block_1(ctx)
  );
  let if_block2 = (
    /*copied*/
    ctx[3] && create_if_block(ctx)
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
      input = element("input");
      t11 = space();
      if (if_block2)
        if_block2.c();
      if_block2_anchor = empty();
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
      input = claim_element(section1_nodes, "INPUT", { style: true });
      section1_nodes.forEach(detach_dev);
      t11 = claim_space(nodes);
      if (if_block2)
        if_block2.l(nodes);
      if_block2_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "id", "clipboard");
      add_location(div0, file, 66, 0, 2071);
      add_location(h2, file, 69, 4, 2172);
      attr_dev(div1, "class", "d-flex justify-content-between");
      add_location(div1, file, 68, 2, 2123);
      attr_dev(section0, "class", "mb-3");
      add_location(section0, file, 67, 0, 2098);
      attr_dev(span, "class", "nav-link dropdown-toggle ");
      attr_dev(span, "id", "navbarDropdown");
      attr_dev(span, "role", "button");
      attr_dev(span, "data-bs-toggle", "dropdown");
      attr_dev(span, "aria-expanded", "false");
      add_location(span, file, 80, 5, 2472);
      attr_dev(a0, "class", "dropdown-item");
      attr_dev(a0, "href", "/");
      add_location(a0, file, 84, 10, 2755);
      add_location(li0, file, 84, 6, 2751);
      attr_dev(a1, "class", "dropdown-item");
      attr_dev(a1, "href", "/");
      add_location(a1, file, 85, 10, 2882);
      add_location(li1, file, 85, 6, 2878);
      attr_dev(ul0, "class", "dropdown-menu dropdown-menu-start");
      attr_dev(ul0, "aria-labelledby", "navbarDropdown");
      add_location(ul0, file, 83, 5, 2665);
      attr_dev(li2, "class", "nav-item dropdown");
      add_location(li2, file, 79, 4, 2436);
      attr_dev(ul1, "class", "navbar-nav");
      add_location(ul1, file, 78, 3, 2408);
      add_location(div2, file, 77, 4, 2399);
      attr_dev(div3, "class", "my-3 d-flex justify-content-start");
      add_location(div3, file, 76, 2, 2347);
      set_style(input, "visibility", "hidden");
      add_location(input, file, 123, 2, 4148);
      add_location(section1, file, 75, 0, 2335);
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
      append_hydration_dev(section1, input);
      set_input_value(
        input,
        /*currentTx*/
        ctx[4]
      );
      insert_hydration_dev(target, t11, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert_hydration_dev(target, if_block2_anchor, anchor);
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
          listen_dev(
            input,
            "input",
            /*input_input_handler*/
            ctx[10]
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
      16)
        peginfo_changes.currentTx = /*currentTx*/
        ctx2[4];
      peginfo.$set(peginfo_changes);
      if (
        /*wallet*/
        ctx2[2]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_2(ctx2);
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
        if (if_block1)
          ;
        else {
          if_block1 = create_if_block_1(ctx2);
          if_block1.c();
          if_block1.m(section1, t10);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (dirty & /*currentTx*/
      16 && input.value !== /*currentTx*/
      ctx2[4]) {
        set_input_value(
          input,
          /*currentTx*/
          ctx2[4]
        );
      }
      if (
        /*copied*/
        ctx2[3]
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & /*copied*/
          8) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(peginfo.$$.fragment, local);
      transition_in(if_block2);
      current = true;
    },
    o: function outro(local) {
      transition_out(peginfo.$$.fragment, local);
      transition_out(if_block2);
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
      if (detaching)
        detach_dev(t11);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach_dev(if_block2_anchor);
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
  let getWalletId;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("SignTransaction", slots, []);
  const dispatch = createEventDispatcher();
  let wallet;
  let opMechanism = "return";
  let { sigData } = $$props;
  let { pegInfo } = $$props;
  let copied = false;
  let currentTx = hex.encode(sigData.opReturnTx.toPSBT(2));
  const setCurrent = () => {
    const psbt = sigData.opReturnTx.toPSBT(2);
    wallet === "Bitcoin Core" ? $$invalidate(4, currentTx = base64.encode(psbt)) : $$invalidate(4, currentTx = hex.encode(psbt));
  };
  const updateWallet = (newWallet) => {
    $$invalidate(3, copied = false);
    $$invalidate(2, wallet = newWallet);
    setCurrent();
  };
  const updateOpMechanism = (newOpMechanism) => {
    opMechanism = newOpMechanism;
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
    $$invalidate(3, copied = true);
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
      console_1.warn("<SignTransaction> was created without expected prop 'sigData'");
    }
    if (pegInfo === void 0 && !("pegInfo" in $$props || $$self.$$.bound[$$self.$$.props["pegInfo"]])) {
      console_1.warn("<SignTransaction> was created without expected prop 'pegInfo'");
    }
  });
  const writable_props = ["sigData", "pegInfo"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console_1.warn(`<SignTransaction> was created with unknown prop '${key}'`);
  });
  const click_handler = () => updateWallet("Bitcoin Core");
  const click_handler_1 = () => updateWallet("Electrum");
  function input_input_handler() {
    currentTx = this.value;
    $$invalidate(4, currentTx);
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
      opMechanism = $$props2.opMechanism;
    if ("sigData" in $$props2)
      $$invalidate(0, sigData = $$props2.sigData);
    if ("pegInfo" in $$props2)
      $$invalidate(1, pegInfo = $$props2.pegInfo);
    if ("copied" in $$props2)
      $$invalidate(3, copied = $$props2.copied);
    if ("currentTx" in $$props2)
      $$invalidate(4, currentTx = $$props2.currentTx);
    if ("getWalletId" in $$props2)
      $$invalidate(5, getWalletId = $$props2.getWalletId);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*wallet*/
    4) {
      $$invalidate(5, getWalletId = () => {
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
    copied,
    currentTx,
    getWalletId,
    updateWallet,
    updateTransaction,
    click_handler,
    click_handler_1,
    input_input_handler
  ];
}
class SignTransaction extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { sigData: 0, pegInfo: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "SignTransaction",
      options,
      id: create_fragment.name
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
export {
  CopyClipboard as C,
  PegInfo as P,
  SignTransaction as S,
  openPsbtRequestPopup as o
};
