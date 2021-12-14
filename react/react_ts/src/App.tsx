import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { Todo } from './Todo';

function App() {
  const [todos, setTodos] = useState<any>([]);
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
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
