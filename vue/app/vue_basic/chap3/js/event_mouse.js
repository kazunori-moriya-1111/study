Vue.createApp({
  data(){
    return{
      path: "https://www.web-deli.com/image/linkbanner_l.gif"
    };
  },
  methods: {
    // 画像にマウスポインターが乗った時
    onmouseenter(){
      this.path = "https://www.web-deli.com/image/home_chara.gif"
    },
    // 画像からマウスポインターが離れた時
    onmouseleave(){
      this.path = "https://www.web-deli.com/image/linkbanner_l.gif"
    }
  }
}).mount('#app');