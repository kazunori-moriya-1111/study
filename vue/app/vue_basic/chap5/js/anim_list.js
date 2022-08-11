Vue
  .createApp({
    data(){
      return{
        todo: '',
        // todoリスト（初期値）
        items: [
          'A書籍',
          'X記事',
          '請求書',
          'メンバー面接'
        ]
      }
    },
    methods:{
      // 新たに入力された項目の配列を先頭に追加
      onadd(){
        this.items.unshift(this.todo);
        this.todo = ""
      },
      // 指定された項目を配列から除外
      onremove(){
        this.items = this.items.filter(value => value !== this.todo)
        this.todo = ""
      }
    }
  })
  .mount('#app');