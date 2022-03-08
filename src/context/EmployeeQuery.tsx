import { AxiosResponse } from 'axios'
import { useSetRecoilState } from 'recoil'
import { useAxiosPrivate } from '../hooks'
import { employeeStateAtom } from '../recoil-state/controls/selector'

export async function EmployeeQuery() {
  const setEmployeeState = useSetRecoilState(employeeStateAtom)

  const axiosPrivate = useAxiosPrivate()

  const controller = new AbortController()
  try {
    // check if the component is mounted and set the response
    const response: AxiosResponse = await axiosPrivate.get('/api/ids', {
      signal: controller.signal
    })

    setEmployeeState(response.data)
  } catch (error) {
    console.log(error)
  }
  return
}
