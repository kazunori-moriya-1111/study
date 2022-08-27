Vue.createApp({
  data() {
    return{
      remaining: '',
      rate:'',
      isShow:false,
      data:[
        {
          ym: '2022/09',
          paid: 30000,
          interest: 3000,
          remaining: 50000,
        },
        {
          ym: '2022/10',
          paid: 40000,
          interest: 4000,
          remaining: 40000,
        }
      ]
    };
  },
  methods: {
    // テストデータ入力用関数
    insertTestData(){
      this.remaining = 500000
      this.rate = 18
    },
    // クリック時に関数をまとめて動作
    onclick(){
      this.toInt()
      this.createTable()
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
    // tableで表示するデータ作成
    createTable(){
      this.isShow = true
      const date = new Date()
      const startMonth = date.getMonth() + 2
      const startYear = date.getFullYear()
      var remainMoney = this.remaining
      var PaidMoney = this.getPaidMoney(remainMoney)
      var interestMoney = this.getInterestMoney(remainMoney)
      // 残金を更新
      for (let i = 1; i < 10; i++){
        remainMoney += interestMoney
        remainMoney -= PaidMoney
        console.log("残金",remainMoney)
        console.log("利息",interestMoney)
        console.log("支払い金額",PaidMoney)
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
      }else if(remainMoney >= 100001){
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