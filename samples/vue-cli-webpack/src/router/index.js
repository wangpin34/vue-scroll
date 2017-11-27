import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import About from 'components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
