import React, { useState } from 'react';
import "./styles.css";

export const App = () => {
  // eslint-disable-next-line
  const [todoText, setTodotext] = useState('')
  // eslint-disable-next-line
  const [incompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいいい"
  ])
  // eslint-disable-next-line
  const [completeTodos, setCompleteTodos] = useState(["ううううう"])
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText}/>
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return(
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            )
          })}
        </ul>
      </div>
      <div className="complete-area">
        <ul>
        {completeTodos.map((todo) => {
            return(
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  )
}