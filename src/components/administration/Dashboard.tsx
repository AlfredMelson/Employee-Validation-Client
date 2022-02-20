import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axiosCustom'
import { useAuth } from '../../hooks'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { IEmployee } from '../../hooks/useGetEmployees'
import UMSwatch from '../../style/UMSwatch'
import { AxiosLogoutConfig } from '../../utils'
import { LogoutIcon, SecurityIcon } from '../icons'
import { HeaderButtonSx, LogoutButtonSx } from '../mui/Button.style'
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
      sx={{
        bgcolor: UMSwatch.Grey[100],
        borderRadius: { xs: '0px', sm: '4px' },
        minWidth: { xs: '100%', sm: '600px' }
      }}>
      <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ p: '20px' }}>
        <HeaderButtonSx
          disableElevation
          disableFocusRipple
          disableRipple
          startIcon={<SecurityIcon />}>
          <Typography
            variant='h6'
            sx={{
              textTransform: 'none'
            }}>
            Email Validator
          </Typography>
        </HeaderButtonSx>
        <LogoutButtonSx
          type='submit'
          onClick={handleUserLogout}
          endIcon={<LogoutIcon />}
          sx={{ color: UMSwatch.Text.Link }}>
          Logout
        </LogoutButtonSx>
      </Stack>
      <Typography
        variant='body1'
        sx={{
          p: '20px 30px 40px 30px',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: '19px'
        }}>
        Protect your company from bad registrations.
      </Typography>
      <NavTabs employees={employees} />
    </Card>
  )
}
