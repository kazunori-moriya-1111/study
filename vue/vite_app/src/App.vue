<template>
  <HelloWorld v-bind:title="message" v-on:result-event="appAction"/>
  <hr>
  <p>{{ result }}</p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      message:'HELLO',
      result:'no event.',
    }
  },
  methods:{
    appAction(message){
      this.result = '(*** you send:"' + message + '". ***)'
    }
  }
}
</script>
