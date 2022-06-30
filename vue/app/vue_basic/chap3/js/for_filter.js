Vue.createApp({
  data() {
    return {
      books:[
        {
          isbn: '978-1',
          title: 'javascriptレシピ',
          price: 2500
        },
        {
          isbn: '978-2',
          title: 'pythonレシピ',
          price: 2000
        },
        {
          isbn: '978-3',
          title: 'phpレシピ',
          price: 1500
        }
      ]
    }
  },
  computed: {
    expensiveBook(){
      return this.books.filter(b => b.price < 2500)
    }
  }
}).mount('#app');