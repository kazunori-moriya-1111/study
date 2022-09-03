Vue
  .createApp({
  data() {
    return {
      options: {
        gfm: true,
        breaks: true,
        xhtml: true,
      }
    };
  },
  compilerOptions: {
    whitespace: 'preserve'
  }
})
.directive('markdown', (el, binding) => {
  // markdown文字列をHTML文字列に変換
  el.innerHTML = marked(el.textContent, binding.value);
})
  .mount('#app');