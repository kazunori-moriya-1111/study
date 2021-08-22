/* eslint react-hooks/exhaustive-deps: off*/
import React, { useEffect, useState } from "react";
import ColorfulMessage from './components/ColorfulMessage.jsx'

const App = () =>{
  const [num, setNum] = useState(0)
  const [faceShowFlag, setFaceShowFlag] = useState(true)
  
  const onClickCountUp = () => {
    setNum(num + 1)
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag)
  }
  // 第二引数の配列の要素が変更された時のみ処理が通る
  useEffect(() => {
    if (num % 3 === 0){
      faceShowFlag || setFaceShowFlag(true)
    }else{
      faceShowFlag && setFaceShowFlag(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num])
  return (
    <React.Fragment>
      <h1 style={{ color: 'red' }}>こんにちは</h1>
      <ColorfulMessage color="blue">
        お元気ですか
      </ColorfulMessage>
      <ColorfulMessage color="pink">
        元気です
      </ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^^)</p>}
    </React.Fragment>
  );
};

export default App
