import { useNavigate } from 'react-router-dom'
import { useAuth, useLogout } from '../../../hooks'
import { LogoutIcon } from '../../icons'
import { AdminIconButtonSx, ToolTipSx } from '../../mui'

export default function AdminLogout() {
  const { accessToken } = useAuth()
  const logoutAdmin = useLogout(accessToken)
  const navigate = useNavigate()

  const handleAdminLogout = (_event: any) => {
    console.log('logging out')
    logoutAdmin
    navigate('/')

    console.log('logged out')
  }

  return (
    <ToolTipSx tooltipTitle={'Logout'}>
      <AdminIconButtonSx onClick={handleAdminLogout} sx={{ mr: '4px' }}>
        <LogoutIcon />
      </AdminIconButtonSx>
    </ToolTipSx>
  )
}
