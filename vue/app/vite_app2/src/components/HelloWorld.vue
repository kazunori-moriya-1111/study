<template>
  <div class="alert alert-primary">
    <h1>{{ title }}</h1>
    <p>{{ data.msg }} ({{ data.count }})</p>
    <input type="number" v-model="data.vModelValue">
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  props: {
    title: String
  },
  setup(props) {
    // dataの定義の代わり
    const data = ref({
      msg: 'This is ref-value!',
      count: 0,
      vModelValue: 0
    })
    setInterval(() => {
      data.value.count++
      data.value.count *= data.value.vModelValue
    },500)
    return {
      data
    }
  }
}
</script>