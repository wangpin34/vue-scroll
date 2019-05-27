# vue-scroll

scroll directive for [vuejs 2.0](https://vuejs.org/v2/guide/)

For vue 1.x, please use vue-scroll@1.0.4. Currently its code is in master branch.

[![NPM](https://nodei.co/npm/vue-scroll.png?stars&downloads)](https://nodei.co/npm/vue-scroll/)

[![](https://img.shields.io/travis/wangpin34/vue-scroll.svg?style=flat-square)](https://travis-ci.org/wangpin34/vue-scroll)
[![Coveralls](https://img.shields.io/coveralls/wangpin34/vue-scroll.svg?style=flat-square)](https://coveralls.io/github/wangpin34/vue-scroll)


[![npm package](https://img.shields.io/npm/v/vue-scroll.svg?style=flat-square)](https://www.npmjs.org/package/vue-scroll)
[![NPM downloads](http://img.shields.io/npm/dm/vue-scroll.svg?style=flat-square)](https://npmjs.org/package/vue-scroll)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/wangpin34/vue-scroll.svg)](http://isitmaintained.com/project/wangpin34/vue-scroll "Average time to resolve an issue")

## Installation
### NPM(recommended)
```
npm install vue-scroll --save
```
### Standalone
**Standalone bundle is not support on latest v2.1.0 currently**

Simple download from [releases](https://github.com/wangpin34/vue-scroll/releases) and include it in script tag.

## Get started

```javascript
import Vue from 'vue'
import vuescroll from 'vue-scroll'

Vue.use(vuescroll)
```

Directive v-scroll then can be used in any of your Component.

```App.vue
<template>
  <ul v-scroll="onScroll">
    <li></li>
  </ul>
</template>
...
```

Method onScroll receives two arguments once scroll event is fired,

* e - event
* position - Object contains scrolling data
  - scrollTop Number
  - scrollLeft Number

## Advanced
throttle and debounce are supported since v2.1.0, you can enable it as global configurations like:

```javascript
Vue.use(vuescroll, {throttle: 600})
//Or
Vue.use(vuescroll, {debounce: 600})
```

Override global configurations like

```html
<ul v-scroll:throttle="{fn: onScroll, throttle: 500 }">
```
```html
<ul v-scroll:debounce="{fn: onScroll, debounce: 500 }">
```

## Demo
You please try the demo hosted on codesandbox: https://codesandbox.io/s/vuescroll-demo-orders-view-f4d3d?fontsize=14


## LICENSE
MIT
