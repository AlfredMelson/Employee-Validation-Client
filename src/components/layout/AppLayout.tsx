import { Outlet } from 'react-router-dom'
// import { useEffect } from 'react'
// import { Outlet, useLocation, useNavigate } from 'react-router-dom'
// import { useAxiosPrivate } from '../../hooks'

export default function AppLayout() {
  // const axiosPrivate = useAxiosPrivate()
  // const navigate = useNavigate()
  // const location = useLocation()

  // useEffect(() => {
  //   let isMounted = true
  //   const controller = new AbortController()

  //   const getAdmin = async () => {
  //     try {
  //       await axiosPrivate
  //       isMounted && navigate('/dashboard', { state: { from: location }, replace: true })
  //     } catch (err) {
  //       console.error(err)
  //       navigate('/login', { state: { from: location }, replace: true })
  //     }
  //   }

  //   getAdmin()

  //   return () => {
  //     isMounted = false
  //     controller.abort()
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return <Outlet />
}
