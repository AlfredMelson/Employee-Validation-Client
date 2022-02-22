/* eslint-disable @typescript-eslint/no-empty-function */
import { AxiosResponse } from 'axios'
import { createContext, ReactNode, useContext, useState } from 'react'
import { Empl, empl as emplApi } from '../api/empl'
import { useAxiosPrivate } from '../hooks'

interface Employees {
  employees: Empl[]
  isLoading: boolean
  getEmployees: () => void
  updateEmpl: (empl: Empl) => void
  error: string
}

const EmplContext = createContext<Employees>({
  employees: [],
  isLoading: false,
  getEmployees: () => {},
  updateEmpl: () => {},
  error: ''
})

export const useEmployeesContext = () => useContext(EmplContext)

interface IEmplProvider {
  children: ReactNode
}

export const EmplProvider = ({ children }: IEmplProvider) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [employees, setEmployees] = useState<Empl[]>([])
  const axiosPrivate = useAxiosPrivate()

  const getEmployees = async () => {
    setIsLoading(true)
    const controller = new AbortController()
    try {
      // check if the component is mounted and set the response

      const response: AxiosResponse = await axiosPrivate.get('/api/ids', {
        signal: controller.signal
      })
      // check if the component is mounted and set the response
      setEmployees(response.data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setError((error as Error).message)
    }
  }

  const updateEmpl = async (empl: Empl) => {
    try {
      emplApi.update(empl)
      const updatedEmployees = [...employees]
      updatedEmployees.splice(
        employees.findIndex(empl => empl.id === empl.id),
        1,
        empl
      )
      setEmployees(updatedEmployees)
    } catch (error) {
      throw new Error('Item update failed')
    }
  }

  return (
    <EmplContext.Provider value={{ employees, getEmployees, isLoading, error, updateEmpl }}>
      {children}
    </EmplContext.Provider>
  )
}

export default EmplContext
