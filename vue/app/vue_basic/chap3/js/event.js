Vue.createApp({
  data(){
    return{
      message: ""
    };
  },
  methods: {
    // nameの値を大文字に変換したものをuppperNameプロパティに設定
    onclick(){
      this.message = new Date().toLocaleString()
    }
  }
}).mount('#app');