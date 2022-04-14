import { AxiosResponse } from 'axios'
import { API } from '../utils/constants'
import api, { axiosPrivate } from './axiosCustom'

export enum Roles {
  read = 'read',
  write = 'write',
  amin = 'amin'
}

export interface Empl {
  id: string
  firstname: string
  lastname: string
  role: string
  email: string
  createdAt: string
}

const getEmployees = async () => {
  // replaces axios cancel tokens
  const controller = new AbortController()
  try {
    // check if the component is mounted and set the response

    const response: AxiosResponse = await axiosPrivate.get('/api/ids', {
      signal: controller.signal
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const deleteEmpl = async (emplId): Promise<void> => {
  try {
    await api.delete(API.DeleteEmployee, emplId)
  } catch (error) {
    console.log(error)
  }
}

const updateEmpl = async (empl: Empl): Promise<void> => {
  try {
    const response: AxiosResponse = await axiosPrivate.put(API.Employees, JSON.stringify(empl), {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true
    })
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

export const empl = {
  getAll: getEmployees,
  delete: deleteEmpl,
  update: updateEmpl
}
