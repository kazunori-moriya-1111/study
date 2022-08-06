Vue.createApp({
  data(){
    return{
      message: ''
    }
  }
})
  .component('my-input',{
    props: {
      modelValue: String,
      modelModifiers:{
        default: () => ({})
      }
    },
    emits: ['update:modelValue'],
    methods: {
      // テキストボックス入力時に実行する処理
      oninput(e){
        let value = e.target.value
        // lower修飾子が指定されている場合、入力値を小文字化
        if (this.modelModifiers.lower){
          value = value.toLowerCase()
        }
        this.$emit('update:modelValue', value);
      }
    },
    template: `
    <label>名前
    <input type="text" v-bind:value="modelValue"
      v-on:input="oninput" />
    </label>
    `
  })
  .mount('#app');