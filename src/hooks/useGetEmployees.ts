import axios from '../api/axios'
import { API, AxiosGetDataConfig } from '../utils'

export enum Roles {
  read = 'read',
  write = 'write',
  admin = 'admin'
}

export interface IEmployee {
  id: string
  name: string
  role: Roles
  email: string
  createdAt: string
}

const useGetEmployees = async (): Promise<Array<IEmployee>> => {
  try {
    const response = await axios.get(
      // pull in the items endpoint
      API.Employees,

      // pull in axios items config
      AxiosGetDataConfig
    )

    return response.data
  } catch (error) {
    console.error(error)
  }
}

export default useGetEmployees
