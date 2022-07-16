// my-parent / my-childコンポーネントの定義
const MyChild = {
  template: `<div>こんにちは、Comp2</div>`
};

const MyParent = {
  template: `
    <div>こんにちは、Comp1</div>
    <my-child />
    `
};

Vue.createApp({
  // ローカルコンポーネントとして登録
  components: {
    'my-parent': MyParent,
    'my-child': MyChild
  }
}).mount('#app');