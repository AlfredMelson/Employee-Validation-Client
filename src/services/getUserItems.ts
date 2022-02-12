import axios from '../api/axios'
import { API } from '../constants'

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
  const response = await axios.post(API.Items, userId, {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
  })
  console.log(response)

  // const url = getUrl(API.Items, {
  //   userId
  // })
  // const response = await fetch(url, {
  //   headers: {
  //     Authorization: `Bearer ${localStorage.getItem('token')}`
  //   }
  // })

  // const data = await response.json()

  // return data.items
  return
}

export default getUserItems
