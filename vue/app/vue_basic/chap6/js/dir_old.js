Vue.createApp({
  data(){
    return{
      name : '名無し',
      color: 'yellow'
    }
  }
})
  // moutend, updatedをまとめて定義
  .directive('highlight', (el, binding, vnode, preNode) => {
    // 属性値に変化がなければ終了
    if(binding.value === binding.oldValue){return;}
    // 現在の属性値をログ出力
    console.log(binding.value)
    el.style.backgroundColor = binding.value
  })
  .mount('#app');