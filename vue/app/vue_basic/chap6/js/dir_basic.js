Vue.createApp({
  data(){
    return{
      color: 'yellow'
    }
  }
})
  .directive('highlight',{
    mounted(el, binding, vnode, preNode){
      el.style.backgroundColor = binding.value
    }
  })
  .mount('#app');