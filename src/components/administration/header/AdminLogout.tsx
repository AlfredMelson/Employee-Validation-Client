import { useLogout } from '../../../hooks'
import LogoutSubmission from './LogoutSubmission'

export default function AdminLogout() {
  const logout = useLogout()

  const handleAdminLogout = async (event) => {
    event.preventDefault()
    await logout()
  }

  // <ToolTipSx tooltipTitle={'Logout'} placement='top'>

  return <LogoutSubmission onClick={handleAdminLogout} />
}
