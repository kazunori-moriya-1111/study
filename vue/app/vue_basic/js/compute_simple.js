Vue.createApp({
  data(){
    return{
      email: "Y-suzuki@example.com"
    };
  },
  computed: {
    localemail(){
      return this.email.split('@')[0].toLowerCase();
    }
  }
}).mount('#app');