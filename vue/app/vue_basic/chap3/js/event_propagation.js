Vue.createApp({
  methods: {
    onParentClick(e){
      console.log("Parent run")
    },
    onMyClick(e){
      console.log("My run")
    },
    onChildClick(e){
      console.log("child run")
    }
  }
}).mount('#app');