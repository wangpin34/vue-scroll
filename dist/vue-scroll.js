/**
  * vue-scroll v2.1.9
  * (c) 2018 Wang Pin
  * @license MIT
  */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VueScroll = factory());
}(this, (function () { 'use strict';

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;
var MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_1(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

var toFinite_1 = toFinite;

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite_1(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

var toInteger_1 = toInteger;

/**
 * Checks if `value` is an integer.
 *
 * **Note:** This method is based on
 * [`Number.isInteger`](https://mdn.io/Number/isInteger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
 * @example
 *
 * _.isInteger(3);
 * // => true
 *
 * _.isInteger(Number.MIN_VALUE);
 * // => false
 *
 * _.isInteger(Infinity);
 * // => false
 *
 * _.isInteger('3');
 * // => false
 */
function isInteger(value) {
  return typeof value == 'number' && value == toInteger_1(value);
}

var isInteger_1 = isInteger;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsFinite = _root.isFinite;

/**
 * Checks if `value` is a finite primitive number.
 *
 * **Note:** This method is based on
 * [`Number.isFinite`](https://mdn.io/Number/isFinite).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
 * @example
 *
 * _.isFinite(3);
 * // => true
 *
 * _.isFinite(Number.MIN_VALUE);
 * // => true
 *
 * _.isFinite(Infinity);
 * // => false
 *
 * _.isFinite('3');
 * // => false
 */
function isFinite$1(value) {
  return typeof value == 'number' && nativeIsFinite(value);
}

var _isFinite = isFinite$1;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root.Date.now();
};

var now_1 = now;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;
var nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber_1(wait) || 0;
  if (isObject_1(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now_1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now_1());
  }

  function debounced() {
    var time = now_1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

var debounce_1 = debounce;

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  if (isObject_1(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce_1(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

var throttle_1 = throttle;

var dom = (function () {
  var listeners = new Map();

  var SCROLL = 'scroll';

  function addEventListener (element, event, funcs, opt) {

    function fn (e) {
      var data;
      var target = e.target || e.srcElement;
      e = e || window.e;

      if (e.type === SCROLL) {
        if (target === document) {
          data = { scrollTop: document.body.scrollTop, scrollLeft: document.body.scrollLeft };
        } else {
          data = { scrollTop: target.scrollTop, scrollLeft: target.scrollLeft };
        }
      }

      funcs.forEach(function (f) {
        f(e, data);
      });
    }

    if (isObject_1(opt)) {
      if (isInteger_1(opt.throttle) && _isFinite(opt.throttle) && opt.throttle > -1) {
        fn = throttle_1(fn, opt.throttle);
      }

      if (isInteger_1(opt.debounce) && _isFinite(opt.debounce) && opt.debounce > -1) {
        fn = debounce_1(fn, opt.debounce);
      }
    }

    // https://github.com/wangpin34/vue-scroll/issues/1
    if (event === SCROLL) {
      if(element === document.body || element === document || element === window) {
        document.onscroll = fn;
      } else {
        if (element.addEventListener) {
          element.addEventListener(event, fn);
        } else {
          element.attachEvent('on' + event, fn);
        }
      }
    }

  }


  function bind (element, event, fn, opt) {

    var funcs, eventFuncs;

    if (!isFunction_1(fn)) {
      throw new Error('Scroll handler is not a function');
    }

    if (!listeners.has(element)) {
      listeners.set(element, new Map());
    }

    funcs = listeners.get(element);

    if (!funcs.has(event)) {
      funcs.set(event, []);
    }

    eventFuncs = funcs.get(event);

    if (!eventFuncs.length) {
      addEventListener(element, event, eventFuncs, opt);
    }

    eventFuncs.push(fn);

  }

  function unbind (element, event, fn) {

    var funcs, eventFuncs;

    if (!isFunction_1(fn)) {
      return;
    }

    if (!listeners.has(element)) {
      listeners.set(element, new Map());
    }

    funcs = listeners.get(element);

    if (!funcs.has(event)) {
      funcs.set(event, []);
    }

    eventFuncs = funcs.get(event);

    if (eventFuncs.indexOf(fn) > -1) {
      eventFuncs.splice(eventFuncs.indexOf(fn), 1);
      return true;
    }

    return false;

  }

  return {
    bind: bind,
    unbind: unbind
  }

})();

var isImplemented = function () {
	var map, iterator, result;
	if (typeof Map !== 'function') { return false; }
	try {
		// WebKit doesn't support arguments and crashes
		map = new Map([['raz', 'one'], ['dwa', 'two'], ['trzy', 'three']]);
	} catch (e) {
		return false;
	}
	if (String(map) !== '[object Map]') { return false; }
	if (map.size !== 3) { return false; }
	if (typeof map.clear !== 'function') { return false; }
	if (typeof map.delete !== 'function') { return false; }
	if (typeof map.entries !== 'function') { return false; }
	if (typeof map.forEach !== 'function') { return false; }
	if (typeof map.get !== 'function') { return false; }
	if (typeof map.has !== 'function') { return false; }
	if (typeof map.keys !== 'function') { return false; }
	if (typeof map.set !== 'function') { return false; }
	if (typeof map.values !== 'function') { return false; }

	iterator = map.entries();
	result = iterator.next();
	if (result.done !== false) { return false; }
	if (!result.value) { return false; }
	if (result.value[0] !== 'raz') { return false; }
	if (result.value[1] !== 'one') { return false; }

	return true;
};

/* eslint strict: "off" */

var global$1 = (function () {
	return this;
}());

// eslint-disable-next-line no-empty-function
var noop = function () {};

var _undefined = noop(); // Support ES3 engines

var isValue = function (val) {
 return (val !== _undefined) && (val !== null);
};

var validValue = function (value) {
	if (!isValue(value)) { throw new TypeError("Cannot use null or undefined"); }
	return value;
};

var clear = function () {
	validValue(this).length = 0;
	return this;
};

var isImplemented$2 = function () {
	var numberIsNaN = Number.isNaN;
	if (typeof numberIsNaN !== "function") { return false; }
	return !numberIsNaN({}) && numberIsNaN(NaN) && !numberIsNaN(34);
};

var shim = function (value) {
	// eslint-disable-next-line no-self-compare
	return value !== value;
};

var isNan = isImplemented$2()
	? Number.isNaN
	: shim;

var isImplemented$4 = function () {
	var sign = Math.sign;
	if (typeof sign !== "function") { return false; }
	return (sign(10) === 1) && (sign(-20) === -1);
};

var shim$2 = function (value) {
	value = Number(value);
	if (isNaN(value) || (value === 0)) { return value; }
	return value > 0 ? 1 : -1;
};

var sign = isImplemented$4()
	? Math.sign
	: shim$2;

var abs$1 = Math.abs;
var floor$1 = Math.floor;

var toInteger$2 = function (value) {
	if (isNaN(value)) { return 0; }
	value = Number(value);
	if ((value === 0) || !isFinite(value)) { return value; }
	return sign(value) * floor$1(abs$1(value));
};

var max = Math.max;

var toPosInteger = function (value) {
 return max(0, toInteger$2(value));
};

var indexOf           = Array.prototype.indexOf;
var objHasOwnProperty = Object.prototype.hasOwnProperty;
var abs               = Math.abs;
var floor             = Math.floor;

var eIndexOf = function (searchElement /* fromIndex*/) {
	var this$1 = this;

	var i, length, fromIndex, val;
	if (!isNan(searchElement)) { return indexOf.apply(this, arguments); }

	length = toPosInteger(validValue(this).length);
	fromIndex = arguments[1];
	if (isNaN(fromIndex)) { fromIndex = 0; }
	else if (fromIndex >= 0) { fromIndex = floor(fromIndex); }
	else { fromIndex = toPosInteger(this.length) - floor(abs(fromIndex)); }

	for (i = fromIndex; i < length; ++i) {
		if (objHasOwnProperty.call(this$1, i)) {
			val = this$1[i];
			if (isNan(val)) { return i; } // Jslint: ignore
		}
	}
	return -1;
};

var create = Object.create;
var getPrototypeOf$1 = Object.getPrototypeOf;
var plainObject = {};

var isImplemented$6 = function (/* CustomCreate*/) {
	var setPrototypeOf = Object.setPrototypeOf, customCreate = arguments[0] || create;
	if (typeof setPrototypeOf !== "function") { return false; }
	return getPrototypeOf$1(setPrototypeOf(customCreate(null), plainObject)) === plainObject;
};

var map = { function: true, object: true };

var isObject$2 = function (value) {
	return (isValue(value) && map[typeof value]) || false;
};

var create$1 = Object.create;
var shim$6;

if (!isImplemented$6()) {
	shim$6 = shim$4;
}

var create_1 = (function () {
	var nullObject, polyProps, desc;
	if (!shim$6) { return create$1; }
	if (shim$6.level !== 1) { return create$1; }

	nullObject = {};
	polyProps = {};
	desc = {
		configurable: false,
		enumerable: false,
		writable: true,
		value: undefined
	};
	Object.getOwnPropertyNames(Object.prototype).forEach(function (name) {
		if (name === "__proto__") {
			polyProps[name] = {
				configurable: true,
				enumerable: false,
				writable: true,
				value: undefined
			};
			return;
		}
		polyProps[name] = desc;
	});
	Object.defineProperties(nullObject, polyProps);

	Object.defineProperty(shim$6, "nullPolyfill", {
		configurable: false,
		enumerable: false,
		writable: false,
		value: nullObject
	});

	return function (prototype, props) {
		return create$1(prototype === null ? nullObject : prototype, props);
	};
}());

var objIsPrototypeOf = Object.prototype.isPrototypeOf;
var defineProperty  = Object.defineProperty;
var nullDesc        = {
	configurable: true,
	enumerable: false,
	writable: true,
	value: undefined
};
var validate;

validate = function (obj, prototype) {
	validValue(obj);
	if (prototype === null || isObject$2(prototype)) { return obj; }
	throw new TypeError("Prototype must be null or an object");
};

var shim$4 = (function (status) {
	var fn, set;
	if (!status) { return null; }
	if (status.level === 2) {
		if (status.set) {
			set = status.set;
			fn = function (obj, prototype) {
				set.call(validate(obj, prototype), prototype);
				return obj;
			};
		} else {
			fn = function (obj, prototype) {
				validate(obj, prototype).__proto__ = prototype;
				return obj;
			};
		}
	} else {
		fn = function self(obj, prototype) {
			var isNullBase;
			validate(obj, prototype);
			isNullBase = objIsPrototypeOf.call(self.nullPolyfill, obj);
			if (isNullBase) { delete self.nullPolyfill.__proto__; }
			if (prototype === null) { prototype = self.nullPolyfill; }
			obj.__proto__ = prototype;
			if (isNullBase) { defineProperty(self.nullPolyfill, "__proto__", nullDesc); }
			return obj;
		};
	}
	return Object.defineProperty(fn, "level", {
		configurable: false,
		enumerable: false,
		writable: false,
		value: status.level
	});
}(
	(function () {
		var tmpObj1 = Object.create(null)
		  , tmpObj2 = {}
		  , set
		  , desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");

		if (desc) {
			try {
				set = desc.set; // Opera crashes at this point
				set.call(tmpObj1, tmpObj2);
			} catch (ignore) {}
			if (Object.getPrototypeOf(tmpObj1) === tmpObj2) { return { set: set, level: 2 }; }
		}

		tmpObj1.__proto__ = tmpObj2;
		if (Object.getPrototypeOf(tmpObj1) === tmpObj2) { return { level: 2 }; }

		tmpObj1 = {};
		tmpObj1.__proto__ = tmpObj2;
		if (Object.getPrototypeOf(tmpObj1) === tmpObj2) { return { level: 1 }; }

		return false;
	})()
));

var setPrototypeOf = isImplemented$6()
	? Object.setPrototypeOf
	: shim$4;

var validCallable = function (fn) {
	if (typeof fn !== "function") { throw new TypeError(fn + " is not a function"); }
	return fn;
};

var isImplemented$8 = function () {
	var assign = Object.assign, obj;
	if (typeof assign !== "function") { return false; }
	obj = { foo: "raz" };
	assign(obj, { bar: "dwa" }, { trzy: "trzy" });
	return (obj.foo + obj.bar + obj.trzy) === "razdwatrzy";
};

var isImplemented$10 = function () {
	try {
		return true;
	} catch (e) {
		return false;
	}
};

var keys$2 = Object.keys;

var shim$9 = function (object) { return keys$2(isValue(object) ? Object(object) : object); };

var keys = isImplemented$10() ? Object.keys : shim$9;

var max$1   = Math.max;

var shim$7 = function (dest, src /* …srcn*/) {
	var arguments$1 = arguments;

	var error, i, length = max$1(arguments.length, 2), assign;
	dest = Object(validValue(dest));
	assign = function (key) {
		try {
			dest[key] = src[key];
		} catch (e) {
			if (!error) { error = e; }
		}
	};
	for (i = 1; i < length; ++i) {
		src = arguments$1[i];
		keys(src).forEach(assign);
	}
	if (error !== undefined) { throw error; }
	return dest;
};

var assign = isImplemented$8()
	? Object.assign
	: shim$7;

var forEach = Array.prototype.forEach;
var create$2 = Object.create;

var process = function (src, obj) {
	var key;
	for (key in src) { obj[key] = src[key]; }
};

// eslint-disable-next-line no-unused-vars
var normalizeOptions = function (opts1 /* …options*/) {
	var result = create$2(null);
	forEach.call(arguments, function (options) {
		if (!isValue(options)) { return; }
		process(Object(options), result);
	});
	return result;
};

// Deprecated

var isCallable = function (obj) {
 return typeof obj === "function";
};

var str = "razdwatrzy";

var isImplemented$12 = function () {
	if (typeof str.contains !== "function") { return false; }
	return (str.contains("dwa") === true) && (str.contains("foo") === false);
};

var indexOf$1 = String.prototype.indexOf;

var shim$11 = function (searchString/* position*/) {
	return indexOf$1.call(this, searchString, arguments[1]) > -1;
};

var contains = isImplemented$12()
	? String.prototype.contains
	: shim$11;

var d_1 = createCommonjsModule(function (module) {
var d;

d = module.exports = function (dscr, value/* options*/) {
	var c, e, w, options, desc;
	if ((arguments.length < 2) || (typeof dscr !== 'string')) {
		options = value;
		value = dscr;
		dscr = null;
	} else {
		options = arguments[2];
	}
	if (dscr == null) {
		c = w = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
		w = contains.call(dscr, 'w');
	}

	desc = { value: value, configurable: c, enumerable: e, writable: w };
	return !options ? desc : assign(normalizeOptions(options), desc);
};

d.gs = function (dscr, get, set/* options*/) {
	var c, e, options, desc;
	if (typeof dscr !== 'string') {
		options = set;
		set = get;
		get = dscr;
		dscr = null;
	} else {
		options = arguments[3];
	}
	if (get == null) {
		get = undefined;
	} else if (!isCallable(get)) {
		options = get;
		get = set = undefined;
	} else if (set == null) {
		set = undefined;
	} else if (!isCallable(set)) {
		options = set;
		set = undefined;
	}
	if (dscr == null) {
		c = true;
		e = false;
	} else {
		c = contains.call(dscr, 'c');
		e = contains.call(dscr, 'e');
	}

	desc = { get: get, set: set, configurable: c, enumerable: e };
	return !options ? desc : assign(normalizeOptions(options), desc);
};
});

var eventEmitter = createCommonjsModule(function (module, exports) {
var apply = Function.prototype.apply, call = Function.prototype.call
  , create = Object.create, defineProperty = Object.defineProperty
  , defineProperties = Object.defineProperties
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , descriptor = { configurable: true, enumerable: false, writable: true }

  , on, once, off, emit, methods, descriptors, base;

on = function (type, listener) {
	var data;

	validCallable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) {
		data = descriptor.value = create(null);
		defineProperty(this, '__ee__', descriptor);
		descriptor.value = null;
	} else {
		data = this.__ee__;
	}
	if (!data[type]) { data[type] = listener; }
	else if (typeof data[type] === 'object') { data[type].push(listener); }
	else { data[type] = [data[type], listener]; }

	return this;
};

once = function (type, listener) {
	var once, self;

	validCallable(listener);
	self = this;
	on.call(this, type, once = function () {
		off.call(self, type, once);
		apply.call(listener, this, arguments);
	});

	once.__eeOnceListener__ = listener;
	return this;
};

off = function (type, listener) {
	var data, listeners, candidate, i;

	validCallable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) { return this; }
	data = this.__ee__;
	if (!data[type]) { return this; }
	listeners = data[type];

	if (typeof listeners === 'object') {
		for (i = 0; (candidate = listeners[i]); ++i) {
			if ((candidate === listener) ||
					(candidate.__eeOnceListener__ === listener)) {
				if (listeners.length === 2) { data[type] = listeners[i ? 0 : 1]; }
				else { listeners.splice(i, 1); }
			}
		}
	} else {
		if ((listeners === listener) ||
				(listeners.__eeOnceListener__ === listener)) {
			delete data[type];
		}
	}

	return this;
};

emit = function (type) {
	var arguments$1 = arguments;
	var this$1 = this;

	var i, l, listener, listeners, args;

	if (!hasOwnProperty.call(this, '__ee__')) { return; }
	listeners = this.__ee__[type];
	if (!listeners) { return; }

	if (typeof listeners === 'object') {
		l = arguments.length;
		args = new Array(l - 1);
		for (i = 1; i < l; ++i) { args[i - 1] = arguments$1[i]; }

		listeners = listeners.slice();
		for (i = 0; (listener = listeners[i]); ++i) {
			apply.call(listener, this$1, args);
		}
	} else {
		switch (arguments.length) {
		case 1:
			call.call(listeners, this);
			break;
		case 2:
			call.call(listeners, this, arguments[1]);
			break;
		case 3:
			call.call(listeners, this, arguments[1], arguments[2]);
			break;
		default:
			l = arguments.length;
			args = new Array(l - 1);
			for (i = 1; i < l; ++i) {
				args[i - 1] = arguments$1[i];
			}
			apply.call(listeners, this, args);
		}
	}
};

methods = {
	on: on,
	once: once,
	off: off,
	emit: emit
};

descriptors = {
	on: d_1(on),
	once: d_1(once),
	off: d_1(off),
	emit: d_1(emit)
};

base = defineProperties({}, descriptors);

module.exports = exports = function (o) {
	return (o == null) ? create(base) : defineProperties(Object(o), descriptors);
};
exports.methods = methods;
});

var eventEmitter_1 = eventEmitter.methods;

var validTypes = { object: true, symbol: true };

var isImplemented$14 = function () {
	if (typeof Symbol !== 'function') { return false; }
	try {  } catch (e) { return false; }

	// Return 'true' also for polyfills
	if (!validTypes[typeof Symbol.iterator]) { return false; }
	if (!validTypes[typeof Symbol.toPrimitive]) { return false; }
	if (!validTypes[typeof Symbol.toStringTag]) { return false; }

	return true;
};

var isSymbol$2 = function (x) {
	if (!x) { return false; }
	if (typeof x === 'symbol') { return true; }
	if (!x.constructor) { return false; }
	if (x.constructor.name !== 'Symbol') { return false; }
	return (x[x.constructor.toStringTag] === 'Symbol');
};

var validateSymbol = function (value) {
	if (!isSymbol$2(value)) { throw new TypeError(value + " is not a symbol"); }
	return value;
};

var create$3 = Object.create;
var defineProperties$1 = Object.defineProperties;
var defineProperty$1 = Object.defineProperty;
var objPrototype = Object.prototype;
var NativeSymbol;
var SymbolPolyfill;
var HiddenSymbol;
var globalSymbols = create$3(null);
var isNativeSafe;

if (typeof Symbol === 'function') {
	NativeSymbol = Symbol;
	try {
		String(NativeSymbol());
		isNativeSafe = true;
	} catch (ignore) {}
}

var generateName = (function () {
	var created = create$3(null);
	return function (desc) {
		var postfix = 0, name, ie11BugWorkaround;
		while (created[desc + (postfix || '')]) { ++postfix; }
		desc += (postfix || '');
		created[desc] = true;
		name = '@@' + desc;
		defineProperty$1(objPrototype, name, d_1.gs(null, function (value) {
			// For IE11 issue see:
			// https://connect.microsoft.com/IE/feedbackdetail/view/1928508/
			//    ie11-broken-getters-on-dom-objects
			// https://github.com/medikoo/es6-symbol/issues/12
			if (ie11BugWorkaround) { return; }
			ie11BugWorkaround = true;
			defineProperty$1(this, name, d_1(value));
			ie11BugWorkaround = false;
		}));
		return name;
	};
}());

// Internal constructor (not one exposed) for creating Symbol instances.
// This one is used to ensure that `someSymbol instanceof Symbol` always return false
HiddenSymbol = function Symbol(description) {
	if (this instanceof HiddenSymbol) { throw new TypeError('Symbol is not a constructor'); }
	return SymbolPolyfill(description);
};

// Exposed `Symbol` constructor
// (returns instances of HiddenSymbol)
var polyfill$2 = SymbolPolyfill = function Symbol(description) {
	var symbol;
	if (this instanceof Symbol) { throw new TypeError('Symbol is not a constructor'); }
	if (isNativeSafe) { return NativeSymbol(description); }
	symbol = create$3(HiddenSymbol.prototype);
	description = (description === undefined ? '' : String(description));
	return defineProperties$1(symbol, {
		__description__: d_1('', description),
		__name__: d_1('', generateName(description))
	});
};
defineProperties$1(SymbolPolyfill, {
	for: d_1(function (key) {
		if (globalSymbols[key]) { return globalSymbols[key]; }
		return (globalSymbols[key] = SymbolPolyfill(String(key)));
	}),
	keyFor: d_1(function (s) {
		var key;
		validateSymbol(s);
		for (key in globalSymbols) { if (globalSymbols[key] === s) { return key; } }
	}),

	// To ensure proper interoperability with other native functions (e.g. Array.from)
	// fallback to eventual native implementation of given symbol
	hasInstance: d_1('', (NativeSymbol && NativeSymbol.hasInstance) || SymbolPolyfill('hasInstance')),
	isConcatSpreadable: d_1('', (NativeSymbol && NativeSymbol.isConcatSpreadable) ||
		SymbolPolyfill('isConcatSpreadable')),
	iterator: d_1('', (NativeSymbol && NativeSymbol.iterator) || SymbolPolyfill('iterator')),
	match: d_1('', (NativeSymbol && NativeSymbol.match) || SymbolPolyfill('match')),
	replace: d_1('', (NativeSymbol && NativeSymbol.replace) || SymbolPolyfill('replace')),
	search: d_1('', (NativeSymbol && NativeSymbol.search) || SymbolPolyfill('search')),
	species: d_1('', (NativeSymbol && NativeSymbol.species) || SymbolPolyfill('species')),
	split: d_1('', (NativeSymbol && NativeSymbol.split) || SymbolPolyfill('split')),
	toPrimitive: d_1('', (NativeSymbol && NativeSymbol.toPrimitive) || SymbolPolyfill('toPrimitive')),
	toStringTag: d_1('', (NativeSymbol && NativeSymbol.toStringTag) || SymbolPolyfill('toStringTag')),
	unscopables: d_1('', (NativeSymbol && NativeSymbol.unscopables) || SymbolPolyfill('unscopables'))
});

// Internal tweaks for real symbol producer
defineProperties$1(HiddenSymbol.prototype, {
	constructor: d_1(SymbolPolyfill),
	toString: d_1('', function () { return this.__name__; })
});

// Proper implementation of methods exposed on Symbol.prototype
// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype
defineProperties$1(SymbolPolyfill.prototype, {
	toString: d_1(function () { return 'Symbol (' + validateSymbol(this).__description__ + ')'; }),
	valueOf: d_1(function () { return validateSymbol(this); })
});
defineProperty$1(SymbolPolyfill.prototype, SymbolPolyfill.toPrimitive, d_1('', function () {
	var symbol = validateSymbol(this);
	if (typeof symbol === 'symbol') { return symbol; }
	return symbol.toString();
}));
defineProperty$1(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d_1('c', 'Symbol'));

// Proper implementaton of toPrimitive and toStringTag for returned symbol instances
defineProperty$1(HiddenSymbol.prototype, SymbolPolyfill.toStringTag,
	d_1('c', SymbolPolyfill.prototype[SymbolPolyfill.toStringTag]));

// Note: It's important to define `toPrimitive` as last one, as some implementations
// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)
// And that may invoke error in definition flow:
// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149
defineProperty$1(HiddenSymbol.prototype, SymbolPolyfill.toPrimitive,
	d_1('c', SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive]));

var es6Symbol = isImplemented$14() ? Symbol : polyfill$2;

var objToString = Object.prototype.toString;
var id = objToString.call(
	(function () {
		return arguments;
	})()
);

var isArguments = function (value) {
	return objToString.call(value) === id;
};

var objToString$1 = Object.prototype.toString;
var id$1 = objToString$1.call("");

var isString = function (value) {
	return (
		typeof value === "string" ||
		(value &&
			typeof value === "object" &&
			(value instanceof String || objToString$1.call(value) === id$1)) ||
		false
	);
};

var iteratorSymbol = es6Symbol.iterator;
var isArray        = Array.isArray;

var isIterable = function (value) {
	if (!isValue(value)) { return false; }
	if (isArray(value)) { return true; }
	if (isString(value)) { return true; }
	if (isArguments(value)) { return true; }
	return typeof value[iteratorSymbol] === "function";
};

var validIterable = function (value) {
	if (!isIterable(value)) { throw new TypeError(value + " is not iterable"); }
	return value;
};

var isImplemented$16 = function () {
	var from = Array.from, arr, result;
	if (typeof from !== "function") { return false; }
	arr = ["raz", "dwa"];
	result = from(arr);
	return Boolean(result && (result !== arr) && (result[1] === "dwa"));
};

var objToString$2 = Object.prototype.toString;
var id$2 = objToString$2.call(noop);

var isFunction$1 = function (value) {
	return typeof value === "function" && objToString$2.call(value) === id$2;
};

var iteratorSymbol$2 = es6Symbol.iterator;
var isArray$2        = Array.isArray;
var call$2           = Function.prototype.call;
var desc           = { configurable: true, enumerable: true, writable: true, value: null };
var defineProperty$4 = Object.defineProperty;

// eslint-disable-next-line complexity
var shim$13 = function (arrayLike /* mapFn, thisArg*/) {
	var mapFn = arguments[1]
	  , thisArg = arguments[2]
	  , Context
	  , i
	  , j
	  , arr
	  , length
	  , code
	  , iterator
	  , result
	  , getIterator
	  , value;

	arrayLike = Object(validValue(arrayLike));

	if (isValue(mapFn)) { validCallable(mapFn); }
	if (!this || this === Array || !isFunction$1(this)) {
		// Result: Plain array
		if (!mapFn) {
			if (isArguments(arrayLike)) {
				// Source: Arguments
				length = arrayLike.length;
				if (length !== 1) { return Array.apply(null, arrayLike); }
				arr = new Array(1);
				arr[0] = arrayLike[0];
				return arr;
			}
			if (isArray$2(arrayLike)) {
				// Source: Array
				arr = new Array(length = arrayLike.length);
				for (i = 0; i < length; ++i) { arr[i] = arrayLike[i]; }
				return arr;
			}
		}
		arr = [];
	} else {
		// Result: Non plain array
		Context = this;
	}

	if (!isArray$2(arrayLike)) {
		if ((getIterator = arrayLike[iteratorSymbol$2]) !== undefined) {
			// Source: Iterator
			iterator = validCallable(getIterator).call(arrayLike);
			if (Context) { arr = new Context(); }
			result = iterator.next();
			i = 0;
			while (!result.done) {
				value = mapFn ? call$2.call(mapFn, thisArg, result.value, i) : result.value;
				if (Context) {
					desc.value = value;
					defineProperty$4(arr, i, desc);
				} else {
					arr[i] = value;
				}
				result = iterator.next();
				++i;
			}
			length = i;
		} else if (isString(arrayLike)) {
			// Source: String
			length = arrayLike.length;
			if (Context) { arr = new Context(); }
			for (i = 0, j = 0; i < length; ++i) {
				value = arrayLike[i];
				if (i + 1 < length) {
					code = value.charCodeAt(0);
					// eslint-disable-next-line max-depth
					if (code >= 0xd800 && code <= 0xdbff) { value += arrayLike[++i]; }
				}
				value = mapFn ? call$2.call(mapFn, thisArg, value, j) : value;
				if (Context) {
					desc.value = value;
					defineProperty$4(arr, j, desc);
				} else {
					arr[j] = value;
				}
				++j;
			}
			length = j;
		}
	}
	if (length === undefined) {
		// Source: array or array-like
		length = toPosInteger(arrayLike.length);
		if (Context) { arr = new Context(length); }
		for (i = 0; i < length; ++i) {
			value = mapFn ? call$2.call(mapFn, thisArg, arrayLike[i], i) : arrayLike[i];
			if (Context) {
				desc.value = value;
				defineProperty$4(arr, i, desc);
			} else {
				arr[i] = value;
			}
		}
	}
	if (Context) {
		desc.value = null;
		arr.length = length;
	}
	return arr;
};

var from = isImplemented$16()
	? Array.from
	: shim$13;

var copy = function (obj/* propertyNames, options*/) {
	var copy = Object(validValue(obj)), propertyNames = arguments[1], options = Object(arguments[2]);
	if (copy !== obj && !propertyNames) { return copy; }
	var result = {};
	if (propertyNames) {
		from(propertyNames, function (propertyName) {
			if (options.ensure || propertyName in obj) { result[propertyName] = obj[propertyName]; }
		});
	} else {
		assign(result, obj);
	}
	return result;
};

var bind$1                    = Function.prototype.bind;
var call$4                    = Function.prototype.call;
var keys$4                    = Object.keys;
var objPropertyIsEnumerable = Object.prototype.propertyIsEnumerable;

var _iterate = function (method, defVal) {
	return function (obj, cb /* thisArg, compareFn*/) {
		var list, thisArg = arguments[2], compareFn = arguments[3];
		obj = Object(validValue(obj));
		validCallable(cb);

		list = keys$4(obj);
		if (compareFn) {
			list.sort(typeof compareFn === "function" ? bind$1.call(compareFn, obj) : undefined);
		}
		if (typeof method !== "function") { method = list[method]; }
		return call$4.call(method, list, function (key, index) {
			if (!objPropertyIsEnumerable.call(obj, key)) { return defVal; }
			return call$4.call(cb, thisArg, obj[key], key, obj, index);
		});
	};
};

var forEach$1 = _iterate("forEach");

var call$3     = Function.prototype.call;

var map$1 = function (obj, cb /* thisArg*/) {
	var result = {}, thisArg = arguments[2];
	validCallable(cb);
	forEach$1(obj, function (value, key, targetObj, index) {
		result[key] = call$3.call(cb, thisArg, value, key, targetObj, index);
	});
	return result;
};

var callable$1         = validCallable;
var bind = Function.prototype.bind;
var defineProperty$3 = Object.defineProperty;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var define;

define = function (name, desc, options) {
	var value = validValue(desc) && callable$1(desc.value), dgs;
	dgs = copy(desc);
	delete dgs.writable;
	delete dgs.value;
	dgs.get = function () {
		if (!options.overwriteDefinition && hasOwnProperty$1.call(this, name)) { return value; }
		desc.value = bind.call(value, options.resolveContext ? options.resolveContext(this) : this);
		defineProperty$3(this, name, desc);
		return this[name];
	};
	return dgs;
};

var autoBind = function (props/* options*/) {
	var options = normalizeOptions(arguments[1]);
	if (options.resolveContext != null) { validCallable(options.resolveContext); }
	return map$1(props, function (desc, name) { return define(name, desc, options); });
};

var defineProperty$2 = Object.defineProperty;
var defineProperties$2 = Object.defineProperties;
var Iterator;

var es6Iterator = Iterator = function (list, context) {
	if (!(this instanceof Iterator)) { throw new TypeError("Constructor requires 'new'"); }
	defineProperties$2(this, {
		__list__: d_1("w", validValue(list)),
		__context__: d_1("w", context),
		__nextIndex__: d_1("w", 0)
	});
	if (!context) { return; }
	validCallable(context.on);
	context.on("_add", this._onAdd);
	context.on("_delete", this._onDelete);
	context.on("_clear", this._onClear);
};

// Internal %IteratorPrototype% doesn't expose its constructor
delete Iterator.prototype.constructor;

defineProperties$2(
	Iterator.prototype,
	assign(
		{
			_next: d_1(function () {
				var i;
				if (!this.__list__) { return undefined; }
				if (this.__redo__) {
					i = this.__redo__.shift();
					if (i !== undefined) { return i; }
				}
				if (this.__nextIndex__ < this.__list__.length) { return this.__nextIndex__++; }
				this._unBind();
				return undefined;
			}),
			next: d_1(function () {
				return this._createResult(this._next());
			}),
			_createResult: d_1(function (i) {
				if (i === undefined) { return { done: true, value: undefined }; }
				return { done: false, value: this._resolve(i) };
			}),
			_resolve: d_1(function (i) {
				return this.__list__[i];
			}),
			_unBind: d_1(function () {
				this.__list__ = null;
				delete this.__redo__;
				if (!this.__context__) { return; }
				this.__context__.off("_add", this._onAdd);
				this.__context__.off("_delete", this._onDelete);
				this.__context__.off("_clear", this._onClear);
				this.__context__ = null;
			}),
			toString: d_1(function () {
				return "[object " + (this[es6Symbol.toStringTag] || "Object") + "]";
			})
		},
		autoBind({
			_onAdd: d_1(function (index) {
				if (index >= this.__nextIndex__) { return; }
				++this.__nextIndex__;
				if (!this.__redo__) {
					defineProperty$2(this, "__redo__", d_1("c", [index]));
					return;
				}
				this.__redo__.forEach(function (redo, i) {
					if (redo >= index) { this.__redo__[i] = ++redo; }
				}, this);
				this.__redo__.push(index);
			}),
			_onDelete: d_1(function (index) {
				var i;
				if (index >= this.__nextIndex__) { return; }
				--this.__nextIndex__;
				if (!this.__redo__) { return; }
				i = this.__redo__.indexOf(index);
				if (i !== -1) { this.__redo__.splice(i, 1); }
				this.__redo__.forEach(function (redo, j) {
					if (redo > index) { this.__redo__[j] = --redo; }
				}, this);
			}),
			_onClear: d_1(function () {
				if (this.__redo__) { clear.call(this.__redo__); }
				this.__nextIndex__ = 0;
			})
		})
	)
);

defineProperty$2(
	Iterator.prototype,
	es6Symbol.iterator,
	d_1(function () {
		return this;
	})
);

var array = createCommonjsModule(function (module) {
var defineProperty = Object.defineProperty, ArrayIterator;

ArrayIterator = module.exports = function (arr, kind) {
	if (!(this instanceof ArrayIterator)) { throw new TypeError("Constructor requires 'new'"); }
	es6Iterator.call(this, arr);
	if (!kind) { kind = "value"; }
	else if (contains.call(kind, "key+value")) { kind = "key+value"; }
	else if (contains.call(kind, "key")) { kind = "key"; }
	else { kind = "value"; }
	defineProperty(this, "__kind__", d_1("", kind));
};
if (setPrototypeOf) { setPrototypeOf(ArrayIterator, es6Iterator); }

// Internal %ArrayIteratorPrototype% doesn't expose its constructor
delete ArrayIterator.prototype.constructor;

ArrayIterator.prototype = Object.create(es6Iterator.prototype, {
	_resolve: d_1(function (i) {
		if (this.__kind__ === "value") { return this.__list__[i]; }
		if (this.__kind__ === "key+value") { return [i, this.__list__[i]]; }
		return i;
	})
});
defineProperty(ArrayIterator.prototype, es6Symbol.toStringTag, d_1("c", "Array Iterator"));
});

var string = createCommonjsModule(function (module) {
// Thanks @mathiasbynens
// http://mathiasbynens.be/notes/javascript-unicode#iterating-over-symbols

var defineProperty = Object.defineProperty, StringIterator;

StringIterator = module.exports = function (str) {
	if (!(this instanceof StringIterator)) { throw new TypeError("Constructor requires 'new'"); }
	str = String(str);
	es6Iterator.call(this, str);
	defineProperty(this, "__length__", d_1("", str.length));
};
if (setPrototypeOf) { setPrototypeOf(StringIterator, es6Iterator); }

// Internal %ArrayIteratorPrototype% doesn't expose its constructor
delete StringIterator.prototype.constructor;

StringIterator.prototype = Object.create(es6Iterator.prototype, {
	_next: d_1(function () {
		if (!this.__list__) { return undefined; }
		if (this.__nextIndex__ < this.__length__) { return this.__nextIndex__++; }
		this._unBind();
		return undefined;
	}),
	_resolve: d_1(function (i) {
		var char = this.__list__[i], code;
		if (this.__nextIndex__ === this.__length__) { return char; }
		code = char.charCodeAt(0);
		if (code >= 0xd800 && code <= 0xdbff) { return char + this.__list__[this.__nextIndex__++]; }
		return char;
	})
});
defineProperty(StringIterator.prototype, es6Symbol.toStringTag, d_1("c", "String Iterator"));
});

var iteratorSymbol$1 = es6Symbol.iterator;

var get = function (obj) {
	if (typeof validIterable(obj)[iteratorSymbol$1] === "function") { return obj[iteratorSymbol$1](); }
	if (isArguments(obj)) { return new array(obj); }
	if (isString(obj)) { return new string(obj); }
	return new array(obj);
};

var isArray$1 = Array.isArray;
var call$1 = Function.prototype.call;
var some = Array.prototype.some;

var forOf = function (iterable, cb /* thisArg*/) {
	var mode, thisArg = arguments[2], result, doBreak, broken, i, length, char, code;
	if (isArray$1(iterable) || isArguments(iterable)) { mode = "array"; }
	else if (isString(iterable)) { mode = "string"; }
	else { iterable = get(iterable); }

	validCallable(cb);
	doBreak = function () {
		broken = true;
	};
	if (mode === "array") {
		some.call(iterable, function (value) {
			call$1.call(cb, thisArg, value, doBreak);
			return broken;
		});
		return;
	}
	if (mode === "string") {
		length = iterable.length;
		for (i = 0; i < length; ++i) {
			char = iterable[i];
			if (i + 1 < length) {
				code = char.charCodeAt(0);
				if (code >= 0xd800 && code <= 0xdbff) { char += iterable[++i]; }
			}
			call$1.call(cb, thisArg, char, doBreak);
			if (broken) { break; }
		}
		return;
	}
	result = iterable.next();

	while (!result.done) {
		call$1.call(cb, thisArg, result.value, doBreak);
		if (broken) { return; }
		result = iterable.next();
	}
};

var forEach$4 = Array.prototype.forEach;
var create$4 = Object.create;

// eslint-disable-next-line no-unused-vars
var primitiveSet = function (arg /* …args*/) {
	var set = create$4(null);
	forEach$4.call(arguments, function (name) {
		set[name] = true;
	});
	return set;
};

var iteratorKinds = primitiveSet('key',
	'value', 'key+value');

var iterator$1 = createCommonjsModule(function (module) {
var toStringTagSymbol = es6Symbol.toStringTag

  , defineProperties = Object.defineProperties
  , unBind = es6Iterator.prototype._unBind
  , MapIterator;

MapIterator = module.exports = function (map, kind) {
	if (!(this instanceof MapIterator)) { return new MapIterator(map, kind); }
	es6Iterator.call(this, map.__mapKeysData__, map);
	if (!kind || !iteratorKinds[kind]) { kind = 'key+value'; }
	defineProperties(this, {
		__kind__: d_1('', kind),
		__values__: d_1('w', map.__mapValuesData__)
	});
};
if (setPrototypeOf) { setPrototypeOf(MapIterator, es6Iterator); }

MapIterator.prototype = Object.create(es6Iterator.prototype, {
	constructor: d_1(MapIterator),
	_resolve: d_1(function (i) {
		if (this.__kind__ === 'value') { return this.__values__[i]; }
		if (this.__kind__ === 'key') { return this.__list__[i]; }
		return [this.__list__[i], this.__values__[i]];
	}),
	_unBind: d_1(function () {
		this.__values__ = null;
		unBind.call(this);
	}),
	toString: d_1(function () { return '[object Map Iterator]'; })
});
Object.defineProperty(MapIterator.prototype, toStringTagSymbol,
	d_1('c', 'Map Iterator'));
});

// Exports true if environment provides native `Map` implementation,
// whatever that is.

var isNativeImplemented = (function () {
	if (typeof Map === 'undefined') { return false; }
	return (Object.prototype.toString.call(new Map()) === '[object Map]');
}());

var iterator       = validIterable;
var call = Function.prototype.call;
var defineProperties = Object.defineProperties;
var getPrototypeOf = Object.getPrototypeOf;
var MapPoly;

var polyfill = MapPoly = function (/*iterable*/) {
	var iterable$$1 = arguments[0], keys, values, self;
	if (!(this instanceof MapPoly)) { throw new TypeError('Constructor requires \'new\''); }
	if (isNativeImplemented && setPrototypeOf && (Map !== MapPoly)) {
		self = setPrototypeOf(new Map(), getPrototypeOf(this));
	} else {
		self = this;
	}
	if (iterable$$1 != null) { iterator(iterable$$1); }
	defineProperties(self, {
		__mapKeysData__: d_1('c', keys = []),
		__mapValuesData__: d_1('c', values = [])
	});
	if (!iterable$$1) { return self; }
	forOf(iterable$$1, function (value$$1) {
		var key = validValue(value$$1)[0];
		value$$1 = value$$1[1];
		if (eIndexOf.call(keys, key) !== -1) { return; }
		keys.push(key);
		values.push(value$$1);
	}, self);
	return self;
};

if (isNativeImplemented) {
	if (setPrototypeOf) { setPrototypeOf(MapPoly, Map); }
	MapPoly.prototype = Object.create(Map.prototype, {
		constructor: d_1(MapPoly)
	});
}

eventEmitter(defineProperties(MapPoly.prototype, {
	clear: d_1(function () {
		if (!this.__mapKeysData__.length) { return; }
		clear.call(this.__mapKeysData__);
		clear.call(this.__mapValuesData__);
		this.emit('_clear');
	}),
	delete: d_1(function (key) {
		var index = eIndexOf.call(this.__mapKeysData__, key);
		if (index === -1) { return false; }
		this.__mapKeysData__.splice(index, 1);
		this.__mapValuesData__.splice(index, 1);
		this.emit('_delete', index, key);
		return true;
	}),
	entries: d_1(function () { return new iterator$1(this, 'key+value'); }),
	forEach: d_1(function (cb/* thisArg*/) {
		var this$1 = this;

		var thisArg = arguments[1], iterator, result;
		validCallable(cb);
		iterator = this.entries();
		result = iterator._next();
		while (result !== undefined) {
			call.call(cb, thisArg, this$1.__mapValuesData__[result],
				this$1.__mapKeysData__[result], this$1);
			result = iterator._next();
		}
	}),
	get: d_1(function (key) {
		var index = eIndexOf.call(this.__mapKeysData__, key);
		if (index === -1) { return; }
		return this.__mapValuesData__[index];
	}),
	has: d_1(function (key) {
		return (eIndexOf.call(this.__mapKeysData__, key) !== -1);
	}),
	keys: d_1(function () { return new iterator$1(this, 'key'); }),
	set: d_1(function (key, value$$1) {
		var index = eIndexOf.call(this.__mapKeysData__, key), emit;
		if (index === -1) {
			index = this.__mapKeysData__.push(key) - 1;
			emit = true;
		}
		this.__mapValuesData__[index] = value$$1;
		if (emit) { this.emit('_add', index, key); }
		return this;
	}),
	size: d_1.gs(function () { return this.__mapKeysData__.length; }),
	values: d_1(function () { return new iterator$1(this, 'value'); }),
	toString: d_1(function () { return '[object Map]'; })
}));
Object.defineProperty(MapPoly.prototype, es6Symbol.iterator, d_1(function () {
	return this.entries();
}));
Object.defineProperty(MapPoly.prototype, es6Symbol.toStringTag, d_1('c', 'Map'));

if (!isImplemented()) {
	Object.defineProperty(global$1, 'Map',
		{ value: polyfill, configurable: true, enumerable: false,
			writable: true });
}

var vuescroll = new Object;

vuescroll.install = function (Vue, options) {

  options = options || {};
  var SCROLL = 'scroll';
  var THROTTLE = 'throttle';
  var DEBOUNCE = 'debounce';
  var VALID_ARGS = [THROTTLE, DEBOUNCE];

  function bindValue (el, value, arg) {
    var fn, opt = Object.assign({}, options);
    if (isObject_1(value) || isFunction_1(value)) {
      fn = value;

      if (VALID_ARGS.indexOf(arg) > -1) {
        fn = value.fn;
        if (arg === THROTTLE) {
          opt = { throttle: value.throttle};
        } else if(arg === DEBOUNCE) {
          opt = { debounce: value.debounce};
        }
      }

      try {
        dom.bind(el, SCROLL, fn, opt);
      } catch(err) {
        console.warn('Unexpected error happened when binding listener');
      }

    } else {
      console.warn('Unexpected scroll properties');
    }
  }

  function unbindValue (el, value, arg) {
    var fn;
    if (isObject_1(value) || isFunction_1(value)) {
      fn = value;
      if (VALID_ARGS.indexOf(arg) > -1)  {
        fn = value.fn;
      }
      dom.unbind(el, SCROLL, fn);
    }
  }

  Vue.directive(SCROLL, {

    bind: function(el, binding, vnode, oldVnode) {
      bindValue(el, binding.value, binding.arg);
    },

    inserted: function(el, binding) {
        //To do, check whether element is scrollable and give warn message when not
    },

    update: function(el, binding) {
      if (binding.value === binding.oldValue) {
        return;
      }
      bindValue(el, binding.value, binding.arg);
      unbindValue(el, binding.oldValue, binding.arg);
    },

    unbind: function(el, binding) {
      unbindValue(el, binding.value, binding.arg);
    }

  });

};

return vuescroll;

})));
