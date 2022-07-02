Vue.createApp({
  data() {
    return {
      list:[
        '赤パジャマ','青パジャマ','黄パジャマ'
      ]
    }
  },
  methods: {
    onclick(){
      // 配列の先頭の要素を削除
      this.list.shift()
    }
  }
}).mount('#app');