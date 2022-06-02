Vue.createApp({
  data(){
    return{
      current: new Date()
    };
  },
  created() {
    timer = setInterval(() => {
      this.current = new Date()
    }, 1000)
  },
  beforemount() {
    clearInterval(this.timer);
  }
}).mount('#app');