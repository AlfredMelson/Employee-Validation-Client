import { AnimatePresence } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components'
import { Administration, Login, Mismatch } from './pages'

export default function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route element={<Layout />}>
          {/* public route */}
          <Route path='/' element={<Login />} />

          {/* protected route */}
          {/* <Route element={<Persistence />}> */}
          {/* <Route element={<Authentication />}> */}
          <Route path='dashboard' element={<Administration />} />
          {/* </Route> */}
          {/* </Route> */}
          {/* <Route path='/dashboard' element={<Administration />} /> */}

          {/* mismatch route */}
          <Route path='*' element={<Mismatch />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
