import { Route, Routes } from 'react-router-dom'
import { AuthRequired, Layout, PersistLogin } from './components'
import { Administration, Login, NoMatch, Registration } from './pages'
import './style/global.css'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* public routes */}
        <Route index element={<Login />} />
        {/* registration route used for dev testing */}
        <Route path='registration' element={<Registration />} />
        {/* persistent login routes */}
        <Route element={<PersistLogin />}>
          {/* authenticated routes */}
          <Route element={<AuthRequired />}>
            {/* protected routes */}
            <Route path='items' element={<Administration />} />
          </Route>
        </Route>
        {/* no-match routes */}
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  )
}
