Vue.createApp({})
  .component('my-counter',{
    props: ['init'],
    template: `<div>現在の値は、{{ current }}です
      <input type="button" v-on:click="onclick" value="増やす" /></div>`,
    setup(props, context) {
      const { current, onclick } = useCounter(props.init)
      return {
        current,
        onclick
      }
    }
  })
  .mount('#app');