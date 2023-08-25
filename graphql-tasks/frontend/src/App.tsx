import './App.css'
import Main from './compunents/Main'
import NotFound from './compunents/NotFound'
import SignIn from './compunents/SignIn'
import SignUp from './compunents/SignUp'

function App() {
  

  return (
    <div className='App'>
      <SignIn />
      <SignUp />
      <Main />
      <NotFound />
    </div>
  )
}

export default App
