<template>
  <div>
    <br/>
    <h2>Busca Cep</h2>
    <div class="form-group">
      <div>
        <div class="form" align="center">
           <TheMask id="digitaCep" autofocus class="form-control" v-model="cepInput" v-on:keyup.native.enter="buscaCep" placeholder="Informe o cep" mask="##.###-###" :masked=false></TheMask>
        </div>
        <button style="width: 30%" type="submit" @click="buscaCep" class="btn btn-success">Buscar</button>
      </div>
      <div class="row"><h2 style="color: #0e5bbd; margin-left: 30px">CEP:</h2> <h2>{{ cepNum }} </h2></div>
      <div class="row"><h6 style="color: #0e5bbd; margin-left: 30px">Endereço:</h6> <h6>{{ endereco }} </h6></div>
      <div class="row"><h6 style="color: #0e5bbd; margin-left: 30px">Complemento:</h6> <h6>{{ complemento }}</h6></div>
      <div class="row"><h6 style="color: #0e5bbd; margin-left: 30px">Bairro:</h6> <h6>{{ bairro }}</h6></div>
      <div class="row"><h6 style="color: #0e5bbd; margin-left: 30px">Cidade:</h6> <h6>{{ cidade }}</h6></div>
      <div class="row"><h6 style="color: #0e5bbd; margin-left: 30px">Estado:</h6> <h6>{{ estado }}</h6></div>
      <div class="row"><h6 style="color: #0e5bbd; margin-left: 30px">UF:</h6> <h6>{{ uf }}</h6></div>
      <div class="row"><h6 style="color: #0e5bbd; margin-left: 30px">País:</h6> <h6>{{ pais }}</h6></div>
    </div>
  </div>
</template>

<script>
import http from '@/http'
import {TheMask} from 'vue-the-mask'

export default {

  components: {TheMask},

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
  margin: 20px;
  margin-top: 40px;
  margin-bottom: 50px;
}

</style>
