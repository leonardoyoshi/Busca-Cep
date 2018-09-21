import store from '../vuex'

const isLogin = route => route.path.indexOf('/login') !== -1
const isToken = store.getters.isToken

export default (to, from, next) => {
  if (!isLogin(to) && !isToken) {
    next('/login')
  } else if (isLogin(to) && isToken) {
    next('/buscacep')
  } else {
    next()
  }
}
