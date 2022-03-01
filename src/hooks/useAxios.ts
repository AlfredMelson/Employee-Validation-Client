import { AxiosRequestTransformer, AxiosResponseTransformer } from 'axios'
import { useEffect, useState } from 'react'

export interface IAxiosRequestConfig {
  // `url` is the server URL that will be used for the request
  url?: string
  // `method` is the request method to be used when making the request
  method?: string // default 'get'
  // `baseURL` will be prepended to `url` unless `url` is absolute
  baseURL?: string
  // `transformRequest` allows changes to the request data before it is sent to the server. This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'.  The last function in the array must return a string or an instance of Buffer, ArrayBuffer, FormData or Stream. You may modify the headers object.
  transformRequest?: AxiosRequestTransformer | AxiosRequestTransformer[]
  // `transformResponse` allows changes to the response data to be made before it is passed to then/catch
  transformResponse?: AxiosResponseTransformer | AxiosResponseTransformer[]
  // `headers` are custom headers to be sent
  headers?: any
  // `params` are the URL parameters to be sent with the request that must be a plain object or a URLSearchParams object.  NOTE: params that are null or undefined are not rendered in the URL.
  params?: any
  // `data` is the data to be sent as the request body
  data?: any
  // `timeout` specifies the number of milliseconds before the request times out. Requests taking longer than `timeout` will be aborted.
  timeout?: number
  // `withCredentials` indicates whether or not cross-site Access-Control requests should be made using credentials
  withCredentials?: boolean
  // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.  This will set an `Authorization` header, overwriting any existing `Authorization` custom headers you have set using `headers`. Please note that only HTTP Basic auth is configurable through this parameter. For Bearer tokens and such, use `Authorization` custom headers instead.
  auth?: {
    username: string
    password: string
  }
  // `responseType` indicates the type of data that the server will respond with options are: 'arraybuffer', 'document', 'json', 'text', 'stream', browser only: 'blob'
  responseType?: string // default 'json'

  // `responseEncoding` indicates encoding to use for decoding responses (Node.js only).  Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: string // default 'utf8'

  // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
  xsrfCookieName: string // default 'XSRF-TOKEN'

  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: string // default 'X-XSRF-TOKEN'
}

const useAxios = configObj => {
  const { axiosInstance, method, url, requestConfig = {} } = configObj

  const [axiosResponse, setAxiosResponse] = useState([])
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [reload, setReload] = useState(0)

  const refetch = () => setReload(prev => prev + 1)

  useEffect(() => {
    // create new instance of AbortController that will allow request cancellation if needed and prevent memory leaks
    const controller = new AbortController()

    const fetchData = async () => {
      try {
        // set passed method to lowercase
        const response = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          // attach abort controller to request config to allow cancellation
          signal: controller.signal
        })
        console.log('useAxios response', response)
        setAxiosResponse(response.data)
      } catch (err) {
        console.log(err.message)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    // call the function
    fetchData()

    // useEffect cleanup function
    return () => controller.abort()

    // eslint-disable-next-line
  }, [reload])

  return [axiosResponse, error, loading, refetch]
}

export default useAxios
