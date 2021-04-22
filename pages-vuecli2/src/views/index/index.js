import Vue from 'vue'
import IndexApp from './IndexApp.vue'
// import router from './router'
// import store from './store'


Vue.config.productionTip = false
new Vue({
//   router,
//   store,
  render: h => h(IndexApp)
}).$mount('#IndexApp')
