const MyHello = {
  template: `<div>こんにちは、Vue.js</div>`
}
Vue.createApp({
  // コンポーネントをローカル登録
  components: {
    'my-hello': MyHello
  }
}).mount('#app');