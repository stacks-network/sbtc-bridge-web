import { b as setContext, W as getContext, X as derived, Y as readable, Z as get_store_value, F as writable, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, R as create_slot, _ as assign, $ as compute_rest_props, v as validate_slots, a0 as exclude_internal_props, a1 as svg_element, a2 as claim_svg_element, q as children, l as detach_dev, r as attr_dev, w as add_location, a3 as set_svg_attributes, a4 as toggle_class, g as insert_hydration_dev, K as append_hydration_dev, T as update_slot_base, U as get_all_dirty_from_scope, V as get_slot_changes, a5 as get_spread_update, k as transition_in, t as transition_out } from './index-5e67b194.js';

function I$5(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unexpected runtime environment - no supported global scope (`window`, `self`, `global`) available")}function pr$1(r){if(ArrayBuffer.isView(r))return new Uint8Array(r.buffer,r.byteOffset,r.byteLength);throw new Error("Non array buffer passed to arrayBufferToUint8")}function Q$2(r,t,e){return e?`Use of '${e}' requires \`${t}\` which is unavailable on the '${r}' object within the currently executing environment.`:`\`${t}\` is unavailable on the '${r}' object within the currently executing environment.`}function hr(r,{throwIfUnavailable:t,usageDesc:e,returnEmptyObject:n}={}){let i;try{if(i=I$5(),i){let o=i[r];if(o)return o}}catch(o){console.error(`Error getting object '${r}' from global scope '${i}': ${o}`);}if(t){let o=Q$2(i,r.toString(),e);throw console.error(o),new Error(o)}if(n)return {}}function U$3(r){let t=r.reduce((i,o)=>i+o.length,0),e=new Uint8Array(t),n=0;for(let i=0;i<r.length;i++)e.set(r[i],n),n+=r[i].length;return e}function lr(r){return typeof r=="object"&&(r=Uint8Array.from(r)),r}function B$3(r){var t;return r!==null&&typeof r=="object"&&((t=r==null?void 0:r.constructor)==null?void 0:t.wordSize)===26&&Array.isArray(r==null?void 0:r.words)}function dr(r){return new TextEncoder().encode(r)}function _$4(r){return new TextDecoder().decode(r)}var O$3=new Array(255);for(let r=0;r<=255;++r)O$3[r]=r.toString(16).padStart(2,"0");function l$4(r){if(typeof r!="string")throw new TypeError("hexToBytes: expected string, got "+typeof r);if(r.length%2)throw new Error(`hexToBytes: received invalid unpadded hex, got: ${r.length}`);let t=new Uint8Array(r.length/2);for(let e=0;e<t.length;e++){let n=e*2;t[e]=Number.parseInt(r.slice(n,n+2),16);}return t}function p$4(r){let t=new Array(r.length);for(let e=0;e<r.length;++e)t[e]=O$3[r[e]];return t.join("")}function d$3(r){if(typeof r!="string")throw new TypeError("hexToNumber: expected string, got "+typeof r);return BigInt(`0x${r}`)}var x$3=(r,t=8)=>(typeof r=="bigint"?r:y$9(r,!1)).toString(16).padStart(t*2,"0"),Tr=r=>parseInt(r,16),Er=r=>JSON.parse(_$4(l$4(r))),Ir$1=r=>typeof r=="string"?l$4(r):r,Ur=r=>r.startsWith("0x")?r.replace("0x",""):r;var N$3=BigInt(0),f$7=BigInt(1);function _r(r,t=128){if(r<-(f$7<<BigInt(t)-f$7)||r>(f$7<<BigInt(t)-f$7)-f$7)throw `Integer out of range given ${t} bits to represent.`;return r>=N$3?r:~(-r-f$7|~((f$7<<BigInt(t))-f$7))}function L$4(r,t=128){return (r&f$7<<BigInt(t)-f$7)>N$3&&(r=r-(f$7<<BigInt(t))),r}function Rr$1(r,t=!1,e=8){return l$4(x$3(y$9(r,t),e))}function y$9(r,t=!1){if(typeof r=="number"){if(!Number.isInteger(r))throw new RangeError("Invalid value. Values of type 'number' must be an integer.");return BigInt(r)}if(typeof r=="string")if(r.toLowerCase().startsWith("0x")){let e=r.slice(2);e=e.padStart(e.length+e.length%2,"0"),r=l$4(e);}else try{return BigInt(r)}catch(e){if(e instanceof SyntaxError)throw new RangeError(`Invalid value. String integer '${r}' is not finite.`)}if(typeof r=="bigint")return r;if(r instanceof Uint8Array)return t?L$4(d$3(p$4(r))):d$3(p$4(r));if(B$3(r))return BigInt(r.toString());throw new TypeError(`Invalid value type. Must be a number, bigint, integer-string, hex-string, BN.js instance, or Buffer, got: ${typeof r}.`)}function h$7(r){return `[micro-stacks] ${r}`}var V$2=class V extends Error{constructor(t){super(t),this.message=h$7(t),this.name=this.constructor.name,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor);}},C$5=class C extends Error{constructor(t){super(t),this.message=h$7(t),this.name=this.constructor.name;}};var z$5=typeof window<"u",rr=z$5?{referrer:"no-referrer",referrerPolicy:"no-referrer"}:{};async function Hr(r,t={}){return fetch(r,{...rr,...t})}var H$5="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",M$5="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";function $$4(r){let t=r.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");let e=r.indexOf("=");e===-1&&(e=t);let n=e===t?0:4-e%4;return [e,n]}function tr(r,t,e){return (t+e)*3/4-e}function G$1(r,t){let{revLookup:e}=w$6(t),n,i=$$4(r),o=i[0],s=i[1],a=new Uint8Array(tr(r,o,s)),u=0,m=s>0?o-4:o,c;for(c=0;c<m;c+=4)n=e[r.charCodeAt(c)]<<18|e[r.charCodeAt(c+1)]<<12|e[r.charCodeAt(c+2)]<<6|e[r.charCodeAt(c+3)],a[u++]=n>>16&255,a[u++]=n>>8&255,a[u++]=n&255;return s===2&&(n=e[r.charCodeAt(c)]<<2|e[r.charCodeAt(c+1)]>>4,a[u++]=n&255),s===1&&(n=e[r.charCodeAt(c)]<<10|e[r.charCodeAt(c+1)]<<4|e[r.charCodeAt(c+2)]>>2,a[u++]=n>>8&255,a[u++]=n&255),a}function W$2(r){let e=r.length,n=e%4;if(!n)return r;let i=4-n,o=e+i;return r.padEnd(o,"=")}function Gr(r){return G$1(W$2(r),H$5)}function er(r,t){let{lookup:e}=w$6(t);return e[r>>18&63]+e[r>>12&63]+e[r>>6&63]+e[r&63]}function nr(r,t,e,n){let i,o=[];for(let s=t;s<e;s+=3)i=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),o.push(er(i,n));return o.join("")}var A$4=new Map;function w$6(r){if(A$4.has(r))return A$4.get(r);let t=[],e=[];for(let n=0,i=r.length;n<i;++n)t[n]=r[n],e[r.charCodeAt(n)]=n;return e["-".charCodeAt(0)]=62,e["_".charCodeAt(0)]=63,A$4.set(r,{lookup:t,revLookup:e}),{lookup:t,revLookup:e}}function P$5(r,t){let{lookup:e}=w$6(t),n,i=r.length,o=i%3,s=[],a=16383;for(let u=0,m=i-o;u<m;u+=a)s.push(nr(r,u,u+a>m?m:u+a,t));return o===1?(n=r[i-1],s.push(e[n>>2]+e[n<<4&63]+"==")):o===2&&(n=(r[i-2]<<8)+r[i-1],s.push(e[n>>10]+e[n>>4&63]+e[n<<2&63]+"=")),s.join("")}function Pr(r){return P$5(r,H$5)}function jr(r){return P$5(r,M$5)}var T$3="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",j$2=BigInt(58);function Yr(r){if(r.length===0)return "";typeof r=="string"&&(typeof TextEncoder<"u"?r=new TextEncoder().encode(r):r=new Uint8Array(r.split("").map(n=>n.charCodeAt(0))));let t=BigInt("0x"+p$4(r)),e=[];for(;t>0;){let n=Number(t%j$2);t=t/j$2,e.push(T$3[n]);}for(let n=0;r[n]===0;n++)e.push(T$3[0]);return e.reverse().join("")}function Qr(r){let t=[];for(let e=0;e<r.length;++e)t.push(r.charCodeAt(e)&255);return new Uint8Array(t)}function Xr(r){let t="",e=r.length;for(let n=0;n<e;++n)t+=String.fromCharCode(r[n]&127);return t}function rt(r,t,e,n,i){if(n||(n=0),!i&&i!==0&&(i=r.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n||t.length===0||r.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=r.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>r.length&&(i=r.length),t.length-e<i-n&&(i=t.length-e+n);let o=i-n;return r===t&&typeof Uint8Array.prototype.copyWithin=="function"?r.copyWithin(e,n,i):Uint8Array.prototype.set.call(t,r.subarray(n,i),e),o}var q$1=class q{_value=[];get value(){return this._value}appendHexString(t){this.value.push(l$4(t));}push(t){return this._value.push(t)}appendByte(t){if(!Number.isInteger(t)||t<0||t>255)throw new Error(`Value ${t} is not a valid byte`);this.value.push(Uint8Array.from([t]));}concatBuffer(){return U$3(this.value)}};var g$4={INVALID_ENCODING:"Invalid encoding provided. Please specify a valid encoding the internal Node.js Buffer supports.",INVALID_SMARTBUFFER_SIZE:"Invalid size provided. Size must be a valid integer greater than zero.",INVALID_SMARTBUFFER_BUFFER:"Invalid Buffer provided in SmartBufferOptions.",INVALID_SMARTBUFFER_OBJECT:"Invalid SmartBufferOptions object supplied to SmartBuffer constructor or factory methods.",INVALID_OFFSET:"An invalid offset value was provided.",INVALID_OFFSET_NON_NUMBER:"An invalid offset value was provided. A numeric value is required.",INVALID_LENGTH:"An invalid length value was provided.",INVALID_LENGTH_NON_NUMBER:"An invalid length value was provived. A numeric value is required.",INVALID_TARGET_OFFSET:"Target offset is beyond the bounds of the internal SmartBuffer data.",INVALID_TARGET_LENGTH:"Specified length value moves cursor beyong the bounds of the internal SmartBuffer data.",INVALID_READ_BEYOND_BOUNDS:"Attempted to read beyond the bounds of the managed data.",INVALID_WRITE_BEYOND_BOUNDS:"Attempted to write beyond the bounds of the managed data."};function ut$2(r,t,e){return t=+t,e=e>>>0,r[e]=t&255,e+1}function ct$1(r,t,e){return t=+t,e=e>>>0,r[e]=t&255,r[e+1]=t>>>8,e+2}function mt$1(r,t,e){return t=+t,e>>>=0,r[e+3]=t>>>24,r[e+2]=t>>>16,r[e+1]=t>>>8,r[e]=t&255,e+4}function yt$2(r,t,e){return t=+t,e>>>=0,r[e]=t>>>24,r[e+1]=t>>>16,r[e+2]=t>>>8,r[e+3]=t&255,e+4}function K$2(r,t){return r instanceof t||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===t.name}function xt$1(r,t){if(!K$2(r,Uint8Array)||!K$2(t,Uint8Array))throw new TypeError('The "buf1", "buf2" arguments must be one of type Uint8Array');if(r===t)return 0;let e=r.length,n=t.length;for(let i=0,o=Math.min(e,n);i<o;++i)if(r[i]!==t[i]){e=r[i],n=t[i];break}return e<n?-1:n<e?1:0}function ir(r){let t=Object.values(r).filter(n=>typeof n=="number"),e=new Set(t);return n=>e.has(n)}var Y$2=new Map;function E$4(r,t){let e=Y$2.get(r);if(e!==void 0)return e(t);let n=ir(r);return Y$2.set(r,n),E$4(r,t)}function or(r){return typeof r=="number"&&isFinite(r)&&Math.floor(r)===r}function sr(r){return typeof r=="number"&&isFinite(r)&&or(r)}function Z$4(r,t){if(typeof r=="number"){if(!sr(r)||r<0)throw new Error(t?g$4.INVALID_OFFSET:g$4.INVALID_LENGTH)}else throw new Error(t?g$4.INVALID_OFFSET_NON_NUMBER:g$4.INVALID_LENGTH_NON_NUMBER)}var J$2=class J{buffer;view;_readOffset=0;constructor(t){if(t)this.buffer=t,this.view=new DataView(t.buffer,t.byteOffset,t.byteLength);else {let e=new Uint8Array;this.buffer=e,this.view=new DataView(e.buffer,e.byteOffset,e.byteLength);}}ensureReadable(t,e){let n=this._readOffset;if(typeof e<"u"&&(Z$4(e,!0),n=e),n<0||n+t>this.buffer.length)throw new Error(g$4.INVALID_READ_BEYOND_BOUNDS)}_readNumberValue(t,e,n){this.ensureReadable(e,n);let i=t.call(this.view,typeof n=="number"?n:this._readOffset);return typeof n>"u"&&(this._readOffset+=e),i}readBuffer(t){let e=typeof t=="number"?t:this.buffer.length,n=Math.min(this.buffer.length,this._readOffset+e),i=this.buffer.slice(this.buffer.byteOffset+this._readOffset,n);return this._readOffset=n,i}readUInt32BE(t){return this._readNumberValue(this.view.getUint32,4,t)}readUInt8(t){return this._readNumberValue(this.view.getUint8,1,t)}readUInt16BE(t){return this._readNumberValue(this.view.getUint16,2,t)}readBigUIntLE(t){let e=Uint8Array.from(this.readBuffer(t)).reverse(),n=p$4(e);return BigInt(`0x${n}`)}readBigUIntBE(t){let e=this.readBuffer(t),n=p$4(e);return BigInt(`0x${n}`)}readBigUInt64BE(t){if(typeof BigInt>"u")throw new Error("Platform does not support JS BigInt type.");return this._readNumberValue(this.view.getBigUint64,8,t)}get readOffset(){return this._readOffset}set readOffset(t){this._readOffset=t;}get internalBuffer(){return this.buffer.buffer}readUInt8Enum(t,e){let n=this.readUInt8();if(E$4(t,n))return n;throw e(n)}};var ur=(e=>(e[e.Testnet=2147483648]="Testnet",e[e.Mainnet=1]="Mainnet",e))(ur||{}),cr=(e=>(e[e.Mainnet=0]="Mainnet",e[e.Testnet=128]="Testnet",e))(cr||{});/*! micro-base58 - MIT License (c) 2021, Paul Miller (https://paulmillr.com) */

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

const crypto$2 = {
    node: undefined,
    web: typeof self === 'object' && 'crypto' in self ? self.crypto : undefined,
};

const cryptoBrowser = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    crypto: crypto$2
}, Symbol.toStringTag, { value: 'Module' }));

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
        this.get().forEach((v, i) => oview.setUint32(4 * i, v, isLE));
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
function f$6(group, x, y, z) {
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
                const tl = (rotl(al + f$6(group, bl, cl, dl) + BUF[rl[i]] + hbl, sl[i]) + el) | 0;
                al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl; // prettier-ignore
            }
            // 2 loops are 10% faster
            for (let i = 0; i < 16; i++) {
                const tr = (rotl(ar + f$6(rGroup, br, cr, dr) + BUF[rr[i]] + hbr, sr[i]) + er) | 0;
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
/**
 * SHA2-256 hash function
 * @param message - data that would be hashed
 */
const sha256 = wrapConstructor(() => new SHA256());

const sha256$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    sha256
}, Symbol.toStringTag, { value: 'Module' }));

const U32_MASK64 = BigInt(2 ** 32 - 1);
const _32n = BigInt(32);
// We are not using BigUint64Array, because they are extremely slow as per 2022
function fromBig(n, le = false) {
    if (le)
        return { h: Number(n & U32_MASK64), l: Number((n >> _32n) & U32_MASK64) };
    return { h: Number((n >> _32n) & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for (let i = 0; i < lst.length; i++) {
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [h, l];
    }
    return [Ah, Al];
}
const toBig = (h, l) => (BigInt(h >>> 0) << _32n) | BigInt(l >>> 0);
// for Shift in [0, 32)
const shrSH = (h, l, s) => h >>> s;
const shrSL = (h, l, s) => (h << (32 - s)) | (l >>> s);
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s) => (h >>> s) | (l << (32 - s));
const rotrSL = (h, l, s) => (h << (32 - s)) | (l >>> s);
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s) => (h << (64 - s)) | (l >>> (s - 32));
const rotrBL = (h, l, s) => (h >>> (s - 32)) | (l << (64 - s));
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (h, l) => l;
const rotr32L = (h, l) => h;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s) => (h << s) | (l >>> (32 - s));
const rotlSL = (h, l, s) => (l << s) | (h >>> (32 - s));
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s) => (l << (s - 32)) | (h >>> (64 - s));
const rotlBL = (h, l, s) => (h << (s - 32)) | (l >>> (64 - s));
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
// Removing "export" has 5% perf penalty -_-
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return { h: (Ah + Bh + ((l / 2 ** 32) | 0)) | 0, l: l | 0 };
}
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah, Bh, Ch) => (Ah + Bh + Ch + ((low / 2 ** 32) | 0)) | 0;
const add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah, Bh, Ch, Dh) => (Ah + Bh + Ch + Dh + ((low / 2 ** 32) | 0)) | 0;
const add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah, Bh, Ch, Dh, Eh) => (Ah + Bh + Ch + Dh + Eh + ((low / 2 ** 32) | 0)) | 0;
// prettier-ignore
const u64 = {
    fromBig, split, toBig,
    shrSH, shrSL,
    rotrSH, rotrSL, rotrBH, rotrBL,
    rotr32H, rotr32L,
    rotlSH, rotlSL, rotlBH, rotlBL,
    add, add3L, add3H, add4L, add4H, add5H, add5L,
};

// Round contants (first 32 bits of the fractional parts of the cube roots of the first 80 primes 2..409):
// prettier-ignore
const [SHA512_Kh, SHA512_Kl] = u64.split([
    '0x428a2f98d728ae22', '0x7137449123ef65cd', '0xb5c0fbcfec4d3b2f', '0xe9b5dba58189dbbc',
    '0x3956c25bf348b538', '0x59f111f1b605d019', '0x923f82a4af194f9b', '0xab1c5ed5da6d8118',
    '0xd807aa98a3030242', '0x12835b0145706fbe', '0x243185be4ee4b28c', '0x550c7dc3d5ffb4e2',
    '0x72be5d74f27b896f', '0x80deb1fe3b1696b1', '0x9bdc06a725c71235', '0xc19bf174cf692694',
    '0xe49b69c19ef14ad2', '0xefbe4786384f25e3', '0x0fc19dc68b8cd5b5', '0x240ca1cc77ac9c65',
    '0x2de92c6f592b0275', '0x4a7484aa6ea6e483', '0x5cb0a9dcbd41fbd4', '0x76f988da831153b5',
    '0x983e5152ee66dfab', '0xa831c66d2db43210', '0xb00327c898fb213f', '0xbf597fc7beef0ee4',
    '0xc6e00bf33da88fc2', '0xd5a79147930aa725', '0x06ca6351e003826f', '0x142929670a0e6e70',
    '0x27b70a8546d22ffc', '0x2e1b21385c26c926', '0x4d2c6dfc5ac42aed', '0x53380d139d95b3df',
    '0x650a73548baf63de', '0x766a0abb3c77b2a8', '0x81c2c92e47edaee6', '0x92722c851482353b',
    '0xa2bfe8a14cf10364', '0xa81a664bbc423001', '0xc24b8b70d0f89791', '0xc76c51a30654be30',
    '0xd192e819d6ef5218', '0xd69906245565a910', '0xf40e35855771202a', '0x106aa07032bbd1b8',
    '0x19a4c116b8d2d0c8', '0x1e376c085141ab53', '0x2748774cdf8eeb99', '0x34b0bcb5e19b48a8',
    '0x391c0cb3c5c95a63', '0x4ed8aa4ae3418acb', '0x5b9cca4f7763e373', '0x682e6ff3d6b2b8a3',
    '0x748f82ee5defb2fc', '0x78a5636f43172f60', '0x84c87814a1f0ab72', '0x8cc702081a6439ec',
    '0x90befffa23631e28', '0xa4506cebde82bde9', '0xbef9a3f7b2c67915', '0xc67178f2e372532b',
    '0xca273eceea26619c', '0xd186b8c721c0c207', '0xeada7dd6cde0eb1e', '0xf57d4f7fee6ed178',
    '0x06f067aa72176fba', '0x0a637dc5a2c898a6', '0x113f9804bef90dae', '0x1b710b35131c471b',
    '0x28db77f523047d84', '0x32caab7b40c72493', '0x3c9ebe0a15c9bebc', '0x431d67c49c100d4c',
    '0x4cc5d4becb3e42b6', '0x597f299cfc657e2a', '0x5fcb6fab3ad6faec', '0x6c44198c4a475817'
].map(n => BigInt(n)));
// Temporary buffer, not used to store anything between runs
const SHA512_W_H = new Uint32Array(80);
const SHA512_W_L = new Uint32Array(80);
class SHA512 extends SHA2 {
    constructor() {
        super(128, 64, 16, false);
        // We cannot use array here since array allows indexing by variable which means optimizer/compiler cannot use registers.
        // Also looks cleaner and easier to verify with spec.
        // Initial state (first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19):
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = 0x6a09e667 | 0;
        this.Al = 0xf3bcc908 | 0;
        this.Bh = 0xbb67ae85 | 0;
        this.Bl = 0x84caa73b | 0;
        this.Ch = 0x3c6ef372 | 0;
        this.Cl = 0xfe94f82b | 0;
        this.Dh = 0xa54ff53a | 0;
        this.Dl = 0x5f1d36f1 | 0;
        this.Eh = 0x510e527f | 0;
        this.El = 0xade682d1 | 0;
        this.Fh = 0x9b05688c | 0;
        this.Fl = 0x2b3e6c1f | 0;
        this.Gh = 0x1f83d9ab | 0;
        this.Gl = 0xfb41bd6b | 0;
        this.Hh = 0x5be0cd19 | 0;
        this.Hl = 0x137e2179 | 0;
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
        // Extend the first 16 words into the remaining 64 words w[16..79] of the message schedule array
        for (let i = 0; i < 16; i++, offset += 4) {
            SHA512_W_H[i] = view.getUint32(offset);
            SHA512_W_L[i] = view.getUint32((offset += 4));
        }
        for (let i = 16; i < 80; i++) {
            // s0 := (w[i-15] rightrotate 1) xor (w[i-15] rightrotate 8) xor (w[i-15] rightshift 7)
            const W15h = SHA512_W_H[i - 15] | 0;
            const W15l = SHA512_W_L[i - 15] | 0;
            const s0h = u64.rotrSH(W15h, W15l, 1) ^ u64.rotrSH(W15h, W15l, 8) ^ u64.shrSH(W15h, W15l, 7);
            const s0l = u64.rotrSL(W15h, W15l, 1) ^ u64.rotrSL(W15h, W15l, 8) ^ u64.shrSL(W15h, W15l, 7);
            // s1 := (w[i-2] rightrotate 19) xor (w[i-2] rightrotate 61) xor (w[i-2] rightshift 6)
            const W2h = SHA512_W_H[i - 2] | 0;
            const W2l = SHA512_W_L[i - 2] | 0;
            const s1h = u64.rotrSH(W2h, W2l, 19) ^ u64.rotrBH(W2h, W2l, 61) ^ u64.shrSH(W2h, W2l, 6);
            const s1l = u64.rotrSL(W2h, W2l, 19) ^ u64.rotrBL(W2h, W2l, 61) ^ u64.shrSL(W2h, W2l, 6);
            // SHA256_W[i] = s0 + s1 + SHA256_W[i - 7] + SHA256_W[i - 16];
            const SUMl = u64.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
            const SUMh = u64.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
            SHA512_W_H[i] = SUMh | 0;
            SHA512_W_L[i] = SUMl | 0;
        }
        let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
        // Compression function main loop, 80 rounds
        for (let i = 0; i < 80; i++) {
            // S1 := (e rightrotate 14) xor (e rightrotate 18) xor (e rightrotate 41)
            const sigma1h = u64.rotrSH(Eh, El, 14) ^ u64.rotrSH(Eh, El, 18) ^ u64.rotrBH(Eh, El, 41);
            const sigma1l = u64.rotrSL(Eh, El, 14) ^ u64.rotrSL(Eh, El, 18) ^ u64.rotrBL(Eh, El, 41);
            //const T1 = (H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i]) | 0;
            const CHIh = (Eh & Fh) ^ (~Eh & Gh);
            const CHIl = (El & Fl) ^ (~El & Gl);
            // T1 = H + sigma1 + Chi(E, F, G) + SHA512_K[i] + SHA512_W[i]
            // prettier-ignore
            const T1ll = u64.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
            const T1h = u64.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
            const T1l = T1ll | 0;
            // S0 := (a rightrotate 28) xor (a rightrotate 34) xor (a rightrotate 39)
            const sigma0h = u64.rotrSH(Ah, Al, 28) ^ u64.rotrBH(Ah, Al, 34) ^ u64.rotrBH(Ah, Al, 39);
            const sigma0l = u64.rotrSL(Ah, Al, 28) ^ u64.rotrBL(Ah, Al, 34) ^ u64.rotrBL(Ah, Al, 39);
            const MAJh = (Ah & Bh) ^ (Ah & Ch) ^ (Bh & Ch);
            const MAJl = (Al & Bl) ^ (Al & Cl) ^ (Bl & Cl);
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
        // Add the compressed chunk to the current hash value
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
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = 0x22312194 | 0;
        this.Al = 0xfc2bf72c | 0;
        this.Bh = 0x9f555fa3 | 0;
        this.Bl = 0xc84c64c2 | 0;
        this.Ch = 0x2393b86b | 0;
        this.Cl = 0x6f53b151 | 0;
        this.Dh = 0x96387719 | 0;
        this.Dl = 0x5940eabd | 0;
        this.Eh = 0x96283ee2 | 0;
        this.El = 0xa88effe3 | 0;
        this.Fh = 0xbe5e1e25 | 0;
        this.Fl = 0x53863992 | 0;
        this.Gh = 0x2b0199fc | 0;
        this.Gl = 0x2c85b8aa | 0;
        this.Hh = 0x0eb72ddc | 0;
        this.Hl = 0x81c52ca2 | 0;
        this.outputLen = 32;
    }
}
class SHA384 extends SHA512 {
    constructor() {
        super();
        // h -- high 32 bits, l -- low 32 bits
        this.Ah = 0xcbbb9d5d | 0;
        this.Al = 0xc1059ed8 | 0;
        this.Bh = 0x629a292a | 0;
        this.Bl = 0x367cd507 | 0;
        this.Ch = 0x9159015a | 0;
        this.Cl = 0x3070dd17 | 0;
        this.Dh = 0x152fecd8 | 0;
        this.Dl = 0xf70e5939 | 0;
        this.Eh = 0x67332667 | 0;
        this.El = 0xffc00b31 | 0;
        this.Fh = 0x8eb44a87 | 0;
        this.Fl = 0x68581511 | 0;
        this.Gh = 0xdb0c2e0d | 0;
        this.Gl = 0x64f98fa7 | 0;
        this.Hh = 0x47b5481d | 0;
        this.Hl = 0xbefa4fa4 | 0;
        this.outputLen = 48;
    }
}
const sha512 = wrapConstructor(() => new SHA512());
wrapConstructor(() => new SHA512_256());
wrapConstructor(() => new SHA384());

function f$5(r){return sha256.create().update(lr(r)).digest()}function y$8(r){return sha512.create().update(lr(r)).digest()}

const __viteBrowserExternal = new Proxy({}, {
  get(_, key) {
    throw new Error(`Module "" has been externalized for browser compatibility. Cannot access ".${key}" in client code.`)
  }
});

const __viteBrowserExternal$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: __viteBrowserExternal
}, Symbol.toStringTag, { value: 'Module' }));

/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
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
    n: POW_2_256 - BigInt('432420386565659656852420866394968145599'),
    h: _1n,
    Gx: BigInt('55066263022277343669578718895168534326250603453777594175500187360389116729240'),
    Gy: BigInt('32670510020758816978083085130507043184471273380659243275938904335757337482424'),
    beta: BigInt('0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee'),
};
function weistrass(x) {
    const { a, b } = CURVE;
    const x2 = mod(x * x);
    const x3 = mod(x2 * x);
    return mod(x3 + a * x + b);
}
const USE_ENDOMORPHISM = CURVE.a === _0n;
class JacobianPoint {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static fromAffine(p) {
        if (!(p instanceof Point)) {
            throw new TypeError('JacobianPoint#fromAffine: expected Point');
        }
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
        if (!(other instanceof JacobianPoint))
            throw new TypeError('JacobianPoint expected');
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
        const A = mod(X1 ** _2n);
        const B = mod(Y1 ** _2n);
        const C = mod(B ** _2n);
        const D = mod(_2n * (mod((X1 + B) ** _2n) - A - C));
        const E = mod(_3n * A);
        const F = mod(E ** _2n);
        const X3 = mod(F - _2n * D);
        const Y3 = mod(E * (D - X3) - _8n * C);
        const Z3 = mod(_2n * Y1 * Z1);
        return new JacobianPoint(X3, Y3, Z3);
    }
    add(other) {
        if (!(other instanceof JacobianPoint))
            throw new TypeError('JacobianPoint expected');
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
        const H = mod(U2 - U1);
        const r = mod(S2 - S1);
        if (H === _0n) {
            if (r === _0n) {
                return this.double();
            }
            else {
                return JacobianPoint.ZERO;
            }
        }
        const HH = mod(H ** _2n);
        const HHH = mod(H * HH);
        const V = mod(U1 * HH);
        const X3 = mod(r ** _2n - HHH - _2n * V);
        const Y3 = mod(r * (V - X3) - S1 * HHH);
        const Z3 = mod(Z1 * Z2 * H);
        return new JacobianPoint(X3, Y3, Z3);
    }
    subtract(other) {
        return this.add(other.negate());
    }
    multiplyUnsafe(scalar) {
        const P0 = JacobianPoint.ZERO;
        if (typeof scalar === 'bigint' && scalar === _0n)
            return P0;
        let n = normalizeScalar(scalar);
        if (n === _1n)
            return this;
        if (!USE_ENDOMORPHISM) {
            let p = P0;
            let d = this;
            while (n > _0n) {
                if (n & _1n)
                    p = p.add(d);
                d = d.double();
                n >>= _1n;
            }
            return p;
        }
        let { k1neg, k1, k2neg, k2 } = splitScalarEndo(n);
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
        k2p = new JacobianPoint(mod(k2p.x * CURVE.beta), k2p.y, k2p.z);
        return k1p.add(k2p);
    }
    precomputeWindow(W) {
        const windows = USE_ENDOMORPHISM ? 128 / W + 1 : 256 / W + 1;
        const points = [];
        let p = this;
        let base = p;
        for (let window = 0; window < windows; window++) {
            base = p;
            points.push(base);
            for (let i = 1; i < 2 ** (W - 1); i++) {
                base = base.add(p);
                points.push(base);
            }
            p = base.double();
        }
        return points;
    }
    wNAF(n, affinePoint) {
        if (!affinePoint && this.equals(JacobianPoint.BASE))
            affinePoint = Point.BASE;
        const W = (affinePoint && affinePoint._WINDOW_SIZE) || 1;
        if (256 % W) {
            throw new Error('Point#wNAF: Invalid precomputation window, must be power of 2');
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
        let f = JacobianPoint.ZERO;
        const windows = 1 + (USE_ENDOMORPHISM ? 128 / W : 256 / W);
        const windowSize = 2 ** (W - 1);
        const mask = BigInt(2 ** W - 1);
        const maxNumber = 2 ** W;
        const shiftBy = BigInt(W);
        for (let window = 0; window < windows; window++) {
            const offset = window * windowSize;
            let wbits = Number(n & mask);
            n >>= shiftBy;
            if (wbits > windowSize) {
                wbits -= maxNumber;
                n += _1n;
            }
            if (wbits === 0) {
                let pr = precomputes[offset];
                if (window % 2)
                    pr = pr.negate();
                f = f.add(pr);
            }
            else {
                let cached = precomputes[offset + Math.abs(wbits) - 1];
                if (wbits < 0)
                    cached = cached.negate();
                p = p.add(cached);
            }
        }
        return { p, f };
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
        }
        else {
            const { p, f } = this.wNAF(n, affinePoint);
            point = p;
            fake = f;
        }
        return JacobianPoint.normalizeZ([point, fake])[0];
    }
    toAffine(invZ = invert(this.z)) {
        const { x, y, z } = this;
        const iz1 = invZ;
        const iz2 = mod(iz1 * iz1);
        const iz3 = mod(iz2 * iz1);
        const ax = mod(x * iz2);
        const ay = mod(y * iz3);
        const zz = mod(z * iz1);
        if (zz !== _1n)
            throw new Error('invZ was invalid');
        return new Point(ax, ay);
    }
}
JacobianPoint.BASE = new JacobianPoint(CURVE.Gx, CURVE.Gy, _1n);
JacobianPoint.ZERO = new JacobianPoint(_0n, _1n, _0n);
const pointPrecomputes = new WeakMap();
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    _setWindowSize(windowSize) {
        this._WINDOW_SIZE = windowSize;
        pointPrecomputes.delete(this);
    }
    static fromCompressedHex(bytes) {
        const isShort = bytes.length === 32;
        const x = bytesToNumber(isShort ? bytes : bytes.subarray(1));
        if (!isValidFieldElement(x))
            throw new Error('Point is not on curve');
        const y2 = weistrass(x);
        let y = sqrtMod(y2);
        const isYOdd = (y & _1n) === _1n;
        if (isShort) {
            if (isYOdd)
                y = mod(-y);
        }
        else {
            const isFirstByteOdd = (bytes[0] & 1) === 1;
            if (isFirstByteOdd !== isYOdd)
                y = mod(-y);
        }
        const point = new Point(x, y);
        point.assertValidity();
        return point;
    }
    static fromUncompressedHex(bytes) {
        const x = bytesToNumber(bytes.subarray(1, 33));
        const y = bytesToNumber(bytes.subarray(33, 65));
        const point = new Point(x, y);
        point.assertValidity();
        return point;
    }
    static fromHex(hex) {
        const bytes = ensureBytes(hex);
        const len = bytes.length;
        const header = bytes[0];
        if (len === 32 || (len === 33 && (header === 0x02 || header === 0x03))) {
            return this.fromCompressedHex(bytes);
        }
        if (len === 65 && header === 0x04)
            return this.fromUncompressedHex(bytes);
        throw new Error(`Point.fromHex: received invalid point. Expected 32-33 compressed bytes or 65 uncompressed bytes, not ${len}`);
    }
    static fromPrivateKey(privateKey) {
        return Point.BASE.multiply(normalizePrivateKey(privateKey));
    }
    static fromSignature(msgHash, signature, recovery) {
        msgHash = ensureBytes(msgHash);
        const h = truncateHash(msgHash);
        const { r, s } = normalizeSignature(signature);
        if (recovery !== 0 && recovery !== 1) {
            throw new Error('Cannot recover signature: invalid recovery bit');
        }
        const prefix = recovery & 1 ? '03' : '02';
        const R = Point.fromHex(prefix + numTo32bStr(r));
        const { n } = CURVE;
        const rinv = invert(r, n);
        const u1 = mod(-h * rinv, n);
        const u2 = mod(s * rinv, n);
        const Q = Point.BASE.multiplyAndAddUnsafe(R, u1, u2);
        if (!Q)
            throw new Error('Cannot recover signature: point at infinify');
        Q.assertValidity();
        return Q;
    }
    toRawBytes(isCompressed = false) {
        return hexToBytes(this.toHex(isCompressed));
    }
    toHex(isCompressed = false) {
        const x = numTo32bStr(this.x);
        if (isCompressed) {
            const prefix = this.y & _1n ? '03' : '02';
            return `${prefix}${x}`;
        }
        else {
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
        const msg = 'Point is not on elliptic curve';
        const { x, y } = this;
        if (!isValidFieldElement(x) || !isValidFieldElement(y))
            throw new Error(msg);
        const left = mod(y * y);
        const right = weistrass(x);
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
        return sum.equals(JacobianPoint.ZERO) ? undefined : sum.toAffine();
    }
}
Point.BASE = new Point(CURVE.Gx, CURVE.Gy);
Point.ZERO = new Point(_0n, _0n);
function sliceDER(s) {
    return Number.parseInt(s[0], 16) >= 8 ? '00' + s : s;
}
function parseDERInt(data) {
    if (data.length < 2 || data[0] !== 0x02) {
        throw new Error(`Invalid signature integer tag: ${bytesToHex(data)}`);
    }
    const len = data[1];
    const res = data.subarray(2, len + 2);
    if (!len || res.length !== len) {
        throw new Error(`Invalid signature integer: wrong length`);
    }
    if (res[0] === 0x00 && res[1] <= 0x7f) {
        throw new Error('Invalid signature integer: trailing length');
    }
    return { data: bytesToNumber(res), left: data.subarray(len + 2) };
}
function parseDERSignature(data) {
    if (data.length < 2 || data[0] != 0x30) {
        throw new Error(`Invalid signature tag: ${bytesToHex(data)}`);
    }
    if (data[1] !== data.length - 2) {
        throw new Error('Invalid signature: incorrect length');
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
        const arr = isUint8a(hex);
        const name = 'Signature.fromCompact';
        if (typeof hex !== 'string' && !arr)
            throw new TypeError(`${name}: Expected string or Uint8Array`);
        const str = arr ? bytesToHex(hex) : hex;
        if (str.length !== 128)
            throw new Error(`${name}: Expected 64-byte hex`);
        return new Signature(hexToNumber(str.slice(0, 64)), hexToNumber(str.slice(64, 128)));
    }
    static fromDER(hex) {
        const arr = isUint8a(hex);
        if (typeof hex !== 'string' && !arr)
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
            throw new Error('Invalid Signature: r must be 0 < r < n');
        if (!isWithinCurveOrder(s))
            throw new Error('Invalid Signature: s must be 0 < s < n');
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
function isUint8a(bytes) {
    return bytes instanceof Uint8Array;
}
const hexes = Array.from({ length: 256 }, (v, i) => i.toString(16).padStart(2, '0'));
function bytesToHex(uint8a) {
    if (!(uint8a instanceof Uint8Array))
        throw new Error('Expected Uint8Array');
    let hex = '';
    for (let i = 0; i < uint8a.length; i++) {
        hex += hexes[uint8a[i]];
    }
    return hex;
}
function numTo32bStr(num) {
    if (num > POW_2_256)
        throw new Error('Expected number < 2^256');
    return num.toString(16).padStart(64, '0');
}
function numTo32b(num) {
    return hexToBytes(numTo32bStr(num));
}
function numberToHexUnpadded(num) {
    const hex = num.toString(16);
    return hex.length & 1 ? `0${hex}` : hex;
}
function hexToNumber(hex) {
    if (typeof hex !== 'string') {
        throw new TypeError('hexToNumber: expected string, got ' + typeof hex);
    }
    return BigInt(`0x${hex}`);
}
function hexToBytes(hex) {
    if (typeof hex !== 'string') {
        throw new TypeError('hexToBytes: expected string, got ' + typeof hex);
    }
    if (hex.length % 2)
        throw new Error('hexToBytes: received invalid unpadded hex' + hex.length);
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
function bytesToNumber(bytes) {
    return hexToNumber(bytesToHex(bytes));
}
function ensureBytes(hex) {
    return hex instanceof Uint8Array ? Uint8Array.from(hex) : hexToBytes(hex);
}
function normalizeScalar(num) {
    if (typeof num === 'number' && Number.isSafeInteger(num) && num > 0)
        return BigInt(num);
    if (typeof num === 'bigint' && isWithinCurveOrder(num))
        return num;
    throw new TypeError('Expected valid private scalar: 0 < scalar < curve.n');
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
    const b2 = (x * x * x) % P;
    const b3 = (b2 * b2 * x) % P;
    const b6 = (pow2(b3, _3n) * b3) % P;
    const b9 = (pow2(b6, _3n) * b3) % P;
    const b11 = (pow2(b9, _2n) * b2) % P;
    const b22 = (pow2(b11, _11n) * b11) % P;
    const b44 = (pow2(b22, _22n) * b22) % P;
    const b88 = (pow2(b44, _44n) * b44) % P;
    const b176 = (pow2(b88, _88n) * b88) % P;
    const b220 = (pow2(b176, _44n) * b44) % P;
    const b223 = (pow2(b220, _3n) * b3) % P;
    const t1 = (pow2(b223, _23n) * b22) % P;
    const t2 = (pow2(t1, _6n) * b2) % P;
    return pow2(t2, _2n);
}
function invert(number, modulo = CURVE.P) {
    if (number === _0n || modulo <= _0n) {
        throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
    }
    let a = mod(number, modulo);
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
        throw new Error('invert: does not exist');
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
const divNearest = (a, b) => (a + b / _2n) / b;
const POW_2_128 = _2n ** BigInt(128);
function splitScalarEndo(k) {
    const { n } = CURVE;
    const a1 = BigInt('0x3086d221a7d46bcde86c90e49284eb15');
    const b1 = -_1n * BigInt('0xe4437ed6010e88286f547fa90abfe4c3');
    const a2 = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8');
    const b2 = a1;
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
        throw new Error('splitScalarEndo: Endomorphism failed, k=' + k);
    }
    return { k1neg, k1, k2neg, k2 };
}
function truncateHash(hash) {
    const { n } = CURVE;
    const byteLength = hash.length;
    const delta = byteLength * 8 - 256;
    let h = bytesToNumber(hash);
    if (delta > 0)
        h = h >> BigInt(delta);
    if (h >= n)
        h -= n;
    return h;
}
class HmacDrbg {
    constructor() {
        this.v = new Uint8Array(32).fill(1);
        this.k = new Uint8Array(32).fill(0);
        this.counter = 0;
    }
    hmac(...values) {
        return utils$1.hmacSha256(this.k, ...values);
    }
    hmacSync(...values) {
        throw new Error('utils.hmacSha256Sync is undefined, you need to set it');
    }
    incr() {
        if (this.counter >= 1000) {
            throw new Error('Tried 1,000 k values for sign(), all were invalid');
        }
        this.counter += 1;
    }
    async reseed(seed = new Uint8Array()) {
        this.k = await this.hmac(this.v, Uint8Array.from([0x00]), seed);
        this.v = await this.hmac(this.v);
        if (seed.length === 0)
            return;
        this.k = await this.hmac(this.v, Uint8Array.from([0x01]), seed);
        this.v = await this.hmac(this.v);
    }
    reseedSync(seed = new Uint8Array()) {
        this.k = this.hmacSync(this.v, Uint8Array.from([0x00]), seed);
        this.v = this.hmacSync(this.v);
        if (seed.length === 0)
            return;
        this.k = this.hmacSync(this.v, Uint8Array.from([0x01]), seed);
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
function kmdToSig(kBytes, m, d) {
    const k = bytesToNumber(kBytes);
    if (!isWithinCurveOrder(k))
        return;
    const { n } = CURVE;
    const q = Point.BASE.multiply(k);
    const r = mod(q.x, n);
    if (r === _0n)
        return;
    const s = mod(invert(k, n) * mod(m + d * r, n), n);
    if (s === _0n)
        return;
    const sig = new Signature(r, s);
    const recovery = (q.x === sig.r ? 0 : 2) | Number(q.y & _1n);
    return { sig, recovery };
}
function normalizePrivateKey(key) {
    let num;
    if (typeof key === 'bigint') {
        num = key;
    }
    else if (typeof key === 'number' && Number.isSafeInteger(key) && key > 0) {
        num = BigInt(key);
    }
    else if (typeof key === 'string') {
        if (key.length !== 64)
            throw new Error('Expected 32 bytes of private key');
        num = hexToNumber(key);
    }
    else if (isUint8a(key)) {
        if (key.length !== 32)
            throw new Error('Expected 32 bytes of private key');
        num = bytesToNumber(key);
    }
    else {
        throw new TypeError('Expected valid private key');
    }
    if (!isWithinCurveOrder(num))
        throw new Error('Expected private key: 0 < key < n');
    return num;
}
function normalizePublicKey(publicKey) {
    if (publicKey instanceof Point) {
        publicKey.assertValidity();
        return publicKey;
    }
    else {
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
    }
    catch (error) {
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
    const str = typeof item === 'string';
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
        throw new TypeError('getSharedSecret: first arg must be private key');
    if (!isPub(publicB))
        throw new TypeError('getSharedSecret: second arg must be public key');
    const b = normalizePublicKey(publicB);
    b.assertValidity();
    return b.multiply(normalizePrivateKey(privateA)).toRawBytes(isCompressed);
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
    if (typeof num !== 'bigint')
        throw new Error('Expected bigint');
    const hex = numTo32bStr(num);
    return hexToBytes(hex);
}
function initSigArgs(msgHash, privateKey, extraEntropy) {
    if (msgHash == null)
        throw new Error(`sign: expected valid message hash, not "${msgHash}"`);
    const h1 = ensureBytes(msgHash);
    const d = normalizePrivateKey(privateKey);
    const seedArgs = [int2octets(d), bits2octets(h1)];
    if (extraEntropy != null) {
        if (extraEntropy === true)
            extraEntropy = utils$1.randomBytes(32);
        const e = ensureBytes(extraEntropy);
        if (e.length !== 32)
            throw new Error('sign: Expected 32 bytes of extra data');
        seedArgs.push(e);
    }
    const seed = concatBytes(...seedArgs);
    const m = bits2int(h1);
    return { seed, m, d };
}
function finalizeSig(recSig, opts) {
    let { sig, recovery } = recSig;
    const { canonical, der, recovered } = Object.assign({ canonical: true, der: true }, opts);
    if (canonical && sig.hasHighS()) {
        sig = sig.normalizeS();
        recovery ^= 1;
    }
    const hashed = der ? sig.toDERRawBytes() : sig.toCompactRawBytes();
    return recovered ? [hashed, recovery] : hashed;
}
async function sign(msgHash, privKey, opts = {}) {
    const { seed, m, d } = initSigArgs(msgHash, privKey, opts.extraEntropy);
    let sig;
    const drbg = new HmacDrbg();
    await drbg.reseed(seed);
    while (!(sig = kmdToSig(await drbg.generate(), m, d)))
        await drbg.reseed();
    return finalizeSig(sig, opts);
}
function signSync(msgHash, privKey, opts = {}) {
    const { seed, m, d } = initSigArgs(msgHash, privKey, opts.extraEntropy);
    let sig;
    const drbg = new HmacDrbg();
    drbg.reseedSync(seed);
    while (!(sig = kmdToSig(drbg.generateSync(), m, d)))
        drbg.reseedSync();
    return finalizeSig(sig, opts);
}
const vopts = { strict: true };
function verify(signature, msgHash, publicKey, opts = vopts) {
    let sig;
    try {
        sig = normalizeSignature(signature);
        msgHash = ensureBytes(msgHash);
    }
    catch (error) {
        return false;
    }
    const { r, s } = sig;
    if (opts.strict && sig.hasHighS())
        return false;
    const h = truncateHash(msgHash);
    let P;
    try {
        P = normalizePublicKey(publicKey);
    }
    catch (error) {
        return false;
    }
    const { n } = CURVE;
    const sinv = invert(s, n);
    const u1 = mod(h * sinv, n);
    const u2 = mod(r * sinv, n);
    const R = Point.BASE.multiplyAndAddUnsafe(P, u1, u2);
    if (!R)
        return false;
    const v = mod(R.x, n);
    return v === r;
}
Point.BASE._setWindowSize(8);
const crypto$1 = {
    node: __viteBrowserExternal$1,
    web: typeof self === 'object' && 'crypto' in self ? self.crypto : undefined,
};
const TAGGED_HASH_PREFIXES = {};
const utils$1 = {
    isValidPrivateKey(privateKey) {
        try {
            normalizePrivateKey(privateKey);
            return true;
        }
        catch (error) {
            return false;
        }
    },
    privateAdd: (privateKey, tweak) => {
        const p = normalizePrivateKey(privateKey);
        const t = normalizePrivateKey(tweak);
        return numTo32b(mod(p + t, CURVE.n));
    },
    privateNegate: (privateKey) => {
        const p = normalizePrivateKey(privateKey);
        return numTo32b(CURVE.n - p);
    },
    pointAddScalar: (p, tweak, isCompressed) => {
        const P = Point.fromHex(p);
        const t = normalizePrivateKey(tweak);
        const Q = Point.BASE.multiplyAndAddUnsafe(P, t, _1n);
        if (!Q)
            throw new Error('Tweaked point at infinity');
        return Q.toRawBytes(isCompressed);
    },
    pointMultiply: (p, tweak, isCompressed) => {
        const P = Point.fromHex(p);
        const t = bytesToNumber(ensureBytes(tweak));
        return P.multiply(t).toRawBytes(isCompressed);
    },
    hashToPrivateKey: (hash) => {
        hash = ensureBytes(hash);
        if (hash.length < 40 || hash.length > 1024)
            throw new Error('Expected 40-1024 bytes of private key as per FIPS 186');
        const num = mod(bytesToNumber(hash), CURVE.n - _1n) + _1n;
        return numTo32b(num);
    },
    randomBytes: (bytesLength = 32) => {
        if (crypto$1.web) {
            return crypto$1.web.getRandomValues(new Uint8Array(bytesLength));
        }
        else if (crypto$1.node) {
            const { randomBytes } = crypto$1.node;
            return Uint8Array.from(randomBytes(bytesLength));
        }
        else {
            throw new Error("The environment doesn't have randomBytes function");
        }
    },
    randomPrivateKey: () => {
        return utils$1.hashToPrivateKey(utils$1.randomBytes(40));
    },
    bytesToHex,
    hexToBytes,
    concatBytes,
    mod,
    invert,
    sha256: async (...messages) => {
        if (crypto$1.web) {
            const buffer = await crypto$1.web.subtle.digest('SHA-256', concatBytes(...messages));
            return new Uint8Array(buffer);
        }
        else if (crypto$1.node) {
            const { createHash } = crypto$1.node;
            const hash = createHash('sha256');
            messages.forEach((m) => hash.update(m));
            return Uint8Array.from(hash.digest());
        }
        else {
            throw new Error("The environment doesn't have sha256 function");
        }
    },
    hmacSha256: async (key, ...messages) => {
        if (crypto$1.web) {
            const ckey = await crypto$1.web.subtle.importKey('raw', key, { name: 'HMAC', hash: { name: 'SHA-256' } }, false, ['sign']);
            const message = concatBytes(...messages);
            const buffer = await crypto$1.web.subtle.sign('HMAC', ckey, message);
            return new Uint8Array(buffer);
        }
        else if (crypto$1.node) {
            const { createHmac } = crypto$1.node;
            const hash = createHmac('sha256', key);
            messages.forEach((m) => hash.update(m));
            return Uint8Array.from(hash.digest());
        }
        else {
            throw new Error("The environment doesn't have hmac-sha256 function");
        }
    },
    sha256Sync: undefined,
    hmacSha256Sync: undefined,
    taggedHash: async (tag, ...messages) => {
        let tagP = TAGGED_HASH_PREFIXES[tag];
        if (tagP === undefined) {
            const tagH = await utils$1.sha256(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
            tagP = concatBytes(tagH, tagH);
            TAGGED_HASH_PREFIXES[tag] = tagP;
        }
        return utils$1.sha256(tagP, ...messages);
    },
    taggedHashSync: (tag, ...messages) => {
        throw new Error('utils.sha256Sync is undefined, you need to set it');
    },
    precompute(windowSize = 8, point = Point.BASE) {
        const cached = point === Point.BASE ? point : new Point(point.x, point.y);
        cached._setWindowSize(windowSize);
        cached.multiply(_3n);
        return cached;
    },
};

var a$2=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,t)=>(typeof require<"u"?require:r)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var y$7=class y{webCrypto;constructor(r){this.webCrypto=r;}async encrypt(r,t,i,n){let o,p;if(r==="aes-128-cbc")o="AES-CBC",p=128;else if(r==="aes-256-cbc")o="AES-CBC",p=256;else throw new Error(`Unsupported cipher algorithm "${r}"`);let C=await this.webCrypto.subtle.importKey("raw",t,{name:o,length:p},!1,["encrypt"]),l=await this.webCrypto.subtle.encrypt({name:o,iv:i},C,n);return new Uint8Array(l)}async decrypt(r,t,i,n){let o,p;if(r==="aes-128-cbc")o="AES-CBC",p=128;else if(r==="aes-256-cbc")o="AES-CBC",p=256;else throw new Error(`Unsupported cipher algorithm "${r}"`);let C=await this.webCrypto.subtle.importKey("raw",t,{name:o,length:p},!1,["decrypt"]),l=await this.webCrypto.subtle.decrypt({name:o,iv:i},C,n);return new Uint8Array(l)}};var s=class{createCipher;createDecipher;constructor(r,t){this.createCipher=r,this.createDecipher=t;}async encrypt(r,t,i,n){if(r!=="aes-128-cbc"&&r!=="aes-256-cbc")throw new Error(`Unsupported cipher algorithm "${r}"`);let o=this.createCipher(r,t,i),p=U$3([o.update(n),o.final()]);return Promise.resolve(p)}async decrypt(r,t,i,n){if(r!=="aes-128-cbc"&&r!=="aes-256-cbc")throw new Error(`Unsupported cipher algorithm "${r}"`);let o=this.createDecipher(r,t,i),p=U$3([o.update(n),o.final()]);return Promise.resolve(p)}};function b$3(){return typeof crypto<"u"&&typeof crypto.subtle<"u"}var f$4='Crypto lib not found. Either the WebCrypto "crypto.subtle" or Node.js "crypto" module must be available.';async function u$2(){if(b$3())return {lib:crypto,name:"webCrypto"};try{return {lib:a$2("crypto"),name:"nodeCrypto"}}catch{throw new Error(f$4)}}async function c$2(){let e=await u$2();return e.name==="webCrypto"?new y$7(e.lib):new s(e.lib.createCipheriv,e.lib.createDecipheriv)}async function g$3(e,r,t){return (await c$2()).encrypt("aes-256-cbc",r,e,t)}async function B$2(e,r,t){return (await c$2()).decrypt("aes-256-cbc",r,e,t)}

// HMAC (RFC 2104)
class HMAC extends Hash {
    constructor(hash, _key) {
        super();
        this.finished = false;
        this.destroyed = false;
        assert.hash(hash);
        const key = toBytes(_key);
        this.iHash = hash.create();
        if (!(this.iHash instanceof Hash))
            throw new TypeError('Expected instance of class which extends utils.Hash');
        const blockLen = (this.blockLen = this.iHash.blockLen);
        this.outputLen = this.iHash.outputLen;
        const pad = new Uint8Array(blockLen);
        // blockLen can be bigger than outputLen
        pad.set(key.length > this.iHash.blockLen ? hash.create().update(key).digest() : key);
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

function y$6(t,...o){let r=hmac.create(sha256,lr(t));for(let a of o)r.update(lr(a));return Uint8Array.from(r.digest())}

function Ae(t){return (Math.floor(t/16)+1)*16}function Ke$2(t){return Math.ceil(t/3)*4}function He$1(t){let e={iv:"",ephemeralPK:"",mac:"",cipherText:"",wasString:!!t.wasString};t.cipherTextEncoding==="base64"&&(e.cipherTextEncoding="base64");let r=32,n=66,o=64;return {payloadValuesLength:r+n+o,payloadShell:JSON.stringify(e)}}function ke(t){let e={signature:"",publicKey:"",cipherText:t};return {signedPayloadValuesLength:144+66,signedPayloadShell:JSON.stringify(e)}}function Kt(t){let{payloadShell:e,payloadValuesLength:r}=He$1(t),n=Ae(t.contentLength),o;if(!t.cipherTextEncoding||t.cipherTextEncoding==="hex")o=n*2;else if(t.cipherTextEncoding==="base64")o=Ke$2(n);else throw new Error(`Unexpected cipherTextEncoding "${t.cipherTextEncoding}"`);if(t.sign){let{signedPayloadShell:i,signedPayloadValuesLength:c}=ke(e);return i.length+c+r+o}else return e.length+r+o}function E$3(t){return typeof t=="string"?ripemd160(t):ripemd160.create().update(lr(t)).digest()}var L$3=class L{digest(e){return E$3(e)}};function Ce$1(){return new L$3}function P$4(t){return Ce$1().digest(t)}function w$5(t){let e=y$8(t);return {encryptionKey:e.slice(0,32),hmacKey:e.slice(32)}}function $$3(t=32){return utils$1.randomBytes(t)}function b$2(t,e){let r=new Uint8Array([e]),n=new Uint8Array(25),o=new Uint8Array(21);o[0]=e,o.set(t,1);let i=f$5(o),s=f$5(i).slice(0,4);return n.set(r,0),n.set(t,1),n.set(s,t.length+1),Yr(n)}var je$2={messagePrefix:`Bitcoin Signed Message:
`,bech32:"bc",bip32:{public:76067358,private:76066276},pubKeyHash:0,scriptHash:5,wif:128},Re={messagePrefix:`Bitcoin Signed Message:
`,bech32:"tb",bip32:{public:70617039,private:70615956},pubKeyHash:111,scriptHash:196,wif:239},D$2={bitcoin:je$2,testnet:Re};var X$1=(o=>(o[o.mainnetP2PKH=22]="mainnetP2PKH",o[o.mainnetP2SH=20]="mainnetP2SH",o[o.testnetP2PKH=26]="testnetP2PKH",o[o.testnetP2SH=21]="testnetP2SH",o))(X$1||{}),y$5="0123456789ABCDEFGHJKMNPQRSTVWXYZ",R$4=new Map;[...y$5].forEach((t,e)=>R$4.set(t,e));var H$4="0123456789abcdef",j$1=new Map;[...H$4].forEach((t,e)=>j$1.set(t,e));function V$1(t,e){let r=Y$1(t,e),n=Me$1(U$3([e,r]));return `S${y$5[t]}${n}`}function Me$1(t){let e=p$4(t),r=[],n=0;for(let s=e.length-1;s>=0;s--)if(n<4){let p=j$1.get(e[s])>>n,a=0;s!==0&&(a=j$1.get(e[s-1]));let f=1+n,d=a%(1<<f)<<5-f,u=y$5[p+d];n=f,r.unshift(u);}else n=0;let o=0;for(let s=0;s<r.length&&r[s]==="0";s++)o++;r=r.slice(o);let i=/^\u0000*/.exec(new TextDecoder().decode(t)),c=i?i[0].length:0;for(let s=0;s<c;s++)r.unshift(y$5[0]);return r.join("")}function Y$1(t,e){let r=f$5(U$3([Uint8Array.of(t),e]));return f$5(r).slice(0,4)}function ee$2(t){if(t.length<=5)throw new Error("Invalid c32 address: invalid length");if(t[0]!=="S")throw new Error('Invalid c32 address: must start with "S"');return We$3(t.slice(1))}function We$3(t){t=te$2(t);let e=$e$2(t.slice(1)),r=t[0],n=R$4.get(r),o=e.slice(-4),i=Y$1(n,e.slice(0,-4));for(let c=0;c<o.length;c++)if(o[c]!==i[c])throw new Error("Invalid c32check string: checksum mismatch");return [n,e.slice(0,-4)]}function te$2(t){return t.toUpperCase().replace(/O/g,"0").replace(/L|I/g,"1")}function $e$2(t){if(t=te$2(t),!RegExp(`^[${y$5}]*$`).exec(t))throw new Error("Not a c32-encoded string");let e=RegExp(`^${y$5[0]}*`).exec(t),r=e?e[0].length:0,n=[],o=0,i=0;for(let p=t.length-1;p>=0;p--){i===4&&(n.unshift(H$4[o]),i=0,o=0);let f=(R$4.get(t[p])<<i)+o,d=H$4[f%16];if(i+=1,o=f>>4,o>1<<i)throw new Error("Panic error in decoding.");n.unshift(d);}n.unshift(H$4[o]),n.length%2===1&&n.unshift("0");let c=0;for(let p=0;p<n.length&&n[p]==="0";p++)c++;n=n.slice(c-c%2);let s=n.join("");for(let p=0;p<r;p++)s=`00${s}`;return l$4(s)}function Xt(t){try{return ee$2(t),!0}catch{return !1}}function qe$1(t,e=22){return V$1(e,m$3(Ir$1(t)))}function ar(t){let e=getPublicKey(t,!0),r=f$5(e),n=P$4(r);return b$2(n,D$2.bitcoin.pubKeyHash)}function pr(t){let e=typeof t=="string"?t:p$4(t),r=f$5(l$4(e)),n=P$4(r);return b$2(n,D$2.bitcoin.pubKeyHash)}function m$3(t){let e=f$5(t);return P$4(e)}async function ce$2(t){let{contents:e,privateKey:r}=t,n=e instanceof ArrayBuffer?pr$1(e):typeof e=="string"?dr(e):e,o=p$4(getPublicKey(r,!0)),i=f$5(n),c=await sign(i,r,{canonical:!1});return {signature:p$4(c),publicKey:o}}function xr(t,e=!1){let{contents:r,publicKey:n,signature:o}=t,i=r instanceof ArrayBuffer?pr$1(r):typeof r=="string"?dr(r):r,c=f$5(i);return verify(o,c,n,{strict:e})}async function ae$2(t){let{publicKey:e,content:r,cipherTextEncoding:n="hex",wasString:o}=t,i=utils$1.randomPrivateKey(),c=getPublicKey(i,!0),s=getSharedSecret(i,e,!0);s=s.slice(1);let p=w$5(s),a=$$3(16),f=await g$3(a,p.encryptionKey,r),d=U$3([a,c,f]),u=y$6(p.hmacKey,d),h;if(!n||n==="hex")h=p$4(f);else if(n==="base64")h=Pr(f);else throw new Error(`Unexpected cipherTextEncoding "${n}"`);let T={iv:p$4(a),ephemeralPK:p$4(c),cipherText:h,mac:p$4(u),wasString:o};return n&&n!=="hex"&&(T.cipherTextEncoding=n),T}function pt$1(t,e){if(t.length!==e.length)return !1;let r=0;for(let n=0;n<t.length;n++)r|=t[n]^e[n];return r===0}async function pe$1(t){let{privateKey:e,cipherObject:r}=t;if(!r.ephemeralPK)throw Error("No ephemeralPK found in cipher object");let n=r.ephemeralPK,o=getSharedSecret(e,n,!0);o=o.slice(1);let i=w$5(o),c=l$4(r.iv),s;if(!r.cipherTextEncoding||r.cipherTextEncoding==="hex")s=l$4(r.cipherText);else if(r.cipherTextEncoding==="base64")s=Gr(r.cipherText);else throw new Error(`Unexpected cipherTextEncoding "${r.cipherText}"`);let p=U$3([c,l$4(n),s]),a=y$6(i.hmacKey,p),f=l$4(r.mac);if(!pt$1(f,a))throw new Error("Decryption failed: failure in MAC check");let d=await B$2(c,i.encryptionKey,s);return r.wasString?new TextDecoder().decode(d):d}function Ir(t,e){if(!e.privateKey)throw new Error("Private key is required for decryption.");try{let r=JSON.parse(t);return pe$1({privateKey:e.privateKey,cipherObject:r})}catch(r){throw r instanceof SyntaxError?new Error("Failed to parse encrypted content JSON. The content may not be encrypted. If using getFile, try passing { decrypt: false }."):r}}async function Rr(t,e){let{publicKey:r,privateKey:n,wasString:o}=e,{cipherTextEncoding:i,sign:c}=e;if(!n&&!r)throw new Error("Either public key or private key must be supplied for encryption.");if(!r&&n&&(r=p$4(getPublicKey(n,!0))),typeof o!="boolean"&&(o=typeof t=="string"),!r)throw new Error("micro-stacks/crypto - no public key found to encrypt content");let s=typeof t=="string"?dr(t):t,p=await ae$2({publicKey:r,content:s,wasString:o,cipherTextEncoding:i});if(!c)return JSON.stringify(p);if(typeof c=="string"&&(n=c),!n)throw new Error("micro-stacks/crypto - need private key to sign contents");let a=await ce$2({contents:JSON.stringify(p),privateKey:n});return JSON.stringify({...a,cipherText:JSON.stringify(p)})}function ht$1(t){let r=t.length,n=r%4;if(!n)return t;let o=4-n,i=r+o;return t.padEnd(i,"=")}function ut$1(t){return t instanceof Uint8Array?ge$3(Pr(t)):ge$3(Pr(new TextEncoder().encode(t)))}function yt$1(t){let e=Gr(mt(t));return new TextDecoder().decode(e)}function mt(t){let e;return t instanceof Uint8Array?e=new TextDecoder().decode(t):e=t,ht$1(e).replace(/\-/g,"+").replace(/_/g,"/")}function ge$3(t){return t.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}var g$2={encode:ut$1,decode:yt$1};var v$1=128,ue$1=0,xt=32,St$1=16,bt=2,ye$2=St$1|xt|ue$1<<6,I$4=bt|ue$1<<6;function me$1(t){return typeof t=="string"?Gr(t):t}function _$3(t){let e=me$1(t),r=32,n=r+1,o=e.length,i=0;if(e[i++]!==ye$2)throw new Error('Could not find expected "seq"');let c=e[i++];if(c===(v$1|1)&&(c=e[i++]),o-i<c)throw new Error('"seq" specified length of "'+c+'", only "'+(o-i)+'" remaining');if(e[i++]!==I$4)throw new Error('Could not find expected "int" for "r"');let s=e[i++];if(o-i-2<s)throw new Error('"r" specified length of "'+s+'", only "'+(o-i-2)+'" available');if(n<s)throw new Error('"r" specified length of "'+s+'", max of "'+n+'" is acceptable');let p=i;if(i+=s,e[i++]!==I$4)throw new Error('Could not find expected "int" for "s"');let a=e[i++];if(o-i!==a)throw new Error('"s" specified length of "'+a+'", expected "'+(o-i)+'"');if(n<a)throw new Error('"s" specified length of "'+a+'", max of "'+n+'" is acceptable');let f=i;if(i+=a,i!==o)throw new Error('Expected to consume entire buffer, but "'+(o-i)+'" bytes remain');let d=r-s,u=r-a,h=new Uint8Array(d+s+u+a);for(i=0;i<d;++i)h[i]=0;h.set(e.slice(p+Math.max(-d,0),p+s),i),i=r;for(let T=i;i<T+u;++i)h[i]=0;return h.set(e.slice(f+Math.max(-u,0),f+a),i),jr(h).replace(/=/g,"")}function de$1(t,e,r){let n=0;for(;e+n<r&&t[e+n]===0;)++n;return t[e+n]>=v$1&&--n,n}function M$4(t){let e=me$1(t),r=32,n=de$1(e,0,r),o=de$1(e,r,e.length),i=r-n,c=r-o,s=1+1+i+1+1+c,p=s<v$1,a=new Uint8Array((p?2:3)+s),f=0;return a[f++]=ye$2,p?a[f++]=s:(a[f++]=v$1|1,a[f++]=s&255),a[f++]=I$4,a[f++]=i,n<0?(a[f++]=0,f+=rt(e,a,f,0,r)):f+=rt(e,a,f,n,r),a[f++]=I$4,a[f++]=c,o<0?(a[f++]=0,rt(e,a,f,r)):rt(e,a,f,r+o),jr(a).replace(/=/g,"")}function x$2(t,e){let r=[],n=g$2.encode(JSON.stringify(e));r.push(n);let o=g$2.encode(JSON.stringify(t));return r.push(o),r.join(".")}var Se=class{tokenType;rawPrivateKey;constructor(e="ES256K",r){if(!r)throw new C$5("TokenSigner: rawPrivateKey is required to sign a token");this.tokenType="JWT",this.rawPrivateKey=r;}header(e={}){return {...{typ:this.tokenType,alg:"ES256K"},...e}}async sign(e,r=!1,n={}){let o=this.header(n),i=x$2(e,o),c=f$5(dr(i));return this.createWithSignedHash(e,r,o,i,c)}signSync(e,r=!1,n={}){let o=this.header(n),i=x$2(e,o),c=f$5(dr(i));return this.createWithSignedHashSync(e,r,o,i,c)}async createWithSignedHash(e,r,n,o,i){let c=await sign(i,this.rawPrivateKey,{canonical:!1}),s=_$3(c);return r?{header:[g$2.encode(JSON.stringify(n))],payload:JSON.stringify(e),signature:[s]}:[o,s].join(".")}createWithSignedHashSync(e,r,n,o,i){let c=signSync(i,this.rawPrivateKey,{canonical:!1}),s=_$3(c);return r?{header:[g$2.encode(JSON.stringify(n))],payload:JSON.stringify(e),signature:[s]}:[o,s].join(".")}};var we$1=class we{tokenType;rawPublicKey;constructor(e,r){this.tokenType="JWT",this.rawPublicKey=r;}verify(e,r=!1){return typeof e=="string"?this.verifyCompact(e,r):typeof e=="object"?this.verifyExpanded(e,r):!1}verifyCompact(e,r){let n=e.split("."),o=n[0]+"."+n[1],i=s=>{let p=n[2],a=M$4(p);return verify(p$4(Gr(a)),p$4(s),this.rawPublicKey,{strict:r})},c=f$5(dr(o));return i(c)}verifyExpanded(e,r){let n=[e.header.join("."),g$2.encode(e.payload)].join("."),o=!0,i=s=>(e.signature.map(p=>{let a=M$4(p);verify(p$4(Gr(a)),p$4(s),this.rawPublicKey,{strict:r})||(o=!1);}),o),c=f$5(dr(n));return i(c)}};function wt(t){if(typeof t=="string"){let e=t.split("."),r=JSON.parse(g$2.decode(e[0])),n=JSON.parse(g$2.decode(e[1])),o=e[2];return {header:r,payload:n,signature:o}}else if(typeof t=="object"){if(typeof t.payload!="string")throw new Error("Expected token payload to be a base64 or json string");let e=t.payload;t.payload[0]!=="{"&&(e=g$2.decode(e));let r=[];return t.header.map(n=>{let o=JSON.parse(g$2.decode(n));r.push(o);}),{header:r,payload:JSON.parse(e),signature:t.signature}}}function At(t){return x$2(t,{typ:"JWT",alg:"none"})+"."}

var P$3=BigInt("0xffffffffffffffffffffffffffffffff"),M$3=BigInt(0),U$2=BigInt("0x7fffffffffffffffffffffffffffffff"),w$4=BigInt("-170141183460469231731687303715884105728"),ge$2=(i=>(i[i.Origin=1]="Origin",i[i.Standard=2]="Standard",i[i.Contract=3]="Contract",i))(ge$2||{}),A$3=(n=>(n[n.Int=0]="Int",n[n.UInt=1]="UInt",n[n.Buffer=2]="Buffer",n[n.BoolTrue=3]="BoolTrue",n[n.BoolFalse=4]="BoolFalse",n[n.PrincipalStandard=5]="PrincipalStandard",n[n.PrincipalContract=6]="PrincipalContract",n[n.ResponseOk=7]="ResponseOk",n[n.ResponseErr=8]="ResponseErr",n[n.OptionalNone=9]="OptionalNone",n[n.OptionalSome=10]="OptionalSome",n[n.List=11]="List",n[n.Tuple=12]="Tuple",n[n.StringASCII=13]="StringASCII",n[n.StringUTF8=14]="StringUTF8",n))(A$3||{});var I$3=()=>({type:3}),O$2=()=>({type:4});var L$2=e=>{if(e.length>1e6)throw new Error("Cannot construct clarity buffer that is greater than 1MB");return {type:2,buffer:Uint8Array.from(e)}};var Z$3=e=>{let r=y$9(e,!0);if(r>U$2)throw new RangeError(`Cannot construct clarity integer from value greater than ${U$2.toString()}`);if(r<w$4)throw new RangeError(`Cannot construct clarity integer form value less than ${w$4.toString()}`);if(Rr$1(r).byteLength>128)throw new RangeError(`Cannot construct clarity integer from value greater than ${128} bits`);return {type:0,value:r}},K$1=e=>{let r=y$9(e);if(r<M$3)throw new RangeError("Cannot construct unsigned clarity integer from negative value");if(r>P$3)throw new RangeError(`Cannot construct unsigned clarity integer greater than ${P$3.toString()}`);return {type:1,value:r}};function W$1(e){return {type:11,list:e}}function R$3(){return {type:9}}function E$2(e){return {type:10,value:e}}function te$1(e){return /^[a-zA-Z]([a-zA-Z0-9]|[-_!?+<>=/*])*$|^[-+=/*]$|^[<>]=?$/.test(e)&&e.length<128}var Be$1=(a=>(a[a.Address=0]="Address",a[a.Principal=1]="Principal",a[a.LengthPrefixedString=2]="LengthPrefixedString",a[a.MemoString=3]="MemoString",a[a.AssetInfo=4]="AssetInfo",a[a.PostCondition=5]="PostCondition",a[a.PublicKey=6]="PublicKey",a[a.LengthPrefixedList=7]="LengthPrefixedList",a[a.Payload=8]="Payload",a[a.MessageSignature=9]="MessageSignature",a[a.TransactionAuthField=10]="TransactionAuthField",a))(Be$1||{});function k$2(e){return V$1(e.version,l$4(e.hash160))}var Pe=(e,r)=>e?dr(e).length>r:!1;function C$4(e,r,t){let i=r||1,s=t||128;if(Pe(e,s))throw new Error(`String length exceeds maximum bytes ${s.toString()}`);return {type:2,content:e,lengthPrefixBytes:i,maxLengthBytes:s}}function _$2(e){let r=new q$1;return r.appendHexString(x$3(e.version,1)),r.appendHexString(e.hash160),r.concatBuffer()}function $$2(e){let r=new q$1,t=dr(e.content),i=t.byteLength;return r.appendHexString(x$3(i,e.lengthPrefixBytes)),r.push(t),r.concatBuffer()}function F$3(e,r,t){r=r||1;let i=Tr(p$4(e.readBuffer(r))),s=_$4(e.readBuffer(i));return C$4(s,r,t??128)}function z$4(e){let r=Tr(p$4(e.readBuffer(1))),t=p$4(e.readBuffer(20));return {type:0,version:r,hash160:t}}function d$2(e){if(e.type===5)return k$2(e.address);if(e.type===6)return `${k$2(e.address)}.${e.contractName.content}`;throw new Error(`Unexpected principal data: ${JSON.stringify(e)}`)}function ie$1(e){return {type:5,address:e}}function H$3(e,r){if(dr(r.content).byteLength>=128)throw new Error("Contract name must be less than 128 bytes");return {type:6,address:e,contractName:r}}function oe$1(e){return {type:8,value:e}}function ae$1(e){return {type:7,value:e}}var S$1=e=>({type:13,data:e}),se$1=e=>({type:14,data:e});function pe(e){for(let r in e)if(!te$1(r))throw new Error(`"${r}" is not a valid Clarity name`);return {type:12,data:e}}var Oe=(o=>(o[o.ClarityAbiTypeUInt128=1]="ClarityAbiTypeUInt128",o[o.ClarityAbiTypeInt128=2]="ClarityAbiTypeInt128",o[o.ClarityAbiTypeBool=3]="ClarityAbiTypeBool",o[o.ClarityAbiTypePrincipal=4]="ClarityAbiTypePrincipal",o[o.ClarityAbiTypeNone=5]="ClarityAbiTypeNone",o[o.ClarityAbiTypeBuffer=6]="ClarityAbiTypeBuffer",o[o.ClarityAbiTypeResponse=7]="ClarityAbiTypeResponse",o[o.ClarityAbiTypeOptional=8]="ClarityAbiTypeOptional",o[o.ClarityAbiTypeTuple=9]="ClarityAbiTypeTuple",o[o.ClarityAbiTypeList=10]="ClarityAbiTypeList",o[o.ClarityAbiTypeStringAscii=11]="ClarityAbiTypeStringAscii",o[o.ClarityAbiTypeStringUtf8=12]="ClarityAbiTypeStringUtf8",o[o.ClarityAbiTypeTraitReference=13]="ClarityAbiTypeTraitReference",o))(Oe||{});function l$3(e){switch(e.type){case 3:case 4:return "bool";case 0:return "int";case 1:return "uint";case 2:return `(buff ${e.buffer.length})`;case 9:return "(optional none)";case 10:return `(optional ${l$3(e.value)})`;case 8:return `(response UnknownType ${l$3(e.value)})`;case 7:return `(response ${l$3(e.value)} UnknownType)`;case 5:case 6:return "principal";case 11:return `(list ${e.list.length} ${e.list.length?l$3(e.list[0]):"UnknownType"})`;case 12:return `(tuple ${Object.keys(e.data).map(r=>`(${r} ${l$3(e.data[r])})`).join(" ")})`;case 13:return `(string-ascii ${Qr(e.data).length})`;case 14:return `(string-utf8 ${dr(e.data).length})`}}function T$2(e){let r=h$6(e,!0);switch(e.type){case 8:return {type:l$3(e),value:r,success:!1};case 7:return {type:l$3(e),value:r,success:!0};default:return {type:l$3(e),value:r}}}function h$6(e,r=!1){switch(e.type){case 3:return !0;case 4:return !1;case 0:case 1:return r?e.value.toString():e.value;case 2:return `0x${p$4(e.buffer)}`;case 9:return null;case 10:return T$2(e.value);case 8:return T$2(e.value);case 7:return T$2(e.value);case 5:case 6:return d$2(e);case 11:return e.list.map(s=>T$2(s));case 12:let t={};return Object.keys(e.data).map(s=>[s,T$2(e.data[s])]).forEach(([s,p])=>{t[s]=p;}),t;case 13:return e.data;case 14:return e.data}}function f$3(e,r){let t=new q$1,i=Uint8Array.from([e]);return t.push(i),t.push(r),t.concatBuffer()}function He(e){return Uint8Array.from([e.type])}function je$1(e){return e.type===9?new Uint8Array([e.type]):f$3(e.type,m$2(e.value))}function De$2(e){let r=new Uint8Array(4);return new DataView(r.buffer,r.byteOffset,r.byteLength).setUint32(r.byteOffset,e.buffer.length),f$3(e.type,U$3([r,Uint8Array.from(e.buffer)]))}function Je$1(e){let r=x$3(_r(e.value),16),t=l$4(r);return f$3(e.type,t)}function Ye$1(e){let r=x$3(e.value,16),t=l$4(r);return f$3(e.type,t)}function Ge(e){return f$3(e.type,_$2(e.address))}function ve$3(e){return f$3(e.type,U$3([_$2(e.address),$$2(e.contractName)]))}function Me(e){return f$3(e.type,m$2(e.value))}function Xe$1(e){let r=new q$1,t=new Uint8Array(4);yt$2(t,e.list.length,0),r.push(t);for(let i of e.list){let s=m$2(i);r.push(s);}return f$3(e.type,r.concatBuffer())}function Ze$2(e){let r=[],t=new Uint8Array(4);new DataView(t.buffer,t.byteOffset,t.byteLength).setUint32(t.byteOffset,Object.keys(e.data).length),r.push(t);let s=Object.keys(e.data).sort((p,y)=>{let g=dr(p),x=dr(y);return xt$1(g,x)});for(let p of s){let y=C$4(p);r.push($$2(y));let g=m$2(e.data[p]);r.push(g);}return f$3(e.type,U$3(r))}function ue(e,r){let t=new q$1,s=(r==="ascii"?Qr:dr)(e.data),p=new Uint8Array(4);return new DataView(p.buffer,p.byteOffset,p.byteLength).setUint32(p.byteOffset,s.length),t.push(p),t.push(s),f$3(e.type,t.concatBuffer())}function Ke$1(e){return ue(e,"ascii")}function We$2(e){return ue(e,"utf8")}function m$2(e){switch(e.type){case 3:case 4:return He(e);case 9:case 10:return je$1(e);case 2:return De$2(e);case 0:return Je$1(e);case 1:return Ye$1(e);case 5:return Ge(e);case 6:return ve$3(e);case 7:case 8:return Me(e);case 11:return Xe$1(e);case 12:return Ze$2(e);case 13:return Ke$1(e);case 14:return We$2(e);default:throw new Error("Unable to serialize. Invalid Clarity Value.")}}function c$1(e){let r;if(typeof e=="string"){let i=e.slice(0,2).toLowerCase()==="0x";r=new J$2(l$4(i?e.slice(2):e));}else e instanceof Uint8Array?r=new J$2(e):r=e;switch(r.readUInt8Enum(A$3,i=>{throw new V$2(`Cannot recognize Clarity Type: ${i}`)})){case 0:return Z$3(r.readBuffer(16));case 1:return K$1(r.readBuffer(16));case 2:let i=r.readUInt32BE();return L$2(r.readBuffer(i));case 3:return I$3();case 4:return O$2();case 5:let s=z$4(r);return ie$1(s);case 6:let p=z$4(r),y=F$3(r);return H$3(p,y);case 7:return ae$1(c$1(r));case 8:return oe$1(c$1(r));case 9:return R$3();case 10:return E$2(c$1(r));case 11:let g=r.readUInt32BE(),x=[];for(let n=0;n<g;n++)x.push(c$1(r));return W$1(x);case 12:let Ce=r.readUInt32BE(),G={};for(let n=0;n<Ce;n++){let v=F$3(r).content;if(v===void 0)throw new V$2('"content" is undefined');G[v]=c$1(r);}return pe(G);case 13:let a=r.readUInt32BE(),de=Xr(r.readBuffer(a));return S$1(de);case 14:let o=r.readUInt32BE(),Te=_$4(r.readBuffer(o));return se$1(Te);default:throw new V$2("Unable to deserialize Clarity Value from buffer. Could not find valid Clarity Type.")}}function Vt(e){return `0x${p$4(m$2(e))}`}

var g$1="https://stacks-node-api.mainnet.stacks.co",p$3="https://stacks-node-api.testnet.stacks.co",i=class{version=cr.Mainnet;chainId=ur.Mainnet;broadcastEndpoint="/v2/transactions";transferFeeEstimateEndpoint="/v2/fees/transfer";accountEndpoint="/v2/accounts";contractAbiEndpoint="/v2/contracts/interface";readOnlyFunctionCallEndpoint="/v2/contracts/call-read";bnsLookupUrl;_coreApiUrl;fetcher;get coreApiUrl(){return this._coreApiUrl}set coreApiUrl(t){throw new Error("Cannot modify property `coreApiUrl` after object initialization")}constructor(t={url:g$1}){if(!t.url&&!t.coreApiUrl)throw Error("[miro-stacks] Network initialized with no api url");this._coreApiUrl=t.url||t.coreApiUrl,this.bnsLookupUrl=t.bnsLookupUrl||t.url||t.coreApiUrl,this.fetcher=t.fetcher||Hr;}getCoreApiUrl=()=>this._coreApiUrl;isMainnet=()=>this.version===cr.Mainnet;getBroadcastApiUrl=()=>`${this.getCoreApiUrl()}${this.broadcastEndpoint}`;getTransferFeeEstimateApiUrl=()=>`${this.getCoreApiUrl()}${this.transferFeeEstimateEndpoint}`;getAccountApiUrl=t=>`${this.getCoreApiUrl()}${this.accountEndpoint}/${t}?proof=0`;getAbiApiUrl=(t,e)=>`${this.getCoreApiUrl()}${this.contractAbiEndpoint}/${t}/${e}`;getReadOnlyFunctionCallApiUrl=(t,e,r)=>`${this.getCoreApiUrl()}${this.readOnlyFunctionCallEndpoint}/${t}/${e}/${encodeURIComponent(r)}`;getInfoUrl=()=>`${this.getCoreApiUrl()}/v2/info`;getBlockTimeInfoUrl=()=>`${this.getCoreApiUrl()}/extended/v1/info/network_block_times`;getPoxInfoUrl=()=>`${this.getCoreApiUrl()}/v2/pox`;getRewardsUrl=(t,e)=>{let r=`${this.getCoreApiUrl()}/extended/v1/burnchain/rewards/${t}`;return e&&(r=`${r}?limit=${e.limit}&offset=${e.offset}`),r};getRewardsTotalUrl=t=>`${this.getCoreApiUrl()}/extended/v1/burnchain/rewards/${t}/total`;getRewardHoldersUrl=(t,e)=>{let r=`${this.getCoreApiUrl()}/extended/v1/burnchain/reward_slot_holders/${t}`;return e&&(r=`${r}?limit=${e.limit}&offset=${e.offset}`),r};getStackerInfoUrl=(t,e)=>`${this.getCoreApiUrl()}${this.readOnlyFunctionCallEndpoint}
    ${t}/${e}/get-stacker-info`;getNameInfo(t){let e=`${this.bnsLookupUrl}/v1/names/${t}`;return this.fetcher(e).then(r=>{if(r.status===404)throw new Error("Name not found");if(r.status!==200)throw new Error(`Bad response status: ${r.status}`);return r.json()}).then(r=>r.address?Object.assign({},r,{address:r.address}):r)}},l$2=class l extends i{version=cr.Testnet;chainId=ur.Testnet;constructor(t={url:p$3,fetcher:Hr}){super(t);}};

var $e$1=(r=>(r[r.OnChainOnly=1]="OnChainOnly",r[r.OffChainOnly=2]="OffChainOnly",r[r.Any=3]="Any",r))($e$1||{});cr.Mainnet;var ve$2=(n=>(n[n.Allow=1]="Allow",n[n.Deny=2]="Deny",n))(ve$2||{}),Ve$1=(r=>(r[r.STX=0]="STX",r[r.Fungible=1]="Fungible",r[r.NonFungible=2]="NonFungible",r))(Ve$1||{}),le=(n=>(n[n.Standard=4]="Standard",n[n.Sponsored=5]="Sponsored",n))(le||{}),De$1=(i=>(i[i.SerializeP2PKH=0]="SerializeP2PKH",i[i.SerializeP2SH=1]="SerializeP2SH",i[i.SerializeP2WPKH=2]="SerializeP2WPKH",i[i.SerializeP2WSH=3]="SerializeP2WSH",i))(De$1||{}),Nn=(i=>(i[i.MainnetSingleSig=22]="MainnetSingleSig",i[i.MainnetMultiSig=20]="MainnetMultiSig",i[i.TestnetSingleSig=26]="TestnetSingleSig",i[i.TestnetMultiSig=21]="TestnetMultiSig",i))(Nn||{}),ye$1=(n=>(n[n.Compressed=0]="Compressed",n[n.Uncompressed=1]="Uncompressed",n))(ye$1||{}),ge$1=(o=>(o[o.Equal=1]="Equal",o[o.Greater=2]="Greater",o[o.GreaterEqual=3]="GreaterEqual",o[o.Less=4]="Less",o[o.LessEqual=5]="LessEqual",o))(ge$1||{}),_e$2=(n=>(n[n.DoesNotOwn=16]="DoesNotOwn",n[n.Owns=17]="Owns",n))(_e$2||{}),Hn=(r=>(r[r.STX=0]="STX",r[r.Fungible=1]="Fungible",r[r.NonFungible=2]="NonFungible",r))(Hn||{}),On=(y=>(y.Serialization="Serialization",y.Deserialization="Deserialization",y.SignatureValidation="SignatureValidation",y.FeeTooLow="FeeTooLow",y.BadNonce="BadNonce",y.NotEnoughFunds="NotEnoughFunds",y.NoSuchContract="NoSuchContract",y.NoSuchPublicFunction="NoSuchPublicFunction",y.BadFunctionArgument="BadFunctionArgument",y.ContractAlreadyExists="ContractAlreadyExists",y.PoisonMicroblocksDoNotConflict="PoisonMicroblocksDoNotConflict",y.PoisonMicroblockHasUnknownPubKeyHash="PoisonMicroblockHasUnknownPubKeyHash",y.PoisonMicroblockIsInvalid="PoisonMicroblockIsInvalid",y.BadAddressVersionByte="BadAddressVersionByte",y.NoCoinbaseViaMempool="NoCoinbaseViaMempool",y.ServerFailureNoSuchChainTip="ServerFailureNoSuchChainTip",y.ServerFailureDatabase="ServerFailureDatabase",y.ServerFailureOther="ServerFailureOther",y))(On||{});var h$5=(o=>(o[o.TokenTransfer=0]="TokenTransfer",o[o.SmartContract=1]="SmartContract",o[o.ContractCall=2]="ContractCall",o[o.PoisonMicroblock=3]="PoisonMicroblock",o[o.Coinbase=4]="Coinbase",o))(h$5||{});function et$1(e){let t=new q$1;return t.appendByte(e.conditionType),t.push(tt$1(e.principal)),(e.conditionType===1||e.conditionType===2)&&t.push(it$1(e.assetInfo)),e.conditionType===2&&t.push(m$2(e.assetName)),t.appendByte(e.conditionCode),(e.conditionType===0||e.conditionType===1)&&t.push(Rr$1(e.amount,!1,8)),t.concatBuffer()}function tt$1(e){let t=new q$1;return t.push(Uint8Array.from([e.prefix])),t.push(_$2(e.address)),e.prefix===ge$2.Contract&&t.push($$2(e.contractName)),t.concatBuffer()}function it$1(e){let t=new q$1;return t.push(_$2(e.address)),t.push($$2(e.contractName)),t.push($$2(e.assetName)),t.concatBuffer()}var Yt=(i=>(i[i.PublicKeyCompressed=0]="PublicKeyCompressed",i[i.PublicKeyUncompressed=1]="PublicKeyUncompressed",i[i.SignatureCompressed=2]="SignatureCompressed",i[i.SignatureUncompressed=3]="SignatureUncompressed",i))(Yt||{});

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

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

var utils = {};

const require$$0$1 = /*@__PURE__*/getAugmentedNamespace(cryptoBrowser);

(function (exports) {
	/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.randomBytes = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.checkOpts = exports.Hash = exports.concatBytes = exports.toBytes = exports.utf8ToBytes = exports.asyncLoop = exports.nextTick = exports.hexToBytes = exports.bytesToHex = exports.isLE = exports.rotr = exports.createView = exports.u32 = exports.u8 = void 0;
	// The import here is via the package name. This is to ensure
	// that exports mapping/resolution does fall into place.
	const crypto_1 = require$$0$1;
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

var f$2=typeof document<"u",ee$1=(r=>(r.SessionStorageKey="stacks-session",r.NetworkStorageKey="stacks-network",r))(ee$1||{});var u$1=hr("localStorage",{returnEmptyObject:!0}),U$1={setItem:(e,t)=>{if(f$2)return u$1==null?void 0:u$1.setItem(e,t)},getItem:e=>{if(f$2){let t=u$1==null?void 0:u$1.getItem(e);if(t===null)throw new Error("defaultStorageAdapter: no value stored");return t}},removeItem:e=>{if(f$2)return u$1==null?void 0:u$1.removeItem(e)}},c=e=>e?p$4(getPublicKey(e,!0)):null;function K(e){return e==null?void 0:e.map(t=>typeof t!="string"?p$4(et$1(t)):t)}var d$1=(e,t)=>t?new Se("ES256k",t).sign(e):At(e);var l$1=async(e,t)=>{let r={...e,postConditions:K(e.postConditions)};return d$1(r,t)};var ce$1=(n=>(n.ContractCall="contract_call",n.ContractDeploy="smart_contract",n.STXTransfer="token_transfer",n))(ce$1||{});async function Tt({functionArgs:e,privateKey:t,...r}){let n=c(t),s={...r,functionArgs:e.map(o=>Ur(typeof o=="string"?o:Vt(o))),txType:"contract_call",publicKey:n};return l$1(s,t)}async function Pt({privateKey:e,...t}){let r={...t,publicKey:c(e),txType:"smart_contract"};return l$1(r,e)}async function It$1({privateKey:e,...t}){let r={...t,amount:typeof t.amount=="bigint"?Number(t.amount).toString(10):t.amount,publicKey:c(e),txType:"token_transfer"};return l$1(r,e)}function ge(e){let t=e.split(":");if(t.length!==3)throw new TypeError("Decentralized IDs must have 3 parts");if(t[0].toLowerCase()!=="did")throw new TypeError('Decentralized IDs must start with "did"');return t[1].toLowerCase()}function fe(e){return e&&ge(e)==="btc-addr"?e.split(":")[2]:void 0}async function B$1(e,t){let r=wt(e),s=r==null?void 0:r.payload,o;if(s.private_key)try{let i=Er(s.private_key);o=await pe$1({privateKey:t,cipherObject:i});}catch{console.error("[micro-stacks] failed to decrypt appPrivateKey");}return {addresses:s.profile.stxAddress,appPrivateKey:o,associationToken:s.associationToken,hubUrl:s.hubUrl,public_keys:s.public_keys,profile:s.profile,profile_url:s.profile_url,username:s.username,version:s.version,decentralizedID:s.iss,identityAddress:fe(s.iss)}}function y$4(){return hr("StacksProvider",{returnEmptyObject:!1,usageDesc:"authenticate",throwIfUnavailable:!0})}async function Nt(e,t=U$1,r=JSON.stringify){var n,s;if(!e.appDetails)throw Error("[micro-stacks] authenticate error: `authOptions.appDetails` are required for authentication");try{let o=p$4($$3()),a=await we(e,o),i=await B$1(a,o);return (n=e==null?void 0:e.onFinish)==null||n.call(e,i),t.setItem("stacks-session",r(i)),i}catch(o){(s=e==null?void 0:e.onCancel)==null||s.call(e,o.message);}}function Te(e,t){if(!e.appDetails)throw Error("[micro-stacks] authenticate error: `authOptions.appDetails` are required for authentication");let r=e.scopes||[],n=hr("location",{returnEmptyObject:!0}).origin;return {scopes:[...new Set(["store_write",...r])],redirect_uri:n,public_keys:[t],domain_name:n,appDetails:e.appDetails}}async function ve$1(e,t){return new Se("ES256k",t).sign(e)}async function be(e,t){let r=p$4(getPublicKey(t)),n=Te(e,r);return ve$1(n,t)}async function we(e,t){let r=y$4();if(!r)throw Error("This function can only be called on the client, and with the presence of StacksProvider");let n=await be(e,t);return r.authenticationRequest(n)}function p$2(e){return async function(r){let{token:n,onFinish:s,onCancel:o}=r;try{let a=y$4();if(!a)throw new Error("[micro-stacks/connect] No Stacks provider");let i=a[e];if(typeof i!="function")throw new Error(`[micro-stacks/connect] StacksProvider method ${e} not found`);let g=await i(n);s==null||s(g);}catch(a){o==null||o(a==null?void 0:a.message);}}}var Gt=p$2("transactionRequest"),F$2=p$2("signatureRequest"),_$1=p$2("structuredDataSignatureRequest");var H$2=(s=>(s.Chrome="https://chrome.google.com/webstore/detail/hiro-wallet/ldinpeekobnhjjdofggfgjlcehhmanlj",s.Firefox="https://addons.mozilla.org/en-US/firefox/addon/hiro-wallet/",s.Mobile="https://www.xverse.app",s.Browser="https://www.hiro.so/wallet/install-web",s))(H$2||{});var V=async e=>{let t={stxAddress:e.stxAddress,message:e.message,appDetails:e.appDetails??null,publicKey:c(e.privateKey),network:e.network};return d$1(t,e.privateKey)},De=async e=>{try{let t=await V({message:e.message,network:e.network,privateKey:e.privateKey,stxAddress:e.stxAddress,authOrigin:e.authOrigin,appDetails:e.appDetails});return F$2({token:t,onFinish:e.onFinish,onCancel:e.onCancel})}catch(t){console.error("[micro-stacks] handleSignMessageRequest failed"),console.error(t);}};var h$4=(e,t,r)=>pe({name:S$1(e),version:S$1(t),"chain-id":K$1(r)}),X=e=>{var o;let t=typeof e.message!="string"?Vt(e.message):e.message,r=h$4(e.domain.name,e.domain.version,e.domain.chainId??((o=e.network)==null?void 0:o.chainId)??ur.Mainnet),n=Vt(r),s={stxAddress:e.stxAddress,message:Ur(t),domain:Ur(n),appDetails:e.appDetails,publicKey:c(e.privateKey),network:e.network};return d$1(s,e==null?void 0:e.privateKey)},Ke=async e=>{try{let t=await X({message:e.message,domain:e.domain,privateKey:e.privateKey,stxAddress:e.stxAddress,authOrigin:e.authOrigin,appDetails:e.appDetails,network:e.network});return _$1({token:t,onFinish:e.onFinish,onCancel:e.onCancel})}catch(t){console.error("[micro-stacks] handleSignStructuredDataRequest failed"),console.error(t);}};var _e$1=9007199254740991;function w$3(e){if(e<0||e>_e$1||e%1!==0)throw new RangeError("value out of range")}var P$2=(e,t,r)=>{w$3(e);let n;if(t||(t=new Uint8Array(C$3(e))),!lr(t))throw new TypeError("uint8Array must be of Uint8Array type");return r||(r=0),e<253?(ut$2(t,e,r),n=1):e<=65535?(ut$2(t,253,r),ct$1(t,e,r+1),n=3):e<=4294967295?(ut$2(t,254,r),mt$1(t,e,r+1),n=5):(ut$2(t,255,r),mt$1(t,e>>>0,r+1),mt$1(t,e/4294967296|0,r+5),n=9),P$2.bytes=n,t};function C$3(e){return w$3(e),e<253?1:e<=65535?3:e<=4294967295?5:9}var Ve=`Stacks Signed Message:
`,D$1=utils.utf8ToBytes(Ve),We$1=`Stacks Message Signing:
`,I$2=utils.utf8ToBytes(We$1);function R$2(e,t=D$1){return f$5(z$3(e,t))}function z$3(e,t=D$1){let r=typeof e=="string"?utils.utf8ToBytes(e):e,n=P$2(r.length);return U$3([t,n,r])}var O$1=32;function $e(e){if(e.length<O$1*2*2+1)throw new Error("Invalid signature");let t=e.slice(0,2),r=e.slice(2,2+O$1*2),n=e.slice(2+O$1*2);return {recoveryBytes:d$3(t),r,s:n}}function Qe(e){return e.slice(-2)+e.slice(0,-2)}var Q$1=({hash:e,signature:t,recoveryBytes:r})=>recoverPublicKey(e,t,Number(r),!0),Z$2=e=>{let{signature:t,mode:r="rsv"}=e,{r:n,s,recoveryBytes:o}=$e(r==="rsv"?Qe(t):t);return {signature:new Signature(d$3(n),d$3(s)),recoveryBytes:o}},M$2=e=>{if(!e.publicKey&&!e.stxAddress)throw Error("[micro-stacks/connect[ verifyMessageSignature -- You must pass `stxAddress` if you are recovering the public key from the signature");let{message:t,mode:r="rsv"}=e,n=e.publicKey;try{let s=typeof t=="string"?R$2(t,e.prefix):t,{signature:o,recoveryBytes:a}=Z$2({signature:e.signature,mode:r});if(!n){let[i]=ee$2(e.stxAddress);n=p$4(Q$1({hash:s,signature:o,recoveryBytes:a}));let g=qe$1(n,i);if(g!==e.stxAddress)return console.error(`[micro-stacks/connect] verifyMessageSignature Stacks address is not correct. expected: ${e.stxAddress}, received: ${g}`),!1}return verify(o,s,n,{strict:!1})}catch(s){return console.error("[micro-stacks/connect] verifyMessageSignature failed",s),!1}},Ze$1=e=>M$2(e)||M$2({...e,prefix:I$2});

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
  const api = { setState, getState, subscribe, destroy };
  state = createState(
    setState,
    getState,
    api
  );
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
    return config(
      (...args) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
        );
        set(...args);
      },
      get,
      api
    );
  }
  const thenableSerialize = toThenable(options.serialize);
  const setItem = () => {
    const state = options.partialize({ ...get() });
    let errorInSync;
    const thenable = thenableSerialize({ state, version: options.version }).then(
      (serializedValue) => storage.setItem(options.name, serializedValue)
    ).catch((e) => {
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
  const configResult = config(
    (...args) => {
      set(...args);
      void setItem();
    },
    get,
    api
  );
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
            return options.migrate(
              deserializedStorageValue.state,
              deserializedStorageValue.version
            );
          }
          console.error(
            `State loaded from storage couldn't be migrated since no migrate function was provided`
          );
        } else {
          return deserializedStorageValue.state;
        }
      }
    }).then((migratedState) => {
      var _a2;
      stateFromStorage = options.merge(
        migratedState,
        (_a2 = get()) != null ? _a2 : configResult
      );
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

var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
}

function z$2(r){return r=f$1(r),r=u(r),a$1(r)}function f$1(r){let n=/(^|[^\\]);.*/g;return r.replace(n,function(e,t){return t||""})}function u(r){let n=[],e=/\([\s\S]*?\)/gim,t=e.exec(r);for(;t!==null;){let i=t[0].replace(/\s+/gm," ");n.push({match:t,replacement:i}),t=e.exec(r);}let s=r.split("");for(let i of n){let{match:o,replacement:c}=i;s.splice(o.index,o[0].length,c);}return s.join("").replace(/\(|\)/gim," ")}function a$1(r){let n={},e=r.split(`
`);for(let t of e){if(!t||!t.trim())continue;let s=t.toUpperCase();/\s+TXT\s+/.test(s)?(n.txt=n.txt||[],n.txt.push(h$3(t))):s.indexOf("$ORIGIN")===0?n.$origin=t.split(/\s+/g)[1]:s.indexOf("$TTL")===0?n.$ttl=parseInt(t.split(/\s+/g)[1],10):/\s+SOA\s+/.test(s)?n.soa=l(t):/\s+NS\s+/.test(s)?(n.ns=n.ns||[],n.ns.push(g(t))):/\s+A\s+/.test(s)?(n.a=n.a||[],n.a.push(T$1(t,n.a))):/\s+AAAA\s+/.test(s)?(n.aaaa=n.aaaa||[],n.aaaa.push(m$1(t))):/\s+CNAME\s+/.test(s)?(n.cname=n.cname||[],n.cname.push(y$3(t))):/\s+MX\s+/.test(s)?(n.mx=n.mx||[],n.mx.push(N$2(t))):/\s+PTR\s+/.test(s)?(n.ptr=n.ptr||[],n.ptr.push(d(t,n.ptr,n.$origin))):/\s+SRV\s+/.test(s)?(n.srv=n.srv||[],n.srv.push(I$1(t))):/\s+SPF\s+/.test(s)?(n.spf=n.spf||[],n.spf.push(A$2(t))):/\s+URI\s+/.test(s)&&(n.uri=n.uri||[],n.uri.push(R$1(t)));}return n}function l(r){let n={},e=r.trim().split(/\s+/g),t=e.length;return n.name=e[0],n.minimum=parseInt(e[t-1],10),n.expire=parseInt(e[t-2],10),n.retry=parseInt(e[t-3],10),n.refresh=parseInt(e[t-4],10),n.serial=parseInt(e[t-5],10),n.rname=e[t-6],n.mname=e[t-7],isNaN(e[1])||(n.ttl=parseInt(e[1],10)),n}function g(r){let n=r.trim().split(/\s+/g),e=n.length,t={name:n[0],host:n[e-1]};return isNaN(n[1])||(t.ttl=parseInt(n[1],10)),t}function T$1(r,n){let e=r.trim().split(/\s+/g),t=r.trim().toUpperCase().split(/\s+/g),s=e.length,i={name:e[0],ip:e[s-1]};return t.lastIndexOf("A")===0&&(n.length?i.name=n[n.length-1].name:i.name="@"),isNaN(e[1])||(i.ttl=parseInt(e[1],10)),i}function m$1(r){let n=r.trim().split(/\s+/g),e=n.length,t={name:n[0],ip:n[e-1]};return isNaN(n[1])||(t.ttl=parseInt(n[1],10)),t}function y$3(r){let n=r.trim().split(/\s+/g),e=n.length,t={name:n[0],alias:n[e-1]};return isNaN(n[1])||(t.ttl=parseInt(n[1],10)),t}function N$2(r){let n=r.trim().split(/\s+/g),e=n.length,t={name:n[0],preference:parseInt(n[e-2],10),host:n[e-1]};return isNaN(n[1])||(t.ttl=parseInt(n[1],10)),t}function h$3(r){let n=r.trim().match(/[^\s"']+|"[^"]*"|'[^']*'/g);if(!n)throw new Error("Failure to tokenize TXT record");let e=n.length,t=n.indexOf("TXT");function s(c){return c.indexOf('"')>-1&&(c=c.split('"')[1]),c}let i;e-t-1>1?i=[...n.slice(t+1).map(s)]:i=s(n[e-1]);let o={name:n[0],txt:i};return isNaN(n[1])||(o.ttl=parseInt(n[1],10)),o}function d(r,n,e){let t=r.trim().split(/\s+/g);r.trim().toUpperCase().split(/\s+/g).lastIndexOf("PTR")===0&&n[n.length-1]&&t.unshift(n[n.length-1].name);let i=t.length,o={name:t[0],fullname:`${t[0]}.${e}`,host:t[i-1]};return isNaN(t[1])||(o.ttl=parseInt(t[1],10)),o}function I$1(r){let n=r.trim().split(/\s+/g),e=n.length,t={name:n[0],target:n[e-1],priority:parseInt(n[e-4],10),weight:parseInt(n[e-3],10),port:parseInt(n[e-2],10)};return isNaN(n[1])||(t.ttl=parseInt(n[1],10)),t}function A$2(r){let n=r.trim().split(/\s+/g),e={name:n[0],data:""},t=n.length;for(;t-- >4;)e.data=n[t]+" "+e.data.trim();return isNaN(n[1])||(e.ttl=parseInt(n[1],10)),e}function R$1(r){let n=r.trim().split(/\s+/g),e=n.length,t={name:n[0],target:n[e-1].replace(/"/g,""),priority:parseInt(n[e-3],10),weight:parseInt(n[e-2],10)};return isNaN(n[1])||(t.ttl=parseInt(n[1],10)),t}

var ae=Object.defineProperty;var ce=(r,e,t)=>e in r?ae(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var z$1=(r,e,t)=>(ce(r,typeof e!="symbol"?e+"":e,t),t);function de(r){return (r==null?void 0:r.map(e=>({...e,domain:e.path})))??null}function M$1(r){let{hubInfo:e,privateKey:t,gaiaHubUrl:o,associationToken:n=null,scopes:s}=r,{challenge_text:i}=e,a=p$4(getPublicKey(t,!0)),u=$$3(16).toString();return {gaiaChallenge:i,hubUrl:o,iss:a,salt:u,associationToken:n,scopes:de(s)}}function ye(r){let e=M$1(r);return `v1:${new Se("ES256K",r.privateKey).signSync(e)}`}var J$1={challenge_text:'["gaiahub","0","storage2.blockstack.org","blockstack_storage_please_sign"]',latest_auth_version:"v1",max_file_upload_size_megabytes:20,read_url_prefix:"https://gaia.blockstack.org/hub/"};function je(r){let{gaiaHubUrl:e,privateKey:t,associationToken:o,scopes:n}=r,s=J$1,{read_url_prefix:i,max_file_upload_size_megabytes:a}=s,u=ye({hubInfo:s,privateKey:t,gaiaHubUrl:e,associationToken:o,scopes:n});return {address:ar(t),url_prefix:i,token:u,server:e,max_file_upload_size_megabytes:a??20}}var w$2={MISSING_PARAMETER:"missing_parameter",REMOTE_SERVICE_ERROR:"remote_service_error",INVALID_STATE:"invalid_state",NO_SESSION_DATA:"no_session_data",DOES_NOT_EXIST:"does_not_exist",FAILED_DECRYPTION_ERROR:"failed_decryption_error",INVALID_DID_ERROR:"invalid_did_error",NOT_ENOUGH_FUNDS_ERROR:"not_enough_error",INVALID_AMOUNT_ERROR:"invalid_amount_error",LOGIN_FAILED_ERROR:"login_failed",SIGNATURE_VERIFICATION_ERROR:"signature_verification_failure",CONFLICT_ERROR:"conflict_error",NOT_ENOUGH_PROOF_ERROR:"not_enough_proof_error",BAD_PATH_ERROR:"bad_path_error",VALIDATION_ERROR:"validation_error",PAYLOAD_TOO_LARGE_ERROR:"payload_too_large_error",PRECONDITION_FAILED_ERROR:"precondition_failed_error",UNKNOWN:"unknown"};Object.freeze(w$2);var k$1=class k extends Error{message;code;parameter;constructor(e){super();let t=e.message,o=`Error Code: ${e.code}`,n=this.stack;if(n)o+=`Stack Trace:
${n}`;else try{throw new Error}catch(s){n=s.stack;}t+=`
If you believe this exception is caused by a bug in blockstack.js,
      please file a bug report: https://github.com/blockstack/blockstack.js/issues

${o}`,this.message=t,this.code=e.code,this.parameter=e.parameter?e.parameter:void 0;}toString(){return `${super.toString()}
    code: ${this.code} param: ${this.parameter?this.parameter:"n/a"}`}};var y$2=class y extends k$1{constructor(e){let t=`Failed to verify signature: ${e}`;super({code:w$2.SIGNATURE_VERIFICATION_ERROR,message:t}),this.message=t,this.name="SignatureVerificationError";}};var b$1=class b extends k$1{hubError;constructor(e,t){super(e),t&&(this.hubError={statusCode:t.status,statusText:t.statusText},typeof t.body=="string"?this.hubError.message=t.body:typeof t.body=="object"&&Object.assign(this.hubError,t.body));}},x$1=class x extends b$1{constructor(e,t){super({message:e,code:w$2.DOES_NOT_EXIST},t),this.name="DoesNotExist";}},P$1=class P extends b$1{constructor(e,t){super({message:e,code:w$2.CONFLICT_ERROR},t),this.name="ConflictError";}},v=class extends b$1{constructor(e,t){super({message:e,code:w$2.NOT_ENOUGH_PROOF_ERROR},t),this.name="NotEnoughProofError";}},S=class extends b$1{constructor(e,t){super({message:e,code:w$2.BAD_PATH_ERROR},t),this.name="BadPathError";}},C$2=class C extends b$1{constructor(e,t){super({message:e,code:w$2.VALIDATION_ERROR},t),this.name="ValidationError";}},E$1=class E extends b$1{hubError;maxUploadByteSize;constructor(e,t,o){super({message:e,code:w$2.PAYLOAD_TOO_LARGE_ERROR},t),this.name="PayloadTooLargeError",this.maxUploadByteSize=o;}},L$1=class L extends b$1{constructor(e,t){super({message:e,code:w$2.PRECONDITION_FAILED_ERROR},t),this.name="PreconditionFailedError";}};async function me(r){let e="",t;try{e=await r.text();try{t=JSON.parse(e);}catch{}}catch(i){console.debug(`Error getting bad http response text: ${i}`);}let o=r.status,n=r.statusText;return {status:o,statusText:n,body:t||e}}function G(r){return Number.isFinite(r)?Math.floor(r*1024*1024):0}async function R(r,e,t){if(r.ok)throw new Error("Cannot get a Stacks from a valid response.");let o=await me(r);if(o.status===401)throw new C$2(e,o);if(o.status===402)throw new v(e,o);if(o.status===403)throw new S(e,o);if(o.status===404)throw new x$1(e,o);if(o.status===409)throw new P$1(e,o);if(o.status===412)throw new L$1(e,o);if(o.status===413){let n=t&&t.max_file_upload_size_megabytes?G(t.max_file_upload_size_megabytes):0;throw new E$1(e,o,n)}else throw new Error(e)}function Z$1(r){if(!r||!r.hubError||!r.hubError.statusCode)return !1;let e=r.hubError.statusCode;return e===401||e===409||e>=500&&e<=599}async function A$1(r){let{filename:e,contents:t,hubConfig:o,contentType:n="application/octet-stream"}=r,s={"Content-Type":n,Authorization:`bearer ${o.token}`},i=await Hr(`${o.server}/store/${o.address}/${e}`,{method:"POST",headers:s,body:t});if(!i.ok)throw await R(i,"Error when uploading to Gaia hub.",o);let a=await i.text();return JSON.parse(a)}function I(r,e){return Promise.resolve(`${e.url_prefix}${e.address}/${r}`)}var h$2=".sig",U="https://stacks-node-api.stacks.co/v1/names";var $$1=class ${content;wasString;contentType;contentByteLength;loadedData;constructor(e,t){this.wasString=typeof e=="string",this.content=$$1.normalizeContentDataType(e,t),this.contentType=t||this.detectContentType(),this.contentByteLength=this.detectContentLength();}static normalizeContentDataType(e,t){try{if(typeof e=="string"){let o=(t||"").toLowerCase().replace("-","");if(o.includes("charset")&&!o.includes("charset=utf8")&&!o.includes("charset=ascii"))throw new Error(`Unable to determine byte length with charset: ${t}`);return new TextEncoder().encode(e)}else {if(e instanceof Uint8Array)return e;if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);if(typeof Blob<"u"&&e instanceof Blob)return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(Array.isArray(e)){if(e.length>0&&(!Number.isInteger(e[0])||e[0]<0||e[0]>255))throw new Error(`Unexpected array values provided as file data: value "${e[0]}" at index 0 is not an octet number. ${this.supportedTypesMsg}`);return new Uint8Array(e)}else {let o=Object.prototype.toString.call(e);throw new Error(`Unexpected type provided as file data: ${o}. ${this.supportedTypesMsg}`)}}}catch(o){throw console.error(o),new Error(`Error processing data: ${o}`)}}detectContentType(){return this.wasString?"text/plain; charset=utf-8":typeof Blob<"u"&&this.content instanceof Blob&&this.content.type?this.content.type:"application/octet-stream"}detectContentLength(){if(ArrayBuffer.isView(this.content)||this.content instanceof Uint8Array)return this.content.byteLength;if(typeof Blob<"u"&&this.content instanceof Blob)return this.content.size;let e=Object.prototype.toString.call(this.content),t=new Error(`Unexpected type "${e}" while detecting content length`);throw console.error(t),t}async loadContent(){try{if(this.content instanceof Uint8Array)return this.content;if(ArrayBuffer.isView(this.content))return new Uint8Array(this.content.buffer,this.content.byteOffset,this.content.byteLength);if(typeof Blob<"u"&&this.content instanceof Blob){let e=new FileReader;return await new Promise((n,s)=>{e.onerror=i=>{s(i);},e.onload=()=>{let i=e.result;n(new Uint8Array(i));},e.readAsArrayBuffer(this.content);})}else {let e=Object.prototype.toString.call(this.content);throw new Error(`Unexpected type ${e}`)}}catch(e){console.error(e);let t=new Error(`Error loading content: ${e}`);throw console.error(t),t}}load(){return this.loadedData===void 0&&(this.loadedData=this.loadContent()),this.loadedData}},O=$$1;z$1(O,"supportedTypesMsg","Supported types are: `string` (to be UTF8 encoded), `Uint8Array`, `Blob`, `File`, `ArrayBuffer`, `UInt8Array` or any other typed array buffer. ");async function nt(r,e,t){let{privateKey:o}=t,{encrypt:n,sign:s,gaiaHubConfig:i,cipherTextEncoding:a}=t,{contentType:u=""}=t,c=G(i.max_file_upload_size_megabytes),g=c>0,l=new O(e,u);if(u=l.contentType,!n&&g&&l.contentByteLength>c){let p=`The max file upload size for this hub is ${c} bytes, the given content is ${l.contentByteLength} bytes`,f=new E$1(p,null,c);throw console.error(f),f}if(n&&g&&a){let p=Kt({contentLength:l.contentByteLength,wasString:l.wasString,sign:!!s,cipherTextEncoding:a});if(p>c){let f=`The max file upload size for this hub is ${c} bytes, the given content is ${p} bytes after encryption`,d=new E$1(f,null,c);throw console.error(d),d}}let m;if(!n&&s){let p=await l.load();if(typeof s=="string")o=s;else if(!o)throw Error("Need to pass private key");let f=await ce$2({contents:p,privateKey:o});m=async d=>(await Promise.all([A$1({filename:r,contents:p,hubConfig:d,contentType:u}),A$1({filename:`${r}${h$2}`,contents:JSON.stringify(f),hubConfig:d,contentType:"application/json"})]))[0].publicURL;}else {let p;if(!n&&!s)p=l.content;else {let f;if(typeof n=="string")f=n;else if(typeof s=="string")f=p$4(getPublicKey(s,!0));else if(o)f=p$4(getPublicKey(o,!0));else throw new Error("No private key passed");let d=await l.load(),_=await Rr(d,{publicKey:f,wasString:l.wasString,cipherTextEncoding:a,privateKey:o});if(p=JSON.stringify(_),o){let{signature:K,publicKey:T}=await ce$2({contents:_,privateKey:o});p=JSON.stringify({signature:K,publicKey:T,cipherText:_});}u="application/json";}m=async f=>(await A$1({filename:r,contents:p,hubConfig:f,contentType:u})).publicURL;}try{return await m(i)}catch(p){if(Z$1(p))return console.error(p),console.error("Possible recoverable error during Gaia upload, retrying..."),await m(i);throw p}}function q(r){if(!r.hasOwnProperty("uri")||!Array.isArray(r.uri)||r.uri.length<1)return null;let e=r.uri[0];if(!e.hasOwnProperty("target"))return null;let t=e.target;return t.startsWith("https")||t.startsWith("http")||(t=`https://${t}`),t}function N$1(r,e){let t;return e.proof&&e.proof.url&&(t=e.proof.url),{"@type":"Account",service:r,identifier:e.username,proofType:"http",proofUrl:t}}function H$1(r){let e={"@type":"Person"};if(r){r.name&&r.name.formatted&&(e.name=r.name.formatted),r.bio&&(e.description=r.bio),r.location&&r.location.formatted&&(e.address={"@type":"PostalAddress",addressLocality:r.location.formatted});let t=[];r.avatar&&r.avatar.url&&t.push({"@type":"ImageObject",name:"avatar",contentUrl:r.avatar.url}),r.cover&&r.cover.url&&t.push({"@type":"ImageObject",name:"cover",contentUrl:r.cover.url}),t.length&&(e.image=t),r.website&&(e.website=[{"@type":"WebSite",url:r.website}]);let o=[];r.bitcoin&&r.bitcoin.address&&o.push({"@type":"Account",role:"payment",service:"bitcoin",identifier:r.bitcoin.address}),r.twitter&&r.twitter.username&&o.push(N$1("twitter",r.twitter)),r.facebook&&r.facebook.username&&o.push(N$1("facebook",r.facebook)),r.github&&r.github.username&&o.push(N$1("github",r.github)),r.auth&&r.auth.length>0&&r.auth[0]&&r.auth[0].publicKeychain&&o.push({"@type":"Account",role:"key",service:"bip32",identifier:r.auth[0].publicKeychain}),r.pgp&&r.pgp.url&&o.push({"@type":"Account",role:"key",service:"pgp",identifier:r.pgp.fingerprint,contentUrl:r.pgp.url}),e.account=o;}return e}function _e(r,e){let t=wt(r);if(!t)throw Error("no decoded token");let o=t.payload;if(typeof o=="string")throw new Error("Unexpected token payload type of string");if(o.hasOwnProperty("subject")&&o.subject){if(!o.subject.hasOwnProperty("publicKey"))throw new Error("Token doesn't have a subject public key")}else throw new Error("Token doesn't have a subject");if(o.hasOwnProperty("issuer")&&o.issuer){if(!o.issuer.hasOwnProperty("publicKey"))throw new Error("Token doesn't have an issuer public key")}else throw new Error("Token doesn't have an issuer");if(!o.hasOwnProperty("claim"))throw new Error("Token doesn't have a claim");let n=o.issuer.publicKey,s=qe$1(n);if(e!==n){if(e!==s)throw new Error("Token issuer public key does not match the verifying value")}let i=new we$1(t.header.alg,n);if(!i)throw new Error("Invalid token verifier");if(!i.verify(r))throw new Error("Token verification failed");return t}function ee(r,e){let t=e?_e(r,e):wt(r);if(t&&t.hasOwnProperty("payload")){let o=t.payload;if(typeof o=="string")throw new Error("[micro-stacks] extractProfile: Unexpected token payload type of string");if(o.hasOwnProperty("claim"))return o.claim}return {}}async function te(r,e){let t=z$2(r);if(t.hasOwnProperty("$origin")||(t=null),!(t&&Object.keys(t).length>0))return H$1(JSON.parse(r));let n=q(t);if(n)try{let i=await(await Hr(n)).json();return ee(i[0].token,e)}catch(s){throw console.error(`[micro-stacks] resolveZoneFileToProfile: error fetching token file ${n}: ${s}`),s}return console.debug("[micro-stacks] Token file url not found. Resolving to blank profile."),{}}async function re(r){let{username:e,zoneFileLookupURL:t=U}=r;if(!e)return Promise.reject();let o=`${t.replace(/\/$/,"")}/${r.username}`,s=await(await Hr(o)).json();if(s.hasOwnProperty("zonefile")&&s.hasOwnProperty("address"))return await te(s.zonefile,r.verify?s.address:void 0);throw new Error("Invalid zonefile lookup response: did not contain `address` or `zonefile` field")}async function oe(r,e,t,o){let n=await re({username:e,zoneFileLookupURL:o}),s;if(!!n)return n.hasOwnProperty("apps")?n.apps.hasOwnProperty(t)&&(s=`${n.apps[t].replace(/\/?(\?|#|$)/,"/$1")}${r}`):n.hasOwnProperty("appsMeta")&&n.appsMeta.hasOwnProperty(t)&&(s=`${n.appsMeta[t].replace(/\/?(\?|#|$)/,"/$1")}${r}`),s}async function ve(r,e){let t;if(e.username?t=await oe(r,e.username,e.app,e.zoneFileLookupURL):t=await I(r,e.gaiaHubConfig),t)return t;throw new Error("Missing readURL")}async function D(r){let{app:e,username:t,zoneFileLookupURL:o,gaiaHubConfig:n}=r,s;t?s=await oe("/",t,e,o):n&&(s=await I("/",n));let i=/([13][a-km-zA-HJ-NP-Z0-9]{26,35})/.exec(s);if(!i)throw new Error("Failed to parse gaia address");return i[i.length-1]}async function F$1(r){let{path:e,forceText:t,app:o,username:n,zoneFileLookupURL:s,gaiaHubConfig:i}=r,a=await ve(e,{app:o,username:n,zoneFileLookupURL:s,gaiaHubConfig:i}),u=await Hr(a);if(!u.ok)throw await R(u,`getFile ${e} failed.`,null);let c=u.headers.get("Content-Type");if(typeof c=="string"&&(c=c.toLowerCase()),t||c===null||c.startsWith("text")||c.startsWith("application/json"))return u.text();{let g=await u.arrayBuffer();return pr$1(g)}}async function ne(r,e){let{app:t,username:o,zoneFileLookupURL:n,gaiaHubConfig:s}=e,i=`${r}${h$2}`;try{let[a,u,c]=await Promise.all([F$1({path:r,app:t,username:o,zoneFileLookupURL:n,forceText:!1,gaiaHubConfig:s}),F$1({path:i,app:t,username:o,zoneFileLookupURL:n,forceText:!0,gaiaHubConfig:s}),D({app:t,username:o,zoneFileLookupURL:n,gaiaHubConfig:s})]);if(!a)return a;if(!c)throw new y$2(`Failed to get gaia address for verification of: ${r}`);if(!u||typeof u!="string")throw new y$2(`Failed to obtain signature for file: ${r} -- looked in ${r}${h$2}`);let g,l;try{let d=JSON.parse(u);g=d.signature,l=d.publicKey;}catch(d){throw d instanceof SyntaxError?new Error(`Failed to parse signature content JSON (path: ${r}${h$2}) The content may be corrupted.`):d}let m=pr(l),p=typeof a=="string"?dr(a):a,f=xr({signature:g,contents:p,publicKey:l});if(c!==m)throw new y$2(`Signer pubkey address (${m}) doesn't match gaia address (${c})`);if(f)return a;throw new y$2(`Contents do not match ECDSA signature: path: ${r}, signature: ${r}${h$2}`)}catch(a){throw a instanceof x$1&&a.message.indexOf(i)>=0?new y$2(`Failed to obtain signature for file: ${r} -- looked in ${r}${h$2}`):a}}async function ie(r){let{path:e,storedContents:t,app:o,privateKey:n,username:s,zoneFileLookupURL:i,gaiaHubConfig:a}=r,u=n,c=u?getPublicKey(u,!0):null,g=null;if(s||a?g=await D({app:o,username:s,zoneFileLookupURL:i,gaiaHubConfig:a}):c&&(g=pr(c)),!g)throw new y$2(`Failed to get gaia address for verification of: ${e}`);let l;try{l=JSON.parse(t);}catch(T){throw T instanceof SyntaxError?new Error("Failed to parse encrypted, signed content JSON. The content may not be encrypted. If using getFile, try passing { verify: false, decrypt: false }."):T}let m=l.signature,p=l.publicKey,f=l.cipherText,d=pr(p);if(!p||!f||!m)throw new y$2(`Failed to get signature verification data from file: ${e}`);if(d!==g)throw new y$2(`Signer pubkey address (${d}) doesn't match gaia address (${g})`);if(!xr({signature:m,contents:f,publicKey:p}))throw new y$2(`Contents do not match ECDSA signature in file: ${e}`);if(!n)throw Error("Private key needs to be passed in order to decrypt content");return Ir(f,{privateKey:n})}async function Bt(r,e){let t={decrypt:!0,verify:!1,app:hr("location",{returnEmptyObject:!0}).origin,zoneFileLookupURL:U,...e};if(t.verify&&!t.decrypt)return ne(r,t);let o=await F$1({path:r,app:t.app,username:t.username,zoneFileLookupURL:t.zoneFileLookupURL,forceText:!!t.decrypt,gaiaHubConfig:t.gaiaHubConfig});if(o===null)return o;if(typeof o!="string")throw new Error("[micro-stacks/storage] Expected to get back a string for the cipherText");let n=!!t.verify,s=!!t.decrypt,i=typeof t.decrypt=="string"?t.decrypt:t.privateKey;if(o.includes("signature")&&o.includes("publicKey")&&(n=!0),o.includes("cipherText")&&o.includes("ephemeralPK")&&(s=!0),!n&&!s)return o;let a=!o.includes("cipherText");if(s&&a)throw new Error(`[micro-stacks/storage] Expected to get back a string that includes cipherText, is it encrypted? got back: ${JSON.stringify(o)}`);if(!i)throw new Error("[micro-stacks/storage] No private key was passed to getFile, a private key needs to be passed if decrypt is set to true");if(!n)return Ir(o,{privateKey:i});if(s&&n)return ie({path:r,storedContents:o,app:t.app,privateKey:i,username:t.username,zoneFileLookupURL:t.zoneFileLookupURL,gaiaHubConfig:t.gaiaHubConfig});throw new Error("[micro-stacks/storage] Should be unreachable.")}

var es6 = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }


    if ((a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      for (i of a.entries())
        if (!equal(i[1], b.get(i[0]))) return false;
      return true;
    }

    if ((a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      return true;
    }

    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }


    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

var et="micro-stacks",M={getItem:n=>null,setItem:(n,t)=>{},removeItem:n=>{}},F=st({storage:typeof window<"u"?window.localStorage:M,serialize:JSON.stringify,deserialize:JSON.parse});function st({storage:n,key:t=et,serialize:e,deserialize:s}){return {...n,getItem:(i,r=null)=>{let o=`${t}.${i.replace(`${t}.`,"")}`,a=n.getItem(o);if(!s)return a??r;try{return a?s(a):r}catch(d){return console.warn(d),r}},setItem:(i,r)=>{let o=`${t}.${i.replace(`${t}.`,"")}`;if(r===null)n.removeItem(o);else try{let a=e?e(r):r;n.setItem(o,a);}catch(a){console.error(a);}},removeItem:i=>n.removeItem(`${t}.${i}`)}}function P(n){return `[@micro-stacks/client] ${n}`}function h$1(n,t){invariant(n,P(t));}var B=(s=>(s.ContractCall="contract_call",s.TokenTransfer="token_transfer",s.ContractDeploy="contract_deploy",s))(B||{}),L=(i=>(i.Authentication="status/Authentication",i.TransactionSigning="status/TransactionSigning",i.MessageSigning="status/MessageSigning",i.StructuredMessageSigning="status/StructuredMessageSigning",i))(L||{}),z=(e=>(e.IsLoading="status/IsLoading",e.IsIdle="status/IsIdle",e))(z||{}),b="store",C$1=typeof document>"u";var it=function(n){var t=n.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);return t};function A(n){if(!!n&&!/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(n)&&!/%[^0-9a-f]/i.test(n)&&!/%[0-9a-f](:?[^0-9a-f]|$)/i.test(n)){var t=[],e="",s="",i="",r="",o="",a="";if(t=it(n),e=t[1],s=t[2],i=t[3],r=t[4],o=t[5],!!(e&&e.length&&i.length>=0)){if(s&&s.length){if(!(i.length===0||/^\//.test(i)))return}else if(/^\/\//.test(i))return;if(!!/^[a-z][a-z0-9\+\-\.]*$/.test(e.toLowerCase()))return a+=e+":",s&&s.length&&(a+="//"+s),a+=i,r&&r.length&&(a+="?"+r),o&&o.length&&(a+="#"+o),a}}}var ot="(?<domain>([^?#]*)) wants you to sign in with your Stacks account:",at="\\n(?<address>S[A-Z0-9]{40})\\n\\n",ct="((?<statement>[^\\n]+)\\n)?",H="(([^:?#]+):)?(([^?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?",dt=`\\nURI: (?<uri>${H}?)`,ut="\\nVersion: (?<version>1)",lt="\\nChain ID: (?<chainId>[0-9]+)",ht="\\nNonce: (?<nonce>[a-zA-Z0-9]{8,})",E="([0-9]+)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])[Tt]([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(.[0-9]+)?(([Zz])|([+|-]([01][0-9]|2[0-3]):[0-5][0-9]))",gt=`\\nIssued At: (?<issuedAt>${E})`,St=`(\\nExpiration Time: (?<expirationTime>${E}))?`,ft=`(\\nNot Before: (?<notBefore>${E}))?`,pt="(\\nRequest ID: (?<requestId>[-._~!$&'()*+,;=:@%a-zA-Z0-9]*))?",It=`(\\nResources:(?<resources>(\\n- ${H}?)+))?`,yt=`^${ot}${at}${ct}${dt}${ut}${lt}${ht}${gt}${St}${ft}${pt}${It}$`,m=class{domain;address;statement;uri;version;chainId;nonce;issuedAt;expirationTime;notBefore;requestId;resources;match;constructor(t){var i,r,o,a,d,u,S,l,c,g,v,D,K,V;let s=new RegExp(yt,"g").exec(t);if(!s)throw new Error("Message did not match the regular expression.");if(this.match=s,this.domain=(i=s==null?void 0:s.groups)==null?void 0:i.domain,this.domain.length===0||!/[^#?]*/.test(this.domain))throw new Error("Domain cannot be empty.");if(this.address=(r=s==null?void 0:s.groups)==null?void 0:r.address,!Xt(this.address))throw new Error("Invalid address.");if(this.statement=(o=s==null?void 0:s.groups)==null?void 0:o.statement,this.uri=(a=s==null?void 0:s.groups)==null?void 0:a.uri,!A(this.uri))throw new Error("Invalid URI.");this.version=(d=s==null?void 0:s.groups)==null?void 0:d.version,this.nonce=(u=s==null?void 0:s.groups)==null?void 0:u.nonce,this.chainId=parseInt((S=s==null?void 0:s.groups)==null?void 0:S.chainId),this.issuedAt=(l=s==null?void 0:s.groups)==null?void 0:l.issuedAt,this.expirationTime=(c=s==null?void 0:s.groups)==null?void 0:c.expirationTime,this.notBefore=(g=s==null?void 0:s.groups)==null?void 0:g.notBefore,this.requestId=(v=s==null?void 0:s.groups)==null?void 0:v.requestId,this.resources=(K=(D=s==null?void 0:s.groups)==null?void 0:D.resources)==null?void 0:K.split(`
- `).slice(1),((V=this.resources)==null?void 0:V.length)>0&&this.resources.forEach(U=>{if(!A(U))throw new Error(`${U} is not a valid resource.`)});}};var W=["signature","domain","nonce","time"],f=class{constructor(t,e,s){this.type=t,this.expected=e,this.received=s;}type;expected;received};var w$1=class w{domain;address;statement;uri;version;chainId;nonce;issuedAt;expirationTime;notBefore;requestId;resources;constructor(t){typeof t=="string"&&(t=new m(t)),this.domain=t.domain,this.address=t.address,this.statement=t.statement,this.uri=t.uri,this.version=t.version,this.nonce=t.nonce,this.issuedAt=t.issuedAt,this.expirationTime=t.expirationTime,this.notBefore=t.notBefore,this.requestId=t.requestId,this.chainId=t.chainId,this.resources=t.resources,typeof this.chainId=="string"&&(this.chainId=parseInt(this.chainId)),this.validateMessage();}toMessage(){this.validateMessage();let t=`${this.domain} wants you to sign in with your Stacks account:`,e=`URI: ${this.uri}`,s=[t,this.address].join(`
`),i=`Version: ${this.version}`,r="Chain ID: "+this.chainId||"1",o=`Nonce: ${this.nonce}`,a=[e,i,r,o];if(this.issuedAt&&Date.parse(this.issuedAt),this.issuedAt=this.issuedAt?this.issuedAt:new Date().toISOString(),a.push(`Issued At: ${this.issuedAt}`),this.expirationTime){let u=`Expiration Time: ${this.expirationTime}`;a.push(u);}this.notBefore&&a.push(`Not Before: ${this.notBefore}`),this.requestId&&a.push(`Request ID: ${this.requestId}`),this.resources&&a.push(["Resources:",...this.resources.map(u=>`- ${u}`)].join(`
`));let d=a.join(`
`);return s=[s,this.statement].join(`

`),this.statement&&(s+=`
`),[s,d].join(`
`)}prepareMessage(){let t;switch(this.version){case"1":{t=this.toMessage();break}default:{t=this.toMessage();break}}return t}async verify(t){return new Promise(async(e,s)=>{Object.keys(t).forEach(c=>{W.includes(c)||s({success:!1,data:this,error:new Error(`${c} is not a valid key for VerifyParams.`)});});let i=c=>{s(c);},{signature:r,domain:o,nonce:a,time:d}=t;o&&o!==this.domain&&i({success:!1,data:this,error:new f("Domain do not match provided domain for verification.",o,this.domain)}),a&&a!==this.nonce&&i({success:!1,data:this,error:new f("Nonce do not match provided nonce for verification.",a,this.nonce)});let u=new Date(d||new Date);if(this.expirationTime){let c=new Date(this.expirationTime);u.getTime()>=c.getTime()&&i({success:!1,data:this,error:new f("Expired message.",`${u.toISOString()} < ${c.toISOString()}`,`${u.toISOString()} >= ${c.toISOString()}`)});}if(this.notBefore){let c=new Date(this.notBefore);u.getTime()<c.getTime()&&i({success:!1,data:this,error:new f("Message is not valid yet.",`${u.toISOString()} >= ${c.toISOString()}`,`${u.toISOString()} < ${c.toISOString()}`)});}let S;try{S=this.prepareMessage();}catch(c){i({success:!1,data:this,error:c});return}let l;try{let c=R$2(S),g=Z$2({signature:r}),v=Q$1({hash:c,signature:g.signature,recoveryBytes:g.recoveryBytes});Ze$1({signature:r,message:c})&&(l=qe$1(v,ee$2(this.address)[0]));}catch{}finally{l!==this.address&&i({success:!1,data:this,error:new f("Signature do not match address of the message.",l,`Resolved address to be ${this.address}`)});}e({success:!0,data:this});})}validateMessage(...t){var i;if(t.length>0)throw new f("Unable to parse the message.","Unexpected argument in the validateMessage function.");if(!this.domain||this.domain.length===0||!/[^#?]*/.test(this.domain))throw new f("Invalid domain.",`${this.domain} to be a valid domain.`);if(!Xt(this.address))throw new f("Invalid address.",`${this.address} to be a valid address.`);if(!A(this.uri))throw new f("URI does not conform to RFC 3986.",`${this.uri} to be a valid uri.`);if(this.version!=="1")throw new f("Invalid message version.","1",this.version);let e=(i=this==null?void 0:this.nonce)==null?void 0:i.match(/[a-zA-Z0-9]{8,}/);if(!e||this.nonce.length<8||e[0]!==this.nonce)throw new f("Nonce size smaller then 8 characters or is not alphanumeric.",`Length > 8 (${e==null?void 0:e.length}). Alphanumeric.`,this.nonce);let s=/([0-9]+)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])[Tt]([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(([Zz])|([+|\-]([01][0-9]|2[0-3]):[0-5][0-9]))/;if(this.issuedAt&&!s.test(this.issuedAt))throw new Error("Invalid time format.");if(this.expirationTime&&!s.test(this.expirationTime))throw new Error("Invalid time format.");if(this.notBefore&&!s.test(this.notBefore))throw new Error("Invalid time format.")}};var y$1=1;function T({state:n,version:t}){var e,s,i;return JSON.stringify([[(e=n.network)==null?void 0:e.chainId,(i=(s=n.network)==null?void 0:s.getCoreApiUrl)==null?void 0:i.call(s)],[n.currentAccountIndex,n.accounts.map(r=>({appPrivateKey:r.appPrivateKey,address:V$1(r.address[0],l$4(r.address[1])),profile_url:r.profile_url}))],t])}function Ot(n){let t=JSON.parse(n),[e,s]=t[0],[i$1,r]=t[1],o=t[2]??y$1;return {network:e===ur.Mainnet?new i({url:s}):new l$2({url:s}),currentAccountIndex:i$1,accounts:r.map(d=>{let[u,S]=ee$2(d.address);return {appPrivateKey:d.appPrivateKey,address:[u,p$4(S)],profile_url:d.profile_url}}),version:o}}var _=n=>{if(n){if(typeof n!="string")return n;if(n==="testnet")return new l$2}return new i},k=({network:n=new i,...t})=>({statuses:{["status/Authentication"]:"status/IsIdle",["status/TransactionSigning"]:"status/IsIdle",["status/MessageSigning"]:"status/IsIdle",["status/StructuredMessageSigning"]:"status/IsIdle"},network:_(n),appName:t.appName,appIconUrl:t.appIconUrl,accounts:[],currentAccountIndex:0,onPersistState:t.onPersistState,onAuthentication:t.onAuthentication,onNoWalletFound:t.onNoWalletFound,onSignOut:t.onSignOut}),N=(n,t)=>{try{let{version:e,...s}=Ot(n);return {state:{...k(t),...s},version:e}}catch{return {state:k(t),version:y$1}}},j=()=>{if(!hr("localStorage",{throwIfUnavailable:!1}))return;let t=localStorage.getItem("MICRO_STACKS_DEBUG");if(t)return JSON.parse(t)};var x=class{config;storage;store;debug;fetcher;constructor(t={}){let e={storage:(t==null?void 0:t.storage)??F,network:(t==null?void 0:t.network)??new i,...t},s=typeof e.dehydratedState=="function"?e.dehydratedState(this.storeKey):e.dehydratedState,i$1=s?N(s,e):{state:k(e),version:y$1};this.store=createStore(subscribeWithSelector(persist(()=>i$1.state,{name:b,getStorage:()=>e.storage,version:i$1.version,serialize:({state:r,version:o})=>T({state:r,version:o??y$1}),deserialize:r=>N(r,e)}))),this.debug=j(),this.config=e,this.storage=e.storage,this.fetcher=e.fetcher||Hr;}getState=()=>this.store.getState();setState(t){let e=typeof t=="function"?t(this.store.getState()):t;this.store.setState(e,!0);}resetState(){this.setState(t=>({...t,accounts:[],currentAccountIndex:0}));}get subscribe(){return this.store.subscribe}onStorageUpdate=t=>{if(typeof document<"u"){let e=window.location.host,s=new URL(t.url).host,i=e===s,r=t.key==="micro-stacks.store";if(i&&r){let o=t.newValue;this.hydrate(JSON.parse(o));}}};tabSyncSubscription=t=>{let e=typeof document<"u";return e&&t&&window.addEventListener("storage",this.onStorageUpdate),()=>{e&&t&&window.removeEventListener("storage",this.onStorageUpdate);}};getStacksProvider(){return hr("StacksProvider",{throwIfUnavailable:!1})}subscribeToStacksProvider(t,e=100){if(this.getStacksProvider())return t(),()=>{};{let s=setInterval(()=>{!!this.getStacksProvider()&&(t(),clearInterval(s));},e);return ()=>{typeof s<"u"&&clearInterval(s);}}}get storeKey(){return b}onPersistState=t=>{var e,s;return (s=(e=this.store.getState())==null?void 0:e.onPersistState)==null?void 0:s.call(e,t)};get onAuthentication(){var t;return (t=this.store.getState())==null?void 0:t.onAuthentication}get onNoWalletFound(){var t;return (t=this.store.getState())==null?void 0:t.onNoWalletFound}get onSignOut(){var t;return (t=this.store.getState())==null?void 0:t.onSignOut}setOnPersistState=t=>{this.setState(e=>({...e,onPersistState:t})),this.config.onPersistState=t;};setOnNoWalletFound=t=>{this.setState(e=>({...e,onNoWalletFound:t})),this.config.onPersistState=t;};setOnSignOut=t=>{this.setState(e=>({...e,onSignOut:t})),this.config.onSignOut=t;};setOnAuthentication=t=>{this.setState(e=>({...e,onAuthentication:t})),this.config.onAuthentication=t;};persist=async()=>{if(this.onPersistState){let t=this.dehydrate(this.store.getState());await this.onPersistState(t);}};dehydrate(t){return T({state:t??this.store.getState(),version:y$1})}hydrate(t){let e=N(t,this.config);this.setState(e.state);}selectHasSession=t=>Boolean(t.accounts.length);selectAccounts=t=>t.accounts;selectAccount=t=>this.selectHasSession(t)?t.accounts[t.currentAccountIndex]:void 0;selectNetwork=t=>this.config.enableNetworkSwitching?t.network:_(this.config.network);selectNetworkChain=t=>this.selectNetwork(t).chainId===ur.Mainnet?"mainnet":"testnet";selectTestnetStxAddress=t=>{let e=this.selectAccount(t);return e?V$1(e.address[0]===X$1.mainnetP2SH?X$1.testnetP2SH:X$1.testnetP2PKH,l$4(e.address[1])):void 0};selectMainnetStxAddress=t=>{let e=this.selectAccount(t);return e?V$1(e.address[0],l$4(e.address[1])):void 0};selectStxAddress=t=>this.selectNetworkChain(t)==="mainnet"?this.selectMainnetStxAddress(t):this.selectTestnetStxAddress(t);selectAppDetails=t=>t.appName&&t.appIconUrl?{name:t.appName,icon:t.appIconUrl}:void 0;selectIdentityAddress=t=>{let e=this.selectAccount(t);return e!=null&&e.appPrivateKey?ar(e.appPrivateKey):void 0};selectDecentralizedID=t=>{let e=this.selectIdentityAddress(t);return e?`did:btc-addr:${e}`:void 0};selectStatuses=t=>t.statuses;setStatus(t,e){this.setState(s=>({...s,statuses:{...s.statuses,[t]:e}}));}setIsRequestPending(t){this.setStatus(t,"status/IsLoading");}setIsIdle(t){this.setStatus(t,"status/IsIdle");}statuses=()=>this.selectStatuses(this.getState());isSignMessageRequestPending=()=>this.statuses()["status/MessageSigning"];isSignStructuredMessageRequestPending=()=>this.statuses()["status/StructuredMessageSigning"];handleNoStacksProviderFound(){return typeof this.getStacksProvider()>"u"?typeof this.onNoWalletFound<"u"?(this.onNoWalletFound(),!1):(h$1(this.getStacksProvider(),"The injected `StacksProvider` cannot be found. This is typically because there is no Stacks wallet available, such as the Hiro web wallet extension or the iOS/Android wallet Xverse."),!1):!0}authenticate=async t=>{if(!this.handleNoStacksProviderFound())return;let e=this.selectAppDetails(this.getState());h$1(e,"App details are not defined for you app. Most functionality (authentication, signing requests) require details be passed to the wallet. Add them to your MicroStacksClient config.");let s=this.selectAccounts(this.getState());this.setIsRequestPending("status/Authentication"),await Nt({appDetails:e,onFinish:async({profile:i,...r})=>{var S,l;let[o,a]=ee$2(r.addresses.mainnet),d=[o,p$4(a)];s.find(c=>c.address===d)?this.setState(c=>({...c,currentAccountIndex:s.findIndex(g=>g.address===d)})):this.setState(c=>{var g;return {...c,accounts:c.accounts.concat({address:d,appPrivateKey:(g=this.debug)!=null&&g.disableAppPrivateKey?void 0:r.appPrivateKey,decentralizedID:r.decentralizedID,profile_url:r.profile_url}),currentAccountIndex:c.accounts.length}}),(S=t==null?void 0:t.onFinish)==null||S.call(t,r),(l=this.onAuthentication)==null||l.call(this,{profile:i,...r}),await this.persist(),this.setIsIdle("status/Authentication");},onCancel:i=>{var r;this.setIsIdle("status/Authentication"),(r=t==null?void 0:t.onCancel)==null||r.call(t,i);}},M);};signOut=async t=>{var e,s,i,r;return (i=(s=(e=this.store)==null?void 0:e.persist)==null?void 0:s.clearStorage)==null||i.call(s),(r=this.onSignOut)==null||r.call(this),this.resetState(),t==null?void 0:t()};getSignInMessage=({domain:t,nonce:e,version:s="1.0.0"})=>{if(!this.handleNoStacksProviderFound())return;let i=this.getState(),r=this.selectAppDetails(i),o=this.selectStxAddress(i);h$1(r,"App details are not defined for you app. Most functionality (authentication, signing requests) require details be passed to the wallet. Add them to your MicroStacksClient config."),h$1(o,"No current Stacks address can be found. This could be because a session has been invalidated, or the user is not signed in.");let a=hr("document",{throwIfUnavailable:!1})?window.location.origin:"";return new w$1({domain:r.name,address:o,statement:"Sign in with Stacks",uri:t??a,version:s,chainId:ur.Mainnet,nonce:e})};signTransaction=async(t,e)=>{if(!this.handleNoStacksProviderFound())return;let s=this.getState(),i=this.selectAppDetails(s),r=this.selectStxAddress(s),o=this.selectAccount(s),a=this.selectNetwork(s);h$1(i,"App details are not defined for you app. Most functionality (authentication, signing requests) require details be passed to the wallet. Add them to your MicroStacksClient config."),h$1(r,"No current Stacks address can be found. This could be because a session has been invalidated, or the user is not signed in."),h$1(o,"There is not current user session available. Please make sure the user has signed in before attempting this action."),this.setIsRequestPending("status/TransactionSigning");let d,u={privateKey:o.appPrivateKey,appDetails:i,stxAddress:r,network:a,postConditionMode:e.postConditionMode,postConditions:e.postConditions,attachment:e.attachment,sponsored:e.sponsored},l=await(t==="token_transfer"?It$1:t==="contract_call"?Tt:Pt)({...u,...e});return h$1(l,"Transaction JWT could not be created"),await Gt({token:l,onFinish:c=>{var g;d=c,(g=e==null?void 0:e.onFinish)==null||g.call(e,c),this.setIsIdle("status/TransactionSigning");},onCancel:c=>{var g;(g=e==null?void 0:e.onCancel)==null||g.call(e,c),this.setIsIdle("status/TransactionSigning");}}),d};signMessage=async t=>{if(!this.handleNoStacksProviderFound())return;let e=this.getState(),s=this.selectAppDetails(e),i=this.selectStxAddress(e),r=this.selectAccount(e),o=this.selectNetwork(e);h$1(s,"App details are not defined for you app. Most functionality (authentication, signing requests) require details be passed to the wallet. Add them to your MicroStacksClient config."),h$1(i,"No current Stacks address can be found. This could be because a session has been invalidated, or the user is not signed in."),h$1(r,"There is not current user session available. Please make sure the user has signed in before attempting this action."),h$1(t.message,"No message found -- a message is required when requesting a message signature."),this.setIsRequestPending("status/MessageSigning");let a;return await De({appDetails:s,privateKey:r.appPrivateKey,stxAddress:i,network:o,message:t.message,onFinish:d=>{var u;a=d,(u=t==null?void 0:t.onFinish)==null||u.call(t,d),this.setIsIdle("status/MessageSigning");},onCancel:d=>{var u;(u=t==null?void 0:t.onCancel)==null||u.call(t,d),this.setIsIdle("status/MessageSigning");}}),a};signStructuredMessage=async t=>{var d,u,S;if(!this.handleNoStacksProviderFound())return;let e=this.getState(),s=this.selectAppDetails(e),i=this.selectStxAddress(e),r=this.selectAccount(e),o=this.selectNetwork(e);h$1(s,"App details are not defined for you app. Most functionality (authentication, signing requests) require details be passed to the wallet. Add them to your MicroStacksClient config."),h$1(i,"No current Stacks address can be found. This could be because a session has been invalidated, or the user is not signed in."),h$1(r,"There is not current user session available. Please make sure the user has signed in before attempting this action."),h$1(t.message,"No message found -- a message is required when requesting a message signature."),this.setIsRequestPending("status/StructuredMessageSigning");let a;return await Ke({appDetails:s,privateKey:r.appPrivateKey,stxAddress:i,network:o,domain:{name:((d=t.domain)==null?void 0:d.name)??s.name,version:((u=t.domain)==null?void 0:u.version)??"1.0.0",chainId:((S=t.domain)==null?void 0:S.chainId)??o.chainId},message:t.message,onFinish:l=>{var c;a=l,(c=t==null?void 0:t.onFinish)==null||c.call(t,l),this.setIsIdle("status/StructuredMessageSigning");},onCancel:l=>{var c;(c=t==null?void 0:t.onCancel)==null||c.call(t,l),this.setIsIdle("status/StructuredMessageSigning");}}),a};setNetwork=t=>{if(!this.config.enableNetworkSwitching)throw new Error(P("Network switching is currently disabled. Set `enableNetworkSwitching` to `true` to enable."));typeof t=="string"?this.setState(s=>({...s,network:t==="mainnet"?new i:new l$2})):this.setState(s=>({...s,network:t})),this.persist();};selectGaiaHubConfig(t){let e=this.selectHasSession(t),s=this.selectAccount(t);if(!(!e||!(s!=null&&s.appPrivateKey)))return je({gaiaHubUrl:"https://hub.blockstack.org",privateKey:s.appPrivateKey})}putFile=(t,e,{encrypt:s=!0,sign:i})=>{let r=this.selectHasSession(this.getState()),o=this.selectGaiaHubConfig(this.getState()),a=this.selectAccount(this.getState());if(!r){console.warn("There is not current user session available. Please make sure the user has signed in before attempting this action.");return}if(!(a!=null&&a.appPrivateKey)||!o){console.warn("The current user session has no `appPrivateKey` defined. Certain actions require an `appPrivateKey`, such as using gaia or encryption.");return}return nt(t,e,{privateKey:a.appPrivateKey,gaiaHubConfig:o,encrypt:s,sign:i,wasString:typeof e=="string"})};getFile=(t,{decrypt:e=!0,verify:s})=>{let i=this.selectHasSession(this.getState()),r=this.selectGaiaHubConfig(this.getState()),o=this.selectAccount(this.getState());if(!i){console.warn("There is not current user session available. Please make sure the user has signed in before attempting this action.");return}if(!(o!=null&&o.appPrivateKey)||!r){console.warn("The current user session has no `appPrivateKey` defined. Certain actions require an `appPrivateKey`, such as using gaia or encryption.");return}return Bt(t,{privateKey:o.appPrivateKey,gaiaHubConfig:r,decrypt:e,verify:s})};async fetchBNSName(){var i;let t=this.selectStxAddress(this.getState()),e=this.selectNetwork(this.getState());if(!t){console.warn("No Stacks address found while trying to fetch BNS name");return}let s=e.getCoreApiUrl()+`/v1/addresses/stacks/${t}`;try{let o=await(await this.fetcher(s)).json();return (i=o==null?void 0:o.names)==null?void 0:i[0]}catch(r){console.log("[@micro-stacks/client] fetchBNSName failed",r);}}async fetchZoneFile(){try{let t=this.selectStxAddress(this.getState()),e=this.selectNetwork(this.getState());if(!t){console.warn("No Stacks address found while trying to fetch zonefile name");return}let s=e.getCoreApiUrl()+`/v1/names/${t}/zonefile`;return await(await this.fetcher(s)).json()}catch(t){console.log("[@micro-stacks/client] fetchZoneFile failed",t);}}async fetchProfile(){let t=this.selectAccount(this.getState());if(!!(t!=null&&t.profile_url))try{return await(await this.fetcher(t.profile_url)).json()}catch(e){console.log("[@micro-stacks/client] fetchProfile failed",e);}}encrypt(t,e={}){var s;if((e==null?void 0:e.publicKey)&&(e==null?void 0:e.privateKey))throw Error("Error: do not pass both `publicKey` and `privateKey` to client.encrypt");return Rr(t,{...e,privateKey:e.privateKey??((s=this.selectAccount(this.getState()))==null?void 0:s.appPrivateKey)})}decrypt(t,e){var i;let s=e.privateKey??((i=this.selectAccount(this.getState()))==null?void 0:i.appPrivateKey);if(!s)throw Error("You must pass a `privateKey` value to client.decrypt");return Ir(t,{privateKey:s})}};var $;function tt(n){let t=(n==null?void 0:n.client)??new x(n==null?void 0:n.config);return C$1?t:($=t,$)}function p$1(n){return C$1?tt(n):$??tt(n)}var Be=({client:n,state:t})=>n.selectAccount(t||n.getState()),Le=({client:n,state:t})=>n.selectStxAddress(t||n.getState()),ze=({client:n,state:t})=>n.selectIdentityAddress(t||n.getState()),qe=({client:n,state:t})=>n.selectDecentralizedID(t||n.getState()),We=({client:n,state:t})=>n.selectStatuses(t||n.getState()),Je=(n,t=p$1())=>t.subscribe(t.selectAccount,n,{equalityFn:es6}),Ze=(n,t=p$1())=>t.subscribe(t.selectStxAddress,n,{equalityFn:es6}),Xe=(n,t=p$1())=>t.subscribe(t.selectIdentityAddress,n,{equalityFn:es6}),Ye=(n,t=p$1())=>t.subscribe(t.selectDecentralizedID,n,{equalityFn:es6}),ts=(n,t=p$1())=>t.subscribe(t.selectStatuses,n,{equalityFn:es6});

var y="micro-stacks-client-context";var se=({appName:e,appIconUrl:o,storage:i=F,network:g,dehydratedState:s,onPersistState:t,onSignOut:r,onAuthentication:u,onNoWalletFound:d,fetcher:x})=>{setContext(y,tt({config:{appName:e,appIconUrl:o,storage:i,network:g,dehydratedState:s,onPersistState:t,onSignOut:r,onAuthentication:u,onNoWalletFound:d,fetcher:x}}));},J="No MicroStacksClient set, mount the client in your app by wrapping your app in `ClientProvider` or using `mountClient`",C=()=>{let e=getContext(y);if(!e)throw new Error(J);return e};function h(e,o){return ()=>{let i=C();return readable(e({client:i}),g=>o(g,i))}}var Q=h(Le,Ze),Y=h(Be,Je),Z=h(ze,Xe),w=h(We,ts),p=h(qe,Ye);function a(){return derived([Y(),Q(),Z(),p()],([e,o,i,g])=>({appPrivateKey:(e==null?void 0:e.appPrivateKey)??null,rawAddress:(e==null?void 0:e.address)??null,stxAddress:o,identityAddress:i,decentralizedID:g,profileUrl:(e==null?void 0:e.profile_url)??null}))}function Ce(){let e=C();return derived([a(),w()],([o,i])=>({openAuthRequest:e.authenticate,signOut:e.signOut,isSignedIn:!!o.stxAddress,isRequestPending:i[L.Authentication]===z.IsLoading}))}

var lib = {};

var encoding = {};

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

const require$$0 = /*@__PURE__*/getAugmentedNamespace(sha256$1);

Object.defineProperty(checksum, "__esModule", { value: true });
checksum.c32checkDecode = checksum.c32checkEncode = void 0;
const sha256_1$1 = require$$0;
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
const sha256_1 = require$$0;
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

let webWalletNeeded = false;
const allowed = [
  "SP1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28GBQA1W0F",
  "SP3RQ3BGRWVXSXDZZBYGW8XHMHC4MCA6EHNHCK8FE",
  "SP1ACWJC0TMD9F3Q3FJQFDWV9GSSTXN8RY31HR10B",
  "SP2E57N3DDG0CSF6XYWABZ1E7QBF8CTKJ4J1PHP0V"
];
function isAllowed(address) {
  return allowed.indexOf(address) > -1;
}
function decodeStacksAddress(stxAddress) {
  if (!stxAddress)
    throw new Error("Needs a stacks address");
  const decoded = lib.c32addressDecode(stxAddress);
  return decoded;
}
async function login($auth) {
  try {
    $auth.openAuthRequest({
      onFinish: (payload) => {
        console.log("payload:", payload);
        if (isAllowed(payload.addresses.mainnet)) {
          $auth.signOut();
        }
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

// index.ts
var stores = {};
function getStorage(type) {
  return type === "local" ? localStorage : sessionStorage;
}
function persisted(key, initialValue, options) {
  const serializer = (options == null ? void 0 : options.serializer) ?? JSON;
  const storageType = (options == null ? void 0 : options.storage) ?? "local";
  const browser = typeof window !== "undefined" && typeof document !== "undefined";
  function updateStorage(key2, value) {
    if (!browser)
      return;
    getStorage(storageType).setItem(key2, serializer.stringify(value));
  }
  if (!stores[key]) {
    const store = writable(initialValue, (set2) => {
      const json = browser ? getStorage(storageType).getItem(key) : null;
      if (json) {
        set2(serializer.parse(json));
      }
      if (browser) {
        const handleStorage = (event) => {
          if (event.key === key)
            set2(event.newValue ? serializer.parse(event.newValue) : null);
        };
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
      }
    });
    const { subscribe, set } = store;
    stores[key] = {
      set(value) {
        updateStorage(key, value);
        set(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        updateStorage(key, value);
        set(value);
      },
      subscribe
    };
  }
  return stores[key];
}

const sbtcConfig = persisted("sbtcConfig", { network: "mainnet", pegIn: true });

/* node_modules/svelte-bootstrap-icons/lib/ArrowDown.svelte generated by Svelte v3.55.1 */

const file$1 = "node_modules/svelte-bootstrap-icons/lib/ArrowDown.svelte";

function create_fragment$1(ctx) {
	let svg;
	let path;
	let current;
	const default_slot_template = /*#slots*/ ctx[2].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[1], null);

	let svg_levels = [
		{ xmlns: "http://www.w3.org/2000/svg" },
		{ width: "16" },
		{ height: "16" },
		{ fill: "currentColor" },
		{ viewBox: "0 0 16 16" },
		/*$$restProps*/ ctx[0]
	];

	let svg_data = {};

	for (let i = 0; i < svg_levels.length; i += 1) {
		svg_data = assign(svg_data, svg_levels[i]);
	}

	const block = {
		c: function create() {
			svg = svg_element("svg");
			if (default_slot) default_slot.c();
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
			if (default_slot) default_slot.l(svg_nodes);
			path = claim_svg_element(svg_nodes, "path", { "fill-rule": true, d: true });
			children(path).forEach(detach_dev);
			svg_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(path, "fill-rule", "evenodd");
			attr_dev(path, "d", "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z");
			add_location(path, file$1, 0, 171, 171);
			set_svg_attributes(svg, svg_data);
			toggle_class(svg, "bi", true);
			toggle_class(svg, "bi-arrow-down", true);
			add_location(svg, file$1, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, svg, anchor);

			if (default_slot) {
				default_slot.m(svg, null);
			}

			append_hydration_dev(svg, path);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 2)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[1],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[1])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[1], dirty, null),
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
				dirty & /*$$restProps*/ 1 && /*$$restProps*/ ctx[0]
			]));

			toggle_class(svg, "bi", true);
			toggle_class(svg, "bi-arrow-down", true);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(svg);
			if (default_slot) default_slot.d(detaching);
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
	const omit_props_names = [];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('ArrowDown', slots, ['default']);

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('$$scope' in $$new_props) $$invalidate(1, $$scope = $$new_props.$$scope);
	};

	return [$$restProps, $$scope, slots];
}

class ArrowDown extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ArrowDown",
			options,
			id: create_fragment$1.name
		});
	}
}

/* node_modules/svelte-bootstrap-icons/lib/ArrowUp.svelte generated by Svelte v3.55.1 */

const file = "node_modules/svelte-bootstrap-icons/lib/ArrowUp.svelte";

function create_fragment(ctx) {
	let svg;
	let path;
	let current;
	const default_slot_template = /*#slots*/ ctx[2].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[1], null);

	let svg_levels = [
		{ xmlns: "http://www.w3.org/2000/svg" },
		{ width: "16" },
		{ height: "16" },
		{ fill: "currentColor" },
		{ viewBox: "0 0 16 16" },
		/*$$restProps*/ ctx[0]
	];

	let svg_data = {};

	for (let i = 0; i < svg_levels.length; i += 1) {
		svg_data = assign(svg_data, svg_levels[i]);
	}

	const block = {
		c: function create() {
			svg = svg_element("svg");
			if (default_slot) default_slot.c();
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
			if (default_slot) default_slot.l(svg_nodes);
			path = claim_svg_element(svg_nodes, "path", { "fill-rule": true, d: true });
			children(path).forEach(detach_dev);
			svg_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(path, "fill-rule", "evenodd");
			attr_dev(path, "d", "M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z");
			add_location(path, file, 0, 169, 169);
			set_svg_attributes(svg, svg_data);
			toggle_class(svg, "bi", true);
			toggle_class(svg, "bi-arrow-up", true);
			add_location(svg, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, svg, anchor);

			if (default_slot) {
				default_slot.m(svg, null);
			}

			append_hydration_dev(svg, path);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 2)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[1],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[1])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[1], dirty, null),
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
				dirty & /*$$restProps*/ 1 && /*$$restProps*/ ctx[0]
			]));

			toggle_class(svg, "bi", true);
			toggle_class(svg, "bi-arrow-up", true);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(svg);
			if (default_slot) default_slot.d(detaching);
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
	const omit_props_names = [];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('ArrowUp', slots, ['default']);

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
		if ('$$scope' in $$new_props) $$invalidate(1, $$scope = $$new_props.$$scope);
	};

	return [$$restProps, $$scope, slots];
}

class ArrowUp extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ArrowUp",
			options,
			id: create_fragment.name
		});
	}
}

async function fetchAddressDetails(network, address) {
  checkNetwork(network);
  const url = network === "mainnet" ? "https://mempool.space/api" : "https://mempool.space/testnet/api";
  const response = await fetch(url + "/address/" + address);
  if (response.status === 200) {
    return await response.json();
  }
  throw new Error("Address not found - is the network correct?");
}
async function fetchUTXOs(network, address, txs) {
  checkNetwork(network);
  const url = network === "mainnet" ? "https://mempool.space/api" : "https://mempool.space/testnet/api";
  const response = await fetch(url + "/address/" + address + "/utxo");
  if (response.status === 200) {
    const utxos = await response.json();
    if (txs && txs.length > 0) {
      utxos.forEach((utxo) => {
        const tx = txs.find((tx2) => tx2.txid === utxo.txid);
        if (tx)
          utxo.fullout = tx.vout.find((o) => o.value === utxo.value);
      });
    }
    return utxos;
  }
  throw new Error("Bitcoin address not know - is the network correct?");
}
async function fetchTxs(network, address) {
  checkNetwork(network);
  const url = network === "mainnet" ? "https://mempool.space/api" : "https://mempool.space/testnet/api";
  const response = await fetch(url + "/address/" + address + "/txs");
  if (response.status === 200) {
    const txs = await response.json();
    return txs;
  }
  throw new Error("Bitcoin address not know - is the network correct?");
}
function maxCommit(utxos) {
  const summ = utxos?.map((item) => item.value).reduce((prev, curr) => prev + curr, 0);
  return summ || 0;
}
async function fetchFeeEstimate(network) {
  checkNetwork(network);
  const url = network === "mainnet" ? "https://api.blockcypher.com/v1/btc/main" : "https://api.blockcypher.com/v1/btc/test3";
  const response = await fetch(url);
  const info = await response.json();
  return info;
}
function checkNetwork(network) {
  if (network !== "testnet" && network !== "mainnet") {
    throw new Error("Unknown Network");
  }
}

export { ArrowUp as A, Ce as C, T$2 as T, __viteBrowserExternal$1 as _, ArrowDown as a, l$2 as b, c$1 as c, se as d, C as e, fetchFeeEstimate as f, a as g, decodeStacksAddress as h, i, fetchUTXOs as j, fetchTxs as k, login as l, maxCommit as m, fetchAddressDetails as n, getAugmentedNamespace as o, commonjsGlobal as p, sbtcConfig as s };
