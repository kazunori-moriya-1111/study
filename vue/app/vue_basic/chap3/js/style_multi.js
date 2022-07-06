Vue.createApp({
  data(){
    return{
      // スタイル情報を準備
      color:{
        backgroundColor: 'Aqua',
        color: 'Red'
      },
      size:{
       fontSize: '1.5rem' 
      }
    }
  }
}).mount('#app');