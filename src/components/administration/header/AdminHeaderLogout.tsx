import { useNavigate } from 'react-router-dom'
import { useAuth, useLogout } from '../../../hooks'
import { LogoutIcon } from '../../icons'
import { AdminHeaderIconButtonSx, ToolTipSx } from '../../mui'

export default function AdminHeaderLogout() {
  const { accessToken } = useAuth()
  const logoutAdmin = useLogout(accessToken)
  const navigate = useNavigate()

  const handleAdminLogout = async (_event: any) => {
    console.log('logging out')
    await logoutAdmin
    navigate('/')

    console.log('logged out')
  }

  return (
    <ToolTipSx tooltipTitle={'Logout'}>
      <AdminHeaderIconButtonSx onClick={handleAdminLogout} sx={{ mr: '4px' }}>
        <LogoutIcon />
      </AdminHeaderIconButtonSx>
    </ToolTipSx>
  )
}
