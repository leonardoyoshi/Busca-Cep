<template>
  <div>
    <h2>Busca Cep</h2>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <input id="digitaCep" class="form-control" v-model="cepInput" placeholder="Digite o cep..." v-on:keyup.enter="buscaCep">
        </div>
        <button type="submit" @click="buscaCep" class="btn btn-outline-success">Buscar</button>
      </div>
      <div>{{ cepList }}</div>
    </div>
  </div>
</template>

<script>
import http from '@/http'

export default {

  data () {
    return {
      cepInput: '',
      cepList: ''
    }
  },

  methods: {
    buscaCep: function () {
      http.get(`http://18.217.45.84/cep/busca?cep=${this.cepInput}`, {
        headers: {
          'authorization': localStorage.getItem('token')
        }
      })
        .then(response => response.data)
        .then(data => {
          var dados = data
          this.cepList = dados.data
          console.log(dados.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}

</script>

<style lang="css" scoped>

.form-control{
  width: 100%;
  align-content: center;
  margin-top: 10%;
}

.btn{
  padding-left: 40px;
  padding-right: 50px;
  margin: 20px;
  width: 40%;
  margin-top: 50px;
  margin-bottom: 150px;
}
</style>
