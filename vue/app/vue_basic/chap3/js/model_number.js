Vue.createApp({
  data() {
    return {
      temperature: 0
    }
  },
  methods:{
    // 入力値を小数点以下1位に丸め、ログ出力
    onchange(){
      console.log(this.temperature.toFixed(1))
    }
  }
}).mount('#app');