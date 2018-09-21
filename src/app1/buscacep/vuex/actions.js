export const saveCep = (context, payload) => {
  let items = []
  let storage = localStorage.getItem('cepsBuscados')
  let cepsBuscados = JSON.stringify(payload)

  if (storage !== null) {
    items.push(storage)
  }

  items.push(`{"enderecos": ${cepsBuscados}}`)
  localStorage.setItem('cepsBuscados', items)
  alert('Cep saved on Storage')
  return true
}

export const getCep = (context, payload) => {
  let storage = localStorage.getItem('cepsBuscados')
  return JSON.parse(`[${storage}]`)
}
