import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/hello/Hello'
Vue.use(Router)

export default new Router({
  routes: [ {
    path: '/hello',
    name: 'hello',
    component: hello
  }]
})