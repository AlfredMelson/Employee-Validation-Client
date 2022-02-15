import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from '../../../api/axios'
import { useAuth } from '../../../hooks'
import { AxiosLogoutConfig } from '../../../utils'
import { LogoutButtonSx } from '../../mui/button.style'

export default function Header() {
  const navigate = useNavigate()
  const { setAuth } = useAuth()

  const handleUserLogout = async event => {
    event.preventDefault()

    await axios.get('/admin/logout', AxiosLogoutConfig)

    // clear auth
    setAuth({})
    // push user to login page
    navigate('/')
  }
  // FIX // const numWrongEmails = Object.keys(employees).length
  const numWrongEmails = 9999

  return (
    <div className='header'>
      <div className='user-section'>
        <LogoutButtonSx variant='outlined' type='submit' onClick={handleUserLogout}>
          <Typography variant='body2'>Logout</Typography>
        </LogoutButtonSx>
      </div>
      <Typography variant='h4' gutterBottom>{`${numWrongEmails} Emails are wrong`}</Typography>
      {/* <h1>{`${items.length} Emails are wrong`}</h1> */}
      <Typography variant='body1'>
        Email validator to protect your company from bad registrations
      </Typography>
    </div>
  )
}
