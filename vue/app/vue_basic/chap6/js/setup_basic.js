Vue.createApp({})
  .component('my-counter',{
    props: ['init'],
    template: `<div>現在の値は、{{ current }}です
      <input type="button" v-on:click="onclick" value="増やす" /></div>`,
    setup(props, context) {
      // データオブジェクトの準備
      const current = Vue.ref(props.init)
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