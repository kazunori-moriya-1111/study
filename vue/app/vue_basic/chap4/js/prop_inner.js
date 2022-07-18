Vue.createApp({})
  .component('my-counter',{
    props: ['init'],
    template: `<div>現在の値は、{{ current }}です
      <input type="button" v-on:click="onclick" value="増やす" /></div>`,
    // プロパティの値を元に、データオブジェクトを定義
    data() {
      return{
        current: this.init
      }
    },
    methods: {
      // クリック時にcurrentプロパティをインクリメント
      onclick(){
        this.current++
      }
    }
  })
  .mount('#app');