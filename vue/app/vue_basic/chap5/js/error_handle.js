const app = Vue
  .createApp({})
  // 親子関係にあるmy-parent/my-childコンポーネントを定義
  .component('my-parent', {
    template:`
      <div id="parent">
        <my-child />
      </div>
    `
  })
  .component('my-child', {
    // マウント時に無条件で例外をスロー
    mounted(){
      throw new Error('Error is occured by my-child')
    },
    template:`
      <div id="child">
        My-child
      </div>
    `
  })

// エラーハンドラーを定義
app.config.errorHandler = (error, vm, info) => {
  console.log('■ ■ Global ■ ■')
  console.log(error)
  console.log(vm)
  console.log(info)
}
app.mount('#app')