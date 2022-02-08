import { Redirect, BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from './components/Login/Login'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import { UserContextProvider } from './components/UserContext'
import UsersManagement from './components/UsersManagement/UsersManagement'
import { Routes } from './constants'

import './style/styles.scss'

const App = () => (
  <Router>
    <Switch>
      <PublicRoute path={Routes.Login} component={Login} />
      <PrivateRoute
        path={Routes.Users}
        component={() => (
          <UserContextProvider>
            <UsersManagement />
          </UserContextProvider>
        )}
      />
      <PrivateRoute path={Routes.Root} component={() => <Redirect to={Routes.Users} />} />
    </Switch>
  </Router>
)

export default App
