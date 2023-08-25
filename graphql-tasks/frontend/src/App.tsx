import './App.css';
import { GuestRoute, PrivateRoute } from './AuthRoute';
import Main from './compunents/Main';
import NotFound from './compunents/NotFound';
import SignIn from './compunents/SignIn';
import SignUp from './compunents/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import client from './apolloClient';
import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/signin"
            element={<GuestRoute children={<SignIn />} />}
          />
          <Route
            path="/signup"
            element={<GuestRoute children={<SignUp />} />}
          />
          <Route path="/" element={<PrivateRoute children={<Main />} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
