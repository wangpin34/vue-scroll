// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuescroll from 'vue-scroll'
import App from './App'
import router from './router'

Vue.use(vuescroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

//Disable dropped file from opening in window
  //https://github.com/electron/electron/issues/908
// document.addEventListener('drop', function(e) {
//   e.preventDefault();
//   e.stopPropagation();
// });
// document.addEventListener('dragover', function(e) {
//   e.preventDefault();
//   e.stopPropagation();
// });
//Disable context menu
document.addEventListener('contextmenu', event => {
  event.preventDefault();
  event.stopPropagation();
});
//Disable double click selection
document.addEventListener('mousedown', e => {
  e.preventDefault();
})
