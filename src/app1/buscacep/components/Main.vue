<template>
<h2>Busca Cep</h2>
</template>

<script>
import http from '@/http'

export default {

  mounted () {
    http.get('18.217.45.84/cep/busca?cep=')
      .then(response => response.data)
      .then(data => {
        console.log(data)
        console.log(status)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

</script>
