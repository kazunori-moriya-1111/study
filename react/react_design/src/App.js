import './App.css';
import { UserProvider } from './providers/UseProvider';
import { Router } from './router/Router';



function App() {
  return (
    <UserProvider>
        <Router />
    </UserProvider>
  );
}

export default App;
