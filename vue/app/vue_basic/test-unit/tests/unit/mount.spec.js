import { shallowMount, mount } from '@vue/test-utils'
import HelloStub from './HelloStub.vue'
import App from '@/App.vue'

describe('mountの基本', () => {
  it('shallowMount vs mount', () => {
    const shallow = shallowMount(App)
    const deep = mount(App)

    // それぞれのmount結果を表示
    console.log(shallow.html())
    console.log(deep.html())
  })
  it('CustomStub', () => {
    const shallow = shallowMount(App, {
      global: {
        stubs: {
          HelloWorld: HelloStub
        }
      }
    })
    // コンポーネントの処理結果を出力
    console.log(shallow.html())
  })
})
