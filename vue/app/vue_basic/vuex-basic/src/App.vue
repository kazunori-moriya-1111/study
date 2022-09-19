<template>
  <div>
    <p>書籍は全部で{{bookCount}}冊あります</p>
    <ul v-for="b of getBookByPrice(2500)" v-bind:key="b.isbn">
      <li>{{ b.title }} {{ b.price }}<br />ISBN:{{ b.isbn }}</li>
    </ul>
  </div>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: mapGetters(['bookCount', 'getBookByPrice']),
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
