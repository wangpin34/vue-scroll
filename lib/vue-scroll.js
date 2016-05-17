var Vue = require('vue');


//Common part start

  if(!Vue) {
    throw new Error('Please load vue.js before install current plugin');
  }

  var vScroll = {};

  vScroll.install = function(Vue,options){

    Vue.directive('scroll', {
        bind: function () {
          var self = this,
             el = this.el,
             vm = this.vm,
             listener = vm[self.expression];
          if(el.addEventListener){
              el.addEventListener('scroll',function(e){
                listener && listener(e, { scrollTop: el.scrollTop, scrollLeft: el.scrollLeft});
              });
          }else{
              el.attach('onscroll',function(){
                var e = window.event;
                listener && listener(e, { scrollTop: el.scrollTop, scrollLeft: el.scrollLeft});
              });
          }

        },
        update: function (newListener, oldListener) {
          //replace old listener by new listener
          var self = this,
             el = this.el;
          if(el.addEventListener){
              el.removeEventListener('scroll',oldListener);
              el.addEventListener('scroll',function(e){
                newListener && newListener(e, { scrollTop: el.scrollTop, scrollLeft: el.scrollLeft});
              });
          }else {
              el.detachEvent('onscroll',oldListener);
              el.attach('onscroll',function(){
                var e = window.event;
                newListener && newListener(e, { scrollTop: el.scrollTop, scrollLeft: el.scrollLeft});
              });
          }
        },
        unbind: function () {
          var self = this,
               el = this.el,
               vm = this.vm,
               listener = vm[self.expression];
          if(el.removeEventListener){
            el.removeEventListener('scroll',listener);
          }else{
            el.detachEvent('onscroll',listener);
          }     
        }
    });

  }

  Vue.use(vScroll);

//Common part end

module.exports = vScroll;
  

