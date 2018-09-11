import { defaults } from 'lodash' // estou importando a função do loadash
import axios from 'axios' // importando a instância do axios

export const createClient = (options = {}) => axios.create(defaults({}, options))

export default createClient()
