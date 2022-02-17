import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axios'
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
        const response = await axiosPrivate.get('/api/ids', {
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

  const handleUserLogout = async event => {
    event.preventDefault()
    try {
      await axios.get('/admin/logout', AxiosLogoutConfig)
      // clear auth
      setAuth({})
      // push user to login page
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Card raised sx={{ bgcolor: MygomSwatch.Grey[100], minWidth: '524px', borderRadius: '4px' }}>
      <CardHeader
        sx={{ p: '30px 30px 0', m: 0 }}
        action={
          <LogoutButtonSx size='small' variant='outlined' type='submit' onClick={handleUserLogout}>
            Logout
          </LogoutButtonSx>
        }
      />
      <Typography
        variant='body1'
        sx={{ p: '20px 30px', fontWeight: 'bold', textAlign: 'center', fontSize: '18px' }}>
        Email Validator to protect your company from bad registrations.
      </Typography>
      <CardContent sx={{ padding: '20px 60px' }}></CardContent>
      <CardActions>
        <NavTabs employees={employees} />
      </CardActions>
    </Card>
  )
}
