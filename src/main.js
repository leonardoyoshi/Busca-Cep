import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './vuex'

Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
