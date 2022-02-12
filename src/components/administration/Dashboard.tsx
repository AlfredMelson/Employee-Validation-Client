import { Route, Routes } from 'react-router-dom'
import { useUserContext } from '../../context/UserContext'
import { DefinedRouting } from '../../utils'
import reusedEmail from '../../utils/reusedEmail'
import ErrorBlock from '../ErrorBlock'
import LoadingScreen from '../LoadingScreen'
import useItemsProvider from './useItemsProvider'
import { Filter, Header, List } from '.'

export default function Dashboard() {
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
