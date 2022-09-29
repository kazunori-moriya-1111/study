import { shallowMount } from '@vue/test-utils'
import MyCompute from '@/components/MyCompute.vue'

describe('算出プロパティのテスト', () => {
  it('Computed test', () => {
    const email = 'HOGE@example.com'
    const wrapper = shallowMount(MyCompute,{
      props:{email}
    })
    // 算出プロパティの値を取得
    expect(wrapper.vm.localEmail).toBe('hoge')
  })
})