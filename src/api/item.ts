import qs from 'query-string'
import { API } from '../utils/constants'

const getUrl = (endpoint: API, params?: Record<string, string>) => {
  const query = qs.stringify(params)

  return `${process.env.API_URL}/${endpoint}${query ? `?${query}` : ''}`
}

export default getUrl

export enum Roles {
  read = 'read',
  write = 'write',
  amin = 'amin'
}

export interface Item {
  id: string
  name: string
  role: Roles
  email: string
  createdAt: string
}

const getItems = async (userId = ''): Promise<Item[]> => {
  const url = getUrl(API.Employees, {
    userId
  })
  console.log(url)

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    const data = await response.json()
    return data.items
  } catch (error) {
    throw new Error(error.message)
  }
}

// this should be PUT
const updateItem = (item: Item): void => {
  try {
    fetch(getUrl(API.Employees), {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
  } catch (error) {
    throw new Error(error.message)
  }
}

export const item = {
  getAll: getItems,
  update: updateItem
}
