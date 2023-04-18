import { S as SvelteComponentDev, i as init$1, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a5 as createEventDispatcher, p as element, y as text, c as space, q as claim_element, r as children, z as claim_text, l as detach_dev, f as claim_space, x as add_location, u as attr_dev, g as insert_hydration_dev, O as append_hydration_dev, a1 as set_input_value, a7 as action_destroyer, W as listen_dev, A as set_data_dev, a2 as to_number, Z as noop, Y as run_all, o as onMount, _ as src_url_equal, U as validate_store, V as component_subscribe, C as create_component, D as claim_component, E as mount_component, k as transition_in, h as transition_out, F as destroy_component, G as create_slot, e as empty, B as group_outros, j as check_outros, a8 as bubble, a9 as self, P as update_slot_base, Q as get_all_dirty_from_scope, R as get_slot_changes, a0 as globals } from "../chunks/index.605ac338.js";
import { A as commonjsGlobal, B as savePaymentRequest, a as addresses, C as CONFIG } from "../chunks/stacks_connect.fd09cc29.js";
import { s as sbtcConfig } from "../chunks/stores.d1299e51.js";
import { F as FeeDisplay, P as Principal, U as UTXOSelection, S as SbtcWalletDisplay, a as SignTransactionWeb } from "../chunks/SbtcWalletDisplay.279f16a6.js";
import { f as fmtSatoshiToBitcoin, b as explorerBtcAddressUrl } from "../chunks/utils.41e44eab.js";
import { P as PegInTransaction, D as DebugPeginInfo } from "../chunks/DebugPeginInfo.7ba9cc13.js";
import { S as SignTransaction } from "../chunks/SignTransaction.a6eceb81.js";
const file$5 = "src/lib/components/wrapper/PegInAmount.svelte";
function create_fragment$5(ctx) {
  let div2;
  let div1;
  let label;
  let span0;
  let t0_value = (
    /*amtData*/
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
    /*amtData*/
    ctx[0].info + ""
  );
  let t4;
  let mounted;
  let dispose;
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
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(span0, file$5, 38, 6, 1320);
      attr_dev(span1, "class", "pointer text-info");
      attr_dev(span1, "data-bs-toggle", "tooltip-ftux");
      attr_dev(span1, "data-bs-placement", "top");
      attr_dev(span1, "data-bs-custom-class", "custom-tooltip");
      attr_dev(span1, "title", "The amount of Bitcoin you want to swap for sBTC. The bitcoin is locked in the protocol and you convert your sBTC back to Bitcoin when you peg out.");
      add_location(span1, file$5, 39, 6, 1355);
      attr_dev(label, "for", "transact-path");
      attr_dev(label, "class", "d-flex justify-content-between");
      add_location(label, file$5, 37, 4, 1247);
      attr_dev(input, "type", "number");
      attr_dev(input, "id", "from-address");
      attr_dev(input, "class", "form-control");
      attr_dev(input, "autocomplete", "off");
      add_location(input, file$5, 41, 4, 1659);
      attr_dev(div0, "class", "text-small");
      add_location(div0, file$5, 42, 4, 1813);
      attr_dev(div1, "class", "col-12");
      add_location(div1, file$5, 36, 2, 1222);
      attr_dev(div2, "class", "row");
      add_location(div2, file$5, 35, 0, 1202);
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
        /*pegAmount*/
        ctx[1]
      );
      append_hydration_dev(div1, t3);
      append_hydration_dev(div1, div0);
      append_hydration_dev(div0, t4);
      if (!mounted) {
        dispose = [
          action_destroyer(init.call(null, input)),
          listen_dev(
            input,
            "input",
            /*input_input_handler*/
            ctx[3]
          ),
          listen_dev(
            input,
            "input",
            /*input_handler*/
            ctx[4],
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
      if (dirty & /*amtData*/
      1 && t0_value !== (t0_value = /*amtData*/
      ctx2[0].label + ""))
        set_data_dev(t0, t0_value);
      if (dirty & /*pegAmount*/
      2 && to_number(input.value) !== /*pegAmount*/
      ctx2[1]) {
        set_input_value(
          input,
          /*pegAmount*/
          ctx2[1]
        );
      }
      if (dirty & /*amtData*/
      1 && t4_value !== (t4_value = /*amtData*/
      ctx2[0].info + ""))
        set_data_dev(t4, t4_value);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div2);
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
function init(el) {
  el.focus();
}
function instance$5($$self, $$props, $$invalidate) {
  let low;
  let medium;
  let high;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("PegInAmount", slots, []);
  let { amtData } = $$props;
  const dispatch = createEventDispatcher();
  let errorReason;
  let pegAmount = amtData.pegAmount;
  const changePegIn = (maxValue) => {
    errorReason = void 0;
    try {
      if (amtData.maxCommit > 0 && pegAmount > amtData.maxCommit) {
        errorReason = "Can't wrap more btc than available.";
        return;
      }
      if (maxValue) {
        $$invalidate(1, pegAmount = amtData.maxCommit - amtData.fee);
      }
      const rate = amtData.fees.find((o) => o === amtData.fee);
      dispatch("amount_updated", {
        opCode: "user",
        error: false,
        newAmount: pegAmount,
        newFeeRate: rate
      });
    } catch (err) {
      errorReason = err || "Amount is not valid";
    }
  };
  const changeRate = (event) => {
    const rate = event.detail.newFeeRate;
    dispatch("amount_updated", {
      opCode: "prio",
      error: false,
      newAmount: pegAmount,
      newFeeRate: rate
    });
  };
  $$self.$$.on_mount.push(function() {
    if (amtData === void 0 && !("amtData" in $$props || $$self.$$.bound[$$self.$$.props["amtData"]])) {
      console.warn("<PegInAmount> was created without expected prop 'amtData'");
    }
  });
  const writable_props = ["amtData"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<PegInAmount> was created with unknown prop '${key}'`);
  });
  function input_input_handler() {
    pegAmount = to_number(this.value);
    $$invalidate(1, pegAmount);
  }
  const input_handler = () => changePegIn(false);
  $$self.$$set = ($$props2) => {
    if ("amtData" in $$props2)
      $$invalidate(0, amtData = $$props2.amtData);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    FeeDisplay,
    amtData,
    dispatch,
    errorReason,
    pegAmount,
    changePegIn,
    changeRate,
    init,
    high,
    medium,
    low
  });
  $$self.$inject_state = ($$props2) => {
    if ("amtData" in $$props2)
      $$invalidate(0, amtData = $$props2.amtData);
    if ("errorReason" in $$props2)
      errorReason = $$props2.errorReason;
    if ("pegAmount" in $$props2)
      $$invalidate(1, pegAmount = $$props2.pegAmount);
    if ("high" in $$props2)
      high = $$props2.high;
    if ("medium" in $$props2)
      medium = $$props2.medium;
    if ("low" in $$props2)
      low = $$props2.low;
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*amtData*/
    1) {
      low = amtData.fee === amtData.fees[0];
    }
    if ($$self.$$.dirty & /*amtData*/
    1) {
      medium = amtData.fee === amtData.fees[1];
    }
    if ($$self.$$.dirty & /*amtData*/
    1) {
      high = amtData.fee === amtData.fees[2];
    }
  };
  return [amtData, pegAmount, changePegIn, input_input_handler, input_handler];
}
class PegInAmount extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init$1(this, options, instance$5, create_fragment$5, safe_not_equal, { amtData: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "PegInAmount",
      options,
      id: create_fragment$5.name
    });
  }
  get amtData() {
    throw new Error("<PegInAmount>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set amtData(value) {
    throw new Error("<PegInAmount>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
var qrcodeExports = {};
var qrcode = {
  get exports() {
    return qrcodeExports;
  },
  set exports(v) {
    qrcodeExports = v;
  }
};
(function(module, exports) {
  (function(global, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    var Constructor = (
      /* istanbul ignore next */
      function() {
      }
    );
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var slice = Array.prototype.slice;
    function createObject(prototype, properties) {
      var result;
      if (typeof Object.create === "function") {
        result = Object.create(prototype);
      } else {
        Constructor.prototype = prototype;
        result = new Constructor();
        Constructor.prototype = null;
      }
      if (properties) {
        extendObject(true, result, properties);
      }
      return result;
    }
    function extend(name, constructor, prototype, statics) {
      var superConstructor = this;
      if (typeof name !== "string") {
        statics = prototype;
        prototype = constructor;
        constructor = name;
        name = null;
      }
      if (typeof constructor !== "function") {
        statics = prototype;
        prototype = constructor;
        constructor = function() {
          return superConstructor.apply(this, arguments);
        };
      }
      extendObject(false, constructor, superConstructor, statics);
      constructor.prototype = createObject(superConstructor.prototype, prototype);
      constructor.prototype.constructor = constructor;
      constructor.class_ = name || superConstructor.class_;
      constructor.super_ = superConstructor;
      return constructor;
    }
    function extendObject(own, target, sources) {
      sources = slice.call(arguments, 2);
      var property;
      var source;
      for (var i = 0, length = sources.length; i < length; i++) {
        source = sources[i];
        for (property in source) {
          if (!own || hasOwnProperty.call(source, property)) {
            target[property] = source[property];
          }
        }
      }
    }
    var extend_1 = extend;
    function Nevis() {
    }
    Nevis.class_ = "Nevis";
    Nevis.super_ = Object;
    Nevis.extend = extend_1;
    var nevis = Nevis;
    var lite = nevis;
    var Renderer = lite.extend(function(qrious, element2, enabled) {
      this.qrious = qrious;
      this.element = element2;
      this.element.qrious = qrious;
      this.enabled = Boolean(enabled);
    }, {
      /**
       * Draws the specified QR code <code>frame</code> on the underlying element.
       *
       * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
       *
       * @param {Frame} frame - the {@link Frame} to be drawn
       * @return {void}
       * @protected
       * @abstract
       * @memberof Renderer#
       */
      draw: function(frame) {
      },
      /**
       * Returns the element onto which this {@link Renderer} is rendering the QR code.
       *
       * If this method is called while this {@link Renderer} is disabled, it will be immediately enabled and rendered
       * before the element is returned.
       *
       * @return {*} The element.
       * @public
       * @memberof Renderer#
       */
      getElement: function() {
        if (!this.enabled) {
          this.enabled = true;
          this.render();
        }
        return this.element;
      },
      /**
       * Calculates the size (in pixel units) to represent an individual module within the QR code based on the
       * <code>frame</code> provided.
       *
       * Any configured padding will be excluded from the returned size.
       *
       * The returned value will be at least one, even in cases where the size of the QR code does not fit its contents.
       * This is done so that the inevitable clipping is handled more gracefully since this way at least something is
       * displayed instead of just a blank space filled by the background color.
       *
       * @param {Frame} frame - the {@link Frame} from which the module size is to be derived
       * @return {number} The pixel size for each module in the QR code which will be no less than one.
       * @protected
       * @memberof Renderer#
       */
      getModuleSize: function(frame) {
        var qrious = this.qrious;
        var padding = qrious.padding || 0;
        var pixels = Math.floor((qrious.size - padding * 2) / frame.width);
        return Math.max(1, pixels);
      },
      /**
       * Renders a QR code on the underlying element based on the <code>frame</code> provided.
       *
       * @param {Frame} frame - the {@link Frame} to be rendered
       * @return {void}
       * @public
       * @memberof Renderer#
       */
      render: function(frame) {
        if (this.enabled) {
          this.resize();
          this.reset();
          this.draw(frame);
        }
      },
      /**
       * Resets the underlying element, effectively clearing any previously rendered QR code.
       *
       * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
       *
       * @return {void}
       * @protected
       * @abstract
       * @memberof Renderer#
       */
      reset: function() {
      },
      /**
       * Ensures that the size of the underlying element matches that defined on the associated {@link QRious} instance.
       *
       * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
       *
       * @return {void}
       * @protected
       * @abstract
       * @memberof Renderer#
       */
      resize: function() {
      }
    });
    var Renderer_1 = Renderer;
    var CanvasRenderer = Renderer_1.extend({
      /**
       * @override
       */
      draw: function(frame) {
        var i, j;
        var qrious = this.qrious;
        var moduleSize = this.getModuleSize(frame);
        var offset = parseInt((this.element.width - frame.width * moduleSize) / 2);
        var context = this.element.getContext("2d");
        context.fillStyle = qrious.foreground;
        context.globalAlpha = qrious.foregroundAlpha;
        for (i = 0; i < frame.width; i++) {
          for (j = 0; j < frame.width; j++) {
            if (frame.buffer[j * frame.width + i]) {
              context.fillRect(moduleSize * i + offset, moduleSize * j + offset, moduleSize, moduleSize);
            }
          }
        }
      },
      /**
       * @override
       */
      reset: function() {
        var qrious = this.qrious;
        var context = this.element.getContext("2d");
        var size = qrious.size;
        context.lineWidth = 1;
        context.clearRect(0, 0, size, size);
        context.fillStyle = qrious.background;
        context.globalAlpha = qrious.backgroundAlpha;
        context.fillRect(0, 0, size, size);
      },
      /**
       * @override
       */
      resize: function() {
        var element2 = this.element;
        element2.width = element2.height = this.qrious.size;
      }
    });
    var CanvasRenderer_1 = CanvasRenderer;
    var Alignment = lite.extend(null, {
      /**
       * The alignment pattern block.
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof Alignment
       */
      BLOCK: [
        0,
        11,
        15,
        19,
        23,
        27,
        31,
        16,
        18,
        20,
        22,
        24,
        26,
        28,
        20,
        22,
        24,
        24,
        26,
        28,
        28,
        22,
        24,
        24,
        26,
        26,
        28,
        28,
        24,
        24,
        26,
        26,
        26,
        28,
        28,
        24,
        26,
        26,
        26,
        28,
        28
      ]
    });
    var Alignment_1 = Alignment;
    var ErrorCorrection = lite.extend(null, {
      /**
       * The error correction blocks.
       *
       * There are four elements per version. The first two indicate the number of blocks, then the data width, and finally
       * the ECC width.
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof ErrorCorrection
       */
      BLOCKS: [
        1,
        0,
        19,
        7,
        1,
        0,
        16,
        10,
        1,
        0,
        13,
        13,
        1,
        0,
        9,
        17,
        1,
        0,
        34,
        10,
        1,
        0,
        28,
        16,
        1,
        0,
        22,
        22,
        1,
        0,
        16,
        28,
        1,
        0,
        55,
        15,
        1,
        0,
        44,
        26,
        2,
        0,
        17,
        18,
        2,
        0,
        13,
        22,
        1,
        0,
        80,
        20,
        2,
        0,
        32,
        18,
        2,
        0,
        24,
        26,
        4,
        0,
        9,
        16,
        1,
        0,
        108,
        26,
        2,
        0,
        43,
        24,
        2,
        2,
        15,
        18,
        2,
        2,
        11,
        22,
        2,
        0,
        68,
        18,
        4,
        0,
        27,
        16,
        4,
        0,
        19,
        24,
        4,
        0,
        15,
        28,
        2,
        0,
        78,
        20,
        4,
        0,
        31,
        18,
        2,
        4,
        14,
        18,
        4,
        1,
        13,
        26,
        2,
        0,
        97,
        24,
        2,
        2,
        38,
        22,
        4,
        2,
        18,
        22,
        4,
        2,
        14,
        26,
        2,
        0,
        116,
        30,
        3,
        2,
        36,
        22,
        4,
        4,
        16,
        20,
        4,
        4,
        12,
        24,
        2,
        2,
        68,
        18,
        4,
        1,
        43,
        26,
        6,
        2,
        19,
        24,
        6,
        2,
        15,
        28,
        4,
        0,
        81,
        20,
        1,
        4,
        50,
        30,
        4,
        4,
        22,
        28,
        3,
        8,
        12,
        24,
        2,
        2,
        92,
        24,
        6,
        2,
        36,
        22,
        4,
        6,
        20,
        26,
        7,
        4,
        14,
        28,
        4,
        0,
        107,
        26,
        8,
        1,
        37,
        22,
        8,
        4,
        20,
        24,
        12,
        4,
        11,
        22,
        3,
        1,
        115,
        30,
        4,
        5,
        40,
        24,
        11,
        5,
        16,
        20,
        11,
        5,
        12,
        24,
        5,
        1,
        87,
        22,
        5,
        5,
        41,
        24,
        5,
        7,
        24,
        30,
        11,
        7,
        12,
        24,
        5,
        1,
        98,
        24,
        7,
        3,
        45,
        28,
        15,
        2,
        19,
        24,
        3,
        13,
        15,
        30,
        1,
        5,
        107,
        28,
        10,
        1,
        46,
        28,
        1,
        15,
        22,
        28,
        2,
        17,
        14,
        28,
        5,
        1,
        120,
        30,
        9,
        4,
        43,
        26,
        17,
        1,
        22,
        28,
        2,
        19,
        14,
        28,
        3,
        4,
        113,
        28,
        3,
        11,
        44,
        26,
        17,
        4,
        21,
        26,
        9,
        16,
        13,
        26,
        3,
        5,
        107,
        28,
        3,
        13,
        41,
        26,
        15,
        5,
        24,
        30,
        15,
        10,
        15,
        28,
        4,
        4,
        116,
        28,
        17,
        0,
        42,
        26,
        17,
        6,
        22,
        28,
        19,
        6,
        16,
        30,
        2,
        7,
        111,
        28,
        17,
        0,
        46,
        28,
        7,
        16,
        24,
        30,
        34,
        0,
        13,
        24,
        4,
        5,
        121,
        30,
        4,
        14,
        47,
        28,
        11,
        14,
        24,
        30,
        16,
        14,
        15,
        30,
        6,
        4,
        117,
        30,
        6,
        14,
        45,
        28,
        11,
        16,
        24,
        30,
        30,
        2,
        16,
        30,
        8,
        4,
        106,
        26,
        8,
        13,
        47,
        28,
        7,
        22,
        24,
        30,
        22,
        13,
        15,
        30,
        10,
        2,
        114,
        28,
        19,
        4,
        46,
        28,
        28,
        6,
        22,
        28,
        33,
        4,
        16,
        30,
        8,
        4,
        122,
        30,
        22,
        3,
        45,
        28,
        8,
        26,
        23,
        30,
        12,
        28,
        15,
        30,
        3,
        10,
        117,
        30,
        3,
        23,
        45,
        28,
        4,
        31,
        24,
        30,
        11,
        31,
        15,
        30,
        7,
        7,
        116,
        30,
        21,
        7,
        45,
        28,
        1,
        37,
        23,
        30,
        19,
        26,
        15,
        30,
        5,
        10,
        115,
        30,
        19,
        10,
        47,
        28,
        15,
        25,
        24,
        30,
        23,
        25,
        15,
        30,
        13,
        3,
        115,
        30,
        2,
        29,
        46,
        28,
        42,
        1,
        24,
        30,
        23,
        28,
        15,
        30,
        17,
        0,
        115,
        30,
        10,
        23,
        46,
        28,
        10,
        35,
        24,
        30,
        19,
        35,
        15,
        30,
        17,
        1,
        115,
        30,
        14,
        21,
        46,
        28,
        29,
        19,
        24,
        30,
        11,
        46,
        15,
        30,
        13,
        6,
        115,
        30,
        14,
        23,
        46,
        28,
        44,
        7,
        24,
        30,
        59,
        1,
        16,
        30,
        12,
        7,
        121,
        30,
        12,
        26,
        47,
        28,
        39,
        14,
        24,
        30,
        22,
        41,
        15,
        30,
        6,
        14,
        121,
        30,
        6,
        34,
        47,
        28,
        46,
        10,
        24,
        30,
        2,
        64,
        15,
        30,
        17,
        4,
        122,
        30,
        29,
        14,
        46,
        28,
        49,
        10,
        24,
        30,
        24,
        46,
        15,
        30,
        4,
        18,
        122,
        30,
        13,
        32,
        46,
        28,
        48,
        14,
        24,
        30,
        42,
        32,
        15,
        30,
        20,
        4,
        117,
        30,
        40,
        7,
        47,
        28,
        43,
        22,
        24,
        30,
        10,
        67,
        15,
        30,
        19,
        6,
        118,
        30,
        18,
        31,
        47,
        28,
        34,
        34,
        24,
        30,
        20,
        61,
        15,
        30
      ],
      /**
       * The final format bits with mask (level << 3 | mask).
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof ErrorCorrection
       */
      FINAL_FORMAT: [
        // L
        30660,
        29427,
        32170,
        30877,
        26159,
        25368,
        27713,
        26998,
        // M
        21522,
        20773,
        24188,
        23371,
        17913,
        16590,
        20375,
        19104,
        // Q
        13663,
        12392,
        16177,
        14854,
        9396,
        8579,
        11994,
        11245,
        // H
        5769,
        5054,
        7399,
        6608,
        1890,
        597,
        3340,
        2107
      ],
      /**
       * A map of human-readable ECC levels.
       *
       * @public
       * @static
       * @type {Object.<string, number>}
       * @memberof ErrorCorrection
       */
      LEVELS: {
        L: 1,
        M: 2,
        Q: 3,
        H: 4
      }
    });
    var ErrorCorrection_1 = ErrorCorrection;
    var Galois = lite.extend(null, {
      /**
       * The Galois field exponent table.
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof Galois
       */
      EXPONENT: [
        1,
        2,
        4,
        8,
        16,
        32,
        64,
        128,
        29,
        58,
        116,
        232,
        205,
        135,
        19,
        38,
        76,
        152,
        45,
        90,
        180,
        117,
        234,
        201,
        143,
        3,
        6,
        12,
        24,
        48,
        96,
        192,
        157,
        39,
        78,
        156,
        37,
        74,
        148,
        53,
        106,
        212,
        181,
        119,
        238,
        193,
        159,
        35,
        70,
        140,
        5,
        10,
        20,
        40,
        80,
        160,
        93,
        186,
        105,
        210,
        185,
        111,
        222,
        161,
        95,
        190,
        97,
        194,
        153,
        47,
        94,
        188,
        101,
        202,
        137,
        15,
        30,
        60,
        120,
        240,
        253,
        231,
        211,
        187,
        107,
        214,
        177,
        127,
        254,
        225,
        223,
        163,
        91,
        182,
        113,
        226,
        217,
        175,
        67,
        134,
        17,
        34,
        68,
        136,
        13,
        26,
        52,
        104,
        208,
        189,
        103,
        206,
        129,
        31,
        62,
        124,
        248,
        237,
        199,
        147,
        59,
        118,
        236,
        197,
        151,
        51,
        102,
        204,
        133,
        23,
        46,
        92,
        184,
        109,
        218,
        169,
        79,
        158,
        33,
        66,
        132,
        21,
        42,
        84,
        168,
        77,
        154,
        41,
        82,
        164,
        85,
        170,
        73,
        146,
        57,
        114,
        228,
        213,
        183,
        115,
        230,
        209,
        191,
        99,
        198,
        145,
        63,
        126,
        252,
        229,
        215,
        179,
        123,
        246,
        241,
        255,
        227,
        219,
        171,
        75,
        150,
        49,
        98,
        196,
        149,
        55,
        110,
        220,
        165,
        87,
        174,
        65,
        130,
        25,
        50,
        100,
        200,
        141,
        7,
        14,
        28,
        56,
        112,
        224,
        221,
        167,
        83,
        166,
        81,
        162,
        89,
        178,
        121,
        242,
        249,
        239,
        195,
        155,
        43,
        86,
        172,
        69,
        138,
        9,
        18,
        36,
        72,
        144,
        61,
        122,
        244,
        245,
        247,
        243,
        251,
        235,
        203,
        139,
        11,
        22,
        44,
        88,
        176,
        125,
        250,
        233,
        207,
        131,
        27,
        54,
        108,
        216,
        173,
        71,
        142,
        0
      ],
      /**
       * The Galois field log table.
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof Galois
       */
      LOG: [
        255,
        0,
        1,
        25,
        2,
        50,
        26,
        198,
        3,
        223,
        51,
        238,
        27,
        104,
        199,
        75,
        4,
        100,
        224,
        14,
        52,
        141,
        239,
        129,
        28,
        193,
        105,
        248,
        200,
        8,
        76,
        113,
        5,
        138,
        101,
        47,
        225,
        36,
        15,
        33,
        53,
        147,
        142,
        218,
        240,
        18,
        130,
        69,
        29,
        181,
        194,
        125,
        106,
        39,
        249,
        185,
        201,
        154,
        9,
        120,
        77,
        228,
        114,
        166,
        6,
        191,
        139,
        98,
        102,
        221,
        48,
        253,
        226,
        152,
        37,
        179,
        16,
        145,
        34,
        136,
        54,
        208,
        148,
        206,
        143,
        150,
        219,
        189,
        241,
        210,
        19,
        92,
        131,
        56,
        70,
        64,
        30,
        66,
        182,
        163,
        195,
        72,
        126,
        110,
        107,
        58,
        40,
        84,
        250,
        133,
        186,
        61,
        202,
        94,
        155,
        159,
        10,
        21,
        121,
        43,
        78,
        212,
        229,
        172,
        115,
        243,
        167,
        87,
        7,
        112,
        192,
        247,
        140,
        128,
        99,
        13,
        103,
        74,
        222,
        237,
        49,
        197,
        254,
        24,
        227,
        165,
        153,
        119,
        38,
        184,
        180,
        124,
        17,
        68,
        146,
        217,
        35,
        32,
        137,
        46,
        55,
        63,
        209,
        91,
        149,
        188,
        207,
        205,
        144,
        135,
        151,
        178,
        220,
        252,
        190,
        97,
        242,
        86,
        211,
        171,
        20,
        42,
        93,
        158,
        132,
        60,
        57,
        83,
        71,
        109,
        65,
        162,
        31,
        45,
        67,
        216,
        183,
        123,
        164,
        118,
        196,
        23,
        73,
        236,
        127,
        12,
        111,
        246,
        108,
        161,
        59,
        82,
        41,
        157,
        85,
        170,
        251,
        96,
        134,
        177,
        187,
        204,
        62,
        90,
        203,
        89,
        95,
        176,
        156,
        169,
        160,
        81,
        11,
        245,
        22,
        235,
        122,
        117,
        44,
        215,
        79,
        174,
        213,
        233,
        230,
        231,
        173,
        232,
        116,
        214,
        244,
        234,
        168,
        80,
        88,
        175
      ]
    });
    var Galois_1 = Galois;
    var Version = lite.extend(null, {
      /**
       * The version pattern block.
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof Version
       */
      BLOCK: [
        3220,
        1468,
        2713,
        1235,
        3062,
        1890,
        2119,
        1549,
        2344,
        2936,
        1117,
        2583,
        1330,
        2470,
        1667,
        2249,
        2028,
        3780,
        481,
        4011,
        142,
        3098,
        831,
        3445,
        592,
        2517,
        1776,
        2234,
        1951,
        2827,
        1070,
        2660,
        1345,
        3177
      ]
    });
    var Version_1 = Version;
    var Frame = lite.extend(function(options) {
      var dataBlock, eccBlock, index2, neccBlock1, neccBlock2;
      var valueLength = options.value.length;
      this._badness = [];
      this._level = ErrorCorrection_1.LEVELS[options.level];
      this._polynomial = [];
      this._value = options.value;
      this._version = 0;
      this._stringBuffer = [];
      while (this._version < 40) {
        this._version++;
        index2 = (this._level - 1) * 4 + (this._version - 1) * 16;
        neccBlock1 = ErrorCorrection_1.BLOCKS[index2++];
        neccBlock2 = ErrorCorrection_1.BLOCKS[index2++];
        dataBlock = ErrorCorrection_1.BLOCKS[index2++];
        eccBlock = ErrorCorrection_1.BLOCKS[index2];
        index2 = dataBlock * (neccBlock1 + neccBlock2) + neccBlock2 - 3 + (this._version <= 9);
        if (valueLength <= index2) {
          break;
        }
      }
      this._dataBlock = dataBlock;
      this._eccBlock = eccBlock;
      this._neccBlock1 = neccBlock1;
      this._neccBlock2 = neccBlock2;
      var width = this.width = 17 + 4 * this._version;
      this.buffer = Frame._createArray(width * width);
      this._ecc = Frame._createArray(dataBlock + (dataBlock + eccBlock) * (neccBlock1 + neccBlock2) + neccBlock2);
      this._mask = Frame._createArray((width * (width + 1) + 1) / 2);
      this._insertFinders();
      this._insertAlignments();
      this.buffer[8 + width * (width - 8)] = 1;
      this._insertTimingGap();
      this._reverseMask();
      this._insertTimingRowAndColumn();
      this._insertVersion();
      this._syncMask();
      this._convertBitStream(valueLength);
      this._calculatePolynomial();
      this._appendEccToData();
      this._interleaveBlocks();
      this._pack();
      this._finish();
    }, {
      _addAlignment: function(x, y) {
        var i;
        var buffer = this.buffer;
        var width = this.width;
        buffer[x + width * y] = 1;
        for (i = -2; i < 2; i++) {
          buffer[x + i + width * (y - 2)] = 1;
          buffer[x - 2 + width * (y + i + 1)] = 1;
          buffer[x + 2 + width * (y + i)] = 1;
          buffer[x + i + 1 + width * (y + 2)] = 1;
        }
        for (i = 0; i < 2; i++) {
          this._setMask(x - 1, y + i);
          this._setMask(x + 1, y - i);
          this._setMask(x - i, y - 1);
          this._setMask(x + i, y + 1);
        }
      },
      _appendData: function(data, dataLength, ecc, eccLength) {
        var bit, i, j;
        var polynomial = this._polynomial;
        var stringBuffer = this._stringBuffer;
        for (i = 0; i < eccLength; i++) {
          stringBuffer[ecc + i] = 0;
        }
        for (i = 0; i < dataLength; i++) {
          bit = Galois_1.LOG[stringBuffer[data + i] ^ stringBuffer[ecc]];
          if (bit !== 255) {
            for (j = 1; j < eccLength; j++) {
              stringBuffer[ecc + j - 1] = stringBuffer[ecc + j] ^ Galois_1.EXPONENT[Frame._modN(bit + polynomial[eccLength - j])];
            }
          } else {
            for (j = ecc; j < ecc + eccLength; j++) {
              stringBuffer[j] = stringBuffer[j + 1];
            }
          }
          stringBuffer[ecc + eccLength - 1] = bit === 255 ? 0 : Galois_1.EXPONENT[Frame._modN(bit + polynomial[0])];
        }
      },
      _appendEccToData: function() {
        var i;
        var data = 0;
        var dataBlock = this._dataBlock;
        var ecc = this._calculateMaxLength();
        var eccBlock = this._eccBlock;
        for (i = 0; i < this._neccBlock1; i++) {
          this._appendData(data, dataBlock, ecc, eccBlock);
          data += dataBlock;
          ecc += eccBlock;
        }
        for (i = 0; i < this._neccBlock2; i++) {
          this._appendData(data, dataBlock + 1, ecc, eccBlock);
          data += dataBlock + 1;
          ecc += eccBlock;
        }
      },
      _applyMask: function(mask) {
        var r3x, r3y, x, y;
        var buffer = this.buffer;
        var width = this.width;
        switch (mask) {
          case 0:
            for (y = 0; y < width; y++) {
              for (x = 0; x < width; x++) {
                if (!(x + y & 1) && !this._isMasked(x, y)) {
                  buffer[x + y * width] ^= 1;
                }
              }
            }
            break;
          case 1:
            for (y = 0; y < width; y++) {
              for (x = 0; x < width; x++) {
                if (!(y & 1) && !this._isMasked(x, y)) {
                  buffer[x + y * width] ^= 1;
                }
              }
            }
            break;
          case 2:
            for (y = 0; y < width; y++) {
              for (r3x = 0, x = 0; x < width; x++, r3x++) {
                if (r3x === 3) {
                  r3x = 0;
                }
                if (!r3x && !this._isMasked(x, y)) {
                  buffer[x + y * width] ^= 1;
                }
              }
            }
            break;
          case 3:
            for (r3y = 0, y = 0; y < width; y++, r3y++) {
              if (r3y === 3) {
                r3y = 0;
              }
              for (r3x = r3y, x = 0; x < width; x++, r3x++) {
                if (r3x === 3) {
                  r3x = 0;
                }
                if (!r3x && !this._isMasked(x, y)) {
                  buffer[x + y * width] ^= 1;
                }
              }
            }
            break;
          case 4:
            for (y = 0; y < width; y++) {
              for (r3x = 0, r3y = y >> 1 & 1, x = 0; x < width; x++, r3x++) {
                if (r3x === 3) {
                  r3x = 0;
                  r3y = !r3y;
                }
                if (!r3y && !this._isMasked(x, y)) {
                  buffer[x + y * width] ^= 1;
                }
              }
            }
            break;
          case 5:
            for (r3y = 0, y = 0; y < width; y++, r3y++) {
              if (r3y === 3) {
                r3y = 0;
              }
              for (r3x = 0, x = 0; x < width; x++, r3x++) {
                if (r3x === 3) {
                  r3x = 0;
                }
                if (!((x & y & 1) + !(!r3x | !r3y)) && !this._isMasked(x, y)) {
                  buffer[x + y * width] ^= 1;
                }
              }
            }
            break;
          case 6:
            for (r3y = 0, y = 0; y < width; y++, r3y++) {
              if (r3y === 3) {
                r3y = 0;
              }
              for (r3x = 0, x = 0; x < width; x++, r3x++) {
                if (r3x === 3) {
                  r3x = 0;
                }
                if (!((x & y & 1) + (r3x && r3x === r3y) & 1) && !this._isMasked(x, y)) {
                  buffer[x + y * width] ^= 1;
                }
              }
            }
            break;
          case 7:
            for (r3y = 0, y = 0; y < width; y++, r3y++) {
              if (r3y === 3) {
                r3y = 0;
              }
              for (r3x = 0, x = 0; x < width; x++, r3x++) {
                if (r3x === 3) {
                  r3x = 0;
                }
                if (!((r3x && r3x === r3y) + (x + y & 1) & 1) && !this._isMasked(x, y)) {
                  buffer[x + y * width] ^= 1;
                }
              }
            }
            break;
        }
      },
      _calculateMaxLength: function() {
        return this._dataBlock * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2;
      },
      _calculatePolynomial: function() {
        var i, j;
        var eccBlock = this._eccBlock;
        var polynomial = this._polynomial;
        polynomial[0] = 1;
        for (i = 0; i < eccBlock; i++) {
          polynomial[i + 1] = 1;
          for (j = i; j > 0; j--) {
            polynomial[j] = polynomial[j] ? polynomial[j - 1] ^ Galois_1.EXPONENT[Frame._modN(Galois_1.LOG[polynomial[j]] + i)] : polynomial[j - 1];
          }
          polynomial[0] = Galois_1.EXPONENT[Frame._modN(Galois_1.LOG[polynomial[0]] + i)];
        }
        for (i = 0; i <= eccBlock; i++) {
          polynomial[i] = Galois_1.LOG[polynomial[i]];
        }
      },
      _checkBadness: function() {
        var b, b1, h, x, y;
        var bad = 0;
        var badness = this._badness;
        var buffer = this.buffer;
        var width = this.width;
        for (y = 0; y < width - 1; y++) {
          for (x = 0; x < width - 1; x++) {
            if (buffer[x + width * y] && buffer[x + 1 + width * y] && buffer[x + width * (y + 1)] && buffer[x + 1 + width * (y + 1)] || // All background colour.
            !(buffer[x + width * y] || buffer[x + 1 + width * y] || buffer[x + width * (y + 1)] || buffer[x + 1 + width * (y + 1)])) {
              bad += Frame.N2;
            }
          }
        }
        var bw = 0;
        for (y = 0; y < width; y++) {
          h = 0;
          badness[0] = 0;
          for (b = 0, x = 0; x < width; x++) {
            b1 = buffer[x + width * y];
            if (b === b1) {
              badness[h]++;
            } else {
              badness[++h] = 1;
            }
            b = b1;
            bw += b ? 1 : -1;
          }
          bad += this._getBadness(h);
        }
        if (bw < 0) {
          bw = -bw;
        }
        var count = 0;
        var big = bw;
        big += big << 2;
        big <<= 1;
        while (big > width * width) {
          big -= width * width;
          count++;
        }
        bad += count * Frame.N4;
        for (x = 0; x < width; x++) {
          h = 0;
          badness[0] = 0;
          for (b = 0, y = 0; y < width; y++) {
            b1 = buffer[x + width * y];
            if (b === b1) {
              badness[h]++;
            } else {
              badness[++h] = 1;
            }
            b = b1;
          }
          bad += this._getBadness(h);
        }
        return bad;
      },
      _convertBitStream: function(length) {
        var bit, i;
        var ecc = this._ecc;
        var version = this._version;
        for (i = 0; i < length; i++) {
          ecc[i] = this._value.charCodeAt(i);
        }
        var stringBuffer = this._stringBuffer = ecc.slice();
        var maxLength = this._calculateMaxLength();
        if (length >= maxLength - 2) {
          length = maxLength - 2;
          if (version > 9) {
            length--;
          }
        }
        var index2 = length;
        if (version > 9) {
          stringBuffer[index2 + 2] = 0;
          stringBuffer[index2 + 3] = 0;
          while (index2--) {
            bit = stringBuffer[index2];
            stringBuffer[index2 + 3] |= 255 & bit << 4;
            stringBuffer[index2 + 2] = bit >> 4;
          }
          stringBuffer[2] |= 255 & length << 4;
          stringBuffer[1] = length >> 4;
          stringBuffer[0] = 64 | length >> 12;
        } else {
          stringBuffer[index2 + 1] = 0;
          stringBuffer[index2 + 2] = 0;
          while (index2--) {
            bit = stringBuffer[index2];
            stringBuffer[index2 + 2] |= 255 & bit << 4;
            stringBuffer[index2 + 1] = bit >> 4;
          }
          stringBuffer[1] |= 255 & length << 4;
          stringBuffer[0] = 64 | length >> 4;
        }
        index2 = length + 3 - (version < 10);
        while (index2 < maxLength) {
          stringBuffer[index2++] = 236;
          stringBuffer[index2++] = 17;
        }
      },
      _getBadness: function(length) {
        var i;
        var badRuns = 0;
        var badness = this._badness;
        for (i = 0; i <= length; i++) {
          if (badness[i] >= 5) {
            badRuns += Frame.N1 + badness[i] - 5;
          }
        }
        for (i = 3; i < length - 1; i += 2) {
          if (badness[i - 2] === badness[i + 2] && badness[i + 2] === badness[i - 1] && badness[i - 1] === badness[i + 1] && badness[i - 1] * 3 === badness[i] && // Background around the foreground pattern? Not part of the specs.
          (badness[i - 3] === 0 || i + 3 > length || badness[i - 3] * 3 >= badness[i] * 4 || badness[i + 3] * 3 >= badness[i] * 4)) {
            badRuns += Frame.N3;
          }
        }
        return badRuns;
      },
      _finish: function() {
        this._stringBuffer = this.buffer.slice();
        var currentMask, i;
        var bit = 0;
        var mask = 3e4;
        for (i = 0; i < 8; i++) {
          this._applyMask(i);
          currentMask = this._checkBadness();
          if (currentMask < mask) {
            mask = currentMask;
            bit = i;
          }
          if (bit === 7) {
            break;
          }
          this.buffer = this._stringBuffer.slice();
        }
        if (bit !== i) {
          this._applyMask(bit);
        }
        mask = ErrorCorrection_1.FINAL_FORMAT[bit + (this._level - 1 << 3)];
        var buffer = this.buffer;
        var width = this.width;
        for (i = 0; i < 8; i++, mask >>= 1) {
          if (mask & 1) {
            buffer[width - 1 - i + width * 8] = 1;
            if (i < 6) {
              buffer[8 + width * i] = 1;
            } else {
              buffer[8 + width * (i + 1)] = 1;
            }
          }
        }
        for (i = 0; i < 7; i++, mask >>= 1) {
          if (mask & 1) {
            buffer[8 + width * (width - 7 + i)] = 1;
            if (i) {
              buffer[6 - i + width * 8] = 1;
            } else {
              buffer[7 + width * 8] = 1;
            }
          }
        }
      },
      _interleaveBlocks: function() {
        var i, j;
        var dataBlock = this._dataBlock;
        var ecc = this._ecc;
        var eccBlock = this._eccBlock;
        var k = 0;
        var maxLength = this._calculateMaxLength();
        var neccBlock1 = this._neccBlock1;
        var neccBlock2 = this._neccBlock2;
        var stringBuffer = this._stringBuffer;
        for (i = 0; i < dataBlock; i++) {
          for (j = 0; j < neccBlock1; j++) {
            ecc[k++] = stringBuffer[i + j * dataBlock];
          }
          for (j = 0; j < neccBlock2; j++) {
            ecc[k++] = stringBuffer[neccBlock1 * dataBlock + i + j * (dataBlock + 1)];
          }
        }
        for (j = 0; j < neccBlock2; j++) {
          ecc[k++] = stringBuffer[neccBlock1 * dataBlock + i + j * (dataBlock + 1)];
        }
        for (i = 0; i < eccBlock; i++) {
          for (j = 0; j < neccBlock1 + neccBlock2; j++) {
            ecc[k++] = stringBuffer[maxLength + i + j * eccBlock];
          }
        }
        this._stringBuffer = ecc;
      },
      _insertAlignments: function() {
        var i, x, y;
        var version = this._version;
        var width = this.width;
        if (version > 1) {
          i = Alignment_1.BLOCK[version];
          y = width - 7;
          for (; ; ) {
            x = width - 7;
            while (x > i - 3) {
              this._addAlignment(x, y);
              if (x < i) {
                break;
              }
              x -= i;
            }
            if (y <= i + 9) {
              break;
            }
            y -= i;
            this._addAlignment(6, y);
            this._addAlignment(y, 6);
          }
        }
      },
      _insertFinders: function() {
        var i, j, x, y;
        var buffer = this.buffer;
        var width = this.width;
        for (i = 0; i < 3; i++) {
          j = 0;
          y = 0;
          if (i === 1) {
            j = width - 7;
          }
          if (i === 2) {
            y = width - 7;
          }
          buffer[y + 3 + width * (j + 3)] = 1;
          for (x = 0; x < 6; x++) {
            buffer[y + x + width * j] = 1;
            buffer[y + width * (j + x + 1)] = 1;
            buffer[y + 6 + width * (j + x)] = 1;
            buffer[y + x + 1 + width * (j + 6)] = 1;
          }
          for (x = 1; x < 5; x++) {
            this._setMask(y + x, j + 1);
            this._setMask(y + 1, j + x + 1);
            this._setMask(y + 5, j + x);
            this._setMask(y + x + 1, j + 5);
          }
          for (x = 2; x < 4; x++) {
            buffer[y + x + width * (j + 2)] = 1;
            buffer[y + 2 + width * (j + x + 1)] = 1;
            buffer[y + 4 + width * (j + x)] = 1;
            buffer[y + x + 1 + width * (j + 4)] = 1;
          }
        }
      },
      _insertTimingGap: function() {
        var x, y;
        var width = this.width;
        for (y = 0; y < 7; y++) {
          this._setMask(7, y);
          this._setMask(width - 8, y);
          this._setMask(7, y + width - 7);
        }
        for (x = 0; x < 8; x++) {
          this._setMask(x, 7);
          this._setMask(x + width - 8, 7);
          this._setMask(x, width - 8);
        }
      },
      _insertTimingRowAndColumn: function() {
        var x;
        var buffer = this.buffer;
        var width = this.width;
        for (x = 0; x < width - 14; x++) {
          if (x & 1) {
            this._setMask(8 + x, 6);
            this._setMask(6, 8 + x);
          } else {
            buffer[8 + x + width * 6] = 1;
            buffer[6 + width * (8 + x)] = 1;
          }
        }
      },
      _insertVersion: function() {
        var i, j, x, y;
        var buffer = this.buffer;
        var version = this._version;
        var width = this.width;
        if (version > 6) {
          i = Version_1.BLOCK[version - 7];
          j = 17;
          for (x = 0; x < 6; x++) {
            for (y = 0; y < 3; y++, j--) {
              if (1 & (j > 11 ? version >> j - 12 : i >> j)) {
                buffer[5 - x + width * (2 - y + width - 11)] = 1;
                buffer[2 - y + width - 11 + width * (5 - x)] = 1;
              } else {
                this._setMask(5 - x, 2 - y + width - 11);
                this._setMask(2 - y + width - 11, 5 - x);
              }
            }
          }
        }
      },
      _isMasked: function(x, y) {
        var bit = Frame._getMaskBit(x, y);
        return this._mask[bit] === 1;
      },
      _pack: function() {
        var bit, i, j;
        var k = 1;
        var v = 1;
        var width = this.width;
        var x = width - 1;
        var y = width - 1;
        var length = (this._dataBlock + this._eccBlock) * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2;
        for (i = 0; i < length; i++) {
          bit = this._stringBuffer[i];
          for (j = 0; j < 8; j++, bit <<= 1) {
            if (128 & bit) {
              this.buffer[x + width * y] = 1;
            }
            do {
              if (v) {
                x--;
              } else {
                x++;
                if (k) {
                  if (y !== 0) {
                    y--;
                  } else {
                    x -= 2;
                    k = !k;
                    if (x === 6) {
                      x--;
                      y = 9;
                    }
                  }
                } else if (y !== width - 1) {
                  y++;
                } else {
                  x -= 2;
                  k = !k;
                  if (x === 6) {
                    x--;
                    y -= 8;
                  }
                }
              }
              v = !v;
            } while (this._isMasked(x, y));
          }
        }
      },
      _reverseMask: function() {
        var x, y;
        var width = this.width;
        for (x = 0; x < 9; x++) {
          this._setMask(x, 8);
        }
        for (x = 0; x < 8; x++) {
          this._setMask(x + width - 8, 8);
          this._setMask(8, x);
        }
        for (y = 0; y < 7; y++) {
          this._setMask(8, y + width - 7);
        }
      },
      _setMask: function(x, y) {
        var bit = Frame._getMaskBit(x, y);
        this._mask[bit] = 1;
      },
      _syncMask: function() {
        var x, y;
        var width = this.width;
        for (y = 0; y < width; y++) {
          for (x = 0; x <= y; x++) {
            if (this.buffer[x + width * y]) {
              this._setMask(x, y);
            }
          }
        }
      }
    }, {
      _createArray: function(length) {
        var i;
        var array = [];
        for (i = 0; i < length; i++) {
          array[i] = 0;
        }
        return array;
      },
      _getMaskBit: function(x, y) {
        var bit;
        if (x > y) {
          bit = x;
          x = y;
          y = bit;
        }
        bit = y;
        bit += y * y;
        bit >>= 1;
        bit += x;
        return bit;
      },
      _modN: function(x) {
        while (x >= 255) {
          x -= 255;
          x = (x >> 8) + (x & 255);
        }
        return x;
      },
      // *Badness* coefficients.
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    });
    var Frame_1 = Frame;
    var ImageRenderer = Renderer_1.extend({
      /**
       * @override
       */
      draw: function() {
        this.element.src = this.qrious.toDataURL();
      },
      /**
       * @override
       */
      reset: function() {
        this.element.src = "";
      },
      /**
       * @override
       */
      resize: function() {
        var element2 = this.element;
        element2.width = element2.height = this.qrious.size;
      }
    });
    var ImageRenderer_1 = ImageRenderer;
    var Option = lite.extend(function(name, modifiable, defaultValue, valueTransformer) {
      this.name = name;
      this.modifiable = Boolean(modifiable);
      this.defaultValue = defaultValue;
      this._valueTransformer = valueTransformer;
    }, {
      /**
       * Transforms the specified <code>value</code> so that it can be applied for this {@link Option}.
       *
       * If a value transformer has been specified for this {@link Option}, it will be called upon to transform
       * <code>value</code>. Otherwise, <code>value</code> will be returned directly.
       *
       * @param {*} value - the value to be transformed
       * @return {*} The transformed value or <code>value</code> if no value transformer is specified.
       * @public
       * @memberof Option#
       */
      transform: function(value) {
        var transformer = this._valueTransformer;
        if (typeof transformer === "function") {
          return transformer(value, this);
        }
        return value;
      }
    });
    var Option_1 = Option;
    var Utilities = lite.extend(null, {
      /**
       * Returns the absolute value of a given number.
       *
       * This method is simply a convenient shorthand for <code>Math.abs</code> while ensuring that nulls are returned as
       * <code>null</code> instead of zero.
       *
       * @param {number} value - the number whose absolute value is to be returned
       * @return {number} The absolute value of <code>value</code> or <code>null</code> if <code>value</code> is
       * <code>null</code>.
       * @public
       * @static
       * @memberof Utilities
       */
      abs: function(value) {
        return value != null ? Math.abs(value) : null;
      },
      /**
       * Returns whether the specified <code>object</code> has a property with the specified <code>name</code> as an own
       * (not inherited) property.
       *
       * @param {Object} object - the object on which the property is to be checked
       * @param {string} name - the name of the property to be checked
       * @return {boolean} <code>true</code> if <code>object</code> has an own property with <code>name</code>.
       * @public
       * @static
       * @memberof Utilities
       */
      hasOwn: function(object, name) {
        return Object.prototype.hasOwnProperty.call(object, name);
      },
      /**
       * A non-operation method that does absolutely nothing.
       *
       * @return {void}
       * @public
       * @static
       * @memberof Utilities
       */
      noop: function() {
      },
      /**
       * Transforms the specified <code>string</code> to upper case while remaining null-safe.
       *
       * @param {string} string - the string to be transformed to upper case
       * @return {string} <code>string</code> transformed to upper case if <code>string</code> is not <code>null</code>.
       * @public
       * @static
       * @memberof Utilities
       */
      toUpperCase: function(string) {
        return string != null ? string.toUpperCase() : null;
      }
    });
    var Utilities_1 = Utilities;
    var OptionManager = lite.extend(function(options) {
      this.options = {};
      options.forEach(function(option) {
        this.options[option.name] = option;
      }, this);
    }, {
      /**
       * Returns whether an option with the specified <code>name</code> is available.
       *
       * @param {string} name - the name of the {@link Option} whose existence is to be checked
       * @return {boolean} <code>true</code> if an {@link Option} exists with <code>name</code>; otherwise
       * <code>false</code>.
       * @public
       * @memberof OptionManager#
       */
      exists: function(name) {
        return this.options[name] != null;
      },
      /**
       * Returns the value of the option with the specified <code>name</code> on the <code>target</code> object provided.
       *
       * @param {string} name - the name of the {@link Option} whose value on <code>target</code> is to be returned
       * @param {Object} target - the object from which the value of the named {@link Option} is to be returned
       * @return {*} The value of the {@link Option} with <code>name</code> on <code>target</code>.
       * @public
       * @memberof OptionManager#
       */
      get: function(name, target) {
        return OptionManager._get(this.options[name], target);
      },
      /**
       * Returns a copy of all of the available options on the <code>target</code> object provided.
       *
       * @param {Object} target - the object from which the option name/value pairs are to be returned
       * @return {Object.<string, *>} A hash containing the name/value pairs of all options on <code>target</code>.
       * @public
       * @memberof OptionManager#
       */
      getAll: function(target) {
        var name;
        var options = this.options;
        var result = {};
        for (name in options) {
          if (Utilities_1.hasOwn(options, name)) {
            result[name] = OptionManager._get(options[name], target);
          }
        }
        return result;
      },
      /**
       * Initializes the available options for the <code>target</code> object provided and then applies the initial values
       * within the speciifed <code>options</code>.
       *
       * This method will throw an error if any of the names within <code>options</code> does not match an available option.
       *
       * This involves setting the default values and defining properties for all of the available options on
       * <code>target</code> before finally calling {@link OptionMananger#setAll} with <code>options</code> and
       * <code>target</code>. Any options that are configured to be modifiable will have a setter included in their defined
       * property that will allow its corresponding value to be modified.
       *
       * If a change handler is specified, it will be called whenever the value changes on <code>target</code> for a
       * modifiable option, but only when done so via the defined property's setter.
       *
       * @param {Object.<string, *>} options - the name/value pairs of the initial options to be set
       * @param {Object} target - the object on which the options are to be initialized
       * @param {Function} [changeHandler] - the function to be called whenever the value of an modifiable option changes on
       * <code>target</code>
       * @return {void}
       * @throws {Error} If <code>options</code> contains an invalid option name.
       * @public
       * @memberof OptionManager#
       */
      init: function(options, target, changeHandler) {
        if (typeof changeHandler !== "function") {
          changeHandler = Utilities_1.noop;
        }
        var name, option;
        for (name in this.options) {
          if (Utilities_1.hasOwn(this.options, name)) {
            option = this.options[name];
            OptionManager._set(option, option.defaultValue, target);
            OptionManager._createAccessor(option, target, changeHandler);
          }
        }
        this._setAll(options, target, true);
      },
      /**
       * Sets the value of the option with the specified <code>name</code> on the <code>target</code> object provided to
       * <code>value</code>.
       *
       * This method will throw an error if <code>name</code> does not match an available option or matches an option that
       * cannot be modified.
       *
       * If <code>value</code> is <code>null</code> and the {@link Option} has a default value configured, then that default
       * value will be used instead. If the {@link Option} also has a value transformer configured, it will be used to
       * transform whichever value was determined to be used.
       *
       * This method returns whether the value of the underlying field on <code>target</code> was changed as a result.
       *
       * @param {string} name - the name of the {@link Option} whose value is to be set
       * @param {*} value - the value to be set for the named {@link Option} on <code>target</code>
       * @param {Object} target - the object on which <code>value</code> is to be set for the named {@link Option}
       * @return {boolean} <code>true</code> if the underlying field on <code>target</code> was changed; otherwise
       * <code>false</code>.
       * @throws {Error} If <code>name</code> is invalid or is for an option that cannot be modified.
       * @public
       * @memberof OptionManager#
       */
      set: function(name, value, target) {
        return this._set(name, value, target);
      },
      /**
       * Sets all of the specified <code>options</code> on the <code>target</code> object provided to their corresponding
       * values.
       *
       * This method will throw an error if any of the names within <code>options</code> does not match an available option
       * or matches an option that cannot be modified.
       *
       * If any value within <code>options</code> is <code>null</code> and the corresponding {@link Option} has a default
       * value configured, then that default value will be used instead. If an {@link Option} also has a value transformer
       * configured, it will be used to transform whichever value was determined to be used.
       *
       * This method returns whether the value for any of the underlying fields on <code>target</code> were changed as a
       * result.
       *
       * @param {Object.<string, *>} options - the name/value pairs of options to be set
       * @param {Object} target - the object on which the options are to be set
       * @return {boolean} <code>true</code> if any of the underlying fields on <code>target</code> were changed; otherwise
       * <code>false</code>.
       * @throws {Error} If <code>options</code> contains an invalid option name or an option that cannot be modiifed.
       * @public
       * @memberof OptionManager#
       */
      setAll: function(options, target) {
        return this._setAll(options, target);
      },
      _set: function(name, value, target, allowUnmodifiable) {
        var option = this.options[name];
        if (!option) {
          throw new Error("Invalid option: " + name);
        }
        if (!option.modifiable && !allowUnmodifiable) {
          throw new Error("Option cannot be modified: " + name);
        }
        return OptionManager._set(option, value, target);
      },
      _setAll: function(options, target, allowUnmodifiable) {
        if (!options) {
          return false;
        }
        var name;
        var changed = false;
        for (name in options) {
          if (Utilities_1.hasOwn(options, name) && this._set(name, options[name], target, allowUnmodifiable)) {
            changed = true;
          }
        }
        return changed;
      }
    }, {
      _createAccessor: function(option, target, changeHandler) {
        var descriptor = {
          get: function() {
            return OptionManager._get(option, target);
          }
        };
        if (option.modifiable) {
          descriptor.set = function(value) {
            if (OptionManager._set(option, value, target)) {
              changeHandler(value, option);
            }
          };
        }
        Object.defineProperty(target, option.name, descriptor);
      },
      _get: function(option, target) {
        return target["_" + option.name];
      },
      _set: function(option, value, target) {
        var fieldName = "_" + option.name;
        var oldValue = target[fieldName];
        var newValue = option.transform(value != null ? value : option.defaultValue);
        target[fieldName] = newValue;
        return newValue !== oldValue;
      }
    });
    var OptionManager_1 = OptionManager;
    var ServiceManager = lite.extend(function() {
      this._services = {};
    }, {
      /**
       * Returns the {@link Service} being managed with the specified <code>name</code>.
       *
       * @param {string} name - the name of the {@link Service} to be returned
       * @return {Service} The {@link Service} is being managed with <code>name</code>.
       * @throws {Error} If no {@link Service} is being managed with <code>name</code>.
       * @public
       * @memberof ServiceManager#
       */
      getService: function(name) {
        var service = this._services[name];
        if (!service) {
          throw new Error("Service is not being managed with name: " + name);
        }
        return service;
      },
      /**
       * Sets the {@link Service} implementation to be managed for the specified <code>name</code> to the
       * <code>service</code> provided.
       *
       * @param {string} name - the name of the {@link Service} to be managed with <code>name</code>
       * @param {Service} service - the {@link Service} implementation to be managed
       * @return {void}
       * @throws {Error} If a {@link Service} is already being managed with the same <code>name</code>.
       * @public
       * @memberof ServiceManager#
       */
      setService: function(name, service) {
        if (this._services[name]) {
          throw new Error("Service is already managed with name: " + name);
        }
        if (service) {
          this._services[name] = service;
        }
      }
    });
    var ServiceManager_1 = ServiceManager;
    var optionManager = new OptionManager_1([
      new Option_1("background", true, "white"),
      new Option_1("backgroundAlpha", true, 1, Utilities_1.abs),
      new Option_1("element"),
      new Option_1("foreground", true, "black"),
      new Option_1("foregroundAlpha", true, 1, Utilities_1.abs),
      new Option_1("level", true, "L", Utilities_1.toUpperCase),
      new Option_1("mime", true, "image/png"),
      new Option_1("padding", true, null, Utilities_1.abs),
      new Option_1("size", true, 100, Utilities_1.abs),
      new Option_1("value", true, "")
    ]);
    var serviceManager = new ServiceManager_1();
    var QRious = lite.extend(function(options) {
      optionManager.init(options, this, this.update.bind(this));
      var element2 = optionManager.get("element", this);
      var elementService = serviceManager.getService("element");
      var canvas = element2 && elementService.isCanvas(element2) ? element2 : elementService.createCanvas();
      var image = element2 && elementService.isImage(element2) ? element2 : elementService.createImage();
      this._canvasRenderer = new CanvasRenderer_1(this, canvas, true);
      this._imageRenderer = new ImageRenderer_1(this, image, image === element2);
      this.update();
    }, {
      /**
       * Returns all of the options configured for this {@link QRious}.
       *
       * Any changes made to the returned object will not be reflected in the options themselves or their corresponding
       * underlying fields.
       *
       * @return {Object.<string, *>} A copy of the applied options.
       * @public
       * @memberof QRious#
       */
      get: function() {
        return optionManager.getAll(this);
      },
      /**
       * Sets all of the specified <code>options</code> and automatically updates this {@link QRious} if any of the
       * underlying fields are changed as a result.
       *
       * This is the preferred method for updating multiple options at one time to avoid unnecessary updates between
       * changes.
       *
       * @param {QRious~Options} options - the options to be set
       * @return {void}
       * @throws {Error} If any <code>options</code> are invalid or cannot be modified.
       * @public
       * @memberof QRious#
       */
      set: function(options) {
        if (optionManager.setAll(options, this)) {
          this.update();
        }
      },
      /**
       * Returns the image data URI for the generated QR code using the <code>mime</code> provided.
       *
       * @param {string} [mime] - the MIME type for the image
       * @return {string} The image data URI for the QR code.
       * @public
       * @memberof QRious#
       */
      toDataURL: function(mime) {
        return this.canvas.toDataURL(mime || this.mime);
      },
      /**
       * Updates this {@link QRious} by generating a new {@link Frame} and re-rendering the QR code.
       *
       * @return {void}
       * @protected
       * @memberof QRious#
       */
      update: function() {
        var frame = new Frame_1({
          level: this.level,
          value: this.value
        });
        this._canvasRenderer.render(frame);
        this._imageRenderer.render(frame);
      }
    }, {
      /**
       * Configures the <code>service</code> provided to be used by all {@link QRious} instances.
       *
       * @param {Service} service - the {@link Service} to be configured
       * @return {void}
       * @throws {Error} If a {@link Service} has already been configured with the same name.
       * @public
       * @static
       * @memberof QRious
       */
      use: function(service) {
        serviceManager.setService(service.getName(), service);
      }
    });
    Object.defineProperties(QRious.prototype, {
      canvas: {
        /**
         * Returns the <code>canvas</code> element being used to render the QR code for this {@link QRious}.
         *
         * @return {*} The <code>canvas</code> element.
         * @public
         * @memberof QRious#
         * @alias canvas
         */
        get: function() {
          return this._canvasRenderer.getElement();
        }
      },
      image: {
        /**
         * Returns the <code>img</code> element being used to render the QR code for this {@link QRious}.
         *
         * @return {*} The <code>img</code> element.
         * @public
         * @memberof QRious#
         * @alias image
         */
        get: function() {
          return this._imageRenderer.getElement();
        }
      }
    });
    var QRious_1$2 = QRious;
    var index = QRious_1$2;
    var Service = lite.extend({
      /**
       * Returns the name of this {@link Service}.
       *
       * @return {string} The service name.
       * @public
       * @abstract
       * @memberof Service#
       */
      getName: function() {
      }
    });
    var Service_1 = Service;
    var ElementService = Service_1.extend({
      /**
       * Creates an instance of a canvas element.
       *
       * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
       *
       * @return {*} The newly created canvas element.
       * @public
       * @abstract
       * @memberof ElementService#
       */
      createCanvas: function() {
      },
      /**
       * Creates an instance of a image element.
       *
       * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
       *
       * @return {*} The newly created image element.
       * @public
       * @abstract
       * @memberof ElementService#
       */
      createImage: function() {
      },
      /**
       * @override
       */
      getName: function() {
        return "element";
      },
      /**
       * Returns whether the specified <code>element</code> is a canvas.
       *
       * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
       *
       * @param {*} element - the element to be checked
       * @return {boolean} <code>true</code> if <code>element</code> is a canvas; otherwise <code>false</code>.
       * @public
       * @abstract
       * @memberof ElementService#
       */
      isCanvas: function(element2) {
      },
      /**
       * Returns whether the specified <code>element</code> is an image.
       *
       * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
       *
       * @param {*} element - the element to be checked
       * @return {boolean} <code>true</code> if <code>element</code> is an image; otherwise <code>false</code>.
       * @public
       * @abstract
       * @memberof ElementService#
       */
      isImage: function(element2) {
      }
    });
    var ElementService_1 = ElementService;
    var BrowserElementService = ElementService_1.extend({
      /**
       * @override
       */
      createCanvas: function() {
        return document.createElement("canvas");
      },
      /**
       * @override
       */
      createImage: function() {
        return document.createElement("img");
      },
      /**
       * @override
       */
      isCanvas: function(element2) {
        return element2 instanceof HTMLCanvasElement;
      },
      /**
       * @override
       */
      isImage: function(element2) {
        return element2 instanceof HTMLImageElement;
      }
    });
    var BrowserElementService_1 = BrowserElementService;
    index.use(new BrowserElementService_1());
    var QRious_1 = index;
    return QRious_1;
  });
})(qrcode);
const QrCode = qrcodeExports;
const file$4 = "node_modules/svelte-qrcode/src/lib/index.svelte";
function create_fragment$4(ctx) {
  let img;
  let img_src_value;
  const block = {
    c: function create() {
      img = element("img");
      this.h();
    },
    l: function claim(nodes) {
      img = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
      this.h();
    },
    h: function hydrate() {
      if (!src_url_equal(img.src, img_src_value = /*image*/
      ctx[2]))
        attr_dev(img, "src", img_src_value);
      attr_dev(
        img,
        "alt",
        /*value*/
        ctx[0]
      );
      attr_dev(
        img,
        "class",
        /*className*/
        ctx[1]
      );
      add_location(img, file$4, 41, 0, 681);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, img, anchor);
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*image*/
      4 && !src_url_equal(img.src, img_src_value = /*image*/
      ctx2[2])) {
        attr_dev(img, "src", img_src_value);
      }
      if (dirty & /*value*/
      1) {
        attr_dev(
          img,
          "alt",
          /*value*/
          ctx2[0]
        );
      }
      if (dirty & /*className*/
      2) {
        attr_dev(
          img,
          "class",
          /*className*/
          ctx2[1]
        );
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(img);
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
  validate_slots("Lib", slots, []);
  const QRcode = new QrCode();
  let { errorCorrection = "L" } = $$props;
  let { background = "#fff" } = $$props;
  let { color = "#000" } = $$props;
  let { size = "200" } = $$props;
  let { value = "" } = $$props;
  let { padding = 0 } = $$props;
  let { className = "qrcode" } = $$props;
  let image = "";
  function generateQrCode() {
    QRcode.set({
      background,
      foreground: color,
      level: errorCorrection,
      padding,
      size,
      value
    });
    $$invalidate(2, image = QRcode.toDataURL("image/jpeg"));
  }
  onMount(() => {
    generateQrCode();
  });
  const writable_props = [
    "errorCorrection",
    "background",
    "color",
    "size",
    "value",
    "padding",
    "className"
  ];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Lib> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("errorCorrection" in $$props2)
      $$invalidate(3, errorCorrection = $$props2.errorCorrection);
    if ("background" in $$props2)
      $$invalidate(4, background = $$props2.background);
    if ("color" in $$props2)
      $$invalidate(5, color = $$props2.color);
    if ("size" in $$props2)
      $$invalidate(6, size = $$props2.size);
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("padding" in $$props2)
      $$invalidate(7, padding = $$props2.padding);
    if ("className" in $$props2)
      $$invalidate(1, className = $$props2.className);
  };
  $$self.$capture_state = () => ({
    onMount,
    QrCode,
    QRcode,
    errorCorrection,
    background,
    color,
    size,
    value,
    padding,
    className,
    image,
    generateQrCode
  });
  $$self.$inject_state = ($$props2) => {
    if ("errorCorrection" in $$props2)
      $$invalidate(3, errorCorrection = $$props2.errorCorrection);
    if ("background" in $$props2)
      $$invalidate(4, background = $$props2.background);
    if ("color" in $$props2)
      $$invalidate(5, color = $$props2.color);
    if ("size" in $$props2)
      $$invalidate(6, size = $$props2.size);
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("padding" in $$props2)
      $$invalidate(7, padding = $$props2.padding);
    if ("className" in $$props2)
      $$invalidate(1, className = $$props2.className);
    if ("image" in $$props2)
      $$invalidate(2, image = $$props2.image);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*value*/
    1) {
      {
        if (value) {
          generateQrCode();
        }
      }
    }
  };
  return [value, className, image, errorCorrection, background, color, size, padding];
}
class Lib extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init$1(this, options, instance$4, create_fragment$4, safe_not_equal, {
      errorCorrection: 3,
      background: 4,
      color: 5,
      size: 6,
      value: 0,
      padding: 7,
      className: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Lib",
      options,
      id: create_fragment$4.name
    });
  }
  get errorCorrection() {
    throw new Error("<Lib>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set errorCorrection(value) {
    throw new Error("<Lib>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get background() {
    throw new Error("<Lib>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set background(value) {
    throw new Error("<Lib>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get color() {
    throw new Error("<Lib>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set color(value) {
    throw new Error("<Lib>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get size() {
    throw new Error("<Lib>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set size(value) {
    throw new Error("<Lib>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get value() {
    throw new Error("<Lib>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<Lib>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get padding() {
    throw new Error("<Lib>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set padding(value) {
    throw new Error("<Lib>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get className() {
    throw new Error("<Lib>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set className(value) {
    throw new Error("<Lib>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$3 = "src/lib/components/wrapper/ScriptHashAddress.svelte";
function create_fragment$3(ctx) {
  let div1;
  let div0;
  let t0;
  let t1;
  let div3;
  let div2;
  let qrcode2;
  let t2;
  let div5;
  let div4;
  let span0;
  let t3;
  let t4_value = fmtSatoshiToBitcoin(
    /*piTx*/
    ctx[0].pegInData.amount
  ) + "";
  let t4;
  let t5;
  let div7;
  let div6;
  let span1;
  let t6_value = (
    /*paymentUri*/
    ctx[1]() + ""
  );
  let t6;
  let current;
  qrcode2 = new Lib({
    props: {
      value: (
        /*paymentUri*/
        ctx[1]()
      ),
      padding: "40px",
      color: "#fff",
      background: "#4786cd",
      size: 300
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      t0 = text("Scan or copy the address into your Bitcoin wallet and send.");
      t1 = space();
      div3 = element("div");
      div2 = element("div");
      create_component(qrcode2.$$.fragment);
      t2 = space();
      div5 = element("div");
      div4 = element("div");
      span0 = element("span");
      t3 = text("Amount: ");
      t4 = text(t4_value);
      t5 = space();
      div7 = element("div");
      div6 = element("div");
      span1 = element("span");
      t6 = text(t6_value);
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "Scan or copy the address into your Bitcoin wallet and send.");
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      claim_component(qrcode2.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      div5 = claim_element(nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      span0 = claim_element(div4_nodes, "SPAN", {});
      var span0_nodes = children(span0);
      t3 = claim_text(span0_nodes, "Amount: ");
      t4 = claim_text(span0_nodes, t4_value);
      span0_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t5 = claim_space(nodes);
      div7 = claim_element(nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      div6 = claim_element(div7_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      span1 = claim_element(div6_nodes, "SPAN", {});
      var span1_nodes = children(span1);
      t6 = claim_text(span1_nodes, t6_value);
      span1_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "col-12 my-4");
      add_location(div0, file$3, 26, 2, 882);
      attr_dev(div1, "class", "row text-center");
      add_location(div1, file$3, 25, 0, 850);
      attr_dev(div2, "class", "col-12");
      add_location(div2, file$3, 32, 4, 1036);
      attr_dev(div3, "class", "row text-center text-warning");
      add_location(div3, file$3, 31, 0, 989);
      add_location(span0, file$3, 39, 6, 1246);
      attr_dev(div4, "class", "col-12");
      add_location(div4, file$3, 38, 4, 1219);
      attr_dev(div5, "class", "row text-center mt-5");
      add_location(div5, file$3, 37, 0, 1180);
      add_location(span1, file$3, 45, 4, 1404);
      attr_dev(div6, "class", "col-12");
      add_location(div6, file$3, 44, 2, 1379);
      attr_dev(div7, "class", "row text-center my-3 text-small");
      add_location(div7, file$3, 43, 0, 1331);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div1, anchor);
      append_hydration_dev(div1, div0);
      append_hydration_dev(div0, t0);
      insert_hydration_dev(target, t1, anchor);
      insert_hydration_dev(target, div3, anchor);
      append_hydration_dev(div3, div2);
      mount_component(qrcode2, div2, null);
      insert_hydration_dev(target, t2, anchor);
      insert_hydration_dev(target, div5, anchor);
      append_hydration_dev(div5, div4);
      append_hydration_dev(div4, span0);
      append_hydration_dev(span0, t3);
      append_hydration_dev(span0, t4);
      insert_hydration_dev(target, t5, anchor);
      insert_hydration_dev(target, div7, anchor);
      append_hydration_dev(div7, div6);
      append_hydration_dev(div6, span1);
      append_hydration_dev(span1, t6);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if ((!current || dirty & /*piTx*/
      1) && t4_value !== (t4_value = fmtSatoshiToBitcoin(
        /*piTx*/
        ctx2[0].pegInData.amount
      ) + ""))
        set_data_dev(t4, t4_value);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(qrcode2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(qrcode2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(div3);
      destroy_component(qrcode2);
      if (detaching)
        detach_dev(t2);
      if (detaching)
        detach_dev(div5);
      if (detaching)
        detach_dev(t5);
      if (detaching)
        detach_dev(div7);
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
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(2, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ScriptHashAddress", slots, []);
  let { piTx } = $$props;
  const peginRequest = piTx == null ? void 0 : piTx.getOpDropPeginRequest("op_drop", "any");
  const paymentUri = () => {
    let uri = "bitcoin:" + peginRequest.timeBasedPegin.address;
    uri += "?amount=" + fmtSatoshiToBitcoin(piTx.pegInData.amount);
    uri += "&label=" + encodeURI("Wrap BTC to mint sBTC on Stacks");
    return uri;
  };
  onMount(async () => {
    try {
      if (peginRequest.timeBasedPegin.script.length > 0)
        await savePaymentRequest(peginRequest);
    } catch (err) {
    }
    const conf = $sbtcConfig;
    conf.peginRequestState = 0;
    sbtcConfig.update(() => conf);
  });
  $$self.$$.on_mount.push(function() {
    if (piTx === void 0 && !("piTx" in $$props || $$self.$$.bound[$$self.$$.props["piTx"]])) {
      console.warn("<ScriptHashAddress> was created without expected prop 'piTx'");
    }
  });
  const writable_props = ["piTx"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<ScriptHashAddress> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("piTx" in $$props2)
      $$invalidate(0, piTx = $$props2.piTx);
  };
  $$self.$capture_state = () => ({
    savePaymentRequest,
    onMount,
    sbtcConfig,
    QrCode: Lib,
    fmtSatoshiToBitcoin,
    piTx,
    peginRequest,
    paymentUri,
    $sbtcConfig
  });
  $$self.$inject_state = ($$props2) => {
    if ("piTx" in $$props2)
      $$invalidate(0, piTx = $$props2.piTx);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [piTx, paymentUri];
}
class ScriptHashAddress extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init$1(this, options, instance$3, create_fragment$3, safe_not_equal, { piTx: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ScriptHashAddress",
      options,
      id: create_fragment$3.name
    });
  }
  get piTx() {
    throw new Error("<ScriptHashAddress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set piTx(value) {
    throw new Error("<ScriptHashAddress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Modal_svelte_svelte_type_style_lang = "";
const file$2 = "src/lib/components/shared/Modal.svelte";
const get_debug_slot_changes = (dirty) => ({});
const get_debug_slot_context = (ctx) => ({});
const get_close_slot_changes = (dirty) => ({});
const get_close_slot_context = (ctx) => ({});
const get_title_slot_changes = (dirty) => ({});
const get_title_slot_context = (ctx) => ({});
function create_if_block$2(ctx) {
  let div1;
  let div0;
  let t0;
  let t1;
  let t2;
  let current;
  let mounted;
  let dispose;
  const title_slot_template = (
    /*#slots*/
    ctx[3].title
  );
  const title_slot = create_slot(
    title_slot_template,
    ctx,
    /*$$scope*/
    ctx[2],
    get_title_slot_context
  );
  const default_slot_template = (
    /*#slots*/
    ctx[3].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[2],
    null
  );
  const close_slot_template = (
    /*#slots*/
    ctx[3].close
  );
  const close_slot = create_slot(
    close_slot_template,
    ctx,
    /*$$scope*/
    ctx[2],
    get_close_slot_context
  );
  const debug_slot_template = (
    /*#slots*/
    ctx[3].debug
  );
  const debug_slot = create_slot(
    debug_slot_template,
    ctx,
    /*$$scope*/
    ctx[2],
    get_debug_slot_context
  );
  const block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      if (title_slot)
        title_slot.c();
      t0 = space();
      if (default_slot)
        default_slot.c();
      t1 = space();
      if (close_slot)
        close_slot.c();
      t2 = space();
      if (debug_slot)
        debug_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (title_slot)
        title_slot.l(div0_nodes);
      t0 = claim_space(div0_nodes);
      if (default_slot)
        default_slot.l(div0_nodes);
      t1 = claim_space(div0_nodes);
      if (close_slot)
        close_slot.l(div0_nodes);
      t2 = claim_space(div0_nodes);
      if (debug_slot)
        debug_slot.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "sv-modal s-zg9GhmGThkh3");
      add_location(div0, file$2, 16, 4, 357);
      attr_dev(div1, "class", "backdrop s-zg9GhmGThkh3");
      add_location(div1, file$2, 15, 0, 316);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div1, anchor);
      append_hydration_dev(div1, div0);
      if (title_slot) {
        title_slot.m(div0, null);
      }
      append_hydration_dev(div0, t0);
      if (default_slot) {
        default_slot.m(div0, null);
      }
      append_hydration_dev(div0, t1);
      if (close_slot) {
        close_slot.m(div0, null);
      }
      append_hydration_dev(div0, t2);
      if (debug_slot) {
        debug_slot.m(div0, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen_dev(div1, "click", self(
          /*click_handler*/
          ctx[4]
        ), false, false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (title_slot) {
        if (title_slot.p && (!current || dirty & /*$$scope*/
        4)) {
          update_slot_base(
            title_slot,
            title_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[2],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[2]
            ) : get_slot_changes(
              title_slot_template,
              /*$$scope*/
              ctx2[2],
              dirty,
              get_title_slot_changes
            ),
            get_title_slot_context
          );
        }
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[2],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[2]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[2],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (close_slot) {
        if (close_slot.p && (!current || dirty & /*$$scope*/
        4)) {
          update_slot_base(
            close_slot,
            close_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[2],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[2]
            ) : get_slot_changes(
              close_slot_template,
              /*$$scope*/
              ctx2[2],
              dirty,
              get_close_slot_changes
            ),
            get_close_slot_context
          );
        }
      }
      if (debug_slot) {
        if (debug_slot.p && (!current || dirty & /*$$scope*/
        4)) {
          update_slot_base(
            debug_slot,
            debug_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[2],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[2]
            ) : get_slot_changes(
              debug_slot_template,
              /*$$scope*/
              ctx2[2],
              dirty,
              get_debug_slot_changes
            ),
            get_debug_slot_context
          );
        }
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(title_slot, local);
      transition_in(default_slot, local);
      transition_in(close_slot, local);
      transition_in(debug_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(title_slot, local);
      transition_out(default_slot, local);
      transition_out(close_slot, local);
      transition_out(debug_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
      if (title_slot)
        title_slot.d(detaching);
      if (default_slot)
        default_slot.d(detaching);
      if (close_slot)
        close_slot.d(detaching);
      if (debug_slot)
        debug_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$2.name,
    type: "if",
    source: "(14:0) {#if showModal}",
    ctx
  });
  return block;
}
function create_fragment$2(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*showModal*/
    ctx[0] && create_if_block$2(ctx)
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
        /*showModal*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*showModal*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$2(ctx2);
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
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$2($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Modal", slots, ["title", "default", "close", "debug"]);
  let { showModal = false } = $$props;
  let { showClose = false } = $$props;
  const dispatch = createEventDispatcher();
  const closeModal = () => {
    dispatch("close_modal");
  };
  scroll(0, 0);
  const writable_props = ["showModal", "showClose"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Modal> was created with unknown prop '${key}'`);
  });
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("showModal" in $$props2)
      $$invalidate(0, showModal = $$props2.showModal);
    if ("showClose" in $$props2)
      $$invalidate(1, showClose = $$props2.showClose);
    if ("$$scope" in $$props2)
      $$invalidate(2, $$scope = $$props2.$$scope);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    showModal,
    showClose,
    dispatch,
    closeModal
  });
  $$self.$inject_state = ($$props2) => {
    if ("showModal" in $$props2)
      $$invalidate(0, showModal = $$props2.showModal);
    if ("showClose" in $$props2)
      $$invalidate(1, showClose = $$props2.showClose);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [showModal, showClose, $$scope, slots, click_handler];
}
class Modal extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init$1(this, options, instance$2, create_fragment$2, safe_not_equal, { showModal: 0, showClose: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Modal",
      options,
      id: create_fragment$2.name
    });
  }
  get showModal() {
    throw new Error("<Modal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set showModal(value) {
    throw new Error("<Modal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get showClose() {
    throw new Error("<Modal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set showClose(value) {
    throw new Error("<Modal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const { console: console_1 } = globals;
const file$1 = "src/lib/components/wrapper/BuildTransaction.svelte";
function create_default_slot(ctx) {
  let div;
  let scripthashaddress;
  let current;
  scripthashaddress = new ScriptHashAddress({
    props: { piTx: (
      /*piTx*/
      ctx[0]
    ) },
    $$inline: true
  });
  const block = {
    c: function create() {
      div = element("div");
      create_component(scripthashaddress.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(scripthashaddress.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "mb-4");
      add_location(div, file$1, 146, 2, 5578);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(scripthashaddress, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const scripthashaddress_changes = {};
      if (dirty & /*piTx*/
      1)
        scripthashaddress_changes.piTx = /*piTx*/
        ctx2[0];
      scripthashaddress.$set(scripthashaddress_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(scripthashaddress.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(scripthashaddress.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(scripthashaddress);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: "(146:0) <Modal {showModal} showClose={true} on:click={closeModal} on:close_modal={closeModal}>",
    ctx
  });
  return block;
}
function create_title_slot(ctx) {
  let div;
  const block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { slot: true });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "slot", "title");
      add_location(div, file$1, 147, 2, 5632);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_title_slot.name,
    type: "slot",
    source: "(148:2) ",
    ctx
  });
  return block;
}
function create_close_slot(ctx) {
  let div1;
  let div0;
  let button;
  let t;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      button = element("button");
      t = text("CLOSE");
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", { slot: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      button = claim_element(div0_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "CLOSE");
      button_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button, "class", "btn btn-outline-info");
      add_location(button, file$1, 149, 29, 5707);
      attr_dev(div0, "class", "text-center");
      add_location(div0, file$1, 149, 4, 5682);
      attr_dev(div1, "slot", "close");
      add_location(div1, file$1, 148, 2, 5659);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div1, anchor);
      append_hydration_dev(div1, div0);
      append_hydration_dev(div0, button);
      append_hydration_dev(button, t);
      if (!mounted) {
        dispose = listen_dev(
          button,
          "click",
          /*closeModal*/
          ctx[15],
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_close_slot.name,
    type: "slot",
    source: "(149:2) ",
    ctx
  });
  return block;
}
function create_debug_slot(ctx) {
  let div2;
  let div1;
  let div0;
  let debugpegininfo;
  let current;
  debugpegininfo = new DebugPeginInfo({
    props: {
      tx: (
        /*piTx*/
        ctx[0]
      ),
      peginRequest: (
        /*piTx*/
        ctx[0].getOpDropPeginRequest("op_drop", "any")
      )
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      div2 = element("div");
      div1 = element("div");
      div0 = element("div");
      create_component(debugpegininfo.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div2 = claim_element(nodes, "DIV", { slot: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(debugpegininfo.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "col-12");
      add_location(div0, file$1, 153, 6, 5861);
      attr_dev(div1, "class", "row my-3 text-small");
      add_location(div1, file$1, 152, 4, 5821);
      attr_dev(div2, "slot", "debug");
      add_location(div2, file$1, 151, 2, 5798);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div2, anchor);
      append_hydration_dev(div2, div1);
      append_hydration_dev(div1, div0);
      mount_component(debugpegininfo, div0, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const debugpegininfo_changes = {};
      if (dirty & /*piTx*/
      1)
        debugpegininfo_changes.tx = /*piTx*/
        ctx2[0];
      if (dirty & /*piTx*/
      1)
        debugpegininfo_changes.peginRequest = /*piTx*/
        ctx2[0].getOpDropPeginRequest("op_drop", "any");
      debugpegininfo.$set(debugpegininfo_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(debugpegininfo.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(debugpegininfo.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div2);
      destroy_component(debugpegininfo);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_debug_slot.name,
    type: "slot",
    source: "(152:2) ",
    ctx
  });
  return block;
}
function create_if_block$1(ctx) {
  let div;
  let utxoselection;
  let t0;
  let t1;
  let t2;
  let t3;
  let if_block3_anchor;
  let current;
  utxoselection = new UTXOSelection({
    props: { utxoData: (
      /*utxoData*/
      ctx[8]
    ) },
    $$inline: true
  });
  utxoselection.$on(
    "utxo_updated",
    /*utxoUpdated*/
    ctx[13]
  );
  let if_block0 = (
    /*showStxAddress*/
    ctx[7] && create_if_block_4(ctx)
  );
  let if_block1 = (
    /*showAmount*/
    ctx[6] && create_if_block_3(ctx)
  );
  let if_block2 = (
    /*errorReason*/
    ctx[1] && create_if_block_2$1(ctx)
  );
  let if_block3 = (
    /*showButton*/
    ctx[5] && create_if_block_1$1(ctx)
  );
  const block = {
    c: function create() {
      div = element("div");
      create_component(utxoselection.$$.fragment);
      t0 = space();
      if (if_block0)
        if_block0.c();
      t1 = space();
      if (if_block1)
        if_block1.c();
      t2 = space();
      if (if_block2)
        if_block2.c();
      t3 = space();
      if (if_block3)
        if_block3.c();
      if_block3_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(utxoselection.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      if (if_block0)
        if_block0.l(nodes);
      t1 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      t2 = claim_space(nodes);
      if (if_block2)
        if_block2.l(nodes);
      t3 = claim_space(nodes);
      if (if_block3)
        if_block3.l(nodes);
      if_block3_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "mb-4");
      add_location(div, file$1, 161, 2, 6040);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(utxoselection, div, null);
      insert_hydration_dev(target, t0, anchor);
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration_dev(target, t1, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration_dev(target, t2, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert_hydration_dev(target, t3, anchor);
      if (if_block3)
        if_block3.m(target, anchor);
      insert_hydration_dev(target, if_block3_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const utxoselection_changes = {};
      if (dirty & /*utxoData*/
      256)
        utxoselection_changes.utxoData = /*utxoData*/
        ctx2[8];
      utxoselection.$set(utxoselection_changes);
      if (
        /*showStxAddress*/
        ctx2[7]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*showStxAddress*/
          128) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_4(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t1.parentNode, t1);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*showAmount*/
        ctx2[6]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*showAmount*/
          64) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_3(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(t2.parentNode, t2);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (
        /*errorReason*/
        ctx2[1]
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
        } else {
          if_block2 = create_if_block_2$1(ctx2);
          if_block2.c();
          if_block2.m(t3.parentNode, t3);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
      if (
        /*showButton*/
        ctx2[5]
      ) {
        if (if_block3) {
          if_block3.p(ctx2, dirty);
        } else {
          if_block3 = create_if_block_1$1(ctx2);
          if_block3.c();
          if_block3.m(if_block3_anchor.parentNode, if_block3_anchor);
        }
      } else if (if_block3) {
        if_block3.d(1);
        if_block3 = null;
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(utxoselection.$$.fragment, local);
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o: function outro(local) {
      transition_out(utxoselection.$$.fragment, local);
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(utxoselection);
      if (detaching)
        detach_dev(t0);
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach_dev(t1);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach_dev(t2);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach_dev(t3);
      if (if_block3)
        if_block3.d(detaching);
      if (detaching)
        detach_dev(if_block3_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block$1.name,
    type: "if",
    source: "(161:0) {#if inited}",
    ctx
  });
  return block;
}
function create_if_block_4(ctx) {
  let div;
  let principal;
  let current;
  principal = new Principal({
    props: { principalData: (
      /*principalData*/
      ctx[9]
    ) },
    $$inline: true
  });
  principal.$on(
    "principal_updated",
    /*principalUpdated*/
    ctx[12]
  );
  const block = {
    c: function create() {
      div = element("div");
      create_component(principal.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(principal.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "mb-4");
      add_location(div, file$1, 163, 2, 6148);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(principal, div, null);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(principal.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(principal.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(principal);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_4.name,
    type: "if",
    source: "(163:2) {#if showStxAddress}",
    ctx
  });
  return block;
}
function create_if_block_3(ctx) {
  let previous_key = (
    /*componentKey3*/
    ctx[2]
  );
  let key_block_anchor;
  let current;
  let key_block = create_key_block(ctx);
  const block = {
    c: function create() {
      key_block.c();
      key_block_anchor = empty();
    },
    l: function claim(nodes) {
      key_block.l(nodes);
      key_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      key_block.m(target, anchor);
      insert_hydration_dev(target, key_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*componentKey3*/
      4 && safe_not_equal(previous_key, previous_key = /*componentKey3*/
      ctx2[2])) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block(ctx2);
        key_block.c();
        transition_in(key_block, 1);
        key_block.m(key_block_anchor.parentNode, key_block_anchor);
      } else {
        key_block.p(ctx2, dirty);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(key_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(key_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(key_block_anchor);
      key_block.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_3.name,
    type: "if",
    source: "(166:2) {#if showAmount}",
    ctx
  });
  return block;
}
function create_key_block(ctx) {
  let div;
  let peginamount;
  let current;
  peginamount = new PegInAmount({
    props: { amtData: (
      /*amtData*/
      ctx[10]()
    ) },
    $$inline: true
  });
  peginamount.$on(
    "amount_updated",
    /*amountUpdated*/
    ctx[11]
  );
  const block = {
    c: function create() {
      div = element("div");
      create_component(peginamount.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(peginamount.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "mb-4");
      add_location(div, file$1, 167, 2, 6294);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(peginamount, div, null);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(peginamount.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(peginamount.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_component(peginamount);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_key_block.name,
    type: "key",
    source: "(167:2) {#key componentKey3}",
    ctx
  });
  return block;
}
function create_if_block_2$1(ctx) {
  let div;
  const block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "text-danger");
      add_location(div, file$1, 170, 19, 6424);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      div.innerHTML = /*errorReason*/
      ctx[1];
    },
    p: function update(ctx2, dirty) {
      if (dirty & /*errorReason*/
      2)
        div.innerHTML = /*errorReason*/
        ctx2[1];
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2$1.name,
    type: "if",
    source: "(171:2) {#if errorReason}",
    ctx
  });
  return block;
}
function create_if_block_1$1(ctx) {
  let div1;
  let div0;
  let button;
  let t;
  let mounted;
  let dispose;
  const block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      button = element("button");
      t = text("CONTINUE");
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      button = claim_element(div0_nodes, "BUTTON", { class: true, type: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "CONTINUE");
      button_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button, "class", "btn btn-outline-info w-100");
      attr_dev(button, "type", "button");
      add_location(button, file$1, 174, 6, 6547);
      attr_dev(div0, "class", "col");
      add_location(div0, file$1, 173, 4, 6523);
      attr_dev(div1, "class", "row");
      add_location(div1, file$1, 172, 2, 6501);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div1, anchor);
      append_hydration_dev(div1, div0);
      append_hydration_dev(div0, button);
      append_hydration_dev(button, t);
      if (!mounted) {
        dispose = listen_dev(
          button,
          "click",
          /*click_handler*/
          ctx[18],
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1$1.name,
    type: "if",
    source: "(172:2) {#if showButton}",
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let modal;
  let t;
  let if_block_anchor;
  let current;
  modal = new Modal({
    props: {
      showModal: (
        /*showModal*/
        ctx[3]
      ),
      showClose: true,
      $$slots: {
        debug: [create_debug_slot],
        close: [create_close_slot],
        title: [create_title_slot],
        default: [create_default_slot]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  modal.$on(
    "click",
    /*closeModal*/
    ctx[15]
  );
  modal.$on(
    "close_modal",
    /*closeModal*/
    ctx[15]
  );
  let if_block = (
    /*inited*/
    ctx[4] && create_if_block$1(ctx)
  );
  const block = {
    c: function create() {
      create_component(modal.$$.fragment);
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      claim_component(modal.$$.fragment, nodes);
      t = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      mount_component(modal, target, anchor);
      insert_hydration_dev(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const modal_changes = {};
      if (dirty & /*showModal*/
      8)
        modal_changes.showModal = /*showModal*/
        ctx2[3];
      if (dirty & /*$$scope, piTx*/
      33554433) {
        modal_changes.$$scope = { dirty, ctx: ctx2 };
      }
      modal.$set(modal_changes);
      if (
        /*inited*/
        ctx2[4]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*inited*/
          16) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1(ctx2);
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
      transition_in(modal.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(modal.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(modal, detaching);
      if (detaching)
        detach_dev(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach_dev(if_block_anchor);
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
  let utxoData;
  let showStxAddress;
  let showAmount;
  let showButton;
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(19, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("BuildTransaction", slots, []);
  let { piTx } = $$props;
  if (!piTx.fromBtcAddress)
    piTx.fromBtcAddress = addresses().cardinal;
  let componentKey3 = 0;
  const getExplorerUrl = () => {
    return explorerBtcAddressUrl(piTx.fromBtcAddress);
  };
  if (!piTx.pegInData.stacksAddress && addresses().stxAddress)
    piTx.pegInData.stacksAddress = addresses().stxAddress;
  const principalData = {
    label: "Stacks Address (Account or Contract)",
    info: "sBTC will be minted to this account or contract",
    currentAddress: piTx.pegInData.stacksAddress
  };
  const amtData = () => {
    return {
      pegIn: true,
      label: "Amount (Satoshis)",
      info: "The amount to wrap cannot exceed your balance less some satoshi to pay gas fees",
      pegAmount: piTx.pegInData.amount ? piTx.pegInData.amount : piTx.maxCommit() - piTx.fee,
      maxCommit: piTx.maxCommit(),
      change: piTx.getChange(),
      fee: piTx.fee,
      fees: piTx.fees,
      dust: piTx.dust
    };
  };
  const network = CONFIG.VITE_NETWORK;
  console.log("piTx:", piTx);
  const dispatch = createEventDispatcher();
  let errorReason;
  let stxAddressOk = true;
  let amountOk = false;
  const updateConfig = () => {
    var _a;
    const conf = $sbtcConfig;
    conf.pegInTransaction = piTx;
    sbtcConfig.update(() => conf);
    $$invalidate(17, amountOk = ((_a = piTx.pegInData) == null ? void 0 : _a.amount) > 0);
  };
  const amountUpdated = (event) => {
    $$invalidate(1, errorReason = void 0);
    $$invalidate(17, amountOk = !event.detail.error);
    if (event.detail.opCode === "user") {
      try {
        piTx.setAmount(event.detail.newAmount);
      } catch (err) {
        $$invalidate(1, errorReason = err);
        piTx.setAmount(piTx.maxCommit() - piTx.fee);
      }
    } else if (event.detail.opCode === "prio") {
      piTx.setFeeRate(event.detail.newFeeRate);
      if (piTx.pegInData.amount > piTx.maxCommit() - piTx.fee)
        piTx.setAmount(piTx.maxCommit() - piTx.fee);
    }
    updateConfig();
    $$invalidate(2, componentKey3++, componentKey3);
  };
  const principalUpdated = (event) => {
    $$invalidate(1, errorReason = void 0);
    $$invalidate(16, stxAddressOk = !event.detail.error);
    if (stxAddressOk) {
      piTx.setStacksAddress(event.detail.currentAddress);
      updateConfig();
    }
  };
  const utxoUpdated = async (event) => {
    var _a, _b;
    $$invalidate(1, errorReason = void 0);
    const data = event.detail;
    if (data.opCode === "address-change") {
      try {
        const p0 = piTx.pegInData;
        const stacksAddress = ((_a = piTx.pegInData) == null ? void 0 : _a.stacksAddress) ? (_b = piTx.pegInData) == null ? void 0 : _b.stacksAddress : addresses().stxAddress;
        $$invalidate(0, piTx.fromBtcAddress = data.bitcoinAddress, piTx);
        $$invalidate(0, piTx = await PegInTransaction.create(network, data.bitcoinAddress, $sbtcConfig.sbtcContractData.sbtcWalletAddress, stacksAddress));
        piTx.calculateFees();
        piTx.setStacksAddress(stacksAddress);
        if (p0.amount > 0 && p0.amount < piTx.maxCommit())
          piTx.setAmount(p0.amount);
        updateConfig();
      } catch (err) {
        if (!$sbtcConfig.userSettings.useOpDrop)
          $$invalidate(1, errorReason = "Your address either has no balance or there are unconfirmed transactions. You can paste another address or check this address here <a href=" + getExplorerUrl() + ' target="_blank">btc explorer</a>');
      }
    }
  };
  let showModal;
  const nextStep = () => {
    if ($sbtcConfig.userSettings.useOpDrop) {
      $$invalidate(3, showModal = !showModal);
    } else {
      dispatch("request_signature");
    }
  };
  const closeModal = () => {
    $$invalidate(3, showModal = false);
  };
  const closeOnEscape = (e) => {
    if (e.key === "Escape") {
      $$invalidate(3, showModal = false);
    }
  };
  let inited = false;
  onMount(async () => {
    var _a, _b;
    const stacksAddress = ((_a = piTx.pegInData) == null ? void 0 : _a.stacksAddress) ? (_b = piTx.pegInData) == null ? void 0 : _b.stacksAddress : addresses().stxAddress;
    if (piTx.pegInData.amount > 0)
      $$invalidate(17, amountOk = true);
    updateConfig();
    if (!piTx.ready)
      $$invalidate(0, piTx = await PegInTransaction.create(network, piTx.fromBtcAddress, piTx.pegInData.sbtcWalletAddress, stacksAddress));
    $$invalidate(4, inited = true);
    document.addEventListener("keydown", closeOnEscape);
  });
  $$self.$$.on_mount.push(function() {
    if (piTx === void 0 && !("piTx" in $$props || $$self.$$.bound[$$self.$$.props["piTx"]])) {
      console_1.warn("<BuildTransaction> was created without expected prop 'piTx'");
    }
  });
  const writable_props = ["piTx"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console_1.warn(`<BuildTransaction> was created with unknown prop '${key}'`);
  });
  const click_handler = () => nextStep();
  $$self.$$set = ($$props2) => {
    if ("piTx" in $$props2)
      $$invalidate(0, piTx = $$props2.piTx);
  };
  $$self.$capture_state = () => ({
    CONFIG,
    onMount,
    sbtcConfig,
    Principal,
    PegInAmount,
    ScriptHashAddress,
    UTXOSelection,
    createEventDispatcher,
    PegInTransaction,
    addresses,
    explorerBtcAddressUrl,
    Modal,
    DebugPeginInfo,
    piTx,
    componentKey3,
    getExplorerUrl,
    principalData,
    amtData,
    network,
    dispatch,
    errorReason,
    stxAddressOk,
    amountOk,
    updateConfig,
    amountUpdated,
    principalUpdated,
    utxoUpdated,
    showModal,
    nextStep,
    closeModal,
    closeOnEscape,
    inited,
    showButton,
    showAmount,
    showStxAddress,
    utxoData,
    $sbtcConfig
  });
  $$self.$inject_state = ($$props2) => {
    if ("piTx" in $$props2)
      $$invalidate(0, piTx = $$props2.piTx);
    if ("componentKey3" in $$props2)
      $$invalidate(2, componentKey3 = $$props2.componentKey3);
    if ("errorReason" in $$props2)
      $$invalidate(1, errorReason = $$props2.errorReason);
    if ("stxAddressOk" in $$props2)
      $$invalidate(16, stxAddressOk = $$props2.stxAddressOk);
    if ("amountOk" in $$props2)
      $$invalidate(17, amountOk = $$props2.amountOk);
    if ("showModal" in $$props2)
      $$invalidate(3, showModal = $$props2.showModal);
    if ("inited" in $$props2)
      $$invalidate(4, inited = $$props2.inited);
    if ("showButton" in $$props2)
      $$invalidate(5, showButton = $$props2.showButton);
    if ("showAmount" in $$props2)
      $$invalidate(6, showAmount = $$props2.showAmount);
    if ("showStxAddress" in $$props2)
      $$invalidate(7, showStxAddress = $$props2.showStxAddress);
    if ("utxoData" in $$props2)
      $$invalidate(8, utxoData = $$props2.utxoData);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*piTx*/
    1) {
      $$invalidate(8, utxoData = {
        label: "Return Bitcoin Address",
        info: "Your BTC will be returned to this address if for any reason the sBTC does not materialize",
        utxos: piTx.addressInfo.utxos,
        maxCommit: piTx.ready ? piTx.maxCommit() : 0,
        fromBtcAddress: piTx.fromBtcAddress,
        numbInputs: piTx.ready && piTx.addressInfo.utxos ? piTx.addressInfo.utxos.length : 0,
        network
      });
    }
    if ($$self.$$.dirty & /*piTx, errorReason*/
    3) {
      $$invalidate(7, showStxAddress = piTx.ready && !errorReason);
    }
    if ($$self.$$.dirty & /*piTx, stxAddressOk, errorReason*/
    65539) {
      $$invalidate(6, showAmount = piTx.ready && stxAddressOk && !errorReason);
    }
    if ($$self.$$.dirty & /*piTx, amountOk, errorReason*/
    131075) {
      $$invalidate(5, showButton = piTx.ready && amountOk && !errorReason);
    }
  };
  return [
    piTx,
    errorReason,
    componentKey3,
    showModal,
    inited,
    showButton,
    showAmount,
    showStxAddress,
    utxoData,
    principalData,
    amtData,
    amountUpdated,
    principalUpdated,
    utxoUpdated,
    nextStep,
    closeModal,
    stxAddressOk,
    amountOk,
    click_handler
  ];
}
class BuildTransaction extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init$1(this, options, instance$1, create_fragment$1, safe_not_equal, { piTx: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "BuildTransaction",
      options,
      id: create_fragment$1.name
    });
  }
  get piTx() {
    throw new Error("<BuildTransaction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set piTx(value) {
    throw new Error("<BuildTransaction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const _page_svelte_svelte_type_style_lang = "";
const file = "src/routes/wrap/+page.svelte";
function create_else_block(ctx) {
  let t;
  let if_block1_anchor;
  let current;
  let if_block0 = !/*webWallet*/
  ctx[1] && create_if_block_2(ctx);
  let if_block1 = (
    /*webWallet*/
    ctx[1] && create_if_block_1(ctx)
  );
  const block = {
    c: function create() {
      if (if_block0)
        if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      t = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration_dev(target, t, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration_dev(target, if_block1_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      if (!/*webWallet*/
      ctx2[1]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*webWallet*/
          2) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t.parentNode, t);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*webWallet*/
        ctx2[1]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*webWallet*/
          2) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach_dev(t);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach_dev(if_block1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_else_block.name,
    type: "else",
    source: "(34:6) {:else}",
    ctx
  });
  return block;
}
function create_if_block(ctx) {
  let buildtransaction;
  let current;
  buildtransaction = new BuildTransaction({
    props: { piTx: (
      /*piTx*/
      ctx[0]
    ) },
    $$inline: true
  });
  buildtransaction.$on(
    "request_signature",
    /*openSigView*/
    ctx[3]
  );
  const block = {
    c: function create() {
      create_component(buildtransaction.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(buildtransaction.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(buildtransaction, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const buildtransaction_changes = {};
      if (dirty & /*piTx*/
      1)
        buildtransaction_changes.piTx = /*piTx*/
        ctx2[0];
      buildtransaction.$set(buildtransaction_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(buildtransaction.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(buildtransaction.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(buildtransaction, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block.name,
    type: "if",
    source: "(32:6) {#if view === 'build_tx_view'}",
    ctx
  });
  return block;
}
function create_if_block_2(ctx) {
  let signtransaction;
  let current;
  signtransaction = new SignTransaction({
    props: { piTx: (
      /*piTx*/
      ctx[0]
    ) },
    $$inline: true
  });
  signtransaction.$on(
    "update_transaction",
    /*updateTransaction*/
    ctx[4]
  );
  const block = {
    c: function create() {
      create_component(signtransaction.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(signtransaction.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(signtransaction, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const signtransaction_changes = {};
      if (dirty & /*piTx*/
      1)
        signtransaction_changes.piTx = /*piTx*/
        ctx2[0];
      signtransaction.$set(signtransaction_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(signtransaction.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(signtransaction.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(signtransaction, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_2.name,
    type: "if",
    source: "(35:7) {#if !webWallet}",
    ctx
  });
  return block;
}
function create_if_block_1(ctx) {
  let signtransactionweb;
  let current;
  signtransactionweb = new SignTransactionWeb({
    props: { piTx: (
      /*piTx*/
      ctx[0]
    ) },
    $$inline: true
  });
  signtransactionweb.$on(
    "update_transaction",
    /*updateTransaction*/
    ctx[4]
  );
  const block = {
    c: function create() {
      create_component(signtransactionweb.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(signtransactionweb.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(signtransactionweb, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const signtransactionweb_changes = {};
      if (dirty & /*piTx*/
      1)
        signtransactionweb_changes.piTx = /*piTx*/
        ctx2[0];
      signtransactionweb.$set(signtransactionweb_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(signtransactionweb.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(signtransactionweb.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(signtransactionweb, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_if_block_1.name,
    type: "if",
    source: "(38:7) {#if webWallet}",
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let section;
  let div5;
  let div4;
  let h1;
  let t0;
  let span;
  let t1;
  let t2;
  let h2;
  let t3;
  let t4;
  let div0;
  let sbtcwalletdisplay;
  let t5;
  let div3;
  let div2;
  let div1;
  let current_block_type_index;
  let if_block;
  let current;
  sbtcwalletdisplay = new SbtcWalletDisplay({ $$inline: true });
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*view*/
      ctx2[2] === "build_tx_view"
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const block = {
    c: function create() {
      section = element("section");
      div5 = element("div");
      div4 = element("div");
      h1 = element("h1");
      t0 = text("Wrap ");
      span = element("span");
      t1 = text("BTC");
      t2 = space();
      h2 = element("h2");
      t3 = text("BTC to sBTC");
      t4 = space();
      div0 = element("div");
      create_component(sbtcwalletdisplay.$$.fragment);
      t5 = space();
      div3 = element("div");
      div2 = element("div");
      div1 = element("div");
      if_block.c();
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      div5 = claim_element(section_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      h1 = claim_element(div4_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Wrap ");
      span = claim_element(h1_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t1 = claim_text(span_nodes, "BTC");
      span_nodes.forEach(detach_dev);
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(div4_nodes);
      h2 = claim_element(div4_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t3 = claim_text(h2_nodes, "BTC to sBTC");
      h2_nodes.forEach(detach_dev);
      t4 = claim_space(div4_nodes);
      div0 = claim_element(div4_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(sbtcwalletdisplay.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t5 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", {});
      var div1_nodes = children(div1);
      if_block.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "strokeme-info");
      add_location(span, file, 23, 30, 1080);
      attr_dev(h1, "class", "text-info s-RlVVnrAOzilK");
      add_location(h1, file, 23, 3, 1053);
      attr_dev(h2, "class", "mb-3");
      add_location(h2, file, 24, 3, 1127);
      attr_dev(div0, "class", "my-3 d-flex justify-content-between text-white");
      add_location(div0, file, 25, 3, 1164);
      add_location(div1, file, 30, 5, 1347);
      attr_dev(div2, "class", "card border p-4");
      add_location(div2, file, 29, 4, 1312);
      attr_dev(div3, "class", "d-flex justify-content-center");
      add_location(div3, file, 28, 3, 1264);
      attr_dev(div4, "class", "card-width");
      add_location(div4, file, 22, 2, 1025);
      attr_dev(div5, "class", "my-4 p-4");
      add_location(div5, file, 21, 1, 1e3);
      attr_dev(section, "class", "bg-dark s-RlVVnrAOzilK");
      add_location(section, file, 20, 0, 973);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, section, anchor);
      append_hydration_dev(section, div5);
      append_hydration_dev(div5, div4);
      append_hydration_dev(div4, h1);
      append_hydration_dev(h1, t0);
      append_hydration_dev(h1, span);
      append_hydration_dev(span, t1);
      append_hydration_dev(div4, t2);
      append_hydration_dev(div4, h2);
      append_hydration_dev(h2, t3);
      append_hydration_dev(div4, t4);
      append_hydration_dev(div4, div0);
      mount_component(sbtcwalletdisplay, div0, null);
      append_hydration_dev(div4, t5);
      append_hydration_dev(div4, div3);
      append_hydration_dev(div3, div2);
      append_hydration_dev(div2, div1);
      if_blocks[current_block_type_index].m(div1, null);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
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
        if_block.m(div1, null);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(sbtcwalletdisplay.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(sbtcwalletdisplay.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(section);
      destroy_component(sbtcwalletdisplay);
      if_blocks[current_block_type_index].d();
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
  let view;
  let $sbtcConfig;
  validate_store(sbtcConfig, "sbtcConfig");
  component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(5, $sbtcConfig = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Page", slots, []);
  let piTx = $sbtcConfig.pegInTransaction && $sbtcConfig.pegInTransaction.ready ? PegInTransaction.hydrate($sbtcConfig.pegInTransaction) : new PegInTransaction();
  let webWallet = true;
  const openSigView = () => {
    $$invalidate(1, webWallet = piTx.fromBtcAddress === addresses().cardinal), $$invalidate(0, piTx = PegInTransaction.hydrate($sbtcConfig.pegInTransaction));
    $$invalidate(2, view = "sign_tx_view");
  };
  const updateTransaction = () => {
    $$invalidate(2, view = "build_tx_view");
  };
  const writable_props = [];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Page> was created with unknown prop '${key}'`);
  });
  $$self.$capture_state = () => ({
    BuildTransaction,
    SignTransaction,
    SignTransactionWeb,
    sbtcConfig,
    PegInTransaction,
    SbtcWalletDisplay,
    addresses,
    piTx,
    webWallet,
    openSigView,
    updateTransaction,
    view,
    $sbtcConfig
  });
  $$self.$inject_state = ($$props2) => {
    if ("piTx" in $$props2)
      $$invalidate(0, piTx = $$props2.piTx);
    if ("webWallet" in $$props2)
      $$invalidate(1, webWallet = $$props2.webWallet);
    if ("view" in $$props2)
      $$invalidate(2, view = $$props2.view);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$invalidate(2, view = "build_tx_view");
  return [piTx, webWallet, view, openSigView, updateTransaction];
}
class Page extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init$1(this, options, instance, create_fragment, safe_not_equal, {});
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
