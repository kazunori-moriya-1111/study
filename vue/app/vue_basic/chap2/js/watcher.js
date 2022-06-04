Vue.createApp({
  data(){
    return{
      // 入力値
      name: "",
      // 表示する値
      upperName: ""
    };
  },
  // 遅延処理用のdelayFuncメソッドを準備
  created() {
    this.delayFunc = _.debounce(this.getUpper, 2000);
  },
  // nameプロパティが変化した時にdelayFuncメソッドを呼び出し
  watch: {
    name(newValue, oldValue) {
      this.delayFunc();
    }
  },
  methods: {
    // nameの値を大文字に変換したものをuppperNameプロパティに設定
    getUpper(){
      this.upperName = this.name.toUpperCase()
    }
  }
}).mount('#app');