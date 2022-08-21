Vue.createApp({})
  .component('my-counter',{
    props: ['init'],
    template: `<div>現在の値は、{{ currentPlus }}です
      <input type="button" v-on:click="onclick" value="増やす" /></div>`,
    setup(props, context) {
      // データオブジェクトの準備
      const current = Vue.ref(props.init)
      // クリック時の関数を定義する
      const onclick = () => {
        current.value++
      }
      // 算術プロパティを定義
      const currentPlus = Vue.computed(
        () => current.value < 50 ? current.value : '50+'
      )
      // 算術プロパティも戻り値に束ねる
      return {
        current,
        currentPlus,
        onclick
      }
    }
  })
  .mount('#app');