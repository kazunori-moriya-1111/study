<template>
  <div id="app">
    <HelloWorld title="Composition API" msg="This is Composition API sample"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
}
</script>
