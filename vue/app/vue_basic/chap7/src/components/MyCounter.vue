<template>
  <div>現在値は{{ current }}です
    <input type="button" v-on:click="onclick" value="増やす" />
  <!-- <input type="button" v-on:click="cdOnclick" value="せつぞく" />
  せつぞくしたレスポンス{{ text }} -->
  </div>
</template>

<script>
import useCounter from '../composables/useCounter'
// import conDatabase from '../composables/conDatabase'

export default {
  name: 'MyCounter',
  props: ['init'],
  setup(props) {
    // コンポジション関数からカウンター機能を取得
    const{ current, onclick } = useCounter(props.init)
    // const{ text, cdOnclick } = conDatabase()
    return{
      current,
      onclick,
      // text,
      // cdOnclick
    }
    
  },
}
</script>

<!--// setup属性を使用した記述
<script setup>
import {defineProps} from 'vue'
import useCounter from '../composables/useCounter'
import conDatabase from '../composables/conDatabase'

var aa = ""
const props = defineProps(['init'])
const { current, onclick } = useCounter(props.init)
const { text, cdOnclick } = conDatabase()
aa = text
</script> -->