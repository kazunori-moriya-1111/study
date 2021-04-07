<template>
  <div class="alert alert-primary">
    <h1>{{ title }}</h1>
    <p ref="msg">{{ message }}</p>
    <button class="btn btn-primary" v-on:click="doAction">Click</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return{
      title: 'HelloWorld',
      message: 'This is sample message.',
    }
  },
  mounted(){
    this.counter = 0
  },
  methods:{
    doAction(){
      this.counter++
      this.$refs.msg.innerHTML += '<h6>counted: ' + this.counter + '</h6>'
    }
  }
}
</script>
