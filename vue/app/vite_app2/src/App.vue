<template>
  <div id="app">
    <HelloWorld title="Composition API" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloJSX from './components/helloJSX.jsx'


export default {
  name: 'app',
  components: {
    HelloWorld,
    HelloJSX
  },
}
</script>
