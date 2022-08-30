const hook = (el, binding) => {
  if(binding.value === binding.oldValue){return;}
  // border修飾子で背景ハイライトか枠線ハイライトかを選択
  if(binding.modifiers.border){
    el.style.borderColor = binding.value;
    el.style.borderStyle = 'solid'
  }else{
    el.style.backgroundColor = binding.value;
  }
}
Vue.createApp({
  data(){
    return{
      color: 'yellow'
    }
  }
})
  .directive('highlight', {
    mounted: hook,
    updated (el, binding){
      hook(el. binding)
      console.log("updatedの処理")
      // once修飾子でupdate更新はスキップ
      if(!binding.modifiers.once){
        hook(el. binding)
      }
    }
  })
  .mount('#app');