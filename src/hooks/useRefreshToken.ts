import axios from '../api/axios'
import { API } from '../utils'
import useAuth from './useAuth'

const useRefreshToken = () => {
  const { setAuth } = useAuth()

  const refresh = async () => {
    const response = await axios.get(API.Refresh, {
      // setting that allows the secure cookie with response to be sent
      withCredentials: true
    })
    setAuth(prev => {
      // console.log(JSON.stringify(prev))
      // console.log(response.data.accessToken)
      return {
        ...prev,
        accessToken: response.data.accessToken
      }
    })
    return response.data.accessToken
  }
  return refresh
}

export default useRefreshToken