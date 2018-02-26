/**
  * vue-scroll v2.1.7
  * (c) 2018 Wang Pin
  * @license MIT
  */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _isObject = _interopDefault(require('lodash/isObject'));
var _isFunction = _interopDefault(require('lodash/isFunction'));
var _isInteger = _interopDefault(require('lodash/isInteger'));
var _isFinite = _interopDefault(require('lodash/isFinite'));
var _debounce = _interopDefault(require('lodash/debounce'));
var _throttle = _interopDefault(require('lodash/throttle'));

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

    if (_isObject(opt)) {
      if (_isInteger(opt.throttle) && _isFinite(opt.throttle) && opt.throttle > -1) {
        fn = _throttle(fn, opt.throttle);
      }

      if (_isInteger(opt.debounce) && _isFinite(opt.debounce) && opt.debounce > -1) {
        fn = _debounce(fn, opt.debounce);
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

    if (!_isFunction(fn)) {
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

    if (!_isFunction(fn)) {
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

var vuescroll = new Object;

vuescroll.install = function (Vue, options) {

  options = options || {};
  var SCROLL = 'scroll';
  var THROTTLE = 'throttle';
  var DEBOUNCE = 'debounce';
  var VALID_ARGS = [THROTTLE, DEBOUNCE];

  function bindValue (el, value, arg) {
    var fn, opt = Object.assign({}, options);
    if (_isObject(value) || _isFunction(value)) {
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
    if (_isObject(value) || _isFunction(value)) {
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

module.exports = vuescroll;
