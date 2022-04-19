import axios from 'axios'
const BASE_URL = 'http://employeeverification-env.eba-7siefvt9.eu-central-1.elasticbeanstalk.com/'
// const BASE_URL = 'http://localhost:9003'

export default axios.create({
  baseURL: BASE_URL
})

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
})
