document.addEventListener("DOMContentLoaded", function(event) {
    Vue.use(vScroll) 

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

  });


