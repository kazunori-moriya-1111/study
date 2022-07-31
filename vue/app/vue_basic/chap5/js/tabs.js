Vue.createApp({
  methods: {
    // クリック時にタブの切り替え
    onclick(tab){
      this.current = tab
    }
  },
  computed:{
    // タブ名の取得（[tab-xxx]のxxxの部分）
    tabNames(){
      return Object.keys(this.tabs)
    },
    currentTab(){
      return `tab-${this.current}`
    }
  },
  data(){
    return{
      // 表示中のタブ
      current: 'member',
      // 表示すべきタブのリスト（[名前、タブ表示]）
      tabs: {
        'member': 'メンバーの募集',
        'new': '新刊紹介',
        'env': '環境設定'
      }
    }
  }
})
  // タブメンバー要素を定義
  .component('tab-member',{
    template: `<div class="tab">
      <p>あなたもプロジェクトに参加しませんか<br />
      現在仲間を募集中です。</p>
      <label>仲間：<input type="text" v-model="name" /></label>
      <input type="submit" value="登録" />
      </div>`,
    data(){
      return{
        name: ''
      }
    },
    activated(){
      console.log('tab-member is activated')
    },
    deactivated(){
      console.log('tab-member is deactivated')
    }
  })
  // タブメニュー要素を定義
  .component('tab-new',{
    template: `<div class="tab">
      <p>あなたもプロジェクトに参加しませんか　タブニュー<br />
      現在仲間を募集中です。</p>
      <label>仲間：<input type="text" v-model="name" /></label>
      <input type="submit" value="登録" />
      </div>`,
    data(){
      return{
        name: ''
      }
    }
  })
  // タブエンブ要素を定義
  .component('tab-env',{
    template: `<div class="tab">
      <p>あなたもプロジェクトに参加しませんか　エンブタブ<br />
      現在仲間を募集中です。</p>
      <label>仲間：<input type="text" v-model="name" /></label>
      <input type="submit" value="登録" />
      </div>`,
    data(){
      return{
        name: ''
      }
    }
  })
  .mount('#app');