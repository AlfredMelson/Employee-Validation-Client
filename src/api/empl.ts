import { AxiosResponse } from 'axios'
import { API } from '../utils/constants'
import { axiosPrivate } from './axiosCustom'

export enum Roles {
  read = 'read',
  write = 'write',
  amin = 'amin'
}

export interface Empl {
  id: string
  name: string
  role: Roles
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

const updateEmpl = async (empl: Empl): Promise<void> => {
  try {
    const response: AxiosResponse = await axiosPrivate.put(API.Employees, JSON.stringify(empl), {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true
    })
    console.log(response)
  } catch (error) {
    throw new Error(error.message)
  }
}

export const empl = {
  getAll: getEmployees,
  update: updateEmpl
}
