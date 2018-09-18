<template>
  <div>
    <h2>Busca Cep</h2>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label>Digite o Cep</label>
          <input id="digitaCep" class="form-control" v-model="cepInput">
        </div>
        <button type="submit" @click="buscaCep" class="btn btn-success">Buscar</button>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/http'

export default {

  data () {
    return {
      cepInput: ''
    }
  },

  methods: {
    buscaCep: function () {
      http.get(`18.217.45.84/cep/busca?cep=${this.cepInput}`, {
        headers: {
          'authorization': localStorage.getItem('token')
        }
      })
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
}

</script>
