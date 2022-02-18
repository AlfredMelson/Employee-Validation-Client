import LogoutIcon from '@mui/icons-material/Logout'
import SecurityIcon from '@mui/icons-material/Security'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axiosCustom'
import { useAuth } from '../../hooks'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { IEmployee } from '../../hooks/useGetEmployees'
import MygomSwatch from '../../style/MygomSwatch'
import { AxiosLogoutConfig } from '../../utils'
import { LogoutButtonSx } from '../mui/Button.style'
import NavTabs from './NavTabs'

export default function Dashboard() {
  const [employees, setEmployees] = useState<Array<IEmployee>>([])
  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    let isMounted = true

    // replaces axios cancel tokens
    const controller = new AbortController()

    const getEmployees = async () => {
      try {
        const response: AxiosResponse = await axiosPrivate.get('/api/ids', {
          signal: controller.signal
        })

        // check if the component is mounted and set the response
        isMounted && setEmployees(response.data)
      } catch (error) {
        console.error(error)
        navigate('/', { state: { from: location }, replace: true })
      }
    }
    getEmployees()

    return () => {
      isMounted = false
      controller.abort()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const navigate = useNavigate()
  const { setAuth } = useAuth()

  const handleUserLogout = async (_event: any) => {
    // clear auth
    try {
      const response: AxiosResponse = await axios.get('/admin/logout', AxiosLogoutConfig)
      // push user to login page if response status received is 204
      setAuth({})
      response.status === 204 && navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Card
      raised
      sx={{ bgcolor: MygomSwatch.Grey[100], minWidth: '524px', borderRadius: '4px', top: '0' }}>
      <CardHeader
        sx={{ p: '30px 30px 0', m: 0 }}
        avatar={
          <>
            <SecurityIcon />
            <Typography
              variant='body1'
              sx={{ ml: '10px', fontWeight: 'bold', textAlign: 'center', fontSize: '18px' }}>
              Email Validator
            </Typography>
          </>
        }
        action={
          <LogoutButtonSx
            size='small'
            variant='outlined'
            type='submit'
            onClick={handleUserLogout}
            endIcon={<LogoutIcon />}>
            Logout
          </LogoutButtonSx>
        }
      />
      <Typography
        variant='body1'
        sx={{ p: '40px 30px', fontWeight: 'bold', textAlign: 'center', fontSize: '19px' }}>
        Protect your company from bad registrations.
      </Typography>
      <CardActions>
        <NavTabs employees={employees} />
      </CardActions>
    </Card>
  )
}
