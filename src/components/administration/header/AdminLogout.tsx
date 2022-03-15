import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import axios from '../../../api/axiosCustom'
import { useAuth } from '../../../hooks'
import { logoutAlertErrorAtom, logoutErrorMessageAtom } from '../../../recoil-state'
import { uxdelay } from '../../../utils'
import { LogoutIcon } from '../../icons'
import { IconButtonSx, ToolTipSx } from '../../mui'

export default function AdminLogout() {
  const { setAuth, adminAccessToken, setAdminAccessToken } = useAuth()

  const navigate = useNavigate()

  // Error message display transition
  const setLogoutAlertError = useSetRecoilState(logoutAlertErrorAtom)

  const setLogoutErrorMessage = useSetRecoilState(logoutErrorMessageAtom)

  // Login button states
  // handle disabled state
  const [disabled, setDisabled] = useState(false)
  console.log(disabled)
  // handle submission state
  const [submitting, setSubmitting] = useState(false)
  console.log(submitting)
  // handle successful submission state
  const [successSubmit, setSuccessfulSubmit] = useState(false)
  console.log(successSubmit)

  // Handle setting and updating error message and state
  useEffect(() => {
    return () => {
      // empty any error message
      setLogoutErrorMessage('')

      // reset alert when either the username or password state changes
      setLogoutAlertError(false)
      setDisabled(false)
    }
  }, [setLogoutErrorMessage, setLogoutAlertError])

  const handleAdminLogout = async (event) => {
    event.preventDefault()
    console.log('logging out')
    console.log('adminAccessToken BEFORE', adminAccessToken)

    setSuccessfulSubmit(false)

    setSubmitting(true)

    try {
      const response = await axios('/logout', {
        withCredentials: true
      })

      console.log('response', response)

      // if (response.status === 200) {
      //   // set state to success
      //   const resAccessToken: string = response.data.accessToken

      // one second delay
      await uxdelay(1000)

      setDisabled(false)
      setSuccessfulSubmit(true)

      // one second delay
      await uxdelay(1000)

      // push admin to login page
      navigate('/', { replace: true })

      // one-tenth of a second delay
      await uxdelay(100)
      setSubmitting(false)

      // empty context
      setAuth({})
      setAdminAccessToken(null)
      console.log('logged out')
      console.log('adminAccessToken AFTER', adminAccessToken)

      // open error alert if there is a caught error
    } catch (error) {
      console.log('logout error')
      setSubmitting(false)
      setDisabled(true)
      await uxdelay(300)
      setLogoutAlertError(true)

      // handle no response from the server
      if (!error.response) {
        setLogoutErrorMessage('No Server Response')

        // handle invalid syntax (400 Bad Request)
      } else if (error.response.status === 400) {
        setLogoutErrorMessage('Missing Username or Password')

        // handle unauthenticated (401 Unauthorized)
      } else if (error.response.status === 401) {
        setLogoutErrorMessage('Unauthorized Creditentials')

        // handle catch-all-other-errors
      } else {
        setLogoutErrorMessage('Login Failed')
      }
    }
  }

  return (
    <ToolTipSx tooltipTitle={'Logout'}>
      <IconButtonSx onClick={handleAdminLogout} sx={{ mr: '4px' }}>
        <LogoutIcon />
      </IconButtonSx>
    </ToolTipSx>
  )
}

//  try {
//    console.log('Pre-Request')
//    const response = await axios.post(
//      API.Logout,
//      JSON.stringify({ adminUsername, adminPassword }),
//      AxiosLoginConfig
//    )

//    if (response.status === 200) {
//      // set state to success
//     console.log('Logout-Request' ,response.status)
//    }

//    // push admin to dashboard page
//    navigate('/', { replace: true })

//    // open error alert if there is a caught error
//  } catch (error) {
//    console.log(error)
//  }
