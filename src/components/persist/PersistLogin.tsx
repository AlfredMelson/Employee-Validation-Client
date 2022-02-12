import { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { LOCAL } from '../../constants'
import { useAuth, useLocalStorage } from '../../hooks'
import useRefreshToken from '../../hooks/useRefreshToken'

const PersistLogin = () => {
  const { auth } = useAuth()
  const [persist] = useLocalStorage(LOCAL.Persist, false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const refresh = useRefreshToken()

  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true
    const verifyRefreshToken = async () => {
      try {
        await refresh()
      } catch (err) {
        console.error(err)
      } finally {
        isMounted && setIsLoading(false)
      }
    }

    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false)

    return () => {
      isMounted.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log(`isLoading: ${isLoading}`)
    console.log(`aT: ${JSON.stringify(auth?.accessToken)}`)
  }, [auth?.accessToken, isLoading])

  return <>{!persist ? <Outlet /> : isLoading ? <p>Loading...</p> : <Outlet />}</>
}

export default PersistLogin
