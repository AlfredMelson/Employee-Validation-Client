import { Route, Routes } from 'react-router-dom'
import { Filter, Header, List } from '../components/administration'
import useItemsProvider from '../components/administration/useItemsProvider'
import ErrorBlock from '../components/ErrorBlock'
import LoadingScreen from '../components/LoadingScreen'
import { DefinedRouting } from '../constants'
import { useUserContext } from '../context/UserContext'
import reusedEmail from '../utils/reusedEmail'

export default function AdminDashboard() {
  const {
    errorMessage: userProviderErrorMessage,
    isLoading: userDataIsLoading,
    username
  } = useUserContext()

  const { items, isLoading, errorMessage } = useItemsProvider()

  if (isLoading || userDataIsLoading) {
    return <LoadingScreen />
  }

  if (userProviderErrorMessage || errorMessage) {
    return <ErrorBlock errorMessage={userProviderErrorMessage || errorMessage} />
  }

  return (
    <div className='container'>
      <Header items={items} username={username} />
      <Filter items={items} />
      <Routes>
        <Route path={DefinedRouting.Users}>
          <List items={items} />
        </Route>
        <Route path={DefinedRouting.Weak}>
          <List items={items} />
        </Route>
        <Route path={DefinedRouting.Reused}>
          <List items={items.filter(item => reusedEmail(item, items))} />
        </Route>
      </Routes>
    </div>
  )
}
