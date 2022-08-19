Vue.createApp({})
  .component('my-counter',{
    props: ['init'],
    template: `<div>現在の値は、{{ data.current.value }}です
      <input type="button" v-on:click="data.current.value++" value="増やす" /></div>`,
    setup(props, context) {
      // データオブジェクトの準備
      const current = Vue.ref(props.init)
      // コンポーネントを束ねたものを戻り値に
      return {
        data:{
          current
        }
      }
    }
  })
  .mount('#app');