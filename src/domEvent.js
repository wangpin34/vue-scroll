import { isObject, isFunction, isInteger, debounce, throttle, get } from './lodash'

export default (function () {
  const listeners = new Map();

  const SCROLL = 'scroll';

  function addEventListener (element, event, funcs, opt) {

    function fn (e) {
      let data;
      let target = e.target || e.srcElement;
      e = e || window.e;

      if (e.type === SCROLL) {
        if (target === document) {
          data = { scrollTop: get(document, 'body.scrollTop', 0), scrollLeft: get(document, 'body.scrollLeft', 0) }
        } else {
          data = { scrollTop: get(target, 'scrollTop', 0), scrollLeft: get(target, 'scrollLeft', 0) }
        }
      }

      funcs.forEach(function (f) {
        f(e, data);
      })
    }

    if (isObject(opt)) {
      if (isInteger(opt.throttle) && isFinite(opt.throttle) && opt.throttle > -1) {
        console.log('Set throttle as ' + opt.throttle);
        fn = throttle(fn, opt.throttle);
      }

      if (isInteger(opt.debounce) && isFinite(opt.debounce) && opt.debounce > -1) {
        console.log('Set debounce as ' + opt.debounce);
        fn = debounce(fn, opt.debounce);
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

    if (!isFunction(fn)) {
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

    if (!isFunction(fn)) {
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
