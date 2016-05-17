# vue-scroll
scroll directive for [vuejs](https://vuejs.org/)

[![NPM](https://nodei.co/npm/vue-scroll.png?stars&downloads)](https://nodei.co/npm/vue-scroll/)

## Installation
### NPM(recommended)
```
npm install vue-scroll --save
```
    
And it is necessary to import it explicitly
    
```
require('vue-scroll')
```
### Standlone

Simple download and include it in script tag. 

   * [dev-version](http://rawgit.com/wangpin34/vue-scroll/master/lib/vue-scroll.browser.js)
   * [product-version(compressed)](http://rawgit.com/wangpin34/vue-scroll/master/dist/vue-scroll.min.js)

## Usage
It's very simple, just declar in html tags and provide a defined callback - the scroll function below.

In javasript:
```javascript
new Vue({
  el: '#app',
  data: {},
  methods:{
    onScroll:function(e, position){
      this.position = position;
    }
  }
})
```

The function onScroll has two arguments, e is the scroll event object, position is an object which has two properties about the postion of scroll bar:
* scrollTop type:number 
* scrollLeft type:number

In html:
```
<body v-scroll="onScroll">
...
</body>

```



## Example

* [Hello World](http://rawgit.com/wangpin34/vue-scroll/master/sample/index.html)


## LICENSE
MIT
