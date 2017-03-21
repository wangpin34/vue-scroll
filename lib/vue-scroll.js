(function(){
    var Vue;
    var isVueLoaded = true;

    if(typeof require === 'undefined'){
        Vue = Window.Vue;
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

                var addScrollListener = function(element, funcs){
                    if(element == document.body){
                        document.onscroll = function(e){
                            funcs.forEach(function(func){
                                func && func(e, { scrollTop: document.body.scrollTop, scrollLeft: document.body.scrollLeft});
                            })
                        }
                    }else if(element.addEventListener){
                        element.addEventListener(EVENT_SCROLL,function(e){
                            funcs.forEach(function(func){
                                func && func(e, { scrollTop: element.scrollTop, scrollLeft: element.scrollLeft});
                            })
                        });
                    }else {
                        element.attach('on' + EVENT_SCROLL, function(e){
                            e = e || window.event;
                            funcs.forEach(function(func){
                                func && func(e, { scrollTop: element.scrollTop, scrollLeft: element.scrollLeft});
                            })
                        });
                    }
                }
                
                if(typeof Q._initialized == 'undefined'){
                    
                    Q.prototype.bind = (function(element, eventType, func){
                        var funcs;
                        
                        if(elements.indexOf(element) < 0){
                            elements.push(element);
                            listeners.push({});
                            funcs = listeners[listeners.length - 1];
                        }else{
                            funcs = listeners[elements.indexOf(element)];
                        }

                        var eventFuncs;
                        if(!funcs[eventType]){
                            //Initialize event listeners
                            funcs[eventType] = [];
                            //Bind to the element once
                            eventType === EVENT_SCROLL && addScrollListener(element, funcs[eventType]);
                        }
                        eventFuncs = funcs[eventType];
                        eventFuncs.push(func);

                    }).bind(this);

                    Q.prototype.unbind = (function(element, eventType, func){
                        var funcs;
                        
                        if(elements.indexOf(element) < 0){
                            console.warn('There are no listener could be removed.');
                            return 1;
                        }else{
                            funcs = listeners[elements.indexOf(element)];
                        }

                        var eventFuncs;
                        if(!funcs[eventType] || (eventFuncs = funcs[eventType]).indexOf(func) < 0){
                            console.warn('There are no listener could be removed.');
                            return;
                        }
                        eventFuncs.splice(eventFuncs.indexOf(func), 1);
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