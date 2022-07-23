Vue.createApp({})
  .component('my-parent',{
    data(){
      return{
        title: 'Vue3 実践入門'
      }
    },
    // titleプロパティを更新ためのメソッド
    methods:{
      updateTitle(){
        this.title= 'Vue.js徹底攻略'
      }
    },
    // 更新メソッドも下位のコンポーネントに提供
    provide(){
      return{
        title: Vue.computed(() => this.title),
        updateTitle: this.updateTitle
      }
    },
    template: `<div id="parent">
                <my-my />
              </div>`,
  })
  .component('my-my',{
    template: `<div id="my">
                <my-child />
              </div>`,
  })
  .component('my-child',{
    // 値とその更新手法をまとめて定義
    inject: ['title', 'updateTitle'],
    template: `<div id="child">
                <input type="button" value="更新" v-on:click="updateTitle" />
                {{ title.value }}
              </div>`,
  })
  .mount('#app');