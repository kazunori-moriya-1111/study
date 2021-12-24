import axios from 'axios';
import { useState } from 'react';
import './App.css';
import { UserCard } from './components/UserCard';
import { User } from './types/api/user';
import { userProfile } from './types/userProfile';

function App() {
  const [userProfiles, setUserProfiles] = useState<Array<userProfile>>([])
  // 読み込み中か判定するstate
  const [loading, setLoading] = useState(false);
  // API取得結果がerrorか判定するstate
  const [error, setError] = useState(false);

  const onCLickFetchUser = () => {
    setLoading(true);
    setError(false);

    axios.get<Array<User>>('https://jsonplaceholder.typicode.com/users').then((response) => {
      //取得したデータを整形してdataへ格納
      const data = response.data.map((user) => ({
        id : user.id,
        name : `${user.name}(${user.username})`,
        email : user.email,
        address : `${user.address.city} ${user.address.suite} ${user.address.city}`
      }))
      setUserProfiles(data)
    }).catch(() => {
      // エラーをキャッチしたら実行される
      setError(true)
    }).finally(() => {
      // then or catchの後実行される
      setLoading(false);
    })
  }
  return (
    <div className="App">
      <button onClick={onCLickFetchUser}>データ取得</button>
      <br />
      {/* 三項演算子をネストすることでloading error状態を表現 */}
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました。</p>
      ) : loading ? (
        <p>loading...</p>
      ) : (
        //errorでもなくloadingでも無い場合は結果を表示する
        <>
        {userProfiles.map((user) => (
          <UserCard key={user.id} user={user}></UserCard>
        ))}
        </>
      )}
    </div>
  );
}

export default App;
