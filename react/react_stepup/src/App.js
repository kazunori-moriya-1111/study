import './App.css';
import {useState} from 'react'
import { ChildArea } from './ChildArea';

function App() {

  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)

  const onChnegetext = (e) => setText(e.target.value)
  const onClickOpen = () => setOpen(!open)

  return (
    <div className="App">
      {console.log("Appのレンダリング")}
      <input value={text} onChange={onChnegetext}/>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open}/>
    </div>
  );
}

export default App;
