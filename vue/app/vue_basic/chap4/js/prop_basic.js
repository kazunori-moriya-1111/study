Vue.createApp({})
  .component('my-hello',{
    // props: [ 'yourName' ],
    props: {
      yourName:{
        type: String,
        required: true
      }
    },
    template: `<div>こんにちは、{{ yourName }}</div>`,
  })
  .mount('#app');