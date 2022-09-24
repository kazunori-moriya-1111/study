import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('Jestの基本', () => {
  beforeEach(() => {
    console.log(new Date().toLocaleString())
  })

  it('初めてのテスト', () => {
    expect(1 + 1).toBe(2)
  })
})
