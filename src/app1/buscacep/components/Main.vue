<template>
  <div>
    <br/>
    <h2>Busca Cep</h2>
    <div class="form-group">
      <div>
        <div class="form" align="center">
           <TheMask
           id="digitaCep"
           autofocus
           class="form-control"
           v-model="cepInput"
           v-on:keyup.native.enter="buscaCep"
           placeholder="Informe o cep"
           mask="##.###-###"
           :masked=false>
           </TheMask>
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
    <a href="#" id="historicoCeps" @click="setCep()">Exibir ceps buscados</a><br/>
    <ol>
      <!-- eslint-disable-next-line -->
      <li v-for="l in list" class="row" style="color: #0e5bbd; margin-left: -30px">CEP: {{ l.enderecos.cep }}</li>
    </ol>
  </div>
</template>

<script>
import http from '@/http'
import {TheMask} from 'vue-the-mask'
import { mapActions } from 'vuex'

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
      pais: '',
      list: []
    }
  },

  methods: {
    ...mapActions(['getCep', 'saveCep']),

    buscaCep: function () {
      http.get(`http://18.217.45.84/cep/busca?cep=${this.cepInput}`, {
        headers: {
          'authorization': localStorage.getItem('token')
        }
      })
        .then(data => {
          var dados = data.data.data
          console.log(dados)
          this.cepNum = dados.cep
          this.endereco = dados.endereco
          this.bairro = dados.bairro
          this.cidade = dados.cidade
          this.estado = dados.estado
          this.uf = dados.uf
          this.pais = dados.pais
          this.saveCep(dados)
        })
        .catch(error => {
          console.log(error)
          alert('Cep não encontrado!')
        })
    },

    setCep: function () {
      this.getCep()
        .then((result) => {
          this.list = result
        })
        .catch(error => {
          console.log(error)
          alert('Erro ao exibir os ceps')
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
