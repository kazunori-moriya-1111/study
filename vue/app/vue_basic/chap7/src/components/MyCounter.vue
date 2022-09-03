<template>
  <div>現在値は{{ current }}です
    <input type="button" v-on:click="onclick" value="増やす" />
  </div>
</template>

<!-- <script>
import useCounter from '../composables/useCounter'

export default {
  name: 'MyCounter',
  props: ['init'],
  setup(props) {
    // コンポジション関数からカウンター機能を取得
    const{ current, onclick } = useCounter(props.init)
    return{
      current,
      onclick
    }
    
  },
}
</script> -->
// setup属性を使用した記述
<script setup>
import {defineProps} from 'vue'
import useCounter from '../composables/useCounter'

const props = defineProps(['init'])
const { current, onclick } = useCounter(props.init)
</script>