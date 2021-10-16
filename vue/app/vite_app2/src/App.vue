<template>
  <div id="app">
    <HelloJSX v-bind:title="v_bind_title" msg="属性で指定したメッセージ"/>
    <button v-on:click="doAdd">増殖</button>
  </div>
</template>

<script>
import HelloJSX from './components/helloJSX.jsx'

export default {
  name: 'app',
  components: {
    HelloJSX
  },
  data() {
    return {
      v_bind_title : "v_bind_title"
    }
  },
  methods:{
    doAdd(){
      this.v_bind_title += "abc"
    }
  }
}
</script>
