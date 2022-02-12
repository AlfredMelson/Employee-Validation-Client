import axios from '../api/axios'
import { API } from '../constants'
import useAuth from './useAuth'

const useLogin = (user: string, pwd: string) => {
  const { setAuth } = useAuth()

  const login = async () => {
    setAuth({})
    try {
      const response = await axios.post(API.Login, JSON.stringify({ user, pwd }), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      })

      if (response.status !== 200) {
        if (response.status === 401) {
          return
        }
        throw new Error(`${response.status} ${response.statusText}`)
      }

      const accessToken = response?.data?.accessToken

      setAuth({ user, pwd, accessToken })
    } catch (err) {
      console.error(err)
    }
  }

  return login
}

export default useLogin
