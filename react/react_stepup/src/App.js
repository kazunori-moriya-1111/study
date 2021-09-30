import './App.css';
import { useState, useCallback, useMemo} from 'react'
import { ChildArea } from './ChildArea';
import { InlineStyle } from './components/InlineStyle';
import { CssModules } from './components/CssModules';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponents } from './components/StyledComponents';
import { Emotion } from './components/Emotion';

function App() {

  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)

  const onChnegetext = (e) => setText(e.target.value)
  const onClickOpen = () => setOpen(!open)

  // propsで渡す関数を常に同じものにして、props変化によるレンダリングを防ぐ
  const onClickClose = useCallback(() => setOpen(false), [])

  // 変数のMemo化
  const temp = useMemo(() => 1 + 3, [])
  console.log(temp)

  // インラインスタイル適用
  const style = {
    border: 'solid'
  }
  return (
    <div className="App">
      {console.log("Appのレンダリング")}
      <input value={text} onChange={onChnegetext}/>
      <br />
      <br />
      <button sytle={style} onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose}/>
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}

export default App;
