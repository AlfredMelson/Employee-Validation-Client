import Alert from '@mui/material/Alert'
import Collapse from '@mui/material/Collapse'
import FormControlLabel from '@mui/material/FormControlLabel'
import Stack from '@mui/material/Stack'
import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axios'
import { useAuth, useInput, useToggle } from '../../hooks'
import { API, AXIOS_LOGIN_Configuration, LOCAL } from '../../utils'
import { ButtonStyle } from '../mui/button.style'

export default function LoginCard() {
  const { setAuth } = useAuth()
  const navigate = useNavigate()

  // error reference
  const errorReference = useRef<HTMLParagraphElement | null>(null)

  // migrated useState to useInput for localStorage persistence
  const [user, resetUser, userAttributions] = useInput(LOCAL.User, '')
  const [pwd, setPwd] = useState<string>('')

  // if no persist value locally, set to false
  const [check, toggleCheck] = useToggle(LOCAL.Persist, false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // handle error message display transition
  const [errorAlert, setErrorAlert] = useState<boolean>(false)

  useEffect(() => {
    // empty any error message
    setErrorMessage('')

    // reset alert when either the username or password state changes
    setErrorAlert(false)
  }, [user, pwd])

  const handleFormSubmit = async event => {
    event.preventDefault()

    try {
      const response = await axios.post(
        // pull in the login endpoint
        API.Login,

        // pull in the user and password
        JSON.stringify({ user, pwd }),

        // pull in axios login config
        AXIOS_LOGIN_Configuration
      )

      // handle unsuccessful login responses
      if (response.status !== 200) {
        // send status 401: 'unauthorized; response means unauthenticated'
        if (response.status === 401) {
          return
        }

        // handle all other errors
        throw new Error(`${response.status} ${response.statusText}`)
      }

      // capture the accessToken from the servers response
      const accessToken: string = response?.data?.accessToken

      // provide the username, password and accessToken to the auth provider
      setAuth({ user, pwd, accessToken })

      // reset the username and password fields
      resetUser()
      setPwd('')

      // push user to dashboard page
      navigate('/items')

      // open error alert if there is a caught error
    } catch (error) {
      setErrorAlert(true)

      // handle no response from the server
      if (!error?.response) {
        setErrorMessage('No Server Response')

        // handle invalid syntax
      } else if (error.response?.status === 400) {
        setErrorMessage('Missing Username or Password')

        // handle invalid syntax
      } else if (error.response?.status === 401) {
        setErrorMessage('Unauthorized Creditentials')

        // catch-all-other-errors
      } else {
        setErrorMessage('Login Failed')
      }
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
          onChange={event => setPwd(event.target.value)}
          value={pwd}
          required
        />

        <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={1}
          sx={{ mt: 2 }}>
          <FormControlLabel
            control={<Switch checked={check} onChange={toggleCheck} />}
            label='Trust This Device'
          />
          <ButtonStyle type='submit' variant='contained'>
            Login
          </ButtonStyle>
        </Stack>
      </form>
    </section>
  )
}
