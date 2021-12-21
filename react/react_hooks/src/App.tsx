import axios from 'axios';
import { useState } from 'react';
import './App.css';
import { UserCard } from './components/UserCard';
import { User } from './types/api/user';
import { userProfile } from './types/userProfile';

function App() {
  const [userProfiles, setUserProfiles] = useState<Array<userProfile>>([])
  const onCLickFetchUsr = () => {
    axios.get<Array<User>>('https://jsonplaceholder.typicode.com/users').then((response) => {
      const data = response.data.map((user) => ({
        id : user.id,
        name : `${user.name}(${user.username})`,
        email : user.email,
        address : `${user.address.city} ${user.address.suite} ${user.address.city}`
      }))
      setUserProfiles(data)
    })
  }
  return (
    <div className="App">
      <button onClick={onCLickFetchUsr}>データ取得</button>
      {userProfiles.map((user) => (
        <UserCard key={user.id} user={user}></UserCard>
      ))}
    </div>
  );
}

export default App;
