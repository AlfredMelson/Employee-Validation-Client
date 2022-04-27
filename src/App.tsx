import { API } from 'aws-amplify'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components'
import { Administration, Login, Mismatch } from './pages'

const myAPI = 'validapi'
const path = '/employee'

export default function App() {
  const [employees, setEmployees] = useState([])

  // fetch from the backend and update employees array
  function getEmployees() {
    API.get(
      // api name
      myAPI,
      // path
      path + '/' + employees,
      // options
      {}
    )
      .then((response) => {
        console.log(response)
        const newEmployees = [...employees]
        newEmployees.push(response)
        setEmployees(newEmployees)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const callApi = getEmployees

  console.log('callApi: ', callApi)
  console.log('employees array: ', employees)

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
