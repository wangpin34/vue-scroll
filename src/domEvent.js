import _isObject from 'lodash/isObject'
import _isInteger from 'lodash/isInteger'
import _isFunction from 'lodash/isFunction'
import _isFinite from 'lodash/isFinite'
import _debounce from 'lodash/debounce'
import _throttle from 'lodash/throttle'


export default (function () {
  const elements = [];
  const listeners = new Map();

  const SCROLL = 'scroll';

  function addEventListener (element, event, funcs, opt) {

    function fn (e) {
      let data;
      let target = e.target || e.srcElement;
      e = e || window.e;

      if (e.type === SCROLL) {
        if (target === document) {
          data = { scrollTop: document.body.scrollTop, scrollLeft: document.body.scrollLeft }
        } else {
          data = { scrollTop: target.scrollTop, scrollLeft: target.scrollLeft }
        }
      }

      funcs.forEach(function (f) {
        f(e, data);
      })
    }

    if (_isObject(opt)) {
      if (_isInteger(opt.throttle) && _isFinite(opt.throttle) && opt.throttle > -1) {
        console.log('Set throttle as ' + opt.throttle);
        fn = _throttle(fn, opt.throttle);
      }

      if (_isInteger(opt.debounce) && _isFinite(opt.debounce) && opt.debounce > -1) {
        console.log('Set debounce as ' + opt.debounce);
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

    let funcs, eventFuncs;

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

    let funcs, eventFuncs;

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
      eventFuncs.splice(eventFuncs.indexOf(fn), 1)
      return true;
    }

    return false;

  }

  return {
    bind: bind,
    unbind: unbind
  }

})()
