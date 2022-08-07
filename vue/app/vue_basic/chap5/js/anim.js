Vue
  .createApp({
    data(){
      return{
        flag: true
      }
    },
    methods:{
      // ボタンクリックで表示/非表示を切り替え
      onclick(){
        this.flag = !this.flag
      }
    }
  })
  .mount('#app');