<template>
  <div>
    <br/>
    <h2>Busca Cep</h2>
    <div class="form-group">
      <div>
        <div class="form" align="center">
          <input id="digitaCep" class="form-control" v-model="cepInput" placeholder="Informe o cep" v-on:keyup.enter="buscaCep">
        </div>
        <button type="submit" @click="buscaCep" class="btn btn-success">Buscar</button>
      </div>
      <div><h2>CEP: {{ cepNum }} </h2></div>
      <div><h5>Endereço: {{ endereco }} </h5></div>
      <div><h5>Complemento: {{ complemento }}</h5></div>
      <div><h5>Bairro: {{ bairro }}</h5></div>
      <div><h5>Cidade: {{ cidade }}</h5></div>
      <div><h5>Estado: {{ estado }}</h5></div>
      <div><h5>UF: {{ uf }}</h5></div>
      <div><h5>País: {{ pais }}</h5></div>
    </div>
  </div>
</template>

<script>
import http from '@/http'

export default {

  data () {
    return {
      cepInput: '',
      cepNum: '',
      endereco: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
      uf: '',
      pais: ''
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
          console.log(dados.data)
          this.cepNum = dados.data.cep
          this.endereco = dados.data.endereco
          this.bairro = dados.data.bairro
          this.cidade = dados.data.cidade
          this.estado = dados.data.estado
          this.uf = dados.data.uf
          this.pais = dados.data.pais
        })
        .catch(function (error) {
          console.log(error)
          alert('Cep não encontrado!')
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
