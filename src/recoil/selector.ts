import { selectorFamily } from 'recoil'
import EmployeeDBQuery from '../components/administration/EmployeeDBQuery'
import IEmployeeType from '../types/employee.type'

export const employeeDataQuery = selectorFamily({
  key: 'employeeData',
  get: () => async () => {
    const response: IEmployeeType[] = EmployeeDBQuery()

    return response
  }
})
