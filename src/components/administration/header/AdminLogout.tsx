import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks'
import { uxdelay } from '../../../utils'
import { LogoutIcon } from '../../icons'
import { IconButtonSx, ToolTipSx } from '../../mui'

export default function AdminLogout() {
  const navigate = useNavigate()

  const { setAuth } = useAuth()

  const handleAdminLogout = async (event) => {
    event.preventDefault()

    await uxdelay(1000)
    setAuth({})
    await uxdelay(1000)
    // push admin to login page
    navigate('/', { replace: true })
  }

  return (
    <ToolTipSx tooltipTitle={'Logout'}>
      <IconButtonSx onClick={handleAdminLogout} sx={{ mr: '4px' }}>
        <LogoutIcon />
      </IconButtonSx>
    </ToolTipSx>
  )
}

