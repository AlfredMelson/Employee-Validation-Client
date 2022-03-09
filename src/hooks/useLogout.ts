import axios from '../api/axiosCustom'
import useAuth from './useAuth'

const useLogout = (accessToken: string) => {
  const { setAuth } = useAuth()

  const logoutAdmin = async () => {
    const response = await axios.post('/admin/logout', accessToken, {
      withCredentials: true
    })

    // empty context
    setAuth({})
    return response
  }
  return logoutAdmin
}

export default useLogout
