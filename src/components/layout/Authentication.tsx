import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { pushAdminStateAtom } from '../../recoil-state'

export default function Authentication() {
  const location = useLocation()

  const pushAdminState = useRecoilValue(pushAdminStateAtom)

  return pushAdminState === '' ? (
    <Navigate to='/login' state={{ from: location }} replace />
  ) : (
    <Outlet />
  )
}
