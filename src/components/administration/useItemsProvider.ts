import { useEffect, useState } from 'react'
import getUserItems, { IItem } from '../../services/getUserItems'

const useItemsProvider = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string>()
  const [items, setItems] = useState<Array<IItem>>([])

  useEffect(() => {
    async function requestUserItems() {
      setIsLoading(true)
      await getUserItems().then(setItems).catch(setErrorMessage)
      setIsLoading(false)
    }
    requestUserItems()
  }, [])

  return {
    isLoading,
    errorMessage,
    items
  }
}

export default useItemsProvider
