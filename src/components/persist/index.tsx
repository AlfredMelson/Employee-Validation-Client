import { Outlet } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import { useAuth, useLocalStorage } from '../../hooks'
// import useRefreshToken from '../../hooks/useRefreshToken'
// import { LOCAL } from '../../utils'

const PersistLogin = () => {
  // const [isLoading, setIsLoading] = useState(true)
  // const refresh = useRefreshToken()
  // const { auth } = useAuth()
  // const [persist] = useLocalStorage(LOCAL.Persist, false)

  // useEffect(() => {
  //   let isMounted = true

  //   async function verifyRefreshToken() {
  //     try {
  //       await refresh()
  //     } catch (err) {
  //       console.error(err)
  //     } finally {
  //       isMounted && setIsLoading(false)
  //     }
  //   }

  //   !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false)

  //   return () => (isMounted = false)
  // }, [])

  // // useEffect(() => {
  // //   console.log(`isLoading: ${isLoading}`)
  // //   console.log(`aT: ${JSON.stringify(auth?.accessToken)}`)
  // // }, [isLoading])

  // return <>{!persist ? <Outlet /> : isLoading ? <p>Loading...</p> : <Outlet />}</>
  return <Outlet />
}

export default PersistLogin
