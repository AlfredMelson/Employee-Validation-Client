import { CardContent } from '@mui/material'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import axios from '../../../api/axiosCustom'
import { useAuth } from '../../../hooks'
import { loginAlertErrorAtom, loginErrorMessageAtom } from '../../../recoil-state'
import { UMSwatch } from '../../../style'
import { loginField, loginFieldTitle } from '../../../style/UMAnimations'
import { API, AxiosLoginConfig, uxdelay } from '../../../utils'
import { TextFieldSx } from '../../mui'
import LoginSubmission from './LoginSubmission'

export default function LoginTextFields() {
  const navigate = useNavigate()

  // Hook up admin authentication state
  const { setAuth } = useAuth()

  // Error message display transition
  const setLoginAlertError = useSetRecoilState(loginAlertErrorAtom)

  const setLoginErrorMessage = useSetRecoilState(loginErrorMessageAtom)

  // Username textfield state
  const [adminUsername, setAdminUsername] = useState<string>('')
  const [usernameHelperText, setUsernameHelperText] = useState<string>('')

  // Password textfield state
  const [adminPassword, setAdminPassword] = useState<string>('')
  const [passwordHelperText, setPasswordHelperText] = useState<string>('')

  // Login button states
  // handle disabled state
  const [disabled, setDisabled] = useState(false)
  // handle submission state
  const [submitting, setSubmitting] = useState(false)
  // handle successful submission state
  const [successSubmit, setSuccessfulSubmit] = useState(false)

  // Handle setting and updating error message and state
  useEffect(() => {
    return () => {
      // empty any error message
      setLoginErrorMessage('')

      // reset alert when either the username or password state changes
      setLoginAlertError(false)
      setDisabled(false)
      setPasswordHelperText('')
      setUsernameHelperText('')
    }
  }, [adminUsername, adminPassword, setLoginErrorMessage, setLoginAlertError])

  const handleLoginSubmission = async (event) => {
    event.preventDefault()
    setSuccessfulSubmit(false)

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
      const response = await axios.post(
        API.Login,
        JSON.stringify({ adminUsername, adminPassword }),
        AxiosLoginConfig
      )

      if (response.status === 200) {
        // set state to success
        const accessToken: string = response.data.accessToken
        // pass adminUsername, adminPassword and accessToken into auth context
        setAuth({ adminUsername, adminPassword, accessToken })
        await uxdelay(1000)
        setAdminUsername('')
        // reset the username and password fields
        setAdminPassword('')
        await uxdelay(1000)

        setDisabled(false)
        setSuccessfulSubmit(true)
        await uxdelay(1000)
        // push admin to dashboard page
        navigate('/dashboard', { replace: true })
        await uxdelay(100)
        setSubmitting(false)
      }

      // open error alert if there is a caught error
    } catch (error) {
      setSubmitting(false)
      setDisabled(true)
      await uxdelay(300)
      setLoginAlertError(true)

      // handle no response from the server
      if (!error.response) {
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

  return (
    <CardContent sx={{ mx: { xs: '10px', sm: '20px', md: '30px' } }}>
      <form>
        <motion.div variants={loginFieldTitle}>
          <Typography variant='body1' sx={{ color: UMSwatch.White[100], margin: '0 0 4px 10px' }}>
            Username
          </Typography>
        </motion.div>
        <motion.div variants={loginField}>
          <TextFieldSx
            autoFocus
            id='username'
            type='text'
            error={usernameHelperText !== ''}
            onChange={(event) => setAdminUsername(event.target.value)}
            helperText={usernameHelperText}
          />
        </motion.div>
        <motion.div variants={loginFieldTitle}>
          <Typography
            variant='body1'
            sx={{ color: UMSwatch.White[100], margin: '20px 0 4px 10px' }}>
            Password
          </Typography>
        </motion.div>
        <motion.div variants={loginField}>
          <TextFieldSx
            id='password'
            type='password'
            error={passwordHelperText !== ''}
            onChange={(event) => setAdminPassword(event.target.value)}
            value={adminPassword}
            helperText={passwordHelperText}
          />
        </motion.div>
        <motion.div variants={loginField}>
          <LoginSubmission
            onClick={handleLoginSubmission}
            disabled={disabled}
            submitting={submitting}
            successSubmit={successSubmit}
          />
        </motion.div>
      </form>
    </CardContent>
  )
}
