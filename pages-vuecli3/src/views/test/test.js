import Vue from 'vue'
import TestApp from './TestApp.vue'
import router from './router/testRouter'
import store from '@/store'


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(TestApp)
}).$mount('#TestApp')
