import Vue from 'vue'
import TestApp from './TestApp.vue'
import router from '@/router'
import store from '@/store'
import axios from 'axios'

Vue.prototype.$axios= axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(TestApp)
}).$mount('#TestApp')
