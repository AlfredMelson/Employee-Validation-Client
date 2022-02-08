import { ChangeEvent, SyntheticEvent, useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Routes } from '../../constants'
import login from '../../services/login'
import ErrorBlock from '../ErrorBlock'

import './login-style.scss'

const Login = () => {
  const { push } = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState<string>()

  // input component reference
  const userReference = useRef<HTMLInputElement | null>(null)
  // error reference
  const errorReference = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    // set the focus on the first input once the componet loads
    // using the userReference as the ref
    userReference.current.focus()
  }, [])

  useEffect(() => {
    // empty any error messages when either the user state or password state changes
    setErrorMessage('')
  }, [username, password])

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage(null)

    try {
      await login(username, password)
      push(Routes.Users)
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  return (
    <div className='login-page'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h1 className='text-center'>Mygom.tech</h1>
        <input
          type='text'
          id='username'
          placeholder='Username'
          ref={userReference}
          autoComplete='off'
          onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
          value={username}
          required
          className='input mt-52px'
        />
        <input
          type='password'
          id='password'
          placeholder='Password'
          value={password}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
          required
          className='input mt-24px'
        />
        <ErrorBlock ref={errorReference} errorMessage={errorMessage} />
        <button type='submit' className='button mt-24px'>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
