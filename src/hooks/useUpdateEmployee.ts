import axios from '../api/axios'
import { API, AxiosEmplUpdateConfig } from '../utils'

interface IUseUpdateEmployee {
  emplId: string
  emplName: string
  emplRole: string
  emplEmail: string
}

const useUpdateEmployee = ({ emplId, emplName, emplRole, emplEmail }: IUseUpdateEmployee) => {
  const update = async () => {
    try {
      await axios.post(
        // pull in the update endpoint
        API.UpdateEmployee,

        // pull in the employee data
        JSON.stringify({ emplId, emplName, emplRole, emplEmail }),

        // pull in axios update config; sending back the secure cookie with the request
        AxiosEmplUpdateConfig
      )
    } catch (error) {
      console.error(error)
    }
  }

  return update
}

export default useUpdateEmployee
