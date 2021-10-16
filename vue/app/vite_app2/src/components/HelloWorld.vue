<template>
  <div class="alert alert-primary">
    <h1>{{ title }}</h1>
    <pre v-on:click="clear">{{ message }}</pre>
    <hr>
    <div><input type="text" v-on:keydown="type" class="form-control"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      title: 'Event',
      message: '',
    }
  },
  methods: {
    type(event) {
      console.log(event)
      this.message += event.key + ' '
      if (event.key == "Escape") {
        this.message = ''
      }
      event.target.value = ''
    },
    clear() {
      this.message = ''
    }
  },
}
</script>

<style>
pre {
  font-size:16pt;
  line-height: 1.25;
}
div.out {
  padding: 0px;
  background-color: #eee;
  width: 300px;
  height: 200px;
}
div.mid {
  padding: 0px;
  background-color: #ddd;
  width: 200px;
  height: 170px;
}
div.in {
  padding: 0px;
  background-color: #ccc;
  width: 100px;
  height: 140px;
}
</style>