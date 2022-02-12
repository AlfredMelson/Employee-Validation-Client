import axios from '../api/axios'
import { API } from '../constants'
import useAuth from './useAuth'

const useLogout = () => {
  const { setAuth } = useAuth()

  const logout = async () => {
    setAuth({})
    try {
      const response = await axios(API.Logout, {
        withCredentials: true
      })
      console.log(response)
    } catch (err) {
      console.error(err)
    }
  }

  return logout
}

export default useLogout
