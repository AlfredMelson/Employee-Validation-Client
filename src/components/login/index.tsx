import Alert from '@mui/material/Alert'
import Collapse from '@mui/material/Collapse'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axios'
import { useAuth, useLoginInput } from '../../hooks'
import { API, LOCAL } from '../../utils'
import { LoginButtonSx } from '../mui/Button.style'

export default function LoginCard() {
  const navigate = useNavigate()

  // hook up admin authentication state
  const { setAuth } = useAuth()

  // error reference
  const errorReference = useRef<HTMLParagraphElement | null>(null)

  // migrated useState to useInput for localStorage persistence
  const [adminUsername, resetUser, userAttributions] = useLoginInput(LOCAL.User, '')
  const [adminPassword, setAdminPassword] = useState<string>('')

  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // handle error message display transition
  const [errorAlert, setErrorAlert] = useState<boolean>(false)

  useEffect(() => {
    // empty any error message
    setErrorMessage('')

    // reset alert when either the username or password state changes
    setErrorAlert(false)
  }, [adminUsername, adminPassword])

  const handleFormSubmit = async event => {
    event.preventDefault()

    try {
      const response = await axios.post(
        API.Login,
        JSON.stringify({ adminUsername, adminPassword }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      )

      const accessToken = response?.data?.accessToken
      // provide the username, password and accessToken to the auth provider
      setAuth({ adminUsername, adminPassword, accessToken })

      // reset the username and password fields
      resetUser()
      setAdminPassword('')

      // push user to dashboard page
      navigate('/dashboard', { replace: true })

      // open error alert if there is a caught error
    } catch (error) {
      setErrorAlert(true)
      setErrorMessage('Login Failed')

      // handle no response from the server
      // if (!error?.response) {
      //   setErrorMessage('No Server Response')

      //   // handle invalid syntax
      // } else if (error.response?.status === 400) {
      //   setErrorMessage('Missing Username or Password')

      //   // handle invalid syntax
      // } else if (error.response?.status === 401) {
      //   setErrorMessage('Unauthorized Creditentials')

      //   // catch-all-other-errors
      // } else {
      //   setErrorMessage('Login Failed')
      // }
      errorReference.current.focus()
    }
  }

  return (
    <section className='login-card'>
      <form className='login-form' onSubmit={handleFormSubmit}>
        <Collapse in={errorAlert}>
          <Alert sx={{ mb: 2 }} variant='filled' severity='error' ref={errorReference}>
            {errorMessage}
          </Alert>
        </Collapse>
        <div className='login-card-header' />
        <Typography variant='body1' sx={{ mt: 3 }}>
          Username
        </Typography>
        <TextField
          autoFocus
          variant='outlined'
          type='text'
          id='username'
          required
          {...userAttributions}
          sx={{ py: 1 }}
        />
        <Typography variant='body1' sx={{ mt: 2 }}>
          Password
        </Typography>
        <TextField
          sx={{ py: 1 }}
          variant='outlined'
          type='password'
          id='password'
          onChange={event => setAdminPassword(event.target.value)}
          value={adminPassword}
          required
        />
        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={1}
          sx={{ mt: 2 }}>
          <LoginButtonSx type='submit' variant='contained'>
            Login
          </LoginButtonSx>
        </Stack>
      </form>
    </section>
  )
}
