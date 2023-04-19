var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { M as hmac, N as concatBytes$2, O as randomBytes, Q as sha256, R as wrapConstructor, T as SHA2, n as utils, q as getPublicKey, r as schnorr$1, C as CONFIG, y as decodeStacksAddress } from "./stacks_connect.b652bb6f.js";
/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function assertNumber(n) {
  if (!Number.isSafeInteger(n))
    throw new Error(`Wrong integer: ${n}`);
}
function chain(...args) {
  const wrap2 = (a, b) => (c) => a(b(c));
  const encode = Array.from(args).reverse().reduce((acc, i) => acc ? wrap2(acc, i.encode) : i.encode, void 0);
  const decode = args.reduce((acc, i) => acc ? wrap2(acc, i.decode) : i.decode, void 0);
  return { encode, decode };
}
function alphabet(alphabet2) {
  return {
    encode: (digits) => {
      if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
        throw new Error("alphabet.encode input should be an array of numbers");
      return digits.map((i) => {
        assertNumber(i);
        if (i < 0 || i >= alphabet2.length)
          throw new Error(`Digit index outside alphabet: ${i} (alphabet: ${alphabet2.length})`);
        return alphabet2[i];
      });
    },
    decode: (input) => {
      if (!Array.isArray(input) || input.length && typeof input[0] !== "string")
        throw new Error("alphabet.decode input should be array of strings");
      return input.map((letter) => {
        if (typeof letter !== "string")
          throw new Error(`alphabet.decode: not string element=${letter}`);
        const index = alphabet2.indexOf(letter);
        if (index === -1)
          throw new Error(`Unknown letter: "${letter}". Allowed: ${alphabet2}`);
        return index;
      });
    }
  };
}
function join(separator = "") {
  if (typeof separator !== "string")
    throw new Error("join separator should be string");
  return {
    encode: (from) => {
      if (!Array.isArray(from) || from.length && typeof from[0] !== "string")
        throw new Error("join.encode input should be array of strings");
      for (let i of from)
        if (typeof i !== "string")
          throw new Error(`join.encode: non-string input=${i}`);
      return from.join(separator);
    },
    decode: (to) => {
      if (typeof to !== "string")
        throw new Error("join.decode input should be string");
      return to.split(separator);
    }
  };
}
function padding(bits, chr = "=") {
  assertNumber(bits);
  if (typeof chr !== "string")
    throw new Error("padding chr should be string");
  return {
    encode(data) {
      if (!Array.isArray(data) || data.length && typeof data[0] !== "string")
        throw new Error("padding.encode input should be array of strings");
      for (let i of data)
        if (typeof i !== "string")
          throw new Error(`padding.encode: non-string input=${i}`);
      while (data.length * bits % 8)
        data.push(chr);
      return data;
    },
    decode(input) {
      if (!Array.isArray(input) || input.length && typeof input[0] !== "string")
        throw new Error("padding.encode input should be array of strings");
      for (let i of input)
        if (typeof i !== "string")
          throw new Error(`padding.decode: non-string input=${i}`);
      let end = input.length;
      if (end * bits % 8)
        throw new Error("Invalid padding: string should have whole number of bytes");
      for (; end > 0 && input[end - 1] === chr; end--) {
        if (!((end - 1) * bits % 8))
          throw new Error("Invalid padding: string has too much padding");
      }
      return input.slice(0, end);
    }
  };
}
function normalize(fn) {
  if (typeof fn !== "function")
    throw new Error("normalize fn should be function");
  return { encode: (from) => from, decode: (to) => fn(to) };
}
function convertRadix(data, from, to) {
  if (from < 2)
    throw new Error(`convertRadix: wrong from=${from}, base cannot be less than 2`);
  if (to < 2)
    throw new Error(`convertRadix: wrong to=${to}, base cannot be less than 2`);
  if (!Array.isArray(data))
    throw new Error("convertRadix: data should be array");
  if (!data.length)
    return [];
  let pos = 0;
  const res = [];
  const digits = Array.from(data);
  digits.forEach((d) => {
    assertNumber(d);
    if (d < 0 || d >= from)
      throw new Error(`Wrong integer: ${d}`);
  });
  while (true) {
    let carry = 0;
    let done = true;
    for (let i = pos; i < digits.length; i++) {
      const digit = digits[i];
      const digitBase = from * carry + digit;
      if (!Number.isSafeInteger(digitBase) || from * carry / from !== carry || digitBase - digit !== from * carry) {
        throw new Error("convertRadix: carry overflow");
      }
      carry = digitBase % to;
      digits[i] = Math.floor(digitBase / to);
      if (!Number.isSafeInteger(digits[i]) || digits[i] * to + carry !== digitBase)
        throw new Error("convertRadix: carry overflow");
      if (!done)
        continue;
      else if (!digits[i])
        pos = i;
      else
        done = false;
    }
    res.push(carry);
    if (done)
      break;
  }
  for (let i = 0; i < data.length - 1 && data[i] === 0; i++)
    res.push(0);
  return res.reverse();
}
const gcd = (a, b) => !b ? a : gcd(b, a % b);
const radix2carry = (from, to) => from + (to - gcd(from, to));
function convertRadix2(data, from, to, padding2) {
  if (!Array.isArray(data))
    throw new Error("convertRadix2: data should be array");
  if (from <= 0 || from > 32)
    throw new Error(`convertRadix2: wrong from=${from}`);
  if (to <= 0 || to > 32)
    throw new Error(`convertRadix2: wrong to=${to}`);
  if (radix2carry(from, to) > 32) {
    throw new Error(`convertRadix2: carry overflow from=${from} to=${to} carryBits=${radix2carry(from, to)}`);
  }
  let carry = 0;
  let pos = 0;
  const mask = 2 ** to - 1;
  const res = [];
  for (const n of data) {
    assertNumber(n);
    if (n >= 2 ** from)
      throw new Error(`convertRadix2: invalid data word=${n} from=${from}`);
    carry = carry << from | n;
    if (pos + from > 32)
      throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from}`);
    pos += from;
    for (; pos >= to; pos -= to)
      res.push((carry >> pos - to & mask) >>> 0);
    carry &= 2 ** pos - 1;
  }
  carry = carry << to - pos & mask;
  if (!padding2 && pos >= from)
    throw new Error("Excess padding");
  if (!padding2 && carry)
    throw new Error(`Non-zero padding: ${carry}`);
  if (padding2 && pos > 0)
    res.push(carry >>> 0);
  return res;
}
function radix(num) {
  assertNumber(num);
  return {
    encode: (bytes2) => {
      if (!(bytes2 instanceof Uint8Array))
        throw new Error("radix.encode input should be Uint8Array");
      return convertRadix(Array.from(bytes2), 2 ** 8, num);
    },
    decode: (digits) => {
      if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
        throw new Error("radix.decode input should be array of strings");
      return Uint8Array.from(convertRadix(digits, num, 2 ** 8));
    }
  };
}
function radix2(bits, revPadding = false) {
  assertNumber(bits);
  if (bits <= 0 || bits > 32)
    throw new Error("radix2: bits should be in (0..32]");
  if (radix2carry(8, bits) > 32 || radix2carry(bits, 8) > 32)
    throw new Error("radix2: carry overflow");
  return {
    encode: (bytes2) => {
      if (!(bytes2 instanceof Uint8Array))
        throw new Error("radix2.encode input should be Uint8Array");
      return convertRadix2(Array.from(bytes2), 8, bits, !revPadding);
    },
    decode: (digits) => {
      if (!Array.isArray(digits) || digits.length && typeof digits[0] !== "number")
        throw new Error("radix2.decode input should be array of strings");
      return Uint8Array.from(convertRadix2(digits, bits, 8, revPadding));
    }
  };
}
function unsafeWrapper(fn) {
  if (typeof fn !== "function")
    throw new Error("unsafeWrapper fn should be function");
  return function(...args) {
    try {
      return fn.apply(null, args);
    } catch (e) {
    }
  };
}
function checksum(len, fn) {
  assertNumber(len);
  if (typeof fn !== "function")
    throw new Error("checksum fn should be function");
  return {
    encode(data) {
      if (!(data instanceof Uint8Array))
        throw new Error("checksum.encode: input should be Uint8Array");
      const checksum2 = fn(data).slice(0, len);
      const res = new Uint8Array(data.length + len);
      res.set(data);
      res.set(checksum2, data.length);
      return res;
    },
    decode(data) {
      if (!(data instanceof Uint8Array))
        throw new Error("checksum.decode: input should be Uint8Array");
      const payload = data.slice(0, -len);
      const newChecksum = fn(payload).slice(0, len);
      const oldChecksum = data.slice(-len);
      for (let i = 0; i < len; i++)
        if (newChecksum[i] !== oldChecksum[i])
          throw new Error("Invalid checksum");
      return payload;
    }
  };
}
const base16 = chain(radix2(4), alphabet("0123456789ABCDEF"), join(""));
const base32 = chain(radix2(5), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), padding(5), join(""));
chain(radix2(5), alphabet("0123456789ABCDEFGHIJKLMNOPQRSTUV"), padding(5), join(""));
chain(radix2(5), alphabet("0123456789ABCDEFGHJKMNPQRSTVWXYZ"), join(""), normalize((s) => s.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1")));
const base64 = chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), padding(6), join(""));
const base64url = chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), padding(6), join(""));
const genBase58 = (abc) => chain(radix(58), alphabet(abc), join(""));
const base58 = genBase58("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
genBase58("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ");
genBase58("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");
const XMR_BLOCK_LEN = [0, 2, 3, 5, 6, 7, 9, 10, 11];
const base58xmr = {
  encode(data) {
    let res = "";
    for (let i = 0; i < data.length; i += 8) {
      const block = data.subarray(i, i + 8);
      res += base58.encode(block).padStart(XMR_BLOCK_LEN[block.length], "1");
    }
    return res;
  },
  decode(str) {
    let res = [];
    for (let i = 0; i < str.length; i += 11) {
      const slice = str.slice(i, i + 11);
      const blockLen = XMR_BLOCK_LEN.indexOf(slice.length);
      const block = base58.decode(slice);
      for (let j = 0; j < block.length - blockLen; j++) {
        if (block[j] !== 0)
          throw new Error("base58xmr: wrong padding");
      }
      res = res.concat(Array.from(block.slice(block.length - blockLen)));
    }
    return Uint8Array.from(res);
  }
};
const base58check$1 = (sha2562) => chain(checksum(4, (data) => sha2562(sha2562(data))), base58);
const BECH_ALPHABET = chain(alphabet("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), join(""));
const POLYMOD_GENERATORS = [996825010, 642813549, 513874426, 1027748829, 705979059];
function bech32Polymod(pre) {
  const b = pre >> 25;
  let chk = (pre & 33554431) << 5;
  for (let i = 0; i < POLYMOD_GENERATORS.length; i++) {
    if ((b >> i & 1) === 1)
      chk ^= POLYMOD_GENERATORS[i];
  }
  return chk;
}
function bechChecksum(prefix2, words, encodingConst = 1) {
  const len = prefix2.length;
  let chk = 1;
  for (let i = 0; i < len; i++) {
    const c = prefix2.charCodeAt(i);
    if (c < 33 || c > 126)
      throw new Error(`Invalid prefix (${prefix2})`);
    chk = bech32Polymod(chk) ^ c >> 5;
  }
  chk = bech32Polymod(chk);
  for (let i = 0; i < len; i++)
    chk = bech32Polymod(chk) ^ prefix2.charCodeAt(i) & 31;
  for (let v of words)
    chk = bech32Polymod(chk) ^ v;
  for (let i = 0; i < 6; i++)
    chk = bech32Polymod(chk);
  chk ^= encodingConst;
  return BECH_ALPHABET.encode(convertRadix2([chk % 2 ** 30], 30, 5, false));
}
function genBech32(encoding) {
  const ENCODING_CONST = encoding === "bech32" ? 1 : 734539939;
  const _words = radix2(5);
  const fromWords = _words.decode;
  const toWords = _words.encode;
  const fromWordsUnsafe = unsafeWrapper(fromWords);
  function encode(prefix2, words, limit = 90) {
    if (typeof prefix2 !== "string")
      throw new Error(`bech32.encode prefix should be string, not ${typeof prefix2}`);
    if (!Array.isArray(words) || words.length && typeof words[0] !== "number")
      throw new Error(`bech32.encode words should be array of numbers, not ${typeof words}`);
    const actualLength = prefix2.length + 7 + words.length;
    if (limit !== false && actualLength > limit)
      throw new TypeError(`Length ${actualLength} exceeds limit ${limit}`);
    prefix2 = prefix2.toLowerCase();
    return `${prefix2}1${BECH_ALPHABET.encode(words)}${bechChecksum(prefix2, words, ENCODING_CONST)}`;
  }
  function decode(str, limit = 90) {
    if (typeof str !== "string")
      throw new Error(`bech32.decode input should be string, not ${typeof str}`);
    if (str.length < 8 || limit !== false && str.length > limit)
      throw new TypeError(`Wrong string length: ${str.length} (${str}). Expected (8..${limit})`);
    const lowered = str.toLowerCase();
    if (str !== lowered && str !== str.toUpperCase())
      throw new Error(`String must be lowercase or uppercase`);
    str = lowered;
    const sepIndex = str.lastIndexOf("1");
    if (sepIndex === 0 || sepIndex === -1)
      throw new Error(`Letter "1" must be present between prefix and data only`);
    const prefix2 = str.slice(0, sepIndex);
    const _words2 = str.slice(sepIndex + 1);
    if (_words2.length < 6)
      throw new Error("Data must be at least 6 characters long");
    const words = BECH_ALPHABET.decode(_words2).slice(0, -6);
    const sum = bechChecksum(prefix2, words, ENCODING_CONST);
    if (!_words2.endsWith(sum))
      throw new Error(`Invalid checksum in ${str}: expected "${sum}"`);
    return { prefix: prefix2, words };
  }
  const decodeUnsafe = unsafeWrapper(decode);
  function decodeToBytes(str) {
    const { prefix: prefix2, words } = decode(str, false);
    return { prefix: prefix2, words, bytes: fromWords(words) };
  }
  return { encode, decode, decodeToBytes, decodeUnsafe, fromWords, fromWordsUnsafe, toWords };
}
const bech32 = genBech32("bech32");
const bech32m = genBech32("bech32m");
const utf8 = {
  encode: (data) => new TextDecoder().decode(data),
  decode: (str) => new TextEncoder().encode(str)
};
const hex$1 = chain(radix2(4), alphabet("0123456789abcdef"), join(""), normalize((s) => {
  if (typeof s !== "string" || s.length % 2)
    throw new TypeError(`hex.decode: expected string, got ${typeof s} with length ${s.length}`);
  return s.toLowerCase();
}));
const CODERS = {
  utf8,
  hex: hex$1,
  base16,
  base32,
  base64,
  base64url,
  base58,
  base58xmr
};
`Invalid encoding type. Available types: ${Object.keys(CODERS).join(", ")}`;
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const _0n$4 = BigInt(0);
const _1n$4 = BigInt(1);
const _2n$2 = BigInt(2);
const u8a = (a) => a instanceof Uint8Array;
const hexes = Array.from({ length: 256 }, (v, i) => i.toString(16).padStart(2, "0"));
function bytesToHex(bytes2) {
  if (!u8a(bytes2))
    throw new Error("Uint8Array expected");
  let hex2 = "";
  for (let i = 0; i < bytes2.length; i++) {
    hex2 += hexes[bytes2[i]];
  }
  return hex2;
}
function numberToHexUnpadded(num) {
  const hex2 = num.toString(16);
  return hex2.length & 1 ? `0${hex2}` : hex2;
}
function hexToNumber(hex2) {
  if (typeof hex2 !== "string")
    throw new Error("hex string expected, got " + typeof hex2);
  return BigInt(hex2 === "" ? "0" : `0x${hex2}`);
}
function hexToBytes(hex2) {
  if (typeof hex2 !== "string")
    throw new Error("hex string expected, got " + typeof hex2);
  if (hex2.length % 2)
    throw new Error("hex string is invalid: unpadded " + hex2.length);
  const array2 = new Uint8Array(hex2.length / 2);
  for (let i = 0; i < array2.length; i++) {
    const j = i * 2;
    const hexByte = hex2.slice(j, j + 2);
    const byte = Number.parseInt(hexByte, 16);
    if (Number.isNaN(byte) || byte < 0)
      throw new Error("invalid byte sequence");
    array2[i] = byte;
  }
  return array2;
}
function bytesToNumberBE(bytes2) {
  return hexToNumber(bytesToHex(bytes2));
}
function bytesToNumberLE(bytes2) {
  if (!u8a(bytes2))
    throw new Error("Uint8Array expected");
  return hexToNumber(bytesToHex(Uint8Array.from(bytes2).reverse()));
}
const numberToBytesBE = (n, len) => hexToBytes(n.toString(16).padStart(len * 2, "0"));
const numberToBytesLE = (n, len) => numberToBytesBE(n, len).reverse();
const numberToVarBytesBE = (n) => hexToBytes(numberToHexUnpadded(n));
function ensureBytes(title, hex2, expectedLength) {
  let res;
  if (typeof hex2 === "string") {
    try {
      res = hexToBytes(hex2);
    } catch (e) {
      throw new Error(`${title} must be valid hex string, got "${hex2}". Cause: ${e}`);
    }
  } else if (u8a(hex2)) {
    res = Uint8Array.from(hex2);
  } else {
    throw new Error(`${title} must be hex string or Uint8Array`);
  }
  const len = res.length;
  if (typeof expectedLength === "number" && len !== expectedLength)
    throw new Error(`${title} expected ${expectedLength} bytes, got ${len}`);
  return res;
}
function concatBytes$1(...arrs) {
  const r = new Uint8Array(arrs.reduce((sum, a) => sum + a.length, 0));
  let pad = 0;
  arrs.forEach((a) => {
    if (!u8a(a))
      throw new Error("Uint8Array expected");
    r.set(a, pad);
    pad += a.length;
  });
  return r;
}
function equalBytes$1(b1, b2) {
  if (b1.length !== b2.length)
    return false;
  for (let i = 0; i < b1.length; i++)
    if (b1[i] !== b2[i])
      return false;
  return true;
}
function utf8ToBytes(str) {
  if (typeof str !== "string") {
    throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
  }
  return new TextEncoder().encode(str);
}
function bitLen(n) {
  let len;
  for (len = 0; n > 0n; n >>= _1n$4, len += 1)
    ;
  return len;
}
const bitGet = (n, pos) => n >> BigInt(pos) & 1n;
const bitSet = (n, pos, value) => n | (value ? _1n$4 : _0n$4) << BigInt(pos);
const bitMask = (n) => (_2n$2 << BigInt(n - 1)) - _1n$4;
const u8n = (data) => new Uint8Array(data);
const u8fr = (arr) => Uint8Array.from(arr);
function createHmacDrbg(hashLen, qByteLen, hmacFn) {
  if (typeof hashLen !== "number" || hashLen < 2)
    throw new Error("hashLen must be a number");
  if (typeof qByteLen !== "number" || qByteLen < 2)
    throw new Error("qByteLen must be a number");
  if (typeof hmacFn !== "function")
    throw new Error("hmacFn must be a function");
  let v = u8n(hashLen);
  let k = u8n(hashLen);
  let i = 0;
  const reset = () => {
    v.fill(1);
    k.fill(0);
    i = 0;
  };
  const h = (...b) => hmacFn(k, v, ...b);
  const reseed = (seed = u8n()) => {
    k = h(u8fr([0]), seed);
    v = h();
    if (seed.length === 0)
      return;
    k = h(u8fr([1]), seed);
    v = h();
  };
  const gen = () => {
    if (i++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let len = 0;
    const out = [];
    while (len < qByteLen) {
      v = h();
      const sl = v.slice();
      out.push(sl);
      len += v.length;
    }
    return concatBytes$1(...out);
  };
  const genUntil = (seed, pred) => {
    reset();
    reseed(seed);
    let res = void 0;
    while (!(res = pred(gen())))
      reseed();
    reset();
    return res;
  };
  return genUntil;
}
const validatorFns = {
  bigint: (val) => typeof val === "bigint",
  function: (val) => typeof val === "function",
  boolean: (val) => typeof val === "boolean",
  string: (val) => typeof val === "string",
  isSafeInteger: (val) => Number.isSafeInteger(val),
  array: (val) => Array.isArray(val),
  field: (val, object) => object.Fp.isValid(val),
  hash: (val) => typeof val === "function" && Number.isSafeInteger(val.outputLen)
};
function validateObject(object, validators, optValidators = {}) {
  const checkField = (fieldName, type, isOptional) => {
    const checkVal = validatorFns[type];
    if (typeof checkVal !== "function")
      throw new Error(`Invalid validator "${type}", expected function`);
    const val = object[fieldName];
    if (isOptional && val === void 0)
      return;
    if (!checkVal(val, object)) {
      throw new Error(`Invalid param ${String(fieldName)}=${val} (${typeof val}), expected ${type}`);
    }
  };
  for (const [fieldName, type] of Object.entries(validators))
    checkField(fieldName, type, false);
  for (const [fieldName, type] of Object.entries(optValidators))
    checkField(fieldName, type, true);
  return object;
}
const ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bitGet,
  bitLen,
  bitMask,
  bitSet,
  bytesToHex,
  bytesToNumberBE,
  bytesToNumberLE,
  concatBytes: concatBytes$1,
  createHmacDrbg,
  ensureBytes,
  equalBytes: equalBytes$1,
  hexToBytes,
  hexToNumber,
  numberToBytesBE,
  numberToBytesLE,
  numberToHexUnpadded,
  numberToVarBytesBE,
  utf8ToBytes,
  validateObject
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const _0n$3 = BigInt(0), _1n$3 = BigInt(1), _2n$1 = BigInt(2), _3n = BigInt(3);
const _4n = BigInt(4), _5n = BigInt(5), _8n = BigInt(8);
BigInt(9);
BigInt(16);
function mod(a, b) {
  const result = a % b;
  return result >= _0n$3 ? result : b + result;
}
function pow(num, power, modulo) {
  if (modulo <= _0n$3 || power < _0n$3)
    throw new Error("Expected power/modulo > 0");
  if (modulo === _1n$3)
    return _0n$3;
  let res = _1n$3;
  while (power > _0n$3) {
    if (power & _1n$3)
      res = res * num % modulo;
    num = num * num % modulo;
    power >>= _1n$3;
  }
  return res;
}
function pow2(x, power, modulo) {
  let res = x;
  while (power-- > _0n$3) {
    res *= res;
    res %= modulo;
  }
  return res;
}
function invert(number2, modulo) {
  if (number2 === _0n$3 || modulo <= _0n$3) {
    throw new Error(`invert: expected positive integers, got n=${number2} mod=${modulo}`);
  }
  let a = mod(number2, modulo);
  let b = modulo;
  let x = _0n$3, u = _1n$3;
  while (a !== _0n$3) {
    const q = b / a;
    const r = b % a;
    const m = x - u * q;
    b = a, a = r, x = u, u = m;
  }
  const gcd2 = b;
  if (gcd2 !== _1n$3)
    throw new Error("invert: does not exist");
  return mod(x, modulo);
}
function tonelliShanks(P) {
  const legendreC = (P - _1n$3) / _2n$1;
  let Q, S, Z;
  for (Q = P - _1n$3, S = 0; Q % _2n$1 === _0n$3; Q /= _2n$1, S++)
    ;
  for (Z = _2n$1; Z < P && pow(Z, legendreC, P) !== P - _1n$3; Z++)
    ;
  if (S === 1) {
    const p1div4 = (P + _1n$3) / _4n;
    return function tonelliFast(Fp2, n) {
      const root = Fp2.pow(n, p1div4);
      if (!Fp2.eql(Fp2.sqr(root), n))
        throw new Error("Cannot find square root");
      return root;
    };
  }
  const Q1div2 = (Q + _1n$3) / _2n$1;
  return function tonelliSlow(Fp2, n) {
    if (Fp2.pow(n, legendreC) === Fp2.neg(Fp2.ONE))
      throw new Error("Cannot find square root");
    let r = S;
    let g = Fp2.pow(Fp2.mul(Fp2.ONE, Z), Q);
    let x = Fp2.pow(n, Q1div2);
    let b = Fp2.pow(n, Q);
    while (!Fp2.eql(b, Fp2.ONE)) {
      if (Fp2.eql(b, Fp2.ZERO))
        return Fp2.ZERO;
      let m = 1;
      for (let t2 = Fp2.sqr(b); m < r; m++) {
        if (Fp2.eql(t2, Fp2.ONE))
          break;
        t2 = Fp2.sqr(t2);
      }
      const ge2 = Fp2.pow(g, _1n$3 << BigInt(r - m - 1));
      g = Fp2.sqr(ge2);
      x = Fp2.mul(x, ge2);
      b = Fp2.mul(b, g);
      r = m;
    }
    return x;
  };
}
function FpSqrt(P) {
  if (P % _4n === _3n) {
    const p1div4 = (P + _1n$3) / _4n;
    return function sqrt3mod4(Fp2, n) {
      const root = Fp2.pow(n, p1div4);
      if (!Fp2.eql(Fp2.sqr(root), n))
        throw new Error("Cannot find square root");
      return root;
    };
  }
  if (P % _8n === _5n) {
    const c1 = (P - _5n) / _8n;
    return function sqrt5mod8(Fp2, n) {
      const n2 = Fp2.mul(n, _2n$1);
      const v = Fp2.pow(n2, c1);
      const nv = Fp2.mul(n, v);
      const i = Fp2.mul(Fp2.mul(nv, _2n$1), v);
      const root = Fp2.mul(nv, Fp2.sub(i, Fp2.ONE));
      if (!Fp2.eql(Fp2.sqr(root), n))
        throw new Error("Cannot find square root");
      return root;
    };
  }
  return tonelliShanks(P);
}
const FIELD_FIELDS = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function validateField(field) {
  const initial = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  };
  const opts = FIELD_FIELDS.reduce((map, val) => {
    map[val] = "function";
    return map;
  }, initial);
  return validateObject(field, opts);
}
function FpPow(f2, num, power) {
  if (power < _0n$3)
    throw new Error("Expected power > 0");
  if (power === _0n$3)
    return f2.ONE;
  if (power === _1n$3)
    return num;
  let p = f2.ONE;
  let d = num;
  while (power > _0n$3) {
    if (power & _1n$3)
      p = f2.mul(p, d);
    d = f2.sqr(d);
    power >>= 1n;
  }
  return p;
}
function FpInvertBatch(f2, nums) {
  const tmp = new Array(nums.length);
  const lastMultiplied = nums.reduce((acc, num, i) => {
    if (f2.is0(num))
      return acc;
    tmp[i] = acc;
    return f2.mul(acc, num);
  }, f2.ONE);
  const inverted = f2.inv(lastMultiplied);
  nums.reduceRight((acc, num, i) => {
    if (f2.is0(num))
      return acc;
    tmp[i] = f2.mul(acc, tmp[i]);
    return f2.mul(acc, num);
  }, inverted);
  return tmp;
}
function nLength(n, nBitLength) {
  const _nBitLength = nBitLength !== void 0 ? nBitLength : n.toString(2).length;
  const nByteLength = Math.ceil(_nBitLength / 8);
  return { nBitLength: _nBitLength, nByteLength };
}
function Fp$1(ORDER, bitLen2, isLE = false, redef = {}) {
  if (ORDER <= _0n$3)
    throw new Error(`Expected Fp ORDER > 0, got ${ORDER}`);
  const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen2);
  if (BYTES > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const sqrtP = FpSqrt(ORDER);
  const f2 = Object.freeze({
    ORDER,
    BITS,
    BYTES,
    MASK: bitMask(BITS),
    ZERO: _0n$3,
    ONE: _1n$3,
    create: (num) => mod(num, ORDER),
    isValid: (num) => {
      if (typeof num !== "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof num}`);
      return _0n$3 <= num && num < ORDER;
    },
    is0: (num) => num === _0n$3,
    isOdd: (num) => (num & _1n$3) === _1n$3,
    neg: (num) => mod(-num, ORDER),
    eql: (lhs, rhs) => lhs === rhs,
    sqr: (num) => mod(num * num, ORDER),
    add: (lhs, rhs) => mod(lhs + rhs, ORDER),
    sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
    mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
    pow: (num, power) => FpPow(f2, num, power),
    div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
    // Same as above, but doesn't normalize
    sqrN: (num) => num * num,
    addN: (lhs, rhs) => lhs + rhs,
    subN: (lhs, rhs) => lhs - rhs,
    mulN: (lhs, rhs) => lhs * rhs,
    inv: (num) => invert(num, ORDER),
    sqrt: redef.sqrt || ((n) => sqrtP(f2, n)),
    invertBatch: (lst) => FpInvertBatch(f2, lst),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (a, b, c) => c ? b : a,
    toBytes: (num) => isLE ? numberToBytesLE(num, BYTES) : numberToBytesBE(num, BYTES),
    fromBytes: (bytes2) => {
      if (bytes2.length !== BYTES)
        throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes2.length}`);
      return isLE ? bytesToNumberLE(bytes2) : bytesToNumberBE(bytes2);
    }
  });
  return Object.freeze(f2);
}
function hashToPrivateScalar(hash, groupOrder, isLE = false) {
  hash = ensureBytes("privateHash", hash);
  const hashLen = hash.length;
  const minLen = nLength(groupOrder).nByteLength + 8;
  if (minLen < 24 || hashLen < minLen || hashLen > 1024)
    throw new Error(`hashToPrivateScalar: expected ${minLen}-1024 bytes of input, got ${hashLen}`);
  const num = isLE ? bytesToNumberLE(hash) : bytesToNumberBE(hash);
  return mod(num, groupOrder - _1n$3) + _1n$3;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const _0n$2 = BigInt(0);
const _1n$2 = BigInt(1);
function wNAF(c, bits) {
  const constTimeNegate = (condition, item) => {
    const neg = item.negate();
    return condition ? neg : item;
  };
  const opts = (W) => {
    const windows = Math.ceil(bits / W) + 1;
    const windowSize = 2 ** (W - 1);
    return { windows, windowSize };
  };
  return {
    constTimeNegate,
    // non-const time multiplication ladder
    unsafeLadder(elm, n) {
      let p = c.ZERO;
      let d = elm;
      while (n > _0n$2) {
        if (n & _1n$2)
          p = p.add(d);
        d = d.double();
        n >>= _1n$2;
      }
      return p;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(elm, W) {
      const { windows, windowSize } = opts(W);
      const points = [];
      let p = elm;
      let base = p;
      for (let window = 0; window < windows; window++) {
        base = p;
        points.push(base);
        for (let i = 1; i < windowSize; i++) {
          base = base.add(p);
          points.push(base);
        }
        p = base.double();
      }
      return points;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(W, precomputes, n) {
      const { windows, windowSize } = opts(W);
      let p = c.ZERO;
      let f2 = c.BASE;
      const mask = BigInt(2 ** W - 1);
      const maxNumber = 2 ** W;
      const shiftBy = BigInt(W);
      for (let window = 0; window < windows; window++) {
        const offset = window * windowSize;
        let wbits = Number(n & mask);
        n >>= shiftBy;
        if (wbits > windowSize) {
          wbits -= maxNumber;
          n += _1n$2;
        }
        const offset1 = offset;
        const offset2 = offset + Math.abs(wbits) - 1;
        const cond1 = window % 2 !== 0;
        const cond2 = wbits < 0;
        if (wbits === 0) {
          f2 = f2.add(constTimeNegate(cond1, precomputes[offset1]));
        } else {
          p = p.add(constTimeNegate(cond2, precomputes[offset2]));
        }
      }
      return { p, f: f2 };
    },
    wNAFCached(P, precomputesMap, n, transform) {
      const W = P._WINDOW_SIZE || 1;
      let comp = precomputesMap.get(P);
      if (!comp) {
        comp = this.precomputeWindow(P, W);
        if (W !== 1) {
          precomputesMap.set(P, transform(comp));
        }
      }
      return this.wNAF(W, comp, n);
    }
  };
}
function validateBasic(curve) {
  validateField(curve.Fp);
  validateObject(curve, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  });
  return Object.freeze({ ...nLength(curve.n, curve.nBitLength), ...curve });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function validatePointOpts(curve) {
  const opts = validateBasic(curve);
  validateObject(opts, {
    a: "field",
    b: "field",
    fromBytes: "function",
    toBytes: "function"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean"
  });
  const { endo, Fp: Fp2, a } = opts;
  if (endo) {
    if (!Fp2.eql(a, Fp2.ZERO)) {
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    }
    if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") {
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
    }
  }
  return Object.freeze({ ...opts });
}
const { bytesToNumberBE: b2n, hexToBytes: h2b } = ut;
const DER = {
  // asn.1 DER encoding utils
  Err: class DERErr extends Error {
    constructor(m = "") {
      super(m);
    }
  },
  _parseInt(data) {
    const { Err: E } = DER;
    if (data.length < 2 || data[0] !== 2)
      throw new E("Invalid signature integer tag");
    const len = data[1];
    const res = data.subarray(2, len + 2);
    if (!len || res.length !== len)
      throw new E("Invalid signature integer: wrong length");
    if (res[0] === 0 && res[1] <= 127)
      throw new E("Invalid signature integer: trailing length");
    return { d: b2n(res), l: data.subarray(len + 2) };
  },
  toSig(hex2) {
    const { Err: E } = DER;
    const data = typeof hex2 === "string" ? h2b(hex2) : hex2;
    if (!(data instanceof Uint8Array))
      throw new Error("ui8a expected");
    let l = data.length;
    if (l < 2 || data[0] != 48)
      throw new E("Invalid signature tag");
    if (data[1] !== l - 2)
      throw new E("Invalid signature: incorrect length");
    const { d: r, l: sBytes } = DER._parseInt(data.subarray(2));
    const { d: s, l: rBytesLeft } = DER._parseInt(sBytes);
    if (rBytesLeft.length)
      throw new E("Invalid signature: left bytes after parsing");
    return { r, s };
  },
  hexFromSig(sig) {
    const slice = (s2) => Number.parseInt(s2[0], 16) >= 8 ? "00" + s2 : s2;
    const h = (num) => {
      const hex2 = num.toString(16);
      return hex2.length & 1 ? `0${hex2}` : hex2;
    };
    const s = slice(h(sig.s));
    const r = slice(h(sig.r));
    const shl = s.length / 2;
    const rhl = r.length / 2;
    const sl = h(shl);
    const rl = h(rhl);
    return `30${h(rhl + shl + 4)}02${rl}${r}02${sl}${s}`;
  }
};
const _0n$1 = BigInt(0);
const _1n$1 = BigInt(1);
function weierstrassPoints(opts) {
  const CURVE = validatePointOpts(opts);
  const { Fp: Fp2 } = CURVE;
  function weierstrassEquation(x) {
    const { a, b } = CURVE;
    const x2 = Fp2.sqr(x);
    const x3 = Fp2.mul(x2, x);
    return Fp2.add(Fp2.add(x3, Fp2.mul(x, a)), b);
  }
  function isWithinCurveOrder(num) {
    return typeof num === "bigint" && _0n$1 < num && num < CURVE.n;
  }
  function assertGE(num) {
    if (!isWithinCurveOrder(num))
      throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function normPrivateKeyToScalar(key) {
    const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n } = CURVE;
    if (lengths && typeof key !== "bigint") {
      if (key instanceof Uint8Array)
        key = bytesToHex(key);
      if (typeof key !== "string" || !lengths.includes(key.length))
        throw new Error("Invalid key");
      key = key.padStart(nByteLength * 2, "0");
    }
    let num;
    try {
      num = typeof key === "bigint" ? key : bytesToNumberBE(ensureBytes("private key", key, nByteLength));
    } catch (error) {
      throw new Error(`private key must be ${nByteLength} bytes, hex or bigint, not ${typeof key}`);
    }
    if (wrapPrivateKey)
      num = mod(num, n);
    assertGE(num);
    return num;
  }
  const pointPrecomputes = /* @__PURE__ */ new Map();
  function assertPrjPoint(other) {
    if (!(other instanceof Point2))
      throw new Error("ProjectivePoint expected");
  }
  class Point2 {
    constructor(px, py, pz) {
      this.px = px;
      this.py = py;
      this.pz = pz;
      if (px == null || !Fp2.isValid(px))
        throw new Error("x required");
      if (py == null || !Fp2.isValid(py))
        throw new Error("y required");
      if (pz == null || !Fp2.isValid(pz))
        throw new Error("z required");
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(p) {
      const { x, y } = p || {};
      if (!p || !Fp2.isValid(x) || !Fp2.isValid(y))
        throw new Error("invalid affine point");
      if (p instanceof Point2)
        throw new Error("projective point not allowed");
      const is0 = (i) => Fp2.eql(i, Fp2.ZERO);
      if (is0(x) && is0(y))
        return Point2.ZERO;
      return new Point2(x, y, Fp2.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(points) {
      const toInv = Fp2.invertBatch(points.map((p) => p.pz));
      return points.map((p, i) => p.toAffine(toInv[i])).map(Point2.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(hex2) {
      const P = Point2.fromAffine(CURVE.fromBytes(ensureBytes("pointHex", hex2)));
      P.assertValidity();
      return P;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(privateKey) {
      return Point2.BASE.multiply(normPrivateKeyToScalar(privateKey));
    }
    // "Private method", don't use it directly
    _setWindowSize(windowSize) {
      this._WINDOW_SIZE = windowSize;
      pointPrecomputes.delete(this);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      if (this.is0()) {
        if (CURVE.allowInfinityPoint)
          return;
        throw new Error("bad point: ZERO");
      }
      const { x, y } = this.toAffine();
      if (!Fp2.isValid(x) || !Fp2.isValid(y))
        throw new Error("bad point: x or y not FE");
      const left = Fp2.sqr(y);
      const right = weierstrassEquation(x);
      if (!Fp2.eql(left, right))
        throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      const { y } = this.toAffine();
      if (Fp2.isOdd)
        return !Fp2.isOdd(y);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(other) {
      assertPrjPoint(other);
      const { px: X1, py: Y1, pz: Z1 } = this;
      const { px: X2, py: Y2, pz: Z2 } = other;
      const U1 = Fp2.eql(Fp2.mul(X1, Z2), Fp2.mul(X2, Z1));
      const U2 = Fp2.eql(Fp2.mul(Y1, Z2), Fp2.mul(Y2, Z1));
      return U1 && U2;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new Point2(this.px, Fp2.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a, b } = CURVE;
      const b3 = Fp2.mul(b, 3n);
      const { px: X1, py: Y1, pz: Z1 } = this;
      let X3 = Fp2.ZERO, Y3 = Fp2.ZERO, Z3 = Fp2.ZERO;
      let t0 = Fp2.mul(X1, X1);
      let t1 = Fp2.mul(Y1, Y1);
      let t2 = Fp2.mul(Z1, Z1);
      let t3 = Fp2.mul(X1, Y1);
      t3 = Fp2.add(t3, t3);
      Z3 = Fp2.mul(X1, Z1);
      Z3 = Fp2.add(Z3, Z3);
      X3 = Fp2.mul(a, Z3);
      Y3 = Fp2.mul(b3, t2);
      Y3 = Fp2.add(X3, Y3);
      X3 = Fp2.sub(t1, Y3);
      Y3 = Fp2.add(t1, Y3);
      Y3 = Fp2.mul(X3, Y3);
      X3 = Fp2.mul(t3, X3);
      Z3 = Fp2.mul(b3, Z3);
      t2 = Fp2.mul(a, t2);
      t3 = Fp2.sub(t0, t2);
      t3 = Fp2.mul(a, t3);
      t3 = Fp2.add(t3, Z3);
      Z3 = Fp2.add(t0, t0);
      t0 = Fp2.add(Z3, t0);
      t0 = Fp2.add(t0, t2);
      t0 = Fp2.mul(t0, t3);
      Y3 = Fp2.add(Y3, t0);
      t2 = Fp2.mul(Y1, Z1);
      t2 = Fp2.add(t2, t2);
      t0 = Fp2.mul(t2, t3);
      X3 = Fp2.sub(X3, t0);
      Z3 = Fp2.mul(t2, t1);
      Z3 = Fp2.add(Z3, Z3);
      Z3 = Fp2.add(Z3, Z3);
      return new Point2(X3, Y3, Z3);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(other) {
      assertPrjPoint(other);
      const { px: X1, py: Y1, pz: Z1 } = this;
      const { px: X2, py: Y2, pz: Z2 } = other;
      let X3 = Fp2.ZERO, Y3 = Fp2.ZERO, Z3 = Fp2.ZERO;
      const a = CURVE.a;
      const b3 = Fp2.mul(CURVE.b, 3n);
      let t0 = Fp2.mul(X1, X2);
      let t1 = Fp2.mul(Y1, Y2);
      let t2 = Fp2.mul(Z1, Z2);
      let t3 = Fp2.add(X1, Y1);
      let t4 = Fp2.add(X2, Y2);
      t3 = Fp2.mul(t3, t4);
      t4 = Fp2.add(t0, t1);
      t3 = Fp2.sub(t3, t4);
      t4 = Fp2.add(X1, Z1);
      let t5 = Fp2.add(X2, Z2);
      t4 = Fp2.mul(t4, t5);
      t5 = Fp2.add(t0, t2);
      t4 = Fp2.sub(t4, t5);
      t5 = Fp2.add(Y1, Z1);
      X3 = Fp2.add(Y2, Z2);
      t5 = Fp2.mul(t5, X3);
      X3 = Fp2.add(t1, t2);
      t5 = Fp2.sub(t5, X3);
      Z3 = Fp2.mul(a, t4);
      X3 = Fp2.mul(b3, t2);
      Z3 = Fp2.add(X3, Z3);
      X3 = Fp2.sub(t1, Z3);
      Z3 = Fp2.add(t1, Z3);
      Y3 = Fp2.mul(X3, Z3);
      t1 = Fp2.add(t0, t0);
      t1 = Fp2.add(t1, t0);
      t2 = Fp2.mul(a, t2);
      t4 = Fp2.mul(b3, t4);
      t1 = Fp2.add(t1, t2);
      t2 = Fp2.sub(t0, t2);
      t2 = Fp2.mul(a, t2);
      t4 = Fp2.add(t4, t2);
      t0 = Fp2.mul(t1, t4);
      Y3 = Fp2.add(Y3, t0);
      t0 = Fp2.mul(t5, t4);
      X3 = Fp2.mul(t3, X3);
      X3 = Fp2.sub(X3, t0);
      t0 = Fp2.mul(t3, t1);
      Z3 = Fp2.mul(t5, Z3);
      Z3 = Fp2.add(Z3, t0);
      return new Point2(X3, Y3, Z3);
    }
    subtract(other) {
      return this.add(other.negate());
    }
    is0() {
      return this.equals(Point2.ZERO);
    }
    wNAF(n) {
      return wnaf.wNAFCached(this, pointPrecomputes, n, (comp) => {
        const toInv = Fp2.invertBatch(comp.map((p) => p.pz));
        return comp.map((p, i) => p.toAffine(toInv[i])).map(Point2.fromAffine);
      });
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(n) {
      const I = Point2.ZERO;
      if (n === _0n$1)
        return I;
      assertGE(n);
      if (n === _1n$1)
        return this;
      const { endo } = CURVE;
      if (!endo)
        return wnaf.unsafeLadder(this, n);
      let { k1neg, k1, k2neg, k2 } = endo.splitScalar(n);
      let k1p = I;
      let k2p = I;
      let d = this;
      while (k1 > _0n$1 || k2 > _0n$1) {
        if (k1 & _1n$1)
          k1p = k1p.add(d);
        if (k2 & _1n$1)
          k2p = k2p.add(d);
        d = d.double();
        k1 >>= _1n$1;
        k2 >>= _1n$1;
      }
      if (k1neg)
        k1p = k1p.negate();
      if (k2neg)
        k2p = k2p.negate();
      k2p = new Point2(Fp2.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
      return k1p.add(k2p);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(scalar) {
      assertGE(scalar);
      let n = scalar;
      let point, fake;
      const { endo } = CURVE;
      if (endo) {
        const { k1neg, k1, k2neg, k2 } = endo.splitScalar(n);
        let { p: k1p, f: f1p } = this.wNAF(k1);
        let { p: k2p, f: f2p } = this.wNAF(k2);
        k1p = wnaf.constTimeNegate(k1neg, k1p);
        k2p = wnaf.constTimeNegate(k2neg, k2p);
        k2p = new Point2(Fp2.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
        point = k1p.add(k2p);
        fake = f1p.add(f2p);
      } else {
        const { p, f: f2 } = this.wNAF(n);
        point = p;
        fake = f2;
      }
      return Point2.normalizeZ([point, fake])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(Q, a, b) {
      const G = Point2.BASE;
      const mul = (P, a2) => a2 === _0n$1 || a2 === _1n$1 || !P.equals(G) ? P.multiplyUnsafe(a2) : P.multiply(a2);
      const sum = mul(this, a).add(mul(Q, b));
      return sum.is0() ? void 0 : sum;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(iz) {
      const { px: x, py: y, pz: z } = this;
      const is0 = this.is0();
      if (iz == null)
        iz = is0 ? Fp2.ONE : Fp2.inv(z);
      const ax = Fp2.mul(x, iz);
      const ay = Fp2.mul(y, iz);
      const zz = Fp2.mul(z, iz);
      if (is0)
        return { x: Fp2.ZERO, y: Fp2.ZERO };
      if (!Fp2.eql(zz, Fp2.ONE))
        throw new Error("invZ was invalid");
      return { x: ax, y: ay };
    }
    isTorsionFree() {
      const { h: cofactor, isTorsionFree } = CURVE;
      if (cofactor === _1n$1)
        return true;
      if (isTorsionFree)
        return isTorsionFree(Point2, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: cofactor, clearCofactor } = CURVE;
      if (cofactor === _1n$1)
        return this;
      if (clearCofactor)
        return clearCofactor(Point2, this);
      return this.multiplyUnsafe(CURVE.h);
    }
    toRawBytes(isCompressed = true) {
      this.assertValidity();
      return CURVE.toBytes(Point2, this, isCompressed);
    }
    toHex(isCompressed = true) {
      return bytesToHex(this.toRawBytes(isCompressed));
    }
  }
  Point2.BASE = new Point2(CURVE.Gx, CURVE.Gy, Fp2.ONE);
  Point2.ZERO = new Point2(Fp2.ZERO, Fp2.ONE, Fp2.ZERO);
  const _bits = CURVE.nBitLength;
  const wnaf = wNAF(Point2, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
  return {
    ProjectivePoint: Point2,
    normPrivateKeyToScalar,
    weierstrassEquation,
    isWithinCurveOrder
  };
}
function validateOpts$1(curve) {
  const opts = validateBasic(curve);
  validateObject(opts, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  });
  return Object.freeze({ lowS: true, ...opts });
}
function weierstrass(curveDef) {
  const CURVE = validateOpts$1(curveDef);
  const CURVE_ORDER2 = CURVE.n;
  const Fp2 = CURVE.Fp;
  const compressedLen = Fp2.BYTES + 1;
  const uncompressedLen = 2 * Fp2.BYTES + 1;
  function isValidFieldElement(num) {
    return _0n$1 < num && num < Fp2.ORDER;
  }
  function modN2(a) {
    return mod(a, CURVE_ORDER2);
  }
  function invN(a) {
    return invert(a, CURVE_ORDER2);
  }
  const { ProjectivePoint: Point2, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints({
    ...CURVE,
    toBytes(c, point, isCompressed) {
      const a = point.toAffine();
      const x = Fp2.toBytes(a.x);
      const cat = concatBytes$1;
      if (isCompressed) {
        return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x);
      } else {
        return cat(Uint8Array.from([4]), x, Fp2.toBytes(a.y));
      }
    },
    fromBytes(bytes2) {
      const len = bytes2.length;
      const head = bytes2[0];
      const tail = bytes2.subarray(1);
      if (len === compressedLen && (head === 2 || head === 3)) {
        const x = bytesToNumberBE(tail);
        if (!isValidFieldElement(x))
          throw new Error("Point is not on curve");
        const y2 = weierstrassEquation(x);
        let y = Fp2.sqrt(y2);
        const isYOdd = (y & _1n$1) === _1n$1;
        const isHeadOdd = (head & 1) === 1;
        if (isHeadOdd !== isYOdd)
          y = Fp2.neg(y);
        return { x, y };
      } else if (len === uncompressedLen && head === 4) {
        const x = Fp2.fromBytes(tail.subarray(0, Fp2.BYTES));
        const y = Fp2.fromBytes(tail.subarray(Fp2.BYTES, 2 * Fp2.BYTES));
        return { x, y };
      } else {
        throw new Error(`Point of length ${len} was invalid. Expected ${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes`);
      }
    }
  });
  const numToNByteStr = (num) => bytesToHex(numberToBytesBE(num, CURVE.nByteLength));
  function isBiggerThanHalfOrder(number2) {
    const HALF = CURVE_ORDER2 >> _1n$1;
    return number2 > HALF;
  }
  function normalizeS(s) {
    return isBiggerThanHalfOrder(s) ? modN2(-s) : s;
  }
  const slcNum = (b, from, to) => bytesToNumberBE(b.slice(from, to));
  class Signature {
    constructor(r, s, recovery) {
      this.r = r;
      this.s = s;
      this.recovery = recovery;
      this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(hex2) {
      const l = CURVE.nByteLength;
      hex2 = ensureBytes("compactSignature", hex2, l * 2);
      return new Signature(slcNum(hex2, 0, l), slcNum(hex2, l, 2 * l));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(hex2) {
      const { r, s } = DER.toSig(ensureBytes("DER", hex2));
      return new Signature(r, s);
    }
    assertValidity() {
      if (!isWithinCurveOrder(this.r))
        throw new Error("r must be 0 < r < CURVE.n");
      if (!isWithinCurveOrder(this.s))
        throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(recovery) {
      return new Signature(this.r, this.s, recovery);
    }
    recoverPublicKey(msgHash) {
      const { r, s, recovery: rec } = this;
      const h = bits2int_modN(ensureBytes("msgHash", msgHash));
      if (rec == null || ![0, 1, 2, 3].includes(rec))
        throw new Error("recovery id invalid");
      const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
      if (radj >= Fp2.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const prefix2 = (rec & 1) === 0 ? "02" : "03";
      const R = Point2.fromHex(prefix2 + numToNByteStr(radj));
      const ir = invN(radj);
      const u1 = modN2(-h * ir);
      const u2 = modN2(s * ir);
      const Q = Point2.BASE.multiplyAndAddUnsafe(R, u1, u2);
      if (!Q)
        throw new Error("point at infinify");
      Q.assertValidity();
      return Q;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return isBiggerThanHalfOrder(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new Signature(this.r, modN2(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return hexToBytes(this.toDERHex());
    }
    toDERHex() {
      return DER.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return hexToBytes(this.toCompactHex());
    }
    toCompactHex() {
      return numToNByteStr(this.r) + numToNByteStr(this.s);
    }
  }
  const utils2 = {
    isValidPrivateKey(privateKey) {
      try {
        normPrivateKeyToScalar(privateKey);
        return true;
      } catch (error) {
        return false;
      }
    },
    normPrivateKeyToScalar,
    /**
     * Produces cryptographically secure private key from random of size (nBitLength+64)
     * as per FIPS 186 B.4.1 with modulo bias being neglible.
     */
    randomPrivateKey: () => {
      const rand = CURVE.randomBytes(Fp2.BYTES + 8);
      const num = hashToPrivateScalar(rand, CURVE_ORDER2);
      return numberToBytesBE(num, CURVE.nByteLength);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(windowSize = 8, point = Point2.BASE) {
      point._setWindowSize(windowSize);
      point.multiply(BigInt(3));
      return point;
    }
  };
  function getPublicKey2(privateKey, isCompressed = true) {
    return Point2.fromPrivateKey(privateKey).toRawBytes(isCompressed);
  }
  function isProbPub(item) {
    const arr = item instanceof Uint8Array;
    const str = typeof item === "string";
    const len = (arr || str) && item.length;
    if (arr)
      return len === compressedLen || len === uncompressedLen;
    if (str)
      return len === 2 * compressedLen || len === 2 * uncompressedLen;
    if (item instanceof Point2)
      return true;
    return false;
  }
  function getSharedSecret(privateA, publicB, isCompressed = true) {
    if (isProbPub(privateA))
      throw new Error("first arg must be private key");
    if (!isProbPub(publicB))
      throw new Error("second arg must be public key");
    const b = Point2.fromHex(publicB);
    return b.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
  }
  const bits2int = CURVE.bits2int || function(bytes2) {
    const num = bytesToNumberBE(bytes2);
    const delta = bytes2.length * 8 - CURVE.nBitLength;
    return delta > 0 ? num >> BigInt(delta) : num;
  };
  const bits2int_modN = CURVE.bits2int_modN || function(bytes2) {
    return modN2(bits2int(bytes2));
  };
  const ORDER_MASK = bitMask(CURVE.nBitLength);
  function int2octets(num) {
    if (typeof num !== "bigint")
      throw new Error("bigint expected");
    if (!(_0n$1 <= num && num < ORDER_MASK))
      throw new Error(`bigint expected < 2^${CURVE.nBitLength}`);
    return numberToBytesBE(num, CURVE.nByteLength);
  }
  function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
    if (["recovered", "canonical"].some((k) => k in opts))
      throw new Error("sign() legacy options not supported");
    const { hash, randomBytes: randomBytes2 } = CURVE;
    let { lowS, prehash, extraEntropy: ent } = opts;
    if (lowS == null)
      lowS = true;
    msgHash = ensureBytes("msgHash", msgHash);
    if (prehash)
      msgHash = ensureBytes("prehashed msgHash", hash(msgHash));
    const h1int = bits2int_modN(msgHash);
    const d = normPrivateKeyToScalar(privateKey);
    const seedArgs = [int2octets(d), int2octets(h1int)];
    if (ent != null) {
      const e = ent === true ? randomBytes2(Fp2.BYTES) : ent;
      seedArgs.push(ensureBytes("extraEntropy", e, Fp2.BYTES));
    }
    const seed = concatBytes$1(...seedArgs);
    const m = h1int;
    function k2sig(kBytes) {
      const k = bits2int(kBytes);
      if (!isWithinCurveOrder(k))
        return;
      const ik = invN(k);
      const q = Point2.BASE.multiply(k).toAffine();
      const r = modN2(q.x);
      if (r === _0n$1)
        return;
      const s = modN2(ik * modN2(m + r * d));
      if (s === _0n$1)
        return;
      let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n$1);
      let normS = s;
      if (lowS && isBiggerThanHalfOrder(s)) {
        normS = normalizeS(s);
        recovery ^= 1;
      }
      return new Signature(r, normS, recovery);
    }
    return { seed, k2sig };
  }
  const defaultSigOpts = { lowS: CURVE.lowS, prehash: false };
  const defaultVerOpts = { lowS: CURVE.lowS, prehash: false };
  function sign(msgHash, privKey, opts = defaultSigOpts) {
    const { seed, k2sig } = prepSig(msgHash, privKey, opts);
    const drbg = createHmacDrbg(CURVE.hash.outputLen, CURVE.nByteLength, CURVE.hmac);
    return drbg(seed, k2sig);
  }
  Point2.BASE._setWindowSize(8);
  function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
    var _a;
    const sg = signature;
    msgHash = ensureBytes("msgHash", msgHash);
    publicKey = ensureBytes("publicKey", publicKey);
    if ("strict" in opts)
      throw new Error("options.strict was renamed to lowS");
    const { lowS, prehash } = opts;
    let _sig = void 0;
    let P;
    try {
      if (typeof sg === "string" || sg instanceof Uint8Array) {
        try {
          _sig = Signature.fromDER(sg);
        } catch (derError) {
          if (!(derError instanceof DER.Err))
            throw derError;
          _sig = Signature.fromCompact(sg);
        }
      } else if (typeof sg === "object" && typeof sg.r === "bigint" && typeof sg.s === "bigint") {
        const { r: r2, s: s2 } = sg;
        _sig = new Signature(r2, s2);
      } else {
        throw new Error("PARSE");
      }
      P = Point2.fromHex(publicKey);
    } catch (error) {
      if (error.message === "PARSE")
        throw new Error(`signature must be Signature instance, Uint8Array or hex string`);
      return false;
    }
    if (lowS && _sig.hasHighS())
      return false;
    if (prehash)
      msgHash = CURVE.hash(msgHash);
    const { r, s } = _sig;
    const h = bits2int_modN(msgHash);
    const is = invN(s);
    const u1 = modN2(h * is);
    const u2 = modN2(r * is);
    const R = (_a = Point2.BASE.multiplyAndAddUnsafe(P, u1, u2)) == null ? void 0 : _a.toAffine();
    if (!R)
      return false;
    const v = modN2(R.x);
    return v === r;
  }
  return {
    CURVE,
    getPublicKey: getPublicKey2,
    getSharedSecret,
    sign,
    verify,
    ProjectivePoint: Point2,
    Signature,
    utils: utils2
  };
}
function SWUFpSqrtRatio(Fp2, Z) {
  const q = Fp2.ORDER;
  let l = 0n;
  for (let o = q - 1n; o % 2n === 0n; o /= 2n)
    l += 1n;
  const c1 = l;
  const c2 = (q - 1n) / 2n ** c1;
  const c3 = (c2 - 1n) / 2n;
  const c4 = 2n ** c1 - 1n;
  const c5 = 2n ** (c1 - 1n);
  const c6 = Fp2.pow(Z, c2);
  const c7 = Fp2.pow(Z, (c2 + 1n) / 2n);
  let sqrtRatio = (u, v) => {
    let tv1 = c6;
    let tv2 = Fp2.pow(v, c4);
    let tv3 = Fp2.sqr(tv2);
    tv3 = Fp2.mul(tv3, v);
    let tv5 = Fp2.mul(u, tv3);
    tv5 = Fp2.pow(tv5, c3);
    tv5 = Fp2.mul(tv5, tv2);
    tv2 = Fp2.mul(tv5, v);
    tv3 = Fp2.mul(tv5, u);
    let tv4 = Fp2.mul(tv3, tv2);
    tv5 = Fp2.pow(tv4, c5);
    let isQR = Fp2.eql(tv5, Fp2.ONE);
    tv2 = Fp2.mul(tv3, c7);
    tv5 = Fp2.mul(tv4, tv1);
    tv3 = Fp2.cmov(tv2, tv3, isQR);
    tv4 = Fp2.cmov(tv5, tv4, isQR);
    for (let i = c1; i > 1; i--) {
      let tv52 = 2n ** (i - 2n);
      let tvv5 = Fp2.pow(tv4, tv52);
      const e1 = Fp2.eql(tvv5, Fp2.ONE);
      tv2 = Fp2.mul(tv3, tv1);
      tv1 = Fp2.mul(tv1, tv1);
      tvv5 = Fp2.mul(tv4, tv1);
      tv3 = Fp2.cmov(tv2, tv3, e1);
      tv4 = Fp2.cmov(tvv5, tv4, e1);
    }
    return { isValid: isQR, value: tv3 };
  };
  if (Fp2.ORDER % 4n === 3n) {
    const c12 = (Fp2.ORDER - 3n) / 4n;
    const c22 = Fp2.sqrt(Fp2.neg(Z));
    sqrtRatio = (u, v) => {
      let tv1 = Fp2.sqr(v);
      const tv2 = Fp2.mul(u, v);
      tv1 = Fp2.mul(tv1, tv2);
      let y1 = Fp2.pow(tv1, c12);
      y1 = Fp2.mul(y1, tv2);
      const y2 = Fp2.mul(y1, c22);
      const tv3 = Fp2.mul(Fp2.sqr(y1), v);
      const isQR = Fp2.eql(tv3, u);
      let y = Fp2.cmov(y2, y1, isQR);
      return { isValid: isQR, value: y };
    };
  }
  return sqrtRatio;
}
function mapToCurveSimpleSWU(Fp2, opts) {
  validateField(Fp2);
  if (!Fp2.isValid(opts.A) || !Fp2.isValid(opts.B) || !Fp2.isValid(opts.Z))
    throw new Error("mapToCurveSimpleSWU: invalid opts");
  const sqrtRatio = SWUFpSqrtRatio(Fp2, opts.Z);
  if (!Fp2.isOdd)
    throw new Error("Fp.isOdd is not implemented!");
  return (u) => {
    let tv1, tv2, tv3, tv4, tv5, tv6, x, y;
    tv1 = Fp2.sqr(u);
    tv1 = Fp2.mul(tv1, opts.Z);
    tv2 = Fp2.sqr(tv1);
    tv2 = Fp2.add(tv2, tv1);
    tv3 = Fp2.add(tv2, Fp2.ONE);
    tv3 = Fp2.mul(tv3, opts.B);
    tv4 = Fp2.cmov(opts.Z, Fp2.neg(tv2), !Fp2.eql(tv2, Fp2.ZERO));
    tv4 = Fp2.mul(tv4, opts.A);
    tv2 = Fp2.sqr(tv3);
    tv6 = Fp2.sqr(tv4);
    tv5 = Fp2.mul(tv6, opts.A);
    tv2 = Fp2.add(tv2, tv5);
    tv2 = Fp2.mul(tv2, tv3);
    tv6 = Fp2.mul(tv6, tv4);
    tv5 = Fp2.mul(tv6, opts.B);
    tv2 = Fp2.add(tv2, tv5);
    x = Fp2.mul(tv1, tv3);
    const { isValid, value } = sqrtRatio(tv2, tv6);
    y = Fp2.mul(tv1, u);
    y = Fp2.mul(y, value);
    x = Fp2.cmov(x, tv3, isValid);
    y = Fp2.cmov(y, value, isValid);
    const e1 = Fp2.isOdd(u) === Fp2.isOdd(y);
    y = Fp2.cmov(Fp2.neg(y), y, e1);
    x = Fp2.div(x, tv4);
    return { x, y };
  };
}
function validateDST(dst) {
  if (dst instanceof Uint8Array)
    return dst;
  if (typeof dst === "string")
    return utf8ToBytes(dst);
  throw new Error("DST must be Uint8Array or string");
}
const os2ip = bytesToNumberBE;
function i2osp(value, length) {
  if (value < 0 || value >= 1 << 8 * length) {
    throw new Error(`bad I2OSP call: value=${value} length=${length}`);
  }
  const res = Array.from({ length }).fill(0);
  for (let i = length - 1; i >= 0; i--) {
    res[i] = value & 255;
    value >>>= 8;
  }
  return new Uint8Array(res);
}
function strxor(a, b) {
  const arr = new Uint8Array(a.length);
  for (let i = 0; i < a.length; i++) {
    arr[i] = a[i] ^ b[i];
  }
  return arr;
}
function isBytes$2(item) {
  if (!(item instanceof Uint8Array))
    throw new Error("Uint8Array expected");
}
function isNum(item) {
  if (!Number.isSafeInteger(item))
    throw new Error("number expected");
}
function expand_message_xmd(msg, DST, lenInBytes, H) {
  isBytes$2(msg);
  isBytes$2(DST);
  isNum(lenInBytes);
  if (DST.length > 255)
    DST = H(concatBytes$1(utf8ToBytes("H2C-OVERSIZE-DST-"), DST));
  const { outputLen: b_in_bytes, blockLen: r_in_bytes } = H;
  const ell = Math.ceil(lenInBytes / b_in_bytes);
  if (ell > 255)
    throw new Error("Invalid xmd length");
  const DST_prime = concatBytes$1(DST, i2osp(DST.length, 1));
  const Z_pad = i2osp(0, r_in_bytes);
  const l_i_b_str = i2osp(lenInBytes, 2);
  const b = new Array(ell);
  const b_0 = H(concatBytes$1(Z_pad, msg, l_i_b_str, i2osp(0, 1), DST_prime));
  b[0] = H(concatBytes$1(b_0, i2osp(1, 1), DST_prime));
  for (let i = 1; i <= ell; i++) {
    const args = [strxor(b_0, b[i - 1]), i2osp(i + 1, 1), DST_prime];
    b[i] = H(concatBytes$1(...args));
  }
  const pseudo_random_bytes = concatBytes$1(...b);
  return pseudo_random_bytes.slice(0, lenInBytes);
}
function expand_message_xof(msg, DST, lenInBytes, k, H) {
  isBytes$2(msg);
  isBytes$2(DST);
  isNum(lenInBytes);
  if (DST.length > 255) {
    const dkLen = Math.ceil(2 * k / 8);
    DST = H.create({ dkLen }).update(utf8ToBytes("H2C-OVERSIZE-DST-")).update(DST).digest();
  }
  if (lenInBytes > 65535 || DST.length > 255)
    throw new Error("expand_message_xof: invalid lenInBytes");
  return H.create({ dkLen: lenInBytes }).update(msg).update(i2osp(lenInBytes, 2)).update(DST).update(i2osp(DST.length, 1)).digest();
}
function hash_to_field(msg, count, options) {
  validateObject(options, {
    DST: "string",
    p: "bigint",
    m: "isSafeInteger",
    k: "isSafeInteger",
    hash: "hash"
  });
  const { p, k, m, hash, expand, DST: _DST } = options;
  isBytes$2(msg);
  isNum(count);
  const DST = validateDST(_DST);
  const log2p = p.toString(2).length;
  const L = Math.ceil((log2p + k) / 8);
  const len_in_bytes = count * m * L;
  let prb;
  if (expand === "xmd") {
    prb = expand_message_xmd(msg, DST, len_in_bytes, hash);
  } else if (expand === "xof") {
    prb = expand_message_xof(msg, DST, len_in_bytes, k, hash);
  } else if (expand === void 0) {
    prb = msg;
  } else {
    throw new Error('expand must be "xmd", "xof" or undefined');
  }
  const u = new Array(count);
  for (let i = 0; i < count; i++) {
    const e = new Array(m);
    for (let j = 0; j < m; j++) {
      const elm_offset = L * (j + i * m);
      const tv = prb.subarray(elm_offset, elm_offset + L);
      e[j] = mod(os2ip(tv), p);
    }
    u[i] = e;
  }
  return u;
}
function isogenyMap(field, map) {
  const COEFF = map.map((i) => Array.from(i).reverse());
  return (x, y) => {
    const [xNum, xDen, yNum, yDen] = COEFF.map((val) => val.reduce((acc, i) => field.add(field.mul(acc, x), i)));
    x = field.div(xNum, xDen);
    y = field.mul(y, field.div(yNum, yDen));
    return { x, y };
  };
}
function createHasher(Point2, mapToCurve, def2) {
  if (typeof mapToCurve !== "function")
    throw new Error("mapToCurve() must be defined");
  return {
    // Encodes byte string to elliptic curve
    // https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hash-to-curve-16#section-3
    hashToCurve(msg, options) {
      const u = hash_to_field(msg, 2, { ...def2, DST: def2.DST, ...options });
      const u0 = Point2.fromAffine(mapToCurve(u[0]));
      const u1 = Point2.fromAffine(mapToCurve(u[1]));
      const P = u0.add(u1).clearCofactor();
      P.assertValidity();
      return P;
    },
    // https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hash-to-curve-16#section-3
    encodeToCurve(msg, options) {
      const u = hash_to_field(msg, 1, { ...def2, DST: def2.encodeDST, ...options });
      const P = Point2.fromAffine(mapToCurve(u[0])).clearCofactor();
      P.assertValidity();
      return P;
    }
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function getHash(hash) {
  return {
    hash,
    hmac: (key, ...msgs) => hmac(hash, key, concatBytes$2(...msgs)),
    randomBytes
  };
}
function createCurve(curveDef, defHash) {
  const create = (hash) => weierstrass({ ...curveDef, ...getHash(hash) });
  return Object.freeze({ ...create(defHash), create });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const secp256k1P = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
const secp256k1N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
const _1n = BigInt(1);
const _2n = BigInt(2);
const divNearest = (a, b) => (a + b / _2n) / b;
function sqrtMod(y) {
  const P = secp256k1P;
  const _3n2 = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
  const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
  const b2 = y * y * y % P;
  const b3 = b2 * b2 * y % P;
  const b6 = pow2(b3, _3n2, P) * b3 % P;
  const b9 = pow2(b6, _3n2, P) * b3 % P;
  const b11 = pow2(b9, _2n, P) * b2 % P;
  const b22 = pow2(b11, _11n, P) * b11 % P;
  const b44 = pow2(b22, _22n, P) * b22 % P;
  const b88 = pow2(b44, _44n, P) * b44 % P;
  const b176 = pow2(b88, _88n, P) * b88 % P;
  const b220 = pow2(b176, _44n, P) * b44 % P;
  const b223 = pow2(b220, _3n2, P) * b3 % P;
  const t1 = pow2(b223, _23n, P) * b22 % P;
  const t2 = pow2(t1, _6n, P) * b2 % P;
  const root = pow2(t2, _2n, P);
  if (!Fp.eql(Fp.sqr(root), y))
    throw new Error("Cannot find square root");
  return root;
}
const Fp = Fp$1(secp256k1P, void 0, void 0, { sqrt: sqrtMod });
const secp256k1 = createCurve({
  a: BigInt(0),
  b: BigInt(7),
  Fp,
  n: secp256k1N,
  // Base point (x, y) aka generator point
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  lowS: true,
  /**
   * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
   * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
   * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
   * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
   */
  endo: {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (k) => {
      const n = secp256k1N;
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
        throw new Error("splitScalar: Endomorphism failed, k=" + k);
      }
      return { k1neg, k1, k2neg, k2 };
    }
  }
}, sha256);
const _0n = BigInt(0);
const fe = (x) => typeof x === "bigint" && _0n < x && x < secp256k1P;
const ge = (x) => typeof x === "bigint" && _0n < x && x < secp256k1N;
const TAGGED_HASH_PREFIXES = {};
function taggedHash(tag, ...messages) {
  let tagP = TAGGED_HASH_PREFIXES[tag];
  if (tagP === void 0) {
    const tagH = sha256(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
    tagP = concatBytes$1(tagH, tagH);
    TAGGED_HASH_PREFIXES[tag] = tagP;
  }
  return sha256(concatBytes$1(tagP, ...messages));
}
const pointToBytes = (point) => point.toRawBytes(true).slice(1);
const numTo32b = (n) => numberToBytesBE(n, 32);
const modP = (x) => mod(x, secp256k1P);
const modN = (x) => mod(x, secp256k1N);
const Point = secp256k1.ProjectivePoint;
const GmulAdd = (Q, a, b) => Point.BASE.multiplyAndAddUnsafe(Q, a, b);
function schnorrGetExtPubKey(priv2) {
  let d_ = secp256k1.utils.normPrivateKeyToScalar(priv2);
  let p = Point.fromPrivateKey(d_);
  const scalar = p.hasEvenY() ? d_ : modN(-d_);
  return { scalar, bytes: pointToBytes(p) };
}
function lift_x(x) {
  if (!fe(x))
    throw new Error("bad x: need 0 < x < p");
  const xx = modP(x * x);
  const c = modP(xx * x + BigInt(7));
  let y = sqrtMod(c);
  if (y % 2n !== 0n)
    y = modP(-y);
  const p = new Point(x, y, _1n);
  p.assertValidity();
  return p;
}
function challenge(...args) {
  return modN(bytesToNumberBE(taggedHash("BIP0340/challenge", ...args)));
}
function schnorrGetPublicKey(privateKey) {
  return schnorrGetExtPubKey(privateKey).bytes;
}
function schnorrSign(message, privateKey, auxRand = randomBytes(32)) {
  const m = ensureBytes("message", message);
  const { bytes: px, scalar: d } = schnorrGetExtPubKey(privateKey);
  const a = ensureBytes("auxRand", auxRand, 32);
  const t = numTo32b(d ^ bytesToNumberBE(taggedHash("BIP0340/aux", a)));
  const rand = taggedHash("BIP0340/nonce", t, px, m);
  const k_ = modN(bytesToNumberBE(rand));
  if (k_ === _0n)
    throw new Error("sign failed: k is zero");
  const { bytes: rx, scalar: k } = schnorrGetExtPubKey(k_);
  const e = challenge(rx, px, m);
  const sig = new Uint8Array(64);
  sig.set(rx, 0);
  sig.set(numTo32b(modN(k + e * d)), 32);
  if (!schnorrVerify(sig, m, px))
    throw new Error("sign: Invalid signature produced");
  return sig;
}
function schnorrVerify(signature, message, publicKey) {
  const sig = ensureBytes("signature", signature, 64);
  const m = ensureBytes("message", message);
  const pub = ensureBytes("publicKey", publicKey, 32);
  try {
    const P = lift_x(bytesToNumberBE(pub));
    const r = bytesToNumberBE(sig.subarray(0, 32));
    if (!fe(r))
      return false;
    const s = bytesToNumberBE(sig.subarray(32, 64));
    if (!ge(s))
      return false;
    const e = challenge(numTo32b(r), pointToBytes(P), m);
    const R = GmulAdd(P, s, modN(-e));
    if (!R || !R.hasEvenY() || R.toAffine().x !== r)
      return false;
    return true;
  } catch (error) {
    return false;
  }
}
const schnorr = {
  getPublicKey: schnorrGetPublicKey,
  sign: schnorrSign,
  verify: schnorrVerify,
  utils: {
    randomPrivateKey: secp256k1.utils.randomPrivateKey,
    lift_x,
    pointToBytes,
    numberToBytesBE,
    bytesToNumberBE,
    taggedHash,
    mod
  }
};
const isoMap = isogenyMap(Fp, [
  // xNum
  [
    "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
    "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
    "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
    "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"
  ],
  // xDen
  [
    "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
    "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
    "0x0000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ],
  // yNum
  [
    "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
    "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
    "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
    "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"
  ],
  // yDen
  [
    "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
    "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
    "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
    "0x0000000000000000000000000000000000000000000000000000000000000001"
    // LAST 1
  ]
].map((i) => i.map((j) => BigInt(j))));
const mapSWU = mapToCurveSimpleSWU(Fp, {
  A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
  B: BigInt("1771"),
  Z: Fp.create(BigInt("-11"))
});
createHasher(secp256k1.ProjectivePoint, (scalars) => {
  const { x, y } = mapSWU(Fp.create(scalars[0]));
  return isoMap(x, y);
}, {
  DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
  encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
  p: Fp.ORDER,
  m: 1,
  k: 128,
  expand: "xmd",
  hash: sha256
});
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
const ripemd160 = wrapConstructor(() => new RIPEMD160());
const EMPTY = new Uint8Array();
const NULL = new Uint8Array([0]);
function equalBytes(a, b) {
  if (a.length !== b.length)
    return false;
  for (let i = 0; i < a.length; i++)
    if (a[i] !== b[i])
      return false;
  return true;
}
function concatBytes(...arrays) {
  if (arrays.length === 1)
    return arrays[0];
  const length = arrays.reduce((a, arr) => a + arr.length, 0);
  const result = new Uint8Array(length);
  for (let i = 0, pad = 0; i < arrays.length; i++) {
    const arr = arrays[i];
    result.set(arr, pad);
    pad += arr.length;
  }
  return result;
}
const isBytes$1 = (b) => b instanceof Uint8Array;
class Reader {
  constructor(data, path = [], fieldPath = []) {
    this.data = data;
    this.path = path;
    this.fieldPath = fieldPath;
    this.pos = 0;
    this.hasPtr = false;
    this.bitBuf = 0;
    this.bitPos = 0;
  }
  err(msg) {
    return new Error(`Reader(${this.fieldPath.join("/")}): ${msg}`);
  }
  absBytes(n) {
    if (n > this.data.length)
      throw new Error("absBytes: Unexpected end of buffer");
    return this.data.subarray(n);
  }
  bytes(n, peek = false) {
    if (this.bitPos)
      throw this.err("readBytes: bitPos not empty");
    if (!Number.isFinite(n))
      throw this.err(`readBytes: wrong length=${n}`);
    if (this.pos + n > this.data.length)
      throw this.err("readBytes: Unexpected end of buffer");
    const slice = this.data.subarray(this.pos, this.pos + n);
    if (!peek)
      this.pos += n;
    return slice;
  }
  byte(peek = false) {
    if (this.bitPos)
      throw this.err("readByte: bitPos not empty");
    return this.data[peek ? this.pos : this.pos++];
  }
  get leftBytes() {
    return this.data.length - this.pos;
  }
  isEnd() {
    return this.pos >= this.data.length && !this.bitPos;
  }
  length(len) {
    let byteLen;
    if (isCoder(len))
      byteLen = Number(len.decodeStream(this));
    else if (typeof len === "number")
      byteLen = len;
    else if (typeof len === "string")
      byteLen = getPath(this.path, len.split("/"));
    if (typeof byteLen === "bigint")
      byteLen = Number(byteLen);
    if (typeof byteLen !== "number")
      throw this.err(`Wrong length: ${byteLen}`);
    return byteLen;
  }
  bits(bits) {
    if (bits > 32)
      throw this.err("BitReader: cannot read more than 32 bits in single call");
    let out = 0;
    while (bits) {
      if (!this.bitPos) {
        this.bitBuf = this.data[this.pos++];
        this.bitPos = 8;
      }
      const take = Math.min(bits, this.bitPos);
      this.bitPos -= take;
      out = out << take | this.bitBuf >> this.bitPos & 2 ** take - 1;
      this.bitBuf &= 2 ** this.bitPos - 1;
      bits -= take;
    }
    return out >>> 0;
  }
  find(needle, pos = this.pos) {
    if (!isBytes$1(needle))
      throw this.err(`find: needle is not bytes! ${needle}`);
    if (this.bitPos)
      throw this.err("findByte: bitPos not empty");
    if (!needle.length)
      throw this.err(`find: needle is empty`);
    for (let idx = pos; (idx = this.data.indexOf(needle[0], idx)) !== -1; idx++) {
      if (idx === -1)
        return;
      const leftBytes = this.data.length - idx;
      if (leftBytes < needle.length)
        return;
      if (equalBytes(needle, this.data.subarray(idx, idx + needle.length)))
        return idx;
    }
  }
  finish() {
    if (this.isEnd() || this.hasPtr)
      return;
    throw this.err(`${this.leftBytes} bytes ${this.bitPos} bits left after unpack: ${hex$1.encode(this.data.slice(this.pos))}`);
  }
  fieldPathPush(s) {
    this.fieldPath.push(s);
  }
  fieldPathPop() {
    this.fieldPath.pop();
  }
}
class Writer {
  constructor(path = [], fieldPath = []) {
    this.path = path;
    this.fieldPath = fieldPath;
    this.buffers = [];
    this.pos = 0;
    this.ptrs = [];
    this.bitBuf = 0;
    this.bitPos = 0;
  }
  err(msg) {
    return new Error(`Writer(${this.fieldPath.join("/")}): ${msg}`);
  }
  bytes(b) {
    if (this.bitPos)
      throw this.err("writeBytes: ends with non-empty bit buffer");
    this.buffers.push(b);
    this.pos += b.length;
  }
  byte(b) {
    if (this.bitPos)
      throw this.err("writeByte: ends with non-empty bit buffer");
    this.buffers.push(new Uint8Array([b]));
    this.pos++;
  }
  get buffer() {
    if (this.bitPos)
      throw this.err("buffer: ends with non-empty bit buffer");
    let buf = concatBytes(...this.buffers);
    for (let ptr of this.ptrs) {
      const pos = buf.length;
      buf = concatBytes(buf, ptr.buffer);
      const val = ptr.ptr.encode(pos);
      for (let i = 0; i < val.length; i++)
        buf[ptr.pos + i] = val[i];
    }
    return buf;
  }
  length(len, value) {
    if (len === null)
      return;
    if (isCoder(len))
      return len.encodeStream(this, value);
    let byteLen;
    if (typeof len === "number")
      byteLen = len;
    else if (typeof len === "string")
      byteLen = getPath(this.path, len.split("/"));
    if (typeof byteLen === "bigint")
      byteLen = Number(byteLen);
    if (byteLen === void 0 || byteLen !== value)
      throw this.err(`Wrong length: ${byteLen} len=${len} exp=${value}`);
  }
  bits(value, bits) {
    if (bits > 32)
      throw this.err("writeBits: cannot write more than 32 bits in single call");
    if (value >= 2 ** bits)
      throw this.err(`writeBits: value (${value}) >= 2**bits (${bits})`);
    while (bits) {
      const take = Math.min(bits, 8 - this.bitPos);
      this.bitBuf = this.bitBuf << take | value >> bits - take;
      this.bitPos += take;
      bits -= take;
      value &= 2 ** bits - 1;
      if (this.bitPos === 8) {
        this.bitPos = 0;
        this.buffers.push(new Uint8Array([this.bitBuf]));
        this.pos++;
      }
    }
  }
  fieldPathPush(s) {
    this.fieldPath.push(s);
  }
  fieldPathPop() {
    this.fieldPath.pop();
  }
}
const swap = (b) => Uint8Array.from(b).reverse();
function checkBounds(p, value, bits, signed) {
  if (signed) {
    const signBit = 2n ** (bits - 1n);
    if (value < -signBit || value >= signBit)
      throw p.err("sInt: value out of bounds");
  } else {
    if (0n > value || value >= 2n ** bits)
      throw p.err("uInt: value out of bounds");
  }
}
function wrap(inner) {
  return {
    ...inner,
    encode: (value) => {
      const w = new Writer();
      inner.encodeStream(w, value);
      return w.buffer;
    },
    decode: (data) => {
      const r = new Reader(data);
      const res = inner.decodeStream(r);
      r.finish();
      return res;
    }
  };
}
function getPath(objPath, path) {
  objPath = Array.from(objPath);
  let i = 0;
  for (; i < path.length; i++) {
    if (path[i] === "..")
      objPath.pop();
    else
      break;
  }
  let cur = objPath.pop();
  for (; i < path.length; i++) {
    if (!cur || cur[path[i]] === void 0)
      return void 0;
    cur = cur[path[i]];
  }
  return cur;
}
function isCoder(elm) {
  return typeof elm.encode === "function" && typeof elm.encodeStream === "function" && typeof elm.decode === "function" && typeof elm.decodeStream === "function";
}
function dict() {
  return {
    encode: (from) => {
      const to = {};
      for (const [name, value] of from) {
        if (to[name] !== void 0)
          throw new Error(`coders.dict: same key(${name}) appears twice in struct`);
        to[name] = value;
      }
      return to;
    },
    decode: (to) => Object.entries(to)
  };
}
const number = {
  encode: (from) => {
    if (from > BigInt(Number.MAX_SAFE_INTEGER))
      throw new Error(`coders.number: element bigger than MAX_SAFE_INTEGER=${from}`);
    return Number(from);
  },
  decode: (to) => BigInt(to)
};
function tsEnum(e) {
  return {
    encode: (from) => e[from],
    decode: (to) => e[to]
  };
}
function decimal(precision) {
  const decimalMask = 10n ** BigInt(precision);
  return {
    encode: (from) => {
      let s = (from < 0n ? -from : from).toString(10);
      let sep = s.length - precision;
      if (sep < 0) {
        s = s.padStart(s.length - sep, "0");
        sep = 0;
      }
      let i = s.length - 1;
      for (; i >= sep && s[i] === "0"; i--)
        ;
      let [int2, frac] = [s.slice(0, sep), s.slice(sep, i + 1)];
      if (!int2)
        int2 = "0";
      if (from < 0n)
        int2 = "-" + int2;
      if (!frac)
        return int2;
      return `${int2}.${frac}`;
    },
    decode: (to) => {
      let neg = false;
      if (to.startsWith("-")) {
        neg = true;
        to = to.slice(1);
      }
      let sep = to.indexOf(".");
      sep = sep === -1 ? to.length : sep;
      const [intS, fracS] = [to.slice(0, sep), to.slice(sep + 1)];
      const int2 = BigInt(intS) * decimalMask;
      const fracLen = Math.min(fracS.length, precision);
      const frac = BigInt(fracS.slice(0, fracLen)) * 10n ** BigInt(precision - fracLen);
      const value = int2 + frac;
      return neg ? -value : value;
    }
  };
}
function match(lst) {
  return {
    encode: (from) => {
      for (const c of lst) {
        const elm = c.encode(from);
        if (elm !== void 0)
          return elm;
      }
      throw new Error(`match/encode: cannot find match in ${from}`);
    },
    decode: (to) => {
      for (const c of lst) {
        const elm = c.decode(to);
        if (elm !== void 0)
          return elm;
      }
      throw new Error(`match/decode: cannot find match in ${to}`);
    }
  };
}
const coders = { dict, number, tsEnum, decimal, match };
const bigint = (size, le = false, signed = false) => wrap({
  size,
  encodeStream: (w, value) => {
    if (typeof value !== "number" && typeof value !== "bigint")
      throw w.err(`bigint: invalid value: ${value}`);
    let _value = BigInt(value);
    const bLen = BigInt(size);
    checkBounds(w, _value, 8n * bLen, !!signed);
    const signBit = 2n ** (8n * bLen - 1n);
    if (signed && _value < 0)
      _value = _value | signBit;
    let b = [];
    for (let i = 0; i < size; i++) {
      b.push(Number(_value & 255n));
      _value >>= 8n;
    }
    let res = new Uint8Array(b).reverse();
    w.bytes(le ? res.reverse() : res);
  },
  decodeStream: (r) => {
    const bLen = BigInt(size);
    let value = r.bytes(size);
    if (le)
      value = swap(value);
    const b = swap(value);
    const signBit = 2n ** (8n * bLen - 1n);
    let res = 0n;
    for (let i = 0; i < b.length; i++)
      res |= BigInt(b[i]) << 8n * BigInt(i);
    if (signed && res & signBit)
      res = (res ^ signBit) - signBit;
    checkBounds(r, res, 8n * bLen, !!signed);
    return res;
  }
});
bigint(32, true);
const U256BE = bigint(32, false);
bigint(32, true, true);
bigint(32, false, true);
bigint(16, true);
bigint(16, false);
bigint(16, true, true);
bigint(16, false, true);
const U64LE = bigint(8, true);
bigint(8, false);
const I64LE = bigint(8, true, true);
bigint(8, false, true);
const int = (size, le = false, signed = false) => {
  if (size > 6)
    throw new Error("int supports size up to 6 bytes (48 bits), for other use bigint");
  return apply(bigint(size, le, signed), coders.number);
};
const U32LE = int(4, true);
const U32BE = int(4, false);
const I32LE = int(4, true, true);
int(4, false, true);
const U16LE = int(2, true);
int(2, false);
int(2, true, true);
int(2, false, true);
const U8 = int(1, false);
int(1, false, true);
wrap({
  size: 1,
  encodeStream: (w, value) => w.byte(value ? 1 : 0),
  decodeStream: (r) => {
    const value = r.byte();
    if (value !== 0 && value !== 1)
      throw r.err(`bool: invalid value ${value}`);
    return value === 1;
  }
});
const bytes = (len, le = false) => wrap({
  size: typeof len === "number" ? len : void 0,
  encodeStream: (w, value) => {
    if (!isBytes$1(value))
      throw w.err(`bytes: invalid value ${value}`);
    if (!isBytes$1(len))
      w.length(len, value.length);
    w.bytes(le ? swap(value) : value);
    if (isBytes$1(len))
      w.bytes(len);
  },
  decodeStream: (r) => {
    let bytes2;
    if (isBytes$1(len)) {
      const tPos = r.find(len);
      if (!tPos)
        throw r.err(`bytes: cannot find terminator`);
      bytes2 = r.bytes(tPos - r.pos);
      r.bytes(len.length);
    } else
      bytes2 = r.bytes(len === null ? r.leftBytes : r.length(len));
    return le ? swap(bytes2) : bytes2;
  }
});
const string = (len, le = false) => {
  const inner = bytes(len, le);
  return wrap({
    size: inner.size,
    encodeStream: (w, value) => inner.encodeStream(w, utf8.decode(value)),
    decodeStream: (r) => utf8.encode(inner.decodeStream(r))
  });
};
string(NULL);
const hex = (len, le = false, withZero = false) => {
  const inner = bytes(len, le);
  return wrap({
    size: inner.size,
    encodeStream: (w, value) => {
      if (withZero && !value.startsWith("0x"))
        throw new Error("hex(withZero=true).encode input should start with 0x");
      const bytes2 = hex$1.decode(withZero ? value.slice(2) : value);
      return inner.encodeStream(w, bytes2);
    },
    decodeStream: (r) => (withZero ? "0x" : "") + hex$1.encode(inner.decodeStream(r))
  });
};
function apply(inner, b) {
  if (!isCoder(inner))
    throw new Error(`apply: invalid inner value ${inner}`);
  return wrap({
    size: inner.size,
    encodeStream: (w, value) => {
      let innerValue;
      try {
        innerValue = b.decode(value);
      } catch (e) {
        throw w.err("" + e);
      }
      return inner.encodeStream(w, innerValue);
    },
    decodeStream: (r) => {
      const innerValue = inner.decodeStream(r);
      try {
        return b.encode(innerValue);
      } catch (e) {
        throw r.err("" + e);
      }
    }
  });
}
function validate(inner, fn) {
  if (!isCoder(inner))
    throw new Error(`validate: invalid inner value ${inner}`);
  return wrap({
    size: inner.size,
    encodeStream: (w, value) => inner.encodeStream(w, fn(value)),
    decodeStream: (r) => fn(inner.decodeStream(r))
  });
}
const flag = (flagValue, xor = false) => wrap({
  size: flagValue.length,
  encodeStream: (w, value) => {
    if (!!value !== xor)
      w.bytes(flagValue);
  },
  decodeStream: (r) => {
    let hasFlag = r.leftBytes >= flagValue.length;
    if (hasFlag) {
      hasFlag = equalBytes(r.bytes(flagValue.length, true), flagValue);
      if (hasFlag)
        r.bytes(flagValue.length);
    }
    return hasFlag !== xor;
  }
});
function flagged(path, inner, def2) {
  if (!isCoder(inner))
    throw new Error(`flagged: invalid inner value ${inner}`);
  return wrap({
    encodeStream: (w, value) => {
      if (typeof path === "string") {
        if (getPath(w.path, path.split("/")))
          inner.encodeStream(w, value);
        else if (def2)
          inner.encodeStream(w, def2);
      } else {
        path.encodeStream(w, !!value);
        if (!!value)
          inner.encodeStream(w, value);
        else if (def2)
          inner.encodeStream(w, def2);
      }
    },
    decodeStream: (r) => {
      let hasFlag = false;
      if (typeof path === "string")
        hasFlag = getPath(r.path, path.split("/"));
      else
        hasFlag = path.decodeStream(r);
      if (hasFlag)
        return inner.decodeStream(r);
      else if (def2)
        inner.decodeStream(r);
    }
  });
}
function magic(inner, constant, check = true) {
  if (!isCoder(inner))
    throw new Error(`flagged: invalid inner value ${inner}`);
  return wrap({
    size: inner.size,
    encodeStream: (w, value) => inner.encodeStream(w, constant),
    decodeStream: (r) => {
      const value = inner.decodeStream(r);
      if (check && typeof value !== "object" && value !== constant || isBytes$1(constant) && !equalBytes(constant, value)) {
        throw r.err(`magic: invalid value: ${value} !== ${constant}`);
      }
      return;
    }
  });
}
function sizeof(fields) {
  let size = 0;
  for (let f2 of fields) {
    if (!f2.size)
      return;
    size += f2.size;
  }
  return size;
}
function struct(fields) {
  if (Array.isArray(fields))
    throw new Error("Packed.Struct: got array instead of object");
  return wrap({
    size: sizeof(Object.values(fields)),
    encodeStream: (w, value) => {
      if (typeof value !== "object" || value === null)
        throw w.err(`struct: invalid value ${value}`);
      w.path.push(value);
      for (let name in fields) {
        w.fieldPathPush(name);
        let field = fields[name];
        field.encodeStream(w, value[name]);
        w.fieldPathPop();
      }
      w.path.pop();
    },
    decodeStream: (r) => {
      let res = {};
      r.path.push(res);
      for (let name in fields) {
        r.fieldPathPush(name);
        res[name] = fields[name].decodeStream(r);
        r.fieldPathPop();
      }
      r.path.pop();
      return res;
    }
  });
}
function tuple(fields) {
  if (!Array.isArray(fields))
    throw new Error(`Packed.Tuple: got ${typeof fields} instead of array`);
  return wrap({
    size: sizeof(fields),
    encodeStream: (w, value) => {
      if (!Array.isArray(value))
        throw w.err(`tuple: invalid value ${value}`);
      w.path.push(value);
      for (let i = 0; i < fields.length; i++) {
        w.fieldPathPush("" + i);
        fields[i].encodeStream(w, value[i]);
        w.fieldPathPop();
      }
      w.path.pop();
    },
    decodeStream: (r) => {
      let res = [];
      r.path.push(res);
      for (let i = 0; i < fields.length; i++) {
        r.fieldPathPush("" + i);
        res.push(fields[i].decodeStream(r));
        r.fieldPathPop();
      }
      r.path.pop();
      return res;
    }
  });
}
function prefix(len, inner) {
  if (!isCoder(inner))
    throw new Error(`prefix: invalid inner value ${inner}`);
  if (isBytes$1(len))
    throw new Error(`prefix: len cannot be Uint8Array`);
  const b = bytes(len);
  return wrap({
    size: typeof len === "number" ? len : void 0,
    encodeStream: (w, value) => {
      const wChild = new Writer(w.path, w.fieldPath);
      inner.encodeStream(wChild, value);
      b.encodeStream(w, wChild.buffer);
    },
    decodeStream: (r) => {
      const data = b.decodeStream(r);
      return inner.decodeStream(new Reader(data, r.path, r.fieldPath));
    }
  });
}
function array(len, inner) {
  if (!isCoder(inner))
    throw new Error(`array: invalid inner value ${inner}`);
  return wrap({
    size: typeof len === "number" && inner.size ? len * inner.size : void 0,
    encodeStream: (w, value) => {
      if (!Array.isArray(value))
        throw w.err(`array: invalid value ${value}`);
      if (!isBytes$1(len))
        w.length(len, value.length);
      w.path.push(value);
      for (let i = 0; i < value.length; i++) {
        w.fieldPathPush("" + i);
        const elm = value[i];
        const startPos = w.pos;
        inner.encodeStream(w, elm);
        if (isBytes$1(len)) {
          if (len.length > w.pos - startPos)
            continue;
          const data = w.buffer.subarray(startPos, w.pos);
          if (equalBytes(data.subarray(0, len.length), len))
            throw w.err(`array: inner element encoding same as separator. elm=${elm} data=${data}`);
        }
        w.fieldPathPop();
      }
      w.path.pop();
      if (isBytes$1(len))
        w.bytes(len);
    },
    decodeStream: (r) => {
      let res = [];
      if (len === null) {
        let i = 0;
        r.path.push(res);
        while (!r.isEnd()) {
          r.fieldPathPush("" + i++);
          res.push(inner.decodeStream(r));
          r.fieldPathPop();
          if (inner.size && r.leftBytes < inner.size)
            break;
        }
        r.path.pop();
      } else if (isBytes$1(len)) {
        let i = 0;
        r.path.push(res);
        while (true) {
          if (equalBytes(r.bytes(len.length, true), len)) {
            r.bytes(len.length);
            break;
          }
          r.fieldPathPush("" + i++);
          res.push(inner.decodeStream(r));
          r.fieldPathPop();
        }
        r.path.pop();
      } else {
        r.fieldPathPush("arrayLen");
        const length = r.length(len);
        r.fieldPathPop();
        r.path.push(res);
        for (let i = 0; i < length; i++) {
          r.fieldPathPush("" + i);
          res.push(inner.decodeStream(r));
          r.fieldPathPop();
        }
        r.path.pop();
      }
      return res;
    }
  });
}
magic(bytes(0), EMPTY);
/*! scure-btc-signer - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const { ProjectivePoint: ProjPoint, sign: _signECDSA, getPublicKey: _pubECDSA } = secp256k1;
const CURVE_ORDER = secp256k1.CURVE.n;
const def = (value, def2) => value === void 0 ? def2 : value;
const isBytes = isBytes$1;
const hash160 = (msg) => ripemd160(sha256(msg));
const sha256x2 = (...msgs) => sha256(sha256(concat(...msgs)));
const concat = concatBytes;
const base58check = base58check$1(sha256);
function cloneDeep(obj) {
  if (Array.isArray(obj))
    return obj.map((i) => cloneDeep(i));
  else if (obj instanceof Uint8Array)
    return Uint8Array.from(obj);
  else if (["number", "bigint", "boolean", "string", "undefined"].includes(typeof obj))
    return obj;
  else if (obj === null)
    return obj;
  else if (typeof obj === "object") {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, cloneDeep(v)]));
  }
  throw new Error(`cloneDeep: unknown type=${obj} (${typeof obj})`);
}
var PubT;
(function(PubT2) {
  PubT2[PubT2["ecdsa"] = 0] = "ecdsa";
  PubT2[PubT2["schnorr"] = 1] = "schnorr";
})(PubT || (PubT = {}));
function validatePubkey(pub, type) {
  const len = pub.length;
  if (type === PubT.ecdsa) {
    if (len === 32)
      throw new Error("Expected non-Schnorr key");
    ProjPoint.fromHex(pub);
    return pub;
  } else if (type === PubT.schnorr) {
    if (len !== 32)
      throw new Error("Expected 32-byte Schnorr key");
    schnorr.utils.lift_x(schnorr.utils.bytesToNumberBE(pub));
    return pub;
  } else {
    throw new Error("Unknown key type");
  }
}
function isValidPubkey(pub, type) {
  try {
    validatePubkey(pub, type);
    return true;
  } catch (e) {
    return false;
  }
}
const hasLowR = (sig) => sig.r < CURVE_ORDER / 2n;
function signECDSA(hash, privateKey, lowR = false) {
  let sig = _signECDSA(hash, privateKey);
  if (lowR && !hasLowR(sig)) {
    const extraEntropy = new Uint8Array(32);
    for (let cnt = 0; cnt < Number.MAX_SAFE_INTEGER; cnt++) {
      extraEntropy.set(U32LE.encode(cnt));
      sig = _signECDSA(hash, privateKey, { extraEntropy });
      if (hasLowR(sig))
        break;
    }
  }
  return sig.toDERRawBytes();
}
function tapTweak(a, b) {
  const u = schnorr.utils;
  const t = u.taggedHash("TapTweak", a, b);
  const tn = u.bytesToNumberBE(t);
  if (tn >= CURVE_ORDER)
    throw new Error("tweak higher than curve order");
  return tn;
}
function taprootTweakPrivKey(privKey, merkleRoot = new Uint8Array()) {
  const u = schnorr.utils;
  const seckey0 = u.bytesToNumberBE(privKey);
  const P = ProjPoint.fromPrivateKey(seckey0);
  const seckey = P.hasEvenY() ? seckey0 : u.mod(-seckey0, CURVE_ORDER);
  const xP = u.pointToBytes(P);
  const t = tapTweak(xP, merkleRoot);
  return u.numberToBytesBE(u.mod(seckey + t, CURVE_ORDER), 32);
}
function taprootTweakPubkey(pubKey, h) {
  const u = schnorr.utils;
  const t = tapTweak(pubKey, h);
  const P = u.lift_x(u.bytesToNumberBE(pubKey));
  const Q = P.add(ProjPoint.fromPrivateKey(t));
  const parity = Q.hasEvenY() ? 0 : 1;
  return [u.pointToBytes(Q), parity];
}
const PubKeyECDSA = validate(bytes(null), (pub) => validatePubkey(pub, PubT.ecdsa));
const PubKeySchnorr = validate(bytes(32), (pub) => validatePubkey(pub, PubT.schnorr));
const SignatureSchnorr = validate(bytes(null), (sig) => {
  if (sig.length !== 64 && sig.length !== 65)
    throw new Error("Schnorr signature should be 64 or 65 bytes long");
  return sig;
});
function uniqPubkey(pubkeys) {
  const map = {};
  for (const pub of pubkeys) {
    const key = hex$1.encode(pub);
    if (map[key])
      throw new Error(`Multisig: non-uniq pubkey: ${pubkeys.map(hex$1.encode)}`);
    map[key] = true;
  }
}
const NETWORK = {
  bech32: "bc",
  pubKeyHash: 0,
  scriptHash: 5,
  wif: 128
};
const TEST_NETWORK = {
  bech32: "tb",
  pubKeyHash: 111,
  scriptHash: 196,
  wif: 239
};
const PRECISION = 8;
const DEFAULT_VERSION = 2;
const DEFAULT_LOCKTIME = 0;
const DEFAULT_SEQUENCE = 4294967295;
const EMPTY32 = new Uint8Array(32);
const Decimal = coders.decimal(PRECISION);
function _cmpBytes(a, b) {
  if (!isBytes(a) || !isBytes(b))
    throw new Error(`cmp: wrong type a=${typeof a} b=${typeof b}`);
  const len = Math.min(a.length, b.length);
  for (let i = 0; i < len; i++)
    if (a[i] != b[i])
      return Math.sign(a[i] - b[i]);
  return Math.sign(a.length - b.length);
}
var OP;
(function(OP2) {
  OP2[OP2["OP_0"] = 0] = "OP_0";
  OP2[OP2["PUSHDATA1"] = 76] = "PUSHDATA1";
  OP2[OP2["PUSHDATA2"] = 77] = "PUSHDATA2";
  OP2[OP2["PUSHDATA4"] = 78] = "PUSHDATA4";
  OP2[OP2["1NEGATE"] = 79] = "1NEGATE";
  OP2[OP2["RESERVED"] = 80] = "RESERVED";
  OP2[OP2["OP_1"] = 81] = "OP_1";
  OP2[OP2["OP_2"] = 82] = "OP_2";
  OP2[OP2["OP_3"] = 83] = "OP_3";
  OP2[OP2["OP_4"] = 84] = "OP_4";
  OP2[OP2["OP_5"] = 85] = "OP_5";
  OP2[OP2["OP_6"] = 86] = "OP_6";
  OP2[OP2["OP_7"] = 87] = "OP_7";
  OP2[OP2["OP_8"] = 88] = "OP_8";
  OP2[OP2["OP_9"] = 89] = "OP_9";
  OP2[OP2["OP_10"] = 90] = "OP_10";
  OP2[OP2["OP_11"] = 91] = "OP_11";
  OP2[OP2["OP_12"] = 92] = "OP_12";
  OP2[OP2["OP_13"] = 93] = "OP_13";
  OP2[OP2["OP_14"] = 94] = "OP_14";
  OP2[OP2["OP_15"] = 95] = "OP_15";
  OP2[OP2["OP_16"] = 96] = "OP_16";
  OP2[OP2["NOP"] = 97] = "NOP";
  OP2[OP2["VER"] = 98] = "VER";
  OP2[OP2["IF"] = 99] = "IF";
  OP2[OP2["NOTIF"] = 100] = "NOTIF";
  OP2[OP2["VERIF"] = 101] = "VERIF";
  OP2[OP2["VERNOTIF"] = 102] = "VERNOTIF";
  OP2[OP2["ELSE"] = 103] = "ELSE";
  OP2[OP2["ENDIF"] = 104] = "ENDIF";
  OP2[OP2["VERIFY"] = 105] = "VERIFY";
  OP2[OP2["RETURN"] = 106] = "RETURN";
  OP2[OP2["TOALTSTACK"] = 107] = "TOALTSTACK";
  OP2[OP2["FROMALTSTACK"] = 108] = "FROMALTSTACK";
  OP2[OP2["2DROP"] = 109] = "2DROP";
  OP2[OP2["2DUP"] = 110] = "2DUP";
  OP2[OP2["3DUP"] = 111] = "3DUP";
  OP2[OP2["2OVER"] = 112] = "2OVER";
  OP2[OP2["2ROT"] = 113] = "2ROT";
  OP2[OP2["2SWAP"] = 114] = "2SWAP";
  OP2[OP2["IFDUP"] = 115] = "IFDUP";
  OP2[OP2["DEPTH"] = 116] = "DEPTH";
  OP2[OP2["DROP"] = 117] = "DROP";
  OP2[OP2["DUP"] = 118] = "DUP";
  OP2[OP2["NIP"] = 119] = "NIP";
  OP2[OP2["OVER"] = 120] = "OVER";
  OP2[OP2["PICK"] = 121] = "PICK";
  OP2[OP2["ROLL"] = 122] = "ROLL";
  OP2[OP2["ROT"] = 123] = "ROT";
  OP2[OP2["SWAP"] = 124] = "SWAP";
  OP2[OP2["TUCK"] = 125] = "TUCK";
  OP2[OP2["CAT"] = 126] = "CAT";
  OP2[OP2["SUBSTR"] = 127] = "SUBSTR";
  OP2[OP2["LEFT"] = 128] = "LEFT";
  OP2[OP2["RIGHT"] = 129] = "RIGHT";
  OP2[OP2["SIZE"] = 130] = "SIZE";
  OP2[OP2["INVERT"] = 131] = "INVERT";
  OP2[OP2["AND"] = 132] = "AND";
  OP2[OP2["OR"] = 133] = "OR";
  OP2[OP2["XOR"] = 134] = "XOR";
  OP2[OP2["EQUAL"] = 135] = "EQUAL";
  OP2[OP2["EQUALVERIFY"] = 136] = "EQUALVERIFY";
  OP2[OP2["RESERVED1"] = 137] = "RESERVED1";
  OP2[OP2["RESERVED2"] = 138] = "RESERVED2";
  OP2[OP2["1ADD"] = 139] = "1ADD";
  OP2[OP2["1SUB"] = 140] = "1SUB";
  OP2[OP2["2MUL"] = 141] = "2MUL";
  OP2[OP2["2DIV"] = 142] = "2DIV";
  OP2[OP2["NEGATE"] = 143] = "NEGATE";
  OP2[OP2["ABS"] = 144] = "ABS";
  OP2[OP2["NOT"] = 145] = "NOT";
  OP2[OP2["0NOTEQUAL"] = 146] = "0NOTEQUAL";
  OP2[OP2["ADD"] = 147] = "ADD";
  OP2[OP2["SUB"] = 148] = "SUB";
  OP2[OP2["MUL"] = 149] = "MUL";
  OP2[OP2["DIV"] = 150] = "DIV";
  OP2[OP2["MOD"] = 151] = "MOD";
  OP2[OP2["LSHIFT"] = 152] = "LSHIFT";
  OP2[OP2["RSHIFT"] = 153] = "RSHIFT";
  OP2[OP2["BOOLAND"] = 154] = "BOOLAND";
  OP2[OP2["BOOLOR"] = 155] = "BOOLOR";
  OP2[OP2["NUMEQUAL"] = 156] = "NUMEQUAL";
  OP2[OP2["NUMEQUALVERIFY"] = 157] = "NUMEQUALVERIFY";
  OP2[OP2["NUMNOTEQUAL"] = 158] = "NUMNOTEQUAL";
  OP2[OP2["LESSTHAN"] = 159] = "LESSTHAN";
  OP2[OP2["GREATERTHAN"] = 160] = "GREATERTHAN";
  OP2[OP2["LESSTHANOREQUAL"] = 161] = "LESSTHANOREQUAL";
  OP2[OP2["GREATERTHANOREQUAL"] = 162] = "GREATERTHANOREQUAL";
  OP2[OP2["MIN"] = 163] = "MIN";
  OP2[OP2["MAX"] = 164] = "MAX";
  OP2[OP2["WITHIN"] = 165] = "WITHIN";
  OP2[OP2["RIPEMD160"] = 166] = "RIPEMD160";
  OP2[OP2["SHA1"] = 167] = "SHA1";
  OP2[OP2["SHA256"] = 168] = "SHA256";
  OP2[OP2["HASH160"] = 169] = "HASH160";
  OP2[OP2["HASH256"] = 170] = "HASH256";
  OP2[OP2["CODESEPARATOR"] = 171] = "CODESEPARATOR";
  OP2[OP2["CHECKSIG"] = 172] = "CHECKSIG";
  OP2[OP2["CHECKSIGVERIFY"] = 173] = "CHECKSIGVERIFY";
  OP2[OP2["CHECKMULTISIG"] = 174] = "CHECKMULTISIG";
  OP2[OP2["CHECKMULTISIGVERIFY"] = 175] = "CHECKMULTISIGVERIFY";
  OP2[OP2["NOP1"] = 176] = "NOP1";
  OP2[OP2["CHECKLOCKTIMEVERIFY"] = 177] = "CHECKLOCKTIMEVERIFY";
  OP2[OP2["CHECKSEQUENCEVERIFY"] = 178] = "CHECKSEQUENCEVERIFY";
  OP2[OP2["NOP4"] = 179] = "NOP4";
  OP2[OP2["NOP5"] = 180] = "NOP5";
  OP2[OP2["NOP6"] = 181] = "NOP6";
  OP2[OP2["NOP7"] = 182] = "NOP7";
  OP2[OP2["NOP8"] = 183] = "NOP8";
  OP2[OP2["NOP9"] = 184] = "NOP9";
  OP2[OP2["NOP10"] = 185] = "NOP10";
  OP2[OP2["CHECKSIGADD"] = 186] = "CHECKSIGADD";
  OP2[OP2["INVALID"] = 255] = "INVALID";
})(OP || (OP = {}));
const Script = wrap({
  encodeStream: (w, value) => {
    for (let o of value) {
      if (typeof o === "string") {
        if (OP[o] === void 0)
          throw new Error(`Unknown opcode=${o}`);
        w.byte(OP[o]);
        continue;
      } else if (typeof o === "number") {
        if (o === 0) {
          w.byte(0);
          continue;
        } else if (1 <= o && o <= 16) {
          w.byte(OP.OP_1 - 1 + o);
          continue;
        }
      }
      if (typeof o === "number")
        o = ScriptNum().encode(BigInt(o));
      if (!isBytes(o))
        throw new Error(`Wrong Script OP=${o} (${typeof o})`);
      const len = o.length;
      if (len < OP.PUSHDATA1)
        w.byte(len);
      else if (len <= 255) {
        w.byte(OP.PUSHDATA1);
        w.byte(len);
      } else if (len <= 65535) {
        w.byte(OP.PUSHDATA2);
        w.bytes(U16LE.encode(len));
      } else {
        w.byte(OP.PUSHDATA4);
        w.bytes(U32LE.encode(len));
      }
      w.bytes(o);
    }
  },
  decodeStream: (r) => {
    const out = [];
    while (!r.isEnd()) {
      const cur = r.byte();
      if (OP.OP_0 < cur && cur <= OP.PUSHDATA4) {
        let len;
        if (cur < OP.PUSHDATA1)
          len = cur;
        else if (cur === OP.PUSHDATA1)
          len = U8.decodeStream(r);
        else if (cur === OP.PUSHDATA2)
          len = U16LE.decodeStream(r);
        else if (cur === OP.PUSHDATA4)
          len = U32LE.decodeStream(r);
        else
          throw new Error("Should be not possible");
        out.push(r.bytes(len));
      } else if (cur === 0) {
        out.push(0);
      } else if (OP.OP_1 <= cur && cur <= OP.OP_16) {
        out.push(cur - (OP.OP_1 - 1));
      } else {
        const op = OP[cur];
        if (op === void 0)
          throw new Error(`Unknown opcode=${cur.toString(16)}`);
        out.push(op);
      }
    }
    return out;
  }
});
function ScriptNum(bytesLimit = 6, forceMinimal = false) {
  return wrap({
    encodeStream: (w, value) => {
      if (value === 0n)
        return;
      const neg = value < 0;
      const val = BigInt(value);
      const nums = [];
      for (let abs = neg ? -val : val; abs; abs >>= 8n)
        nums.push(Number(abs & 0xffn));
      if (nums[nums.length - 1] >= 128)
        nums.push(neg ? 128 : 0);
      else if (neg)
        nums[nums.length - 1] |= 128;
      w.bytes(new Uint8Array(nums));
    },
    decodeStream: (r) => {
      const len = r.leftBytes;
      if (len > bytesLimit)
        throw new Error(`ScriptNum: number (${len}) bigger than limit=${bytesLimit}`);
      if (len === 0)
        return 0n;
      if (forceMinimal) {
        if ((r.data[len - 1] & 127) === 0) {
          if (len <= 1 || (r.data[len - 2] & 128) === 0)
            throw new Error("Non-minimally encoded ScriptNum");
        }
      }
      let last = 0;
      let res = 0n;
      for (let i = 0; i < len; ++i) {
        last = r.byte();
        res |= BigInt(last) << 8n * BigInt(i);
      }
      if (last >= 128) {
        res &= 2n ** BigInt(len * 8) - 1n >> 1n;
        res = -res;
      }
      return res;
    }
  });
}
function OpToNum(op, bytesLimit = 4, forceMinimal = true) {
  if (typeof op === "number")
    return op;
  if (isBytes(op)) {
    try {
      const val = ScriptNum(bytesLimit, forceMinimal).decode(op);
      if (val > Number.MAX_SAFE_INTEGER)
        return;
      return Number(val);
    } catch (e) {
      return;
    }
  }
}
const CSLimits = {
  253: [253, 2, 253n, 65535n],
  254: [254, 4, 65536n, 4294967295n],
  255: [255, 8, 4294967296n, 18446744073709551615n]
};
const CompactSize = wrap({
  encodeStream: (w, value) => {
    if (typeof value === "number")
      value = BigInt(value);
    if (0n <= value && value <= 252n)
      return w.byte(Number(value));
    for (const [flag2, bytes2, start, stop] of Object.values(CSLimits)) {
      if (start > value || value > stop)
        continue;
      w.byte(flag2);
      for (let i = 0; i < bytes2; i++)
        w.byte(Number(value >> 8n * BigInt(i) & 0xffn));
      return;
    }
    throw w.err(`VarInt too big: ${value}`);
  },
  decodeStream: (r) => {
    const b0 = r.byte();
    if (b0 <= 252)
      return BigInt(b0);
    const [_, bytes2, start] = CSLimits[b0];
    let num = 0n;
    for (let i = 0; i < bytes2; i++)
      num |= BigInt(r.byte()) << 8n * BigInt(i);
    if (num < start)
      throw r.err(`Wrong CompactSize(${8 * bytes2})`);
    return num;
  }
});
const CompactSizeLen = apply(CompactSize, coders.number);
const BTCArray = (t) => array(CompactSize, t);
const VarBytes = bytes(CompactSize);
const RawInput = struct({
  txid: bytes(32, true),
  index: U32LE,
  finalScriptSig: VarBytes,
  sequence: U32LE
  // ?
});
const RawOutput = struct({ amount: U64LE, script: VarBytes });
const EMPTY_OUTPUT = {
  amount: 0xffffffffffffffffn,
  script: EMPTY
};
const RawWitness = array(CompactSizeLen, VarBytes);
const _RawTx = struct({
  version: I32LE,
  segwitFlag: flag(new Uint8Array([0, 1])),
  inputs: BTCArray(RawInput),
  outputs: BTCArray(RawOutput),
  witnesses: flagged("segwitFlag", array("inputs/length", RawWitness)),
  // < 500000000	Block number at which this transaction is unlocked
  // >= 500000000	UNIX timestamp at which this transaction is unlocked
  // Handled as part of PSBTv2
  lockTime: U32LE
});
function validateRawTx(tx) {
  if (tx.segwitFlag && tx.witnesses && !tx.witnesses.length)
    throw new Error("Segwit flag with empty witnesses array");
  return tx;
}
const RawTx = validate(_RawTx, validateRawTx);
function PSBTKeyInfo(info) {
  const [type, kc, vc, reqInc, allowInc, silentIgnore] = info;
  return { type, kc, vc, reqInc, allowInc, silentIgnore };
}
const BIP32Der = struct({
  fingerprint: U32BE,
  path: array(null, U32LE)
});
const _TaprootControlBlock = struct({
  version: U8,
  internalKey: bytes(32),
  merklePath: array(null, bytes(32))
});
const TaprootControlBlock = validate(_TaprootControlBlock, (cb) => {
  if (cb.merklePath.length > 128)
    throw new Error("TaprootControlBlock: merklePath should be of length 0..128 (inclusive)");
  return cb;
});
const TaprootBIP32Der = struct({
  hashes: array(CompactSizeLen, bytes(32)),
  der: BIP32Der
});
const GlobalXPUB = bytes(78);
const tapScriptSigKey = struct({ pubKey: PubKeySchnorr, leafHash: bytes(32) });
const tapTree = array(null, struct({
  depth: U8,
  version: U8,
  script: VarBytes
}));
const BytesInf = bytes(null);
const Bytes20 = bytes(20);
const Bytes32 = bytes(32);
const PSBTGlobal = {
  unsignedTx: [0, false, RawTx, [0], [0], false],
  xpub: [1, GlobalXPUB, BIP32Der, [], [0, 2], false],
  txVersion: [2, false, U32LE, [2], [2], false],
  fallbackLocktime: [3, false, U32LE, [], [2], false],
  inputCount: [4, false, CompactSizeLen, [2], [2], false],
  outputCount: [5, false, CompactSizeLen, [2], [2], false],
  txModifiable: [6, false, U8, [], [2], false],
  version: [251, false, U32LE, [], [0, 2], false],
  proprietary: [252, BytesInf, BytesInf, [], [0, 2], false]
};
const PSBTInput = {
  nonWitnessUtxo: [0, false, RawTx, [], [0, 2], false],
  witnessUtxo: [1, false, RawOutput, [], [0, 2], false],
  partialSig: [2, PubKeyECDSA, BytesInf, [], [0, 2], false],
  sighashType: [3, false, U32LE, [], [0, 2], false],
  redeemScript: [4, false, BytesInf, [], [0, 2], false],
  witnessScript: [5, false, BytesInf, [], [0, 2], false],
  bip32Derivation: [6, PubKeyECDSA, BIP32Der, [], [0, 2], false],
  finalScriptSig: [7, false, BytesInf, [], [0, 2], false],
  finalScriptWitness: [8, false, RawWitness, [], [0, 2], false],
  porCommitment: [9, false, BytesInf, [], [0, 2], false],
  ripemd160: [10, Bytes20, BytesInf, [], [0, 2], false],
  sha256: [11, Bytes32, BytesInf, [], [0, 2], false],
  hash160: [12, Bytes20, BytesInf, [], [0, 2], false],
  hash256: [13, Bytes32, BytesInf, [], [0, 2], false],
  txid: [14, false, Bytes32, [2], [2], true],
  index: [15, false, U32LE, [2], [2], true],
  sequence: [16, false, U32LE, [], [2], true],
  requiredTimeLocktime: [17, false, U32LE, [], [2], false],
  requiredHeightLocktime: [18, false, U32LE, [], [2], false],
  tapKeySig: [19, false, SignatureSchnorr, [], [0, 2], false],
  tapScriptSig: [20, tapScriptSigKey, SignatureSchnorr, [], [0, 2], false],
  tapLeafScript: [21, TaprootControlBlock, BytesInf, [], [0, 2], false],
  tapBip32Derivation: [22, Bytes32, TaprootBIP32Der, [], [0, 2], false],
  tapInternalKey: [23, false, PubKeySchnorr, [], [0, 2], false],
  tapMerkleRoot: [24, false, Bytes32, [], [0, 2], false],
  proprietary: [252, BytesInf, BytesInf, [], [0, 2], false]
};
const PSBTInputFinalKeys = [
  "txid",
  "sequence",
  "index",
  "witnessUtxo",
  "nonWitnessUtxo",
  "finalScriptSig",
  "finalScriptWitness",
  "unknown"
];
const PSBTInputUnsignedKeys = [
  "partialSig",
  "finalScriptSig",
  "finalScriptWitness",
  "tapKeySig",
  "tapScriptSig"
];
const PSBTOutput = {
  redeemScript: [0, false, BytesInf, [], [0, 2], false],
  witnessScript: [1, false, BytesInf, [], [0, 2], false],
  bip32Derivation: [2, PubKeyECDSA, BIP32Der, [], [0, 2], false],
  amount: [3, false, I64LE, [2], [2], true],
  script: [4, false, BytesInf, [2], [2], true],
  tapInternalKey: [5, false, PubKeySchnorr, [], [0, 2], false],
  tapTree: [6, false, tapTree, [], [0, 2], false],
  tapBip32Derivation: [7, PubKeySchnorr, TaprootBIP32Der, [], [0, 2], false],
  proprietary: [252, BytesInf, BytesInf, [], [0, 2], false]
};
const PSBTOutputUnsignedKeys = [];
const PSBTKeyPair = array(NULL, struct({
  //  <key> := <keylen> <keytype> <keydata> WHERE keylen = len(keytype)+len(keydata)
  key: prefix(CompactSizeLen, struct({ type: CompactSizeLen, key: bytes(null) })),
  //  <value> := <valuelen> <valuedata>
  value: bytes(CompactSizeLen)
}));
struct({ type: CompactSizeLen, key: bytes(null) });
function PSBTKeyMap(psbtEnum) {
  const byType = {};
  for (const k in psbtEnum) {
    const [num, kc, vc] = psbtEnum[k];
    byType[num] = [k, kc, vc];
  }
  return wrap({
    encodeStream: (w, value) => {
      let out = [];
      for (const name in psbtEnum) {
        const val = value[name];
        if (val === void 0)
          continue;
        const [type, kc, vc] = psbtEnum[name];
        if (!kc) {
          out.push({ key: { type, key: EMPTY }, value: vc.encode(val) });
        } else {
          const kv = val.map(([k, v]) => [
            kc.encode(k),
            vc.encode(v)
          ]);
          kv.sort((a, b) => _cmpBytes(a[0], b[0]));
          for (const [key, value2] of kv)
            out.push({ key: { key, type }, value: value2 });
        }
      }
      if (value.unknown) {
        value.unknown.sort((a, b) => _cmpBytes(a[0].key, b[0].key));
        for (const [k, v] of value.unknown)
          out.push({ key: k, value: v });
      }
      PSBTKeyPair.encodeStream(w, out);
    },
    decodeStream: (r) => {
      const raw = PSBTKeyPair.decodeStream(r);
      const out = {};
      const noKey = {};
      for (const elm of raw) {
        let name = "unknown";
        let key = elm.key.key;
        let value = elm.value;
        if (byType[elm.key.type]) {
          const [_name, kc, vc] = byType[elm.key.type];
          name = _name;
          if (!kc && key.length) {
            throw new Error(`PSBT: Non-empty key for ${name} (key=${hex$1.encode(key)} value=${hex$1.encode(value)}`);
          }
          key = kc ? kc.decode(key) : void 0;
          value = vc.decode(value);
          if (!kc) {
            if (out[name])
              throw new Error(`PSBT: Same keys: ${name} (key=${key} value=${value})`);
            out[name] = value;
            noKey[name] = true;
            continue;
          }
        } else {
          key = { type: elm.key.type, key: elm.key.key };
        }
        if (noKey[name])
          throw new Error(`PSBT: Key type with empty key and no key=${name} val=${value}`);
        if (!out[name])
          out[name] = [];
        out[name].push([key, value]);
      }
      return out;
    }
  });
}
function checkWSH(s, witnessScript) {
  if (!equalBytes(s.hash, sha256(witnessScript)))
    throw new Error("checkScript: wsh wrong witnessScript hash");
  const w = OutScript.decode(witnessScript);
  if (w.type === "tr" || w.type === "tr_ns" || w.type === "tr_ms")
    throw new Error(`checkScript: P2${w.type} cannot be wrapped in P2SH`);
  if (w.type === "wpkh" || w.type === "sh")
    throw new Error(`checkScript: P2${w.type} cannot be wrapped in P2WSH`);
}
function checkScript(script, redeemScript, witnessScript) {
  if (script) {
    const s = OutScript.decode(script);
    if (s.type === "tr_ns" || s.type === "tr_ms" || s.type === "ms" || s.type == "pk")
      throw new Error(`checkScript: non-wrapped ${s.type}`);
    if (s.type === "sh" && redeemScript) {
      if (!equalBytes(s.hash, hash160(redeemScript)))
        throw new Error("checkScript: sh wrong redeemScript hash");
      const r = OutScript.decode(redeemScript);
      if (r.type === "tr" || r.type === "tr_ns" || r.type === "tr_ms")
        throw new Error(`checkScript: P2${r.type} cannot be wrapped in P2SH`);
      if (r.type === "sh")
        throw new Error("checkScript: P2SH cannot be wrapped in P2SH");
    }
    if (s.type === "wsh" && witnessScript)
      checkWSH(s, witnessScript);
  }
  if (redeemScript) {
    const r = OutScript.decode(redeemScript);
    if (r.type === "wsh" && witnessScript)
      checkWSH(r, witnessScript);
  }
}
const PSBTInputCoder = validate(PSBTKeyMap(PSBTInput), (i) => {
  if (i.finalScriptWitness && !i.finalScriptWitness.length)
    throw new Error("validateInput: wmpty finalScriptWitness");
  if (i.partialSig && !i.partialSig.length)
    throw new Error("Empty partialSig");
  if (i.partialSig)
    for (const [k, v] of i.partialSig)
      validatePubkey(k, PubT.ecdsa);
  if (i.bip32Derivation)
    for (const [k, v] of i.bip32Derivation)
      validatePubkey(k, PubT.ecdsa);
  if (i.requiredTimeLocktime !== void 0 && i.requiredTimeLocktime < 5e8)
    throw new Error(`validateInput: wrong timeLocktime=${i.requiredTimeLocktime}`);
  if (i.requiredHeightLocktime !== void 0 && (i.requiredHeightLocktime <= 0 || i.requiredHeightLocktime >= 5e8))
    throw new Error(`validateInput: wrong heighLocktime=${i.requiredHeightLocktime}`);
  if (i.nonWitnessUtxo && i.index !== void 0) {
    const last = i.nonWitnessUtxo.outputs.length - 1;
    if (i.index > last)
      throw new Error(`validateInput: index(${i.index}) not in nonWitnessUtxo`);
    const prevOut = i.nonWitnessUtxo.outputs[i.index];
    if (i.witnessUtxo && (!equalBytes(i.witnessUtxo.script, prevOut.script) || i.witnessUtxo.amount !== prevOut.amount))
      throw new Error("validateInput: witnessUtxo different from nonWitnessUtxo");
  }
  if (i.tapLeafScript) {
    for (const [k, v] of i.tapLeafScript) {
      if ((k.version & 254) !== v[v.length - 1])
        throw new Error("validateInput: tapLeafScript version mimatch");
      if (v[v.length - 1] & 1)
        throw new Error("validateInput: tapLeafScript version has parity bit!");
    }
  }
  if (i.nonWitnessUtxo && i.index && i.txid) {
    const outputs = i.nonWitnessUtxo.outputs;
    if (outputs.length - 1 < i.index)
      throw new Error("nonWitnessUtxo: incorect output index");
    const tx = Transaction.fromRaw(RawTx.encode(i.nonWitnessUtxo));
    const txid = hex$1.encode(i.txid);
    if (tx.id !== txid)
      throw new Error(`nonWitnessUtxo: wrong txid, exp=${txid} got=${tx.id}`);
  }
  return i;
});
const PSBTOutputCoder = validate(PSBTKeyMap(PSBTOutput), (o) => {
  if (o.bip32Derivation)
    for (const [k, v] of o.bip32Derivation)
      validatePubkey(k, PubT.ecdsa);
  return o;
});
const PSBTGlobalCoder = validate(PSBTKeyMap(PSBTGlobal), (g) => {
  const version = g.version || 0;
  if (version === 0) {
    if (!g.unsignedTx)
      throw new Error("PSBTv0: missing unsignedTx");
    if (g.unsignedTx.segwitFlag || g.unsignedTx.witnesses)
      throw new Error("PSBTv0: witness in unsingedTx");
    for (const inp of g.unsignedTx.inputs)
      if (inp.finalScriptSig && inp.finalScriptSig.length)
        throw new Error("PSBTv0: input scriptSig found in unsignedTx");
  }
  return g;
});
const _RawPSBTV0 = struct({
  magic: magic(string(new Uint8Array([255])), "psbt"),
  global: PSBTGlobalCoder,
  inputs: array("global/unsignedTx/inputs/length", PSBTInputCoder),
  outputs: array(null, PSBTOutputCoder)
});
const _RawPSBTV2 = struct({
  magic: magic(string(new Uint8Array([255])), "psbt"),
  global: PSBTGlobalCoder,
  inputs: array("global/inputCount", PSBTInputCoder),
  outputs: array("global/outputCount", PSBTOutputCoder)
});
const _DebugPSBT = struct({
  magic: magic(string(new Uint8Array([255])), "psbt"),
  items: array(null, apply(array(NULL, tuple([hex(CompactSizeLen), bytes(CompactSize)])), coders.dict()))
});
function validatePSBTFields(version, info, lst) {
  for (const k in lst) {
    if (k === "unknown")
      continue;
    if (!info[k])
      continue;
    const { allowInc } = PSBTKeyInfo(info[k]);
    if (!allowInc.includes(version))
      throw new Error(`PSBTv${version}: field ${k} is not allowed`);
  }
  for (const k in info) {
    const { reqInc } = PSBTKeyInfo(info[k]);
    if (reqInc.includes(version) && lst[k] === void 0)
      throw new Error(`PSBTv${version}: missing required field ${k}`);
  }
}
function cleanPSBTFields(version, info, lst) {
  const out = {};
  for (const _k in lst) {
    const k = _k;
    if (k !== "unknown") {
      if (!info[k])
        continue;
      const { allowInc, silentIgnore } = PSBTKeyInfo(info[k]);
      if (!allowInc.includes(version)) {
        if (silentIgnore)
          continue;
        throw new Error(`Failed to serialize in PSBTv${version}: ${k} but versions allows inclusion=${allowInc}`);
      }
    }
    out[k] = lst[k];
  }
  return out;
}
function validatePSBT(tx) {
  const version = tx && tx.global && tx.global.version || 0;
  validatePSBTFields(version, PSBTGlobal, tx.global);
  for (const i of tx.inputs)
    validatePSBTFields(version, PSBTInput, i);
  for (const o of tx.outputs)
    validatePSBTFields(version, PSBTOutput, o);
  const inputCount = !version ? tx.global.unsignedTx.inputs.length : tx.global.inputCount;
  if (tx.inputs.length < inputCount)
    throw new Error("Not enough inputs");
  const inputsLeft = tx.inputs.slice(inputCount);
  if (inputsLeft.length > 1 || inputsLeft.length && Object.keys(inputsLeft[0]).length)
    throw new Error(`Unexpected inputs left in tx=${inputsLeft}`);
  const outputCount = !version ? tx.global.unsignedTx.outputs.length : tx.global.outputCount;
  if (tx.outputs.length < outputCount)
    throw new Error("Not outputs inputs");
  const outputsLeft = tx.outputs.slice(outputCount);
  if (outputsLeft.length > 1 || outputsLeft.length && Object.keys(outputsLeft[0]).length)
    throw new Error(`Unexpected outputs left in tx=${outputsLeft}`);
  return tx;
}
function mergeKeyMap(psbtEnum, val, cur, allowedFields) {
  const res = { ...cur, ...val };
  for (const k in psbtEnum) {
    const key = k;
    const [_, kC, vC] = psbtEnum[key];
    const cannotChange = allowedFields && !allowedFields.includes(k);
    if (val[k] === void 0 && k in val) {
      if (cannotChange)
        throw new Error(`Cannot remove signed field=${k}`);
      delete res[k];
    } else if (kC) {
      const oldKV = cur && cur[k] ? cur[k] : [];
      let newKV = val[key];
      if (newKV) {
        if (!Array.isArray(newKV))
          throw new Error(`keyMap(${k}): KV pairs should be [k, v][]`);
        newKV = newKV.map((val2) => {
          if (val2.length !== 2)
            throw new Error(`keyMap(${k}): KV pairs should be [k, v][]`);
          return [
            typeof val2[0] === "string" ? kC.decode(hex$1.decode(val2[0])) : val2[0],
            typeof val2[1] === "string" ? vC.decode(hex$1.decode(val2[1])) : val2[1]
          ];
        });
        const map = {};
        const add = (kStr, k2, v) => {
          if (map[kStr] === void 0) {
            map[kStr] = [k2, v];
            return;
          }
          const oldVal = hex$1.encode(vC.encode(map[kStr][1]));
          const newVal = hex$1.encode(vC.encode(v));
          if (oldVal !== newVal)
            throw new Error(`keyMap(${key}): same key=${kStr} oldVal=${oldVal} newVal=${newVal}`);
        };
        for (const [k2, v] of oldKV) {
          const kStr = hex$1.encode(kC.encode(k2));
          add(kStr, k2, v);
        }
        for (const [k2, v] of newKV) {
          const kStr = hex$1.encode(kC.encode(k2));
          if (v === void 0) {
            if (cannotChange)
              throw new Error(`Cannot remove signed field=${key}/${k2}`);
            delete map[kStr];
          } else
            add(kStr, k2, v);
        }
        res[key] = Object.values(map);
      }
    } else if (typeof res[k] === "string") {
      res[k] = vC.decode(hex$1.decode(res[k]));
    } else if (cannotChange && k in val && cur && cur[k] !== void 0) {
      if (!equalBytes(vC.encode(val[k]), vC.encode(cur[k])))
        throw new Error(`Cannot change signed field=${k}`);
    }
  }
  for (const k in res)
    if (!psbtEnum[k])
      delete res[k];
  return res;
}
const RawPSBTV0 = validate(_RawPSBTV0, validatePSBT);
const RawPSBTV2 = validate(_RawPSBTV2, validatePSBT);
const TxHashIdx = struct({ txid: bytes(32, true), index: U32LE });
const OutPK = {
  encode(from) {
    if (from.length !== 2 || !isBytes(from[0]) || !isValidPubkey(from[0], PubT.ecdsa) || from[1] !== "CHECKSIG")
      return;
    return { type: "pk", pubkey: from[0] };
  },
  decode: (to) => to.type === "pk" ? [to.pubkey, "CHECKSIG"] : void 0
};
const p2pk = (pubkey, network = NETWORK) => {
  if (!isValidPubkey(pubkey, PubT.ecdsa))
    throw new Error("P2PK: invalid publicKey");
  return {
    type: "pk",
    script: OutScript.encode({ type: "pk", pubkey })
  };
};
const OutPKH = {
  encode(from) {
    if (from.length !== 5 || from[0] !== "DUP" || from[1] !== "HASH160" || !isBytes(from[2]))
      return;
    if (from[3] !== "EQUALVERIFY" || from[4] !== "CHECKSIG")
      return;
    return { type: "pkh", hash: from[2] };
  },
  decode: (to) => to.type === "pkh" ? ["DUP", "HASH160", to.hash, "EQUALVERIFY", "CHECKSIG"] : void 0
};
const p2pkh = (publicKey, network = NETWORK) => {
  if (!isValidPubkey(publicKey, PubT.ecdsa))
    throw new Error("P2PKH: invalid publicKey");
  const hash = hash160(publicKey);
  return {
    type: "pkh",
    script: OutScript.encode({ type: "pkh", hash }),
    address: Address(network).encode({ type: "pkh", hash })
  };
};
const OutSH = {
  encode(from) {
    if (from.length !== 3 || from[0] !== "HASH160" || !isBytes(from[1]) || from[2] !== "EQUAL")
      return;
    return { type: "sh", hash: from[1] };
  },
  decode: (to) => to.type === "sh" ? ["HASH160", to.hash, "EQUAL"] : void 0
};
const p2sh = (child, network = NETWORK) => {
  const cs = child.script;
  if (!isBytes(cs))
    throw new Error(`Wrong script: ${typeof child.script}, expected Uint8Array`);
  const hash = hash160(cs);
  const script = OutScript.encode({ type: "sh", hash });
  checkScript(script, cs, child.witnessScript);
  const res = {
    type: "sh",
    redeemScript: cs,
    script: OutScript.encode({ type: "sh", hash }),
    address: Address(network).encode({ type: "sh", hash })
  };
  if (child.witnessScript)
    res.witnessScript = child.witnessScript;
  return res;
};
const OutWSH = {
  encode(from) {
    if (from.length !== 2 || from[0] !== 0 || !isBytes(from[1]))
      return;
    if (from[1].length !== 32)
      return;
    return { type: "wsh", hash: from[1] };
  },
  decode: (to) => to.type === "wsh" ? [0, to.hash] : void 0
};
const p2wsh = (child, network = NETWORK) => {
  const cs = child.script;
  if (!isBytes(cs))
    throw new Error(`Wrong script: ${typeof cs}, expected Uint8Array`);
  const hash = sha256(cs);
  const script = OutScript.encode({ type: "wsh", hash });
  checkScript(script, void 0, cs);
  return {
    type: "wsh",
    witnessScript: cs,
    script: OutScript.encode({ type: "wsh", hash }),
    address: Address(network).encode({ type: "wsh", hash })
  };
};
const OutWPKH = {
  encode(from) {
    if (from.length !== 2 || from[0] !== 0 || !isBytes(from[1]))
      return;
    if (from[1].length !== 20)
      return;
    return { type: "wpkh", hash: from[1] };
  },
  decode: (to) => to.type === "wpkh" ? [0, to.hash] : void 0
};
const p2wpkh = (publicKey, network = NETWORK) => {
  if (!isValidPubkey(publicKey, PubT.ecdsa))
    throw new Error("P2WPKH: invalid publicKey");
  if (publicKey.length === 65)
    throw new Error("P2WPKH: uncompressed public key");
  const hash = hash160(publicKey);
  return {
    type: "wpkh",
    script: OutScript.encode({ type: "wpkh", hash }),
    address: Address(network).encode({ type: "wpkh", hash })
  };
};
const OutMS = {
  encode(from) {
    const last = from.length - 1;
    if (from[last] !== "CHECKMULTISIG")
      return;
    const m = from[0];
    const n = from[last - 1];
    if (typeof m !== "number" || typeof n !== "number")
      return;
    const pubkeys = from.slice(1, -2);
    if (n !== pubkeys.length)
      return;
    for (const pub of pubkeys)
      if (!isBytes(pub))
        return;
    return { type: "ms", m, pubkeys };
  },
  // checkmultisig(n, ..pubkeys, m)
  decode: (to) => to.type === "ms" ? [to.m, ...to.pubkeys, to.pubkeys.length, "CHECKMULTISIG"] : void 0
};
const p2ms = (m, pubkeys, allowSamePubkeys = false) => {
  if (!allowSamePubkeys)
    uniqPubkey(pubkeys);
  return { type: "ms", script: OutScript.encode({ type: "ms", pubkeys, m }) };
};
const OutTR = {
  encode(from) {
    if (from.length !== 2 || from[0] !== 1 || !isBytes(from[1]))
      return;
    return { type: "tr", pubkey: from[1] };
  },
  decode: (to) => to.type === "tr" ? [1, to.pubkey] : void 0
};
function taprootListToTree(taprootList) {
  const lst = Array.from(taprootList);
  while (lst.length >= 2) {
    lst.sort((a2, b2) => (b2.weight || 1) - (a2.weight || 1));
    const b = lst.pop();
    const a = lst.pop();
    const weight = ((a == null ? void 0 : a.weight) || 1) + ((b == null ? void 0 : b.weight) || 1);
    lst.push({
      weight,
      // Unwrap children array
      // TODO: Very hard to remove any here
      childs: [(a == null ? void 0 : a.childs) || a, (b == null ? void 0 : b.childs) || b]
    });
  }
  const last = lst[0];
  return (last == null ? void 0 : last.childs) || last;
}
function checkTaprootScript(script, allowUnknowOutput = false) {
  const out = OutScript.decode(script);
  if (out.type === "unknown" && allowUnknowOutput)
    return;
  if (!["tr_ns", "tr_ms"].includes(out.type))
    throw new Error(`P2TR: invalid leaf script=${out.type}`);
}
function taprootHashTree(tree, allowUnknowOutput = false) {
  if (!tree)
    throw new Error("taprootHashTree: empty tree");
  if (Array.isArray(tree) && tree.length === 1)
    tree = tree[0];
  if (!Array.isArray(tree)) {
    const { leafVersion: version, script: leafScript, tapInternalKey } = tree;
    if (tree.tapLeafScript || tree.tapMerkleRoot && !equalBytes(tree.tapMerkleRoot, EMPTY))
      throw new Error("P2TR: tapRoot leafScript cannot have tree");
    if (tapInternalKey && equalBytes(tapInternalKey, TAPROOT_UNSPENDABLE_KEY))
      throw new Error("P2TR: tapRoot leafScript cannot have unspendble key");
    const script = typeof leafScript === "string" ? hex$1.decode(leafScript) : leafScript;
    if (!isBytes(script))
      throw new Error(`checkScript: wrong script type=${script}`);
    checkTaprootScript(script, allowUnknowOutput);
    return {
      type: "leaf",
      tapInternalKey,
      version,
      script,
      hash: tapLeafHash(script, version)
    };
  }
  if (tree.length !== 2)
    tree = taprootListToTree(tree);
  if (tree.length !== 2)
    throw new Error("hashTree: non binary tree!");
  const left = taprootHashTree(tree[0], allowUnknowOutput);
  const right = taprootHashTree(tree[1], allowUnknowOutput);
  let [lH, rH] = [left.hash, right.hash];
  if (_cmpBytes(rH, lH) === -1)
    [lH, rH] = [rH, lH];
  return { type: "branch", left, right, hash: schnorr.utils.taggedHash("TapBranch", lH, rH) };
}
function taprootAddPath(tree, path = []) {
  if (!tree)
    throw new Error(`taprootAddPath: empty tree`);
  if (tree.type === "leaf")
    return { ...tree, path };
  if (tree.type !== "branch")
    throw new Error(`taprootAddPath: wrong type=${tree}`);
  return {
    ...tree,
    path,
    // Left element has right hash in path and otherwise
    left: taprootAddPath(tree.left, [tree.right.hash, ...path]),
    right: taprootAddPath(tree.right, [tree.left.hash, ...path])
  };
}
function taprootWalkTree(tree) {
  if (!tree)
    throw new Error(`taprootAddPath: empty tree`);
  if (tree.type === "leaf")
    return [tree];
  if (tree.type !== "branch")
    throw new Error(`taprootWalkTree: wrong type=${tree}`);
  return [...taprootWalkTree(tree.left), ...taprootWalkTree(tree.right)];
}
const TAPROOT_UNSPENDABLE_KEY = sha256(ProjPoint.BASE.toRawBytes(false));
function p2tr(internalPubKey, tree, network = NETWORK, allowUnknowOutput = false) {
  if (!internalPubKey && !tree)
    throw new Error("p2tr: should have pubKey or scriptTree (or both)");
  const pubKey = typeof internalPubKey === "string" ? hex$1.decode(internalPubKey) : internalPubKey || TAPROOT_UNSPENDABLE_KEY;
  if (!isValidPubkey(pubKey, PubT.schnorr))
    throw new Error("p2tr: non-schnorr pubkey");
  let hashedTree = tree ? taprootAddPath(taprootHashTree(tree, allowUnknowOutput)) : void 0;
  const tapMerkleRoot = hashedTree ? hashedTree.hash : void 0;
  const [tweakedPubkey, parity] = taprootTweakPubkey(pubKey, tapMerkleRoot || EMPTY);
  let leaves;
  if (hashedTree) {
    leaves = taprootWalkTree(hashedTree).map((l) => ({
      ...l,
      controlBlock: TaprootControlBlock.encode({
        version: (l.version || TAP_LEAF_VERSION) + parity,
        internalKey: l.tapInternalKey || pubKey,
        merklePath: l.path
      })
    }));
  }
  let tapLeafScript;
  if (leaves) {
    tapLeafScript = leaves.map((l) => [
      TaprootControlBlock.decode(l.controlBlock),
      concat(l.script, new Uint8Array([l.version || TAP_LEAF_VERSION]))
    ]);
  }
  const res = {
    type: "tr",
    script: OutScript.encode({ type: "tr", pubkey: tweakedPubkey }),
    address: Address(network).encode({ type: "tr", pubkey: tweakedPubkey }),
    // For tests
    tweakedPubkey,
    // PSBT stuff
    tapInternalKey: pubKey
  };
  if (leaves)
    res.leaves = leaves;
  if (tapLeafScript)
    res.tapLeafScript = tapLeafScript;
  if (tapMerkleRoot)
    res.tapMerkleRoot = tapMerkleRoot;
  return res;
}
const OutTRNS = {
  encode(from) {
    const last = from.length - 1;
    if (from[last] !== "CHECKSIG")
      return;
    const pubkeys = [];
    for (let i = 0; i < last; i++) {
      const elm = from[i];
      if (i & 1) {
        if (elm !== "CHECKSIGVERIFY" || i === last - 1)
          return;
        continue;
      }
      if (!isBytes(elm))
        return;
      pubkeys.push(elm);
    }
    return { type: "tr_ns", pubkeys };
  },
  decode: (to) => {
    if (to.type !== "tr_ns")
      return;
    const out = [];
    for (let i = 0; i < to.pubkeys.length - 1; i++)
      out.push(to.pubkeys[i], "CHECKSIGVERIFY");
    out.push(to.pubkeys[to.pubkeys.length - 1], "CHECKSIG");
    return out;
  }
};
function combinations(m, list) {
  const res = [];
  if (!Array.isArray(list))
    throw new Error("combinations: lst arg should be array");
  const n = list.length;
  if (m > n)
    throw new Error("combinations: m > lst.length, no combinations possible");
  const idx = Array.from({ length: m }, (_, i) => i);
  const last = idx.length - 1;
  main:
    for (; ; ) {
      res.push(idx.map((i2) => list[i2]));
      idx[last] += 1;
      let i = last;
      for (; i >= 0 && idx[i] > n - m + i; i--) {
        idx[i] = 0;
        if (i === 0)
          break main;
        idx[i - 1] += 1;
      }
      for (i += 1; i < idx.length; i++)
        idx[i] = idx[i - 1] + 1;
    }
  return res;
}
const p2tr_ns = (m, pubkeys, allowSamePubkeys = false) => {
  if (!allowSamePubkeys)
    uniqPubkey(pubkeys);
  return combinations(m, pubkeys).map((i) => ({
    type: "tr_ns",
    script: OutScript.encode({ type: "tr_ns", pubkeys: i })
  }));
};
const p2tr_pk = (pubkey) => p2tr_ns(1, [pubkey], void 0)[0];
const OutTRMS = {
  encode(from) {
    const last = from.length - 1;
    if (from[last] !== "NUMEQUAL" || from[1] !== "CHECKSIG")
      return;
    const pubkeys = [];
    const m = OpToNum(from[last - 1]);
    if (typeof m !== "number")
      return;
    for (let i = 0; i < last - 1; i++) {
      const elm = from[i];
      if (i & 1) {
        if (elm !== (i === 1 ? "CHECKSIG" : "CHECKSIGADD"))
          throw new Error("OutScript.encode/tr_ms: wrong element");
        continue;
      }
      if (!isBytes(elm))
        throw new Error("OutScript.encode/tr_ms: wrong key element");
      pubkeys.push(elm);
    }
    return { type: "tr_ms", pubkeys, m };
  },
  decode: (to) => {
    if (to.type !== "tr_ms")
      return;
    const out = [to.pubkeys[0], "CHECKSIG"];
    for (let i = 1; i < to.pubkeys.length; i++)
      out.push(to.pubkeys[i], "CHECKSIGADD");
    out.push(to.m, "NUMEQUAL");
    return out;
  }
};
function p2tr_ms(m, pubkeys, allowSamePubkeys = false) {
  if (!allowSamePubkeys)
    uniqPubkey(pubkeys);
  return {
    type: "tr_ms",
    script: OutScript.encode({ type: "tr_ms", pubkeys, m })
  };
}
const OutUnknown = {
  encode(from) {
    return { type: "unknown", script: Script.encode(from) };
  },
  decode: (to) => to.type === "unknown" ? Script.decode(to.script) : void 0
};
const OutScripts = [
  OutPK,
  OutPKH,
  OutSH,
  OutWSH,
  OutWPKH,
  OutMS,
  OutTR,
  OutTRNS,
  OutTRMS,
  OutUnknown
];
const _OutScript = apply(Script, coders.match(OutScripts));
const OutScript = validate(_OutScript, (i) => {
  if (i.type === "pk" && !isValidPubkey(i.pubkey, PubT.ecdsa))
    throw new Error("OutScript/pk: wrong key");
  if ((i.type === "pkh" || i.type === "sh" || i.type === "wpkh") && (!isBytes(i.hash) || i.hash.length !== 20))
    throw new Error(`OutScript/${i.type}: wrong hash`);
  if (i.type === "wsh" && (!isBytes(i.hash) || i.hash.length !== 32))
    throw new Error(`OutScript/wsh: wrong hash`);
  if (i.type === "tr" && (!isBytes(i.pubkey) || !isValidPubkey(i.pubkey, PubT.schnorr)))
    throw new Error("OutScript/tr: wrong taproot public key");
  if (i.type === "ms" || i.type === "tr_ns" || i.type === "tr_ms") {
    if (!Array.isArray(i.pubkeys))
      throw new Error("OutScript/multisig: wrong pubkeys array");
  }
  if (i.type === "ms") {
    const n = i.pubkeys.length;
    for (const p of i.pubkeys)
      if (!isValidPubkey(p, PubT.ecdsa))
        throw new Error("OutScript/multisig: wrong pubkey");
    if (i.m <= 0 || n > 16 || i.m > n)
      throw new Error("OutScript/multisig: invalid params");
  }
  if (i.type === "tr_ns" || i.type === "tr_ms") {
    for (const p of i.pubkeys)
      if (!isValidPubkey(p, PubT.schnorr))
        throw new Error(`OutScript/${i.type}: wrong pubkey`);
  }
  if (i.type === "tr_ms") {
    const n = i.pubkeys.length;
    if (i.m <= 0 || n > 999 || i.m > n)
      throw new Error("OutScript/tr_ms: invalid params");
  }
  return i;
});
function validateWitness(version, data) {
  if (data.length < 2 || data.length > 40)
    throw new Error("Witness: invalid length");
  if (version > 16)
    throw new Error("Witness: invalid version");
  if (version === 0 && !(data.length === 20 || data.length === 32))
    throw new Error("Witness: invalid length for version");
}
function programToWitness(version, data, network = NETWORK) {
  validateWitness(version, data);
  const coder = version === 0 ? bech32 : bech32m;
  return coder.encode(network.bech32, [version].concat(coder.toWords(data)));
}
function formatKey(hashed, prefix2) {
  return base58check.encode(concat(Uint8Array.from(prefix2), hashed));
}
function WIF(network = NETWORK) {
  return {
    encode(privKey) {
      const compressed = concat(privKey, new Uint8Array([1]));
      return formatKey(compressed.subarray(0, 33), [network.wif]);
    },
    decode(wif) {
      let parsed = base58check.decode(wif);
      if (parsed[0] !== network.wif)
        throw new Error("Wrong WIF prefix");
      parsed = parsed.subarray(1);
      if (parsed.length !== 33)
        throw new Error("Wrong WIF length");
      if (parsed[32] !== 1)
        throw new Error("Wrong WIF postfix");
      return parsed.subarray(0, -1);
    }
  };
}
function Address(network = NETWORK) {
  return {
    encode(from) {
      const { type } = from;
      if (type === "wpkh")
        return programToWitness(0, from.hash, network);
      else if (type === "wsh")
        return programToWitness(0, from.hash, network);
      else if (type === "tr")
        return programToWitness(1, from.pubkey, network);
      else if (type === "pkh")
        return formatKey(from.hash, [network.pubKeyHash]);
      else if (type === "sh")
        return formatKey(from.hash, [network.scriptHash]);
      throw new Error(`Unknown address type=${type}`);
    },
    decode(address) {
      if (address.length < 14 || address.length > 74)
        throw new Error("Invalid address length");
      if (network.bech32 && address.toLowerCase().startsWith(network.bech32)) {
        let res;
        try {
          res = bech32.decode(address);
          if (res.words[0] !== 0)
            throw new Error(`bech32: wrong version=${res.words[0]}`);
        } catch (_) {
          res = bech32m.decode(address);
          if (res.words[0] === 0)
            throw new Error(`bech32m: wrong version=${res.words[0]}`);
        }
        if (res.prefix !== network.bech32)
          throw new Error(`wrong bech32 prefix=${res.prefix}`);
        const [version, ...program] = res.words;
        const data2 = bech32.fromWords(program);
        validateWitness(version, data2);
        if (version === 0 && data2.length === 32)
          return { type: "wsh", hash: data2 };
        else if (version === 0 && data2.length === 20)
          return { type: "wpkh", hash: data2 };
        else if (version === 1 && data2.length === 32)
          return { type: "tr", pubkey: data2 };
        else
          throw new Error("Unkown witness program");
      }
      const data = base58.decode(address);
      if (data.length !== 25)
        throw new Error("Invalid base58 address");
      if (data[0] === network.pubKeyHash) {
        const bytes2 = base58.decode(address);
        return { type: "pkh", hash: bytes2.slice(1, bytes2.length - 4) };
      } else if (data[0] === network.scriptHash) {
        const bytes2 = base58.decode(address);
        return {
          type: "sh",
          hash: base58.decode(address).slice(1, bytes2.length - 4)
        };
      }
      throw new Error(`Invalid address prefix=${data[0]}`);
    }
  };
}
var SignatureHash;
(function(SignatureHash2) {
  SignatureHash2[SignatureHash2["DEFAULT"] = 0] = "DEFAULT";
  SignatureHash2[SignatureHash2["ALL"] = 1] = "ALL";
  SignatureHash2[SignatureHash2["NONE"] = 2] = "NONE";
  SignatureHash2[SignatureHash2["SINGLE"] = 3] = "SINGLE";
  SignatureHash2[SignatureHash2["ANYONECANPAY"] = 128] = "ANYONECANPAY";
})(SignatureHash || (SignatureHash = {}));
const SigHashCoder = apply(U32LE, coders.tsEnum(SignatureHash));
function unpackSighash(hashType) {
  const masked = hashType & 31;
  return {
    isAny: !!(hashType & SignatureHash.ANYONECANPAY),
    isNone: masked === SignatureHash.NONE,
    isSingle: masked === SignatureHash.SINGLE
  };
}
const _sortPubkeys = (pubkeys) => Array.from(pubkeys).sort(_cmpBytes);
function inputBeforeSign(i) {
  if (i.txid === void 0 || i.index === void 0)
    throw new Error("Transaction/input: txid and index required");
  return {
    txid: i.txid,
    index: i.index,
    sequence: def(i.sequence, DEFAULT_SEQUENCE),
    finalScriptSig: def(i.finalScriptSig, EMPTY)
  };
}
function cleanFinalInput(i) {
  for (const _k in i) {
    const k = _k;
    if (!PSBTInputFinalKeys.includes(k))
      delete i[k];
  }
}
function outputBeforeSign(i) {
  if (i.script === void 0 || i.amount === void 0)
    throw new Error("Transaction/output: script and amount required");
  return { script: i.script, amount: i.amount };
}
const TAP_LEAF_VERSION = 192;
const tapLeafHash = (script, version = TAP_LEAF_VERSION) => schnorr.utils.taggedHash("TapLeaf", new Uint8Array([version]), VarBytes.encode(script));
function getTaprootKeys(privKey, pubKey, internalKey, merkleRoot = EMPTY) {
  if (equalBytes(internalKey, pubKey)) {
    privKey = taprootTweakPrivKey(privKey, merkleRoot);
    pubKey = schnorr.getPublicKey(privKey);
  }
  return { privKey, pubKey };
}
const isPlainObject = (obj) => Object.prototype.toString.call(obj) === "[object Object]" && obj.constructor === Object;
function validateOpts(opts) {
  if (!isPlainObject(opts))
    throw new Error(`Wrong object type for transaction options: ${opts}`);
  const _opts = {
    ...opts,
    version: def(opts.version, DEFAULT_VERSION),
    lockTime: def(opts.lockTime, 0),
    PSBTVersion: def(opts.PSBTVersion, 0)
  };
  if (![-1, 0, 1, 2].includes(_opts.version))
    throw new Error(`Unknown version: ${_opts.version}`);
  if (typeof _opts.lockTime !== "number")
    throw new Error("Transaction lock time should be number");
  U32LE.encode(_opts.lockTime);
  if (_opts.PSBTVersion !== 0 && _opts.PSBTVersion !== 2)
    throw new Error(`Unknown PSBT version ${_opts.PSBTVersion}`);
  for (const k of [
    "allowUnknowOutput",
    "allowUnknowInput",
    "disableScriptCheck",
    "bip174jsCompat",
    "allowLegacyWitnessUtxo",
    "lowR"
  ]) {
    const v = _opts[k];
    if (v === void 0)
      continue;
    if (typeof v !== "boolean")
      throw new Error(`Transation options wrong type: ${k}=${v} (${typeof v})`);
  }
  return Object.freeze(_opts);
}
class Transaction {
  constructor(opts = {}) {
    this.global = {};
    this.inputs = [];
    this.outputs = [];
    const _opts = this.opts = validateOpts(opts);
    if (_opts.lockTime !== DEFAULT_LOCKTIME)
      this.global.fallbackLocktime = _opts.lockTime;
    this.global.txVersion = _opts.version;
  }
  // Import
  static fromRaw(raw, opts = {}) {
    const parsed = RawTx.decode(raw);
    const tx = new Transaction({ ...opts, version: parsed.version, lockTime: parsed.lockTime });
    for (const o of parsed.outputs)
      tx.addOutput(o);
    tx.outputs = parsed.outputs;
    tx.inputs = parsed.inputs;
    if (parsed.witnesses) {
      for (let i = 0; i < parsed.witnesses.length; i++)
        tx.inputs[i].finalScriptWitness = parsed.witnesses[i];
    }
    return tx;
  }
  // PSBT
  static fromPSBT(psbt, opts = {}) {
    let parsed;
    try {
      parsed = RawPSBTV0.decode(psbt);
    } catch (e0) {
      try {
        parsed = RawPSBTV2.decode(psbt);
      } catch (e2) {
        throw e0;
      }
    }
    const PSBTVersion = parsed.global.version || 0;
    if (PSBTVersion !== 0 && PSBTVersion !== 2)
      throw new Error(`Wrong PSBT version=${PSBTVersion}`);
    const unsigned = parsed.global.unsignedTx;
    const version = PSBTVersion === 0 ? unsigned == null ? void 0 : unsigned.version : parsed.global.txVersion;
    const lockTime = PSBTVersion === 0 ? unsigned == null ? void 0 : unsigned.lockTime : parsed.global.fallbackLocktime;
    const tx = new Transaction({ ...opts, version, lockTime, PSBTVersion });
    const inputCount = PSBTVersion === 0 ? unsigned == null ? void 0 : unsigned.inputs.length : parsed.global.inputCount;
    tx.inputs = parsed.inputs.slice(0, inputCount).map((i, j) => {
      var _a;
      return {
        finalScriptSig: EMPTY,
        ...(_a = parsed.global.unsignedTx) == null ? void 0 : _a.inputs[j],
        ...i
      };
    });
    const outputCount = PSBTVersion === 0 ? unsigned == null ? void 0 : unsigned.outputs.length : parsed.global.outputCount;
    tx.outputs = parsed.outputs.slice(0, outputCount).map((i, j) => {
      var _a;
      return {
        ...i,
        ...(_a = parsed.global.unsignedTx) == null ? void 0 : _a.outputs[j]
      };
    });
    tx.global = { ...parsed.global, txVersion: version };
    if (lockTime !== DEFAULT_LOCKTIME)
      tx.global.fallbackLocktime = lockTime;
    return tx;
  }
  toPSBT(PSBTVersion = this.opts.PSBTVersion) {
    if (PSBTVersion !== 0 && PSBTVersion !== 2)
      throw new Error(`Wrong PSBT version=${PSBTVersion}`);
    const inputs = this.inputs.map((i) => cleanPSBTFields(PSBTVersion, PSBTInput, i));
    for (const inp of inputs) {
      if (inp.partialSig && !inp.partialSig.length)
        delete inp.partialSig;
      if (inp.finalScriptSig && !inp.finalScriptSig.length)
        delete inp.finalScriptSig;
      if (inp.finalScriptWitness && !inp.finalScriptWitness.length)
        delete inp.finalScriptWitness;
    }
    const outputs = this.outputs.map((i) => cleanPSBTFields(PSBTVersion, PSBTOutput, i));
    const global = { ...this.global };
    if (PSBTVersion === 0) {
      global.unsignedTx = RawTx.decode(this.unsignedTx);
      delete global.fallbackLocktime;
      delete global.txVersion;
    } else {
      global.version = PSBTVersion;
      global.txVersion = this.version;
      global.inputCount = this.inputs.length;
      global.outputCount = this.outputs.length;
      if (global.fallbackLocktime && global.fallbackLocktime === DEFAULT_LOCKTIME)
        delete global.fallbackLocktime;
    }
    if (this.opts.bip174jsCompat) {
      if (!inputs.length)
        inputs.push({});
      if (!outputs.length)
        outputs.push({});
    }
    return (PSBTVersion === 0 ? RawPSBTV0 : RawPSBTV2).encode({
      global,
      inputs,
      outputs
    });
  }
  // BIP370 lockTime (https://github.com/bitcoin/bips/blob/master/bip-0370.mediawiki#determining-lock-time)
  get lockTime() {
    let height = DEFAULT_LOCKTIME;
    let heightCnt = 0;
    let time = DEFAULT_LOCKTIME;
    let timeCnt = 0;
    for (const i of this.inputs) {
      if (i.requiredHeightLocktime) {
        height = Math.max(height, i.requiredHeightLocktime);
        heightCnt++;
      }
      if (i.requiredTimeLocktime) {
        time = Math.max(time, i.requiredTimeLocktime);
        timeCnt++;
      }
    }
    if (heightCnt && heightCnt >= timeCnt)
      return height;
    if (time !== DEFAULT_LOCKTIME)
      return time;
    return this.global.fallbackLocktime || DEFAULT_LOCKTIME;
  }
  get version() {
    if (this.global.txVersion === void 0)
      throw new Error("No global.txVersion");
    return this.global.txVersion;
  }
  inputStatus(idx) {
    this.checkInputIdx(idx);
    const input = this.inputs[idx];
    if (input.finalScriptSig && input.finalScriptSig.length)
      return "finalized";
    if (input.finalScriptWitness && input.finalScriptWitness.length)
      return "finalized";
    if (input.tapKeySig)
      return "signed";
    if (input.tapScriptSig && input.tapScriptSig.length)
      return "signed";
    if (input.partialSig && input.partialSig.length)
      return "signed";
    return "unsigned";
  }
  // Cannot replace unpackSighash, tests rely on very generic implemenetation with signing inputs outside of range
  // We will lose some vectors -> smaller test coverage of preimages (very important!)
  inputSighash(idx) {
    this.checkInputIdx(idx);
    const sighash = this.inputType(this.inputs[idx]).sighash;
    const sigOutputs = sighash === SignatureHash.DEFAULT ? SignatureHash.ALL : sighash & 3;
    const sigInputs = sighash & SignatureHash.ANYONECANPAY;
    return { sigInputs, sigOutputs };
  }
  // Very nice for debug purposes, but slow. If there is too much inputs/outputs to add, will be quadratic.
  // Some cache will be nice, but there chance to have bugs with cache invalidation
  signStatus() {
    let addInput = true, addOutput = true;
    let inputs = [], outputs = [];
    for (let idx = 0; idx < this.inputs.length; idx++) {
      const status = this.inputStatus(idx);
      if (status === "unsigned")
        continue;
      const { sigInputs, sigOutputs } = this.inputSighash(idx);
      if (sigInputs === SignatureHash.ANYONECANPAY)
        inputs.push(idx);
      else
        addInput = false;
      if (sigOutputs === SignatureHash.ALL)
        addOutput = false;
      else if (sigOutputs === SignatureHash.SINGLE)
        outputs.push(idx);
      else if (sigOutputs === SignatureHash.NONE)
        ;
      else
        throw new Error(`Wrong signature hash output type: ${sigOutputs}`);
    }
    return { addInput, addOutput, inputs, outputs };
  }
  get isFinal() {
    for (let idx = 0; idx < this.inputs.length; idx++)
      if (this.inputStatus(idx) !== "finalized")
        return false;
    return true;
  }
  // Info utils
  get hasWitnesses() {
    let out = false;
    for (const i of this.inputs)
      if (i.finalScriptWitness && i.finalScriptWitness.length)
        out = true;
    return out;
  }
  // https://en.bitcoin.it/wiki/Weight_units
  get weight() {
    if (!this.isFinal)
      throw new Error("Transaction is not finalized");
    let out = 32;
    const outputs = this.outputs.map(outputBeforeSign);
    if (this.hasWitnesses)
      out += 2;
    out += 4 * CompactSizeLen.encode(this.inputs.length).length;
    out += 4 * CompactSizeLen.encode(this.outputs.length).length;
    for (const i of this.inputs)
      if (i.finalScriptSig)
        out += 160 + 4 * VarBytes.encode(i.finalScriptSig).length;
    for (const o of outputs)
      out += 32 + 4 * VarBytes.encode(o.script).length;
    if (this.hasWitnesses) {
      for (const i of this.inputs)
        if (i.finalScriptWitness)
          out += RawWitness.encode(i.finalScriptWitness).length;
    }
    return out;
  }
  get vsize() {
    return Math.ceil(this.weight / 4);
  }
  toBytes(withScriptSig = false, withWitness = false) {
    return RawTx.encode({
      version: this.version,
      lockTime: this.lockTime,
      inputs: this.inputs.map(inputBeforeSign).map((i) => ({
        ...i,
        finalScriptSig: withScriptSig && i.finalScriptSig || EMPTY
      })),
      outputs: this.outputs.map(outputBeforeSign),
      witnesses: this.inputs.map((i) => i.finalScriptWitness || []),
      segwitFlag: withWitness && this.hasWitnesses
    });
  }
  get unsignedTx() {
    return this.toBytes(false, false);
  }
  get hex() {
    return hex$1.encode(this.toBytes(true, this.hasWitnesses));
  }
  get hash() {
    if (!this.isFinal)
      throw new Error("Transaction is not finalized");
    return hex$1.encode(sha256x2(this.toBytes(true)));
  }
  get id() {
    if (!this.isFinal)
      throw new Error("Transaction is not finalized");
    return hex$1.encode(sha256x2(this.toBytes(true)).reverse());
  }
  // Input stuff
  checkInputIdx(idx) {
    if (!Number.isSafeInteger(idx) || 0 > idx || idx >= this.inputs.length)
      throw new Error(`Wrong input index=${idx}`);
  }
  getInput(idx) {
    this.checkInputIdx(idx);
    return cloneDeep(this.inputs[idx]);
  }
  get inputsLength() {
    return this.inputs.length;
  }
  // Modification
  normalizeInput(i, cur, allowedFields) {
    let { nonWitnessUtxo, txid } = i;
    if (typeof nonWitnessUtxo === "string")
      nonWitnessUtxo = hex$1.decode(nonWitnessUtxo);
    if (isBytes(nonWitnessUtxo))
      nonWitnessUtxo = RawTx.decode(nonWitnessUtxo);
    if (nonWitnessUtxo === void 0)
      nonWitnessUtxo = cur == null ? void 0 : cur.nonWitnessUtxo;
    if (typeof txid === "string")
      txid = hex$1.decode(txid);
    if (txid === void 0)
      txid = cur == null ? void 0 : cur.txid;
    let res = { ...cur, ...i, nonWitnessUtxo, txid };
    if (res.nonWitnessUtxo === void 0)
      delete res.nonWitnessUtxo;
    if (res.sequence === void 0)
      res.sequence = DEFAULT_SEQUENCE;
    if (res.tapMerkleRoot === null)
      delete res.tapMerkleRoot;
    res = mergeKeyMap(PSBTInput, res, cur, allowedFields);
    PSBTInputCoder.encode(res);
    let prevOut;
    if (res.nonWitnessUtxo && res.index !== void 0)
      prevOut = res.nonWitnessUtxo.outputs[res.index];
    else if (res.witnessUtxo)
      prevOut = res.witnessUtxo;
    if (prevOut && !this.opts.disableScriptCheck)
      checkScript(prevOut && prevOut.script, res.redeemScript, res.witnessScript);
    return res;
  }
  addInput(input, _ignoreSignStatus = false) {
    if (!_ignoreSignStatus && !this.signStatus().addInput)
      throw new Error("Tx has signed inputs, cannot add new one");
    this.inputs.push(this.normalizeInput(input));
    return this.inputs.length - 1;
  }
  updateInput(idx, input, _ignoreSignStatus = false) {
    this.checkInputIdx(idx);
    let allowedFields = void 0;
    if (!_ignoreSignStatus) {
      const status = this.signStatus();
      if (!status.addInput || status.inputs.includes(idx))
        allowedFields = PSBTInputUnsignedKeys;
    }
    this.inputs[idx] = this.normalizeInput(input, this.inputs[idx], allowedFields);
  }
  // Output stuff
  checkOutputIdx(idx) {
    if (!Number.isSafeInteger(idx) || 0 > idx || idx >= this.outputs.length)
      throw new Error(`Wrong output index=${idx}`);
  }
  getOutput(idx) {
    this.checkInputIdx(idx);
    return cloneDeep(this.outputs[idx]);
  }
  get outputsLength() {
    return this.outputs.length;
  }
  normalizeOutput(o, cur, allowedFields) {
    let { amount, script } = o;
    if (amount === void 0)
      amount = cur == null ? void 0 : cur.amount;
    if (typeof amount !== "bigint")
      throw new Error("amount must be bigint sats");
    if (typeof script === "string")
      script = hex$1.decode(script);
    if (script === void 0)
      script = cur == null ? void 0 : cur.script;
    let res = { ...cur, ...o, amount, script };
    if (res.amount === void 0)
      delete res.amount;
    res = mergeKeyMap(PSBTOutput, res, cur, allowedFields);
    PSBTOutputCoder.encode(res);
    if (res.script && !this.opts.allowUnknowOutput && OutScript.decode(res.script).type === "unknown") {
      throw new Error("Transaction/output: unknown output script type, there is a chance that input is unspendable. Pass allowUnkownScript=true, if you sure");
    }
    if (!this.opts.disableScriptCheck)
      checkScript(res.script, res.redeemScript, res.witnessScript);
    return res;
  }
  addOutput(o, _ignoreSignStatus = false) {
    if (!_ignoreSignStatus && !this.signStatus().addOutput)
      throw new Error("Tx has signed outputs, cannot add new one");
    this.outputs.push(this.normalizeOutput(o));
    return this.outputs.length - 1;
  }
  updateOutput(idx, output, _ignoreSignStatus = false) {
    this.checkOutputIdx(idx);
    let allowedFields = void 0;
    if (!_ignoreSignStatus) {
      const status = this.signStatus();
      if (!status.addOutput || status.outputs.includes(idx))
        allowedFields = PSBTOutputUnsignedKeys;
    }
    this.outputs[idx] = this.normalizeOutput(output, this.outputs[idx], allowedFields);
  }
  addOutputAddress(address, amount, network = NETWORK) {
    return this.addOutput({ script: OutScript.encode(Address(network).decode(address)), amount });
  }
  // Utils
  get fee() {
    let res = 0n;
    for (const i of this.inputs) {
      const prevOut = this.prevOut(i);
      if (!prevOut)
        throw new Error("Empty input amount");
      res += prevOut.amount;
    }
    const outputs = this.outputs.map(outputBeforeSign);
    for (const o of outputs)
      res -= o.amount;
    return res;
  }
  // Signing
  // Based on https://github.com/bitcoin/bitcoin/blob/5871b5b5ab57a0caf9b7514eb162c491c83281d5/test/functional/test_framework/script.py#L624
  // There is optimization opportunity to re-use hashes for multiple inputs for witness v0/v1,
  // but we are trying to be less complicated for audit purpose for now.
  preimageLegacy(idx, prevOutScript, hashType) {
    const { isAny, isNone, isSingle } = unpackSighash(hashType);
    if (idx < 0 || !Number.isSafeInteger(idx))
      throw new Error(`Invalid input idx=${idx}`);
    if (isSingle && idx >= this.outputs.length || idx >= this.inputs.length)
      return U256BE.encode(1n);
    prevOutScript = Script.encode(Script.decode(prevOutScript).filter((i) => i !== "CODESEPARATOR"));
    let inputs = this.inputs.map(inputBeforeSign).map((input, inputIdx) => ({
      ...input,
      finalScriptSig: inputIdx === idx ? prevOutScript : EMPTY
    }));
    if (isAny)
      inputs = [inputs[idx]];
    else if (isNone || isSingle) {
      inputs = inputs.map((input, inputIdx) => ({
        ...input,
        sequence: inputIdx === idx ? input.sequence : 0
      }));
    }
    let outputs = this.outputs.map(outputBeforeSign);
    if (isNone)
      outputs = [];
    else if (isSingle) {
      outputs = outputs.slice(0, idx).fill(EMPTY_OUTPUT).concat([outputs[idx]]);
    }
    const tmpTx = RawTx.encode({
      lockTime: this.lockTime,
      version: this.version,
      segwitFlag: false,
      inputs,
      outputs
    });
    return sha256x2(tmpTx, I32LE.encode(hashType));
  }
  preimageWitnessV0(idx, prevOutScript, hashType, amount) {
    const { isAny, isNone, isSingle } = unpackSighash(hashType);
    let inputHash = EMPTY32;
    let sequenceHash = EMPTY32;
    let outputHash = EMPTY32;
    const inputs = this.inputs.map(inputBeforeSign);
    const outputs = this.outputs.map(outputBeforeSign);
    if (!isAny)
      inputHash = sha256x2(...inputs.map(TxHashIdx.encode));
    if (!isAny && !isSingle && !isNone)
      sequenceHash = sha256x2(...inputs.map((i) => U32LE.encode(i.sequence)));
    if (!isSingle && !isNone) {
      outputHash = sha256x2(...outputs.map(RawOutput.encode));
    } else if (isSingle && idx < outputs.length)
      outputHash = sha256x2(RawOutput.encode(outputs[idx]));
    const input = inputs[idx];
    return sha256x2(I32LE.encode(this.version), inputHash, sequenceHash, bytes(32, true).encode(input.txid), U32LE.encode(input.index), VarBytes.encode(prevOutScript), U64LE.encode(amount), U32LE.encode(input.sequence), outputHash, U32LE.encode(this.lockTime), U32LE.encode(hashType));
  }
  preimageWitnessV1(idx, prevOutScript, hashType, amount, codeSeparator = -1, leafScript, leafVer = 192, annex) {
    if (!Array.isArray(amount) || this.inputs.length !== amount.length)
      throw new Error(`Invalid amounts array=${amount}`);
    if (!Array.isArray(prevOutScript) || this.inputs.length !== prevOutScript.length)
      throw new Error(`Invalid prevOutScript array=${prevOutScript}`);
    const out = [
      U8.encode(0),
      U8.encode(hashType),
      I32LE.encode(this.version),
      U32LE.encode(this.lockTime)
    ];
    const outType = hashType === SignatureHash.DEFAULT ? SignatureHash.ALL : hashType & 3;
    const inType = hashType & SignatureHash.ANYONECANPAY;
    const inputs = this.inputs.map(inputBeforeSign);
    const outputs = this.outputs.map(outputBeforeSign);
    if (inType !== SignatureHash.ANYONECANPAY) {
      out.push(...[
        inputs.map(TxHashIdx.encode),
        amount.map(U64LE.encode),
        prevOutScript.map(VarBytes.encode),
        inputs.map((i) => U32LE.encode(i.sequence))
      ].map((i) => sha256(concat(...i))));
    }
    if (outType === SignatureHash.ALL) {
      out.push(sha256(concat(...outputs.map(RawOutput.encode))));
    }
    const spendType = (annex ? 1 : 0) | (leafScript ? 2 : 0);
    out.push(new Uint8Array([spendType]));
    if (inType === SignatureHash.ANYONECANPAY) {
      const inp = inputs[idx];
      out.push(TxHashIdx.encode(inp), U64LE.encode(amount[idx]), VarBytes.encode(prevOutScript[idx]), U32LE.encode(inp.sequence));
    } else
      out.push(U32LE.encode(idx));
    if (spendType & 1)
      out.push(sha256(VarBytes.encode(annex || EMPTY)));
    if (outType === SignatureHash.SINGLE)
      out.push(idx < outputs.length ? sha256(RawOutput.encode(outputs[idx])) : EMPTY32);
    if (leafScript)
      out.push(tapLeafHash(leafScript, leafVer), U8.encode(0), I32LE.encode(codeSeparator));
    return schnorr.utils.taggedHash("TapSighash", ...out);
  }
  // Utils for sign/finalize
  // Used pretty often, should be fast
  prevOut(input) {
    if (input.nonWitnessUtxo) {
      if (input.index === void 0)
        throw new Error("Uknown input index");
      return input.nonWitnessUtxo.outputs[input.index];
    } else if (input.witnessUtxo)
      return input.witnessUtxo;
    else
      throw new Error("Cannot find previous output info.");
  }
  inputType(input) {
    let txType = "legacy";
    let defaultSighash = SignatureHash.ALL;
    const prevOut = this.prevOut(input);
    const first = OutScript.decode(prevOut.script);
    let type = first.type;
    let cur = first;
    const stack = [first];
    if (first.type === "tr") {
      defaultSighash = SignatureHash.DEFAULT;
      return {
        txType: "taproot",
        type: "tr",
        last: first,
        lastScript: prevOut.script,
        defaultSighash,
        sighash: input.sighashType || defaultSighash
      };
    } else {
      if (first.type === "wpkh" || first.type === "wsh")
        txType = "segwit";
      if (first.type === "sh") {
        if (!input.redeemScript)
          throw new Error("inputType: sh without redeemScript");
        let child = OutScript.decode(input.redeemScript);
        if (child.type === "wpkh" || child.type === "wsh")
          txType = "segwit";
        stack.push(child);
        cur = child;
        type += `-${child.type}`;
      }
      if (cur.type === "wsh") {
        if (!input.witnessScript)
          throw new Error("inputType: wsh without witnessScript");
        let child = OutScript.decode(input.witnessScript);
        if (child.type === "wsh")
          txType = "segwit";
        stack.push(child);
        cur = child;
        type += `-${child.type}`;
      }
      const last = stack[stack.length - 1];
      if (last.type === "sh" || last.type === "wsh")
        throw new Error("inputType: sh/wsh cannot be terminal type");
      const lastScript = OutScript.encode(last);
      const res = {
        type,
        txType,
        last,
        lastScript,
        defaultSighash,
        sighash: input.sighashType || defaultSighash
      };
      if (txType === "legacy" && !this.opts.allowLegacyWitnessUtxo && !input.nonWitnessUtxo) {
        throw new Error(`Transaction/sign: legacy input without nonWitnessUtxo, can result in attack that forces paying higher fees. Pass allowLegacyWitnessUtxo=true, if you sure`);
      }
      return res;
    }
  }
  // Signer can be privateKey OR instance of bip32 HD stuff
  signIdx(privateKey, idx, allowedSighash, _auxRand) {
    this.checkInputIdx(idx);
    const input = this.inputs[idx];
    const inputType = this.inputType(input);
    if (!isBytes(privateKey)) {
      if (!input.bip32Derivation || !input.bip32Derivation.length)
        throw new Error("bip32Derivation: empty");
      const signers = input.bip32Derivation.filter((i) => i[1].fingerprint == privateKey.fingerprint).map(([pubKey, { path }]) => {
        let s = privateKey;
        for (const i of path)
          s = s.deriveChild(i);
        if (!equalBytes(s.publicKey, pubKey))
          throw new Error("bip32Derivation: wrong pubKey");
        if (!s.privateKey)
          throw new Error("bip32Derivation: no privateKey");
        return s;
      });
      if (!signers.length)
        throw new Error(`bip32Derivation: no items with fingerprint=${privateKey.fingerprint}`);
      let signed = false;
      for (const s of signers)
        if (this.signIdx(s.privateKey, idx))
          signed = true;
      return signed;
    }
    if (!allowedSighash)
      allowedSighash = [inputType.defaultSighash];
    const sighash = inputType.sighash;
    if (!allowedSighash.includes(sighash)) {
      throw new Error(`Input with not allowed sigHash=${sighash}. Allowed: ${allowedSighash.join(", ")}`);
    }
    const { sigInputs, sigOutputs } = this.inputSighash(idx);
    if (sigOutputs === SignatureHash.SINGLE && idx >= this.outputs.length) {
      throw new Error(`Input with sighash SINGLE, but there is no output with corresponding index=${idx}`);
    }
    const prevOut = this.prevOut(input);
    if (inputType.txType === "taproot") {
      if (input.tapBip32Derivation)
        throw new Error("tapBip32Derivation unsupported");
      const prevOuts = this.inputs.map(this.prevOut);
      const prevOutScript = prevOuts.map((i) => i.script);
      const amount = prevOuts.map((i) => i.amount);
      let signed = false;
      let schnorrPub = schnorr.getPublicKey(privateKey);
      let merkleRoot = input.tapMerkleRoot || EMPTY;
      if (input.tapInternalKey) {
        const { pubKey, privKey } = getTaprootKeys(privateKey, schnorrPub, input.tapInternalKey, merkleRoot);
        const [taprootPubKey, parity] = taprootTweakPubkey(input.tapInternalKey, merkleRoot);
        if (equalBytes(taprootPubKey, pubKey)) {
          const hash = this.preimageWitnessV1(idx, prevOutScript, sighash, amount);
          const sig = concat(schnorr.sign(hash, privKey, _auxRand), sighash !== SignatureHash.DEFAULT ? new Uint8Array([sighash]) : EMPTY);
          this.updateInput(idx, { tapKeySig: sig }, true);
          signed = true;
        }
      }
      if (input.tapLeafScript) {
        input.tapScriptSig = input.tapScriptSig || [];
        for (const [cb, _script] of input.tapLeafScript) {
          const script = _script.subarray(0, -1);
          const scriptDecoded = Script.decode(script);
          const ver = _script[_script.length - 1];
          const hash = tapLeafHash(script, ver);
          const { pubKey, privKey } = getTaprootKeys(
            privateKey,
            schnorrPub,
            cb.internalKey,
            EMPTY
            // Because we cannot have nested taproot tree
          );
          const pos = scriptDecoded.findIndex((i) => isBytes(i) && equalBytes(i, pubKey));
          if (pos === -1)
            continue;
          const msg = this.preimageWitnessV1(idx, prevOutScript, sighash, amount, void 0, script, ver);
          const sig = concat(schnorr.sign(msg, privKey, _auxRand), sighash !== SignatureHash.DEFAULT ? new Uint8Array([sighash]) : EMPTY);
          this.updateInput(idx, { tapScriptSig: [[{ pubKey, leafHash: hash }, sig]] }, true);
          signed = true;
        }
      }
      if (!signed)
        throw new Error("No taproot scripts signed");
      return true;
    } else {
      const pubKey = _pubECDSA(privateKey);
      let hasPubkey = false;
      const pubKeyHash = hash160(pubKey);
      for (const i of Script.decode(inputType.lastScript)) {
        if (isBytes(i) && (equalBytes(i, pubKey) || equalBytes(i, pubKeyHash)))
          hasPubkey = true;
      }
      if (!hasPubkey)
        throw new Error(`Input script doesn't have pubKey: ${inputType.lastScript}`);
      let hash;
      if (inputType.txType === "legacy") {
        hash = this.preimageLegacy(idx, inputType.lastScript, sighash);
      } else if (inputType.txType === "segwit") {
        let script = inputType.lastScript;
        if (inputType.last.type === "wpkh")
          script = OutScript.encode({ type: "pkh", hash: inputType.last.hash });
        hash = this.preimageWitnessV0(idx, script, sighash, prevOut.amount);
      } else
        throw new Error(`Transaction/sign: unknown tx type: ${inputType.txType}`);
      const sig = signECDSA(hash, privateKey, this.opts.lowR);
      this.updateInput(idx, {
        partialSig: [[pubKey, concat(sig, new Uint8Array([sighash]))]]
      }, true);
    }
    return true;
  }
  // This is bad API. Will work if user creates and signs tx, but if
  // there is some complex workflow with exchanging PSBT and signing them,
  // then it is better to validate which output user signs. How could a better API look like?
  // Example: user adds input, sends to another party, then signs received input (mixer etc),
  // another user can add different input for same key and user will sign it.
  // Even worse: another user can add bip32 derivation, and spend money from different address.
  // Better api: signIdx
  sign(privateKey, allowedSighash, _auxRand) {
    let num = 0;
    for (let i = 0; i < this.inputs.length; i++) {
      try {
        if (this.signIdx(privateKey, i, allowedSighash, _auxRand))
          num++;
      } catch (e) {
      }
    }
    if (!num)
      throw new Error("No inputs signed");
    return num;
  }
  finalizeIdx(idx) {
    this.checkInputIdx(idx);
    if (this.fee < 0n)
      throw new Error("Outputs spends more than inputs amount");
    const input = this.inputs[idx];
    const inputType = this.inputType(input);
    if (inputType.txType === "taproot") {
      if (input.tapKeySig)
        input.finalScriptWitness = [input.tapKeySig];
      else if (input.tapLeafScript && input.tapScriptSig) {
        const leafs = input.tapLeafScript.sort((a, b) => TaprootControlBlock.encode(a[0]).length - TaprootControlBlock.encode(b[0]).length);
        for (const [cb, _script] of leafs) {
          const script = _script.slice(0, -1);
          const ver = _script[_script.length - 1];
          const outScript = OutScript.decode(script);
          const hash = tapLeafHash(script, ver);
          const scriptSig = input.tapScriptSig.filter((i) => equalBytes(i[0].leafHash, hash));
          let signatures = [];
          if (outScript.type === "tr_ms") {
            const m = outScript.m;
            const pubkeys = outScript.pubkeys;
            let added = 0;
            for (const pub of pubkeys) {
              const sigIdx = scriptSig.findIndex((i) => equalBytes(i[0].pubKey, pub));
              if (added === m || sigIdx === -1) {
                signatures.push(EMPTY);
                continue;
              }
              signatures.push(scriptSig[sigIdx][1]);
              added++;
            }
            if (added !== m)
              continue;
          } else if (outScript.type === "tr_ns") {
            for (const pub of outScript.pubkeys) {
              const sigIdx = scriptSig.findIndex((i) => equalBytes(i[0].pubKey, pub));
              if (sigIdx === -1)
                continue;
              signatures.push(scriptSig[sigIdx][1]);
            }
            if (signatures.length !== outScript.pubkeys.length)
              continue;
          } else if (outScript.type === "unknown" && this.opts.allowUnknowInput) {
            const scriptDecoded = Script.decode(script);
            signatures = scriptSig.map(([{ pubKey }, signature]) => {
              const pos = scriptDecoded.findIndex((i) => isBytes(i) && equalBytes(i, pubKey));
              if (pos === -1)
                throw new Error("finalize/taproot: cannot find position of pubkey in script");
              return { signature, pos };
            }).sort((a, b) => a.pos - b.pos).map((i) => i.signature);
            if (!signatures.length)
              continue;
          } else
            throw new Error("Finalize: Unknown tapLeafScript");
          input.finalScriptWitness = signatures.reverse().concat([script, TaprootControlBlock.encode(cb)]);
          break;
        }
        if (!input.finalScriptWitness)
          throw new Error("finalize/taproot: empty witness");
      } else
        throw new Error("finalize/taproot: unknown input");
      input.finalScriptSig = EMPTY;
      cleanFinalInput(input);
      return;
    }
    if (!input.partialSig || !input.partialSig.length)
      throw new Error("Not enough partial sign");
    let inputScript = EMPTY;
    let witness = [];
    if (inputType.last.type === "ms") {
      const m = inputType.last.m;
      const pubkeys = inputType.last.pubkeys;
      let signatures = [];
      for (const pub of pubkeys) {
        const sign = input.partialSig.find((s) => equalBytes(pub, s[0]));
        if (!sign)
          continue;
        signatures.push(sign[1]);
      }
      signatures = signatures.slice(0, m);
      if (signatures.length !== m) {
        throw new Error(`Multisig: wrong signatures count, m=${m} n=${pubkeys.length} signatures=${signatures.length}`);
      }
      inputScript = Script.encode([0, ...signatures]);
    } else if (inputType.last.type === "pk") {
      inputScript = Script.encode([input.partialSig[0][1]]);
    } else if (inputType.last.type === "pkh") {
      inputScript = Script.encode([input.partialSig[0][1], input.partialSig[0][0]]);
    } else if (inputType.last.type === "wpkh") {
      inputScript = EMPTY;
      witness = [input.partialSig[0][1], input.partialSig[0][0]];
    } else if (inputType.last.type === "unknown" && !this.opts.allowUnknowInput)
      throw new Error("Unknown inputs not allowed");
    let finalScriptSig, finalScriptWitness;
    if (inputType.type.includes("wsh-")) {
      if (inputScript.length && inputType.lastScript.length) {
        witness = Script.decode(inputScript).map((i) => {
          if (i === 0)
            return EMPTY;
          if (isBytes(i))
            return i;
          throw new Error(`Wrong witness op=${i}`);
        });
      }
      witness = witness.concat(inputType.lastScript);
    }
    if (inputType.txType === "segwit")
      finalScriptWitness = witness;
    if (inputType.type.startsWith("sh-wsh-")) {
      finalScriptSig = Script.encode([Script.encode([0, sha256(inputType.lastScript)])]);
    } else if (inputType.type.startsWith("sh-")) {
      finalScriptSig = Script.encode([...Script.decode(inputScript), inputType.lastScript]);
    } else if (inputType.type.startsWith("wsh-"))
      ;
    else if (inputType.txType !== "segwit")
      finalScriptSig = inputScript;
    if (!finalScriptSig && !finalScriptWitness)
      throw new Error("Unknown error finalizing input");
    if (finalScriptSig)
      input.finalScriptSig = finalScriptSig;
    if (finalScriptWitness)
      input.finalScriptWitness = finalScriptWitness;
    cleanFinalInput(input);
  }
  finalize() {
    for (let i = 0; i < this.inputs.length; i++)
      this.finalizeIdx(i);
  }
  extract() {
    if (!this.isFinal)
      throw new Error("Transaction has unfinalized inputs");
    if (!this.outputs.length)
      throw new Error("Transaction has no outputs");
    if (this.fee < 0n)
      throw new Error("Outputs spends more than inputs amount");
    return this.toBytes(true, true);
  }
  combine(other) {
    for (const k of ["PSBTVersion", "version", "lockTime"]) {
      if (this.opts[k] !== other.opts[k]) {
        throw new Error(`Transaction/combine: different ${k} this=${this.opts[k]} other=${other.opts[k]}`);
      }
    }
    for (const k of ["inputs", "outputs"]) {
      if (this[k].length !== other[k].length) {
        throw new Error(`Transaction/combine: different ${k} length this=${this[k].length} other=${other[k].length}`);
      }
    }
    const thisUnsigned = this.global.unsignedTx ? RawTx.encode(this.global.unsignedTx) : EMPTY;
    const otherUnsigned = other.global.unsignedTx ? RawTx.encode(other.global.unsignedTx) : EMPTY;
    if (!equalBytes(thisUnsigned, otherUnsigned))
      throw new Error(`Transaction/combine: different unsigned tx`);
    this.global = mergeKeyMap(PSBTGlobal, this.global, other.global);
    for (let i = 0; i < this.inputs.length; i++)
      this.updateInput(i, other.inputs[i], true);
    for (let i = 0; i < this.outputs.length; i++)
      this.updateOutput(i, other.outputs[i], true);
    return this;
  }
  clone() {
    return Transaction.fromPSBT(this.toPSBT(2), this.opts);
  }
}
function getAddress(type, privKey, network = NETWORK) {
  if (type === "tr") {
    return p2tr(schnorr.getPublicKey(privKey), void 0, network).address;
  }
  const pubKey = _pubECDSA(privKey);
  if (type === "pkh")
    return p2pkh(pubKey, network).address;
  if (type === "wpkh")
    return p2wpkh(pubKey, network).address;
  throw new Error(`getAddress: unknown type=${type}`);
}
function multisig(m, pubkeys, sorted = false, witness = false) {
  const ms = p2ms(m, sorted ? _sortPubkeys(pubkeys) : pubkeys);
  return witness ? p2wsh(ms) : p2sh(ms);
}
function sortedMultisig(m, pubkeys, witness = false) {
  return multisig(m, pubkeys, true, witness);
}
const HARDENED_OFFSET = 2147483648;
function bip32Path(path) {
  const out = [];
  if (!/^[mM]'?/.test(path))
    throw new Error('Path must start with "m" or "M"');
  if (/^[mM]'?$/.test(path))
    return out;
  const parts = path.replace(/^[mM]'?\//, "").split("/");
  for (const c of parts) {
    const m = /^(\d+)('?)$/.exec(c);
    if (!m || m.length !== 3)
      throw new Error(`Invalid child index: ${c}`);
    let idx = +m[1];
    if (!Number.isSafeInteger(idx) || idx >= HARDENED_OFFSET)
      throw new Error("Invalid index");
    if (m[2] === "'")
      idx += HARDENED_OFFSET;
    out.push(idx);
  }
  return out;
}
function PSBTCombine(psbts) {
  if (!psbts || !Array.isArray(psbts) || !psbts.length)
    throw new Error("PSBTCombine: wrong PSBT list");
  const tx = Transaction.fromPSBT(psbts[0]);
  for (let i = 1; i < psbts.length; i++)
    tx.combine(Transaction.fromPSBT(psbts[i]));
  return tx.toPSBT();
}
const btc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Address,
  BTCArray,
  CompactSize,
  DEFAULT_LOCKTIME,
  DEFAULT_SEQUENCE,
  DEFAULT_VERSION,
  Decimal,
  NETWORK,
  get OP() {
    return OP;
  },
  OpToNum,
  OutScript,
  PRECISION,
  PSBTCombine,
  RawInput,
  RawOutput,
  RawPSBTV0,
  RawPSBTV2,
  RawTx,
  RawWitness,
  Script,
  ScriptNum,
  SigHashCoder,
  get SignatureHash() {
    return SignatureHash;
  },
  TAPROOT_UNSPENDABLE_KEY,
  TAP_LEAF_VERSION,
  TEST_NETWORK,
  TaprootControlBlock,
  Transaction,
  VarBytes,
  WIF,
  _DebugPSBT,
  _RawPSBTV0,
  _RawPSBTV2,
  _cmpBytes,
  _sortPubkeys,
  base58check,
  bip32Path,
  cloneDeep,
  combinations,
  getAddress,
  multisig,
  p2ms,
  p2pk,
  p2pkh,
  p2sh,
  p2tr,
  p2tr_ms,
  p2tr_ns,
  p2tr_pk,
  p2wpkh,
  p2wsh,
  programToWitness,
  sortedMultisig,
  tapLeafHash,
  taprootListToTree,
  taprootTweakPrivKey,
  taprootTweakPubkey
}, Symbol.toStringTag, { value: "Module" }));
const MAGIC_BYTES_TESTNET = "5432";
const MAGIC_BYTES_MAINNET = "5832";
const PEGIN_OPCODE = "3C";
const PEGOUT_OPCODE = "3e";
const priv = utils.randomPrivateKey();
const keySetForFeeCalculation = [];
keySetForFeeCalculation.push({
  priv,
  ecdsaPub: getPublicKey(priv, true),
  schnorrPub: schnorr$1.getPublicKey(priv)
});
const _PegTransaction = class {
  constructor() {
    __publicField(this, "unconfirmedUtxos", false);
    __publicField(this, "requiredConfirmed", 6);
    __publicField(this, "net", CONFIG.VITE_NETWORK === "testnet" ? NETWORK : TEST_NETWORK);
    __publicField(this, "ready", false);
    __publicField(this, "fromBtcAddress");
    __publicField(this, "pegInData", {
      stacksAddress: "ST3N4AJFZZYC4BK99H53XP8KDGXFGQ2PRSPNET8TN",
      // default for testing
      sbtcWalletAddress: "tb1pmmkznvm0pq5unp6geuwryu2f0m8xr6d229yzg2erx78nnk0ms48sk9s6q7",
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
    /**
     * User's btc address is needed to fetch utxo's and calculate tx fee.
     * This gives us the max amount they can peg as the sum of utxo amounts.
     * @param fromBtcAddress
     * @returns 
    public static hydrate = (o:PegTransactionI) => {
    	const me = new PegTransaction();
    	me.net = o.net;
    	if (!o.fromBtcAddress) throw new Error('No address - use create instead!');
    	me.fromBtcAddress = o.fromBtcAddress;
    	me.pegInData = o.pegInData;
    	me.addressInfo = o.addressInfo;
    	me.feeInfo = o.feeInfo;
    	me.ready = o.ready;
    	return me;
    };
     */
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
      return utxo.tx.confirmations >= 0;
    });
    __publicField(this, "calculateFees");
    __publicField(this, "getOutputsForDisplay");
    __publicField(this, "getInputsForDisplay", () => {
      const inputs = [];
      for (const utxo of this.addressInfo.utxos) {
        inputs.push({ txid: hex$1.decode(utxo.txid), index: utxo.vout });
      }
      return inputs;
    });
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
    if ((CONFIG.VITE_NETWORK === "testnet" || CONFIG.VITE_NETWORK === "devnet") && decoded[0] !== 26) {
      throw new Error("Please enter a valid stacks blockchain testnet address");
    }
    if (CONFIG.VITE_NETWORK === "mainnet" && decoded[0] !== 22) {
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
CONFIG.VITE_NETWORK;
const COMMS_ERROR = "Error communicating with the server. Please try later.";
const btcPrecision = 1e8;
function isSupported(address) {
  const network2 = CONFIG.VITE_NETWORK;
  const msg = "Please enter a valid " + network2 + " bitcoin address.";
  if (!address || address.length < 10) {
    throw new Error(msg);
  }
  const net = network2 === "testnet" ? TEST_NETWORK : NETWORK;
  const obj = Address(net).decode(address);
  if (obj.type === "pk") {
    throw new Error("Legacy addresses are not supported in the current version. " + msg);
  }
  if (obj.type === "ms" || obj.type === "tr_ms") {
    throw new Error("Multisig addresses are not supported in the current version. " + msg);
  }
  let valid = false;
  if (obj.type === "pkh" || obj.type === "sh") {
    valid = true;
  }
  if (obj.type === "wpkh" || obj.type === "wsh" || obj.type === "tr") {
    valid = true;
  }
  if (!valid) {
    throw new Error("Addresses is neither a classic (p2pkh/p2sh) or segwit (p2wpkh/p2wsh) or taproot address. " + msg);
  }
  return valid;
}
function explorerAddressUrl(addr) {
  return CONFIG.VITE_STACKS_EXPLORER + "/address/" + addr + "?chain=" + CONFIG.VITE_NETWORK;
}
function explorerBtcTxUrl(txid) {
  if (!txid)
    return "?";
  return CONFIG.VITE_BSTREAM_EXPLORER + "/tx/" + txid;
}
function explorerBtcAddressUrl(address) {
  return CONFIG.VITE_BSTREAM_EXPLORER + "/address/" + address;
}
function explorerTxUrl(txid) {
  return CONFIG.VITE_STACKS_EXPLORER + "/txid/" + txid + "?chain=" + CONFIG.VITE_NETWORK;
}
function fmtSatoshiToBitcoin(amountSats) {
  return Math.round(amountSats) / btcPrecision;
}
function truncate(stringy, amount) {
  if (!stringy)
    return "?";
  if (!amount)
    amount = 4;
  return stringy.substring(0, amount) + ".." + stringy.substring(stringy.length - amount);
}
export {
  Address as A,
  COMMS_ERROR as C,
  MAGIC_BYTES_TESTNET as M,
  NETWORK as N,
  OutScript as O,
  PEGIN_OPCODE as P,
  RawTx as R,
  Script as S,
  Transaction as T,
  explorerBtcTxUrl as a,
  explorerBtcAddressUrl as b,
  base64 as c,
  btc as d,
  explorerTxUrl as e,
  fmtSatoshiToBitcoin as f,
  TEST_NETWORK as g,
  hex$1 as h,
  MAGIC_BYTES_MAINNET as i,
  PegTransaction as j,
  PEGOUT_OPCODE as k,
  explorerAddressUrl as l,
  p2wsh as m,
  p2tr as n,
  isSupported as o,
  p2wpkh as p,
  secp256k1 as s,
  truncate as t
};
