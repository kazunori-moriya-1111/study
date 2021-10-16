<template>
  <div id="app">
    <HelloWorld title="slot">
      <li class="list-group-item" v-for="obj in slotobjs" v-bind:key="obj.name">{{ obj.name }} ({{ obj.mail }})</li>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      slotobjs: [
        {name:'Taro', mail:'taro@yamada'},
        {name:'Hanako', mail:'hanako@flower'},
        {name:'Jiro', mail:'jiro@ika'},
      ],
    }
  }
}
</script>
