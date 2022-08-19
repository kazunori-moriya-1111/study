Vue.createApp({
  setup(props, context) {
    // データオブジェクトの準備
    const author = Vue.markRaw({
      name: 'WINGSプロジェクト'
    })
    const book = Vue.reactive({
      title : 'Vue3 実践入門',
      author
    })

    console.log('Vue.isReactive(Vue.reactive(author)):',Vue.isReactive(Vue.reactive(author)))
    console.log('Vue.isRef(book):',Vue.isReactive(book))
    console.log('Vue.isRef(book.author):',Vue.isReactive(book.author))
  }
}).mount('#app');