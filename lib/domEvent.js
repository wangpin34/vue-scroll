const _ = require('lodash');

module.exports = (function () {
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

    if (_.isObject(opt)) {
      if (_.isInteger(opt.throttle) &&  _.isFinite(opt.throttle) && opt.throttle > -1) {
        console.log('Set throttle as ' + opt.throttle);
        fn = _.throttle(fn, opt.throttle);
      }

      if (_.isInteger(opt.debounce) && _.isFinite(opt.debounce) && opt.debounce > -1) {
        console.log('Set debounce as ' + opt.debounce);
        fn = _.debounce(fn, opt.debounce);
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

    if (!_.isFunction(fn)) {
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

    if (!_.isFunction(fn)) {
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