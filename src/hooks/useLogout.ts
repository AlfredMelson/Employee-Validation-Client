import axios from '../api/axios'
import { API, AXIOS_LOGOUT_Configuration } from '../utils'
import useAuth from './useAuth'

const useLogout = () => {
  const { setAuth } = useAuth()

  const logout = async () => {
    // empty out user log state
    setAuth({})
    try {
      const response = await axios(
        // pull in the logout endpoint
        API.Logout,

        // pull in axios logout config; sending back the secure cookie with the request
        AXIOS_LOGOUT_Configuration
      )

      // handle unsuccessful logout request
      if (response.status !== 200) {
        // send status 401: 'unauthorized; response means unauthenticated'
        if (response.status === 401) {
          return
        }

        // handle all other errors
        throw new Error(`${response.status} ${response.statusText}`)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return logout
}

export default useLogout
