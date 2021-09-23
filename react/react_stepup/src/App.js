import './App.css';
import { useState, useCallback} from 'react'
import { ChildArea } from './ChildArea';

function App() {

  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)

  const onChnegetext = (e) => setText(e.target.value)
  const onClickOpen = () => setOpen(!open)

  // propsで渡す関数を常に同じものにして、props変化によるレンダリングを防ぐ
  const onClickClose = useCallback(() => setOpen(false), [])

  return (
    <div className="App">
      {console.log("Appのレンダリング")}
      <input value={text} onChange={onChnegetext}/>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose}/>
    </div>
  );
}

export default App;
