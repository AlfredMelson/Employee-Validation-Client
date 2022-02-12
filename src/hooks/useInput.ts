import useLocalStorage from './useLocalStorage'

const useInput = (key, initValue) => {
  const [value, setValue] = useLocalStorage(key, initValue)

  const resetUser = () => setValue(initValue)

  const userAttributions = {
    value,
    onChange: event => setValue(event.target.value)
  }

  return [value, resetUser, userAttributions]
}

export default useInput
