import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axios'
import { API, REGEX_EmailAddress, REGEX_Password, REGEX_Username } from '../../utils'
import { LoginButtonSx } from '../mui/Button.style'

export default function RegistrationCard() {
  const navigate = useNavigate()
  // input component reference
  const userReference = useRef<HTMLInputElement | null>(null)
  // error reference
  const errorReference = useRef<HTMLParagraphElement | null>(null)

  const [user, setUser] = useState<string>('')
  const [validName, setValidName] = useState<boolean>(false)

  const [pwd, setPwd] = useState<string>('')
  const [validPwd, setValidPwd] = useState<boolean>(false)

  const [matchPwd, setMatchPwd] = useState<string>('')
  const [validMatch, setValidMatch] = useState<boolean>(false)

  const [email, setEmail] = useState<string>('')
  const [validEmail, setValidEmail] = useState<boolean>(false)

  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    userReference.current.focus()
  }, [])

  useEffect(() => {
    setValidName(REGEX_Username.test(user))
  }, [user])

  useEffect(() => {
    setValidPwd(REGEX_Password.test(pwd))
    setValidMatch(pwd === matchPwd)
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrorMessage('')
  }, [user, pwd, matchPwd])

  useEffect(() => {
    setValidEmail(REGEX_EmailAddress.test(email))
  }, [email])

  const handleFormSubmit = async event => {
    event.preventDefault()
    // if button enabled with JS hack
    const v1 = REGEX_Username.test(user)
    const v2 = REGEX_Password.test(pwd)
    if (!v1 || !v2) {
      setErrorMessage('Invalid Entry')
      return
    }
    try {
      const response = await axios.post(API.Register, JSON.stringify({ user, pwd, email }), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      })

      // if successful, clear state and controlled inputs
      if (response.status === 201) {
        setUser('')
        setPwd('')
        setMatchPwd('')
        setEmail('')
        navigate('/')
      }
    } catch (error) {
      setErrorMessage('Registration Failed')
      // if (!error?.response) {
      //   setErrorMessage('No Server Response')
      // } else if (error.response?.status === 409) {
      //   setErrorMessage('Username Taken')
      // } else {
      //   setErrorMessage('Registration Failed')
      // }
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
          variant='outlined'
          type='text'
          id='username'
          ref={userReference}
          autoComplete='off'
          onChange={event => setUser(event.target.value)}
          value={user}
          required
          aria-invalid={validName ? 'false' : 'true'}
          aria-describedby='uidnote'
          className='input mt-8px'
        />
        <label htmlFor='password' className='login-input-title mt-24px'>
          Password:
        </label>
        <TextField
          variant='outlined'
          type='password'
          id='password'
          onChange={event => setPwd(event.target.value)}
          value={pwd}
          required
          aria-invalid={validPwd ? 'false' : 'true'}
          aria-describedby='pwdnote'
          className='input mt-8px'
        />
        <label htmlFor='confirm_pwd' className='login-input-title mt-24px'>
          Confirm Password:
        </label>
        <TextField
          variant='outlined'
          type='password'
          id='confirm_pwd'
          onChange={event => setMatchPwd(event.target.value)}
          value={matchPwd}
          required
          aria-invalid={validMatch ? 'false' : 'true'}
          aria-describedby='confirmnote'
          className='input mt-8px'
        />
        <label htmlFor='emailAddress' className='login-input-title mt-24px'>
          Email:
        </label>
        <TextField
          variant='outlined'
          type='text'
          id='emailAddress'
          autoComplete='off'
          onChange={event => setEmail(event.target.value)}
          value={email}
          required
          aria-invalid={validEmail ? 'false' : 'true'}
          aria-describedby='emailnote'
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
          sx={{ mt: 3 }}>
          <LoginButtonSx type='submit' variant='contained'>
            Register
          </LoginButtonSx>
        </Stack>
      </form>
    </section>
  )
}
