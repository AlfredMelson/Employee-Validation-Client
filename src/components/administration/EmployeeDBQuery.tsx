import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { IEmployee } from '../../hooks/useGetEmployees'

export default function EmployeeDBQuery() {
  const [employees, setEmployees] = useState<Array<IEmployee>>([])
  const axiosPrivate = useAxiosPrivate()

  useEffect(() => {
    let isMounted = true

    // replaces axios cancel tokens
    const controller = new AbortController()

    const getEmployees = async () => {
      try {
        const response: AxiosResponse = await axiosPrivate.get('/api/ids', {
          signal: controller.signal
        })

        // check if the component is mounted and set the response
        isMounted && setEmployees(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    getEmployees()

    return () => {
      isMounted = false
      controller.abort()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return employees
}
