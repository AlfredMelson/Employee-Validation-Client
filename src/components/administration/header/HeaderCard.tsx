import Alert from '@mui/material/Alert'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Collapse from '@mui/material/Collapse'
// import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../../api/axios'
import { useAuth } from '../../../hooks'
import { IEmployee } from '../../../hooks/useGetEmployees'
import { AxiosLogoutConfig } from '../../../utils'
import { LogoutButtonSx } from '../../mui/button.style'
import Filter from '../filter'

interface IHeaderCard {
  employees: Array<IEmployee>
}

export default function HeaderCard({ employees }: IHeaderCard) {
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

  // error reference
  const errorReference = useRef<HTMLParagraphElement | null>(null)

  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // handle error message display transition
  const [errorAlert, setErrorAlert] = useState<boolean>(false)

  useEffect(() => {
    setErrorMessage('X number of email errors')
    setErrorAlert(true)
  }, [])

  //   return (
  //     <div className='header'>
  //       <Stack
  //         direction='row'
  //         justifyContent='space-between'
  //         alignItems='center'
  //         spacing={2}
  //         sx={{ mx: '30px', my: '40px' }}>
  //         <Typography variant='body1' sx={{ pr: '20px', fontWeight: 'bold' }}>
  //           Email validator to protect your company from bad registrations.
  //         </Typography>
  // <LogoutButtonSx size='small' variant='outlined' type='submit' onClick={handleUserLogout}>
  //   Logout
  // </LogoutButtonSx>
  //       </Stack>
  // <Collapse in={errorAlert}>
  //   <Alert sx={{ mb: 2 }} variant='filled' severity='error' ref={errorReference}>
  //     {errorMessage}
  //   </Alert>
  // </Collapse>
  //     </div>
  //   )
  // }

  return (
    <Card sx={{ borderRadius: '4px 4px 0 0 ', minWidth: '500px', px: '30px' }}>
      <CardHeader
        sx={{ pt: '30px' }}
        action={
          <LogoutButtonSx size='small' variant='outlined' type='submit' onClick={handleUserLogout}>
            Logout
          </LogoutButtonSx>
        }
      />
      <Typography
        variant='body1'
        sx={{ pt: '20px', pb: '20px', fontWeight: 'bold', textAlign: 'center', fontSize: '18px' }}>
        Email validator to protect your company from bad registrations.
      </Typography>
      <CardContent sx={{ padding: '20px 30px' }}>
        <Collapse in={errorAlert}>
          <Alert sx={{ mb: 2 }} variant='filled' severity='error' ref={errorReference}>
            {errorMessage}
          </Alert>
        </Collapse>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-evenly', alignItems: 'center', pb: '30px' }}>
        <Filter employees={employees} />
      </CardActions>
    </Card>
  )
}
