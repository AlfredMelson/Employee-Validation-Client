import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const PreAuthorized = () => {
  const { auth } = useAuth()
  const location = useLocation()

  return !auth ? (
    // Outlet represents any nested child components not requiring authorization
    <Outlet />
  ) : (
    // anyone already logged in will be redirected to the dashboard by replacing the location they came from with dashboard path within their history
    <Navigate to='/dashboard' state={{ from: location }} replace />
  )
}

export default PreAuthorized
