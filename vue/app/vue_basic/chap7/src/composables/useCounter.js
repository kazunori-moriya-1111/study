import { ref } from 'vue'

export default function(init){
  // データオブジェクト、イベントハンドラーを定義
  const current = ref(init)
  const onclick = () => {
    current.value++
  }

  return {
    current,
    onclick
  }
}