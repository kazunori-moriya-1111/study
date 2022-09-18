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
import { useStore } from 'vuex'
import { computed } from "vue";

export default {
  name: 'App',
  // setup(){
  //   const store = useStore()
  //   const count = computed(() => store.state.count)
  //   const minus = () => { store.commit('minus') }
  //   const plus = () => { store.commit('plus') }
  //   return { count, minus, plus }
  // },
  components: {
    HelloWorld
  }
}
</script>

<script setup>
  const store = useStore()
  const count = computed(() => store.state.count)
  const minus = () => { store.commit('minus') }
  const plus = () => { store.commit('plus') }
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
