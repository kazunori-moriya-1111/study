<template>
  <div class="alert alert-primary">
    <h1>{{ data.title }}</h1>
    <p class="mt-3 h5">{{ $store.state.message }}</p>
  </div>
</template>

<script>
import { ref, reactive} from 'vue'

export default {
  setup(props) {
    const data = reactive({
      title: 'Vuex',
    })
    return {
      data
    }
  }
}
</script>