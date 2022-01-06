import { Counter } from './features/counter/Counter';
import './App.css';
import { TaskList } from './features/task/TaskList';
import { ChakraProvider } from '@chakra-ui/react';
import { TaskInput } from './features/task/TaskInput';
import { Fetch } from './features/fetch/Fetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ChakraProvider>
        <Counter />
        <TaskInput />
        <TaskList />
        <Fetch />
      </ChakraProvider>
      </header>
    </div>
  );
}

export default App;
