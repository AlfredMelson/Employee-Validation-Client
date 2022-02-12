import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const AuthRequired = () => {
  const { auth } = useAuth()
  const location = useLocation()

  return auth?.user ? (
    <Navigate to='/items' state={{ from: location }} replace />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  )
}

export default AuthRequired
