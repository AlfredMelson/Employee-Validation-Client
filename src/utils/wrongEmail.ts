import { IEmployee } from '../services/getEmployees'

const wrongEmail = (item: IEmployee) => {
  const validEmail = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  )
  return !validEmail.test(item.email)
}

export default wrongEmail
