import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { Todo } from './Todo';

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
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
      {todos.map((todo: TodoType) => (
        <Todo title={todo.title} userId={todo.userId} completed={todo.completed} key={todo.title}/>
      ))}
    </div>
  );
}

export default App;
