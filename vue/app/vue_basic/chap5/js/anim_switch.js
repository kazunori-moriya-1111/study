Vue
  .createApp({
    data(){
      return{
        // 表示に使用するパネル
        id: 0,
        // 表示パネルに配列として準備
        panels: [
          'WINGSプロジェクトは、ライター...',
          '山田の書籍にinfo',
          '環境設定は..'
        ]
      }
    },
    methods:{
      // ボタンクリックでid値を0〜2で変化
      onclick(){
        this.id = (this.id + 1) % this.panels.length
      }
    }
  })
  .mount('#app');