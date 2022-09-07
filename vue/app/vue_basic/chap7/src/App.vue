<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <MyCounter init='0'/>
    <p v-bind:class="my.highlight">こんにちは、vue.js!</p>
    <!-- <MyChild>
      <span class="highlight">スロットを用いて親コンポーネントから子コンポーネントへ差し込み</span>
    </MyChild> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MyChild from './components/MyChild.vue'
// import MyCounter from './components/MyCounter.vue'
import { useCssModule } from 'vue'

export default {
  name: 'App',
  setup(){
    // cssモジュールを有効化
    const my = useCssModule()
    return{
      my
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

<style module>
.highlight {
  border: 1px solid red;
  background-color: green
}
</style>