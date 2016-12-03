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

            var handleListeners = function(el, current, old){
                if(el==document.body){
                    document.onscroll = function(e){
                        current && current(e, { scrollTop: document.body.scrollTop, scrollLeft: document.body.scrollLeft});
                    }
                }else if(el.addEventListener){
                    old && el.removeEventListener('scroll', old);
                    el.addEventListener('scroll',function(e){
                        current && current(e, { scrollTop: el.scrollTop, scrollLeft: el.scrollLeft});
                    });
                }else {
                    old && el.detachEvent('onscroll', old);
                    el.attach('onscroll',function(e){
                        e = e || window.event;
                        current && current(e, { scrollTop: el.scrollTop, scrollLeft: el.scrollLeft});
                    });
                }
            }
            
            Vue.directive('scroll', {
                bind: function(el, binding, vnode){
                    if(!binding.value || typeof binding.value !== 'function'){
                        throw new Error('The scroll listener is not a function');
                    }
                    handleListeners(el, binding.value, binding.oldValue);
                },
                inserted: function(el, binding){
                    //To do, check whether el is scrollable and give warn message if it's not'
                },
                update: function(el, binding){
                    if(binding.value === binding.oldValue){
                        return;
                    }
                    if(!binding.value || typeof binding.value !== 'function'){
                        throw new Error('The scroll listener is not a function');
                    }
                    handleListeners(el, binding.value, binding.oldValue);
                },
                unbind: function(el, binding){
                    if(binding.value && typeof binding.value === 'function'){
                        if(el.removeEventListener){
                            el.removeEventListener('scroll', binding.value);
                        }else{
                            el.detachEvent('onscroll', binding.value);
                        }
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