import { Route, Routes } from 'react-router-dom'
import PersistLogin from './components/persist/PersistLogin'
import Layout from './layout'
import AdminDashboard from './pages/AdminDashboard'
import Login from './pages/Login'
import NoMatch from './pages/NoMatch'
import Registration from './pages/Registration'
import './style/global.css'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* public routes */}
        <Route index element={<Login />} />
        {/* registration route used for dev testing */}
        <Route path='registration' element={<Registration />} />
        {/* protected routes */}
        <Route element={<PersistLogin />}>
          <Route path='items' element={<AdminDashboard />} />
        </Route>
        {/* no-match routes */}
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  )
}
