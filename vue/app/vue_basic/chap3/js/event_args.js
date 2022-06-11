Vue.createApp({
  methods: {
    // クリック次にイベントオブジェクトをログに出力
    onclick(message, e){
      console.log(message)
      console.log(e)
    }
  }
}).mount('#app');