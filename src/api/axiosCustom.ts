import axios from 'axios'
const BASE_URL = 'http://localhost:9003'

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json'
  }
})

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
})
