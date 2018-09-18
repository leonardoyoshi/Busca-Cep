import * as services from '../services'

export const getCep = (payload) => {
  return services.getCep(payload)
    .then(response => {
      return response
    })
    .catch(error => {
      console.log(error)
      return Promise.reject(error)
    })
}
