import { useState } from "react";

const Example = () => {
  const clickHandler = (str) => {
    console.log(`${str}をクリックしました`);
  };

  let [displayValue, setDisplayValue]= useState("0");
  let [countA, setCountA] = useState(0);
  let [countB, setCountB] = useState(0);
  let [countC, setCountC] = useState(0);
  let [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  };
  const newCountUp = () => {
    setCount(prev => prev + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <p>カウント：{count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
      {/* <input type="text" onChange={(e) => setDisplayValue(e.target.value)} /> = {displayValue}
      <p>A: {countA}回押しました</p>
      <button onClick={() => setCountA(countA + 1)}>Aを増やす</button>
      <p>B: {countB}回押しました</p>
      <button onClick={() => setCountB(countB + 1)}>Bを増やす</button>
      <p>C: {countC}回押しました</p>
      <button onClick={() => setCountC(countC + 1)}>Cを増やす</button> */}
      {/* <button onClick={() => clickHandler("左")}>クリックしてな</button>
      <button onClick={() => clickHandler("右")}>クリックしてな</button> */}
    </>
  );
};

export default Example;
