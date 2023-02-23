import { u as utils, e as sha256, p as pe, S, K, g as se } from './stores-dd03c1bb.js';
import { B as writable, U as get_store_value } from './index-963bdb90.js';

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

const require$$2 = /*@__PURE__*/getAugmentedNamespace(utils);

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.c32decode = exports.c32normalize = exports.c32encode = exports.c32 = void 0;
	const utils_1 = require$$2;
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

const require$$0 = /*@__PURE__*/getAugmentedNamespace(sha256);

Object.defineProperty(checksum, "__esModule", { value: true });
checksum.c32checkDecode = checksum.c32checkEncode = void 0;
const sha256_1$1 = require$$0;
const utils_1$1 = require$$2;
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
const utils_1 = require$$2;
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
	const utils_1 = require$$2;
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
const get_client = () => get_store_value(client);

let webWalletNeeded = false;
const allowed = [
  "SP1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRCBGD7R",
  // ??
  "SP1R1061ZT6KPJXQ7PAXPFB6ZAZ6ZWW28GBQA1W0F",
  // mike 2
  "SP3RQ3BGRWVXSXDZZBYGW8XHMHC4MCA6EHNHCK8FE",
  // mike 3
  "SP1ACWJC0TMD9F3Q3FJQFDWV9GSSTXN8RY31HR10B",
  // igor?
  "SP2E57N3DDG0CSF6XYWABZ1E7QBF8CTKJ4J1PHP0V"
  // jude?
];
function isAllowed(address) {
  return allowed.indexOf(address) > -1;
}
const domain = {
  name: "sBTC Bridge",
  version: "1.0.0",
  "chain-id": 1 /* Mainnet */  /* Testnet */
};
pe({
  name: S("sBTC Bridge"),
  version: S("1.0.0"),
  "chain-id": K(1 /* Mainnet */  /* Testnet */)
});
function signatureDataBuffers(data) {
  return {
    signature: data.signature,
    //hexToBytes(data.signature),
    public_key: data.publicKey
    //hexToBytes(data.publicKey),
  };
}
async function requestSignMessage(message) {
  return new Promise(
    (resolve) => get_client().signStructuredMessage({
      message: messageToTuple(message),
      domain,
      onFinish: (result) => resolve(signatureDataBuffers(result)),
      onCancel: () => resolve(false)
    })
  );
}
function messageToTuple(message) {
  return pe({
    btcAddress: se(message.btcAddress),
    amount: K(message.amount)
  });
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
        if (!isAllowed(payload.addresses.mainnet)) {
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

export { commonjsGlobal as a, getDefaultExportFromCjs as b, client as c, decodeStacksAddress as d, getAugmentedNamespace as g, login as l, requestSignMessage as r };
