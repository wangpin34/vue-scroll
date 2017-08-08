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
                  var scrollData = {};
                    
                  // https://github.com/wangpin34/vue-scroll/issues/1
                  if((element === document.body || element === document || element === window) && eventType === SCROLL){
                    document.onscroll = function(e){
                      scrollData.scrollTop = document.body.scrollTop;
                      scrollData.scrollLeft = document.body.scrollLeft;
                      funcs.forEach(function(func){
                        func && func(e, scrollData);
                      })
                    }
                  }else {
                    var listener = function(e){
                      e = e || window.event;
                      e.target = e.target || e.srcElement;
                      if(eventType === EVENT_SCROLL){
                        scrollData.scrollTop = element.scrollTop;
                        scrollData.scrollLeft = element.scrollLeft;
                      }
                      funcs.forEach(function(func){
                        (typeof func !== 'undefined') && func(e, scrollData);
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
                    
                  Q.prototype.bind = (function(element, eventType, func){
                    var funcs, i, length = elements.length;

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
                    eventFuncs.push(func);

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
                        if(eventFuncs[i] === func) break;
                    }

                    if(!funcs[eventType] || i >= length){
                      console.warn('There are no listener could be removed.');
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
                    q.bind(el, EVENT_SCROLL, binding.value);
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
                    q.bind(el, EVENT_SCROLL, binding.value);
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
