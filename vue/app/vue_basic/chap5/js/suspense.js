Vue.createApp({})
  .component('my-heavy',{
    template: `
    <div>お待たせしました。{{ name }}さん</div>
    `,
    async setup(){
      // refオブジェクトの準備
      const name = Vue.ref('Suspense')
      // ダミーの非同期処理(5000ミリ秒後にpromiseを解決するだけ)
      await new Promise(resolve => {
        setTimeout(() => {
          resolve()
        },5000)
      })
      return { name }
    }
  })
  .mount('#app');