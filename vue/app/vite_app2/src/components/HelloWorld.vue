<template>
  <div class="alert alert-primary">
    <h1>{{ data.title }}</h1>
    <p class="mt-3 h5">{{ data.msg }}</p>
  </div>
</template>

<script>
import { ref, reactive} from 'vue'

export default {
  props: {
    title: String
  },
  setup(props, context) {
    // dataの定義の代わり
    const data = reactive({
      title: 'HelloWorld',
      msg: 'This is HelloWorld component sample',
    })
    return {
      data
    }
  }
}
</script>