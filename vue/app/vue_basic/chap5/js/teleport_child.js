Vue.createApp({})
  .component('my-teleport',{
    data(){
      return{
        // ダイアログを表示状態にするか
        show: false
      }
    },
    template: `
    <form>
      <input type="button" v-on:click="onclick(true)" value="ダイアログを開く">
    </form>
    <teleport to="#popup">
      <my-teleport-child msg="独自のダイアログです">
    </teleport>
    `,
    methods:{
      // 引数flagでshowをオンオフ
      onclick(flag){
        this.show = flag
      }
    },
    provide(){
      return{
        show: Vue.computed(()=> this.show),
        onclick: this.onclick
      }
    }
  })
  .component('my-teleport-child',{
    props:{msg: String},
    inject:['show', 'onclick'],
    template:`
      <div id="my-dialog" class="dialog" v-if="show.value">
        <p>{{ msg }}</p>
        <input type="button" v-on:click="onclick(false)" value="閉じる">
      </div>
    `
  })
  .mount('#app');