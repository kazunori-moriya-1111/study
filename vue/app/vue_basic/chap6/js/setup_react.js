Vue.createApp({})
  .component('my-counter',{
    props: ['init'],
    template: `<div>現在の値は、{{ data.current }}です
      <input type="button" v-on:click="onclick" value="増やす" /></div>`,
    setup(props, context) {
      // データオブジェクトの準備
      const data = Vue.reactive({
        current: props.init,
      })
      // イベントハンドラーの定義
      const onclick = () => {
        data.current++
      }
      // コンポーネントを束ねたものを戻り値に
      return {
        data,
        onclick
      }
    }
  })
  .mount('#app');