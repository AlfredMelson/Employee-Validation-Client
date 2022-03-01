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
  console.log('employees', employees)
  const axiosPrivate = useAxiosPrivate()

  const getEmployees = async () => {
    setIsLoading(true)
    const controller = new AbortController()
    try {
      // check if the component is mounted and set the response
      const response: AxiosResponse = await axiosPrivate.get('/api/ids', {
        signal: controller.signal
      })
      // sort employee list alphabetically
      const sortedEmployees = await response.data.sort(function (first, second) {
        const firstName = first.name.toUpperCase() // ignore upper and lowercase
        const secondName = second.name.toUpperCase() // ignore upper and lowercase
        if (firstName < secondName) {
          return -1
        }
        if (firstName > secondName) {
          return 1
        }
        // names are the same
        return 0
      })
      // add sortId to each employee for pagination
      const sortedEmployeesWithId = await sortedEmployees.map((empl, index) => {
        return { ...empl, sortId: index + 1 }
      })
      setEmployees(sortedEmployeesWithId)
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
