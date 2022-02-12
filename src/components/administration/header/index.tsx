import { FC, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import useLogout from '../../../hooks/useLogout'
import { IItem } from '../../../services/getUserItems'
import { ButtonStyle } from '../../mui/button.style'

interface IHeader {
  items: Array<IItem>
  username: string
}

const Header: FC<IHeader> = ({ items, username }) => {
  const { setAuth } = useAuth()
  const logout = useLogout()
  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // error reference
  const errorReference = useRef<HTMLParagraphElement | null>(null)

  const handleUserLogout = async e => {
    e.preventDefault()
    setAuth({})
    try {
      const response = await logout()
      console.log(JSON.stringify(response))
      navigate('/', { replace: true })
    } catch (err) {
      if (!err?.response) {
        setErrorMessage('No Server Response')
      } else if (err.response?.status === 401) {
        setErrorMessage('Unauthorized')
      } else {
        setErrorMessage('Logout Failed')
      }
      errorReference.current.focus()
    }
  }

  return (
    <div className='header'>
      <div className='user-section'>
        <ButtonStyle type='submit' variant='contained' onClick={handleUserLogout}>
          {`Logout ${username}`}
        </ButtonStyle>
        <p
          ref={errorReference}
          className={errorMessage ? 'errorMessage' : 'offscreen'}
          aria-live='assertive'>
          {errorMessage}
        </p>
      </div>
      <h1>{`${items.length} Emails are wrong`}</h1>
      <span>Email validator to protect your company from bad registrations</span>
    </div>
  )
}

export default Header
