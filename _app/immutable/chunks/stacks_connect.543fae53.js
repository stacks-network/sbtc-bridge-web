import { u as utils$1, a as sha256$3, h as hmac$2, s as sbtcConfig } from "./hmac.1e7e1fcb.js";
import { d as fetchUserSbtcBalance } from "./bridge_api.d7e0bd88.js";
import { _ as __vitePreload } from "./preload-helper.f8376bb0.js";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var f2 = n.default;
  if (typeof f2 == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        var args = [null];
        args.push.apply(args, arguments);
        var Ctor = Function.bind.apply(f2, args);
        return new Ctor();
      }
      return f2.apply(this, arguments);
    };
    a.prototype = f2.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var lib$1 = {};
var encoding = {};
const require$$5 = /* @__PURE__ */ getAugmentedNamespace(utils$1);
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.c32decode = exports.c32normalize = exports.c32encode = exports.c32 = void 0;
  const utils_12 = require$$5;
  exports.c32 = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
  const hex = "0123456789abcdef";
  function c32encode(inputHex, minLength) {
    if (!inputHex.match(/^[0-9a-fA-F]*$/)) {
      throw new Error("Not a hex-encoded string");
    }
    if (inputHex.length % 2 !== 0) {
      inputHex = `0${inputHex}`;
    }
    inputHex = inputHex.toLowerCase();
    let res = [];
    let carry = 0;
    for (let i = inputHex.length - 1; i >= 0; i--) {
      if (carry < 4) {
        const currentCode = hex.indexOf(inputHex[i]) >> carry;
        let nextCode = 0;
        if (i !== 0) {
          nextCode = hex.indexOf(inputHex[i - 1]);
        }
        const nextBits = 1 + carry;
        const nextLowBits = nextCode % (1 << nextBits) << 5 - nextBits;
        const curC32Digit = exports.c32[currentCode + nextLowBits];
        carry = nextBits;
        res.unshift(curC32Digit);
      } else {
        carry = 0;
      }
    }
    let C32leadingZeros = 0;
    for (let i = 0; i < res.length; i++) {
      if (res[i] !== "0") {
        break;
      } else {
        C32leadingZeros++;
      }
    }
    res = res.slice(C32leadingZeros);
    const zeroPrefix = new TextDecoder().decode((0, utils_12.hexToBytes)(inputHex)).match(/^\u0000*/);
    const numLeadingZeroBytesInHex = zeroPrefix ? zeroPrefix[0].length : 0;
    for (let i = 0; i < numLeadingZeroBytesInHex; i++) {
      res.unshift(exports.c32[0]);
    }
    if (minLength) {
      const count = minLength - res.length;
      for (let i = 0; i < count; i++) {
        res.unshift(exports.c32[0]);
      }
    }
    return res.join("");
  }
  exports.c32encode = c32encode;
  function c32normalize(c32input) {
    return c32input.toUpperCase().replace(/O/g, "0").replace(/L|I/g, "1");
  }
  exports.c32normalize = c32normalize;
  function c32decode(c32input, minLength) {
    c32input = c32normalize(c32input);
    if (!c32input.match(`^[${exports.c32}]*$`)) {
      throw new Error("Not a c32-encoded string");
    }
    const zeroPrefix = c32input.match(`^${exports.c32[0]}*`);
    const numLeadingZeroBytes = zeroPrefix ? zeroPrefix[0].length : 0;
    let res = [];
    let carry = 0;
    let carryBits = 0;
    for (let i = c32input.length - 1; i >= 0; i--) {
      if (carryBits === 4) {
        res.unshift(hex[carry]);
        carryBits = 0;
        carry = 0;
      }
      const currentCode = exports.c32.indexOf(c32input[i]) << carryBits;
      const currentValue = currentCode + carry;
      const currentHexDigit = hex[currentValue % 16];
      carryBits += 1;
      carry = currentValue >> 4;
      if (carry > 1 << carryBits) {
        throw new Error("Panic error in decoding.");
      }
      res.unshift(currentHexDigit);
    }
    res.unshift(hex[carry]);
    if (res.length % 2 === 1) {
      res.unshift("0");
    }
    let hexLeadingZeros = 0;
    for (let i = 0; i < res.length; i++) {
      if (res[i] !== "0") {
        break;
      } else {
        hexLeadingZeros++;
      }
    }
    res = res.slice(hexLeadingZeros - hexLeadingZeros % 2);
    let hexStr = res.join("");
    for (let i = 0; i < numLeadingZeroBytes; i++) {
      hexStr = `00${hexStr}`;
    }
    if (minLength) {
      const count = minLength * 2 - hexStr.length;
      for (let i = 0; i < count; i += 2) {
        hexStr = `00${hexStr}`;
      }
    }
    return hexStr;
  }
  exports.c32decode = c32decode;
})(encoding);
var checksum = {};
const require$$0$1 = /* @__PURE__ */ getAugmentedNamespace(sha256$3);
Object.defineProperty(checksum, "__esModule", { value: true });
checksum.c32checkDecode = checksum.c32checkEncode = void 0;
const sha256_1$5 = require$$0$1;
const utils_1$2 = require$$5;
const encoding_1 = encoding;
function c32checksum(dataHex) {
  const dataHash = (0, sha256_1$5.sha256)((0, sha256_1$5.sha256)((0, utils_1$2.hexToBytes)(dataHex)));
  const checksum2 = (0, utils_1$2.bytesToHex)(dataHash.slice(0, 4));
  return checksum2;
}
function c32checkEncode(version2, data) {
  if (version2 < 0 || version2 >= 32) {
    throw new Error("Invalid version (must be between 0 and 31)");
  }
  if (!data.match(/^[0-9a-fA-F]*$/)) {
    throw new Error("Invalid data (not a hex string)");
  }
  data = data.toLowerCase();
  if (data.length % 2 !== 0) {
    data = `0${data}`;
  }
  let versionHex = version2.toString(16);
  if (versionHex.length === 1) {
    versionHex = `0${versionHex}`;
  }
  const checksumHex = c32checksum(`${versionHex}${data}`);
  const c32str = (0, encoding_1.c32encode)(`${data}${checksumHex}`);
  return `${encoding_1.c32[version2]}${c32str}`;
}
checksum.c32checkEncode = c32checkEncode;
function c32checkDecode(c32data) {
  c32data = (0, encoding_1.c32normalize)(c32data);
  const dataHex = (0, encoding_1.c32decode)(c32data.slice(1));
  const versionChar = c32data[0];
  const version2 = encoding_1.c32.indexOf(versionChar);
  const checksum2 = dataHex.slice(-8);
  let versionHex = version2.toString(16);
  if (versionHex.length === 1) {
    versionHex = `0${versionHex}`;
  }
  if (c32checksum(`${versionHex}${dataHex.substring(0, dataHex.length - 8)}`) !== checksum2) {
    throw new Error("Invalid c32check string: checksum mismatch");
  }
  return [version2, dataHex.substring(0, dataHex.length - 8)];
}
checksum.c32checkDecode = c32checkDecode;
var address = {};
var base58check = {};
function base(ALPHABET2) {
  if (ALPHABET2.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255;
  }
  for (var i = 0; i < ALPHABET2.length; i++) {
    var x = ALPHABET2.charAt(i);
    var xc = x.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x + " is ambiguous");
    }
    BASE_MAP[xc] = i;
  }
  var BASE = ALPHABET2.length;
  var LEADER = ALPHABET2.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode2(source) {
    if (source instanceof Uint8Array)
      ;
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    var zeroes = 0;
    var length = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i2 = 0;
      for (var it1 = size - 1; (carry !== 0 || i2 < length) && it1 !== -1; it1--, i2++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length = i2;
      pbegin++;
    }
    var it2 = size - length;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET2.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    var zeroes = 0;
    var length = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i2 = 0;
      for (var it3 = size - 1; (carry !== 0 || i2 < length) && it3 !== -1; it3--, i2++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length = i2;
      psz++;
    }
    var it4 = size - length;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j2 = zeroes;
    while (it4 !== size) {
      vch[j2++] = b256[it4++];
    }
    return vch;
  }
  function decode2(string) {
    var buffer = decodeUnsafe(string);
    if (buffer) {
      return buffer;
    }
    throw new Error("Non-base" + BASE + " character");
  }
  return {
    encode: encode2,
    decodeUnsafe,
    decode: decode2
  };
}
var src = base;
Object.defineProperty(base58check, "__esModule", { value: true });
base58check.decode = base58check.encode = void 0;
const sha256_1$4 = require$$0$1;
const utils_1$1 = require$$5;
const basex$1 = src;
const ALPHABET$1 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
function encode$1(data, prefix = "00") {
  const dataBytes = typeof data === "string" ? (0, utils_1$1.hexToBytes)(data) : data;
  const prefixBytes = typeof prefix === "string" ? (0, utils_1$1.hexToBytes)(prefix) : data;
  if (!(dataBytes instanceof Uint8Array) || !(prefixBytes instanceof Uint8Array)) {
    throw new TypeError("Argument must be of type Uint8Array or string");
  }
  const checksum2 = (0, sha256_1$4.sha256)((0, sha256_1$4.sha256)(new Uint8Array([...prefixBytes, ...dataBytes])));
  return basex$1(ALPHABET$1).encode([...prefixBytes, ...dataBytes, ...checksum2.slice(0, 4)]);
}
base58check.encode = encode$1;
function decode$2(string) {
  const bytes2 = basex$1(ALPHABET$1).decode(string);
  const prefixBytes = bytes2.slice(0, 1);
  const dataBytes = bytes2.slice(1, -4);
  const checksum2 = (0, sha256_1$4.sha256)((0, sha256_1$4.sha256)(new Uint8Array([...prefixBytes, ...dataBytes])));
  bytes2.slice(-4).forEach((check, index) => {
    if (check !== checksum2[index]) {
      throw new Error("Invalid checksum");
    }
  });
  return { prefix: prefixBytes, data: dataBytes };
}
base58check.decode = decode$2;
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.c32ToB58 = exports.b58ToC32 = exports.c32addressDecode = exports.c32address = exports.versions = void 0;
  const checksum_1 = checksum;
  const base58check$1 = base58check;
  const utils_12 = require$$5;
  exports.versions = {
    mainnet: {
      p2pkh: 22,
      p2sh: 20
      // 'M'
    },
    testnet: {
      p2pkh: 26,
      p2sh: 21
      // 'N'
    }
  };
  const ADDR_BITCOIN_TO_STACKS = {};
  ADDR_BITCOIN_TO_STACKS[0] = exports.versions.mainnet.p2pkh;
  ADDR_BITCOIN_TO_STACKS[5] = exports.versions.mainnet.p2sh;
  ADDR_BITCOIN_TO_STACKS[111] = exports.versions.testnet.p2pkh;
  ADDR_BITCOIN_TO_STACKS[196] = exports.versions.testnet.p2sh;
  const ADDR_STACKS_TO_BITCOIN = {};
  ADDR_STACKS_TO_BITCOIN[exports.versions.mainnet.p2pkh] = 0;
  ADDR_STACKS_TO_BITCOIN[exports.versions.mainnet.p2sh] = 5;
  ADDR_STACKS_TO_BITCOIN[exports.versions.testnet.p2pkh] = 111;
  ADDR_STACKS_TO_BITCOIN[exports.versions.testnet.p2sh] = 196;
  function c32address(version2, hash160hex) {
    if (!hash160hex.match(/^[0-9a-fA-F]{40}$/)) {
      throw new Error("Invalid argument: not a hash160 hex string");
    }
    const c32string = (0, checksum_1.c32checkEncode)(version2, hash160hex);
    return `S${c32string}`;
  }
  exports.c32address = c32address;
  function c32addressDecode(c32addr) {
    if (c32addr.length <= 5) {
      throw new Error("Invalid c32 address: invalid length");
    }
    if (c32addr[0] != "S") {
      throw new Error('Invalid c32 address: must start with "S"');
    }
    return (0, checksum_1.c32checkDecode)(c32addr.slice(1));
  }
  exports.c32addressDecode = c32addressDecode;
  function b58ToC32(b58check, version2 = -1) {
    const addrInfo = base58check$1.decode(b58check);
    const hash160String = (0, utils_12.bytesToHex)(addrInfo.data);
    const addrVersion = parseInt((0, utils_12.bytesToHex)(addrInfo.prefix), 16);
    let stacksVersion;
    if (version2 < 0) {
      stacksVersion = addrVersion;
      if (ADDR_BITCOIN_TO_STACKS[addrVersion] !== void 0) {
        stacksVersion = ADDR_BITCOIN_TO_STACKS[addrVersion];
      }
    } else {
      stacksVersion = version2;
    }
    return c32address(stacksVersion, hash160String);
  }
  exports.b58ToC32 = b58ToC32;
  function c32ToB58(c32string, version2 = -1) {
    const addrInfo = c32addressDecode(c32string);
    const stacksVersion = addrInfo[0];
    const hash160String = addrInfo[1];
    let bitcoinVersion;
    if (version2 < 0) {
      bitcoinVersion = stacksVersion;
      if (ADDR_STACKS_TO_BITCOIN[stacksVersion] !== void 0) {
        bitcoinVersion = ADDR_STACKS_TO_BITCOIN[stacksVersion];
      }
    } else {
      bitcoinVersion = version2;
    }
    let prefix = bitcoinVersion.toString(16);
    if (prefix.length === 1) {
      prefix = `0${prefix}`;
    }
    return base58check$1.encode(hash160String, prefix);
  }
  exports.c32ToB58 = c32ToB58;
})(address);
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.b58ToC32 = exports.c32ToB58 = exports.versions = exports.c32normalize = exports.c32addressDecode = exports.c32address = exports.c32checkDecode = exports.c32checkEncode = exports.c32decode = exports.c32encode = void 0;
  const encoding_12 = encoding;
  Object.defineProperty(exports, "c32encode", { enumerable: true, get: function() {
    return encoding_12.c32encode;
  } });
  Object.defineProperty(exports, "c32decode", { enumerable: true, get: function() {
    return encoding_12.c32decode;
  } });
  Object.defineProperty(exports, "c32normalize", { enumerable: true, get: function() {
    return encoding_12.c32normalize;
  } });
  const checksum_1 = checksum;
  Object.defineProperty(exports, "c32checkEncode", { enumerable: true, get: function() {
    return checksum_1.c32checkEncode;
  } });
  Object.defineProperty(exports, "c32checkDecode", { enumerable: true, get: function() {
    return checksum_1.c32checkDecode;
  } });
  const address_1 = address;
  Object.defineProperty(exports, "c32address", { enumerable: true, get: function() {
    return address_1.c32address;
  } });
  Object.defineProperty(exports, "c32addressDecode", { enumerable: true, get: function() {
    return address_1.c32addressDecode;
  } });
  Object.defineProperty(exports, "c32ToB58", { enumerable: true, get: function() {
    return address_1.c32ToB58;
  } });
  Object.defineProperty(exports, "b58ToC32", { enumerable: true, get: function() {
    return address_1.b58ToC32;
  } });
  Object.defineProperty(exports, "versions", { enumerable: true, get: function() {
    return address_1.versions;
  } });
})(lib$1);
const config = {
  network: {
    layer1: "placeholder"
  },
  logLevel: "debug"
};
const ERROR_CODES = {
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
Object.freeze(ERROR_CODES);
class BlockstackError extends Error {
  constructor(error) {
    super();
    let message = error.message;
    let bugDetails = `Error Code: ${error.code}`;
    let stack = this.stack;
    if (!stack) {
      try {
        throw new Error();
      } catch (e) {
        stack = e.stack;
      }
    } else {
      bugDetails += `Stack Trace:
${stack}`;
    }
    message += `
If you believe this exception is caused by a bug in stacks.js,
      please file a bug report: https://github.com/blockstack/stacks.js/issues

${bugDetails}`;
    this.message = message;
    this.code = error.code;
    this.parameter = error.parameter ? error.parameter : void 0;
  }
  toString() {
    return `${super.toString()}
    code: ${this.code} param: ${this.parameter ? this.parameter : "n/a"}`;
  }
}
class MissingParameterError extends BlockstackError {
  constructor(parameter, message = "") {
    super({ code: ERROR_CODES.MISSING_PARAMETER, message, parameter });
    this.name = "MissingParametersError";
  }
}
class InvalidDIDError extends BlockstackError {
  constructor(message = "") {
    super({ code: ERROR_CODES.INVALID_DID_ERROR, message });
    this.name = "InvalidDIDError";
  }
}
class LoginFailedError extends BlockstackError {
  constructor(reason) {
    const message = `Failed to login: ${reason}`;
    super({ code: ERROR_CODES.LOGIN_FAILED_ERROR, message });
    this.message = message;
    this.name = "LoginFailedError";
  }
}
class FailedDecryptionError extends BlockstackError {
  constructor(message = "Unable to decrypt cipher object.") {
    super({ code: ERROR_CODES.FAILED_DECRYPTION_ERROR, message });
    this.message = message;
    this.name = "FailedDecryptionError";
  }
}
class InvalidStateError extends BlockstackError {
  constructor(message) {
    super({ code: ERROR_CODES.INVALID_STATE, message });
    this.message = message;
    this.name = "InvalidStateError";
  }
}
class NoSessionDataError extends BlockstackError {
  constructor(message) {
    super({ code: ERROR_CODES.INVALID_STATE, message });
    this.message = message;
    this.name = "NoSessionDataError";
  }
}
const levels = ["debug", "info", "warn", "error", "none"];
const levelToInt = {};
for (let index = 0; index < levels.length; index++) {
  const level = levels[index];
  levelToInt[level] = index;
}
class Logger {
  static error(message) {
    if (!this.shouldLog("error"))
      return;
    console.error(this.logMessage("error", message));
  }
  static warn(message) {
    if (!this.shouldLog("warn"))
      return;
    console.warn(this.logMessage("warn", message));
  }
  static info(message) {
    if (!this.shouldLog("info"))
      return;
    console.log(this.logMessage("info", message));
  }
  static debug(message) {
    if (!this.shouldLog("debug"))
      return;
    console.log(this.logMessage("debug", message));
  }
  static logMessage(level, message) {
    return `[${level.toUpperCase()}] ${message}`;
  }
  static shouldLog(level) {
    const currentLevel = levelToInt[config.logLevel];
    return currentLevel <= levelToInt[level];
  }
}
function nextMonth() {
  return new Date((/* @__PURE__ */ new Date()).setMonth((/* @__PURE__ */ new Date()).getMonth() + 1));
}
function nextHour() {
  return new Date((/* @__PURE__ */ new Date()).setHours((/* @__PURE__ */ new Date()).getHours() + 1));
}
function isLaterVersion(v1, v2) {
  if (v1 === void 0 || v1 === "") {
    v1 = "0.0.0";
  }
  if (v2 === void 0 || v1 === "") {
    v2 = "0.0.0";
  }
  const v1tuple = v1.split(".").map((x) => parseInt(x, 10));
  const v2tuple = v2.split(".").map((x) => parseInt(x, 10));
  for (let index = 0; index < v2.length; index++) {
    if (index >= v1.length) {
      v2tuple.push(0);
    }
    if (v1tuple[index] < v2tuple[index]) {
      return false;
    }
  }
  return true;
}
function makeUUID4() {
  let d = (/* @__PURE__ */ new Date()).getTime();
  if (typeof performance !== "undefined" && typeof performance.now === "function") {
    d += performance.now();
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : r & 3 | 8).toString(16);
  });
}
function getGlobalScope() {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("Unexpected runtime environment - no supported global scope (`window`, `self`, `global`) available");
}
function getAPIUsageErrorMessage(scopeObject, apiName, usageDesc) {
  if (usageDesc) {
    return `Use of '${usageDesc}' requires \`${apiName}\` which is unavailable on the '${scopeObject}' object within the currently executing environment.`;
  } else {
    return `\`${apiName}\` is unavailable on the '${scopeObject}' object within the currently executing environment.`;
  }
}
function getGlobalObject(name, { throwIfUnavailable, usageDesc, returnEmptyObject } = {}) {
  let globalScope = void 0;
  try {
    globalScope = getGlobalScope();
    if (globalScope) {
      const obj = globalScope[name];
      if (obj) {
        return obj;
      }
    }
  } catch (error) {
    Logger.error(`Error getting object '${name}' from global scope '${globalScope}': ${error}`);
  }
  if (throwIfUnavailable) {
    const errMsg = getAPIUsageErrorMessage(globalScope, name.toString(), usageDesc);
    Logger.error(errMsg);
    throw new Error(errMsg);
  }
  if (returnEmptyObject) {
    return {};
  }
  return void 0;
}
function intToBytes(value, signed, byteLength2) {
  return bigIntToBytes(intToBigInt(value, signed), byteLength2);
}
function intToBigInt(value, signed) {
  let parsedValue = value;
  if (typeof parsedValue === "number") {
    if (!Number.isInteger(parsedValue)) {
      throw new RangeError(`Invalid value. Values of type 'number' must be an integer.`);
    }
    return BigInt(parsedValue);
  }
  if (typeof parsedValue === "string") {
    if (parsedValue.toLowerCase().startsWith("0x")) {
      let hex = parsedValue.slice(2);
      hex = hex.padStart(hex.length + hex.length % 2, "0");
      parsedValue = hexToBytes$1(hex);
    } else {
      try {
        return BigInt(parsedValue);
      } catch (error) {
        if (error instanceof SyntaxError) {
          throw new RangeError(`Invalid value. String integer '${parsedValue}' is not finite.`);
        }
      }
    }
  }
  if (typeof parsedValue === "bigint") {
    return parsedValue;
  }
  if (parsedValue instanceof Uint8Array) {
    if (signed) {
      const bn = fromTwos(BigInt(`0x${bytesToHex$1(parsedValue)}`), BigInt(parsedValue.byteLength * 8));
      return BigInt(bn.toString());
    } else {
      return BigInt(`0x${bytesToHex$1(parsedValue)}`);
    }
  }
  if (parsedValue != null && typeof parsedValue === "object" && parsedValue.constructor.name === "BN") {
    return BigInt(parsedValue.toString());
  }
  throw new TypeError(`Invalid value type. Must be a number, bigint, integer-string, hex-string, or Uint8Array.`);
}
function hexToBigInt(hex) {
  if (typeof hex !== "string")
    throw new TypeError(`hexToBigInt: expected string, got ${typeof hex}`);
  return BigInt(`0x${hex}`);
}
function intToHex(integer, lengthBytes = 8) {
  const value = typeof integer === "bigint" ? integer : intToBigInt(integer, false);
  return value.toString(16).padStart(lengthBytes * 2, "0");
}
function hexToInt(hex) {
  return parseInt(hex, 16);
}
function bigIntToBytes(value, length = 16) {
  const hex = intToHex(value, length);
  return hexToBytes$1(hex);
}
function toTwos(value, width) {
  if (value < -(BigInt(1) << width - BigInt(1)) || (BigInt(1) << width - BigInt(1)) - BigInt(1) < value) {
    throw `Unable to represent integer in width: ${width}`;
  }
  if (value >= BigInt(0)) {
    return BigInt(value);
  }
  return value + (BigInt(1) << width);
}
function nthBit(value, n) {
  return value & BigInt(1) << n;
}
function fromTwos(value, width) {
  if (nthBit(value, width - BigInt(1))) {
    return value - (BigInt(1) << width);
  }
  return value;
}
const hexes$1 = Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
function bytesToHex$1(uint8a) {
  if (!(uint8a instanceof Uint8Array))
    throw new Error("Uint8Array expected");
  let hex = "";
  for (const u of uint8a) {
    hex += hexes$1[u];
  }
  return hex;
}
function hexToBytes$1(hex) {
  if (typeof hex !== "string") {
    throw new TypeError(`hexToBytes: expected string, got ${typeof hex}`);
  }
  const paddedHex = hex.length % 2 ? `0${hex}` : hex;
  const array = new Uint8Array(paddedHex.length / 2);
  for (let i = 0; i < array.length; i++) {
    const j = i * 2;
    const hexByte = paddedHex.slice(j, j + 2);
    const byte = Number.parseInt(hexByte, 16);
    if (Number.isNaN(byte) || byte < 0)
      throw new Error("Invalid byte sequence");
    array[i] = byte;
  }
  return array;
}
function utf8ToBytes$2(str) {
  return new TextEncoder().encode(str);
}
function bytesToUtf8(arr) {
  return new TextDecoder().decode(arr);
}
function asciiToBytes(str) {
  const byteArray = [];
  for (let i = 0; i < str.length; i++) {
    byteArray.push(str.charCodeAt(i) & 255);
  }
  return new Uint8Array(byteArray);
}
function bytesToAscii(arr) {
  return String.fromCharCode.apply(null, arr);
}
function isNotOctet(octet) {
  return !Number.isInteger(octet) || octet < 0 || octet > 255;
}
function octetsToBytes(numbers) {
  if (numbers.some(isNotOctet))
    throw new Error("Some values are invalid bytes.");
  return new Uint8Array(numbers);
}
function concatBytes$1(...arrays) {
  if (!arrays.every((a) => a instanceof Uint8Array))
    throw new Error("Uint8Array list expected");
  if (arrays.length === 1)
    return arrays[0];
  const length = arrays.reduce((a, arr) => a + arr.length, 0);
  const result = new Uint8Array(length);
  for (let i = 0, pad2 = 0; i < arrays.length; i++) {
    const arr = arrays[i];
    result.set(arr, pad2);
    pad2 += arr.length;
  }
  return result;
}
function concatArray(elements) {
  return concatBytes$1(...elements.map((e) => {
    if (typeof e === "number")
      return octetsToBytes([e]);
    if (e instanceof Array)
      return octetsToBytes(e);
    return e;
  }));
}
var ChainID$1;
(function(ChainID2) {
  ChainID2[ChainID2["Testnet"] = 2147483648] = "Testnet";
  ChainID2[ChainID2["Mainnet"] = 1] = "Mainnet";
})(ChainID$1 || (ChainID$1 = {}));
var TransactionVersion$1;
(function(TransactionVersion2) {
  TransactionVersion2[TransactionVersion2["Mainnet"] = 0] = "Mainnet";
  TransactionVersion2[TransactionVersion2["Testnet"] = 128] = "Testnet";
})(TransactionVersion$1 || (TransactionVersion$1 = {}));
const PRIVATE_KEY_COMPRESSED_LENGTH = 33;
const BLOCKSTACK_DEFAULT_GAIA_HUB_URL = "https://hub.blockstack.org";
const COORDINATE_BYTES = 32;
function parseRecoverableSignatureVrs(signature) {
  if (signature.length < COORDINATE_BYTES * 2 * 2 + 1) {
    throw new Error("Invalid signature");
  }
  const recoveryIdHex = signature.slice(0, 2);
  const r = signature.slice(2, 2 + COORDINATE_BYTES * 2);
  const s = signature.slice(2 + COORDINATE_BYTES * 2);
  return {
    recoveryId: hexToInt(recoveryIdHex),
    r,
    s
  };
}
function privateKeyToBytes(privateKey) {
  const privateKeyBuffer = typeof privateKey === "string" ? hexToBytes$1(privateKey) : privateKey;
  if (privateKeyBuffer.length != 32 && privateKeyBuffer.length != 33) {
    throw new Error(`Improperly formatted private-key. Private-key byte length should be 32 or 33. Length provided: ${privateKeyBuffer.length}`);
  }
  if (privateKeyBuffer.length == 33 && privateKeyBuffer[32] !== 1) {
    throw new Error("Improperly formatted private-key. 33 bytes indicate compressed key, but the last byte must be == 01");
  }
  return privateKeyBuffer;
}
function readUInt16BE(source, offset) {
  return (source[offset + 0] << 8 | source[offset + 1]) >>> 0;
}
function writeUInt16BE(source, value, offset) {
  source[offset + 0] = value >>> 8;
  source[offset + 1] = value >>> 0;
}
function readUInt8(source, offset) {
  return source[offset];
}
function readUInt32BE(source, offset) {
  return source[offset] * 2 ** 24 + source[offset + 1] * 2 ** 16 + source[offset + 2] * 2 ** 8 + source[offset + 3];
}
function writeUInt32BE(destination, value, offset) {
  destination[offset + 3] = value;
  value >>>= 8;
  destination[offset + 2] = value;
  value >>>= 8;
  destination[offset + 1] = value;
  value >>>= 8;
  destination[offset] = value;
}
(function() {
  (function(self2) {
    (function(exports) {
      var support = {
        searchParams: "URLSearchParams" in self2,
        iterable: "Symbol" in self2 && "iterator" in Symbol,
        blob: "FileReader" in self2 && "Blob" in self2 && function() {
          try {
            new Blob();
            return true;
          } catch (e) {
            return false;
          }
        }(),
        formData: "FormData" in self2,
        arrayBuffer: "ArrayBuffer" in self2
      };
      function isDataView(obj) {
        return obj && DataView.prototype.isPrototypeOf(obj);
      }
      if (support.arrayBuffer) {
        var viewClasses = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ];
        var isArrayBufferView = ArrayBuffer.isView || function(obj) {
          return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
        };
      }
      function normalizeName(name) {
        if (typeof name !== "string") {
          name = String(name);
        }
        if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
          throw new TypeError("Invalid character in header field name");
        }
        return name.toLowerCase();
      }
      function normalizeValue(value) {
        if (typeof value !== "string") {
          value = String(value);
        }
        return value;
      }
      function iteratorFor(items) {
        var iterator = {
          next: function() {
            var value = items.shift();
            return { done: value === void 0, value };
          }
        };
        if (support.iterable) {
          iterator[Symbol.iterator] = function() {
            return iterator;
          };
        }
        return iterator;
      }
      function Headers(headers) {
        this.map = {};
        if (headers instanceof Headers) {
          headers.forEach(function(value, name) {
            this.append(name, value);
          }, this);
        } else if (Array.isArray(headers)) {
          headers.forEach(function(header) {
            this.append(header[0], header[1]);
          }, this);
        } else if (headers) {
          Object.getOwnPropertyNames(headers).forEach(function(name) {
            this.append(name, headers[name]);
          }, this);
        }
      }
      Headers.prototype.append = function(name, value) {
        name = normalizeName(name);
        value = normalizeValue(value);
        var oldValue = this.map[name];
        this.map[name] = oldValue ? oldValue + ", " + value : value;
      };
      Headers.prototype["delete"] = function(name) {
        delete this.map[normalizeName(name)];
      };
      Headers.prototype.get = function(name) {
        name = normalizeName(name);
        return this.has(name) ? this.map[name] : null;
      };
      Headers.prototype.has = function(name) {
        return this.map.hasOwnProperty(normalizeName(name));
      };
      Headers.prototype.set = function(name, value) {
        this.map[normalizeName(name)] = normalizeValue(value);
      };
      Headers.prototype.forEach = function(callback, thisArg) {
        for (var name in this.map) {
          if (this.map.hasOwnProperty(name)) {
            callback.call(thisArg, this.map[name], name, this);
          }
        }
      };
      Headers.prototype.keys = function() {
        var items = [];
        this.forEach(function(value, name) {
          items.push(name);
        });
        return iteratorFor(items);
      };
      Headers.prototype.values = function() {
        var items = [];
        this.forEach(function(value) {
          items.push(value);
        });
        return iteratorFor(items);
      };
      Headers.prototype.entries = function() {
        var items = [];
        this.forEach(function(value, name) {
          items.push([name, value]);
        });
        return iteratorFor(items);
      };
      if (support.iterable) {
        Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
      }
      function consumed(body) {
        if (body.bodyUsed) {
          return Promise.reject(new TypeError("Already read"));
        }
        body.bodyUsed = true;
      }
      function fileReaderReady(reader) {
        return new Promise(function(resolve, reject) {
          reader.onload = function() {
            resolve(reader.result);
          };
          reader.onerror = function() {
            reject(reader.error);
          };
        });
      }
      function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsArrayBuffer(blob);
        return promise;
      }
      function readBlobAsText(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsText(blob);
        return promise;
      }
      function readArrayBufferAsText(buf) {
        var view = new Uint8Array(buf);
        var chars = new Array(view.length);
        for (var i = 0; i < view.length; i++) {
          chars[i] = String.fromCharCode(view[i]);
        }
        return chars.join("");
      }
      function bufferClone(buf) {
        if (buf.slice) {
          return buf.slice(0);
        } else {
          var view = new Uint8Array(buf.byteLength);
          view.set(new Uint8Array(buf));
          return view.buffer;
        }
      }
      function Body() {
        this.bodyUsed = false;
        this._initBody = function(body) {
          this._bodyInit = body;
          if (!body) {
            this._bodyText = "";
          } else if (typeof body === "string") {
            this._bodyText = body;
          } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
            this._bodyBlob = body;
          } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
            this._bodyFormData = body;
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this._bodyText = body.toString();
          } else if (support.arrayBuffer && support.blob && isDataView(body)) {
            this._bodyArrayBuffer = bufferClone(body.buffer);
            this._bodyInit = new Blob([this._bodyArrayBuffer]);
          } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
            this._bodyArrayBuffer = bufferClone(body);
          } else {
            this._bodyText = body = Object.prototype.toString.call(body);
          }
          if (!this.headers.get("content-type")) {
            if (typeof body === "string") {
              this.headers.set("content-type", "text/plain;charset=UTF-8");
            } else if (this._bodyBlob && this._bodyBlob.type) {
              this.headers.set("content-type", this._bodyBlob.type);
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
            }
          }
        };
        if (support.blob) {
          this.blob = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return Promise.resolve(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as blob");
            } else {
              return Promise.resolve(new Blob([this._bodyText]));
            }
          };
          this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
              return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
            } else {
              return this.blob().then(readBlobAsArrayBuffer);
            }
          };
        }
        this.text = function() {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }
          if (this._bodyBlob) {
            return readBlobAsText(this._bodyBlob);
          } else if (this._bodyArrayBuffer) {
            return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
          } else if (this._bodyFormData) {
            throw new Error("could not read FormData body as text");
          } else {
            return Promise.resolve(this._bodyText);
          }
        };
        if (support.formData) {
          this.formData = function() {
            return this.text().then(decode2);
          };
        }
        this.json = function() {
          return this.text().then(JSON.parse);
        };
        return this;
      }
      var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function normalizeMethod(method) {
        var upcased = method.toUpperCase();
        return methods.indexOf(upcased) > -1 ? upcased : method;
      }
      function Request(input, options) {
        options = options || {};
        var body = options.body;
        if (input instanceof Request) {
          if (input.bodyUsed) {
            throw new TypeError("Already read");
          }
          this.url = input.url;
          this.credentials = input.credentials;
          if (!options.headers) {
            this.headers = new Headers(input.headers);
          }
          this.method = input.method;
          this.mode = input.mode;
          this.signal = input.signal;
          if (!body && input._bodyInit != null) {
            body = input._bodyInit;
            input.bodyUsed = true;
          }
        } else {
          this.url = String(input);
        }
        this.credentials = options.credentials || this.credentials || "same-origin";
        if (options.headers || !this.headers) {
          this.headers = new Headers(options.headers);
        }
        this.method = normalizeMethod(options.method || this.method || "GET");
        this.mode = options.mode || this.mode || null;
        this.signal = options.signal || this.signal;
        this.referrer = null;
        if ((this.method === "GET" || this.method === "HEAD") && body) {
          throw new TypeError("Body not allowed for GET or HEAD requests");
        }
        this._initBody(body);
      }
      Request.prototype.clone = function() {
        return new Request(this, { body: this._bodyInit });
      };
      function decode2(body) {
        var form = new FormData();
        body.trim().split("&").forEach(function(bytes2) {
          if (bytes2) {
            var split2 = bytes2.split("=");
            var name = split2.shift().replace(/\+/g, " ");
            var value = split2.join("=").replace(/\+/g, " ");
            form.append(decodeURIComponent(name), decodeURIComponent(value));
          }
        });
        return form;
      }
      function parseHeaders(rawHeaders) {
        var headers = new Headers();
        var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
        preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
          var parts = line.split(":");
          var key = parts.shift().trim();
          if (key) {
            var value = parts.join(":").trim();
            headers.append(key, value);
          }
        });
        return headers;
      }
      Body.call(Request.prototype);
      function Response(bodyInit, options) {
        if (!options) {
          options = {};
        }
        this.type = "default";
        this.status = options.status === void 0 ? 200 : options.status;
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = "statusText" in options ? options.statusText : "OK";
        this.headers = new Headers(options.headers);
        this.url = options.url || "";
        this._initBody(bodyInit);
      }
      Body.call(Response.prototype);
      Response.prototype.clone = function() {
        return new Response(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new Headers(this.headers),
          url: this.url
        });
      };
      Response.error = function() {
        var response = new Response(null, { status: 0, statusText: "" });
        response.type = "error";
        return response;
      };
      var redirectStatuses = [301, 302, 303, 307, 308];
      Response.redirect = function(url, status) {
        if (redirectStatuses.indexOf(status) === -1) {
          throw new RangeError("Invalid status code");
        }
        return new Response(null, { status, headers: { location: url } });
      };
      exports.DOMException = self2.DOMException;
      try {
        new exports.DOMException();
      } catch (err) {
        exports.DOMException = function(message, name) {
          this.message = message;
          this.name = name;
          var error = Error(message);
          this.stack = error.stack;
        };
        exports.DOMException.prototype = Object.create(Error.prototype);
        exports.DOMException.prototype.constructor = exports.DOMException;
      }
      function fetch2(input, init) {
        return new Promise(function(resolve, reject) {
          var request = new Request(input, init);
          if (request.signal && request.signal.aborted) {
            return reject(new exports.DOMException("Aborted", "AbortError"));
          }
          var xhr = new XMLHttpRequest();
          function abortXhr() {
            xhr.abort();
          }
          xhr.onload = function() {
            var options = {
              status: xhr.status,
              statusText: xhr.statusText,
              headers: parseHeaders(xhr.getAllResponseHeaders() || "")
            };
            options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
            var body = "response" in xhr ? xhr.response : xhr.responseText;
            resolve(new Response(body, options));
          };
          xhr.onerror = function() {
            reject(new TypeError("Network request failed"));
          };
          xhr.ontimeout = function() {
            reject(new TypeError("Network request failed"));
          };
          xhr.onabort = function() {
            reject(new exports.DOMException("Aborted", "AbortError"));
          };
          xhr.open(request.method, request.url, true);
          if (request.credentials === "include") {
            xhr.withCredentials = true;
          } else if (request.credentials === "omit") {
            xhr.withCredentials = false;
          }
          if ("responseType" in xhr && support.blob) {
            xhr.responseType = "blob";
          }
          request.headers.forEach(function(value, name) {
            xhr.setRequestHeader(name, value);
          });
          if (request.signal) {
            request.signal.addEventListener("abort", abortXhr);
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                request.signal.removeEventListener("abort", abortXhr);
              }
            };
          }
          xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
        });
      }
      fetch2.polyfill = true;
      if (!self2.fetch) {
        self2.fetch = fetch2;
        self2.Headers = Headers;
        self2.Request = Request;
        self2.Response = Response;
      }
      exports.Headers = Headers;
      exports.Request = Request;
      exports.Response = Response;
      exports.fetch = fetch2;
      Object.defineProperty(exports, "__esModule", { value: true });
      return exports;
    })({});
  })(typeof self !== "undefined" ? self : commonjsGlobal);
})();
const defaultFetchOpts = {
  referrerPolicy: "origin"
};
async function fetchWrapper(input, init) {
  const fetchOpts = {};
  Object.assign(fetchOpts, init, defaultFetchOpts);
  const fetchResult = await fetch(input, fetchOpts);
  return fetchResult;
}
function argsForCreateFetchFn(args) {
  let fetchLib = fetchWrapper;
  let middlewares = [];
  if (args.length > 0 && typeof args[0] === "function") {
    fetchLib = args.shift();
  }
  if (args.length > 0) {
    middlewares = args;
  }
  return { fetchLib, middlewares };
}
function createFetchFn(...args) {
  const { fetchLib, middlewares } = argsForCreateFetchFn(args);
  const fetchFn = async (url, init) => {
    let fetchParams = { url, init: init ?? {} };
    for (const middleware of middlewares) {
      if (typeof middleware.pre === "function") {
        const result = await Promise.resolve(middleware.pre({
          fetch: fetchLib,
          ...fetchParams
        }));
        fetchParams = result ?? fetchParams;
      }
    }
    let response = await fetchLib(fetchParams.url, fetchParams.init);
    for (const middleware of middlewares) {
      if (typeof middleware.post === "function") {
        const result = await Promise.resolve(middleware.post({
          fetch: fetchLib,
          url: fetchParams.url,
          init: fetchParams.init,
          response: (response == null ? void 0 : response.clone()) ?? response
        }));
        response = result ?? response;
      }
    }
    return response;
  };
  return fetchFn;
}
const HIRO_MAINNET_DEFAULT = "https://stacks-node-api.mainnet.stacks.co";
const HIRO_TESTNET_DEFAULT = "https://stacks-node-api.testnet.stacks.co";
const StacksNetworks = ["mainnet", "testnet"];
class StacksNetwork {
  constructor(networkConfig) {
    this.version = TransactionVersion$1.Mainnet;
    this.chainId = ChainID$1.Mainnet;
    this.bnsLookupUrl = "https://stacks-node-api.mainnet.stacks.co";
    this.broadcastEndpoint = "/v2/transactions";
    this.transferFeeEstimateEndpoint = "/v2/fees/transfer";
    this.transactionFeeEstimateEndpoint = "/v2/fees/transaction";
    this.accountEndpoint = "/v2/accounts";
    this.contractAbiEndpoint = "/v2/contracts/interface";
    this.readOnlyFunctionCallEndpoint = "/v2/contracts/call-read";
    this.isMainnet = () => this.version === TransactionVersion$1.Mainnet;
    this.getBroadcastApiUrl = () => `${this.coreApiUrl}${this.broadcastEndpoint}`;
    this.getTransferFeeEstimateApiUrl = () => `${this.coreApiUrl}${this.transferFeeEstimateEndpoint}`;
    this.getTransactionFeeEstimateApiUrl = () => `${this.coreApiUrl}${this.transactionFeeEstimateEndpoint}`;
    this.getAccountApiUrl = (address2) => `${this.coreApiUrl}${this.accountEndpoint}/${address2}?proof=0`;
    this.getAccountExtendedBalancesApiUrl = (address2) => `${this.coreApiUrl}/extended/v1/address/${address2}/balances`;
    this.getAbiApiUrl = (address2, contract) => `${this.coreApiUrl}${this.contractAbiEndpoint}/${address2}/${contract}`;
    this.getReadOnlyFunctionCallApiUrl = (contractAddress, contractName, functionName) => `${this.coreApiUrl}${this.readOnlyFunctionCallEndpoint}/${contractAddress}/${contractName}/${encodeURIComponent(functionName)}`;
    this.getInfoUrl = () => `${this.coreApiUrl}/v2/info`;
    this.getBlockTimeInfoUrl = () => `${this.coreApiUrl}/extended/v1/info/network_block_times`;
    this.getPoxInfoUrl = () => `${this.coreApiUrl}/v2/pox`;
    this.getRewardsUrl = (address2, options) => {
      let url = `${this.coreApiUrl}/extended/v1/burnchain/rewards/${address2}`;
      if (options) {
        url = `${url}?limit=${options.limit}&offset=${options.offset}`;
      }
      return url;
    };
    this.getRewardsTotalUrl = (address2) => `${this.coreApiUrl}/extended/v1/burnchain/rewards/${address2}/total`;
    this.getRewardHoldersUrl = (address2, options) => {
      let url = `${this.coreApiUrl}/extended/v1/burnchain/reward_slot_holders/${address2}`;
      if (options) {
        url = `${url}?limit=${options.limit}&offset=${options.offset}`;
      }
      return url;
    };
    this.getStackerInfoUrl = (contractAddress, contractName) => `${this.coreApiUrl}${this.readOnlyFunctionCallEndpoint}
    ${contractAddress}/${contractName}/get-stacker-info`;
    this.getDataVarUrl = (contractAddress, contractName, dataVarName) => `${this.coreApiUrl}/v2/data_var/${contractAddress}/${contractName}/${dataVarName}?proof=0`;
    this.getMapEntryUrl = (contractAddress, contractName, mapName) => `${this.coreApiUrl}/v2/map_entry/${contractAddress}/${contractName}/${mapName}?proof=0`;
    this.coreApiUrl = networkConfig.url;
    this.fetchFn = networkConfig.fetchFn ?? createFetchFn();
  }
  getNameInfo(fullyQualifiedName) {
    const nameLookupURL = `${this.bnsLookupUrl}/v1/names/${fullyQualifiedName}`;
    return this.fetchFn(nameLookupURL).then((resp) => {
      if (resp.status === 404) {
        throw new Error("Name not found");
      } else if (resp.status !== 200) {
        throw new Error(`Bad response status: ${resp.status}`);
      } else {
        return resp.json();
      }
    }).then((nameInfo) => {
      if (nameInfo.address) {
        return Object.assign({}, nameInfo, { address: nameInfo.address });
      } else {
        return nameInfo;
      }
    });
  }
}
StacksNetwork.fromName = (networkName) => {
  switch (networkName) {
    case "mainnet":
      return new StacksMainnet();
    case "testnet":
      return new StacksTestnet();
    default:
      throw new Error(`Invalid network name provided. Must be one of the following: ${StacksNetworks.join(", ")}`);
  }
};
StacksNetwork.fromNameOrNetwork = (network) => {
  if (typeof network !== "string" && "version" in network) {
    return network;
  }
  return StacksNetwork.fromName(network);
};
class StacksMainnet extends StacksNetwork {
  constructor(opts) {
    super({
      url: (opts == null ? void 0 : opts.url) ?? HIRO_MAINNET_DEFAULT,
      fetchFn: opts == null ? void 0 : opts.fetchFn
    });
    this.version = TransactionVersion$1.Mainnet;
    this.chainId = ChainID$1.Mainnet;
  }
}
class StacksTestnet extends StacksNetwork {
  constructor(opts) {
    super({
      url: (opts == null ? void 0 : opts.url) ?? HIRO_TESTNET_DEFAULT,
      fetchFn: opts == null ? void 0 : opts.fetchFn
    });
    this.version = TransactionVersion$1.Testnet;
    this.chainId = ChainID$1.Testnet;
  }
}
const DEFAULT_BLOCKSTACK_HOST = "https://browser.blockstack.org/auth";
const DEFAULT_PROFILE = {
  "@type": "Person",
  "@context": "http://schema.org"
};
const DEFAULT_SCOPE = ["store_write"];
const LOCALSTORAGE_SESSION_KEY = "blockstack-session";
class AppConfig {
  constructor(scopes = DEFAULT_SCOPE.slice(), appDomain = ((_a) => (_a = getGlobalObject("location", { returnEmptyObject: true })) == null ? void 0 : _a.origin)(), redirectPath = "", manifestPath = "/manifest.json", coreNode = void 0, authenticatorURL = DEFAULT_BLOCKSTACK_HOST) {
    this.appDomain = appDomain;
    this.scopes = scopes;
    this.redirectPath = redirectPath;
    this.manifestPath = manifestPath;
    this.coreNode = coreNode;
    this.authenticatorURL = authenticatorURL;
  }
  redirectURI() {
    return `${this.appDomain}${this.redirectPath}`;
  }
  manifestURI() {
    return `${this.appDomain}${this.manifestPath}`;
  }
}
function number$1(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error(`Wrong positive integer: ${n}`);
}
function bool$1(b) {
  if (typeof b !== "boolean")
    throw new Error(`Expected boolean, not ${b}`);
}
function bytes$1(b, ...lengths) {
  if (!(b instanceof Uint8Array))
    throw new TypeError("Expected Uint8Array");
  if (lengths.length > 0 && !lengths.includes(b.length))
    throw new TypeError(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
function hash$1(hash2) {
  if (typeof hash2 !== "function" || typeof hash2.create !== "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  number$1(hash2.outputLen);
  number$1(hash2.blockLen);
}
function exists$1(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function output$1(out, instance) {
  bytes$1(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error(`digestInto() expects output buffer of length at least ${min}`);
  }
}
const assert$1 = {
  number: number$1,
  bool: bool$1,
  bytes: bytes$1,
  hash: hash$1,
  exists: exists$1,
  output: output$1
};
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const createView$1 = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
const rotr$1 = (word, shift) => word << 32 - shift | word >>> shift;
const isLE$1 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!isLE$1)
  throw new Error("Non little-endian hardware is not supported");
Array.from({ length: 256 }, (v, i) => i.toString(16).padStart(2, "0"));
function utf8ToBytes$1(str) {
  if (typeof str !== "string") {
    throw new TypeError(`utf8ToBytes expected string, got ${typeof str}`);
  }
  return new TextEncoder().encode(str);
}
function toBytes$1(data) {
  if (typeof data === "string")
    data = utf8ToBytes$1(data);
  if (!(data instanceof Uint8Array))
    throw new TypeError(`Expected input type is Uint8Array (got ${typeof data})`);
  return data;
}
let Hash$1 = class Hash {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
};
function wrapConstructor$1(hashConstructor) {
  const hashC = (message) => hashConstructor().update(toBytes$1(message)).digest();
  const tmp = hashConstructor();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashConstructor();
  return hashC;
}
let HMAC$1 = class HMAC extends Hash$1 {
  constructor(hash2, _key) {
    super();
    this.finished = false;
    this.destroyed = false;
    assert$1.hash(hash2);
    const key = toBytes$1(_key);
    this.iHash = hash2.create();
    if (typeof this.iHash.update !== "function")
      throw new TypeError("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen;
    this.outputLen = this.iHash.outputLen;
    const blockLen = this.blockLen;
    const pad2 = new Uint8Array(blockLen);
    pad2.set(key.length > blockLen ? hash2.create().update(key).digest() : key);
    for (let i = 0; i < pad2.length; i++)
      pad2[i] ^= 54;
    this.iHash.update(pad2);
    this.oHash = hash2.create();
    for (let i = 0; i < pad2.length; i++)
      pad2[i] ^= 54 ^ 92;
    this.oHash.update(pad2);
    pad2.fill(0);
  }
  update(buf) {
    assert$1.exists(this);
    this.iHash.update(buf);
    return this;
  }
  digestInto(out) {
    assert$1.exists(this);
    assert$1.bytes(out, this.outputLen);
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
};
const hmac$1 = (hash2, key, message) => new HMAC$1(hash2, key).update(message).digest();
hmac$1.create = (hash2, key) => new HMAC$1(hash2, key);
function setBigUint64$1(view, byteOffset, value, isLE2) {
  if (typeof view.setBigUint64 === "function")
    return view.setBigUint64(byteOffset, value, isLE2);
  const _32n2 = BigInt(32);
  const _u32_max = BigInt(4294967295);
  const wh = Number(value >> _32n2 & _u32_max);
  const wl = Number(value & _u32_max);
  const h2 = isLE2 ? 4 : 0;
  const l = isLE2 ? 0 : 4;
  view.setUint32(byteOffset + h2, wh, isLE2);
  view.setUint32(byteOffset + l, wl, isLE2);
}
let SHA2$1 = class SHA2 extends Hash$1 {
  constructor(blockLen, outputLen, padOffset, isLE2) {
    super();
    this.blockLen = blockLen;
    this.outputLen = outputLen;
    this.padOffset = padOffset;
    this.isLE = isLE2;
    this.finished = false;
    this.length = 0;
    this.pos = 0;
    this.destroyed = false;
    this.buffer = new Uint8Array(blockLen);
    this.view = createView$1(this.buffer);
  }
  update(data) {
    assert$1.exists(this);
    const { view, buffer, blockLen } = this;
    data = toBytes$1(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        const dataView = createView$1(data);
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(dataView, pos);
        continue;
      }
      buffer.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(view, 0);
        this.pos = 0;
      }
    }
    this.length += data.length;
    this.roundClean();
    return this;
  }
  digestInto(out) {
    assert$1.exists(this);
    assert$1.output(out, this);
    this.finished = true;
    const { buffer, view, blockLen, isLE: isLE2 } = this;
    let { pos } = this;
    buffer[pos++] = 128;
    this.buffer.subarray(pos).fill(0);
    if (this.padOffset > blockLen - pos) {
      this.process(view, 0);
      pos = 0;
    }
    for (let i = pos; i < blockLen; i++)
      buffer[i] = 0;
    setBigUint64$1(view, blockLen - 8, BigInt(this.length * 8), isLE2);
    this.process(view, 0);
    const oview = createView$1(out);
    const len = this.outputLen;
    if (len % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const outLen = len / 4;
    const state = this.get();
    if (outLen > state.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let i = 0; i < outLen; i++)
      oview.setUint32(4 * i, state[i], isLE2);
  }
  digest() {
    const { buffer, outputLen } = this;
    this.digestInto(buffer);
    const res = buffer.slice(0, outputLen);
    this.destroy();
    return res;
  }
  _cloneInto(to) {
    to || (to = new this.constructor());
    to.set(...this.get());
    const { blockLen, buffer, length, finished, destroyed, pos } = this;
    to.length = length;
    to.pos = pos;
    to.finished = finished;
    to.destroyed = destroyed;
    if (length % blockLen)
      to.buffer.set(buffer);
    return to;
  }
};
const Chi$1 = (a, b, c) => a & b ^ ~a & c;
const Maj$1 = (a, b, c) => a & b ^ a & c ^ b & c;
const SHA256_K$1 = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
const IV$1 = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
const SHA256_W$1 = new Uint32Array(64);
let SHA256$1 = class SHA256 extends SHA2$1 {
  constructor() {
    super(64, 32, 8, false);
    this.A = IV$1[0] | 0;
    this.B = IV$1[1] | 0;
    this.C = IV$1[2] | 0;
    this.D = IV$1[3] | 0;
    this.E = IV$1[4] | 0;
    this.F = IV$1[5] | 0;
    this.G = IV$1[6] | 0;
    this.H = IV$1[7] | 0;
  }
  get() {
    const { A, B, C, D, E, F, G, H } = this;
    return [A, B, C, D, E, F, G, H];
  }
  // prettier-ignore
  set(A, B, C, D, E, F, G, H) {
    this.A = A | 0;
    this.B = B | 0;
    this.C = C | 0;
    this.D = D | 0;
    this.E = E | 0;
    this.F = F | 0;
    this.G = G | 0;
    this.H = H | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      SHA256_W$1[i] = view.getUint32(offset, false);
    for (let i = 16; i < 64; i++) {
      const W15 = SHA256_W$1[i - 15];
      const W2 = SHA256_W$1[i - 2];
      const s0 = rotr$1(W15, 7) ^ rotr$1(W15, 18) ^ W15 >>> 3;
      const s1 = rotr$1(W2, 17) ^ rotr$1(W2, 19) ^ W2 >>> 10;
      SHA256_W$1[i] = s1 + SHA256_W$1[i - 7] + s0 + SHA256_W$1[i - 16] | 0;
    }
    let { A, B, C, D, E, F, G, H } = this;
    for (let i = 0; i < 64; i++) {
      const sigma1 = rotr$1(E, 6) ^ rotr$1(E, 11) ^ rotr$1(E, 25);
      const T1 = H + sigma1 + Chi$1(E, F, G) + SHA256_K$1[i] + SHA256_W$1[i] | 0;
      const sigma0 = rotr$1(A, 2) ^ rotr$1(A, 13) ^ rotr$1(A, 22);
      const T2 = sigma0 + Maj$1(A, B, C) | 0;
      H = G;
      G = F;
      F = E;
      E = D + T1 | 0;
      D = C;
      C = B;
      B = A;
      A = T1 + T2 | 0;
    }
    A = A + this.A | 0;
    B = B + this.B | 0;
    C = C + this.C | 0;
    D = D + this.D | 0;
    E = E + this.E | 0;
    F = F + this.F | 0;
    G = G + this.G | 0;
    H = H + this.H | 0;
    this.set(A, B, C, D, E, F, G, H);
  }
  roundClean() {
    SHA256_W$1.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0);
    this.buffer.fill(0);
  }
};
let SHA224$1 = class SHA224 extends SHA256$1 {
  constructor() {
    super();
    this.A = 3238371032 | 0;
    this.B = 914150663 | 0;
    this.C = 812702999 | 0;
    this.D = 4144912697 | 0;
    this.E = 4290775857 | 0;
    this.F = 1750603025 | 0;
    this.G = 1694076839 | 0;
    this.H = 3204075428 | 0;
    this.outputLen = 28;
  }
};
const sha256$2 = wrapConstructor$1(() => new SHA256$1());
wrapConstructor$1(() => new SHA224$1());
const __viteBrowserExternal = new Proxy({}, {
  get(_, key) {
    throw new Error(`Module "" has been externalized for browser compatibility. Cannot access ".${key}" in client code.  See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
  }
});
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const _0n = BigInt(0);
const _1n = BigInt(1);
const _2n = BigInt(2);
const _3n = BigInt(3);
const _8n = BigInt(8);
const CURVE = Object.freeze({
  a: _0n,
  b: BigInt(7),
  P: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
  n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
  h: _1n,
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")
});
const divNearest = (a, b) => (a + b / _2n) / b;
const endo = {
  beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
  splitScalar(k) {
    const { n } = CURVE;
    const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
    const b1 = -_1n * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
    const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
    const b2 = a1;
    const POW_2_128 = BigInt("0x100000000000000000000000000000000");
    const c1 = divNearest(b2 * k, n);
    const c2 = divNearest(-b1 * k, n);
    let k1 = mod(k - c1 * a1 - c2 * a2, n);
    let k2 = mod(-c1 * b1 - c2 * b2, n);
    const k1neg = k1 > POW_2_128;
    const k2neg = k2 > POW_2_128;
    if (k1neg)
      k1 = n - k1;
    if (k2neg)
      k2 = n - k2;
    if (k1 > POW_2_128 || k2 > POW_2_128) {
      throw new Error("splitScalarEndo: Endomorphism failed, k=" + k);
    }
    return { k1neg, k1, k2neg, k2 };
  }
};
const fieldLen = 32;
const groupLen = 32;
const hashLen = 32;
const compressedLen = fieldLen + 1;
const uncompressedLen = 2 * fieldLen + 1;
function weierstrass(x) {
  const { a, b } = CURVE;
  const x2 = mod(x * x);
  const x3 = mod(x2 * x);
  return mod(x3 + a * x + b);
}
const USE_ENDOMORPHISM = CURVE.a === _0n;
class ShaError extends Error {
  constructor(message) {
    super(message);
  }
}
function assertJacPoint(other) {
  if (!(other instanceof JacobianPoint))
    throw new TypeError("JacobianPoint expected");
}
class JacobianPoint {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  static fromAffine(p) {
    if (!(p instanceof Point)) {
      throw new TypeError("JacobianPoint#fromAffine: expected Point");
    }
    if (p.equals(Point.ZERO))
      return JacobianPoint.ZERO;
    return new JacobianPoint(p.x, p.y, _1n);
  }
  static toAffineBatch(points) {
    const toInv = invertBatch(points.map((p) => p.z));
    return points.map((p, i) => p.toAffine(toInv[i]));
  }
  static normalizeZ(points) {
    return JacobianPoint.toAffineBatch(points).map(JacobianPoint.fromAffine);
  }
  equals(other) {
    assertJacPoint(other);
    const { x: X1, y: Y1, z: Z1 } = this;
    const { x: X2, y: Y2, z: Z2 } = other;
    const Z1Z1 = mod(Z1 * Z1);
    const Z2Z2 = mod(Z2 * Z2);
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
    const A = mod(X1 * X1);
    const B = mod(Y1 * Y1);
    const C = mod(B * B);
    const x1b = X1 + B;
    const D = mod(_2n * (mod(x1b * x1b) - A - C));
    const E = mod(_3n * A);
    const F = mod(E * E);
    const X3 = mod(F - _2n * D);
    const Y3 = mod(E * (D - X3) - _8n * C);
    const Z3 = mod(_2n * Y1 * Z1);
    return new JacobianPoint(X3, Y3, Z3);
  }
  add(other) {
    assertJacPoint(other);
    const { x: X1, y: Y1, z: Z1 } = this;
    const { x: X2, y: Y2, z: Z2 } = other;
    if (X2 === _0n || Y2 === _0n)
      return this;
    if (X1 === _0n || Y1 === _0n)
      return other;
    const Z1Z1 = mod(Z1 * Z1);
    const Z2Z2 = mod(Z2 * Z2);
    const U1 = mod(X1 * Z2Z2);
    const U2 = mod(X2 * Z1Z1);
    const S1 = mod(mod(Y1 * Z2) * Z2Z2);
    const S2 = mod(mod(Y2 * Z1) * Z1Z1);
    const H = mod(U2 - U1);
    const r = mod(S2 - S1);
    if (H === _0n) {
      if (r === _0n) {
        return this.double();
      } else {
        return JacobianPoint.ZERO;
      }
    }
    const HH = mod(H * H);
    const HHH = mod(H * HH);
    const V = mod(U1 * HH);
    const X3 = mod(r * r - HHH - _2n * V);
    const Y3 = mod(r * (V - X3) - S1 * HHH);
    const Z3 = mod(Z1 * Z2 * H);
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
      let p = P0;
      let d2 = this;
      while (n > _0n) {
        if (n & _1n)
          p = p.add(d2);
        d2 = d2.double();
        n >>= _1n;
      }
      return p;
    }
    let { k1neg, k1, k2neg, k2 } = endo.splitScalar(n);
    let k1p = P0;
    let k2p = P0;
    let d = this;
    while (k1 > _0n || k2 > _0n) {
      if (k1 & _1n)
        k1p = k1p.add(d);
      if (k2 & _1n)
        k2p = k2p.add(d);
      d = d.double();
      k1 >>= _1n;
      k2 >>= _1n;
    }
    if (k1neg)
      k1p = k1p.negate();
    if (k2neg)
      k2p = k2p.negate();
    k2p = new JacobianPoint(mod(k2p.x * endo.beta), k2p.y, k2p.z);
    return k1p.add(k2p);
  }
  precomputeWindow(W) {
    const windows = USE_ENDOMORPHISM ? 128 / W + 1 : 256 / W + 1;
    const points = [];
    let p = this;
    let base2 = p;
    for (let window2 = 0; window2 < windows; window2++) {
      base2 = p;
      points.push(base2);
      for (let i = 1; i < 2 ** (W - 1); i++) {
        base2 = base2.add(p);
        points.push(base2);
      }
      p = base2.double();
    }
    return points;
  }
  wNAF(n, affinePoint) {
    if (!affinePoint && this.equals(JacobianPoint.BASE))
      affinePoint = Point.BASE;
    const W = affinePoint && affinePoint._WINDOW_SIZE || 1;
    if (256 % W) {
      throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
    }
    let precomputes = affinePoint && pointPrecomputes.get(affinePoint);
    if (!precomputes) {
      precomputes = this.precomputeWindow(W);
      if (affinePoint && W !== 1) {
        precomputes = JacobianPoint.normalizeZ(precomputes);
        pointPrecomputes.set(affinePoint, precomputes);
      }
    }
    let p = JacobianPoint.ZERO;
    let f2 = JacobianPoint.BASE;
    const windows = 1 + (USE_ENDOMORPHISM ? 128 / W : 256 / W);
    const windowSize = 2 ** (W - 1);
    const mask = BigInt(2 ** W - 1);
    const maxNumber = 2 ** W;
    const shiftBy = BigInt(W);
    for (let window2 = 0; window2 < windows; window2++) {
      const offset = window2 * windowSize;
      let wbits = Number(n & mask);
      n >>= shiftBy;
      if (wbits > windowSize) {
        wbits -= maxNumber;
        n += _1n;
      }
      const offset1 = offset;
      const offset2 = offset + Math.abs(wbits) - 1;
      const cond1 = window2 % 2 !== 0;
      const cond2 = wbits < 0;
      if (wbits === 0) {
        f2 = f2.add(constTimeNegate(cond1, precomputes[offset1]));
      } else {
        p = p.add(constTimeNegate(cond2, precomputes[offset2]));
      }
    }
    return { p, f: f2 };
  }
  multiply(scalar, affinePoint) {
    let n = normalizeScalar(scalar);
    let point;
    let fake;
    if (USE_ENDOMORPHISM) {
      const { k1neg, k1, k2neg, k2 } = endo.splitScalar(n);
      let { p: k1p, f: f1p } = this.wNAF(k1, affinePoint);
      let { p: k2p, f: f2p } = this.wNAF(k2, affinePoint);
      k1p = constTimeNegate(k1neg, k1p);
      k2p = constTimeNegate(k2neg, k2p);
      k2p = new JacobianPoint(mod(k2p.x * endo.beta), k2p.y, k2p.z);
      point = k1p.add(k2p);
      fake = f1p.add(f2p);
    } else {
      const { p, f: f2 } = this.wNAF(n, affinePoint);
      point = p;
      fake = f2;
    }
    return JacobianPoint.normalizeZ([point, fake])[0];
  }
  toAffine(invZ) {
    const { x, y, z } = this;
    const is0 = this.equals(JacobianPoint.ZERO);
    if (invZ == null)
      invZ = is0 ? _8n : invert(z);
    const iz1 = invZ;
    const iz2 = mod(iz1 * iz1);
    const iz3 = mod(iz2 * iz1);
    const ax = mod(x * iz2);
    const ay = mod(y * iz3);
    const zz = mod(z * iz1);
    if (is0)
      return Point.ZERO;
    if (zz !== _1n)
      throw new Error("invZ was invalid");
    return new Point(ax, ay);
  }
}
JacobianPoint.BASE = new JacobianPoint(CURVE.Gx, CURVE.Gy, _1n);
JacobianPoint.ZERO = new JacobianPoint(_0n, _1n, _0n);
function constTimeNegate(condition, item) {
  const neg = item.negate();
  return condition ? neg : item;
}
const pointPrecomputes = /* @__PURE__ */ new WeakMap();
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  _setWindowSize(windowSize) {
    this._WINDOW_SIZE = windowSize;
    pointPrecomputes.delete(this);
  }
  hasEvenY() {
    return this.y % _2n === _0n;
  }
  static fromCompressedHex(bytes2) {
    const isShort = bytes2.length === 32;
    const x = bytesToNumber(isShort ? bytes2 : bytes2.subarray(1));
    if (!isValidFieldElement(x))
      throw new Error("Point is not on curve");
    const y2 = weierstrass(x);
    let y = sqrtMod(y2);
    const isYOdd = (y & _1n) === _1n;
    if (isShort) {
      if (isYOdd)
        y = mod(-y);
    } else {
      const isFirstByteOdd = (bytes2[0] & 1) === 1;
      if (isFirstByteOdd !== isYOdd)
        y = mod(-y);
    }
    const point = new Point(x, y);
    point.assertValidity();
    return point;
  }
  static fromUncompressedHex(bytes2) {
    const x = bytesToNumber(bytes2.subarray(1, fieldLen + 1));
    const y = bytesToNumber(bytes2.subarray(fieldLen + 1, fieldLen * 2 + 1));
    const point = new Point(x, y);
    point.assertValidity();
    return point;
  }
  static fromHex(hex) {
    const bytes2 = ensureBytes(hex);
    const len = bytes2.length;
    const header = bytes2[0];
    if (len === fieldLen)
      return this.fromCompressedHex(bytes2);
    if (len === compressedLen && (header === 2 || header === 3)) {
      return this.fromCompressedHex(bytes2);
    }
    if (len === uncompressedLen && header === 4)
      return this.fromUncompressedHex(bytes2);
    throw new Error(`Point.fromHex: received invalid point. Expected 32-${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes, not ${len}`);
  }
  static fromPrivateKey(privateKey) {
    return Point.BASE.multiply(normalizePrivateKey(privateKey));
  }
  static fromSignature(msgHash, signature, recovery) {
    const { r, s } = normalizeSignature(signature);
    if (![0, 1, 2, 3].includes(recovery))
      throw new Error("Cannot recover: invalid recovery bit");
    const h2 = truncateHash(ensureBytes(msgHash));
    const { n } = CURVE;
    const radj = recovery === 2 || recovery === 3 ? r + n : r;
    const rinv = invert(radj, n);
    const u1 = mod(-h2 * rinv, n);
    const u2 = mod(s * rinv, n);
    const prefix = recovery & 1 ? "03" : "02";
    const R = Point.fromHex(prefix + numTo32bStr(radj));
    const Q = Point.BASE.multiplyAndAddUnsafe(R, u1, u2);
    if (!Q)
      throw new Error("Cannot recover signature: point at infinify");
    Q.assertValidity();
    return Q;
  }
  toRawBytes(isCompressed2 = false) {
    return hexToBytes(this.toHex(isCompressed2));
  }
  toHex(isCompressed2 = false) {
    const x = numTo32bStr(this.x);
    if (isCompressed2) {
      const prefix = this.hasEvenY() ? "02" : "03";
      return `${prefix}${x}`;
    } else {
      return `04${x}${numTo32bStr(this.y)}`;
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
    const { x, y } = this;
    if (!isValidFieldElement(x) || !isValidFieldElement(y))
      throw new Error(msg);
    const left = mod(y * y);
    const right = weierstrass(x);
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
  multiplyAndAddUnsafe(Q, a, b) {
    const P = JacobianPoint.fromAffine(this);
    const aP = a === _0n || a === _1n || this !== Point.BASE ? P.multiplyUnsafe(a) : P.multiply(a);
    const bQ = JacobianPoint.fromAffine(Q).multiplyUnsafe(b);
    const sum = aP.add(bQ);
    return sum.equals(JacobianPoint.ZERO) ? void 0 : sum.toAffine();
  }
}
Point.BASE = new Point(CURVE.Gx, CURVE.Gy);
Point.ZERO = new Point(_0n, _0n);
function sliceDER(s) {
  return Number.parseInt(s[0], 16) >= 8 ? "00" + s : s;
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
  return { data: bytesToNumber(res), left: data.subarray(len + 2) };
}
function parseDERSignature(data) {
  if (data.length < 2 || data[0] != 48) {
    throw new Error(`Invalid signature tag: ${bytesToHex(data)}`);
  }
  if (data[1] !== data.length - 2) {
    throw new Error("Invalid signature: incorrect length");
  }
  const { data: r, left: sBytes } = parseDERInt(data.subarray(2));
  const { data: s, left: rBytesLeft } = parseDERInt(sBytes);
  if (rBytesLeft.length) {
    throw new Error(`Invalid signature: left bytes after parsing: ${bytesToHex(rBytesLeft)}`);
  }
  return { r, s };
}
class Signature {
  constructor(r, s) {
    this.r = r;
    this.s = s;
    this.assertValidity();
  }
  static fromCompact(hex) {
    const arr = hex instanceof Uint8Array;
    const name = "Signature.fromCompact";
    if (typeof hex !== "string" && !arr)
      throw new TypeError(`${name}: Expected string or Uint8Array`);
    const str = arr ? bytesToHex(hex) : hex;
    if (str.length !== 128)
      throw new Error(`${name}: Expected 64-byte hex`);
    return new Signature(hexToNumber(str.slice(0, 64)), hexToNumber(str.slice(64, 128)));
  }
  static fromDER(hex) {
    const arr = hex instanceof Uint8Array;
    if (typeof hex !== "string" && !arr)
      throw new TypeError(`Signature.fromDER: Expected string or Uint8Array`);
    const { r, s } = parseDERSignature(arr ? hex : hexToBytes(hex));
    return new Signature(r, s);
  }
  static fromHex(hex) {
    return this.fromDER(hex);
  }
  assertValidity() {
    const { r, s } = this;
    if (!isWithinCurveOrder(r))
      throw new Error("Invalid Signature: r must be 0 < r < n");
    if (!isWithinCurveOrder(s))
      throw new Error("Invalid Signature: s must be 0 < s < n");
  }
  hasHighS() {
    const HALF = CURVE.n >> _1n;
    return this.s > HALF;
  }
  normalizeS() {
    return this.hasHighS() ? new Signature(this.r, mod(-this.s, CURVE.n)) : this;
  }
  toDERRawBytes() {
    return hexToBytes(this.toDERHex());
  }
  toDERHex() {
    const sHex = sliceDER(numberToHexUnpadded(this.s));
    const rHex = sliceDER(numberToHexUnpadded(this.r));
    const sHexL = sHex.length / 2;
    const rHexL = rHex.length / 2;
    const sLen = numberToHexUnpadded(sHexL);
    const rLen = numberToHexUnpadded(rHexL);
    const length = numberToHexUnpadded(rHexL + sHexL + 4);
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
  if (!arrays.every((b) => b instanceof Uint8Array))
    throw new Error("Uint8Array list expected");
  if (arrays.length === 1)
    return arrays[0];
  const length = arrays.reduce((a, arr) => a + arr.length, 0);
  const result = new Uint8Array(length);
  for (let i = 0, pad2 = 0; i < arrays.length; i++) {
    const arr = arrays[i];
    result.set(arr, pad2);
    pad2 += arr.length;
  }
  return result;
}
const hexes = Array.from({ length: 256 }, (v, i) => i.toString(16).padStart(2, "0"));
function bytesToHex(uint8a) {
  if (!(uint8a instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  let hex = "";
  for (let i = 0; i < uint8a.length; i++) {
    hex += hexes[uint8a[i]];
  }
  return hex;
}
const POW_2_256 = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");
function numTo32bStr(num) {
  if (typeof num !== "bigint")
    throw new Error("Expected bigint");
  if (!(_0n <= num && num < POW_2_256))
    throw new Error("Expected number 0 <= n < 2^256");
  return num.toString(16).padStart(64, "0");
}
function numTo32b(num) {
  const b = hexToBytes(numTo32bStr(num));
  if (b.length !== 32)
    throw new Error("Error: expected 32 bytes");
  return b;
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
  for (let i = 0; i < array.length; i++) {
    const j = i * 2;
    const hexByte = hex.slice(j, j + 2);
    const byte = Number.parseInt(hexByte, 16);
    if (Number.isNaN(byte) || byte < 0)
      throw new Error("Invalid byte sequence");
    array[i] = byte;
  }
  return array;
}
function bytesToNumber(bytes2) {
  return hexToNumber(bytesToHex(bytes2));
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
function mod(a, b = CURVE.P) {
  const result = a % b;
  return result >= _0n ? result : b + result;
}
function pow2(x, power) {
  const { P } = CURVE;
  let res = x;
  while (power-- > _0n) {
    res *= res;
    res %= P;
  }
  return res;
}
function sqrtMod(x) {
  const { P } = CURVE;
  const _6n = BigInt(6);
  const _11n = BigInt(11);
  const _22n = BigInt(22);
  const _23n = BigInt(23);
  const _44n = BigInt(44);
  const _88n = BigInt(88);
  const b2 = x * x * x % P;
  const b3 = b2 * b2 * x % P;
  const b6 = pow2(b3, _3n) * b3 % P;
  const b9 = pow2(b6, _3n) * b3 % P;
  const b11 = pow2(b9, _2n) * b2 % P;
  const b22 = pow2(b11, _11n) * b11 % P;
  const b44 = pow2(b22, _22n) * b22 % P;
  const b88 = pow2(b44, _44n) * b44 % P;
  const b176 = pow2(b88, _88n) * b88 % P;
  const b220 = pow2(b176, _44n) * b44 % P;
  const b223 = pow2(b220, _3n) * b3 % P;
  const t1 = pow2(b223, _23n) * b22 % P;
  const t2 = pow2(t1, _6n) * b2 % P;
  const rt = pow2(t2, _2n);
  const xc = rt * rt % P;
  if (xc !== x)
    throw new Error("Cannot find square root");
  return rt;
}
function invert(number2, modulo = CURVE.P) {
  if (number2 === _0n || modulo <= _0n) {
    throw new Error(`invert: expected positive integers, got n=${number2} mod=${modulo}`);
  }
  let a = mod(number2, modulo);
  let b = modulo;
  let x = _0n, u = _1n;
  while (a !== _0n) {
    const q = b / a;
    const r = b % a;
    const m = x - u * q;
    b = a, a = r, x = u, u = m;
  }
  const gcd = b;
  if (gcd !== _1n)
    throw new Error("invert: does not exist");
  return mod(x, modulo);
}
function invertBatch(nums, p = CURVE.P) {
  const scratch = new Array(nums.length);
  const lastMultiplied = nums.reduce((acc, num, i) => {
    if (num === _0n)
      return acc;
    scratch[i] = acc;
    return mod(acc * num, p);
  }, _1n);
  const inverted = invert(lastMultiplied, p);
  nums.reduceRight((acc, num, i) => {
    if (num === _0n)
      return acc;
    scratch[i] = mod(acc * scratch[i], p);
    return mod(acc * num, p);
  }, inverted);
  return scratch;
}
function bits2int_2(bytes2) {
  const delta = bytes2.length * 8 - groupLen * 8;
  const num = bytesToNumber(bytes2);
  return delta > 0 ? num >> BigInt(delta) : num;
}
function truncateHash(hash2, truncateOnly = false) {
  const h2 = bits2int_2(hash2);
  if (truncateOnly)
    return h2;
  const { n } = CURVE;
  return h2 >= n ? h2 - n : h2;
}
let _sha256Sync;
let _hmacSha256Sync;
class HmacDrbg {
  constructor(hashLen2, qByteLen) {
    this.hashLen = hashLen2;
    this.qByteLen = qByteLen;
    if (typeof hashLen2 !== "number" || hashLen2 < 2)
      throw new Error("hashLen must be a number");
    if (typeof qByteLen !== "number" || qByteLen < 2)
      throw new Error("qByteLen must be a number");
    this.v = new Uint8Array(hashLen2).fill(1);
    this.k = new Uint8Array(hashLen2).fill(0);
    this.counter = 0;
  }
  hmac(...values) {
    return utils.hmacSha256(this.k, ...values);
  }
  hmacSync(...values) {
    return _hmacSha256Sync(this.k, ...values);
  }
  checkSync() {
    if (typeof _hmacSha256Sync !== "function")
      throw new ShaError("hmacSha256Sync needs to be set");
  }
  incr() {
    if (this.counter >= 1e3)
      throw new Error("Tried 1,000 k values for sign(), all were invalid");
    this.counter += 1;
  }
  async reseed(seed = new Uint8Array()) {
    this.k = await this.hmac(this.v, Uint8Array.from([0]), seed);
    this.v = await this.hmac(this.v);
    if (seed.length === 0)
      return;
    this.k = await this.hmac(this.v, Uint8Array.from([1]), seed);
    this.v = await this.hmac(this.v);
  }
  reseedSync(seed = new Uint8Array()) {
    this.checkSync();
    this.k = this.hmacSync(this.v, Uint8Array.from([0]), seed);
    this.v = this.hmacSync(this.v);
    if (seed.length === 0)
      return;
    this.k = this.hmacSync(this.v, Uint8Array.from([1]), seed);
    this.v = this.hmacSync(this.v);
  }
  async generate() {
    this.incr();
    let len = 0;
    const out = [];
    while (len < this.qByteLen) {
      this.v = await this.hmac(this.v);
      const sl = this.v.slice();
      out.push(sl);
      len += this.v.length;
    }
    return concatBytes(...out);
  }
  generateSync() {
    this.checkSync();
    this.incr();
    let len = 0;
    const out = [];
    while (len < this.qByteLen) {
      this.v = this.hmacSync(this.v);
      const sl = this.v.slice();
      out.push(sl);
      len += this.v.length;
    }
    return concatBytes(...out);
  }
}
function isWithinCurveOrder(num) {
  return _0n < num && num < CURVE.n;
}
function isValidFieldElement(num) {
  return _0n < num && num < CURVE.P;
}
function kmdToSig(kBytes, m, d, lowS = true) {
  const { n } = CURVE;
  const k = truncateHash(kBytes, true);
  if (!isWithinCurveOrder(k))
    return;
  const kinv = invert(k, n);
  const q = Point.BASE.multiply(k);
  const r = mod(q.x, n);
  if (r === _0n)
    return;
  const s = mod(kinv * mod(m + d * r, n), n);
  if (s === _0n)
    return;
  let sig = new Signature(r, s);
  let recovery = (q.x === sig.r ? 0 : 2) | Number(q.y & _1n);
  if (lowS && sig.hasHighS()) {
    sig = sig.normalizeS();
    recovery ^= 1;
  }
  return { sig, recovery };
}
function normalizePrivateKey(key) {
  let num;
  if (typeof key === "bigint") {
    num = key;
  } else if (typeof key === "number" && Number.isSafeInteger(key) && key > 0) {
    num = BigInt(key);
  } else if (typeof key === "string") {
    if (key.length !== 2 * groupLen)
      throw new Error("Expected 32 bytes of private key");
    num = hexToNumber(key);
  } else if (key instanceof Uint8Array) {
    if (key.length !== groupLen)
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
function getPublicKey$1(privateKey, isCompressed2 = false) {
  return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed2);
}
function recoverPublicKey(msgHash, signature, recovery, isCompressed2 = false) {
  return Point.fromSignature(msgHash, signature, recovery).toRawBytes(isCompressed2);
}
function isProbPub(item) {
  const arr = item instanceof Uint8Array;
  const str = typeof item === "string";
  const len = (arr || str) && item.length;
  if (arr)
    return len === compressedLen || len === uncompressedLen;
  if (str)
    return len === compressedLen * 2 || len === uncompressedLen * 2;
  if (item instanceof Point)
    return true;
  return false;
}
function getSharedSecret(privateA, publicB, isCompressed2 = false) {
  if (isProbPub(privateA))
    throw new TypeError("getSharedSecret: first arg must be private key");
  if (!isProbPub(publicB))
    throw new TypeError("getSharedSecret: second arg must be public key");
  const b = normalizePublicKey(publicB);
  b.assertValidity();
  return b.multiply(normalizePrivateKey(privateA)).toRawBytes(isCompressed2);
}
function bits2int(bytes2) {
  const slice = bytes2.length > fieldLen ? bytes2.slice(0, fieldLen) : bytes2;
  return bytesToNumber(slice);
}
function bits2octets(bytes2) {
  const z1 = bits2int(bytes2);
  const z2 = mod(z1, CURVE.n);
  return int2octets(z2 < _0n ? z1 : z2);
}
function int2octets(num) {
  return numTo32b(num);
}
function initSigArgs(msgHash, privateKey, extraEntropy) {
  if (msgHash == null)
    throw new Error(`sign: expected valid message hash, not "${msgHash}"`);
  const h1 = ensureBytes(msgHash);
  const d = normalizePrivateKey(privateKey);
  const seedArgs = [int2octets(d), bits2octets(h1)];
  if (extraEntropy != null) {
    if (extraEntropy === true)
      extraEntropy = utils.randomBytes(fieldLen);
    const e = ensureBytes(extraEntropy);
    if (e.length !== fieldLen)
      throw new Error(`sign: Expected ${fieldLen} bytes of extra data`);
    seedArgs.push(e);
  }
  const seed = concatBytes(...seedArgs);
  const m = bits2int(h1);
  return { seed, m, d };
}
function finalizeSig(recSig, opts) {
  const { sig, recovery } = recSig;
  const { der, recovered } = Object.assign({ canonical: true, der: true }, opts);
  const hashed = der ? sig.toDERRawBytes() : sig.toCompactRawBytes();
  return recovered ? [hashed, recovery] : hashed;
}
async function sign(msgHash, privKey, opts = {}) {
  const { seed, m, d } = initSigArgs(msgHash, privKey, opts.extraEntropy);
  const drbg = new HmacDrbg(hashLen, groupLen);
  await drbg.reseed(seed);
  let sig;
  while (!(sig = kmdToSig(await drbg.generate(), m, d, opts.canonical)))
    await drbg.reseed();
  return finalizeSig(sig, opts);
}
function signSync(msgHash, privKey, opts = {}) {
  const { seed, m, d } = initSigArgs(msgHash, privKey, opts.extraEntropy);
  const drbg = new HmacDrbg(hashLen, groupLen);
  drbg.reseedSync(seed);
  let sig;
  while (!(sig = kmdToSig(drbg.generateSync(), m, d, opts.canonical)))
    drbg.reseedSync();
  return finalizeSig(sig, opts);
}
const vopts = { strict: true };
function verify$1(signature, msgHash, publicKey, opts = vopts) {
  let sig;
  try {
    sig = normalizeSignature(signature);
    msgHash = ensureBytes(msgHash);
  } catch (error) {
    return false;
  }
  const { r, s } = sig;
  if (opts.strict && sig.hasHighS())
    return false;
  const h2 = truncateHash(msgHash);
  let P;
  try {
    P = normalizePublicKey(publicKey);
  } catch (error) {
    return false;
  }
  const { n } = CURVE;
  const sinv = invert(s, n);
  const u1 = mod(h2 * sinv, n);
  const u2 = mod(r * sinv, n);
  const R = Point.BASE.multiplyAndAddUnsafe(P, u1, u2);
  if (!R)
    return false;
  const v = mod(R.x, n);
  return v === r;
}
function schnorrChallengeFinalize(ch) {
  return mod(bytesToNumber(ch), CURVE.n);
}
class SchnorrSignature {
  constructor(r, s) {
    this.r = r;
    this.s = s;
    this.assertValidity();
  }
  static fromHex(hex) {
    const bytes2 = ensureBytes(hex);
    if (bytes2.length !== 64)
      throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${bytes2.length}`);
    const r = bytesToNumber(bytes2.subarray(0, 32));
    const s = bytesToNumber(bytes2.subarray(32, 64));
    return new SchnorrSignature(r, s);
  }
  assertValidity() {
    const { r, s } = this;
    if (!isValidFieldElement(r) || !isWithinCurveOrder(s))
      throw new Error("Invalid signature");
  }
  toHex() {
    return numTo32bStr(this.r) + numTo32bStr(this.s);
  }
  toRawBytes() {
    return hexToBytes(this.toHex());
  }
}
function schnorrGetPublicKey(privateKey) {
  return Point.fromPrivateKey(privateKey).toRawX();
}
class InternalSchnorrSignature {
  constructor(message, privateKey, auxRand = utils.randomBytes()) {
    if (message == null)
      throw new TypeError(`sign: Expected valid message, not "${message}"`);
    this.m = ensureBytes(message);
    const { x, scalar } = this.getScalar(normalizePrivateKey(privateKey));
    this.px = x;
    this.d = scalar;
    this.rand = ensureBytes(auxRand);
    if (this.rand.length !== 32)
      throw new TypeError("sign: Expected 32 bytes of aux randomness");
  }
  getScalar(priv) {
    const point = Point.fromPrivateKey(priv);
    const scalar = point.hasEvenY() ? priv : CURVE.n - priv;
    return { point, scalar, x: point.toRawX() };
  }
  initNonce(d, t0h) {
    return numTo32b(d ^ bytesToNumber(t0h));
  }
  finalizeNonce(k0h) {
    const k0 = mod(bytesToNumber(k0h), CURVE.n);
    if (k0 === _0n)
      throw new Error("sign: Creation of signature failed. k is zero");
    const { point: R, x: rx, scalar: k } = this.getScalar(k0);
    return { R, rx, k };
  }
  finalizeSig(R, k, e, d) {
    return new SchnorrSignature(R.x, mod(k + e * d, CURVE.n)).toRawBytes();
  }
  error() {
    throw new Error("sign: Invalid signature produced");
  }
  async calc() {
    const { m, d, px, rand } = this;
    const tag = utils.taggedHash;
    const t = this.initNonce(d, await tag(TAGS.aux, rand));
    const { R, rx, k } = this.finalizeNonce(await tag(TAGS.nonce, t, px, m));
    const e = schnorrChallengeFinalize(await tag(TAGS.challenge, rx, px, m));
    const sig = this.finalizeSig(R, k, e, d);
    if (!await schnorrVerify(sig, m, px))
      this.error();
    return sig;
  }
  calcSync() {
    const { m, d, px, rand } = this;
    const tag = utils.taggedHashSync;
    const t = this.initNonce(d, tag(TAGS.aux, rand));
    const { R, rx, k } = this.finalizeNonce(tag(TAGS.nonce, t, px, m));
    const e = schnorrChallengeFinalize(tag(TAGS.challenge, rx, px, m));
    const sig = this.finalizeSig(R, k, e, d);
    if (!schnorrVerifySync(sig, m, px))
      this.error();
    return sig;
  }
}
async function schnorrSign(msg, privKey, auxRand) {
  return new InternalSchnorrSignature(msg, privKey, auxRand).calc();
}
function schnorrSignSync(msg, privKey, auxRand) {
  return new InternalSchnorrSignature(msg, privKey, auxRand).calcSync();
}
function initSchnorrVerify(signature, message, publicKey) {
  const raw = signature instanceof SchnorrSignature;
  const sig = raw ? signature : SchnorrSignature.fromHex(signature);
  if (raw)
    sig.assertValidity();
  return {
    ...sig,
    m: ensureBytes(message),
    P: normalizePublicKey(publicKey)
  };
}
function finalizeSchnorrVerify(r, P, s, e) {
  const R = Point.BASE.multiplyAndAddUnsafe(P, normalizePrivateKey(s), mod(-e, CURVE.n));
  if (!R || !R.hasEvenY() || R.x !== r)
    return false;
  return true;
}
async function schnorrVerify(signature, message, publicKey) {
  try {
    const { r, s, m, P } = initSchnorrVerify(signature, message, publicKey);
    const e = schnorrChallengeFinalize(await utils.taggedHash(TAGS.challenge, numTo32b(r), P.toRawX(), m));
    return finalizeSchnorrVerify(r, P, s, e);
  } catch (error) {
    return false;
  }
}
function schnorrVerifySync(signature, message, publicKey) {
  try {
    const { r, s, m, P } = initSchnorrVerify(signature, message, publicKey);
    const e = schnorrChallengeFinalize(utils.taggedHashSync(TAGS.challenge, numTo32b(r), P.toRawX(), m));
    return finalizeSchnorrVerify(r, P, s, e);
  } catch (error) {
    if (error instanceof ShaError)
      throw error;
    return false;
  }
}
const schnorr = {
  Signature: SchnorrSignature,
  getPublicKey: schnorrGetPublicKey,
  sign: schnorrSign,
  verify: schnorrVerify,
  signSync: schnorrSignSync,
  verifySync: schnorrVerifySync
};
Point.BASE._setWindowSize(8);
const crypto$1 = {
  node: __viteBrowserExternal$1,
  web: typeof self === "object" && "crypto" in self ? self.crypto : void 0
};
const TAGS = {
  challenge: "BIP0340/challenge",
  aux: "BIP0340/aux",
  nonce: "BIP0340/nonce"
};
const TAGGED_HASH_PREFIXES = {};
const utils = {
  bytesToHex,
  hexToBytes,
  concatBytes,
  mod,
  invert,
  isValidPrivateKey(privateKey) {
    try {
      normalizePrivateKey(privateKey);
      return true;
    } catch (error) {
      return false;
    }
  },
  _bigintTo32Bytes: numTo32b,
  _normalizePrivateKey: normalizePrivateKey,
  hashToPrivateKey: (hash2) => {
    hash2 = ensureBytes(hash2);
    const minLen = groupLen + 8;
    if (hash2.length < minLen || hash2.length > 1024) {
      throw new Error(`Expected valid bytes of private key as per FIPS 186`);
    }
    const num = mod(bytesToNumber(hash2), CURVE.n - _1n) + _1n;
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
  randomPrivateKey: () => utils.hashToPrivateKey(utils.randomBytes(groupLen + 8)),
  precompute(windowSize = 8, point = Point.BASE) {
    const cached = point === Point.BASE ? point : new Point(point.x, point.y);
    cached._setWindowSize(windowSize);
    cached.multiply(_3n);
    return cached;
  },
  sha256: async (...messages) => {
    if (crypto$1.web) {
      const buffer = await crypto$1.web.subtle.digest("SHA-256", concatBytes(...messages));
      return new Uint8Array(buffer);
    } else if (crypto$1.node) {
      const { createHash } = crypto$1.node;
      const hash2 = createHash("sha256");
      messages.forEach((m) => hash2.update(m));
      return Uint8Array.from(hash2.digest());
    } else {
      throw new Error("The environment doesn't have sha256 function");
    }
  },
  hmacSha256: async (key, ...messages) => {
    if (crypto$1.web) {
      const ckey = await crypto$1.web.subtle.importKey("raw", key, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]);
      const message = concatBytes(...messages);
      const buffer = await crypto$1.web.subtle.sign("HMAC", ckey, message);
      return new Uint8Array(buffer);
    } else if (crypto$1.node) {
      const { createHmac } = crypto$1.node;
      const hash2 = createHmac("sha256", key);
      messages.forEach((m) => hash2.update(m));
      return Uint8Array.from(hash2.digest());
    } else {
      throw new Error("The environment doesn't have hmac-sha256 function");
    }
  },
  sha256Sync: void 0,
  hmacSha256Sync: void 0,
  taggedHash: async (tag, ...messages) => {
    let tagP = TAGGED_HASH_PREFIXES[tag];
    if (tagP === void 0) {
      const tagH = await utils.sha256(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
      tagP = concatBytes(tagH, tagH);
      TAGGED_HASH_PREFIXES[tag] = tagP;
    }
    return utils.sha256(tagP, ...messages);
  },
  taggedHashSync: (tag, ...messages) => {
    if (typeof _sha256Sync !== "function")
      throw new ShaError("sha256Sync is undefined, you need to set it");
    let tagP = TAGGED_HASH_PREFIXES[tag];
    if (tagP === void 0) {
      const tagH = _sha256Sync(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
      tagP = concatBytes(tagH, tagH);
      TAGGED_HASH_PREFIXES[tag] = tagP;
    }
    return _sha256Sync(tagP, ...messages);
  },
  _JacobianPoint: JacobianPoint
};
Object.defineProperties(utils, {
  sha256Sync: {
    configurable: false,
    get() {
      return _sha256Sync;
    },
    set(val) {
      if (!_sha256Sync)
        _sha256Sync = val;
    }
  },
  hmacSha256Sync: {
    configurable: false,
    get() {
      return _hmacSha256Sync;
    },
    set(val) {
      if (!_hmacSha256Sync)
        _hmacSha256Sync = val;
    }
  }
});
const esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CURVE,
  Point,
  Signature,
  getPublicKey: getPublicKey$1,
  getSharedSecret,
  recoverPublicKey,
  schnorr,
  sign,
  signSync,
  utils,
  verify: verify$1
}, Symbol.toStringTag, { value: "Module" }));
var base64Js = {};
base64Js.byteLength = byteLength;
var toByteArray_1 = base64Js.toByteArray = toByteArray;
var fromByteArray_1 = base64Js.fromByteArray = fromByteArray;
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
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  var validLen = b64.indexOf("=");
  if (validLen === -1)
    validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
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
  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
  var i;
  for (i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 255;
    arr[curByte++] = tmp >> 8 & 255;
    arr[curByte++] = tmp & 255;
  }
  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 255;
  }
  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
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
  var output2 = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (uint8[i + 2] & 255);
    output2.push(tripletToBase64(tmp));
  }
  return output2.join("");
}
function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3;
  var parts = [];
  var maxChunkLength = 16383;
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(
      lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
    );
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(
      lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
    );
  }
  return parts.join("");
}
function isSubtleCryptoAvailable() {
  return typeof crypto !== "undefined" && typeof crypto.subtle !== "undefined";
}
const NO_CRYPTO_LIB = 'Crypto lib not found. Either the WebCrypto "crypto.subtle" or Node.js "crypto" module must be available.';
async function getCryptoLib() {
  if (isSubtleCryptoAvailable()) {
    return {
      lib: crypto.subtle,
      name: "subtleCrypto"
    };
  } else {
    try {
      const nodeCrypto = require("crypto");
      return {
        lib: nodeCrypto,
        name: "nodeCrypto"
      };
    } catch (error) {
      throw new Error(NO_CRYPTO_LIB);
    }
  }
}
class NodeCryptoAesCipher {
  constructor(createCipher2, createDecipher) {
    this.createCipher = createCipher2;
    this.createDecipher = createDecipher;
  }
  async encrypt(algorithm, key, iv, data) {
    if (algorithm !== "aes-128-cbc" && algorithm !== "aes-256-cbc") {
      throw new Error(`Unsupported cipher algorithm "${algorithm}"`);
    }
    const cipher = this.createCipher(algorithm, key, iv);
    const result = new Uint8Array(concatBytes$1(cipher.update(data), cipher.final()));
    return Promise.resolve(result);
  }
  async decrypt(algorithm, key, iv, data) {
    if (algorithm !== "aes-128-cbc" && algorithm !== "aes-256-cbc") {
      throw new Error(`Unsupported cipher algorithm "${algorithm}"`);
    }
    const cipher = this.createDecipher(algorithm, key, iv);
    const result = new Uint8Array(concatBytes$1(cipher.update(data), cipher.final()));
    return Promise.resolve(result);
  }
}
class WebCryptoAesCipher {
  constructor(subtleCrypto) {
    this.subtleCrypto = subtleCrypto;
  }
  async encrypt(algorithm, key, iv, data) {
    let algo;
    let length;
    if (algorithm === "aes-128-cbc") {
      algo = "AES-CBC";
      length = 128;
    } else if (algorithm === "aes-256-cbc") {
      algo = "AES-CBC";
      length = 256;
    } else {
      throw new Error(`Unsupported cipher algorithm "${algorithm}"`);
    }
    const cryptoKey = await this.subtleCrypto.importKey("raw", key, { name: algo, length }, false, [
      "encrypt"
    ]);
    const result = await this.subtleCrypto.encrypt({ name: algo, iv }, cryptoKey, data);
    return new Uint8Array(result);
  }
  async decrypt(algorithm, key, iv, data) {
    let algo;
    let length;
    if (algorithm === "aes-128-cbc") {
      algo = "AES-CBC";
      length = 128;
    } else if (algorithm === "aes-256-cbc") {
      algo = "AES-CBC";
      length = 256;
    } else {
      throw new Error(`Unsupported cipher algorithm "${algorithm}"`);
    }
    const cryptoKey = await this.subtleCrypto.importKey("raw", key, { name: algo, length }, false, [
      "decrypt"
    ]);
    const result = await this.subtleCrypto.decrypt({ name: algo, iv }, cryptoKey, data);
    return new Uint8Array(result);
  }
}
async function createCipher() {
  const cryptoLib = await getCryptoLib();
  if (cryptoLib.name === "subtleCrypto") {
    return new WebCryptoAesCipher(cryptoLib.lib);
  }
  return new NodeCryptoAesCipher(cryptoLib.lib.createCipheriv, cryptoLib.lib.createDecipheriv);
}
const basex = src;
const ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var bs58 = basex(ALPHABET);
const Rho$1 = new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]);
const Id$1 = Uint8Array.from({ length: 16 }, (_, i) => i);
const Pi$1 = Id$1.map((i) => (9 * i + 5) % 16);
let idxL$1 = [Id$1];
let idxR$1 = [Pi$1];
for (let i = 0; i < 4; i++)
  for (let j of [idxL$1, idxR$1])
    j.push(j[i].map((k) => Rho$1[k]));
const shifts$1 = [
  [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
  [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
  [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
  [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
  [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
].map((i) => new Uint8Array(i));
const shiftsL$1 = idxL$1.map((idx, i) => idx.map((j) => shifts$1[i][j]));
const shiftsR$1 = idxR$1.map((idx, i) => idx.map((j) => shifts$1[i][j]));
const Kl$1 = new Uint32Array([0, 1518500249, 1859775393, 2400959708, 2840853838]);
const Kr$1 = new Uint32Array([1352829926, 1548603684, 1836072691, 2053994217, 0]);
const rotl$1 = (word, shift) => word << shift | word >>> 32 - shift;
function f$1(group, x, y, z) {
  if (group === 0)
    return x ^ y ^ z;
  else if (group === 1)
    return x & y | ~x & z;
  else if (group === 2)
    return (x | ~y) ^ z;
  else if (group === 3)
    return x & z | y & ~z;
  else
    return x ^ (y | ~z);
}
const BUF$1 = new Uint32Array(16);
let RIPEMD160$1 = class RIPEMD160 extends SHA2$1 {
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
    return [h0, h1, h2, h3, h4];
  }
  set(h0, h1, h2, h3, h4) {
    this.h0 = h0 | 0;
    this.h1 = h1 | 0;
    this.h2 = h2 | 0;
    this.h3 = h3 | 0;
    this.h4 = h4 | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      BUF$1[i] = view.getUint32(offset, true);
    let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
    for (let group = 0; group < 5; group++) {
      const rGroup = 4 - group;
      const hbl = Kl$1[group], hbr = Kr$1[group];
      const rl = idxL$1[group], rr = idxR$1[group];
      const sl = shiftsL$1[group], sr = shiftsR$1[group];
      for (let i = 0; i < 16; i++) {
        const tl = rotl$1(al + f$1(group, bl, cl, dl) + BUF$1[rl[i]] + hbl, sl[i]) + el | 0;
        al = el, el = dl, dl = rotl$1(cl, 10) | 0, cl = bl, bl = tl;
      }
      for (let i = 0; i < 16; i++) {
        const tr = rotl$1(ar + f$1(rGroup, br, cr, dr) + BUF$1[rr[i]] + hbr, sr[i]) + er | 0;
        ar = er, er = dr, dr = rotl$1(cr, 10) | 0, cr = br, br = tr;
      }
    }
    this.set(this.h1 + cl + dr | 0, this.h2 + dl + er | 0, this.h3 + el + ar | 0, this.h4 + al + br | 0, this.h0 + bl + cr | 0);
  }
  roundClean() {
    BUF$1.fill(0);
  }
  destroy() {
    this.destroyed = true;
    this.buffer.fill(0);
    this.set(0, 0, 0, 0, 0);
  }
};
const ripemd160$1 = wrapConstructor$1(() => new RIPEMD160$1());
function hashRipemd160(data) {
  return ripemd160$1(data);
}
const U32_MASK64$1 = BigInt(2 ** 32 - 1);
const _32n$1 = BigInt(32);
function fromBig$1(n, le = false) {
  if (le)
    return { h: Number(n & U32_MASK64$1), l: Number(n >> _32n$1 & U32_MASK64$1) };
  return { h: Number(n >> _32n$1 & U32_MASK64$1) | 0, l: Number(n & U32_MASK64$1) | 0 };
}
function split$1(lst, le = false) {
  let Ah = new Uint32Array(lst.length);
  let Al = new Uint32Array(lst.length);
  for (let i = 0; i < lst.length; i++) {
    const { h: h2, l } = fromBig$1(lst[i], le);
    [Ah[i], Al[i]] = [h2, l];
  }
  return [Ah, Al];
}
const toBig$1 = (h2, l) => BigInt(h2 >>> 0) << _32n$1 | BigInt(l >>> 0);
const shrSH$1 = (h2, l, s) => h2 >>> s;
const shrSL$1 = (h2, l, s) => h2 << 32 - s | l >>> s;
const rotrSH$1 = (h2, l, s) => h2 >>> s | l << 32 - s;
const rotrSL$1 = (h2, l, s) => h2 << 32 - s | l >>> s;
const rotrBH$1 = (h2, l, s) => h2 << 64 - s | l >>> s - 32;
const rotrBL$1 = (h2, l, s) => h2 >>> s - 32 | l << 64 - s;
const rotr32H$1 = (h2, l) => l;
const rotr32L$1 = (h2, l) => h2;
const rotlSH$1 = (h2, l, s) => h2 << s | l >>> 32 - s;
const rotlSL$1 = (h2, l, s) => l << s | h2 >>> 32 - s;
const rotlBH$1 = (h2, l, s) => l << s - 32 | h2 >>> 64 - s;
const rotlBL$1 = (h2, l, s) => h2 << s - 32 | l >>> 64 - s;
function add$1(Ah, Al, Bh, Bl) {
  const l = (Al >>> 0) + (Bl >>> 0);
  return { h: Ah + Bh + (l / 2 ** 32 | 0) | 0, l: l | 0 };
}
const add3L$1 = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H$1 = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
const add4L$1 = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H$1 = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
const add5L$1 = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H$1 = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
const u64$1 = {
  fromBig: fromBig$1,
  split: split$1,
  toBig: toBig$1,
  shrSH: shrSH$1,
  shrSL: shrSL$1,
  rotrSH: rotrSH$1,
  rotrSL: rotrSL$1,
  rotrBH: rotrBH$1,
  rotrBL: rotrBL$1,
  rotr32H: rotr32H$1,
  rotr32L: rotr32L$1,
  rotlSH: rotlSH$1,
  rotlSL: rotlSL$1,
  rotlBH: rotlBH$1,
  rotlBL: rotlBL$1,
  add: add$1,
  add3L: add3L$1,
  add3H: add3H$1,
  add4L: add4L$1,
  add4H: add4H$1,
  add5H: add5H$1,
  add5L: add5L$1
};
const [SHA512_Kh$1, SHA512_Kl$1] = u64$1.split([
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
const SHA512_W_H$1 = new Uint32Array(80);
const SHA512_W_L$1 = new Uint32Array(80);
let SHA512$1 = class SHA512 extends SHA2$1 {
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
  // prettier-ignore
  get() {
    const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
  }
  // prettier-ignore
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
    for (let i = 0; i < 16; i++, offset += 4) {
      SHA512_W_H$1[i] = view.getUint32(offset);
      SHA512_W_L$1[i] = view.getUint32(offset += 4);
    }
    for (let i = 16; i < 80; i++) {
      const W15h = SHA512_W_H$1[i - 15] | 0;
      const W15l = SHA512_W_L$1[i - 15] | 0;
      const s0h = u64$1.rotrSH(W15h, W15l, 1) ^ u64$1.rotrSH(W15h, W15l, 8) ^ u64$1.shrSH(W15h, W15l, 7);
      const s0l = u64$1.rotrSL(W15h, W15l, 1) ^ u64$1.rotrSL(W15h, W15l, 8) ^ u64$1.shrSL(W15h, W15l, 7);
      const W2h = SHA512_W_H$1[i - 2] | 0;
      const W2l = SHA512_W_L$1[i - 2] | 0;
      const s1h = u64$1.rotrSH(W2h, W2l, 19) ^ u64$1.rotrBH(W2h, W2l, 61) ^ u64$1.shrSH(W2h, W2l, 6);
      const s1l = u64$1.rotrSL(W2h, W2l, 19) ^ u64$1.rotrBL(W2h, W2l, 61) ^ u64$1.shrSL(W2h, W2l, 6);
      const SUMl = u64$1.add4L(s0l, s1l, SHA512_W_L$1[i - 7], SHA512_W_L$1[i - 16]);
      const SUMh = u64$1.add4H(SUMl, s0h, s1h, SHA512_W_H$1[i - 7], SHA512_W_H$1[i - 16]);
      SHA512_W_H$1[i] = SUMh | 0;
      SHA512_W_L$1[i] = SUMl | 0;
    }
    let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    for (let i = 0; i < 80; i++) {
      const sigma1h = u64$1.rotrSH(Eh, El, 14) ^ u64$1.rotrSH(Eh, El, 18) ^ u64$1.rotrBH(Eh, El, 41);
      const sigma1l = u64$1.rotrSL(Eh, El, 14) ^ u64$1.rotrSL(Eh, El, 18) ^ u64$1.rotrBL(Eh, El, 41);
      const CHIh = Eh & Fh ^ ~Eh & Gh;
      const CHIl = El & Fl ^ ~El & Gl;
      const T1ll = u64$1.add5L(Hl, sigma1l, CHIl, SHA512_Kl$1[i], SHA512_W_L$1[i]);
      const T1h = u64$1.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh$1[i], SHA512_W_H$1[i]);
      const T1l = T1ll | 0;
      const sigma0h = u64$1.rotrSH(Ah, Al, 28) ^ u64$1.rotrBH(Ah, Al, 34) ^ u64$1.rotrBH(Ah, Al, 39);
      const sigma0l = u64$1.rotrSL(Ah, Al, 28) ^ u64$1.rotrBL(Ah, Al, 34) ^ u64$1.rotrBL(Ah, Al, 39);
      const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
      const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
      Hh = Gh | 0;
      Hl = Gl | 0;
      Gh = Fh | 0;
      Gl = Fl | 0;
      Fh = Eh | 0;
      Fl = El | 0;
      ({ h: Eh, l: El } = u64$1.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
      Dh = Ch | 0;
      Dl = Cl | 0;
      Ch = Bh | 0;
      Cl = Bl | 0;
      Bh = Ah | 0;
      Bl = Al | 0;
      const All = u64$1.add3L(T1l, sigma0l, MAJl);
      Ah = u64$1.add3H(All, T1h, sigma0h, MAJh);
      Al = All | 0;
    }
    ({ h: Ah, l: Al } = u64$1.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
    ({ h: Bh, l: Bl } = u64$1.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
    ({ h: Ch, l: Cl } = u64$1.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
    ({ h: Dh, l: Dl } = u64$1.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
    ({ h: Eh, l: El } = u64$1.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
    ({ h: Fh, l: Fl } = u64$1.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
    ({ h: Gh, l: Gl } = u64$1.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
    ({ h: Hh, l: Hl } = u64$1.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
    this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
  }
  roundClean() {
    SHA512_W_H$1.fill(0);
    SHA512_W_L$1.fill(0);
  }
  destroy() {
    this.buffer.fill(0);
    this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
let SHA512_224$1 = class SHA512_224 extends SHA512$1 {
  constructor() {
    super();
    this.Ah = 2352822216 | 0;
    this.Al = 424955298 | 0;
    this.Bh = 1944164710 | 0;
    this.Bl = 2312950998 | 0;
    this.Ch = 502970286 | 0;
    this.Cl = 855612546 | 0;
    this.Dh = 1738396948 | 0;
    this.Dl = 1479516111 | 0;
    this.Eh = 258812777 | 0;
    this.El = 2077511080 | 0;
    this.Fh = 2011393907 | 0;
    this.Fl = 79989058 | 0;
    this.Gh = 1067287976 | 0;
    this.Gl = 1780299464 | 0;
    this.Hh = 286451373 | 0;
    this.Hl = 2446758561 | 0;
    this.outputLen = 28;
  }
};
let SHA512_256$1 = class SHA512_256 extends SHA512$1 {
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
};
let SHA384$1 = class SHA384 extends SHA512$1 {
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
};
const sha512 = wrapConstructor$1(() => new SHA512$1());
wrapConstructor$1(() => new SHA512_224$1());
wrapConstructor$1(() => new SHA512_256$1());
wrapConstructor$1(() => new SHA384$1());
function hashSha256Sync(data) {
  return sha256$2(data);
}
function hashSha512Sync(data) {
  return sha512(data);
}
const BITCOIN_PUBKEYHASH = 0;
utils.hmacSha256Sync = (key, ...msgs) => {
  const h2 = hmac$1.create(sha256$2, key);
  msgs.forEach((msg) => h2.update(msg));
  return h2.digest();
};
function makeECPrivateKey() {
  return bytesToHex$1(utils.randomPrivateKey());
}
function base58Encode(hash2) {
  const checksum2 = sha256$2(sha256$2(hash2));
  return bs58.encode(concatBytes$1(hash2, checksum2).slice(0, hash2.length + 4));
}
function base58CheckEncode(version2, hash2) {
  return base58Encode(concatBytes$1(new Uint8Array([version2]), hash2.slice(0, 20)));
}
function publicKeyToBtcAddress(publicKey, version2 = BITCOIN_PUBKEYHASH) {
  const publicKeyBytes = typeof publicKey === "string" ? hexToBytes$1(publicKey) : publicKey;
  const publicKeyHash160 = hashRipemd160(hashSha256Sync(publicKeyBytes));
  return base58CheckEncode(version2, publicKeyHash160);
}
function getPublicKeyFromPrivate(privateKey) {
  const privateKeyBytes = privateKeyToBytes(privateKey);
  return bytesToHex$1(getPublicKey$1(privateKeyBytes.slice(0, 32), true));
}
function isValidPrivateKey(privateKey) {
  return utils.isValidPrivateKey(privateKeyToBytes(privateKey));
}
utils.hmacSha256Sync = (key, ...msgs) => {
  const h2 = hmac$1.create(sha256$2, key);
  msgs.forEach((msg) => h2.update(msg));
  return h2.digest();
};
var InvalidPublicKeyReason;
(function(InvalidPublicKeyReason2) {
  InvalidPublicKeyReason2["InvalidFormat"] = "InvalidFormat";
  InvalidPublicKeyReason2["IsNotPoint"] = "IsNotPoint";
})(InvalidPublicKeyReason || (InvalidPublicKeyReason = {}));
async function aes256CbcEncrypt(iv, key, plaintext) {
  const cipher = await createCipher();
  return await cipher.encrypt("aes-256-cbc", key, iv, plaintext);
}
async function aes256CbcDecrypt(iv, key, ciphertext) {
  const cipher = await createCipher();
  return await cipher.decrypt("aes-256-cbc", key, iv, ciphertext);
}
function hmacSha256(key, content) {
  return hmac$1(sha256$2, key, content);
}
function equalsConstTime(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  let res = 0;
  for (let i = 0; i < a.length; i++) {
    res |= a[i] ^ b[i];
  }
  return res === 0;
}
function sharedSecretToKeys(sharedSecret) {
  const hashedSecret = hashSha512Sync(sharedSecret);
  return {
    encryptionKey: hashedSecret.slice(0, 32),
    hmacKey: hashedSecret.slice(32)
  };
}
function allHexChars(maybe) {
  return maybe.match(/^[0-9a-f]+$/i) !== null;
}
function isValidPublicKey(pub) {
  const invalidFormat = {
    result: false,
    reason_data: "Invalid public key format",
    reason: InvalidPublicKeyReason.InvalidFormat
  };
  const invalidPoint = {
    result: false,
    reason_data: "Public key is not a point",
    reason: InvalidPublicKeyReason.IsNotPoint
  };
  if (pub.length !== 66 && pub.length !== 130)
    return invalidFormat;
  const firstByte = pub.slice(0, 2);
  if (pub.length === 130 && firstByte !== "04")
    return invalidFormat;
  if (pub.length === 66 && firstByte !== "02" && firstByte !== "03")
    return invalidFormat;
  if (!allHexChars(pub))
    return invalidFormat;
  try {
    const point = Point.fromHex(pub);
    point.assertValidity();
    return {
      result: true,
      reason_data: null,
      reason: null
    };
  } catch (e) {
    return invalidPoint;
  }
}
async function encryptECIES(publicKey, content, wasString, cipherTextEncoding) {
  const validity = isValidPublicKey(publicKey);
  if (!validity.result) {
    throw validity;
  }
  const ephemeralPrivateKey = utils.randomPrivateKey();
  const ephemeralPublicKey = getPublicKey$1(ephemeralPrivateKey, true);
  let sharedSecret = getSharedSecret(ephemeralPrivateKey, publicKey, true);
  sharedSecret = sharedSecret.slice(1);
  const sharedKeys = sharedSecretToKeys(sharedSecret);
  const initializationVector = utils.randomBytes(16);
  const cipherText = await aes256CbcEncrypt(initializationVector, sharedKeys.encryptionKey, content);
  const macData = concatBytes$1(initializationVector, ephemeralPublicKey, cipherText);
  const mac = hmacSha256(sharedKeys.hmacKey, macData);
  let cipherTextString;
  if (!cipherTextEncoding || cipherTextEncoding === "hex") {
    cipherTextString = bytesToHex$1(cipherText);
  } else if (cipherTextEncoding === "base64") {
    cipherTextString = fromByteArray_1(cipherText);
  } else {
    throw new Error(`Unexpected cipherTextEncoding "${cipherTextEncoding}"`);
  }
  const result = {
    iv: bytesToHex$1(initializationVector),
    ephemeralPK: bytesToHex$1(ephemeralPublicKey),
    cipherText: cipherTextString,
    mac: bytesToHex$1(mac),
    wasString
  };
  if (cipherTextEncoding && cipherTextEncoding !== "hex") {
    result.cipherTextEncoding = cipherTextEncoding;
  }
  return result;
}
async function decryptECIES(privateKey, cipherObject) {
  if (!cipherObject.ephemeralPK) {
    throw new FailedDecryptionError("Unable to get public key from cipher object. You might be trying to decrypt an unencrypted object.");
  }
  const ephemeralPK = cipherObject.ephemeralPK;
  let sharedSecret = getSharedSecret(privateKey, ephemeralPK, true);
  sharedSecret = sharedSecret.slice(1);
  const sharedKeys = sharedSecretToKeys(sharedSecret);
  const ivBytes = hexToBytes$1(cipherObject.iv);
  let cipherTextBytes;
  if (!cipherObject.cipherTextEncoding || cipherObject.cipherTextEncoding === "hex") {
    cipherTextBytes = hexToBytes$1(cipherObject.cipherText);
  } else if (cipherObject.cipherTextEncoding === "base64") {
    cipherTextBytes = toByteArray_1(cipherObject.cipherText);
  } else {
    throw new Error(`Unexpected cipherTextEncoding "${cipherObject.cipherText}"`);
  }
  const macData = concatBytes$1(ivBytes, hexToBytes$1(ephemeralPK), cipherTextBytes);
  const actualMac = hmacSha256(sharedKeys.hmacKey, macData);
  const expectedMac = hexToBytes$1(cipherObject.mac);
  if (!equalsConstTime(expectedMac, actualMac)) {
    throw new FailedDecryptionError("Decryption failed: failure in MAC check");
  }
  const plainText = await aes256CbcDecrypt(ivBytes, sharedKeys.encryptionKey, cipherTextBytes);
  if (cipherObject.wasString) {
    return bytesToUtf8(plainText);
  }
  return plainText;
}
function signECDSA(privateKey, content) {
  const contentBytes = typeof content === "string" ? utf8ToBytes$2(content) : content;
  const publicKey = getPublicKeyFromPrivate(privateKey);
  const contentHash = hashSha256Sync(contentBytes);
  const signature = signSync(contentHash, privateKey);
  return {
    signature: bytesToHex$1(signature),
    publicKey
  };
}
async function encryptContent(content, options) {
  const opts = Object.assign({}, options);
  let privateKey;
  if (!opts.publicKey) {
    if (!opts.privateKey) {
      throw new Error("Either public key or private key must be supplied for encryption.");
    }
    opts.publicKey = getPublicKeyFromPrivate(opts.privateKey);
  }
  const wasString = typeof opts.wasString === "boolean" ? opts.wasString : typeof content === "string";
  const contentBytes = typeof content === "string" ? utf8ToBytes$2(content) : content;
  const cipherObject = await encryptECIES(opts.publicKey, contentBytes, wasString, opts.cipherTextEncoding);
  let cipherPayload = JSON.stringify(cipherObject);
  if (opts.sign) {
    if (typeof opts.sign === "string") {
      privateKey = opts.sign;
    } else if (!privateKey) {
      privateKey = opts.privateKey;
    }
    const signatureObject = signECDSA(privateKey, cipherPayload);
    const signedCipherObject = {
      signature: signatureObject.signature,
      publicKey: signatureObject.publicKey,
      cipherText: cipherPayload
    };
    cipherPayload = JSON.stringify(signedCipherObject);
  }
  return cipherPayload;
}
function decryptContent(content, options) {
  const opts = Object.assign({}, options);
  if (!opts.privateKey) {
    throw new Error("Private key is required for decryption.");
  }
  try {
    const cipherObject = JSON.parse(content);
    return decryptECIES(opts.privateKey, cipherObject);
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw new Error("Failed to parse encrypted content JSON. The content may not be encrypted. If using getFile, try passing { decrypt: false }.");
    } else {
      throw err;
    }
  }
}
var lib = {};
var signer = {};
var base64Url = {};
Object.defineProperty(base64Url, "__esModule", { value: true });
base64Url.decode = base64Url.encode = base64Url.unescape = base64Url.escape = base64Url.pad = void 0;
const base64_js_1$1 = base64Js;
function pad(base64) {
  return `${base64}${"=".repeat(4 - (base64.length % 4 || 4))}`;
}
base64Url.pad = pad;
function escape(base64) {
  return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
base64Url.escape = escape;
function unescape(base64Url2) {
  return pad(base64Url2).replace(/-/g, "+").replace(/_/g, "/");
}
base64Url.unescape = unescape;
function encode(base64) {
  return escape((0, base64_js_1$1.fromByteArray)(new TextEncoder().encode(base64)));
}
base64Url.encode = encode;
function decode$1(base64Url2) {
  return new TextDecoder().decode((0, base64_js_1$1.toByteArray)(pad(unescape(base64Url2))));
}
base64Url.decode = decode$1;
var cryptoClients = {};
var secp256k1 = {};
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(hmac$2);
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(esm);
var ecdsaSigFormatter = {};
Object.defineProperty(ecdsaSigFormatter, "__esModule", { value: true });
ecdsaSigFormatter.joseToDer = ecdsaSigFormatter.derToJose = void 0;
const base64_js_1 = base64Js;
const base64Url_1 = base64Url;
function getParamSize(keySize) {
  return (keySize / 8 | 0) + (keySize % 8 === 0 ? 0 : 1);
}
const paramBytesForAlg = {
  ES256: getParamSize(256),
  ES384: getParamSize(384),
  ES512: getParamSize(521)
};
function getParamBytesForAlg(alg) {
  const paramBytes = paramBytesForAlg[alg];
  if (paramBytes) {
    return paramBytes;
  }
  throw new Error(`Unknown algorithm "${alg}"`);
}
const MAX_OCTET = 128;
const CLASS_UNIVERSAL = 0;
const PRIMITIVE_BIT = 32;
const TAG_SEQ = 16;
const TAG_INT = 2;
const ENCODED_TAG_SEQ = TAG_SEQ | PRIMITIVE_BIT | CLASS_UNIVERSAL << 6;
const ENCODED_TAG_INT = TAG_INT | CLASS_UNIVERSAL << 6;
function signatureAsBytes(signature) {
  if (signature instanceof Uint8Array) {
    return signature;
  } else if ("string" === typeof signature) {
    return (0, base64_js_1.toByteArray)((0, base64Url_1.pad)(signature));
  }
  throw new TypeError("ECDSA signature must be a Base64 string or a Uint8Array");
}
function derToJose(signature, alg) {
  const signatureBytes = signatureAsBytes(signature);
  const paramBytes = getParamBytesForAlg(alg);
  const maxEncodedParamLength = paramBytes + 1;
  const inputLength = signatureBytes.length;
  let offset = 0;
  if (signatureBytes[offset++] !== ENCODED_TAG_SEQ) {
    throw new Error('Could not find expected "seq"');
  }
  let seqLength = signatureBytes[offset++];
  if (seqLength === (MAX_OCTET | 1)) {
    seqLength = signatureBytes[offset++];
  }
  if (inputLength - offset < seqLength) {
    throw new Error(`"seq" specified length of "${seqLength}", only "${inputLength - offset}" remaining`);
  }
  if (signatureBytes[offset++] !== ENCODED_TAG_INT) {
    throw new Error('Could not find expected "int" for "r"');
  }
  const rLength = signatureBytes[offset++];
  if (inputLength - offset - 2 < rLength) {
    throw new Error(`"r" specified length of "${rLength}", only "${inputLength - offset - 2}" available`);
  }
  if (maxEncodedParamLength < rLength) {
    throw new Error(`"r" specified length of "${rLength}", max of "${maxEncodedParamLength}" is acceptable`);
  }
  const rOffset = offset;
  offset += rLength;
  if (signatureBytes[offset++] !== ENCODED_TAG_INT) {
    throw new Error('Could not find expected "int" for "s"');
  }
  const sLength = signatureBytes[offset++];
  if (inputLength - offset !== sLength) {
    throw new Error(`"s" specified length of "${sLength}", expected "${inputLength - offset}"`);
  }
  if (maxEncodedParamLength < sLength) {
    throw new Error(`"s" specified length of "${sLength}", max of "${maxEncodedParamLength}" is acceptable`);
  }
  const sOffset = offset;
  offset += sLength;
  if (offset !== inputLength) {
    throw new Error(`Expected to consume entire array, but "${inputLength - offset}" bytes remain`);
  }
  const rPadding = paramBytes - rLength;
  const sPadding = paramBytes - sLength;
  const dst = new Uint8Array(rPadding + rLength + sPadding + sLength);
  for (offset = 0; offset < rPadding; ++offset) {
    dst[offset] = 0;
  }
  dst.set(signatureBytes.subarray(rOffset + Math.max(-rPadding, 0), rOffset + rLength), offset);
  offset = paramBytes;
  for (const o = offset; offset < o + sPadding; ++offset) {
    dst[offset] = 0;
  }
  dst.set(signatureBytes.subarray(sOffset + Math.max(-sPadding, 0), sOffset + sLength), offset);
  return (0, base64Url_1.escape)((0, base64_js_1.fromByteArray)(dst));
}
ecdsaSigFormatter.derToJose = derToJose;
function countPadding(buf, start, stop) {
  let padding = 0;
  while (start + padding < stop && buf[start + padding] === 0) {
    ++padding;
  }
  const needsSign = buf[start + padding] >= MAX_OCTET;
  if (needsSign) {
    --padding;
  }
  return padding;
}
function joseToDer(signature, alg) {
  signature = signatureAsBytes(signature);
  const paramBytes = getParamBytesForAlg(alg);
  const signatureBytes = signature.length;
  if (signatureBytes !== paramBytes * 2) {
    throw new TypeError(`"${alg}" signatures must be "${paramBytes * 2}" bytes, saw "${signatureBytes}"`);
  }
  const rPadding = countPadding(signature, 0, paramBytes);
  const sPadding = countPadding(signature, paramBytes, signature.length);
  const rLength = paramBytes - rPadding;
  const sLength = paramBytes - sPadding;
  const rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;
  const shortLength = rsBytes < MAX_OCTET;
  const dst = new Uint8Array((shortLength ? 2 : 3) + rsBytes);
  let offset = 0;
  dst[offset++] = ENCODED_TAG_SEQ;
  if (shortLength) {
    dst[offset++] = rsBytes;
  } else {
    dst[offset++] = MAX_OCTET | 1;
    dst[offset++] = rsBytes & 255;
  }
  dst[offset++] = ENCODED_TAG_INT;
  dst[offset++] = rLength;
  if (rPadding < 0) {
    dst[offset++] = 0;
    dst.set(signature.subarray(0, paramBytes), offset);
    offset += paramBytes;
  } else {
    dst.set(signature.subarray(rPadding, paramBytes), offset);
    offset += paramBytes - rPadding;
  }
  dst[offset++] = ENCODED_TAG_INT;
  dst[offset++] = sLength;
  if (sPadding < 0) {
    dst[offset++] = 0;
    dst.set(signature.subarray(paramBytes), offset);
  } else {
    dst.set(signature.subarray(paramBytes + sPadding), offset);
  }
  return dst;
}
ecdsaSigFormatter.joseToDer = joseToDer;
var errors = {};
Object.defineProperty(errors, "__esModule", { value: true });
errors.InvalidTokenError = errors.MissingParametersError = void 0;
class MissingParametersError extends Error {
  constructor(message) {
    super();
    this.name = "MissingParametersError";
    this.message = message || "";
  }
}
errors.MissingParametersError = MissingParametersError;
class InvalidTokenError extends Error {
  constructor(message) {
    super();
    this.name = "InvalidTokenError";
    this.message = message || "";
  }
}
errors.InvalidTokenError = InvalidTokenError;
Object.defineProperty(secp256k1, "__esModule", { value: true });
secp256k1.SECP256K1Client = void 0;
const hmac_1 = require$$0;
const sha256_1$3 = require$$0$1;
const secp = require$$2;
const ecdsaSigFormatter_1 = ecdsaSigFormatter;
const errors_1$2 = errors;
const utils_1 = require$$5;
secp.utils.hmacSha256Sync = (key, ...msgs) => {
  const h2 = hmac_1.hmac.create(sha256_1$3.sha256, key);
  msgs.forEach((msg) => h2.update(msg));
  return h2.digest();
};
class SECP256K1Client {
  static derivePublicKey(privateKey, compressed = true) {
    if (privateKey.length === 66) {
      privateKey = privateKey.slice(0, 64);
    }
    if (privateKey.length < 64) {
      privateKey = privateKey.padStart(64, "0");
    }
    return (0, utils_1.bytesToHex)(secp.getPublicKey(privateKey, compressed));
  }
  static signHash(signingInputHash, privateKey, format = "jose") {
    if (!signingInputHash || !privateKey) {
      throw new errors_1$2.MissingParametersError("a signing input hash and private key are all required");
    }
    const derSignature = secp.signSync(signingInputHash, privateKey.slice(0, 64), {
      der: true,
      canonical: false
    });
    if (format === "der")
      return (0, utils_1.bytesToHex)(derSignature);
    if (format === "jose")
      return (0, ecdsaSigFormatter_1.derToJose)(derSignature, "ES256");
    throw Error("Invalid signature format");
  }
  static loadSignature(joseSignature) {
    return (0, ecdsaSigFormatter_1.joseToDer)(joseSignature, "ES256");
  }
  static verifyHash(signingInputHash, derSignatureBytes, publicKey) {
    if (!signingInputHash || !derSignatureBytes || !publicKey) {
      throw new errors_1$2.MissingParametersError("a signing input hash, der signature, and public key are all required");
    }
    return secp.verify(derSignatureBytes, signingInputHash, publicKey, { strict: false });
  }
}
secp256k1.SECP256K1Client = SECP256K1Client;
SECP256K1Client.algorithmName = "ES256K";
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.cryptoClients = exports.SECP256K1Client = void 0;
  const secp256k1_1 = secp256k1;
  Object.defineProperty(exports, "SECP256K1Client", { enumerable: true, get: function() {
    return secp256k1_1.SECP256K1Client;
  } });
  const cryptoClients2 = {
    ES256K: secp256k1_1.SECP256K1Client
  };
  exports.cryptoClients = cryptoClients2;
})(cryptoClients);
var sha256$1 = {};
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var __awaiter$1 = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(sha256$1, "__esModule", { value: true });
sha256$1.hashSha256Async = sha256$1.hashSha256 = void 0;
const sha256_1$2 = require$$0$1;
function hashSha256(input) {
  return (0, sha256_1$2.sha256)(input);
}
sha256$1.hashSha256 = hashSha256;
function hashSha256Async(input) {
  return __awaiter$1(this, void 0, void 0, function* () {
    try {
      const isSubtleCryptoAvailable2 = typeof crypto !== "undefined" && typeof crypto.subtle !== "undefined";
      if (isSubtleCryptoAvailable2) {
        const bytes2 = typeof input === "string" ? new TextEncoder().encode(input) : input;
        const hash2 = yield crypto.subtle.digest("SHA-256", bytes2);
        return new Uint8Array(hash2);
      } else {
        const nodeCrypto = require$$1;
        if (!nodeCrypto.createHash) {
          throw new Error("`crypto` module does not contain `createHash`");
        }
        return Promise.resolve(nodeCrypto.createHash("sha256").update(input).digest());
      }
    } catch (error) {
      console.log(error);
      console.log('Crypto lib not found. Neither the global `crypto.subtle` Web Crypto API, nor the or the Node.js `require("crypto").createHash` module is available. Falling back to JS implementation.');
      return Promise.resolve(hashSha256(input));
    }
  });
}
sha256$1.hashSha256Async = hashSha256Async;
var __awaiter = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(signer, "__esModule", { value: true });
signer.TokenSigner = signer.createUnsecuredToken = void 0;
const base64url$2 = base64Url;
const cryptoClients_1$1 = cryptoClients;
const errors_1$1 = errors;
const sha256_1$1 = sha256$1;
function createSigningInput(payload, header) {
  const tokenParts = [];
  const encodedHeader = base64url$2.encode(JSON.stringify(header));
  tokenParts.push(encodedHeader);
  const encodedPayload = base64url$2.encode(JSON.stringify(payload));
  tokenParts.push(encodedPayload);
  const signingInput = tokenParts.join(".");
  return signingInput;
}
function createUnsecuredToken(payload) {
  const header = { typ: "JWT", alg: "none" };
  return createSigningInput(payload, header) + ".";
}
signer.createUnsecuredToken = createUnsecuredToken;
class TokenSigner {
  constructor(signingAlgorithm, rawPrivateKey) {
    if (!(signingAlgorithm && rawPrivateKey)) {
      throw new errors_1$1.MissingParametersError("a signing algorithm and private key are required");
    }
    if (typeof signingAlgorithm !== "string") {
      throw new Error("signing algorithm parameter must be a string");
    }
    signingAlgorithm = signingAlgorithm.toUpperCase();
    if (!cryptoClients_1$1.cryptoClients.hasOwnProperty(signingAlgorithm)) {
      throw new Error("invalid signing algorithm");
    }
    this.tokenType = "JWT";
    this.cryptoClient = cryptoClients_1$1.cryptoClients[signingAlgorithm];
    this.rawPrivateKey = rawPrivateKey;
  }
  header(header = {}) {
    const defaultHeader = { typ: this.tokenType, alg: this.cryptoClient.algorithmName };
    return Object.assign({}, defaultHeader, header);
  }
  sign(payload, expanded = false, customHeader = {}) {
    const header = this.header(customHeader);
    const signingInput = createSigningInput(payload, header);
    const signingInputHash = (0, sha256_1$1.hashSha256)(signingInput);
    return this.createWithSignedHash(payload, expanded, header, signingInput, signingInputHash);
  }
  signAsync(payload, expanded = false, customHeader = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      const header = this.header(customHeader);
      const signingInput = createSigningInput(payload, header);
      const signingInputHash = yield (0, sha256_1$1.hashSha256Async)(signingInput);
      return this.createWithSignedHash(payload, expanded, header, signingInput, signingInputHash);
    });
  }
  createWithSignedHash(payload, expanded, header, signingInput, signingInputHash) {
    const signature = this.cryptoClient.signHash(signingInputHash, this.rawPrivateKey);
    if (expanded) {
      const signedToken = {
        header: [base64url$2.encode(JSON.stringify(header))],
        payload: JSON.stringify(payload),
        signature: [signature]
      };
      return signedToken;
    } else {
      return [signingInput, signature].join(".");
    }
  }
}
signer.TokenSigner = TokenSigner;
var verifier = {};
Object.defineProperty(verifier, "__esModule", { value: true });
verifier.TokenVerifier = void 0;
const base64url$1 = base64Url;
const cryptoClients_1 = cryptoClients;
const errors_1 = errors;
const sha256_1 = sha256$1;
class TokenVerifier {
  constructor(signingAlgorithm, rawPublicKey) {
    if (!(signingAlgorithm && rawPublicKey)) {
      throw new errors_1.MissingParametersError("a signing algorithm and public key are required");
    }
    if (typeof signingAlgorithm !== "string") {
      throw "signing algorithm parameter must be a string";
    }
    signingAlgorithm = signingAlgorithm.toUpperCase();
    if (!cryptoClients_1.cryptoClients.hasOwnProperty(signingAlgorithm)) {
      throw "invalid signing algorithm";
    }
    this.tokenType = "JWT";
    this.cryptoClient = cryptoClients_1.cryptoClients[signingAlgorithm];
    this.rawPublicKey = rawPublicKey;
  }
  verify(token) {
    if (typeof token === "string") {
      return this.verifyCompact(token, false);
    } else if (typeof token === "object") {
      return this.verifyExpanded(token, false);
    } else {
      return false;
    }
  }
  verifyAsync(token) {
    if (typeof token === "string") {
      return this.verifyCompact(token, true);
    } else if (typeof token === "object") {
      return this.verifyExpanded(token, true);
    } else {
      return Promise.resolve(false);
    }
  }
  verifyCompact(token, async) {
    const tokenParts = token.split(".");
    const signingInput = tokenParts[0] + "." + tokenParts[1];
    const performVerify = (signingInputHash) => {
      const derSignatureBytes = this.cryptoClient.loadSignature(tokenParts[2]);
      return this.cryptoClient.verifyHash(signingInputHash, derSignatureBytes, this.rawPublicKey);
    };
    if (async) {
      return (0, sha256_1.hashSha256Async)(signingInput).then((signingInputHash) => performVerify(signingInputHash));
    } else {
      const signingInputHash = (0, sha256_1.hashSha256)(signingInput);
      return performVerify(signingInputHash);
    }
  }
  verifyExpanded(token, async) {
    const signingInput = [token["header"].join("."), base64url$1.encode(token["payload"])].join(".");
    let verified = true;
    const performVerify = (signingInputHash) => {
      token["signature"].map((signature) => {
        const derSignatureBytes = this.cryptoClient.loadSignature(signature);
        const signatureVerified = this.cryptoClient.verifyHash(signingInputHash, derSignatureBytes, this.rawPublicKey);
        if (!signatureVerified) {
          verified = false;
        }
      });
      return verified;
    };
    if (async) {
      return (0, sha256_1.hashSha256Async)(signingInput).then((signingInputHash) => performVerify(signingInputHash));
    } else {
      const signingInputHash = (0, sha256_1.hashSha256)(signingInput);
      return performVerify(signingInputHash);
    }
  }
}
verifier.TokenVerifier = TokenVerifier;
var decode = {};
Object.defineProperty(decode, "__esModule", { value: true });
decode.decodeToken = void 0;
const base64url = base64Url;
function decodeToken(token) {
  if (typeof token === "string") {
    const tokenParts = token.split(".");
    const header = JSON.parse(base64url.decode(tokenParts[0]));
    const payload = JSON.parse(base64url.decode(tokenParts[1]));
    const signature = tokenParts[2];
    return {
      header,
      payload,
      signature
    };
  } else if (typeof token === "object") {
    if (typeof token.payload !== "string") {
      throw new Error("Expected token payload to be a base64 or json string");
    }
    let payload = token.payload;
    if (token.payload[0] !== "{") {
      payload = base64url.decode(payload);
    }
    const allHeaders = [];
    token.header.map((headerValue) => {
      const header = JSON.parse(base64url.decode(headerValue));
      allHeaders.push(header);
    });
    return {
      header: allHeaders,
      payload: JSON.parse(payload),
      signature: token.signature
    };
  }
}
decode.decodeToken = decodeToken;
(function(exports) {
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports2) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
        __createBinding(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  __exportStar(signer, exports);
  __exportStar(verifier, exports);
  __exportStar(decode, exports);
  __exportStar(errors, exports);
  __exportStar(cryptoClients, exports);
})(lib);
function makeDIDFromAddress(address2) {
  return `did:btc-addr:${address2}`;
}
function getDIDType(decentralizedID) {
  const didParts = decentralizedID.split(":");
  if (didParts.length !== 3) {
    throw new InvalidDIDError("Decentralized IDs must have 3 parts");
  }
  if (didParts[0].toLowerCase() !== "did") {
    throw new InvalidDIDError('Decentralized IDs must start with "did"');
  }
  return didParts[1].toLowerCase();
}
function getAddressFromDID(decentralizedID) {
  if (decentralizedID) {
    const didType = getDIDType(decentralizedID);
    if (didType === "btc-addr") {
      return decentralizedID.split(":")[2];
    } else {
      return void 0;
    }
  }
  return void 0;
}
const VERSION = "1.4.0";
function generateTransitKey() {
  const transitKey = makeECPrivateKey();
  return transitKey;
}
function makeAuthRequestToken(transitPrivateKey, redirectURI, manifestURI, scopes = DEFAULT_SCOPE.slice(), appDomain, expiresAt = nextMonth().getTime(), extraParams = {}) {
  const getWindowOrigin = (paramName) => {
    const location2 = getGlobalObject("location", {
      throwIfUnavailable: true,
      usageDesc: `makeAuthRequest([${paramName}=undefined])`
    });
    return location2 == null ? void 0 : location2.origin;
  };
  if (!redirectURI) {
    redirectURI = `${getWindowOrigin("redirectURI")}/`;
  }
  if (!manifestURI) {
    manifestURI = `${getWindowOrigin("manifestURI")}/manifest.json`;
  }
  if (!appDomain) {
    appDomain = getWindowOrigin("appDomain");
  }
  const payload = Object.assign({}, extraParams, {
    jti: makeUUID4(),
    iat: Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3),
    exp: Math.floor(expiresAt / 1e3),
    iss: null,
    public_keys: [],
    domain_name: appDomain,
    manifest_uri: manifestURI,
    redirect_uri: redirectURI,
    version: VERSION,
    do_not_include_profile: true,
    supports_hub_url: true,
    scopes
  });
  const publicKey = lib.SECP256K1Client.derivePublicKey(transitPrivateKey);
  payload.public_keys = [publicKey];
  const address2 = publicKeyToBtcAddress(publicKey);
  payload.iss = makeDIDFromAddress(address2);
  const tokenSigner = new lib.TokenSigner("ES256k", transitPrivateKey);
  const token = tokenSigner.sign(payload);
  return token;
}
async function decryptPrivateKey(privateKey, hexedEncrypted) {
  const unhexedString = bytesToUtf8(hexToBytes$1(hexedEncrypted));
  const encryptedObj = JSON.parse(unhexedString);
  const decrypted = await decryptECIES(privateKey, encryptedObj);
  if (typeof decrypted !== "string") {
    throw new Error("Unable to correctly decrypt private key");
  } else {
    return decrypted;
  }
}
function doSignaturesMatchPublicKeys(token) {
  const payload = lib.decodeToken(token).payload;
  if (typeof payload === "string") {
    throw new Error("Unexpected token payload type of string");
  }
  const publicKeys = payload.public_keys;
  if (publicKeys.length === 1) {
    const publicKey = publicKeys[0];
    try {
      const tokenVerifier = new lib.TokenVerifier("ES256k", publicKey);
      return tokenVerifier.verify(token);
    } catch (e) {
      return false;
    }
  } else {
    throw new Error("Multiple public keys are not supported");
  }
}
function doPublicKeysMatchIssuer(token) {
  const payload = lib.decodeToken(token).payload;
  if (typeof payload === "string") {
    throw new Error("Unexpected token payload type of string");
  }
  const publicKeys = payload.public_keys;
  const addressFromIssuer = getAddressFromDID(payload.iss);
  if (publicKeys.length === 1) {
    const addressFromPublicKeys2 = publicKeyToBtcAddress(publicKeys[0]);
    if (addressFromPublicKeys2 === addressFromIssuer) {
      return true;
    }
  } else {
    throw new Error("Multiple public keys are not supported");
  }
  return false;
}
function isIssuanceDateValid(token) {
  const payload = lib.decodeToken(token).payload;
  if (typeof payload === "string") {
    throw new Error("Unexpected token payload type of string");
  }
  if (payload.iat) {
    if (typeof payload.iat !== "number") {
      return false;
    }
    const issuedAt = new Date(payload.iat * 1e3);
    if ((/* @__PURE__ */ new Date()).getTime() < issuedAt.getTime()) {
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
}
function isExpirationDateValid(token) {
  const payload = lib.decodeToken(token).payload;
  if (typeof payload === "string") {
    throw new Error("Unexpected token payload type of string");
  }
  if (payload.exp) {
    if (typeof payload.exp !== "number") {
      return false;
    }
    const expiresAt = new Date(payload.exp * 1e3);
    if ((/* @__PURE__ */ new Date()).getTime() > expiresAt.getTime()) {
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
}
async function verifyAuthResponse(token) {
  const conditions = await Promise.all([
    isExpirationDateValid(token),
    isIssuanceDateValid(token),
    doSignaturesMatchPublicKeys(token),
    doPublicKeysMatchIssuer(token)
  ]);
  return conditions.every((val) => val);
}
const SESSION_VERSION = "1.0.0";
class SessionData {
  constructor(options) {
    this.version = SESSION_VERSION;
    this.userData = options.userData;
    this.transitKey = options.transitKey;
    this.etags = options.etags ? options.etags : {};
  }
  static fromJSON(json) {
    if (json.version !== SESSION_VERSION) {
      throw new InvalidStateError(`JSON data version ${json.version} not supported by SessionData`);
    }
    const options = {
      coreNode: json.coreNode,
      userData: json.userData,
      transitKey: json.transitKey,
      etags: json.etags
    };
    return new SessionData(options);
  }
  toString() {
    return JSON.stringify(this);
  }
}
class SessionDataStore {
  constructor(sessionOptions) {
    if (sessionOptions) {
      const newSessionData = new SessionData(sessionOptions);
      this.setSessionData(newSessionData);
    }
  }
  getSessionData() {
    throw new Error("Abstract class");
  }
  setSessionData(_session) {
    throw new Error("Abstract class");
  }
  deleteSessionData() {
    throw new Error("Abstract class");
  }
}
class InstanceDataStore extends SessionDataStore {
  constructor(sessionOptions) {
    super(sessionOptions);
    if (!this.sessionData) {
      this.setSessionData(new SessionData({}));
    }
  }
  getSessionData() {
    if (!this.sessionData) {
      throw new NoSessionDataError("No session data was found.");
    }
    return this.sessionData;
  }
  setSessionData(session) {
    this.sessionData = session;
    return true;
  }
  deleteSessionData() {
    this.setSessionData(new SessionData({}));
    return true;
  }
}
class LocalStorageStore extends SessionDataStore {
  constructor(sessionOptions) {
    super(sessionOptions);
    if (sessionOptions && sessionOptions.storeOptions && sessionOptions.storeOptions.localStorageKey && typeof sessionOptions.storeOptions.localStorageKey === "string") {
      this.key = sessionOptions.storeOptions.localStorageKey;
    } else {
      this.key = LOCALSTORAGE_SESSION_KEY;
    }
    const data = localStorage.getItem(this.key);
    if (!data) {
      const sessionData = new SessionData({});
      this.setSessionData(sessionData);
    }
  }
  getSessionData() {
    const data = localStorage.getItem(this.key);
    if (!data) {
      throw new NoSessionDataError("No session data was found in localStorage");
    }
    const dataJSON = JSON.parse(data);
    return SessionData.fromJSON(dataJSON);
  }
  setSessionData(session) {
    localStorage.setItem(this.key, session.toString());
    return true;
  }
  deleteSessionData() {
    localStorage.removeItem(this.key);
    this.setSessionData(new SessionData({}));
    return true;
  }
}
var ChainID;
(function(ChainID2) {
  ChainID2[ChainID2["Testnet"] = 2147483648] = "Testnet";
  ChainID2[ChainID2["Mainnet"] = 1] = "Mainnet";
})(ChainID || (ChainID = {}));
const DEFAULT_CHAIN_ID = ChainID.Mainnet;
const MAX_STRING_LENGTH_BYTES = 128;
const CLARITY_INT_SIZE = 128;
const CLARITY_INT_BYTE_SIZE = 16;
const COINBASE_LENGTH_BYTES = 32;
const RECOVERABLE_ECDSA_SIG_LENGTH_BYTES = 65;
const COMPRESSED_PUBKEY_LENGTH_BYTES = 32;
const UNCOMPRESSED_PUBKEY_LENGTH_BYTES = 64;
const MEMO_MAX_LENGTH_BYTES = 34;
var StacksMessageType;
(function(StacksMessageType2) {
  StacksMessageType2[StacksMessageType2["Address"] = 0] = "Address";
  StacksMessageType2[StacksMessageType2["Principal"] = 1] = "Principal";
  StacksMessageType2[StacksMessageType2["LengthPrefixedString"] = 2] = "LengthPrefixedString";
  StacksMessageType2[StacksMessageType2["MemoString"] = 3] = "MemoString";
  StacksMessageType2[StacksMessageType2["AssetInfo"] = 4] = "AssetInfo";
  StacksMessageType2[StacksMessageType2["PostCondition"] = 5] = "PostCondition";
  StacksMessageType2[StacksMessageType2["PublicKey"] = 6] = "PublicKey";
  StacksMessageType2[StacksMessageType2["LengthPrefixedList"] = 7] = "LengthPrefixedList";
  StacksMessageType2[StacksMessageType2["Payload"] = 8] = "Payload";
  StacksMessageType2[StacksMessageType2["MessageSignature"] = 9] = "MessageSignature";
  StacksMessageType2[StacksMessageType2["StructuredDataSignature"] = 10] = "StructuredDataSignature";
  StacksMessageType2[StacksMessageType2["TransactionAuthField"] = 11] = "TransactionAuthField";
})(StacksMessageType || (StacksMessageType = {}));
var PayloadType;
(function(PayloadType2) {
  PayloadType2[PayloadType2["TokenTransfer"] = 0] = "TokenTransfer";
  PayloadType2[PayloadType2["SmartContract"] = 1] = "SmartContract";
  PayloadType2[PayloadType2["VersionedSmartContract"] = 6] = "VersionedSmartContract";
  PayloadType2[PayloadType2["ContractCall"] = 2] = "ContractCall";
  PayloadType2[PayloadType2["PoisonMicroblock"] = 3] = "PoisonMicroblock";
  PayloadType2[PayloadType2["Coinbase"] = 4] = "Coinbase";
  PayloadType2[PayloadType2["CoinbaseToAltRecipient"] = 5] = "CoinbaseToAltRecipient";
})(PayloadType || (PayloadType = {}));
var ClarityVersion;
(function(ClarityVersion2) {
  ClarityVersion2[ClarityVersion2["Clarity1"] = 1] = "Clarity1";
  ClarityVersion2[ClarityVersion2["Clarity2"] = 2] = "Clarity2";
})(ClarityVersion || (ClarityVersion = {}));
var AnchorMode;
(function(AnchorMode2) {
  AnchorMode2[AnchorMode2["OnChainOnly"] = 1] = "OnChainOnly";
  AnchorMode2[AnchorMode2["OffChainOnly"] = 2] = "OffChainOnly";
  AnchorMode2[AnchorMode2["Any"] = 3] = "Any";
})(AnchorMode || (AnchorMode = {}));
const AnchorModeNames = ["onChainOnly", "offChainOnly", "any"];
const AnchorModeMap = {
  [AnchorModeNames[0]]: AnchorMode.OnChainOnly,
  [AnchorModeNames[1]]: AnchorMode.OffChainOnly,
  [AnchorModeNames[2]]: AnchorMode.Any,
  [AnchorMode.OnChainOnly]: AnchorMode.OnChainOnly,
  [AnchorMode.OffChainOnly]: AnchorMode.OffChainOnly,
  [AnchorMode.Any]: AnchorMode.Any
};
function anchorModeFromNameOrValue(mode) {
  if (mode in AnchorModeMap) {
    return AnchorModeMap[mode];
  }
  throw new Error(`Invalid anchor mode "${mode}", must be one of: ${AnchorModeNames.join(", ")}`);
}
var TransactionVersion;
(function(TransactionVersion2) {
  TransactionVersion2[TransactionVersion2["Mainnet"] = 0] = "Mainnet";
  TransactionVersion2[TransactionVersion2["Testnet"] = 128] = "Testnet";
})(TransactionVersion || (TransactionVersion = {}));
TransactionVersion.Mainnet;
var PostConditionMode;
(function(PostConditionMode2) {
  PostConditionMode2[PostConditionMode2["Allow"] = 1] = "Allow";
  PostConditionMode2[PostConditionMode2["Deny"] = 2] = "Deny";
})(PostConditionMode || (PostConditionMode = {}));
var PostConditionType;
(function(PostConditionType2) {
  PostConditionType2[PostConditionType2["STX"] = 0] = "STX";
  PostConditionType2[PostConditionType2["Fungible"] = 1] = "Fungible";
  PostConditionType2[PostConditionType2["NonFungible"] = 2] = "NonFungible";
})(PostConditionType || (PostConditionType = {}));
var AuthType;
(function(AuthType2) {
  AuthType2[AuthType2["Standard"] = 4] = "Standard";
  AuthType2[AuthType2["Sponsored"] = 5] = "Sponsored";
})(AuthType || (AuthType = {}));
var AddressHashMode;
(function(AddressHashMode2) {
  AddressHashMode2[AddressHashMode2["SerializeP2PKH"] = 0] = "SerializeP2PKH";
  AddressHashMode2[AddressHashMode2["SerializeP2SH"] = 1] = "SerializeP2SH";
  AddressHashMode2[AddressHashMode2["SerializeP2WPKH"] = 2] = "SerializeP2WPKH";
  AddressHashMode2[AddressHashMode2["SerializeP2WSH"] = 3] = "SerializeP2WSH";
})(AddressHashMode || (AddressHashMode = {}));
var AddressVersion;
(function(AddressVersion2) {
  AddressVersion2[AddressVersion2["MainnetSingleSig"] = 22] = "MainnetSingleSig";
  AddressVersion2[AddressVersion2["MainnetMultiSig"] = 20] = "MainnetMultiSig";
  AddressVersion2[AddressVersion2["TestnetSingleSig"] = 26] = "TestnetSingleSig";
  AddressVersion2[AddressVersion2["TestnetMultiSig"] = 21] = "TestnetMultiSig";
})(AddressVersion || (AddressVersion = {}));
var PubKeyEncoding;
(function(PubKeyEncoding2) {
  PubKeyEncoding2[PubKeyEncoding2["Compressed"] = 0] = "Compressed";
  PubKeyEncoding2[PubKeyEncoding2["Uncompressed"] = 1] = "Uncompressed";
})(PubKeyEncoding || (PubKeyEncoding = {}));
var FungibleConditionCode;
(function(FungibleConditionCode2) {
  FungibleConditionCode2[FungibleConditionCode2["Equal"] = 1] = "Equal";
  FungibleConditionCode2[FungibleConditionCode2["Greater"] = 2] = "Greater";
  FungibleConditionCode2[FungibleConditionCode2["GreaterEqual"] = 3] = "GreaterEqual";
  FungibleConditionCode2[FungibleConditionCode2["Less"] = 4] = "Less";
  FungibleConditionCode2[FungibleConditionCode2["LessEqual"] = 5] = "LessEqual";
})(FungibleConditionCode || (FungibleConditionCode = {}));
var NonFungibleConditionCode;
(function(NonFungibleConditionCode2) {
  NonFungibleConditionCode2[NonFungibleConditionCode2["Sends"] = 16] = "Sends";
  NonFungibleConditionCode2[NonFungibleConditionCode2["DoesNotSend"] = 17] = "DoesNotSend";
})(NonFungibleConditionCode || (NonFungibleConditionCode = {}));
var PostConditionPrincipalID;
(function(PostConditionPrincipalID2) {
  PostConditionPrincipalID2[PostConditionPrincipalID2["Origin"] = 1] = "Origin";
  PostConditionPrincipalID2[PostConditionPrincipalID2["Standard"] = 2] = "Standard";
  PostConditionPrincipalID2[PostConditionPrincipalID2["Contract"] = 3] = "Contract";
})(PostConditionPrincipalID || (PostConditionPrincipalID = {}));
var AssetType;
(function(AssetType2) {
  AssetType2[AssetType2["STX"] = 0] = "STX";
  AssetType2[AssetType2["Fungible"] = 1] = "Fungible";
  AssetType2[AssetType2["NonFungible"] = 2] = "NonFungible";
})(AssetType || (AssetType = {}));
var TxRejectedReason;
(function(TxRejectedReason2) {
  TxRejectedReason2["Serialization"] = "Serialization";
  TxRejectedReason2["Deserialization"] = "Deserialization";
  TxRejectedReason2["SignatureValidation"] = "SignatureValidation";
  TxRejectedReason2["FeeTooLow"] = "FeeTooLow";
  TxRejectedReason2["BadNonce"] = "BadNonce";
  TxRejectedReason2["NotEnoughFunds"] = "NotEnoughFunds";
  TxRejectedReason2["NoSuchContract"] = "NoSuchContract";
  TxRejectedReason2["NoSuchPublicFunction"] = "NoSuchPublicFunction";
  TxRejectedReason2["BadFunctionArgument"] = "BadFunctionArgument";
  TxRejectedReason2["ContractAlreadyExists"] = "ContractAlreadyExists";
  TxRejectedReason2["PoisonMicroblocksDoNotConflict"] = "PoisonMicroblocksDoNotConflict";
  TxRejectedReason2["PoisonMicroblockHasUnknownPubKeyHash"] = "PoisonMicroblockHasUnknownPubKeyHash";
  TxRejectedReason2["PoisonMicroblockIsInvalid"] = "PoisonMicroblockIsInvalid";
  TxRejectedReason2["BadAddressVersionByte"] = "BadAddressVersionByte";
  TxRejectedReason2["NoCoinbaseViaMempool"] = "NoCoinbaseViaMempool";
  TxRejectedReason2["ServerFailureNoSuchChainTip"] = "ServerFailureNoSuchChainTip";
  TxRejectedReason2["ServerFailureDatabase"] = "ServerFailureDatabase";
  TxRejectedReason2["ServerFailureOther"] = "ServerFailureOther";
})(TxRejectedReason || (TxRejectedReason = {}));
function number(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error(`Wrong positive integer: ${n}`);
}
function bool(b) {
  if (typeof b !== "boolean")
    throw new Error(`Expected boolean, not ${b}`);
}
function bytes(b, ...lengths) {
  if (!(b instanceof Uint8Array))
    throw new TypeError("Expected Uint8Array");
  if (lengths.length > 0 && !lengths.includes(b.length))
    throw new TypeError(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
function hash(hash2) {
  if (typeof hash2 !== "function" || typeof hash2.create !== "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  number(hash2.outputLen);
  number(hash2.blockLen);
}
function exists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function output(out, instance) {
  bytes(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error(`digestInto() expects output buffer of length at least ${min}`);
  }
}
const assert = {
  number,
  bool,
  bytes,
  hash,
  exists,
  output
};
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
const rotr = (word, shift) => word << 32 - shift | word >>> shift;
const isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!isLE)
  throw new Error("Non little-endian hardware is not supported");
Array.from({ length: 256 }, (v, i) => i.toString(16).padStart(2, "0"));
function utf8ToBytes(str) {
  if (typeof str !== "string") {
    throw new TypeError(`utf8ToBytes expected string, got ${typeof str}`);
  }
  return new TextEncoder().encode(str);
}
function toBytes(data) {
  if (typeof data === "string")
    data = utf8ToBytes(data);
  if (!(data instanceof Uint8Array))
    throw new TypeError(`Expected input type is Uint8Array (got ${typeof data})`);
  return data;
}
class Hash2 {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function wrapConstructor(hashConstructor) {
  const hashC = (message) => hashConstructor().update(toBytes(message)).digest();
  const tmp = hashConstructor();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashConstructor();
  return hashC;
}
function setBigUint64(view, byteOffset, value, isLE2) {
  if (typeof view.setBigUint64 === "function")
    return view.setBigUint64(byteOffset, value, isLE2);
  const _32n2 = BigInt(32);
  const _u32_max = BigInt(4294967295);
  const wh = Number(value >> _32n2 & _u32_max);
  const wl = Number(value & _u32_max);
  const h2 = isLE2 ? 4 : 0;
  const l = isLE2 ? 0 : 4;
  view.setUint32(byteOffset + h2, wh, isLE2);
  view.setUint32(byteOffset + l, wl, isLE2);
}
class SHA22 extends Hash2 {
  constructor(blockLen, outputLen, padOffset, isLE2) {
    super();
    this.blockLen = blockLen;
    this.outputLen = outputLen;
    this.padOffset = padOffset;
    this.isLE = isLE2;
    this.finished = false;
    this.length = 0;
    this.pos = 0;
    this.destroyed = false;
    this.buffer = new Uint8Array(blockLen);
    this.view = createView(this.buffer);
  }
  update(data) {
    assert.exists(this);
    const { view, buffer, blockLen } = this;
    data = toBytes(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        const dataView = createView(data);
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(dataView, pos);
        continue;
      }
      buffer.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(view, 0);
        this.pos = 0;
      }
    }
    this.length += data.length;
    this.roundClean();
    return this;
  }
  digestInto(out) {
    assert.exists(this);
    assert.output(out, this);
    this.finished = true;
    const { buffer, view, blockLen, isLE: isLE2 } = this;
    let { pos } = this;
    buffer[pos++] = 128;
    this.buffer.subarray(pos).fill(0);
    if (this.padOffset > blockLen - pos) {
      this.process(view, 0);
      pos = 0;
    }
    for (let i = pos; i < blockLen; i++)
      buffer[i] = 0;
    setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE2);
    this.process(view, 0);
    const oview = createView(out);
    const len = this.outputLen;
    if (len % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const outLen = len / 4;
    const state = this.get();
    if (outLen > state.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let i = 0; i < outLen; i++)
      oview.setUint32(4 * i, state[i], isLE2);
  }
  digest() {
    const { buffer, outputLen } = this;
    this.digestInto(buffer);
    const res = buffer.slice(0, outputLen);
    this.destroy();
    return res;
  }
  _cloneInto(to) {
    to || (to = new this.constructor());
    to.set(...this.get());
    const { blockLen, buffer, length, finished, destroyed, pos } = this;
    to.length = length;
    to.pos = pos;
    to.finished = finished;
    to.destroyed = destroyed;
    if (length % blockLen)
      to.buffer.set(buffer);
    return to;
  }
}
const Rho = new Uint8Array([7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8]);
const Id = Uint8Array.from({ length: 16 }, (_, i) => i);
const Pi = Id.map((i) => (9 * i + 5) % 16);
let idxL = [Id];
let idxR = [Pi];
for (let i = 0; i < 4; i++)
  for (let j of [idxL, idxR])
    j.push(j[i].map((k) => Rho[k]));
const shifts = [
  [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
  [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
  [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
  [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
  [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
].map((i) => new Uint8Array(i));
const shiftsL = idxL.map((idx, i) => idx.map((j) => shifts[i][j]));
const shiftsR = idxR.map((idx, i) => idx.map((j) => shifts[i][j]));
const Kl = new Uint32Array([0, 1518500249, 1859775393, 2400959708, 2840853838]);
const Kr = new Uint32Array([1352829926, 1548603684, 1836072691, 2053994217, 0]);
const rotl = (word, shift) => word << shift | word >>> 32 - shift;
function f(group, x, y, z) {
  if (group === 0)
    return x ^ y ^ z;
  else if (group === 1)
    return x & y | ~x & z;
  else if (group === 2)
    return (x | ~y) ^ z;
  else if (group === 3)
    return x & z | y & ~z;
  else
    return x ^ (y | ~z);
}
const BUF = new Uint32Array(16);
class RIPEMD1602 extends SHA22 {
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
    return [h0, h1, h2, h3, h4];
  }
  set(h0, h1, h2, h3, h4) {
    this.h0 = h0 | 0;
    this.h1 = h1 | 0;
    this.h2 = h2 | 0;
    this.h3 = h3 | 0;
    this.h4 = h4 | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      BUF[i] = view.getUint32(offset, true);
    let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
    for (let group = 0; group < 5; group++) {
      const rGroup = 4 - group;
      const hbl = Kl[group], hbr = Kr[group];
      const rl = idxL[group], rr = idxR[group];
      const sl = shiftsL[group], sr = shiftsR[group];
      for (let i = 0; i < 16; i++) {
        const tl = rotl(al + f(group, bl, cl, dl) + BUF[rl[i]] + hbl, sl[i]) + el | 0;
        al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl;
      }
      for (let i = 0; i < 16; i++) {
        const tr = rotl(ar + f(rGroup, br, cr, dr) + BUF[rr[i]] + hbr, sr[i]) + er | 0;
        ar = er, er = dr, dr = rotl(cr, 10) | 0, cr = br, br = tr;
      }
    }
    this.set(this.h1 + cl + dr | 0, this.h2 + dl + er | 0, this.h3 + el + ar | 0, this.h4 + al + br | 0, this.h0 + bl + cr | 0);
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
const ripemd160 = wrapConstructor(() => new RIPEMD1602());
const Chi = (a, b, c) => a & b ^ ~a & c;
const Maj = (a, b, c) => a & b ^ a & c ^ b & c;
const SHA256_K = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
const IV = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
const SHA256_W = new Uint32Array(64);
class SHA2562 extends SHA22 {
  constructor() {
    super(64, 32, 8, false);
    this.A = IV[0] | 0;
    this.B = IV[1] | 0;
    this.C = IV[2] | 0;
    this.D = IV[3] | 0;
    this.E = IV[4] | 0;
    this.F = IV[5] | 0;
    this.G = IV[6] | 0;
    this.H = IV[7] | 0;
  }
  get() {
    const { A, B, C, D, E, F, G, H } = this;
    return [A, B, C, D, E, F, G, H];
  }
  // prettier-ignore
  set(A, B, C, D, E, F, G, H) {
    this.A = A | 0;
    this.B = B | 0;
    this.C = C | 0;
    this.D = D | 0;
    this.E = E | 0;
    this.F = F | 0;
    this.G = G | 0;
    this.H = H | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      SHA256_W[i] = view.getUint32(offset, false);
    for (let i = 16; i < 64; i++) {
      const W15 = SHA256_W[i - 15];
      const W2 = SHA256_W[i - 2];
      const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
      const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
      SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
    }
    let { A, B, C, D, E, F, G, H } = this;
    for (let i = 0; i < 64; i++) {
      const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
      const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
      const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
      const T2 = sigma0 + Maj(A, B, C) | 0;
      H = G;
      G = F;
      F = E;
      E = D + T1 | 0;
      D = C;
      C = B;
      B = A;
      A = T1 + T2 | 0;
    }
    A = A + this.A | 0;
    B = B + this.B | 0;
    C = C + this.C | 0;
    D = D + this.D | 0;
    E = E + this.E | 0;
    F = F + this.F | 0;
    G = G + this.G | 0;
    H = H + this.H | 0;
    this.set(A, B, C, D, E, F, G, H);
  }
  roundClean() {
    SHA256_W.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0);
    this.buffer.fill(0);
  }
}
class SHA2242 extends SHA2562 {
  constructor() {
    super();
    this.A = 3238371032 | 0;
    this.B = 914150663 | 0;
    this.C = 812702999 | 0;
    this.D = 4144912697 | 0;
    this.E = 4290775857 | 0;
    this.F = 1750603025 | 0;
    this.G = 1694076839 | 0;
    this.H = 3204075428 | 0;
    this.outputLen = 28;
  }
}
const sha256 = wrapConstructor(() => new SHA2562());
wrapConstructor(() => new SHA2242());
const U32_MASK64 = BigInt(2 ** 32 - 1);
const _32n = BigInt(32);
function fromBig(n, le = false) {
  if (le)
    return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
  return { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
  let Ah = new Uint32Array(lst.length);
  let Al = new Uint32Array(lst.length);
  for (let i = 0; i < lst.length; i++) {
    const { h: h2, l } = fromBig(lst[i], le);
    [Ah[i], Al[i]] = [h2, l];
  }
  return [Ah, Al];
}
const toBig = (h2, l) => BigInt(h2 >>> 0) << _32n | BigInt(l >>> 0);
const shrSH = (h2, l, s) => h2 >>> s;
const shrSL = (h2, l, s) => h2 << 32 - s | l >>> s;
const rotrSH = (h2, l, s) => h2 >>> s | l << 32 - s;
const rotrSL = (h2, l, s) => h2 << 32 - s | l >>> s;
const rotrBH = (h2, l, s) => h2 << 64 - s | l >>> s - 32;
const rotrBL = (h2, l, s) => h2 >>> s - 32 | l << 64 - s;
const rotr32H = (h2, l) => l;
const rotr32L = (h2, l) => h2;
const rotlSH = (h2, l, s) => h2 << s | l >>> 32 - s;
const rotlSL = (h2, l, s) => l << s | h2 >>> 32 - s;
const rotlBH = (h2, l, s) => l << s - 32 | h2 >>> 64 - s;
const rotlBL = (h2, l, s) => h2 << s - 32 | l >>> 64 - s;
function add(Ah, Al, Bh, Bl) {
  const l = (Al >>> 0) + (Bl >>> 0);
  return { h: Ah + Bh + (l / 2 ** 32 | 0) | 0, l: l | 0 };
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
class SHA5122 extends SHA22 {
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
  // prettier-ignore
  get() {
    const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
  }
  // prettier-ignore
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
    for (let i = 0; i < 16; i++, offset += 4) {
      SHA512_W_H[i] = view.getUint32(offset);
      SHA512_W_L[i] = view.getUint32(offset += 4);
    }
    for (let i = 16; i < 80; i++) {
      const W15h = SHA512_W_H[i - 15] | 0;
      const W15l = SHA512_W_L[i - 15] | 0;
      const s0h = u64.rotrSH(W15h, W15l, 1) ^ u64.rotrSH(W15h, W15l, 8) ^ u64.shrSH(W15h, W15l, 7);
      const s0l = u64.rotrSL(W15h, W15l, 1) ^ u64.rotrSL(W15h, W15l, 8) ^ u64.shrSL(W15h, W15l, 7);
      const W2h = SHA512_W_H[i - 2] | 0;
      const W2l = SHA512_W_L[i - 2] | 0;
      const s1h = u64.rotrSH(W2h, W2l, 19) ^ u64.rotrBH(W2h, W2l, 61) ^ u64.shrSH(W2h, W2l, 6);
      const s1l = u64.rotrSL(W2h, W2l, 19) ^ u64.rotrBL(W2h, W2l, 61) ^ u64.shrSL(W2h, W2l, 6);
      const SUMl = u64.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
      const SUMh = u64.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
      SHA512_W_H[i] = SUMh | 0;
      SHA512_W_L[i] = SUMl | 0;
    }
    let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    for (let i = 0; i < 80; i++) {
      const sigma1h = u64.rotrSH(Eh, El, 14) ^ u64.rotrSH(Eh, El, 18) ^ u64.rotrBH(Eh, El, 41);
      const sigma1l = u64.rotrSL(Eh, El, 14) ^ u64.rotrSL(Eh, El, 18) ^ u64.rotrBL(Eh, El, 41);
      const CHIh = Eh & Fh ^ ~Eh & Gh;
      const CHIl = El & Fl ^ ~El & Gl;
      const T1ll = u64.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
      const T1h = u64.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
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
class SHA512_2242 extends SHA5122 {
  constructor() {
    super();
    this.Ah = 2352822216 | 0;
    this.Al = 424955298 | 0;
    this.Bh = 1944164710 | 0;
    this.Bl = 2312950998 | 0;
    this.Ch = 502970286 | 0;
    this.Cl = 855612546 | 0;
    this.Dh = 1738396948 | 0;
    this.Dl = 1479516111 | 0;
    this.Eh = 258812777 | 0;
    this.El = 2077511080 | 0;
    this.Fh = 2011393907 | 0;
    this.Fl = 79989058 | 0;
    this.Gh = 1067287976 | 0;
    this.Gl = 1780299464 | 0;
    this.Hh = 286451373 | 0;
    this.Hl = 2446758561 | 0;
    this.outputLen = 28;
  }
}
class SHA512_2562 extends SHA5122 {
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
class SHA3842 extends SHA5122 {
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
wrapConstructor(() => new SHA5122());
wrapConstructor(() => new SHA512_2242());
const sha512_256 = wrapConstructor(() => new SHA512_2562());
wrapConstructor(() => new SHA3842());
var lodash_clonedeepExports = {};
var lodash_clonedeep = {
  get exports() {
    return lodash_clonedeepExports;
  },
  set exports(v) {
    lodash_clonedeepExports = v;
  }
};
(function(module, exports) {
  var LARGE_ARRAY_SIZE = 200;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", promiseTag = "[object Promise]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reFlags = /\w*$/;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  function addMapEntry(map, pair) {
    map.set(pair[0], pair[1]);
    return map;
  }
  function addSetEntry(set, value) {
    set.add(value);
    return set;
  }
  function arrayEach(array, iteratee) {
    var index = -1, length = array ? array.length : 0;
    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }
  function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1, length = array ? array.length : 0;
    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }
  function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  function getValue2(object, key) {
    return object == null ? void 0 : object[key];
  }
  function isHostObject(value) {
    var result = false;
    if (value != null && typeof value.toString != "function") {
      try {
        result = !!(value + "");
      } catch (e) {
      }
    }
    return result;
  }
  function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
  var coreJsData = root["__core-js_shared__"];
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  var funcToString = funcProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objectToString = objectProto.toString;
  var reIsNative = RegExp(
    "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  var Buffer = moduleExports ? root.Buffer : void 0, Symbol2 = root.Symbol, Uint8Array2 = root.Uint8Array, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice;
  var nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0, nativeKeys = overArg(Object.keys, Object);
  var DataView2 = getNative(root, "DataView"), Map2 = getNative(root, "Map"), Promise2 = getNative(root, "Promise"), Set2 = getNative(root, "Set"), WeakMap2 = getNative(root, "WeakMap"), nativeCreate = getNative(Object, "create");
  var dataViewCtorString = toSource(DataView2), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
  var symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function Hash3(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
  }
  function hashDelete(key) {
    return this.has(key) && delete this.__data__[key];
  }
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : void 0;
  }
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
  }
  function hashSet(key, value) {
    var data = this.__data__;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  Hash3.prototype.clear = hashClear;
  Hash3.prototype["delete"] = hashDelete;
  Hash3.prototype.get = hashGet;
  Hash3.prototype.has = hashHas;
  Hash3.prototype.set = hashSet;
  function ListCache(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function listCacheClear() {
    this.__data__ = [];
  }
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    return true;
  }
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  function MapCache(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  function mapCacheClear() {
    this.__data__ = {
      "hash": new Hash3(),
      "map": new (Map2 || ListCache)(),
      "string": new Hash3()
    };
  }
  function mapCacheDelete(key) {
    return getMapData(this, key)["delete"](key);
  }
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  function mapCacheSet(key, value) {
    getMapData(this, key).set(key, value);
    return this;
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  function Stack(entries) {
    this.__data__ = new ListCache(entries);
  }
  function stackClear() {
    this.__data__ = new ListCache();
  }
  function stackDelete(key) {
    return this.__data__["delete"](key);
  }
  function stackGet(key) {
    return this.__data__.get(key);
  }
  function stackHas(key) {
    return this.__data__.has(key);
  }
  function stackSet(key, value) {
    var cache = this.__data__;
    if (cache instanceof ListCache) {
      var pairs = cache.__data__;
      if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        return this;
      }
      cache = this.__data__ = new MapCache(pairs);
    }
    cache.set(key, value);
    return this;
  }
  Stack.prototype.clear = stackClear;
  Stack.prototype["delete"] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  function arrayLikeKeys(value, inherited) {
    var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
    var length = result.length, skipIndexes = !!length;
    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
      object[key] = value;
    }
  }
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
  }
  function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
    var result;
    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== void 0) {
      return result;
    }
    if (!isObject(value)) {
      return value;
    }
    var isArr = isArray(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag || tag == argsTag || isFunc && !object) {
        if (isHostObject(value)) {
          return object ? value : {};
        }
        result = initCloneObject(isFunc ? {} : value);
        if (!isDeep) {
          return copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, baseClone, isDeep);
      }
    }
    stack || (stack = new Stack());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);
    if (!isArr) {
      var props = isFull ? getAllKeys(value) : keys(value);
    }
    arrayEach(props || value, function(subValue, key2) {
      if (props) {
        key2 = subValue;
        subValue = value[key2];
      }
      assignValue(result, key2, baseClone(subValue, isDeep, isFull, customizer, key2, value, stack));
    });
    return result;
  }
  function baseCreate(proto) {
    return isObject(proto) ? objectCreate(proto) : {};
  }
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  function baseGetTag(value) {
    return objectToString.call(value);
  }
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var result = new buffer.constructor(buffer.length);
    buffer.copy(result);
    return result;
  }
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
    return result;
  }
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }
  function cloneMap(map, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
    return arrayReduce(array, addMapEntry, new map.constructor());
  }
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }
  function cloneSet(set, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
    return arrayReduce(array, addSetEntry, new set.constructor());
  }
  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }
  function copyObject(source, props, object, customizer) {
    object || (object = {});
    var index = -1, length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
      assignValue(object, key, newValue === void 0 ? source[key] : newValue);
    }
    return object;
  }
  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
  }
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  function getNative(object, key) {
    var value = getValue2(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
  var getTag = baseGetTag;
  if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
    getTag = function(value) {
      var result = objectToString.call(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : void 0;
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      }
      return result;
    };
  }
  function initCloneArray(array) {
    var length = array.length, result = array.constructor(length);
    if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }
  function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
  }
  function initCloneByTag(object, tag, cloneFunc, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag:
        return cloneArrayBuffer(object);
      case boolTag:
      case dateTag:
        return new Ctor(+object);
      case dataViewTag:
        return cloneDataView(object, isDeep);
      case float32Tag:
      case float64Tag:
      case int8Tag:
      case int16Tag:
      case int32Tag:
      case uint8Tag:
      case uint8ClampedTag:
      case uint16Tag:
      case uint32Tag:
        return cloneTypedArray(object, isDeep);
      case mapTag:
        return cloneMap(object, isDeep, cloneFunc);
      case numberTag:
      case stringTag:
        return new Ctor(object);
      case regexpTag:
        return cloneRegExp(object);
      case setTag:
        return cloneSet(object, isDeep, cloneFunc);
      case symbolTag:
        return cloneSymbol(object);
    }
  }
  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
  }
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  function cloneDeep2(value) {
    return baseClone(value, true, true);
  }
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  function isArguments(value) {
    return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
  }
  var isArray = Array.isArray;
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }
  var isBuffer = nativeIsBuffer || stubFalse;
  function isFunction(value) {
    var tag = isObject(value) ? objectToString.call(value) : "";
    return tag == funcTag || tag == genTag;
  }
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == "object" || type == "function");
  }
  function isObjectLike(value) {
    return !!value && typeof value == "object";
  }
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }
  function stubArray() {
    return [];
  }
  function stubFalse() {
    return false;
  }
  module.exports = cloneDeep2;
})(lodash_clonedeep, lodash_clonedeepExports);
const lodashCloneDeep = lodash_clonedeepExports;
function createLPString(content, lengthPrefixBytes, maxLengthBytes) {
  const prefixLength = lengthPrefixBytes || 1;
  const maxLength = maxLengthBytes || MAX_STRING_LENGTH_BYTES;
  if (exceedsMaxLengthBytes(content, maxLength)) {
    throw new Error(`String length exceeds maximum bytes ${maxLength}`);
  }
  return {
    type: StacksMessageType.LengthPrefixedString,
    content,
    lengthPrefixBytes: prefixLength,
    maxLengthBytes: maxLength
  };
}
function createAddress(c32AddressString) {
  const addressData = lib$1.c32addressDecode(c32AddressString);
  return {
    type: StacksMessageType.Address,
    version: addressData[0],
    hash160: addressData[1]
  };
}
function createMessageSignature(signature) {
  const length = hexToBytes$1(signature).byteLength;
  if (length != RECOVERABLE_ECDSA_SIG_LENGTH_BYTES) {
    throw Error("Invalid signature");
  }
  return {
    type: StacksMessageType.MessageSignature,
    data: signature
  };
}
function addressHashModeToVersion(hashMode, txVersion) {
  switch (hashMode) {
    case AddressHashMode.SerializeP2PKH:
      switch (txVersion) {
        case TransactionVersion.Mainnet:
          return AddressVersion.MainnetSingleSig;
        case TransactionVersion.Testnet:
          return AddressVersion.TestnetSingleSig;
        default:
          throw new Error(`Unexpected txVersion ${JSON.stringify(txVersion)} for hashMode ${hashMode}`);
      }
    case AddressHashMode.SerializeP2SH:
    case AddressHashMode.SerializeP2WPKH:
    case AddressHashMode.SerializeP2WSH:
      switch (txVersion) {
        case TransactionVersion.Mainnet:
          return AddressVersion.MainnetMultiSig;
        case TransactionVersion.Testnet:
          return AddressVersion.TestnetMultiSig;
        default:
          throw new Error(`Unexpected txVersion ${JSON.stringify(txVersion)} for hashMode ${hashMode}`);
      }
    default:
      throw new Error(`Unexpected hashMode ${JSON.stringify(hashMode)}`);
  }
}
function addressFromVersionHash(version2, hash2) {
  return { type: StacksMessageType.Address, version: version2, hash160: hash2 };
}
function addressToString(address2) {
  return lib$1.c32address(address2.version, address2.hash160);
}
var ClarityType;
(function(ClarityType2) {
  ClarityType2[ClarityType2["Int"] = 0] = "Int";
  ClarityType2[ClarityType2["UInt"] = 1] = "UInt";
  ClarityType2[ClarityType2["Buffer"] = 2] = "Buffer";
  ClarityType2[ClarityType2["BoolTrue"] = 3] = "BoolTrue";
  ClarityType2[ClarityType2["BoolFalse"] = 4] = "BoolFalse";
  ClarityType2[ClarityType2["PrincipalStandard"] = 5] = "PrincipalStandard";
  ClarityType2[ClarityType2["PrincipalContract"] = 6] = "PrincipalContract";
  ClarityType2[ClarityType2["ResponseOk"] = 7] = "ResponseOk";
  ClarityType2[ClarityType2["ResponseErr"] = 8] = "ResponseErr";
  ClarityType2[ClarityType2["OptionalNone"] = 9] = "OptionalNone";
  ClarityType2[ClarityType2["OptionalSome"] = 10] = "OptionalSome";
  ClarityType2[ClarityType2["List"] = 11] = "List";
  ClarityType2[ClarityType2["Tuple"] = 12] = "Tuple";
  ClarityType2[ClarityType2["StringASCII"] = 13] = "StringASCII";
  ClarityType2[ClarityType2["StringUTF8"] = 14] = "StringUTF8";
})(ClarityType || (ClarityType = {}));
function principalCV(principal) {
  if (principal.includes(".")) {
    const [address2, contractName] = principal.split(".");
    return contractPrincipalCV(address2, contractName);
  } else {
    return standardPrincipalCV(principal);
  }
}
function standardPrincipalCV(addressString) {
  const addr = createAddress(addressString);
  return { type: ClarityType.PrincipalStandard, address: addr };
}
function standardPrincipalCVFromAddress(address2) {
  return { type: ClarityType.PrincipalStandard, address: address2 };
}
function contractPrincipalCV(addressString, contractName) {
  const addr = createAddress(addressString);
  const lengthPrefixedContractName = createLPString(contractName);
  return contractPrincipalCVFromAddress(addr, lengthPrefixedContractName);
}
function contractPrincipalCVFromAddress(address2, contractName) {
  if (utf8ToBytes$2(contractName.content).byteLength >= 128) {
    throw new Error("Contract name must be less than 128 bytes");
  }
  return { type: ClarityType.PrincipalContract, address: address2, contractName };
}
const trueCV = () => ({ type: ClarityType.BoolTrue });
const falseCV = () => ({ type: ClarityType.BoolFalse });
const MAX_U128 = BigInt("0xffffffffffffffffffffffffffffffff");
const MIN_U128 = BigInt(0);
const MAX_I128 = BigInt("0x7fffffffffffffffffffffffffffffff");
const MIN_I128 = BigInt("-170141183460469231731687303715884105728");
const intCV = (value) => {
  const bigInt = intToBigInt(value, true);
  if (bigInt > MAX_I128) {
    throw new RangeError(`Cannot construct clarity integer from value greater than ${MAX_I128}`);
  } else if (bigInt < MIN_I128) {
    throw new RangeError(`Cannot construct clarity integer form value less than ${MIN_I128}`);
  }
  return { type: ClarityType.Int, value: bigInt };
};
const uintCV = (value) => {
  const bigInt = intToBigInt(value, false);
  if (bigInt < MIN_U128) {
    throw new RangeError("Cannot construct unsigned clarity integer from negative value");
  } else if (bigInt > MAX_U128) {
    throw new RangeError(`Cannot construct unsigned clarity integer greater than ${MAX_U128}`);
  }
  return { type: ClarityType.UInt, value: bigInt };
};
const bufferCV = (buffer) => {
  if (buffer.length > 1e6) {
    throw new Error("Cannot construct clarity buffer that is greater than 1MB");
  }
  return { type: ClarityType.Buffer, buffer };
};
const bufferCVFromString = (str) => bufferCV(utf8ToBytes$2(str));
function noneCV() {
  return { type: ClarityType.OptionalNone };
}
function someCV(value) {
  return { type: ClarityType.OptionalSome, value };
}
function responseErrorCV(value) {
  return { type: ClarityType.ResponseErr, value };
}
function responseOkCV(value) {
  return { type: ClarityType.ResponseOk, value };
}
function listCV(values) {
  return { type: ClarityType.List, list: values };
}
function tupleCV(data) {
  for (const key in data) {
    if (!isClarityName(key)) {
      throw new Error(`"${key}" is not a valid Clarity name`);
    }
  }
  return { type: ClarityType.Tuple, data };
}
const stringAsciiCV = (data) => {
  return { type: ClarityType.StringASCII, data };
};
const stringUtf8CV = (data) => {
  return { type: ClarityType.StringUTF8, data };
};
class HMAC2 extends Hash2 {
  constructor(hash2, _key) {
    super();
    this.finished = false;
    this.destroyed = false;
    assert.hash(hash2);
    const key = toBytes(_key);
    this.iHash = hash2.create();
    if (typeof this.iHash.update !== "function")
      throw new TypeError("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen;
    this.outputLen = this.iHash.outputLen;
    const blockLen = this.blockLen;
    const pad2 = new Uint8Array(blockLen);
    pad2.set(key.length > blockLen ? hash2.create().update(key).digest() : key);
    for (let i = 0; i < pad2.length; i++)
      pad2[i] ^= 54;
    this.iHash.update(pad2);
    this.oHash = hash2.create();
    for (let i = 0; i < pad2.length; i++)
      pad2[i] ^= 54 ^ 92;
    this.oHash.update(pad2);
    pad2.fill(0);
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
const hmac = (hash2, key, message) => new HMAC2(hash2, key).update(message).digest();
hmac.create = (hash2, key) => new HMAC2(hash2, key);
utils.hmacSha256Sync = (key, ...msgs) => {
  const h2 = hmac.create(sha256, key);
  msgs.forEach((msg) => h2.update(msg));
  return h2.digest();
};
function getAddressFromPublicKey(publicKey, transactionVersion = TransactionVersion.Mainnet) {
  publicKey = typeof publicKey === "string" ? publicKey : bytesToHex$1(publicKey);
  const addrVer = addressHashModeToVersion(AddressHashMode.SerializeP2PKH, transactionVersion);
  const addr = addressFromVersionHash(addrVer, hashP2PKH(hexToBytes$1(publicKey)));
  const addrString = addressToString(addr);
  return addrString;
}
function createStacksPublicKey(key) {
  return {
    type: StacksMessageType.PublicKey,
    data: hexToBytes$1(key)
  };
}
function publicKeyFromSignatureVrs(messageHash, messageSignature, pubKeyEncoding = PubKeyEncoding.Compressed) {
  const parsedSignature = parseRecoverableSignatureVrs(messageSignature.data);
  const signature = new Signature(hexToBigInt(parsedSignature.r), hexToBigInt(parsedSignature.s));
  const point = Point.fromSignature(messageHash, signature, parsedSignature.recoveryId);
  const compressed = pubKeyEncoding === PubKeyEncoding.Compressed;
  return point.toHex(compressed);
}
function publicKeyFromBytes(data) {
  return { type: StacksMessageType.PublicKey, data };
}
function isCompressed(key) {
  return !bytesToHex$1(key.data).startsWith("04");
}
function serializePublicKey(key) {
  return key.data.slice();
}
function pubKeyfromPrivKey(privateKey) {
  const privKey = createStacksPrivateKey(privateKey);
  const publicKey = getPublicKey$1(privKey.data.slice(0, 32), privKey.compressed);
  return createStacksPublicKey(bytesToHex$1(publicKey));
}
function compressPublicKey(publicKey) {
  const hex = typeof publicKey === "string" ? publicKey : bytesToHex$1(publicKey);
  const compressed = Point.fromHex(hex).toHex(true);
  return createStacksPublicKey(compressed);
}
function deserializePublicKey(bytesReader) {
  const fieldId = bytesReader.readUInt8();
  const keyLength = fieldId !== 4 ? COMPRESSED_PUBKEY_LENGTH_BYTES : UNCOMPRESSED_PUBKEY_LENGTH_BYTES;
  return publicKeyFromBytes(concatArray([fieldId, bytesReader.readBytes(keyLength)]));
}
function createStacksPrivateKey(key) {
  const data = privateKeyToBytes(key);
  const compressed = data.length == PRIVATE_KEY_COMPRESSED_LENGTH;
  return { data, compressed };
}
function signWithKey(privateKey, messageHash) {
  const [rawSignature, recoveryId] = signSync(messageHash, privateKey.data.slice(0, 32), {
    canonical: true,
    recovered: true
  });
  if (recoveryId == null) {
    throw new Error("No signature recoveryId received");
  }
  const recoveryIdHex = intToHex(recoveryId, 1);
  const recoverableSignatureString = recoveryIdHex + Signature.fromHex(rawSignature).toCompactHex();
  return createMessageSignature(recoverableSignatureString);
}
function getPublicKey(privateKey) {
  return pubKeyfromPrivKey(privateKey.data);
}
function createTokenTransferPayload(recipient, amount, memo) {
  if (typeof recipient === "string") {
    recipient = principalCV(recipient);
  }
  if (typeof memo === "string") {
    memo = createMemoString(memo);
  }
  return {
    type: StacksMessageType.Payload,
    payloadType: PayloadType.TokenTransfer,
    recipient,
    amount: intToBigInt(amount, false),
    memo: memo ?? createMemoString("")
  };
}
function createContractCallPayload(contractAddress, contractName, functionName, functionArgs) {
  if (typeof contractAddress === "string") {
    contractAddress = createAddress(contractAddress);
  }
  if (typeof contractName === "string") {
    contractName = createLPString(contractName);
  }
  if (typeof functionName === "string") {
    functionName = createLPString(functionName);
  }
  return {
    type: StacksMessageType.Payload,
    payloadType: PayloadType.ContractCall,
    contractAddress,
    contractName,
    functionName,
    functionArgs
  };
}
function createSmartContractPayload(contractName, codeBody, clarityVersion) {
  if (typeof contractName === "string") {
    contractName = createLPString(contractName);
  }
  if (typeof codeBody === "string") {
    codeBody = codeBodyString(codeBody);
  }
  if (typeof clarityVersion === "number") {
    return {
      type: StacksMessageType.Payload,
      payloadType: PayloadType.VersionedSmartContract,
      clarityVersion,
      contractName,
      codeBody
    };
  }
  return {
    type: StacksMessageType.Payload,
    payloadType: PayloadType.SmartContract,
    contractName,
    codeBody
  };
}
function createPoisonPayload() {
  return { type: StacksMessageType.Payload, payloadType: PayloadType.PoisonMicroblock };
}
function createCoinbasePayload(coinbaseBytes, altRecipient) {
  if (coinbaseBytes.byteLength != COINBASE_LENGTH_BYTES) {
    throw Error(`Coinbase buffer size must be ${COINBASE_LENGTH_BYTES} bytes`);
  }
  if (altRecipient != void 0) {
    return {
      type: StacksMessageType.Payload,
      payloadType: PayloadType.CoinbaseToAltRecipient,
      coinbaseBytes,
      recipient: altRecipient
    };
  }
  return {
    type: StacksMessageType.Payload,
    payloadType: PayloadType.Coinbase,
    coinbaseBytes
  };
}
function serializePayload(payload) {
  const bytesArray = [];
  bytesArray.push(payload.payloadType);
  switch (payload.payloadType) {
    case PayloadType.TokenTransfer:
      bytesArray.push(serializeCV(payload.recipient));
      bytesArray.push(intToBytes(payload.amount, false, 8));
      bytesArray.push(serializeStacksMessage(payload.memo));
      break;
    case PayloadType.ContractCall:
      bytesArray.push(serializeStacksMessage(payload.contractAddress));
      bytesArray.push(serializeStacksMessage(payload.contractName));
      bytesArray.push(serializeStacksMessage(payload.functionName));
      const numArgs = new Uint8Array(4);
      writeUInt32BE(numArgs, payload.functionArgs.length, 0);
      bytesArray.push(numArgs);
      payload.functionArgs.forEach((arg) => {
        bytesArray.push(serializeCV(arg));
      });
      break;
    case PayloadType.SmartContract:
      bytesArray.push(serializeStacksMessage(payload.contractName));
      bytesArray.push(serializeStacksMessage(payload.codeBody));
      break;
    case PayloadType.VersionedSmartContract:
      bytesArray.push(payload.clarityVersion);
      bytesArray.push(serializeStacksMessage(payload.contractName));
      bytesArray.push(serializeStacksMessage(payload.codeBody));
      break;
    case PayloadType.PoisonMicroblock:
      break;
    case PayloadType.Coinbase:
      bytesArray.push(payload.coinbaseBytes);
      break;
    case PayloadType.CoinbaseToAltRecipient:
      bytesArray.push(payload.coinbaseBytes);
      bytesArray.push(serializeCV(payload.recipient));
      break;
  }
  return concatArray(bytesArray);
}
function deserializePayload(bytesReader) {
  const payloadType = bytesReader.readUInt8Enum(PayloadType, (n) => {
    throw new Error(`Cannot recognize PayloadType: ${n}`);
  });
  switch (payloadType) {
    case PayloadType.TokenTransfer:
      const recipient = deserializeCV(bytesReader);
      const amount = intToBigInt(bytesReader.readBytes(8), false);
      const memo = deserializeMemoString(bytesReader);
      return createTokenTransferPayload(recipient, amount, memo);
    case PayloadType.ContractCall:
      const contractAddress = deserializeAddress(bytesReader);
      const contractCallName = deserializeLPString(bytesReader);
      const functionName = deserializeLPString(bytesReader);
      const functionArgs = [];
      const numberOfArgs = bytesReader.readUInt32BE();
      for (let i = 0; i < numberOfArgs; i++) {
        const clarityValue = deserializeCV(bytesReader);
        functionArgs.push(clarityValue);
      }
      return createContractCallPayload(contractAddress, contractCallName, functionName, functionArgs);
    case PayloadType.SmartContract:
      const smartContractName = deserializeLPString(bytesReader);
      const codeBody = deserializeLPString(bytesReader, 4, 1e5);
      return createSmartContractPayload(smartContractName, codeBody);
    case PayloadType.VersionedSmartContract: {
      const clarityVersion = bytesReader.readUInt8Enum(ClarityVersion, (n) => {
        throw new Error(`Cannot recognize ClarityVersion: ${n}`);
      });
      const smartContractName2 = deserializeLPString(bytesReader);
      const codeBody2 = deserializeLPString(bytesReader, 4, 1e5);
      return createSmartContractPayload(smartContractName2, codeBody2, clarityVersion);
    }
    case PayloadType.PoisonMicroblock:
      return createPoisonPayload();
    case PayloadType.Coinbase:
      const coinbaseBytes = bytesReader.readBytes(COINBASE_LENGTH_BYTES);
      return createCoinbasePayload(coinbaseBytes);
    case PayloadType.CoinbaseToAltRecipient:
      const coinbaseToAltRecipientBuffer = bytesReader.readBytes(COINBASE_LENGTH_BYTES);
      const altRecipient = deserializeCV(bytesReader);
      return createCoinbasePayload(coinbaseToAltRecipientBuffer, altRecipient);
  }
}
class TransactionError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = this.constructor.name;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
class SerializationError extends TransactionError {
  constructor(message) {
    super(message);
  }
}
class DeserializationError extends TransactionError {
  constructor(message) {
    super(message);
  }
}
class SigningError extends TransactionError {
  constructor(message) {
    super(message);
  }
}
class VerificationError extends TransactionError {
  constructor(message) {
    super(message);
  }
}
var AuthFieldType;
(function(AuthFieldType2) {
  AuthFieldType2[AuthFieldType2["PublicKeyCompressed"] = 0] = "PublicKeyCompressed";
  AuthFieldType2[AuthFieldType2["PublicKeyUncompressed"] = 1] = "PublicKeyUncompressed";
  AuthFieldType2[AuthFieldType2["SignatureCompressed"] = 2] = "SignatureCompressed";
  AuthFieldType2[AuthFieldType2["SignatureUncompressed"] = 3] = "SignatureUncompressed";
})(AuthFieldType || (AuthFieldType = {}));
function deserializeMessageSignature(bytesReader) {
  return createMessageSignature(bytesToHex$1(bytesReader.readBytes(RECOVERABLE_ECDSA_SIG_LENGTH_BYTES)));
}
function createTransactionAuthField(pubKeyEncoding, contents) {
  return {
    pubKeyEncoding,
    type: StacksMessageType.TransactionAuthField,
    contents
  };
}
function deserializeTransactionAuthField(bytesReader) {
  const authFieldType = bytesReader.readUInt8Enum(AuthFieldType, (n) => {
    throw new DeserializationError(`Could not read ${n} as AuthFieldType`);
  });
  switch (authFieldType) {
    case AuthFieldType.PublicKeyCompressed:
      return createTransactionAuthField(PubKeyEncoding.Compressed, deserializePublicKey(bytesReader));
    case AuthFieldType.PublicKeyUncompressed:
      return createTransactionAuthField(PubKeyEncoding.Uncompressed, deserializePublicKey(bytesReader));
    case AuthFieldType.SignatureCompressed:
      return createTransactionAuthField(PubKeyEncoding.Compressed, deserializeMessageSignature(bytesReader));
    case AuthFieldType.SignatureUncompressed:
      return createTransactionAuthField(PubKeyEncoding.Uncompressed, deserializeMessageSignature(bytesReader));
    default:
      throw new Error(`Unknown auth field type: ${JSON.stringify(authFieldType)}`);
  }
}
function serializeMessageSignature(messageSignature) {
  return hexToBytes$1(messageSignature.data);
}
function serializeTransactionAuthField(field) {
  const bytesArray = [];
  switch (field.contents.type) {
    case StacksMessageType.PublicKey:
      if (field.pubKeyEncoding == PubKeyEncoding.Compressed) {
        bytesArray.push(AuthFieldType.PublicKeyCompressed);
        bytesArray.push(serializePublicKey(field.contents));
      } else {
        bytesArray.push(AuthFieldType.PublicKeyUncompressed);
        bytesArray.push(serializePublicKey(compressPublicKey(field.contents.data)));
      }
      break;
    case StacksMessageType.MessageSignature:
      if (field.pubKeyEncoding == PubKeyEncoding.Compressed) {
        bytesArray.push(AuthFieldType.SignatureCompressed);
      } else {
        bytesArray.push(AuthFieldType.SignatureUncompressed);
      }
      bytesArray.push(serializeMessageSignature(field.contents));
      break;
  }
  return concatArray(bytesArray);
}
function serializeStacksMessage(message) {
  switch (message.type) {
    case StacksMessageType.Address:
      return serializeAddress(message);
    case StacksMessageType.Principal:
      return serializePrincipal(message);
    case StacksMessageType.LengthPrefixedString:
      return serializeLPString(message);
    case StacksMessageType.MemoString:
      return serializeMemoString(message);
    case StacksMessageType.AssetInfo:
      return serializeAssetInfo(message);
    case StacksMessageType.PostCondition:
      return serializePostCondition(message);
    case StacksMessageType.PublicKey:
      return serializePublicKey(message);
    case StacksMessageType.LengthPrefixedList:
      return serializeLPList(message);
    case StacksMessageType.Payload:
      return serializePayload(message);
    case StacksMessageType.TransactionAuthField:
      return serializeTransactionAuthField(message);
    case StacksMessageType.MessageSignature:
      return serializeMessageSignature(message);
  }
}
function createEmptyAddress() {
  return {
    type: StacksMessageType.Address,
    version: AddressVersion.MainnetSingleSig,
    hash160: "0".repeat(40)
  };
}
function addressFromPublicKeys(version2, hashMode, numSigs, publicKeys) {
  if (publicKeys.length === 0) {
    throw Error("Invalid number of public keys");
  }
  if (hashMode === AddressHashMode.SerializeP2PKH || hashMode === AddressHashMode.SerializeP2WPKH) {
    if (publicKeys.length !== 1 || numSigs !== 1) {
      throw Error("Invalid number of public keys or signatures");
    }
  }
  if (hashMode === AddressHashMode.SerializeP2WPKH || hashMode === AddressHashMode.SerializeP2WSH) {
    for (let i = 0; i < publicKeys.length; i++) {
      if (!isCompressed(publicKeys[i])) {
        throw Error("Public keys must be compressed for segwit");
      }
    }
  }
  switch (hashMode) {
    case AddressHashMode.SerializeP2PKH:
      return addressFromVersionHash(version2, hashP2PKH(publicKeys[0].data));
    case AddressHashMode.SerializeP2WPKH:
      return addressFromVersionHash(version2, hashP2WPKH(publicKeys[0].data));
    case AddressHashMode.SerializeP2SH:
      return addressFromVersionHash(version2, hashP2SH(numSigs, publicKeys.map(serializePublicKey)));
    case AddressHashMode.SerializeP2WSH:
      return addressFromVersionHash(version2, hashP2WSH(numSigs, publicKeys.map(serializePublicKey)));
  }
}
function serializeAddress(address2) {
  const bytesArray = [];
  bytesArray.push(hexToBytes$1(intToHex(address2.version, 1)));
  bytesArray.push(hexToBytes$1(address2.hash160));
  return concatArray(bytesArray);
}
function deserializeAddress(bytesReader) {
  const version2 = hexToInt(bytesToHex$1(bytesReader.readBytes(1)));
  const data = bytesToHex$1(bytesReader.readBytes(20));
  return { type: StacksMessageType.Address, version: version2, hash160: data };
}
function serializePrincipal(principal) {
  const bytesArray = [];
  bytesArray.push(principal.prefix);
  bytesArray.push(serializeAddress(principal.address));
  if (principal.prefix === PostConditionPrincipalID.Contract) {
    bytesArray.push(serializeLPString(principal.contractName));
  }
  return concatArray(bytesArray);
}
function deserializePrincipal(bytesReader) {
  const prefix = bytesReader.readUInt8Enum(PostConditionPrincipalID, (n) => {
    throw new DeserializationError(`Unexpected Principal payload type: ${n}`);
  });
  const address2 = deserializeAddress(bytesReader);
  if (prefix === PostConditionPrincipalID.Standard) {
    return { type: StacksMessageType.Principal, prefix, address: address2 };
  }
  const contractName = deserializeLPString(bytesReader);
  return {
    type: StacksMessageType.Principal,
    prefix,
    address: address2,
    contractName
  };
}
function serializeLPString(lps) {
  const bytesArray = [];
  const contentBytes = utf8ToBytes$2(lps.content);
  const length = contentBytes.byteLength;
  bytesArray.push(hexToBytes$1(intToHex(length, lps.lengthPrefixBytes)));
  bytesArray.push(contentBytes);
  return concatArray(bytesArray);
}
function deserializeLPString(bytesReader, prefixBytes, maxLength) {
  prefixBytes = prefixBytes ? prefixBytes : 1;
  const length = hexToInt(bytesToHex$1(bytesReader.readBytes(prefixBytes)));
  const content = bytesToUtf8(bytesReader.readBytes(length));
  return createLPString(content, prefixBytes, maxLength ?? 128);
}
function codeBodyString(content) {
  return createLPString(content, 4, 1e5);
}
function createMemoString(content) {
  if (content && exceedsMaxLengthBytes(content, MEMO_MAX_LENGTH_BYTES)) {
    throw new Error(`Memo exceeds maximum length of ${MEMO_MAX_LENGTH_BYTES} bytes`);
  }
  return { type: StacksMessageType.MemoString, content };
}
function serializeMemoString(memoString) {
  const bytesArray = [];
  const contentBytes = utf8ToBytes$2(memoString.content);
  const paddedContent = rightPadHexToLength(bytesToHex$1(contentBytes), MEMO_MAX_LENGTH_BYTES * 2);
  bytesArray.push(hexToBytes$1(paddedContent));
  return concatArray(bytesArray);
}
function deserializeMemoString(bytesReader) {
  const content = bytesToUtf8(bytesReader.readBytes(MEMO_MAX_LENGTH_BYTES));
  return { type: StacksMessageType.MemoString, content };
}
function serializeAssetInfo(info) {
  const bytesArray = [];
  bytesArray.push(serializeAddress(info.address));
  bytesArray.push(serializeLPString(info.contractName));
  bytesArray.push(serializeLPString(info.assetName));
  return concatArray(bytesArray);
}
function deserializeAssetInfo(bytesReader) {
  return {
    type: StacksMessageType.AssetInfo,
    address: deserializeAddress(bytesReader),
    contractName: deserializeLPString(bytesReader),
    assetName: deserializeLPString(bytesReader)
  };
}
function createLPList(values, lengthPrefixBytes) {
  return {
    type: StacksMessageType.LengthPrefixedList,
    lengthPrefixBytes: lengthPrefixBytes || 4,
    values
  };
}
function serializeLPList(lpList) {
  const list = lpList.values;
  const bytesArray = [];
  bytesArray.push(hexToBytes$1(intToHex(list.length, lpList.lengthPrefixBytes)));
  for (const l of list) {
    bytesArray.push(serializeStacksMessage(l));
  }
  return concatArray(bytesArray);
}
function deserializeLPList(bytesReader, type, lengthPrefixBytes) {
  const length = hexToInt(bytesToHex$1(bytesReader.readBytes(lengthPrefixBytes || 4)));
  const l = [];
  for (let index = 0; index < length; index++) {
    switch (type) {
      case StacksMessageType.Address:
        l.push(deserializeAddress(bytesReader));
        break;
      case StacksMessageType.LengthPrefixedString:
        l.push(deserializeLPString(bytesReader));
        break;
      case StacksMessageType.MemoString:
        l.push(deserializeMemoString(bytesReader));
        break;
      case StacksMessageType.AssetInfo:
        l.push(deserializeAssetInfo(bytesReader));
        break;
      case StacksMessageType.PostCondition:
        l.push(deserializePostCondition(bytesReader));
        break;
      case StacksMessageType.PublicKey:
        l.push(deserializePublicKey(bytesReader));
        break;
      case StacksMessageType.TransactionAuthField:
        l.push(deserializeTransactionAuthField(bytesReader));
        break;
    }
  }
  return createLPList(l, lengthPrefixBytes);
}
function serializePostCondition(postCondition) {
  const bytesArray = [];
  bytesArray.push(postCondition.conditionType);
  bytesArray.push(serializePrincipal(postCondition.principal));
  if (postCondition.conditionType === PostConditionType.Fungible || postCondition.conditionType === PostConditionType.NonFungible) {
    bytesArray.push(serializeAssetInfo(postCondition.assetInfo));
  }
  if (postCondition.conditionType === PostConditionType.NonFungible) {
    bytesArray.push(serializeCV(postCondition.assetName));
  }
  bytesArray.push(postCondition.conditionCode);
  if (postCondition.conditionType === PostConditionType.STX || postCondition.conditionType === PostConditionType.Fungible) {
    bytesArray.push(intToBytes(postCondition.amount, false, 8));
  }
  return concatArray(bytesArray);
}
function deserializePostCondition(bytesReader) {
  const postConditionType = bytesReader.readUInt8Enum(PostConditionType, (n) => {
    throw new DeserializationError(`Could not read ${n} as PostConditionType`);
  });
  const principal = deserializePrincipal(bytesReader);
  let conditionCode;
  let assetInfo;
  let amount;
  switch (postConditionType) {
    case PostConditionType.STX:
      conditionCode = bytesReader.readUInt8Enum(FungibleConditionCode, (n) => {
        throw new DeserializationError(`Could not read ${n} as FungibleConditionCode`);
      });
      amount = BigInt(`0x${bytesToHex$1(bytesReader.readBytes(8))}`);
      return {
        type: StacksMessageType.PostCondition,
        conditionType: PostConditionType.STX,
        principal,
        conditionCode,
        amount
      };
    case PostConditionType.Fungible:
      assetInfo = deserializeAssetInfo(bytesReader);
      conditionCode = bytesReader.readUInt8Enum(FungibleConditionCode, (n) => {
        throw new DeserializationError(`Could not read ${n} as FungibleConditionCode`);
      });
      amount = BigInt(`0x${bytesToHex$1(bytesReader.readBytes(8))}`);
      return {
        type: StacksMessageType.PostCondition,
        conditionType: PostConditionType.Fungible,
        principal,
        conditionCode,
        amount,
        assetInfo
      };
    case PostConditionType.NonFungible:
      assetInfo = deserializeAssetInfo(bytesReader);
      const assetName = deserializeCV(bytesReader);
      conditionCode = bytesReader.readUInt8Enum(NonFungibleConditionCode, (n) => {
        throw new DeserializationError(`Could not read ${n} as FungibleConditionCode`);
      });
      return {
        type: StacksMessageType.PostCondition,
        conditionType: PostConditionType.NonFungible,
        principal,
        conditionCode,
        assetInfo,
        assetName
      };
  }
}
function bytesWithTypeID(typeId, bytes2) {
  return concatArray([typeId, bytes2]);
}
function serializeBoolCV(value) {
  return new Uint8Array([value.type]);
}
function serializeOptionalCV(cv) {
  if (cv.type === ClarityType.OptionalNone) {
    return new Uint8Array([cv.type]);
  } else {
    return bytesWithTypeID(cv.type, serializeCV(cv.value));
  }
}
function serializeBufferCV(cv) {
  const length = new Uint8Array(4);
  writeUInt32BE(length, cv.buffer.length, 0);
  return bytesWithTypeID(cv.type, concatBytes$1(length, cv.buffer));
}
function serializeIntCV(cv) {
  const bytes2 = bigIntToBytes(toTwos(cv.value, BigInt(CLARITY_INT_SIZE)), CLARITY_INT_BYTE_SIZE);
  return bytesWithTypeID(cv.type, bytes2);
}
function serializeUIntCV(cv) {
  const bytes2 = bigIntToBytes(cv.value, CLARITY_INT_BYTE_SIZE);
  return bytesWithTypeID(cv.type, bytes2);
}
function serializeStandardPrincipalCV(cv) {
  return bytesWithTypeID(cv.type, serializeAddress(cv.address));
}
function serializeContractPrincipalCV(cv) {
  return bytesWithTypeID(cv.type, concatBytes$1(serializeAddress(cv.address), serializeLPString(cv.contractName)));
}
function serializeResponseCV(cv) {
  return bytesWithTypeID(cv.type, serializeCV(cv.value));
}
function serializeListCV(cv) {
  const bytesArray = [];
  const length = new Uint8Array(4);
  writeUInt32BE(length, cv.list.length, 0);
  bytesArray.push(length);
  for (const value of cv.list) {
    const serializedValue = serializeCV(value);
    bytesArray.push(serializedValue);
  }
  return bytesWithTypeID(cv.type, concatArray(bytesArray));
}
function serializeTupleCV(cv) {
  const bytesArray = [];
  const length = new Uint8Array(4);
  writeUInt32BE(length, Object.keys(cv.data).length, 0);
  bytesArray.push(length);
  const lexicographicOrder = Object.keys(cv.data).sort((a, b) => a.localeCompare(b));
  for (const key of lexicographicOrder) {
    const nameWithLength = createLPString(key);
    bytesArray.push(serializeLPString(nameWithLength));
    const serializedValue = serializeCV(cv.data[key]);
    bytesArray.push(serializedValue);
  }
  return bytesWithTypeID(cv.type, concatArray(bytesArray));
}
function serializeStringCV(cv, encoding2) {
  const bytesArray = [];
  const str = encoding2 == "ascii" ? asciiToBytes(cv.data) : utf8ToBytes$2(cv.data);
  const len = new Uint8Array(4);
  writeUInt32BE(len, str.length, 0);
  bytesArray.push(len);
  bytesArray.push(str);
  return bytesWithTypeID(cv.type, concatArray(bytesArray));
}
function serializeStringAsciiCV(cv) {
  return serializeStringCV(cv, "ascii");
}
function serializeStringUtf8CV(cv) {
  return serializeStringCV(cv, "utf8");
}
function serializeCV(value) {
  switch (value.type) {
    case ClarityType.BoolTrue:
    case ClarityType.BoolFalse:
      return serializeBoolCV(value);
    case ClarityType.OptionalNone:
    case ClarityType.OptionalSome:
      return serializeOptionalCV(value);
    case ClarityType.Buffer:
      return serializeBufferCV(value);
    case ClarityType.UInt:
      return serializeUIntCV(value);
    case ClarityType.Int:
      return serializeIntCV(value);
    case ClarityType.PrincipalStandard:
      return serializeStandardPrincipalCV(value);
    case ClarityType.PrincipalContract:
      return serializeContractPrincipalCV(value);
    case ClarityType.ResponseOk:
    case ClarityType.ResponseErr:
      return serializeResponseCV(value);
    case ClarityType.List:
      return serializeListCV(value);
    case ClarityType.Tuple:
      return serializeTupleCV(value);
    case ClarityType.StringASCII:
      return serializeStringAsciiCV(value);
    case ClarityType.StringUTF8:
      return serializeStringUtf8CV(value);
    default:
      throw new SerializationError("Unable to serialize. Invalid Clarity Value.");
  }
}
function createEnumChecker(enumVariable) {
  const enumValues = Object.values(enumVariable).filter((v) => typeof v === "number");
  const enumValueSet = new Set(enumValues);
  return (value) => enumValueSet.has(value);
}
const enumCheckFunctions = /* @__PURE__ */ new Map();
function isEnum(enumVariable, value) {
  const checker = enumCheckFunctions.get(enumVariable);
  if (checker !== void 0) {
    return checker(value);
  }
  const newChecker = createEnumChecker(enumVariable);
  enumCheckFunctions.set(enumVariable, newChecker);
  return isEnum(enumVariable, value);
}
class BytesReader {
  constructor(arr) {
    this.consumed = 0;
    this.source = arr;
  }
  readBytes(length) {
    const view = this.source.subarray(this.consumed, this.consumed + length);
    this.consumed += length;
    return view;
  }
  readUInt32BE() {
    return readUInt32BE(this.readBytes(4), 0);
  }
  readUInt8() {
    return readUInt8(this.readBytes(1), 0);
  }
  readUInt16BE() {
    return readUInt16BE(this.readBytes(2), 0);
  }
  readBigUIntLE(length) {
    const bytes2 = this.readBytes(length).slice().reverse();
    const hex = bytesToHex$1(bytes2);
    return BigInt(`0x${hex}`);
  }
  readBigUIntBE(length) {
    const bytes2 = this.readBytes(length);
    const hex = bytesToHex$1(bytes2);
    return BigInt(`0x${hex}`);
  }
  get readOffset() {
    return this.consumed;
  }
  set readOffset(val) {
    this.consumed = val;
  }
  get internalBytes() {
    return this.source;
  }
  readUInt8Enum(enumVariable, invalidEnumErrorFormatter) {
    const num = this.readUInt8();
    if (isEnum(enumVariable, num)) {
      return num;
    }
    throw invalidEnumErrorFormatter(num);
  }
}
function deserializeCV(serializedClarityValue) {
  let bytesReader;
  if (typeof serializedClarityValue === "string") {
    const hasHexPrefix = serializedClarityValue.slice(0, 2).toLowerCase() === "0x";
    bytesReader = new BytesReader(hexToBytes$1(hasHexPrefix ? serializedClarityValue.slice(2) : serializedClarityValue));
  } else if (serializedClarityValue instanceof Uint8Array) {
    bytesReader = new BytesReader(serializedClarityValue);
  } else {
    bytesReader = serializedClarityValue;
  }
  const type = bytesReader.readUInt8Enum(ClarityType, (n) => {
    throw new DeserializationError(`Cannot recognize Clarity Type: ${n}`);
  });
  switch (type) {
    case ClarityType.Int:
      return intCV(bytesReader.readBytes(16));
    case ClarityType.UInt:
      return uintCV(bytesReader.readBytes(16));
    case ClarityType.Buffer:
      const bufferLength = bytesReader.readUInt32BE();
      return bufferCV(bytesReader.readBytes(bufferLength));
    case ClarityType.BoolTrue:
      return trueCV();
    case ClarityType.BoolFalse:
      return falseCV();
    case ClarityType.PrincipalStandard:
      const sAddress = deserializeAddress(bytesReader);
      return standardPrincipalCVFromAddress(sAddress);
    case ClarityType.PrincipalContract:
      const cAddress = deserializeAddress(bytesReader);
      const contractName = deserializeLPString(bytesReader);
      return contractPrincipalCVFromAddress(cAddress, contractName);
    case ClarityType.ResponseOk:
      return responseOkCV(deserializeCV(bytesReader));
    case ClarityType.ResponseErr:
      return responseErrorCV(deserializeCV(bytesReader));
    case ClarityType.OptionalNone:
      return noneCV();
    case ClarityType.OptionalSome:
      return someCV(deserializeCV(bytesReader));
    case ClarityType.List:
      const listLength = bytesReader.readUInt32BE();
      const listContents = [];
      for (let i = 0; i < listLength; i++) {
        listContents.push(deserializeCV(bytesReader));
      }
      return listCV(listContents);
    case ClarityType.Tuple:
      const tupleLength = bytesReader.readUInt32BE();
      const tupleContents = {};
      for (let i = 0; i < tupleLength; i++) {
        const clarityName = deserializeLPString(bytesReader).content;
        if (clarityName === void 0) {
          throw new DeserializationError('"content" is undefined');
        }
        tupleContents[clarityName] = deserializeCV(bytesReader);
      }
      return tupleCV(tupleContents);
    case ClarityType.StringASCII:
      const asciiStrLen = bytesReader.readUInt32BE();
      const asciiStr = bytesToAscii(bytesReader.readBytes(asciiStrLen));
      return stringAsciiCV(asciiStr);
    case ClarityType.StringUTF8:
      const utf8StrLen = bytesReader.readUInt32BE();
      const utf8Str = bytesToUtf8(bytesReader.readBytes(utf8StrLen));
      return stringUtf8CV(utf8Str);
    default:
      throw new DeserializationError("Unable to deserialize Clarity Value from Uint8Array. Could not find valid Clarity Type.");
  }
}
const leftPadHex = (hexString) => hexString.length % 2 == 0 ? hexString : `0${hexString}`;
const rightPadHexToLength = (hexString, length) => hexString.padEnd(length, "0");
const exceedsMaxLengthBytes = (string, maxLengthBytes) => string ? utf8ToBytes$2(string).length > maxLengthBytes : false;
function cloneDeep(obj) {
  return lodashCloneDeep(obj);
}
const txidFromData = (data) => {
  return bytesToHex$1(sha512_256(data));
};
const hash160 = (input) => {
  return ripemd160(sha256(input));
};
const hashP2PKH = (input) => {
  return bytesToHex$1(hash160(input));
};
const hashP2WPKH = (input) => {
  const keyHash = hash160(input);
  const redeemScript = concatBytes$1(new Uint8Array([0]), new Uint8Array([keyHash.length]), keyHash);
  const redeemScriptHash = hash160(redeemScript);
  return bytesToHex$1(redeemScriptHash);
};
const hashP2SH = (numSigs, pubKeys) => {
  if (numSigs > 15 || pubKeys.length > 15) {
    throw Error("P2SH multisig address can only contain up to 15 public keys");
  }
  const bytesArray = [];
  bytesArray.push(80 + numSigs);
  pubKeys.forEach((pubKey) => {
    bytesArray.push(pubKey.length);
    bytesArray.push(pubKey);
  });
  bytesArray.push(80 + pubKeys.length);
  bytesArray.push(174);
  const redeemScript = concatArray(bytesArray);
  const redeemScriptHash = hash160(redeemScript);
  return bytesToHex$1(redeemScriptHash);
};
const hashP2WSH = (numSigs, pubKeys) => {
  if (numSigs > 15 || pubKeys.length > 15) {
    throw Error("P2WSH multisig address can only contain up to 15 public keys");
  }
  const scriptArray = [];
  scriptArray.push(80 + numSigs);
  pubKeys.forEach((pubKey) => {
    scriptArray.push(pubKey.length);
    scriptArray.push(pubKey);
  });
  scriptArray.push(80 + pubKeys.length);
  scriptArray.push(174);
  const script = concatArray(scriptArray);
  const digest = sha256(script);
  const bytesArray = [];
  bytesArray.push(0);
  bytesArray.push(digest.length);
  bytesArray.push(digest);
  const redeemScript = concatArray(bytesArray);
  const redeemScriptHash = hash160(redeemScript);
  return bytesToHex$1(redeemScriptHash);
};
function isClarityName(name) {
  const regex = /^[a-zA-Z]([a-zA-Z0-9]|[-_!?+<>=/*])*$|^[-+=/*]$|^[<>]=?$/;
  return regex.test(name) && name.length < 128;
}
function emptyMessageSignature() {
  return {
    type: StacksMessageType.MessageSignature,
    data: bytesToHex$1(new Uint8Array(RECOVERABLE_ECDSA_SIG_LENGTH_BYTES))
  };
}
function createSingleSigSpendingCondition(hashMode, pubKey, nonce, fee) {
  const signer2 = addressFromPublicKeys(0, hashMode, 1, [createStacksPublicKey(pubKey)]).hash160;
  const keyEncoding = isCompressed(createStacksPublicKey(pubKey)) ? PubKeyEncoding.Compressed : PubKeyEncoding.Uncompressed;
  return {
    hashMode,
    signer: signer2,
    nonce: intToBigInt(nonce, false),
    fee: intToBigInt(fee, false),
    keyEncoding,
    signature: emptyMessageSignature()
  };
}
function isSingleSig(condition) {
  return "signature" in condition;
}
function clearCondition(condition) {
  const cloned = cloneDeep(condition);
  cloned.nonce = 0;
  cloned.fee = 0;
  if (isSingleSig(cloned)) {
    cloned.signature = emptyMessageSignature();
  } else {
    cloned.fields = [];
  }
  return {
    ...cloned,
    nonce: BigInt(0),
    fee: BigInt(0)
  };
}
function serializeSingleSigSpendingCondition(condition) {
  const bytesArray = [
    condition.hashMode,
    hexToBytes$1(condition.signer),
    intToBytes(condition.nonce, false, 8),
    intToBytes(condition.fee, false, 8),
    condition.keyEncoding,
    serializeMessageSignature(condition.signature)
  ];
  return concatArray(bytesArray);
}
function serializeMultiSigSpendingCondition(condition) {
  const bytesArray = [
    condition.hashMode,
    hexToBytes$1(condition.signer),
    intToBytes(condition.nonce, false, 8),
    intToBytes(condition.fee, false, 8)
  ];
  const fields = createLPList(condition.fields);
  bytesArray.push(serializeLPList(fields));
  const numSigs = new Uint8Array(2);
  writeUInt16BE(numSigs, condition.signaturesRequired, 0);
  bytesArray.push(numSigs);
  return concatArray(bytesArray);
}
function deserializeSingleSigSpendingCondition(hashMode, bytesReader) {
  const signer2 = bytesToHex$1(bytesReader.readBytes(20));
  const nonce = BigInt(`0x${bytesToHex$1(bytesReader.readBytes(8))}`);
  const fee = BigInt(`0x${bytesToHex$1(bytesReader.readBytes(8))}`);
  const keyEncoding = bytesReader.readUInt8Enum(PubKeyEncoding, (n) => {
    throw new DeserializationError(`Could not parse ${n} as PubKeyEncoding`);
  });
  if (hashMode === AddressHashMode.SerializeP2WPKH && keyEncoding != PubKeyEncoding.Compressed) {
    throw new DeserializationError("Failed to parse singlesig spending condition: incomaptible hash mode and key encoding");
  }
  const signature = deserializeMessageSignature(bytesReader);
  return {
    hashMode,
    signer: signer2,
    nonce,
    fee,
    keyEncoding,
    signature
  };
}
function deserializeMultiSigSpendingCondition(hashMode, bytesReader) {
  const signer2 = bytesToHex$1(bytesReader.readBytes(20));
  const nonce = BigInt("0x" + bytesToHex$1(bytesReader.readBytes(8)));
  const fee = BigInt("0x" + bytesToHex$1(bytesReader.readBytes(8)));
  const fields = deserializeLPList(bytesReader, StacksMessageType.TransactionAuthField).values;
  let haveUncompressed = false;
  let numSigs = 0;
  for (const field of fields) {
    switch (field.contents.type) {
      case StacksMessageType.PublicKey:
        if (!isCompressed(field.contents))
          haveUncompressed = true;
        break;
      case StacksMessageType.MessageSignature:
        if (field.pubKeyEncoding === PubKeyEncoding.Uncompressed)
          haveUncompressed = true;
        numSigs += 1;
        if (numSigs === 65536)
          throw new VerificationError("Failed to parse multisig spending condition: too many signatures");
        break;
    }
  }
  const signaturesRequired = bytesReader.readUInt16BE();
  if (haveUncompressed && hashMode === AddressHashMode.SerializeP2SH)
    throw new VerificationError("Uncompressed keys are not allowed in this hash mode");
  return {
    hashMode,
    signer: signer2,
    nonce,
    fee,
    fields,
    signaturesRequired
  };
}
function serializeSpendingCondition(condition) {
  if (isSingleSig(condition)) {
    return serializeSingleSigSpendingCondition(condition);
  }
  return serializeMultiSigSpendingCondition(condition);
}
function deserializeSpendingCondition(bytesReader) {
  const hashMode = bytesReader.readUInt8Enum(AddressHashMode, (n) => {
    throw new DeserializationError(`Could not parse ${n} as AddressHashMode`);
  });
  if (hashMode === AddressHashMode.SerializeP2PKH || hashMode === AddressHashMode.SerializeP2WPKH) {
    return deserializeSingleSigSpendingCondition(hashMode, bytesReader);
  } else {
    return deserializeMultiSigSpendingCondition(hashMode, bytesReader);
  }
}
function makeSigHashPreSign(curSigHash, authType, fee, nonce) {
  const hashLength = 32 + 1 + 8 + 8;
  const sigHash = curSigHash + bytesToHex$1(new Uint8Array([authType])) + bytesToHex$1(intToBytes(fee, false, 8)) + bytesToHex$1(intToBytes(nonce, false, 8));
  if (hexToBytes$1(sigHash).byteLength !== hashLength) {
    throw Error("Invalid signature hash length");
  }
  return txidFromData(hexToBytes$1(sigHash));
}
function makeSigHashPostSign(curSigHash, pubKey, signature) {
  const hashLength = 32 + 1 + RECOVERABLE_ECDSA_SIG_LENGTH_BYTES;
  const pubKeyEncoding = isCompressed(pubKey) ? PubKeyEncoding.Compressed : PubKeyEncoding.Uncompressed;
  const sigHash = curSigHash + leftPadHex(pubKeyEncoding.toString(16)) + signature.data;
  const sigHashBytes = hexToBytes$1(sigHash);
  if (sigHashBytes.byteLength > hashLength) {
    throw Error("Invalid signature hash length");
  }
  return txidFromData(sigHashBytes);
}
function nextSignature(curSigHash, authType, fee, nonce, privateKey) {
  const sigHashPreSign = makeSigHashPreSign(curSigHash, authType, fee, nonce);
  const signature = signWithKey(privateKey, sigHashPreSign);
  const publicKey = getPublicKey(privateKey);
  const nextSigHash = makeSigHashPostSign(sigHashPreSign, publicKey, signature);
  return {
    nextSig: signature,
    nextSigHash
  };
}
function nextVerification(initialSigHash, authType, fee, nonce, pubKeyEncoding, signature) {
  const sigHashPreSign = makeSigHashPreSign(initialSigHash, authType, fee, nonce);
  const publicKey = createStacksPublicKey(publicKeyFromSignatureVrs(sigHashPreSign, signature, pubKeyEncoding));
  const nextSigHash = makeSigHashPostSign(sigHashPreSign, publicKey, signature);
  return {
    pubKey: publicKey,
    nextSigHash
  };
}
function newInitialSigHash() {
  const spendingCondition = createSingleSigSpendingCondition(AddressHashMode.SerializeP2PKH, "", 0, 0);
  spendingCondition.signer = createEmptyAddress().hash160;
  spendingCondition.keyEncoding = PubKeyEncoding.Compressed;
  spendingCondition.signature = emptyMessageSignature();
  return spendingCondition;
}
function verify(condition, initialSigHash, authType) {
  if (isSingleSig(condition)) {
    return verifySingleSig(condition, initialSigHash, authType);
  } else {
    return verifyMultiSig(condition, initialSigHash, authType);
  }
}
function verifySingleSig(condition, initialSigHash, authType) {
  const { pubKey, nextSigHash } = nextVerification(initialSigHash, authType, condition.fee, condition.nonce, condition.keyEncoding, condition.signature);
  const addrBytes = addressFromPublicKeys(0, condition.hashMode, 1, [pubKey]).hash160;
  if (addrBytes !== condition.signer)
    throw new VerificationError(`Signer hash does not equal hash of public key(s): ${addrBytes} != ${condition.signer}`);
  return nextSigHash;
}
function verifyMultiSig(condition, initialSigHash, authType) {
  const publicKeys = [];
  let curSigHash = initialSigHash;
  let haveUncompressed = false;
  let numSigs = 0;
  for (const field of condition.fields) {
    let foundPubKey;
    switch (field.contents.type) {
      case StacksMessageType.PublicKey:
        if (!isCompressed(field.contents))
          haveUncompressed = true;
        foundPubKey = field.contents;
        break;
      case StacksMessageType.MessageSignature:
        if (field.pubKeyEncoding === PubKeyEncoding.Uncompressed)
          haveUncompressed = true;
        const { pubKey, nextSigHash } = nextVerification(curSigHash, authType, condition.fee, condition.nonce, field.pubKeyEncoding, field.contents);
        curSigHash = nextSigHash;
        foundPubKey = pubKey;
        numSigs += 1;
        if (numSigs === 65536)
          throw new VerificationError("Too many signatures");
        break;
    }
    publicKeys.push(foundPubKey);
  }
  if (numSigs !== condition.signaturesRequired)
    throw new VerificationError("Incorrect number of signatures");
  if (haveUncompressed && condition.hashMode === AddressHashMode.SerializeP2SH)
    throw new VerificationError("Uncompressed keys are not allowed in this hash mode");
  const addrBytes = addressFromPublicKeys(0, condition.hashMode, condition.signaturesRequired, publicKeys).hash160;
  if (addrBytes !== condition.signer)
    throw new VerificationError(`Signer hash does not equal hash of public key(s): ${addrBytes} != ${condition.signer}`);
  return curSigHash;
}
function createStandardAuth(spendingCondition) {
  return {
    authType: AuthType.Standard,
    spendingCondition
  };
}
function createSponsoredAuth(spendingCondition, sponsorSpendingCondition) {
  return {
    authType: AuthType.Sponsored,
    spendingCondition,
    sponsorSpendingCondition: sponsorSpendingCondition ? sponsorSpendingCondition : createSingleSigSpendingCondition(AddressHashMode.SerializeP2PKH, "0".repeat(66), 0, 0)
  };
}
function intoInitialSighashAuth(auth) {
  if (auth.spendingCondition) {
    switch (auth.authType) {
      case AuthType.Standard:
        return createStandardAuth(clearCondition(auth.spendingCondition));
      case AuthType.Sponsored:
        return createSponsoredAuth(clearCondition(auth.spendingCondition), newInitialSigHash());
      default:
        throw new SigningError("Unexpected authorization type for signing");
    }
  }
  throw new Error("Authorization missing SpendingCondition");
}
function verifyOrigin(auth, initialSigHash) {
  switch (auth.authType) {
    case AuthType.Standard:
      return verify(auth.spendingCondition, initialSigHash, AuthType.Standard);
    case AuthType.Sponsored:
      return verify(auth.spendingCondition, initialSigHash, AuthType.Standard);
    default:
      throw new SigningError("Invalid origin auth type");
  }
}
function setFee(auth, amount) {
  switch (auth.authType) {
    case AuthType.Standard:
      const spendingCondition = {
        ...auth.spendingCondition,
        fee: intToBigInt(amount, false)
      };
      return { ...auth, spendingCondition };
    case AuthType.Sponsored:
      const sponsorSpendingCondition = {
        ...auth.sponsorSpendingCondition,
        fee: intToBigInt(amount, false)
      };
      return { ...auth, sponsorSpendingCondition };
  }
}
function setNonce(auth, nonce) {
  const spendingCondition = {
    ...auth.spendingCondition,
    nonce: intToBigInt(nonce, false)
  };
  return {
    ...auth,
    spendingCondition
  };
}
function setSponsorNonce(auth, nonce) {
  const sponsorSpendingCondition = {
    ...auth.sponsorSpendingCondition,
    nonce: intToBigInt(nonce, false)
  };
  return {
    ...auth,
    sponsorSpendingCondition
  };
}
function setSponsor(auth, sponsorSpendingCondition) {
  const sc = {
    ...sponsorSpendingCondition,
    nonce: intToBigInt(sponsorSpendingCondition.nonce, false),
    fee: intToBigInt(sponsorSpendingCondition.fee, false)
  };
  return {
    ...auth,
    sponsorSpendingCondition: sc
  };
}
function serializeAuthorization(auth) {
  const bytesArray = [];
  bytesArray.push(auth.authType);
  switch (auth.authType) {
    case AuthType.Standard:
      bytesArray.push(serializeSpendingCondition(auth.spendingCondition));
      break;
    case AuthType.Sponsored:
      bytesArray.push(serializeSpendingCondition(auth.spendingCondition));
      bytesArray.push(serializeSpendingCondition(auth.sponsorSpendingCondition));
      break;
  }
  return concatArray(bytesArray);
}
function deserializeAuthorization(bytesReader) {
  const authType = bytesReader.readUInt8Enum(AuthType, (n) => {
    throw new DeserializationError(`Could not parse ${n} as AuthType`);
  });
  let spendingCondition;
  switch (authType) {
    case AuthType.Standard:
      spendingCondition = deserializeSpendingCondition(bytesReader);
      return createStandardAuth(spendingCondition);
    case AuthType.Sponsored:
      spendingCondition = deserializeSpendingCondition(bytesReader);
      const sponsorSpendingCondition = deserializeSpendingCondition(bytesReader);
      return createSponsoredAuth(spendingCondition, sponsorSpendingCondition);
  }
}
class StacksTransaction {
  constructor(version2, auth, payload, postConditions, postConditionMode, anchorMode, chainId) {
    this.version = version2;
    this.auth = auth;
    if ("amount" in payload) {
      this.payload = {
        ...payload,
        amount: intToBigInt(payload.amount, false)
      };
    } else {
      this.payload = payload;
    }
    this.chainId = chainId ?? DEFAULT_CHAIN_ID;
    this.postConditionMode = postConditionMode ?? PostConditionMode.Deny;
    this.postConditions = postConditions ?? createLPList([]);
    if (anchorMode) {
      this.anchorMode = anchorModeFromNameOrValue(anchorMode);
    } else {
      switch (payload.payloadType) {
        case PayloadType.Coinbase:
        case PayloadType.CoinbaseToAltRecipient:
        case PayloadType.PoisonMicroblock: {
          this.anchorMode = AnchorMode.OnChainOnly;
          break;
        }
        case PayloadType.ContractCall:
        case PayloadType.SmartContract:
        case PayloadType.VersionedSmartContract:
        case PayloadType.TokenTransfer: {
          this.anchorMode = AnchorMode.Any;
          break;
        }
      }
    }
  }
  signBegin() {
    const tx = cloneDeep(this);
    tx.auth = intoInitialSighashAuth(tx.auth);
    return tx.txid();
  }
  verifyBegin() {
    const tx = cloneDeep(this);
    tx.auth = intoInitialSighashAuth(tx.auth);
    return tx.txid();
  }
  verifyOrigin() {
    return verifyOrigin(this.auth, this.verifyBegin());
  }
  signNextOrigin(sigHash, privateKey) {
    if (this.auth.spendingCondition === void 0) {
      throw new Error('"auth.spendingCondition" is undefined');
    }
    if (this.auth.authType === void 0) {
      throw new Error('"auth.authType" is undefined');
    }
    return this.signAndAppend(this.auth.spendingCondition, sigHash, AuthType.Standard, privateKey);
  }
  signNextSponsor(sigHash, privateKey) {
    if (this.auth.authType === AuthType.Sponsored) {
      return this.signAndAppend(this.auth.sponsorSpendingCondition, sigHash, AuthType.Sponsored, privateKey);
    } else {
      throw new Error('"auth.sponsorSpendingCondition" is undefined');
    }
  }
  appendPubkey(publicKey) {
    const cond = this.auth.spendingCondition;
    if (cond && !isSingleSig(cond)) {
      const compressed = isCompressed(publicKey);
      cond.fields.push(createTransactionAuthField(compressed ? PubKeyEncoding.Compressed : PubKeyEncoding.Uncompressed, publicKey));
    } else {
      throw new Error(`Can't append public key to a singlesig condition`);
    }
  }
  signAndAppend(condition, curSigHash, authType, privateKey) {
    const { nextSig, nextSigHash } = nextSignature(curSigHash, authType, condition.fee, condition.nonce, privateKey);
    if (isSingleSig(condition)) {
      condition.signature = nextSig;
    } else {
      const compressed = bytesToHex$1(privateKey.data).endsWith("01");
      condition.fields.push(createTransactionAuthField(compressed ? PubKeyEncoding.Compressed : PubKeyEncoding.Uncompressed, nextSig));
    }
    return nextSigHash;
  }
  txid() {
    const serialized = this.serialize();
    return txidFromData(serialized);
  }
  setSponsor(sponsorSpendingCondition) {
    if (this.auth.authType != AuthType.Sponsored) {
      throw new SigningError("Cannot sponsor sign a non-sponsored transaction");
    }
    this.auth = setSponsor(this.auth, sponsorSpendingCondition);
  }
  setFee(amount) {
    this.auth = setFee(this.auth, amount);
  }
  setNonce(nonce) {
    this.auth = setNonce(this.auth, nonce);
  }
  setSponsorNonce(nonce) {
    if (this.auth.authType != AuthType.Sponsored) {
      throw new SigningError("Cannot sponsor sign a non-sponsored transaction");
    }
    this.auth = setSponsorNonce(this.auth, nonce);
  }
  serialize() {
    if (this.version === void 0) {
      throw new SerializationError('"version" is undefined');
    }
    if (this.chainId === void 0) {
      throw new SerializationError('"chainId" is undefined');
    }
    if (this.auth === void 0) {
      throw new SerializationError('"auth" is undefined');
    }
    if (this.anchorMode === void 0) {
      throw new SerializationError('"anchorMode" is undefined');
    }
    if (this.payload === void 0) {
      throw new SerializationError('"payload" is undefined');
    }
    const bytesArray = [];
    bytesArray.push(this.version);
    const chainIdBytes = new Uint8Array(4);
    writeUInt32BE(chainIdBytes, this.chainId, 0);
    bytesArray.push(chainIdBytes);
    bytesArray.push(serializeAuthorization(this.auth));
    bytesArray.push(this.anchorMode);
    bytesArray.push(this.postConditionMode);
    bytesArray.push(serializeLPList(this.postConditions));
    bytesArray.push(serializePayload(this.payload));
    return concatArray(bytesArray);
  }
}
function deserializeTransaction(data) {
  let bytesReader;
  if (typeof data === "string") {
    if (data.slice(0, 2).toLowerCase() === "0x") {
      bytesReader = new BytesReader(hexToBytes$1(data.slice(2)));
    } else {
      bytesReader = new BytesReader(hexToBytes$1(data));
    }
  } else if (data instanceof Uint8Array) {
    bytesReader = new BytesReader(data);
  } else {
    bytesReader = data;
  }
  const version2 = bytesReader.readUInt8Enum(TransactionVersion, (n) => {
    throw new Error(`Could not parse ${n} as TransactionVersion`);
  });
  const chainId = bytesReader.readUInt32BE();
  const auth = deserializeAuthorization(bytesReader);
  const anchorMode = bytesReader.readUInt8Enum(AnchorMode, (n) => {
    throw new Error(`Could not parse ${n} as AnchorMode`);
  });
  const postConditionMode = bytesReader.readUInt8Enum(PostConditionMode, (n) => {
    throw new Error(`Could not parse ${n} as PostConditionMode`);
  });
  const postConditions = deserializeLPList(bytesReader, StacksMessageType.PostCondition);
  const payload = deserializePayload(bytesReader);
  return new StacksTransaction(version2, auth, payload, postConditions, postConditionMode, anchorMode, chainId);
}
function verifyProfileToken(token, publicKeyOrAddress) {
  const decodedToken = lib.decodeToken(token);
  const payload = decodedToken.payload;
  if (typeof payload === "string") {
    throw new Error("Unexpected token payload type of string");
  }
  if (payload.hasOwnProperty("subject") && payload.subject) {
    if (!payload.subject.hasOwnProperty("publicKey")) {
      throw new Error("Token doesn't have a subject public key");
    }
  } else {
    throw new Error("Token doesn't have a subject");
  }
  if (payload.hasOwnProperty("issuer") && payload.issuer) {
    if (!payload.issuer.hasOwnProperty("publicKey")) {
      throw new Error("Token doesn't have an issuer public key");
    }
  } else {
    throw new Error("Token doesn't have an issuer");
  }
  if (!payload.hasOwnProperty("claim")) {
    throw new Error("Token doesn't have a claim");
  }
  const issuerPublicKey = payload.issuer.publicKey;
  const address2 = getAddressFromPublicKey(issuerPublicKey);
  if (publicKeyOrAddress === issuerPublicKey)
    ;
  else if (publicKeyOrAddress === address2)
    ;
  else {
    throw new Error("Token issuer public key does not match the verifying value");
  }
  const tokenVerifier = new lib.TokenVerifier(decodedToken.header.alg, issuerPublicKey);
  if (!tokenVerifier) {
    throw new Error("Invalid token verifier");
  }
  const tokenVerified = tokenVerifier.verify(token);
  if (!tokenVerified) {
    throw new Error("Token verification failed");
  }
  return decodedToken;
}
function extractProfile(token, publicKeyOrAddress = null) {
  let decodedToken;
  if (publicKeyOrAddress) {
    decodedToken = verifyProfileToken(token, publicKeyOrAddress);
  } else {
    decodedToken = lib.decodeToken(token);
  }
  let profile = {};
  if (decodedToken.hasOwnProperty("payload")) {
    const payload = decodedToken.payload;
    if (typeof payload === "string") {
      throw new Error("Unexpected token payload type of string");
    }
    if (payload.hasOwnProperty("claim")) {
      profile = payload.claim;
    }
  }
  return profile;
}
const GLOBAL_DETECTION_CACHE_KEY = "_blockstackDidCheckEchoReply";
const ECHO_REPLY_PARAM = "echoReply";
const AUTH_CONTINUATION_PARAM = "authContinuation";
function getQueryStringParams(query) {
  if (!query) {
    return {};
  }
  const trimmed = /^[?#]/.test(query) ? query.slice(1) : query;
  return trimmed.split("&").reduce((params, param) => {
    const [key, value] = param.split("=");
    params[key] = value ? decodeURIComponent(value.replace(/\+/g, " ")) : "";
    return params;
  }, {});
}
function protocolEchoReplyDetection() {
  let globalScope;
  if (typeof self !== "undefined") {
    globalScope = self;
  } else if (typeof window !== "undefined") {
    globalScope = window;
  } else {
    return false;
  }
  if (!globalScope.location || !globalScope.localStorage) {
    return false;
  }
  const existingDetection = globalScope[GLOBAL_DETECTION_CACHE_KEY];
  if (typeof existingDetection === "boolean") {
    return existingDetection;
  }
  const searchParams = getQueryStringParams(globalScope.location.search);
  const echoReplyParam = searchParams[ECHO_REPLY_PARAM];
  if (echoReplyParam) {
    globalScope[GLOBAL_DETECTION_CACHE_KEY] = true;
    const echoReplyKey = `echo-reply-${echoReplyParam}`;
    globalScope.localStorage.setItem(echoReplyKey, "success");
    globalScope.setTimeout(() => {
      const authContinuationParam = searchParams[AUTH_CONTINUATION_PARAM];
      globalScope.location.href = authContinuationParam;
    }, 10);
    return true;
  }
  return false;
}
class UserSession {
  constructor(options) {
    let runningInBrowser = true;
    if (typeof window === "undefined" && typeof self === "undefined") {
      runningInBrowser = false;
    }
    if (options && options.appConfig) {
      this.appConfig = options.appConfig;
    } else if (runningInBrowser) {
      this.appConfig = new AppConfig();
    } else {
      throw new MissingParameterError("You need to specify options.appConfig");
    }
    if (options && options.sessionStore) {
      this.store = options.sessionStore;
    } else if (runningInBrowser) {
      if (options) {
        this.store = new LocalStorageStore(options.sessionOptions);
      } else {
        this.store = new LocalStorageStore();
      }
    } else if (options) {
      this.store = new InstanceDataStore(options.sessionOptions);
    } else {
      this.store = new InstanceDataStore();
    }
  }
  makeAuthRequestToken(transitKey, redirectURI, manifestURI, scopes, appDomain, expiresAt = nextHour().getTime(), extraParams = {}) {
    const appConfig2 = this.appConfig;
    if (!appConfig2) {
      throw new InvalidStateError("Missing AppConfig");
    }
    transitKey = transitKey || this.generateAndStoreTransitKey();
    redirectURI = redirectURI || appConfig2.redirectURI();
    manifestURI = manifestURI || appConfig2.manifestURI();
    scopes = scopes || appConfig2.scopes;
    appDomain = appDomain || appConfig2.appDomain;
    return makeAuthRequestToken(transitKey, redirectURI, manifestURI, scopes, appDomain, expiresAt, extraParams);
  }
  generateAndStoreTransitKey() {
    const sessionData = this.store.getSessionData();
    const transitKey = generateTransitKey();
    sessionData.transitKey = transitKey;
    this.store.setSessionData(sessionData);
    return transitKey;
  }
  getAuthResponseToken() {
    var _a;
    const search = (_a = getGlobalObject("location", {
      throwIfUnavailable: true,
      usageDesc: "getAuthResponseToken"
    })) == null ? void 0 : _a.search;
    const params = new URLSearchParams(search);
    return params.get("authResponse") ?? "";
  }
  isSignInPending() {
    try {
      const isProtocolEcho = protocolEchoReplyDetection();
      if (isProtocolEcho) {
        Logger.info("protocolEchoReply detected from isSignInPending call, the page is about to redirect.");
        return true;
      }
    } catch (error) {
      Logger.error(`Error checking for protocol echo reply isSignInPending: ${error}`);
    }
    return !!this.getAuthResponseToken();
  }
  isUserSignedIn() {
    return !!this.store.getSessionData().userData;
  }
  async handlePendingSignIn(authResponseToken = this.getAuthResponseToken(), fetchFn = createFetchFn()) {
    const sessionData = this.store.getSessionData();
    if (sessionData.userData) {
      throw new LoginFailedError("Existing user session found.");
    }
    const transitKey = this.store.getSessionData().transitKey;
    let coreNode = this.appConfig && this.appConfig.coreNode;
    if (!coreNode) {
      const network = new StacksMainnet();
      coreNode = network.bnsLookupUrl;
    }
    const tokenPayload = lib.decodeToken(authResponseToken).payload;
    if (typeof tokenPayload === "string") {
      throw new Error("Unexpected token payload type of string");
    }
    const isValid = await verifyAuthResponse(authResponseToken);
    if (!isValid) {
      throw new LoginFailedError("Invalid authentication response.");
    }
    let appPrivateKey = tokenPayload.private_key;
    let coreSessionToken = tokenPayload.core_token;
    if (isLaterVersion(tokenPayload.version, "1.1.0")) {
      if (transitKey !== void 0 && transitKey != null) {
        if (tokenPayload.private_key !== void 0 && tokenPayload.private_key !== null) {
          try {
            appPrivateKey = await decryptPrivateKey(transitKey, tokenPayload.private_key);
          } catch (e) {
            Logger.warn("Failed decryption of appPrivateKey, will try to use as given");
            if (!isValidPrivateKey(tokenPayload.private_key)) {
              throw new LoginFailedError("Failed decrypting appPrivateKey. Usually means that the transit key has changed during login.");
            }
          }
        }
        if (coreSessionToken !== void 0 && coreSessionToken !== null) {
          try {
            coreSessionToken = await decryptPrivateKey(transitKey, coreSessionToken);
          } catch (e) {
            Logger.info("Failed decryption of coreSessionToken, will try to use as given");
          }
        }
      } else {
        throw new LoginFailedError("Authenticating with protocol > 1.1.0 requires transit key, and none found.");
      }
    }
    let hubUrl = BLOCKSTACK_DEFAULT_GAIA_HUB_URL;
    let gaiaAssociationToken;
    if (isLaterVersion(tokenPayload.version, "1.2.0") && tokenPayload.hubUrl !== null && tokenPayload.hubUrl !== void 0) {
      hubUrl = tokenPayload.hubUrl;
    }
    if (isLaterVersion(tokenPayload.version, "1.3.0") && tokenPayload.associationToken !== null && tokenPayload.associationToken !== void 0) {
      gaiaAssociationToken = tokenPayload.associationToken;
    }
    const userData = {
      profile: tokenPayload.profile,
      email: tokenPayload.email,
      decentralizedID: tokenPayload.iss,
      identityAddress: getAddressFromDID(tokenPayload.iss),
      appPrivateKey,
      coreSessionToken,
      authResponseToken,
      hubUrl,
      appPrivateKeyFromWalletSalt: tokenPayload.appPrivateKeyFromWalletSalt,
      coreNode: tokenPayload.blockstackAPIUrl,
      gaiaAssociationToken
    };
    const profileURL = tokenPayload.profile_url;
    if (!userData.profile && profileURL) {
      const response = await fetchFn(profileURL);
      if (!response.ok) {
        userData.profile = Object.assign({}, DEFAULT_PROFILE);
      } else {
        const responseText = await response.text();
        const wrappedProfile = JSON.parse(responseText);
        userData.profile = extractProfile(wrappedProfile[0].token);
      }
    } else {
      userData.profile = tokenPayload.profile;
    }
    sessionData.userData = userData;
    this.store.setSessionData(sessionData);
    return userData;
  }
  loadUserData() {
    const userData = this.store.getSessionData().userData;
    if (!userData) {
      throw new InvalidStateError("No user data found. Did the user sign in?");
    }
    return userData;
  }
  encryptContent(content, options) {
    const opts = Object.assign({}, options);
    if (!opts.privateKey) {
      opts.privateKey = this.loadUserData().appPrivateKey;
    }
    return encryptContent(content, opts);
  }
  decryptContent(content, options) {
    const opts = Object.assign({}, options);
    if (!opts.privateKey) {
      opts.privateKey = this.loadUserData().appPrivateKey;
    }
    return decryptContent(content, opts);
  }
  signUserOut(redirectURL) {
    this.store.deleteSessionData();
    if (redirectURL) {
      if (typeof location !== "undefined" && location.href) {
        location.href = redirectURL;
      }
    }
  }
}
UserSession.prototype.makeAuthRequest = UserSession.prototype.makeAuthRequestToken;
function getStacksProvider() {
  return window.StacksProvider || window.BlockstackProvider;
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function() {
    return exports;
  };
  var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function(obj, key, desc) {
    obj[key] = desc.value;
  }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self2, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self2, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {
  }
  function GeneratorFunction() {
  }
  function GeneratorFunctionPrototype() {
  }
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function() {
    return this;
  });
  var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg, value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
          invoke("next", value2, resolve, reject);
        }, function(err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function(unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function(error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self2, context) {
    var state = "suspendedStart";
    return function(method, arg) {
      if ("executing" === state)
        throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method)
          throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg; ; ) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel)
              continue;
            return delegateResult;
          }
        }
        if ("next" === context.method)
          context.sent = context._sent = context.arg;
        else if ("throw" === context.method) {
          if ("suspendedStart" === state)
            throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else
          "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self2, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel)
            continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method, method = delegate.iterator[methodName];
    if (void 0 === method)
      return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = void 0, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type)
      return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = void 0), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(true);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod)
        return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next)
        return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1, next = function next2() {
          for (; ++i < iterable.length; )
            if (hasOwn.call(iterable, i))
              return next2.value = iterable[i], next2.done = false, next2;
          return next2.value = void 0, next2.done = true, next2;
        };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: void 0,
      done: true
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: true
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: true
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function(genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function(genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function(arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self2, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function() {
    return this;
  }), define(Gp, "toString", function() {
    return "[object Generator]";
  }), exports.keys = function(val) {
    var object = Object(val), keys = [];
    for (var key in object)
      keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length; ) {
        var key2 = keys.pop();
        if (key2 in object)
          return next.value = key2, next.done = false, next;
      }
      return next.done = true, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !skipTempReset)
        for (var name in this)
          "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
    },
    stop: function() {
      this.done = true;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type)
        throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function(exception) {
      if (this.done)
        throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = void 0), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i], record = entry.completion;
        if ("root" === entry.tryLoc)
          return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc)
              return handle(entry.catchLoc, true);
            if (this.prev < entry.finallyLoc)
              return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc)
              return handle(entry.catchLoc, true);
          } else {
            if (!hasFinally)
              throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc)
              return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function(record, afterLoc) {
      if ("throw" === record.type)
        throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc)
          return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName,
        nextLoc
      }, "next" === this.method && (this.arg = void 0), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self2 = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self2, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var version = "7.2.1";
if (typeof window !== "undefined") {
  window.__CONNECT_VERSION__ = version;
}
var getOrCreateUserSession = function getOrCreateUserSession2(userSession2) {
  if (!userSession2) {
    var appConfig2 = new AppConfig(["store_write"], document.location.href);
    userSession2 = new UserSession({
      appConfig: appConfig2
    });
  }
  return userSession2;
};
var authenticate = /* @__PURE__ */ function() {
  var _ref = /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(authOptions) {
    var provider, _authOptions$redirect, redirectTo, manifestPath, onFinish, onCancel, _authOptions$sendToSi, sendToSignIn, _userSession, appDetails2, userSession2, transitKey, authRequest, authResponse, token, payload, authResponsePayload;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1)
        switch (_context.prev = _context.next) {
          case 0:
            provider = getStacksProvider();
            if (provider) {
              _context.next = 3;
              break;
            }
            throw new Error("Unable to authenticate without Hiro Wallet extension");
          case 3:
            _authOptions$redirect = authOptions.redirectTo, redirectTo = _authOptions$redirect === void 0 ? "/" : _authOptions$redirect, manifestPath = authOptions.manifestPath, onFinish = authOptions.onFinish, onCancel = authOptions.onCancel, _authOptions$sendToSi = authOptions.sendToSignIn, sendToSignIn = _authOptions$sendToSi === void 0 ? false : _authOptions$sendToSi, _userSession = authOptions.userSession, appDetails2 = authOptions.appDetails;
            userSession2 = getOrCreateUserSession(_userSession);
            if (userSession2.isUserSignedIn()) {
              userSession2.signUserOut();
            }
            transitKey = userSession2.generateAndStoreTransitKey();
            authRequest = userSession2.makeAuthRequest(transitKey, "" + document.location.origin + redirectTo, "" + document.location.origin + manifestPath, userSession2.appConfig.scopes, void 0, void 0, {
              sendToSignIn,
              appDetails: appDetails2,
              connectVersion: version
            });
            _context.prev = 8;
            _context.next = 11;
            return provider.authenticationRequest(authRequest);
          case 11:
            authResponse = _context.sent;
            _context.next = 14;
            return userSession2.handlePendingSignIn(authResponse);
          case 14:
            token = lib.decodeToken(authResponse);
            payload = token == null ? void 0 : token.payload;
            authResponsePayload = payload;
            onFinish == null ? void 0 : onFinish({
              authResponse,
              authResponsePayload,
              userSession: userSession2
            });
            _context.next = 24;
            break;
          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](8);
            console.error("[Connect] Error during auth request", _context.t0);
            onCancel == null ? void 0 : onCancel();
          case 24:
          case "end":
            return _context.stop();
        }
    }, _callee, null, [[8, 20]]);
  }));
  return function authenticate2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var TransactionTypes;
(function(TransactionTypes2) {
  TransactionTypes2["ContractCall"] = "contract_call";
  TransactionTypes2["ContractDeploy"] = "smart_contract";
  TransactionTypes2["STXTransfer"] = "token_transfer";
})(TransactionTypes || (TransactionTypes = {}));
var ContractCallArgumentType;
(function(ContractCallArgumentType2) {
  ContractCallArgumentType2["BUFFER"] = "buffer";
  ContractCallArgumentType2["UINT"] = "uint";
  ContractCallArgumentType2["INT"] = "int";
  ContractCallArgumentType2["PRINCIPAL"] = "principal";
  ContractCallArgumentType2["BOOL"] = "bool";
})(ContractCallArgumentType || (ContractCallArgumentType = {}));
var _excluded$1 = ["functionArgs", "appDetails", "userSession"];
var getUserSession = function getUserSession2(_userSession) {
  var userSession2 = _userSession;
  if (!userSession2) {
    var appConfig2 = new AppConfig(["store_write"], document.location.href);
    userSession2 = new UserSession({
      appConfig: appConfig2
    });
  }
  return userSession2;
};
function hasAppPrivateKey(userSession2) {
  try {
    var session = getUserSession(userSession2).loadUserData();
    return session.appPrivateKey;
  } catch (e) {
    return false;
  }
}
var getKeys = function getKeys2(_userSession) {
  var userSession2 = getUserSession(_userSession);
  var privateKey = userSession2.loadUserData().appPrivateKey;
  var publicKey = lib.SECP256K1Client.derivePublicKey(privateKey);
  return {
    privateKey,
    publicKey
  };
};
function getStxAddress$1(options) {
  var _userSession$loadUser, _chainIdToKey;
  var stxAddress = options.stxAddress, userSession2 = options.userSession, network = options.network;
  if (stxAddress)
    return stxAddress;
  if (!userSession2 || !network)
    return void 0;
  var stxAddresses = userSession2 == null ? void 0 : (_userSession$loadUser = userSession2.loadUserData().profile) == null ? void 0 : _userSession$loadUser.stxAddress;
  var chainIdToKey = (_chainIdToKey = {}, _chainIdToKey[ChainID.Mainnet] = "mainnet", _chainIdToKey[ChainID.Testnet] = "testnet", _chainIdToKey);
  var address2 = stxAddresses == null ? void 0 : stxAddresses[chainIdToKey[network.chainId]];
  return address2;
}
function getDefaults(options) {
  var network = options.network || new StacksTestnet();
  var userSession2 = getUserSession(options.userSession);
  var defaults = _extends({}, options, {
    network,
    userSession: userSession2
  });
  return _extends({
    stxAddress: getStxAddress$1(defaults)
  }, defaults);
}
function encodePostConditions(postConditions) {
  return postConditions.map(function(pc) {
    return bytesToHex$1(serializePostCondition(pc));
  });
}
function signPayload$1(_x, _x2) {
  return _signPayload$1.apply(this, arguments);
}
function _signPayload$1() {
  _signPayload$1 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee5(payload, privateKey) {
    var postConditions, tokenSigner;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1)
        switch (_context5.prev = _context5.next) {
          case 0:
            postConditions = payload.postConditions;
            if (postConditions && typeof postConditions[0] !== "string") {
              postConditions = encodePostConditions(postConditions);
            }
            tokenSigner = new lib.TokenSigner("ES256k", privateKey);
            return _context5.abrupt("return", tokenSigner.signAsync(_extends({}, payload, {
              postConditions
            })));
          case 4:
          case "end":
            return _context5.stop();
        }
    }, _callee5);
  }));
  return _signPayload$1.apply(this, arguments);
}
function createUnsignedTransactionPayload(payload) {
  var postConditions = payload.postConditions;
  if (postConditions && typeof postConditions[0] !== "string") {
    postConditions = encodePostConditions(postConditions);
  }
  return lib.createUnsecuredToken(_extends({}, payload, {
    postConditions
  }));
}
var openTransactionPopup = /* @__PURE__ */ function() {
  var _ref2 = /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(_ref) {
    var token, options, provider, txResponse, txRaw, txBytes, stacksTransaction;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1)
        switch (_context.prev = _context.next) {
          case 0:
            token = _ref.token, options = _ref.options;
            provider = getStacksProvider();
            if (provider) {
              _context.next = 4;
              break;
            }
            throw new Error("Hiro Wallet not installed");
          case 4:
            _context.prev = 4;
            _context.next = 7;
            return provider.transactionRequest(token);
          case 7:
            txResponse = _context.sent;
            txRaw = txResponse.txRaw;
            txBytes = hexToBytes$1(txRaw.replace(/^0x/, ""));
            stacksTransaction = deserializeTransaction(txBytes);
            if (!("sponsored" in options && options.sponsored)) {
              _context.next = 14;
              break;
            }
            options.onFinish == null ? void 0 : options.onFinish(_extends({}, txResponse, {
              stacksTransaction
            }));
            return _context.abrupt("return");
          case 14:
            options.onFinish == null ? void 0 : options.onFinish(_extends({}, txResponse, {
              stacksTransaction
            }));
            _context.next = 21;
            break;
          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](4);
            console.error("[Connect] Error during transaction request", _context.t0);
            options.onCancel == null ? void 0 : options.onCancel();
          case 21:
          case "end":
            return _context.stop();
        }
    }, _callee, null, [[4, 17]]);
  }));
  return function openTransactionPopup2(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
var makeContractCallToken = /* @__PURE__ */ function() {
  var _ref3 = /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee2(options) {
    var functionArgs, appDetails2, userSession2, _options, args, _getKeys, privateKey, publicKey, payload2, payload;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1)
        switch (_context2.prev = _context2.next) {
          case 0:
            functionArgs = options.functionArgs, appDetails2 = options.appDetails, userSession2 = options.userSession, _options = _objectWithoutPropertiesLoose(options, _excluded$1);
            args = functionArgs.map(function(arg) {
              if (typeof arg === "string") {
                return arg;
              }
              return bytesToHex$1(serializeCV(arg));
            });
            if (!hasAppPrivateKey(userSession2)) {
              _context2.next = 7;
              break;
            }
            _getKeys = getKeys(userSession2), privateKey = _getKeys.privateKey, publicKey = _getKeys.publicKey;
            payload2 = _extends({}, _options, {
              functionArgs: args,
              txType: TransactionTypes.ContractCall,
              publicKey
            });
            if (appDetails2)
              payload2.appDetails = appDetails2;
            return _context2.abrupt("return", signPayload$1(payload2, privateKey));
          case 7:
            payload = _extends({}, _options, {
              functionArgs: args,
              txType: TransactionTypes.ContractCall
            });
            if (appDetails2)
              payload.appDetails = appDetails2;
            return _context2.abrupt("return", createUnsignedTransactionPayload(payload));
          case 10:
          case "end":
            return _context2.stop();
        }
    }, _callee2);
  }));
  return function makeContractCallToken2(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
function generateTokenAndOpenPopup$1(_x7, _x8) {
  return _generateTokenAndOpenPopup$1.apply(this, arguments);
}
function _generateTokenAndOpenPopup$1() {
  _generateTokenAndOpenPopup$1 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee6(options, makeTokenFn) {
    var token;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1)
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return makeTokenFn(_extends({}, getDefaults(options), options));
          case 2:
            token = _context6.sent;
            return _context6.abrupt("return", openTransactionPopup({
              token,
              options
            }));
          case 4:
          case "end":
            return _context6.stop();
        }
    }, _callee6);
  }));
  return _generateTokenAndOpenPopup$1.apply(this, arguments);
}
function openContractCall(options) {
  return generateTokenAndOpenPopup$1(options, makeContractCallToken);
}
var _excluded = ["userSession"];
function getStxAddress(options) {
  var _userSession$loadUser, _chainIdToKey;
  var userSession2 = options.userSession, network = options.network;
  if (!userSession2 || !network)
    return void 0;
  var stxAddresses = userSession2 == null ? void 0 : (_userSession$loadUser = userSession2.loadUserData().profile) == null ? void 0 : _userSession$loadUser.stxAddress;
  var chainIdToKey = (_chainIdToKey = {}, _chainIdToKey[ChainID.Mainnet] = "mainnet", _chainIdToKey[ChainID.Testnet] = "testnet", _chainIdToKey);
  var address2 = stxAddresses == null ? void 0 : stxAddresses[chainIdToKey[network.chainId]];
  return address2;
}
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
function getDefaultSignatureRequestOptions(options) {
  var network = options.network || new StacksTestnet();
  var userSession2 = getUserSession(options.userSession);
  var defaults = _extends({}, options, {
    network,
    userSession: userSession2
  });
  return _extends({
    stxAddress: getStxAddress(defaults)
  }, defaults);
}
function openSignaturePopup(_x3) {
  return _openSignaturePopup.apply(this, arguments);
}
function _openSignaturePopup() {
  _openSignaturePopup = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee3(_ref) {
    var token, options, provider, signatureResponse;
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
            throw new Error("Hiro Wallet not installed.");
          case 4:
            _context3.prev = 4;
            _context3.next = 7;
            return provider.signatureRequest(token);
          case 7:
            signatureResponse = _context3.sent;
            options.onFinish == null ? void 0 : options.onFinish(signatureResponse);
            _context3.next = 15;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](4);
            console.error("[Connect] Error during signature request", _context3.t0);
            options.onCancel == null ? void 0 : options.onCancel();
          case 15:
          case "end":
            return _context3.stop();
        }
    }, _callee3, null, [[4, 11]]);
  }));
  return _openSignaturePopup.apply(this, arguments);
}
var signMessage$1 = /* @__PURE__ */ function() {
  var _ref2 = /* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(options) {
    var userSession2, _options, _getKeys, privateKey, publicKey, payload2, payload;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1)
        switch (_context.prev = _context.next) {
          case 0:
            userSession2 = options.userSession, _options = _objectWithoutPropertiesLoose(options, _excluded);
            if (!hasAppPrivateKey(userSession2)) {
              _context.next = 5;
              break;
            }
            _getKeys = getKeys(userSession2), privateKey = _getKeys.privateKey, publicKey = _getKeys.publicKey;
            payload2 = _extends({}, _options, {
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
  return function signMessage2(_x4) {
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
            return makeTokenFn(_extends({}, getDefaultSignatureRequestOptions(options), options));
          case 2:
            token = _context4.sent;
            return _context4.abrupt("return", openSignaturePopup({
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
function openSignatureRequestPopup(options) {
  return generateTokenAndOpenPopup(options, signMessage$1);
}
const NAMESPACE = "connect-ui";
let scopeId;
let hostTagName;
let isSvgMode = false;
let queuePending = false;
const createTime = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
const uniqueTime = (key, measureText) => {
  {
    return () => {
      return;
    };
  }
};
const HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
const EMPTY_OBJ = {};
const isDef = (v) => v != null;
const isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};
function queryNonceMetaTagContent(doc2) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc2.head) === null || _a === void 0 ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) === null || _b === void 0 ? void 0 : _b.getAttribute("content")) !== null && _c !== void 0 ? _c : void 0;
}
const h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i = 0; i < c.length; i++) {
      child = c[i];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  return vnode;
};
const newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  return vnode;
};
const Host = {};
const isHost = (node) => node && node.$tag$ === Host;
const parsePropertyValue = (propValue, propType) => {
  if (propValue != null && !isComplexType(propValue)) {
    return propValue;
  }
  return propValue;
};
const getElement = (ref) => getHostRef(ref).$hostElement$;
const emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
const rootAppliedStyles = /* @__PURE__ */ new WeakMap();
const registerStyle = (scopeId2, cssText, allowCS) => {
  let style = styles.get(scopeId2);
  if (supportsConstructableStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    if (typeof style === "string") {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }
  styles.set(scopeId2, style);
};
const addStyle = (styleContainerNode, cmpMeta, mode, hostElm) => {
  var _a;
  let scopeId2 = getScopeId(cmpMeta);
  const style = styles.get(scopeId2);
  styleContainerNode = styleContainerNode.nodeType === 11 ? styleContainerNode : doc;
  if (style) {
    if (typeof style === "string") {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        {
          {
            styleElm = doc.createElement("style");
            styleElm.innerHTML = style;
          }
          const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
          if (nonce != null) {
            styleElm.setAttribute("nonce", nonce);
          }
          styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector("link"));
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
      styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
    }
  }
  return scopeId2;
};
const attachStyles = (hostRef) => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle(elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta);
  if (flags & 10) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
  }
  endAttachStyles();
};
const getScopeId = (cmp, mode) => "sc-" + cmp.$tagName$;
const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
  if (oldValue !== newValue) {
    let isProp = isMemberInElement(elm, memberName);
    let ln = memberName.toLowerCase();
    if (memberName === "class") {
      const classList = elm.classList;
      const oldClasses = parseClassList(oldValue);
      const newClasses = parseClassList(newValue);
      classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
    } else if (!isProp && memberName[0] === "o" && memberName[1] === "n") {
      if (memberName[2] === "-") {
        memberName = memberName.slice(3);
      } else if (isMemberInElement(win, ln)) {
        memberName = ln.slice(2);
      } else {
        memberName = ln[2] + memberName.slice(3);
      }
      if (oldValue) {
        plt.rel(elm, memberName, oldValue, false);
      }
      if (newValue) {
        plt.ael(elm, memberName, newValue, false);
      }
    } else {
      const isComplex = isComplexType(newValue);
      if ((isProp || isComplex && newValue !== null) && !isSvg) {
        try {
          if (!elm.tagName.includes("-")) {
            const n = newValue == null ? "" : newValue;
            if (memberName === "list") {
              isProp = false;
            } else if (oldValue == null || elm[memberName] != n) {
              elm[memberName] = n;
            }
          } else {
            elm[memberName] = newValue;
          }
        } catch (e) {
        }
      }
      if (newValue == null || newValue === false) {
        if (newValue !== false || elm.getAttribute(memberName) === "") {
          {
            elm.removeAttribute(memberName);
          }
        }
      } else if ((!isProp || flags & 4 || isSvg) && !isComplex) {
        newValue = newValue === true ? "" : newValue;
        {
          elm.setAttribute(memberName, newValue);
        }
      }
    }
  }
};
const parseClassListRegex = /\s/;
const parseClassList = (value) => !value ? [] : value.split(parseClassListRegex);
const updateElement = (oldVnode, newVnode, isSvgMode2, memberName) => {
  const elm = newVnode.$elm$.nodeType === 11 && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || EMPTY_OBJ;
  const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
  {
    for (memberName in oldVnodeAttrs) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], void 0, isSvgMode2, newVnode.$flags$);
      }
    }
  }
  for (memberName in newVnodeAttrs) {
    setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode2, newVnode.$flags$);
  }
};
const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i = 0;
  let elm;
  let childNode;
  if (newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = doc.createTextNode(newVNode2.$text$);
  } else {
    elm = newVNode2.$elm$ = doc.createElement(newVNode2.$tag$);
    {
      updateElement(null, newVNode2, isSvgMode);
    }
    if (isDef(scopeId) && elm["s-si"] !== scopeId) {
      elm.classList.add(elm["s-si"] = scopeId);
    }
    if (newVNode2.$children$) {
      for (i = 0; i < newVNode2.$children$.length; ++i) {
        childNode = createElm(oldParentVNode, newVNode2, i);
        if (childNode) {
          elm.appendChild(childNode);
        }
      }
    }
  }
  return elm;
};
const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        containerElm.insertBefore(childNode, before);
      }
    }
  }
};
const removeVnodes = (vnodes, startIdx, endIdx, vnode, elm) => {
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnode = vnodes[startIdx]) {
      elm = vnode.$elm$;
      elm.remove();
    }
  }
};
const updateChildren = (parentElm, oldCh, newVNode2, newCh) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode)) {
      patch(oldStartVnode, newStartVnode);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode)) {
      patch(oldEndVnode, newEndVnode);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode)) {
      patch(oldStartVnode, newEndVnode);
      parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode)) {
      patch(oldEndVnode, newStartVnode);
      parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode2, newCh, newStartIdx, newEndIdx);
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
const isSameVnode = (leftVNode, rightVNode) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    return true;
  }
  return false;
};
const patch = (oldVNode, newVNode2) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const text = newVNode2.$text$;
  if (text === null) {
    {
      {
        updateElement(oldVNode, newVNode2, isSvgMode);
      }
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren);
    } else if (newChildren !== null) {
      if (oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (oldChildren !== null) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    }
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
const renderVdom = (hostRef, renderFnResults) => {
  const hostElm = hostRef.$hostElement$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm;
  {
    scopeId = hostElm["s-sc"];
  }
  patch(oldVNode, rootVnode);
};
const attachToAncestor = (hostRef, ancestorComponent) => {
  if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    ancestorComponent["s-p"].push(new Promise((r) => hostRef.$onRenderResolve$ = r));
  }
};
const scheduleUpdate = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16;
  }
  if (hostRef.$flags$ & 4) {
    hostRef.$flags$ |= 512;
    return;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  return writeTask(dispatch);
};
const dispatchHooks = (hostRef, isInitialLoad) => {
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = hostRef.$lazyInstance$;
  let promise;
  endSchedule();
  return then(promise, () => updateComponent(hostRef, instance, isInitialLoad));
};
const updateComponent = async (hostRef, instance, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
  const rc = elm["s-rc"];
  if (isInitialLoad) {
    attachStyles(hostRef);
  }
  const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
  {
    callRender(hostRef, instance);
  }
  if (rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  {
    const childrenPromises = elm["s-p"];
    const postUpdate = () => postUpdateComponent(hostRef);
    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate);
      hostRef.$flags$ |= 4;
      childrenPromises.length = 0;
    }
  }
};
const callRender = (hostRef, instance, elm) => {
  try {
    instance = instance.render();
    {
      hostRef.$flags$ &= ~16;
    }
    {
      hostRef.$flags$ |= 2;
    }
    {
      {
        {
          renderVdom(hostRef, instance);
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  return null;
};
const postUpdateComponent = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const ancestorComponent = hostRef.$ancestorComponent$;
  if (!(hostRef.$flags$ & 64)) {
    hostRef.$flags$ |= 64;
    {
      addHydratedFlag(elm);
    }
    endPostUpdate();
    {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad();
      }
    }
  } else {
    endPostUpdate();
  }
  {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= ~(4 | 512);
  }
};
const appDidLoad = (who) => {
  {
    addHydratedFlag(doc.documentElement);
  }
  nextTick(() => emitEvent(win, "appload", { detail: { namespace: NAMESPACE } }));
};
const then = (promise, thenFn) => {
  return promise && promise.then ? promise.then(thenFn) : thenFn();
};
const addHydratedFlag = (elm) => elm.classList.add("hydrated");
const getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
const setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = hostRef.$lazyInstance$;
  newVal = parsePropertyValue(newVal);
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!(flags & 8) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (instance) {
      if ((flags & (2 | 16)) === 2) {
        scheduleUpdate(hostRef, false);
      }
    }
  }
};
const proxyComponent = (Cstr, cmpMeta, flags) => {
  if (cmpMeta.$members$) {
    const members = Object.entries(cmpMeta.$members$);
    const prototype = Cstr.prototype;
    members.map(([memberName, [memberFlags]]) => {
      if (memberFlags & 31 || flags & 2 && memberFlags & 32) {
        Object.defineProperty(prototype, memberName, {
          get() {
            return getValue(this, memberName);
          },
          set(newValue) {
            setValue(this, memberName, newValue);
          },
          configurable: true,
          enumerable: true
        });
      }
    });
  }
  return Cstr;
};
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
  if ((hostRef.$flags$ & 32) === 0) {
    {
      hostRef.$flags$ |= 32;
      Cstr = loadModule(cmpMeta);
      if (Cstr.then) {
        const endLoad = uniqueTime();
        Cstr = await Cstr;
        endLoad();
      }
      if (!Cstr.isProxied) {
        proxyComponent(
          Cstr,
          cmpMeta,
          2
          /* PROXY_FLAGS.proxyState */
        );
        Cstr.isProxied = true;
      }
      const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
      {
        hostRef.$flags$ |= 8;
      }
      try {
        new Cstr(hostRef);
      } catch (e) {
        consoleError(e);
      }
      {
        hostRef.$flags$ &= ~8;
      }
      endNewInstance();
    }
    if (Cstr.style) {
      let style = Cstr.style;
      const scopeId2 = getScopeId(cmpMeta);
      if (!styles.has(scopeId2)) {
        const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
        registerStyle(scopeId2, style, !!(cmpMeta.$flags$ & 1));
        endRegisterStyles();
      }
    }
  }
  const ancestorComponent = hostRef.$ancestorComponent$;
  const schedule = () => scheduleUpdate(hostRef, true);
  if (ancestorComponent && ancestorComponent["s-rc"]) {
    ancestorComponent["s-rc"].push(schedule);
  } else {
    schedule();
  }
};
const connectedCallback = (elm) => {
  if ((plt.$flags$ & 1) === 0) {
    const hostRef = getHostRef(elm);
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1)) {
      hostRef.$flags$ |= 1;
      {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (ancestorComponent["s-p"]) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      if (cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    }
    endConnected();
  }
};
const disconnectedCallback = (elm) => {
  if ((plt.$flags$ & 1) === 0) {
    getHostRef(elm);
  }
};
const bootstrapLazy = (lazyBundles, options = {}) => {
  var _a;
  const endBootstrap = createTime();
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements = win.customElements;
  const head = doc.head;
  const metaCharset = /* @__PURE__ */ head.querySelector("meta[charset]");
  const visibilityStyle = /* @__PURE__ */ doc.createElement("style");
  const deferredConnectedCallbacks = [];
  let appLoadFallback;
  let isBootstrapping = true;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", doc.baseURI).href;
  lazyBundles.map((lazyBundle) => {
    lazyBundle[1].map((compactMeta) => {
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
      {
        cmpMeta.$members$ = compactMeta[2];
      }
      const tagName = cmpMeta.$tagName$;
      const HostElement = class extends HTMLElement {
        // StencilLazyHost
        constructor(self2) {
          super(self2);
          self2 = this;
          registerHost(self2, cmpMeta);
          if (cmpMeta.$flags$ & 1) {
            {
              {
                self2.attachShadow({ mode: "open" });
              }
            }
          }
        }
        connectedCallback() {
          if (appLoadFallback) {
            clearTimeout(appLoadFallback);
            appLoadFallback = null;
          }
          if (isBootstrapping) {
            deferredConnectedCallbacks.push(this);
          } else {
            plt.jmp(() => connectedCallback(this));
          }
        }
        disconnectedCallback() {
          plt.jmp(() => disconnectedCallback(this));
        }
        componentOnReady() {
          return getHostRef(this).$onReadyPromise$;
        }
      };
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements.get(tagName)) {
        cmpTags.push(tagName);
        customElements.define(tagName, proxyComponent(
          HostElement,
          cmpMeta,
          1
          /* PROXY_FLAGS.isElementConstructor */
        ));
      }
    });
  });
  {
    visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
    visibilityStyle.setAttribute("data-styles", "");
    const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
    if (nonce != null) {
      visibilityStyle.setAttribute("nonce", nonce);
    }
    head.insertBefore(visibilityStyle, metaCharset ? metaCharset.nextSibling : head.firstChild);
  }
  isBootstrapping = false;
  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map((host) => host.connectedCallback());
  } else {
    {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30));
    }
  }
  endBootstrap();
};
const hostRefs = /* @__PURE__ */ new WeakMap();
const getHostRef = (ref) => hostRefs.get(ref);
const registerInstance = (lazyInstance, hostRef) => hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef);
const registerHost = (elm, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: elm,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    elm["s-p"] = [];
    elm["s-rc"] = [];
  }
  return hostRefs.set(elm, hostRef);
};
const isMemberInElement = (elm, memberName) => memberName in elm;
const consoleError = (e, el) => (0, console.error)(e, el);
const cmpModules = /* @__PURE__ */ new Map();
const loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  const module = cmpModules.get(bundleId);
  if (module) {
    return module[exportName];
  }
  if (!hmrVersionId || !BUILD.hotModuleReplacement) {
    const processMod = (importedModule) => {
      cmpModules.set(bundleId, importedModule);
      return importedModule[exportName];
    };
    switch (bundleId) {
      case "connect-modal":
        return __vitePreload(() => import(
          /* webpackMode: "lazy" */
          "./connect-modal.entry.13b6ed58.js"
        ), true ? [] : void 0, import.meta.url).then(processMod, consoleError);
    }
  }
  return __vitePreload(() => import(
    /* @vite-ignore */
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    `./${bundleId}.entry.js${""}`
  ), true ? [] : void 0, import.meta.url).then((importedModule) => {
    {
      cmpModules.set(bundleId, importedModule);
    }
    return importedModule[exportName];
  }, consoleError);
};
const styles = /* @__PURE__ */ new Map();
const win = typeof window !== "undefined" ? window : {};
const doc = win.document || { head: {} };
const plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
const promiseResolve = (v) => Promise.resolve(v);
const supportsConstructableStylesheets = /* @__PURE__ */ (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})();
const queueDomReads = [];
const queueDomWrites = [];
const queueTask = (queue, write) => (cb) => {
  queue.push(cb);
  if (!queuePending) {
    queuePending = true;
    if (write && plt.$flags$ & 4) {
      nextTick(flush);
    } else {
      plt.raf(flush);
    }
  }
};
const consume = (queue) => {
  for (let i = 0; i < queue.length; i++) {
    try {
      queue[i](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  queue.length = 0;
};
const flush = () => {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
const nextTick = (cb) => promiseResolve().then(cb);
const writeTask = /* @__PURE__ */ queueTask(queueDomWrites, true);
const patchEsm = () => {
  return promiseResolve();
};
const defineCustomElements = (win2, options) => {
  if (typeof window === "undefined")
    return Promise.resolve();
  return patchEsm().then(() => {
    return bootstrapLazy([["connect-modal", [[1, "connect-modal", { "authOptions": [16], "hasOpenedInstall": [32], "hasOpenedInstallXverse": [32] }]]]], options);
  });
};
(function() {
  if ("undefined" !== typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
    var a = HTMLElement;
    window.HTMLElement = function() {
      return Reflect.construct(a, [], this.constructor);
    };
    HTMLElement.prototype = a.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, a);
  }
})();
var showConnect = function showConnect2(authOptions) {
  if (getStacksProvider()) {
    void authenticate(authOptions);
    return;
  }
  if (typeof window !== void 0) {
    void defineCustomElements();
    var element = document.createElement("connect-modal");
    element.authOptions = authOptions;
    document.body.appendChild(element);
    var handleEsc = function handleEsc2(ev) {
      if (ev.key === "Escape") {
        document.removeEventListener("keydown", handleEsc2);
        element.remove();
      }
    };
    document.addEventListener("keydown", handleEsc);
  }
};
const appConfig = new AppConfig(["store_write", "publish_data"]);
const userSession = new UserSession({ appConfig });
function getStacksNetwork() {
  let stxNetwork;
  stxNetwork = new StacksMainnet();
  return stxNetwork;
}
function decodeStacksAddress(stxAddress) {
  if (!stxAddress)
    throw new Error("Needs a stacks address");
  const decoded = lib$1.c32addressDecode(stxAddress);
  return decoded;
}
async function fetchSbtcBalance() {
  const adrds = addresses();
  const result = await fetchUserSbtcBalance(adrds.stxAddress);
  sbtcConfig.update((conf) => {
    if (conf.pegInTransaction) {
      conf.pegInTransaction.pegInData.stacksAddress = adrds.stxAddress;
      conf.pegInTransaction.fromBtcAddress = adrds.cardinal;
    }
    if (conf.pegOutTransaction) {
      conf.pegOutTransaction.pegInData.stacksAddress = adrds.stxAddress;
      conf.pegOutTransaction.fromBtcAddress = adrds.cardinal;
    }
    conf.loggedIn = true;
    conf.balance = result;
    conf.balance.address = adrds.stxAddress;
    conf.balance.cardinal = adrds.cardinal;
    conf.balance.ordinal = adrds.ordinal;
    conf.loggedIn = true;
    return conf;
  });
}
function addresses() {
  const userData = userSession.loadUserData();
  const network = "mainnet";
  const addr = network === "testnet" ? userData.profile.stxAddress.testnet : userData.profile.stxAddress.mainnet;
  const cardinal = network === "testnet" ? userData.profile.btcAddress.p2wpkh.testnet : userData.profile.btcAddress.p2wpkh.mainnet;
  const ordinal = network === "testnet" ? userData.profile.btcAddress.p2tr.testnet : userData.profile.btcAddress.p2tr.mainnet;
  return {
    stxAddress: addr,
    cardinal,
    ordinal
  };
}
const appDetails = {
  name: "sBTC Client",
  icon: "/img/logo.png"
};
async function loginStacksJs() {
  try {
    if (!userSession.isUserSignedIn()) {
      showConnect({
        userSession,
        appDetails,
        onFinish: async () => {
          await fetchSbtcBalance();
        },
        onCancel: () => {
        }
      });
    } else {
      return await fetchSbtcBalance();
    }
  } catch (e) {
    if (window)
      window.location.href = "https://wallet.hiro.so/wallet/install-web";
  }
}
function logUserOut() {
  return userSession.signUserOut();
}
function signMessage(callback, script) {
  openSignatureRequestPopup({
    message: script,
    network: getStacksNetwork(),
    // for mainnet, `new StacksMainnet()`
    appDetails,
    onFinish(value) {
      console.log("Signature of the message", value.signature);
      console.log("Use public key:", value.publicKey);
      callback(value, script);
    }
  });
}
export {
  hexToBytes$1 as A,
  registerInstance as B,
  h as C,
  getElement as D,
  PostConditionMode as P,
  StacksTestnet as S,
  _asyncToGenerator as _,
  addresses as a,
  loginStacksJs as b,
  uintCV as c,
  bufferCVFromString as d,
  utils as e,
  getPublicKey$1 as f,
  getStacksNetwork as g,
  schnorr as h,
  signMessage as i,
  decodeStacksAddress as j,
  _regeneratorRuntime as k,
  logUserOut as l,
  _extends as m,
  getUserSession as n,
  openContractCall as o,
  principalCV as p,
  getStacksProvider as q,
  lib as r,
  stringAsciiCV as s,
  tupleCV as t,
  userSession as u,
  _objectWithoutPropertiesLoose as v,
  hasAppPrivateKey as w,
  getKeys as x,
  commonjsGlobal as y,
  getDefaultExportFromCjs as z
};
