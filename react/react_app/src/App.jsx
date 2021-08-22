import React, { useState } from "react";
import ColorfulMessage from './components/ColorfulMessage.jsx'

const App = () =>{
  const onClickCountUp = () => {
    setNum(num + 1)
  };
  const [num, setNum] = useState(0)
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
      <p>{num}</p>
    </React.Fragment>
  );
};

export default App
