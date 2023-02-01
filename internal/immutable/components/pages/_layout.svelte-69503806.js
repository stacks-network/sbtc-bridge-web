var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { _ as __vitePreload } from "../../chunks/preload-helper-6910039e.js";
import { b as setContext, G as getContext, H as derived, I as readable, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, J as validate_store, K as component_subscribe, o as onMount, e as empty, g as insert_hydration_dev, L as noop, l as detach_dev, n as element, x as text, p as claim_element, q as children, y as claim_text, M as src_url_equal, r as attr_dev, w as add_location, N as append_hydration_dev, O as listen_dev, P as prevent_default, u as set_style, Q as createEventDispatcher, c as space, A as create_component, f as claim_space, B as claim_component, C as mount_component, h as group_outros, t as transition_out, j as check_outros, k as transition_in, z as set_data_dev, D as destroy_component, R as run_all, F as writable, T as onDestroy, E as tick, U as globals, V as create_slot, W as update_slot_base, X as get_all_dirty_from_scope, Y as get_slot_changes } from "../../chunks/index-92a9a177.js";
import { w as wrapConstructor, S as SHA2, s as sha256, _ as __viteBrowserExternal, H as Hash, a as assert, t as toBytes, u as utils$1, l as login, b as sbtcConfig, A as ArrowUp, c as ArrowDown, f as fetchFeeEstimate } from "../../chunks/utxos-40029956.js";
let Layout;
let __tla = (async () => {
  const app = "";
  function I$5() {
    if (typeof self < "u")
      return self;
    if (typeof window < "u")
      return window;
    if (typeof global < "u")
      return global;
    throw new Error("Unexpected runtime environment - no supported global scope (`window`, `self`, `global`) available");
  }
  function pr$1(r) {
    if (ArrayBuffer.isView(r))
      return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
    throw new Error("Non array buffer passed to arrayBufferToUint8");
  }
  function Q$2(r, t, e) {
    return e ? `Use of '${e}' requires \`${t}\` which is unavailable on the '${r}' object within the currently executing environment.` : `\`${t}\` is unavailable on the '${r}' object within the currently executing environment.`;
  }
  function hr(r, { throwIfUnavailable: t, usageDesc: e, returnEmptyObject: n } = {}) {
    let i2;
    try {
      if (i2 = I$5(), i2) {
        let o = i2[r];
        if (o)
          return o;
      }
    } catch (o) {
      console.error(`Error getting object '${r}' from global scope '${i2}': ${o}`);
    }
    if (t) {
      let o = Q$2(i2, r.toString(), e);
      throw console.error(o), new Error(o);
    }
    if (n)
      return {};
  }
  function U$3(r) {
    let t = r.reduce((i2, o) => i2 + o.length, 0), e = new Uint8Array(t), n = 0;
    for (let i2 = 0; i2 < r.length; i2++)
      e.set(r[i2], n), n += r[i2].length;
    return e;
  }
  function lr(r) {
    return typeof r == "object" && (r = Uint8Array.from(r)), r;
  }
  function B$3(r) {
    var t;
    return r !== null && typeof r == "object" && ((t = r == null ? void 0 : r.constructor) == null ? void 0 : t.wordSize) === 26 && Array.isArray(r == null ? void 0 : r.words);
  }
  function dr(r) {
    return new TextEncoder().encode(r);
  }
  function _$4(r) {
    return new TextDecoder().decode(r);
  }
  var O$3 = new Array(255);
  for (let r = 0; r <= 255; ++r)
    O$3[r] = r.toString(16).padStart(2, "0");
  function l$4(r) {
    if (typeof r != "string")
      throw new TypeError("hexToBytes: expected string, got " + typeof r);
    if (r.length % 2)
      throw new Error(`hexToBytes: received invalid unpadded hex, got: ${r.length}`);
    let t = new Uint8Array(r.length / 2);
    for (let e = 0; e < t.length; e++) {
      let n = e * 2;
      t[e] = Number.parseInt(r.slice(n, n + 2), 16);
    }
    return t;
  }
  function p$4(r) {
    let t = new Array(r.length);
    for (let e = 0; e < r.length; ++e)
      t[e] = O$3[r[e]];
    return t.join("");
  }
  function d$3(r) {
    if (typeof r != "string")
      throw new TypeError("hexToNumber: expected string, got " + typeof r);
    return BigInt(`0x${r}`);
  }
  var x$3 = (r, t = 8) => (typeof r == "bigint" ? r : y$9(r, false)).toString(16).padStart(t * 2, "0"), Tr = (r) => parseInt(r, 16), Er = (r) => JSON.parse(_$4(l$4(r))), Ir$1 = (r) => typeof r == "string" ? l$4(r) : r, Ur = (r) => r.startsWith("0x") ? r.replace("0x", "") : r;
  var N$3 = BigInt(0), f$7 = BigInt(1);
  function _r(r, t = 128) {
    if (r < -(f$7 << BigInt(t) - f$7) || r > (f$7 << BigInt(t) - f$7) - f$7)
      throw `Integer out of range given ${t} bits to represent.`;
    return r >= N$3 ? r : ~(-r - f$7 | ~((f$7 << BigInt(t)) - f$7));
  }
  function L$4(r, t = 128) {
    return (r & f$7 << BigInt(t) - f$7) > N$3 && (r = r - (f$7 << BigInt(t))), r;
  }
  function Rr$1(r, t = false, e = 8) {
    return l$4(x$3(y$9(r, t), e));
  }
  function y$9(r, t = false) {
    if (typeof r == "number") {
      if (!Number.isInteger(r))
        throw new RangeError("Invalid value. Values of type 'number' must be an integer.");
      return BigInt(r);
    }
    if (typeof r == "string")
      if (r.toLowerCase().startsWith("0x")) {
        let e = r.slice(2);
        e = e.padStart(e.length + e.length % 2, "0"), r = l$4(e);
      } else
        try {
          return BigInt(r);
        } catch (e) {
          if (e instanceof SyntaxError)
            throw new RangeError(`Invalid value. String integer '${r}' is not finite.`);
        }
    if (typeof r == "bigint")
      return r;
    if (r instanceof Uint8Array)
      return t ? L$4(d$3(p$4(r))) : d$3(p$4(r));
    if (B$3(r))
      return BigInt(r.toString());
    throw new TypeError(`Invalid value type. Must be a number, bigint, integer-string, hex-string, BN.js instance, or Buffer, got: ${typeof r}.`);
  }
  function h$7(r) {
    return `[micro-stacks] ${r}`;
  }
  var V$2 = class V extends Error {
    constructor(t) {
      super(t), this.message = h$7(t), this.name = this.constructor.name, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
    }
  }, C$5 = class C extends Error {
    constructor(t) {
      super(t), this.message = h$7(t), this.name = this.constructor.name;
    }
  };
  var z$5 = typeof window < "u", rr = z$5 ? {
    referrer: "no-referrer",
    referrerPolicy: "no-referrer"
  } : {};
  async function Hr(r, t = {}) {
    return fetch(r, {
      ...rr,
      ...t
    });
  }
  var H$5 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", M$5 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  function $$4(r) {
    let t = r.length;
    if (t % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    let e = r.indexOf("=");
    e === -1 && (e = t);
    let n = e === t ? 0 : 4 - e % 4;
    return [
      e,
      n
    ];
  }
  function tr(r, t, e) {
    return (t + e) * 3 / 4 - e;
  }
  function G$1(r, t) {
    let { revLookup: e } = w$6(t), n, i2 = $$4(r), o = i2[0], s2 = i2[1], a2 = new Uint8Array(tr(r, o, s2)), u2 = 0, m2 = s2 > 0 ? o - 4 : o, c2;
    for (c2 = 0; c2 < m2; c2 += 4)
      n = e[r.charCodeAt(c2)] << 18 | e[r.charCodeAt(c2 + 1)] << 12 | e[r.charCodeAt(c2 + 2)] << 6 | e[r.charCodeAt(c2 + 3)], a2[u2++] = n >> 16 & 255, a2[u2++] = n >> 8 & 255, a2[u2++] = n & 255;
    return s2 === 2 && (n = e[r.charCodeAt(c2)] << 2 | e[r.charCodeAt(c2 + 1)] >> 4, a2[u2++] = n & 255), s2 === 1 && (n = e[r.charCodeAt(c2)] << 10 | e[r.charCodeAt(c2 + 1)] << 4 | e[r.charCodeAt(c2 + 2)] >> 2, a2[u2++] = n >> 8 & 255, a2[u2++] = n & 255), a2;
  }
  function W$2(r) {
    let e = r.length, n = e % 4;
    if (!n)
      return r;
    let i2 = 4 - n, o = e + i2;
    return r.padEnd(o, "=");
  }
  function Gr(r) {
    return G$1(W$2(r), H$5);
  }
  function er(r, t) {
    let { lookup: e } = w$6(t);
    return e[r >> 18 & 63] + e[r >> 12 & 63] + e[r >> 6 & 63] + e[r & 63];
  }
  function nr(r, t, e, n) {
    let i2, o = [];
    for (let s2 = t; s2 < e; s2 += 3)
      i2 = (r[s2] << 16 & 16711680) + (r[s2 + 1] << 8 & 65280) + (r[s2 + 2] & 255), o.push(er(i2, n));
    return o.join("");
  }
  var A$4 = /* @__PURE__ */ new Map();
  function w$6(r) {
    if (A$4.has(r))
      return A$4.get(r);
    let t = [], e = [];
    for (let n = 0, i2 = r.length; n < i2; ++n)
      t[n] = r[n], e[r.charCodeAt(n)] = n;
    return e["-".charCodeAt(0)] = 62, e["_".charCodeAt(0)] = 63, A$4.set(r, {
      lookup: t,
      revLookup: e
    }), {
      lookup: t,
      revLookup: e
    };
  }
  function P$5(r, t) {
    let { lookup: e } = w$6(t), n, i2 = r.length, o = i2 % 3, s2 = [], a2 = 16383;
    for (let u2 = 0, m2 = i2 - o; u2 < m2; u2 += a2)
      s2.push(nr(r, u2, u2 + a2 > m2 ? m2 : u2 + a2, t));
    return o === 1 ? (n = r[i2 - 1], s2.push(e[n >> 2] + e[n << 4 & 63] + "==")) : o === 2 && (n = (r[i2 - 2] << 8) + r[i2 - 1], s2.push(e[n >> 10] + e[n >> 4 & 63] + e[n << 2 & 63] + "=")), s2.join("");
  }
  function Pr(r) {
    return P$5(r, H$5);
  }
  function jr(r) {
    return P$5(r, M$5);
  }
  var T$3 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", j$2 = BigInt(58);
  function Yr(r) {
    if (r.length === 0)
      return "";
    typeof r == "string" && (typeof TextEncoder < "u" ? r = new TextEncoder().encode(r) : r = new Uint8Array(r.split("").map((n) => n.charCodeAt(0))));
    let t = BigInt("0x" + p$4(r)), e = [];
    for (; t > 0; ) {
      let n = Number(t % j$2);
      t = t / j$2, e.push(T$3[n]);
    }
    for (let n = 0; r[n] === 0; n++)
      e.push(T$3[0]);
    return e.reverse().join("");
  }
  function Qr(r) {
    let t = [];
    for (let e = 0; e < r.length; ++e)
      t.push(r.charCodeAt(e) & 255);
    return new Uint8Array(t);
  }
  function Xr(r) {
    let t = "", e = r.length;
    for (let n = 0; n < e; ++n)
      t += String.fromCharCode(r[n] & 127);
    return t;
  }
  function rt(r, t, e, n, i2) {
    if (n || (n = 0), !i2 && i2 !== 0 && (i2 = r.length), e >= t.length && (e = t.length), e || (e = 0), i2 > 0 && i2 < n && (i2 = n), i2 === n || t.length === 0 || r.length === 0)
      return 0;
    if (e < 0)
      throw new RangeError("targetStart out of bounds");
    if (n < 0 || n >= r.length)
      throw new RangeError("Index out of range");
    if (i2 < 0)
      throw new RangeError("sourceEnd out of bounds");
    i2 > r.length && (i2 = r.length), t.length - e < i2 - n && (i2 = t.length - e + n);
    let o = i2 - n;
    return r === t && typeof Uint8Array.prototype.copyWithin == "function" ? r.copyWithin(e, n, i2) : Uint8Array.prototype.set.call(t, r.subarray(n, i2), e), o;
  }
  var q$1 = class q {
    constructor() {
      __publicField(this, "_value", []);
    }
    get value() {
      return this._value;
    }
    appendHexString(t) {
      this.value.push(l$4(t));
    }
    push(t) {
      return this._value.push(t);
    }
    appendByte(t) {
      if (!Number.isInteger(t) || t < 0 || t > 255)
        throw new Error(`Value ${t} is not a valid byte`);
      this.value.push(Uint8Array.from([
        t
      ]));
    }
    concatBuffer() {
      return U$3(this.value);
    }
  };
  var g$4 = {
    INVALID_ENCODING: "Invalid encoding provided. Please specify a valid encoding the internal Node.js Buffer supports.",
    INVALID_SMARTBUFFER_SIZE: "Invalid size provided. Size must be a valid integer greater than zero.",
    INVALID_SMARTBUFFER_BUFFER: "Invalid Buffer provided in SmartBufferOptions.",
    INVALID_SMARTBUFFER_OBJECT: "Invalid SmartBufferOptions object supplied to SmartBuffer constructor or factory methods.",
    INVALID_OFFSET: "An invalid offset value was provided.",
    INVALID_OFFSET_NON_NUMBER: "An invalid offset value was provided. A numeric value is required.",
    INVALID_LENGTH: "An invalid length value was provided.",
    INVALID_LENGTH_NON_NUMBER: "An invalid length value was provived. A numeric value is required.",
    INVALID_TARGET_OFFSET: "Target offset is beyond the bounds of the internal SmartBuffer data.",
    INVALID_TARGET_LENGTH: "Specified length value moves cursor beyong the bounds of the internal SmartBuffer data.",
    INVALID_READ_BEYOND_BOUNDS: "Attempted to read beyond the bounds of the managed data.",
    INVALID_WRITE_BEYOND_BOUNDS: "Attempted to write beyond the bounds of the managed data."
  };
  function ut$2(r, t, e) {
    return t = +t, e = e >>> 0, r[e] = t & 255, e + 1;
  }
  function ct$1(r, t, e) {
    return t = +t, e = e >>> 0, r[e] = t & 255, r[e + 1] = t >>> 8, e + 2;
  }
  function mt$1(r, t, e) {
    return t = +t, e >>>= 0, r[e + 3] = t >>> 24, r[e + 2] = t >>> 16, r[e + 1] = t >>> 8, r[e] = t & 255, e + 4;
  }
  function yt$2(r, t, e) {
    return t = +t, e >>>= 0, r[e] = t >>> 24, r[e + 1] = t >>> 16, r[e + 2] = t >>> 8, r[e + 3] = t & 255, e + 4;
  }
  function K$2(r, t) {
    return r instanceof t || r != null && r.constructor != null && r.constructor.name != null && r.constructor.name === t.name;
  }
  function xt$1(r, t) {
    if (!K$2(r, Uint8Array) || !K$2(t, Uint8Array))
      throw new TypeError('The "buf1", "buf2" arguments must be one of type Uint8Array');
    if (r === t)
      return 0;
    let e = r.length, n = t.length;
    for (let i2 = 0, o = Math.min(e, n); i2 < o; ++i2)
      if (r[i2] !== t[i2]) {
        e = r[i2], n = t[i2];
        break;
      }
    return e < n ? -1 : n < e ? 1 : 0;
  }
  function ir(r) {
    let t = Object.values(r).filter((n) => typeof n == "number"), e = new Set(t);
    return (n) => e.has(n);
  }
  var Y$2 = /* @__PURE__ */ new Map();
  function E$4(r, t) {
    let e = Y$2.get(r);
    if (e !== void 0)
      return e(t);
    let n = ir(r);
    return Y$2.set(r, n), E$4(r, t);
  }
  function or(r) {
    return typeof r == "number" && isFinite(r) && Math.floor(r) === r;
  }
  function sr(r) {
    return typeof r == "number" && isFinite(r) && or(r);
  }
  function Z$4(r, t) {
    if (typeof r == "number") {
      if (!sr(r) || r < 0)
        throw new Error(t ? g$4.INVALID_OFFSET : g$4.INVALID_LENGTH);
    } else
      throw new Error(t ? g$4.INVALID_OFFSET_NON_NUMBER : g$4.INVALID_LENGTH_NON_NUMBER);
  }
  var J$2 = class J {
    constructor(t) {
      __publicField(this, "buffer");
      __publicField(this, "view");
      __publicField(this, "_readOffset", 0);
      if (t)
        this.buffer = t, this.view = new DataView(t.buffer, t.byteOffset, t.byteLength);
      else {
        let e = new Uint8Array();
        this.buffer = e, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
    }
    ensureReadable(t, e) {
      let n = this._readOffset;
      if (typeof e < "u" && (Z$4(e, true), n = e), n < 0 || n + t > this.buffer.length)
        throw new Error(g$4.INVALID_READ_BEYOND_BOUNDS);
    }
    _readNumberValue(t, e, n) {
      this.ensureReadable(e, n);
      let i2 = t.call(this.view, typeof n == "number" ? n : this._readOffset);
      return typeof n > "u" && (this._readOffset += e), i2;
    }
    readBuffer(t) {
      let e = typeof t == "number" ? t : this.buffer.length, n = Math.min(this.buffer.length, this._readOffset + e), i2 = this.buffer.slice(this.buffer.byteOffset + this._readOffset, n);
      return this._readOffset = n, i2;
    }
    readUInt32BE(t) {
      return this._readNumberValue(this.view.getUint32, 4, t);
    }
    readUInt8(t) {
      return this._readNumberValue(this.view.getUint8, 1, t);
    }
    readUInt16BE(t) {
      return this._readNumberValue(this.view.getUint16, 2, t);
    }
    readBigUIntLE(t) {
      let e = Uint8Array.from(this.readBuffer(t)).reverse(), n = p$4(e);
      return BigInt(`0x${n}`);
    }
    readBigUIntBE(t) {
      let e = this.readBuffer(t), n = p$4(e);
      return BigInt(`0x${n}`);
    }
    readBigUInt64BE(t) {
      if (typeof BigInt > "u")
        throw new Error("Platform does not support JS BigInt type.");
      return this._readNumberValue(this.view.getBigUint64, 8, t);
    }
    get readOffset() {
      return this._readOffset;
    }
    set readOffset(t) {
      this._readOffset = t;
    }
    get internalBuffer() {
      return this.buffer.buffer;
    }
    readUInt8Enum(t, e) {
      let n = this.readUInt8();
      if (E$4(t, n))
        return n;
      throw e(n);
    }
  };
  var ur = ((e) => (e[e.Testnet = 2147483648] = "Testnet", e[e.Mainnet = 1] = "Mainnet", e))(ur || {}), cr = ((e) => (e[e.Mainnet = 0] = "Mainnet", e[e.Testnet = 128] = "Testnet", e))(cr || {});
  const Rho = new Uint8Array([
    7,
    4,
    13,
    1,
    10,
    6,
    15,
    3,
    12,
    0,
    9,
    5,
    2,
    14,
    11,
    8
  ]);
  const Id = Uint8Array.from({
    length: 16
  }, (_2, i2) => i2);
  const Pi = Id.map((i2) => (9 * i2 + 5) % 16);
  let idxL = [
    Id
  ];
  let idxR = [
    Pi
  ];
  for (let i2 = 0; i2 < 4; i2++)
    for (let j2 of [
      idxL,
      idxR
    ])
      j2.push(j2[i2].map((k2) => Rho[k2]));
  const shifts = [
    [
      11,
      14,
      15,
      12,
      5,
      8,
      7,
      9,
      11,
      13,
      14,
      15,
      6,
      7,
      9,
      8
    ],
    [
      12,
      13,
      11,
      15,
      6,
      9,
      9,
      7,
      12,
      15,
      11,
      13,
      7,
      8,
      7,
      7
    ],
    [
      13,
      15,
      14,
      11,
      7,
      7,
      6,
      8,
      13,
      14,
      13,
      12,
      5,
      5,
      6,
      9
    ],
    [
      14,
      11,
      12,
      14,
      8,
      6,
      5,
      5,
      15,
      12,
      15,
      14,
      9,
      9,
      8,
      6
    ],
    [
      15,
      12,
      13,
      13,
      9,
      5,
      8,
      6,
      14,
      11,
      12,
      11,
      8,
      6,
      5,
      5
    ]
  ].map((i2) => new Uint8Array(i2));
  const shiftsL = idxL.map((idx, i2) => idx.map((j2) => shifts[i2][j2]));
  const shiftsR = idxR.map((idx, i2) => idx.map((j2) => shifts[i2][j2]));
  const Kl = new Uint32Array([
    0,
    1518500249,
    1859775393,
    2400959708,
    2840853838
  ]);
  const Kr = new Uint32Array([
    1352829926,
    1548603684,
    1836072691,
    2053994217,
    0
  ]);
  const rotl = (word, shift) => word << shift | word >>> 32 - shift;
  function f$6(group, x2, y2, z2) {
    if (group === 0)
      return x2 ^ y2 ^ z2;
    else if (group === 1)
      return x2 & y2 | ~x2 & z2;
    else if (group === 2)
      return (x2 | ~y2) ^ z2;
    else if (group === 3)
      return x2 & z2 | y2 & ~z2;
    else
      return x2 ^ (y2 | ~z2);
  }
  const BUF = new Uint32Array(16);
  class RIPEMD160 extends SHA2 {
    constructor() {
      super(64, 20, 8, true);
      this.h0 = 1732584193 | 0;
      this.h1 = 4023233417 | 0;
      this.h2 = 2562383102 | 0;
      this.h3 = 271733878 | 0;
      this.h4 = 3285377520 | 0;
    }
    get() {
      const { h0, h1, h2, h3, h4 } = this;
      return [
        h0,
        h1,
        h2,
        h3,
        h4
      ];
    }
    set(h0, h1, h2, h3, h4) {
      this.h0 = h0 | 0;
      this.h1 = h1 | 0;
      this.h2 = h2 | 0;
      this.h3 = h3 | 0;
      this.h4 = h4 | 0;
    }
    process(view, offset) {
      for (let i2 = 0; i2 < 16; i2++, offset += 4)
        BUF[i2] = view.getUint32(offset, true);
      let al = this.h0 | 0, ar2 = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr2 = cl, dl = this.h3 | 0, dr2 = dl, el = this.h4 | 0, er2 = el;
      for (let group = 0; group < 5; group++) {
        const rGroup = 4 - group;
        const hbl = Kl[group], hbr = Kr[group];
        const rl = idxL[group], rr2 = idxR[group];
        const sl = shiftsL[group], sr2 = shiftsR[group];
        for (let i2 = 0; i2 < 16; i2++) {
          const tl = rotl(al + f$6(group, bl, cl, dl) + BUF[rl[i2]] + hbl, sl[i2]) + el | 0;
          al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl;
        }
        for (let i2 = 0; i2 < 16; i2++) {
          const tr2 = rotl(ar2 + f$6(rGroup, br, cr2, dr2) + BUF[rr2[i2]] + hbr, sr2[i2]) + er2 | 0;
          ar2 = er2, er2 = dr2, dr2 = rotl(cr2, 10) | 0, cr2 = br, br = tr2;
        }
      }
      this.set(this.h1 + cl + dr2 | 0, this.h2 + dl + er2 | 0, this.h3 + el + ar2 | 0, this.h4 + al + br | 0, this.h0 + bl + cr2 | 0);
    }
    roundClean() {
      BUF.fill(0);
    }
    destroy() {
      this.destroyed = true;
      this.buffer.fill(0);
      this.set(0, 0, 0, 0, 0);
    }
  }
  const ripemd160 = wrapConstructor(() => new RIPEMD160());
  const U32_MASK64 = BigInt(2 ** 32 - 1);
  const _32n = BigInt(32);
  function fromBig(n, le2 = false) {
    if (le2)
      return {
        h: Number(n & U32_MASK64),
        l: Number(n >> _32n & U32_MASK64)
      };
    return {
      h: Number(n >> _32n & U32_MASK64) | 0,
      l: Number(n & U32_MASK64) | 0
    };
  }
  function split(lst, le2 = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for (let i2 = 0; i2 < lst.length; i2++) {
      const { h: h2, l: l2 } = fromBig(lst[i2], le2);
      [Ah[i2], Al[i2]] = [
        h2,
        l2
      ];
    }
    return [
      Ah,
      Al
    ];
  }
  const toBig = (h2, l2) => BigInt(h2 >>> 0) << _32n | BigInt(l2 >>> 0);
  const shrSH = (h2, l2, s2) => h2 >>> s2;
  const shrSL = (h2, l2, s2) => h2 << 32 - s2 | l2 >>> s2;
  const rotrSH = (h2, l2, s2) => h2 >>> s2 | l2 << 32 - s2;
  const rotrSL = (h2, l2, s2) => h2 << 32 - s2 | l2 >>> s2;
  const rotrBH = (h2, l2, s2) => h2 << 64 - s2 | l2 >>> s2 - 32;
  const rotrBL = (h2, l2, s2) => h2 >>> s2 - 32 | l2 << 64 - s2;
  const rotr32H = (h2, l2) => l2;
  const rotr32L = (h2, l2) => h2;
  const rotlSH = (h2, l2, s2) => h2 << s2 | l2 >>> 32 - s2;
  const rotlSL = (h2, l2, s2) => l2 << s2 | h2 >>> 32 - s2;
  const rotlBH = (h2, l2, s2) => l2 << s2 - 32 | h2 >>> 64 - s2;
  const rotlBL = (h2, l2, s2) => h2 << s2 - 32 | l2 >>> 64 - s2;
  function add(Ah, Al, Bh, Bl) {
    const l2 = (Al >>> 0) + (Bl >>> 0);
    return {
      h: Ah + Bh + (l2 / 2 ** 32 | 0) | 0,
      l: l2 | 0
    };
  }
  const add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
  const add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
  const add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
  const add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
  const add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
  const add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
  const u64 = {
    fromBig,
    split,
    toBig,
    shrSH,
    shrSL,
    rotrSH,
    rotrSL,
    rotrBH,
    rotrBL,
    rotr32H,
    rotr32L,
    rotlSH,
    rotlSL,
    rotlBH,
    rotlBL,
    add,
    add3L,
    add3H,
    add4L,
    add4H,
    add5H,
    add5L
  };
  const [SHA512_Kh, SHA512_Kl] = u64.split([
    "0x428a2f98d728ae22",
    "0x7137449123ef65cd",
    "0xb5c0fbcfec4d3b2f",
    "0xe9b5dba58189dbbc",
    "0x3956c25bf348b538",
    "0x59f111f1b605d019",
    "0x923f82a4af194f9b",
    "0xab1c5ed5da6d8118",
    "0xd807aa98a3030242",
    "0x12835b0145706fbe",
    "0x243185be4ee4b28c",
    "0x550c7dc3d5ffb4e2",
    "0x72be5d74f27b896f",
    "0x80deb1fe3b1696b1",
    "0x9bdc06a725c71235",
    "0xc19bf174cf692694",
    "0xe49b69c19ef14ad2",
    "0xefbe4786384f25e3",
    "0x0fc19dc68b8cd5b5",
    "0x240ca1cc77ac9c65",
    "0x2de92c6f592b0275",
    "0x4a7484aa6ea6e483",
    "0x5cb0a9dcbd41fbd4",
    "0x76f988da831153b5",
    "0x983e5152ee66dfab",
    "0xa831c66d2db43210",
    "0xb00327c898fb213f",
    "0xbf597fc7beef0ee4",
    "0xc6e00bf33da88fc2",
    "0xd5a79147930aa725",
    "0x06ca6351e003826f",
    "0x142929670a0e6e70",
    "0x27b70a8546d22ffc",
    "0x2e1b21385c26c926",
    "0x4d2c6dfc5ac42aed",
    "0x53380d139d95b3df",
    "0x650a73548baf63de",
    "0x766a0abb3c77b2a8",
    "0x81c2c92e47edaee6",
    "0x92722c851482353b",
    "0xa2bfe8a14cf10364",
    "0xa81a664bbc423001",
    "0xc24b8b70d0f89791",
    "0xc76c51a30654be30",
    "0xd192e819d6ef5218",
    "0xd69906245565a910",
    "0xf40e35855771202a",
    "0x106aa07032bbd1b8",
    "0x19a4c116b8d2d0c8",
    "0x1e376c085141ab53",
    "0x2748774cdf8eeb99",
    "0x34b0bcb5e19b48a8",
    "0x391c0cb3c5c95a63",
    "0x4ed8aa4ae3418acb",
    "0x5b9cca4f7763e373",
    "0x682e6ff3d6b2b8a3",
    "0x748f82ee5defb2fc",
    "0x78a5636f43172f60",
    "0x84c87814a1f0ab72",
    "0x8cc702081a6439ec",
    "0x90befffa23631e28",
    "0xa4506cebde82bde9",
    "0xbef9a3f7b2c67915",
    "0xc67178f2e372532b",
    "0xca273eceea26619c",
    "0xd186b8c721c0c207",
    "0xeada7dd6cde0eb1e",
    "0xf57d4f7fee6ed178",
    "0x06f067aa72176fba",
    "0x0a637dc5a2c898a6",
    "0x113f9804bef90dae",
    "0x1b710b35131c471b",
    "0x28db77f523047d84",
    "0x32caab7b40c72493",
    "0x3c9ebe0a15c9bebc",
    "0x431d67c49c100d4c",
    "0x4cc5d4becb3e42b6",
    "0x597f299cfc657e2a",
    "0x5fcb6fab3ad6faec",
    "0x6c44198c4a475817"
  ].map((n) => BigInt(n)));
  const SHA512_W_H = new Uint32Array(80);
  const SHA512_W_L = new Uint32Array(80);
  class SHA512 extends SHA2 {
    constructor() {
      super(128, 64, 16, false);
      this.Ah = 1779033703 | 0;
      this.Al = 4089235720 | 0;
      this.Bh = 3144134277 | 0;
      this.Bl = 2227873595 | 0;
      this.Ch = 1013904242 | 0;
      this.Cl = 4271175723 | 0;
      this.Dh = 2773480762 | 0;
      this.Dl = 1595750129 | 0;
      this.Eh = 1359893119 | 0;
      this.El = 2917565137 | 0;
      this.Fh = 2600822924 | 0;
      this.Fl = 725511199 | 0;
      this.Gh = 528734635 | 0;
      this.Gl = 4215389547 | 0;
      this.Hh = 1541459225 | 0;
      this.Hl = 327033209 | 0;
    }
    get() {
      const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
      return [
        Ah,
        Al,
        Bh,
        Bl,
        Ch,
        Cl,
        Dh,
        Dl,
        Eh,
        El,
        Fh,
        Fl,
        Gh,
        Gl,
        Hh,
        Hl
      ];
    }
    set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
      this.Ah = Ah | 0;
      this.Al = Al | 0;
      this.Bh = Bh | 0;
      this.Bl = Bl | 0;
      this.Ch = Ch | 0;
      this.Cl = Cl | 0;
      this.Dh = Dh | 0;
      this.Dl = Dl | 0;
      this.Eh = Eh | 0;
      this.El = El | 0;
      this.Fh = Fh | 0;
      this.Fl = Fl | 0;
      this.Gh = Gh | 0;
      this.Gl = Gl | 0;
      this.Hh = Hh | 0;
      this.Hl = Hl | 0;
    }
    process(view, offset) {
      for (let i2 = 0; i2 < 16; i2++, offset += 4) {
        SHA512_W_H[i2] = view.getUint32(offset);
        SHA512_W_L[i2] = view.getUint32(offset += 4);
      }
      for (let i2 = 16; i2 < 80; i2++) {
        const W15h = SHA512_W_H[i2 - 15] | 0;
        const W15l = SHA512_W_L[i2 - 15] | 0;
        const s0h = u64.rotrSH(W15h, W15l, 1) ^ u64.rotrSH(W15h, W15l, 8) ^ u64.shrSH(W15h, W15l, 7);
        const s0l = u64.rotrSL(W15h, W15l, 1) ^ u64.rotrSL(W15h, W15l, 8) ^ u64.shrSL(W15h, W15l, 7);
        const W2h = SHA512_W_H[i2 - 2] | 0;
        const W2l = SHA512_W_L[i2 - 2] | 0;
        const s1h = u64.rotrSH(W2h, W2l, 19) ^ u64.rotrBH(W2h, W2l, 61) ^ u64.shrSH(W2h, W2l, 6);
        const s1l = u64.rotrSL(W2h, W2l, 19) ^ u64.rotrBL(W2h, W2l, 61) ^ u64.shrSL(W2h, W2l, 6);
        const SUMl = u64.add4L(s0l, s1l, SHA512_W_L[i2 - 7], SHA512_W_L[i2 - 16]);
        const SUMh = u64.add4H(SUMl, s0h, s1h, SHA512_W_H[i2 - 7], SHA512_W_H[i2 - 16]);
        SHA512_W_H[i2] = SUMh | 0;
        SHA512_W_L[i2] = SUMl | 0;
      }
      let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
      for (let i2 = 0; i2 < 80; i2++) {
        const sigma1h = u64.rotrSH(Eh, El, 14) ^ u64.rotrSH(Eh, El, 18) ^ u64.rotrBH(Eh, El, 41);
        const sigma1l = u64.rotrSL(Eh, El, 14) ^ u64.rotrSL(Eh, El, 18) ^ u64.rotrBL(Eh, El, 41);
        const CHIh = Eh & Fh ^ ~Eh & Gh;
        const CHIl = El & Fl ^ ~El & Gl;
        const T1ll = u64.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i2], SHA512_W_L[i2]);
        const T1h = u64.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i2], SHA512_W_H[i2]);
        const T1l = T1ll | 0;
        const sigma0h = u64.rotrSH(Ah, Al, 28) ^ u64.rotrBH(Ah, Al, 34) ^ u64.rotrBH(Ah, Al, 39);
        const sigma0l = u64.rotrSL(Ah, Al, 28) ^ u64.rotrBL(Ah, Al, 34) ^ u64.rotrBL(Ah, Al, 39);
        const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
        const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
        Hh = Gh | 0;
        Hl = Gl | 0;
        Gh = Fh | 0;
        Gl = Fl | 0;
        Fh = Eh | 0;
        Fl = El | 0;
        ({ h: Eh, l: El } = u64.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
        Dh = Ch | 0;
        Dl = Cl | 0;
        Ch = Bh | 0;
        Cl = Bl | 0;
        Bh = Ah | 0;
        Bl = Al | 0;
        const All = u64.add3L(T1l, sigma0l, MAJl);
        Ah = u64.add3H(All, T1h, sigma0h, MAJh);
        Al = All | 0;
      }
      ({ h: Ah, l: Al } = u64.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
      ({ h: Bh, l: Bl } = u64.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
      ({ h: Ch, l: Cl } = u64.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
      ({ h: Dh, l: Dl } = u64.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
      ({ h: Eh, l: El } = u64.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
      ({ h: Fh, l: Fl } = u64.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
      ({ h: Gh, l: Gl } = u64.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
      ({ h: Hh, l: Hl } = u64.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
      this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
    }
    roundClean() {
      SHA512_W_H.fill(0);
      SHA512_W_L.fill(0);
    }
    destroy() {
      this.buffer.fill(0);
      this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  }
  class SHA512_256 extends SHA512 {
    constructor() {
      super();
      this.Ah = 573645204 | 0;
      this.Al = 4230739756 | 0;
      this.Bh = 2673172387 | 0;
      this.Bl = 3360449730 | 0;
      this.Ch = 596883563 | 0;
      this.Cl = 1867755857 | 0;
      this.Dh = 2520282905 | 0;
      this.Dl = 1497426621 | 0;
      this.Eh = 2519219938 | 0;
      this.El = 2827943907 | 0;
      this.Fh = 3193839141 | 0;
      this.Fl = 1401305490 | 0;
      this.Gh = 721525244 | 0;
      this.Gl = 746961066 | 0;
      this.Hh = 246885852 | 0;
      this.Hl = 2177182882 | 0;
      this.outputLen = 32;
    }
  }
  class SHA384 extends SHA512 {
    constructor() {
      super();
      this.Ah = 3418070365 | 0;
      this.Al = 3238371032 | 0;
      this.Bh = 1654270250 | 0;
      this.Bl = 914150663 | 0;
      this.Ch = 2438529370 | 0;
      this.Cl = 812702999 | 0;
      this.Dh = 355462360 | 0;
      this.Dl = 4144912697 | 0;
      this.Eh = 1731405415 | 0;
      this.El = 4290775857 | 0;
      this.Fh = 2394180231 | 0;
      this.Fl = 1750603025 | 0;
      this.Gh = 3675008525 | 0;
      this.Gl = 1694076839 | 0;
      this.Hh = 1203062813 | 0;
      this.Hl = 3204075428 | 0;
      this.outputLen = 48;
    }
  }
  const sha512 = wrapConstructor(() => new SHA512());
  wrapConstructor(() => new SHA512_256());
  wrapConstructor(() => new SHA384());
  function f$5(r) {
    return sha256.create().update(lr(r)).digest();
  }
  function y$8(r) {
    return sha512.create().update(lr(r)).digest();
  }
  const _0n = BigInt(0);
  const _1n = BigInt(1);
  const _2n = BigInt(2);
  const _3n = BigInt(3);
  const _8n = BigInt(8);
  const POW_2_256 = _2n ** BigInt(256);
  const CURVE = {
    a: _0n,
    b: BigInt(7),
    P: POW_2_256 - _2n ** BigInt(32) - BigInt(977),
    n: POW_2_256 - BigInt("432420386565659656852420866394968145599"),
    h: _1n,
    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")
  };
  function weistrass(x2) {
    const { a: a2, b: b2 } = CURVE;
    const x22 = mod(x2 * x2);
    const x3 = mod(x22 * x2);
    return mod(x3 + a2 * x2 + b2);
  }
  const USE_ENDOMORPHISM = CURVE.a === _0n;
  class JacobianPoint {
    constructor(x2, y2, z2) {
      this.x = x2;
      this.y = y2;
      this.z = z2;
    }
    static fromAffine(p2) {
      if (!(p2 instanceof Point)) {
        throw new TypeError("JacobianPoint#fromAffine: expected Point");
      }
      return new JacobianPoint(p2.x, p2.y, _1n);
    }
    static toAffineBatch(points) {
      const toInv = invertBatch(points.map((p2) => p2.z));
      return points.map((p2, i2) => p2.toAffine(toInv[i2]));
    }
    static normalizeZ(points) {
      return JacobianPoint.toAffineBatch(points).map(JacobianPoint.fromAffine);
    }
    equals(other) {
      if (!(other instanceof JacobianPoint))
        throw new TypeError("JacobianPoint expected");
      const { x: X1, y: Y1, z: Z1 } = this;
      const { x: X2, y: Y2, z: Z2 } = other;
      const Z1Z1 = mod(Z1 ** _2n);
      const Z2Z2 = mod(Z2 ** _2n);
      const U1 = mod(X1 * Z2Z2);
      const U2 = mod(X2 * Z1Z1);
      const S1 = mod(mod(Y1 * Z2) * Z2Z2);
      const S2 = mod(mod(Y2 * Z1) * Z1Z1);
      return U1 === U2 && S1 === S2;
    }
    negate() {
      return new JacobianPoint(this.x, mod(-this.y), this.z);
    }
    double() {
      const { x: X1, y: Y1, z: Z1 } = this;
      const A2 = mod(X1 ** _2n);
      const B2 = mod(Y1 ** _2n);
      const C2 = mod(B2 ** _2n);
      const D2 = mod(_2n * (mod((X1 + B2) ** _2n) - A2 - C2));
      const E2 = mod(_3n * A2);
      const F2 = mod(E2 ** _2n);
      const X3 = mod(F2 - _2n * D2);
      const Y3 = mod(E2 * (D2 - X3) - _8n * C2);
      const Z3 = mod(_2n * Y1 * Z1);
      return new JacobianPoint(X3, Y3, Z3);
    }
    add(other) {
      if (!(other instanceof JacobianPoint))
        throw new TypeError("JacobianPoint expected");
      const { x: X1, y: Y1, z: Z1 } = this;
      const { x: X2, y: Y2, z: Z2 } = other;
      if (X2 === _0n || Y2 === _0n)
        return this;
      if (X1 === _0n || Y1 === _0n)
        return other;
      const Z1Z1 = mod(Z1 ** _2n);
      const Z2Z2 = mod(Z2 ** _2n);
      const U1 = mod(X1 * Z2Z2);
      const U2 = mod(X2 * Z1Z1);
      const S1 = mod(mod(Y1 * Z2) * Z2Z2);
      const S2 = mod(mod(Y2 * Z1) * Z1Z1);
      const H2 = mod(U2 - U1);
      const r = mod(S2 - S1);
      if (H2 === _0n) {
        if (r === _0n) {
          return this.double();
        } else {
          return JacobianPoint.ZERO;
        }
      }
      const HH = mod(H2 ** _2n);
      const HHH = mod(H2 * HH);
      const V2 = mod(U1 * HH);
      const X3 = mod(r ** _2n - HHH - _2n * V2);
      const Y3 = mod(r * (V2 - X3) - S1 * HHH);
      const Z3 = mod(Z1 * Z2 * H2);
      return new JacobianPoint(X3, Y3, Z3);
    }
    subtract(other) {
      return this.add(other.negate());
    }
    multiplyUnsafe(scalar) {
      const P0 = JacobianPoint.ZERO;
      if (typeof scalar === "bigint" && scalar === _0n)
        return P0;
      let n = normalizeScalar(scalar);
      if (n === _1n)
        return this;
      if (!USE_ENDOMORPHISM) {
        let p2 = P0;
        let d3 = this;
        while (n > _0n) {
          if (n & _1n)
            p2 = p2.add(d3);
          d3 = d3.double();
          n >>= _1n;
        }
        return p2;
      }
      let { k1neg, k1, k2neg, k2 } = splitScalarEndo(n);
      let k1p = P0;
      let k2p = P0;
      let d2 = this;
      while (k1 > _0n || k2 > _0n) {
        if (k1 & _1n)
          k1p = k1p.add(d2);
        if (k2 & _1n)
          k2p = k2p.add(d2);
        d2 = d2.double();
        k1 >>= _1n;
        k2 >>= _1n;
      }
      if (k1neg)
        k1p = k1p.negate();
      if (k2neg)
        k2p = k2p.negate();
      k2p = new JacobianPoint(mod(k2p.x * CURVE.beta), k2p.y, k2p.z);
      return k1p.add(k2p);
    }
    precomputeWindow(W2) {
      const windows = USE_ENDOMORPHISM ? 128 / W2 + 1 : 256 / W2 + 1;
      const points = [];
      let p2 = this;
      let base = p2;
      for (let window2 = 0; window2 < windows; window2++) {
        base = p2;
        points.push(base);
        for (let i2 = 1; i2 < 2 ** (W2 - 1); i2++) {
          base = base.add(p2);
          points.push(base);
        }
        p2 = base.double();
      }
      return points;
    }
    wNAF(n, affinePoint) {
      if (!affinePoint && this.equals(JacobianPoint.BASE))
        affinePoint = Point.BASE;
      const W2 = affinePoint && affinePoint._WINDOW_SIZE || 1;
      if (256 % W2) {
        throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
      }
      let precomputes = affinePoint && pointPrecomputes.get(affinePoint);
      if (!precomputes) {
        precomputes = this.precomputeWindow(W2);
        if (affinePoint && W2 !== 1) {
          precomputes = JacobianPoint.normalizeZ(precomputes);
          pointPrecomputes.set(affinePoint, precomputes);
        }
      }
      let p2 = JacobianPoint.ZERO;
      let f2 = JacobianPoint.ZERO;
      const windows = 1 + (USE_ENDOMORPHISM ? 128 / W2 : 256 / W2);
      const windowSize = 2 ** (W2 - 1);
      const mask = BigInt(2 ** W2 - 1);
      const maxNumber = 2 ** W2;
      const shiftBy = BigInt(W2);
      for (let window2 = 0; window2 < windows; window2++) {
        const offset = window2 * windowSize;
        let wbits = Number(n & mask);
        n >>= shiftBy;
        if (wbits > windowSize) {
          wbits -= maxNumber;
          n += _1n;
        }
        if (wbits === 0) {
          let pr2 = precomputes[offset];
          if (window2 % 2)
            pr2 = pr2.negate();
          f2 = f2.add(pr2);
        } else {
          let cached = precomputes[offset + Math.abs(wbits) - 1];
          if (wbits < 0)
            cached = cached.negate();
          p2 = p2.add(cached);
        }
      }
      return {
        p: p2,
        f: f2
      };
    }
    multiply(scalar, affinePoint) {
      let n = normalizeScalar(scalar);
      let point;
      let fake;
      if (USE_ENDOMORPHISM) {
        const { k1neg, k1, k2neg, k2 } = splitScalarEndo(n);
        let { p: k1p, f: f1p } = this.wNAF(k1, affinePoint);
        let { p: k2p, f: f2p } = this.wNAF(k2, affinePoint);
        if (k1neg)
          k1p = k1p.negate();
        if (k2neg)
          k2p = k2p.negate();
        k2p = new JacobianPoint(mod(k2p.x * CURVE.beta), k2p.y, k2p.z);
        point = k1p.add(k2p);
        fake = f1p.add(f2p);
      } else {
        const { p: p2, f: f2 } = this.wNAF(n, affinePoint);
        point = p2;
        fake = f2;
      }
      return JacobianPoint.normalizeZ([
        point,
        fake
      ])[0];
    }
    toAffine(invZ = invert(this.z)) {
      const { x: x2, y: y2, z: z2 } = this;
      const iz1 = invZ;
      const iz2 = mod(iz1 * iz1);
      const iz3 = mod(iz2 * iz1);
      const ax = mod(x2 * iz2);
      const ay = mod(y2 * iz3);
      const zz = mod(z2 * iz1);
      if (zz !== _1n)
        throw new Error("invZ was invalid");
      return new Point(ax, ay);
    }
  }
  JacobianPoint.BASE = new JacobianPoint(CURVE.Gx, CURVE.Gy, _1n);
  JacobianPoint.ZERO = new JacobianPoint(_0n, _1n, _0n);
  const pointPrecomputes = /* @__PURE__ */ new WeakMap();
  class Point {
    constructor(x2, y2) {
      this.x = x2;
      this.y = y2;
    }
    _setWindowSize(windowSize) {
      this._WINDOW_SIZE = windowSize;
      pointPrecomputes.delete(this);
    }
    static fromCompressedHex(bytes) {
      const isShort = bytes.length === 32;
      const x2 = bytesToNumber(isShort ? bytes : bytes.subarray(1));
      if (!isValidFieldElement(x2))
        throw new Error("Point is not on curve");
      const y2 = weistrass(x2);
      let y3 = sqrtMod(y2);
      const isYOdd = (y3 & _1n) === _1n;
      if (isShort) {
        if (isYOdd)
          y3 = mod(-y3);
      } else {
        const isFirstByteOdd = (bytes[0] & 1) === 1;
        if (isFirstByteOdd !== isYOdd)
          y3 = mod(-y3);
      }
      const point = new Point(x2, y3);
      point.assertValidity();
      return point;
    }
    static fromUncompressedHex(bytes) {
      const x2 = bytesToNumber(bytes.subarray(1, 33));
      const y2 = bytesToNumber(bytes.subarray(33, 65));
      const point = new Point(x2, y2);
      point.assertValidity();
      return point;
    }
    static fromHex(hex) {
      const bytes = ensureBytes(hex);
      const len = bytes.length;
      const header = bytes[0];
      if (len === 32 || len === 33 && (header === 2 || header === 3)) {
        return this.fromCompressedHex(bytes);
      }
      if (len === 65 && header === 4)
        return this.fromUncompressedHex(bytes);
      throw new Error(`Point.fromHex: received invalid point. Expected 32-33 compressed bytes or 65 uncompressed bytes, not ${len}`);
    }
    static fromPrivateKey(privateKey) {
      return Point.BASE.multiply(normalizePrivateKey(privateKey));
    }
    static fromSignature(msgHash, signature, recovery) {
      msgHash = ensureBytes(msgHash);
      const h2 = truncateHash(msgHash);
      const { r, s: s2 } = normalizeSignature(signature);
      if (recovery !== 0 && recovery !== 1) {
        throw new Error("Cannot recover signature: invalid recovery bit");
      }
      const prefix2 = recovery & 1 ? "03" : "02";
      const R2 = Point.fromHex(prefix2 + numTo32bStr(r));
      const { n } = CURVE;
      const rinv = invert(r, n);
      const u1 = mod(-h2 * rinv, n);
      const u2 = mod(s2 * rinv, n);
      const Q2 = Point.BASE.multiplyAndAddUnsafe(R2, u1, u2);
      if (!Q2)
        throw new Error("Cannot recover signature: point at infinify");
      Q2.assertValidity();
      return Q2;
    }
    toRawBytes(isCompressed = false) {
      return hexToBytes(this.toHex(isCompressed));
    }
    toHex(isCompressed = false) {
      const x2 = numTo32bStr(this.x);
      if (isCompressed) {
        const prefix2 = this.y & _1n ? "03" : "02";
        return `${prefix2}${x2}`;
      } else {
        return `04${x2}${numTo32bStr(this.y)}`;
      }
    }
    toHexX() {
      return this.toHex(true).slice(2);
    }
    toRawX() {
      return this.toRawBytes(true).slice(1);
    }
    assertValidity() {
      const msg = "Point is not on elliptic curve";
      const { x: x2, y: y2 } = this;
      if (!isValidFieldElement(x2) || !isValidFieldElement(y2))
        throw new Error(msg);
      const left = mod(y2 * y2);
      const right = weistrass(x2);
      if (mod(left - right) !== _0n)
        throw new Error(msg);
    }
    equals(other) {
      return this.x === other.x && this.y === other.y;
    }
    negate() {
      return new Point(this.x, mod(-this.y));
    }
    double() {
      return JacobianPoint.fromAffine(this).double().toAffine();
    }
    add(other) {
      return JacobianPoint.fromAffine(this).add(JacobianPoint.fromAffine(other)).toAffine();
    }
    subtract(other) {
      return this.add(other.negate());
    }
    multiply(scalar) {
      return JacobianPoint.fromAffine(this).multiply(scalar, this).toAffine();
    }
    multiplyAndAddUnsafe(Q2, a2, b2) {
      const P2 = JacobianPoint.fromAffine(this);
      const aP = a2 === _0n || a2 === _1n || this !== Point.BASE ? P2.multiplyUnsafe(a2) : P2.multiply(a2);
      const bQ = JacobianPoint.fromAffine(Q2).multiplyUnsafe(b2);
      const sum = aP.add(bQ);
      return sum.equals(JacobianPoint.ZERO) ? void 0 : sum.toAffine();
    }
  }
  Point.BASE = new Point(CURVE.Gx, CURVE.Gy);
  Point.ZERO = new Point(_0n, _0n);
  function sliceDER(s2) {
    return Number.parseInt(s2[0], 16) >= 8 ? "00" + s2 : s2;
  }
  function parseDERInt(data) {
    if (data.length < 2 || data[0] !== 2) {
      throw new Error(`Invalid signature integer tag: ${bytesToHex(data)}`);
    }
    const len = data[1];
    const res = data.subarray(2, len + 2);
    if (!len || res.length !== len) {
      throw new Error(`Invalid signature integer: wrong length`);
    }
    if (res[0] === 0 && res[1] <= 127) {
      throw new Error("Invalid signature integer: trailing length");
    }
    return {
      data: bytesToNumber(res),
      left: data.subarray(len + 2)
    };
  }
  function parseDERSignature(data) {
    if (data.length < 2 || data[0] != 48) {
      throw new Error(`Invalid signature tag: ${bytesToHex(data)}`);
    }
    if (data[1] !== data.length - 2) {
      throw new Error("Invalid signature: incorrect length");
    }
    const { data: r, left: sBytes } = parseDERInt(data.subarray(2));
    const { data: s2, left: rBytesLeft } = parseDERInt(sBytes);
    if (rBytesLeft.length) {
      throw new Error(`Invalid signature: left bytes after parsing: ${bytesToHex(rBytesLeft)}`);
    }
    return {
      r,
      s: s2
    };
  }
  class Signature {
    constructor(r, s2) {
      this.r = r;
      this.s = s2;
      this.assertValidity();
    }
    static fromCompact(hex) {
      const arr = isUint8a(hex);
      const name = "Signature.fromCompact";
      if (typeof hex !== "string" && !arr)
        throw new TypeError(`${name}: Expected string or Uint8Array`);
      const str = arr ? bytesToHex(hex) : hex;
      if (str.length !== 128)
        throw new Error(`${name}: Expected 64-byte hex`);
      return new Signature(hexToNumber(str.slice(0, 64)), hexToNumber(str.slice(64, 128)));
    }
    static fromDER(hex) {
      const arr = isUint8a(hex);
      if (typeof hex !== "string" && !arr)
        throw new TypeError(`Signature.fromDER: Expected string or Uint8Array`);
      const { r, s: s2 } = parseDERSignature(arr ? hex : hexToBytes(hex));
      return new Signature(r, s2);
    }
    static fromHex(hex) {
      return this.fromDER(hex);
    }
    assertValidity() {
      const { r, s: s2 } = this;
      if (!isWithinCurveOrder(r))
        throw new Error("Invalid Signature: r must be 0 < r < n");
      if (!isWithinCurveOrder(s2))
        throw new Error("Invalid Signature: s must be 0 < s < n");
    }
    hasHighS() {
      const HALF = CURVE.n >> _1n;
      return this.s > HALF;
    }
    normalizeS() {
      return this.hasHighS() ? new Signature(this.r, CURVE.n - this.s) : this;
    }
    toDERRawBytes(isCompressed = false) {
      return hexToBytes(this.toDERHex(isCompressed));
    }
    toDERHex(isCompressed = false) {
      const sHex = sliceDER(numberToHexUnpadded(this.s));
      if (isCompressed)
        return sHex;
      const rHex = sliceDER(numberToHexUnpadded(this.r));
      const rLen = numberToHexUnpadded(rHex.length / 2);
      const sLen = numberToHexUnpadded(sHex.length / 2);
      const length = numberToHexUnpadded(rHex.length / 2 + sHex.length / 2 + 4);
      return `30${length}02${rLen}${rHex}02${sLen}${sHex}`;
    }
    toRawBytes() {
      return this.toDERRawBytes();
    }
    toHex() {
      return this.toDERHex();
    }
    toCompactRawBytes() {
      return hexToBytes(this.toCompactHex());
    }
    toCompactHex() {
      return numTo32bStr(this.r) + numTo32bStr(this.s);
    }
  }
  function concatBytes(...arrays) {
    if (!arrays.every(isUint8a))
      throw new Error("Uint8Array list expected");
    if (arrays.length === 1)
      return arrays[0];
    const length = arrays.reduce((a2, arr) => a2 + arr.length, 0);
    const result = new Uint8Array(length);
    for (let i2 = 0, pad = 0; i2 < arrays.length; i2++) {
      const arr = arrays[i2];
      result.set(arr, pad);
      pad += arr.length;
    }
    return result;
  }
  function isUint8a(bytes) {
    return bytes instanceof Uint8Array;
  }
  const hexes = Array.from({
    length: 256
  }, (v2, i2) => i2.toString(16).padStart(2, "0"));
  function bytesToHex(uint8a) {
    if (!(uint8a instanceof Uint8Array))
      throw new Error("Expected Uint8Array");
    let hex = "";
    for (let i2 = 0; i2 < uint8a.length; i2++) {
      hex += hexes[uint8a[i2]];
    }
    return hex;
  }
  function numTo32bStr(num) {
    if (num > POW_2_256)
      throw new Error("Expected number < 2^256");
    return num.toString(16).padStart(64, "0");
  }
  function numTo32b(num) {
    return hexToBytes(numTo32bStr(num));
  }
  function numberToHexUnpadded(num) {
    const hex = num.toString(16);
    return hex.length & 1 ? `0${hex}` : hex;
  }
  function hexToNumber(hex) {
    if (typeof hex !== "string") {
      throw new TypeError("hexToNumber: expected string, got " + typeof hex);
    }
    return BigInt(`0x${hex}`);
  }
  function hexToBytes(hex) {
    if (typeof hex !== "string") {
      throw new TypeError("hexToBytes: expected string, got " + typeof hex);
    }
    if (hex.length % 2)
      throw new Error("hexToBytes: received invalid unpadded hex" + hex.length);
    const array = new Uint8Array(hex.length / 2);
    for (let i2 = 0; i2 < array.length; i2++) {
      const j2 = i2 * 2;
      const hexByte = hex.slice(j2, j2 + 2);
      const byte = Number.parseInt(hexByte, 16);
      if (Number.isNaN(byte) || byte < 0)
        throw new Error("Invalid byte sequence");
      array[i2] = byte;
    }
    return array;
  }
  function bytesToNumber(bytes) {
    return hexToNumber(bytesToHex(bytes));
  }
  function ensureBytes(hex) {
    return hex instanceof Uint8Array ? Uint8Array.from(hex) : hexToBytes(hex);
  }
  function normalizeScalar(num) {
    if (typeof num === "number" && Number.isSafeInteger(num) && num > 0)
      return BigInt(num);
    if (typeof num === "bigint" && isWithinCurveOrder(num))
      return num;
    throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n");
  }
  function mod(a2, b2 = CURVE.P) {
    const result = a2 % b2;
    return result >= _0n ? result : b2 + result;
  }
  function pow2(x2, power) {
    const { P: P2 } = CURVE;
    let res = x2;
    while (power-- > _0n) {
      res *= res;
      res %= P2;
    }
    return res;
  }
  function sqrtMod(x2) {
    const { P: P2 } = CURVE;
    const _6n = BigInt(6);
    const _11n = BigInt(11);
    const _22n = BigInt(22);
    const _23n = BigInt(23);
    const _44n = BigInt(44);
    const _88n = BigInt(88);
    const b2 = x2 * x2 * x2 % P2;
    const b3 = b2 * b2 * x2 % P2;
    const b6 = pow2(b3, _3n) * b3 % P2;
    const b9 = pow2(b6, _3n) * b3 % P2;
    const b11 = pow2(b9, _2n) * b2 % P2;
    const b22 = pow2(b11, _11n) * b11 % P2;
    const b44 = pow2(b22, _22n) * b22 % P2;
    const b88 = pow2(b44, _44n) * b44 % P2;
    const b176 = pow2(b88, _88n) * b88 % P2;
    const b220 = pow2(b176, _44n) * b44 % P2;
    const b223 = pow2(b220, _3n) * b3 % P2;
    const t1 = pow2(b223, _23n) * b22 % P2;
    const t2 = pow2(t1, _6n) * b2 % P2;
    return pow2(t2, _2n);
  }
  function invert(number, modulo = CURVE.P) {
    if (number === _0n || modulo <= _0n) {
      throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
    }
    let a2 = mod(number, modulo);
    let b2 = modulo;
    let x2 = _0n, u2 = _1n;
    while (a2 !== _0n) {
      const q2 = b2 / a2;
      const r = b2 % a2;
      const m2 = x2 - u2 * q2;
      b2 = a2, a2 = r, x2 = u2, u2 = m2;
    }
    const gcd = b2;
    if (gcd !== _1n)
      throw new Error("invert: does not exist");
    return mod(x2, modulo);
  }
  function invertBatch(nums, p2 = CURVE.P) {
    const scratch = new Array(nums.length);
    const lastMultiplied = nums.reduce((acc, num, i2) => {
      if (num === _0n)
        return acc;
      scratch[i2] = acc;
      return mod(acc * num, p2);
    }, _1n);
    const inverted = invert(lastMultiplied, p2);
    nums.reduceRight((acc, num, i2) => {
      if (num === _0n)
        return acc;
      scratch[i2] = mod(acc * scratch[i2], p2);
      return mod(acc * num, p2);
    }, inverted);
    return scratch;
  }
  const divNearest = (a2, b2) => (a2 + b2 / _2n) / b2;
  const POW_2_128 = _2n ** BigInt(128);
  function splitScalarEndo(k2) {
    const { n } = CURVE;
    const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
    const b1 = -_1n * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
    const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
    const b2 = a1;
    const c1 = divNearest(b2 * k2, n);
    const c2 = divNearest(-b1 * k2, n);
    let k1 = mod(k2 - c1 * a1 - c2 * a2, n);
    let k22 = mod(-c1 * b1 - c2 * b2, n);
    const k1neg = k1 > POW_2_128;
    const k2neg = k22 > POW_2_128;
    if (k1neg)
      k1 = n - k1;
    if (k2neg)
      k22 = n - k22;
    if (k1 > POW_2_128 || k22 > POW_2_128) {
      throw new Error("splitScalarEndo: Endomorphism failed, k=" + k2);
    }
    return {
      k1neg,
      k1,
      k2neg,
      k2: k22
    };
  }
  function truncateHash(hash) {
    const { n } = CURVE;
    const byteLength = hash.length;
    const delta = byteLength * 8 - 256;
    let h2 = bytesToNumber(hash);
    if (delta > 0)
      h2 = h2 >> BigInt(delta);
    if (h2 >= n)
      h2 -= n;
    return h2;
  }
  class HmacDrbg {
    constructor() {
      this.v = new Uint8Array(32).fill(1);
      this.k = new Uint8Array(32).fill(0);
      this.counter = 0;
    }
    hmac(...values) {
      return utils.hmacSha256(this.k, ...values);
    }
    hmacSync(...values) {
      throw new Error("utils.hmacSha256Sync is undefined, you need to set it");
    }
    incr() {
      if (this.counter >= 1e3) {
        throw new Error("Tried 1,000 k values for sign(), all were invalid");
      }
      this.counter += 1;
    }
    async reseed(seed = new Uint8Array()) {
      this.k = await this.hmac(this.v, Uint8Array.from([
        0
      ]), seed);
      this.v = await this.hmac(this.v);
      if (seed.length === 0)
        return;
      this.k = await this.hmac(this.v, Uint8Array.from([
        1
      ]), seed);
      this.v = await this.hmac(this.v);
    }
    reseedSync(seed = new Uint8Array()) {
      this.k = this.hmacSync(this.v, Uint8Array.from([
        0
      ]), seed);
      this.v = this.hmacSync(this.v);
      if (seed.length === 0)
        return;
      this.k = this.hmacSync(this.v, Uint8Array.from([
        1
      ]), seed);
      this.v = this.hmacSync(this.v);
    }
    async generate() {
      this.incr();
      this.v = await this.hmac(this.v);
      return this.v;
    }
    generateSync() {
      this.incr();
      this.v = this.hmacSync(this.v);
      return this.v;
    }
  }
  function isWithinCurveOrder(num) {
    return _0n < num && num < CURVE.n;
  }
  function isValidFieldElement(num) {
    return _0n < num && num < CURVE.P;
  }
  function kmdToSig(kBytes, m2, d2) {
    const k2 = bytesToNumber(kBytes);
    if (!isWithinCurveOrder(k2))
      return;
    const { n } = CURVE;
    const q2 = Point.BASE.multiply(k2);
    const r = mod(q2.x, n);
    if (r === _0n)
      return;
    const s2 = mod(invert(k2, n) * mod(m2 + d2 * r, n), n);
    if (s2 === _0n)
      return;
    const sig = new Signature(r, s2);
    const recovery = (q2.x === sig.r ? 0 : 2) | Number(q2.y & _1n);
    return {
      sig,
      recovery
    };
  }
  function normalizePrivateKey(key) {
    let num;
    if (typeof key === "bigint") {
      num = key;
    } else if (typeof key === "number" && Number.isSafeInteger(key) && key > 0) {
      num = BigInt(key);
    } else if (typeof key === "string") {
      if (key.length !== 64)
        throw new Error("Expected 32 bytes of private key");
      num = hexToNumber(key);
    } else if (isUint8a(key)) {
      if (key.length !== 32)
        throw new Error("Expected 32 bytes of private key");
      num = bytesToNumber(key);
    } else {
      throw new TypeError("Expected valid private key");
    }
    if (!isWithinCurveOrder(num))
      throw new Error("Expected private key: 0 < key < n");
    return num;
  }
  function normalizePublicKey(publicKey) {
    if (publicKey instanceof Point) {
      publicKey.assertValidity();
      return publicKey;
    } else {
      return Point.fromHex(publicKey);
    }
  }
  function normalizeSignature(signature) {
    if (signature instanceof Signature) {
      signature.assertValidity();
      return signature;
    }
    try {
      return Signature.fromDER(signature);
    } catch (error) {
      return Signature.fromCompact(signature);
    }
  }
  function getPublicKey(privateKey, isCompressed = false) {
    return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
  }
  function recoverPublicKey(msgHash, signature, recovery, isCompressed = false) {
    return Point.fromSignature(msgHash, signature, recovery).toRawBytes(isCompressed);
  }
  function isPub(item) {
    const arr = isUint8a(item);
    const str = typeof item === "string";
    const len = (arr || str) && item.length;
    if (arr)
      return len === 33 || len === 65;
    if (str)
      return len === 66 || len === 130;
    if (item instanceof Point)
      return true;
    return false;
  }
  function getSharedSecret(privateA, publicB, isCompressed = false) {
    if (isPub(privateA))
      throw new TypeError("getSharedSecret: first arg must be private key");
    if (!isPub(publicB))
      throw new TypeError("getSharedSecret: second arg must be public key");
    const b2 = normalizePublicKey(publicB);
    b2.assertValidity();
    return b2.multiply(normalizePrivateKey(privateA)).toRawBytes(isCompressed);
  }
  function bits2int(bytes) {
    const slice = bytes.length > 32 ? bytes.slice(0, 32) : bytes;
    return bytesToNumber(slice);
  }
  function bits2octets(bytes) {
    const z1 = bits2int(bytes);
    const z2 = mod(z1, CURVE.n);
    return int2octets(z2 < _0n ? z1 : z2);
  }
  function int2octets(num) {
    if (typeof num !== "bigint")
      throw new Error("Expected bigint");
    const hex = numTo32bStr(num);
    return hexToBytes(hex);
  }
  function initSigArgs(msgHash, privateKey, extraEntropy) {
    if (msgHash == null)
      throw new Error(`sign: expected valid message hash, not "${msgHash}"`);
    const h1 = ensureBytes(msgHash);
    const d2 = normalizePrivateKey(privateKey);
    const seedArgs = [
      int2octets(d2),
      bits2octets(h1)
    ];
    if (extraEntropy != null) {
      if (extraEntropy === true)
        extraEntropy = utils.randomBytes(32);
      const e = ensureBytes(extraEntropy);
      if (e.length !== 32)
        throw new Error("sign: Expected 32 bytes of extra data");
      seedArgs.push(e);
    }
    const seed = concatBytes(...seedArgs);
    const m2 = bits2int(h1);
    return {
      seed,
      m: m2,
      d: d2
    };
  }
  function finalizeSig(recSig, opts) {
    let { sig, recovery } = recSig;
    const { canonical, der, recovered } = Object.assign({
      canonical: true,
      der: true
    }, opts);
    if (canonical && sig.hasHighS()) {
      sig = sig.normalizeS();
      recovery ^= 1;
    }
    const hashed = der ? sig.toDERRawBytes() : sig.toCompactRawBytes();
    return recovered ? [
      hashed,
      recovery
    ] : hashed;
  }
  async function sign(msgHash, privKey, opts = {}) {
    const { seed, m: m2, d: d2 } = initSigArgs(msgHash, privKey, opts.extraEntropy);
    let sig;
    const drbg = new HmacDrbg();
    await drbg.reseed(seed);
    while (!(sig = kmdToSig(await drbg.generate(), m2, d2)))
      await drbg.reseed();
    return finalizeSig(sig, opts);
  }
  function signSync(msgHash, privKey, opts = {}) {
    const { seed, m: m2, d: d2 } = initSigArgs(msgHash, privKey, opts.extraEntropy);
    let sig;
    const drbg = new HmacDrbg();
    drbg.reseedSync(seed);
    while (!(sig = kmdToSig(drbg.generateSync(), m2, d2)))
      drbg.reseedSync();
    return finalizeSig(sig, opts);
  }
  const vopts = {
    strict: true
  };
  function verify(signature, msgHash, publicKey, opts = vopts) {
    let sig;
    try {
      sig = normalizeSignature(signature);
      msgHash = ensureBytes(msgHash);
    } catch (error) {
      return false;
    }
    const { r, s: s2 } = sig;
    if (opts.strict && sig.hasHighS())
      return false;
    const h2 = truncateHash(msgHash);
    let P2;
    try {
      P2 = normalizePublicKey(publicKey);
    } catch (error) {
      return false;
    }
    const { n } = CURVE;
    const sinv = invert(s2, n);
    const u1 = mod(h2 * sinv, n);
    const u2 = mod(r * sinv, n);
    const R2 = Point.BASE.multiplyAndAddUnsafe(P2, u1, u2);
    if (!R2)
      return false;
    const v2 = mod(R2.x, n);
    return v2 === r;
  }
  Point.BASE._setWindowSize(8);
  const crypto$1 = {
    node: __viteBrowserExternal,
    web: typeof self === "object" && "crypto" in self ? self.crypto : void 0
  };
  const TAGGED_HASH_PREFIXES = {};
  const utils = {
    isValidPrivateKey(privateKey) {
      try {
        normalizePrivateKey(privateKey);
        return true;
      } catch (error) {
        return false;
      }
    },
    privateAdd: (privateKey, tweak) => {
      const p2 = normalizePrivateKey(privateKey);
      const t = normalizePrivateKey(tweak);
      return numTo32b(mod(p2 + t, CURVE.n));
    },
    privateNegate: (privateKey) => {
      const p2 = normalizePrivateKey(privateKey);
      return numTo32b(CURVE.n - p2);
    },
    pointAddScalar: (p2, tweak, isCompressed) => {
      const P2 = Point.fromHex(p2);
      const t = normalizePrivateKey(tweak);
      const Q2 = Point.BASE.multiplyAndAddUnsafe(P2, t, _1n);
      if (!Q2)
        throw new Error("Tweaked point at infinity");
      return Q2.toRawBytes(isCompressed);
    },
    pointMultiply: (p2, tweak, isCompressed) => {
      const P2 = Point.fromHex(p2);
      const t = bytesToNumber(ensureBytes(tweak));
      return P2.multiply(t).toRawBytes(isCompressed);
    },
    hashToPrivateKey: (hash) => {
      hash = ensureBytes(hash);
      if (hash.length < 40 || hash.length > 1024)
        throw new Error("Expected 40-1024 bytes of private key as per FIPS 186");
      const num = mod(bytesToNumber(hash), CURVE.n - _1n) + _1n;
      return numTo32b(num);
    },
    randomBytes: (bytesLength = 32) => {
      if (crypto$1.web) {
        return crypto$1.web.getRandomValues(new Uint8Array(bytesLength));
      } else if (crypto$1.node) {
        const { randomBytes } = crypto$1.node;
        return Uint8Array.from(randomBytes(bytesLength));
      } else {
        throw new Error("The environment doesn't have randomBytes function");
      }
    },
    randomPrivateKey: () => {
      return utils.hashToPrivateKey(utils.randomBytes(40));
    },
    bytesToHex,
    hexToBytes,
    concatBytes,
    mod,
    invert,
    sha256: async (...messages) => {
      if (crypto$1.web) {
        const buffer = await crypto$1.web.subtle.digest("SHA-256", concatBytes(...messages));
        return new Uint8Array(buffer);
      } else if (crypto$1.node) {
        const { createHash } = crypto$1.node;
        const hash = createHash("sha256");
        messages.forEach((m2) => hash.update(m2));
        return Uint8Array.from(hash.digest());
      } else {
        throw new Error("The environment doesn't have sha256 function");
      }
    },
    hmacSha256: async (key, ...messages) => {
      if (crypto$1.web) {
        const ckey = await crypto$1.web.subtle.importKey("raw", key, {
          name: "HMAC",
          hash: {
            name: "SHA-256"
          }
        }, false, [
          "sign"
        ]);
        const message = concatBytes(...messages);
        const buffer = await crypto$1.web.subtle.sign("HMAC", ckey, message);
        return new Uint8Array(buffer);
      } else if (crypto$1.node) {
        const { createHmac } = crypto$1.node;
        const hash = createHmac("sha256", key);
        messages.forEach((m2) => hash.update(m2));
        return Uint8Array.from(hash.digest());
      } else {
        throw new Error("The environment doesn't have hmac-sha256 function");
      }
    },
    sha256Sync: void 0,
    hmacSha256Sync: void 0,
    taggedHash: async (tag, ...messages) => {
      let tagP = TAGGED_HASH_PREFIXES[tag];
      if (tagP === void 0) {
        const tagH = await utils.sha256(Uint8Array.from(tag, (c2) => c2.charCodeAt(0)));
        tagP = concatBytes(tagH, tagH);
        TAGGED_HASH_PREFIXES[tag] = tagP;
      }
      return utils.sha256(tagP, ...messages);
    },
    taggedHashSync: (tag, ...messages) => {
      throw new Error("utils.sha256Sync is undefined, you need to set it");
    },
    precompute(windowSize = 8, point = Point.BASE) {
      const cached = point === Point.BASE ? point : new Point(point.x, point.y);
      cached._setWindowSize(windowSize);
      cached.multiply(_3n);
      return cached;
    }
  };
  var a$2 = ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
    get: (r, t) => (typeof require < "u" ? require : r)[t]
  }) : e)(function(e) {
    if (typeof require < "u")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported');
  });
  var y$7 = class y {
    constructor(r) {
      __publicField(this, "webCrypto");
      this.webCrypto = r;
    }
    async encrypt(r, t, i2, n) {
      let o, p2;
      if (r === "aes-128-cbc")
        o = "AES-CBC", p2 = 128;
      else if (r === "aes-256-cbc")
        o = "AES-CBC", p2 = 256;
      else
        throw new Error(`Unsupported cipher algorithm "${r}"`);
      let C2 = await this.webCrypto.subtle.importKey("raw", t, {
        name: o,
        length: p2
      }, false, [
        "encrypt"
      ]), l2 = await this.webCrypto.subtle.encrypt({
        name: o,
        iv: i2
      }, C2, n);
      return new Uint8Array(l2);
    }
    async decrypt(r, t, i2, n) {
      let o, p2;
      if (r === "aes-128-cbc")
        o = "AES-CBC", p2 = 128;
      else if (r === "aes-256-cbc")
        o = "AES-CBC", p2 = 256;
      else
        throw new Error(`Unsupported cipher algorithm "${r}"`);
      let C2 = await this.webCrypto.subtle.importKey("raw", t, {
        name: o,
        length: p2
      }, false, [
        "decrypt"
      ]), l2 = await this.webCrypto.subtle.decrypt({
        name: o,
        iv: i2
      }, C2, n);
      return new Uint8Array(l2);
    }
  };
  var s = class {
    constructor(r, t) {
      __publicField(this, "createCipher");
      __publicField(this, "createDecipher");
      this.createCipher = r, this.createDecipher = t;
    }
    async encrypt(r, t, i2, n) {
      if (r !== "aes-128-cbc" && r !== "aes-256-cbc")
        throw new Error(`Unsupported cipher algorithm "${r}"`);
      let o = this.createCipher(r, t, i2), p2 = U$3([
        o.update(n),
        o.final()
      ]);
      return Promise.resolve(p2);
    }
    async decrypt(r, t, i2, n) {
      if (r !== "aes-128-cbc" && r !== "aes-256-cbc")
        throw new Error(`Unsupported cipher algorithm "${r}"`);
      let o = this.createDecipher(r, t, i2), p2 = U$3([
        o.update(n),
        o.final()
      ]);
      return Promise.resolve(p2);
    }
  };
  function b$3() {
    return typeof crypto < "u" && typeof crypto.subtle < "u";
  }
  var f$4 = 'Crypto lib not found. Either the WebCrypto "crypto.subtle" or Node.js "crypto" module must be available.';
  async function u$2() {
    if (b$3())
      return {
        lib: crypto,
        name: "webCrypto"
      };
    try {
      return {
        lib: a$2("crypto"),
        name: "nodeCrypto"
      };
    } catch {
      throw new Error(f$4);
    }
  }
  async function c$2() {
    let e = await u$2();
    return e.name === "webCrypto" ? new y$7(e.lib) : new s(e.lib.createCipheriv, e.lib.createDecipheriv);
  }
  async function g$3(e, r, t) {
    return (await c$2()).encrypt("aes-256-cbc", r, e, t);
  }
  async function B$2(e, r, t) {
    return (await c$2()).decrypt("aes-256-cbc", r, e, t);
  }
  class HMAC extends Hash {
    constructor(hash, _key) {
      super();
      this.finished = false;
      this.destroyed = false;
      assert.hash(hash);
      const key = toBytes(_key);
      this.iHash = hash.create();
      if (!(this.iHash instanceof Hash))
        throw new TypeError("Expected instance of class which extends utils.Hash");
      const blockLen = this.blockLen = this.iHash.blockLen;
      this.outputLen = this.iHash.outputLen;
      const pad = new Uint8Array(blockLen);
      pad.set(key.length > this.iHash.blockLen ? hash.create().update(key).digest() : key);
      for (let i2 = 0; i2 < pad.length; i2++)
        pad[i2] ^= 54;
      this.iHash.update(pad);
      this.oHash = hash.create();
      for (let i2 = 0; i2 < pad.length; i2++)
        pad[i2] ^= 54 ^ 92;
      this.oHash.update(pad);
      pad.fill(0);
    }
    update(buf) {
      assert.exists(this);
      this.iHash.update(buf);
      return this;
    }
    digestInto(out) {
      assert.exists(this);
      assert.bytes(out, this.outputLen);
      this.finished = true;
      this.iHash.digestInto(out);
      this.oHash.update(out);
      this.oHash.digestInto(out);
      this.destroy();
    }
    digest() {
      const out = new Uint8Array(this.oHash.outputLen);
      this.digestInto(out);
      return out;
    }
    _cloneInto(to) {
      to || (to = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
      to = to;
      to.finished = finished;
      to.destroyed = destroyed;
      to.blockLen = blockLen;
      to.outputLen = outputLen;
      to.oHash = oHash._cloneInto(to.oHash);
      to.iHash = iHash._cloneInto(to.iHash);
      return to;
    }
    destroy() {
      this.destroyed = true;
      this.oHash.destroy();
      this.iHash.destroy();
    }
  }
  const hmac = (hash, key, message) => new HMAC(hash, key).update(message).digest();
  hmac.create = (hash, key) => new HMAC(hash, key);
  function y$6(t, ...o) {
    let r = hmac.create(sha256, lr(t));
    for (let a2 of o)
      r.update(lr(a2));
    return Uint8Array.from(r.digest());
  }
  function Ae(t) {
    return (Math.floor(t / 16) + 1) * 16;
  }
  function Ke$2(t) {
    return Math.ceil(t / 3) * 4;
  }
  function He$1(t) {
    let e = {
      iv: "",
      ephemeralPK: "",
      mac: "",
      cipherText: "",
      wasString: !!t.wasString
    };
    t.cipherTextEncoding === "base64" && (e.cipherTextEncoding = "base64");
    let r = 32, n = 66, o = 64;
    return {
      payloadValuesLength: r + n + o,
      payloadShell: JSON.stringify(e)
    };
  }
  function ke(t) {
    let e = {
      signature: "",
      publicKey: "",
      cipherText: t
    };
    return {
      signedPayloadValuesLength: 144 + 66,
      signedPayloadShell: JSON.stringify(e)
    };
  }
  function Kt(t) {
    let { payloadShell: e, payloadValuesLength: r } = He$1(t), n = Ae(t.contentLength), o;
    if (!t.cipherTextEncoding || t.cipherTextEncoding === "hex")
      o = n * 2;
    else if (t.cipherTextEncoding === "base64")
      o = Ke$2(n);
    else
      throw new Error(`Unexpected cipherTextEncoding "${t.cipherTextEncoding}"`);
    if (t.sign) {
      let { signedPayloadShell: i2, signedPayloadValuesLength: c2 } = ke(e);
      return i2.length + c2 + r + o;
    } else
      return e.length + r + o;
  }
  function E$3(t) {
    return typeof t == "string" ? ripemd160(t) : ripemd160.create().update(lr(t)).digest();
  }
  var L$3 = class L {
    digest(e) {
      return E$3(e);
    }
  };
  function Ce$1() {
    return new L$3();
  }
  function P$4(t) {
    return Ce$1().digest(t);
  }
  function w$5(t) {
    let e = y$8(t);
    return {
      encryptionKey: e.slice(0, 32),
      hmacKey: e.slice(32)
    };
  }
  function $$3(t = 32) {
    return utils.randomBytes(t);
  }
  function b$2(t, e) {
    let r = new Uint8Array([
      e
    ]), n = new Uint8Array(25), o = new Uint8Array(21);
    o[0] = e, o.set(t, 1);
    let i2 = f$5(o), s2 = f$5(i2).slice(0, 4);
    return n.set(r, 0), n.set(t, 1), n.set(s2, t.length + 1), Yr(n);
  }
  var je$2 = {
    messagePrefix: `Bitcoin Signed Message:
`,
    bech32: "bc",
    bip32: {
      public: 76067358,
      private: 76066276
    },
    pubKeyHash: 0,
    scriptHash: 5,
    wif: 128
  }, Re = {
    messagePrefix: `Bitcoin Signed Message:
`,
    bech32: "tb",
    bip32: {
      public: 70617039,
      private: 70615956
    },
    pubKeyHash: 111,
    scriptHash: 196,
    wif: 239
  }, D$2 = {
    bitcoin: je$2,
    testnet: Re
  };
  var X$1 = ((o) => (o[o.mainnetP2PKH = 22] = "mainnetP2PKH", o[o.mainnetP2SH = 20] = "mainnetP2SH", o[o.testnetP2PKH = 26] = "testnetP2PKH", o[o.testnetP2SH = 21] = "testnetP2SH", o))(X$1 || {}), y$5 = "0123456789ABCDEFGHJKMNPQRSTVWXYZ", R$4 = /* @__PURE__ */ new Map();
  [
    ...y$5
  ].forEach((t, e) => R$4.set(t, e));
  var H$4 = "0123456789abcdef", j$1 = /* @__PURE__ */ new Map();
  [
    ...H$4
  ].forEach((t, e) => j$1.set(t, e));
  function V$1(t, e) {
    let r = Y$1(t, e), n = Me$1(U$3([
      e,
      r
    ]));
    return `S${y$5[t]}${n}`;
  }
  function Me$1(t) {
    let e = p$4(t), r = [], n = 0;
    for (let s2 = e.length - 1; s2 >= 0; s2--)
      if (n < 4) {
        let p2 = j$1.get(e[s2]) >> n, a2 = 0;
        s2 !== 0 && (a2 = j$1.get(e[s2 - 1]));
        let f2 = 1 + n, d2 = a2 % (1 << f2) << 5 - f2, u2 = y$5[p2 + d2];
        n = f2, r.unshift(u2);
      } else
        n = 0;
    let o = 0;
    for (let s2 = 0; s2 < r.length && r[s2] === "0"; s2++)
      o++;
    r = r.slice(o);
    let i2 = /^\u0000*/.exec(new TextDecoder().decode(t)), c2 = i2 ? i2[0].length : 0;
    for (let s2 = 0; s2 < c2; s2++)
      r.unshift(y$5[0]);
    return r.join("");
  }
  function Y$1(t, e) {
    let r = f$5(U$3([
      Uint8Array.of(t),
      e
    ]));
    return f$5(r).slice(0, 4);
  }
  function ee$2(t) {
    if (t.length <= 5)
      throw new Error("Invalid c32 address: invalid length");
    if (t[0] !== "S")
      throw new Error('Invalid c32 address: must start with "S"');
    return We$3(t.slice(1));
  }
  function We$3(t) {
    t = te$2(t);
    let e = $e$2(t.slice(1)), r = t[0], n = R$4.get(r), o = e.slice(-4), i2 = Y$1(n, e.slice(0, -4));
    for (let c2 = 0; c2 < o.length; c2++)
      if (o[c2] !== i2[c2])
        throw new Error("Invalid c32check string: checksum mismatch");
    return [
      n,
      e.slice(0, -4)
    ];
  }
  function te$2(t) {
    return t.toUpperCase().replace(/O/g, "0").replace(/L|I/g, "1");
  }
  function $e$2(t) {
    if (t = te$2(t), !RegExp(`^[${y$5}]*$`).exec(t))
      throw new Error("Not a c32-encoded string");
    let e = RegExp(`^${y$5[0]}*`).exec(t), r = e ? e[0].length : 0, n = [], o = 0, i2 = 0;
    for (let p2 = t.length - 1; p2 >= 0; p2--) {
      i2 === 4 && (n.unshift(H$4[o]), i2 = 0, o = 0);
      let f2 = (R$4.get(t[p2]) << i2) + o, d2 = H$4[f2 % 16];
      if (i2 += 1, o = f2 >> 4, o > 1 << i2)
        throw new Error("Panic error in decoding.");
      n.unshift(d2);
    }
    n.unshift(H$4[o]), n.length % 2 === 1 && n.unshift("0");
    let c2 = 0;
    for (let p2 = 0; p2 < n.length && n[p2] === "0"; p2++)
      c2++;
    n = n.slice(c2 - c2 % 2);
    let s2 = n.join("");
    for (let p2 = 0; p2 < r; p2++)
      s2 = `00${s2}`;
    return l$4(s2);
  }
  function Xt(t) {
    try {
      return ee$2(t), true;
    } catch {
      return false;
    }
  }
  function qe$1(t, e = 22) {
    return V$1(e, m$3(Ir$1(t)));
  }
  function ar(t) {
    let e = getPublicKey(t, true), r = f$5(e), n = P$4(r);
    return b$2(n, D$2.bitcoin.pubKeyHash);
  }
  function pr(t) {
    let e = typeof t == "string" ? t : p$4(t), r = f$5(l$4(e)), n = P$4(r);
    return b$2(n, D$2.bitcoin.pubKeyHash);
  }
  function m$3(t) {
    let e = f$5(t);
    return P$4(e);
  }
  async function ce$2(t) {
    let { contents: e, privateKey: r } = t, n = e instanceof ArrayBuffer ? pr$1(e) : typeof e == "string" ? dr(e) : e, o = p$4(getPublicKey(r, true)), i2 = f$5(n), c2 = await sign(i2, r, {
      canonical: false
    });
    return {
      signature: p$4(c2),
      publicKey: o
    };
  }
  function xr(t, e = false) {
    let { contents: r, publicKey: n, signature: o } = t, i2 = r instanceof ArrayBuffer ? pr$1(r) : typeof r == "string" ? dr(r) : r, c2 = f$5(i2);
    return verify(o, c2, n, {
      strict: e
    });
  }
  async function ae$2(t) {
    let { publicKey: e, content: r, cipherTextEncoding: n = "hex", wasString: o } = t, i2 = utils.randomPrivateKey(), c2 = getPublicKey(i2, true), s2 = getSharedSecret(i2, e, true);
    s2 = s2.slice(1);
    let p2 = w$5(s2), a2 = $$3(16), f2 = await g$3(a2, p2.encryptionKey, r), d2 = U$3([
      a2,
      c2,
      f2
    ]), u2 = y$6(p2.hmacKey, d2), h2;
    if (!n || n === "hex")
      h2 = p$4(f2);
    else if (n === "base64")
      h2 = Pr(f2);
    else
      throw new Error(`Unexpected cipherTextEncoding "${n}"`);
    let T2 = {
      iv: p$4(a2),
      ephemeralPK: p$4(c2),
      cipherText: h2,
      mac: p$4(u2),
      wasString: o
    };
    return n && n !== "hex" && (T2.cipherTextEncoding = n), T2;
  }
  function pt$1(t, e) {
    if (t.length !== e.length)
      return false;
    let r = 0;
    for (let n = 0; n < t.length; n++)
      r |= t[n] ^ e[n];
    return r === 0;
  }
  async function pe$1(t) {
    let { privateKey: e, cipherObject: r } = t;
    if (!r.ephemeralPK)
      throw Error("No ephemeralPK found in cipher object");
    let n = r.ephemeralPK, o = getSharedSecret(e, n, true);
    o = o.slice(1);
    let i2 = w$5(o), c2 = l$4(r.iv), s2;
    if (!r.cipherTextEncoding || r.cipherTextEncoding === "hex")
      s2 = l$4(r.cipherText);
    else if (r.cipherTextEncoding === "base64")
      s2 = Gr(r.cipherText);
    else
      throw new Error(`Unexpected cipherTextEncoding "${r.cipherText}"`);
    let p2 = U$3([
      c2,
      l$4(n),
      s2
    ]), a2 = y$6(i2.hmacKey, p2), f2 = l$4(r.mac);
    if (!pt$1(f2, a2))
      throw new Error("Decryption failed: failure in MAC check");
    let d2 = await B$2(c2, i2.encryptionKey, s2);
    return r.wasString ? new TextDecoder().decode(d2) : d2;
  }
  function Ir(t, e) {
    if (!e.privateKey)
      throw new Error("Private key is required for decryption.");
    try {
      let r = JSON.parse(t);
      return pe$1({
        privateKey: e.privateKey,
        cipherObject: r
      });
    } catch (r) {
      throw r instanceof SyntaxError ? new Error("Failed to parse encrypted content JSON. The content may not be encrypted. If using getFile, try passing { decrypt: false }.") : r;
    }
  }
  async function Rr(t, e) {
    let { publicKey: r, privateKey: n, wasString: o } = e, { cipherTextEncoding: i2, sign: c2 } = e;
    if (!n && !r)
      throw new Error("Either public key or private key must be supplied for encryption.");
    if (!r && n && (r = p$4(getPublicKey(n, true))), typeof o != "boolean" && (o = typeof t == "string"), !r)
      throw new Error("micro-stacks/crypto - no public key found to encrypt content");
    let s2 = typeof t == "string" ? dr(t) : t, p2 = await ae$2({
      publicKey: r,
      content: s2,
      wasString: o,
      cipherTextEncoding: i2
    });
    if (!c2)
      return JSON.stringify(p2);
    if (typeof c2 == "string" && (n = c2), !n)
      throw new Error("micro-stacks/crypto - need private key to sign contents");
    let a2 = await ce$2({
      contents: JSON.stringify(p2),
      privateKey: n
    });
    return JSON.stringify({
      ...a2,
      cipherText: JSON.stringify(p2)
    });
  }
  function ht$1(t) {
    let r = t.length, n = r % 4;
    if (!n)
      return t;
    let o = 4 - n, i2 = r + o;
    return t.padEnd(i2, "=");
  }
  function ut$1(t) {
    return t instanceof Uint8Array ? ge$3(Pr(t)) : ge$3(Pr(new TextEncoder().encode(t)));
  }
  function yt$1(t) {
    let e = Gr(mt(t));
    return new TextDecoder().decode(e);
  }
  function mt(t) {
    let e;
    return t instanceof Uint8Array ? e = new TextDecoder().decode(t) : e = t, ht$1(e).replace(/\-/g, "+").replace(/_/g, "/");
  }
  function ge$3(t) {
    return t.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  var g$2 = {
    encode: ut$1,
    decode: yt$1
  };
  var v$1 = 128, ue$1 = 0, xt = 32, St$1 = 16, bt = 2, ye$2 = St$1 | xt | ue$1 << 6, I$4 = bt | ue$1 << 6;
  function me$1(t) {
    return typeof t == "string" ? Gr(t) : t;
  }
  function _$3(t) {
    let e = me$1(t), r = 32, n = r + 1, o = e.length, i2 = 0;
    if (e[i2++] !== ye$2)
      throw new Error('Could not find expected "seq"');
    let c2 = e[i2++];
    if (c2 === (v$1 | 1) && (c2 = e[i2++]), o - i2 < c2)
      throw new Error('"seq" specified length of "' + c2 + '", only "' + (o - i2) + '" remaining');
    if (e[i2++] !== I$4)
      throw new Error('Could not find expected "int" for "r"');
    let s2 = e[i2++];
    if (o - i2 - 2 < s2)
      throw new Error('"r" specified length of "' + s2 + '", only "' + (o - i2 - 2) + '" available');
    if (n < s2)
      throw new Error('"r" specified length of "' + s2 + '", max of "' + n + '" is acceptable');
    let p2 = i2;
    if (i2 += s2, e[i2++] !== I$4)
      throw new Error('Could not find expected "int" for "s"');
    let a2 = e[i2++];
    if (o - i2 !== a2)
      throw new Error('"s" specified length of "' + a2 + '", expected "' + (o - i2) + '"');
    if (n < a2)
      throw new Error('"s" specified length of "' + a2 + '", max of "' + n + '" is acceptable');
    let f2 = i2;
    if (i2 += a2, i2 !== o)
      throw new Error('Expected to consume entire buffer, but "' + (o - i2) + '" bytes remain');
    let d2 = r - s2, u2 = r - a2, h2 = new Uint8Array(d2 + s2 + u2 + a2);
    for (i2 = 0; i2 < d2; ++i2)
      h2[i2] = 0;
    h2.set(e.slice(p2 + Math.max(-d2, 0), p2 + s2), i2), i2 = r;
    for (let T2 = i2; i2 < T2 + u2; ++i2)
      h2[i2] = 0;
    return h2.set(e.slice(f2 + Math.max(-u2, 0), f2 + a2), i2), jr(h2).replace(/=/g, "");
  }
  function de$1(t, e, r) {
    let n = 0;
    for (; e + n < r && t[e + n] === 0; )
      ++n;
    return t[e + n] >= v$1 && --n, n;
  }
  function M$4(t) {
    let e = me$1(t), r = 32, n = de$1(e, 0, r), o = de$1(e, r, e.length), i2 = r - n, c2 = r - o, s2 = 1 + 1 + i2 + 1 + 1 + c2, p2 = s2 < v$1, a2 = new Uint8Array((p2 ? 2 : 3) + s2), f2 = 0;
    return a2[f2++] = ye$2, p2 ? a2[f2++] = s2 : (a2[f2++] = v$1 | 1, a2[f2++] = s2 & 255), a2[f2++] = I$4, a2[f2++] = i2, n < 0 ? (a2[f2++] = 0, f2 += rt(e, a2, f2, 0, r)) : f2 += rt(e, a2, f2, n, r), a2[f2++] = I$4, a2[f2++] = c2, o < 0 ? (a2[f2++] = 0, rt(e, a2, f2, r)) : rt(e, a2, f2, r + o), jr(a2).replace(/=/g, "");
  }
  function x$2(t, e) {
    let r = [], n = g$2.encode(JSON.stringify(e));
    r.push(n);
    let o = g$2.encode(JSON.stringify(t));
    return r.push(o), r.join(".");
  }
  var Se = class {
    constructor(e = "ES256K", r) {
      __publicField(this, "tokenType");
      __publicField(this, "rawPrivateKey");
      if (!r)
        throw new C$5("TokenSigner: rawPrivateKey is required to sign a token");
      this.tokenType = "JWT", this.rawPrivateKey = r;
    }
    header(e = {}) {
      return {
        ...{
          typ: this.tokenType,
          alg: "ES256K"
        },
        ...e
      };
    }
    async sign(e, r = false, n = {}) {
      let o = this.header(n), i2 = x$2(e, o), c2 = f$5(dr(i2));
      return this.createWithSignedHash(e, r, o, i2, c2);
    }
    signSync(e, r = false, n = {}) {
      let o = this.header(n), i2 = x$2(e, o), c2 = f$5(dr(i2));
      return this.createWithSignedHashSync(e, r, o, i2, c2);
    }
    async createWithSignedHash(e, r, n, o, i2) {
      let c2 = await sign(i2, this.rawPrivateKey, {
        canonical: false
      }), s2 = _$3(c2);
      return r ? {
        header: [
          g$2.encode(JSON.stringify(n))
        ],
        payload: JSON.stringify(e),
        signature: [
          s2
        ]
      } : [
        o,
        s2
      ].join(".");
    }
    createWithSignedHashSync(e, r, n, o, i2) {
      let c2 = signSync(i2, this.rawPrivateKey, {
        canonical: false
      }), s2 = _$3(c2);
      return r ? {
        header: [
          g$2.encode(JSON.stringify(n))
        ],
        payload: JSON.stringify(e),
        signature: [
          s2
        ]
      } : [
        o,
        s2
      ].join(".");
    }
  };
  var we$1 = class we {
    constructor(e, r) {
      __publicField(this, "tokenType");
      __publicField(this, "rawPublicKey");
      this.tokenType = "JWT", this.rawPublicKey = r;
    }
    verify(e, r = false) {
      return typeof e == "string" ? this.verifyCompact(e, r) : typeof e == "object" ? this.verifyExpanded(e, r) : false;
    }
    verifyCompact(e, r) {
      let n = e.split("."), o = n[0] + "." + n[1], i2 = (s2) => {
        let p2 = n[2], a2 = M$4(p2);
        return verify(p$4(Gr(a2)), p$4(s2), this.rawPublicKey, {
          strict: r
        });
      }, c2 = f$5(dr(o));
      return i2(c2);
    }
    verifyExpanded(e, r) {
      let n = [
        e.header.join("."),
        g$2.encode(e.payload)
      ].join("."), o = true, i2 = (s2) => (e.signature.map((p2) => {
        let a2 = M$4(p2);
        verify(p$4(Gr(a2)), p$4(s2), this.rawPublicKey, {
          strict: r
        }) || (o = false);
      }), o), c2 = f$5(dr(n));
      return i2(c2);
    }
  };
  function wt(t) {
    if (typeof t == "string") {
      let e = t.split("."), r = JSON.parse(g$2.decode(e[0])), n = JSON.parse(g$2.decode(e[1])), o = e[2];
      return {
        header: r,
        payload: n,
        signature: o
      };
    } else if (typeof t == "object") {
      if (typeof t.payload != "string")
        throw new Error("Expected token payload to be a base64 or json string");
      let e = t.payload;
      t.payload[0] !== "{" && (e = g$2.decode(e));
      let r = [];
      return t.header.map((n) => {
        let o = JSON.parse(g$2.decode(n));
        r.push(o);
      }), {
        header: r,
        payload: JSON.parse(e),
        signature: t.signature
      };
    }
  }
  function At(t) {
    return x$2(t, {
      typ: "JWT",
      alg: "none"
    }) + ".";
  }
  var P$3 = BigInt("0xffffffffffffffffffffffffffffffff"), M$3 = BigInt(0), U$2 = BigInt("0x7fffffffffffffffffffffffffffffff"), w$4 = BigInt("-170141183460469231731687303715884105728"), ge$2 = ((i2) => (i2[i2.Origin = 1] = "Origin", i2[i2.Standard = 2] = "Standard", i2[i2.Contract = 3] = "Contract", i2))(ge$2 || {}), A$3 = ((n) => (n[n.Int = 0] = "Int", n[n.UInt = 1] = "UInt", n[n.Buffer = 2] = "Buffer", n[n.BoolTrue = 3] = "BoolTrue", n[n.BoolFalse = 4] = "BoolFalse", n[n.PrincipalStandard = 5] = "PrincipalStandard", n[n.PrincipalContract = 6] = "PrincipalContract", n[n.ResponseOk = 7] = "ResponseOk", n[n.ResponseErr = 8] = "ResponseErr", n[n.OptionalNone = 9] = "OptionalNone", n[n.OptionalSome = 10] = "OptionalSome", n[n.List = 11] = "List", n[n.Tuple = 12] = "Tuple", n[n.StringASCII = 13] = "StringASCII", n[n.StringUTF8 = 14] = "StringUTF8", n))(A$3 || {});
  var I$3 = () => ({
    type: 3
  }), O$2 = () => ({
    type: 4
  });
  var L$2 = (e) => {
    if (e.length > 1e6)
      throw new Error("Cannot construct clarity buffer that is greater than 1MB");
    return {
      type: 2,
      buffer: Uint8Array.from(e)
    };
  };
  var Z$3 = (e) => {
    let r = y$9(e, true);
    if (r > U$2)
      throw new RangeError(`Cannot construct clarity integer from value greater than ${U$2.toString()}`);
    if (r < w$4)
      throw new RangeError(`Cannot construct clarity integer form value less than ${w$4.toString()}`);
    if (Rr$1(r).byteLength > 128)
      throw new RangeError(`Cannot construct clarity integer from value greater than ${128} bits`);
    return {
      type: 0,
      value: r
    };
  }, K$1 = (e) => {
    let r = y$9(e);
    if (r < M$3)
      throw new RangeError("Cannot construct unsigned clarity integer from negative value");
    if (r > P$3)
      throw new RangeError(`Cannot construct unsigned clarity integer greater than ${P$3.toString()}`);
    return {
      type: 1,
      value: r
    };
  };
  function W$1(e) {
    return {
      type: 11,
      list: e
    };
  }
  function R$3() {
    return {
      type: 9
    };
  }
  function E$2(e) {
    return {
      type: 10,
      value: e
    };
  }
  function te$1(e) {
    return /^[a-zA-Z]([a-zA-Z0-9]|[-_!?+<>=/*])*$|^[-+=/*]$|^[<>]=?$/.test(e) && e.length < 128;
  }
  var Be$1 = ((a2) => (a2[a2.Address = 0] = "Address", a2[a2.Principal = 1] = "Principal", a2[a2.LengthPrefixedString = 2] = "LengthPrefixedString", a2[a2.MemoString = 3] = "MemoString", a2[a2.AssetInfo = 4] = "AssetInfo", a2[a2.PostCondition = 5] = "PostCondition", a2[a2.PublicKey = 6] = "PublicKey", a2[a2.LengthPrefixedList = 7] = "LengthPrefixedList", a2[a2.Payload = 8] = "Payload", a2[a2.MessageSignature = 9] = "MessageSignature", a2[a2.TransactionAuthField = 10] = "TransactionAuthField", a2))(Be$1 || {});
  function k$2(e) {
    return V$1(e.version, l$4(e.hash160));
  }
  var Pe = (e, r) => e ? dr(e).length > r : false;
  function C$4(e, r, t) {
    let i2 = r || 1, s2 = t || 128;
    if (Pe(e, s2))
      throw new Error(`String length exceeds maximum bytes ${s2.toString()}`);
    return {
      type: 2,
      content: e,
      lengthPrefixBytes: i2,
      maxLengthBytes: s2
    };
  }
  function _$2(e) {
    let r = new q$1();
    return r.appendHexString(x$3(e.version, 1)), r.appendHexString(e.hash160), r.concatBuffer();
  }
  function $$2(e) {
    let r = new q$1(), t = dr(e.content), i2 = t.byteLength;
    return r.appendHexString(x$3(i2, e.lengthPrefixBytes)), r.push(t), r.concatBuffer();
  }
  function F$3(e, r, t) {
    r = r || 1;
    let i2 = Tr(p$4(e.readBuffer(r))), s2 = _$4(e.readBuffer(i2));
    return C$4(s2, r, t ?? 128);
  }
  function z$4(e) {
    let r = Tr(p$4(e.readBuffer(1))), t = p$4(e.readBuffer(20));
    return {
      type: 0,
      version: r,
      hash160: t
    };
  }
  function d$2(e) {
    if (e.type === 5)
      return k$2(e.address);
    if (e.type === 6)
      return `${k$2(e.address)}.${e.contractName.content}`;
    throw new Error(`Unexpected principal data: ${JSON.stringify(e)}`);
  }
  function ie$1(e) {
    return {
      type: 5,
      address: e
    };
  }
  function H$3(e, r) {
    if (dr(r.content).byteLength >= 128)
      throw new Error("Contract name must be less than 128 bytes");
    return {
      type: 6,
      address: e,
      contractName: r
    };
  }
  function oe$1(e) {
    return {
      type: 8,
      value: e
    };
  }
  function ae$1(e) {
    return {
      type: 7,
      value: e
    };
  }
  var S$1 = (e) => ({
    type: 13,
    data: e
  }), se$1 = (e) => ({
    type: 14,
    data: e
  });
  function pe(e) {
    for (let r in e)
      if (!te$1(r))
        throw new Error(`"${r}" is not a valid Clarity name`);
    return {
      type: 12,
      data: e
    };
  }
  var Oe = ((o) => (o[o.ClarityAbiTypeUInt128 = 1] = "ClarityAbiTypeUInt128", o[o.ClarityAbiTypeInt128 = 2] = "ClarityAbiTypeInt128", o[o.ClarityAbiTypeBool = 3] = "ClarityAbiTypeBool", o[o.ClarityAbiTypePrincipal = 4] = "ClarityAbiTypePrincipal", o[o.ClarityAbiTypeNone = 5] = "ClarityAbiTypeNone", o[o.ClarityAbiTypeBuffer = 6] = "ClarityAbiTypeBuffer", o[o.ClarityAbiTypeResponse = 7] = "ClarityAbiTypeResponse", o[o.ClarityAbiTypeOptional = 8] = "ClarityAbiTypeOptional", o[o.ClarityAbiTypeTuple = 9] = "ClarityAbiTypeTuple", o[o.ClarityAbiTypeList = 10] = "ClarityAbiTypeList", o[o.ClarityAbiTypeStringAscii = 11] = "ClarityAbiTypeStringAscii", o[o.ClarityAbiTypeStringUtf8 = 12] = "ClarityAbiTypeStringUtf8", o[o.ClarityAbiTypeTraitReference = 13] = "ClarityAbiTypeTraitReference", o))(Oe || {});
  function l$3(e) {
    switch (e.type) {
      case 3:
      case 4:
        return "bool";
      case 0:
        return "int";
      case 1:
        return "uint";
      case 2:
        return `(buff ${e.buffer.length})`;
      case 9:
        return "(optional none)";
      case 10:
        return `(optional ${l$3(e.value)})`;
      case 8:
        return `(response UnknownType ${l$3(e.value)})`;
      case 7:
        return `(response ${l$3(e.value)} UnknownType)`;
      case 5:
      case 6:
        return "principal";
      case 11:
        return `(list ${e.list.length} ${e.list.length ? l$3(e.list[0]) : "UnknownType"})`;
      case 12:
        return `(tuple ${Object.keys(e.data).map((r) => `(${r} ${l$3(e.data[r])})`).join(" ")})`;
      case 13:
        return `(string-ascii ${Qr(e.data).length})`;
      case 14:
        return `(string-utf8 ${dr(e.data).length})`;
    }
  }
  function T$2(e) {
    let r = h$6(e, true);
    switch (e.type) {
      case 8:
        return {
          type: l$3(e),
          value: r,
          success: false
        };
      case 7:
        return {
          type: l$3(e),
          value: r,
          success: true
        };
      default:
        return {
          type: l$3(e),
          value: r
        };
    }
  }
  function h$6(e, r = false) {
    switch (e.type) {
      case 3:
        return true;
      case 4:
        return false;
      case 0:
      case 1:
        return r ? e.value.toString() : e.value;
      case 2:
        return `0x${p$4(e.buffer)}`;
      case 9:
        return null;
      case 10:
        return T$2(e.value);
      case 8:
        return T$2(e.value);
      case 7:
        return T$2(e.value);
      case 5:
      case 6:
        return d$2(e);
      case 11:
        return e.list.map((s2) => T$2(s2));
      case 12:
        let t = {};
        return Object.keys(e.data).map((s2) => [
          s2,
          T$2(e.data[s2])
        ]).forEach(([s2, p2]) => {
          t[s2] = p2;
        }), t;
      case 13:
        return e.data;
      case 14:
        return e.data;
    }
  }
  function f$3(e, r) {
    let t = new q$1(), i2 = Uint8Array.from([
      e
    ]);
    return t.push(i2), t.push(r), t.concatBuffer();
  }
  function He(e) {
    return Uint8Array.from([
      e.type
    ]);
  }
  function je$1(e) {
    return e.type === 9 ? new Uint8Array([
      e.type
    ]) : f$3(e.type, m$2(e.value));
  }
  function De$2(e) {
    let r = new Uint8Array(4);
    return new DataView(r.buffer, r.byteOffset, r.byteLength).setUint32(r.byteOffset, e.buffer.length), f$3(e.type, U$3([
      r,
      Uint8Array.from(e.buffer)
    ]));
  }
  function Je$1(e) {
    let r = x$3(_r(e.value), 16), t = l$4(r);
    return f$3(e.type, t);
  }
  function Ye$1(e) {
    let r = x$3(e.value, 16), t = l$4(r);
    return f$3(e.type, t);
  }
  function Ge(e) {
    return f$3(e.type, _$2(e.address));
  }
  function ve$3(e) {
    return f$3(e.type, U$3([
      _$2(e.address),
      $$2(e.contractName)
    ]));
  }
  function Me(e) {
    return f$3(e.type, m$2(e.value));
  }
  function Xe$1(e) {
    let r = new q$1(), t = new Uint8Array(4);
    yt$2(t, e.list.length, 0), r.push(t);
    for (let i2 of e.list) {
      let s2 = m$2(i2);
      r.push(s2);
    }
    return f$3(e.type, r.concatBuffer());
  }
  function Ze$2(e) {
    let r = [], t = new Uint8Array(4);
    new DataView(t.buffer, t.byteOffset, t.byteLength).setUint32(t.byteOffset, Object.keys(e.data).length), r.push(t);
    let s2 = Object.keys(e.data).sort((p2, y2) => {
      let g2 = dr(p2), x2 = dr(y2);
      return xt$1(g2, x2);
    });
    for (let p2 of s2) {
      let y2 = C$4(p2);
      r.push($$2(y2));
      let g2 = m$2(e.data[p2]);
      r.push(g2);
    }
    return f$3(e.type, U$3(r));
  }
  function ue(e, r) {
    let t = new q$1(), s2 = (r === "ascii" ? Qr : dr)(e.data), p2 = new Uint8Array(4);
    return new DataView(p2.buffer, p2.byteOffset, p2.byteLength).setUint32(p2.byteOffset, s2.length), t.push(p2), t.push(s2), f$3(e.type, t.concatBuffer());
  }
  function Ke$1(e) {
    return ue(e, "ascii");
  }
  function We$2(e) {
    return ue(e, "utf8");
  }
  function m$2(e) {
    switch (e.type) {
      case 3:
      case 4:
        return He(e);
      case 9:
      case 10:
        return je$1(e);
      case 2:
        return De$2(e);
      case 0:
        return Je$1(e);
      case 1:
        return Ye$1(e);
      case 5:
        return Ge(e);
      case 6:
        return ve$3(e);
      case 7:
      case 8:
        return Me(e);
      case 11:
        return Xe$1(e);
      case 12:
        return Ze$2(e);
      case 13:
        return Ke$1(e);
      case 14:
        return We$2(e);
      default:
        throw new Error("Unable to serialize. Invalid Clarity Value.");
    }
  }
  function c$1(e) {
    let r;
    if (typeof e == "string") {
      let i2 = e.slice(0, 2).toLowerCase() === "0x";
      r = new J$2(l$4(i2 ? e.slice(2) : e));
    } else
      e instanceof Uint8Array ? r = new J$2(e) : r = e;
    switch (r.readUInt8Enum(A$3, (i2) => {
      throw new V$2(`Cannot recognize Clarity Type: ${i2}`);
    })) {
      case 0:
        return Z$3(r.readBuffer(16));
      case 1:
        return K$1(r.readBuffer(16));
      case 2:
        let i2 = r.readUInt32BE();
        return L$2(r.readBuffer(i2));
      case 3:
        return I$3();
      case 4:
        return O$2();
      case 5:
        let s2 = z$4(r);
        return ie$1(s2);
      case 6:
        let p2 = z$4(r), y2 = F$3(r);
        return H$3(p2, y2);
      case 7:
        return ae$1(c$1(r));
      case 8:
        return oe$1(c$1(r));
      case 9:
        return R$3();
      case 10:
        return E$2(c$1(r));
      case 11:
        let g2 = r.readUInt32BE(), x2 = [];
        for (let n = 0; n < g2; n++)
          x2.push(c$1(r));
        return W$1(x2);
      case 12:
        let Ce2 = r.readUInt32BE(), G2 = {};
        for (let n = 0; n < Ce2; n++) {
          let v2 = F$3(r).content;
          if (v2 === void 0)
            throw new V$2('"content" is undefined');
          G2[v2] = c$1(r);
        }
        return pe(G2);
      case 13:
        let a2 = r.readUInt32BE(), de2 = Xr(r.readBuffer(a2));
        return S$1(de2);
      case 14:
        let o = r.readUInt32BE(), Te2 = _$4(r.readBuffer(o));
        return se$1(Te2);
      default:
        throw new V$2("Unable to deserialize Clarity Value from buffer. Could not find valid Clarity Type.");
    }
  }
  function Vt(e) {
    return `0x${p$4(m$2(e))}`;
  }
  var g$1 = "https://stacks-node-api.mainnet.stacks.co", p$3 = "https://stacks-node-api.testnet.stacks.co", i = class {
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
      url: p$3,
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
  var h$5 = ((o) => (o[o.TokenTransfer = 0] = "TokenTransfer", o[o.SmartContract = 1] = "SmartContract", o[o.ContractCall = 2] = "ContractCall", o[o.PoisonMicroblock = 3] = "PoisonMicroblock", o[o.Coinbase = 4] = "Coinbase", o))(h$5 || {});
  function et$1(e) {
    let t = new q$1();
    return t.appendByte(e.conditionType), t.push(tt$1(e.principal)), (e.conditionType === 1 || e.conditionType === 2) && t.push(it$1(e.assetInfo)), e.conditionType === 2 && t.push(m$2(e.assetName)), t.appendByte(e.conditionCode), (e.conditionType === 0 || e.conditionType === 1) && t.push(Rr$1(e.amount, false, 8)), t.concatBuffer();
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
  }, c = (e) => e ? p$4(getPublicKey(e, true)) : null;
  function K(e) {
    return e == null ? void 0 : e.map((t) => typeof t != "string" ? p$4(et$1(t)) : t);
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
    let n = c(t), s2 = {
      ...r,
      functionArgs: e.map((o) => Ur(typeof o == "string" ? o : Vt(o))),
      txType: "contract_call",
      publicKey: n
    };
    return l$1(s2, t);
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
    let r = wt(e), s2 = r == null ? void 0 : r.payload, o;
    if (s2.private_key)
      try {
        let i2 = Er(s2.private_key);
        o = await pe$1({
          privateKey: t,
          cipherObject: i2
        });
      } catch {
        console.error("[micro-stacks] failed to decrypt appPrivateKey");
      }
    return {
      addresses: s2.profile.stxAddress,
      appPrivateKey: o,
      associationToken: s2.associationToken,
      hubUrl: s2.hubUrl,
      public_keys: s2.public_keys,
      profile: s2.profile,
      profile_url: s2.profile_url,
      username: s2.username,
      version: s2.version,
      decentralizedID: s2.iss,
      identityAddress: fe(s2.iss)
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
    var n, s2;
    if (!e.appDetails)
      throw Error("[micro-stacks] authenticate error: `authOptions.appDetails` are required for authentication");
    try {
      let o = p$4($$3()), a2 = await we(e, o), i2 = await B$1(a2, o);
      return (n = e == null ? void 0 : e.onFinish) == null || n.call(e, i2), t.setItem("stacks-session", r(i2)), i2;
    } catch (o) {
      (s2 = e == null ? void 0 : e.onCancel) == null || s2.call(e, o.message);
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
    let r = p$4(getPublicKey(t)), n = Te(e, r);
    return ve$1(n, t);
  }
  async function we(e, t) {
    let r = y$4();
    if (!r)
      throw Error("This function can only be called on the client, and with the presence of StacksProvider");
    let n = await be(e, t);
    return r.authenticationRequest(n);
  }
  function p$2(e) {
    return async function(r) {
      let { token: n, onFinish: s2, onCancel: o } = r;
      try {
        let a2 = y$4();
        if (!a2)
          throw new Error("[micro-stacks/connect] No Stacks provider");
        let i2 = a2[e];
        if (typeof i2 != "function")
          throw new Error(`[micro-stacks/connect] StacksProvider method ${e} not found`);
        let g2 = await i2(n);
        s2 == null || s2(g2);
      } catch (a2) {
        o == null || o(a2 == null ? void 0 : a2.message);
      }
    };
  }
  var Gt = p$2("transactionRequest"), F$2 = p$2("signatureRequest"), _$1 = p$2("structuredDataSignatureRequest");
  var H$2 = ((s2) => (s2.Chrome = "https://chrome.google.com/webstore/detail/hiro-wallet/ldinpeekobnhjjdofggfgjlcehhmanlj", s2.Firefox = "https://addons.mozilla.org/en-US/firefox/addon/hiro-wallet/", s2.Mobile = "https://www.xverse.app", s2.Browser = "https://www.hiro.so/wallet/install-web", s2))(H$2 || {});
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
  var h$4 = (e, t, r) => pe({
    name: S$1(e),
    version: S$1(t),
    "chain-id": K$1(r)
  }), X = (e) => {
    var o;
    let t = typeof e.message != "string" ? Vt(e.message) : e.message, r = h$4(e.domain.name, e.domain.version, e.domain.chainId ?? ((o = e.network) == null ? void 0 : o.chainId) ?? ur.Mainnet), n = Vt(r), s2 = {
      stxAddress: e.stxAddress,
      message: Ur(t),
      domain: Ur(n),
      appDetails: e.appDetails,
      publicKey: c(e.privateKey),
      network: e.network
    };
    return d$1(s2, e == null ? void 0 : e.privateKey);
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
  function w$3(e) {
    if (e < 0 || e > _e$1 || e % 1 !== 0)
      throw new RangeError("value out of range");
  }
  var P$2 = (e, t, r) => {
    w$3(e);
    let n;
    if (t || (t = new Uint8Array(C$3(e))), !lr(t))
      throw new TypeError("uint8Array must be of Uint8Array type");
    return r || (r = 0), e < 253 ? (ut$2(t, e, r), n = 1) : e <= 65535 ? (ut$2(t, 253, r), ct$1(t, e, r + 1), n = 3) : e <= 4294967295 ? (ut$2(t, 254, r), mt$1(t, e, r + 1), n = 5) : (ut$2(t, 255, r), mt$1(t, e >>> 0, r + 1), mt$1(t, e / 4294967296 | 0, r + 5), n = 9), P$2.bytes = n, t;
  };
  function C$3(e) {
    return w$3(e), e < 253 ? 1 : e <= 65535 ? 3 : e <= 4294967295 ? 5 : 9;
  }
  var Ve = `Stacks Signed Message:
`, D$1 = utils$1.utf8ToBytes(Ve), We$1 = `Stacks Message Signing:
`, I$2 = utils$1.utf8ToBytes(We$1);
  function R$2(e, t = D$1) {
    return f$5(z$3(e, t));
  }
  function z$3(e, t = D$1) {
    let r = typeof e == "string" ? utils$1.utf8ToBytes(e) : e, n = P$2(r.length);
    return U$3([
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
      recoveryBytes: d$3(t),
      r,
      s: n
    };
  }
  function Qe(e) {
    return e.slice(-2) + e.slice(0, -2);
  }
  var Q$1 = ({ hash: e, signature: t, recoveryBytes: r }) => recoverPublicKey(e, t, Number(r), true), Z$2 = (e) => {
    let { signature: t, mode: r = "rsv" } = e, { r: n, s: s2, recoveryBytes: o } = $e(r === "rsv" ? Qe(t) : t);
    return {
      signature: new Signature(d$3(n), d$3(s2)),
      recoveryBytes: o
    };
  }, M$2 = (e) => {
    if (!e.publicKey && !e.stxAddress)
      throw Error("[micro-stacks/connect[ verifyMessageSignature -- You must pass `stxAddress` if you are recovering the public key from the signature");
    let { message: t, mode: r = "rsv" } = e, n = e.publicKey;
    try {
      let s2 = typeof t == "string" ? R$2(t, e.prefix) : t, { signature: o, recoveryBytes: a2 } = Z$2({
        signature: e.signature,
        mode: r
      });
      if (!n) {
        let [i2] = ee$2(e.stxAddress);
        n = p$4(Q$1({
          hash: s2,
          signature: o,
          recoveryBytes: a2
        }));
        let g2 = qe$1(n, i2);
        if (g2 !== e.stxAddress)
          return console.error(`[micro-stacks/connect] verifyMessageSignature Stacks address is not correct. expected: ${e.stxAddress}, received: ${g2}`), false;
      }
      return verify(o, s2, n, {
        strict: false
      });
    } catch (s2) {
      return console.error("[micro-stacks/connect] verifyMessageSignature failed", s2), false;
    }
  }, Ze$1 = (e) => M$2(e) || M$2({
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
  var isProduction = false;
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
    return r = f$1(r), r = u(r), a$1(r);
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
    let s2 = r.split("");
    for (let i2 of n) {
      let { match: o, replacement: c2 } = i2;
      s2.splice(o.index, o[0].length, c2);
    }
    return s2.join("").replace(/\(|\)/gim, " ");
  }
  function a$1(r) {
    let n = {}, e = r.split(`
`);
    for (let t of e) {
      if (!t || !t.trim())
        continue;
      let s2 = t.toUpperCase();
      /\s+TXT\s+/.test(s2) ? (n.txt = n.txt || [], n.txt.push(h$3(t))) : s2.indexOf("$ORIGIN") === 0 ? n.$origin = t.split(/\s+/g)[1] : s2.indexOf("$TTL") === 0 ? n.$ttl = parseInt(t.split(/\s+/g)[1], 10) : /\s+SOA\s+/.test(s2) ? n.soa = l(t) : /\s+NS\s+/.test(s2) ? (n.ns = n.ns || [], n.ns.push(g(t))) : /\s+A\s+/.test(s2) ? (n.a = n.a || [], n.a.push(T$1(t, n.a))) : /\s+AAAA\s+/.test(s2) ? (n.aaaa = n.aaaa || [], n.aaaa.push(m$1(t))) : /\s+CNAME\s+/.test(s2) ? (n.cname = n.cname || [], n.cname.push(y$3(t))) : /\s+MX\s+/.test(s2) ? (n.mx = n.mx || [], n.mx.push(N$2(t))) : /\s+PTR\s+/.test(s2) ? (n.ptr = n.ptr || [], n.ptr.push(d(t, n.ptr, n.$origin))) : /\s+SRV\s+/.test(s2) ? (n.srv = n.srv || [], n.srv.push(I$1(t))) : /\s+SPF\s+/.test(s2) ? (n.spf = n.spf || [], n.spf.push(A$2(t))) : /\s+URI\s+/.test(s2) && (n.uri = n.uri || [], n.uri.push(R$1(t)));
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
    let e = r.trim().split(/\s+/g), t = r.trim().toUpperCase().split(/\s+/g), s2 = e.length, i2 = {
      name: e[0],
      ip: e[s2 - 1]
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
  function h$3(r) {
    let n = r.trim().match(/[^\s"']+|"[^"]*"|'[^']*'/g);
    if (!n)
      throw new Error("Failure to tokenize TXT record");
    let e = n.length, t = n.indexOf("TXT");
    function s2(c2) {
      return c2.indexOf('"') > -1 && (c2 = c2.split('"')[1]), c2;
    }
    let i2;
    e - t - 1 > 1 ? i2 = [
      ...n.slice(t + 1).map(s2)
    ] : i2 = s2(n[e - 1]);
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
    let { hubInfo: e, privateKey: t, gaiaHubUrl: o, associationToken: n = null, scopes: s2 } = r, { challenge_text: i2 } = e, a2 = p$4(getPublicKey(t, true)), u2 = $$3(16).toString();
    return {
      gaiaChallenge: i2,
      hubUrl: o,
      iss: a2,
      salt: u2,
      associationToken: n,
      scopes: de(s2)
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
    let { gaiaHubUrl: e, privateKey: t, associationToken: o, scopes: n } = r, s2 = J$1, { read_url_prefix: i2, max_file_upload_size_megabytes: a2 } = s2, u2 = ye({
      hubInfo: s2,
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
  var w$2 = {
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
  Object.freeze(w$2);
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
        } catch (s2) {
          n = s2.stack;
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
        code: w$2.SIGNATURE_VERIFICATION_ERROR,
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
        code: w$2.DOES_NOT_EXIST
      }, t), this.name = "DoesNotExist";
    }
  }, P$1 = class P extends b$1 {
    constructor(e, t) {
      super({
        message: e,
        code: w$2.CONFLICT_ERROR
      }, t), this.name = "ConflictError";
    }
  }, v = class extends b$1 {
    constructor(e, t) {
      super({
        message: e,
        code: w$2.NOT_ENOUGH_PROOF_ERROR
      }, t), this.name = "NotEnoughProofError";
    }
  }, S = class extends b$1 {
    constructor(e, t) {
      super({
        message: e,
        code: w$2.BAD_PATH_ERROR
      }, t), this.name = "BadPathError";
    }
  }, C$2 = class C extends b$1 {
    constructor(e, t) {
      super({
        message: e,
        code: w$2.VALIDATION_ERROR
      }, t), this.name = "ValidationError";
    }
  }, E$1 = class E extends b$1 {
    constructor(e, t, o) {
      super({
        message: e,
        code: w$2.PAYLOAD_TOO_LARGE_ERROR
      }, t);
      __publicField(this, "hubError");
      __publicField(this, "maxUploadByteSize");
      this.name = "PayloadTooLargeError", this.maxUploadByteSize = o;
    }
  }, L$1 = class L extends b$1 {
    constructor(e, t) {
      super({
        message: e,
        code: w$2.PRECONDITION_FAILED_ERROR
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
  function Z$1(r) {
    if (!r || !r.hubError || !r.hubError.statusCode)
      return false;
    let e = r.hubError.statusCode;
    return e === 401 || e === 409 || e >= 500 && e <= 599;
  }
  async function A$1(r) {
    let { filename: e, contents: t, hubConfig: o, contentType: n = "application/octet-stream" } = r, s2 = {
      "Content-Type": n,
      Authorization: `bearer ${o.token}`
    }, i2 = await Hr(`${o.server}/store/${o.address}/${e}`, {
      method: "POST",
      headers: s2,
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
  var h$2 = ".sig", U = "https://stacks-node-api.stacks.co/v1/names";
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
          return await new Promise((n, s2) => {
            e.onerror = (i2) => {
              s2(i2);
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
    let { privateKey: o } = t, { encrypt: n, sign: s2, gaiaHubConfig: i2, cipherTextEncoding: a2 } = t, { contentType: u2 = "" } = t, c2 = G(i2.max_file_upload_size_megabytes), g2 = c2 > 0, l2 = new O(e, u2);
    if (u2 = l2.contentType, !n && g2 && l2.contentByteLength > c2) {
      let p2 = `The max file upload size for this hub is ${c2} bytes, the given content is ${l2.contentByteLength} bytes`, f2 = new E$1(p2, null, c2);
      throw console.error(f2), f2;
    }
    if (n && g2 && a2) {
      let p2 = Kt({
        contentLength: l2.contentByteLength,
        wasString: l2.wasString,
        sign: !!s2,
        cipherTextEncoding: a2
      });
      if (p2 > c2) {
        let f2 = `The max file upload size for this hub is ${c2} bytes, the given content is ${p2} bytes after encryption`, d2 = new E$1(f2, null, c2);
        throw console.error(d2), d2;
      }
    }
    let m2;
    if (!n && s2) {
      let p2 = await l2.load();
      if (typeof s2 == "string")
        o = s2;
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
          filename: `${r}${h$2}`,
          contents: JSON.stringify(f2),
          hubConfig: d2,
          contentType: "application/json"
        })
      ]))[0].publicURL;
    } else {
      let p2;
      if (!n && !s2)
        p2 = l2.content;
      else {
        let f2;
        if (typeof n == "string")
          f2 = n;
        else if (typeof s2 == "string")
          f2 = p$4(getPublicKey(s2, true));
        else if (o)
          f2 = p$4(getPublicKey(o, true));
        else
          throw new Error("No private key passed");
        let d2 = await l2.load(), _2 = await Rr(d2, {
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
      if (Z$1(p2))
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
    let n = o.issuer.publicKey, s2 = qe$1(n);
    if (e !== n) {
      if (e !== s2)
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
      } catch (s2) {
        throw console.error(`[micro-stacks] resolveZoneFileToProfile: error fetching token file ${n}: ${s2}`), s2;
      }
    return console.debug("[micro-stacks] Token file url not found. Resolving to blank profile."), {};
  }
  async function re(r) {
    let { username: e, zoneFileLookupURL: t = U } = r;
    if (!e)
      return Promise.reject();
    let o = `${t.replace(/\/$/, "")}/${r.username}`, s2 = await (await Hr(o)).json();
    if (s2.hasOwnProperty("zonefile") && s2.hasOwnProperty("address"))
      return await te(s2.zonefile, r.verify ? s2.address : void 0);
    throw new Error("Invalid zonefile lookup response: did not contain `address` or `zonefile` field");
  }
  async function oe(r, e, t, o) {
    let n = await re({
      username: e,
      zoneFileLookupURL: o
    }), s2;
    if (!!n)
      return n.hasOwnProperty("apps") ? n.apps.hasOwnProperty(t) && (s2 = `${n.apps[t].replace(/\/?(\?|#|$)/, "/$1")}${r}`) : n.hasOwnProperty("appsMeta") && n.appsMeta.hasOwnProperty(t) && (s2 = `${n.appsMeta[t].replace(/\/?(\?|#|$)/, "/$1")}${r}`), s2;
  }
  async function ve(r, e) {
    let t;
    if (e.username ? t = await oe(r, e.username, e.app, e.zoneFileLookupURL) : t = await I(r, e.gaiaHubConfig), t)
      return t;
    throw new Error("Missing readURL");
  }
  async function D(r) {
    let { app: e, username: t, zoneFileLookupURL: o, gaiaHubConfig: n } = r, s2;
    t ? s2 = await oe("/", t, e, o) : n && (s2 = await I("/", n));
    let i2 = /([13][a-km-zA-HJ-NP-Z0-9]{26,35})/.exec(s2);
    if (!i2)
      throw new Error("Failed to parse gaia address");
    return i2[i2.length - 1];
  }
  async function F$1(r) {
    let { path: e, forceText: t, app: o, username: n, zoneFileLookupURL: s2, gaiaHubConfig: i2 } = r, a2 = await ve(e, {
      app: o,
      username: n,
      zoneFileLookupURL: s2,
      gaiaHubConfig: i2
    }), u2 = await Hr(a2);
    if (!u2.ok)
      throw await R(u2, `getFile ${e} failed.`, null);
    let c2 = u2.headers.get("Content-Type");
    if (typeof c2 == "string" && (c2 = c2.toLowerCase()), t || c2 === null || c2.startsWith("text") || c2.startsWith("application/json"))
      return u2.text();
    {
      let g2 = await u2.arrayBuffer();
      return pr$1(g2);
    }
  }
  async function ne(r, e) {
    let { app: t, username: o, zoneFileLookupURL: n, gaiaHubConfig: s2 } = e, i2 = `${r}${h$2}`;
    try {
      let [a2, u2, c2] = await Promise.all([
        F$1({
          path: r,
          app: t,
          username: o,
          zoneFileLookupURL: n,
          forceText: false,
          gaiaHubConfig: s2
        }),
        F$1({
          path: i2,
          app: t,
          username: o,
          zoneFileLookupURL: n,
          forceText: true,
          gaiaHubConfig: s2
        }),
        D({
          app: t,
          username: o,
          zoneFileLookupURL: n,
          gaiaHubConfig: s2
        })
      ]);
      if (!a2)
        return a2;
      if (!c2)
        throw new y$2(`Failed to get gaia address for verification of: ${r}`);
      if (!u2 || typeof u2 != "string")
        throw new y$2(`Failed to obtain signature for file: ${r} -- looked in ${r}${h$2}`);
      let g2, l2;
      try {
        let d2 = JSON.parse(u2);
        g2 = d2.signature, l2 = d2.publicKey;
      } catch (d2) {
        throw d2 instanceof SyntaxError ? new Error(`Failed to parse signature content JSON (path: ${r}${h$2}) The content may be corrupted.`) : d2;
      }
      let m2 = pr(l2), p2 = typeof a2 == "string" ? dr(a2) : a2, f2 = xr({
        signature: g2,
        contents: p2,
        publicKey: l2
      });
      if (c2 !== m2)
        throw new y$2(`Signer pubkey address (${m2}) doesn't match gaia address (${c2})`);
      if (f2)
        return a2;
      throw new y$2(`Contents do not match ECDSA signature: path: ${r}, signature: ${r}${h$2}`);
    } catch (a2) {
      throw a2 instanceof x$1 && a2.message.indexOf(i2) >= 0 ? new y$2(`Failed to obtain signature for file: ${r} -- looked in ${r}${h$2}`) : a2;
    }
  }
  async function ie(r) {
    let { path: e, storedContents: t, app: o, privateKey: n, username: s2, zoneFileLookupURL: i2, gaiaHubConfig: a2 } = r, u2 = n, c2 = u2 ? getPublicKey(u2, true) : null, g2 = null;
    if (s2 || a2 ? g2 = await D({
      app: o,
      username: s2,
      zoneFileLookupURL: i2,
      gaiaHubConfig: a2
    }) : c2 && (g2 = pr(c2)), !g2)
      throw new y$2(`Failed to get gaia address for verification of: ${e}`);
    let l2;
    try {
      l2 = JSON.parse(t);
    } catch (T2) {
      throw T2 instanceof SyntaxError ? new Error("Failed to parse encrypted, signed content JSON. The content may not be encrypted. If using getFile, try passing { verify: false, decrypt: false }.") : T2;
    }
    let m2 = l2.signature, p2 = l2.publicKey, f2 = l2.cipherText, d2 = pr(p2);
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
    let n = !!t.verify, s2 = !!t.decrypt, i2 = typeof t.decrypt == "string" ? t.decrypt : t.privateKey;
    if (o.includes("signature") && o.includes("publicKey") && (n = true), o.includes("cipherText") && o.includes("ephemeralPK") && (s2 = true), !n && !s2)
      return o;
    let a2 = !o.includes("cipherText");
    if (s2 && a2)
      throw new Error(`[micro-stacks/storage] Expected to get back a string that includes cipherText, is it encrypted? got back: ${JSON.stringify(o)}`);
    if (!i2)
      throw new Error("[micro-stacks/storage] No private key was passed to getFile, a private key needs to be passed if decrypt is set to true");
    if (!n)
      return Ir(o, {
        privateKey: i2
      });
    if (s2 && n)
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
  var es6 = function equal(a2, b2) {
    if (a2 === b2)
      return true;
    if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
      if (a2.constructor !== b2.constructor)
        return false;
      var length, i2, keys;
      if (Array.isArray(a2)) {
        length = a2.length;
        if (length != b2.length)
          return false;
        for (i2 = length; i2-- !== 0; )
          if (!equal(a2[i2], b2[i2]))
            return false;
        return true;
      }
      if (a2 instanceof Map && b2 instanceof Map) {
        if (a2.size !== b2.size)
          return false;
        for (i2 of a2.entries())
          if (!b2.has(i2[0]))
            return false;
        for (i2 of a2.entries())
          if (!equal(i2[1], b2.get(i2[0])))
            return false;
        return true;
      }
      if (a2 instanceof Set && b2 instanceof Set) {
        if (a2.size !== b2.size)
          return false;
        for (i2 of a2.entries())
          if (!b2.has(i2[0]))
            return false;
        return true;
      }
      if (ArrayBuffer.isView(a2) && ArrayBuffer.isView(b2)) {
        length = a2.length;
        if (length != b2.length)
          return false;
        for (i2 = length; i2-- !== 0; )
          if (a2[i2] !== b2[i2])
            return false;
        return true;
      }
      if (a2.constructor === RegExp)
        return a2.source === b2.source && a2.flags === b2.flags;
      if (a2.valueOf !== Object.prototype.valueOf)
        return a2.valueOf() === b2.valueOf();
      if (a2.toString !== Object.prototype.toString)
        return a2.toString() === b2.toString();
      keys = Object.keys(a2);
      length = keys.length;
      if (length !== Object.keys(b2).length)
        return false;
      for (i2 = length; i2-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(b2, keys[i2]))
          return false;
      for (i2 = length; i2-- !== 0; ) {
        var key = keys[i2];
        if (!equal(a2[key], b2[key]))
          return false;
      }
      return true;
    }
    return a2 !== a2 && b2 !== b2;
  };
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
  function st({ storage: n, key: t = et, serialize: e, deserialize: s2 }) {
    return {
      ...n,
      getItem: (i2, r = null) => {
        let o = `${t}.${i2.replace(`${t}.`, "")}`, a2 = n.getItem(o);
        if (!s2)
          return a2 ?? r;
        try {
          return a2 ? s2(a2) : r;
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
  function h$1(n, t) {
    invariant(n, P(t));
  }
  var B = ((s2) => (s2.ContractCall = "contract_call", s2.TokenTransfer = "token_transfer", s2.ContractDeploy = "contract_deploy", s2))(B || {}), L = ((i2) => (i2.Authentication = "status/Authentication", i2.TransactionSigning = "status/TransactionSigning", i2.MessageSigning = "status/MessageSigning", i2.StructuredMessageSigning = "status/StructuredMessageSigning", i2))(L || {}), z = ((e) => (e.IsLoading = "status/IsLoading", e.IsIdle = "status/IsIdle", e))(z || {}), b = "store", C$1 = typeof document > "u";
  var it = function(n) {
    var t = n.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);
    return t;
  };
  function A(n) {
    if (!!n && !/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(n) && !/%[^0-9a-f]/i.test(n) && !/%[0-9a-f](:?[^0-9a-f]|$)/i.test(n)) {
      var t = [], e = "", s2 = "", i2 = "", r = "", o = "", a2 = "";
      if (t = it(n), e = t[1], s2 = t[2], i2 = t[3], r = t[4], o = t[5], !!(e && e.length && i2.length >= 0)) {
        if (s2 && s2.length) {
          if (!(i2.length === 0 || /^\//.test(i2)))
            return;
        } else if (/^\/\//.test(i2))
          return;
        if (!!/^[a-z][a-z0-9\+\-\.]*$/.test(e.toLowerCase()))
          return a2 += e + ":", s2 && s2.length && (a2 += "//" + s2), a2 += i2, r && r.length && (a2 += "?" + r), o && o.length && (a2 += "#" + o), a2;
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
      let s2 = new RegExp(yt, "g").exec(t);
      if (!s2)
        throw new Error("Message did not match the regular expression.");
      if (this.match = s2, this.domain = (i2 = s2 == null ? void 0 : s2.groups) == null ? void 0 : i2.domain, this.domain.length === 0 || !/[^#?]*/.test(this.domain))
        throw new Error("Domain cannot be empty.");
      if (this.address = (r = s2 == null ? void 0 : s2.groups) == null ? void 0 : r.address, !Xt(this.address))
        throw new Error("Invalid address.");
      if (this.statement = (o = s2 == null ? void 0 : s2.groups) == null ? void 0 : o.statement, this.uri = (a2 = s2 == null ? void 0 : s2.groups) == null ? void 0 : a2.uri, !A(this.uri))
        throw new Error("Invalid URI.");
      this.version = (d2 = s2 == null ? void 0 : s2.groups) == null ? void 0 : d2.version, this.nonce = (u2 = s2 == null ? void 0 : s2.groups) == null ? void 0 : u2.nonce, this.chainId = parseInt((S2 = s2 == null ? void 0 : s2.groups) == null ? void 0 : S2.chainId), this.issuedAt = (l2 = s2 == null ? void 0 : s2.groups) == null ? void 0 : l2.issuedAt, this.expirationTime = (c2 = s2 == null ? void 0 : s2.groups) == null ? void 0 : c2.expirationTime, this.notBefore = (g2 = s2 == null ? void 0 : s2.groups) == null ? void 0 : g2.notBefore, this.requestId = (v2 = s2 == null ? void 0 : s2.groups) == null ? void 0 : v2.requestId, this.resources = (K2 = (D2 = s2 == null ? void 0 : s2.groups) == null ? void 0 : D2.resources) == null ? void 0 : K2.split(`
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
    constructor(t, e, s2) {
      __publicField(this, "type");
      __publicField(this, "expected");
      __publicField(this, "received");
      this.type = t, this.expected = e, this.received = s2;
    }
  };
  var w$1 = class w {
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
      let t = `${this.domain} wants you to sign in with your Stacks account:`, e = `URI: ${this.uri}`, s2 = [
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
      return s2 = [
        s2,
        this.statement
      ].join(`

`), this.statement && (s2 += `
`), [
        s2,
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
      return new Promise(async (e, s2) => {
        Object.keys(t).forEach((c2) => {
          W.includes(c2) || s2({
            success: false,
            data: this,
            error: new Error(`${c2} is not a valid key for VerifyParams.`)
          });
        });
        let i2 = (c2) => {
          s2(c2);
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
          let c2 = R$2(S2), g2 = Z$2({
            signature: r
          }), v2 = Q$1({
            hash: c2,
            signature: g2.signature,
            recoveryBytes: g2.recoveryBytes
          });
          Ze$1({
            signature: r,
            message: c2
          }) && (l2 = qe$1(v2, ee$2(this.address)[0]));
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
      let s2 = /([0-9]+)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])[Tt]([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(([Zz])|([+|\-]([01][0-9]|2[0-3]):[0-5][0-9]))/;
      if (this.issuedAt && !s2.test(this.issuedAt))
        throw new Error("Invalid time format.");
      if (this.expirationTime && !s2.test(this.expirationTime))
        throw new Error("Invalid time format.");
      if (this.notBefore && !s2.test(this.notBefore))
        throw new Error("Invalid time format.");
    }
  };
  var y$1 = 1;
  function T({ state: n, version: t }) {
    var e, s2, i2;
    return JSON.stringify([
      [
        (e = n.network) == null ? void 0 : e.chainId,
        (i2 = (s2 = n.network) == null ? void 0 : s2.getCoreApiUrl) == null ? void 0 : i2.call(s2)
      ],
      [
        n.currentAccountIndex,
        n.accounts.map((r) => ({
          appPrivateKey: r.appPrivateKey,
          address: V$1(r.address[0], l$4(r.address[1])),
          profile_url: r.profile_url
        }))
      ],
      t
    ]);
  }
  function Ot(n) {
    let t = JSON.parse(n), [e, s2] = t[0], [i$1, r] = t[1], o = t[2] ?? y$1;
    return {
      network: e === ur.Mainnet ? new i({
        url: s2
      }) : new l$2({
        url: s2
      }),
      currentAccountIndex: i$1,
      accounts: r.map((d2) => {
        let [u2, S2] = ee$2(d2.address);
        return {
          appPrivateKey: d2.appPrivateKey,
          address: [
            u2,
            p$4(S2)
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
      let { version: e, ...s2 } = Ot(n);
      return {
        state: {
          ...k(t),
          ...s2
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
          let e = window.location.host, s2 = new URL(t.url).host, i2 = e === s2, r = t.key === "micro-stacks.store";
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
        var e, s2;
        return (s2 = (e = this.store.getState()) == null ? void 0 : e.onPersistState) == null ? void 0 : s2.call(e, t);
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
        return e ? V$1(e.address[0] === X$1.mainnetP2SH ? X$1.testnetP2SH : X$1.testnetP2PKH, l$4(e.address[1])) : void 0;
      });
      __publicField(this, "selectMainnetStxAddress", (t) => {
        let e = this.selectAccount(t);
        return e ? V$1(e.address[0], l$4(e.address[1])) : void 0;
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
        h$1(e, "App details are not defined for you app. Most functionality (authentication, signing requests) require details be passed to the wallet. Add them to your MicroStacksClient config.");
        let s2 = this.selectAccounts(this.getState());
        this.setIsRequestPending("status/Authentication"), await Nt({
          appDetails: e,
          onFinish: async ({ profile: i2, ...r }) => {
            var S2, l2;
            let [o, a2] = ee$2(r.addresses.mainnet), d2 = [
              o,
              p$4(a2)
            ];
            s2.find((c2) => c2.address === d2) ? this.setState((c2) => ({
              ...c2,
              currentAccountIndex: s2.findIndex((g2) => g2.address === d2)
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
        var e, s2, i2, r;
        return (i2 = (s2 = (e = this.store) == null ? void 0 : e.persist) == null ? void 0 : s2.clearStorage) == null || i2.call(s2), (r = this.onSignOut) == null || r.call(this), this.resetState(), t == null ? void 0 : t();
      });
      __publicField(this, "getSignInMessage", ({ domain: t, nonce: e, version: s2 = "1.0.0" }) => {
        if (!this.handleNoStacksProviderFound())
          return;
        let i2 = this.getState(), r = this.selectAppDetails(i2), o = this.selectStxAddress(i2);
        h$1(r, "App details are not defined for you app. Most functionality (authentication, signing requests) require details be passed to the wallet. Add them to your MicroStacksClient config."), h$1(o, "No current Stacks address can be found. This could be because a session has been invalidated, or the user is not signed in.");
        let a2 = hr("document", {
          throwIfUnavailable: false
        }) ? window.location.origin : "";
        return new w$1({
          domain: r.name,
          address: o,
          statement: "Sign in with Stacks",
          uri: t ?? a2,
          version: s2,
          chainId: ur.Mainnet,
          nonce: e
        });
      });
      __publicField(this, "signTransaction", async (t, e) => {
        if (!this.handleNoStacksProviderFound())
          return;
        let s2 = this.getState(), i2 = this.selectAppDetails(s2), r = this.selectStxAddress(s2), o = this.selectAccount(s2), a2 = this.selectNetwork(s2);
        h$1(i2, "App details are not defined for you app. Most functionality (authentication, signing requests) require details be passed to the wallet. Add them to your MicroStacksClient config."), h$1(r, "No current Stacks address can be found. This could be because a session has been invalidated, or the user is not signed in."), h$1(o, "There is not current user session available. Please make sure the user has signed in before attempting this action."), this.setIsRequestPending("status/TransactionSigning");
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
        return h$1(l2, "Transaction JWT could not be created"), await Gt({
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
        let e = this.getState(), s2 = this.selectAppDetails(e), i2 = this.selectStxAddress(e), r = this.selectAccount(e), o = this.selectNetwork(e);
        h$1(s2, "App details are not defined for you app. Most functionality (authentication, signing requests) require details be passed to the wallet. Add them to your MicroStacksClient config."), h$1(i2, "No current Stacks address can be found. This could be because a session has been invalidated, or the user is not signed in."), h$1(r, "There is not current user session available. Please make sure the user has signed in before attempting this action."), h$1(t.message, "No message found -- a message is required when requesting a message signature."), this.setIsRequestPending("status/MessageSigning");
        let a2;
        return await De({
          appDetails: s2,
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
        let e = this.getState(), s2 = this.selectAppDetails(e), i2 = this.selectStxAddress(e), r = this.selectAccount(e), o = this.selectNetwork(e);
        h$1(s2, "App details are not defined for you app. Most functionality (authentication, signing requests) require details be passed to the wallet. Add them to your MicroStacksClient config."), h$1(i2, "No current Stacks address can be found. This could be because a session has been invalidated, or the user is not signed in."), h$1(r, "There is not current user session available. Please make sure the user has signed in before attempting this action."), h$1(t.message, "No message found -- a message is required when requesting a message signature."), this.setIsRequestPending("status/StructuredMessageSigning");
        let a2;
        return await Ke({
          appDetails: s2,
          privateKey: r.appPrivateKey,
          stxAddress: i2,
          network: o,
          domain: {
            name: ((d2 = t.domain) == null ? void 0 : d2.name) ?? s2.name,
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
        typeof t == "string" ? this.setState((s2) => ({
          ...s2,
          network: t === "mainnet" ? new i() : new l$2()
        })) : this.setState((s2) => ({
          ...s2,
          network: t
        })), this.persist();
      });
      __publicField(this, "putFile", (t, e, { encrypt: s2 = true, sign: i2 }) => {
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
          encrypt: s2,
          sign: i2,
          wasString: typeof e == "string"
        });
      });
      __publicField(this, "getFile", (t, { decrypt: e = true, verify: s2 }) => {
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
          verify: s2
        });
      });
      let e = {
        storage: (t == null ? void 0 : t.storage) ?? F,
        network: (t == null ? void 0 : t.network) ?? new i(),
        ...t
      }, s2 = typeof e.dehydratedState == "function" ? e.dehydratedState(this.storeKey) : e.dehydratedState, i$1 = s2 ? N(s2, e) : {
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
        let s2 = setInterval(() => {
          !!this.getStacksProvider() && (t(), clearInterval(s2));
        }, e);
        return () => {
          typeof s2 < "u" && clearInterval(s2);
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
      this.setState((s2) => ({
        ...s2,
        statuses: {
          ...s2.statuses,
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
      return typeof this.getStacksProvider() > "u" ? typeof this.onNoWalletFound < "u" ? (this.onNoWalletFound(), false) : (h$1(this.getStacksProvider(), "The injected `StacksProvider` cannot be found. This is typically because there is no Stacks wallet available, such as the Hiro web wallet extension or the iOS/Android wallet Xverse."), false) : true;
    }
    selectGaiaHubConfig(t) {
      let e = this.selectHasSession(t), s2 = this.selectAccount(t);
      if (!(!e || !(s2 != null && s2.appPrivateKey)))
        return je({
          gaiaHubUrl: "https://hub.blockstack.org",
          privateKey: s2.appPrivateKey
        });
    }
    async fetchBNSName() {
      var i2;
      let t = this.selectStxAddress(this.getState()), e = this.selectNetwork(this.getState());
      if (!t) {
        console.warn("No Stacks address found while trying to fetch BNS name");
        return;
      }
      let s2 = e.getCoreApiUrl() + `/v1/addresses/stacks/${t}`;
      try {
        let o = await (await this.fetcher(s2)).json();
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
        let s2 = e.getCoreApiUrl() + `/v1/names/${t}/zonefile`;
        return await (await this.fetcher(s2)).json();
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
      var s2;
      if ((e == null ? void 0 : e.publicKey) && (e == null ? void 0 : e.privateKey))
        throw Error("Error: do not pass both `publicKey` and `privateKey` to client.encrypt");
      return Rr(t, {
        ...e,
        privateKey: e.privateKey ?? ((s2 = this.selectAccount(this.getState())) == null ? void 0 : s2.appPrivateKey)
      });
    }
    decrypt(t, e) {
      var i2;
      let s2 = e.privateKey ?? ((i2 = this.selectAccount(this.getState())) == null ? void 0 : i2.appPrivateKey);
      if (!s2)
        throw Error("You must pass a `privateKey` value to client.decrypt");
      return Ir(t, {
        privateKey: s2
      });
    }
  };
  var $;
  function tt(n) {
    let t = (n == null ? void 0 : n.client) ?? new x(n == null ? void 0 : n.config);
    return C$1 ? t : ($ = t, $);
  }
  function p$1(n) {
    return C$1 ? tt(n) : $ ?? tt(n);
  }
  var Be = ({ client: n, state: t }) => n.selectAccount(t || n.getState()), Le = ({ client: n, state: t }) => n.selectStxAddress(t || n.getState()), ze = ({ client: n, state: t }) => n.selectIdentityAddress(t || n.getState()), qe = ({ client: n, state: t }) => n.selectDecentralizedID(t || n.getState()), We = ({ client: n, state: t }) => n.selectStatuses(t || n.getState()), Je = (n, t = p$1()) => t.subscribe(t.selectAccount, n, {
    equalityFn: es6
  }), Ze = (n, t = p$1()) => t.subscribe(t.selectStxAddress, n, {
    equalityFn: es6
  }), Xe = (n, t = p$1()) => t.subscribe(t.selectIdentityAddress, n, {
    equalityFn: es6
  }), Ye = (n, t = p$1()) => t.subscribe(t.selectDecentralizedID, n, {
    equalityFn: es6
  }), ts = (n, t = p$1()) => t.subscribe(t.selectStatuses, n, {
    equalityFn: es6
  });
  var y = "micro-stacks-client-context";
  var se = ({ appName: e, appIconUrl: o, storage: i2 = F, network: g2, dehydratedState: s2, onPersistState: t, onSignOut: r, onAuthentication: u2, onNoWalletFound: d2, fetcher: x2 }) => {
    setContext(y, tt({
      config: {
        appName: e,
        appIconUrl: o,
        storage: i2,
        network: g2,
        dehydratedState: s2,
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
  function h(e, o) {
    return () => {
      let i2 = C();
      return readable(e({
        client: i2
      }), (g2) => o(g2, i2));
    };
  }
  var Q = h(Le, Ze), Y = h(Be, Je), Z = h(ze, Xe), w = h(We, ts), p = h(qe, Ye);
  function a() {
    return derived([
      Y(),
      Q(),
      Z(),
      p()
    ], ([e, o, i2, g2]) => ({
      appPrivateKey: (e == null ? void 0 : e.appPrivateKey) ?? null,
      rawAddress: (e == null ? void 0 : e.address) ?? null,
      stxAddress: o,
      identityAddress: i2,
      decentralizedID: g2,
      profileUrl: (e == null ? void 0 : e.profile_url) ?? null
    }));
  }
  function Ce() {
    let e = C();
    return derived([
      a(),
      w()
    ], ([o, i2]) => ({
      openAuthRequest: e.authenticate,
      signOut: e.signOut,
      isSignedIn: !!o.stxAddress,
      isRequestPending: i2[L.Authentication] === z.IsLoading
    }));
  }
  const stx_eco_wallet_on = "" + new URL("../../assets/stx_eco_wallet_on-090e5a93.png", import.meta.url).href;
  const stx_eco_wallet_off = "" + new URL("../../assets/stx_eco_wallet_off-7e8f173f.png", import.meta.url).href;
  const WalletConnectButton_svelte_svelte_type_style_lang = "";
  const file$4 = "src/lib/header/WalletConnectButton.svelte";
  function create_else_block$2(ctx) {
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
        add_location(img, file$4, 39, 120, 1447);
        attr_dev(span0, "class", "px-1");
        add_location(span0, file$4, 39, 100, 1427);
        attr_dev(a2, "href", "/");
        attr_dev(a2, "class", "pointer px-2");
        add_location(a2, file$4, 39, 24, 1351);
        attr_dev(span1, "class", "nav-item s-03Bkx-y2PLke");
        add_location(span1, file$4, 39, 1, 1328);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, span1, anchor);
        append_hydration_dev(span1, a2);
        append_hydration_dev(a2, span0);
        append_hydration_dev(span0, img);
        append_hydration_dev(a2, t);
        if (!mounted) {
          dispose = listen_dev(a2, "click", prevent_default(ctx[5]), false, true, false);
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
      id: create_else_block$2.name,
      type: "else",
      source: "(39:0) {:else}",
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
        add_location(img, file$4, 37, 88, 1207);
        attr_dev(span0, "class", "px-2");
        add_location(span0, file$4, 37, 68, 1187);
        attr_dev(a2, "href", "/");
        add_location(a2, file$4, 37, 24, 1143);
        attr_dev(span1, "class", "nav-item s-03Bkx-y2PLke");
        add_location(span1, file$4, 37, 1, 1120);
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
      source: "(37:33) ",
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
        add_location(img, file$4, 33, 23, 982);
        attr_dev(span0, "class", "px-2");
        add_location(span0, file$4, 33, 3, 962);
        attr_dev(a2, "href", "/");
        attr_dev(a2, "class", "pointer");
        set_style(a2, "vertical-align", "middle");
        add_location(a2, file$4, 32, 2, 865);
        attr_dev(span1, "class", "nav-item s-03Bkx-y2PLke");
        add_location(span1, file$4, 31, 1, 839);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, span1, anchor);
        append_hydration_dev(span1, a2);
        append_hydration_dev(a2, span0);
        append_hydration_dev(span0, img);
        if (!mounted) {
          dispose = listen_dev(a2, "click", prevent_default(ctx[2]), false, true, false);
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
      source: "(31:27) ",
      ctx
    });
    return block;
  }
  function create_if_block$2(ctx) {
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
        add_location(a2, file$4, 26, 1, 673);
        attr_dev(span, "class", "nav-item s-03Bkx-y2PLke");
        set_style(span, "position", "relative");
        set_style(span, "top", "2px");
        add_location(span, file$4, 25, 0, 610);
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
      id: create_if_block$2.name,
      type: "if",
      source: "(25:0) {#if webWalletNeeded}",
      ctx
    });
    return block;
  }
  function create_fragment$4(ctx) {
    let if_block_anchor;
    function select_block_type(ctx2, dirty) {
      if (ctx2[4])
        return create_if_block$2;
      if (ctx2[0].isSignedIn)
        return create_if_block_1$1;
      if (ctx2[0].isRequestPending)
        return create_if_block_2;
      return create_else_block$2;
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
      id: create_fragment$4.name,
      type: "component",
      source: "",
      ctx
    });
    return block;
  }
  function instance$4($$self, $$props, $$invalidate) {
    let $auth;
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("WalletConnectButton", slots, []);
    const auth = Ce();
    validate_store(auth, "auth");
    component_subscribe($$self, auth, (value) => $$invalidate(0, $auth = value));
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
      login,
      onMount,
      stx_eco_wallet_on,
      stx_eco_wallet_off,
      auth,
      logout,
      doLogin,
      webWalletNeeded,
      $auth
    });
    $$self.$inject_state = ($$props2) => {
      if ("webWalletNeeded" in $$props2)
        $$invalidate(4, webWalletNeeded = $$props2.webWalletNeeded);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    return [
      $auth,
      auth,
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
  const logoWhite = "" + new URL("../../assets/logo-white-68f65e57.jpeg", import.meta.url).href;
  async function fetchSbtcWalletAddress(network) {
    const contractId = network === "mainnet" ? "SP2BJA4JYFJ7SDMNFJZ9TJ3GB80P9Z80ADPGK1C2F.sbtc-alpha" : "SP2BJA4JYFJ7SDMNFJZ9TJ3GB80P9Z80ADPGK1C2F.sbtc-alpha";
    const data = {
      contractAddress: contractId.split(".")[0],
      contractName: contractId.split(".")[1],
      functionName: "get-bitcoin-wallet-address",
      functionArgs: [],
      network
    };
    const result = await callContractReadOnly(data);
    if (result.type.indexOf("some") > -1)
      return result.value;
    if (network === "testnet") {
      return "tb1qasu5x7dllnejmx0dtd5j42quk4q03dl56caqss";
    }
    return "bc1q0pcvvu8ewfqw3p270cwxtsd5pe7us3s8kznftnrhs74w4nfl4rtqjt6hp6";
  }
  async function callContractReadOnly(data) {
    const path = data.network === "mainnet" ? "https://stacks-node-api.mainnet.stacks.co" : "https://stacks-node-api.mainnet.stacks.co";
    const url = path + "/v2/contracts/call-read/" + data.contractAddress + "/" + data.contractName + "/" + data.functionName;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        arguments: data.functionArgs,
        sender: data.contractAddress
      })
    });
    const val = await response.json();
    const result = T$2(c$1(val.result));
    return result;
  }
  const file$3 = "src/lib/header/Header.svelte";
  function create_else_block$1(ctx) {
    let arrowdown;
    let t;
    let current;
    arrowdown = new ArrowDown({
      props: {
        width: 30,
        height: 30,
        class: "mx-1"
      },
      $$inline: true
    });
    const block = {
      c: function create() {
        create_component(arrowdown.$$.fragment);
        t = text(" Pegging Out");
      },
      l: function claim(nodes) {
        claim_component(arrowdown.$$.fragment, nodes);
        t = claim_text(nodes, " Pegging Out");
      },
      m: function mount(target, anchor) {
        mount_component(arrowdown, target, anchor);
        insert_hydration_dev(target, t, anchor);
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
        if (detaching)
          detach_dev(t);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_else_block$1.name,
      type: "else",
      source: "(41:295) {:else}",
      ctx
    });
    return block;
  }
  function create_if_block$1(ctx) {
    let arrowup;
    let t;
    let current;
    arrowup = new ArrowUp({
      props: {
        width: 30,
        height: 30,
        class: "mx-1"
      },
      $$inline: true
    });
    const block = {
      c: function create() {
        create_component(arrowup.$$.fragment);
        t = text(" Pegging In");
      },
      l: function claim(nodes) {
        claim_component(arrowup.$$.fragment, nodes);
        t = claim_text(nodes, " Pegging In");
      },
      m: function mount(target, anchor) {
        mount_component(arrowup, target, anchor);
        insert_hydration_dev(target, t, anchor);
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
        if (detaching)
          detach_dev(t);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block$1.name,
      type: "if",
      source: "(41:215) {#if $sbtcConfig.pegIn}",
      ctx
    });
    return block;
  }
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
    let current_block_type_index;
    let if_block;
    let t2;
    let li3;
    let span3;
    let t3;
    let t4_value = ctx[0].network + "";
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
    let li4;
    let walletconnectbutton;
    let current;
    let mounted;
    let dispose;
    const if_block_creators = [
      create_if_block$1,
      create_else_block$1
    ];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (ctx2[0].pegIn)
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    walletconnectbutton = new WalletConnectButton({
      $$inline: true
    });
    const block = {
      c: function create() {
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
        if_block.c();
        t2 = space();
        li3 = element("li");
        span3 = element("span");
        t3 = text("Network: ");
        t4 = text(t4_value);
        t5 = space();
        ul0 = element("ul");
        li1 = element("li");
        a2 = element("a");
        t6 = text("Testnet");
        t7 = space();
        li2 = element("li");
        a3 = element("a");
        t8 = text("Mainnet");
        t9 = space();
        li4 = element("li");
        create_component(walletconnectbutton.$$.fragment);
        this.h();
      },
      l: function claim(nodes) {
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
        a0_nodes.forEach(detach_dev);
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
        children(span0).forEach(detach_dev);
        button_nodes.forEach(detach_dev);
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
          "data-bs-toggle": true,
          "data-bs-placement": true,
          "data-bs-custom-class": true,
          title: true
        });
        var span1_nodes = children(span1);
        a1 = claim_element(span1_nodes, "A", {
          class: true,
          href: true
        });
        var a1_nodes = children(a1);
        if_block.l(a1_nodes);
        a1_nodes.forEach(detach_dev);
        span1_nodes.forEach(detach_dev);
        span2_nodes.forEach(detach_dev);
        li0_nodes.forEach(detach_dev);
        t2 = claim_space(ul1_nodes);
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
        t3 = claim_text(span3_nodes, "Network: ");
        t4 = claim_text(span3_nodes, t4_value);
        span3_nodes.forEach(detach_dev);
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
        t6 = claim_text(a2_nodes, "Testnet");
        a2_nodes.forEach(detach_dev);
        li1_nodes.forEach(detach_dev);
        t7 = claim_space(ul0_nodes);
        li2 = claim_element(ul0_nodes, "LI", {});
        var li2_nodes = children(li2);
        a3 = claim_element(li2_nodes, "A", {
          class: true,
          href: true
        });
        var a3_nodes = children(a3);
        t8 = claim_text(a3_nodes, "Mainnet");
        a3_nodes.forEach(detach_dev);
        li2_nodes.forEach(detach_dev);
        ul0_nodes.forEach(detach_dev);
        li3_nodes.forEach(detach_dev);
        t9 = claim_space(ul1_nodes);
        li4 = claim_element(ul1_nodes, "LI", {
          class: true
        });
        var li4_nodes = children(li4);
        claim_component(walletconnectbutton.$$.fragment, li4_nodes);
        li4_nodes.forEach(detach_dev);
        ul1_nodes.forEach(detach_dev);
        div0_nodes.forEach(detach_dev);
        div1_nodes.forEach(detach_dev);
        nav_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(img, "class", "nav-logo");
        if (!src_url_equal(img.src, img_src_value = logoWhite))
          attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "CityCoins Test");
        add_location(img, file$3, 31, 4, 1199);
        attr_dev(a0, "class", "navbar-brand");
        attr_dev(a0, "href", "/");
        add_location(a0, file$3, 30, 5, 1161);
        attr_dev(span0, "class", "navbar-toggler-icon");
        add_location(span0, file$3, 34, 4, 1455);
        attr_dev(button, "class", "navbar-toggler");
        attr_dev(button, "type", "button");
        attr_dev(button, "data-bs-toggle", "collapse");
        attr_dev(button, "data-bs-target", "#navbarNav");
        attr_dev(button, "aria-controls", "navbarNav");
        attr_dev(button, "aria-expanded", "false");
        attr_dev(button, "aria-label", "Toggle navigation");
        add_location(button, file$3, 33, 3, 1272);
        attr_dev(a1, "class", "text-white");
        attr_dev(a1, "href", "/");
        add_location(a1, file$3, 40, 140, 1811);
        attr_dev(span1, "data-bs-toggle", "tooltip");
        attr_dev(span1, "data-bs-placement", "top");
        attr_dev(span1, "data-bs-custom-class", "custom-tooltip");
        attr_dev(span1, "title", "Toggle pegging in / pegging out");
        add_location(span1, file$3, 40, 7, 1678);
        attr_dev(span2, "class", "pointer nav-link");
        add_location(span2, file$3, 39, 6, 1639);
        attr_dev(li0, "class", "nav-item");
        add_location(li0, file$3, 38, 5, 1611);
        attr_dev(span3, "class", "nav-link dropdown-toggle ");
        attr_dev(span3, "id", "navbarDropdown");
        attr_dev(span3, "role", "button");
        attr_dev(span3, "data-bs-toggle", "dropdown");
        attr_dev(span3, "aria-expanded", "false");
        add_location(span3, file$3, 44, 6, 2118);
        attr_dev(a2, "class", "dropdown-item");
        attr_dev(a2, "href", "/");
        add_location(a2, file$3, 48, 12, 2391);
        add_location(li1, file$3, 48, 8, 2387);
        attr_dev(a3, "class", "dropdown-item");
        attr_dev(a3, "href", "/");
        add_location(a3, file$3, 49, 12, 2511);
        add_location(li2, file$3, 49, 8, 2507);
        attr_dev(ul0, "class", "dropdown-menu dropdown-menu-start");
        attr_dev(ul0, "aria-labelledby", "navbarDropdown");
        add_location(ul0, file$3, 47, 6, 2299);
        attr_dev(li3, "class", "nav-item dropdown");
        add_location(li3, file$3, 43, 5, 2081);
        attr_dev(li4, "class", "nav-item mb-1");
        add_location(li4, file$3, 52, 5, 2647);
        attr_dev(ul1, "class", "navbar-nav text-white");
        add_location(ul1, file$3, 37, 4, 1571);
        attr_dev(div0, "class", "collapse navbar-collapse");
        attr_dev(div0, "id", "navbarNav");
        add_location(div0, file$3, 36, 3, 1513);
        attr_dev(div1, "class", "container-fluid mx-5");
        add_location(div1, file$3, 29, 2, 1121);
        attr_dev(nav, "class", "navbar navbar-expand-md transparent");
        add_location(nav, file$3, 28, 1, 1069);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, nav, anchor);
        append_hydration_dev(nav, div1);
        append_hydration_dev(div1, a0);
        append_hydration_dev(a0, img);
        append_hydration_dev(div1, t0);
        append_hydration_dev(div1, button);
        append_hydration_dev(button, span0);
        append_hydration_dev(div1, t1);
        append_hydration_dev(div1, div0);
        append_hydration_dev(div0, ul1);
        append_hydration_dev(ul1, li0);
        append_hydration_dev(li0, span2);
        append_hydration_dev(span2, span1);
        append_hydration_dev(span1, a1);
        if_blocks[current_block_type_index].m(a1, null);
        append_hydration_dev(ul1, t2);
        append_hydration_dev(ul1, li3);
        append_hydration_dev(li3, span3);
        append_hydration_dev(span3, t3);
        append_hydration_dev(span3, t4);
        append_hydration_dev(li3, t5);
        append_hydration_dev(li3, ul0);
        append_hydration_dev(ul0, li1);
        append_hydration_dev(li1, a2);
        append_hydration_dev(a2, t6);
        append_hydration_dev(ul0, t7);
        append_hydration_dev(ul0, li2);
        append_hydration_dev(li2, a3);
        append_hydration_dev(a3, t8);
        append_hydration_dev(ul1, t9);
        append_hydration_dev(ul1, li4);
        mount_component(walletconnectbutton, li4, null);
        current = true;
        if (!mounted) {
          dispose = [
            listen_dev(a1, "click", prevent_default(ctx[3]), false, true, false),
            listen_dev(a2, "click", prevent_default(ctx[4]), false, true, false),
            listen_dev(a3, "click", prevent_default(ctx[5]), false, true, false)
          ];
          mounted = true;
        }
      },
      p: function update(ctx2, [dirty]) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2);
        if (current_block_type_index !== previous_block_index) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          }
          transition_in(if_block, 1);
          if_block.m(a1, null);
        }
        if ((!current || dirty & 1) && t4_value !== (t4_value = ctx2[0].network + ""))
          set_data_dev(t4, t4_value);
      },
      i: function intro(local) {
        if (current)
          return;
        transition_in(if_block);
        transition_in(walletconnectbutton.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(if_block);
        transition_out(walletconnectbutton.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(nav);
        if_blocks[current_block_type_index].d();
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
    component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(0, $sbtcConfig = $$value));
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("Header", slots, []);
    const dispatch = createEventDispatcher();
    const updateNetwork = async (newNet) => {
      if (newNet === $sbtcConfig.network)
        return;
      const addr = await fetchSbtcWalletAddress(newNet);
      const currentPeg = $sbtcConfig.pegIn;
      const feeInfo = $sbtcConfig.feeInfo;
      let conf = {
        network: newNet,
        sbtcWalletAddress: addr,
        pegIn: currentPeg,
        feeInfo
      };
      sbtcConfig.update(() => conf);
      dispatch("network_change", {});
    };
    const togglePeg = () => {
      const conf = $sbtcConfig;
      conf.pegIn = !conf.pegIn;
      sbtcConfig.set(conf);
    };
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
        console.warn(`<Header> was created with unknown prop '${key}'`);
    });
    const click_handler = () => togglePeg();
    const click_handler_1 = () => updateNetwork("testnet");
    const click_handler_2 = () => updateNetwork("mainnet");
    $$self.$capture_state = () => ({
      WalletConnectButton,
      logoWhite,
      sbtcConfig,
      fetchSbtcWalletAddress,
      createEventDispatcher,
      ArrowUp,
      ArrowDown,
      dispatch,
      updateNetwork,
      togglePeg,
      $sbtcConfig
    });
    return [
      $sbtcConfig,
      updateNetwork,
      togglePeg,
      click_handler,
      click_handler_1,
      click_handler_2
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
  const stx_eco_discord = "" + new URL("../../assets/stx_eco_discord-5cc61295.png", import.meta.url).href;
  const stx_eco_twitter = "" + new URL("../../assets/stx_eco_twitter-b58c754c.png", import.meta.url).href;
  const stx_eco_github = "" + new URL("../../assets/stx_eco_github-0e15c254.png", import.meta.url).href;
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
  const client = writable({});
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
      if (ctx2[2].isSignedIn)
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
      source: "(71:0) {#if inited}",
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
    let mounted;
    let dispose;
    const block = {
      c: function create() {
        div = element("div");
        p0 = element("p");
        t0 = text("Connect wallet to continue...");
        t1 = space();
        p1 = element("p");
        span1 = element("span");
        a2 = element("a");
        span0 = element("span");
        img = element("img");
        t2 = text(" connect");
        this.h();
      },
      l: function claim(nodes) {
        div = claim_element(nodes, "DIV", {
          class: true
        });
        var div_nodes = children(div);
        p0 = claim_element(div_nodes, "P", {});
        var p0_nodes = children(p0);
        t0 = claim_text(p0_nodes, "Connect wallet to continue...");
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
        div_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        add_location(p0, file, 81, 2, 2742);
        if (!src_url_equal(img.src, img_src_value = stx_eco_wallet_off))
          attr_dev(img, "src", img_src_value);
        attr_dev(img, "alt", "Connect Wallet / Login");
        attr_dev(img, "width", "40");
        attr_dev(img, "height", "auto");
        add_location(img, file, 82, 116, 2895);
        attr_dev(span0, "class", "px-1");
        add_location(span0, file, 82, 96, 2875);
        attr_dev(a2, "href", "/");
        attr_dev(a2, "class", "pointer px-2");
        add_location(a2, file, 82, 28, 2807);
        attr_dev(span1, "class", "nav-item");
        add_location(span1, file, 82, 5, 2784);
        add_location(p1, file, 82, 2, 2781);
        attr_dev(div, "class", "lobby bg-dark s-7IPF32Wcq3s8");
        add_location(div, file, 80, 0, 2712);
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
        if (!mounted) {
          dispose = listen_dev(a2, "click", prevent_default(ctx[5]), false, true, false);
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
      source: "(80:0) {:else}",
      ctx
    });
    return block;
  }
  function create_if_block_1(ctx) {
    let div;
    let header;
    let t0;
    let previous_key = ctx[0];
    let t1;
    let footer;
    let current;
    header = new Header({
      $$inline: true
    });
    header.$on("network_change", ctx[3]);
    let key_block = create_key_block(ctx);
    footer = new Footer({
      $$inline: true
    });
    const block = {
      c: function create() {
        div = element("div");
        create_component(header.$$.fragment);
        t0 = space();
        key_block.c();
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
        key_block.l(div_nodes);
        t1 = claim_space(div_nodes);
        claim_component(footer.$$.fragment, div_nodes);
        div_nodes.forEach(detach_dev);
        this.h();
      },
      h: function hydrate() {
        attr_dev(div, "class", "app s-7IPF32Wcq3s8");
        add_location(div, file, 72, 0, 2579);
      },
      m: function mount(target, anchor) {
        insert_hydration_dev(target, div, anchor);
        mount_component(header, div, null);
        append_hydration_dev(div, t0);
        key_block.m(div, null);
        append_hydration_dev(div, t1);
        mount_component(footer, div, null);
        current = true;
      },
      p: function update(ctx2, dirty) {
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
      i: function intro(local) {
        if (current)
          return;
        transition_in(header.$$.fragment, local);
        transition_in(key_block);
        transition_in(footer.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(header.$$.fragment, local);
        transition_out(key_block);
        transition_out(footer.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(div);
        destroy_component(header);
        key_block.d(detaching);
        destroy_component(footer);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_1.name,
      type: "if",
      source: "(72:0) {#if $auth.isSignedIn}",
      ctx
    });
    return block;
  }
  function create_key_block(ctx) {
    let current;
    const default_slot_template = ctx[7].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[6], null);
    const block = {
      c: function create() {
        if (default_slot)
          default_slot.c();
      },
      l: function claim(nodes) {
        if (default_slot)
          default_slot.l(nodes);
      },
      m: function mount(target, anchor) {
        if (default_slot) {
          default_slot.m(target, anchor);
        }
        current = true;
      },
      p: function update(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 64)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[6], !current ? get_all_dirty_from_scope(ctx2[6]) : get_slot_changes(default_slot_template, ctx2[6], dirty, null), null);
          }
        }
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
        if (default_slot)
          default_slot.d(detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_key_block.name,
      type: "key",
      source: "(75:2) {#key componentKey}",
      ctx
    });
    return block;
  }
  function create_fragment(ctx) {
    let if_block_anchor;
    let current;
    let if_block = ctx[1] && create_if_block(ctx);
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
    component_subscribe($$self, sbtcConfig, ($$value) => $$invalidate(10, $sbtcConfig = $$value));
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("Layout", slots, [
      "default"
    ]);
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
    const auth = Ce();
    validate_store(auth, "auth");
    component_subscribe($$self, auth, (value) => $$invalidate(2, $auth = value));
    const doLogin = () => {
      login($auth);
    };
    const fetchWalletAddress = async () => {
      const addr = await fetchSbtcWalletAddress($sbtcConfig.network);
      const conf = $sbtcConfig;
      conf.sbtcWalletAddress = addr;
      sbtcConfig.update(() => conf);
    };
    let bootstrap;
    onMount(async () => {
      bootstrap = await __vitePreload(() => import("../../chunks/bootstrap.esm-e88d1e6f.js"), true ? [] : void 0, import.meta.url);
      try {
        await fetchWalletAddress();
        const conf = $sbtcConfig;
        conf.feeInfo = await fetchFeeEstimate($sbtcConfig.network);
        conf.feeToApply = conf.feeInfo.low_fee_per_kb;
        sbtcConfig.update(() => conf);
        $$invalidate(1, inited = true);
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
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
        console_1.warn(`<Layout> was created with unknown prop '${key}'`);
    });
    $$self.$$set = ($$props2) => {
      if ("$$scope" in $$props2)
        $$invalidate(6, $$scope = $$props2.$$scope);
    };
    $$self.$capture_state = () => ({
      getAuth: Ce,
      tick,
      onMount,
      onDestroy,
      Header,
      Footer,
      mountClient: se,
      getMicroStacksClient: C,
      client,
      fetchSbtcWalletAddress,
      sbtcConfig,
      StacksTestnet: l$2,
      StacksMainnet: i,
      fetchFeeEstimate,
      login,
      stx_eco_wallet_off,
      componentKey,
      unsubscribe,
      networkChange,
      inited,
      origin,
      config,
      auth,
      doLogin,
      fetchWalletAddress,
      bootstrap,
      $sbtcConfig,
      $auth
    });
    $$self.$inject_state = ($$props2) => {
      if ("componentKey" in $$props2)
        $$invalidate(0, componentKey = $$props2.componentKey);
      if ("inited" in $$props2)
        $$invalidate(1, inited = $$props2.inited);
      if ("origin" in $$props2)
        origin = $$props2.origin;
      if ("bootstrap" in $$props2)
        bootstrap = $$props2.bootstrap;
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
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
  Layout = class Layout extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance, create_fragment, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "Layout",
        options,
        id: create_fragment.name
      });
    }
  };
})();
export {
  __tla,
  Layout as default
};
