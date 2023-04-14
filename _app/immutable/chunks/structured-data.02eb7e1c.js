import { A as commonjsGlobal, L as getDefaultExportFromCjs, t as tupleCV, d as stringAsciiCV, e as uintCV, C as CONFIG } from "./stacks_connect.185d0304.js";
var assertExports$1 = {};
var assert$1 = {
  get exports() {
    return assertExports$1;
  },
  set exports(v) {
    assertExports$1 = v;
  }
};
var errors = {};
var util = {};
var types = {};
var shams$1 = function hasSymbols() {
  if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
    return false;
  }
  if (typeof Symbol.iterator === "symbol") {
    return true;
  }
  var obj = {};
  var sym = Symbol("test");
  var symObj = Object(sym);
  if (typeof sym === "string") {
    return false;
  }
  if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
    return false;
  }
  if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
    return false;
  }
  var symVal = 42;
  obj[sym] = symVal;
  for (sym in obj) {
    return false;
  }
  if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
    return false;
  }
  if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
    return false;
  }
  var syms = Object.getOwnPropertySymbols(obj);
  if (syms.length !== 1 || syms[0] !== sym) {
    return false;
  }
  if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
    return false;
  }
  if (typeof Object.getOwnPropertyDescriptor === "function") {
    var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
    if (descriptor.value !== symVal || descriptor.enumerable !== true) {
      return false;
    }
  }
  return true;
};
var hasSymbols$2 = shams$1;
var shams = function hasToStringTagShams() {
  return hasSymbols$2() && !!Symbol.toStringTag;
};
var origSymbol = typeof Symbol !== "undefined" && Symbol;
var hasSymbolSham = shams$1;
var hasSymbols$1 = function hasNativeSymbols() {
  if (typeof origSymbol !== "function") {
    return false;
  }
  if (typeof Symbol !== "function") {
    return false;
  }
  if (typeof origSymbol("foo") !== "symbol") {
    return false;
  }
  if (typeof Symbol("bar") !== "symbol") {
    return false;
  }
  return hasSymbolSham();
};
var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
var slice = Array.prototype.slice;
var toStr$3 = Object.prototype.toString;
var funcType = "[object Function]";
var implementation$4 = function bind(that) {
  var target = this;
  if (typeof target !== "function" || toStr$3.call(target) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + target);
  }
  var args = slice.call(arguments, 1);
  var bound;
  var binder = function() {
    if (this instanceof bound) {
      var result = target.apply(
        this,
        args.concat(slice.call(arguments))
      );
      if (Object(result) === result) {
        return result;
      }
      return this;
    } else {
      return target.apply(
        that,
        args.concat(slice.call(arguments))
      );
    }
  };
  var boundLength = Math.max(0, target.length - args.length);
  var boundArgs = [];
  for (var i = 0; i < boundLength; i++) {
    boundArgs.push("$" + i);
  }
  bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
  if (target.prototype) {
    var Empty = function Empty2() {
    };
    Empty.prototype = target.prototype;
    bound.prototype = new Empty();
    Empty.prototype = null;
  }
  return bound;
};
var implementation$3 = implementation$4;
var functionBind = Function.prototype.bind || implementation$3;
var bind$1 = functionBind;
var src = bind$1.call(Function.call, Object.prototype.hasOwnProperty);
var undefined$1;
var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;
var getEvalledConstructor = function(expressionSyntax) {
  try {
    return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
  } catch (e) {
  }
};
var $gOPD$1 = Object.getOwnPropertyDescriptor;
if ($gOPD$1) {
  try {
    $gOPD$1({}, "");
  } catch (e) {
    $gOPD$1 = null;
  }
}
var throwTypeError = function() {
  throw new $TypeError();
};
var ThrowTypeError = $gOPD$1 ? function() {
  try {
    arguments.callee;
    return throwTypeError;
  } catch (calleeThrows) {
    try {
      return $gOPD$1(arguments, "callee").get;
    } catch (gOPDthrows) {
      return throwTypeError;
    }
  }
}() : throwTypeError;
var hasSymbols2 = hasSymbols$1();
var getProto$1 = Object.getPrototypeOf || function(x) {
  return x.__proto__;
};
var needsEval = {};
var TypedArray = typeof Uint8Array === "undefined" ? undefined$1 : getProto$1(Uint8Array);
var INTRINSICS = {
  "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
  "%ArrayIteratorPrototype%": hasSymbols2 ? getProto$1([][Symbol.iterator]()) : undefined$1,
  "%AsyncFromSyncIteratorPrototype%": undefined$1,
  "%AsyncFunction%": needsEval,
  "%AsyncGenerator%": needsEval,
  "%AsyncGeneratorFunction%": needsEval,
  "%AsyncIteratorPrototype%": needsEval,
  "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
  "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
  "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined$1 : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined$1 : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
  "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
  "%Function%": $Function,
  "%GeneratorFunction%": needsEval,
  "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
  "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
  "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": hasSymbols2 ? getProto$1(getProto$1([][Symbol.iterator]())) : undefined$1,
  "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
  "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
  "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols2 ? undefined$1 : getProto$1((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
  "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
  "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols2 ? undefined$1 : getProto$1((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": hasSymbols2 ? getProto$1(""[Symbol.iterator]()) : undefined$1,
  "%Symbol%": hasSymbols2 ? Symbol : undefined$1,
  "%SyntaxError%": $SyntaxError,
  "%ThrowTypeError%": ThrowTypeError,
  "%TypedArray%": TypedArray,
  "%TypeError%": $TypeError,
  "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
  "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
  "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
  "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet
};
try {
  null.error;
} catch (e) {
  var errorProto = getProto$1(getProto$1(e));
  INTRINSICS["%Error.prototype%"] = errorProto;
}
var doEval = function doEval2(name) {
  var value;
  if (name === "%AsyncFunction%") {
    value = getEvalledConstructor("async function () {}");
  } else if (name === "%GeneratorFunction%") {
    value = getEvalledConstructor("function* () {}");
  } else if (name === "%AsyncGeneratorFunction%") {
    value = getEvalledConstructor("async function* () {}");
  } else if (name === "%AsyncGenerator%") {
    var fn = doEval2("%AsyncGeneratorFunction%");
    if (fn) {
      value = fn.prototype;
    }
  } else if (name === "%AsyncIteratorPrototype%") {
    var gen = doEval2("%AsyncGenerator%");
    if (gen) {
      value = getProto$1(gen.prototype);
    }
  }
  INTRINSICS[name] = value;
  return value;
};
var LEGACY_ALIASES = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
};
var bind2 = functionBind;
var hasOwn = src;
var $concat = bind2.call(Function.call, Array.prototype.concat);
var $spliceApply = bind2.call(Function.apply, Array.prototype.splice);
var $replace = bind2.call(Function.call, String.prototype.replace);
var $strSlice = bind2.call(Function.call, String.prototype.slice);
var $exec = bind2.call(Function.call, RegExp.prototype.exec);
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = function stringToPath2(string) {
  var first = $strSlice(string, 0, 1);
  var last = $strSlice(string, -1);
  if (first === "%" && last !== "%") {
    throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
  } else if (last === "%" && first !== "%") {
    throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
  }
  var result = [];
  $replace(string, rePropName, function(match, number, quote, subString) {
    result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
  });
  return result;
};
var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
  var intrinsicName = name;
  var alias;
  if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
    alias = LEGACY_ALIASES[intrinsicName];
    intrinsicName = "%" + alias[0] + "%";
  }
  if (hasOwn(INTRINSICS, intrinsicName)) {
    var value = INTRINSICS[intrinsicName];
    if (value === needsEval) {
      value = doEval(intrinsicName);
    }
    if (typeof value === "undefined" && !allowMissing) {
      throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
    }
    return {
      alias,
      name: intrinsicName,
      value
    };
  }
  throw new $SyntaxError("intrinsic " + name + " does not exist!");
};
var getIntrinsic = function GetIntrinsic(name, allowMissing) {
  if (typeof name !== "string" || name.length === 0) {
    throw new $TypeError("intrinsic name must be a non-empty string");
  }
  if (arguments.length > 1 && typeof allowMissing !== "boolean") {
    throw new $TypeError('"allowMissing" argument must be a boolean');
  }
  if ($exec(/^%?[^%]*%?$/, name) === null) {
    throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  }
  var parts = stringToPath(name);
  var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
  var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
  var intrinsicRealName = intrinsic.name;
  var value = intrinsic.value;
  var skipFurtherCaching = false;
  var alias = intrinsic.alias;
  if (alias) {
    intrinsicBaseName = alias[0];
    $spliceApply(parts, $concat([0, 1], alias));
  }
  for (var i = 1, isOwn = true; i < parts.length; i += 1) {
    var part = parts[i];
    var first = $strSlice(part, 0, 1);
    var last = $strSlice(part, -1);
    if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
      throw new $SyntaxError("property names with quotes must have matching quotes");
    }
    if (part === "constructor" || !isOwn) {
      skipFurtherCaching = true;
    }
    intrinsicBaseName += "." + part;
    intrinsicRealName = "%" + intrinsicBaseName + "%";
    if (hasOwn(INTRINSICS, intrinsicRealName)) {
      value = INTRINSICS[intrinsicRealName];
    } else if (value != null) {
      if (!(part in value)) {
        if (!allowMissing) {
          throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
        }
        return void 0;
      }
      if ($gOPD$1 && i + 1 >= parts.length) {
        var desc = $gOPD$1(value, part);
        isOwn = !!desc;
        if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
          value = desc.get;
        } else {
          value = value[part];
        }
      } else {
        isOwn = hasOwn(value, part);
        value = value[part];
      }
      if (isOwn && !skipFurtherCaching) {
        INTRINSICS[intrinsicRealName] = value;
      }
    }
  }
  return value;
};
var callBindExports = {};
var callBind$1 = {
  get exports() {
    return callBindExports;
  },
  set exports(v) {
    callBindExports = v;
  }
};
(function(module) {
  var bind3 = functionBind;
  var GetIntrinsic3 = getIntrinsic;
  var $apply = GetIntrinsic3("%Function.prototype.apply%");
  var $call = GetIntrinsic3("%Function.prototype.call%");
  var $reflectApply = GetIntrinsic3("%Reflect.apply%", true) || bind3.call($call, $apply);
  var $gOPD2 = GetIntrinsic3("%Object.getOwnPropertyDescriptor%", true);
  var $defineProperty = GetIntrinsic3("%Object.defineProperty%", true);
  var $max = GetIntrinsic3("%Math.max%");
  if ($defineProperty) {
    try {
      $defineProperty({}, "a", { value: 1 });
    } catch (e) {
      $defineProperty = null;
    }
  }
  module.exports = function callBind2(originalFunction) {
    var func = $reflectApply(bind3, $call, arguments);
    if ($gOPD2 && $defineProperty) {
      var desc = $gOPD2(func, "length");
      if (desc.configurable) {
        $defineProperty(
          func,
          "length",
          { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
        );
      }
    }
    return func;
  };
  var applyBind = function applyBind2() {
    return $reflectApply(bind3, $apply, arguments);
  };
  if ($defineProperty) {
    $defineProperty(module.exports, "apply", { value: applyBind });
  } else {
    module.exports.apply = applyBind;
  }
})(callBind$1);
var GetIntrinsic$1 = getIntrinsic;
var callBind = callBindExports;
var $indexOf$1 = callBind(GetIntrinsic$1("String.prototype.indexOf"));
var callBound$3 = function callBoundIntrinsic(name, allowMissing) {
  var intrinsic = GetIntrinsic$1(name, !!allowMissing);
  if (typeof intrinsic === "function" && $indexOf$1(name, ".prototype.") > -1) {
    return callBind(intrinsic);
  }
  return intrinsic;
};
var hasToStringTag$4 = shams();
var callBound$2 = callBound$3;
var $toString$2 = callBound$2("Object.prototype.toString");
var isStandardArguments = function isArguments(value) {
  if (hasToStringTag$4 && value && typeof value === "object" && Symbol.toStringTag in value) {
    return false;
  }
  return $toString$2(value) === "[object Arguments]";
};
var isLegacyArguments = function isArguments2(value) {
  if (isStandardArguments(value)) {
    return true;
  }
  return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString$2(value) !== "[object Array]" && $toString$2(value.callee) === "[object Function]";
};
var supportsStandardArguments = function() {
  return isStandardArguments(arguments);
}();
isStandardArguments.isLegacyArguments = isLegacyArguments;
var isArguments$1 = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
var toStr$2 = Object.prototype.toString;
var fnToStr$1 = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;
var hasToStringTag$3 = shams();
var getProto = Object.getPrototypeOf;
var getGeneratorFunc = function() {
  if (!hasToStringTag$3) {
    return false;
  }
  try {
    return Function("return function*() {}")();
  } catch (e) {
  }
};
var GeneratorFunction;
var isGeneratorFunction = function isGeneratorFunction2(fn) {
  if (typeof fn !== "function") {
    return false;
  }
  if (isFnRegex.test(fnToStr$1.call(fn))) {
    return true;
  }
  if (!hasToStringTag$3) {
    var str = toStr$2.call(fn);
    return str === "[object GeneratorFunction]";
  }
  if (!getProto) {
    return false;
  }
  if (typeof GeneratorFunction === "undefined") {
    var generatorFunc = getGeneratorFunc();
    GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
  }
  return getProto(fn) === GeneratorFunction;
};
var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
  try {
    badArrayLike = Object.defineProperty({}, "length", {
      get: function() {
        throw isCallableMarker;
      }
    });
    isCallableMarker = {};
    reflectApply(function() {
      throw 42;
    }, null, badArrayLike);
  } catch (_) {
    if (_ !== isCallableMarker) {
      reflectApply = null;
    }
  }
} else {
  reflectApply = null;
}
var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
  try {
    var fnStr = fnToStr.call(value);
    return constructorRegex.test(fnStr);
  } catch (e) {
    return false;
  }
};
var tryFunctionObject = function tryFunctionToStr(value) {
  try {
    if (isES6ClassFn(value)) {
      return false;
    }
    fnToStr.call(value);
    return true;
  } catch (e) {
    return false;
  }
};
var toStr$1 = Object.prototype.toString;
var objectClass = "[object Object]";
var fnClass = "[object Function]";
var genClass = "[object GeneratorFunction]";
var ddaClass = "[object HTMLAllCollection]";
var ddaClass2 = "[object HTML document.all class]";
var ddaClass3 = "[object HTMLCollection]";
var hasToStringTag$2 = typeof Symbol === "function" && !!Symbol.toStringTag;
var isIE68 = !(0 in [,]);
var isDDA = function isDocumentDotAll() {
  return false;
};
if (typeof document === "object") {
  var all = document.all;
  if (toStr$1.call(all) === toStr$1.call(document.all)) {
    isDDA = function isDocumentDotAll2(value) {
      if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
        try {
          var str = toStr$1.call(value);
          return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
        } catch (e) {
        }
      }
      return false;
    };
  }
}
var isCallable$1 = reflectApply ? function isCallable(value) {
  if (isDDA(value)) {
    return true;
  }
  if (!value) {
    return false;
  }
  if (typeof value !== "function" && typeof value !== "object") {
    return false;
  }
  try {
    reflectApply(value, null, badArrayLike);
  } catch (e) {
    if (e !== isCallableMarker) {
      return false;
    }
  }
  return !isES6ClassFn(value) && tryFunctionObject(value);
} : function isCallable2(value) {
  if (isDDA(value)) {
    return true;
  }
  if (!value) {
    return false;
  }
  if (typeof value !== "function" && typeof value !== "object") {
    return false;
  }
  if (hasToStringTag$2) {
    return tryFunctionObject(value);
  }
  if (isES6ClassFn(value)) {
    return false;
  }
  var strClass = toStr$1.call(value);
  if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
    return false;
  }
  return tryFunctionObject(value);
};
var isCallable3 = isCallable$1;
var toStr = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var forEachArray = function forEachArray2(array, iterator, receiver) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (hasOwnProperty.call(array, i)) {
      if (receiver == null) {
        iterator(array[i], i, array);
      } else {
        iterator.call(receiver, array[i], i, array);
      }
    }
  }
};
var forEachString = function forEachString2(string, iterator, receiver) {
  for (var i = 0, len = string.length; i < len; i++) {
    if (receiver == null) {
      iterator(string.charAt(i), i, string);
    } else {
      iterator.call(receiver, string.charAt(i), i, string);
    }
  }
};
var forEachObject = function forEachObject2(object, iterator, receiver) {
  for (var k in object) {
    if (hasOwnProperty.call(object, k)) {
      if (receiver == null) {
        iterator(object[k], k, object);
      } else {
        iterator.call(receiver, object[k], k, object);
      }
    }
  }
};
var forEach$2 = function forEach(list, iterator, thisArg) {
  if (!isCallable3(iterator)) {
    throw new TypeError("iterator must be a function");
  }
  var receiver;
  if (arguments.length >= 3) {
    receiver = thisArg;
  }
  if (toStr.call(list) === "[object Array]") {
    forEachArray(list, iterator, receiver);
  } else if (typeof list === "string") {
    forEachString(list, iterator, receiver);
  } else {
    forEachObject(list, iterator, receiver);
  }
};
var forEach_1 = forEach$2;
var possibleNames = [
  "BigInt64Array",
  "BigUint64Array",
  "Float32Array",
  "Float64Array",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Uint16Array",
  "Uint32Array",
  "Uint8Array",
  "Uint8ClampedArray"
];
var g$2 = typeof globalThis === "undefined" ? commonjsGlobal : globalThis;
var availableTypedArrays$2 = function availableTypedArrays() {
  var out = [];
  for (var i = 0; i < possibleNames.length; i++) {
    if (typeof g$2[possibleNames[i]] === "function") {
      out[out.length] = possibleNames[i];
    }
  }
  return out;
};
var GetIntrinsic2 = getIntrinsic;
var $gOPD = GetIntrinsic2("%Object.getOwnPropertyDescriptor%", true);
if ($gOPD) {
  try {
    $gOPD([], "length");
  } catch (e) {
    $gOPD = null;
  }
}
var gopd = $gOPD;
var forEach$1 = forEach_1;
var availableTypedArrays$1 = availableTypedArrays$2;
var callBound$1 = callBound$3;
var $toString$1 = callBound$1("Object.prototype.toString");
var hasToStringTag$1 = shams();
var gOPD$1 = gopd;
var g$1 = typeof globalThis === "undefined" ? commonjsGlobal : globalThis;
var typedArrays$1 = availableTypedArrays$1();
var $indexOf = callBound$1("Array.prototype.indexOf", true) || function indexOf(array, value) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};
var $slice$1 = callBound$1("String.prototype.slice");
var toStrTags$1 = {};
var getPrototypeOf$1 = Object.getPrototypeOf;
if (hasToStringTag$1 && gOPD$1 && getPrototypeOf$1) {
  forEach$1(typedArrays$1, function(typedArray) {
    var arr = new g$1[typedArray]();
    if (Symbol.toStringTag in arr) {
      var proto = getPrototypeOf$1(arr);
      var descriptor = gOPD$1(proto, Symbol.toStringTag);
      if (!descriptor) {
        var superProto = getPrototypeOf$1(proto);
        descriptor = gOPD$1(superProto, Symbol.toStringTag);
      }
      toStrTags$1[typedArray] = descriptor.get;
    }
  });
}
var tryTypedArrays$1 = function tryAllTypedArrays(value) {
  var anyTrue = false;
  forEach$1(toStrTags$1, function(getter, typedArray) {
    if (!anyTrue) {
      try {
        anyTrue = getter.call(value) === typedArray;
      } catch (e) {
      }
    }
  });
  return anyTrue;
};
var isTypedArray$1 = function isTypedArray(value) {
  if (!value || typeof value !== "object") {
    return false;
  }
  if (!hasToStringTag$1 || !(Symbol.toStringTag in value)) {
    var tag = $slice$1($toString$1(value), 8, -1);
    return $indexOf(typedArrays$1, tag) > -1;
  }
  if (!gOPD$1) {
    return false;
  }
  return tryTypedArrays$1(value);
};
var forEach2 = forEach_1;
var availableTypedArrays2 = availableTypedArrays$2;
var callBound = callBound$3;
var gOPD = gopd;
var $toString = callBound("Object.prototype.toString");
var hasToStringTag = shams();
var g = typeof globalThis === "undefined" ? commonjsGlobal : globalThis;
var typedArrays = availableTypedArrays2();
var $slice = callBound("String.prototype.slice");
var toStrTags = {};
var getPrototypeOf = Object.getPrototypeOf;
if (hasToStringTag && gOPD && getPrototypeOf) {
  forEach2(typedArrays, function(typedArray) {
    if (typeof g[typedArray] === "function") {
      var arr = new g[typedArray]();
      if (Symbol.toStringTag in arr) {
        var proto = getPrototypeOf(arr);
        var descriptor = gOPD(proto, Symbol.toStringTag);
        if (!descriptor) {
          var superProto = getPrototypeOf(proto);
          descriptor = gOPD(superProto, Symbol.toStringTag);
        }
        toStrTags[typedArray] = descriptor.get;
      }
    }
  });
}
var tryTypedArrays = function tryAllTypedArrays2(value) {
  var foundName = false;
  forEach2(toStrTags, function(getter, typedArray) {
    if (!foundName) {
      try {
        var name = getter.call(value);
        if (name === typedArray) {
          foundName = name;
        }
      } catch (e) {
      }
    }
  });
  return foundName;
};
var isTypedArray2 = isTypedArray$1;
var whichTypedArray = function whichTypedArray2(value) {
  if (!isTypedArray2(value)) {
    return false;
  }
  if (!hasToStringTag || !(Symbol.toStringTag in value)) {
    return $slice($toString(value), 8, -1);
  }
  return tryTypedArrays(value);
};
(function(exports) {
  var isArgumentsObject = isArguments$1;
  var isGeneratorFunction$1 = isGeneratorFunction;
  var whichTypedArray$1 = whichTypedArray;
  var isTypedArray3 = isTypedArray$1;
  function uncurryThis(f) {
    return f.call.bind(f);
  }
  var BigIntSupported = typeof BigInt !== "undefined";
  var SymbolSupported = typeof Symbol !== "undefined";
  var ObjectToString = uncurryThis(Object.prototype.toString);
  var numberValue = uncurryThis(Number.prototype.valueOf);
  var stringValue = uncurryThis(String.prototype.valueOf);
  var booleanValue = uncurryThis(Boolean.prototype.valueOf);
  if (BigIntSupported) {
    var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
  }
  if (SymbolSupported) {
    var symbolValue = uncurryThis(Symbol.prototype.valueOf);
  }
  function checkBoxedPrimitive(value, prototypeValueOf) {
    if (typeof value !== "object") {
      return false;
    }
    try {
      prototypeValueOf(value);
      return true;
    } catch (e) {
      return false;
    }
  }
  exports.isArgumentsObject = isArgumentsObject;
  exports.isGeneratorFunction = isGeneratorFunction$1;
  exports.isTypedArray = isTypedArray3;
  function isPromise(input) {
    return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
  }
  exports.isPromise = isPromise;
  function isArrayBufferView(value) {
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      return ArrayBuffer.isView(value);
    }
    return isTypedArray3(value) || isDataView(value);
  }
  exports.isArrayBufferView = isArrayBufferView;
  function isUint8Array(value) {
    return whichTypedArray$1(value) === "Uint8Array";
  }
  exports.isUint8Array = isUint8Array;
  function isUint8ClampedArray(value) {
    return whichTypedArray$1(value) === "Uint8ClampedArray";
  }
  exports.isUint8ClampedArray = isUint8ClampedArray;
  function isUint16Array(value) {
    return whichTypedArray$1(value) === "Uint16Array";
  }
  exports.isUint16Array = isUint16Array;
  function isUint32Array(value) {
    return whichTypedArray$1(value) === "Uint32Array";
  }
  exports.isUint32Array = isUint32Array;
  function isInt8Array(value) {
    return whichTypedArray$1(value) === "Int8Array";
  }
  exports.isInt8Array = isInt8Array;
  function isInt16Array(value) {
    return whichTypedArray$1(value) === "Int16Array";
  }
  exports.isInt16Array = isInt16Array;
  function isInt32Array(value) {
    return whichTypedArray$1(value) === "Int32Array";
  }
  exports.isInt32Array = isInt32Array;
  function isFloat32Array(value) {
    return whichTypedArray$1(value) === "Float32Array";
  }
  exports.isFloat32Array = isFloat32Array;
  function isFloat64Array(value) {
    return whichTypedArray$1(value) === "Float64Array";
  }
  exports.isFloat64Array = isFloat64Array;
  function isBigInt64Array(value) {
    return whichTypedArray$1(value) === "BigInt64Array";
  }
  exports.isBigInt64Array = isBigInt64Array;
  function isBigUint64Array(value) {
    return whichTypedArray$1(value) === "BigUint64Array";
  }
  exports.isBigUint64Array = isBigUint64Array;
  function isMapToString(value) {
    return ObjectToString(value) === "[object Map]";
  }
  isMapToString.working = typeof Map !== "undefined" && isMapToString(/* @__PURE__ */ new Map());
  function isMap(value) {
    if (typeof Map === "undefined") {
      return false;
    }
    return isMapToString.working ? isMapToString(value) : value instanceof Map;
  }
  exports.isMap = isMap;
  function isSetToString(value) {
    return ObjectToString(value) === "[object Set]";
  }
  isSetToString.working = typeof Set !== "undefined" && isSetToString(/* @__PURE__ */ new Set());
  function isSet(value) {
    if (typeof Set === "undefined") {
      return false;
    }
    return isSetToString.working ? isSetToString(value) : value instanceof Set;
  }
  exports.isSet = isSet;
  function isWeakMapToString(value) {
    return ObjectToString(value) === "[object WeakMap]";
  }
  isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(/* @__PURE__ */ new WeakMap());
  function isWeakMap(value) {
    if (typeof WeakMap === "undefined") {
      return false;
    }
    return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
  }
  exports.isWeakMap = isWeakMap;
  function isWeakSetToString(value) {
    return ObjectToString(value) === "[object WeakSet]";
  }
  isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(/* @__PURE__ */ new WeakSet());
  function isWeakSet(value) {
    return isWeakSetToString(value);
  }
  exports.isWeakSet = isWeakSet;
  function isArrayBufferToString(value) {
    return ObjectToString(value) === "[object ArrayBuffer]";
  }
  isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
  function isArrayBuffer(value) {
    if (typeof ArrayBuffer === "undefined") {
      return false;
    }
    return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
  }
  exports.isArrayBuffer = isArrayBuffer;
  function isDataViewToString(value) {
    return ObjectToString(value) === "[object DataView]";
  }
  isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
  function isDataView(value) {
    if (typeof DataView === "undefined") {
      return false;
    }
    return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
  }
  exports.isDataView = isDataView;
  var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : void 0;
  function isSharedArrayBufferToString(value) {
    return ObjectToString(value) === "[object SharedArrayBuffer]";
  }
  function isSharedArrayBuffer(value) {
    if (typeof SharedArrayBufferCopy === "undefined") {
      return false;
    }
    if (typeof isSharedArrayBufferToString.working === "undefined") {
      isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
    }
    return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
  }
  exports.isSharedArrayBuffer = isSharedArrayBuffer;
  function isAsyncFunction(value) {
    return ObjectToString(value) === "[object AsyncFunction]";
  }
  exports.isAsyncFunction = isAsyncFunction;
  function isMapIterator(value) {
    return ObjectToString(value) === "[object Map Iterator]";
  }
  exports.isMapIterator = isMapIterator;
  function isSetIterator(value) {
    return ObjectToString(value) === "[object Set Iterator]";
  }
  exports.isSetIterator = isSetIterator;
  function isGeneratorObject(value) {
    return ObjectToString(value) === "[object Generator]";
  }
  exports.isGeneratorObject = isGeneratorObject;
  function isWebAssemblyCompiledModule(value) {
    return ObjectToString(value) === "[object WebAssembly.Module]";
  }
  exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
  function isNumberObject(value) {
    return checkBoxedPrimitive(value, numberValue);
  }
  exports.isNumberObject = isNumberObject;
  function isStringObject(value) {
    return checkBoxedPrimitive(value, stringValue);
  }
  exports.isStringObject = isStringObject;
  function isBooleanObject(value) {
    return checkBoxedPrimitive(value, booleanValue);
  }
  exports.isBooleanObject = isBooleanObject;
  function isBigIntObject(value) {
    return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
  }
  exports.isBigIntObject = isBigIntObject;
  function isSymbolObject(value) {
    return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
  }
  exports.isSymbolObject = isSymbolObject;
  function isBoxedPrimitive(value) {
    return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
  }
  exports.isBoxedPrimitive = isBoxedPrimitive;
  function isAnyArrayBuffer(value) {
    return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
  }
  exports.isAnyArrayBuffer = isAnyArrayBuffer;
  ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(method) {
    Object.defineProperty(exports, method, {
      enumerable: false,
      value: function() {
        throw new Error(method + " is not supported in userland");
      }
    });
  });
})(types);
var isBufferBrowser = function isBuffer(arg) {
  return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
};
var inherits_browserExports = {};
var inherits_browser = {
  get exports() {
    return inherits_browserExports;
  },
  set exports(v) {
    inherits_browserExports = v;
  }
};
if (typeof Object.create === "function") {
  inherits_browser.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  inherits_browser.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {
      };
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}
(function(exports) {
  var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };
  var formatRegExp = /%[sdj%]/g;
  exports.format = function(f) {
    if (!isString(f)) {
      var objects = [];
      for (var i = 0; i < arguments.length; i++) {
        objects.push(inspect(arguments[i]));
      }
      return objects.join(" ");
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function(x2) {
      if (x2 === "%%")
        return "%";
      if (i >= len)
        return x2;
      switch (x2) {
        case "%s":
          return String(args[i++]);
        case "%d":
          return Number(args[i++]);
        case "%j":
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return "[Circular]";
          }
        default:
          return x2;
      }
    });
    for (var x = args[i]; i < len; x = args[++i]) {
      if (isNull(x) || !isObject(x)) {
        str += " " + x;
      } else {
        str += " " + inspect(x);
      }
    }
    return str;
  };
  exports.deprecate = function(fn, msg) {
    if (typeof process !== "undefined" && process.noDeprecation === true) {
      return fn;
    }
    if (typeof process === "undefined") {
      return function() {
        return exports.deprecate(fn, msg).apply(this, arguments);
      };
    }
    var warned = false;
    function deprecated() {
      if (!warned) {
        if (process.throwDeprecation) {
          throw new Error(msg);
        } else if (process.traceDeprecation) {
          console.trace(msg);
        } else {
          console.error(msg);
        }
        warned = true;
      }
      return fn.apply(this, arguments);
    }
    return deprecated;
  };
  var debugs = {};
  var debugEnvRegex = /^$/;
  if ({}.NODE_DEBUG) {
    var debugEnv = {}.NODE_DEBUG;
    debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
    debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
  }
  exports.debuglog = function(set) {
    set = set.toUpperCase();
    if (!debugs[set]) {
      if (debugEnvRegex.test(set)) {
        var pid = process.pid;
        debugs[set] = function() {
          var msg = exports.format.apply(exports, arguments);
          console.error("%s %d: %s", set, pid, msg);
        };
      } else {
        debugs[set] = function() {
        };
      }
    }
    return debugs[set];
  };
  function inspect(obj, opts) {
    var ctx = {
      seen: [],
      stylize: stylizeNoColor
    };
    if (arguments.length >= 3)
      ctx.depth = arguments[2];
    if (arguments.length >= 4)
      ctx.colors = arguments[3];
    if (isBoolean(opts)) {
      ctx.showHidden = opts;
    } else if (opts) {
      exports._extend(ctx, opts);
    }
    if (isUndefined(ctx.showHidden))
      ctx.showHidden = false;
    if (isUndefined(ctx.depth))
      ctx.depth = 2;
    if (isUndefined(ctx.colors))
      ctx.colors = false;
    if (isUndefined(ctx.customInspect))
      ctx.customInspect = true;
    if (ctx.colors)
      ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
  }
  exports.inspect = inspect;
  inspect.colors = {
    "bold": [1, 22],
    "italic": [3, 23],
    "underline": [4, 24],
    "inverse": [7, 27],
    "white": [37, 39],
    "grey": [90, 39],
    "black": [30, 39],
    "blue": [34, 39],
    "cyan": [36, 39],
    "green": [32, 39],
    "magenta": [35, 39],
    "red": [31, 39],
    "yellow": [33, 39]
  };
  inspect.styles = {
    "special": "cyan",
    "number": "yellow",
    "boolean": "yellow",
    "undefined": "grey",
    "null": "bold",
    "string": "green",
    "date": "magenta",
    // "name": intentionally not styling
    "regexp": "red"
  };
  function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];
    if (style) {
      return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
    } else {
      return str;
    }
  }
  function stylizeNoColor(str, styleType) {
    return str;
  }
  function arrayToHash(array) {
    var hash = {};
    array.forEach(function(val, idx) {
      hash[val] = true;
    });
    return hash;
  }
  function formatValue(ctx, value, recurseTimes) {
    if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
      var ret = value.inspect(recurseTimes, ctx);
      if (!isString(ret)) {
        ret = formatValue(ctx, ret, recurseTimes);
      }
      return ret;
    }
    var primitive = formatPrimitive(ctx, value);
    if (primitive) {
      return primitive;
    }
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);
    if (ctx.showHidden) {
      keys = Object.getOwnPropertyNames(value);
    }
    if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
      return formatError(value);
    }
    if (keys.length === 0) {
      if (isFunction(value)) {
        var name = value.name ? ": " + value.name : "";
        return ctx.stylize("[Function" + name + "]", "special");
      }
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
      }
      if (isDate(value)) {
        return ctx.stylize(Date.prototype.toString.call(value), "date");
      }
      if (isError(value)) {
        return formatError(value);
      }
    }
    var base = "", array = false, braces = ["{", "}"];
    if (isArray(value)) {
      array = true;
      braces = ["[", "]"];
    }
    if (isFunction(value)) {
      var n = value.name ? ": " + value.name : "";
      base = " [Function" + n + "]";
    }
    if (isRegExp(value)) {
      base = " " + RegExp.prototype.toString.call(value);
    }
    if (isDate(value)) {
      base = " " + Date.prototype.toUTCString.call(value);
    }
    if (isError(value)) {
      base = " " + formatError(value);
    }
    if (keys.length === 0 && (!array || value.length == 0)) {
      return braces[0] + base + braces[1];
    }
    if (recurseTimes < 0) {
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
      } else {
        return ctx.stylize("[Object]", "special");
      }
    }
    ctx.seen.push(value);
    var output;
    if (array) {
      output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    } else {
      output = keys.map(function(key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
      });
    }
    ctx.seen.pop();
    return reduceToSingleString(output, base, braces);
  }
  function formatPrimitive(ctx, value) {
    if (isUndefined(value))
      return ctx.stylize("undefined", "undefined");
    if (isString(value)) {
      var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return ctx.stylize(simple, "string");
    }
    if (isNumber(value))
      return ctx.stylize("" + value, "number");
    if (isBoolean(value))
      return ctx.stylize("" + value, "boolean");
    if (isNull(value))
      return ctx.stylize("null", "null");
  }
  function formatError(value) {
    return "[" + Error.prototype.toString.call(value) + "]";
  }
  function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for (var i = 0, l = value.length; i < l; ++i) {
      if (hasOwnProperty2(value, String(i))) {
        output.push(formatProperty(
          ctx,
          value,
          recurseTimes,
          visibleKeys,
          String(i),
          true
        ));
      } else {
        output.push("");
      }
    }
    keys.forEach(function(key) {
      if (!key.match(/^\d+$/)) {
        output.push(formatProperty(
          ctx,
          value,
          recurseTimes,
          visibleKeys,
          key,
          true
        ));
      }
    });
    return output;
  }
  function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
    if (desc.get) {
      if (desc.set) {
        str = ctx.stylize("[Getter/Setter]", "special");
      } else {
        str = ctx.stylize("[Getter]", "special");
      }
    } else {
      if (desc.set) {
        str = ctx.stylize("[Setter]", "special");
      }
    }
    if (!hasOwnProperty2(visibleKeys, key)) {
      name = "[" + key + "]";
    }
    if (!str) {
      if (ctx.seen.indexOf(desc.value) < 0) {
        if (isNull(recurseTimes)) {
          str = formatValue(ctx, desc.value, null);
        } else {
          str = formatValue(ctx, desc.value, recurseTimes - 1);
        }
        if (str.indexOf("\n") > -1) {
          if (array) {
            str = str.split("\n").map(function(line) {
              return "  " + line;
            }).join("\n").slice(2);
          } else {
            str = "\n" + str.split("\n").map(function(line) {
              return "   " + line;
            }).join("\n");
          }
        }
      } else {
        str = ctx.stylize("[Circular]", "special");
      }
    }
    if (isUndefined(name)) {
      if (array && key.match(/^\d+$/)) {
        return str;
      }
      name = JSON.stringify("" + key);
      if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
        name = name.slice(1, -1);
        name = ctx.stylize(name, "name");
      } else {
        name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
        name = ctx.stylize(name, "string");
      }
    }
    return name + ": " + str;
  }
  function reduceToSingleString(output, base, braces) {
    var length = output.reduce(function(prev, cur) {
      if (cur.indexOf("\n") >= 0)
        ;
      return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    if (length > 60) {
      return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
    }
    return braces[0] + base + " " + output.join(", ") + " " + braces[1];
  }
  exports.types = types;
  function isArray(ar) {
    return Array.isArray(ar);
  }
  exports.isArray = isArray;
  function isBoolean(arg) {
    return typeof arg === "boolean";
  }
  exports.isBoolean = isBoolean;
  function isNull(arg) {
    return arg === null;
  }
  exports.isNull = isNull;
  function isNullOrUndefined(arg) {
    return arg == null;
  }
  exports.isNullOrUndefined = isNullOrUndefined;
  function isNumber(arg) {
    return typeof arg === "number";
  }
  exports.isNumber = isNumber;
  function isString(arg) {
    return typeof arg === "string";
  }
  exports.isString = isString;
  function isSymbol(arg) {
    return typeof arg === "symbol";
  }
  exports.isSymbol = isSymbol;
  function isUndefined(arg) {
    return arg === void 0;
  }
  exports.isUndefined = isUndefined;
  function isRegExp(re) {
    return isObject(re) && objectToString(re) === "[object RegExp]";
  }
  exports.isRegExp = isRegExp;
  exports.types.isRegExp = isRegExp;
  function isObject(arg) {
    return typeof arg === "object" && arg !== null;
  }
  exports.isObject = isObject;
  function isDate(d) {
    return isObject(d) && objectToString(d) === "[object Date]";
  }
  exports.isDate = isDate;
  exports.types.isDate = isDate;
  function isError(e) {
    return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
  }
  exports.isError = isError;
  exports.types.isNativeError = isError;
  function isFunction(arg) {
    return typeof arg === "function";
  }
  exports.isFunction = isFunction;
  function isPrimitive(arg) {
    return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || // ES6 symbol
    typeof arg === "undefined";
  }
  exports.isPrimitive = isPrimitive;
  exports.isBuffer = isBufferBrowser;
  function objectToString(o) {
    return Object.prototype.toString.call(o);
  }
  function pad(n) {
    return n < 10 ? "0" + n.toString(10) : n.toString(10);
  }
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  function timestamp() {
    var d = /* @__PURE__ */ new Date();
    var time = [
      pad(d.getHours()),
      pad(d.getMinutes()),
      pad(d.getSeconds())
    ].join(":");
    return [d.getDate(), months[d.getMonth()], time].join(" ");
  }
  exports.log = function() {
    console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
  };
  exports.inherits = inherits_browserExports;
  exports._extend = function(origin, add) {
    if (!add || !isObject(add))
      return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while (i--) {
      origin[keys[i]] = add[keys[i]];
    }
    return origin;
  };
  function hasOwnProperty2(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : void 0;
  exports.promisify = function promisify(original) {
    if (typeof original !== "function")
      throw new TypeError('The "original" argument must be of type Function');
    if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
      var fn = original[kCustomPromisifiedSymbol];
      if (typeof fn !== "function") {
        throw new TypeError('The "util.promisify.custom" argument must be of type Function');
      }
      Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
      });
      return fn;
    }
    function fn() {
      var promiseResolve, promiseReject;
      var promise = new Promise(function(resolve, reject) {
        promiseResolve = resolve;
        promiseReject = reject;
      });
      var args = [];
      for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      args.push(function(err, value) {
        if (err) {
          promiseReject(err);
        } else {
          promiseResolve(value);
        }
      });
      try {
        original.apply(this, args);
      } catch (err) {
        promiseReject(err);
      }
      return promise;
    }
    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
    if (kCustomPromisifiedSymbol)
      Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
      });
    return Object.defineProperties(
      fn,
      getOwnPropertyDescriptors(original)
    );
  };
  exports.promisify.custom = kCustomPromisifiedSymbol;
  function callbackifyOnRejected(reason, cb) {
    if (!reason) {
      var newReason = new Error("Promise was rejected with a falsy value");
      newReason.reason = reason;
      reason = newReason;
    }
    return cb(reason);
  }
  function callbackify(original) {
    if (typeof original !== "function") {
      throw new TypeError('The "original" argument must be of type Function');
    }
    function callbackified() {
      var args = [];
      for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      var maybeCb = args.pop();
      if (typeof maybeCb !== "function") {
        throw new TypeError("The last argument must be of type Function");
      }
      var self = this;
      var cb = function() {
        return maybeCb.apply(self, arguments);
      };
      original.apply(this, args).then(
        function(ret) {
          process.nextTick(cb.bind(null, null, ret));
        },
        function(rej) {
          process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
        }
      );
    }
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(
      callbackified,
      getOwnPropertyDescriptors(original)
    );
    return callbackified;
  }
  exports.callbackify = callbackify;
})(util);
var hasRequiredErrors;
function requireErrors() {
  if (hasRequiredErrors)
    return errors;
  hasRequiredErrors = 1;
  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  var codes = {};
  var assert2;
  var util$1;
  function createErrorType(code, message, Base) {
    if (!Base) {
      Base = Error;
    }
    function getMessage(arg1, arg2, arg3) {
      if (typeof message === "string") {
        return message;
      } else {
        return message(arg1, arg2, arg3);
      }
    }
    var NodeError = /* @__PURE__ */ function(_Base) {
      _inherits(NodeError2, _Base);
      function NodeError2(arg1, arg2, arg3) {
        var _this;
        _classCallCheck(this, NodeError2);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(NodeError2).call(this, getMessage(arg1, arg2, arg3)));
        _this.code = code;
        return _this;
      }
      return NodeError2;
    }(Base);
    codes[code] = NodeError;
  }
  function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
      var len = expected.length;
      expected = expected.map(function(i) {
        return String(i);
      });
      if (len > 2) {
        return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
      } else if (len === 2) {
        return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
      } else {
        return "of ".concat(thing, " ").concat(expected[0]);
      }
    } else {
      return "of ".concat(thing, " ").concat(String(expected));
    }
  }
  function startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
  }
  function endsWith(str, search, this_len) {
    if (this_len === void 0 || this_len > str.length) {
      this_len = str.length;
    }
    return str.substring(this_len - search.length, this_len) === search;
  }
  function includes(str, search, start) {
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + search.length > str.length) {
      return false;
    } else {
      return str.indexOf(search, start) !== -1;
    }
  }
  createErrorType("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError);
  createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
    if (assert2 === void 0)
      assert2 = requireAssert();
    assert2(typeof name === "string", "'name' must be a string");
    var determiner;
    if (typeof expected === "string" && startsWith(expected, "not ")) {
      determiner = "must not be";
      expected = expected.replace(/^not /, "");
    } else {
      determiner = "must be";
    }
    var msg;
    if (endsWith(name, " argument")) {
      msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    } else {
      var type = includes(name, ".") ? "property" : "argument";
      msg = 'The "'.concat(name, '" ').concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    }
    msg += ". Received type ".concat(_typeof(actual));
    return msg;
  }, TypeError);
  createErrorType("ERR_INVALID_ARG_VALUE", function(name, value) {
    var reason = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "is invalid";
    if (util$1 === void 0)
      util$1 = util;
    var inspected = util$1.inspect(value);
    if (inspected.length > 128) {
      inspected = "".concat(inspected.slice(0, 128), "...");
    }
    return "The argument '".concat(name, "' ").concat(reason, ". Received ").concat(inspected);
  }, TypeError);
  createErrorType("ERR_INVALID_RETURN_VALUE", function(input, name, value) {
    var type;
    if (value && value.constructor && value.constructor.name) {
      type = "instance of ".concat(value.constructor.name);
    } else {
      type = "type ".concat(_typeof(value));
    }
    return "Expected ".concat(input, ' to be returned from the "').concat(name, '"') + " function but got ".concat(type, ".");
  }, TypeError);
  createErrorType("ERR_MISSING_ARGS", function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (assert2 === void 0)
      assert2 = requireAssert();
    assert2(args.length > 0, "At least one arg needs to be specified");
    var msg = "The ";
    var len = args.length;
    args = args.map(function(a) {
      return '"'.concat(a, '"');
    });
    switch (len) {
      case 1:
        msg += "".concat(args[0], " argument");
        break;
      case 2:
        msg += "".concat(args[0], " and ").concat(args[1], " arguments");
        break;
      default:
        msg += args.slice(0, len - 1).join(", ");
        msg += ", and ".concat(args[len - 1], " arguments");
        break;
    }
    return "".concat(msg, " must be specified");
  }, TypeError);
  errors.codes = codes;
  return errors;
}
var assertion_error;
var hasRequiredAssertion_error;
function requireAssertion_error() {
  if (hasRequiredAssertion_error)
    return assertion_error;
  hasRequiredAssertion_error = 1;
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === "function") {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys.forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
    _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
      if (Class2 === null || !_isNativeFunction(Class2))
        return Class2;
      if (typeof Class2 !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class2))
          return _cache.get(Class2);
        _cache.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
      return _setPrototypeOf(Wrapper, Class2);
    };
    return _wrapNativeSuper(Class);
  }
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct2(Parent2, args2, Class2) {
        var a = [null];
        a.push.apply(a, args2);
        var Constructor = Function.bind.apply(Parent2, a);
        var instance = new Constructor();
        if (Class2)
          _setPrototypeOf(instance, Class2.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  var _require = util, inspect = _require.inspect;
  var _require2 = requireErrors(), ERR_INVALID_ARG_TYPE = _require2.codes.ERR_INVALID_ARG_TYPE;
  function endsWith(str, search, this_len) {
    if (this_len === void 0 || this_len > str.length) {
      this_len = str.length;
    }
    return str.substring(this_len - search.length, this_len) === search;
  }
  function repeat(str, count) {
    count = Math.floor(count);
    if (str.length == 0 || count == 0)
      return "";
    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));
    while (count) {
      str += str;
      count--;
    }
    str += str.substring(0, maxCount - str.length);
    return str;
  }
  var blue = "";
  var green = "";
  var red = "";
  var white = "";
  var kReadableOperator = {
    deepStrictEqual: "Expected values to be strictly deep-equal:",
    strictEqual: "Expected values to be strictly equal:",
    strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
    deepEqual: "Expected values to be loosely deep-equal:",
    equal: "Expected values to be loosely equal:",
    notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
    notStrictEqual: 'Expected "actual" to be strictly unequal to:',
    notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
    notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
    notEqual: 'Expected "actual" to be loosely unequal to:',
    notIdentical: "Values identical but not reference-equal:"
  };
  var kMaxShortLength = 10;
  function copyError(source) {
    var keys = Object.keys(source);
    var target = Object.create(Object.getPrototypeOf(source));
    keys.forEach(function(key) {
      target[key] = source[key];
    });
    Object.defineProperty(target, "message", {
      value: source.message
    });
    return target;
  }
  function inspectValue(val) {
    return inspect(val, {
      compact: false,
      customInspect: false,
      depth: 1e3,
      maxArrayLength: Infinity,
      // Assert compares only enumerable properties (with a few exceptions).
      showHidden: false,
      // Having a long line as error is better than wrapping the line for
      // comparison for now.
      // TODO(BridgeAR): `breakLength` should be limited as soon as soon as we
      // have meta information about the inspected properties (i.e., know where
      // in what line the property starts and ends).
      breakLength: Infinity,
      // Assert does not detect proxies currently.
      showProxy: false,
      sorted: true,
      // Inspect getters as we also check them when comparing entries.
      getters: true
    });
  }
  function createErrDiff(actual, expected, operator) {
    var other = "";
    var res = "";
    var lastPos = 0;
    var end = "";
    var skipped = false;
    var actualInspected = inspectValue(actual);
    var actualLines = actualInspected.split("\n");
    var expectedLines = inspectValue(expected).split("\n");
    var i = 0;
    var indicator = "";
    if (operator === "strictEqual" && _typeof(actual) === "object" && _typeof(expected) === "object" && actual !== null && expected !== null) {
      operator = "strictEqualObject";
    }
    if (actualLines.length === 1 && expectedLines.length === 1 && actualLines[0] !== expectedLines[0]) {
      var inputLength = actualLines[0].length + expectedLines[0].length;
      if (inputLength <= kMaxShortLength) {
        if ((_typeof(actual) !== "object" || actual === null) && (_typeof(expected) !== "object" || expected === null) && (actual !== 0 || expected !== 0)) {
          return "".concat(kReadableOperator[operator], "\n\n") + "".concat(actualLines[0], " !== ").concat(expectedLines[0], "\n");
        }
      } else if (operator !== "strictEqualObject") {
        var maxLength = process.stderr && process.stderr.isTTY ? process.stderr.columns : 80;
        if (inputLength < maxLength) {
          while (actualLines[0][i] === expectedLines[0][i]) {
            i++;
          }
          if (i > 2) {
            indicator = "\n  ".concat(repeat(" ", i), "^");
            i = 0;
          }
        }
      }
    }
    var a = actualLines[actualLines.length - 1];
    var b = expectedLines[expectedLines.length - 1];
    while (a === b) {
      if (i++ < 2) {
        end = "\n  ".concat(a).concat(end);
      } else {
        other = a;
      }
      actualLines.pop();
      expectedLines.pop();
      if (actualLines.length === 0 || expectedLines.length === 0)
        break;
      a = actualLines[actualLines.length - 1];
      b = expectedLines[expectedLines.length - 1];
    }
    var maxLines = Math.max(actualLines.length, expectedLines.length);
    if (maxLines === 0) {
      var _actualLines = actualInspected.split("\n");
      if (_actualLines.length > 30) {
        _actualLines[26] = "".concat(blue, "...").concat(white);
        while (_actualLines.length > 27) {
          _actualLines.pop();
        }
      }
      return "".concat(kReadableOperator.notIdentical, "\n\n").concat(_actualLines.join("\n"), "\n");
    }
    if (i > 3) {
      end = "\n".concat(blue, "...").concat(white).concat(end);
      skipped = true;
    }
    if (other !== "") {
      end = "\n  ".concat(other).concat(end);
      other = "";
    }
    var printedLines = 0;
    var msg = kReadableOperator[operator] + "\n".concat(green, "+ actual").concat(white, " ").concat(red, "- expected").concat(white);
    var skippedMsg = " ".concat(blue, "...").concat(white, " Lines skipped");
    for (i = 0; i < maxLines; i++) {
      var cur = i - lastPos;
      if (actualLines.length < i + 1) {
        if (cur > 1 && i > 2) {
          if (cur > 4) {
            res += "\n".concat(blue, "...").concat(white);
            skipped = true;
          } else if (cur > 3) {
            res += "\n  ".concat(expectedLines[i - 2]);
            printedLines++;
          }
          res += "\n  ".concat(expectedLines[i - 1]);
          printedLines++;
        }
        lastPos = i;
        other += "\n".concat(red, "-").concat(white, " ").concat(expectedLines[i]);
        printedLines++;
      } else if (expectedLines.length < i + 1) {
        if (cur > 1 && i > 2) {
          if (cur > 4) {
            res += "\n".concat(blue, "...").concat(white);
            skipped = true;
          } else if (cur > 3) {
            res += "\n  ".concat(actualLines[i - 2]);
            printedLines++;
          }
          res += "\n  ".concat(actualLines[i - 1]);
          printedLines++;
        }
        lastPos = i;
        res += "\n".concat(green, "+").concat(white, " ").concat(actualLines[i]);
        printedLines++;
      } else {
        var expectedLine = expectedLines[i];
        var actualLine = actualLines[i];
        var divergingLines = actualLine !== expectedLine && (!endsWith(actualLine, ",") || actualLine.slice(0, -1) !== expectedLine);
        if (divergingLines && endsWith(expectedLine, ",") && expectedLine.slice(0, -1) === actualLine) {
          divergingLines = false;
          actualLine += ",";
        }
        if (divergingLines) {
          if (cur > 1 && i > 2) {
            if (cur > 4) {
              res += "\n".concat(blue, "...").concat(white);
              skipped = true;
            } else if (cur > 3) {
              res += "\n  ".concat(actualLines[i - 2]);
              printedLines++;
            }
            res += "\n  ".concat(actualLines[i - 1]);
            printedLines++;
          }
          lastPos = i;
          res += "\n".concat(green, "+").concat(white, " ").concat(actualLine);
          other += "\n".concat(red, "-").concat(white, " ").concat(expectedLine);
          printedLines += 2;
        } else {
          res += other;
          other = "";
          if (cur === 1 || i === 0) {
            res += "\n  ".concat(actualLine);
            printedLines++;
          }
        }
      }
      if (printedLines > 20 && i < maxLines - 2) {
        return "".concat(msg).concat(skippedMsg, "\n").concat(res, "\n").concat(blue, "...").concat(white).concat(other, "\n") + "".concat(blue, "...").concat(white);
      }
    }
    return "".concat(msg).concat(skipped ? skippedMsg : "", "\n").concat(res).concat(other).concat(end).concat(indicator);
  }
  var AssertionError = /* @__PURE__ */ function(_Error) {
    _inherits(AssertionError2, _Error);
    function AssertionError2(options) {
      var _this;
      _classCallCheck(this, AssertionError2);
      if (_typeof(options) !== "object" || options === null) {
        throw new ERR_INVALID_ARG_TYPE("options", "Object", options);
      }
      var message = options.message, operator = options.operator, stackStartFn = options.stackStartFn;
      var actual = options.actual, expected = options.expected;
      var limit = Error.stackTraceLimit;
      Error.stackTraceLimit = 0;
      if (message != null) {
        _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError2).call(this, String(message)));
      } else {
        if (process.stderr && process.stderr.isTTY) {
          if (process.stderr && process.stderr.getColorDepth && process.stderr.getColorDepth() !== 1) {
            blue = "\x1B[34m";
            green = "\x1B[32m";
            white = "\x1B[39m";
            red = "\x1B[31m";
          } else {
            blue = "";
            green = "";
            white = "";
            red = "";
          }
        }
        if (_typeof(actual) === "object" && actual !== null && _typeof(expected) === "object" && expected !== null && "stack" in actual && actual instanceof Error && "stack" in expected && expected instanceof Error) {
          actual = copyError(actual);
          expected = copyError(expected);
        }
        if (operator === "deepStrictEqual" || operator === "strictEqual") {
          _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError2).call(this, createErrDiff(actual, expected, operator)));
        } else if (operator === "notDeepStrictEqual" || operator === "notStrictEqual") {
          var base = kReadableOperator[operator];
          var res = inspectValue(actual).split("\n");
          if (operator === "notStrictEqual" && _typeof(actual) === "object" && actual !== null) {
            base = kReadableOperator.notStrictEqualObject;
          }
          if (res.length > 30) {
            res[26] = "".concat(blue, "...").concat(white);
            while (res.length > 27) {
              res.pop();
            }
          }
          if (res.length === 1) {
            _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError2).call(this, "".concat(base, " ").concat(res[0])));
          } else {
            _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError2).call(this, "".concat(base, "\n\n").concat(res.join("\n"), "\n")));
          }
        } else {
          var _res = inspectValue(actual);
          var other = "";
          var knownOperators = kReadableOperator[operator];
          if (operator === "notDeepEqual" || operator === "notEqual") {
            _res = "".concat(kReadableOperator[operator], "\n\n").concat(_res);
            if (_res.length > 1024) {
              _res = "".concat(_res.slice(0, 1021), "...");
            }
          } else {
            other = "".concat(inspectValue(expected));
            if (_res.length > 512) {
              _res = "".concat(_res.slice(0, 509), "...");
            }
            if (other.length > 512) {
              other = "".concat(other.slice(0, 509), "...");
            }
            if (operator === "deepEqual" || operator === "equal") {
              _res = "".concat(knownOperators, "\n\n").concat(_res, "\n\nshould equal\n\n");
            } else {
              other = " ".concat(operator, " ").concat(other);
            }
          }
          _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError2).call(this, "".concat(_res).concat(other)));
        }
      }
      Error.stackTraceLimit = limit;
      _this.generatedMessage = !message;
      Object.defineProperty(_assertThisInitialized(_this), "name", {
        value: "AssertionError [ERR_ASSERTION]",
        enumerable: false,
        writable: true,
        configurable: true
      });
      _this.code = "ERR_ASSERTION";
      _this.actual = actual;
      _this.expected = expected;
      _this.operator = operator;
      if (Error.captureStackTrace) {
        Error.captureStackTrace(_assertThisInitialized(_this), stackStartFn);
      }
      _this.stack;
      _this.name = "AssertionError";
      return _possibleConstructorReturn(_this);
    }
    _createClass(AssertionError2, [{
      key: "toString",
      value: function toString() {
        return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
      }
    }, {
      key: inspect.custom,
      value: function value(recurseTimes, ctx) {
        return inspect(this, _objectSpread({}, ctx, {
          customInspect: false,
          depth: 0
        }));
      }
    }]);
    return AssertionError2;
  }(_wrapNativeSuper(Error));
  assertion_error = AssertionError;
  return assertion_error;
}
var es6ObjectAssign;
var hasRequiredEs6ObjectAssign;
function requireEs6ObjectAssign() {
  if (hasRequiredEs6ObjectAssign)
    return es6ObjectAssign;
  hasRequiredEs6ObjectAssign = 1;
  function assign(target, firstSource) {
    if (target === void 0 || target === null) {
      throw new TypeError("Cannot convert first argument to object");
    }
    var to = Object(target);
    for (var i = 1; i < arguments.length; i++) {
      var nextSource = arguments[i];
      if (nextSource === void 0 || nextSource === null) {
        continue;
      }
      var keysArray = Object.keys(Object(nextSource));
      for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
        var nextKey = keysArray[nextIndex];
        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== void 0 && desc.enumerable) {
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
    return to;
  }
  function polyfill2() {
    if (!Object.assign) {
      Object.defineProperty(Object, "assign", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: assign
      });
    }
  }
  es6ObjectAssign = {
    assign,
    polyfill: polyfill2
  };
  return es6ObjectAssign;
}
var isArguments3;
var hasRequiredIsArguments;
function requireIsArguments() {
  if (hasRequiredIsArguments)
    return isArguments3;
  hasRequiredIsArguments = 1;
  var toStr2 = Object.prototype.toString;
  isArguments3 = function isArguments4(value) {
    var str = toStr2.call(value);
    var isArgs = str === "[object Arguments]";
    if (!isArgs) {
      isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr2.call(value.callee) === "[object Function]";
    }
    return isArgs;
  };
  return isArguments3;
}
var implementation$2;
var hasRequiredImplementation$2;
function requireImplementation$2() {
  if (hasRequiredImplementation$2)
    return implementation$2;
  hasRequiredImplementation$2 = 1;
  var keysShim;
  if (!Object.keys) {
    var has = Object.prototype.hasOwnProperty;
    var toStr2 = Object.prototype.toString;
    var isArgs = requireIsArguments();
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var hasDontEnumBug = !isEnumerable.call({ toString: null }, "toString");
    var hasProtoEnumBug = isEnumerable.call(function() {
    }, "prototype");
    var dontEnums = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ];
    var equalsConstructorPrototype = function(o) {
      var ctor = o.constructor;
      return ctor && ctor.prototype === o;
    };
    var excludedKeys = {
      $applicationCache: true,
      $console: true,
      $external: true,
      $frame: true,
      $frameElement: true,
      $frames: true,
      $innerHeight: true,
      $innerWidth: true,
      $onmozfullscreenchange: true,
      $onmozfullscreenerror: true,
      $outerHeight: true,
      $outerWidth: true,
      $pageXOffset: true,
      $pageYOffset: true,
      $parent: true,
      $scrollLeft: true,
      $scrollTop: true,
      $scrollX: true,
      $scrollY: true,
      $self: true,
      $webkitIndexedDB: true,
      $webkitStorageInfo: true,
      $window: true
    };
    var hasAutomationEqualityBug = function() {
      if (typeof window === "undefined") {
        return false;
      }
      for (var k in window) {
        try {
          if (!excludedKeys["$" + k] && has.call(window, k) && window[k] !== null && typeof window[k] === "object") {
            try {
              equalsConstructorPrototype(window[k]);
            } catch (e) {
              return true;
            }
          }
        } catch (e) {
          return true;
        }
      }
      return false;
    }();
    var equalsConstructorPrototypeIfNotBuggy = function(o) {
      if (typeof window === "undefined" || !hasAutomationEqualityBug) {
        return equalsConstructorPrototype(o);
      }
      try {
        return equalsConstructorPrototype(o);
      } catch (e) {
        return false;
      }
    };
    keysShim = function keys(object) {
      var isObject = object !== null && typeof object === "object";
      var isFunction = toStr2.call(object) === "[object Function]";
      var isArguments4 = isArgs(object);
      var isString = isObject && toStr2.call(object) === "[object String]";
      var theKeys = [];
      if (!isObject && !isFunction && !isArguments4) {
        throw new TypeError("Object.keys called on a non-object");
      }
      var skipProto = hasProtoEnumBug && isFunction;
      if (isString && object.length > 0 && !has.call(object, 0)) {
        for (var i = 0; i < object.length; ++i) {
          theKeys.push(String(i));
        }
      }
      if (isArguments4 && object.length > 0) {
        for (var j = 0; j < object.length; ++j) {
          theKeys.push(String(j));
        }
      } else {
        for (var name in object) {
          if (!(skipProto && name === "prototype") && has.call(object, name)) {
            theKeys.push(String(name));
          }
        }
      }
      if (hasDontEnumBug) {
        var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
        for (var k = 0; k < dontEnums.length; ++k) {
          if (!(skipConstructor && dontEnums[k] === "constructor") && has.call(object, dontEnums[k])) {
            theKeys.push(dontEnums[k]);
          }
        }
      }
      return theKeys;
    };
  }
  implementation$2 = keysShim;
  return implementation$2;
}
var objectKeys;
var hasRequiredObjectKeys;
function requireObjectKeys() {
  if (hasRequiredObjectKeys)
    return objectKeys;
  hasRequiredObjectKeys = 1;
  var slice2 = Array.prototype.slice;
  var isArgs = requireIsArguments();
  var origKeys = Object.keys;
  var keysShim = origKeys ? function keys(o) {
    return origKeys(o);
  } : requireImplementation$2();
  var originalKeys = Object.keys;
  keysShim.shim = function shimObjectKeys() {
    if (Object.keys) {
      var keysWorksWithArguments = function() {
        var args = Object.keys(arguments);
        return args && args.length === arguments.length;
      }(1, 2);
      if (!keysWorksWithArguments) {
        Object.keys = function keys(object) {
          if (isArgs(object)) {
            return originalKeys(slice2.call(object));
          }
          return originalKeys(object);
        };
      }
    } else {
      Object.keys = keysShim;
    }
    return Object.keys || keysShim;
  };
  objectKeys = keysShim;
  return objectKeys;
}
var hasPropertyDescriptors_1;
var hasRequiredHasPropertyDescriptors;
function requireHasPropertyDescriptors() {
  if (hasRequiredHasPropertyDescriptors)
    return hasPropertyDescriptors_1;
  hasRequiredHasPropertyDescriptors = 1;
  var GetIntrinsic3 = getIntrinsic;
  var $defineProperty = GetIntrinsic3("%Object.defineProperty%", true);
  var hasPropertyDescriptors = function hasPropertyDescriptors2() {
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
        return true;
      } catch (e) {
        return false;
      }
    }
    return false;
  };
  hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
    if (!hasPropertyDescriptors()) {
      return null;
    }
    try {
      return $defineProperty([], "length", { value: 1 }).length !== 1;
    } catch (e) {
      return true;
    }
  };
  hasPropertyDescriptors_1 = hasPropertyDescriptors;
  return hasPropertyDescriptors_1;
}
var defineProperties_1;
var hasRequiredDefineProperties;
function requireDefineProperties() {
  if (hasRequiredDefineProperties)
    return defineProperties_1;
  hasRequiredDefineProperties = 1;
  var keys = requireObjectKeys();
  var hasSymbols3 = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
  var toStr2 = Object.prototype.toString;
  var concat = Array.prototype.concat;
  var origDefineProperty = Object.defineProperty;
  var isFunction = function(fn) {
    return typeof fn === "function" && toStr2.call(fn) === "[object Function]";
  };
  var hasPropertyDescriptors = requireHasPropertyDescriptors()();
  var supportsDescriptors = origDefineProperty && hasPropertyDescriptors;
  var defineProperty = function(object, name, value, predicate) {
    if (name in object) {
      if (predicate === true) {
        if (object[name] === value) {
          return;
        }
      } else if (!isFunction(predicate) || !predicate()) {
        return;
      }
    }
    if (supportsDescriptors) {
      origDefineProperty(object, name, {
        configurable: true,
        enumerable: false,
        value,
        writable: true
      });
    } else {
      object[name] = value;
    }
  };
  var defineProperties = function(object, map) {
    var predicates = arguments.length > 2 ? arguments[2] : {};
    var props = keys(map);
    if (hasSymbols3) {
      props = concat.call(props, Object.getOwnPropertySymbols(map));
    }
    for (var i = 0; i < props.length; i += 1) {
      defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
    }
  };
  defineProperties.supportsDescriptors = !!supportsDescriptors;
  defineProperties_1 = defineProperties;
  return defineProperties_1;
}
var implementation$1;
var hasRequiredImplementation$1;
function requireImplementation$1() {
  if (hasRequiredImplementation$1)
    return implementation$1;
  hasRequiredImplementation$1 = 1;
  var numberIsNaN = function(value) {
    return value !== value;
  };
  implementation$1 = function is(a, b) {
    if (a === 0 && b === 0) {
      return 1 / a === 1 / b;
    }
    if (a === b) {
      return true;
    }
    if (numberIsNaN(a) && numberIsNaN(b)) {
      return true;
    }
    return false;
  };
  return implementation$1;
}
var polyfill$1;
var hasRequiredPolyfill$1;
function requirePolyfill$1() {
  if (hasRequiredPolyfill$1)
    return polyfill$1;
  hasRequiredPolyfill$1 = 1;
  var implementation2 = requireImplementation$1();
  polyfill$1 = function getPolyfill() {
    return typeof Object.is === "function" ? Object.is : implementation2;
  };
  return polyfill$1;
}
var shim$1;
var hasRequiredShim$1;
function requireShim$1() {
  if (hasRequiredShim$1)
    return shim$1;
  hasRequiredShim$1 = 1;
  var getPolyfill = requirePolyfill$1();
  var define = requireDefineProperties();
  shim$1 = function shimObjectIs() {
    var polyfill2 = getPolyfill();
    define(Object, { is: polyfill2 }, {
      is: function testObjectIs() {
        return Object.is !== polyfill2;
      }
    });
    return polyfill2;
  };
  return shim$1;
}
var objectIs;
var hasRequiredObjectIs;
function requireObjectIs() {
  if (hasRequiredObjectIs)
    return objectIs;
  hasRequiredObjectIs = 1;
  var define = requireDefineProperties();
  var callBind2 = callBindExports;
  var implementation2 = requireImplementation$1();
  var getPolyfill = requirePolyfill$1();
  var shim2 = requireShim$1();
  var polyfill2 = callBind2(getPolyfill(), Object);
  define(polyfill2, {
    getPolyfill,
    implementation: implementation2,
    shim: shim2
  });
  objectIs = polyfill2;
  return objectIs;
}
var implementation;
var hasRequiredImplementation;
function requireImplementation() {
  if (hasRequiredImplementation)
    return implementation;
  hasRequiredImplementation = 1;
  implementation = function isNaN2(value) {
    return value !== value;
  };
  return implementation;
}
var polyfill;
var hasRequiredPolyfill;
function requirePolyfill() {
  if (hasRequiredPolyfill)
    return polyfill;
  hasRequiredPolyfill = 1;
  var implementation2 = requireImplementation();
  polyfill = function getPolyfill() {
    if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a")) {
      return Number.isNaN;
    }
    return implementation2;
  };
  return polyfill;
}
var shim;
var hasRequiredShim;
function requireShim() {
  if (hasRequiredShim)
    return shim;
  hasRequiredShim = 1;
  var define = requireDefineProperties();
  var getPolyfill = requirePolyfill();
  shim = function shimNumberIsNaN() {
    var polyfill2 = getPolyfill();
    define(Number, { isNaN: polyfill2 }, {
      isNaN: function testIsNaN() {
        return Number.isNaN !== polyfill2;
      }
    });
    return polyfill2;
  };
  return shim;
}
var isNan;
var hasRequiredIsNan;
function requireIsNan() {
  if (hasRequiredIsNan)
    return isNan;
  hasRequiredIsNan = 1;
  var callBind2 = callBindExports;
  var define = requireDefineProperties();
  var implementation2 = requireImplementation();
  var getPolyfill = requirePolyfill();
  var shim2 = requireShim();
  var polyfill2 = callBind2(getPolyfill(), Number);
  define(polyfill2, {
    getPolyfill,
    implementation: implementation2,
    shim: shim2
  });
  isNan = polyfill2;
  return isNan;
}
var comparisons;
var hasRequiredComparisons;
function requireComparisons() {
  if (hasRequiredComparisons)
    return comparisons;
  hasRequiredComparisons = 1;
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  var regexFlagsSupported = /a/g.flags !== void 0;
  var arrayFromSet = function arrayFromSet2(set) {
    var array = [];
    set.forEach(function(value) {
      return array.push(value);
    });
    return array;
  };
  var arrayFromMap = function arrayFromMap2(map) {
    var array = [];
    map.forEach(function(value, key) {
      return array.push([key, value]);
    });
    return array;
  };
  var objectIs2 = Object.is ? Object.is : requireObjectIs();
  var objectGetOwnPropertySymbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
    return [];
  };
  var numberIsNaN = Number.isNaN ? Number.isNaN : requireIsNan();
  function uncurryThis(f) {
    return f.call.bind(f);
  }
  var hasOwnProperty2 = uncurryThis(Object.prototype.hasOwnProperty);
  var propertyIsEnumerable = uncurryThis(Object.prototype.propertyIsEnumerable);
  var objectToString = uncurryThis(Object.prototype.toString);
  var _require$types = util.types, isAnyArrayBuffer = _require$types.isAnyArrayBuffer, isArrayBufferView = _require$types.isArrayBufferView, isDate = _require$types.isDate, isMap = _require$types.isMap, isRegExp = _require$types.isRegExp, isSet = _require$types.isSet, isNativeError = _require$types.isNativeError, isBoxedPrimitive = _require$types.isBoxedPrimitive, isNumberObject = _require$types.isNumberObject, isStringObject = _require$types.isStringObject, isBooleanObject = _require$types.isBooleanObject, isBigIntObject = _require$types.isBigIntObject, isSymbolObject = _require$types.isSymbolObject, isFloat32Array = _require$types.isFloat32Array, isFloat64Array = _require$types.isFloat64Array;
  function isNonIndex(key) {
    if (key.length === 0 || key.length > 10)
      return true;
    for (var i = 0; i < key.length; i++) {
      var code = key.charCodeAt(i);
      if (code < 48 || code > 57)
        return true;
    }
    return key.length === 10 && key >= Math.pow(2, 32);
  }
  function getOwnNonIndexProperties(value) {
    return Object.keys(value).filter(isNonIndex).concat(objectGetOwnPropertySymbols(value).filter(Object.prototype.propertyIsEnumerable.bind(value)));
  }
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   */
  function compare(a, b) {
    if (a === b) {
      return 0;
    }
    var x = a.length;
    var y = b.length;
    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
      if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
      }
    }
    if (x < y) {
      return -1;
    }
    if (y < x) {
      return 1;
    }
    return 0;
  }
  var kStrict = true;
  var kLoose = false;
  var kNoIterator = 0;
  var kIsArray = 1;
  var kIsSet = 2;
  var kIsMap = 3;
  function areSimilarRegExps(a, b) {
    return regexFlagsSupported ? a.source === b.source && a.flags === b.flags : RegExp.prototype.toString.call(a) === RegExp.prototype.toString.call(b);
  }
  function areSimilarFloatArrays(a, b) {
    if (a.byteLength !== b.byteLength) {
      return false;
    }
    for (var offset = 0; offset < a.byteLength; offset++) {
      if (a[offset] !== b[offset]) {
        return false;
      }
    }
    return true;
  }
  function areSimilarTypedArrays(a, b) {
    if (a.byteLength !== b.byteLength) {
      return false;
    }
    return compare(new Uint8Array(a.buffer, a.byteOffset, a.byteLength), new Uint8Array(b.buffer, b.byteOffset, b.byteLength)) === 0;
  }
  function areEqualArrayBuffers(buf1, buf2) {
    return buf1.byteLength === buf2.byteLength && compare(new Uint8Array(buf1), new Uint8Array(buf2)) === 0;
  }
  function isEqualBoxedPrimitive(val1, val2) {
    if (isNumberObject(val1)) {
      return isNumberObject(val2) && objectIs2(Number.prototype.valueOf.call(val1), Number.prototype.valueOf.call(val2));
    }
    if (isStringObject(val1)) {
      return isStringObject(val2) && String.prototype.valueOf.call(val1) === String.prototype.valueOf.call(val2);
    }
    if (isBooleanObject(val1)) {
      return isBooleanObject(val2) && Boolean.prototype.valueOf.call(val1) === Boolean.prototype.valueOf.call(val2);
    }
    if (isBigIntObject(val1)) {
      return isBigIntObject(val2) && BigInt.prototype.valueOf.call(val1) === BigInt.prototype.valueOf.call(val2);
    }
    return isSymbolObject(val2) && Symbol.prototype.valueOf.call(val1) === Symbol.prototype.valueOf.call(val2);
  }
  function innerDeepEqual(val1, val2, strict, memos) {
    if (val1 === val2) {
      if (val1 !== 0)
        return true;
      return strict ? objectIs2(val1, val2) : true;
    }
    if (strict) {
      if (_typeof(val1) !== "object") {
        return typeof val1 === "number" && numberIsNaN(val1) && numberIsNaN(val2);
      }
      if (_typeof(val2) !== "object" || val1 === null || val2 === null) {
        return false;
      }
      if (Object.getPrototypeOf(val1) !== Object.getPrototypeOf(val2)) {
        return false;
      }
    } else {
      if (val1 === null || _typeof(val1) !== "object") {
        if (val2 === null || _typeof(val2) !== "object") {
          return val1 == val2;
        }
        return false;
      }
      if (val2 === null || _typeof(val2) !== "object") {
        return false;
      }
    }
    var val1Tag = objectToString(val1);
    var val2Tag = objectToString(val2);
    if (val1Tag !== val2Tag) {
      return false;
    }
    if (Array.isArray(val1)) {
      if (val1.length !== val2.length) {
        return false;
      }
      var keys1 = getOwnNonIndexProperties(val1);
      var keys2 = getOwnNonIndexProperties(val2);
      if (keys1.length !== keys2.length) {
        return false;
      }
      return keyCheck(val1, val2, strict, memos, kIsArray, keys1);
    }
    if (val1Tag === "[object Object]") {
      if (!isMap(val1) && isMap(val2) || !isSet(val1) && isSet(val2)) {
        return false;
      }
    }
    if (isDate(val1)) {
      if (!isDate(val2) || Date.prototype.getTime.call(val1) !== Date.prototype.getTime.call(val2)) {
        return false;
      }
    } else if (isRegExp(val1)) {
      if (!isRegExp(val2) || !areSimilarRegExps(val1, val2)) {
        return false;
      }
    } else if (isNativeError(val1) || val1 instanceof Error) {
      if (val1.message !== val2.message || val1.name !== val2.name) {
        return false;
      }
    } else if (isArrayBufferView(val1)) {
      if (!strict && (isFloat32Array(val1) || isFloat64Array(val1))) {
        if (!areSimilarFloatArrays(val1, val2)) {
          return false;
        }
      } else if (!areSimilarTypedArrays(val1, val2)) {
        return false;
      }
      var _keys = getOwnNonIndexProperties(val1);
      var _keys2 = getOwnNonIndexProperties(val2);
      if (_keys.length !== _keys2.length) {
        return false;
      }
      return keyCheck(val1, val2, strict, memos, kNoIterator, _keys);
    } else if (isSet(val1)) {
      if (!isSet(val2) || val1.size !== val2.size) {
        return false;
      }
      return keyCheck(val1, val2, strict, memos, kIsSet);
    } else if (isMap(val1)) {
      if (!isMap(val2) || val1.size !== val2.size) {
        return false;
      }
      return keyCheck(val1, val2, strict, memos, kIsMap);
    } else if (isAnyArrayBuffer(val1)) {
      if (!areEqualArrayBuffers(val1, val2)) {
        return false;
      }
    } else if (isBoxedPrimitive(val1) && !isEqualBoxedPrimitive(val1, val2)) {
      return false;
    }
    return keyCheck(val1, val2, strict, memos, kNoIterator);
  }
  function getEnumerables(val, keys) {
    return keys.filter(function(k) {
      return propertyIsEnumerable(val, k);
    });
  }
  function keyCheck(val1, val2, strict, memos, iterationType, aKeys) {
    if (arguments.length === 5) {
      aKeys = Object.keys(val1);
      var bKeys = Object.keys(val2);
      if (aKeys.length !== bKeys.length) {
        return false;
      }
    }
    var i = 0;
    for (; i < aKeys.length; i++) {
      if (!hasOwnProperty2(val2, aKeys[i])) {
        return false;
      }
    }
    if (strict && arguments.length === 5) {
      var symbolKeysA = objectGetOwnPropertySymbols(val1);
      if (symbolKeysA.length !== 0) {
        var count = 0;
        for (i = 0; i < symbolKeysA.length; i++) {
          var key = symbolKeysA[i];
          if (propertyIsEnumerable(val1, key)) {
            if (!propertyIsEnumerable(val2, key)) {
              return false;
            }
            aKeys.push(key);
            count++;
          } else if (propertyIsEnumerable(val2, key)) {
            return false;
          }
        }
        var symbolKeysB = objectGetOwnPropertySymbols(val2);
        if (symbolKeysA.length !== symbolKeysB.length && getEnumerables(val2, symbolKeysB).length !== count) {
          return false;
        }
      } else {
        var _symbolKeysB = objectGetOwnPropertySymbols(val2);
        if (_symbolKeysB.length !== 0 && getEnumerables(val2, _symbolKeysB).length !== 0) {
          return false;
        }
      }
    }
    if (aKeys.length === 0 && (iterationType === kNoIterator || iterationType === kIsArray && val1.length === 0 || val1.size === 0)) {
      return true;
    }
    if (memos === void 0) {
      memos = {
        val1: /* @__PURE__ */ new Map(),
        val2: /* @__PURE__ */ new Map(),
        position: 0
      };
    } else {
      var val2MemoA = memos.val1.get(val1);
      if (val2MemoA !== void 0) {
        var val2MemoB = memos.val2.get(val2);
        if (val2MemoB !== void 0) {
          return val2MemoA === val2MemoB;
        }
      }
      memos.position++;
    }
    memos.val1.set(val1, memos.position);
    memos.val2.set(val2, memos.position);
    var areEq = objEquiv(val1, val2, strict, aKeys, memos, iterationType);
    memos.val1.delete(val1);
    memos.val2.delete(val2);
    return areEq;
  }
  function setHasEqualElement(set, val1, strict, memo) {
    var setValues = arrayFromSet(set);
    for (var i = 0; i < setValues.length; i++) {
      var val2 = setValues[i];
      if (innerDeepEqual(val1, val2, strict, memo)) {
        set.delete(val2);
        return true;
      }
    }
    return false;
  }
  function findLooseMatchingPrimitives(prim) {
    switch (_typeof(prim)) {
      case "undefined":
        return null;
      case "object":
        return void 0;
      case "symbol":
        return false;
      case "string":
        prim = +prim;
      case "number":
        if (numberIsNaN(prim)) {
          return false;
        }
    }
    return true;
  }
  function setMightHaveLoosePrim(a, b, prim) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null)
      return altValue;
    return b.has(altValue) && !a.has(altValue);
  }
  function mapMightHaveLoosePrim(a, b, prim, item, memo) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) {
      return altValue;
    }
    var curB = b.get(altValue);
    if (curB === void 0 && !b.has(altValue) || !innerDeepEqual(item, curB, false, memo)) {
      return false;
    }
    return !a.has(altValue) && innerDeepEqual(item, curB, false, memo);
  }
  function setEquiv(a, b, strict, memo) {
    var set = null;
    var aValues = arrayFromSet(a);
    for (var i = 0; i < aValues.length; i++) {
      var val = aValues[i];
      if (_typeof(val) === "object" && val !== null) {
        if (set === null) {
          set = /* @__PURE__ */ new Set();
        }
        set.add(val);
      } else if (!b.has(val)) {
        if (strict)
          return false;
        if (!setMightHaveLoosePrim(a, b, val)) {
          return false;
        }
        if (set === null) {
          set = /* @__PURE__ */ new Set();
        }
        set.add(val);
      }
    }
    if (set !== null) {
      var bValues = arrayFromSet(b);
      for (var _i = 0; _i < bValues.length; _i++) {
        var _val = bValues[_i];
        if (_typeof(_val) === "object" && _val !== null) {
          if (!setHasEqualElement(set, _val, strict, memo))
            return false;
        } else if (!strict && !a.has(_val) && !setHasEqualElement(set, _val, strict, memo)) {
          return false;
        }
      }
      return set.size === 0;
    }
    return true;
  }
  function mapHasEqualEntry(set, map, key1, item1, strict, memo) {
    var setValues = arrayFromSet(set);
    for (var i = 0; i < setValues.length; i++) {
      var key2 = setValues[i];
      if (innerDeepEqual(key1, key2, strict, memo) && innerDeepEqual(item1, map.get(key2), strict, memo)) {
        set.delete(key2);
        return true;
      }
    }
    return false;
  }
  function mapEquiv(a, b, strict, memo) {
    var set = null;
    var aEntries = arrayFromMap(a);
    for (var i = 0; i < aEntries.length; i++) {
      var _aEntries$i = _slicedToArray(aEntries[i], 2), key = _aEntries$i[0], item1 = _aEntries$i[1];
      if (_typeof(key) === "object" && key !== null) {
        if (set === null) {
          set = /* @__PURE__ */ new Set();
        }
        set.add(key);
      } else {
        var item2 = b.get(key);
        if (item2 === void 0 && !b.has(key) || !innerDeepEqual(item1, item2, strict, memo)) {
          if (strict)
            return false;
          if (!mapMightHaveLoosePrim(a, b, key, item1, memo))
            return false;
          if (set === null) {
            set = /* @__PURE__ */ new Set();
          }
          set.add(key);
        }
      }
    }
    if (set !== null) {
      var bEntries = arrayFromMap(b);
      for (var _i2 = 0; _i2 < bEntries.length; _i2++) {
        var _bEntries$_i = _slicedToArray(bEntries[_i2], 2), key = _bEntries$_i[0], item = _bEntries$_i[1];
        if (_typeof(key) === "object" && key !== null) {
          if (!mapHasEqualEntry(set, a, key, item, strict, memo))
            return false;
        } else if (!strict && (!a.has(key) || !innerDeepEqual(a.get(key), item, false, memo)) && !mapHasEqualEntry(set, a, key, item, false, memo)) {
          return false;
        }
      }
      return set.size === 0;
    }
    return true;
  }
  function objEquiv(a, b, strict, keys, memos, iterationType) {
    var i = 0;
    if (iterationType === kIsSet) {
      if (!setEquiv(a, b, strict, memos)) {
        return false;
      }
    } else if (iterationType === kIsMap) {
      if (!mapEquiv(a, b, strict, memos)) {
        return false;
      }
    } else if (iterationType === kIsArray) {
      for (; i < a.length; i++) {
        if (hasOwnProperty2(a, i)) {
          if (!hasOwnProperty2(b, i) || !innerDeepEqual(a[i], b[i], strict, memos)) {
            return false;
          }
        } else if (hasOwnProperty2(b, i)) {
          return false;
        } else {
          var keysA = Object.keys(a);
          for (; i < keysA.length; i++) {
            var key = keysA[i];
            if (!hasOwnProperty2(b, key) || !innerDeepEqual(a[key], b[key], strict, memos)) {
              return false;
            }
          }
          if (keysA.length !== Object.keys(b).length) {
            return false;
          }
          return true;
        }
      }
    }
    for (i = 0; i < keys.length; i++) {
      var _key = keys[i];
      if (!innerDeepEqual(a[_key], b[_key], strict, memos)) {
        return false;
      }
    }
    return true;
  }
  function isDeepEqual(val1, val2) {
    return innerDeepEqual(val1, val2, kLoose);
  }
  function isDeepStrictEqual(val1, val2) {
    return innerDeepEqual(val1, val2, kStrict);
  }
  comparisons = {
    isDeepEqual,
    isDeepStrictEqual
  };
  return comparisons;
}
var hasRequiredAssert;
function requireAssert() {
  if (hasRequiredAssert)
    return assertExports$1;
  hasRequiredAssert = 1;
  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var _require = requireErrors(), _require$codes = _require.codes, ERR_AMBIGUOUS_ARGUMENT = _require$codes.ERR_AMBIGUOUS_ARGUMENT, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_INVALID_ARG_VALUE = _require$codes.ERR_INVALID_ARG_VALUE, ERR_INVALID_RETURN_VALUE = _require$codes.ERR_INVALID_RETURN_VALUE, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
  var AssertionError = requireAssertion_error();
  var _require2 = util, inspect = _require2.inspect;
  var _require$types = util.types, isPromise = _require$types.isPromise, isRegExp = _require$types.isRegExp;
  var objectAssign = Object.assign ? Object.assign : requireEs6ObjectAssign().assign;
  var objectIs2 = Object.is ? Object.is : requireObjectIs();
  var isDeepEqual;
  var isDeepStrictEqual;
  function lazyLoadComparison() {
    var comparison = requireComparisons();
    isDeepEqual = comparison.isDeepEqual;
    isDeepStrictEqual = comparison.isDeepStrictEqual;
  }
  var warned = false;
  var assert2 = assert$1.exports = ok;
  var NO_EXCEPTION_SENTINEL = {};
  function innerFail(obj) {
    if (obj.message instanceof Error)
      throw obj.message;
    throw new AssertionError(obj);
  }
  function fail(actual, expected, message, operator, stackStartFn) {
    var argsLen = arguments.length;
    var internalMessage;
    if (argsLen === 0) {
      internalMessage = "Failed";
    } else if (argsLen === 1) {
      message = actual;
      actual = void 0;
    } else {
      if (warned === false) {
        warned = true;
        var warn = process.emitWarning ? process.emitWarning : console.warn.bind(console);
        warn("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
      }
      if (argsLen === 2)
        operator = "!=";
    }
    if (message instanceof Error)
      throw message;
    var errArgs = {
      actual,
      expected,
      operator: operator === void 0 ? "fail" : operator,
      stackStartFn: stackStartFn || fail
    };
    if (message !== void 0) {
      errArgs.message = message;
    }
    var err = new AssertionError(errArgs);
    if (internalMessage) {
      err.message = internalMessage;
      err.generatedMessage = true;
    }
    throw err;
  }
  assert2.fail = fail;
  assert2.AssertionError = AssertionError;
  function innerOk(fn, argLen, value, message) {
    if (!value) {
      var generatedMessage = false;
      if (argLen === 0) {
        generatedMessage = true;
        message = "No value argument passed to `assert.ok()`";
      } else if (message instanceof Error) {
        throw message;
      }
      var err = new AssertionError({
        actual: value,
        expected: true,
        message,
        operator: "==",
        stackStartFn: fn
      });
      err.generatedMessage = generatedMessage;
      throw err;
    }
  }
  function ok() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    innerOk.apply(void 0, [ok, args.length].concat(args));
  }
  assert2.ok = ok;
  assert2.equal = function equal(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (actual != expected) {
      innerFail({
        actual,
        expected,
        message,
        operator: "==",
        stackStartFn: equal
      });
    }
  };
  assert2.notEqual = function notEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (actual == expected) {
      innerFail({
        actual,
        expected,
        message,
        operator: "!=",
        stackStartFn: notEqual
      });
    }
  };
  assert2.deepEqual = function deepEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (isDeepEqual === void 0)
      lazyLoadComparison();
    if (!isDeepEqual(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "deepEqual",
        stackStartFn: deepEqual
      });
    }
  };
  assert2.notDeepEqual = function notDeepEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (isDeepEqual === void 0)
      lazyLoadComparison();
    if (isDeepEqual(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "notDeepEqual",
        stackStartFn: notDeepEqual
      });
    }
  };
  assert2.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (isDeepEqual === void 0)
      lazyLoadComparison();
    if (!isDeepStrictEqual(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "deepStrictEqual",
        stackStartFn: deepStrictEqual
      });
    }
  };
  assert2.notDeepStrictEqual = notDeepStrictEqual;
  function notDeepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (isDeepEqual === void 0)
      lazyLoadComparison();
    if (isDeepStrictEqual(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "notDeepStrictEqual",
        stackStartFn: notDeepStrictEqual
      });
    }
  }
  assert2.strictEqual = function strictEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (!objectIs2(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "strictEqual",
        stackStartFn: strictEqual
      });
    }
  };
  assert2.notStrictEqual = function notStrictEqual(actual, expected, message) {
    if (arguments.length < 2) {
      throw new ERR_MISSING_ARGS("actual", "expected");
    }
    if (objectIs2(actual, expected)) {
      innerFail({
        actual,
        expected,
        message,
        operator: "notStrictEqual",
        stackStartFn: notStrictEqual
      });
    }
  };
  var Comparison = function Comparison2(obj, keys, actual) {
    var _this = this;
    _classCallCheck(this, Comparison2);
    keys.forEach(function(key) {
      if (key in obj) {
        if (actual !== void 0 && typeof actual[key] === "string" && isRegExp(obj[key]) && obj[key].test(actual[key])) {
          _this[key] = actual[key];
        } else {
          _this[key] = obj[key];
        }
      }
    });
  };
  function compareExceptionKey(actual, expected, key, message, keys, fn) {
    if (!(key in actual) || !isDeepStrictEqual(actual[key], expected[key])) {
      if (!message) {
        var a = new Comparison(actual, keys);
        var b = new Comparison(expected, keys, actual);
        var err = new AssertionError({
          actual: a,
          expected: b,
          operator: "deepStrictEqual",
          stackStartFn: fn
        });
        err.actual = actual;
        err.expected = expected;
        err.operator = fn.name;
        throw err;
      }
      innerFail({
        actual,
        expected,
        message,
        operator: fn.name,
        stackStartFn: fn
      });
    }
  }
  function expectedException(actual, expected, msg, fn) {
    if (typeof expected !== "function") {
      if (isRegExp(expected))
        return expected.test(actual);
      if (arguments.length === 2) {
        throw new ERR_INVALID_ARG_TYPE("expected", ["Function", "RegExp"], expected);
      }
      if (_typeof(actual) !== "object" || actual === null) {
        var err = new AssertionError({
          actual,
          expected,
          message: msg,
          operator: "deepStrictEqual",
          stackStartFn: fn
        });
        err.operator = fn.name;
        throw err;
      }
      var keys = Object.keys(expected);
      if (expected instanceof Error) {
        keys.push("name", "message");
      } else if (keys.length === 0) {
        throw new ERR_INVALID_ARG_VALUE("error", expected, "may not be an empty object");
      }
      if (isDeepEqual === void 0)
        lazyLoadComparison();
      keys.forEach(function(key) {
        if (typeof actual[key] === "string" && isRegExp(expected[key]) && expected[key].test(actual[key])) {
          return;
        }
        compareExceptionKey(actual, expected, key, msg, keys, fn);
      });
      return true;
    }
    if (expected.prototype !== void 0 && actual instanceof expected) {
      return true;
    }
    if (Error.isPrototypeOf(expected)) {
      return false;
    }
    return expected.call({}, actual) === true;
  }
  function getActual(fn) {
    if (typeof fn !== "function") {
      throw new ERR_INVALID_ARG_TYPE("fn", "Function", fn);
    }
    try {
      fn();
    } catch (e) {
      return e;
    }
    return NO_EXCEPTION_SENTINEL;
  }
  function checkIsPromise(obj) {
    return isPromise(obj) || obj !== null && _typeof(obj) === "object" && typeof obj.then === "function" && typeof obj.catch === "function";
  }
  function waitForActual(promiseFn) {
    return Promise.resolve().then(function() {
      var resultPromise;
      if (typeof promiseFn === "function") {
        resultPromise = promiseFn();
        if (!checkIsPromise(resultPromise)) {
          throw new ERR_INVALID_RETURN_VALUE("instance of Promise", "promiseFn", resultPromise);
        }
      } else if (checkIsPromise(promiseFn)) {
        resultPromise = promiseFn;
      } else {
        throw new ERR_INVALID_ARG_TYPE("promiseFn", ["Function", "Promise"], promiseFn);
      }
      return Promise.resolve().then(function() {
        return resultPromise;
      }).then(function() {
        return NO_EXCEPTION_SENTINEL;
      }).catch(function(e) {
        return e;
      });
    });
  }
  function expectsError(stackStartFn, actual, error, message) {
    if (typeof error === "string") {
      if (arguments.length === 4) {
        throw new ERR_INVALID_ARG_TYPE("error", ["Object", "Error", "Function", "RegExp"], error);
      }
      if (_typeof(actual) === "object" && actual !== null) {
        if (actual.message === error) {
          throw new ERR_AMBIGUOUS_ARGUMENT("error/message", 'The error message "'.concat(actual.message, '" is identical to the message.'));
        }
      } else if (actual === error) {
        throw new ERR_AMBIGUOUS_ARGUMENT("error/message", 'The error "'.concat(actual, '" is identical to the message.'));
      }
      message = error;
      error = void 0;
    } else if (error != null && _typeof(error) !== "object" && typeof error !== "function") {
      throw new ERR_INVALID_ARG_TYPE("error", ["Object", "Error", "Function", "RegExp"], error);
    }
    if (actual === NO_EXCEPTION_SENTINEL) {
      var details = "";
      if (error && error.name) {
        details += " (".concat(error.name, ")");
      }
      details += message ? ": ".concat(message) : ".";
      var fnType = stackStartFn.name === "rejects" ? "rejection" : "exception";
      innerFail({
        actual: void 0,
        expected: error,
        operator: stackStartFn.name,
        message: "Missing expected ".concat(fnType).concat(details),
        stackStartFn
      });
    }
    if (error && !expectedException(actual, error, message, stackStartFn)) {
      throw actual;
    }
  }
  function expectsNoError(stackStartFn, actual, error, message) {
    if (actual === NO_EXCEPTION_SENTINEL)
      return;
    if (typeof error === "string") {
      message = error;
      error = void 0;
    }
    if (!error || expectedException(actual, error)) {
      var details = message ? ": ".concat(message) : ".";
      var fnType = stackStartFn.name === "doesNotReject" ? "rejection" : "exception";
      innerFail({
        actual,
        expected: error,
        operator: stackStartFn.name,
        message: "Got unwanted ".concat(fnType).concat(details, "\n") + 'Actual message: "'.concat(actual && actual.message, '"'),
        stackStartFn
      });
    }
    throw actual;
  }
  assert2.throws = function throws(promiseFn) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    expectsError.apply(void 0, [throws, getActual(promiseFn)].concat(args));
  };
  assert2.rejects = function rejects(promiseFn) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    return waitForActual(promiseFn).then(function(result) {
      return expectsError.apply(void 0, [rejects, result].concat(args));
    });
  };
  assert2.doesNotThrow = function doesNotThrow(fn) {
    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }
    expectsNoError.apply(void 0, [doesNotThrow, getActual(fn)].concat(args));
  };
  assert2.doesNotReject = function doesNotReject(fn) {
    for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      args[_key5 - 1] = arguments[_key5];
    }
    return waitForActual(fn).then(function(result) {
      return expectsNoError.apply(void 0, [doesNotReject, result].concat(args));
    });
  };
  assert2.ifError = function ifError(err) {
    if (err !== null && err !== void 0) {
      var message = "ifError got unwanted exception: ";
      if (_typeof(err) === "object" && typeof err.message === "string") {
        if (err.message.length === 0 && err.constructor) {
          message += err.constructor.name;
        } else {
          message += err.message;
        }
      } else {
        message += inspect(err);
      }
      var newErr = new AssertionError({
        actual: err,
        expected: null,
        operator: "ifError",
        message,
        stackStartFn: ifError
      });
      var origStack = err.stack;
      if (typeof origStack === "string") {
        var tmp2 = origStack.split("\n");
        tmp2.shift();
        var tmp1 = newErr.stack.split("\n");
        for (var i = 0; i < tmp2.length; i++) {
          var pos = tmp1.indexOf(tmp2[i]);
          if (pos !== -1) {
            tmp1 = tmp1.slice(0, pos);
            break;
          }
        }
        newErr.stack = "".concat(tmp1.join("\n"), "\n").concat(tmp2.join("\n"));
      }
      throw newErr;
    }
  };
  function strict() {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }
    innerOk.apply(void 0, [strict, args.length].concat(args));
  }
  assert2.strict = objectAssign(strict, assert2, {
    equal: assert2.strictEqual,
    deepEqual: assert2.deepStrictEqual,
    notEqual: assert2.notStrictEqual,
    notDeepEqual: assert2.notDeepStrictEqual
  });
  assert2.strict.strict = assert2.strict;
  return assertExports$1;
}
var assertExports = requireAssert();
const assert = /* @__PURE__ */ getDefaultExportFromCjs(assertExports);
const network = CONFIG.VITE_NETWORK;
({
  name: CONFIG.VITE_PUBLIC_APP_NAME,
  version: CONFIG.VITE_PUBLIC_APP_VERSION,
  "chain-id": network === "mainnet" ? 1 : 2147483648
  /* Testnet */
});
tupleCV({
  name: stringAsciiCV(CONFIG.VITE_PUBLIC_APP_NAME),
  version: stringAsciiCV(CONFIG.VITE_PUBLIC_APP_VERSION),
  "chain-id": uintCV(
    network === "mainnet" ? 1 : 2147483648
    /* Testnet */
  )
});
function concatByteArrays(byteArrays) {
  const totalSize = byteArrays.reduce((len, bytes) => len + bytes.length, 0);
  const resultArray = new Uint8Array(totalSize);
  let offset = 0;
  for (let i = 0; i < byteArrays.length; i++) {
    resultArray.set(byteArrays[i], offset);
    offset += byteArrays[i].length;
  }
  return resultArray;
}
export {
  assert as a,
  concatByteArrays as c
};
