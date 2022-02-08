import { Route, Switch } from 'react-router-dom'
import { Routes } from '../../constants'
import itemHasReusedPassword from '../../utils/itemHasReusedPassword'
import ErrorBlock from '../ErrorBlock'
import LoadingScreen from '../LoadingScreen'
import { useUserContext } from '../UserContext'
import Filter from './components/Filter/Filter'
import Header from './components/Header/Header'
import List from './components/List/List'
import useItemsProvider from './useItemsProvider'

const UsersManagement = () => {
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
      <Switch>
        <Route exact path={Routes.Users}>
          <List items={items} />
        </Route>
        <Route path={Routes.Weak}>
          <List items={items} />
        </Route>
        <Route path={Routes.Reused}>
          <List items={items.filter(item => itemHasReusedPassword(item, items))} />
        </Route>
      </Switch>
    </div>
  )
}

export default UsersManagement
