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
      <div id="my-dialog" class="dialog" v-if="show">
        <p>独自のダイアログです</p>
        <input type="button" v-on:click="onclick(false)" value="閉じる">
      </div>
    </teleport>
    `,
    methods:{
      // 引数flagでshowをオンオフ
      onclick(flag){
        this.show = flag
      }
    }
  })
  .mount('#app');