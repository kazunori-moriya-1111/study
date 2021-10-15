<template>
  <div class="alert alert-info">
    <h2>{{ title }}</h2>
    <p ref="msg">{{ message }}</p>
    <button class="btn btn-primary mt-2" v-on:click="doAction">Click</button>  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String,
  },
  data(){
    return {
      message: 'this is sample message',
      title: 'Hello World',
    }
  },
  mounted(){
    this.counter = 0
  },
  methods: {
    doAction(){
      this.counter++
      this.$refs.msg.innerHTML += '<h6>counted: ' + this.counter + '</h6>'
    }
  }
}
</script>
