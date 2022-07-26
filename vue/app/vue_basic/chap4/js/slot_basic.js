Vue.createApp({})
  .component('my-hello',{
    template: `<div>こんにちは、<slot>ゲスト</slot></div>`,
  })
  .mount('#app');