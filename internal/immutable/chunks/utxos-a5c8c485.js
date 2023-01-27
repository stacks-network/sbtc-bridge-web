import { X as get_store_value, F as writable } from './index-c6e171e6.js';

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

const sbtcConfig = persisted("sbtcConfig", { network: "testnet" });

function I$1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unexpected runtime environment - no supported global scope (`window`, `self`, `global`) available")}function pr$1(r){if(ArrayBuffer.isView(r))return new Uint8Array(r.buffer,r.byteOffset,r.byteLength);throw new Error("Non array buffer passed to arrayBufferToUint8")}function Q(r,t,e){return e?`Use of '${e}' requires \`${t}\` which is unavailable on the '${r}' object within the currently executing environment.`:`\`${t}\` is unavailable on the '${r}' object within the currently executing environment.`}function hr(r,{throwIfUnavailable:t,usageDesc:e,returnEmptyObject:n}={}){let i;try{if(i=I$1(),i){let o=i[r];if(o)return o}}catch(o){console.error(`Error getting object '${r}' from global scope '${i}': ${o}`);}if(t){let o=Q(i,r.toString(),e);throw console.error(o),new Error(o)}if(n)return {}}function U(r){let t=r.reduce((i,o)=>i+o.length,0),e=new Uint8Array(t),n=0;for(let i=0;i<r.length;i++)e.set(r[i],n),n+=r[i].length;return e}function lr(r){return typeof r=="object"&&(r=Uint8Array.from(r)),r}function B$1(r){var t;return r!==null&&typeof r=="object"&&((t=r==null?void 0:r.constructor)==null?void 0:t.wordSize)===26&&Array.isArray(r==null?void 0:r.words)}function dr(r){return new TextEncoder().encode(r)}function _$2(r){return new TextDecoder().decode(r)}var O=new Array(255);for(let r=0;r<=255;++r)O[r]=r.toString(16).padStart(2,"0");function l$1(r){if(typeof r!="string")throw new TypeError("hexToBytes: expected string, got "+typeof r);if(r.length%2)throw new Error(`hexToBytes: received invalid unpadded hex, got: ${r.length}`);let t=new Uint8Array(r.length/2);for(let e=0;e<t.length;e++){let n=e*2;t[e]=Number.parseInt(r.slice(n,n+2),16);}return t}function p(r){let t=new Array(r.length);for(let e=0;e<r.length;++e)t[e]=O[r[e]];return t.join("")}function d$1(r){if(typeof r!="string")throw new TypeError("hexToNumber: expected string, got "+typeof r);return BigInt(`0x${r}`)}var x$1=(r,t=8)=>(typeof r=="bigint"?r:y$4(r,!1)).toString(16).padStart(t*2,"0"),Er=r=>JSON.parse(_$2(l$1(r))),Ir$1=r=>typeof r=="string"?l$1(r):r,Ur=r=>r.startsWith("0x")?r.replace("0x",""):r;var N=BigInt(0),f$4=BigInt(1);function _r(r,t=128){if(r<-(f$4<<BigInt(t)-f$4)||r>(f$4<<BigInt(t)-f$4)-f$4)throw `Integer out of range given ${t} bits to represent.`;return r>=N?r:~(-r-f$4|~((f$4<<BigInt(t))-f$4))}function L$1(r,t=128){return (r&f$4<<BigInt(t)-f$4)>N&&(r=r-(f$4<<BigInt(t))),r}function Rr$1(r,t=!1,e=8){return l$1(x$1(y$4(r,t),e))}function y$4(r,t=!1){if(typeof r=="number"){if(!Number.isInteger(r))throw new RangeError("Invalid value. Values of type 'number' must be an integer.");return BigInt(r)}if(typeof r=="string")if(r.toLowerCase().startsWith("0x")){let e=r.slice(2);e=e.padStart(e.length+e.length%2,"0"),r=l$1(e);}else try{return BigInt(r)}catch(e){if(e instanceof SyntaxError)throw new RangeError(`Invalid value. String integer '${r}' is not finite.`)}if(typeof r=="bigint")return r;if(r instanceof Uint8Array)return t?L$1(d$1(p(r))):d$1(p(r));if(B$1(r))return BigInt(r.toString());throw new TypeError(`Invalid value type. Must be a number, bigint, integer-string, hex-string, BN.js instance, or Buffer, got: ${typeof r}.`)}function h$1(r){return `[micro-stacks] ${r}`}var C$1=class C extends Error{constructor(t){super(t),this.message=h$1(t),this.name=this.constructor.name;}};var z=typeof window<"u",rr=z?{referrer:"no-referrer",referrerPolicy:"no-referrer"}:{};async function Hr(r,t={}){return fetch(r,{...rr,...t})}var H$1="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",M$2="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";function $$2(r){let t=r.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");let e=r.indexOf("=");e===-1&&(e=t);let n=e===t?0:4-e%4;return [e,n]}function tr(r,t,e){return (t+e)*3/4-e}function G(r,t){let{revLookup:e}=w$1(t),n,i=$$2(r),o=i[0],s=i[1],a=new Uint8Array(tr(r,o,s)),u=0,m=s>0?o-4:o,c;for(c=0;c<m;c+=4)n=e[r.charCodeAt(c)]<<18|e[r.charCodeAt(c+1)]<<12|e[r.charCodeAt(c+2)]<<6|e[r.charCodeAt(c+3)],a[u++]=n>>16&255,a[u++]=n>>8&255,a[u++]=n&255;return s===2&&(n=e[r.charCodeAt(c)]<<2|e[r.charCodeAt(c+1)]>>4,a[u++]=n&255),s===1&&(n=e[r.charCodeAt(c)]<<10|e[r.charCodeAt(c+1)]<<4|e[r.charCodeAt(c+2)]>>2,a[u++]=n>>8&255,a[u++]=n&255),a}function W(r){let e=r.length,n=e%4;if(!n)return r;let i=4-n,o=e+i;return r.padEnd(o,"=")}function Gr(r){return G(W(r),H$1)}function er(r,t){let{lookup:e}=w$1(t);return e[r>>18&63]+e[r>>12&63]+e[r>>6&63]+e[r&63]}function nr(r,t,e,n){let i,o=[];for(let s=t;s<e;s+=3)i=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),o.push(er(i,n));return o.join("")}var A$1=new Map;function w$1(r){if(A$1.has(r))return A$1.get(r);let t=[],e=[];for(let n=0,i=r.length;n<i;++n)t[n]=r[n],e[r.charCodeAt(n)]=n;return e["-".charCodeAt(0)]=62,e["_".charCodeAt(0)]=63,A$1.set(r,{lookup:t,revLookup:e}),{lookup:t,revLookup:e}}function P$2(r,t){let{lookup:e}=w$1(t),n,i=r.length,o=i%3,s=[],a=16383;for(let u=0,m=i-o;u<m;u+=a)s.push(nr(r,u,u+a>m?m:u+a,t));return o===1?(n=r[i-1],s.push(e[n>>2]+e[n<<4&63]+"==")):o===2&&(n=(r[i-2]<<8)+r[i-1],s.push(e[n>>10]+e[n>>4&63]+e[n<<2&63]+"=")),s.join("")}function Pr(r){return P$2(r,H$1)}function jr(r){return P$2(r,M$2)}var T$1="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",j$1=BigInt(58);function Yr(r){if(r.length===0)return "";typeof r=="string"&&(typeof TextEncoder<"u"?r=new TextEncoder().encode(r):r=new Uint8Array(r.split("").map(n=>n.charCodeAt(0))));let t=BigInt("0x"+p(r)),e=[];for(;t>0;){let n=Number(t%j$1);t=t/j$1,e.push(T$1[n]);}for(let n=0;r[n]===0;n++)e.push(T$1[0]);return e.reverse().join("")}function Qr(r){let t=[];for(let e=0;e<r.length;++e)t.push(r.charCodeAt(e)&255);return new Uint8Array(t)}function rt(r,t,e,n,i){if(n||(n=0),!i&&i!==0&&(i=r.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n||t.length===0||r.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=r.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>r.length&&(i=r.length),t.length-e<i-n&&(i=t.length-e+n);let o=i-n;return r===t&&typeof Uint8Array.prototype.copyWithin=="function"?r.copyWithin(e,n,i):Uint8Array.prototype.set.call(t,r.subarray(n,i),e),o}var q=class{_value=[];get value(){return this._value}appendHexString(t){this.value.push(l$1(t));}push(t){return this._value.push(t)}appendByte(t){if(!Number.isInteger(t)||t<0||t>255)throw new Error(`Value ${t} is not a valid byte`);this.value.push(Uint8Array.from([t]));}concatBuffer(){return U(this.value)}};function ut$1(r,t,e){return t=+t,e=e>>>0,r[e]=t&255,e+1}function ct(r,t,e){return t=+t,e=e>>>0,r[e]=t&255,r[e+1]=t>>>8,e+2}function mt$1(r,t,e){return t=+t,e>>>=0,r[e+3]=t>>>24,r[e+2]=t>>>16,r[e+1]=t>>>8,r[e]=t&255,e+4}function yt$1(r,t,e){return t=+t,e>>>=0,r[e]=t>>>24,r[e+1]=t>>>16,r[e+2]=t>>>8,r[e+3]=t&255,e+4}function K$1(r,t){return r instanceof t||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===t.name}function xt$1(r,t){if(!K$1(r,Uint8Array)||!K$1(t,Uint8Array))throw new TypeError('The "buf1", "buf2" arguments must be one of type Uint8Array');if(r===t)return 0;let e=r.length,n=t.length;for(let i=0,o=Math.min(e,n);i<o;++i)if(r[i]!==t[i]){e=r[i],n=t[i];break}return e<n?-1:n<e?1:0}var ur=(e=>(e[e.Testnet=2147483648]="Testnet",e[e.Mainnet=1]="Mainnet",e))(ur||{}),cr=(e=>(e[e.Mainnet=0]="Mainnet",e[e.Testnet=128]="Testnet",e))(cr||{});/*! micro-base58 - MIT License (c) 2021, Paul Miller (https://paulmillr.com) */

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

var cryptoBrowser = {};

Object.defineProperty(cryptoBrowser, "__esModule", { value: true });
cryptoBrowser.crypto = void 0;
cryptoBrowser.crypto = {
    node: undefined,
    web: typeof self === 'object' && 'crypto' in self ? self.crypto : undefined,
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
function f$3(group, x, y, z) {
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
                const tl = (rotl(al + f$3(group, bl, cl, dl) + BUF[rl[i]] + hbl, sl[i]) + el) | 0;
                al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl; // prettier-ignore
            }
            // 2 loops are 10% faster
            for (let i = 0; i < 16; i++) {
                const tr = (rotl(ar + f$3(rGroup, br, cr, dr) + BUF[rr[i]] + hbr, sr[i]) + er) | 0;
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

function f$2(r){return sha256.create().update(lr(r)).digest()}function y$3(r){return sha512.create().update(lr(r)).digest()}

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

var a=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,t)=>(typeof require<"u"?require:r)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var y$2=class y{webCrypto;constructor(r){this.webCrypto=r;}async encrypt(r,t,i,n){let o,p;if(r==="aes-128-cbc")o="AES-CBC",p=128;else if(r==="aes-256-cbc")o="AES-CBC",p=256;else throw new Error(`Unsupported cipher algorithm "${r}"`);let C=await this.webCrypto.subtle.importKey("raw",t,{name:o,length:p},!1,["encrypt"]),l=await this.webCrypto.subtle.encrypt({name:o,iv:i},C,n);return new Uint8Array(l)}async decrypt(r,t,i,n){let o,p;if(r==="aes-128-cbc")o="AES-CBC",p=128;else if(r==="aes-256-cbc")o="AES-CBC",p=256;else throw new Error(`Unsupported cipher algorithm "${r}"`);let C=await this.webCrypto.subtle.importKey("raw",t,{name:o,length:p},!1,["decrypt"]),l=await this.webCrypto.subtle.decrypt({name:o,iv:i},C,n);return new Uint8Array(l)}};var s=class{createCipher;createDecipher;constructor(r,t){this.createCipher=r,this.createDecipher=t;}async encrypt(r,t,i,n){if(r!=="aes-128-cbc"&&r!=="aes-256-cbc")throw new Error(`Unsupported cipher algorithm "${r}"`);let o=this.createCipher(r,t,i),p=U([o.update(n),o.final()]);return Promise.resolve(p)}async decrypt(r,t,i,n){if(r!=="aes-128-cbc"&&r!=="aes-256-cbc")throw new Error(`Unsupported cipher algorithm "${r}"`);let o=this.createDecipher(r,t,i),p=U([o.update(n),o.final()]);return Promise.resolve(p)}};function b$1(){return typeof crypto<"u"&&typeof crypto.subtle<"u"}var f$1='Crypto lib not found. Either the WebCrypto "crypto.subtle" or Node.js "crypto" module must be available.';async function u(){if(b$1())return {lib:crypto,name:"webCrypto"};try{return {lib:a("crypto"),name:"nodeCrypto"}}catch{throw new Error(f$1)}}async function c(){let e=await u();return e.name==="webCrypto"?new y$2(e.lib):new s(e.lib.createCipheriv,e.lib.createDecipheriv)}async function g$1(e,r,t){return (await c()).encrypt("aes-256-cbc",r,e,t)}async function B(e,r,t){return (await c()).decrypt("aes-256-cbc",r,e,t)}

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

function y$1(t,...o){let r=hmac.create(sha256,lr(t));for(let a of o)r.update(lr(a));return Uint8Array.from(r.digest())}

function Ae(t){return (Math.floor(t/16)+1)*16}function Ke$1(t){return Math.ceil(t/3)*4}function He$1(t){let e={iv:"",ephemeralPK:"",mac:"",cipherText:"",wasString:!!t.wasString};t.cipherTextEncoding==="base64"&&(e.cipherTextEncoding="base64");let r=32,n=66,o=64;return {payloadValuesLength:r+n+o,payloadShell:JSON.stringify(e)}}function ke(t){let e={signature:"",publicKey:"",cipherText:t};return {signedPayloadValuesLength:144+66,signedPayloadShell:JSON.stringify(e)}}function Kt(t){let{payloadShell:e,payloadValuesLength:r}=He$1(t),n=Ae(t.contentLength),o;if(!t.cipherTextEncoding||t.cipherTextEncoding==="hex")o=n*2;else if(t.cipherTextEncoding==="base64")o=Ke$1(n);else throw new Error(`Unexpected cipherTextEncoding "${t.cipherTextEncoding}"`);if(t.sign){let{signedPayloadShell:i,signedPayloadValuesLength:c}=ke(e);return i.length+c+r+o}else return e.length+r+o}function E(t){return typeof t=="string"?ripemd160(t):ripemd160.create().update(lr(t)).digest()}var L=class{digest(e){return E(e)}};function Ce(){return new L}function P$1(t){return Ce().digest(t)}function w(t){let e=y$3(t);return {encryptionKey:e.slice(0,32),hmacKey:e.slice(32)}}function $$1(t=32){return utils$1.randomBytes(t)}function b(t,e){let r=new Uint8Array([e]),n=new Uint8Array(25),o=new Uint8Array(21);o[0]=e,o.set(t,1);let i=f$2(o),s=f$2(i).slice(0,4);return n.set(r,0),n.set(t,1),n.set(s,t.length+1),Yr(n)}var je$1={messagePrefix:`Bitcoin Signed Message:
`,bech32:"bc",bip32:{public:76067358,private:76066276},pubKeyHash:0,scriptHash:5,wif:128},Re={messagePrefix:`Bitcoin Signed Message:
`,bech32:"tb",bip32:{public:70617039,private:70615956},pubKeyHash:111,scriptHash:196,wif:239},D={bitcoin:je$1,testnet:Re};var X=(o=>(o[o.mainnetP2PKH=22]="mainnetP2PKH",o[o.mainnetP2SH=20]="mainnetP2SH",o[o.testnetP2PKH=26]="testnetP2PKH",o[o.testnetP2SH=21]="testnetP2SH",o))(X||{}),y="0123456789ABCDEFGHJKMNPQRSTVWXYZ",R=new Map;[...y].forEach((t,e)=>R.set(t,e));var H="0123456789abcdef",j=new Map;[...H].forEach((t,e)=>j.set(t,e));function V(t,e){let r=Y(t,e),n=Me$1(U([e,r]));return `S${y[t]}${n}`}function Me$1(t){let e=p(t),r=[],n=0;for(let s=e.length-1;s>=0;s--)if(n<4){let p=j.get(e[s])>>n,a=0;s!==0&&(a=j.get(e[s-1]));let f=1+n,d=a%(1<<f)<<5-f,u=y[p+d];n=f,r.unshift(u);}else n=0;let o=0;for(let s=0;s<r.length&&r[s]==="0";s++)o++;r=r.slice(o);let i=/^\u0000*/.exec(new TextDecoder().decode(t)),c=i?i[0].length:0;for(let s=0;s<c;s++)r.unshift(y[0]);return r.join("")}function Y(t,e){let r=f$2(U([Uint8Array.of(t),e]));return f$2(r).slice(0,4)}function ee(t){if(t.length<=5)throw new Error("Invalid c32 address: invalid length");if(t[0]!=="S")throw new Error('Invalid c32 address: must start with "S"');return We$1(t.slice(1))}function We$1(t){t=te$1(t);let e=$e(t.slice(1)),r=t[0],n=R.get(r),o=e.slice(-4),i=Y(n,e.slice(0,-4));for(let c=0;c<o.length;c++)if(o[c]!==i[c])throw new Error("Invalid c32check string: checksum mismatch");return [n,e.slice(0,-4)]}function te$1(t){return t.toUpperCase().replace(/O/g,"0").replace(/L|I/g,"1")}function $e(t){if(t=te$1(t),!RegExp(`^[${y}]*$`).exec(t))throw new Error("Not a c32-encoded string");let e=RegExp(`^${y[0]}*`).exec(t),r=e?e[0].length:0,n=[],o=0,i=0;for(let p=t.length-1;p>=0;p--){i===4&&(n.unshift(H[o]),i=0,o=0);let f=(R.get(t[p])<<i)+o,d=H[f%16];if(i+=1,o=f>>4,o>1<<i)throw new Error("Panic error in decoding.");n.unshift(d);}n.unshift(H[o]),n.length%2===1&&n.unshift("0");let c=0;for(let p=0;p<n.length&&n[p]==="0";p++)c++;n=n.slice(c-c%2);let s=n.join("");for(let p=0;p<r;p++)s=`00${s}`;return l$1(s)}function Xt(t){try{return ee(t),!0}catch{return !1}}function qe(t,e=22){return V(e,m$1(Ir$1(t)))}function ar(t){let e=getPublicKey(t,!0),r=f$2(e),n=P$1(r);return b(n,D.bitcoin.pubKeyHash)}function pr(t){let e=typeof t=="string"?t:p(t),r=f$2(l$1(e)),n=P$1(r);return b(n,D.bitcoin.pubKeyHash)}function m$1(t){let e=f$2(t);return P$1(e)}async function ce(t){let{contents:e,privateKey:r}=t,n=e instanceof ArrayBuffer?pr$1(e):typeof e=="string"?dr(e):e,o=p(getPublicKey(r,!0)),i=f$2(n),c=await sign(i,r,{canonical:!1});return {signature:p(c),publicKey:o}}function xr(t,e=!1){let{contents:r,publicKey:n,signature:o}=t,i=r instanceof ArrayBuffer?pr$1(r):typeof r=="string"?dr(r):r,c=f$2(i);return verify(o,c,n,{strict:e})}async function ae(t){let{publicKey:e,content:r,cipherTextEncoding:n="hex",wasString:o}=t,i=utils$1.randomPrivateKey(),c=getPublicKey(i,!0),s=getSharedSecret(i,e,!0);s=s.slice(1);let p$1=w(s),a=$$1(16),f=await g$1(a,p$1.encryptionKey,r),d=U([a,c,f]),u=y$1(p$1.hmacKey,d),h;if(!n||n==="hex")h=p(f);else if(n==="base64")h=Pr(f);else throw new Error(`Unexpected cipherTextEncoding "${n}"`);let T={iv:p(a),ephemeralPK:p(c),cipherText:h,mac:p(u),wasString:o};return n&&n!=="hex"&&(T.cipherTextEncoding=n),T}function pt(t,e){if(t.length!==e.length)return !1;let r=0;for(let n=0;n<t.length;n++)r|=t[n]^e[n];return r===0}async function pe$1(t){let{privateKey:e,cipherObject:r}=t;if(!r.ephemeralPK)throw Error("No ephemeralPK found in cipher object");let n=r.ephemeralPK,o=getSharedSecret(e,n,!0);o=o.slice(1);let i=w(o),c=l$1(r.iv),s;if(!r.cipherTextEncoding||r.cipherTextEncoding==="hex")s=l$1(r.cipherText);else if(r.cipherTextEncoding==="base64")s=Gr(r.cipherText);else throw new Error(`Unexpected cipherTextEncoding "${r.cipherText}"`);let p=U([c,l$1(n),s]),a=y$1(i.hmacKey,p),f=l$1(r.mac);if(!pt(f,a))throw new Error("Decryption failed: failure in MAC check");let d=await B(c,i.encryptionKey,s);return r.wasString?new TextDecoder().decode(d):d}function Ir(t,e){if(!e.privateKey)throw new Error("Private key is required for decryption.");try{let r=JSON.parse(t);return pe$1({privateKey:e.privateKey,cipherObject:r})}catch(r){throw r instanceof SyntaxError?new Error("Failed to parse encrypted content JSON. The content may not be encrypted. If using getFile, try passing { decrypt: false }."):r}}async function Rr(t,e){let{publicKey:r,privateKey:n,wasString:o}=e,{cipherTextEncoding:i,sign:c}=e;if(!n&&!r)throw new Error("Either public key or private key must be supplied for encryption.");if(!r&&n&&(r=p(getPublicKey(n,!0))),typeof o!="boolean"&&(o=typeof t=="string"),!r)throw new Error("micro-stacks/crypto - no public key found to encrypt content");let s=typeof t=="string"?dr(t):t,p$1=await ae({publicKey:r,content:s,wasString:o,cipherTextEncoding:i});if(!c)return JSON.stringify(p$1);if(typeof c=="string"&&(n=c),!n)throw new Error("micro-stacks/crypto - need private key to sign contents");let a=await ce({contents:JSON.stringify(p$1),privateKey:n});return JSON.stringify({...a,cipherText:JSON.stringify(p$1)})}function ht(t){let r=t.length,n=r%4;if(!n)return t;let o=4-n,i=r+o;return t.padEnd(i,"=")}function ut(t){return t instanceof Uint8Array?ge$1(Pr(t)):ge$1(Pr(new TextEncoder().encode(t)))}function yt(t){let e=Gr(mt(t));return new TextDecoder().decode(e)}function mt(t){let e;return t instanceof Uint8Array?e=new TextDecoder().decode(t):e=t,ht(e).replace(/\-/g,"+").replace(/_/g,"/")}function ge$1(t){return t.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}var g={encode:ut,decode:yt};var v=128,ue$1=0,xt=32,St=16,bt=2,ye=St|xt|ue$1<<6,I=bt|ue$1<<6;function me(t){return typeof t=="string"?Gr(t):t}function _$1(t){let e=me(t),r=32,n=r+1,o=e.length,i=0;if(e[i++]!==ye)throw new Error('Could not find expected "seq"');let c=e[i++];if(c===(v|1)&&(c=e[i++]),o-i<c)throw new Error('"seq" specified length of "'+c+'", only "'+(o-i)+'" remaining');if(e[i++]!==I)throw new Error('Could not find expected "int" for "r"');let s=e[i++];if(o-i-2<s)throw new Error('"r" specified length of "'+s+'", only "'+(o-i-2)+'" available');if(n<s)throw new Error('"r" specified length of "'+s+'", max of "'+n+'" is acceptable');let p=i;if(i+=s,e[i++]!==I)throw new Error('Could not find expected "int" for "s"');let a=e[i++];if(o-i!==a)throw new Error('"s" specified length of "'+a+'", expected "'+(o-i)+'"');if(n<a)throw new Error('"s" specified length of "'+a+'", max of "'+n+'" is acceptable');let f=i;if(i+=a,i!==o)throw new Error('Expected to consume entire buffer, but "'+(o-i)+'" bytes remain');let d=r-s,u=r-a,h=new Uint8Array(d+s+u+a);for(i=0;i<d;++i)h[i]=0;h.set(e.slice(p+Math.max(-d,0),p+s),i),i=r;for(let T=i;i<T+u;++i)h[i]=0;return h.set(e.slice(f+Math.max(-u,0),f+a),i),jr(h).replace(/=/g,"")}function de(t,e,r){let n=0;for(;e+n<r&&t[e+n]===0;)++n;return t[e+n]>=v&&--n,n}function M$1(t){let e=me(t),r=32,n=de(e,0,r),o=de(e,r,e.length),i=r-n,c=r-o,s=1+1+i+1+1+c,p=s<v,a=new Uint8Array((p?2:3)+s),f=0;return a[f++]=ye,p?a[f++]=s:(a[f++]=v|1,a[f++]=s&255),a[f++]=I,a[f++]=i,n<0?(a[f++]=0,f+=rt(e,a,f,0,r)):f+=rt(e,a,f,n,r),a[f++]=I,a[f++]=c,o<0?(a[f++]=0,rt(e,a,f,r)):rt(e,a,f,r+o),jr(a).replace(/=/g,"")}function x(t,e){let r=[],n=g.encode(JSON.stringify(e));r.push(n);let o=g.encode(JSON.stringify(t));return r.push(o),r.join(".")}var Se=class{tokenType;rawPrivateKey;constructor(e="ES256K",r){if(!r)throw new C$1("TokenSigner: rawPrivateKey is required to sign a token");this.tokenType="JWT",this.rawPrivateKey=r;}header(e={}){return {...{typ:this.tokenType,alg:"ES256K"},...e}}async sign(e,r=!1,n={}){let o=this.header(n),i=x(e,o),c=f$2(dr(i));return this.createWithSignedHash(e,r,o,i,c)}signSync(e,r=!1,n={}){let o=this.header(n),i=x(e,o),c=f$2(dr(i));return this.createWithSignedHashSync(e,r,o,i,c)}async createWithSignedHash(e,r,n,o,i){let c=await sign(i,this.rawPrivateKey,{canonical:!1}),s=_$1(c);return r?{header:[g.encode(JSON.stringify(n))],payload:JSON.stringify(e),signature:[s]}:[o,s].join(".")}createWithSignedHashSync(e,r,n,o,i){let c=signSync(i,this.rawPrivateKey,{canonical:!1}),s=_$1(c);return r?{header:[g.encode(JSON.stringify(n))],payload:JSON.stringify(e),signature:[s]}:[o,s].join(".")}};var we=class{tokenType;rawPublicKey;constructor(e,r){this.tokenType="JWT",this.rawPublicKey=r;}verify(e,r=!1){return typeof e=="string"?this.verifyCompact(e,r):typeof e=="object"?this.verifyExpanded(e,r):!1}verifyCompact(e,r){let n=e.split("."),o=n[0]+"."+n[1],i=s=>{let p$1=n[2],a=M$1(p$1);return verify(p(Gr(a)),p(s),this.rawPublicKey,{strict:r})},c=f$2(dr(o));return i(c)}verifyExpanded(e,r){let n=[e.header.join("."),g.encode(e.payload)].join("."),o=!0,i=s=>(e.signature.map(p$1=>{let a=M$1(p$1);verify(p(Gr(a)),p(s),this.rawPublicKey,{strict:r})||(o=!1);}),o),c=f$2(dr(n));return i(c)}};function wt(t){if(typeof t=="string"){let e=t.split("."),r=JSON.parse(g.decode(e[0])),n=JSON.parse(g.decode(e[1])),o=e[2];return {header:r,payload:n,signature:o}}else if(typeof t=="object"){if(typeof t.payload!="string")throw new Error("Expected token payload to be a base64 or json string");let e=t.payload;t.payload[0]!=="{"&&(e=g.decode(e));let r=[];return t.header.map(n=>{let o=JSON.parse(g.decode(n));r.push(o);}),{header:r,payload:JSON.parse(e),signature:t.signature}}}function At(t){return x(t,{typ:"JWT",alg:"none"})+"."}

var P=BigInt("0xffffffffffffffffffffffffffffffff"),M=BigInt(0);BigInt("0x7fffffffffffffffffffffffffffffff");BigInt("-170141183460469231731687303715884105728");var ge=(i=>(i[i.Origin=1]="Origin",i[i.Standard=2]="Standard",i[i.Contract=3]="Contract",i))(ge||{}),A=(n=>(n[n.Int=0]="Int",n[n.UInt=1]="UInt",n[n.Buffer=2]="Buffer",n[n.BoolTrue=3]="BoolTrue",n[n.BoolFalse=4]="BoolFalse",n[n.PrincipalStandard=5]="PrincipalStandard",n[n.PrincipalContract=6]="PrincipalContract",n[n.ResponseOk=7]="ResponseOk",n[n.ResponseErr=8]="ResponseErr",n[n.OptionalNone=9]="OptionalNone",n[n.OptionalSome=10]="OptionalSome",n[n.List=11]="List",n[n.Tuple=12]="Tuple",n[n.StringASCII=13]="StringASCII",n[n.StringUTF8=14]="StringUTF8",n))(A||{});var K=e=>{let r=y$4(e);if(r<M)throw new RangeError("Cannot construct unsigned clarity integer from negative value");if(r>P)throw new RangeError(`Cannot construct unsigned clarity integer greater than ${P.toString()}`);return {type:1,value:r}};function te(e){return /^[a-zA-Z]([a-zA-Z0-9]|[-_!?+<>=/*])*$|^[-+=/*]$|^[<>]=?$/.test(e)&&e.length<128}var Be=(a=>(a[a.Address=0]="Address",a[a.Principal=1]="Principal",a[a.LengthPrefixedString=2]="LengthPrefixedString",a[a.MemoString=3]="MemoString",a[a.AssetInfo=4]="AssetInfo",a[a.PostCondition=5]="PostCondition",a[a.PublicKey=6]="PublicKey",a[a.LengthPrefixedList=7]="LengthPrefixedList",a[a.Payload=8]="Payload",a[a.MessageSignature=9]="MessageSignature",a[a.TransactionAuthField=10]="TransactionAuthField",a))(Be||{});function k(e){return V(e.version,l$1(e.hash160))}var Pe=(e,r)=>e?dr(e).length>r:!1;function C(e,r,t){let i=r||1,s=t||128;if(Pe(e,s))throw new Error(`String length exceeds maximum bytes ${s.toString()}`);return {type:2,content:e,lengthPrefixBytes:i,maxLengthBytes:s}}function _(e){let r=new q;return r.appendHexString(x$1(e.version,1)),r.appendHexString(e.hash160),r.concatBuffer()}function $(e){let r=new q,t=dr(e.content),i=t.byteLength;return r.appendHexString(x$1(i,e.lengthPrefixBytes)),r.push(t),r.concatBuffer()}function d(e){if(e.type===5)return k(e.address);if(e.type===6)return `${k(e.address)}.${e.contractName.content}`;throw new Error(`Unexpected principal data: ${JSON.stringify(e)}`)}var S=e=>({type:13,data:e});function pe(e){for(let r in e)if(!te(r))throw new Error(`"${r}" is not a valid Clarity name`);return {type:12,data:e}}var Oe=(o=>(o[o.ClarityAbiTypeUInt128=1]="ClarityAbiTypeUInt128",o[o.ClarityAbiTypeInt128=2]="ClarityAbiTypeInt128",o[o.ClarityAbiTypeBool=3]="ClarityAbiTypeBool",o[o.ClarityAbiTypePrincipal=4]="ClarityAbiTypePrincipal",o[o.ClarityAbiTypeNone=5]="ClarityAbiTypeNone",o[o.ClarityAbiTypeBuffer=6]="ClarityAbiTypeBuffer",o[o.ClarityAbiTypeResponse=7]="ClarityAbiTypeResponse",o[o.ClarityAbiTypeOptional=8]="ClarityAbiTypeOptional",o[o.ClarityAbiTypeTuple=9]="ClarityAbiTypeTuple",o[o.ClarityAbiTypeList=10]="ClarityAbiTypeList",o[o.ClarityAbiTypeStringAscii=11]="ClarityAbiTypeStringAscii",o[o.ClarityAbiTypeStringUtf8=12]="ClarityAbiTypeStringUtf8",o[o.ClarityAbiTypeTraitReference=13]="ClarityAbiTypeTraitReference",o))(Oe||{});function l(e){switch(e.type){case 3:case 4:return "bool";case 0:return "int";case 1:return "uint";case 2:return `(buff ${e.buffer.length})`;case 9:return "(optional none)";case 10:return `(optional ${l(e.value)})`;case 8:return `(response UnknownType ${l(e.value)})`;case 7:return `(response ${l(e.value)} UnknownType)`;case 5:case 6:return "principal";case 11:return `(list ${e.list.length} ${e.list.length?l(e.list[0]):"UnknownType"})`;case 12:return `(tuple ${Object.keys(e.data).map(r=>`(${r} ${l(e.data[r])})`).join(" ")})`;case 13:return `(string-ascii ${Qr(e.data).length})`;case 14:return `(string-utf8 ${dr(e.data).length})`}}function T(e){let r=h(e,!0);switch(e.type){case 8:return {type:l(e),value:r,success:!1};case 7:return {type:l(e),value:r,success:!0};default:return {type:l(e),value:r}}}function h(e,r=!1){switch(e.type){case 3:return !0;case 4:return !1;case 0:case 1:return r?e.value.toString():e.value;case 2:return `0x${p(e.buffer)}`;case 9:return null;case 10:return T(e.value);case 8:return T(e.value);case 7:return T(e.value);case 5:case 6:return d(e);case 11:return e.list.map(s=>T(s));case 12:let t={};return Object.keys(e.data).map(s=>[s,T(e.data[s])]).forEach(([s,p])=>{t[s]=p;}),t;case 13:return e.data;case 14:return e.data}}function f(e,r){let t=new q,i=Uint8Array.from([e]);return t.push(i),t.push(r),t.concatBuffer()}function He(e){return Uint8Array.from([e.type])}function je(e){return e.type===9?new Uint8Array([e.type]):f(e.type,m(e.value))}function De(e){let r=new Uint8Array(4);return new DataView(r.buffer,r.byteOffset,r.byteLength).setUint32(r.byteOffset,e.buffer.length),f(e.type,U([r,Uint8Array.from(e.buffer)]))}function Je(e){let r=x$1(_r(e.value),16),t=l$1(r);return f(e.type,t)}function Ye(e){let r=x$1(e.value,16),t=l$1(r);return f(e.type,t)}function Ge(e){return f(e.type,_(e.address))}function ve(e){return f(e.type,U([_(e.address),$(e.contractName)]))}function Me(e){return f(e.type,m(e.value))}function Xe(e){let r=new q,t=new Uint8Array(4);yt$1(t,e.list.length,0),r.push(t);for(let i of e.list){let s=m(i);r.push(s);}return f(e.type,r.concatBuffer())}function Ze(e){let r=[],t=new Uint8Array(4);new DataView(t.buffer,t.byteOffset,t.byteLength).setUint32(t.byteOffset,Object.keys(e.data).length),r.push(t);let s=Object.keys(e.data).sort((p,y)=>{let g=dr(p),x=dr(y);return xt$1(g,x)});for(let p of s){let y=C(p);r.push($(y));let g=m(e.data[p]);r.push(g);}return f(e.type,U(r))}function ue(e,r){let t=new q,s=(r==="ascii"?Qr:dr)(e.data),p=new Uint8Array(4);return new DataView(p.buffer,p.byteOffset,p.byteLength).setUint32(p.byteOffset,s.length),t.push(p),t.push(s),f(e.type,t.concatBuffer())}function Ke(e){return ue(e,"ascii")}function We(e){return ue(e,"utf8")}function m(e){switch(e.type){case 3:case 4:return He(e);case 9:case 10:return je(e);case 2:return De(e);case 0:return Je(e);case 1:return Ye(e);case 5:return Ge(e);case 6:return ve(e);case 7:case 8:return Me(e);case 11:return Xe(e);case 12:return Ze(e);case 13:return Ke(e);case 14:return We(e);default:throw new Error("Unable to serialize. Invalid Clarity Value.")}}function Vt(e){return `0x${p(m(e))}`}

var lib = {};

var encoding = {};

var utils = {};

(function (exports) {
	/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.randomBytes = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.checkOpts = exports.Hash = exports.concatBytes = exports.toBytes = exports.utf8ToBytes = exports.asyncLoop = exports.nextTick = exports.hexToBytes = exports.bytesToHex = exports.isLE = exports.rotr = exports.createView = exports.u32 = exports.u8 = void 0;
	// The import here is via the package name. This is to ensure
	// that exports mapping/resolution does fall into place.
	const crypto_1 = cryptoBrowser;
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

function decodeStacksAddress(stxAddress) {
  if (!stxAddress)
    throw new Error("Needs a stacks address");
  const decoded = lib.c32addressDecode(stxAddress);
  return decoded;
}
async function fetchSbtcWalletAddress(network) {
  const contractId = network === "mainnet" ? "SP000000000000000000002Q6VF78.pox" : "ST000000000000000000002AMW42H.pox";
  const data = {
    contractAddress: contractId.split(".")[0],
    contractName: contractId.split(".")[1],
    functionName: "get-pox-info",
    functionArgs: [],
    network
  };
  const result = await callContractReadOnly(data);
  console.log("pox: ", result);
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
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      arguments: data.functionArgs,
      sender: data.contractAddress
    })
  });
  const val = await response.json();
  return T(val);
}

async function fetchAddressDetails(network, address) {
  const url = network === "mainnet" ? "https://mempool.space/api" : "https://mempool.space/testnet/api";
  const response = await fetch(url + "/address/" + address);
  if (response.status === 200) {
    return await response.json();
  }
  throw new Error("Address not found - is the network correct?");
}
async function fetchUTXOs(network, address) {
  const url = network === "mainnet" ? "https://mempool.space/api" : "https://mempool.space/testnet/api";
  const response = await fetch(url + "/address/" + address + "/utxo");
  if (response.status === 200) {
    const utxos = await response.json();
    return utxos;
  }
  throw new Error("Bitcoin address not know - is the network correct?");
}
function maxCommit(utxos) {
  const summ = utxos?.map((item) => item.value).reduce((prev, curr) => prev + curr, 0);
  return summ || 0;
}
async function fetchFeeEstimate(network) {
  const url = network === "mainnet" ? "https://api.blockcypher.com/v1/btc/main" : "https://api.blockcypher.com/v1/btc/test3";
  const response = await fetch(url);
  const info = await response.json();
  return info;
}

export { $, At as A, qe as B, verify as C, ar as D, Er as E, Kt as F, ce as G, Hr as H, Rr as I, Ir as J, K, pr$1 as L, pr as M, dr as N, xr as O, we as P, V as Q, Rr$1 as R, Signature as S, l$1 as T, Ur as U, Vt as V, Xt as W, X, fetchFeeEstimate as Y, maxCommit as Z, _, $$1 as a, decodeStacksAddress as a0, fetchUTXOs as a1, fetchAddressDetails as a2, getAugmentedNamespace as a3, __viteBrowserExternal$1 as a4, commonjsGlobal as a5, utils as b, cr as c, getPublicKey as d, pe$1 as e, fetchSbtcWalletAddress as f, ge as g, hr as h, f$2 as i, U as j, d$1 as k, Se as l, m, pe as n, S as o, p, q, recoverPublicKey as r, sbtcConfig as s, lr as t, ur as u, ut$1 as v, wt as w, ct as x, mt$1 as y, ee as z };
