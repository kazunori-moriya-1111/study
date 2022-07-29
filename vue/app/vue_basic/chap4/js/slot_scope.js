Vue.createApp({})
  .component('my-book',{
    data(){
      return{
        book:{
          isbn: '987',
          title: '作って楽しむ',
          price: 2000,
          publish: '日経BP'
        }
      }
    },
    template: `<div>
      <slot v-bind:book="book">{{book.title}} ({{book.publish}})</slot>
    </div>`,
  })
  .mount('#app');