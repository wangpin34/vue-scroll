;(function(undefined){

  var Vue = window.Vue;

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
             callBack = vm[self.expression];
          if(el.addEventListener){
              el.addEventListener('scroll',function(e){
                callBack && callBack(e, { scrollTop: el.scrollTop, scrollLeft: el.scrollLeft});
              });
          }else{
              el.attach('onscroll',function(){
                var e = window.event;
                callBack && callBack(e, { scrollTop: el.scrollTop, scrollLeft: el.scrollLeft});
              });
          }

        },
        update: function (newValue, oldValue) {
          //replace old listener by new listener
          var self = this,
             el = this.el;
          if(el.addEventListener){
              el.removeEventListener('scroll',oldValue);
              el.addEventListener('scroll',function(e){
                newValue && newValue(e, { scrollTop: el.scrollTop, scrollLeft: el.scrollLeft});
              });
          }else {
              el.detachEvent('onscroll',oldValue);
              el.attach('onscroll',function(){
                var e = window.event;
                newValue && newValue(e, { scrollTop: el.scrollTop, scrollLeft: el.scrollLeft});
              });
          }
        },
        unbind: function () {
          var self = this,
               el = this.el,
               vm = this.vm,
               callBack = vm[self.expression];
          if(el.removeEventListener){
            el.removeEventListener('scroll',callBack);
          }else{
            el.detachEvent('onscroll',callBack);
          }     
        }
    });

  }

  Vue.use(vScroll);  
  
})(undefined)

