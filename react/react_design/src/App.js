import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { DefaultLayout } from './components/templates/DefaultLayout';
import { HeaderOnly } from './components/templates/HeaderOnly';

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
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput></SearchInput>
        <UserCard user={user}></UserCard>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
