Vue.createApp({
  methods: {
    // クリック次にイベントオブジェクトをログに出力
    onclick(e){
      console.log(e)
    }
  }
}).mount('#app');