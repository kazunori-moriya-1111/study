Vue.createApp({
  data(){
    return{
      init:0
    }
  },
  methods: {
    // 初期化ボタンで実行（init属性を1〜100の乱数で初期化）
    onclick(){
      this.init = Math.floor(Math.random() * 100) + 1
    }
  }
})
  .component('my-counter',{
    props: ['init'],
    template: `<div>現在の値は、{{ current }}です
      <input type="button" v-on:click="onclick" value="増やす" /></div>`,
    setup(props, context) {
      // データオブジェクトの準備
      const current = Vue.ref(props.init)
      
      // initプロパティの変化を監視
      Vue.watch(
        () => props.init,
        (newV, oldV) => {
          current.value = newV
        }
      )

      // イベントハンドラーの定義
      const onclick = () => {
        current.value++
      }
      
      // コンポーネントを束ねたものを戻り値に
      return {
        current,
        onclick
      }
    }
  })
  .mount('#app');