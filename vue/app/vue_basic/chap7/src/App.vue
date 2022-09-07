<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <MyCounter init='0'/>
    <p class="highlight">こんにちは、vue.js!</p>
    <input type="button" value="変更" @click="onclick" />
    <!-- <MyChild>
      <span class="highlight">スロットを用いて親コンポーネントから子コンポーネントへ差し込み</span>
    </MyChild> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MyChild from './components/MyChild.vue'
// import MyCounter from './components/MyCounter.vue'

export default {
  name: 'App',
  data(){
    return{
      color: 'lightBlue'
    }
  },
  methods:{
    onclick(){
      if (this.color === 'lightBlue'){
        this.color = 'yellow'
      }else{
        this.color = 'lightBlue'
      }
    }
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
:global(p) {
  border: 1px solid red;
  background-color: v-bind(color)
}
</style>
