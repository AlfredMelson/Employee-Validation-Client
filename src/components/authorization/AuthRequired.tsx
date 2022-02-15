import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const AuthRequired = () => {
  const { auth } = useAuth()
  const location = useLocation()

  return auth ? (
    // Outlet represents and protects any nested child components
    <Outlet />
  ) : (
    // anyone not logged in will be redirected to the login page by replacing the location they came from with login path within their history
    <Navigate to='/' state={{ from: location }} replace />
  )
}

export default AuthRequired
