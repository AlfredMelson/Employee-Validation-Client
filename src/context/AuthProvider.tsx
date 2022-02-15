import { createContext, ReactNode, useState } from 'react'

const AuthContext = createContext<Record<string, any>>({})

interface IAuthProvider {
  children: ReactNode
}

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [auth, setAuth] = useState({})
  const [adminUsername, setAdminUsername] = useState<string>('')
  const [accessToken, setAccessToken] = useState<string>('')

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, adminUsername, setAdminUsername, accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
