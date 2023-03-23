import { i, s as se, d as C } from './index.227a7d99.js';
import { w as writable } from './index.cad881cf.js';
import { s as sbtcConfig } from './stores.3318b909.js';
import { d as fetchUserSbtcBalance } from './bridge_api.2c2497c7.js';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
				var args = [null];
				args.push.apply(args, arguments);
				var Ctor = Function.bind.apply(f, args);
				return new Ctor();
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var lib = {};

var encoding = {};

var utils = {};

const crypto = {
    node: undefined,
    web: typeof self === 'object' && 'crypto' in self ? self.crypto : undefined,
};

const cryptoBrowser = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	crypto
}, Symbol.toStringTag, { value: 'Module' }));

const require$$0 = /*@__PURE__*/getAugmentedNamespace(cryptoBrowser);

(function (exports) {
	/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.randomBytes = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.checkOpts = exports.Hash = exports.concatBytes = exports.toBytes = exports.utf8ToBytes = exports.asyncLoop = exports.nextTick = exports.hexToBytes = exports.bytesToHex = exports.isLE = exports.rotr = exports.createView = exports.u32 = exports.u8 = void 0;
	// The import here is via the package name. This is to ensure
	// that exports mapping/resolution does fall into place.
	const crypto_1 = require$$0;
	// Cast array to different type
	const u8 = (arr) => new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
	exports.u8 = u8;
	const u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
	exports.u32 = u32;
	// Cast array to view
	const createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
	exports.createView = createView;
	// The rotate right (circular right shift) operation for uint32
	const rotr = (word, shift) => (word << (32 - shift)) | (word >>> shift);
	exports.rotr = rotr;
	exports.isLE = new Uint8Array(new Uint32Array([0x11223344]).buffer)[0] === 0x44;
	// There is almost no big endian hardware, but js typed arrays uses platform specific endianness.
	// So, just to be sure not to corrupt anything.
	if (!exports.isLE)
	    throw new Error('Non little-endian hardware is not supported');
	const hexes = Array.from({ length: 256 }, (v, i) => i.toString(16).padStart(2, '0'));
	/**
	 * @example bytesToHex(Uint8Array.from([0xde, 0xad, 0xbe, 0xef]))
	 */
	function bytesToHex(uint8a) {
	    // pre-caching improves the speed 6x
	    if (!(uint8a instanceof Uint8Array))
	        throw new Error('Uint8Array expected');
	    let hex = '';
	    for (let i = 0; i < uint8a.length; i++) {
	        hex += hexes[uint8a[i]];
	    }
	    return hex;
	}
	exports.bytesToHex = bytesToHex;
	/**
	 * @example hexToBytes('deadbeef')
	 */
	function hexToBytes(hex) {
	    if (typeof hex !== 'string') {
	        throw new TypeError('hexToBytes: expected string, got ' + typeof hex);
	    }
	    if (hex.length % 2)
	        throw new Error('hexToBytes: received invalid unpadded hex');
	    const array = new Uint8Array(hex.length / 2);
	    for (let i = 0; i < array.length; i++) {
	        const j = i * 2;
	        const hexByte = hex.slice(j, j + 2);
	        const byte = Number.parseInt(hexByte, 16);
	        if (Number.isNaN(byte) || byte < 0)
	            throw new Error('Invalid byte sequence');
	        array[i] = byte;
	    }
	    return array;
	}
	exports.hexToBytes = hexToBytes;
	// There is no setImmediate in browser and setTimeout is slow. However, call to async function will return Promise
	// which will be fullfiled only on next scheduler queue processing step and this is exactly what we need.
	const nextTick = async () => { };
	exports.nextTick = nextTick;
	// Returns control to thread each 'tick' ms to avoid blocking
	async function asyncLoop(iters, tick, cb) {
	    let ts = Date.now();
	    for (let i = 0; i < iters; i++) {
	        cb(i);
	        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
	        const diff = Date.now() - ts;
	        if (diff >= 0 && diff < tick)
	            continue;
	        await (0, exports.nextTick)();
	        ts += diff;
	    }
	}
	exports.asyncLoop = asyncLoop;
	function utf8ToBytes(str) {
	    if (typeof str !== 'string') {
	        throw new TypeError(`utf8ToBytes expected string, got ${typeof str}`);
	    }
	    return new TextEncoder().encode(str);
	}
	exports.utf8ToBytes = utf8ToBytes;
	function toBytes(data) {
	    if (typeof data === 'string')
	        data = utf8ToBytes(data);
	    if (!(data instanceof Uint8Array))
	        throw new TypeError(`Expected input type is Uint8Array (got ${typeof data})`);
	    return data;
	}
	exports.toBytes = toBytes;
	/**
	 * Concats Uint8Array-s into one; like `Buffer.concat([buf1, buf2])`
	 * @example concatBytes(buf1, buf2)
	 */
	function concatBytes(...arrays) {
	    if (!arrays.every((a) => a instanceof Uint8Array))
	        throw new Error('Uint8Array list expected');
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
	exports.concatBytes = concatBytes;
	// For runtime check if class implements interface
	class Hash {
	    // Safe version that clones internal state
	    clone() {
	        return this._cloneInto();
	    }
	}
	exports.Hash = Hash;
	// Check if object doens't have custom constructor (like Uint8Array/Array)
	const isPlainObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]' && obj.constructor === Object;
	function checkOpts(defaults, opts) {
	    if (opts !== undefined && (typeof opts !== 'object' || !isPlainObject(opts)))
	        throw new TypeError('Options should be object or undefined');
	    const merged = Object.assign(defaults, opts);
	    return merged;
	}
	exports.checkOpts = checkOpts;
	function wrapConstructor(hashConstructor) {
	    const hashC = (message) => hashConstructor().update(toBytes(message)).digest();
	    const tmp = hashConstructor();
	    hashC.outputLen = tmp.outputLen;
	    hashC.blockLen = tmp.blockLen;
	    hashC.create = () => hashConstructor();
	    return hashC;
	}
	exports.wrapConstructor = wrapConstructor;
	function wrapConstructorWithOpts(hashCons) {
	    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
	    const tmp = hashCons({});
	    hashC.outputLen = tmp.outputLen;
	    hashC.blockLen = tmp.blockLen;
	    hashC.create = (opts) => hashCons(opts);
	    return hashC;
	}
	exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
	/**
	 * Secure PRNG
	 */
	function randomBytes(bytesLength = 32) {
	    if (crypto_1.crypto.web) {
	        return crypto_1.crypto.web.getRandomValues(new Uint8Array(bytesLength));
	    }
	    else if (crypto_1.crypto.node) {
	        return new Uint8Array(crypto_1.crypto.node.randomBytes(bytesLength).buffer);
	    }
	    else {
	        throw new Error("The environment doesn't have randomBytes function");
	    }
	}
	exports.randomBytes = randomBytes;
} (utils));

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.c32decode = exports.c32normalize = exports.c32encode = exports.c32 = void 0;
	const utils_1 = utils;
	exports.c32 = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
	const hex = '0123456789abcdef';
	/**
	 * Encode a hex string as a c32 string.  Note that the hex string is assumed
	 * to be big-endian (and the resulting c32 string will be as well).
	 * @param {string} inputHex - the input to encode
	 * @param {number} minLength - the minimum length of the c32 string
	 * @returns {string} the c32check-encoded representation of the data, as a string
	 */
	function c32encode(inputHex, minLength) {
	    // must be hex
	    if (!inputHex.match(/^[0-9a-fA-F]*$/)) {
	        throw new Error('Not a hex-encoded string');
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
	            // carry = 0, nextBits is 1, carry = 1, nextBits is 2
	            const nextBits = 1 + carry;
	            const nextLowBits = nextCode % (1 << nextBits) << (5 - nextBits);
	            const curC32Digit = exports.c32[currentCode + nextLowBits];
	            carry = nextBits;
	            res.unshift(curC32Digit);
	        }
	        else {
	            carry = 0;
	        }
	    }
	    let C32leadingZeros = 0;
	    for (let i = 0; i < res.length; i++) {
	        if (res[i] !== '0') {
	            break;
	        }
	        else {
	            C32leadingZeros++;
	        }
	    }
	    res = res.slice(C32leadingZeros);
	    const zeroPrefix = new TextDecoder().decode((0, utils_1.hexToBytes)(inputHex)).match(/^\u0000*/);
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
	    return res.join('');
	}
	exports.c32encode = c32encode;
	/*
	 * Normalize a c32 string
	 * @param {string} c32input - the c32-encoded input string
	 * @returns {string} the canonical representation of the c32 input string
	 */
	function c32normalize(c32input) {
	    // must be upper-case
	    // replace all O's with 0's
	    // replace all I's and L's with 1's
	    return c32input.toUpperCase().replace(/O/g, '0').replace(/L|I/g, '1');
	}
	exports.c32normalize = c32normalize;
	/*
	 * Decode a c32 string back into a hex string.  Note that the c32 input
	 * string is assumed to be big-endian (and the resulting hex string will
	 * be as well).
	 * @param {string} c32input - the c32-encoded input to decode
	 * @param {number} minLength - the minimum length of the output hex string (in bytes)
	 * @returns {string} the hex-encoded representation of the data, as a string
	 */
	function c32decode(c32input, minLength) {
	    c32input = c32normalize(c32input);
	    // must result in a c32 string
	    if (!c32input.match(`^[${exports.c32}]*$`)) {
	        throw new Error('Not a c32-encoded string');
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
	            throw new Error('Panic error in decoding.');
	        }
	        res.unshift(currentHexDigit);
	    }
	    // one last carry
	    res.unshift(hex[carry]);
	    if (res.length % 2 === 1) {
	        res.unshift('0');
	    }
	    let hexLeadingZeros = 0;
	    for (let i = 0; i < res.length; i++) {
	        if (res[i] !== '0') {
	            break;
	        }
	        else {
	            hexLeadingZeros++;
	        }
	    }
	    res = res.slice(hexLeadingZeros - (hexLeadingZeros % 2));
	    let hexStr = res.join('');
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
} (encoding));

var checksum = {};

function number(n) {
    if (!Number.isSafeInteger(n) || n < 0)
        throw new Error(`Wrong positive integer: ${n}`);
}
function bool(b) {
    if (typeof b !== 'boolean')
        throw new Error(`Expected boolean, not ${b}`);
}
function bytes(b, ...lengths) {
    if (!(b instanceof Uint8Array))
        throw new TypeError('Expected Uint8Array');
    if (lengths.length > 0 && !lengths.includes(b.length))
        throw new TypeError(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
function hash(hash) {
    if (typeof hash !== 'function' || typeof hash.create !== 'function')
        throw new Error('Hash should be wrapped by utils.wrapConstructor');
    number(hash.outputLen);
    number(hash.blockLen);
}
function exists(instance, checkFinished = true) {
    if (instance.destroyed)
        throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished)
        throw new Error('Hash#digest() has already been called');
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
    output,
};

/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// Cast array to view
const createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
// The rotate right (circular right shift) operation for uint32
const rotr = (word, shift) => (word << (32 - shift)) | (word >>> shift);
const isLE = new Uint8Array(new Uint32Array([0x11223344]).buffer)[0] === 0x44;
// There is almost no big endian hardware, but js typed arrays uses platform specific endianness.
// So, just to be sure not to corrupt anything.
if (!isLE)
    throw new Error('Non little-endian hardware is not supported');
Array.from({ length: 256 }, (v, i) => i.toString(16).padStart(2, '0'));
function utf8ToBytes(str) {
    if (typeof str !== 'string') {
        throw new TypeError(`utf8ToBytes expected string, got ${typeof str}`);
    }
    return new TextEncoder().encode(str);
}
function toBytes(data) {
    if (typeof data === 'string')
        data = utf8ToBytes(data);
    if (!(data instanceof Uint8Array))
        throw new TypeError(`Expected input type is Uint8Array (got ${typeof data})`);
    return data;
}
// For runtime check if class implements interface
class Hash {
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

// Polyfill for Safari 14
function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === 'function')
        return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number((value >> _32n) & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
// Base SHA2 class (RFC 6234)
class SHA2 extends Hash {
    constructor(blockLen, outputLen, padOffset, isLE) {
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
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
        for (let pos = 0; pos < len;) {
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
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
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        // append the bit '1' to the message
        buffer[pos++] = 0b10000000;
        this.buffer.subarray(pos).fill(0);
        // we have less than padOffset left in buffer, so we cannot put length in current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for (let i = pos; i < blockLen; i++)
            buffer[i] = 0;
        // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64 bits of that value.
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = createView(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
        if (len % 4)
            throw new Error('_sha2: outputLen should be aligned to 32bit');
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length)
            throw new Error('_sha2: outputLen bigger than state');
        for (let i = 0; i < outLen; i++)
            oview.setUint32(4 * i, state[i], isLE);
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

// Choice: a ? b : c
const Chi = (a, b, c) => (a & b) ^ (~a & c);
// Majority function, true if any two inpust is true
const Maj = (a, b, c) => (a & b) ^ (a & c) ^ (b & c);
// Round constants:
// first 32 bits of the fractional parts of the cube roots of the first 64 primes 2..311)
// prettier-ignore
const SHA256_K = new Uint32Array([
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
]);
// Initial state (first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19):
// prettier-ignore
const IV = new Uint32Array([
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
]);
// Temporary buffer, not used to store anything between runs
// Named this way because it matches specification.
const SHA256_W = new Uint32Array(64);
class SHA256 extends SHA2 {
    constructor() {
        super(64, 32, 8, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
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
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for (let i = 0; i < 16; i++, offset += 4)
            SHA256_W[i] = view.getUint32(offset, false);
        for (let i = 16; i < 64; i++) {
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ (W15 >>> 3);
            const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ (W2 >>> 10);
            SHA256_W[i] = (s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16]) | 0;
        }
        // Compression function main loop, 64 rounds
        let { A, B, C, D, E, F, G, H } = this;
        for (let i = 0; i < 64; i++) {
            const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
            const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
            const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
            const T2 = (sigma0 + Maj(A, B, C)) | 0;
            H = G;
            G = F;
            F = E;
            E = (D + T1) | 0;
            D = C;
            C = B;
            B = A;
            A = (T1 + T2) | 0;
        }
        // Add the compressed chunk to the current hash value
        A = (A + this.A) | 0;
        B = (B + this.B) | 0;
        C = (C + this.C) | 0;
        D = (D + this.D) | 0;
        E = (E + this.E) | 0;
        F = (F + this.F) | 0;
        G = (G + this.G) | 0;
        H = (H + this.H) | 0;
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
// Constants from https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf
class SHA224 extends SHA256 {
    constructor() {
        super();
        this.A = 0xc1059ed8 | 0;
        this.B = 0x367cd507 | 0;
        this.C = 0x3070dd17 | 0;
        this.D = 0xf70e5939 | 0;
        this.E = 0xffc00b31 | 0;
        this.F = 0x68581511 | 0;
        this.G = 0x64f98fa7 | 0;
        this.H = 0xbefa4fa4 | 0;
        this.outputLen = 28;
    }
}
/**
 * SHA2-256 hash function
 * @param message - data that would be hashed
 */
const sha256 = wrapConstructor(() => new SHA256());
const sha224 = wrapConstructor(() => new SHA224());

const sha256$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	sha224,
	sha256
}, Symbol.toStringTag, { value: 'Module' }));

const require$$2 = /*@__PURE__*/getAugmentedNamespace(sha256$1);

Object.defineProperty(checksum, "__esModule", { value: true });
checksum.c32checkDecode = checksum.c32checkEncode = void 0;
const sha256_1$1 = require$$2;
const utils_1$1 = utils;
const encoding_1 = encoding;
/**
 * Get the c32check checksum of a hex-encoded string
 * @param {string} dataHex - the hex string
 * @returns {string} the c32 checksum, as a bin-encoded string
 */
function c32checksum(dataHex) {
    const dataHash = (0, sha256_1$1.sha256)((0, sha256_1$1.sha256)((0, utils_1$1.hexToBytes)(dataHex)));
    const checksum = (0, utils_1$1.bytesToHex)(dataHash.slice(0, 4));
    return checksum;
}
/**
 * Encode a hex string as a c32check string.  This is a lot like how
 * base58check works in Bitcoin-land, but this algorithm uses the
 * z-base-32 alphabet instead of the base58 alphabet.  The algorithm
 * is as follows:
 * * calculate the c32checksum of version + data
 * * c32encode version + data + c32checksum
 * @param {number} version - the version string (between 0 and 31)
 * @param {string} data - the data to encode
 * @returns {string} the c32check representation
 */
function c32checkEncode(version, data) {
    if (version < 0 || version >= 32) {
        throw new Error('Invalid version (must be between 0 and 31)');
    }
    if (!data.match(/^[0-9a-fA-F]*$/)) {
        throw new Error('Invalid data (not a hex string)');
    }
    data = data.toLowerCase();
    if (data.length % 2 !== 0) {
        data = `0${data}`;
    }
    let versionHex = version.toString(16);
    if (versionHex.length === 1) {
        versionHex = `0${versionHex}`;
    }
    const checksumHex = c32checksum(`${versionHex}${data}`);
    const c32str = (0, encoding_1.c32encode)(`${data}${checksumHex}`);
    return `${encoding_1.c32[version]}${c32str}`;
}
checksum.c32checkEncode = c32checkEncode;
/*
 * Decode a c32check string back into its version and data payload.  This is
 * a lot like how base58check works in Bitcoin-land, but this algorithm uses
 * the z-base-32 alphabet instead of the base58 alphabet.  The algorithm
 * is as follows:
 * * extract the version, data, and checksum
 * * verify the checksum matches c32checksum(version + data)
 * * return data
 * @param {string} c32data - the c32check-encoded string
 * @returns {array} [version (number), data (string)].  The returned data
 * will be a hex string.  Throws an exception if the checksum does not match.
 */
function c32checkDecode(c32data) {
    c32data = (0, encoding_1.c32normalize)(c32data);
    const dataHex = (0, encoding_1.c32decode)(c32data.slice(1));
    const versionChar = c32data[0];
    const version = encoding_1.c32.indexOf(versionChar);
    const checksum = dataHex.slice(-8);
    let versionHex = version.toString(16);
    if (versionHex.length === 1) {
        versionHex = `0${versionHex}`;
    }
    if (c32checksum(`${versionHex}${dataHex.substring(0, dataHex.length - 8)}`) !== checksum) {
        throw new Error('Invalid c32check string: checksum mismatch');
    }
    return [version, dataHex.substring(0, dataHex.length - 8)];
}
checksum.c32checkDecode = c32checkDecode;

var address = {};

var base58check = {};

// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
function base (ALPHABET) {
  if (ALPHABET.length >= 255) { throw new TypeError('Alphabet too long') }
  var BASE_MAP = new Uint8Array(256);
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255;
  }
  for (var i = 0; i < ALPHABET.length; i++) {
    var x = ALPHABET.charAt(i);
    var xc = x.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) { throw new TypeError(x + ' is ambiguous') }
    BASE_MAP[xc] = i;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256); // log(BASE) / log(256), rounded up
  var iFACTOR = Math.log(256) / Math.log(BASE); // log(256) / log(BASE), rounded up
  function encode (source) {
    if (source instanceof Uint8Array) ; else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) { throw new TypeError('Expected Uint8Array') }
    if (source.length === 0) { return '' }
        // Skip & count leading zeroes.
    var zeroes = 0;
    var length = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
        // Allocate enough space in big-endian base58 representation.
    var size = ((pend - pbegin) * iFACTOR + 1) >>> 0;
    var b58 = new Uint8Array(size);
        // Process the bytes.
    while (pbegin !== pend) {
      var carry = source[pbegin];
            // Apply "b58 = b58 * 256 + ch".
      var i = 0;
      for (var it1 = size - 1; (carry !== 0 || i < length) && (it1 !== -1); it1--, i++) {
        carry += (256 * b58[it1]) >>> 0;
        b58[it1] = (carry % BASE) >>> 0;
        carry = (carry / BASE) >>> 0;
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i;
      pbegin++;
    }
        // Skip leading zeroes in base58 result.
    var it2 = size - length;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
        // Translate the result into a string.
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) { str += ALPHABET.charAt(b58[it2]); }
    return str
  }
  function decodeUnsafe (source) {
    if (typeof source !== 'string') { throw new TypeError('Expected String') }
    if (source.length === 0) { return new Uint8Array() }
    var psz = 0;
        // Skip and count leading '1's.
    var zeroes = 0;
    var length = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
        // Allocate enough space in big-endian base256 representation.
    var size = (((source.length - psz) * FACTOR) + 1) >>> 0; // log(58) / log(256), rounded up.
    var b256 = new Uint8Array(size);
        // Process the characters.
    while (source[psz]) {
            // Decode character
      var carry = BASE_MAP[source.charCodeAt(psz)];
            // Invalid character
      if (carry === 255) { return }
      var i = 0;
      for (var it3 = size - 1; (carry !== 0 || i < length) && (it3 !== -1); it3--, i++) {
        carry += (BASE * b256[it3]) >>> 0;
        b256[it3] = (carry % 256) >>> 0;
        carry = (carry / 256) >>> 0;
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i;
      psz++;
    }
        // Skip leading zeroes in b256.
    var it4 = size - length;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j = zeroes;
    while (it4 !== size) {
      vch[j++] = b256[it4++];
    }
    return vch
  }
  function decode (string) {
    var buffer = decodeUnsafe(string);
    if (buffer) { return buffer }
    throw new Error('Non-base' + BASE + ' character')
  }
  return {
    encode: encode,
    decodeUnsafe: decodeUnsafe,
    decode: decode
  }
}
var src = base;

/*
 * From https://github.com/wzbg/base58check
 * @Author: zyc
 * @Date:   2016-09-11 23:36:05
 */
Object.defineProperty(base58check, "__esModule", { value: true });
base58check.decode = base58check.encode = void 0;
const sha256_1 = require$$2;
const utils_1 = utils;
const basex = src;
const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
function encode(data, prefix = '00') {
    const dataBytes = typeof data === 'string' ? (0, utils_1.hexToBytes)(data) : data;
    const prefixBytes = typeof prefix === 'string' ? (0, utils_1.hexToBytes)(prefix) : data;
    if (!(dataBytes instanceof Uint8Array) || !(prefixBytes instanceof Uint8Array)) {
        throw new TypeError('Argument must be of type Uint8Array or string');
    }
    const checksum = (0, sha256_1.sha256)((0, sha256_1.sha256)(new Uint8Array([...prefixBytes, ...dataBytes])));
    return basex(ALPHABET).encode([...prefixBytes, ...dataBytes, ...checksum.slice(0, 4)]);
}
base58check.encode = encode;
function decode(string) {
    const bytes = basex(ALPHABET).decode(string);
    const prefixBytes = bytes.slice(0, 1);
    const dataBytes = bytes.slice(1, -4);
    // todo: for better performance replace spread with `concatBytes` method
    const checksum = (0, sha256_1.sha256)((0, sha256_1.sha256)(new Uint8Array([...prefixBytes, ...dataBytes])));
    bytes.slice(-4).forEach((check, index) => {
        if (check !== checksum[index]) {
            throw new Error('Invalid checksum');
        }
    });
    return { prefix: prefixBytes, data: dataBytes };
}
base58check.decode = decode;

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.c32ToB58 = exports.b58ToC32 = exports.c32addressDecode = exports.c32address = exports.versions = void 0;
	const checksum_1 = checksum;
	const base58check$1 = base58check;
	const utils_1 = utils;
	exports.versions = {
	    mainnet: {
	        p2pkh: 22,
	        p2sh: 20, // 'M'
	    },
	    testnet: {
	        p2pkh: 26,
	        p2sh: 21, // 'N'
	    },
	};
	// address conversion : bitcoin to stacks
	const ADDR_BITCOIN_TO_STACKS = {};
	ADDR_BITCOIN_TO_STACKS[0] = exports.versions.mainnet.p2pkh;
	ADDR_BITCOIN_TO_STACKS[5] = exports.versions.mainnet.p2sh;
	ADDR_BITCOIN_TO_STACKS[111] = exports.versions.testnet.p2pkh;
	ADDR_BITCOIN_TO_STACKS[196] = exports.versions.testnet.p2sh;
	// address conversion : stacks to bitcoin
	const ADDR_STACKS_TO_BITCOIN = {};
	ADDR_STACKS_TO_BITCOIN[exports.versions.mainnet.p2pkh] = 0;
	ADDR_STACKS_TO_BITCOIN[exports.versions.mainnet.p2sh] = 5;
	ADDR_STACKS_TO_BITCOIN[exports.versions.testnet.p2pkh] = 111;
	ADDR_STACKS_TO_BITCOIN[exports.versions.testnet.p2sh] = 196;
	/**
	 * Make a c32check address with the given version and hash160
	 * The only difference between a c32check string and c32 address
	 * is that the letter 'S' is pre-pended.
	 * @param {number} version - the address version number
	 * @param {string} hash160hex - the hash160 to encode (must be a hash160)
	 * @returns {string} the address
	 */
	function c32address(version, hash160hex) {
	    if (!hash160hex.match(/^[0-9a-fA-F]{40}$/)) {
	        throw new Error('Invalid argument: not a hash160 hex string');
	    }
	    const c32string = (0, checksum_1.c32checkEncode)(version, hash160hex);
	    return `S${c32string}`;
	}
	exports.c32address = c32address;
	/**
	 * Decode a c32 address into its version and hash160
	 * @param {string} c32addr - the c32check-encoded address
	 * @returns {[number, string]} a tuple with the version and hash160
	 */
	function c32addressDecode(c32addr) {
	    if (c32addr.length <= 5) {
	        throw new Error('Invalid c32 address: invalid length');
	    }
	    if (c32addr[0] != 'S') {
	        throw new Error('Invalid c32 address: must start with "S"');
	    }
	    return (0, checksum_1.c32checkDecode)(c32addr.slice(1));
	}
	exports.c32addressDecode = c32addressDecode;
	/*
	 * Convert a base58check address to a c32check address.
	 * Try to convert the version number if one is not given.
	 * @param {string} b58check - the base58check encoded address
	 * @param {number} version - the version number, if not inferred from the address
	 * @returns {string} the c32 address with the given version number (or the
	 *   semantically-equivalent c32 version number, if not given)
	 */
	function b58ToC32(b58check, version = -1) {
	    const addrInfo = base58check$1.decode(b58check);
	    const hash160String = (0, utils_1.bytesToHex)(addrInfo.data);
	    const addrVersion = parseInt((0, utils_1.bytesToHex)(addrInfo.prefix), 16);
	    let stacksVersion;
	    if (version < 0) {
	        stacksVersion = addrVersion;
	        if (ADDR_BITCOIN_TO_STACKS[addrVersion] !== undefined) {
	            stacksVersion = ADDR_BITCOIN_TO_STACKS[addrVersion];
	        }
	    }
	    else {
	        stacksVersion = version;
	    }
	    return c32address(stacksVersion, hash160String);
	}
	exports.b58ToC32 = b58ToC32;
	/*
	 * Convert a c32check address to a base58check address.
	 * @param {string} c32string - the c32check address
	 * @param {number} version - the version number, if not inferred from the address
	 * @returns {string} the base58 address with the given version number (or the
	 *    semantically-equivalent bitcoin version number, if not given)
	 */
	function c32ToB58(c32string, version = -1) {
	    const addrInfo = c32addressDecode(c32string);
	    const stacksVersion = addrInfo[0];
	    const hash160String = addrInfo[1];
	    let bitcoinVersion;
	    if (version < 0) {
	        bitcoinVersion = stacksVersion;
	        if (ADDR_STACKS_TO_BITCOIN[stacksVersion] !== undefined) {
	            bitcoinVersion = ADDR_STACKS_TO_BITCOIN[stacksVersion];
	        }
	    }
	    else {
	        bitcoinVersion = version;
	    }
	    let prefix = bitcoinVersion.toString(16);
	    if (prefix.length === 1) {
	        prefix = `0${prefix}`;
	    }
	    return base58check$1.encode(hash160String, prefix);
	}
	exports.c32ToB58 = c32ToB58;
} (address));

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.b58ToC32 = exports.c32ToB58 = exports.versions = exports.c32normalize = exports.c32addressDecode = exports.c32address = exports.c32checkDecode = exports.c32checkEncode = exports.c32decode = exports.c32encode = void 0;
	const encoding_1 = encoding;
	Object.defineProperty(exports, "c32encode", { enumerable: true, get: function () { return encoding_1.c32encode; } });
	Object.defineProperty(exports, "c32decode", { enumerable: true, get: function () { return encoding_1.c32decode; } });
	Object.defineProperty(exports, "c32normalize", { enumerable: true, get: function () { return encoding_1.c32normalize; } });
	const checksum_1 = checksum;
	Object.defineProperty(exports, "c32checkEncode", { enumerable: true, get: function () { return checksum_1.c32checkEncode; } });
	Object.defineProperty(exports, "c32checkDecode", { enumerable: true, get: function () { return checksum_1.c32checkDecode; } });
	const address_1 = address;
	Object.defineProperty(exports, "c32address", { enumerable: true, get: function () { return address_1.c32address; } });
	Object.defineProperty(exports, "c32addressDecode", { enumerable: true, get: function () { return address_1.c32addressDecode; } });
	Object.defineProperty(exports, "c32ToB58", { enumerable: true, get: function () { return address_1.c32ToB58; } });
	Object.defineProperty(exports, "b58ToC32", { enumerable: true, get: function () { return address_1.b58ToC32; } });
	Object.defineProperty(exports, "versions", { enumerable: true, get: function () { return address_1.versions; } });
} (lib));

const client = writable({});

let webWalletNeeded = false;
function setUpMicroStacks() {
  let origin = "http://34.135.65.158/bridge-api/v1";
  if (typeof window !== "undefined") {
    origin = window.location.origin;
  }
  let stxNetwork;
  stxNetwork = new i();
  const config = {
    appName: "sBTC Client",
    appIconUrl: origin + "/img/logo.png",
    network: stxNetwork
  };
  se(config);
  client.set(C());
}
function decodeStacksAddress(stxAddress) {
  if (!stxAddress)
    throw new Error("Needs a stacks address");
  const decoded = lib.c32addressDecode(stxAddress);
  return decoded;
}
async function fetchSbtcBalance(addr) {
  const result = await fetchUserSbtcBalance(addr);
  sbtcConfig.update((conf) => {
    if (conf.pegInTransaction)
      conf.pegInTransaction.pegInData.stacksAddress = addr;
    if (conf.pegOutTransaction)
      conf.pegOutTransaction.pegInData.stacksAddress = addr;
    conf.balance = result;
    conf.balance.address = addr;
    return conf;
  });
}
async function login($auth) {
  try {
    $auth.openAuthRequest({
      onFinish: async (payload) => {
        console.log("payload:", payload);
        const network = "mainnet";
        const addr = network === "testnet" ? payload.addresses.testnet : payload.addresses.mainnet;
        await fetchSbtcBalance(addr);
      },
      onCancel: () => {
        console.log("canceled");
      }
    }).catch((err) => {
      console.log(err);
      webWalletNeeded = false;
    });
  } catch (e) {
    if (window)
      window.location.href = "https://wallet.hiro.so/wallet/install-web";
  }
}

export { sha256 as a, commonjsGlobal as c, decodeStacksAddress as d, getDefaultExportFromCjs as g, login as l, setUpMicroStacks as s };
