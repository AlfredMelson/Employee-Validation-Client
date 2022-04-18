import axios from 'axios'
const BASE_URL = 'https://o98ppihcv9.execute-api.eu-central-1.amazonaws.com'
// const DEV_URL = 'http://localhost:9003'

export default axios.create({
  baseURL: BASE_URL
})

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
})
