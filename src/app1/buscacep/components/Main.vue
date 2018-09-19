<template>
  <div>
    <div>{{ cepList }}</div>
    <br/>
    <h2>Busca Cep</h2>
    <div class="form-group">
      <div>
        <div class="`form" align="center">
          <input id="digitaCep" class="form-control" v-model="cepInput" placeholder="Digite o cep..." v-on:keyup.enter="buscaCep">
        </div>
        <button type="submit" @click="buscaCep" class="btn btn-outline-success">Buscar</button>
      </div>
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
  margin-top: 5%;
}

.btn{
  padding-left: 40px;
  padding-right: 50px;
  margin: 20px;
  width: 30%;
  margin-top: 40px;
  margin-bottom: 100px;
}
</style>
