import { shallowMount } from "@vue/test-utils";
import MyEmit from '@/components/MyEmit.vue'

describe('カスタムイベントのテスト', () => {
  it('$emit Test', () => {
    const wrapper = shallowMount(MyEmit)
    // ボタンクリック
    wrapper.find('input').trigger('click')
    // カスタムイベントを取得
    const emit = wrapper.emitted()
    console.dir(emit)
    // updateイベントが発生しているか
    expect(emit.update).toBeTruthy()
    // updateイベントが何回発生したか
    expect(emit.update.length).toBe(2)
    // 2回目のupdateイベントのデータを確認
    expect(emit.update[1][0].version).toBe('3.2.0')
  })
})