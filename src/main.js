import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.use(BootstrapVue)

// Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
