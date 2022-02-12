import { FormControlLabel, Switch } from '@mui/material'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axios'
import { API, LOCAL } from '../../constants'
import { useAuth, useInput, useToggle } from '../../hooks'
import { ButtonStyle } from '../mui/button.style'

export default function LoginCard() {
  const { setAuth } = useAuth()
  const navigate = useNavigate()

  // input component reference
  const userReference = useRef<HTMLInputElement | null>(null)
  // error reference
  const errorReference = useRef<HTMLParagraphElement | null>(null)

  // migrate useState to useInput for localStorage persistence
  const [user, resetUser, userAttributions] = useInput(LOCAL.User, '')
  const [pwd, setPwd] = useState<string>('')

  // if no local persist value, set to false
  const [check, toggleCheck] = useToggle(LOCAL.Persist, false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    // set the focus on the first input once the componet loads using the userReference
    userReference.current.focus()
  }, [])

  useEffect(() => {
    // empty any error messages when either the user state or password state changes
    setErrorMessage('')
  }, [user, pwd])

  const handleFormSubmit = async event => {
    event.preventDefault()

    try {
      const response = await axios.post(API.Login, JSON.stringify({ user, pwd }), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      })
      console.log(typeof response)

      if (response.status !== 200) {
        if (response.status === 401) {
          return
        }
        throw new Error(`${response.status} ${response.statusText}`)
      }

      const accessToken: string = response?.data?.accessToken

      setAuth({ user, pwd, accessToken })
      // reset the form
      resetUser()
      setPwd('')
      // push user to dashboard
      navigate('/items', { replace: true })
    } catch (err) {
      if (!err?.response) {
        setErrorMessage('No Server Response')
      } else if (err.response?.status === 400) {
        setErrorMessage('Missing Username or Password')
      } else if (err.response?.status === 401) {
        setErrorMessage('Unauthorized')
      } else {
        setErrorMessage('Login Failed')
      }
      errorReference.current.focus()
    }
  }

  return (
    <section className='login-card'>
      <form className='login-form' onSubmit={handleFormSubmit}>
        <div className='login-card-header' />
        <label htmlFor='username' className='login-input-title mt-24px'>
          Username:
        </label>
        <TextField
          sx={{ py: 1 }}
          variant='outlined'
          type='text'
          id='username'
          ref={userReference}
          autoComplete='off'
          required
          {...userAttributions}
          className='input mt-8px'
        />
        <label htmlFor='password' className='login-input-title mt-24px'>
          Password:
        </label>
        <TextField
          sx={{ py: 1 }}
          variant='outlined'
          type='password'
          id='password'
          onChange={event => setPwd(event.target.value)}
          value={pwd}
          required
          className='input mt-8px'
        />
        <div>
          <p
            ref={errorReference}
            className={errorMessage ? 'errorMessage' : 'offscreen'}
            aria-live='assertive'>
            {errorMessage}
          </p>
        </div>
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
