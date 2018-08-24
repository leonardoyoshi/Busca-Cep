<template>
  <div id="app">
    <RootHeader></RootHeader>
      <div class="container">
          <!-- <router-view></router-view> -->
          <header class="page-header">
            <h1>Login</h1>
          </header>
      </div>
  </div>
</template>

<script>
// Login
import RootHeader from './components/root/login.vue'

export default {
  name: 'App',
  components: { RootHeader }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
