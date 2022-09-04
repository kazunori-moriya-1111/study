import axios from 'axios'
export default function(){
  // データオブジェクト、イベントハンドラーを定義
  var text = ''
  const cdOnclick = () => {
    axios.get('http://localhost:3000').then(response => (text = response))
    console.log(text)
  }

  return {
    text,
    cdOnclick
  }
}