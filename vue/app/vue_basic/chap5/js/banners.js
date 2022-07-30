Vue.createApp({
  // 起動時にコンポーネント切り替え用のタイマーを準備
  created() {
    this.interval = setInterval(() =>{
      this.current = (this.current + 1) % this.components.length
    }, 1000)
  },
  // コンポーネント破棄時にタイマーも破棄
  beforeUnmount(){
    clearInterval(this.interval)
  },
  computed: {
    // 現在表示すべきコンポーネント名を取得
    currentBanner(){
      return 'banner-' + this.components[this.current]
    }
  },
  data(){
    return{
      // 表示中のコンポーネント（インデックス）
      current : 0,
      // 表示すべきコンポーネントのリスト
      components: ['member','new','env']
    }
  },
})
  // バナーメンバー要素を定義
  .component('banner-member',{
    template: `<div>こんにちは、メンバーを募集していいます</div>`,
  })
  // バナーニュー要素を定義
  .component('banner-new',{
    template: `<div>こんにちは、新しいバナーです</div>`,
  })
  // バナーエンブ要素を定義
  .component('banner-env',{
    template: `<div>こんにちは、応募情報です</div>`,
  })
  .mount('#app');