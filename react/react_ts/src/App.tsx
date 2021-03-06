import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { Todo } from './Todo';
import { TodoType } from './types/todo'
import { Text } from './Text';
import { UserProfile } from './UserProfile';
import { User } from './types/User';

const user: User = {
  name: "kazu",
  hobbies: ["先頭", "ゲーム"],
}

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((response) => {
      setTodos(response.data)
    })
  }

  return (
    <div className="App">
      <UserProfile user={user}></UserProfile>
      <Text color="red" fontSize="18px"></Text>
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo: TodoType) => (
        <Todo title={todo.title} userId={todo.userId} completed={todo.completed} key={todo.id}/>
      ))}
    </div>
  );
}

export default App;
