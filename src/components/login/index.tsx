import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Collapse from '@mui/material/Collapse'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axiosCustom'
import { useAuth } from '../../hooks'
import { API, AxiosLoginConfig } from '../../utils'
import { ShieldIcon } from '../icons'
import { LoginButtonSx } from '../mui/Button.style'

export default function LoginCard() {
  const navigate = useNavigate()

  // Hook up admin authentication state
  const { setAuth } = useAuth()

  // Error reference
  const errorReference = useRef<HTMLParagraphElement | null>(null)

  // Error message state
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // Error message display transition
  const [errorAlert, setErrorAlert] = useState<boolean>(false)

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
    <Card raised>
      <CardHeader
        title={
          <Collapse in={errorAlert}>
            <Alert sx={{ m: '4px' }} variant='filled' severity='error' ref={errorReference}>
              {errorMessage}
            </Alert>
          </Collapse>
        }
      />
      <Box sx={{ mx: '30px' }}>
        <div className='login-card-header' />
      </Box>
      <CardContent sx={{ m: '10px', minWidth: '340px' }}>
        <form>
          <Typography variant='body1' color='text.primary' gutterBottom>
            Username
          </Typography>
          <TextField
            error={usernameHelperText !== ''}
            autoFocus
            fullWidth
            type='text'
            id='username'
            required
            onChange={event => setAdminUsername(event.target.value)}
            helperText={usernameHelperText}
          />
          <Typography variant='body1' color='text.primary' gutterBottom sx={{ mt: '20px' }}>
            Password
          </Typography>
          <TextField
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
              disabled={isLoading}
              type='submit'
              onClick={handleFormSubmit}
              variant='contained'
              startIcon={<ShieldIcon />}>
              Login
            </LoginButtonSx>
          </Stack>
        </form>
      </CardContent>
    </Card>
  )
}
