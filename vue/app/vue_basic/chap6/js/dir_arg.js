Vue.createApp({
  data(){
    return{
      color: 'red',
      option: ''
    }
  }
})
  .directive('highlight', (el, binding) => {
    // 引数の値に応じてハイライト処理を分岐
    switch(binding.arg){
      case 'bg':
        el.style.backgroundColor = binding.value
        break;
      case 'border':
        el.style.borderStyle = 'solid'
        el.style.borderWidth = '1px'
        el.style.borderColor = binding.value
        break;
      case 'text':
        el.style.fontWeight = 'bold'
        el.style.color = binding.value
        break;
      default:
        throw new Error('指定のハイライトは使えません')
    }
  })
  .mount('#app');