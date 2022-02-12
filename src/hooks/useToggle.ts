import useLocalStorage from './useLocalStorage'

const useToggle = (key, initValue) => {
  const [value, setValue] = useLocalStorage(key, initValue)

  const toggle = value => {
    setValue(prev => {
      // check if typeof value is a boolean, else return the previous value
      return typeof value === 'boolean' ? value : !prev
    })
  }

  return [value, toggle]
}

export default useToggle
