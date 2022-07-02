Vue.createApp({
  data() {
    return {
      // 属性情報をまとめて定義
      attrs:{
        size: 20,
        maxlength: 100,
        required: true
      }
    }
  }
}).mount('#app');