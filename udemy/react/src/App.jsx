import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { List } from "./components/List";
import Expression from "./components/Expression";
import Child from "./components/Child";
import Container from "./components/Container";

function App() {
  const hello = (arg) => `${arg} Function`;
  return (
    <>
      <div className="component">
        <h3>Hello Component</h3>
        <List />
      </div>
      <Expression />
      <Child color="red" num={1} fn={hello} bool obj={{ a: 1, b: 2 }} />
      <Container>
        <p>button name</p>
      </Container>
    </>
  );
}

export default App;
