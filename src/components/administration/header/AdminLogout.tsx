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
    // push admin to login page
    navigate(-1)
  }

  return (
    <ToolTipSx tooltipTitle={'Logout'} placement='top'>
      <IconButtonSx onClick={handleAdminLogout} sx={{ mr: '4px' }}>
        <LogoutIcon />
      </IconButtonSx>
    </ToolTipSx>
  )
}
