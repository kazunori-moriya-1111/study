import './App.css';
import { GuestRoute, PrivateRoute } from './AuthRoute';
import Main from './compunents/Main';
import NotFound from './compunents/NotFound';
import SignIn from './compunents/SignIn';
import SignUp from './compunents/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<GuestRoute children={<SignIn />} />} />
        <Route path="/signup" element={<GuestRoute children={<SignUp />} />} />
        <Route path="/" element={<PrivateRoute children={<Main />} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
