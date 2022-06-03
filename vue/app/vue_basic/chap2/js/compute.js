Vue.createApp({
  data: function(){
    return{
      email: "Y-suzuki@example.com"
    };
  },
  computed: {
    localemail: function(){
      return this.email.split('@')[0].toLowerCase();
    }
  }
}).mount('#app');