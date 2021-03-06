import React, { useState } from 'react';
import "./styles.css";
import {InputTodo} from './components/InputTodo.jsx'
import {IncompleteTodos} from './components/IncompleteTodos.jsx'
import {CompleteTodos} from './components/CompleteTodos.jsx'

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
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} disabled={incompleteTodos.length >= 5}/>
      {incompleteTodos.length >= 5 && <p style={{ color:'red' }}>登録できるtodoが5個まで</p>}
      <IncompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete}/>
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack}/>
    </>
  )
}