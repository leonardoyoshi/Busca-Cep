import { routes as login } from '../app1/login'
import { routes as buscacep } from '../app1/buscacep'

const root = [
  {path: '/', redirect: '/login'}
]

export default [ ...root, ...login, ...buscacep ]
