import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { Page1DetailA } from './Page1DetailA';
import { Page1DetailB } from './Page1DetailB';
// import { useState, useCallback, useMemo} from 'react'
// import { ChildArea } from './ChildArea';
// import { InlineStyle } from './components/InlineStyle';
// import { CssModules } from './components/CssModules';
// import { StyledJsx } from './components/StyledJsx';
// import { StyledComponents } from './components/StyledComponents';
// import { Emotion } from './components/Emotion';

function App() {

  // const [text, setText] = useState('')
  // const [open, setOpen] = useState(false)

  // const onChnegetext = (e) => setText(e.target.value)
  // const onClickOpen = () => setOpen(!open)

  // // propsで渡す関数を常に同じものにして、props変化によるレンダリングを防ぐ
  // const onClickClose = useCallback(() => setOpen(false), [])

  // // 変数のMemo化
  // const temp = useMemo(() => 1 + 3, [])
  // console.log(temp)

  // // インラインスタイル適用
  // const style = {
  //   border: 'solid'
  // }
  return (
    <BrowserRouter>
      <div className="App">
        {/* {console.log("Appのレンダリング")}
        <input value={text} onChange={onChnegetext}/>
        <br />
        <br />
        <button sytle={style} onClick={onClickOpen}>表示</button>
        <ChildArea open={open} onClickClose={onClickClose}/>
        <InlineStyle />
        <CssModules />
        <StyledJsx />
        <StyledComponents />
        <Emotion /> */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Switch>
        {/* exact = 完全一致の場合レンダリングする */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page1" render={({match: { url } }) => (
          <Switch>
            <Route exact path={url}>
              <Page1 />
            </Route>
            <Route path={`${url}/detailA`}>
              <Page1DetailA />
            </Route>
            <Route path={`${url}/detailB`}>
              <Page1DetailB />
            </Route>
          </Switch>
        )}>
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
