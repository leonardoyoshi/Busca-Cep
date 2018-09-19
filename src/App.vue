<template>
  <div id="app">
    <RootHeader />
      <div class="container">
          <HeaderComponent/>
          <main>
            <router-view />
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
body{
  margin: 0
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
}
</style>
