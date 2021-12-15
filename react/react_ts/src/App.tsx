import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { Todo } from './Todo';

type TodoType = {
  userId: number;
  id: number;
  title: string;
  conpleted: boolean;
};

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((response) => {
      setTodos(response.data)
    })
  }

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo: any) => (
        <Todo title={todo.title} userid={todo.userId} key={todo.title}/>
      ))}
    </div>
  );
}

export default App;
