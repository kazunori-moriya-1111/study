Vue.createApp({
  data() {
    return{
      remaining: '',
      rate:'',
      ishow:false,
    };
  },
  methods: {
    // クリック時に関数をまとめて動作
    onclick(){
      this.toInt()
      // 残金と利率が正常に数値変化できていれば後続処理を実施する
      if(!this.remaining || !this.rate){ return; }
      console.log("後続処理実施")
    },
    // 数値変換
    toInt(){
      // todo 空文字だと0へ変換されるバグ
      this.remaining = Number(this.remaining)
      // 残金が変換できたか判定
      if(isNaN(this.remaining)){
        this.remaining = ''
      }
      this.rate = Number(this.rate)
      // 利率が変換できたか判定
      if(isNaN(this.rate)){
        this.rate = ''
      }
    },
    // table作成
  }
}).mount('#app');