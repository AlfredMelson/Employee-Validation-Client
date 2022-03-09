import { useNavigate } from 'react-router-dom'
import { useAuth, useLogout } from '../../../hooks'
import { LogoutIcon } from '../../icons'
import { AdminIconButtonSx, ToolTipSx } from '../../mui'

export default function AdminLogout() {
  const { accessToken } = useAuth()
  const logoutAdmin = useLogout(accessToken)
  const navigate = useNavigate()

  const handleAdminLogout = async (_event: any) => {
    console.log('logging out')
    //
    //
    //
    //
    //
    //
    //

    const adminLogout = await logoutAdmin()

    console.log('admin logout', adminLogout)
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

//  try {
//    console.log('Pre-Request')
//    const response = await axios.post(
//      API.Logout,
//      JSON.stringify({ adminUsername, adminPassword }),
//      AxiosLoginConfig
//    )

//    if (response.status === 200) {
//      // set state to success
//     console.log('Logout-Request' ,response.status)
//    }

//    // push admin to dashboard page
//    navigate('/', { replace: true })

//    // open error alert if there is a caught error
//  } catch (error) {
//    console.log(error)
//  }
