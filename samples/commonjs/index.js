var Vue = require('vue');
var vueScroll = require('../../index.js')

Vue.use(vueScroll) 

new Vue({
  el: '#app',
  data: function(){
  	var max = 50,
  		msgs = [],
  		msg = 'Order';
  	while( max -- > 0 ){
  		msgs.push(msg);
  	}
  	return {
  		msgs : msgs,
      position: {scrollTop: 0, scrollLeft: 0}
  	}
  },
  methods:{
  	onScroll:function(e, position){
  		this.position = position;
  	}
  }
})

