<template>
  <div>{{ page_num }}</div>
</template>

<script>
  export default {
    name: 'PageView',
    props: ['page_num']
  }
</script>