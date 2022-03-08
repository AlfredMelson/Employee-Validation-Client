import axios from '../api/axiosCustom'
import { API } from '../utils'
import useAuth from './useAuth'

const useRefreshToken = () => {
  const { setAuth } = useAuth()

  const refreshAdmin = async () => {
    const response = await axios.get(API.Refresh, {
      // setting that allows the secure cookie with response to be sent
      withCredentials: true
    })
    setAuth((prev) => {
      return {
        ...prev,
        accessToken: response.data.accessToken
      }
    })
    return response.data.accessToken
  }
  return refreshAdmin
}

export default useRefreshToken
