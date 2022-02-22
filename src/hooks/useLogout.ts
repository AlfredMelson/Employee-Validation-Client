import axios from '../api/axiosCustom'
import useAuth from './useAuth'

const useLogout = accessToken => {
  const { setAuth } = useAuth()

  const logoutAdmin = async () => {
    console.log('accessToken', accessToken)
    try {
      await axios.post('/admin/logout', accessToken, {
        withCredentials: true
      })

      // empty context
      setAuth({})
    } catch (err) {
      console.error(err)
    }

    return logoutAdmin
  }
}

export default useLogout
