import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks'

export default function Authentication() {
  const { auth } = useAuth()
  const location = useLocation()

  console.log('auth', auth)
  console.log('auth.accessToken', auth.accessToken)

  return (
    <>
      <Outlet />
      {!auth.accessToken && <Navigate to='/dashboard' state={{ from: location }} replace />}
    </>
  )
}
