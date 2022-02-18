// UNUSED
import { useEffect } from 'react'
import { axiosPrivate } from '../api/axiosCustom'
import useAuth from './useAuth'
import useRefreshToken from './useRefreshToken'

const useAxiosPrivate = () => {
  // define the useRefreshToken
  const refresh = useRefreshToken()

  // pull in auth state
  const { auth } = useAuth()

  useEffect(() => {
    // similar to vanilla JS event listeners, interceptors get attached but will need to be removed to avoid multiple attachments
    const requestIntercept = axiosPrivate.interceptors.request.use(
      config => {
        // check the config and if the authorization header doesn't exist, then the request is not a re-try.
        if (!config.headers['Authorization']) {
          // As the first attempt, set the authorization header equal to the access token from auth state. This access token could be either the initial toekn at login or the token at refresh.
          config.headers['Authorization'] = `Bearer ${auth?.accessToken}`
        }
        return config
      },

      // make sure to handle an error
      error => Promise.reject(error)
    )

    const responseIntercept = axiosPrivate.interceptors.response.use(
      // get the reponse, returning it if it's not a 401
      response => response,

      // otherwise handle the error asynchronous - this will handle situations like token expired
      async error => {
        // first: get the previous request via axios by accessing the config proeprty
        const prevRequest = error?.config

        // check the error response status is equal to forbiden (expired access token) and them check a custom property on the request called sent to see if it doesn't exist.
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          // Note: use the sent property to avoid loops
          prevRequest.sent = true

          // get a new access token via refresh function
          const newAccessToken = await refresh()

          // access the previous request headers authorization setting and pass in the new access token
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`

          // with access token in place, return axiosPrivate again passin gin prevRequest
          return axiosPrivate(prevRequest)
        }

        // make sure to handle an error
        return Promise.reject(error)
      }
    )

    // useEffect cleanup function
    return () => {
      // eject the request interceptor
      axiosPrivate.interceptors.request.eject(requestIntercept)

      // eject the response interceptor
      axiosPrivate.interceptors.response.eject(responseIntercept)
    }

    // pass in auth state and refresh function
  }, [auth, refresh])

  // return axios private instance with interceptors attached to handle JWT tokens
  return axiosPrivate
}

export default useAxiosPrivate
