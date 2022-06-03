Vue.createApp({
  data: function(){
    return{
      current: new Date().toLocaleString()
    };
  },
  // 算出プロパティ経由で乱数を取得
  computed: {
    randomc: function(){
      return Math.random();
    }
  },
  methods:{
    // クリック時に処理を実行
    onclick: function(){
      this.current = new Date().toLocaleString();
    },
    // メソット経由で乱数を取得
    randomm: function(){
      return Math.random();
    }
  }
}).mount('#app');