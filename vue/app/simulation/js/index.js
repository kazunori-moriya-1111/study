// todo 残金利息グラフ化、追加支払い処理
Vue.createApp({
  data() {
    return{
      remaining: '',
      rate: '',
      addPay: 0,
      isShow: false,
      data: []
    };
  },
  methods: {
    // テストデータ入力用関数
    insertTestData(){
      this.remaining = 500000
      this.rate = 18
    },
    onget(){
      console.log(this.data)
    },
    // クリック時に関数をまとめて動作
    onclick(){
      // data変数の初期化
      this.data = []
      this.toInt()
      this.createTable()
      // 残金と利率が正常に数値変化できていれば後続処理を実施する
      if(!this.remaining || !this.rate){ return; }
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
    // tableで表示するデータ作成
    createTable(){
      this.isShow = true
      // 計算に必要な変数を定義
      var date = new Date()
      // 月計算の帳尻を合わせ
      date.setMonth(date.getMonth() + 1)
      var remainMoney = this.remaining
      var PaidMoney = this.getPaidMoney(remainMoney)
      var interestMoney = this.getInterestMoney(remainMoney)
      // 表示するデータを算出してdata変数へ格納
      while(remainMoney > 0){
        remainMoney += interestMoney
        // 残り金額より支払い金額が大きい場合、数値を調整する
        if(remainMoney <= PaidMoney){
          PaidMoney = remainMoney
          remainMoney = 0
        }else{
          remainMoney -= PaidMoney
        }
        // 日付更新
        date.setMonth(date.getMonth() + 1)
        // dataへ格納
        this.data.push(
          {
            ym : date.getFullYear() + "/" + date.getMonth(),
            paid: PaidMoney.toLocaleString(),
            interest: interestMoney.toLocaleString(),
            remaining: remainMoney.toLocaleString(),
            addPay: 0
          }
        )
          // 利息と支払い金額を再定義
          PaidMoney = this.getPaidMoney(remainMoney)
          interestMoney = this.getInterestMoney(remainMoney)
      }
    },
    // 残金から支払い金額を返却する
    getPaidMoney(remainMoney){
      if(remainMoney >= 400001){
        return 25000
      }else if(remainMoney >= 300001){
        return 20000
      }else if(remainMoney >= 200001){
        return 15000
      }else if(remainMoney >= 1){
        return 10000
      }else{
        return 0
      }
    },
    // 残金と利率から利息を返却する
    getInterestMoney(remainMoney){
      return Math.round(remainMoney * this.rate / 100 / 12)
    }
  }
}).mount('#app');