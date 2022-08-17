Vue.createApp({
  setup(props, context) {
    // データオブジェクトの準備
    const book = Vue.reactive({
      title: Vue.ref('Vue.js 3実践入門'),
      author:{
        name: Vue.ref('WINGSプロジェクト')
      },
      memo:[
        Vue.ref('Javascriptフレームワーク'),
        Vue.ref('Vue CLIやVuexを使用したアプリ開発')
      ]
    })
    console.log('Vue.isRef(book.memo[0]):',Vue.isRef(book.memo[0]))
    console.log('book.memo[0]:',book.memo[0])
    console.log('book.memo[0].value:',book.memo[0].value)
  }
}).mount('#app');