import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:9003',
  headers: {
    'Content-type': 'application/json'
  }
})

export const axiosPrivate = axios.create({
  baseURL: 'http://localhost:9003',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
})
