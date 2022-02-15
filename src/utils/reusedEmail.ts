import { IEmployee } from '../services/getEmployees'

const reusedEmail = (item: IEmployee, itemList: Array<IEmployee>) => {
  const reusedItems = itemList.filter(listItem => listItem.email === item.email)

  return reusedItems.length > 1
}

export default reusedEmail
