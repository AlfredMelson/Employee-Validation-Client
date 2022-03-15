import axios, { AxiosResponse } from 'axios'
import { Empl } from './empl'

const apiClient = axios.create({
  baseURL: 'http://localhost:9003/api',
  headers: {
    'Content-type': 'application/json'
  }
})

/*
Methods     Urls              Actions
POST        /api/empl         create new Empl
GET         /api/empl         retrieve all empls
GET         /api/empl/:id     retrieve a Empl by :id
PUT         /api/empl/:id     update a Empl by :id
DELETE      /api/empl/:id     delete a Empl by :id
DELETE      /api/empl         delete all empl
*/

export const findAll = async () => {
  const response: AxiosResponse = await apiClient.get<Empl[]>('/ids')
  return response.data
}

export const findById = async (id: string) => {
  const response: AxiosResponse = await apiClient.get<Empl>(`/empl/${id}`)
  return response.data
}

export const create = async ({ id, firstname, lastname, role, email }: Empl) => {
  const response: AxiosResponse = await apiClient.post<any>('/create', {
    id,
    firstname,
    lastname,
    role,
    email
  })
  return response.data
}

export const update = async (id: string, { firstname, lastname, role, email }: Empl) => {
  const response: AxiosResponse = await apiClient.put<any>(`/update/${id}`, {
    id,
    firstname,
    lastname,
    role,
    email
  })
  return response.data
}

export const deleteById = async (id: string) => {
  const response: AxiosResponse = await apiClient.delete<any>(`/delete/${id}`)
  return response.data
}

const EmployeeService = {
  findAll,
  findById,
  create,
  update,
  deleteById
}
export default EmployeeService
