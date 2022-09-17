<template>
  <div>
    <input type="button" value="-" v-on:click="minus" />
    {{ count }}
    <input type="button" value="+" v-on:click="plus" />
  </div>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  computed:{
    // 現在のカウントの値を取得
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    minus(){
      this.$store.commit('minus')
    },
    plus(){
      this.$store.commit('plus')
    }
  },
  components: {
    HelloWorld
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
