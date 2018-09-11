<template>
  <div id="app">
    <RootHeader />
      <div class="container">
          <HeaderComponent/>
          <main>
            <router-view/>
          </main>
          <FooterComponent />
      </div>
  </div>
</template>

<script>
import RootHeader from './components/root/login.vue'
import HeaderComponent from './shared/Header'
import FooterComponent from './shared/Footer'

export default {
  name: 'App',
  components: {
    RootHeader,
    HeaderComponent,
    FooterComponent
  }
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
