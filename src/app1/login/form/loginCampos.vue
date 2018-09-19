<template>
  <div class="form-group">
    <div>
      <div class="form" align="center">
        <label>Login</label>
        <input type="login" v-model="user.login" class="form-control" placeholder="Login...">
      </div>
       <div class="form-group"><br/>
        <label>Password</label>
       <input type="password" v-model="user.password" class="form-control" placeholder="Senha..." v-on:keyup.enter="doLogin"><br/>
       </div>
      <button type="submit" @click="doLogin" class="btn btn-outline-success">Enviar</button>
    </div>
  </div>
</template>

<script>
import http from '@/http'

export default {
  data () {
    return {
      user: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    doLogin () {
      let headers = {'Content-Type': 'application/json'}
      let data = {'grupo': 'bredas', 'login': this.user.login, 'senha': this.user.password}
      var url = 'http://18.217.45.84/auth/'

      http.post(url, data, headers)
        .then((response) => {
          console.log(response.data)
          console.log(response.status)
          var auth = response.data
          console.log(auth.data.access_token)
          localStorage.setItem('token', auth.data.access_token)
          this.$router.push('/buscacep')
        })
        .catch(function (error) {
          console.log(error)
          alert('Usuário ou senha incorretos!')
        })
    }
  }
}
</script>
<style lang="css">
.btn {
  padding-left: 40px;
  padding-right: 40px;
  margin-bottom: 200px;
}
</style>
