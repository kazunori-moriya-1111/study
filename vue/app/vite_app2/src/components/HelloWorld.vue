<template>
  <div class="alert alert-primary">
    <h1>{{ data.title }}</h1>
    <p class="mt-3 h5">{{ $store.state.message }}</p>
    <hr>
    <!-- eslint-disable vue/use-v-on-exact -->
    <div class="btn btn-secondary" @click="$store.commit('count')" @click.shift="$store.commit('reset')">
    <!-- eslint-enable -->
      <a class="h5">
        clickd: {{ $store.state.counter }}
      </a>
    </div>
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