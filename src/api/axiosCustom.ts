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

const instance = axios.create({
  baseURL: 'http://localhost:9003',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
    // Authorization: 'Bearer ' + localStorage.getItem('token')
  }
})

export const emplAPI = {
  getEmpls(currentPage = 1, pageSize = 10) {
    return instance
      .get(`empls?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  }
}

export const authAPI = {
  auth() {
    return instance.get(`admin/auth`)
  },
  login(email: string, password: string, rememberMe = false) {
    return instance.post(`admin/login`, { email, password, rememberMe })
  },
  logout() {
    return instance.delete(`admin/logout`)
  }
}
