Vue.createApp({})
  .component('my-parent', {
    template:`
      <div id="parent">
        <input type="text" v-model="title" />
        <my-my />
      </div>
    `,
    setup(props) {
      const title = Vue.ref('Vue js実践入門')
      // Provide値の登録
      Vue.provide('title', Vue.readonly('title'))
      return{
        title
      }
    },
  })
  .component('my-my', {
    template:`
      <div id="my">
        <my-child />
      </div>
    `,
  })
  .component('my-child', {
    template:`
      <div id="child">
        {{ title }}
        <input type="button" value="初期値" v-on:click="title = '署名未定'">
      </div>
    `,
    setup(props){
      // Provideの値を取得
      const title = Vue.inject('title')
      return{
        title
      }
    }
  })
  .mount('#app');