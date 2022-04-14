import axios from '../api/axiosCustom'
import { API, AxiosConfig } from '../utils'
import useAuth from './useAuth'

export default function useLogout() {
  const { setAuth, adminAccessToken } = useAuth()

  const logoutAdmin = async () => {
    try {
      const response = await axios.post(API.Logout, JSON.stringify(adminAccessToken), AxiosConfig)

      console.log('logoutAdmin response: ', response)

      // empty context
      setAuth({})
      return response
    } catch (error) {
      console.log('logoutAdmin error: ', error)
    }
    return logoutAdmin
  }
}
