Vue.createApp({
  data(){
    return{
      name: '匿名'
    }
  },
  methods: {
    help(){
      window.alert('氏名を漢字で入力してください')
    }
  }
}).mount('#app');