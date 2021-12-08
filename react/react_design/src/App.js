import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';

const user = {
  name: "kazu",
  image: "https://source.unsplash.com/h4EN_2k_L0A",
  email: "abc@gmail.com",
  phone: "090-1111-2222",
  company: {
    name: "abc株式会社"
  },
  website: "https://google.com"
}

function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput></SearchInput>
      <UserCard user={user}></UserCard>
    </div>
  );
}

export default App;
