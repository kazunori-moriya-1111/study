import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', async () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })

    // msgプロパティを変更して、その結果を検証
    const new_msg = 'こんにちは、Vue'
    await wrapper.setProps({ msg: new_msg })
    expect(wrapper.find('h1').text()).toBe(new_msg)
  })
})
