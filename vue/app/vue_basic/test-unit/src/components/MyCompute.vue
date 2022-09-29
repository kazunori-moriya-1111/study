<template>
  <div id="email">{{ localEmail }}</div>
</template>

<script>
  export default({
    // 文字列型のemail属性
    props:{
      email: String
    },
    computed:{
      // メールアドレスの「@」以前の取得
      localEmail: function(){
        return this.email.split('@')[0].toLowerCase();
      }
    }
  })
</script>