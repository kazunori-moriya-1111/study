Vue.createApp({
  data(){
    return{
      path: "./images/wings.jpg"
    };
  },
  methods: {
    // 画像が読み込めない場合のエラー画像表示
    onerror(){
      this.path = "./images/noimage.jpg"
    }
  }
}).mount('#app');