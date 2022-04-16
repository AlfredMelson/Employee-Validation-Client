import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import axios from '../api/axiosCustom'
import { API, uxdelay } from '../utils'
import { logoutErrorHandlingAtom } from './../recoil-state'
import useAuth from './useAuth'

const useLogout = () => {
  const { auth, setAuth } = useAuth()

  const navigate = useNavigate()

  // logout button state handler
  const setLogoutErrorHandling = useSetRecoilState(logoutErrorHandlingAtom)

  const logout = async () => {
    setLogoutErrorHandling({
      logoutAlertError: false,
      logoutErrorMessage: '',
      logoutDisabled: true,
      logoutSubmitting: true,
      logoutSuccessfulSubmit: false
    })

    try {
      const response = await axios(API.Logout, {
        withCredentials: true,
        headers: {
          authorization: auth?.accessToken
        }
      })

      console.log(response)
      setAuth({ username: '', password: '', accessToken: '' })

      if (response.status === 200) {
        // set state to success
        await uxdelay(1000)

        setLogoutErrorHandling({
          logoutAlertError: false,
          logoutErrorMessage: '',
          logoutSubmitting: false,
          logoutDisabled: false,
          logoutSuccessfulSubmit: true
        })

        await uxdelay(500)
        // push admin to dashboard page
        navigate('/')
      }
    } catch (error) {
      // handle no response from the server
      if (!error) {
        setLogoutErrorHandling({
          logoutAlertError: true,
          logoutErrorMessage: 'No response from server',
          logoutDisabled: true,
          logoutSuccessfulSubmit: false,
          logoutSubmitting: false
        })

        // handle invalid syntax (400 Bad Request)
      } else if (error === 400) {
        setLogoutErrorHandling({
          logoutAlertError: true,
          logoutErrorMessage: 'Missing Username or Password',
          logoutDisabled: true,
          logoutSuccessfulSubmit: false,
          logoutSubmitting: false
        })

        // handle unauthenticated (401 Unauthorized)
      } else if (error === 401) {
        setLogoutErrorHandling({
          logoutAlertError: true,
          logoutErrorMessage: 'Unauthorized Creditentials',
          logoutDisabled: true,
          logoutSuccessfulSubmit: false,
          logoutSubmitting: false
        })

        // handle catch-all-other-errors
      } else {
        setLogoutErrorHandling({
          logoutAlertError: true,
          logoutErrorMessage: 'Login Failed',
          logoutDisabled: true,
          logoutSuccessfulSubmit: false,
          logoutSubmitting: false
        })
      }
    }
  }

  return logout
}

export default useLogout
