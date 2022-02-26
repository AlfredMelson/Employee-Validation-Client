import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../../api/axiosCustom'
import { useAuth } from '../../../hooks'
import { UMSwatch } from '../../../style'
import { API, AxiosLoginConfig } from '../../../utils'
import { SecurityIcon } from '../../icons'
import { TextFieldSx } from '../../mui'
import { LoginButtonSx } from '../../mui/Button.style'

export default function LoginTextFields() {
  const navigate = useNavigate()

  // Hook up admin authentication state
  const { setAuth } = useAuth()

  // Error reference
  const errorReference = useRef<HTMLParagraphElement | null>(null)

  // Error message state
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  //
  //
  //
  console.log(errorMessage)

  // Error message display transition
  const [errorAlert, setErrorAlert] = useState<boolean>(false)

  //
  //
  //
  console.log(errorAlert)

  // Username textfield state
  const [adminUsername, setAdminUsername] = useState<string>('')
  const [usernameHelperText, setUsernameHelperText] = useState<string>('')

  // Password textfield state
  const [adminPassword, setAdminPassword] = useState<string>('')
  const [passwordHelperText, setPasswordHelperText] = useState<string>('')

  // Login button state
  const [isLoading, setIsLoading] = useState(false)

  // Handle setting and updating error message and state
  useEffect(() => {
    return () => {
      // empty any error message
      setErrorMessage('')

      // reset alert when either the username or password state changes
      setErrorAlert(false)
      setPasswordHelperText('')
      setUsernameHelperText('')
    }
  }, [adminUsername, adminPassword])

  const handleFormSubmit = async event => {
    event.preventDefault()

    // alert user if username textfield is empty
    if (!adminUsername) {
      return setUsernameHelperText('Please enter your username')
    }

    // alert user if password textfield is empty
    if (!adminPassword) {
      return setPasswordHelperText('Please enter your password')
    }

    setIsLoading(true)
    try {
      console.log('Pre-Request')
      const response = await axios.post(
        API.Login,
        JSON.stringify({ adminUsername, adminPassword }),
        AxiosLoginConfig
      )

      console.log('response', response)

      if (response.status === 200) {
        const accessToken = response?.data?.accessToken
        // pass adminUsername, adminPassword and accessToken into auth context
        setAuth({ adminUsername, adminPassword, accessToken })

        setIsLoading(false)

        // push admin to dashboard page
        navigate('/dashboard', { replace: true })

        // reset the username and password fields
        setAdminUsername('')
        setAdminPassword('')
      }

      // open error alert if there is a caught error
    } catch (error) {
      setErrorAlert(true)

      // handle no response from the server
      if (!error?.response) {
        setIsLoading(false)
        setErrorMessage('No Server Response')

        // handle invalid syntax (400 Bad Request)
      } else if (error.response?.status === 400) {
        setErrorMessage('Missing Username or Password')

        // handle unauthenticated (401 Unauthorized)
      } else if (error.response?.status === 401) {
        setErrorMessage('Unauthorized Creditentials')

        // handle catch-all-other-errors
      } else {
        setErrorMessage('Login Failed')
      }
      errorReference.current.focus()
    }
  }

  return (
    <form>
      <Typography variant='body1' gutterBottom sx={{ color: UMSwatch.White[100], ml: '10px' }}>
        Username
      </Typography>
      <TextFieldSx
        error={usernameHelperText !== ''}
        autoFocus
        fullWidth
        type='text'
        id='username'
        required
        onChange={event => setAdminUsername(event.target.value)}
        helperText={usernameHelperText}
      />
      <Typography
        variant='body1'
        gutterBottom
        sx={{ m: '20px 0 0 10px', color: UMSwatch.White[100] }}>
        Password
      </Typography>
      <TextFieldSx
        error={passwordHelperText !== ''}
        fullWidth
        type='password'
        id='password'
        value={adminPassword}
        required
        onChange={event => setAdminPassword(event.target.value)}
        helperText={passwordHelperText}
      />
      <Stack direction='row' justifyContent='center' alignItems='center' sx={{ mt: '30px' }}>
        <LoginButtonSx
          size='medium'
          disabled={isLoading}
          type='submit'
          onClick={handleFormSubmit}
          variant='contained'
          startIcon={<SecurityIcon sx={{ width: 24, height: 24 }} />}>
          Login
        </LoginButtonSx>
      </Stack>
    </form>
  )
}
