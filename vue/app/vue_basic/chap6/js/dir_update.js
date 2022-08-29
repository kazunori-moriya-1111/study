Vue.createApp({
  data(){
    return{
      color: 'yellow'
    }
  }
})
  // .directive('highlight',{
  //   // 紐づいた時のみ処理（初回のみ）
  //   mounted(el, binding, vnode, preNode){
  //     el.style.backgroundColor = binding.value
  //   },
  //   // 上位コンポーネントが変化した時
  //   updated(el, binding, vnode, preNode){
  //     el.style.backgroundColor = binding.value
  //   }
  // })
  // moutend, updatedをまとめて定義
  .directive('highlight', (el, binding, vnode, preNode) => {
    el.style.backgroundColor = binding.value
  })
  .mount('#app');