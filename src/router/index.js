import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../main'

Vue.use(VueRouter)

const index = new VueRouter({
  routes: [
    { path: '/', component: Main },
    { path: '/ola/:name', component: Main}
  ]
})

export default index
