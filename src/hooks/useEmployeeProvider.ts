// UNUSED
import { useState } from 'react'
import getEmployees, { IEmployee } from '../services/getEmployees'

const useEmployeeProvider = () => {
  const [isLoading, _setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>()
  const [employees, setEmployees] = useState<Array<IEmployee>>([])

  const fetchEmployees = async () => {
    try {
      const response = await getEmployees()
      setEmployees(response)
    } catch (err) {
      // handle no response from the server
      if (!err?.response) {
        setErrorMessage('No Server Response')

        // handle invalid syntax
      } else if (err.response?.status === 401) {
        setErrorMessage('Unauthorized')
      } else {
        // catch-all-other-errors
        setErrorMessage('Logout Failed')
      }
    }
  }
  fetchEmployees()

  return {
    isLoading,
    errorMessage,
    employees
  }
}

export default useEmployeeProvider
