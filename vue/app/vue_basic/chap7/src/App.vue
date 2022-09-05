<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <MyCounter init='0'/>
    <p>こんにちは、vue.js！</p>
  </div>
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

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
p {
  border: 1px solid red;
  background-color: yellow;
}
</style>
