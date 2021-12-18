import './App.css';
import { UserCard } from './components/UserCard';

const user = {
  id : 1,
  name : 'kazu',
  email: 'kazu@gmail.com',
  address: 'kazu@sai',
}
function App() {
  return (
    <div className="App">
        <UserCard user={user}></UserCard>
    </div>
  );
}

export default App;
