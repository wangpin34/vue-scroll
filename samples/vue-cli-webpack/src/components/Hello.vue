<template>
  <div class="hello">
    <router-link to="/about">about</router-link>
    <h5>Orders</h5>
    <ol v-scroll:throttle="{fn: onScroll, throttle: 500 }">
      <li v-for="(msg, index) of msgs">{{msg}} - {{index}}</li>
    </ol>
    <div id="ob">scrollTop:{{position.scrollTop}}</div>
  </div>
</template>

<script>
export default {
  name: 'hello',
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  width: 500px;
  height: 700px;
  margin: 2rem auto;

  position: relative;

  background-color: #009688;
  color: #E0F2F1;

  border-radius: 2px;

  text-align: left;
}

.hello h5 {
  width: 100%;
  height: 100px;
  padding: 0 2%;
  margin: 0;
  line-height: 100px;

  font-size: 3rem;
}

.hello ol {
  width: 100%;
  height: 600px;
  padding: 0;
  margin: 0;

  overflow: auto;

  list-style: none;
  border-radius: 5px;

  background-color: #E0F2F1;
  color: #009688;

  font-size: 1.5rem;
}

.hello ol li {
  background: #fff;
  width: 90%;
  height: 5rem;
  margin: 0 auto;
  padding: 0 5%;
  line-height: 5rem;
  border-bottom: 1px dotted #009688;
  border-radius: 2px;
}

#ob {
  width: 200px;
  height: 100px;
  line-height: 100px;
  vertical-align: middle;
  text-align: left;

  position: absolute;
  right: 0;
  top: 0;

  padding: .1rem .3rem;

  font-size: 1.5rem;
}
</style>
