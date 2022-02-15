import { useEffect, useState } from 'react'
import useAuth from './useAuth'
import useAxiosPrivate from './useAxiosPrivate'

const useLogout = () => {
  const { setAuth } = useAuth()
  const axiosPrivate = useAxiosPrivate()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    // replaces axios cancel tokens
    const controller = new AbortController()

    const logoutAdmin = async () => {
      try {
        const response = await axiosPrivate.get('/admin/logout', {
          signal: controller.signal
        })
        console.log('useLogout: ', response)

        // check if the component is mounted and set the response
        isMounted && setAuth({})
      } catch (err) {
        // handle no response from the server
        if (!err?.response) {
          setErrorMessage('No Server Response')

          // handle invalid syntax
        } else if (err.response?.status === 401) {
          setErrorMessage('Unauthorized')
        } else {
          // catch-all-other-errors
          setErrorMessage('Logout Failed')
        }
      }
    }
    logoutAdmin()

    return () => {
      isMounted = false
      controller.abort()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(errorMessage)

  return errorMessage
}

export default useLogout
