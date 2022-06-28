Vue.createApp({
  data() {
    return {
      map: new Map([
        ['PHP', 'PHP : server'],
        ['Python', 'Python server'],
        ['Java', 'Java server']
      ])
    }
  }
}).mount('#app');