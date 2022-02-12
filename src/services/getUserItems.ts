import axios from '../api/axios'
import { API, AXIOS_ITEMS_Configuration } from '../utils'

export enum Roles {
  read = 'read',
  write = 'write',
  admin = 'admin'
}

export interface IItem {
  name: string
  role: Roles
  email: string
  createdAt: string
}
const getUserItems = async (userId?: string): Promise<Array<IItem>> => {
  try {
    const response = await axios.post(
      // pull in the items endpoint
      API.Items,

      // pull in the userId
      userId,

      // pull in axios items config
      AXIOS_ITEMS_Configuration
    )
    console.log(response.data)

    // handle unsuccessful login responses
    if (response.data !== 200) {
      // send status 401: 'unauthorized; response means unauthenticated'
      if (response.data === 401) {
        return
      }

      // handle all other errors
      throw new Error(`${response.status} ${response.statusText}`)
    }

    return response.data
  } catch (error) {
    console.error(error)
  }
}

export default getUserItems
