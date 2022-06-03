const app = Vue.createApp({
  beforeCreate: function(){
    console.log('beforeCreate');
  },
  create: function(){
    console.log('create');
  },
  beforeMount: function(){
    console.log('beforeMount');
  },
  mounted: function(){
    console.log('mounted');
  },
  beforeUpdate: function(){
    console.log('beforeUpdate');
  },
  updated: function(){
    console.log('updated');
  },
  beforeUnmount: function(){
    console.log('beforeUnmount');
  },
  unmounted: function(){
    console.log('unmounted');
  }
})

app.mount('#app');

setTimeout(function(){
  app.unmount();
}, 3000)