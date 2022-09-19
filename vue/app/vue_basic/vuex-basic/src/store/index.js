import { createStore } from 'vuex'

export default createStore({
  state: {
    books: [
      {
        isbn: '978-4-2960-8009-0',
        title: '作って楽しむプログラミング Androidアプリ超入門',
        price: 2200
      },
      {
        isbn: '978-4-7981-6849-4',
        title: '独習Ruby 新版',
        price: 3740
      },
      {
        isbn: '978-4-7741-9763-0',
        title: '独習PHP 第4版',
        price: 2480
      },
      {
        isbn: '978-4-7981-6956-9',
        title: '基礎から学ぶReact Native入門',
        price: 1760
      },
      {
        isbn: '978-4-297-11496-1',
        title: 'Javaポケットリファレンス',
        price: 3278
      },
    ]
  },
  getters: {
    bookCount(state){
      return state.books.length
    },
    getBookByPrice(state){
      return price => {
        return state.books.filter(book => book.price < price)
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
