<template>
  <div id="app">
    <HelloWorld title="slot">
      <p>*** this is default text ***</p>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>
