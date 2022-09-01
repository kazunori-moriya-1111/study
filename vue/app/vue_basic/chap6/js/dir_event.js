Vue.createApp({
  data(){
    return{
      color: 'red',
    }
  }
})
  .directive('highlight', (el, binding) => {
    // mouseenter時のイベント処理を定義
    el.addEventListener('mouseenter', e => {
      e.target.style.backgroundColor = binding.value
    }, false)
    // mouseleave時のイベント処理を定義
    el.addEventListener('mouseleave', e => {
      e.target.style.backgroundColor = null
    }, false)
  })
  .mount('#app');