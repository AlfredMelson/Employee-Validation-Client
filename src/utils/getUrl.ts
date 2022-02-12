import queryString from 'query-string'
import { API } from './constants'
const API_URL = 'http://localhost:9003'

const getUrl = (endpoint: API, params?: any) => {
  const query = queryString.stringify(params)

  return `${API_URL}/${endpoint}${query ? `?${query}` : ''}`
}

export default getUrl
