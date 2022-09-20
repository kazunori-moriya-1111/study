<template>
  <div>
    <p>書籍は全部で{{bookCount}}冊あります</p>
    <ul v-for="b of getBookByPrice(2500)" v-bind:key="b.isbn">
      <li>{{ b.title }} {{ b.price }}<br />ISBN:{{ b.isbn }}</li>
    </ul>
  </div>
  <form v-on:submit.prevent="onclick">
    <label for="isbn">ISBN:</label>
    <input type="text" id="isbn" v-model="isbn" /><br />
    <label for="title">書籍:</label>
    <input type="text" id="title" v-model="title" /><br />
    <label for="price">価格:</label>
    <input type="text" id="price" v-model="price" /><br />
    <input type="submit" value="登録" />
  </form>
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
  },
  data(){
    // フォーム内で扱う情報を定義
    return{
      isbn: '',
      title: '',
      price: 0
    }
  },
  methods:{
    // [登録]ボタンクリックでストアに反映
    onclick(){
      this.$store.commit('addBook',{
        book:{
          isbn: this.isbn,
          title: this.title,
          price: this.price
        }
      })
    }
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
