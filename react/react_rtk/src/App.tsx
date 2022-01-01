import { Counter } from './features/counter/Counter';
import './App.css';
import { TaskList } from './features/task/TaskList';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ChakraProvider>
        <Counter />
        <TaskList />
      </ChakraProvider>
      </header>
    </div>
  );
}

export default App;
