import axios from '../api/axios'
import { API, AxiosEmplUpdateConfig } from '../utils'
import useAuth from './useAuth'

interface IUseUpdateEmployee {
  emplId: string
  emplName: string
  emplRole: string
  emplEmail: string
}

const useUpdateEmployee = ({ emplId, emplName, emplRole, emplEmail }: IUseUpdateEmployee) => {
  const { setAuth } = useAuth()

  const update = async () => {
    // empty out user log state
    setAuth({})
    try {
      await axios.post(
        // pull in the update endpoint
        API.UpdateEmployee,

        // pull in the data
        // {"emplId": "12", "emplName": "Vejuna Melson", "emplRole": "write", "emplEmail": "vejuna@gmail.com"}
        JSON.stringify({ emplId, emplName, emplRole, emplEmail }),

        // pull in axios update config; sending back the secure cookie with the request
        AxiosEmplUpdateConfig
      )
    } catch (err) {
      console.error(err)
    }
  }

  return update
}

export default useUpdateEmployee
