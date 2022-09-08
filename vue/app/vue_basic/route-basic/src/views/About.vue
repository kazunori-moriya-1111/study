<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button v-on:click="onclick">トップへ</button>
  </div>
</template>

<script>
export default {
  // ボタンクリックで「/」に移動
  onclick(){
    this.$router.push('/')
  }
}
</script>
>