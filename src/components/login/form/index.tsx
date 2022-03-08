import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { alpha } from '@mui/material/styles'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import axios from '../../../api/axiosCustom'
import { useAuth } from '../../../hooks'
import { loginAlertErrorAtom, loginErrorMessageAtom } from '../../../recoil-state'
import { UMSwatch } from '../../../style'
import { API, AxiosLoginConfig } from '../../../utils'
import { CheckIcon, SecurityIcon } from '../../icons'
import { CircularProgressSx, LoginButtonSx, TextFieldSx, TypoTextfieldSx } from '../../mui'

export default function LoginTextFields() {
  const navigate = useNavigate()

  // Hook up admin authentication state
  const { setAuth } = useAuth()

  // useRef to avoid re-renders during button handler
  const interactionTimer = useRef<number>()

  // Error message display transition
  const setLoginAlertError = useSetRecoilState(loginAlertErrorAtom)

  const setLoginErrorMessage = useSetRecoilState(loginErrorMessageAtom)

  // Username textfield state
  const [adminUsername, setAdminUsername] = useState<string>('')
  const [usernameHelperText, setUsernameHelperText] = useState<string>('')

  // Password textfield state
  const [adminPassword, setAdminPassword] = useState<string>('')
  const [passwordHelperText, setPasswordHelperText] = useState<string>('')

  // Login button state
  const [submitting, setSubmitting] = useState(false)
  // handle transitions during sumission
  const [successSubmit, setSuccessfulSubmit] = useState(false)

  // Handle setting and updating error message and state
  useEffect(() => {
    return () => {
      // empty any error message
      setLoginErrorMessage('')

      // reset alert when either the username or password state changes
      setLoginAlertError(false)
      setPasswordHelperText('')
      setUsernameHelperText('')
    }
  }, [adminUsername, adminPassword, setLoginErrorMessage, setLoginAlertError])

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    // alert user if username textfield is empty
    if (!adminUsername) {
      return setUsernameHelperText('Please enter your username')
    }

    // alert user if password textfield is empty
    if (!adminPassword) {
      return setPasswordHelperText('Please enter your password')
    }

    setSubmitting(true)

    try {
      console.log('Pre-Request')
      const response = await axios.post(
        API.Login,
        JSON.stringify({ adminUsername, adminPassword }),
        AxiosLoginConfig
      )

      if (response.status === 200) {
        // set state to success
        interactionTimer.current = window.setTimeout(() => {
          const accessToken: string = response.data.accessToken
          // pass adminUsername, adminPassword and accessToken into auth context
          setAuth({ adminUsername, adminPassword, accessToken })

          // reset the username and password fields
          setAdminUsername('')
          setAdminPassword('')

          setSuccessfulSubmit(true)
          setSubmitting(false)
        }, 1250)
      }

      // push admin to dashboard page
      navigate('/dashboard', { replace: true })

      // open error alert if there is a caught error
    } catch (error) {
      setLoginAlertError(true)

      // handle no response from the server
      if (!error.response) {
        setSubmitting(false)
        setLoginErrorMessage('No Server Response')

        // handle invalid syntax (400 Bad Request)
      } else if (error.response.status === 400) {
        setLoginErrorMessage('Missing Username or Password')

        // handle unauthenticated (401 Unauthorized)
      } else if (error.response.status === 401) {
        setLoginErrorMessage('Unauthorized Creditentials')

        // handle catch-all-other-errors
      } else {
        setLoginErrorMessage('Login Failed')
      }
    }
  }

  // handle side effect proceeding button handler
  useEffect(() => {
    return () => {
      // cancel the timeout established by setTimeout()
      clearTimeout(interactionTimer.current)
    }
  }, [])

  return (
    <form>
      <TypoTextfieldSx>Username</TypoTextfieldSx>
      <TextFieldSx
        autoFocus
        type='text'
        id='username'
        color='success'
        error={usernameHelperText !== ''}
        onChange={(event) => setAdminUsername(event.target.value)}
        helperText={usernameHelperText}
      />
      <TypoTextfieldSx sx={{ mt: '20px', ml: '10px' }}>Password</TypoTextfieldSx>
      <TextFieldSx
        type='password'
        id='password'
        error={passwordHelperText !== ''}
        onChange={(event) => setAdminPassword(event.target.value)}
        value={adminPassword}
        helperText={passwordHelperText}
      />
      <Stack direction='row' justifyContent='center' alignItems='center' sx={{ m: '30px 0 0' }}>
        <Box sx={{ position: 'relative' }}>
          <LoginButtonSx
            // disabled={submitting}
            onClick={handleFormSubmit}
            startIcon={
              <SecurityIcon
                sx={{
                  width: 24,
                  height: 24,
                  color: submitting ? UMSwatch.Black[100] : alpha(UMSwatch.Gold[50], 0.8)
                }}
              />
            }>
            {!submitting
              ? 'Login'
              : successSubmit && (
                  <CheckIcon
                    sx={{
                      color: UMSwatch.Gold[50]
                    }}
                  />
                )}
          </LoginButtonSx>
          {submitting && <CircularProgressSx />}
        </Box>
      </Stack>
    </form>
  )
}
