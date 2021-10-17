<template>
  <div id="app">
    <HelloWorld title="Composition API" msg="This is composition API sample"/>
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
