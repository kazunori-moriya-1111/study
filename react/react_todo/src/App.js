import React, { useState } from 'react';
import "./styles.css";
import {InputTodo} from './components/InputTodo.jsx'

export const App = () => {
  // inputエリアに入力された、todoTextを管理する
  const [todoText, setTodotext] = useState('')
  // 未完了タスクの項目を管理する
  const [incompleteTodos, setIncompleteTodos] = useState([])
  // 管理タスクの項目を管理する
  const [completeTodos, setCompleteTodos] = useState([])

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
  // 完了ボタンの動作
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos]
    newIncompleteTodos.splice(index, 1)
    
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]
    setIncompleteTodos(newIncompleteTodos)
    setCompleteTodos(newCompleteTodos)
  }
  // 戻すボタンの実装
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos]
    newCompleteTodos.splice(index, 1)

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]
    setCompleteTodos(newCompleteTodos)
    setIncompleteTodos(newIncompleteTodos)
  }
  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd}/>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return(
              <div key={todo} className="list-row">
                <li>{todo}</li>
                {/* onCllickで関数に引数を渡したい場合アロー関数で書かないと引数を渡すごとに動作してしまう */}
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            )
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
        {completeTodos.map((todo, index) => {
            return(
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  )
}