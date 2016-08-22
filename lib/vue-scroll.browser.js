;(function(undefined){

  var Vue = window.Vue;

  //Common part start

  if(!Vue) {
    throw new Error('Please load vue.js before install current plugin');
  }

  var vScroll = {};

  vScroll.install = function(Vue,options){

    Vue.directive('scroll', {
        bind: function () {
          console.log('prepare for bind vue-scroll on specify dom');
        },
        update: function (newListener, oldListener) {
          //replace old listener by new listener
          var self = this,
             el = this.el;
          if(!newListener || typeof newListener !== 'function'){
            throw new Error('onScroll listener is not a valid function');
          }
          if(el==document.body){
            document.onscroll = function(e){
              newListener && newListener(e, { scrollTop: document.body.scrollTop, scrollLeft: document.body.scrollLeft});
            }
          }else if(el.addEventListener){
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
          if(el==document.body){
            document.onscroll = null;
          }else if(el.removeEventListener){
            el.removeEventListener('scroll',listener);
          }else{
            el.detachEvent('onscroll',listener);
          }     
        }
    });

  }

  //Common part start

  Vue.use(vScroll);  
  
})(undefined)

