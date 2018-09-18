import http from '@/http'

const endPoint = '18.217.45.84/cep/busca?cep='

export const getCep = (payload) => {
  return http.get(`${endPoint}${payload}`)
    .then(response => response.data)
    .catch(error => Promise.reject(error))
}
