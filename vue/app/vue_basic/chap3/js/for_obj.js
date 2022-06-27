Vue.createApp({
  data() {
    return {
      books: 
        {
          isbn: '978-4-7981-5757-3',
          title: 'JavaScript逆引きレシピ',
          price: 2000
        }// },
        // {
        //   isbn: '978-4-7981-5757-2',
        //   title: 'Java逆引きレシピ',
        //   price: 3000
        // }
      ,
    }
  }
}).mount('#app');