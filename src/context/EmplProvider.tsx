/* eslint-disable @typescript-eslint/no-empty-function */
import axios, { AxiosResponse } from 'axios'
import { createContext, ReactNode, useContext, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { Empl, empl as emplApi } from '../api/empl'
import { useAxiosPrivate } from '../hooks'
import { employeeStateAtom } from '../recoil-state/controls/selector'
import { API } from '../utils'

export interface Employees {
  employees: Empl[]
  isLoading: boolean
  getEmployees: () => void
  deleteEmpl: (id) => void
  updateEmpl: (empl: Empl) => void
  error: string
}

const EmplContext = createContext<Employees>({
  employees: [],
  isLoading: false,
  getEmployees: () => {},
  deleteEmpl: () => {},
  updateEmpl: () => {},
  error: ''
})

export const useEmployeesContext = () => useContext(EmplContext)

interface IEmplProvider {
  children: ReactNode
}

export const EmplProvider = ({ children }: IEmplProvider) => {
  const setEmployeeState = useSetRecoilState(employeeStateAtom)

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [employees, setEmployees] = useState<Empl[]>([])
  const axiosPrivate = useAxiosPrivate()

  const getEmployees = async () => {
    setIsLoading(true)
    const controller = new AbortController()
    try {
      // check if the component is mounted and set the response
      const response: AxiosResponse = await axiosPrivate.get(API.AWSEBEmployees, {
        signal: controller.signal
      })

      setEmployees(response.data)
      setEmployeeState(response.data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setError((error as Error).message)
    }
  }

  const deleteEmpl = async (emplId: any) => {
    try {
      await axios.delete(API.DeleteEmployee, emplId)
      const emplList = employees.filter((empl) => empl.id !== emplId)
      setEmployees(emplList)
    } catch (error) {
      throw new Error('Employee deletion failed')
    }
  }

  const updateEmpl = async (empl: Empl) => {
    try {
      emplApi.update(empl)
      const updatedEmployees = [...employees]
      updatedEmployees.splice(
        employees.findIndex((empl) => empl.id === empl.id),
        1,
        empl
      )
      setEmployees(updatedEmployees)
    } catch (error) {
      throw new Error('Employee update failed')
    }
  }

  return (
    <EmplContext.Provider
      value={{ employees, getEmployees, isLoading, error, deleteEmpl, updateEmpl }}>
      {children}
    </EmplContext.Provider>
  )
}

export default EmplContext
