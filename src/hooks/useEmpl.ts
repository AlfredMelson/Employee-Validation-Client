import { useContext } from 'react'
import EmplContext from '../context/EmplProvider'

const useEmpl = () => {
  return useContext(EmplContext)
}

export default useEmpl
