import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Top } from '../components/pages/Top';
import { Users } from '../components/pages/Users';
import { DefaultLayout } from '../components/templates/DefaultLayout' 
import { HeaderOnly } from '../components/templates/HeaderOnly' 

export const Router = () => {
  return(
    <BrowserRouter>
      {/* react-router-dom v6での記述変更 */}
      <Routes>
        <Route exact path="/" element={
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        } />
        <Route path="/users" element={
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        }/>
      </Routes>
    </BrowserRouter>
  )
}
