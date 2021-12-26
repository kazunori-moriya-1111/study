import './App.css';
import { useAllUsers } from './hooks/useAllUsers';
import { UserCard } from './components/UserCard';

function App() {
  const { getUSers, userProfiles, loading, error} = useAllUsers();

  const onCLickFetchUser = () => getUSers()

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
