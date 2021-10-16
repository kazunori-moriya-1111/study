<template>
  <div id="app">
    <HelloWorld>
      <p>Begin!..</p>
      <template v-slot:first>
        *** First message ***
      </template>
      <p>..Middle..</p>
      <template v-slot:second>
        *** Second message ***
      </template>
      <p>..End</p>
      <template v-slot:third>
        *** Third message ***
      </template>
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
