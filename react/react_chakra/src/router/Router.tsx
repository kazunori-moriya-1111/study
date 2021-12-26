import { Routes, Route } from 'react-router-dom'
import { memo, VFC } from 'react'
import { Login } from '../components/pages/Login'
import { Home } from '../components/pages/Home'
import { Page404 } from '../components/pages/Page404'
import { UserManegement } from '../components/pages/UserManegement'
import { Setting } from '../components/pages/Setting'

export const Router: VFC = memo(() => {
  return(
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home/*" element={<HomeRouter />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
})

export const HomeRouter: VFC = memo(() => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="user_manegement" element={<UserManegement />} />
      <Route path="setting" element={<Setting />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
})