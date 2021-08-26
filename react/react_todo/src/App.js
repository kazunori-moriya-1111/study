import React, { useState } from 'react';
import "./styles.css";

export const App = () => {
  // inputエリアに入力された、todoTextを管理する
  const [todoText, setTodotext] = useState('')
  // 未完了タスクの項目を管理する
  const [incompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいいい"
  ])
  // 管理タスクの項目を管理する
  // eslint-disable-next-line
  const [completeTodos, setCompleteTodos] = useState(["ううううう"])

  //inputの値を入力の度にstateを変更する
  const onChangeTodoText = (event) => {
    setTodotext(event.target.value)
  }
  //追加ボタンの動作
  const onClickAdd = () => {
    //inputがからの場合は処理しない
    if (todoText === '') return
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos)
    setTodotext('')
  }
  // 削除ボタンの動作
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos)
  }
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/>
        <button　onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return(
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                {/* onCllickで関数に引数を渡したい場合アロー関数で書かないと引数を渡すごとに動作してしまう */}
                <button onClick={() => onClickDelete(index)}>削除</button>
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