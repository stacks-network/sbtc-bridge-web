function number$2(n) {
    if (!Number.isSafeInteger(n) || n < 0)
        throw new Error(`Wrong positive integer: ${n}`);
}
function bool$1(b) {
    if (typeof b !== 'boolean')
        throw new Error(`Expected boolean, not ${b}`);
}
function bytes$2(b, ...lengths) {
    if (!(b instanceof Uint8Array))
        throw new TypeError('Expected Uint8Array');
    if (lengths.length > 0 && !lengths.includes(b.length))
        throw new TypeError(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
function hash$1(hash) {
    if (typeof hash !== 'function' || typeof hash.create !== 'function')
        throw new Error('Hash should be wrapped by utils.wrapConstructor');
    number$2(hash.outputLen);
    number$2(hash.blockLen);
}
function exists$1(instance, checkFinished = true) {
    if (instance.destroyed)
        throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished)
        throw new Error('Hash#digest() has already been called');
}
function output$1(out, instance) {
    bytes$2(out);
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error(`digestInto() expects output buffer of length at least ${min}`);
    }
}
const assert$1 = {
    number: number$2,
    bool: bool$1,
    bytes: bytes$2,
    hash: hash$1,
    exists: exists$1,
    output: output$1,
};

const crypto = {
    node: undefined,
    web: typeof self === 'object' && 'crypto' in self ? self.crypto : undefined,
};

/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// Cast array to view
const createView$1 = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
// The rotate right (circular right shift) operation for uint32
const rotr$1 = (word, shift) => (word << (32 - shift)) | (word >>> shift);
const isLE$1 = new Uint8Array(new Uint32Array([0x11223344]).buffer)[0] === 0x44;
// There is almost no big endian hardware, but js typed arrays uses platform specific endianness.
// So, just to be sure not to corrupt anything.
if (!isLE$1)
    throw new Error('Non little-endian hardware is not supported');
Array.from({ length: 256 }, (v, i) => i.toString(16).padStart(2, '0'));
function utf8ToBytes$2(str) {
    if (typeof str !== 'string') {
        throw new TypeError(`utf8ToBytes expected string, got ${typeof str}`);
    }
    return new TextEncoder().encode(str);
}
function toBytes$1(data) {
    if (typeof data === 'string')
        data = utf8ToBytes$2(data);
    if (!(data instanceof Uint8Array))
        throw new TypeError(`Expected input type is Uint8Array (got ${typeof data})`);
    return data;
}
/**
 * Concats Uint8Array-s into one; like `Buffer.concat([buf1, buf2])`
 * @example concatBytes(buf1, buf2)
 */
function concatBytes$2(...arrays) {
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
// For runtime check if class implements interface
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
/**
 * Secure PRNG
 */
function randomBytes(bytesLength = 32) {
    if (crypto.web) {
        return crypto.web.getRandomValues(new Uint8Array(bytesLength));
    }
    else {
        throw new Error("The environment doesn't have randomBytes function");
    }
}

// Polyfill for Safari 14
function setBigUint64$1(view, byteOffset, value, isLE) {
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
let SHA2$1 = class SHA2 extends Hash$1 {
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
        this.view = createView$1(this.buffer);
    }
    update(data) {
        assert$1.exists(this);
        const { view, buffer, blockLen } = this;
        data = toBytes$1(data);
        const len = data.length;
        for (let pos = 0; pos < len;) {
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
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
        setBigUint64$1(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = createView$1(out);
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
};

// Choice: a ? b : c
const Chi$1 = (a, b, c) => (a & b) ^ (~a & c);
// Majority function, true if any two inpust is true
const Maj$1 = (a, b, c) => (a & b) ^ (a & c) ^ (b & c);
// Round constants:
// first 32 bits of the fractional parts of the cube roots of the first 64 primes 2..311)
// prettier-ignore
const SHA256_K$1 = new Uint32Array([
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
const IV$1 = new Uint32Array([
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
]);
// Temporary buffer, not used to store anything between runs
// Named this way because it matches specification.
const SHA256_W$1 = new Uint32Array(64);
let SHA256$1 = class SHA256 extends SHA2$1 {
    constructor() {
        super(64, 32, 8, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
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
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for (let i = 0; i < 16; i++, offset += 4)
            SHA256_W$1[i] = view.getUint32(offset, false);
        for (let i = 16; i < 64; i++) {
            const W15 = SHA256_W$1[i - 15];
            const W2 = SHA256_W$1[i - 2];
            const s0 = rotr$1(W15, 7) ^ rotr$1(W15, 18) ^ (W15 >>> 3);
            const s1 = rotr$1(W2, 17) ^ rotr$1(W2, 19) ^ (W2 >>> 10);
            SHA256_W$1[i] = (s1 + SHA256_W$1[i - 7] + s0 + SHA256_W$1[i - 16]) | 0;
        }
        // Compression function main loop, 64 rounds
        let { A, B, C, D, E, F, G, H } = this;
        for (let i = 0; i < 64; i++) {
            const sigma1 = rotr$1(E, 6) ^ rotr$1(E, 11) ^ rotr$1(E, 25);
            const T1 = (H + sigma1 + Chi$1(E, F, G) + SHA256_K$1[i] + SHA256_W$1[i]) | 0;
            const sigma0 = rotr$1(A, 2) ^ rotr$1(A, 13) ^ rotr$1(A, 22);
            const T2 = (sigma0 + Maj$1(A, B, C)) | 0;
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
        SHA256_W$1.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        this.buffer.fill(0);
    }
};
// Constants from https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf
let SHA224$1 = class SHA224 extends SHA256$1 {
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
};
/**
 * SHA2-256 hash function
 * @param message - data that would be hashed
 */
const sha256$1 = wrapConstructor$1(() => new SHA256$1());
wrapConstructor$1(() => new SHA224$1());

/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const _0n$4 = BigInt(0);
const _1n$4 = BigInt(1);
const _2n$2 = BigInt(2);
const u8a = (a) => a instanceof Uint8Array;
const hexes = Array.from({ length: 256 }, (v, i) => i.toString(16).padStart(2, '0'));
function bytesToHex(bytes) {
    if (!u8a(bytes))
        throw new Error('Uint8Array expected');
    // pre-caching improves the speed 6x
    let hex = '';
    for (let i = 0; i < bytes.length; i++) {
        hex += hexes[bytes[i]];
    }
    return hex;
}
function numberToHexUnpadded(num) {
    const hex = num.toString(16);
    return hex.length & 1 ? `0${hex}` : hex;
}
function hexToNumber(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    // Big Endian
    return BigInt(hex === '' ? '0' : `0x${hex}`);
}
// Caching slows it down 2-3x
function hexToBytes(hex) {
    if (typeof hex !== 'string')
        throw new Error('hex string expected, got ' + typeof hex);
    if (hex.length % 2)
        throw new Error('hex string is invalid: unpadded ' + hex.length);
    const array = new Uint8Array(hex.length / 2);
    for (let i = 0; i < array.length; i++) {
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0)
            throw new Error('invalid byte sequence');
        array[i] = byte;
    }
    return array;
}
// Big Endian
function bytesToNumberBE(bytes) {
    return hexToNumber(bytesToHex(bytes));
}
function bytesToNumberLE(bytes) {
    if (!u8a(bytes))
        throw new Error('Uint8Array expected');
    return hexToNumber(bytesToHex(Uint8Array.from(bytes).reverse()));
}
const numberToBytesBE = (n, len) => hexToBytes(n.toString(16).padStart(len * 2, '0'));
const numberToBytesLE = (n, len) => numberToBytesBE(n, len).reverse();
// Returns variable number bytes (minimal bigint encoding?)
const numberToVarBytesBE = (n) => hexToBytes(numberToHexUnpadded(n));
function ensureBytes(title, hex, expectedLength) {
    let res;
    if (typeof hex === 'string') {
        try {
            res = hexToBytes(hex);
        }
        catch (e) {
            throw new Error(`${title} must be valid hex string, got "${hex}". Cause: ${e}`);
        }
    }
    else if (u8a(hex)) {
        // Uint8Array.from() instead of hash.slice() because node.js Buffer
        // is instance of Uint8Array, and its slice() creates **mutable** copy
        res = Uint8Array.from(hex);
    }
    else {
        throw new Error(`${title} must be hex string or Uint8Array`);
    }
    const len = res.length;
    if (typeof expectedLength === 'number' && len !== expectedLength)
        throw new Error(`${title} expected ${expectedLength} bytes, got ${len}`);
    return res;
}
// Copies several Uint8Arrays into one.
function concatBytes$1(...arrs) {
    const r = new Uint8Array(arrs.reduce((sum, a) => sum + a.length, 0));
    let pad = 0; // walk through each item, ensure they have proper type
    arrs.forEach((a) => {
        if (!u8a(a))
            throw new Error('Uint8Array expected');
        r.set(a, pad);
        pad += a.length;
    });
    return r;
}
function equalBytes$1(b1, b2) {
    // We don't care about timing attacks here
    if (b1.length !== b2.length)
        return false;
    for (let i = 0; i < b1.length; i++)
        if (b1[i] !== b2[i])
            return false;
    return true;
}
function utf8ToBytes$1(str) {
    if (typeof str !== 'string') {
        throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    }
    return new TextEncoder().encode(str);
}
// Bit operations
// Amount of bits inside bigint (Same as n.toString(2).length)
function bitLen(n) {
    let len;
    for (len = 0; n > 0n; n >>= _1n$4, len += 1)
        ;
    return len;
}
// Gets single bit at position. NOTE: first bit position is 0 (same as arrays)
// Same as !!+Array.from(n.toString(2)).reverse()[pos]
const bitGet = (n, pos) => (n >> BigInt(pos)) & 1n;
// Sets single bit at position
const bitSet = (n, pos, value) => n | ((value ? _1n$4 : _0n$4) << BigInt(pos));
// Return mask for N bits (Same as BigInt(`0b${Array(i).fill('1').join('')}`))
// Not using ** operator with bigints for old engines.
const bitMask = (n) => (_2n$2 << BigInt(n - 1)) - _1n$4;
// DRBG
const u8n = (data) => new Uint8Array(data); // creates Uint8Array
const u8fr = (arr) => Uint8Array.from(arr); // another shortcut
/**
 * Minimal HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
 * @returns function that will call DRBG until 2nd arg returns something meaningful
 * @example
 *   const drbg = createHmacDRBG<Key>(32, 32, hmac);
 *   drbg(seed, bytesToKey); // bytesToKey must return Key or undefined
 */
function createHmacDrbg(hashLen, qByteLen, hmacFn) {
    if (typeof hashLen !== 'number' || hashLen < 2)
        throw new Error('hashLen must be a number');
    if (typeof qByteLen !== 'number' || qByteLen < 2)
        throw new Error('qByteLen must be a number');
    if (typeof hmacFn !== 'function')
        throw new Error('hmacFn must be a function');
    // Step B, Step C: set hashLen to 8*ceil(hlen/8)
    let v = u8n(hashLen); // Minimal non-full-spec HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
    let k = u8n(hashLen); // Steps B and C of RFC6979 3.2: set hashLen, in our case always same
    let i = 0; // Iterations counter, will throw when over 1000
    const reset = () => {
        v.fill(1);
        k.fill(0);
        i = 0;
    };
    const h = (...b) => hmacFn(k, v, ...b); // hmac(k)(v, ...values)
    const reseed = (seed = u8n()) => {
        // HMAC-DRBG reseed() function. Steps D-G
        k = h(u8fr([0x00]), seed); // k = hmac(k || v || 0x00 || seed)
        v = h(); // v = hmac(k || v)
        if (seed.length === 0)
            return;
        k = h(u8fr([0x01]), seed); // k = hmac(k || v || 0x01 || seed)
        v = h(); // v = hmac(k || v)
    };
    const gen = () => {
        // HMAC-DRBG generate() function
        if (i++ >= 1000)
            throw new Error('drbg: tried 1000 values');
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
        reseed(seed); // Steps D-G
        let res = undefined; // Step H: grind until k is in [1..n-1]
        while (!(res = pred(gen())))
            reseed();
        reset();
        return res;
    };
    return genUntil;
}
// Validating curves and fields
const validatorFns = {
    bigint: (val) => typeof val === 'bigint',
    function: (val) => typeof val === 'function',
    boolean: (val) => typeof val === 'boolean',
    string: (val) => typeof val === 'string',
    isSafeInteger: (val) => Number.isSafeInteger(val),
    array: (val) => Array.isArray(val),
    field: (val, object) => object.Fp.isValid(val),
    hash: (val) => typeof val === 'function' && Number.isSafeInteger(val.outputLen),
};
// type Record<K extends string | number | symbol, T> = { [P in K]: T; }
function validateObject(object, validators, optValidators = {}) {
    const checkField = (fieldName, type, isOptional) => {
        const checkVal = validatorFns[type];
        if (typeof checkVal !== 'function')
            throw new Error(`Invalid validator "${type}", expected function`);
        const val = object[fieldName];
        if (isOptional && val === undefined)
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
// validate type tests
// const o: { a: number; b: number; c: number } = { a: 1, b: 5, c: 6 };
// const z0 = validateObject(o, { a: 'isSafeInteger' }, { c: 'bigint' }); // Ok!
// // Should fail type-check
// const z1 = validateObject(o, { a: 'tmp' }, { c: 'zz' });
// const z2 = validateObject(o, { a: 'isSafeInteger' }, { c: 'zz' });
// const z3 = validateObject(o, { test: 'boolean', z: 'bug' });
// const z4 = validateObject(o, { a: 'boolean', z: 'bug' });

const ut = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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
    utf8ToBytes: utf8ToBytes$1,
    validateObject
}, Symbol.toStringTag, { value: 'Module' }));

/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// prettier-ignore
const _0n$3 = BigInt(0), _1n$3 = BigInt(1), _2n$1 = BigInt(2), _3n = BigInt(3);
// prettier-ignore
const _4n = BigInt(4), _5n = BigInt(5), _8n = BigInt(8);
// prettier-ignore
BigInt(9); BigInt(16);
// Calculates a modulo b
function mod(a, b) {
    const result = a % b;
    return result >= _0n$3 ? result : b + result;
}
/**
 * Efficiently exponentiate num to power and do modular division.
 * Unsafe in some contexts: uses ladder, so can expose bigint bits.
 * @example
 * powMod(2n, 6n, 11n) // 64n % 11n == 9n
 */
// TODO: use field version && remove
function pow(num, power, modulo) {
    if (modulo <= _0n$3 || power < _0n$3)
        throw new Error('Expected power/modulo > 0');
    if (modulo === _1n$3)
        return _0n$3;
    let res = _1n$3;
    while (power > _0n$3) {
        if (power & _1n$3)
            res = (res * num) % modulo;
        num = (num * num) % modulo;
        power >>= _1n$3;
    }
    return res;
}
// Does x ^ (2 ^ power) mod p. pow2(30, 4) == 30 ^ (2 ^ 4)
function pow2(x, power, modulo) {
    let res = x;
    while (power-- > _0n$3) {
        res *= res;
        res %= modulo;
    }
    return res;
}
// Inverses number over modulo
function invert(number, modulo) {
    if (number === _0n$3 || modulo <= _0n$3) {
        throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
    }
    // Eucledian GCD https://brilliant.org/wiki/extended-euclidean-algorithm/
    let a = mod(number, modulo);
    let b = modulo;
    // prettier-ignore
    let x = _0n$3, u = _1n$3;
    while (a !== _0n$3) {
        // JIT applies optimization if those two lines follow each other
        const q = b / a;
        const r = b % a;
        const m = x - u * q;
        // prettier-ignore
        b = a, a = r, x = u, u = m;
    }
    const gcd = b;
    if (gcd !== _1n$3)
        throw new Error('invert: does not exist');
    return mod(x, modulo);
}
// Tonelli-Shanks algorithm
// Paper 1: https://eprint.iacr.org/2012/685.pdf (page 12)
// Paper 2: Square Roots from 1; 24, 51, 10 to Dan Shanks
function tonelliShanks(P) {
    // Legendre constant: used to calculate Legendre symbol (a | p),
    // which denotes the value of a^((p-1)/2) (mod p).
    // (a | p) ≡ 1    if a is a square (mod p)
    // (a | p) ≡ -1   if a is not a square (mod p)
    // (a | p) ≡ 0    if a ≡ 0 (mod p)
    const legendreC = (P - _1n$3) / _2n$1;
    let Q, S, Z;
    // Step 1: By factoring out powers of 2 from p - 1,
    // find q and s such that p - 1 = q*(2^s) with q odd
    for (Q = P - _1n$3, S = 0; Q % _2n$1 === _0n$3; Q /= _2n$1, S++)
        ;
    // Step 2: Select a non-square z such that (z | p) ≡ -1 and set c ≡ zq
    for (Z = _2n$1; Z < P && pow(Z, legendreC, P) !== P - _1n$3; Z++)
        ;
    // Fast-path
    if (S === 1) {
        const p1div4 = (P + _1n$3) / _4n;
        return function tonelliFast(Fp, n) {
            const root = Fp.pow(n, p1div4);
            if (!Fp.eql(Fp.sqr(root), n))
                throw new Error('Cannot find square root');
            return root;
        };
    }
    // Slow-path
    const Q1div2 = (Q + _1n$3) / _2n$1;
    return function tonelliSlow(Fp, n) {
        // Step 0: Check that n is indeed a square: (n | p) should not be ≡ -1
        if (Fp.pow(n, legendreC) === Fp.neg(Fp.ONE))
            throw new Error('Cannot find square root');
        let r = S;
        // TODO: will fail at Fp2/etc
        let g = Fp.pow(Fp.mul(Fp.ONE, Z), Q); // will update both x and b
        let x = Fp.pow(n, Q1div2); // first guess at the square root
        let b = Fp.pow(n, Q); // first guess at the fudge factor
        while (!Fp.eql(b, Fp.ONE)) {
            if (Fp.eql(b, Fp.ZERO))
                return Fp.ZERO; // https://en.wikipedia.org/wiki/Tonelli%E2%80%93Shanks_algorithm (4. If t = 0, return r = 0)
            // Find m such b^(2^m)==1
            let m = 1;
            for (let t2 = Fp.sqr(b); m < r; m++) {
                if (Fp.eql(t2, Fp.ONE))
                    break;
                t2 = Fp.sqr(t2); // t2 *= t2
            }
            // NOTE: r-m-1 can be bigger than 32, need to convert to bigint before shift, otherwise there will be overflow
            const ge = Fp.pow(g, _1n$3 << BigInt(r - m - 1)); // ge = 2^(r-m-1)
            g = Fp.sqr(ge); // g = ge * ge
            x = Fp.mul(x, ge); // x *= ge
            b = Fp.mul(b, g); // b *= g
            r = m;
        }
        return x;
    };
}
function FpSqrt(P) {
    // NOTE: different algorithms can give different roots, it is up to user to decide which one they want.
    // For example there is FpSqrtOdd/FpSqrtEven to choice root based on oddness (used for hash-to-curve).
    // P ≡ 3 (mod 4)
    // √n = n^((P+1)/4)
    if (P % _4n === _3n) {
        // Not all roots possible!
        // const ORDER =
        //   0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaabn;
        // const NUM = 72057594037927816n;
        const p1div4 = (P + _1n$3) / _4n;
        return function sqrt3mod4(Fp, n) {
            const root = Fp.pow(n, p1div4);
            // Throw if root**2 != n
            if (!Fp.eql(Fp.sqr(root), n))
                throw new Error('Cannot find square root');
            return root;
        };
    }
    // Atkin algorithm for q ≡ 5 (mod 8), https://eprint.iacr.org/2012/685.pdf (page 10)
    if (P % _8n === _5n) {
        const c1 = (P - _5n) / _8n;
        return function sqrt5mod8(Fp, n) {
            const n2 = Fp.mul(n, _2n$1);
            const v = Fp.pow(n2, c1);
            const nv = Fp.mul(n, v);
            const i = Fp.mul(Fp.mul(nv, _2n$1), v);
            const root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
            if (!Fp.eql(Fp.sqr(root), n))
                throw new Error('Cannot find square root');
            return root;
        };
    }
    // Other cases: Tonelli-Shanks algorithm
    return tonelliShanks(P);
}
// prettier-ignore
const FIELD_FIELDS = [
    'create', 'isValid', 'is0', 'neg', 'inv', 'sqrt', 'sqr',
    'eql', 'add', 'sub', 'mul', 'pow', 'div',
    'addN', 'subN', 'mulN', 'sqrN'
];
function validateField(field) {
    const initial = {
        ORDER: 'bigint',
        MASK: 'bigint',
        BYTES: 'isSafeInteger',
        BITS: 'isSafeInteger',
    };
    const opts = FIELD_FIELDS.reduce((map, val) => {
        map[val] = 'function';
        return map;
    }, initial);
    return validateObject(field, opts);
}
// Generic field functions
function FpPow(f, num, power) {
    // Should have same speed as pow for bigints
    // TODO: benchmark!
    if (power < _0n$3)
        throw new Error('Expected power > 0');
    if (power === _0n$3)
        return f.ONE;
    if (power === _1n$3)
        return num;
    let p = f.ONE;
    let d = num;
    while (power > _0n$3) {
        if (power & _1n$3)
            p = f.mul(p, d);
        d = f.sqr(d);
        power >>= 1n;
    }
    return p;
}
function FpInvertBatch(f, nums) {
    const tmp = new Array(nums.length);
    // Walk from first to last, multiply them by each other MOD p
    const lastMultiplied = nums.reduce((acc, num, i) => {
        if (f.is0(num))
            return acc;
        tmp[i] = acc;
        return f.mul(acc, num);
    }, f.ONE);
    // Invert last element
    const inverted = f.inv(lastMultiplied);
    // Walk from last to first, multiply them by inverted each other MOD p
    nums.reduceRight((acc, num, i) => {
        if (f.is0(num))
            return acc;
        tmp[i] = f.mul(acc, tmp[i]);
        return f.mul(acc, num);
    }, inverted);
    return tmp;
}
// CURVE.n lengths
function nLength(n, nBitLength) {
    // Bit size, byte size of CURVE.n
    const _nBitLength = nBitLength !== undefined ? nBitLength : n.toString(2).length;
    const nByteLength = Math.ceil(_nBitLength / 8);
    return { nBitLength: _nBitLength, nByteLength };
}
function Fp$1(ORDER, bitLen, isLE = false, redef = {}) {
    if (ORDER <= _0n$3)
        throw new Error(`Expected Fp ORDER > 0, got ${ORDER}`);
    const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen);
    if (BYTES > 2048)
        throw new Error('Field lengths over 2048 bytes are not supported');
    const sqrtP = FpSqrt(ORDER);
    const f = Object.freeze({
        ORDER,
        BITS,
        BYTES,
        MASK: bitMask(BITS),
        ZERO: _0n$3,
        ONE: _1n$3,
        create: (num) => mod(num, ORDER),
        isValid: (num) => {
            if (typeof num !== 'bigint')
                throw new Error(`Invalid field element: expected bigint, got ${typeof num}`);
            return _0n$3 <= num && num < ORDER; // 0 is valid element, but it's not invertible
        },
        is0: (num) => num === _0n$3,
        isOdd: (num) => (num & _1n$3) === _1n$3,
        neg: (num) => mod(-num, ORDER),
        eql: (lhs, rhs) => lhs === rhs,
        sqr: (num) => mod(num * num, ORDER),
        add: (lhs, rhs) => mod(lhs + rhs, ORDER),
        sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
        mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
        pow: (num, power) => FpPow(f, num, power),
        div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
        // Same as above, but doesn't normalize
        sqrN: (num) => num * num,
        addN: (lhs, rhs) => lhs + rhs,
        subN: (lhs, rhs) => lhs - rhs,
        mulN: (lhs, rhs) => lhs * rhs,
        inv: (num) => invert(num, ORDER),
        sqrt: redef.sqrt || ((n) => sqrtP(f, n)),
        invertBatch: (lst) => FpInvertBatch(f, lst),
        // TODO: do we really need constant cmov?
        // We don't have const-time bigints anyway, so probably will be not very useful
        cmov: (a, b, c) => (c ? b : a),
        toBytes: (num) => (isLE ? numberToBytesLE(num, BYTES) : numberToBytesBE(num, BYTES)),
        fromBytes: (bytes) => {
            if (bytes.length !== BYTES)
                throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes.length}`);
            return isLE ? bytesToNumberLE(bytes) : bytesToNumberBE(bytes);
        },
    });
    return Object.freeze(f);
}
/**
 * FIPS 186 B.4.1-compliant "constant-time" private key generation utility.
 * Can take (n+8) or more bytes of uniform input e.g. from CSPRNG or KDF
 * and convert them into private scalar, with the modulo bias being neglible.
 * Needs at least 40 bytes of input for 32-byte private key.
 * https://research.kudelskisecurity.com/2020/07/28/the-definitive-guide-to-modulo-bias-and-how-to-avoid-it/
 * @param hash hash output from SHA3 or a similar function
 * @returns valid private scalar
 */
function hashToPrivateScalar(hash, groupOrder, isLE = false) {
    hash = ensureBytes('privateHash', hash);
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
// Elliptic curve multiplication of Point by scalar. Fragile.
// Scalars should always be less than curve order: this should be checked inside of a curve itself.
// Creates precomputation tables for fast multiplication:
// - private scalar is split by fixed size windows of W bits
// - every window point is collected from window's table & added to accumulator
// - since windows are different, same point inside tables won't be accessed more than once per calc
// - each multiplication is 'Math.ceil(CURVE_ORDER / 𝑊) + 1' point additions (fixed for any scalar)
// - +1 window is neccessary for wNAF
// - wNAF reduces table size: 2x less memory + 2x faster generation, but 10% slower multiplication
// TODO: Research returning 2d JS array of windows, instead of a single window. This would allow
// windows to be in different memory locations
function wNAF(c, bits) {
    const constTimeNegate = (condition, item) => {
        const neg = item.negate();
        return condition ? neg : item;
    };
    const opts = (W) => {
        const windows = Math.ceil(bits / W) + 1; // +1, because
        const windowSize = 2 ** (W - 1); // -1 because we skip zero
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
                // =1, because we skip zero
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
            // TODO: maybe check that scalar is less than group order? wNAF behavious is undefined otherwise
            // But need to carefully remove other checks before wNAF. ORDER == bits here
            const { windows, windowSize } = opts(W);
            let p = c.ZERO;
            let f = c.BASE;
            const mask = BigInt(2 ** W - 1); // Create mask with W ones: 0b1111 for W=4 etc.
            const maxNumber = 2 ** W;
            const shiftBy = BigInt(W);
            for (let window = 0; window < windows; window++) {
                const offset = window * windowSize;
                // Extract W bits.
                let wbits = Number(n & mask);
                // Shift number by W bits.
                n >>= shiftBy;
                // If the bits are bigger than max size, we'll split those.
                // +224 => 256 - 32
                if (wbits > windowSize) {
                    wbits -= maxNumber;
                    n += _1n$2;
                }
                // This code was first written with assumption that 'f' and 'p' will never be infinity point:
                // since each addition is multiplied by 2 ** W, it cannot cancel each other. However,
                // there is negate now: it is possible that negated element from low value
                // would be the same as high element, which will create carry into next window.
                // It's not obvious how this can fail, but still worth investigating later.
                // Check if we're onto Zero point.
                // Add random point inside current window to f.
                const offset1 = offset;
                const offset2 = offset + Math.abs(wbits) - 1; // -1 because we skip zero
                const cond1 = window % 2 !== 0;
                const cond2 = wbits < 0;
                if (wbits === 0) {
                    // The most important part for const-time getPublicKey
                    f = f.add(constTimeNegate(cond1, precomputes[offset1]));
                }
                else {
                    p = p.add(constTimeNegate(cond2, precomputes[offset2]));
                }
            }
            // JIT-compiler should not eliminate f here, since it will later be used in normalizeZ()
            // Even if the variable is still unused, there are some checks which will
            // throw an exception, so compiler needs to prove they won't happen, which is hard.
            // At this point there is a way to F be infinity-point even if p is not,
            // which makes it less const-time: around 1 bigint multiply.
            return { p, f };
        },
        wNAFCached(P, precomputesMap, n, transform) {
            // @ts-ignore
            const W = P._WINDOW_SIZE || 1;
            // Calculate precomputes on a first run, reuse them after
            let comp = precomputesMap.get(P);
            if (!comp) {
                comp = this.precomputeWindow(P, W);
                if (W !== 1) {
                    precomputesMap.set(P, transform(comp));
                }
            }
            return this.wNAF(W, comp, n);
        },
    };
}
function validateBasic(curve) {
    validateField(curve.Fp);
    validateObject(curve, {
        n: 'bigint',
        h: 'bigint',
        Gx: 'field',
        Gy: 'field',
    }, {
        nBitLength: 'isSafeInteger',
        nByteLength: 'isSafeInteger',
    });
    // Set defaults
    return Object.freeze({ ...nLength(curve.n, curve.nBitLength), ...curve });
}

/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function validatePointOpts(curve) {
    const opts = validateBasic(curve);
    validateObject(opts, {
        a: 'field',
        b: 'field',
        fromBytes: 'function',
        toBytes: 'function',
    }, {
        allowedPrivateKeyLengths: 'array',
        wrapPrivateKey: 'boolean',
        isTorsionFree: 'function',
        clearCofactor: 'function',
        allowInfinityPoint: 'boolean',
    });
    const { endo, Fp, a } = opts;
    if (endo) {
        if (!Fp.eql(a, Fp.ZERO)) {
            throw new Error('Endomorphism can only be defined for Koblitz curves that have a=0');
        }
        if (typeof endo !== 'object' ||
            typeof endo.beta !== 'bigint' ||
            typeof endo.splitScalar !== 'function') {
            throw new Error('Expected endomorphism with beta: bigint and splitScalar: function');
        }
    }
    return Object.freeze({ ...opts });
}
// ASN.1 DER encoding utilities
const { bytesToNumberBE: b2n, hexToBytes: h2b } = ut;
const DER = {
    // asn.1 DER encoding utils
    Err: class DERErr extends Error {
        constructor(m = '') {
            super(m);
        }
    },
    _parseInt(data) {
        const { Err: E } = DER;
        if (data.length < 2 || data[0] !== 0x02)
            throw new E('Invalid signature integer tag');
        const len = data[1];
        const res = data.subarray(2, len + 2);
        if (!len || res.length !== len)
            throw new E('Invalid signature integer: wrong length');
        if (res[0] === 0x00 && res[1] <= 0x7f)
            throw new E('Invalid signature integer: trailing length');
        // ^ Weird condition: not about length, but about first bytes of number.
        return { d: b2n(res), l: data.subarray(len + 2) }; // d is data, l is left
    },
    toSig(hex) {
        // parse DER signature
        const { Err: E } = DER;
        const data = typeof hex === 'string' ? h2b(hex) : hex;
        if (!(data instanceof Uint8Array))
            throw new Error('ui8a expected');
        let l = data.length;
        if (l < 2 || data[0] != 0x30)
            throw new E('Invalid signature tag');
        if (data[1] !== l - 2)
            throw new E('Invalid signature: incorrect length');
        const { d: r, l: sBytes } = DER._parseInt(data.subarray(2));
        const { d: s, l: rBytesLeft } = DER._parseInt(sBytes);
        if (rBytesLeft.length)
            throw new E('Invalid signature: left bytes after parsing');
        return { r, s };
    },
    hexFromSig(sig) {
        const slice = (s) => (Number.parseInt(s[0], 16) >= 8 ? '00' + s : s); // slice DER
        const h = (num) => {
            const hex = num.toString(16);
            return hex.length & 1 ? `0${hex}` : hex;
        };
        const s = slice(h(sig.s));
        const r = slice(h(sig.r));
        const shl = s.length / 2;
        const rhl = r.length / 2;
        const sl = h(shl);
        const rl = h(rhl);
        return `30${h(rhl + shl + 4)}02${rl}${r}02${sl}${s}`;
    },
};
// Be friendly to bad ECMAScript parsers by not using bigint literals like 123n
const _0n$1 = BigInt(0);
const _1n$1 = BigInt(1);
function weierstrassPoints(opts) {
    const CURVE = validatePointOpts(opts);
    const { Fp } = CURVE; // All curves has same field / group length as for now, but they can differ
    /**
     * y² = x³ + ax + b: Short weierstrass curve formula
     * @returns y²
     */
    function weierstrassEquation(x) {
        const { a, b } = CURVE;
        const x2 = Fp.sqr(x); // x * x
        const x3 = Fp.mul(x2, x); // x2 * x
        return Fp.add(Fp.add(x3, Fp.mul(x, a)), b); // x3 + a * x + b
    }
    // Valid group elements reside in range 1..n-1
    function isWithinCurveOrder(num) {
        return typeof num === 'bigint' && _0n$1 < num && num < CURVE.n;
    }
    function assertGE(num) {
        if (!isWithinCurveOrder(num))
            throw new Error('Expected valid bigint: 0 < bigint < curve.n');
    }
    // Validates if priv key is valid and converts it to bigint.
    // Supports options allowedPrivateKeyLengths and wrapPrivateKey.
    function normPrivateKeyToScalar(key) {
        const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n } = CURVE;
        if (lengths && typeof key !== 'bigint') {
            if (key instanceof Uint8Array)
                key = bytesToHex(key);
            // Normalize to hex string, pad. E.g. P521 would norm 130-132 char hex to 132-char bytes
            if (typeof key !== 'string' || !lengths.includes(key.length))
                throw new Error('Invalid key');
            key = key.padStart(nByteLength * 2, '0');
        }
        let num;
        try {
            num =
                typeof key === 'bigint'
                    ? key
                    : bytesToNumberBE(ensureBytes('private key', key, nByteLength));
        }
        catch (error) {
            throw new Error(`private key must be ${nByteLength} bytes, hex or bigint, not ${typeof key}`);
        }
        if (wrapPrivateKey)
            num = mod(num, n); // disabled by default, enabled for BLS
        assertGE(num); // num in range [1..N-1]
        return num;
    }
    const pointPrecomputes = new Map();
    function assertPrjPoint(other) {
        if (!(other instanceof Point))
            throw new Error('ProjectivePoint expected');
    }
    /**
     * Projective Point works in 3d / projective (homogeneous) coordinates: (x, y, z) ∋ (x=x/z, y=y/z)
     * Default Point works in 2d / affine coordinates: (x, y)
     * We're doing calculations in projective, because its operations don't require costly inversion.
     */
    class Point {
        constructor(px, py, pz) {
            this.px = px;
            this.py = py;
            this.pz = pz;
            if (px == null || !Fp.isValid(px))
                throw new Error('x required');
            if (py == null || !Fp.isValid(py))
                throw new Error('y required');
            if (pz == null || !Fp.isValid(pz))
                throw new Error('z required');
        }
        // Does not validate if the point is on-curve.
        // Use fromHex instead, or call assertValidity() later.
        static fromAffine(p) {
            const { x, y } = p || {};
            if (!p || !Fp.isValid(x) || !Fp.isValid(y))
                throw new Error('invalid affine point');
            if (p instanceof Point)
                throw new Error('projective point not allowed');
            const is0 = (i) => Fp.eql(i, Fp.ZERO);
            // fromAffine(x:0, y:0) would produce (x:0, y:0, z:1), but we need (x:0, y:1, z:0)
            if (is0(x) && is0(y))
                return Point.ZERO;
            return new Point(x, y, Fp.ONE);
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
            const toInv = Fp.invertBatch(points.map((p) => p.pz));
            return points.map((p, i) => p.toAffine(toInv[i])).map(Point.fromAffine);
        }
        /**
         * Converts hash string or Uint8Array to Point.
         * @param hex short/long ECDSA hex
         */
        static fromHex(hex) {
            const P = Point.fromAffine(CURVE.fromBytes(ensureBytes('pointHex', hex)));
            P.assertValidity();
            return P;
        }
        // Multiplies generator point by privateKey.
        static fromPrivateKey(privateKey) {
            return Point.BASE.multiply(normPrivateKeyToScalar(privateKey));
        }
        // "Private method", don't use it directly
        _setWindowSize(windowSize) {
            this._WINDOW_SIZE = windowSize;
            pointPrecomputes.delete(this);
        }
        // A point on curve is valid if it conforms to equation.
        assertValidity() {
            // Zero is valid point too!
            if (this.is0()) {
                if (CURVE.allowInfinityPoint)
                    return;
                throw new Error('bad point: ZERO');
            }
            // Some 3rd-party test vectors require different wording between here & `fromCompressedHex`
            const { x, y } = this.toAffine();
            // Check if x, y are valid field elements
            if (!Fp.isValid(x) || !Fp.isValid(y))
                throw new Error('bad point: x or y not FE');
            const left = Fp.sqr(y); // y²
            const right = weierstrassEquation(x); // x³ + ax + b
            if (!Fp.eql(left, right))
                throw new Error('bad point: equation left != right');
            if (!this.isTorsionFree())
                throw new Error('bad point: not in prime-order subgroup');
        }
        hasEvenY() {
            const { y } = this.toAffine();
            if (Fp.isOdd)
                return !Fp.isOdd(y);
            throw new Error("Field doesn't support isOdd");
        }
        /**
         * Compare one point to another.
         */
        equals(other) {
            assertPrjPoint(other);
            const { px: X1, py: Y1, pz: Z1 } = this;
            const { px: X2, py: Y2, pz: Z2 } = other;
            const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
            const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
            return U1 && U2;
        }
        /**
         * Flips point to one corresponding to (x, -y) in Affine coordinates.
         */
        negate() {
            return new Point(this.px, Fp.neg(this.py), this.pz);
        }
        // Renes-Costello-Batina exception-free doubling formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 3
        // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
        double() {
            const { a, b } = CURVE;
            const b3 = Fp.mul(b, 3n);
            const { px: X1, py: Y1, pz: Z1 } = this;
            let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO; // prettier-ignore
            let t0 = Fp.mul(X1, X1); // step 1
            let t1 = Fp.mul(Y1, Y1);
            let t2 = Fp.mul(Z1, Z1);
            let t3 = Fp.mul(X1, Y1);
            t3 = Fp.add(t3, t3); // step 5
            Z3 = Fp.mul(X1, Z1);
            Z3 = Fp.add(Z3, Z3);
            X3 = Fp.mul(a, Z3);
            Y3 = Fp.mul(b3, t2);
            Y3 = Fp.add(X3, Y3); // step 10
            X3 = Fp.sub(t1, Y3);
            Y3 = Fp.add(t1, Y3);
            Y3 = Fp.mul(X3, Y3);
            X3 = Fp.mul(t3, X3);
            Z3 = Fp.mul(b3, Z3); // step 15
            t2 = Fp.mul(a, t2);
            t3 = Fp.sub(t0, t2);
            t3 = Fp.mul(a, t3);
            t3 = Fp.add(t3, Z3);
            Z3 = Fp.add(t0, t0); // step 20
            t0 = Fp.add(Z3, t0);
            t0 = Fp.add(t0, t2);
            t0 = Fp.mul(t0, t3);
            Y3 = Fp.add(Y3, t0);
            t2 = Fp.mul(Y1, Z1); // step 25
            t2 = Fp.add(t2, t2);
            t0 = Fp.mul(t2, t3);
            X3 = Fp.sub(X3, t0);
            Z3 = Fp.mul(t2, t1);
            Z3 = Fp.add(Z3, Z3); // step 30
            Z3 = Fp.add(Z3, Z3);
            return new Point(X3, Y3, Z3);
        }
        // Renes-Costello-Batina exception-free addition formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 1
        // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
        add(other) {
            assertPrjPoint(other);
            const { px: X1, py: Y1, pz: Z1 } = this;
            const { px: X2, py: Y2, pz: Z2 } = other;
            let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO; // prettier-ignore
            const a = CURVE.a;
            const b3 = Fp.mul(CURVE.b, 3n);
            let t0 = Fp.mul(X1, X2); // step 1
            let t1 = Fp.mul(Y1, Y2);
            let t2 = Fp.mul(Z1, Z2);
            let t3 = Fp.add(X1, Y1);
            let t4 = Fp.add(X2, Y2); // step 5
            t3 = Fp.mul(t3, t4);
            t4 = Fp.add(t0, t1);
            t3 = Fp.sub(t3, t4);
            t4 = Fp.add(X1, Z1);
            let t5 = Fp.add(X2, Z2); // step 10
            t4 = Fp.mul(t4, t5);
            t5 = Fp.add(t0, t2);
            t4 = Fp.sub(t4, t5);
            t5 = Fp.add(Y1, Z1);
            X3 = Fp.add(Y2, Z2); // step 15
            t5 = Fp.mul(t5, X3);
            X3 = Fp.add(t1, t2);
            t5 = Fp.sub(t5, X3);
            Z3 = Fp.mul(a, t4);
            X3 = Fp.mul(b3, t2); // step 20
            Z3 = Fp.add(X3, Z3);
            X3 = Fp.sub(t1, Z3);
            Z3 = Fp.add(t1, Z3);
            Y3 = Fp.mul(X3, Z3);
            t1 = Fp.add(t0, t0); // step 25
            t1 = Fp.add(t1, t0);
            t2 = Fp.mul(a, t2);
            t4 = Fp.mul(b3, t4);
            t1 = Fp.add(t1, t2);
            t2 = Fp.sub(t0, t2); // step 30
            t2 = Fp.mul(a, t2);
            t4 = Fp.add(t4, t2);
            t0 = Fp.mul(t1, t4);
            Y3 = Fp.add(Y3, t0);
            t0 = Fp.mul(t5, t4); // step 35
            X3 = Fp.mul(t3, X3);
            X3 = Fp.sub(X3, t0);
            t0 = Fp.mul(t3, t1);
            Z3 = Fp.mul(t5, Z3);
            Z3 = Fp.add(Z3, t0); // step 40
            return new Point(X3, Y3, Z3);
        }
        subtract(other) {
            return this.add(other.negate());
        }
        is0() {
            return this.equals(Point.ZERO);
        }
        wNAF(n) {
            return wnaf.wNAFCached(this, pointPrecomputes, n, (comp) => {
                const toInv = Fp.invertBatch(comp.map((p) => p.pz));
                return comp.map((p, i) => p.toAffine(toInv[i])).map(Point.fromAffine);
            });
        }
        /**
         * Non-constant-time multiplication. Uses double-and-add algorithm.
         * It's faster, but should only be used when you don't care about
         * an exposed private key e.g. sig verification, which works over *public* keys.
         */
        multiplyUnsafe(n) {
            const I = Point.ZERO;
            if (n === _0n$1)
                return I;
            assertGE(n); // Will throw on 0
            if (n === _1n$1)
                return this;
            const { endo } = CURVE;
            if (!endo)
                return wnaf.unsafeLadder(this, n);
            // Apply endomorphism
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
            k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
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
            let point, fake; // Fake point is used to const-time mult
            const { endo } = CURVE;
            if (endo) {
                const { k1neg, k1, k2neg, k2 } = endo.splitScalar(n);
                let { p: k1p, f: f1p } = this.wNAF(k1);
                let { p: k2p, f: f2p } = this.wNAF(k2);
                k1p = wnaf.constTimeNegate(k1neg, k1p);
                k2p = wnaf.constTimeNegate(k2neg, k2p);
                k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
                point = k1p.add(k2p);
                fake = f1p.add(f2p);
            }
            else {
                const { p, f } = this.wNAF(n);
                point = p;
                fake = f;
            }
            // Normalize `z` for both points, but return only real one
            return Point.normalizeZ([point, fake])[0];
        }
        /**
         * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
         * Not using Strauss-Shamir trick: precomputation tables are faster.
         * The trick could be useful if both P and Q are not G (not in our case).
         * @returns non-zero affine point
         */
        multiplyAndAddUnsafe(Q, a, b) {
            const G = Point.BASE; // No Strauss-Shamir trick: we have 10% faster G precomputes
            const mul = (P, a // Select faster multiply() method
            ) => (a === _0n$1 || a === _1n$1 || !P.equals(G) ? P.multiplyUnsafe(a) : P.multiply(a));
            const sum = mul(this, a).add(mul(Q, b));
            return sum.is0() ? undefined : sum;
        }
        // Converts Projective point to affine (x, y) coordinates.
        // Can accept precomputed Z^-1 - for example, from invertBatch.
        // (x, y, z) ∋ (x=x/z, y=y/z)
        toAffine(iz) {
            const { px: x, py: y, pz: z } = this;
            const is0 = this.is0();
            // If invZ was 0, we return zero point. However we still want to execute
            // all operations, so we replace invZ with a random number, 1.
            if (iz == null)
                iz = is0 ? Fp.ONE : Fp.inv(z);
            const ax = Fp.mul(x, iz);
            const ay = Fp.mul(y, iz);
            const zz = Fp.mul(z, iz);
            if (is0)
                return { x: Fp.ZERO, y: Fp.ZERO };
            if (!Fp.eql(zz, Fp.ONE))
                throw new Error('invZ was invalid');
            return { x: ax, y: ay };
        }
        isTorsionFree() {
            const { h: cofactor, isTorsionFree } = CURVE;
            if (cofactor === _1n$1)
                return true; // No subgroups, always torsion-free
            if (isTorsionFree)
                return isTorsionFree(Point, this);
            throw new Error('isTorsionFree() has not been declared for the elliptic curve');
        }
        clearCofactor() {
            const { h: cofactor, clearCofactor } = CURVE;
            if (cofactor === _1n$1)
                return this; // Fast-path
            if (clearCofactor)
                return clearCofactor(Point, this);
            return this.multiplyUnsafe(CURVE.h);
        }
        toRawBytes(isCompressed = true) {
            this.assertValidity();
            return CURVE.toBytes(Point, this, isCompressed);
        }
        toHex(isCompressed = true) {
            return bytesToHex(this.toRawBytes(isCompressed));
        }
    }
    Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
    Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO);
    const _bits = CURVE.nBitLength;
    const wnaf = wNAF(Point, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
    return {
        ProjectivePoint: Point,
        normPrivateKeyToScalar,
        weierstrassEquation,
        isWithinCurveOrder,
    };
}
function validateOpts$1(curve) {
    const opts = validateBasic(curve);
    validateObject(opts, {
        hash: 'hash',
        hmac: 'function',
        randomBytes: 'function',
    }, {
        bits2int: 'function',
        bits2int_modN: 'function',
        lowS: 'boolean',
    });
    return Object.freeze({ lowS: true, ...opts });
}
function weierstrass(curveDef) {
    const CURVE = validateOpts$1(curveDef);
    const CURVE_ORDER = CURVE.n;
    const Fp = CURVE.Fp;
    const compressedLen = Fp.BYTES + 1; // e.g. 33 for 32
    const uncompressedLen = 2 * Fp.BYTES + 1; // e.g. 65 for 32
    function isValidFieldElement(num) {
        return _0n$1 < num && num < Fp.ORDER; // 0 is banned since it's not invertible FE
    }
    function modN(a) {
        return mod(a, CURVE_ORDER);
    }
    function invN(a) {
        return invert(a, CURVE_ORDER);
    }
    const { ProjectivePoint: Point, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder, } = weierstrassPoints({
        ...CURVE,
        toBytes(c, point, isCompressed) {
            const a = point.toAffine();
            const x = Fp.toBytes(a.x);
            const cat = concatBytes$1;
            if (isCompressed) {
                return cat(Uint8Array.from([point.hasEvenY() ? 0x02 : 0x03]), x);
            }
            else {
                return cat(Uint8Array.from([0x04]), x, Fp.toBytes(a.y));
            }
        },
        fromBytes(bytes) {
            const len = bytes.length;
            const head = bytes[0];
            const tail = bytes.subarray(1);
            // this.assertValidity() is done inside of fromHex
            if (len === compressedLen && (head === 0x02 || head === 0x03)) {
                const x = bytesToNumberBE(tail);
                if (!isValidFieldElement(x))
                    throw new Error('Point is not on curve');
                const y2 = weierstrassEquation(x); // y² = x³ + ax + b
                let y = Fp.sqrt(y2); // y = y² ^ (p+1)/4
                const isYOdd = (y & _1n$1) === _1n$1;
                // ECDSA
                const isHeadOdd = (head & 1) === 1;
                if (isHeadOdd !== isYOdd)
                    y = Fp.neg(y);
                return { x, y };
            }
            else if (len === uncompressedLen && head === 0x04) {
                const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
                const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
                return { x, y };
            }
            else {
                throw new Error(`Point of length ${len} was invalid. Expected ${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes`);
            }
        },
    });
    const numToNByteStr = (num) => bytesToHex(numberToBytesBE(num, CURVE.nByteLength));
    function isBiggerThanHalfOrder(number) {
        const HALF = CURVE_ORDER >> _1n$1;
        return number > HALF;
    }
    function normalizeS(s) {
        return isBiggerThanHalfOrder(s) ? modN(-s) : s;
    }
    // slice bytes num
    const slcNum = (b, from, to) => bytesToNumberBE(b.slice(from, to));
    /**
     * ECDSA signature with its (r, s) properties. Supports DER & compact representations.
     */
    class Signature {
        constructor(r, s, recovery) {
            this.r = r;
            this.s = s;
            this.recovery = recovery;
            this.assertValidity();
        }
        // pair (bytes of r, bytes of s)
        static fromCompact(hex) {
            const l = CURVE.nByteLength;
            hex = ensureBytes('compactSignature', hex, l * 2);
            return new Signature(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
        }
        // DER encoded ECDSA signature
        // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
        static fromDER(hex) {
            const { r, s } = DER.toSig(ensureBytes('DER', hex));
            return new Signature(r, s);
        }
        assertValidity() {
            // can use assertGE here
            if (!isWithinCurveOrder(this.r))
                throw new Error('r must be 0 < r < CURVE.n');
            if (!isWithinCurveOrder(this.s))
                throw new Error('s must be 0 < s < CURVE.n');
        }
        addRecoveryBit(recovery) {
            return new Signature(this.r, this.s, recovery);
        }
        recoverPublicKey(msgHash) {
            const { r, s, recovery: rec } = this;
            const h = bits2int_modN(ensureBytes('msgHash', msgHash)); // Truncate hash
            if (rec == null || ![0, 1, 2, 3].includes(rec))
                throw new Error('recovery id invalid');
            const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
            if (radj >= Fp.ORDER)
                throw new Error('recovery id 2 or 3 invalid');
            const prefix = (rec & 1) === 0 ? '02' : '03';
            const R = Point.fromHex(prefix + numToNByteStr(radj));
            const ir = invN(radj); // r^-1
            const u1 = modN(-h * ir); // -hr^-1
            const u2 = modN(s * ir); // sr^-1
            const Q = Point.BASE.multiplyAndAddUnsafe(R, u1, u2); // (sr^-1)R-(hr^-1)G = -(hr^-1)G + (sr^-1)
            if (!Q)
                throw new Error('point at infinify'); // unsafe is fine: no priv data leaked
            Q.assertValidity();
            return Q;
        }
        // Signatures should be low-s, to prevent malleability.
        hasHighS() {
            return isBiggerThanHalfOrder(this.s);
        }
        normalizeS() {
            return this.hasHighS() ? new Signature(this.r, modN(-this.s), this.recovery) : this;
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
    const utils = {
        isValidPrivateKey(privateKey) {
            try {
                normPrivateKeyToScalar(privateKey);
                return true;
            }
            catch (error) {
                return false;
            }
        },
        normPrivateKeyToScalar: normPrivateKeyToScalar,
        /**
         * Produces cryptographically secure private key from random of size (nBitLength+64)
         * as per FIPS 186 B.4.1 with modulo bias being neglible.
         */
        randomPrivateKey: () => {
            const rand = CURVE.randomBytes(Fp.BYTES + 8);
            const num = hashToPrivateScalar(rand, CURVE_ORDER);
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
        precompute(windowSize = 8, point = Point.BASE) {
            point._setWindowSize(windowSize);
            point.multiply(BigInt(3)); // 3 is arbitrary, just need any number here
            return point;
        },
    };
    /**
     * Computes public key for a private key. Checks for validity of the private key.
     * @param privateKey private key
     * @param isCompressed whether to return compact (default), or full key
     * @returns Public key, full when isCompressed=false; short when isCompressed=true
     */
    function getPublicKey(privateKey, isCompressed = true) {
        return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
    }
    /**
     * Quick and dirty check for item being public key. Does not validate hex, or being on-curve.
     */
    function isProbPub(item) {
        const arr = item instanceof Uint8Array;
        const str = typeof item === 'string';
        const len = (arr || str) && item.length;
        if (arr)
            return len === compressedLen || len === uncompressedLen;
        if (str)
            return len === 2 * compressedLen || len === 2 * uncompressedLen;
        if (item instanceof Point)
            return true;
        return false;
    }
    /**
     * ECDH (Elliptic Curve Diffie Hellman).
     * Computes shared public key from private key and public key.
     * Checks: 1) private key validity 2) shared key is on-curve.
     * Does NOT hash the result.
     * @param privateA private key
     * @param publicB different public key
     * @param isCompressed whether to return compact (default), or full key
     * @returns shared public key
     */
    function getSharedSecret(privateA, publicB, isCompressed = true) {
        if (isProbPub(privateA))
            throw new Error('first arg must be private key');
        if (!isProbPub(publicB))
            throw new Error('second arg must be public key');
        const b = Point.fromHex(publicB); // check for being on-curve
        return b.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
    }
    // RFC6979: ensure ECDSA msg is X bytes and < N. RFC suggests optional truncating via bits2octets.
    // FIPS 186-4 4.6 suggests the leftmost min(nBitLen, outLen) bits, which matches bits2int.
    // bits2int can produce res>N, we can do mod(res, N) since the bitLen is the same.
    // int2octets can't be used; pads small msgs with 0: unacceptatble for trunc as per RFC vectors
    const bits2int = CURVE.bits2int ||
        function (bytes) {
            // For curves with nBitLength % 8 !== 0: bits2octets(bits2octets(m)) !== bits2octets(m)
            // for some cases, since bytes.length * 8 is not actual bitLength.
            const num = bytesToNumberBE(bytes); // check for == u8 done here
            const delta = bytes.length * 8 - CURVE.nBitLength; // truncate to nBitLength leftmost bits
            return delta > 0 ? num >> BigInt(delta) : num;
        };
    const bits2int_modN = CURVE.bits2int_modN ||
        function (bytes) {
            return modN(bits2int(bytes)); // can't use bytesToNumberBE here
        };
    // NOTE: pads output with zero as per spec
    const ORDER_MASK = bitMask(CURVE.nBitLength);
    /**
     * Converts to bytes. Checks if num in `[0..ORDER_MASK-1]` e.g.: `[0..2^256-1]`.
     */
    function int2octets(num) {
        if (typeof num !== 'bigint')
            throw new Error('bigint expected');
        if (!(_0n$1 <= num && num < ORDER_MASK))
            throw new Error(`bigint expected < 2^${CURVE.nBitLength}`);
        // works with order, can have different size than numToField!
        return numberToBytesBE(num, CURVE.nByteLength);
    }
    // Steps A, D of RFC6979 3.2
    // Creates RFC6979 seed; converts msg/privKey to numbers.
    // Used only in sign, not in verify.
    // NOTE: we cannot assume here that msgHash has same amount of bytes as curve order, this will be wrong at least for P521.
    // Also it can be bigger for P224 + SHA256
    function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
        if (['recovered', 'canonical'].some((k) => k in opts))
            throw new Error('sign() legacy options not supported');
        const { hash, randomBytes } = CURVE;
        let { lowS, prehash, extraEntropy: ent } = opts; // generates low-s sigs by default
        if (lowS == null)
            lowS = true; // RFC6979 3.2: we skip step A, because we already provide hash
        msgHash = ensureBytes('msgHash', msgHash);
        if (prehash)
            msgHash = ensureBytes('prehashed msgHash', hash(msgHash));
        // We can't later call bits2octets, since nested bits2int is broken for curves
        // with nBitLength % 8 !== 0. Because of that, we unwrap it here as int2octets call.
        // const bits2octets = (bits) => int2octets(bits2int_modN(bits))
        const h1int = bits2int_modN(msgHash);
        const d = normPrivateKeyToScalar(privateKey); // validate private key, convert to bigint
        const seedArgs = [int2octets(d), int2octets(h1int)];
        // extraEntropy. RFC6979 3.6: additional k' (optional).
        if (ent != null) {
            // K = HMAC_K(V || 0x00 || int2octets(x) || bits2octets(h1) || k')
            const e = ent === true ? randomBytes(Fp.BYTES) : ent; // generate random bytes OR pass as-is
            seedArgs.push(ensureBytes('extraEntropy', e, Fp.BYTES)); // check for being of size BYTES
        }
        const seed = concatBytes$1(...seedArgs); // Step D of RFC6979 3.2
        const m = h1int; // NOTE: no need to call bits2int second time here, it is inside truncateHash!
        // Converts signature params into point w r/s, checks result for validity.
        function k2sig(kBytes) {
            // RFC 6979 Section 3.2, step 3: k = bits2int(T)
            const k = bits2int(kBytes); // Cannot use fields methods, since it is group element
            if (!isWithinCurveOrder(k))
                return; // Important: all mod() calls here must be done over N
            const ik = invN(k); // k^-1 mod n
            const q = Point.BASE.multiply(k).toAffine(); // q = Gk
            const r = modN(q.x); // r = q.x mod n
            if (r === _0n$1)
                return;
            // X blinding according to https://tches.iacr.org/index.php/TCHES/article/view/7337/6509
            // b * m + b * r * d ∈ [0,q−1] exposed via side-channel, but d (private scalar) is not.
            // NOTE: there is still probable some leak in multiplication, since it is not constant-time
            const b = bytesToNumberBE(utils.randomPrivateKey()); // random scalar, b ∈ [1,q−1]
            const bi = invN(b); // b^-1
            const bdr = modN(b * d * r); // b * d * r
            const bm = modN(b * m); // b * m
            const mrx = modN(bi * modN(bdr + bm)); // b^-1(bm + bdr) -> m + rd
            const s = modN(ik * mrx); // s = k^-1(m + rd) mod n
            if (s === _0n$1)
                return;
            let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n$1); // recovery bit (2 or 3, when q.x > n)
            let normS = s;
            if (lowS && isBiggerThanHalfOrder(s)) {
                normS = normalizeS(s); // if lowS was passed, ensure s is always
                recovery ^= 1; // // in the bottom half of N
            }
            return new Signature(r, normS, recovery); // use normS, not s
        }
        return { seed, k2sig };
    }
    const defaultSigOpts = { lowS: CURVE.lowS, prehash: false };
    const defaultVerOpts = { lowS: CURVE.lowS, prehash: false };
    /**
     * Signs message hash (not message: you need to hash it by yourself).
     * ```
     * sign(m, d, k) where
     *   (x, y) = G × k
     *   r = x mod n
     *   s = (m + dr)/k mod n
     * ```
     * @param opts `lowS, extraEntropy, prehash`
     */
    function sign(msgHash, privKey, opts = defaultSigOpts) {
        const { seed, k2sig } = prepSig(msgHash, privKey, opts); // Steps A, D of RFC6979 3.2.
        const drbg = createHmacDrbg(CURVE.hash.outputLen, CURVE.nByteLength, CURVE.hmac);
        return drbg(seed, k2sig); // Steps B, C, D, E, F, G
    }
    // Enable precomputes. Slows down first publicKey computation by 20ms.
    Point.BASE._setWindowSize(8);
    // utils.precompute(8, ProjectivePoint.BASE)
    /**
     * Verifies a signature against message hash and public key.
     * Rejects lowS signatures by default: to override,
     * specify option `{lowS: false}`. Implements section 4.1.4 from https://www.secg.org/sec1-v2.pdf:
     *
     * ```
     * verify(r, s, h, P) where
     *   U1 = hs^-1 mod n
     *   U2 = rs^-1 mod n
     *   R = U1⋅G - U2⋅P
     *   mod(R.x, n) == r
     * ```
     */
    function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
        const sg = signature;
        msgHash = ensureBytes('msgHash', msgHash);
        publicKey = ensureBytes('publicKey', publicKey);
        if ('strict' in opts)
            throw new Error('options.strict was renamed to lowS');
        const { lowS, prehash } = opts;
        let _sig = undefined;
        let P;
        try {
            if (typeof sg === 'string' || sg instanceof Uint8Array) {
                // Signature can be represented in 2 ways: compact (2*nByteLength) & DER (variable-length).
                // Since DER can also be 2*nByteLength bytes, we check for it first.
                try {
                    _sig = Signature.fromDER(sg);
                }
                catch (derError) {
                    if (!(derError instanceof DER.Err))
                        throw derError;
                    _sig = Signature.fromCompact(sg);
                }
            }
            else if (typeof sg === 'object' && typeof sg.r === 'bigint' && typeof sg.s === 'bigint') {
                const { r, s } = sg;
                _sig = new Signature(r, s);
            }
            else {
                throw new Error('PARSE');
            }
            P = Point.fromHex(publicKey);
        }
        catch (error) {
            if (error.message === 'PARSE')
                throw new Error(`signature must be Signature instance, Uint8Array or hex string`);
            return false;
        }
        if (lowS && _sig.hasHighS())
            return false;
        if (prehash)
            msgHash = CURVE.hash(msgHash);
        const { r, s } = _sig;
        const h = bits2int_modN(msgHash); // Cannot use fields methods, since it is group element
        const is = invN(s); // s^-1
        const u1 = modN(h * is); // u1 = hs^-1 mod n
        const u2 = modN(r * is); // u2 = rs^-1 mod n
        const R = Point.BASE.multiplyAndAddUnsafe(P, u1, u2)?.toAffine(); // R = u1⋅G + u2⋅P
        if (!R)
            return false;
        const v = modN(R.x);
        return v === r;
    }
    return {
        CURVE,
        getPublicKey,
        getSharedSecret,
        sign,
        verify,
        ProjectivePoint: Point,
        Signature,
        utils,
    };
}
// Implementation of the Shallue and van de Woestijne method for any Weierstrass curve
// TODO: check if there is a way to merge this with uvRatio in Edwards && move to modular?
// b = True and y = sqrt(u / v) if (u / v) is square in F, and
// b = False and y = sqrt(Z * (u / v)) otherwise.
function SWUFpSqrtRatio(Fp, Z) {
    // Generic implementation
    const q = Fp.ORDER;
    let l = 0n;
    for (let o = q - 1n; o % 2n === 0n; o /= 2n)
        l += 1n;
    const c1 = l; // 1. c1, the largest integer such that 2^c1 divides q - 1.
    const c2 = (q - 1n) / 2n ** c1; // 2. c2 = (q - 1) / (2^c1)        # Integer arithmetic
    const c3 = (c2 - 1n) / 2n; // 3. c3 = (c2 - 1) / 2            # Integer arithmetic
    const c4 = 2n ** c1 - 1n; // 4. c4 = 2^c1 - 1                # Integer arithmetic
    const c5 = 2n ** (c1 - 1n); // 5. c5 = 2^(c1 - 1)              # Integer arithmetic
    const c6 = Fp.pow(Z, c2); // 6. c6 = Z^c2
    const c7 = Fp.pow(Z, (c2 + 1n) / 2n); // 7. c7 = Z^((c2 + 1) / 2)
    let sqrtRatio = (u, v) => {
        let tv1 = c6; // 1. tv1 = c6
        let tv2 = Fp.pow(v, c4); // 2. tv2 = v^c4
        let tv3 = Fp.sqr(tv2); // 3. tv3 = tv2^2
        tv3 = Fp.mul(tv3, v); // 4. tv3 = tv3 * v
        let tv5 = Fp.mul(u, tv3); // 5. tv5 = u * tv3
        tv5 = Fp.pow(tv5, c3); // 6. tv5 = tv5^c3
        tv5 = Fp.mul(tv5, tv2); // 7. tv5 = tv5 * tv2
        tv2 = Fp.mul(tv5, v); // 8. tv2 = tv5 * v
        tv3 = Fp.mul(tv5, u); // 9. tv3 = tv5 * u
        let tv4 = Fp.mul(tv3, tv2); // 10. tv4 = tv3 * tv2
        tv5 = Fp.pow(tv4, c5); // 11. tv5 = tv4^c5
        let isQR = Fp.eql(tv5, Fp.ONE); // 12. isQR = tv5 == 1
        tv2 = Fp.mul(tv3, c7); // 13. tv2 = tv3 * c7
        tv5 = Fp.mul(tv4, tv1); // 14. tv5 = tv4 * tv1
        tv3 = Fp.cmov(tv2, tv3, isQR); // 15. tv3 = CMOV(tv2, tv3, isQR)
        tv4 = Fp.cmov(tv5, tv4, isQR); // 16. tv4 = CMOV(tv5, tv4, isQR)
        // 17. for i in (c1, c1 - 1, ..., 2):
        for (let i = c1; i > 1; i--) {
            let tv5 = 2n ** (i - 2n); // 18.    tv5 = i - 2;    19.    tv5 = 2^tv5
            let tvv5 = Fp.pow(tv4, tv5); // 20.    tv5 = tv4^tv5
            const e1 = Fp.eql(tvv5, Fp.ONE); // 21.    e1 = tv5 == 1
            tv2 = Fp.mul(tv3, tv1); // 22.    tv2 = tv3 * tv1
            tv1 = Fp.mul(tv1, tv1); // 23.    tv1 = tv1 * tv1
            tvv5 = Fp.mul(tv4, tv1); // 24.    tv5 = tv4 * tv1
            tv3 = Fp.cmov(tv2, tv3, e1); // 25.    tv3 = CMOV(tv2, tv3, e1)
            tv4 = Fp.cmov(tvv5, tv4, e1); // 26.    tv4 = CMOV(tv5, tv4, e1)
        }
        return { isValid: isQR, value: tv3 };
    };
    if (Fp.ORDER % 4n === 3n) {
        // sqrt_ratio_3mod4(u, v)
        const c1 = (Fp.ORDER - 3n) / 4n; // 1. c1 = (q - 3) / 4     # Integer arithmetic
        const c2 = Fp.sqrt(Fp.neg(Z)); // 2. c2 = sqrt(-Z)
        sqrtRatio = (u, v) => {
            let tv1 = Fp.sqr(v); // 1. tv1 = v^2
            const tv2 = Fp.mul(u, v); // 2. tv2 = u * v
            tv1 = Fp.mul(tv1, tv2); // 3. tv1 = tv1 * tv2
            let y1 = Fp.pow(tv1, c1); // 4. y1 = tv1^c1
            y1 = Fp.mul(y1, tv2); // 5. y1 = y1 * tv2
            const y2 = Fp.mul(y1, c2); // 6. y2 = y1 * c2
            const tv3 = Fp.mul(Fp.sqr(y1), v); // 7. tv3 = y1^2; 8. tv3 = tv3 * v
            const isQR = Fp.eql(tv3, u); // 9. isQR = tv3 == u
            let y = Fp.cmov(y2, y1, isQR); // 10. y = CMOV(y2, y1, isQR)
            return { isValid: isQR, value: y }; // 11. return (isQR, y) isQR ? y : y*c2
        };
    }
    // No curves uses that
    // if (Fp.ORDER % 8n === 5n) // sqrt_ratio_5mod8
    return sqrtRatio;
}
// From draft-irtf-cfrg-hash-to-curve-16
function mapToCurveSimpleSWU(Fp, opts) {
    validateField(Fp);
    if (!Fp.isValid(opts.A) || !Fp.isValid(opts.B) || !Fp.isValid(opts.Z))
        throw new Error('mapToCurveSimpleSWU: invalid opts');
    const sqrtRatio = SWUFpSqrtRatio(Fp, opts.Z);
    if (!Fp.isOdd)
        throw new Error('Fp.isOdd is not implemented!');
    // Input: u, an element of F.
    // Output: (x, y), a point on E.
    return (u) => {
        // prettier-ignore
        let tv1, tv2, tv3, tv4, tv5, tv6, x, y;
        tv1 = Fp.sqr(u); // 1.  tv1 = u^2
        tv1 = Fp.mul(tv1, opts.Z); // 2.  tv1 = Z * tv1
        tv2 = Fp.sqr(tv1); // 3.  tv2 = tv1^2
        tv2 = Fp.add(tv2, tv1); // 4.  tv2 = tv2 + tv1
        tv3 = Fp.add(tv2, Fp.ONE); // 5.  tv3 = tv2 + 1
        tv3 = Fp.mul(tv3, opts.B); // 6.  tv3 = B * tv3
        tv4 = Fp.cmov(opts.Z, Fp.neg(tv2), !Fp.eql(tv2, Fp.ZERO)); // 7.  tv4 = CMOV(Z, -tv2, tv2 != 0)
        tv4 = Fp.mul(tv4, opts.A); // 8.  tv4 = A * tv4
        tv2 = Fp.sqr(tv3); // 9.  tv2 = tv3^2
        tv6 = Fp.sqr(tv4); // 10. tv6 = tv4^2
        tv5 = Fp.mul(tv6, opts.A); // 11. tv5 = A * tv6
        tv2 = Fp.add(tv2, tv5); // 12. tv2 = tv2 + tv5
        tv2 = Fp.mul(tv2, tv3); // 13. tv2 = tv2 * tv3
        tv6 = Fp.mul(tv6, tv4); // 14. tv6 = tv6 * tv4
        tv5 = Fp.mul(tv6, opts.B); // 15. tv5 = B * tv6
        tv2 = Fp.add(tv2, tv5); // 16. tv2 = tv2 + tv5
        x = Fp.mul(tv1, tv3); // 17.   x = tv1 * tv3
        const { isValid, value } = sqrtRatio(tv2, tv6); // 18. (is_gx1_square, y1) = sqrt_ratio(tv2, tv6)
        y = Fp.mul(tv1, u); // 19.   y = tv1 * u  -> Z * u^3 * y1
        y = Fp.mul(y, value); // 20.   y = y * y1
        x = Fp.cmov(x, tv3, isValid); // 21.   x = CMOV(x, tv3, is_gx1_square)
        y = Fp.cmov(y, value, isValid); // 22.   y = CMOV(y, y1, is_gx1_square)
        const e1 = Fp.isOdd(u) === Fp.isOdd(y); // 23.  e1 = sgn0(u) == sgn0(y)
        y = Fp.cmov(Fp.neg(y), y, e1); // 24.   y = CMOV(-y, y, e1)
        x = Fp.div(x, tv4); // 25.   x = x / tv4
        return { x, y };
    };
}

function validateDST(dst) {
    if (dst instanceof Uint8Array)
        return dst;
    if (typeof dst === 'string')
        return utf8ToBytes$1(dst);
    throw new Error('DST must be Uint8Array or string');
}
// Octet Stream to Integer. "spec" implementation of os2ip is 2.5x slower vs bytesToNumberBE.
const os2ip = bytesToNumberBE;
// Integer to Octet Stream (numberToBytesBE)
function i2osp(value, length) {
    if (value < 0 || value >= 1 << (8 * length)) {
        throw new Error(`bad I2OSP call: value=${value} length=${length}`);
    }
    const res = Array.from({ length }).fill(0);
    for (let i = length - 1; i >= 0; i--) {
        res[i] = value & 0xff;
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
        throw new Error('Uint8Array expected');
}
function isNum(item) {
    if (!Number.isSafeInteger(item))
        throw new Error('number expected');
}
// Produces a uniformly random byte string using a cryptographic hash function H that outputs b bits
// https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hash-to-curve-11#section-5.4.1
function expand_message_xmd(msg, DST, lenInBytes, H) {
    isBytes$2(msg);
    isBytes$2(DST);
    isNum(lenInBytes);
    // https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hash-to-curve-16#section-5.3.3
    if (DST.length > 255)
        DST = H(concatBytes$1(utf8ToBytes$1('H2C-OVERSIZE-DST-'), DST));
    const { outputLen: b_in_bytes, blockLen: r_in_bytes } = H;
    const ell = Math.ceil(lenInBytes / b_in_bytes);
    if (ell > 255)
        throw new Error('Invalid xmd length');
    const DST_prime = concatBytes$1(DST, i2osp(DST.length, 1));
    const Z_pad = i2osp(0, r_in_bytes);
    const l_i_b_str = i2osp(lenInBytes, 2); // len_in_bytes_str
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
    // https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hash-to-curve-16#section-5.3.3
    // DST = H('H2C-OVERSIZE-DST-' || a_very_long_DST, Math.ceil((lenInBytes * k) / 8));
    if (DST.length > 255) {
        const dkLen = Math.ceil((2 * k) / 8);
        DST = H.create({ dkLen }).update(utf8ToBytes$1('H2C-OVERSIZE-DST-')).update(DST).digest();
    }
    if (lenInBytes > 65535 || DST.length > 255)
        throw new Error('expand_message_xof: invalid lenInBytes');
    return (H.create({ dkLen: lenInBytes })
        .update(msg)
        .update(i2osp(lenInBytes, 2))
        // 2. DST_prime = DST || I2OSP(len(DST), 1)
        .update(DST)
        .update(i2osp(DST.length, 1))
        .digest());
}
/**
 * Hashes arbitrary-length byte strings to a list of one or more elements of a finite field F
 * https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hash-to-curve-11#section-5.3
 * @param msg a byte string containing the message to hash
 * @param count the number of elements of F to output
 * @param options `{DST: string, p: bigint, m: number, k: number, expand: 'xmd' | 'xof', hash: H}`, see above
 * @returns [u_0, ..., u_(count - 1)], a list of field elements.
 */
function hash_to_field(msg, count, options) {
    const { p, k, m, hash, expand, DST: _DST } = options;
    isBytes$2(msg);
    isNum(count);
    const DST = validateDST(_DST);
    const log2p = p.toString(2).length;
    const L = Math.ceil((log2p + k) / 8); // section 5.1 of ietf draft link above
    const len_in_bytes = count * m * L;
    let prb; // pseudo_random_bytes
    if (expand === 'xmd') {
        prb = expand_message_xmd(msg, DST, len_in_bytes, hash);
    }
    else if (expand === 'xof') {
        prb = expand_message_xof(msg, DST, len_in_bytes, k, hash);
    }
    else if (expand === undefined) {
        prb = msg;
    }
    else {
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
    // Make same order as in spec
    const COEFF = map.map((i) => Array.from(i).reverse());
    return (x, y) => {
        const [xNum, xDen, yNum, yDen] = COEFF.map((val) => val.reduce((acc, i) => field.add(field.mul(acc, x), i)));
        x = field.div(xNum, xDen); // xNum / xDen
        y = field.mul(y, field.div(yNum, yDen)); // y * (yNum / yDev)
        return { x, y };
    };
}
function createHasher(Point, mapToCurve, def) {
    validateObject(def, {
        DST: 'string',
        p: 'bigint',
        m: 'isSafeInteger',
        k: 'isSafeInteger',
        hash: 'hash',
    });
    if (typeof mapToCurve !== 'function')
        throw new Error('mapToCurve() must be defined');
    return {
        // Encodes byte string to elliptic curve
        // https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hash-to-curve-11#section-3
        hashToCurve(msg, options) {
            const u = hash_to_field(msg, 2, { ...def, DST: def.DST, ...options });
            const u0 = Point.fromAffine(mapToCurve(u[0]));
            const u1 = Point.fromAffine(mapToCurve(u[1]));
            const P = u0.add(u1).clearCofactor();
            P.assertValidity();
            return P;
        },
        // https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-hash-to-curve-16#section-3
        encodeToCurve(msg, options) {
            const u = hash_to_field(msg, 1, { ...def, DST: def.encodeDST, ...options });
            const P = Point.fromAffine(mapToCurve(u[0])).clearCofactor();
            P.assertValidity();
            return P;
        },
    };
}

// HMAC (RFC 2104)
class HMAC extends Hash$1 {
    constructor(hash, _key) {
        super();
        this.finished = false;
        this.destroyed = false;
        assert$1.hash(hash);
        const key = toBytes$1(_key);
        this.iHash = hash.create();
        if (typeof this.iHash.update !== 'function')
            throw new TypeError('Expected instance of class which extends utils.Hash');
        this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const blockLen = this.blockLen;
        const pad = new Uint8Array(blockLen);
        // blockLen can be bigger than outputLen
        pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
        for (let i = 0; i < pad.length; i++)
            pad[i] ^= 0x36;
        this.iHash.update(pad);
        // By doing update (processing of first block) of outer hash here we can re-use it between multiple calls via clone
        this.oHash = hash.create();
        // Undo internal XOR && apply outer XOR
        for (let i = 0; i < pad.length; i++)
            pad[i] ^= 0x36 ^ 0x5c;
        this.oHash.update(pad);
        pad.fill(0);
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
        // Create new instance without calling constructor since key already in state and we don't know it.
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
/**
 * HMAC: RFC2104 message authentication code.
 * @param hash - function that would be used e.g. sha256
 * @param key - message key
 * @param message - message data
 */
const hmac = (hash, key, message) => new HMAC(hash, key).update(message).digest();
hmac.create = (hash, key) => new HMAC(hash, key);

/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// connects noble-curves to noble-hashes
function getHash(hash) {
    return {
        hash,
        hmac: (key, ...msgs) => hmac(hash, key, concatBytes$2(...msgs)),
        randomBytes,
    };
}
function createCurve(curveDef, defHash) {
    const create = (hash) => weierstrass({ ...curveDef, ...getHash(hash) });
    return Object.freeze({ ...create(defHash), create });
}

/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const secp256k1P = BigInt('0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f');
const secp256k1N = BigInt('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141');
const _1n = BigInt(1);
const _2n = BigInt(2);
const divNearest = (a, b) => (a + b / _2n) / b;
/**
 * √n = n^((p+1)/4) for fields p = 3 mod 4. We unwrap the loop and multiply bit-by-bit.
 * (P+1n/4n).toString(2) would produce bits [223x 1, 0, 22x 1, 4x 0, 11, 00]
 */
function sqrtMod(y) {
    const P = secp256k1P;
    // prettier-ignore
    const _3n = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
    // prettier-ignore
    const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
    const b2 = (y * y * y) % P; // x^3, 11
    const b3 = (b2 * b2 * y) % P; // x^7
    const b6 = (pow2(b3, _3n, P) * b3) % P;
    const b9 = (pow2(b6, _3n, P) * b3) % P;
    const b11 = (pow2(b9, _2n, P) * b2) % P;
    const b22 = (pow2(b11, _11n, P) * b11) % P;
    const b44 = (pow2(b22, _22n, P) * b22) % P;
    const b88 = (pow2(b44, _44n, P) * b44) % P;
    const b176 = (pow2(b88, _88n, P) * b88) % P;
    const b220 = (pow2(b176, _44n, P) * b44) % P;
    const b223 = (pow2(b220, _3n, P) * b3) % P;
    const t1 = (pow2(b223, _23n, P) * b22) % P;
    const t2 = (pow2(t1, _6n, P) * b2) % P;
    const root = pow2(t2, _2n, P);
    if (!Fp.eql(Fp.sqr(root), y))
        throw new Error('Cannot find square root');
    return root;
}
const Fp = Fp$1(secp256k1P, undefined, undefined, { sqrt: sqrtMod });
const secp256k1 = createCurve({
    a: BigInt(0),
    b: BigInt(7),
    Fp,
    n: secp256k1N,
    // Base point (x, y) aka generator point
    Gx: BigInt('55066263022277343669578718895168534326250603453777594175500187360389116729240'),
    Gy: BigInt('32670510020758816978083085130507043184471273380659243275938904335757337482424'),
    h: BigInt(1),
    lowS: true,
    /**
     * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
     * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
     * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
     * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
     */
    endo: {
        beta: BigInt('0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee'),
        splitScalar: (k) => {
            const n = secp256k1N;
            const a1 = BigInt('0x3086d221a7d46bcde86c90e49284eb15');
            const b1 = -_1n * BigInt('0xe4437ed6010e88286f547fa90abfe4c3');
            const a2 = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8');
            const b2 = a1;
            const POW_2_128 = BigInt('0x100000000000000000000000000000000'); // (2n**128n).toString(16)
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
                throw new Error('splitScalar: Endomorphism failed, k=' + k);
            }
            return { k1neg, k1, k2neg, k2 };
        },
    },
}, sha256$1);
// Schnorr signatures are superior to ECDSA from above. Below is Schnorr-specific BIP0340 code.
// https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki
const _0n = BigInt(0);
const fe = (x) => typeof x === 'bigint' && _0n < x && x < secp256k1P;
const ge = (x) => typeof x === 'bigint' && _0n < x && x < secp256k1N;
/** An object mapping tags to their tagged hash prefix of [SHA256(tag) | SHA256(tag)] */
const TAGGED_HASH_PREFIXES = {};
function taggedHash(tag, ...messages) {
    let tagP = TAGGED_HASH_PREFIXES[tag];
    if (tagP === undefined) {
        const tagH = sha256$1(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
        tagP = concatBytes$1(tagH, tagH);
        TAGGED_HASH_PREFIXES[tag] = tagP;
    }
    return sha256$1(concatBytes$1(tagP, ...messages));
}
// ECDSA compact points are 33-byte. Schnorr is 32: we strip first byte 0x02 or 0x03
const pointToBytes = (point) => point.toRawBytes(true).slice(1);
const numTo32b = (n) => numberToBytesBE(n, 32);
const modP = (x) => mod(x, secp256k1P);
const modN = (x) => mod(x, secp256k1N);
const Point = secp256k1.ProjectivePoint;
const GmulAdd = (Q, a, b) => Point.BASE.multiplyAndAddUnsafe(Q, a, b);
// Calculate point, scalar and bytes
function schnorrGetExtPubKey(priv) {
    const d = secp256k1.utils.normPrivateKeyToScalar(priv); // same method executed in fromPrivateKey
    const point = Point.fromPrivateKey(d); // P = d'⋅G; 0 < d' < n check is done inside
    const scalar = point.hasEvenY() ? d : modN(-d); // d = d' if has_even_y(P), otherwise d = n-d'
    return { point, scalar, bytes: pointToBytes(point) };
}
/**
 * lift_x from BIP340. Convert 32-byte x coordinate to elliptic curve point.
 * @returns valid point checked for being on-curve
 */
function lift_x(x) {
    if (!fe(x))
        throw new Error('bad x: need 0 < x < p'); // Fail if x ≥ p.
    const xx = modP(x * x);
    const c = modP(xx * x + BigInt(7)); // Let c = x³ + 7 mod p.
    let y = sqrtMod(c); // Let y = c^(p+1)/4 mod p.
    if (y % 2n !== 0n)
        y = modP(-y); // Return the unique point P such that x(P) = x and
    const p = new Point(x, y, _1n); // y(P) = y if y mod 2 = 0 or y(P) = p-y otherwise.
    p.assertValidity();
    return p;
}
/**
 * Create tagged hash, convert it to bigint, reduce modulo-n.
 */
function challenge(...args) {
    return modN(bytesToNumberBE(taggedHash('BIP0340/challenge', ...args)));
}
/**
 * Schnorr public key is just `x` coordinate of Point as per BIP340.
 */
function schnorrGetPublicKey(privateKey) {
    return schnorrGetExtPubKey(privateKey).bytes; // d'=int(sk). Fail if d'=0 or d'≥n. Ret bytes(d'⋅G)
}
/**
 * Creates Schnorr signature as per BIP340. Verifies itself before returning anything.
 * auxRand is optional and is not the sole source of k generation: bad CSPRNG won't be dangerous.
 */
function schnorrSign(message, privateKey, auxRand = randomBytes(32)) {
    const m = ensureBytes('message', message);
    const { bytes: px, scalar: d } = schnorrGetExtPubKey(privateKey); // checks for isWithinCurveOrder
    const a = ensureBytes('auxRand', auxRand, 32); // Auxiliary random data a: a 32-byte array
    const t = numTo32b(d ^ bytesToNumberBE(taggedHash('BIP0340/aux', a))); // Let t be the byte-wise xor of bytes(d) and hash/aux(a)
    const rand = taggedHash('BIP0340/nonce', t, px, m); // Let rand = hash/nonce(t || bytes(P) || m)
    const k_ = modN(bytesToNumberBE(rand)); // Let k' = int(rand) mod n
    if (k_ === _0n)
        throw new Error('sign failed: k is zero'); // Fail if k' = 0.
    const { point: R, bytes: rx, scalar: k } = schnorrGetExtPubKey(k_); // Let R = k'⋅G.
    const e = challenge(rx, px, m); // Let e = int(hash/challenge(bytes(R) || bytes(P) || m)) mod n.
    const sig = new Uint8Array(64); // Let sig = bytes(R) || bytes((k + ed) mod n).
    sig.set(numTo32b(R.px), 0);
    sig.set(numTo32b(modN(k + e * d)), 32);
    // If Verify(bytes(P), m, sig) (see below) returns failure, abort
    if (!schnorrVerify(sig, m, px))
        throw new Error('sign: Invalid signature produced');
    return sig;
}
/**
 * Verifies Schnorr signature.
 * Will swallow errors & return false except for initial type validation of arguments.
 */
function schnorrVerify(signature, message, publicKey) {
    const sig = ensureBytes('signature', signature, 64);
    const m = ensureBytes('message', message);
    const pub = ensureBytes('publicKey', publicKey, 32);
    try {
        const P = lift_x(bytesToNumberBE(pub)); // P = lift_x(int(pk)); fail if that fails
        const r = bytesToNumberBE(sig.subarray(0, 32)); // Let r = int(sig[0:32]); fail if r ≥ p.
        if (!fe(r))
            return false;
        const s = bytesToNumberBE(sig.subarray(32, 64)); // Let s = int(sig[32:64]); fail if s ≥ n.
        if (!ge(s))
            return false;
        const e = challenge(numTo32b(r), pointToBytes(P), m); // int(challenge(bytes(r)||bytes(P)||m))%n
        const R = GmulAdd(P, s, modN(-e)); // R = s⋅G - e⋅P
        if (!R || !R.hasEvenY() || R.toAffine().x !== r)
            return false; // -eP == (n-e)P
        return true; // Fail if is_infinite(R) / not has_even_y(R) / x(R) ≠ r.
    }
    catch (error) {
        return false;
    }
}
const schnorr = {
    getPublicKey: schnorrGetPublicKey,
    sign: schnorrSign,
    verify: schnorrVerify,
    utils: {
        randomPrivateKey: secp256k1.utils.randomPrivateKey,
        getExtendedPublicKey: schnorrGetExtPubKey,
        lift_x,
        pointToBytes,
        numberToBytesBE,
        bytesToNumberBE,
        taggedHash,
        mod,
    },
};
const isoMap = isogenyMap(Fp, [
    // xNum
    [
        '0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7',
        '0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581',
        '0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262',
        '0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c',
    ],
    // xDen
    [
        '0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b',
        '0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14',
        '0x0000000000000000000000000000000000000000000000000000000000000001', // LAST 1
    ],
    // yNum
    [
        '0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c',
        '0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3',
        '0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931',
        '0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84',
    ],
    // yDen
    [
        '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b',
        '0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573',
        '0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f',
        '0x0000000000000000000000000000000000000000000000000000000000000001', // LAST 1
    ],
].map((i) => i.map((j) => BigInt(j))));
const mapSWU = mapToCurveSimpleSWU(Fp, {
    A: BigInt('0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533'),
    B: BigInt('1771'),
    Z: Fp.create(BigInt('-11')),
});
createHasher(secp256k1.ProjectivePoint, (scalars) => {
    const { x, y } = mapSWU(Fp.create(scalars[0]));
    return isoMap(x, y);
}, {
    DST: 'secp256k1_XMD:SHA-256_SSWU_RO_',
    encodeDST: 'secp256k1_XMD:SHA-256_SSWU_NU_',
    p: Fp.ORDER,
    m: 1,
    k: 128,
    expand: 'xmd',
    hash: sha256$1,
});

function number$1(n) {
    if (!Number.isSafeInteger(n) || n < 0)
        throw new Error(`Wrong positive integer: ${n}`);
}
function bool(b) {
    if (typeof b !== 'boolean')
        throw new Error(`Expected boolean, not ${b}`);
}
function bytes$1(b, ...lengths) {
    if (!(b instanceof Uint8Array))
        throw new TypeError('Expected Uint8Array');
    if (lengths.length > 0 && !lengths.includes(b.length))
        throw new TypeError(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
function hash(hash) {
    if (typeof hash !== 'function' || typeof hash.create !== 'function')
        throw new Error('Hash should be wrapped by utils.wrapConstructor');
    number$1(hash.outputLen);
    number$1(hash.blockLen);
}
function exists(instance, checkFinished = true) {
    if (instance.destroyed)
        throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished)
        throw new Error('Hash#digest() has already been called');
}
function output(out, instance) {
    bytes$1(out);
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error(`digestInto() expects output buffer of length at least ${min}`);
    }
}
const assert = {
    number: number$1,
    bool,
    bytes: bytes$1,
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
wrapConstructor(() => new SHA224());

// https://homes.esat.kuleuven.be/~bosselae/ripemd160.html
// https://homes.esat.kuleuven.be/~bosselae/ripemd160/pdf/AB-9601/AB-9601.pdf
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
    [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
].map((i) => new Uint8Array(i));
const shiftsL = idxL.map((idx, i) => idx.map((j) => shifts[i][j]));
const shiftsR = idxR.map((idx, i) => idx.map((j) => shifts[i][j]));
const Kl = new Uint32Array([0x00000000, 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xa953fd4e]);
const Kr = new Uint32Array([0x50a28be6, 0x5c4dd124, 0x6d703ef3, 0x7a6d76e9, 0x00000000]);
// The rotate left (circular left shift) operation for uint32
const rotl = (word, shift) => (word << shift) | (word >>> (32 - shift));
// It's called f() in spec.
function f(group, x, y, z) {
    if (group === 0)
        return x ^ y ^ z;
    else if (group === 1)
        return (x & y) | (~x & z);
    else if (group === 2)
        return (x | ~y) ^ z;
    else if (group === 3)
        return (x & z) | (y & ~z);
    else
        return x ^ (y | ~z);
}
// Temporary buffer, not used to store anything between runs
const BUF = new Uint32Array(16);
class RIPEMD160 extends SHA2 {
    constructor() {
        super(64, 20, 8, true);
        this.h0 = 0x67452301 | 0;
        this.h1 = 0xefcdab89 | 0;
        this.h2 = 0x98badcfe | 0;
        this.h3 = 0x10325476 | 0;
        this.h4 = 0xc3d2e1f0 | 0;
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
        // prettier-ignore
        let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
        // Instead of iterating 0 to 80, we split it into 5 groups
        // And use the groups in constants, functions, etc. Much simpler
        for (let group = 0; group < 5; group++) {
            const rGroup = 4 - group;
            const hbl = Kl[group], hbr = Kr[group]; // prettier-ignore
            const rl = idxL[group], rr = idxR[group]; // prettier-ignore
            const sl = shiftsL[group], sr = shiftsR[group]; // prettier-ignore
            for (let i = 0; i < 16; i++) {
                const tl = (rotl(al + f(group, bl, cl, dl) + BUF[rl[i]] + hbl, sl[i]) + el) | 0;
                al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl; // prettier-ignore
            }
            // 2 loops are 10% faster
            for (let i = 0; i < 16; i++) {
                const tr = (rotl(ar + f(rGroup, br, cr, dr) + BUF[rr[i]] + hbr, sr[i]) + er) | 0;
                ar = er, er = dr, dr = rotl(cr, 10) | 0, cr = br, br = tr; // prettier-ignore
            }
        }
        // Add the compressed chunk to the current hash value
        this.set((this.h1 + cl + dr) | 0, (this.h2 + dl + er) | 0, (this.h3 + el + ar) | 0, (this.h4 + al + br) | 0, (this.h0 + bl + cr) | 0);
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
/**
 * RIPEMD-160 - a hash function from 1990s.
 * @param message - msg that would be hashed
 */
const ripemd160 = wrapConstructor(() => new RIPEMD160());

/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function assertNumber(n) {
    if (!Number.isSafeInteger(n))
        throw new Error(`Wrong integer: ${n}`);
}
function chain(...args) {
    const wrap = (a, b) => (c) => a(b(c));
    const encode = Array.from(args)
        .reverse()
        .reduce((acc, i) => (acc ? wrap(acc, i.encode) : i.encode), undefined);
    const decode = args.reduce((acc, i) => (acc ? wrap(acc, i.decode) : i.decode), undefined);
    return { encode, decode };
}
function alphabet(alphabet) {
    return {
        encode: (digits) => {
            if (!Array.isArray(digits) || (digits.length && typeof digits[0] !== 'number'))
                throw new Error('alphabet.encode input should be an array of numbers');
            return digits.map((i) => {
                assertNumber(i);
                if (i < 0 || i >= alphabet.length)
                    throw new Error(`Digit index outside alphabet: ${i} (alphabet: ${alphabet.length})`);
                return alphabet[i];
            });
        },
        decode: (input) => {
            if (!Array.isArray(input) || (input.length && typeof input[0] !== 'string'))
                throw new Error('alphabet.decode input should be array of strings');
            return input.map((letter) => {
                if (typeof letter !== 'string')
                    throw new Error(`alphabet.decode: not string element=${letter}`);
                const index = alphabet.indexOf(letter);
                if (index === -1)
                    throw new Error(`Unknown letter: "${letter}". Allowed: ${alphabet}`);
                return index;
            });
        },
    };
}
function join(separator = '') {
    if (typeof separator !== 'string')
        throw new Error('join separator should be string');
    return {
        encode: (from) => {
            if (!Array.isArray(from) || (from.length && typeof from[0] !== 'string'))
                throw new Error('join.encode input should be array of strings');
            for (let i of from)
                if (typeof i !== 'string')
                    throw new Error(`join.encode: non-string input=${i}`);
            return from.join(separator);
        },
        decode: (to) => {
            if (typeof to !== 'string')
                throw new Error('join.decode input should be string');
            return to.split(separator);
        },
    };
}
function padding(bits, chr = '=') {
    assertNumber(bits);
    if (typeof chr !== 'string')
        throw new Error('padding chr should be string');
    return {
        encode(data) {
            if (!Array.isArray(data) || (data.length && typeof data[0] !== 'string'))
                throw new Error('padding.encode input should be array of strings');
            for (let i of data)
                if (typeof i !== 'string')
                    throw new Error(`padding.encode: non-string input=${i}`);
            while ((data.length * bits) % 8)
                data.push(chr);
            return data;
        },
        decode(input) {
            if (!Array.isArray(input) || (input.length && typeof input[0] !== 'string'))
                throw new Error('padding.encode input should be array of strings');
            for (let i of input)
                if (typeof i !== 'string')
                    throw new Error(`padding.decode: non-string input=${i}`);
            let end = input.length;
            if ((end * bits) % 8)
                throw new Error('Invalid padding: string should have whole number of bytes');
            for (; end > 0 && input[end - 1] === chr; end--) {
                if (!(((end - 1) * bits) % 8))
                    throw new Error('Invalid padding: string has too much padding');
            }
            return input.slice(0, end);
        },
    };
}
function normalize(fn) {
    if (typeof fn !== 'function')
        throw new Error('normalize fn should be function');
    return { encode: (from) => from, decode: (to) => fn(to) };
}
function convertRadix(data, from, to) {
    if (from < 2)
        throw new Error(`convertRadix: wrong from=${from}, base cannot be less than 2`);
    if (to < 2)
        throw new Error(`convertRadix: wrong to=${to}, base cannot be less than 2`);
    if (!Array.isArray(data))
        throw new Error('convertRadix: data should be array');
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
            if (!Number.isSafeInteger(digitBase) ||
                (from * carry) / from !== carry ||
                digitBase - digit !== from * carry) {
                throw new Error('convertRadix: carry overflow');
            }
            carry = digitBase % to;
            digits[i] = Math.floor(digitBase / to);
            if (!Number.isSafeInteger(digits[i]) || digits[i] * to + carry !== digitBase)
                throw new Error('convertRadix: carry overflow');
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
const gcd = (a, b) => (!b ? a : gcd(b, a % b));
const radix2carry = (from, to) => from + (to - gcd(from, to));
function convertRadix2(data, from, to, padding) {
    if (!Array.isArray(data))
        throw new Error('convertRadix2: data should be array');
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
        carry = (carry << from) | n;
        if (pos + from > 32)
            throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from}`);
        pos += from;
        for (; pos >= to; pos -= to)
            res.push(((carry >> (pos - to)) & mask) >>> 0);
        carry &= 2 ** pos - 1;
    }
    carry = (carry << (to - pos)) & mask;
    if (!padding && pos >= from)
        throw new Error('Excess padding');
    if (!padding && carry)
        throw new Error(`Non-zero padding: ${carry}`);
    if (padding && pos > 0)
        res.push(carry >>> 0);
    return res;
}
function radix(num) {
    assertNumber(num);
    return {
        encode: (bytes) => {
            if (!(bytes instanceof Uint8Array))
                throw new Error('radix.encode input should be Uint8Array');
            return convertRadix(Array.from(bytes), 2 ** 8, num);
        },
        decode: (digits) => {
            if (!Array.isArray(digits) || (digits.length && typeof digits[0] !== 'number'))
                throw new Error('radix.decode input should be array of strings');
            return Uint8Array.from(convertRadix(digits, num, 2 ** 8));
        },
    };
}
function radix2(bits, revPadding = false) {
    assertNumber(bits);
    if (bits <= 0 || bits > 32)
        throw new Error('radix2: bits should be in (0..32]');
    if (radix2carry(8, bits) > 32 || radix2carry(bits, 8) > 32)
        throw new Error('radix2: carry overflow');
    return {
        encode: (bytes) => {
            if (!(bytes instanceof Uint8Array))
                throw new Error('radix2.encode input should be Uint8Array');
            return convertRadix2(Array.from(bytes), 8, bits, !revPadding);
        },
        decode: (digits) => {
            if (!Array.isArray(digits) || (digits.length && typeof digits[0] !== 'number'))
                throw new Error('radix2.decode input should be array of strings');
            return Uint8Array.from(convertRadix2(digits, bits, 8, revPadding));
        },
    };
}
function unsafeWrapper(fn) {
    if (typeof fn !== 'function')
        throw new Error('unsafeWrapper fn should be function');
    return function (...args) {
        try {
            return fn.apply(null, args);
        }
        catch (e) { }
    };
}
function checksum(len, fn) {
    assertNumber(len);
    if (typeof fn !== 'function')
        throw new Error('checksum fn should be function');
    return {
        encode(data) {
            if (!(data instanceof Uint8Array))
                throw new Error('checksum.encode: input should be Uint8Array');
            const checksum = fn(data).slice(0, len);
            const res = new Uint8Array(data.length + len);
            res.set(data);
            res.set(checksum, data.length);
            return res;
        },
        decode(data) {
            if (!(data instanceof Uint8Array))
                throw new Error('checksum.decode: input should be Uint8Array');
            const payload = data.slice(0, -len);
            const newChecksum = fn(payload).slice(0, len);
            const oldChecksum = data.slice(-len);
            for (let i = 0; i < len; i++)
                if (newChecksum[i] !== oldChecksum[i])
                    throw new Error('Invalid checksum');
            return payload;
        },
    };
}
const base16 = chain(radix2(4), alphabet('0123456789ABCDEF'), join(''));
const base32 = chain(radix2(5), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'), padding(5), join(''));
chain(radix2(5), alphabet('0123456789ABCDEFGHIJKLMNOPQRSTUV'), padding(5), join(''));
chain(radix2(5), alphabet('0123456789ABCDEFGHJKMNPQRSTVWXYZ'), join(''), normalize((s) => s.toUpperCase().replace(/O/g, '0').replace(/[IL]/g, '1')));
const base64 = chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'), padding(6), join(''));
const base64url = chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'), padding(6), join(''));
const genBase58 = (abc) => chain(radix(58), alphabet(abc), join(''));
const base58 = genBase58('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
genBase58('123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ');
genBase58('rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz');
const XMR_BLOCK_LEN = [0, 2, 3, 5, 6, 7, 9, 10, 11];
const base58xmr = {
    encode(data) {
        let res = '';
        for (let i = 0; i < data.length; i += 8) {
            const block = data.subarray(i, i + 8);
            res += base58.encode(block).padStart(XMR_BLOCK_LEN[block.length], '1');
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
                    throw new Error('base58xmr: wrong padding');
            }
            res = res.concat(Array.from(block.slice(block.length - blockLen)));
        }
        return Uint8Array.from(res);
    },
};
const base58check$1 = (sha256) => chain(checksum(4, (data) => sha256(sha256(data))), base58);
const BECH_ALPHABET = chain(alphabet('qpzry9x8gf2tvdw0s3jn54khce6mua7l'), join(''));
const POLYMOD_GENERATORS = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];
function bech32Polymod(pre) {
    const b = pre >> 25;
    let chk = (pre & 0x1ffffff) << 5;
    for (let i = 0; i < POLYMOD_GENERATORS.length; i++) {
        if (((b >> i) & 1) === 1)
            chk ^= POLYMOD_GENERATORS[i];
    }
    return chk;
}
function bechChecksum(prefix, words, encodingConst = 1) {
    const len = prefix.length;
    let chk = 1;
    for (let i = 0; i < len; i++) {
        const c = prefix.charCodeAt(i);
        if (c < 33 || c > 126)
            throw new Error(`Invalid prefix (${prefix})`);
        chk = bech32Polymod(chk) ^ (c >> 5);
    }
    chk = bech32Polymod(chk);
    for (let i = 0; i < len; i++)
        chk = bech32Polymod(chk) ^ (prefix.charCodeAt(i) & 0x1f);
    for (let v of words)
        chk = bech32Polymod(chk) ^ v;
    for (let i = 0; i < 6; i++)
        chk = bech32Polymod(chk);
    chk ^= encodingConst;
    return BECH_ALPHABET.encode(convertRadix2([chk % 2 ** 30], 30, 5, false));
}
function genBech32(encoding) {
    const ENCODING_CONST = encoding === 'bech32' ? 1 : 0x2bc830a3;
    const _words = radix2(5);
    const fromWords = _words.decode;
    const toWords = _words.encode;
    const fromWordsUnsafe = unsafeWrapper(fromWords);
    function encode(prefix, words, limit = 90) {
        if (typeof prefix !== 'string')
            throw new Error(`bech32.encode prefix should be string, not ${typeof prefix}`);
        if (!Array.isArray(words) || (words.length && typeof words[0] !== 'number'))
            throw new Error(`bech32.encode words should be array of numbers, not ${typeof words}`);
        const actualLength = prefix.length + 7 + words.length;
        if (limit !== false && actualLength > limit)
            throw new TypeError(`Length ${actualLength} exceeds limit ${limit}`);
        prefix = prefix.toLowerCase();
        return `${prefix}1${BECH_ALPHABET.encode(words)}${bechChecksum(prefix, words, ENCODING_CONST)}`;
    }
    function decode(str, limit = 90) {
        if (typeof str !== 'string')
            throw new Error(`bech32.decode input should be string, not ${typeof str}`);
        if (str.length < 8 || (limit !== false && str.length > limit))
            throw new TypeError(`Wrong string length: ${str.length} (${str}). Expected (8..${limit})`);
        const lowered = str.toLowerCase();
        if (str !== lowered && str !== str.toUpperCase())
            throw new Error(`String must be lowercase or uppercase`);
        str = lowered;
        const sepIndex = str.lastIndexOf('1');
        if (sepIndex === 0 || sepIndex === -1)
            throw new Error(`Letter "1" must be present between prefix and data only`);
        const prefix = str.slice(0, sepIndex);
        const _words = str.slice(sepIndex + 1);
        if (_words.length < 6)
            throw new Error('Data must be at least 6 characters long');
        const words = BECH_ALPHABET.decode(_words).slice(0, -6);
        const sum = bechChecksum(prefix, words, ENCODING_CONST);
        if (!_words.endsWith(sum))
            throw new Error(`Invalid checksum in ${str}: expected "${sum}"`);
        return { prefix, words };
    }
    const decodeUnsafe = unsafeWrapper(decode);
    function decodeToBytes(str) {
        const { prefix, words } = decode(str, false);
        return { prefix, words, bytes: fromWords(words) };
    }
    return { encode, decode, decodeToBytes, decodeUnsafe, fromWords, fromWordsUnsafe, toWords };
}
const bech32 = genBech32('bech32');
const bech32m = genBech32('bech32m');
const utf8 = {
    encode: (data) => new TextDecoder().decode(data),
    decode: (str) => new TextEncoder().encode(str),
};
const hex$1 = chain(radix2(4), alphabet('0123456789abcdef'), join(''), normalize((s) => {
    if (typeof s !== 'string' || s.length % 2)
        throw new TypeError(`hex.decode: expected string, got ${typeof s} with length ${s.length}`);
    return s.toLowerCase();
}));
const CODERS = {
    utf8, hex: hex$1, base16, base32, base64, base64url, base58, base58xmr
};
`Invalid encoding type. Available types: ${Object.keys(CODERS).join(', ')}`;

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
        return new Error(`Reader(${this.fieldPath.join('/')}): ${msg}`);
    }
    absBytes(n) {
        if (n > this.data.length)
            throw new Error('absBytes: Unexpected end of buffer');
        return this.data.subarray(n);
    }
    bytes(n, peek = false) {
        if (this.bitPos)
            throw this.err('readBytes: bitPos not empty');
        if (!Number.isFinite(n))
            throw this.err(`readBytes: wrong length=${n}`);
        if (this.pos + n > this.data.length)
            throw this.err('readBytes: Unexpected end of buffer');
        const slice = this.data.subarray(this.pos, this.pos + n);
        if (!peek)
            this.pos += n;
        return slice;
    }
    byte(peek = false) {
        if (this.bitPos)
            throw this.err('readByte: bitPos not empty');
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
        else if (typeof len === 'number')
            byteLen = len;
        else if (typeof len === 'string')
            byteLen = getPath(this.path, len.split('/'));
        if (typeof byteLen === 'bigint')
            byteLen = Number(byteLen);
        if (typeof byteLen !== 'number')
            throw this.err(`Wrong length: ${byteLen}`);
        return byteLen;
    }
    bits(bits) {
        if (bits > 32)
            throw this.err('BitReader: cannot read more than 32 bits in single call');
        let out = 0;
        while (bits) {
            if (!this.bitPos) {
                this.bitBuf = this.data[this.pos++];
                this.bitPos = 8;
            }
            const take = Math.min(bits, this.bitPos);
            this.bitPos -= take;
            out = (out << take) | ((this.bitBuf >> this.bitPos) & (2 ** take - 1));
            this.bitBuf &= 2 ** this.bitPos - 1;
            bits -= take;
        }
        return out >>> 0;
    }
    find(needle, pos = this.pos) {
        if (!isBytes$1(needle))
            throw this.err(`find: needle is not bytes! ${needle}`);
        if (this.bitPos)
            throw this.err('findByte: bitPos not empty');
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
        return new Error(`Writer(${this.fieldPath.join('/')}): ${msg}`);
    }
    bytes(b) {
        if (this.bitPos)
            throw this.err('writeBytes: ends with non-empty bit buffer');
        this.buffers.push(b);
        this.pos += b.length;
    }
    byte(b) {
        if (this.bitPos)
            throw this.err('writeByte: ends with non-empty bit buffer');
        this.buffers.push(new Uint8Array([b]));
        this.pos++;
    }
    get buffer() {
        if (this.bitPos)
            throw this.err('buffer: ends with non-empty bit buffer');
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
        if (typeof len === 'number')
            byteLen = len;
        else if (typeof len === 'string')
            byteLen = getPath(this.path, len.split('/'));
        if (typeof byteLen === 'bigint')
            byteLen = Number(byteLen);
        if (byteLen === undefined || byteLen !== value)
            throw this.err(`Wrong length: ${byteLen} len=${len} exp=${value}`);
    }
    bits(value, bits) {
        if (bits > 32)
            throw this.err('writeBits: cannot write more than 32 bits in single call');
        if (value >= 2 ** bits)
            throw this.err(`writeBits: value (${value}) >= 2**bits (${bits})`);
        while (bits) {
            const take = Math.min(bits, 8 - this.bitPos);
            this.bitBuf = (this.bitBuf << take) | (value >> (bits - take));
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
            throw p.err('sInt: value out of bounds');
    }
    else {
        if (0n > value || value >= 2n ** bits)
            throw p.err('uInt: value out of bounds');
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
        },
    };
}
function getPath(objPath, path) {
    objPath = Array.from(objPath);
    let i = 0;
    for (; i < path.length; i++) {
        if (path[i] === '..')
            objPath.pop();
        else
            break;
    }
    let cur = objPath.pop();
    for (; i < path.length; i++) {
        if (!cur || cur[path[i]] === undefined)
            return undefined;
        cur = cur[path[i]];
    }
    return cur;
}
function isCoder(elm) {
    return (typeof elm.encode === 'function' &&
        typeof elm.encodeStream === 'function' &&
        typeof elm.decode === 'function' &&
        typeof elm.decodeStream === 'function');
}
function dict() {
    return {
        encode: (from) => {
            const to = {};
            for (const [name, value] of from) {
                if (to[name] !== undefined)
                    throw new Error(`coders.dict: same key(${name}) appears twice in struct`);
                to[name] = value;
            }
            return to;
        },
        decode: (to) => Object.entries(to),
    };
}
const number = {
    encode: (from) => {
        if (from > BigInt(Number.MAX_SAFE_INTEGER))
            throw new Error(`coders.number: element bigger than MAX_SAFE_INTEGER=${from}`);
        return Number(from);
    },
    decode: (to) => BigInt(to),
};
function tsEnum(e) {
    return {
        encode: (from) => e[from],
        decode: (to) => e[to],
    };
}
function decimal(precision) {
    const decimalMask = 10n ** BigInt(precision);
    return {
        encode: (from) => {
            let s = (from < 0n ? -from : from).toString(10);
            let sep = s.length - precision;
            if (sep < 0) {
                s = s.padStart(s.length - sep, '0');
                sep = 0;
            }
            let i = s.length - 1;
            for (; i >= sep && s[i] === '0'; i--)
                ;
            let [int, frac] = [s.slice(0, sep), s.slice(sep, i + 1)];
            if (!int)
                int = '0';
            if (from < 0n)
                int = '-' + int;
            if (!frac)
                return int;
            return `${int}.${frac}`;
        },
        decode: (to) => {
            let neg = false;
            if (to.startsWith('-')) {
                neg = true;
                to = to.slice(1);
            }
            let sep = to.indexOf('.');
            sep = sep === -1 ? to.length : sep;
            const [intS, fracS] = [to.slice(0, sep), to.slice(sep + 1)];
            const int = BigInt(intS) * decimalMask;
            const fracLen = Math.min(fracS.length, precision);
            const frac = BigInt(fracS.slice(0, fracLen)) * 10n ** BigInt(precision - fracLen);
            const value = int + frac;
            return neg ? -value : value;
        },
    };
}
function match(lst) {
    return {
        encode: (from) => {
            for (const c of lst) {
                const elm = c.encode(from);
                if (elm !== undefined)
                    return elm;
            }
            throw new Error(`match/encode: cannot find match in ${from}`);
        },
        decode: (to) => {
            for (const c of lst) {
                const elm = c.decode(to);
                if (elm !== undefined)
                    return elm;
            }
            throw new Error(`match/decode: cannot find match in ${to}`);
        },
    };
}
const coders = { dict, number, tsEnum, decimal, match };
const bigint = (size, le = false, signed = false) => wrap({
    size,
    encodeStream: (w, value) => {
        if (typeof value !== 'number' && typeof value !== 'bigint')
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
            res |= BigInt(b[i]) << (8n * BigInt(i));
        if (signed && res & signBit)
            res = (res ^ signBit) - signBit;
        checkBounds(r, res, 8n * bLen, !!signed);
        return res;
    },
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
        throw new Error('int supports size up to 6 bytes (48 bits), for other use bigint');
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
    },
});
const bytes = (len, le = false) => wrap({
    size: typeof len === 'number' ? len : undefined,
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
        let bytes;
        if (isBytes$1(len)) {
            const tPos = r.find(len);
            if (!tPos)
                throw r.err(`bytes: cannot find terminator`);
            bytes = r.bytes(tPos - r.pos);
            r.bytes(len.length);
        }
        else
            bytes = r.bytes(len === null ? r.leftBytes : r.length(len));
        return le ? swap(bytes) : bytes;
    },
});
const string = (len, le = false) => {
    const inner = bytes(len, le);
    return wrap({
        size: inner.size,
        encodeStream: (w, value) => inner.encodeStream(w, utf8.decode(value)),
        decodeStream: (r) => utf8.encode(inner.decodeStream(r)),
    });
};
string(NULL);
const hex = (len, le = false, withZero = false) => {
    const inner = bytes(len, le);
    return wrap({
        size: inner.size,
        encodeStream: (w, value) => {
            if (withZero && !value.startsWith('0x'))
                throw new Error('hex(withZero=true).encode input should start with 0x');
            const bytes = hex$1.decode(withZero ? value.slice(2) : value);
            return inner.encodeStream(w, bytes);
        },
        decodeStream: (r) => (withZero ? '0x' : '') + hex$1.encode(inner.decodeStream(r)),
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
            }
            catch (e) {
                throw w.err('' + e);
            }
            return inner.encodeStream(w, innerValue);
        },
        decodeStream: (r) => {
            const innerValue = inner.decodeStream(r);
            try {
                return b.encode(innerValue);
            }
            catch (e) {
                throw r.err('' + e);
            }
        },
    });
}
function validate(inner, fn) {
    if (!isCoder(inner))
        throw new Error(`validate: invalid inner value ${inner}`);
    return wrap({
        size: inner.size,
        encodeStream: (w, value) => inner.encodeStream(w, fn(value)),
        decodeStream: (r) => fn(inner.decodeStream(r)),
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
    },
});
function flagged(path, inner, def) {
    if (!isCoder(inner))
        throw new Error(`flagged: invalid inner value ${inner}`);
    return wrap({
        encodeStream: (w, value) => {
            if (typeof path === 'string') {
                if (getPath(w.path, path.split('/')))
                    inner.encodeStream(w, value);
                else if (def)
                    inner.encodeStream(w, def);
            }
            else {
                path.encodeStream(w, !!value);
                if (!!value)
                    inner.encodeStream(w, value);
                else if (def)
                    inner.encodeStream(w, def);
            }
        },
        decodeStream: (r) => {
            let hasFlag = false;
            if (typeof path === 'string')
                hasFlag = getPath(r.path, path.split('/'));
            else
                hasFlag = path.decodeStream(r);
            if (hasFlag)
                return inner.decodeStream(r);
            else if (def)
                inner.decodeStream(r);
        },
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
            if ((check && typeof value !== 'object' && value !== constant) ||
                (isBytes$1(constant) && !equalBytes(constant, value))) {
                throw r.err(`magic: invalid value: ${value} !== ${constant}`);
            }
            return;
        },
    });
}
function sizeof(fields) {
    let size = 0;
    for (let f of fields) {
        if (!f.size)
            return;
        size += f.size;
    }
    return size;
}
function struct(fields) {
    if (Array.isArray(fields))
        throw new Error('Packed.Struct: got array instead of object');
    return wrap({
        size: sizeof(Object.values(fields)),
        encodeStream: (w, value) => {
            if (typeof value !== 'object' || value === null)
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
        },
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
                w.fieldPathPush('' + i);
                fields[i].encodeStream(w, value[i]);
                w.fieldPathPop();
            }
            w.path.pop();
        },
        decodeStream: (r) => {
            let res = [];
            r.path.push(res);
            for (let i = 0; i < fields.length; i++) {
                r.fieldPathPush('' + i);
                res.push(fields[i].decodeStream(r));
                r.fieldPathPop();
            }
            r.path.pop();
            return res;
        },
    });
}
function prefix(len, inner) {
    if (!isCoder(inner))
        throw new Error(`prefix: invalid inner value ${inner}`);
    if (isBytes$1(len))
        throw new Error(`prefix: len cannot be Uint8Array`);
    const b = bytes(len);
    return wrap({
        size: typeof len === 'number' ? len : undefined,
        encodeStream: (w, value) => {
            const wChild = new Writer(w.path, w.fieldPath);
            inner.encodeStream(wChild, value);
            b.encodeStream(w, wChild.buffer);
        },
        decodeStream: (r) => {
            const data = b.decodeStream(r);
            return inner.decodeStream(new Reader(data, r.path, r.fieldPath));
        },
    });
}
function array(len, inner) {
    if (!isCoder(inner))
        throw new Error(`array: invalid inner value ${inner}`);
    return wrap({
        size: typeof len === 'number' && inner.size ? len * inner.size : undefined,
        encodeStream: (w, value) => {
            if (!Array.isArray(value))
                throw w.err(`array: invalid value ${value}`);
            if (!isBytes$1(len))
                w.length(len, value.length);
            w.path.push(value);
            for (let i = 0; i < value.length; i++) {
                w.fieldPathPush('' + i);
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
                    r.fieldPathPush('' + i++);
                    res.push(inner.decodeStream(r));
                    r.fieldPathPop();
                    if (inner.size && r.leftBytes < inner.size)
                        break;
                }
                r.path.pop();
            }
            else if (isBytes$1(len)) {
                let i = 0;
                r.path.push(res);
                while (true) {
                    if (equalBytes(r.bytes(len.length, true), len)) {
                        r.bytes(len.length);
                        break;
                    }
                    r.fieldPathPush('' + i++);
                    res.push(inner.decodeStream(r));
                    r.fieldPathPop();
                }
                r.path.pop();
            }
            else {
                r.fieldPathPush('arrayLen');
                const length = r.length(len);
                r.fieldPathPop();
                r.path.push(res);
                for (let i = 0; i < length; i++) {
                    r.fieldPathPush('' + i);
                    res.push(inner.decodeStream(r));
                    r.fieldPathPop();
                }
                r.path.pop();
            }
            return res;
        },
    });
}
magic(bytes(0), EMPTY);

/*! micro-btc-signer - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const { ProjectivePoint: ProjPoint, sign: _signECDSA, getPublicKey: _pubECDSA } = secp256k1;
const CURVE_ORDER = secp256k1.CURVE.n;
// Same as value || def, but doesn't overwrites zero ('0', 0, 0n, etc)
const def = (value, def) => (value === undefined ? def : value);
const isBytes = (b) => b instanceof Uint8Array;
const hash160 = (msg) => ripemd160(sha256(msg));
const sha256x2 = (...msgs) => sha256(sha256(concat(...msgs)));
const concat = concatBytes;
// Make base58check work
const base58check = base58check$1(sha256);
var PubT;
(function (PubT) {
    PubT[PubT["ecdsa"] = 0] = "ecdsa";
    PubT[PubT["schnorr"] = 1] = "schnorr";
})(PubT || (PubT = {}));
function validatePubkey(pub, type) {
    const len = pub.length;
    if (type === PubT.ecdsa) {
        if (len === 32)
            throw new Error('Expected non-Schnorr key');
        ProjPoint.fromHex(pub); // does assertValidity
        return pub;
    }
    else if (type === PubT.schnorr) {
        if (len !== 32)
            throw new Error('Expected 32-byte Schnorr key');
        schnorr.utils.lift_x(schnorr.utils.bytesToNumberBE(pub));
        return pub;
    }
    else {
        throw new Error('Unknown key type');
    }
}
function isValidPubkey(pub, type) {
    try {
        validatePubkey(pub, type);
        return true;
    }
    catch (e) {
        return false;
    }
}
// low-r signature grinding. Used to reduce tx size by 1 byte.
// noble/secp256k1 does not support the feature: it is not used outside of BTC.
// We implement it manually, because in BTC it's common.
// Not best way, but closest to bitcoin implementation (easier to check)
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
    const t = u.taggedHash('TapTweak', a, b);
    const tn = u.bytesToNumberBE(t);
    if (tn >= CURVE_ORDER)
        throw new Error('tweak higher than curve order');
    return tn;
}
function taprootTweakPrivKey(privKey, merkleRoot = new Uint8Array()) {
    const u = schnorr.utils;
    // seckey0 = int_from_bytes(seckey0); P = point_mul(G, seckey0)
    // seckey = seckey0 if has_even_y(P) else SECP256K1_ORDER - seckey0
    const { scalar: seckey, bytes } = u.getExtendedPublicKey(privKey);
    // t = int_from_bytes(tagged_hash("TapTweak", bytes_from_int(x(P)) + h)); >= SECP256K1_ORDER check
    const t = tapTweak(bytes, merkleRoot);
    // bytes_from_int((seckey + t) % SECP256K1_ORDER)
    return u.numberToBytesBE(u.mod(seckey + t, CURVE_ORDER), 32);
}
function taprootTweakPubkey(pubKey, h) {
    const u = schnorr.utils;
    const t = tapTweak(pubKey, h); // t = int_from_bytes(tagged_hash("TapTweak", pubkey + h))
    const P = u.lift_x(u.bytesToNumberBE(pubKey)); // P = lift_x(int_from_bytes(pubkey))
    const Q = P.add(ProjPoint.fromPrivateKey(t)); // Q = point_add(P, point_mul(G, t))
    const parity = Q.hasEvenY() ? 0 : 1; // 0 if has_even_y(Q) else 1
    return [u.pointToBytes(Q), parity]; // bytes_from_int(x(Q))
}
// Can be 33 or 64 bytes
const PubKeyECDSA = validate(bytes(null), (pub) => validatePubkey(pub, PubT.ecdsa));
const PubKeySchnorr = validate(bytes(32), (pub) => validatePubkey(pub, PubT.schnorr));
const SignatureSchnorr = validate(bytes(null), (sig) => {
    if (sig.length !== 64 && sig.length !== 65)
        throw new Error('Schnorr signature should be 64 or 65 bytes long');
    return sig;
});
const NETWORK = {
    bech32: 'bc',
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
};
const TEST_NETWORK = {
    bech32: 'tb',
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
};
const PRECISION = 8;
const DEFAULT_VERSION = 2;
const DEFAULT_LOCKTIME = 0;
const DEFAULT_SEQUENCE = 4294967295;
const EMPTY32 = new Uint8Array(32);
// Utils
coders.decimal(PRECISION);
// Exported for tests, internal method
function _cmpBytes(a, b) {
    if (!isBytes(a) || !isBytes(b))
        throw new Error(`cmp: wrong type a=${typeof a} b=${typeof b}`);
    // -1 -> a<b, 0 -> a==b, 1 -> a>b
    const len = Math.min(a.length, b.length);
    for (let i = 0; i < len; i++)
        if (a[i] != b[i])
            return Math.sign(a[i] - b[i]);
    return Math.sign(a.length - b.length);
}
// Coders
// prettier-ignore
var OP;
(function (OP) {
    OP[OP["OP_0"] = 0] = "OP_0";
    OP[OP["PUSHDATA1"] = 76] = "PUSHDATA1";
    OP[OP["PUSHDATA2"] = 77] = "PUSHDATA2";
    OP[OP["PUSHDATA4"] = 78] = "PUSHDATA4";
    OP[OP["1NEGATE"] = 79] = "1NEGATE";
    OP[OP["RESERVED"] = 80] = "RESERVED";
    OP[OP["OP_1"] = 81] = "OP_1";
    OP[OP["OP_2"] = 82] = "OP_2";
    OP[OP["OP_3"] = 83] = "OP_3";
    OP[OP["OP_4"] = 84] = "OP_4";
    OP[OP["OP_5"] = 85] = "OP_5";
    OP[OP["OP_6"] = 86] = "OP_6";
    OP[OP["OP_7"] = 87] = "OP_7";
    OP[OP["OP_8"] = 88] = "OP_8";
    OP[OP["OP_9"] = 89] = "OP_9";
    OP[OP["OP_10"] = 90] = "OP_10";
    OP[OP["OP_11"] = 91] = "OP_11";
    OP[OP["OP_12"] = 92] = "OP_12";
    OP[OP["OP_13"] = 93] = "OP_13";
    OP[OP["OP_14"] = 94] = "OP_14";
    OP[OP["OP_15"] = 95] = "OP_15";
    OP[OP["OP_16"] = 96] = "OP_16";
    // Control
    OP[OP["NOP"] = 97] = "NOP";
    OP[OP["VER"] = 98] = "VER";
    OP[OP["IF"] = 99] = "IF";
    OP[OP["NOTIF"] = 100] = "NOTIF";
    OP[OP["VERIF"] = 101] = "VERIF";
    OP[OP["VERNOTIF"] = 102] = "VERNOTIF";
    OP[OP["ELSE"] = 103] = "ELSE";
    OP[OP["ENDIF"] = 104] = "ENDIF";
    OP[OP["VERIFY"] = 105] = "VERIFY";
    OP[OP["RETURN"] = 106] = "RETURN";
    // Stack
    OP[OP["TOALTSTACK"] = 107] = "TOALTSTACK";
    OP[OP["FROMALTSTACK"] = 108] = "FROMALTSTACK";
    OP[OP["2DROP"] = 109] = "2DROP";
    OP[OP["2DUP"] = 110] = "2DUP";
    OP[OP["3DUP"] = 111] = "3DUP";
    OP[OP["2OVER"] = 112] = "2OVER";
    OP[OP["2ROT"] = 113] = "2ROT";
    OP[OP["2SWAP"] = 114] = "2SWAP";
    OP[OP["IFDUP"] = 115] = "IFDUP";
    OP[OP["DEPTH"] = 116] = "DEPTH";
    OP[OP["DROP"] = 117] = "DROP";
    OP[OP["DUP"] = 118] = "DUP";
    OP[OP["NIP"] = 119] = "NIP";
    OP[OP["OVER"] = 120] = "OVER";
    OP[OP["PICK"] = 121] = "PICK";
    OP[OP["ROLL"] = 122] = "ROLL";
    OP[OP["ROT"] = 123] = "ROT";
    OP[OP["SWAP"] = 124] = "SWAP";
    OP[OP["TUCK"] = 125] = "TUCK";
    // Splice
    OP[OP["CAT"] = 126] = "CAT";
    OP[OP["SUBSTR"] = 127] = "SUBSTR";
    OP[OP["LEFT"] = 128] = "LEFT";
    OP[OP["RIGHT"] = 129] = "RIGHT";
    OP[OP["SIZE"] = 130] = "SIZE";
    // Boolean logic
    OP[OP["INVERT"] = 131] = "INVERT";
    OP[OP["AND"] = 132] = "AND";
    OP[OP["OR"] = 133] = "OR";
    OP[OP["XOR"] = 134] = "XOR";
    OP[OP["EQUAL"] = 135] = "EQUAL";
    OP[OP["EQUALVERIFY"] = 136] = "EQUALVERIFY";
    OP[OP["RESERVED1"] = 137] = "RESERVED1";
    OP[OP["RESERVED2"] = 138] = "RESERVED2";
    // Numbers
    OP[OP["1ADD"] = 139] = "1ADD";
    OP[OP["1SUB"] = 140] = "1SUB";
    OP[OP["2MUL"] = 141] = "2MUL";
    OP[OP["2DIV"] = 142] = "2DIV";
    OP[OP["NEGATE"] = 143] = "NEGATE";
    OP[OP["ABS"] = 144] = "ABS";
    OP[OP["NOT"] = 145] = "NOT";
    OP[OP["0NOTEQUAL"] = 146] = "0NOTEQUAL";
    OP[OP["ADD"] = 147] = "ADD";
    OP[OP["SUB"] = 148] = "SUB";
    OP[OP["MUL"] = 149] = "MUL";
    OP[OP["DIV"] = 150] = "DIV";
    OP[OP["MOD"] = 151] = "MOD";
    OP[OP["LSHIFT"] = 152] = "LSHIFT";
    OP[OP["RSHIFT"] = 153] = "RSHIFT";
    OP[OP["BOOLAND"] = 154] = "BOOLAND";
    OP[OP["BOOLOR"] = 155] = "BOOLOR";
    OP[OP["NUMEQUAL"] = 156] = "NUMEQUAL";
    OP[OP["NUMEQUALVERIFY"] = 157] = "NUMEQUALVERIFY";
    OP[OP["NUMNOTEQUAL"] = 158] = "NUMNOTEQUAL";
    OP[OP["LESSTHAN"] = 159] = "LESSTHAN";
    OP[OP["GREATERTHAN"] = 160] = "GREATERTHAN";
    OP[OP["LESSTHANOREQUAL"] = 161] = "LESSTHANOREQUAL";
    OP[OP["GREATERTHANOREQUAL"] = 162] = "GREATERTHANOREQUAL";
    OP[OP["MIN"] = 163] = "MIN";
    OP[OP["MAX"] = 164] = "MAX";
    OP[OP["WITHIN"] = 165] = "WITHIN";
    // Crypto
    OP[OP["RIPEMD160"] = 166] = "RIPEMD160";
    OP[OP["SHA1"] = 167] = "SHA1";
    OP[OP["SHA256"] = 168] = "SHA256";
    OP[OP["HASH160"] = 169] = "HASH160";
    OP[OP["HASH256"] = 170] = "HASH256";
    OP[OP["CODESEPARATOR"] = 171] = "CODESEPARATOR";
    OP[OP["CHECKSIG"] = 172] = "CHECKSIG";
    OP[OP["CHECKSIGVERIFY"] = 173] = "CHECKSIGVERIFY";
    OP[OP["CHECKMULTISIG"] = 174] = "CHECKMULTISIG";
    OP[OP["CHECKMULTISIGVERIFY"] = 175] = "CHECKMULTISIGVERIFY";
    // Expansion
    OP[OP["NOP1"] = 176] = "NOP1";
    OP[OP["CHECKLOCKTIMEVERIFY"] = 177] = "CHECKLOCKTIMEVERIFY";
    OP[OP["CHECKSEQUENCEVERIFY"] = 178] = "CHECKSEQUENCEVERIFY";
    OP[OP["NOP4"] = 179] = "NOP4";
    OP[OP["NOP5"] = 180] = "NOP5";
    OP[OP["NOP6"] = 181] = "NOP6";
    OP[OP["NOP7"] = 182] = "NOP7";
    OP[OP["NOP8"] = 183] = "NOP8";
    OP[OP["NOP9"] = 184] = "NOP9";
    OP[OP["NOP10"] = 185] = "NOP10";
    // BIP 342
    OP[OP["CHECKSIGADD"] = 186] = "CHECKSIGADD";
    // Invalid
    OP[OP["INVALID"] = 255] = "INVALID";
})(OP || (OP = {}));
// Converts script bytes to parsed script
// 5221030000000000000000000000000000000000000000000000000000000000000001210300000000000000000000000000000000000000000000000000000000000000022103000000000000000000000000000000000000000000000000000000000000000353ae
// =>
// OP_2
//   030000000000000000000000000000000000000000000000000000000000000001
//   030000000000000000000000000000000000000000000000000000000000000002
//   030000000000000000000000000000000000000000000000000000000000000003
//   OP_3
//   CHECKMULTISIG
const Script = wrap({
    encodeStream: (w, value) => {
        for (let o of value) {
            if (typeof o === 'string') {
                if (OP[o] === undefined)
                    throw new Error(`Unknown opcode=${o}`);
                w.byte(OP[o]);
                continue;
            }
            else if (typeof o === 'number') {
                if (o === 0x00) {
                    w.byte(0x00);
                    continue;
                }
                else if (1 <= o && o <= 16) {
                    w.byte(OP.OP_1 - 1 + o);
                    continue;
                }
            }
            // Encode big numbers
            if (typeof o === 'number')
                o = ScriptNum().encode(BigInt(o));
            if (!isBytes(o))
                throw new Error(`Wrong Script OP=${o} (${typeof o})`);
            // Bytes
            const len = o.length;
            if (len < OP.PUSHDATA1)
                w.byte(len);
            else if (len <= 0xff) {
                w.byte(OP.PUSHDATA1);
                w.byte(len);
            }
            else if (len <= 0xffff) {
                w.byte(OP.PUSHDATA2);
                w.bytes(U16LE.encode(len));
            }
            else {
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
            // if 0 < cur < 78
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
                    throw new Error('Should be not possible');
                out.push(r.bytes(len));
            }
            else if (cur === 0x00) {
                out.push(0);
            }
            else if (OP.OP_1 <= cur && cur <= OP.OP_16) {
                out.push(cur - (OP.OP_1 - 1));
            }
            else {
                const op = OP[cur];
                if (op === undefined)
                    throw new Error(`Unknown opcode=${cur.toString(16)}`);
                out.push(op);
            }
        }
        return out;
    },
});
// We can encode almost any number as ScriptNum, however, parsing will be a problem
// since we can't know if buffer is a number or something else.
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
            if (nums[nums.length - 1] >= 0x80)
                nums.push(neg ? 0x80 : 0);
            else if (neg)
                nums[nums.length - 1] |= 0x80;
            w.bytes(new Uint8Array(nums));
        },
        decodeStream: (r) => {
            const len = r.leftBytes;
            if (len > bytesLimit)
                throw new Error(`ScriptNum: number (${len}) bigger than limit=${bytesLimit}`);
            if (len === 0)
                return 0n;
            if (forceMinimal) {
                // MSB is zero (without sign bit) -> not minimally encoded
                if ((r.data[len - 1] & 0x7f) === 0) {
                    // exception
                    if (len <= 1 || (r.data[len - 2] & 0x80) === 0)
                        throw new Error('Non-minimally encoded ScriptNum');
                }
            }
            let last = 0;
            let res = 0n;
            for (let i = 0; i < len; ++i) {
                last = r.byte();
                res |= BigInt(last) << (8n * BigInt(i));
            }
            if (last >= 0x80) {
                res &= (2n ** BigInt(len * 8) - 1n) >> 1n;
                res = -res;
            }
            return res;
        },
    });
}
function OpToNum(op, bytesLimit = 4, forceMinimal = true) {
    if (typeof op === 'number')
        return op;
    if (isBytes(op)) {
        try {
            const val = ScriptNum(bytesLimit, forceMinimal).decode(op);
            if (val > Number.MAX_SAFE_INTEGER)
                return;
            return Number(val);
        }
        catch (e) {
            return;
        }
    }
}
// BTC specific variable length integer encoding
// https://en.bitcoin.it/wiki/Protocol_documentation#Variable_length_integer
const CSLimits = {
    0xfd: [0xfd, 2, 253n, 65535n],
    0xfe: [0xfe, 4, 65536n, 4294967295n],
    0xff: [0xff, 8, 4294967296n, 18446744073709551615n],
};
const CompactSize = wrap({
    encodeStream: (w, value) => {
        if (typeof value === 'number')
            value = BigInt(value);
        if (0n <= value && value <= 252n)
            return w.byte(Number(value));
        for (const [flag, bytes, start, stop] of Object.values(CSLimits)) {
            if (start > value || value > stop)
                continue;
            w.byte(flag);
            for (let i = 0; i < bytes; i++)
                w.byte(Number((value >> (8n * BigInt(i))) & 0xffn));
            return;
        }
        throw w.err(`VarInt too big: ${value}`);
    },
    decodeStream: (r) => {
        const b0 = r.byte();
        if (b0 <= 0xfc)
            return BigInt(b0);
        const [_, bytes, start] = CSLimits[b0];
        let num = 0n;
        for (let i = 0; i < bytes; i++)
            num |= BigInt(r.byte()) << (8n * BigInt(i));
        if (num < start)
            throw r.err(`Wrong CompactSize(${8 * bytes})`);
        return num;
    },
});
// Same thing, but in number instead of bigint. Checks for safe integer inside
const CompactSizeLen = apply(CompactSize, coders.number);
// Array of size <CompactSize>
const BTCArray = (t) => array(CompactSize, t);
// ui8a of size <CompactSize>
const VarBytes = bytes(CompactSize);
const RawInput = struct({
    txid: bytes(32, true),
    index: U32LE,
    finalScriptSig: VarBytes,
    sequence: U32LE, // ?
});
const RawOutput = struct({ amount: U64LE, script: VarBytes });
const EMPTY_OUTPUT = {
    amount: 0xffffffffffffffffn,
    script: EMPTY,
};
// SegWit v0 stack of witness buffers
const RawWitness = array(CompactSizeLen, VarBytes);
// https://en.bitcoin.it/wiki/Protocol_documentation#tx
const _RawTx = struct({
    version: I32LE,
    segwitFlag: flag(new Uint8Array([0x00, 0x01])),
    inputs: BTCArray(RawInput),
    outputs: BTCArray(RawOutput),
    witnesses: flagged('segwitFlag', array('inputs/length', RawWitness)),
    // < 500000000	Block number at which this transaction is unlocked
    // >= 500000000	UNIX timestamp at which this transaction is unlocked
    // Handled as part of PSBTv2
    lockTime: U32LE,
});
function validateRawTx(tx) {
    if (tx.segwitFlag && tx.witnesses && !tx.witnesses.length)
        throw new Error('Segwit flag with empty witnesses array');
    return tx;
}
const RawTx = validate(_RawTx, validateRawTx);
function PSBTKeyInfo(info) {
    const [type, kc, vc, reqInc, allowInc, silentIgnore] = info;
    return { type, kc, vc, reqInc, allowInc, silentIgnore };
}
const BIP32Der = struct({
    fingerprint: U32BE,
    path: array(null, U32LE),
});
// Complex structure for PSBT fields
// <control byte with leaf version and parity bit> <internal key p> <C> <E> <AB>
const _TaprootControlBlock = struct({
    version: U8,
    internalKey: bytes(32),
    merklePath: array(null, bytes(32)),
});
const TaprootControlBlock = validate(_TaprootControlBlock, (cb) => {
    if (cb.merklePath.length > 128)
        throw new Error('TaprootControlBlock: merklePath should be of length 0..128 (inclusive)');
    return cb;
});
const TaprootBIP32Der = struct({
    hashes: array(CompactSizeLen, bytes(32)),
    der: BIP32Der,
});
// The 78 byte serialized extended public key as defined by BIP 32.
const GlobalXPUB = bytes(78);
const tapScriptSigKey = struct({ pubKey: PubKeySchnorr, leafHash: bytes(32) });
// {<8-bit uint depth> <8-bit uint leaf version> <compact size uint scriptlen> <bytes script>}*
const tapTree = array(null, struct({
    depth: U8,
    version: U8,
    script: VarBytes,
}));
const BytesInf = bytes(null); // Bytes will conflict with Bytes type
const Bytes20 = bytes(20);
const Bytes32 = bytes(32);
// versionsRequiringExclusing = !versionsAllowsInclusion (as set)
// {name: [tag, keyCoder, valueCoder, versionsRequiringInclusion, versionsRequiringExclusing, versionsAllowsInclusion, silentIgnore]}
// SilentIgnore: we use some v2 fields for v1 representation too, so we just clean them before serialize
// Tables from BIP-0174 (https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki)
// prettier-ignore
const PSBTGlobal = {
    unsignedTx: [0x00, false, RawTx, [0], [0], false],
    xpub: [0x01, GlobalXPUB, BIP32Der, [], [0, 2], false],
    txVersion: [0x02, false, U32LE, [2], [2], false],
    fallbackLocktime: [0x03, false, U32LE, [], [2], false],
    inputCount: [0x04, false, CompactSizeLen, [2], [2], false],
    outputCount: [0x05, false, CompactSizeLen, [2], [2], false],
    txModifiable: [0x06, false, U8, [], [2], false],
    version: [0xfb, false, U32LE, [], [0, 2], false],
    propietary: [0xfc, BytesInf, BytesInf, [], [0, 2], false],
};
// prettier-ignore
const PSBTInput = {
    nonWitnessUtxo: [0x00, false, RawTx, [], [0, 2], false],
    witnessUtxo: [0x01, false, RawOutput, [], [0, 2], false],
    partialSig: [0x02, PubKeyECDSA, BytesInf, [], [0, 2], false],
    sighashType: [0x03, false, U32LE, [], [0, 2], false],
    redeemScript: [0x04, false, BytesInf, [], [0, 2], false],
    witnessScript: [0x05, false, BytesInf, [], [0, 2], false],
    bip32Derivation: [0x06, PubKeyECDSA, BIP32Der, [], [0, 2], false],
    finalScriptSig: [0x07, false, BytesInf, [], [0, 2], false],
    finalScriptWitness: [0x08, false, RawWitness, [], [0, 2], false],
    porCommitment: [0x09, false, BytesInf, [], [0, 2], false],
    ripemd160: [0x0a, Bytes20, BytesInf, [], [0, 2], false],
    sha256: [0x0b, Bytes32, BytesInf, [], [0, 2], false],
    hash160: [0x0c, Bytes20, BytesInf, [], [0, 2], false],
    hash256: [0x0d, Bytes32, BytesInf, [], [0, 2], false],
    txid: [0x0e, false, Bytes32, [2], [2], true],
    index: [0x0f, false, U32LE, [2], [2], true],
    sequence: [0x10, false, U32LE, [], [2], true],
    requiredTimeLocktime: [0x11, false, U32LE, [], [2], false],
    requiredHeightLocktime: [0x12, false, U32LE, [], [2], false],
    tapKeySig: [0x13, false, SignatureSchnorr, [], [0, 2], false],
    tapScriptSig: [0x14, tapScriptSigKey, SignatureSchnorr, [], [0, 2], false],
    tapLeafScript: [0x15, TaprootControlBlock, BytesInf, [], [0, 2], false],
    tapBip32Derivation: [0x16, Bytes32, TaprootBIP32Der, [], [0, 2], false],
    tapInternalKey: [0x17, false, PubKeySchnorr, [], [0, 2], false],
    tapMerkleRoot: [0x18, false, Bytes32, [], [0, 2], false],
    propietary: [0xfc, BytesInf, BytesInf, [], [0, 2], false],
};
// All other keys removed when finalizing
const PSBTInputFinalKeys = [
    'txid',
    'sequence',
    'index',
    'witnessUtxo',
    'nonWitnessUtxo',
    'finalScriptSig',
    'finalScriptWitness',
    'unknown',
];
// Can be modified even on signed input
const PSBTInputUnsignedKeys = [
    'partialSig',
    'finalScriptSig',
    'finalScriptWitness',
    'tapKeySig',
    'tapScriptSig',
];
// prettier-ignore
const PSBTOutput = {
    redeemScript: [0x00, false, BytesInf, [], [0, 2], false],
    witnessScript: [0x01, false, BytesInf, [], [0, 2], false],
    bip32Derivation: [0x02, PubKeyECDSA, BIP32Der, [], [0, 2], false],
    amount: [0x03, false, I64LE, [2], [2], true],
    script: [0x04, false, BytesInf, [2], [2], true],
    tapInternalKey: [0x05, false, PubKeySchnorr, [], [0, 2], false],
    tapTree: [0x06, false, tapTree, [], [0, 2], false],
    tapBip32Derivation: [0x07, PubKeySchnorr, TaprootBIP32Der, [], [0, 2], false],
    propietary: [0xfc, BytesInf, BytesInf, [], [0, 2], false],
};
// Can be modified even on signed input
const PSBTOutputUnsignedKeys = [];
const PSBTKeyPair = array(NULL, struct({
    //  <key> := <keylen> <keytype> <keydata> WHERE keylen = len(keytype)+len(keydata)
    key: prefix(CompactSizeLen, struct({ type: CompactSizeLen, key: bytes(null) })),
    //  <value> := <valuelen> <valuedata>
    value: bytes(CompactSizeLen),
}));
struct({ type: CompactSizeLen, key: bytes(null) });
// Key cannot be 'unknown', value coder cannot be array for elements with empty key
function PSBTKeyMap(psbtEnum) {
    // -> Record<type, [keyName, ...coders]>
    const byType = {};
    for (const k in psbtEnum) {
        const [num, kc, vc] = psbtEnum[k];
        byType[num] = [k, kc, vc];
    }
    return wrap({
        encodeStream: (w, value) => {
            let out = [];
            // Because we use order of psbtEnum, keymap is sorted here
            for (const name in psbtEnum) {
                const val = value[name];
                if (val === undefined)
                    continue;
                const [type, kc, vc] = psbtEnum[name];
                if (!kc)
                    out.push({ key: { type, key: EMPTY }, value: vc.encode(val) });
                else {
                    // Low level interface, returns keys as is (with duplicates). Useful for debug
                    const kv = val.map(([k, v]) => [
                        kc.encode(k),
                        vc.encode(v),
                    ]);
                    // sort by keys
                    kv.sort((a, b) => _cmpBytes(a[0], b[0]));
                    for (const [key, value] of kv)
                        out.push({ key: { key, type }, value });
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
                let name = 'unknown';
                let key = elm.key.key;
                let value = elm.value;
                if (byType[elm.key.type]) {
                    const [_name, kc, vc] = byType[elm.key.type];
                    name = _name;
                    if (!kc && key.length) {
                        throw new Error(`PSBT: Non-empty key for ${name} (key=${hex$1.encode(key)} value=${hex$1.encode(value)}`);
                    }
                    key = kc ? kc.decode(key) : undefined;
                    value = vc.decode(value);
                    if (!kc) {
                        if (out[name])
                            throw new Error(`PSBT: Same keys: ${name} (key=${key} value=${value})`);
                        out[name] = value;
                        noKey[name] = true;
                        continue;
                    }
                }
                else {
                    // For unknown: add key type inside key
                    key = { type: elm.key.type, key: elm.key.key };
                }
                // Only keyed elements at this point
                if (noKey[name])
                    throw new Error(`PSBT: Key type with empty key and no key=${name} val=${value}`);
                if (!out[name])
                    out[name] = [];
                out[name].push([key, value]);
            }
            return out;
        },
    });
}
// Basic sanity check for scripts
function checkWSH(s, witnessScript) {
    if (!equalBytes(s.hash, sha256(witnessScript)))
        throw new Error('checkScript: wsh wrong witnessScript hash');
    const w = OutScript.decode(witnessScript);
    if (w.type === 'tr' || w.type === 'tr_ns' || w.type === 'tr_ms')
        throw new Error(`checkScript: P2${w.type} cannot be wrapped in P2SH`);
    if (w.type === 'wpkh' || w.type === 'sh')
        throw new Error(`checkScript: P2${w.type} cannot be wrapped in P2WSH`);
}
function checkScript(script, redeemScript, witnessScript) {
    if (script) {
        const s = OutScript.decode(script);
        // ms||pk maybe work, but there will be no address, hard to spend
        if (s.type === 'tr_ns' || s.type === 'tr_ms' || s.type === 'ms' || s.type == 'pk')
            throw new Error(`checkScript: non-wrapped ${s.type}`);
        if (s.type === 'sh' && redeemScript) {
            if (!equalBytes(s.hash, hash160(redeemScript)))
                throw new Error('checkScript: sh wrong redeemScript hash');
            const r = OutScript.decode(redeemScript);
            if (r.type === 'tr' || r.type === 'tr_ns' || r.type === 'tr_ms')
                throw new Error(`checkScript: P2${r.type} cannot be wrapped in P2SH`);
            // Not sure if this unspendable, but we cannot represent this via PSBT
            if (r.type === 'sh')
                throw new Error('checkScript: P2SH cannot be wrapped in P2SH');
        }
        if (s.type === 'wsh' && witnessScript)
            checkWSH(s, witnessScript);
    }
    if (redeemScript) {
        const r = OutScript.decode(redeemScript);
        if (r.type === 'wsh' && witnessScript)
            checkWSH(r, witnessScript);
    }
}
const PSBTInputCoder = validate(PSBTKeyMap(PSBTInput), (i) => {
    if (i.finalScriptWitness && !i.finalScriptWitness.length)
        throw new Error('validateInput: wmpty finalScriptWitness');
    //if (i.finalScriptSig && !i.finalScriptSig.length) throw new Error('validateInput: empty finalScriptSig');
    if (i.partialSig && !i.partialSig.length)
        throw new Error('Empty partialSig');
    if (i.partialSig)
        for (const [k, v] of i.partialSig)
            validatePubkey(k, PubT.ecdsa);
    if (i.bip32Derivation)
        for (const [k, v] of i.bip32Derivation)
            validatePubkey(k, PubT.ecdsa);
    // Locktime = unsigned little endian integer greater than or equal to 500000000 representing
    if (i.requiredTimeLocktime !== undefined && i.requiredTimeLocktime < 500000000)
        throw new Error(`validateInput: wrong timeLocktime=${i.requiredTimeLocktime}`);
    // unsigned little endian integer greater than 0 and less than 500000000
    if (i.requiredHeightLocktime !== undefined &&
        (i.requiredHeightLocktime <= 0 || i.requiredHeightLocktime >= 500000000))
        throw new Error(`validateInput: wrong heighLocktime=${i.requiredHeightLocktime}`);
    if (i.nonWitnessUtxo && i.index !== undefined) {
        const last = i.nonWitnessUtxo.outputs.length - 1;
        if (i.index > last)
            throw new Error(`validateInput: index(${i.index}) not in nonWitnessUtxo`);
        const prevOut = i.nonWitnessUtxo.outputs[i.index];
        if (i.witnessUtxo &&
            (!equalBytes(i.witnessUtxo.script, prevOut.script) ||
                i.witnessUtxo.amount !== prevOut.amount))
            throw new Error('validateInput: witnessUtxo different from nonWitnessUtxo');
    }
    if (i.tapLeafScript) {
        // tap leaf version appears here twice: in control block and at the end of script
        for (const [k, v] of i.tapLeafScript) {
            if ((k.version & 254) !== v[v.length - 1])
                throw new Error('validateInput: tapLeafScript version mimatch');
            if (v[v.length - 1] & 1)
                throw new Error('validateInput: tapLeafScript version has parity bit!');
        }
    }
    // Validate txid for nonWitnessUtxo is correct
    if (i.nonWitnessUtxo && i.index && i.txid) {
        const outputs = i.nonWitnessUtxo.outputs;
        if (outputs.length - 1 < i.index)
            throw new Error('nonWitnessUtxo: incorect output index');
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
            throw new Error('PSBTv0: missing unsignedTx');
        if (g.unsignedTx.segwitFlag || g.unsignedTx.witnesses)
            throw new Error('PSBTv0: witness in unsingedTx');
        for (const inp of g.unsignedTx.inputs)
            if (inp.finalScriptSig && inp.finalScriptSig.length)
                throw new Error('PSBTv0: input scriptSig found in unsignedTx');
    }
    return g;
});
const _RawPSBTV0 = struct({
    magic: magic(string(new Uint8Array([0xff])), 'psbt'),
    global: PSBTGlobalCoder,
    inputs: array('global/unsignedTx/inputs/length', PSBTInputCoder),
    outputs: array(null, PSBTOutputCoder),
});
const _RawPSBTV2 = struct({
    magic: magic(string(new Uint8Array([0xff])), 'psbt'),
    global: PSBTGlobalCoder,
    inputs: array('global/inputCount', PSBTInputCoder),
    outputs: array('global/outputCount', PSBTOutputCoder),
});
struct({
    magic: magic(string(new Uint8Array([0xff])), 'psbt'),
    items: array(null, apply(array(NULL, tuple([hex(CompactSizeLen), bytes(CompactSize)])), coders.dict())),
});
function validatePSBTFields(version, info, lst) {
    for (const k in lst) {
        if (k === 'unknown')
            continue;
        if (!info[k])
            continue;
        const { allowInc } = PSBTKeyInfo(info[k]);
        if (!allowInc.includes(version))
            throw new Error(`PSBTv${version}: field ${k} is not allowed`);
    }
    for (const k in info) {
        const { reqInc } = PSBTKeyInfo(info[k]);
        if (reqInc.includes(version) && lst[k] === undefined)
            throw new Error(`PSBTv${version}: missing required field ${k}`);
    }
}
function cleanPSBTFields(version, info, lst) {
    const out = {};
    for (const _k in lst) {
        const k = _k;
        if (k !== 'unknown') {
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
    const version = (tx && tx.global && tx.global.version) || 0;
    validatePSBTFields(version, PSBTGlobal, tx.global);
    for (const i of tx.inputs)
        validatePSBTFields(version, PSBTInput, i);
    for (const o of tx.outputs)
        validatePSBTFields(version, PSBTOutput, o);
    // We allow only one empty element at the end of map (compat with bitcoinjs-lib bug)
    const inputCount = !version ? tx.global.unsignedTx.inputs.length : tx.global.inputCount;
    if (tx.inputs.length < inputCount)
        throw new Error('Not enough inputs');
    const inputsLeft = tx.inputs.slice(inputCount);
    if (inputsLeft.length > 1 || (inputsLeft.length && Object.keys(inputsLeft[0]).length))
        throw new Error(`Unexpected inputs left in tx=${inputsLeft}`);
    // Same for inputs
    const outputCount = !version ? tx.global.unsignedTx.outputs.length : tx.global.outputCount;
    if (tx.outputs.length < outputCount)
        throw new Error('Not outputs inputs');
    const outputsLeft = tx.outputs.slice(outputCount);
    if (outputsLeft.length > 1 || (outputsLeft.length && Object.keys(outputsLeft[0]).length))
        throw new Error(`Unexpected outputs left in tx=${outputsLeft}`);
    return tx;
}
function mergeKeyMap(psbtEnum, val, cur, allowedFields) {
    const res = { ...cur, ...val };
    // All arguments can be provided as hex
    for (const k in psbtEnum) {
        const key = k;
        const [_, kC, vC] = psbtEnum[key];
        const cannotChange = allowedFields && !allowedFields.includes(k);
        if (val[k] === undefined && k in val) {
            if (cannotChange)
                throw new Error(`Cannot remove signed field=${k}`);
            delete res[k];
        }
        else if (kC) {
            const oldKV = (cur && cur[k] ? cur[k] : []);
            let newKV = val[key];
            if (newKV) {
                if (!Array.isArray(newKV))
                    throw new Error(`keyMap(${k}): KV pairs should be [k, v][]`);
                // Decode hex in k-v
                newKV = newKV.map((val) => {
                    if (val.length !== 2)
                        throw new Error(`keyMap(${k}): KV pairs should be [k, v][]`);
                    return [
                        typeof val[0] === 'string' ? kC.decode(hex$1.decode(val[0])) : val[0],
                        typeof val[1] === 'string' ? vC.decode(hex$1.decode(val[1])) : val[1],
                    ];
                });
                const map = {};
                const add = (kStr, k, v) => {
                    if (map[kStr] === undefined) {
                        map[kStr] = [k, v];
                        return;
                    }
                    const oldVal = hex$1.encode(vC.encode(map[kStr][1]));
                    const newVal = hex$1.encode(vC.encode(v));
                    if (oldVal !== newVal)
                        throw new Error(`keyMap(${key}): same key=${kStr} oldVal=${oldVal} newVal=${newVal}`);
                };
                for (const [k, v] of oldKV) {
                    const kStr = hex$1.encode(kC.encode(k));
                    add(kStr, k, v);
                }
                for (const [k, v] of newKV) {
                    const kStr = hex$1.encode(kC.encode(k));
                    // undefined removes previous value
                    if (v === undefined) {
                        if (cannotChange)
                            throw new Error(`Cannot remove signed field=${key}/${k}`);
                        delete map[kStr];
                    }
                    else
                        add(kStr, k, v);
                }
                res[key] = Object.values(map);
            }
        }
        else if (typeof res[k] === 'string') {
            res[k] = vC.decode(hex$1.decode(res[k]));
        }
        else if (cannotChange && k in val && cur && cur[k] !== undefined) {
            if (!equalBytes(vC.encode(val[k]), vC.encode(cur[k])))
                throw new Error(`Cannot change signed field=${k}`);
        }
    }
    // Remove unknown keys
    for (const k in res)
        if (!psbtEnum[k])
            delete res[k];
    return res;
}
const RawPSBTV0 = validate(_RawPSBTV0, validatePSBT);
const RawPSBTV2 = validate(_RawPSBTV2, validatePSBT);
// (TxHash, Idx)
const TxHashIdx = struct({ txid: bytes(32, true), index: U32LE });
const OutPK = {
    encode(from) {
        if (from.length !== 2 ||
            !isBytes$1(from[0]) ||
            !isValidPubkey(from[0], PubT.ecdsa) ||
            from[1] !== 'CHECKSIG')
            return;
        return { type: 'pk', pubkey: from[0] };
    },
    decode: (to) => (to.type === 'pk' ? [to.pubkey, 'CHECKSIG'] : undefined),
};
const OutPKH = {
    encode(from) {
        if (from.length !== 5 || from[0] !== 'DUP' || from[1] !== 'HASH160' || !isBytes(from[2]))
            return;
        if (from[3] !== 'EQUALVERIFY' || from[4] !== 'CHECKSIG')
            return;
        return { type: 'pkh', hash: from[2] };
    },
    decode: (to) => to.type === 'pkh' ? ['DUP', 'HASH160', to.hash, 'EQUALVERIFY', 'CHECKSIG'] : undefined,
};
const OutSH = {
    encode(from) {
        if (from.length !== 3 || from[0] !== 'HASH160' || !isBytes(from[1]) || from[2] !== 'EQUAL')
            return;
        return { type: 'sh', hash: from[1] };
    },
    decode: (to) => to.type === 'sh' ? ['HASH160', to.hash, 'EQUAL'] : undefined,
};
const OutWSH = {
    encode(from) {
        if (from.length !== 2 || from[0] !== 0 || !isBytes(from[1]))
            return;
        if (from[1].length !== 32)
            return;
        return { type: 'wsh', hash: from[1] };
    },
    decode: (to) => (to.type === 'wsh' ? [0, to.hash] : undefined),
};
const OutWPKH = {
    encode(from) {
        if (from.length !== 2 || from[0] !== 0 || !isBytes(from[1]))
            return;
        if (from[1].length !== 20)
            return;
        return { type: 'wpkh', hash: from[1] };
    },
    decode: (to) => (to.type === 'wpkh' ? [0, to.hash] : undefined),
};
const p2wpkh = (publicKey, network = NETWORK) => {
    if (!isValidPubkey(publicKey, PubT.ecdsa))
        throw new Error('P2WPKH: invalid publicKey');
    if (publicKey.length === 65)
        throw new Error('P2WPKH: uncompressed public key');
    const hash = hash160(publicKey);
    return {
        type: 'wpkh',
        script: OutScript.encode({ type: 'wpkh', hash }),
        address: Address(network).encode({ type: 'wpkh', hash }),
    };
};
const OutMS = {
    encode(from) {
        const last = from.length - 1;
        if (from[last] !== 'CHECKMULTISIG')
            return;
        const m = from[0];
        const n = from[last - 1];
        if (typeof m !== 'number' || typeof n !== 'number')
            return;
        const pubkeys = from.slice(1, -2);
        if (n !== pubkeys.length)
            return;
        for (const pub of pubkeys)
            if (!isBytes(pub))
                return;
        return { type: 'ms', m, pubkeys: pubkeys }; // we don't need n, since it is the same as pubkeys
    },
    // checkmultisig(n, ..pubkeys, m)
    decode: (to) => to.type === 'ms' ? [to.m, ...to.pubkeys, to.pubkeys.length, 'CHECKMULTISIG'] : undefined,
};
const OutTR = {
    encode(from) {
        if (from.length !== 2 || from[0] !== 1 || !isBytes(from[1]))
            return;
        return { type: 'tr', pubkey: from[1] };
    },
    decode: (to) => (to.type === 'tr' ? [1, to.pubkey] : undefined),
};
// Another stupid decision, where lack of standard affects security.
// Multisig needs to be generated with some key.
// We are using approach from BIP 341/bitcoinjs-lib: SHA256(uncompressedDER(SECP256K1_GENERATOR_POINT))
// It is possible to switch SECP256K1_GENERATOR_POINT with some random point;
// but it's too complex to prove.
// Also used by bitcoin-core and bitcoinjs-lib
sha256(ProjPoint.BASE.toRawBytes(false));
const OutTRNS = {
    encode(from) {
        const last = from.length - 1;
        if (from[last] !== 'CHECKSIG')
            return;
        const pubkeys = [];
        // On error return, since it can be different script
        for (let i = 0; i < last; i++) {
            const elm = from[i];
            if (i & 1) {
                if (elm !== 'CHECKSIGVERIFY' || i === last - 1)
                    return;
                continue;
            }
            if (!isBytes(elm))
                return;
            pubkeys.push(elm);
        }
        return { type: 'tr_ns', pubkeys };
    },
    decode: (to) => {
        if (to.type !== 'tr_ns')
            return;
        const out = [];
        for (let i = 0; i < to.pubkeys.length - 1; i++)
            out.push(to.pubkeys[i], 'CHECKSIGVERIFY');
        out.push(to.pubkeys[to.pubkeys.length - 1], 'CHECKSIG');
        return out;
    },
};
const OutTRMS = {
    encode(from) {
        const last = from.length - 1;
        if (from[last] !== 'NUMEQUAL' || from[1] !== 'CHECKSIG')
            return;
        const pubkeys = [];
        const m = OpToNum(from[last - 1]);
        if (typeof m !== 'number')
            return;
        for (let i = 0; i < last - 1; i++) {
            const elm = from[i];
            if (i & 1) {
                if (elm !== (i === 1 ? 'CHECKSIG' : 'CHECKSIGADD'))
                    throw new Error('OutScript.encode/tr_ms: wrong element');
                continue;
            }
            if (!isBytes(elm))
                throw new Error('OutScript.encode/tr_ms: wrong key element');
            pubkeys.push(elm);
        }
        return { type: 'tr_ms', pubkeys, m };
    },
    decode: (to) => {
        if (to.type !== 'tr_ms')
            return;
        const out = [to.pubkeys[0], 'CHECKSIG'];
        for (let i = 1; i < to.pubkeys.length; i++)
            out.push(to.pubkeys[i], 'CHECKSIGADD');
        out.push(to.m, 'NUMEQUAL');
        return out;
    },
};
const OutUnknown = {
    encode(from) {
        return { type: 'unknown', script: Script.encode(from) };
    },
    decode: (to) => to.type === 'unknown' ? Script.decode(to.script) : undefined,
};
// /Payments
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
    OutUnknown,
];
// TODO: we can support user supplied output scripts now
// - addOutScript
// - removeOutScript
// - We can do that as log we modify array in-place
// - Actually is very hard, since there is sign/finalize logic
const _OutScript = apply(Script, coders.match(OutScripts));
// We can validate this once, because of packed & coders
const OutScript = validate(_OutScript, (i) => {
    if (i.type === 'pk' && !isValidPubkey(i.pubkey, PubT.ecdsa))
        throw new Error('OutScript/pk: wrong key');
    if ((i.type === 'pkh' || i.type === 'sh' || i.type === 'wpkh') &&
        (!isBytes(i.hash) || i.hash.length !== 20))
        throw new Error(`OutScript/${i.type}: wrong hash`);
    if (i.type === 'wsh' && (!isBytes(i.hash) || i.hash.length !== 32))
        throw new Error(`OutScript/wsh: wrong hash`);
    if (i.type === 'tr' && (!isBytes(i.pubkey) || !isValidPubkey(i.pubkey, PubT.schnorr)))
        throw new Error('OutScript/tr: wrong taproot public key');
    if (i.type === 'ms' || i.type === 'tr_ns' || i.type === 'tr_ms')
        if (!Array.isArray(i.pubkeys))
            throw new Error('OutScript/multisig: wrong pubkeys array');
    if (i.type === 'ms') {
        const n = i.pubkeys.length;
        for (const p of i.pubkeys)
            if (!isValidPubkey(p, PubT.ecdsa))
                throw new Error('OutScript/multisig: wrong pubkey');
        if (i.m <= 0 || n > 16 || i.m > n)
            throw new Error('OutScript/multisig: invalid params');
    }
    if (i.type === 'tr_ns' || i.type === 'tr_ms') {
        for (const p of i.pubkeys)
            if (!isValidPubkey(p, PubT.schnorr))
                throw new Error(`OutScript/${i.type}: wrong pubkey`);
    }
    if (i.type === 'tr_ms') {
        const n = i.pubkeys.length;
        if (i.m <= 0 || n > 999 || i.m > n)
            throw new Error('OutScript/tr_ms: invalid params');
    }
    return i;
});
// Address
function validateWitness(version, data) {
    if (data.length < 2 || data.length > 40)
        throw new Error('Witness: invalid length');
    if (version > 16)
        throw new Error('Witness: invalid version');
    if (version === 0 && !(data.length === 20 || data.length === 32))
        throw new Error('Witness: invalid length for version');
}
function programToWitness(version, data, network = NETWORK) {
    validateWitness(version, data);
    const coder = version === 0 ? bech32 : bech32m;
    return coder.encode(network.bech32, [version].concat(coder.toWords(data)));
}
function formatKey(hashed, prefix) {
    return base58check.encode(concat(Uint8Array.from(prefix), hashed));
}
// Returns OutType, which can be used to create outscript
function Address(network = NETWORK) {
    return {
        encode(from) {
            const { type } = from;
            if (type === 'wpkh')
                return programToWitness(0, from.hash, network);
            else if (type === 'wsh')
                return programToWitness(0, from.hash, network);
            else if (type === 'tr')
                return programToWitness(1, from.pubkey, network);
            else if (type === 'pkh')
                return formatKey(from.hash, [network.pubKeyHash]);
            else if (type === 'sh')
                return formatKey(from.hash, [network.scriptHash]);
            throw new Error(`Unknown address type=${type}`);
        },
        decode(address) {
            if (address.length < 14 || address.length > 74)
                throw new Error('Invalid address length');
            // Bech32
            if (network.bech32 && address.toLowerCase().startsWith(network.bech32)) {
                let res;
                try {
                    res = bech32.decode(address);
                    if (res.words[0] !== 0)
                        throw new Error(`bech32: wrong version=${res.words[0]}`);
                }
                catch (_) {
                    // Starting from version 1 it is decoded as bech32m
                    res = bech32m.decode(address);
                    if (res.words[0] === 0)
                        throw new Error(`bech32m: wrong version=${res.words[0]}`);
                }
                if (res.prefix !== network.bech32)
                    throw new Error(`wrong bech32 prefix=${res.prefix}`);
                const [version, ...program] = res.words;
                const data = bech32.fromWords(program);
                validateWitness(version, data);
                if (version === 0 && data.length === 32)
                    return { type: 'wsh', hash: data };
                else if (version === 0 && data.length === 20)
                    return { type: 'wpkh', hash: data };
                else if (version === 1 && data.length === 32)
                    return { type: 'tr', pubkey: data };
                else
                    throw new Error('Unkown witness program');
            }
            const data = base58.decode(address);
            if (data.length !== 25)
                throw new Error('Invalid base58 address');
            // Pay To Public Key Hash
            if (data[0] === network.pubKeyHash) {
                const bytes = base58.decode(address);
                return { type: 'pkh', hash: bytes.slice(1, bytes.length - 4) };
            }
            else if (data[0] === network.scriptHash) {
                const bytes = base58.decode(address);
                return {
                    type: 'sh',
                    hash: base58.decode(address).slice(1, bytes.length - 4),
                };
            }
            throw new Error(`Invalid address prefix=${data[0]}`);
        },
    };
}
// /Address
var SignatureHash;
(function (SignatureHash) {
    SignatureHash[SignatureHash["DEFAULT"] = 0] = "DEFAULT";
    SignatureHash[SignatureHash["ALL"] = 1] = "ALL";
    SignatureHash[SignatureHash["NONE"] = 2] = "NONE";
    SignatureHash[SignatureHash["SINGLE"] = 3] = "SINGLE";
    SignatureHash[SignatureHash["ANYONECANPAY"] = 128] = "ANYONECANPAY";
})(SignatureHash || (SignatureHash = {}));
apply(U32LE, coders.tsEnum(SignatureHash));
function unpackSighash(hashType) {
    const masked = hashType & 0b0011111;
    return {
        isAny: !!(hashType & SignatureHash.ANYONECANPAY),
        isNone: masked === SignatureHash.NONE,
        isSingle: masked === SignatureHash.SINGLE,
    };
}
// Force check index/txid/sequence
function inputBeforeSign(i) {
    if (i.txid === undefined || i.index === undefined)
        throw new Error('Transaction/input: txid and index required');
    return {
        txid: i.txid,
        index: i.index,
        sequence: def(i.sequence, DEFAULT_SEQUENCE),
        finalScriptSig: def(i.finalScriptSig, EMPTY),
    };
}
function cleanFinalInput(i) {
    for (const _k in i) {
        const k = _k;
        if (!PSBTInputFinalKeys.includes(k))
            delete i[k];
    }
}
// Force check amount/script
function outputBeforeSign(i) {
    if (i.script === undefined || i.amount === undefined)
        throw new Error('Transaction/output: script and amount required');
    return { script: i.script, amount: i.amount };
}
const TAP_LEAF_VERSION = 0xc0;
const tapLeafHash = (script, version = TAP_LEAF_VERSION) => schnorr.utils.taggedHash('TapLeaf', new Uint8Array([version]), VarBytes.encode(script));
function getTaprootKeys(privKey, pubKey, internalKey, merkleRoot = EMPTY) {
    if (equalBytes(internalKey, pubKey)) {
        privKey = taprootTweakPrivKey(privKey, merkleRoot);
        pubKey = schnorr.getPublicKey(privKey);
    }
    return { privKey, pubKey };
}
// Check if object doens't have custom constructor (like Uint8Array/Array)
const isPlainObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]' && obj.constructor === Object;
function validateOpts(opts) {
    if (!isPlainObject(opts))
        throw new Error(`Wrong object type for transaction options: ${opts}`);
    const _opts = {
        ...opts,
        version: def(opts.version, DEFAULT_VERSION),
        lockTime: def(opts.lockTime, 0),
        PSBTVersion: def(opts.PSBTVersion, 0),
    }; // Defaults
    // 0 and -1 happens in tests
    if (![-1, 0, 1, 2].includes(_opts.version))
        throw new Error(`Unknown version: ${_opts.version}`);
    if (typeof _opts.lockTime !== 'number')
        throw new Error('Transaction lock time should be number');
    U32LE.encode(_opts.lockTime); // Additional range checks that lockTime
    // There is no PSBT v1, and any new version will probably have fields which we don't know how to parse, which
    // can lead to constructing broken transactions
    if (_opts.PSBTVersion !== 0 && _opts.PSBTVersion !== 2)
        throw new Error(`Unknown PSBT version ${_opts.PSBTVersion}`);
    // Flags
    for (const k of [
        'allowUnknowOutput',
        'allowUnknowInput',
        'disableScriptCheck',
        'bip174jsCompat',
        'allowLegacyWitnessUtxo',
        'lowR',
    ]) {
        const v = _opts[k];
        if (v === undefined)
            continue; // optional
        if (typeof v !== 'boolean')
            throw new Error(`Transation options wrong type: ${k}=${v} (${typeof v})`);
    }
    return Object.freeze(_opts);
}
class Transaction {
    constructor(opts = {}) {
        this.global = {};
        this.inputs = [];
        this.outputs = [];
        const _opts = (this.opts = validateOpts(opts));
        // Merge with global structure of PSBTv2
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
        }
        catch (e0) {
            try {
                parsed = RawPSBTV2.decode(psbt);
            }
            catch (e2) {
                // Throw error for v0 parsing, since it popular, otherwise it would be shadowed by v2 error
                throw e0;
            }
        }
        const PSBTVersion = parsed.global.version || 0;
        if (PSBTVersion !== 0 && PSBTVersion !== 2)
            throw new Error(`Wrong PSBT version=${PSBTVersion}`);
        const unsigned = parsed.global.unsignedTx;
        const version = PSBTVersion === 0 ? unsigned?.version : parsed.global.txVersion;
        const lockTime = PSBTVersion === 0 ? unsigned?.lockTime : parsed.global.fallbackLocktime;
        const tx = new Transaction({ ...opts, version, lockTime, PSBTVersion });
        // We need slice here, because otherwise
        const inputCount = PSBTVersion === 0 ? unsigned?.inputs.length : parsed.global.inputCount;
        tx.inputs = parsed.inputs.slice(0, inputCount).map((i, j) => ({
            finalScriptSig: EMPTY,
            ...parsed.global.unsignedTx?.inputs[j],
            ...i,
        }));
        const outputCount = PSBTVersion === 0 ? unsigned?.outputs.length : parsed.global.outputCount;
        tx.outputs = parsed.outputs.slice(0, outputCount).map((i, j) => ({
            ...i,
            ...parsed.global.unsignedTx?.outputs[j],
        }));
        tx.global = { ...parsed.global, txVersion: version }; // just in case propietary/unknown fields
        if (lockTime !== DEFAULT_LOCKTIME)
            tx.global.fallbackLocktime = lockTime;
        return tx;
    }
    toPSBT(PSBTVersion = this.opts.PSBTVersion) {
        if (PSBTVersion !== 0 && PSBTVersion !== 2)
            throw new Error(`Wrong PSBT version=${PSBTVersion}`);
        const inputs = this.inputs.map((i) => cleanPSBTFields(PSBTVersion, PSBTInput, i));
        for (const inp of inputs) {
            // Don't serialize empty fields
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
        }
        else {
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
            outputs,
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
        // Should be not possible
        if (this.global.txVersion === undefined)
            throw new Error('No global.txVersion');
        return this.global.txVersion;
    }
    inputStatus(idx) {
        this.checkInputIdx(idx);
        const input = this.inputs[idx];
        // Finalized
        if (input.finalScriptSig && input.finalScriptSig.length)
            return 'finalized';
        if (input.finalScriptWitness && input.finalScriptWitness.length)
            return 'finalized';
        // Signed taproot
        if (input.tapKeySig)
            return 'signed';
        if (input.tapScriptSig && input.tapScriptSig.length)
            return 'signed';
        // Signed
        if (input.partialSig && input.partialSig.length)
            return 'signed';
        return 'unsigned';
    }
    // Cannot replace unpackSighash, tests rely on very generic implemenetation with signing inputs outside of range
    // We will lose some vectors -> smaller test coverage of preimages (very important!)
    inputSighash(idx) {
        this.checkInputIdx(idx);
        const sighash = this.inputType(this.inputs[idx]).sighash;
        // ALL or DEFAULT -- everything signed
        // NONE           -- all inputs + no outputs
        // SINGLE         -- all inputs + output with same index
        // ALL + ANYONE   -- specific input + all outputs
        // NONE + ANYONE  -- specific input + no outputs
        // SINGLE         -- specific inputs + output with same index
        const sigOutputs = sighash === SignatureHash.DEFAULT ? SignatureHash.ALL : sighash & 0b11;
        const sigInputs = sighash & SignatureHash.ANYONECANPAY;
        return { sigInputs, sigOutputs };
    }
    // Very nice for debug purposes, but slow. If there is too much inputs/outputs to add, will be quadratic.
    // Some cache will be nice, but there chance to have bugs with cache invalidation
    signStatus() {
        // if addInput or addOutput is not possible, then all inputs or outputs are signed
        let addInput = true, addOutput = true;
        let inputs = [], outputs = [];
        for (let idx = 0; idx < this.inputs.length; idx++) {
            const status = this.inputStatus(idx);
            // Unsigned input doesn't affect anything
            if (status === 'unsigned')
                continue;
            const { sigInputs, sigOutputs } = this.inputSighash(idx);
            // Input type
            if (sigInputs === SignatureHash.ANYONECANPAY)
                inputs.push(idx);
            else
                addInput = false;
            // Output type
            if (sigOutputs === SignatureHash.ALL)
                addOutput = false;
            else if (sigOutputs === SignatureHash.SINGLE)
                outputs.push(idx);
            else if (sigOutputs === SignatureHash.NONE) ;
            else
                throw new Error(`Wrong signature hash output type: ${sigOutputs}`);
        }
        return { addInput, addOutput, inputs, outputs };
    }
    get isFinal() {
        for (let idx = 0; idx < this.inputs.length; idx++)
            if (this.inputStatus(idx) !== 'finalized')
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
            throw new Error('Transaction is not finalized');
        // TODO: Can we find out how much witnesses/script will be used before signing?
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
                finalScriptSig: (withScriptSig && i.finalScriptSig) || EMPTY,
            })),
            outputs: this.outputs.map(outputBeforeSign),
            witnesses: this.inputs.map((i) => i.finalScriptWitness || []),
            segwitFlag: withWitness && this.hasWitnesses,
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
            throw new Error('Transaction is not finalized');
        return hex$1.encode(sha256x2(this.toBytes(true)));
    }
    get id() {
        if (!this.isFinal)
            throw new Error('Transaction is not finalized');
        return hex$1.encode(sha256x2(this.toBytes(true)).reverse());
    }
    // Input stuff
    checkInputIdx(idx) {
        if (!Number.isSafeInteger(idx) || 0 > idx || idx >= this.inputs.length)
            throw new Error(`Wrong input index=${idx}`);
    }
    // Modification
    normalizeInput(i, cur, allowedFields) {
        let { nonWitnessUtxo, txid } = i;
        // String support for common fields. We usually prefer Uint8Array to avoid errors (like hex looking string accidentally passed),
        // however in case of nonWitnessUtxo it is better to expect string, since constructing this complex object will be difficult for user
        if (typeof nonWitnessUtxo === 'string')
            nonWitnessUtxo = hex$1.decode(nonWitnessUtxo);
        if (isBytes(nonWitnessUtxo))
            nonWitnessUtxo = RawTx.decode(nonWitnessUtxo);
        if (nonWitnessUtxo === undefined)
            nonWitnessUtxo = cur?.nonWitnessUtxo;
        if (typeof txid === 'string')
            txid = hex$1.decode(txid);
        if (txid === undefined)
            txid = cur?.txid;
        let res = { ...cur, ...i, nonWitnessUtxo, txid };
        if (res.nonWitnessUtxo === undefined)
            delete res.nonWitnessUtxo;
        if (res.sequence === undefined)
            res.sequence = DEFAULT_SEQUENCE;
        if (res.tapMerkleRoot === null)
            delete res.tapMerkleRoot;
        res = mergeKeyMap(PSBTInput, res, cur, allowedFields);
        PSBTInputCoder.encode(res); // Validates that everything is correct at this point
        let prevOut;
        if (res.nonWitnessUtxo && res.index !== undefined)
            prevOut = res.nonWitnessUtxo.outputs[res.index];
        else if (res.witnessUtxo)
            prevOut = res.witnessUtxo;
        if (prevOut && !this.opts.disableScriptCheck)
            checkScript(prevOut && prevOut.script, res.redeemScript, res.witnessScript);
        return res;
    }
    addInput(input, _ignoreSignStatus = false) {
        if (!_ignoreSignStatus && !this.signStatus().addInput)
            throw new Error('Tx has signed inputs, cannot add new one');
        this.inputs.push(this.normalizeInput(input));
        return this.inputs.length - 1;
    }
    updateInput(idx, input, _ignoreSignStatus = false) {
        this.checkInputIdx(idx);
        let allowedFields = undefined;
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
    normalizeOutput(o, cur, allowedFields) {
        let { amount, script } = o;
        if (amount === undefined)
            amount = cur?.amount;
        if (typeof amount !== 'bigint')
            throw new Error('amount must be bigint sats');
        if (typeof script === 'string')
            script = hex$1.decode(script);
        if (script === undefined)
            script = cur?.script;
        let res = { ...cur, ...o, amount, script };
        if (res.amount === undefined)
            delete res.amount;
        res = mergeKeyMap(PSBTOutput, res, cur, allowedFields);
        PSBTOutputCoder.encode(res);
        if (res.script &&
            !this.opts.allowUnknowOutput &&
            OutScript.decode(res.script).type === 'unknown') {
            throw new Error('Transaction/output: unknown output script type, there is a chance that input is unspendable. Pass allowUnkownScript=true, if you sure');
        }
        if (!this.opts.disableScriptCheck)
            checkScript(res.script, res.redeemScript, res.witnessScript);
        return res;
    }
    addOutput(o, _ignoreSignStatus = false) {
        if (!_ignoreSignStatus && !this.signStatus().addOutput)
            throw new Error('Tx has signed outputs, cannot add new one');
        this.outputs.push(this.normalizeOutput(o));
        return this.outputs.length - 1;
    }
    updateOutput(idx, output, _ignoreSignStatus = false) {
        this.checkOutputIdx(idx);
        let allowedFields = undefined;
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
                throw new Error('Empty input amount');
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
        if ((isSingle && idx >= this.outputs.length) || idx >= this.inputs.length)
            return U256BE.encode(1n);
        prevOutScript = Script.encode(Script.decode(prevOutScript).filter((i) => i !== 'CODESEPARATOR'));
        let inputs = this.inputs
            .map(inputBeforeSign)
            .map((input, inputIdx) => ({
            ...input,
            finalScriptSig: inputIdx === idx ? prevOutScript : EMPTY,
        }));
        if (isAny)
            inputs = [inputs[idx]];
        else if (isNone || isSingle) {
            inputs = inputs.map((input, inputIdx) => ({
                ...input,
                sequence: inputIdx === idx ? input.sequence : 0,
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
            outputs,
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
        }
        else if (isSingle && idx < outputs.length)
            outputHash = sha256x2(RawOutput.encode(outputs[idx]));
        const input = inputs[idx];
        return sha256x2(I32LE.encode(this.version), inputHash, sequenceHash, bytes(32, true).encode(input.txid), U32LE.encode(input.index), VarBytes.encode(prevOutScript), U64LE.encode(amount), U32LE.encode(input.sequence), outputHash, U32LE.encode(this.lockTime), U32LE.encode(hashType));
    }
    preimageWitnessV1(idx, prevOutScript, hashType, amount, codeSeparator = -1, leafScript, leafVer = 0xc0, annex) {
        if (!Array.isArray(amount) || this.inputs.length !== amount.length)
            throw new Error(`Invalid amounts array=${amount}`);
        if (!Array.isArray(prevOutScript) || this.inputs.length !== prevOutScript.length)
            throw new Error(`Invalid prevOutScript array=${prevOutScript}`);
        const out = [
            U8.encode(0),
            U8.encode(hashType),
            I32LE.encode(this.version),
            U32LE.encode(this.lockTime),
        ];
        const outType = hashType === SignatureHash.DEFAULT ? SignatureHash.ALL : hashType & 0b11;
        const inType = hashType & SignatureHash.ANYONECANPAY;
        const inputs = this.inputs.map(inputBeforeSign);
        const outputs = this.outputs.map(outputBeforeSign);
        if (inType !== SignatureHash.ANYONECANPAY) {
            out.push(...[
                inputs.map(TxHashIdx.encode),
                amount.map(U64LE.encode),
                prevOutScript.map(VarBytes.encode),
                inputs.map((i) => U32LE.encode(i.sequence)),
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
        }
        else
            out.push(U32LE.encode(idx));
        if (spendType & 1)
            out.push(sha256(VarBytes.encode(annex || EMPTY)));
        if (outType === SignatureHash.SINGLE)
            out.push(idx < outputs.length ? sha256(RawOutput.encode(outputs[idx])) : EMPTY32);
        if (leafScript)
            out.push(tapLeafHash(leafScript, leafVer), U8.encode(0), I32LE.encode(codeSeparator));
        return schnorr.utils.taggedHash('TapSighash', ...out);
    }
    // Utils for sign/finalize
    // Used pretty often, should be fast
    prevOut(input) {
        if (input.nonWitnessUtxo) {
            if (input.index === undefined)
                throw new Error('Uknown input index');
            return input.nonWitnessUtxo.outputs[input.index];
        }
        else if (input.witnessUtxo)
            return input.witnessUtxo;
        else
            throw new Error('Cannot find previous output info.');
    }
    inputType(input) {
        let txType = 'legacy';
        let defaultSighash = SignatureHash.ALL;
        const prevOut = this.prevOut(input);
        const first = OutScript.decode(prevOut.script);
        let type = first.type;
        let cur = first;
        const stack = [first];
        if (first.type === 'tr') {
            defaultSighash = SignatureHash.DEFAULT;
            return {
                txType: 'taproot',
                type: 'tr',
                last: first,
                lastScript: prevOut.script,
                defaultSighash,
                sighash: input.sighashType || defaultSighash,
            };
        }
        else {
            if (first.type === 'wpkh' || first.type === 'wsh')
                txType = 'segwit';
            if (first.type === 'sh') {
                if (!input.redeemScript)
                    throw new Error('inputType: sh without redeemScript');
                let child = OutScript.decode(input.redeemScript);
                if (child.type === 'wpkh' || child.type === 'wsh')
                    txType = 'segwit';
                stack.push(child);
                cur = child;
                type += `-${child.type}`;
            }
            // wsh can be inside sh
            if (cur.type === 'wsh') {
                if (!input.witnessScript)
                    throw new Error('inputType: wsh without witnessScript');
                let child = OutScript.decode(input.witnessScript);
                if (child.type === 'wsh')
                    txType = 'segwit';
                stack.push(child);
                cur = child;
                type += `-${child.type}`;
            }
            const last = stack[stack.length - 1];
            if (last.type === 'sh' || last.type === 'wsh')
                throw new Error('inputType: sh/wsh cannot be terminal type');
            const lastScript = OutScript.encode(last);
            const res = {
                type,
                txType,
                last,
                lastScript,
                defaultSighash,
                sighash: input.sighashType || defaultSighash,
            };
            if (txType === 'legacy' && !this.opts.allowLegacyWitnessUtxo && !input.nonWitnessUtxo) {
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
        // Handle BIP32 HDKey
        if (!isBytes(privateKey)) {
            if (!input.bip32Derivation || !input.bip32Derivation.length)
                throw new Error('bip32Derivation: empty');
            const signers = input.bip32Derivation
                .filter((i) => i[1].fingerprint == privateKey.fingerprint)
                .map(([pubKey, { path }]) => {
                let s = privateKey;
                for (const i of path)
                    s = s.deriveChild(i);
                if (!equalBytes(s.publicKey, pubKey))
                    throw new Error('bip32Derivation: wrong pubKey');
                if (!s.privateKey)
                    throw new Error('bip32Derivation: no privateKey');
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
        // Sighash checks
        // Just for compat with bitcoinjs-lib, so users won't face unexpected behaviour.
        if (!allowedSighash)
            allowedSighash = [inputType.defaultSighash];
        const sighash = inputType.sighash;
        if (!allowedSighash.includes(sighash)) {
            throw new Error(`Input with not allowed sigHash=${sighash}. Allowed: ${allowedSighash.join(', ')}`);
        }
        // It is possible to sign these inputs for legacy/segwit v0 (but no taproot!),
        // however this was because of bug in bitcoin-core, which remains here because of consensus.
        // If this is absolutely neccessary for your case, please open issue.
        // We disable it to avoid complicated workflow where SINGLE will block adding new outputs
        const { sigInputs, sigOutputs } = this.inputSighash(idx);
        if (sigOutputs === SignatureHash.SINGLE && idx >= this.outputs.length) {
            throw new Error(`Input with sighash SINGLE, but there is no output with corresponding index=${idx}`);
        }
        // Actual signing
        // Taproot
        const prevOut = this.prevOut(input);
        if (inputType.txType === 'taproot') {
            if (input.tapBip32Derivation)
                throw new Error('tapBip32Derivation unsupported');
            const prevOuts = this.inputs.map(this.prevOut);
            const prevOutScript = prevOuts.map((i) => i.script);
            const amount = prevOuts.map((i) => i.amount);
            let signed = false;
            let schnorrPub = schnorr.getPublicKey(privateKey);
            let merkleRoot = input.tapMerkleRoot || EMPTY;
            if (input.tapInternalKey) {
                // internal + tweak = tweaked key
                // if internal key == current public key, we need to tweak private key,
                // otherwise sign as is. bitcoinjs implementation always wants tweaked
                // priv key to be provided
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
                    const { pubKey, privKey } = getTaprootKeys(privateKey, schnorrPub, cb.internalKey, EMPTY // Because we cannot have nested taproot tree
                    );
                    const pos = scriptDecoded.findIndex((i) => isBytes(i) && equalBytes(i, pubKey));
                    // Skip if there is no public key in tapLeafScript
                    if (pos === -1)
                        continue;
                    const msg = this.preimageWitnessV1(idx, prevOutScript, sighash, amount, undefined, script, ver);
                    const sig = concat(schnorr.sign(msg, privKey, _auxRand), sighash !== SignatureHash.DEFAULT ? new Uint8Array([sighash]) : EMPTY);
                    this.updateInput(idx, { tapScriptSig: [[{ pubKey: pubKey, leafHash: hash }, sig]] }, true);
                    signed = true;
                }
            }
            if (!signed)
                throw new Error('No taproot scripts signed');
            return true;
        }
        else {
            // only compressed keys are supported for now
            const pubKey = _pubECDSA(privateKey);
            // TODO: replace with explicit checks
            // Check if script has public key or its has inside
            let hasPubkey = false;
            const pubKeyHash = hash160(pubKey);
            for (const i of Script.decode(inputType.lastScript)) {
                if (isBytes(i) && (equalBytes(i, pubKey) || equalBytes(i, pubKeyHash)))
                    hasPubkey = true;
            }
            if (!hasPubkey)
                throw new Error(`Input script doesn't have pubKey: ${inputType.lastScript}`);
            let hash;
            if (inputType.txType === 'legacy') {
                hash = this.preimageLegacy(idx, inputType.lastScript, sighash);
            }
            else if (inputType.txType === 'segwit') {
                let script = inputType.lastScript;
                // If wpkh OR sh-wpkh, wsh-wpkh is impossible, so looks ok
                if (inputType.last.type === 'wpkh')
                    script = OutScript.encode({ type: 'pkh', hash: inputType.last.hash });
                hash = this.preimageWitnessV0(idx, script, sighash, prevOut.amount);
            }
            else
                throw new Error(`Transaction/sign: unknown tx type: ${inputType.txType}`);
            const sig = signECDSA(hash, privateKey, this.opts.lowR);
            this.updateInput(idx, {
                partialSig: [[pubKey, concat(sig, new Uint8Array([sighash]))]],
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
            }
            catch (e) { }
        }
        if (!num)
            throw new Error('No inputs signed');
        return num;
    }
    finalizeIdx(idx) {
        this.checkInputIdx(idx);
        if (this.fee < 0n)
            throw new Error('Outputs spends more than inputs amount');
        const input = this.inputs[idx];
        const inputType = this.inputType(input);
        // Taproot finalize
        if (inputType.txType === 'taproot') {
            if (input.tapKeySig)
                input.finalScriptWitness = [input.tapKeySig];
            else if (input.tapLeafScript && input.tapScriptSig) {
                // Sort leafs by control block length.
                const leafs = input.tapLeafScript.sort((a, b) => TaprootControlBlock.encode(a[0]).length - TaprootControlBlock.encode(b[0]).length);
                for (const [cb, _script] of leafs) {
                    // Last byte is version
                    const script = _script.slice(0, -1);
                    const ver = _script[_script.length - 1];
                    const outScript = OutScript.decode(script);
                    const hash = tapLeafHash(script, ver);
                    const scriptSig = input.tapScriptSig.filter((i) => equalBytes(i[0].leafHash, hash));
                    let signatures = [];
                    if (outScript.type === 'tr_ms') {
                        const m = outScript.m;
                        const pubkeys = outScript.pubkeys;
                        let added = 0;
                        for (const pub of pubkeys) {
                            const sigIdx = scriptSig.findIndex((i) => equalBytes(i[0].pubKey, pub));
                            // Should have exact amount of signatures (more -- will fail)
                            if (added === m || sigIdx === -1) {
                                signatures.push(EMPTY);
                                continue;
                            }
                            signatures.push(scriptSig[sigIdx][1]);
                            added++;
                        }
                        // Should be exact same as m
                        if (added !== m)
                            continue;
                    }
                    else if (outScript.type === 'tr_ns') {
                        for (const pub of outScript.pubkeys) {
                            const sigIdx = scriptSig.findIndex((i) => equalBytes(i[0].pubKey, pub));
                            if (sigIdx === -1)
                                continue;
                            signatures.push(scriptSig[sigIdx][1]);
                        }
                        if (signatures.length !== outScript.pubkeys.length)
                            continue;
                    }
                    else if (outScript.type === 'unknown' && this.opts.allowUnknowInput) {
                        // Trying our best to sign what we can
                        const scriptDecoded = Script.decode(script);
                        signatures = scriptSig
                            .map(([{ pubKey }, signature]) => {
                            const pos = scriptDecoded.findIndex((i) => isBytes(i) && equalBytes(i, pubKey));
                            if (pos === -1)
                                throw new Error('finalize/taproot: cannot find position of pubkey in script');
                            return { signature, pos };
                        })
                            // Reverse order (because witness is stack and we take last element first from it)
                            .sort((a, b) => a.pos - b.pos)
                            .map((i) => i.signature);
                        if (!signatures.length)
                            continue;
                    }
                    else
                        throw new Error('Finalize: Unknown tapLeafScript');
                    // Witness is stack, so last element will be used first
                    input.finalScriptWitness = signatures
                        .reverse()
                        .concat([script, TaprootControlBlock.encode(cb)]);
                    break;
                }
                if (!input.finalScriptWitness)
                    throw new Error('finalize/taproot: empty witness');
            }
            else
                throw new Error('finalize/taproot: unknown input');
            input.finalScriptSig = EMPTY;
            cleanFinalInput(input);
            return;
        }
        if (!input.partialSig || !input.partialSig.length)
            throw new Error('Not enough partial sign');
        let inputScript = EMPTY;
        let witness = [];
        // TODO: move input scripts closer to payments/output scripts
        // Multisig
        if (inputType.last.type === 'ms') {
            const m = inputType.last.m;
            const pubkeys = inputType.last.pubkeys;
            let signatures = [];
            // partial: [pubkey, sign]
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
        }
        else if (inputType.last.type === 'pk') {
            inputScript = Script.encode([input.partialSig[0][1]]);
        }
        else if (inputType.last.type === 'pkh') {
            inputScript = Script.encode([input.partialSig[0][1], input.partialSig[0][0]]);
        }
        else if (inputType.last.type === 'wpkh') {
            inputScript = EMPTY;
            witness = [input.partialSig[0][1], input.partialSig[0][0]];
        }
        else if (inputType.last.type === 'unknown' && !this.opts.allowUnknowInput)
            throw new Error('Unknown inputs not allowed');
        // Create final scripts (generic part)
        let finalScriptSig, finalScriptWitness;
        if (inputType.type.includes('wsh-')) {
            // P2WSH
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
        if (inputType.txType === 'segwit')
            finalScriptWitness = witness;
        if (inputType.type.startsWith('sh-wsh-')) {
            finalScriptSig = Script.encode([Script.encode([0, sha256(inputType.lastScript)])]);
        }
        else if (inputType.type.startsWith('sh-')) {
            finalScriptSig = Script.encode([...Script.decode(inputScript), inputType.lastScript]);
        }
        else if (inputType.type.startsWith('wsh-')) ;
        else if (inputType.txType !== 'segwit')
            finalScriptSig = inputScript;
        if (!finalScriptSig && !finalScriptWitness)
            throw new Error('Unknown error finalizing input');
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
            throw new Error('Transaction has unfinalized inputs');
        if (!this.outputs.length)
            throw new Error('Transaction has no outputs');
        if (this.fee < 0n)
            throw new Error('Outputs spends more than inputs amount');
        return this.toBytes(true, true);
    }
    combine(other) {
        for (const k of ['PSBTVersion', 'version', 'lockTime']) {
            if (this.opts[k] !== other.opts[k]) {
                throw new Error(`Transaction/combine: different ${k} this=${this.opts[k]} other=${other.opts[k]}`);
            }
        }
        for (const k of ['inputs', 'outputs']) {
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
        // deepClone probably faster, but this enforces that encoding is valid
        return Transaction.fromPSBT(this.toPSBT(2), this.opts);
    }
}

const btcPrecision = 1e8;
function isSupported(address) {
  const network = "mainnet";
  const msg = "Please enter a valid " + network + " bitcoin address.";
  if (!address || address.length < 10) {
    throw new Error(msg);
  }
  const net = NETWORK;
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
  return "https://explorer.stacks.co" + "/address/" + addr + "?chain=" + "mainnet";
}
function explorerBtcTxUrl(txid) {
  return "https://blockstream.info" + "/tx/" + txid;
}
function explorerBtcAddressUrl(address) {
  return "https://blockstream.info" + "/address/" + address;
}
function explorerTxUrl(txid) {
  return "https://explorer.stacks.co" + "/txid/" + txid + "?chain=" + "mainnet";
}
function fmtSatoshiToBitcoin(amountSats) {
  return Math.round(amountSats) / btcPrecision;
}
function truncate(stringy) {
  return stringy.substring(0, 6) + ".." + stringy.substring(stringy.length - 8);
}

export { Address as A, NETWORK as N, OutScript as O, Script as S, TEST_NETWORK as T, explorerBtcTxUrl as a, Transaction as b, explorerAddressUrl as c, explorerBtcAddressUrl as d, explorerTxUrl as e, fmtSatoshiToBitcoin as f, base64 as g, hex$1 as h, isSupported as i, p2wpkh as p, secp256k1 as s, truncate as t };
