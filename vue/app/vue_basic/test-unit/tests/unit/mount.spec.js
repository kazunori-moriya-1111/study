import { shallowMount, mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('mountの基本', () => {
  it('shallowMount vs mount', () => {
    const shallow = shallowMount(App)
    const deep = mount(App)

    // それぞれのmount結果を表示
    console.log(shallow.html())
    console.log(deep.html())
  })
})
