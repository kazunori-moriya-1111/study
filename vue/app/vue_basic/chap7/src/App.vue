<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- eslint-disable-next-line -->
  <MyCounter init='0'/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyCounter from './components/MyCounter.vue'

export default {
  name: 'App',
  components: {
    MyCounter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
