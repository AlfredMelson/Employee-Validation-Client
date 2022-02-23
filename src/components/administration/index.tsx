import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEmployeesContext } from '../../context'
import { useAuth, useLogout } from '../../hooks'
import { UMSwatch } from '../../style'
import { LogoutIcon, SecurityIcon } from '../icons'
import { HeaderButtonSx, LogoutButtonSx } from '../mui/Button.style'
import SelectorTabs from './SelectorTabs'

export default function Dashboard() {
  const { accessToken } = useAuth()
  const { employees, getEmployees } = useEmployeesContext()
  const logoutAdmin = useLogout(accessToken)
  const navigate = useNavigate()

  useEffect(() => {
    getEmployees()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAdminLogout = async (_event: any) => {
    console.log('logging out')
    await logoutAdmin
    navigate('/')

    console.log('logged out')
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
          onClick={handleAdminLogout}
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
      <SelectorTabs employees={employees} />
    </Card>
  )
}
