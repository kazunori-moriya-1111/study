Vue.createApp({
  data() {
    return{
      remaining: '',
      rate:'',
      isShow:false,
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
    // 残金から支払い金額を返却する
    getPaidMoney(){
      if(this.remaining >= 400001){
        return 25000
      }else if(this.remaining >= 300001){
        return 20000
      }else if(this.remaining >= 200001){
        return 15000
      }else if(this.remaining >= 100001){
        return 10000
      }else{
        return 0
      }
    },
    // 残金と利率から利息を返却する
    getInterestMoney(remainMoney){
      return remainMoney * this.ratex / 100 / 12
    }
  }
}).mount('#app');