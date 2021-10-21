<template>
  <div>
    <span>default layout</span>
    <AppNavigation />
    <hr>
    <nuxt />
    <hr>
    <footer>
      fotter
    </footer>
  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation.vue'

export default {
  components: {
    AppNavigation
  }
}
</script>