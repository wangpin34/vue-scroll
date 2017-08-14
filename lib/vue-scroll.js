(function(){
    var Vue;
    var isVueLoaded = true;

    if(typeof require === 'undefined'){
        Vue = window.Vue;
    }else{
        Vue = require('vue');
    }

    if(!Vue) {
        isVueLoaded = false;
        console.warn('Vue is not loaded yet. Please make sure it is loaded before installing vue-scroll.');
    }

    var scrollPlugin = { 
        
        install: function(Vue, options){

            var EVENT_SCROLL = 'scroll';

              function Q(){
                var elements = [];
                var listeners = [];

                var addListener = function(element, eventType, funcs){
                  var EVENT_SCROLL = 'scroll';

                  //TODO decide if new object for each listener needed
                  // https://github.com/wangpin34/vue-scroll/issues/1
                  if((element === document.body || element === document || element === window) && eventType === SCROLL){
                    document.onscroll = function(e){
	                  // creating new Object to disable reactivity
                      var scrollData = {
                        scrollTop: document.body.scrollTop,
	                    scrollLeft: document.body.scrollLeft
                      };
                      funcs.forEach(function(func){
                        func.called && func.called(e, scrollData);
                      })
                    }
                  }else {
                    var listener = function(e){
                      // creating new Object to disable reactivity
                      var scrollData = {};
                      e = e || window.event;
                      e.target = e.target || e.srcElement;

                      if(eventType === EVENT_SCROLL){
                        scrollData.scrollTop = element.scrollTop;
                        scrollData.scrollLeft = element.scrollLeft;
                      }
                      funcs.forEach(function(func){
                        (typeof func.called !== 'undefined') && func.called(e, scrollData);
                      })
                    }
                  
                    if(element.addEventListener){
                      element.addEventListener(eventType, listener);
                    }else{
                      element.attachEvent('on' + eventType, listener);
                    }

                  }
                }
                  
                if(typeof Q._initialized == 'undefined'){
                    
                  Q.prototype.bind = (function(element, eventType, func, arg){
                    var funcs, i, length = elements.length, throttle;

                    if(arg){
                        var lastCallTimestamp, timeout = null, value, pos, caller = function(){
                            timeout = null;
                            lastCallTimestamp = Date.now();
                            func(value, pos);
                        };
                        throttle = function(e, position){
                            if(!lastCallTimestamp || Date.now() - lastCallTimestamp >= arg){
                                lastCallTimestamp = Date.now();
                                func(e, position);
                            } else {
                                value = e;
                                pos = position;
                                if(!timeout){
                                    timeout = setTimeout(caller, arg);
                                }
                            }
                        }
                    }

                    for(i = 0; i < length; ++i){
                        if(elements[i] === element) break;
                    }

                    if(i >= length){
                      elements.push(element);
                      listeners.push({});
                      funcs = listeners[length];
                    }else{
                      funcs = listeners[i];
                    }

                    var eventFuncs;
                    if(!funcs[eventType]){
                      //Initialize event listeners
                      funcs[eventType] = [];
                      //Bind to the element once
                      addListener(element, eventType, funcs[eventType]);
                    }
                    eventFuncs = funcs[eventType];
                    eventFuncs.push({
                        original: func,
                        called: throttle ? throttle : func
                    });

                  }).bind(this);

                  Q.prototype.unbind = (function(element, eventType, func){
                    var funcs, length = elements.length, i;

	                  for(i = 0; i < length; ++i){
		                  if(elements[i] === element) break;
	                  }
                    
                    if(i >= length){
                      console.warn('There are no listener could be removed.');
                      return 1;
                    }else{
                      funcs = listeners[i];
                    }

                    length = funcs.length;
                    var eventFuncs = funcs[eventType];
                    for(i = 0; i < length; ++i){
                        if(eventFuncs[i].original === func) break;
                    }

                    if(!funcs[eventType] || i >= length){
                      console.warn('1There are no listener could be removed.');
                      return;
                    }
                    eventFuncs.splice(eventFuncs[i], 1);
                    console.log('A event listener is removed successfully');
                  }).bind(this);

                  Q._initialized = true;
                }
              }

            var q = new Q();
            
            Vue.directive('scroll', {
                bind: function(el, binding, vnode){
                    if(!binding.value || typeof binding.value !== 'function'){
                        throw new Error('The scroll listener is not a function');
                    }
	                if(binding.arg && isNaN(binding.arg)){
		                throw new Error('Throttle delay is not a number')
	                }
	                q.bind(el, EVENT_SCROLL, binding.value, binding.arg);
                },
                inserted: function(el, binding){
                    //To do, check whether element is scrollable and give warn message when not
                },
                update: function(el, binding){
                    if(binding.value === binding.oldValue){
                        return;
                    }
                    if(!binding.value || typeof binding.value !== 'function'){
                        throw new Error('The scroll listener is not a function');
                    }
	                if(binding.arg && isNaN(binding.arg)){
		                throw new Error('Throttle delay is not a number')
	                }
	                q.bind(el, EVENT_SCROLL, binding.value, binding.arg);
                    q.unbind(el, EVENT_SCROLL, binding.oldValue);
                },
                unbind: function(el, binding){
                    if(binding.value && typeof binding.value === 'function'){
                        q.unbind(el, EVENT_SCROLL, binding.oldValue);
                    }else{
                        throw new Error('The scroll listener is not a function');
                    }
                }
            })

        }
    }

    if(typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
        module.exports = scrollPlugin;
    }else{
        window.vScroll = scrollPlugin;
    }
})()
