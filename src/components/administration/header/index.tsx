import Alert from '@mui/material/Alert'
import Collapse from '@mui/material/Collapse'
import { FunctionComponent, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useLogout from '../../../hooks/useLogout'
import { IItem } from '../../../services/getUserItems'
import { ButtonStyle } from '../../mui/button.style'

interface IHeader {
  items: Array<IItem>
  username: string
}

const Header: FunctionComponent<IHeader> = ({ items, username }) => {
  const logout = useLogout()
  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // handle error message display transition
  const [errorAlert, setErrorAlert] = useState<boolean>(false)

  // error reference
  const errorReference = useRef<HTMLParagraphElement | null>(null)

  const handleUserLogout = async e => {
    e.preventDefault()
    setErrorAlert(false)
    try {
      await logout()

      // push user to login page
      navigate('/login')

      // open error alert if there is a caught error
    } catch (err) {
      setErrorAlert(true)

      // handle no response from the server
      if (!err?.response) {
        setErrorMessage('No Server Response')

        // handle invalid syntax
      } else if (err.response?.status === 401) {
        setErrorMessage('Unauthorized')
      } else {
        // catch-all-other-errors
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
        <Collapse in={errorAlert}>
          <Alert sx={{ mb: 2 }} variant='filled' severity='error' ref={errorReference}>
            {errorMessage}
          </Alert>
        </Collapse>
      </div>
      <h1>{`${items.length} Emails are wrong`}</h1>
      <span>Email validator to protect your company from bad registrations</span>
    </div>
  )
}

export default Header
