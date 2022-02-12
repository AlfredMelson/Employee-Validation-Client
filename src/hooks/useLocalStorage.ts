import { useEffect, useState } from 'react'

const getLocalValue = (key, initValue) => {
  // parse stored json
  const localValue = JSON.parse(localStorage.getItem(key))

  // handle if a value is already stored in localStorage by returning its result
  if (localValue) return localValue

  // handle if the initial value is a function
  if (initValue instanceof Function) return initValue()

  // otherwise return the initial value
  return initValue
}

const useLocalStorage = (key, initValue) => {
  // bring in logic via useState with the intial value an anonymous function that returns getLocalValue that will receive the key and initial value
  const [value, setValue] = useState(() => {
    return getLocalValue(key, initValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
